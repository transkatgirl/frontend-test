/*let textbook1 = new Textbook("epub_unpacked", "./textbook-scraper/test.epub", { scripting: false });

let textbook2 = new Textbook("epub", "./textbook-scraper/alice.epub", { scripting: true });*/

//let textbook3 = new Textbook("pdf", "./textbook-scraper/test.pdf", {});

//let textbook4 = new Textbook("pdf", "./textbook-scraper/math.pdf", {});

/*
Plans:
- Split textbooks into chapters
- Split chapters into sections
	- Chapters are split into (non-user-facing) section groups, allowing chapter completion to be represented fractionally
	- When all sections in a chapter are marked as completed, the chapter itself is marked as completed as well
	- When marking a chapter/section as completed, all items within it (sections/subsections) are hidden (closing the <details> element)

*/

let activeTextbook;

function unloadActiveCourse() {
	if (activeTextbook) {
		activeTextbook.destroy();
		activeTextbook = null;
	}
}

class CourseBook {
	#textbook;
	#textbookPromise;
	constructor ({ type, url, interactive = false }, chapterMap, { position, percentage, completed = [] }) {
		if (type) {
			if (type == "epub" || type == "pdf" || type == "epub_unpacked") {
				this.type = String(type);
			} else {
				return null;
			}
		} else {
			if (url.toLowerCase().endsWith(".epub")) {
				this.type = "epub";
			} else if (url.toLowerCase().endsWith(".pdf")) {
				this.type = "pdf";
			} else if (url.endsWith("/")) {
				this.type = "epub_unpacked";
			} else {
				return null;
			}
		}
		this.url = String(url);
		this.interactive = Boolean(interactive);

		this.chapterMap = chapterMap;

		this.position = position;
		this.percentage = percentage;
		this.completed = completed;

	}
	prefetch() {
		if ((!this.#textbook && !this.#textbookPromise) || (this.#textbook && this.#textbook.destroyed)) {
			this.#textbookPromise = new Textbook(this.type, this.url, this.interactive);
		}
	}
	load({ cssUrl }) {
		if (!this.#textbook) {
			this.prefetch();
			unloadActiveCourse();
		} else {
			unloadActiveCourse();
			this.prefetch();
		}

		return this.#textbookPromise.then((textbook) => {
			this.#textbook = textbook;

			activeTextbook = this.#textbook;
			activeTextbook.render(cssUrl);

			// TODO
		});
	}

}

let course1 = new CourseBook({ url: "./textbook-scraper/test.epub/", interactive: false }, [], {});

let course2 = new CourseBook({ url: "./textbook-scraper/alice.epub", interactive: false }, [], {});

let course3 = new CourseBook({ url: "./textbook-scraper/test.pdf", interactive: false }, [], {});

let course4 = new CourseBook({ url: "/textbook-scraper/math.pdf", interactive: false }, [], {});

course1.load({});
course2.prefetch();
course3.prefetch();
course4.prefetch();

/*textbook1.then((textbook) => {
	textbook.render();
	//console.log(toc_container);

	const completableSections = ["ch01.xhtml#ch1", "ch02.xhtml#ch2", "ch03.xhtml#ch3", "ch04.xhtml#ch4", "ch05.xhtml#ch5"];

	const completedSections = ["ch01.xhtml#ch1"];

	let tocChapters = toc_container.getElementsByTagName("a");

	for (let chapterLink of tocChapters) {
		const checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");

		if (completableSections.includes(chapterLink.id)) {
			if (completedSections.includes(chapterLink.id)) {
				checkbox.setAttribute("checked", "");
			}
			chapterLink.parentElement.appendChild(checkbox);
		}
	}

	// TODO: Import and export textbook.location_tag

	console.log(tocChapters);
	// toc_container.children[0].children
});*/