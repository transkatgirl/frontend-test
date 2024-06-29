const dependency_prefix = "./dependencies";

function initalizedPdfViewer(pdfjsPrefix, viewerContainer) {
	const loadPromise = Promise.all([
		new Promise((resolve, reject) => {
			let scriptElement1 = document.createElement("script");
			scriptElement1.setAttribute("type", "module");
			scriptElement1.setAttribute("src", pdfjsPrefix + "/build/pdf.min.mjs");
			scriptElement1.async = true;
			scriptElement1.onload = resolve;
			window.document.head.appendChild(scriptElement1);
		}),
		new Promise((resolve, reject) => {
			let scriptElement2 = document.createElement("script");
			scriptElement2.setAttribute("type", "module");
			scriptElement2.setAttribute("src", pdfjsPrefix + "/web/pdf_viewer.mjs");
			scriptElement2.async = true;
			scriptElement2.onload = resolve;
			window.document.head.appendChild(scriptElement2);
		}),
	]);

	let linkElement = document.createElement("link");
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
		});
		this.eventBus.on("pagechanging", () => {
			this.pageCallback();
		});

		this.loadPdf = function (pdf, pageCallback) {
			this.pageCallback = pageCallback;
			this.pdfViewer.setDocument(pdf);
			this.pdfLinkService.setDocument(pdf, null);
		};

		this.resize = function () {
			this.pdfViewer.currentScaleValue = "page-width";
			this.pdfViewer.update();
		};

		this.reset = function () {
			this.pdfViewer.setDocument(null);
			this.pdfLinkService.setDocument(null);
			this.pageCallback = null;
		};

		return this;
	});
}

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

	let match = flatten(book.navigation.toc)
		.filter((chapter) => {
			return book.canonical(chapter.href).includes(book.canonical(locationHref));
		}, null)
		.reduce((result, chapter) => {
			const locationAfterChapter = EpubCFI.prototype.compare(location_cfi, getCfiFromHref(book, chapter.href)) > 0;
			return locationAfterChapter ? chapter : result;
		}, null);

	return match;
};

function contentLister(container) {
	this.container = container;

	this.render = function (data, isClickableCallback, onClick) {
		this.container.innerHTML = "";

		function build_list(data, isClickableCallback, onClick) {
			const root = document.createElement("ol");

			data.forEach((item) => {
				if (!(item.label || item.title)) {
					return;
				}

				const item_container = document.createElement("li");

				let item_text_container;
				if (isClickableCallback && isClickableCallback(item) && onClick) {
					item_text_container = document.createElement("a");
					item_text_container.setAttribute("tabindex", 0);
					item_text_container.setAttribute("role", "button");
					item_text_container.addEventListener("click", (event) => {
						onClick(item);
						event.preventDefault();
					});
					item_text_container.addEventListener("keydown", (event) => {
						if (event.code == "Enter") {
							onClick(item);
							event.preventDefault();
						}
					});
				} else {
					item_text_container = document.createElement("span");
				}
				if (item.label) {
					item_text_container.innerText = item.label;
				}
				if (item.title) {
					item_text_container.innerText = item.title;
				}
				if (item.id) {
					item_text_container.setAttribute("id", item.id);
				} else if (item.dest) {
					item_text_container.setAttribute("id", JSON.stringify(item.dest));
				}

				if ((item.subitems && item.subitems.length > 0 && (item.subitems.length > 1 || (item.subitems[0].label || item.subitems[0].title))) || (item.items && item.items.length > 0 && (item.items.length > 1 || (item.items[0].label || item.items[0].title)))) {
					const item_subcontainer = document.createElement("details");

					const subcontainer_title = document.createElement("summary");
					subcontainer_title.appendChild(item_text_container);
					item_subcontainer.appendChild(subcontainer_title);

					if (item.subitems) {
						item_subcontainer.appendChild(build_list(item.subitems, isClickableCallback, onClick));
					}
					if (item.items) {
						item_subcontainer.appendChild(build_list(item.items, isClickableCallback, onClick));
					}

					item_container.appendChild(item_subcontainer);
				} else {
					item_container.appendChild(item_text_container);
				}

				root.appendChild(item_container);
			});

			return root;
		}

		this.container.appendChild(build_list(data, isClickableCallback, onClick));
	};

	this.styles = document.createElement("style");
	window.document.head.appendChild(this.styles);

	this.reset = function () {
		this.container.innerHTML = "";
		this.styles.innerHTML = "";
	};

	this.reset();
}

const title_container = document.getElementById("contentTitle");
const toc_container = document.getElementById("contentListing");
const section_container = document.getElementById("contentViewer");

let pdf_viewer;
let pdfPromise;

const content_lister = new contentLister(toc_container);

class Textbook {
	#inner;
	constructor (type, url, { sandbox = true, customCssPath }) {
		this.url = url;
		this.type = type;
		this.#inner = null;
		this.sandbox = sandbox;
		this.customCssPath = customCssPath;

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

					// Note: Use book.locations.save() and book.locations.load() to cache location data
					/*this.#inner.locationPromise = this.#inner.book.locations.generate(150).then((locations) => {
						this.#inner.locations = locations;
					});*/

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
	render() {
		switch (this.type) {
			case "epub":
			case "epub_unpacked":
				let options = {
					//manager: "continuous",
					view: "iframe",
					flow: "scrolled-doc",
					width: "100%",
					height: "100%",
					spread: "none",
					//offset: 1000,
					allowScriptedContent: !this.sandbox
				};

				this.#inner.rendition = this.#inner.book.renderTo(section_container, options);
				if (this.customCssPath) {
					this.#inner.rendition.themes.register(this.customCssPath);
				}
				this.#inner.resizeObserver = new ResizeObserver((event) => {
					this.#inner.rendition.resize();
				});
				this.#inner.rendition.display().then(() => {
					this.#inner.resizeObserver.observe(section_container);

					//this.#inner.locationPromise.then(() => {
					this.#inner.rendition.on('locationChanged', (location) => {
						if (location.start) {
							this.location_tag = location.start;

							/*if (location.percentage > 0) {
								this.percentage = location.percentage * 100;
							}*/
							if (location.href) {
								const chapter = getChapter(this.#inner.book, { location_href: location.href, location_cfi: location.start });
								if (chapter.id) {
									content_lister.styles.innerHTML = "#" + CSS.escape(chapter.id) + " {font-weight: bold}";

									const active = window.document.getElementById(chapter.id);

									let currentItem = active.parentElement.parentElement;
									while (currentItem.parentElement != toc_container) {
										currentItem = currentItem.parentElement;

										if (currentItem.tagName == "DETAILS") {
											currentItem.setAttribute("open", "");
										}
									}
								}
							}
						}
					});
					//});
				});

				content_lister.render(
					this.#inner.navigation,
					(item) => item.href,
					(item) => {
						if (item.href) {
							this.#inner.rendition.display(item.href);
						}
					}
				);

				break;
			case "pdf":
				pdf_viewer.loadPdf(this.#inner.document, () => {
					this.percentage = (pdf_viewer.pdfViewer.currentPageNumber / pdf_viewer.pdfViewer.pagesCount) * 100;
				});

				const document = this.#inner.document;
				content_lister.render(
					this.#inner.outline,
					(item) => item.dest,
					(item) => {
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
				);

				this.#inner.resizeObserver = new ResizeObserver((event) => {
					pdf_viewer.resize();
				});
				this.#inner.resizeObserver.observe(section_container);

				break;
			default:
				break;
		}

		if (this.title) {
			title_container.innerText = this.title;
		}

		if (this.language) {
			title_container.setAttribute("lang", this.language);
			section_container.setAttribute("lang", this.language);
			toc_container.setAttribute("lang", this.language);
		}
	}
	importLocationTag(tag) {
		switch (this.type) {
			case "epub":
			case "epub_unpacked":
				this.#inner.rendition.display(tag);
				break;
			case "pdf":
				break;
			default:
				break;
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
		this.#inner = null;
		title_container.innerText = null;
		content_lister.reset();
		title_container.removeAttribute("lang");
		section_container.removeAttribute("lang");
		toc_container.removeAttribute("lang");
	}
}