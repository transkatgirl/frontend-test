

const userProgressTracker = {
	inner: new Map(), // ! Temporary
	get_item_completion(item_id) {
		// ! Temporary
		if (!this.inner.has(item_id)) {
			this.inner.set(item_id, false);
			return false;
		}

		return this.inner.get(item_id);
	},
	set_item_completion(item_id, is_complete) {
		// ! Temporary
		this.inner.set(item_id, Boolean(is_complete));
	}
};

/*
Idea for progress tracking: Every Course / Book / Chapter / Section has a globally unique ID
This ID can be used to map between a Course / Book / Chapter / Section, and it's completion, using a getCompletionStatus function.
*/

function Course(uuid = self.crypto.randomUUID(), name, description, books) {
	this.uuid = uuid;
	this.name = String(name);
	this.description = String(description);
	this.books = books;

	this.build_course_card = function () {

	};

	this.get_progress = function () {

	};

}

function Book(uuid = self.crypto.randomUUID(), name, description, chapters) {
	this.uuid = uuid;
	this.name = String(name);
	this.description = String(description);
	this.chapters = chapters;

	this.get_progress = function () {

	};

	this.build_content_listing = function () {

	};
}

function Chapter(uuid = self.crypto.randomUUID(), name, sections = [], chapter_type = "chapter") {
	this.uuid = uuid;
	this.name = String(name);

	switch (chapter_type) {
		case "introduction":
			this.chapter_type = "introduction";
			break;
		case "conclusion":
			this.chapter_type = "conclusion";
			break;
		default:
			this.chapter_type = "chapter";
			break;
	}

	this.sections = new Map();
	for (const section of sections) {
		if (!this.sections.has(section.section_type)) {
			this.sections.set(section.section_type, []);
		}

		this.sections.get(section.section_type).push(section);
	}

	this.is_complete = function () {
		for (const [key, value] of this.sections.entries()) {
			for (const section of value) {
				if (section.completable && !userProgressTracker.get_item_completion(section.uuid)) {
					return false;
				}
			}
		}

		return true;
	};

	this.is_started = function () {
		for (const [key, value] of this.sections.entries()) {
			for (const section of value) {
				if (section.completable && userProgressTracker.get_item_completion(section.uuid)) {
					return true;
				}
			}
		}

		return false;
	};

	this.build_content_listing = function (flatten = false, target) {
		if (flatten && this.sections.size == 1 && this.sections.values[0].length == 1) {
			return this.sections.values[0][0].build_link(target);
		}

		const groupings = new Map();

		for (const [key, value] of this.sections.entries()) {
			let list;

			switch (key) {
				case "introduction":
				case "conclusion":
				case "assignment":
				case "summary":
					list = document.createElement("ul");
					break;
				default:
					list = document.createElement("ol");
					break;
			}

			for (const section of value) {
				const list_item = document.createElement("li");
				list_item.appendChild(section.build_link(target));

				list.appendChild(list_item);
			}

			switch (key) {
				case "assignment":
				case "summary":
					const details = document.createElement("details");
					details.setAttribute("open", "");

					const summary = document.createElement("summary");
					if (key == "assignment") {
						summary.innerText = "Assignments";
					} else if (key == "summary") {
						summary.innerText = "Summary";
					}

					details.appendChild(summary);
					details.appendChild(list);

					groupings.set(key, details);
					break;
				default:
					groupings.set(key, list);
					break;
			}
		}

		const root = document.createElement("div");

		for (const section_type of ["introduction", "section", "conclusion", "summary", "assignment"]) {
			if (groupings.has(section_type)) {
				root.appendChild(groupings.get(section_type));
			}
		}

		/*const item = this;
		root.addEventListener("change", (event) => {
			userProgressTracker.set_item_completion(item.uuid, item.is_complete());
		});*/

		return root;
	};
}

function Section(uuid = self.crypto.randomUUID(), name, url, section_type = "section", is_completable = true) {
	this.uuid = uuid;
	this.name = String(name);
	this.url = String(url);

	switch (section_type) {
		case "introduction":
			this.section_type = "introduction";
			this.completable = Boolean(is_completable);
			break;
		case "conclusion":
			this.section_type = "conclusion";
			this.completable = Boolean(is_completable);
			break;
		case "assignment":
			this.section_type = "assignment";
			this.completable = true;
			break;
		case "summary":
			this.section_type = "summary";
			this.completable = false;
			break;
		default:
			this.section_type = "section";
			this.completable = Boolean(is_completable);
			break;
	}

	this.build_link = function (target) {
		const link = document.createElement("a");
		link.setAttribute("href", this.url);
		if (target) {
			link.setAttribute("target", target);
		}
		link.textContent = this.name;

		if (this.completable) {
			const checkbox = document.createElement("input");
			checkbox.setAttribute("type", "checkbox");

			if (userProgressTracker.get_item_completion(this.uuid)) {
				checkbox.setAttribute("checked", "");
			}

			const item_uuid = this.uuid;
			checkbox.addEventListener("change", (event) => {
				userProgressTracker.set_item_completion(item_uuid, event.target.checked);
			});

			const container = document.createElement("span");
			container.appendChild(link);
			container.appendChild(checkbox);

			return container;
		} else {
			return link;
		}
	};
}

function ProgressMap(map_type, header, footer, contents) {
	this.map_type = map_type;
	this.header = header;
	this.footer = footer;
	this.contents = contents;
	this.build_table = function () {

	};
	this.update_table_contents = function (table) {

	};
}

/*let sections = [
	new Section(undefined, "Section 1", "Section 1", "introduction", true),
	new Section(undefined, "Section 3", "Section 1", "section", true),
	new Section(undefined, "Section 7", "Section 1", "conclusion", true),
	new Section(undefined, "Section 11", "Section 1", "assignment", true),
	new Section(undefined, "Section 2", "Section 1", "introduction", true),
	new Section(undefined, "Section 9", "Section 1", "summary", true),
	new Section(undefined, "Section 12", "Section 1", "assignment", true),
	new Section(undefined, "Section 4", "Section 1", "section", true),
	new Section(undefined, "Section 5", "Section 1", "section", true),
	new Section(undefined, "Section 8", "Section 1", "conclusion", true),
	new Section(undefined, "Section 6", "Section 1", "section", true),
	new Section(undefined, "Section 10", "Section 1", "summary", true),
];

let chapter = new Chapter(undefined, "test", sections, undefined);

document.body.appendChild(chapter.build_content_listing(false));*/


/*

document.body.appendChild(section.build_link());*/