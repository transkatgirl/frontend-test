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

//

/*
TODO: Fix race conditions in Textbook class

course1.load({})
.then(() => course2.load({}))
.then(() => course1.load({}));
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
	#positionTag;
	constructor ({ type, url, interactive = false }, { chapters = [] }, { positionTag, completed = [] }) {
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

		if (positionTag) {
			this.#positionTag = String(positionTag);
		}
		this.chapters = chapters;
		this.completed = new Set(completed);
	}
	prefetch() {
		if ((!this.#textbook && !this.#textbookPromise) || (this.#textbook && this.#textbook.destroyed)) {
			this.#textbookPromise = new Textbook(this.type, this.url, this.interactive);
		}
	}
	getInner() {
		// ! Temporary
		return this.#textbook;
	}
	#addListingLinkCheckbox(element, completed, callback) {
		const checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		if (completed) {
			checkbox.setAttribute("checked", "");
		}
		if (callback) {
			checkbox.addEventListener("change", callback);
		}
		element.parentElement.appendChild(checkbox);

		return checkbox;
	}
	#updateCompleted(id, isCompleted) {
		if (isCompleted && !this.completed.has(id)) {
			this.completed.add(id);
		} else if (!isCompleted && this.completed.has(id)) {
			this.completed.delete(id);
		}
	}
	#updateChapterCompletion(chapter, chapterCheckbox) {
		console.log(chapter);

		for (let section of chapter.sections) {
			if (typeof section == "string") {
				if (!this.completed.has(section)) {
					this.#updateCompleted(chapter.id, false);
					chapterCheckbox.checked = false;
					return;
				}
			} else {
				let sectionGroup = section;

				for (let section of sectionGroup) {
					if (!this.completed.has(section)) {
						this.#updateCompleted(chapter.id, false);
						chapterCheckbox.checked = false;
						return;
					}
				}
			}
		}

		this.#updateCompleted(chapter.id, true);
		chapterCheckbox.checked = true;
	}
	#buildListingProgressTracker() {
		for (const chapter of this.chapters) {
			const element = document.getElementById(chapter.id);

			const chapterCheckbox = this.#addListingLinkCheckbox(element, this.completed.has(chapter.id), (event) => {
				this.#updateCompleted(chapter.id, event.target.checked);
			});

			if (chapter.sections) {
				for (let section of chapter.sections) {
					if (typeof section == "string") {
						const element = document.getElementById(section);

						this.#addListingLinkCheckbox(element, this.completed.has(section), (event) => {
							this.#updateCompleted(section, event.target.checked);
							this.#updateChapterCompletion(chapter, chapterCheckbox);
						});
					} else {
						let sectionGroup = section;

						for (let section of sectionGroup) {
							const element = document.getElementById(section);

							this.#addListingLinkCheckbox(element, this.completed.has(section), (event) => {
								this.#updateCompleted(section, event.target.checked);
								this.#updateChapterCompletion(chapter, chapterCheckbox);
							});
						}
					}
				}
			}
		}
	}
	get completion() {
		let completion = [];

		for (const chapter of this.chapters) {
			if (this.completed.has(chapter.id)) {
				completion.push(1);
			} else if (chapter.sections) {
				let chapterCompletionValue = 0;
				let chapterCompletionItems = 0;

				for (let section of chapter.sections) {
					if (typeof section == "string") {
						if (this.completed.has(section)) {
							chapterCompletionValue += 1;
						}
					} else {
						let sectionGroup = section;
						let sectionGroupCompletionValue = 0;
						let sectionGroupCompletionItems = 0;

						for (let section of sectionGroup) {
							if (this.completed.has(section)) {
								sectionGroupCompletionValue += 1;
							}
							sectionGroupCompletionItems += 1;
						}

						if (sectionGroupCompletionItems > 0) {
							chapterCompletionValue += sectionGroupCompletionValue / sectionGroupCompletionItems;
						}
					}
					chapterCompletionItems += 1;
				}

				if (chapterCompletionItems > 0) {
					completion.push(chapterCompletionValue / chapterCompletionItems);
				} else {
					completion.push(0);
				}

			} else {
				completion.push(0);
			}
		}

		return completion;
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
			activeTextbook.render(cssUrl, this.#positionTag).then(() => {
				this.#buildListingProgressTracker();
			});
		});
	}
	export() {
		if (this.#textbook.rendered) {
			this.#positionTag = this.#textbook.location;
		}

		return {
			bookFile: {
				type: this.type,
				url: this.url,
				interactive: this.interactive,
			},
			chapters: this.chapters,
			progressData: {
				positionTag: this.#positionTag,
				completed: Array.from(this.completed),
			}
		};
	}
}

let course1 = new CourseBook(
	{ url: "./textbook-scraper/test.epub/", interactive: false },
	{
		"chapters": [
			{
				"id": "ch01.xhtml#ch1",
				"sections": [
					"ch01.xhtml#ch01lev2",
					"ch01.xhtml#ch01lev15",
					"ch01.xhtml#ch01lev25",
					"ch01.xhtml#ch01lev45",
					"ch01.xhtml#ch01lev62",
					[
						"ch01.xhtml#ch01lev63",
						"ch01.xhtml#ch01lev64",
						"ch01.xhtml#ch01lev65"
					]

				]
			},
			{
				"id": "ch02.xhtml#ch2",
			},
			{
				"id": "ch03.xhtml#ch3",
			},
			{
				"id": "ch04.xhtml#ch4",
			},
			{
				"id": "ch05.xhtml#ch5",
			},
			{
				"id": "ch06.xhtml#ch6",
			},
			{
				"id": "ch07.xhtml#ch7",
			},
			{
				"id": "ch08.xhtml#ch8",
			},
			{
				"id": "ch09.xhtml#ch9",
			},
			{
				"id": "ch10.xhtml#ch10",
			}
		]
	},
	{
		completed: [
			"ch02.xhtml#ch2"
		],
	}
);

let course2 = new CourseBook({ url: "./textbook-scraper/alice.epub", interactive: false }, [], {});

let course3 = new CourseBook({ url: "./textbook-scraper/test.pdf", interactive: false }, [], {});

let course4 = new CourseBook({ url: "/textbook-scraper/math.pdf", interactive: false }, [], {});

course1.load({});
course2.prefetch();
course3.prefetch();
course4.prefetch();