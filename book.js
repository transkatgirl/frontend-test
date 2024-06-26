// TODO: Sandbox ePubs

// TODO: Automatically close <details> elements

// TODO: Automatically open first level of <details> elements

// TODO: Add function to get/restore progress within a textbook

// TODO: Add annotations support

// TODO: Add CSS support for ePub

// TODO: Review ePub spec to evaluate correctness of implementation

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
	this.pdfScriptingManager.setViewer(this.pdfViewer);
	this.eventBus.on("pagesinit", () => {
		this.pdfViewer.currentScaleValue = "page-width";
	});

	this.loadPdf = function (pdf) {
		this.pdfViewer.setDocument(pdf);
		this.pdfLinkService.setDocument(pdf, null);
	};
}

function initalizedContentLister(container) {
	this.container = container;

	this.render = function (data, isClickableCallback, onClick) {
		this.container.innerHTML = "";

		function build_list(data, isClickableCallback, onClick) {
			const root = document.createElement("ol");

			data.forEach((item) => {
				const item_container = document.createElement("li");

				let item_text_container;
				if (isClickableCallback && isClickableCallback(item) && onClick) {
					item_text_container = document.createElement("a");
					item_text_container.addEventListener("click", (event) => onClick(item));
				} else if (item.href) {
					item_text_container = document.createElement("a");
					item_text_container.href = item.href;
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

const toc_container = document.getElementById("book_toc");
const section_container = document.getElementById("book_section");

const pdf_viewer = new initalizedPdfViewer(
	new URL(dependency_prefix + "/pdfjs", window.location).href,
	section_container,
);

const content_lister = new initalizedContentLister(toc_container);

class Textbook {
	#type;
	#url;
	#inner;
	constructor (type, url) {
		this.#url = url;
		this.#type = type;
		this.#inner = null;
	}
	load() {
		switch (this.#type) {
			case "epub":
			case "epub_unpacked":
				if (this.#type == "epub_unpacked") {
					if (this.#url.substr(this.#url.length - 1) != "/") {
						this.#url = this.#url + "/";
					};

					this.#inner = {
						book: ePub(this.#url, {
							openAs: "directory"
						}),
					};
				} else {
					this.#inner = {
						book: ePub(this.#url),
					};
				};

				this.#inner.rendition = this.#inner.book.renderTo(section_container, {
					method: "default",
					manager: "continuous",
					view: "iframe",
					flow: "scrolled-doc",
					width: "100%",
					height: "100%",
					spread: "none",
					allowScriptedContent: true
				});
				this.#inner.rendition.display();

				this.#inner.book.loaded.navigation.then((navigation) => {
					this.#inner.navigation = navigation;

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
				});

				this.#inner.book.loaded.metadata.then((metadata) => {
					this.#inner.metadata = metadata;

					// TODO
				});

				break;
			case "pdf":
				this.#inner = {
					loadingTask: pdfjsLib.getDocument({
						url: this.#url,
						cMapUrl: pdf_viewer.pdfjsPrefix + "/cmaps/",
						cMapPacked: true,
						enableXfa: true,
					}),
				};
				this.#inner.loadingTask.promise.then((pdf) => {
					this.#inner.document = pdf;
					pdf_viewer.loadPdf(this.#inner.document);
					this.#inner.document.getOutline().then((outline) => {
						this.#inner.outline = outline;

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
									document.getPageIndex(item[0]).then((pageNumber) => {
										pdf_viewer.pdfViewer.scrollPageIntoView({
											pageNumber: pageNumber + 1,
											item,
										});
									});
								}
							}
						);
					});

					this.#inner.document.getMetadata().then((metadata) => {
						this.#inner.metadata = metadata;

						// TODO
					});
				});

				break;
			default:
				break;

		}

		// ! Temporary

		this.test = this.#inner;

	}
	unload() {
		switch (this.#type) {
			case "epub":
			case "epub_unpacked":
				this.#inner.book.destroy();
				break;
			case "pdf":
				pdf_viewer.pdfViewer.setDocument(null);
				pdf_viewer.pdfLinkService.setDocument(null);
				this.#inner.loadingTask.destroy();

				break;
			default:
				break;
		}
		this.#inner = null;
		content_lister.reset();
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

textbook1.load();