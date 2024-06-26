// TODO: Sandbox ePubs

// TODO: Automatically close <details> elements

const dependency_prefix = "./dependencies";

const pdfjs_prefix = dependency_prefix + "/pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjs_prefix + "/build/pdf.worker.mjs";



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
						cMapUrl: pdfjs_prefix + "/cmaps/",
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
				this.#inner.eventBus = new pdfjsViewer.EventBus();
				this.#inner.pdfLinkService = new pdfjsViewer.PDFLinkService({
					eventBus: this.#inner.eventBus,
				});
				this.#inner.pdfFindController = new pdfjsViewer.PDFFindController({
					eventBus: this.#inner.eventBus,
					linkService: this.#inner.pdfFindController,
				});
				this.#inner.pdfScriptingManager = new pdfjsViewer.PDFScriptingManager({
					eventBus: this.#inner.eventBus,
					sandboxBundleSrc: pdfjs_prefix + "/build/pdf.sandbox.min.mjs",
				});
				this.#inner.pdfSinglePageViewer = new pdfjsViewer.PDFSinglePageViewer({
					container: section_container,
					eventBus: this.#inner.eventBus,
					linkService: this.#inner.pdfLinkService,
					findController: this.#inner.pdfFindController,
					scriptingManager: this.#inner.pdfScriptingManager,
				});
				this.#inner.pdfLinkService.setViewer(this.#inner.pdfSinglePageViewer);
				this.#inner.pdfScriptingManager.setViewer(this.#inner.pdfSinglePageViewer);
				this.#inner.eventBus.on("pagesinit", () => {
					this.#inner.pdfSinglePageViewer.currentScaleValue = "page-width";
				});

				this.#inner.loadingTask.promise.then((pdf) => {
					this.#inner.pdf = pdf;
					//console.log(pdf);

					this.#inner.pdfSinglePageViewer.setDocument(this.#inner.pdf);
					this.#inner.pdfLinkService.setDocument(this.#inner.pdf, null);
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