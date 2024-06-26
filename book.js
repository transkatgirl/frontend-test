// TODO: Sandbox ePubs

// TODO: Automatically close <details> elements

const dependency_prefix = "./dependencies";

function initalizedPdfViewer(pdfjsPrefix, viewerContainer) {
	this.pdfjsPrefix = pdfjsPrefix;
	pdfjsLib.GlobalWorkerOptions.workerSrc = this.pdfjsPrefix + "/build/pdf.worker.mjs";

	this.eventBus = new pdfjsViewer.EventBus();
	this.pdfLinkService = new pdfjsViewer.PDFLinkService({
		eventBus: this.eventBus,
	});
	this.pdfFindController = new pdfjsViewer.PDFFindController({
		eventBus: this.eventBus,
		linkService: this.pdfLinkService,
	});
	this.pdfScriptingManager = new pdfjsViewer.PDFScriptingManager({
		eventBus: this.eventBus,
		sandboxBundleSrc: this.pdfjsPrefix + "/build/pdf.sandbox.min.mjs",
	});
	this.pdfViewer = new pdfjsViewer.PDFViewer({
		container: viewerContainer,
		eventBus: this.eventBus,
		linkService: this.pdfLinkService,
		findController: this.pdfFindController,
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

const pdf_viewer = new initalizedPdfViewer(
	new URL(dependency_prefix + "/pdfjs-dist", window.location).href,
	document.getElementById("book_section")
);

class Textbook {
	#type;
	#inner;
	constructor (type, url) {
		switch (type) {
			case "epub":
				this.#type = "epub";
				this.#inner = {
					book: ePub(url),
				};
				break;
			case "pdf":
				this.#type = "pdf";
				this.#inner = {
					loadingTask: pdfjsLib.getDocument({
						url,
						cMapUrl: pdf_viewer.pdfjsPrefix + "/cmaps/",
						cMapPacked: true,
						enableXfa: true,
					}),
				};
				break;
			default:
				this.#type = "custom";

				break;
		}

		// ! Temporary
		this.test = this.#inner;
	}
	render(toc_container, section_container) {
		switch (this.#type) {
			case "epub":
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

					function build_nav(nav_items) {
						const root = document.createElement("ol");

						nav_items.forEach((nav_item) => {
							const item_container = document.createElement("li");

							const item_link = document.createElement("a");
							item_link.innerText = nav_item.label;

							item_link.addEventListener("click", (event) => {
								rendition.display(nav_item.href);
							});

							if (nav_item.subitems.length > 0) {
								const item_subcontainer = document.createElement("details");

								const subcontainer_title = document.createElement("summary");
								subcontainer_title.appendChild(item_link);
								item_subcontainer.appendChild(subcontainer_title);


								item_subcontainer.appendChild(build_nav(nav_item.subitems));

								item_container.appendChild(item_subcontainer);
							} else {
								item_container.appendChild(item_link);
							}

							root.appendChild(item_container);

						});

						return root;
					}

					toc_container.appendChild(build_nav(this.#inner.navigation));
				});

				break;
			case "pdf":
				this.#inner.loadingTask.promise.then((pdf) => {
					this.#inner.document = pdf;
					pdf_viewer.loadPdf(this.#inner.document);
				});

				break;
			default:

				break;

		}

	}
	load_section(id) {
		switch (this.#type) {
			case "epub":
				this.#inner.rendition.display(id);
				break;
			case "pdf":
				break;
			default:
				break;
		}
	}
}

const toc_container = document.getElementById("book_toc");
const section_container = document.getElementById("book_section");

//let textbook = new Textbook("epub", "./textbook-scraper/test.epub/OEBPS/9780137675807.opf");

//let textbook = new Textbook("epub", "./textbook-scraper/alice.epub");

let textbook = new Textbook("pdf", "./textbook-scraper/test.pdf");

textbook.render(toc_container, section_container);