// TODO: Add function to get/restore progress within a textbook

// handle navigation.landmarks
// - https://www.w3.org/TR/epub-33/#sec-nav-landmarks


const dependency_prefix = "./dependencies";

function initalizedPdfViewer(pdfjsPrefix, viewerContainer) {
	this.pdfjsPrefix = pdfjsPrefix;
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

	this.eventBus.on("pagesinit", () => {
		this.pdfViewer.currentScaleValue = "page-width";
	});

	this.loadPdf = function (pdf, allowScripts) {
		if (allowScripts) {
			this.pdfScriptingManager.setViewer(this.pdfViewer);
		} else {
			this.pdfScriptingManager.setViewer(null);
		}
		this.pdfViewer.setDocument(pdf);
		this.pdfLinkService.setDocument(pdf, null);
	};

	this.reset = function () {
		this.pdfViewer.setDocument(null);
		this.pdfLinkService.setDocument(null);
	};
}

function initalizedContentLister(container) {
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
					item_text_container.addEventListener("click", (event) => onClick(item));
					item_text_container.addEventListener("keydown", (event) => {
						if (event.code == "Enter") {
							onClick(item);
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

				if ((item.subitems && item.subitems.length > 0) || (item.items && item.items.length > 0)) {
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

	this.reset = function () {
		this.container.innerHTML = "";
	};

	this.reset();
}

const title_container = document.getElementById("book_title");
const toc_container = document.getElementById("book_toc");
const section_container = document.getElementById("book_section");

const pdf_viewer = new initalizedPdfViewer(
	new URL(dependency_prefix + "/pdfjs", window.location).href,
	section_container,
);

const content_lister = new initalizedContentLister(toc_container);

class Textbook {
	#inner;
	constructor (type, url) {
		this.url = url;
		this.type = type;
		this.#inner = null;

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
			default:
				break;
		}
	}
	getInner() {
		// ! Temporary
		return this.#inner;
	}
	render(allowScripts) {
		switch (this.type) {
			case "epub":
			case "epub_unpacked":
				this.#inner.rendition = this.#inner.book.renderTo(section_container, {
					//manager: "continuous",
					view: "iframe",
					flow: "scrolled-doc",
					width: "100%",
					height: "100%",
					spread: "none",
					//offset: 1000,
					allowScriptedContent: allowScripts
				});

				this.#inner.rendition.display();

				const rendition = this.#inner.rendition;
				content_lister.render(
					this.#inner.navigation,
					(item) => item.href,
					(item) => {
						if (item.href) {
							rendition.display(item.href);
						}
					}
				);

				break;
			case "pdf":
				pdf_viewer.loadPdf(this.#inner.document, allowScripts);

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
		this.#inner = null;
		title_container.innerText = null;
		content_lister.reset();
		title_container.removeAttribute("lang");
		section_container.removeAttribute("lang");
		toc_container.removeAttribute("lang");
	}
}

/*

- Progress tracking:
	- ePub: rendition.currentLocation()
		- .start.cfi = location, can be loaded again using rendition.display(location)
	- PDF: TODO

*/

let textbook1 = new Textbook("epub_unpacked", "./textbook-scraper/test.epub");

let textbook2 = new Textbook("epub", "./textbook-scraper/alice.epub");

let textbook3 = new Textbook("pdf", "./textbook-scraper/test.pdf");

let textbook4 = new Textbook("pdf", "./textbook-scraper/math.pdf");

textbook1.then((textbook) => textbook.render(true));