let activeTextbook;
let activeCourse;

function unloadActiveCourse() {
	if (activeCourse) {
		activeCourse._savePositionTag();
		activeCourse = null;
	}
	if (activeTextbook) {
		return activeTextbook.destroy().then(() => {
			activeTextbook = null;
		});
	} else {
		return Promise.resolve();
	}
}

// TODO:
// - Automatically mark sections as complete when scrolling to the next section?
// - Keep track of time spent on each chapter
// - Offer an API for sound effects?
// - Add proper error handling
// - Save/restore ToC scroll position

class CourseBook {
	#textbook;
	#textbookPromise;
	#positionTag;
	#completed;
	constructor ({ url, interactive = false, chapters = [] }, { positionTag, completed = [] }) {
		this.url = String(url);
		this.interactive = Boolean(interactive);
		if (chapters && typeof chapters == "object" && Array.isArray(chapters)) {
			this.chapters = chapters;
		} else {
			this.chapters = [];
		}

		if (positionTag) {
			this.#positionTag = String(positionTag);
		}
		if (completed && typeof completed == "object" && Array.isArray(completed)) {
			this.#completed = new Set(completed);
		} else {
			this.#completed = new Set();
		}
	}
	/*getInner() {
		// ! Temporary
		return this.#textbook;
	}*/
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
		if (isCompleted && !this.#completed.has(id)) {
			this.#completed.add(id);
		} else if (!isCompleted && this.#completed.has(id)) {
			this.#completed.delete(id);
		}
	}
	#updateChapterCompletion(chapter, chapterCheckbox) {
		for (let section of chapter.sections) {
			if (typeof section == "string") {
				if (!this.#completed.has(section)) {
					this.#updateCompleted(chapter.id, false);
					chapterCheckbox.checked = false;
					return;
				}
			} else {
				let sectionGroup = section;

				for (let section of sectionGroup) {
					if (!this.#completed.has(section)) {
						this.#updateCompleted(chapter.id, false);
						chapterCheckbox.checked = false;
						return;
					}
				}
			}
		}

		this.#updateCompleted(chapter.id, true);
		chapterCheckbox.checked = true;
		this.#showNextChapter();
	}
	#showNextChapter(currentChapterId) {
		let isFirstIncompleteChapter = true;
		for (const chapter of this.chapters) {
			const element = document.getElementById(chapter.id);

			const chapterItemContainer = element.parentElement.parentElement;
			const chapterListContainer = element.parentElement.parentElement.parentElement.parentElement.parentElement;

			if (isFirstIncompleteChapter) {
				if (!this.#completed.has(chapter.id)) {
					if (chapterListContainer.tagName == "DETAILS") {
						chapterListContainer.open = true;
					}
					if (chapterItemContainer.tagName == "DETAILS") {
						chapterItemContainer.open = true;
					}
					isFirstIncompleteChapter = false;
				} else {
					if (chapterListContainer.tagName == "DETAILS") {
						chapterListContainer.open = false;
					}
					if (chapterItemContainer.tagName == "DETAILS") {
						chapterItemContainer.open = false;
					}
				}
			} else if (currentChapterId === chapter.id) {
				if (this.#completed.has(chapter.id) && chapterItemContainer.tagName == "DETAILS") {
					chapterItemContainer.open = false;
				}
			} else {
				if (chapterItemContainer.tagName == "DETAILS") {
					chapterItemContainer.open = false;
				}
			}
		}
	}
	#buildListingProgressTracker() {
		for (const chapter of this.chapters) {
			const element = document.getElementById(chapter.id);

			const chapterCheckbox = this.#addListingLinkCheckbox(element, this.#completed.has(chapter.id), (event) => {
				this.#updateCompleted(chapter.id, event.target.checked);
				this.#showNextChapter(chapter.id);
			});

			if (chapter.sections) {
				for (let section of chapter.sections) {
					if (typeof section == "string") {
						const element = document.getElementById(section);

						this.#addListingLinkCheckbox(element, this.#completed.has(section), (event) => {
							this.#updateCompleted(section, event.target.checked);
							this.#updateChapterCompletion(chapter, chapterCheckbox);
						});
					} else {
						let sectionGroup = section;

						for (let section of sectionGroup) {
							const element = document.getElementById(section);

							this.#addListingLinkCheckbox(element, this.#completed.has(section), (event) => {
								this.#updateCompleted(section, event.target.checked);
								this.#updateChapterCompletion(chapter, chapterCheckbox);
							});
						}
					}
				}
			}
		}

		this.#showNextChapter();
	}
	get completion() {
		let completion = [];

		for (const chapter of this.chapters) {
			if (this.#completed.has(chapter.id)) {
				completion.push(1);
			} else if (chapter.sections) {
				let chapterCompletionValue = 0;
				let chapterCompletionItems = 0;

				for (let section of chapter.sections) {
					if (typeof section == "string") {
						if (this.#completed.has(section)) {
							chapterCompletionValue += 1;
						}
					} else {
						let sectionGroup = section;
						let sectionGroupCompletionValue = 0;
						let sectionGroupCompletionItems = 0;

						for (let section of sectionGroup) {
							if (this.#completed.has(section)) {
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
	prefetch() {
		if ((!this.#textbook && !this.#textbookPromise) || (this.#textbook && this.#textbook.destroyed)) {
			this.#textbookPromise = new Textbook(this.url, this.interactive);
		}
	}
	load({ cssUrl }) {
		let unloadPromise;
		if (!this.#textbook) {
			this.prefetch();
			unloadPromise = unloadActiveCourse();
		} else {
			unloadPromise = unloadActiveCourse().then(() => {
				this.prefetch();
			});
		}

		return unloadPromise.then(() => {
			return this.#textbookPromise.then((textbook) => {
				this.#textbook = textbook;

				activeTextbook = this.#textbook;
				activeCourse = this;
				return activeTextbook.render(cssUrl, this.#positionTag).then(() => {
					this.#buildListingProgressTracker();
				});
			});
		});
	}
	_savePositionTag() {
		if (this.#textbook && this.#textbook.rendered) {
			this.#positionTag = this.#textbook.location;
		}
	}
	export() {
		this._savePositionTag();

		return {
			textbook: {
				url: this.url,
				interactive: this.interactive,
				chapters: this.chapters,
			},
			progressData: {
				positionTag: this.#positionTag,
				completed: Array.from(this.#completed),
			}
		};
	}
}

class Course {

}