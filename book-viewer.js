const dependency_prefix = "./dependencies";

function initalizedPdfViewer(pdfjsPrefix, viewerContainer) {
	const loadPromise = Promise.all([
		new Promise((resolve, reject) => {
			const scriptElement1 = document.createElement("script");
			scriptElement1.setAttribute("type", "module");
			scriptElement1.setAttribute("src", pdfjsPrefix + "/build/pdf.min.mjs");
			scriptElement1.async = true;
			scriptElement1.onload = resolve;
			window.document.head.appendChild(scriptElement1);
		}),
		new Promise((resolve, reject) => {
			const scriptElement2 = document.createElement("script");
			scriptElement2.setAttribute("type", "module");
			scriptElement2.setAttribute("src", pdfjsPrefix + "/web/pdf_viewer.mjs");
			scriptElement2.async = true;
			scriptElement2.onload = resolve;
			window.document.head.appendChild(scriptElement2);
		}),
	]);

	const linkElement = document.createElement("link");
	linkElement.setAttribute("rel", "stylesheet");
	linkElement.setAttribute("href", pdfjsPrefix + "/web/pdf_viewer.css");
	window.document.head.appendChild(linkElement);

	this.pdfjsPrefix = pdfjsPrefix;

	return loadPromise.then(() => {
		pdfjsLib.GlobalWorkerOptions.workerSrc = this.pdfjsPrefix + "/build/pdf.worker.mjs";

		this.eventBus = new pdfjsViewer.EventBus();
		this.pdfLinkService = new pdfjsViewer.PDFLinkService({
			eventBus: this.eventBus,
		});
		this.pdfScriptingManager = new pdfjsViewer.PDFScriptingManager({
			eventBus: this.eventBus,
			sandboxBundleSrc: this.pdfjsPrefix + "/build/pdf.sandbox.min.mjs",
		});
		this.pdfViewer = new pdfjsViewer.PDFViewer({
			container: viewerContainer,
			eventBus: this.eventBus,
			linkService: this.pdfLinkService,
			scriptingManager: this.pdfScriptingManager,
		});
		this.pdfLinkService.setViewer(this.pdfViewer);
		this.pdfScriptingManager.setViewer(this.pdfViewer);

		this.eventBus.on("pagesinit", () => {
			this.pdfViewer.currentScaleValue = "page-width";
			this.initCallback();
		});

		this.loadPdf = function (pdf, initCallback) {
			this.pdfViewer.setDocument(pdf);
			this.pdfLinkService.setDocument(pdf, null);
			this.initCallback = initCallback;
		};

		this.resize = function () {
			this.pdfViewer.currentScaleValue = "page-width";
			this.pdfViewer.update();
		};

		this.reset = function () {
			this.pdfViewer.setDocument(null);
			this.pdfLinkService.setDocument(null);
			this.initCallback = null;
		};

		return this;
	});
}
let pdf_viewer;
let pdfPromise;

const EpubCFI = ePub.CFI;

// Copied from https://github.com/futurepress/epub.js/issues/759#issuecomment-1399499918
function flatten(chapters) {
	return [].concat.apply([], chapters.map((chapter) => [].concat.apply([chapter], flatten(chapter.subitems))));
}

// Copied from https://github.com/futurepress/epub.js/issues/759#issuecomment-1399499918
function getCfiFromHref(book, href) {
	const [_, id] = href.split('#');
	const section = book.spine.get(href);
	const el = (id ? section.document.getElementById(id) : section.document.body);
	return section.cfiFromElement(el);
}

// Based on https://github.com/futurepress/epub.js/issues/759#issuecomment-1399499918
function getChapter(book, { location_href, location_cfi }) {
	const locationHref = location_href;

	const match = flatten(book.navigation.toc)
		.filter((chapter) => {
			return book.canonical(chapter.href).includes(book.canonical(locationHref));
		}, null)
		.reduce((result, chapter) => {
			const locationAfterChapter = EpubCFI.prototype.compare(location_cfi, getCfiFromHref(book, chapter.href)) > 0;
			return locationAfterChapter ? chapter : result;
		}, null);

	return match;
};

function metadataDisplayer({ titleContainer, listingContainer, contentContainer }) {
	this.titleContainer = titleContainer;
	this.listingContainer = listingContainer;
	this.contentContainer = contentContainer;

	this.styleContainer = document.createElement("style");
	window.document.head.appendChild(this.styleContainer);

	this._normalizeListingItem = function (item) {
		if (item.title) {
			item.label = item.title;
		}
		if (item.dest && !item.id) {
			item.id = item.dest;
		}
		if (item.items && !item.subitems) {
			item.subitems = item.items;
		}

		if (item.subitems && item.subitems.length > 0) {
			item.hasSubitems = true;
			for (const subitem of item.subitems) {
				if (!subitem.label && !subitem.title) {
					item.hasSubitems = false;
					break;
				}
			}
		} else {
			item.hasSubitems = false;
		}

		return item;
	};

	this._buildListingItemLabel = function (item, isClickableCallback, onClickCallback) {
		let itemTextContainer;

		if (isClickableCallback && isClickableCallback(item) && onClickCallback) {
			itemTextContainer = document.createElement("a");
			itemTextContainer.setAttribute("tabindex", 0);
			itemTextContainer.setAttribute("role", "button");
			itemTextContainer.addEventListener("click", (event) => {
				onClickCallback(item);
				event.preventDefault();
			});
			itemTextContainer.addEventListener("keydown", (event) => {
				if (event.code == "Enter") {
					onClickCallback(item);
					event.preventDefault();
				}
			});
		} else {
			itemTextContainer = document.createElement("span");
		}

		itemTextContainer.innerText = item.label;
		if (item.id) {
			itemTextContainer.setAttribute("id", item.id);
		}

		return itemTextContainer;
	};

	this._buildListing = function (listingData, isClickableCallback, onClickCallback) {
		const root = document.createElement("ol");

		for (const rawItem of listingData) {
			const item = this._normalizeListingItem(rawItem);
			if (!item.label) {
				continue;
			}

			const itemContainer = document.createElement("li");
			const itemTextContainer = this._buildListingItemLabel(item, isClickableCallback, onClickCallback);

			if (item.hasSubitems) {
				const itemSubcontainer = document.createElement("details");

				const itemSubcontainerTitle = document.createElement("summary");
				itemSubcontainerTitle.appendChild(itemTextContainer);
				itemSubcontainer.appendChild(itemSubcontainerTitle);

				itemSubcontainer.appendChild(this._buildListing(item.subitems, isClickableCallback, onClickCallback));

				itemContainer.appendChild(itemSubcontainer);
			} else {
				itemContainer.appendChild(itemTextContainer);
			}

			root.appendChild(itemContainer);
		}

		return root;
	};

	this.render = function (language, title, { listingData, isClickable, onClick }) {
		return new Promise((resolve) => {
			if (language) {
				this.titleContainer.setAttribute("lang", language);
				this.listingContainer.setAttribute("lang", language);
				this.contentContainer.setAttribute("lang", language);
			}

			if (title) {
				this.titleContainer.innerText = title;
			}

			if (listingData) {
				this.listingContainer.appendChild(this._buildListing(listingData, isClickable, onClick));
			}

			this._rendered = true;
			resolve();
		});
	};

	this.highlightActiveItem = function (listingItemId) {
		if (!this._rendered) {
			return;
		}

		this.styleContainer.innerHTML = "#" + CSS.escape(listingItemId) + " {font-weight: bold}";

		let currentElement = window.document.getElementById(listingItemId).parentElement.parentElement;
		while (currentElement.parentElement != this.listingContainer) {
			currentElement = currentElement.parentElement;

			if (currentElement.tagName == "DETAILS") {
				currentElement.setAttribute("open", "");
			}
		}
	};

	this.reset = function () {
		this.titleContainer.removeAttribute("lang");
		this.listingContainer.removeAttribute("lang");

		this.titleContainer.innerHTML = "";
		this.listingContainer.innerHTML = "";
		this.styleContainer.innerHTML = "";

		this.contentContainer.removeAttribute("lang");

		this._rendered = false;
	};

	this.reset();
}

const section_container = document.getElementById("contentViewer");
const metadata_displayer = new metadataDisplayer({
	titleContainer: document.getElementById("contentTitle"),
	listingContainer: document.getElementById("contentListing"),
	contentContainer: section_container,
});

class Textbook {
	#inner;
	constructor (type, url, scripting = false) {
		this.url = url;
		this.type = type;
		this.#inner = null;
		this.scripting = scripting;

		const options = {};
		switch (this.type) {
			case "epub_unpacked":
				if (this.url.substr(this.url.length - 1) != "/") {
					this.url = this.url + "/";
				};
				options.openAs = "directory";
			case "epub":
				return ePub(this.url, options).opened.then((book) => {
					this.#inner = {
						book
					};

					return Promise.all([
						this.#inner.book.loaded.metadata,
						this.#inner.book.loaded.navigation
					]).then(([metadata, navigation]) => {
						this.#inner.metadata = metadata;
						this.#inner.navigation = navigation;

						if (this.#inner.metadata.title) {
							this.title = this.#inner.metadata.title;
						}

						if (this.#inner.metadata.language) {
							this.language = this.#inner.metadata.language;
						}

						return this;
					});
				});
			case "pdf":
				if (!pdfPromise) {
					pdfPromise = new initalizedPdfViewer(
						new URL(dependency_prefix + "/pdfjs", window.location).href,
						section_container,
					).then((resolved) => {
						pdf_viewer = resolved;
					});
				}

				return pdfPromise.then(() => {
					return pdfjsLib.getDocument({
						url: this.url,
						cMapUrl: pdf_viewer.pdfjsPrefix + "/cmaps/",
						cMapPacked: true,
						enableXfa: true,
					}).promise.then((document) => {
						this.#inner = {
							document
						};

						return Promise.all([
							this.#inner.document.getMetadata(),
							this.#inner.document.getOutline()
						]).then(([metadata, outline]) => {
							this.#inner.metadata = metadata;
							this.#inner.outline = outline;

							if (this.#inner.metadata.info.Title) {
								this.title = this.#inner.metadata.info.Title;
							}

							if (this.#inner.metadata.info.Language) {
								this.language = this.#inner.metadata.info.Language;
							}

							return this;
						});
					});
				});
			default:
				break;
		}
	}
	/*getInner() {
		// ! Temporary
		return this.#inner;
	}*/
	render(cssUrl, position) {
		switch (this.type) {
			case "epub":
			case "epub_unpacked":
				this.#inner.rendition = this.#inner.book.renderTo(section_container, {
					view: "iframe",
					flow: "scrolled-doc",
					width: "100%",
					height: "100%",
					spread: "none",
					allowScriptedContent: !this.sandbox
				});
				this.#inner.rendition.themes.register(cssUrl);
				this.#inner.resizeObserver = new ResizeObserver((event) => {
					this.#inner.rendition.resize();
				});
				return this.#inner.rendition.display(position).then(() => {
					this.#inner.resizeObserver.observe(section_container);

					this.#inner.rendition.on('locationChanged', (location) => {
						if (location.start) {
							this.#inner.location_tag = location.start;

							if (location.href) {
								const chapter = getChapter(this.#inner.book, { location_href: location.href, location_cfi: location.start });
								if (chapter.id) {
									metadata_displayer.highlightActiveItem(chapter.id);
								}
							}
						}
					});

					this.rendered = true;

					return metadata_displayer.render(this.language, this.title, {
						listingData: this.#inner.navigation.toc,
						isClickable: (item) => item.href,
						onClick: (item) => {
							if (item.href) {
								this.#inner.rendition.display(item.href);
							}
						}
					});
				});
			case "pdf":
				pdf_viewer.loadPdf(this.#inner.document, () => {
					if (position) {
						pdf_viewer.pdfViewer.scrollPageIntoView({ pageNumber: Number(position) });
					}
				});

				this.#inner.resizeObserver = new ResizeObserver((event) => {
					pdf_viewer.resize();
				});
				this.#inner.resizeObserver.observe(section_container);

				this.rendered = true;

				const document = this.#inner.document;
				return metadata_displayer.render(this.language, this.title, {
					listingData: this.#inner.outline,
					isClickable: (item) => item.dest,
					onClick: (item) => {
						if (typeof item.dest === "string") {
							document.getDestination(item.dest).then((destArray) => {
								document.getPageIndex(destArray[0]).then((pageNumber) => {
									pdf_viewer.pdfViewer.scrollPageIntoView({
										pageNumber: pageNumber + 1,
										destArray,
									});
								});
							});
						} else {
							document.getPageIndex(item.dest[0]).then((pageNumber) => {
								pdf_viewer.pdfViewer.scrollPageIntoView({
									pageNumber: pageNumber + 1,
									destArray: item.dest,
								});
							});
						}
					}
				});
			default:
				break;
		}

		return Promise.resolve();
	}
	get location() {
		if (this.rendered) {
			switch (this.type) {
				case "epub":
				case "epub_unpacked":
					return this.#inner.location_tag;
				case "pdf":
					return pdf_viewer.pdfViewer.currentPageNumber;
				default:
					return null;
			}
		} else {
			return null;
		}
	}
	set location(tag) {
		if (this.rendered) {
			switch (this.type) {
				case "epub":
				case "epub_unpacked":
					this.#inner.rendition.display(tag);
					break;
				case "pdf":
					pdf_viewer.pdfViewer.scrollPageIntoView({ pageNumber: Number(tag) });
					break;
				default:
					break;
			}
		}
	}
	destroy() {
		switch (this.type) {
			case "epub":
			case "epub_unpacked":
				this.#inner.book.destroy();
				break;
			case "pdf":
				pdf_viewer.reset();
				this.#inner.document.destroy();
				break;
			default:
				break;
		}
		if (this.#inner.resizeObserver) {
			this.#inner.resizeObserver.unobserve(section_container);
		}
		this.rendered = false;
		this.#inner = null;
		metadata_displayer.reset();
		this.destroyed = true;
	}
}