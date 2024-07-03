class CourseBook {
	#completed;
	#timeSpent;
	// Based on coursebook.js
	constructor ({ url, interactive = false, chapters = [] }, { positionTag, completed = [], timeSpent = 0 }) {
		this.url = String(url);
		this.interactive = Boolean(interactive);
		if (chapters && typeof chapters == "object" && Array.isArray(chapters)) {
			this.chapters = chapters;
		} else {
			this.chapters = [];
		}

		if (completed && typeof completed == "object" && Array.isArray(completed)) {
			this.#completed = new Set(completed);
		} else {
			this.#completed = new Set();
		}
		if (timeSpent) {
			this.#timeSpent = Number(timeSpent);
		} else {
			this.#timeSpent = 0;
		}
	}
	// Copied from coursebook.js
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
	// Based on coursebook.js
	get timeSpent() {
		return Number(this.#timeSpent);
	}
}

class Course {
	// TODO
}