
function Course(name, description, books, is_marked_complete) {
	this.name = name;
	this.description = description;
	this.books = books;
	this.is_marked_complete = is_marked_complete;
	this.build_course_card = function () {

	};
	this.get_progress = function () {

	};

}

function Book(name, description, chapters) {
	this.name = name;
	this.description = description;
	this.chapters = chapters;

	this.get_progress = function () {

	};

	this.build_content_listing = function () {

	};
}

function Chapter(chapter_type = "chapter", name, sections = []) {
	this.name = name;

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
		section_object = section;

		if (!this.sections.has(section_object.section_type)) {
			this.sections.set(section_object.section_type, []);
		}

		this.sections.get(section_object.section_type).push(section_object);
	}

	this.is_complete = function () {
		for (const [key, value] of Object.entries(this.sections)) {
			for (const section of value) {
				if (section.completable && !section.is_complete) {
					return false;
				}
			}
		}

		return true;
	};

	this.build_content_listing = function (flatten = false, base_url, target) {
		if (flatten && this.sections.size == 1 && this.sections.values[0].length == 1) {
			return this.sections.values[0][0].build_link(base_url, target);
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
				list_item.appendChild(section.build_link(base_url, target));

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

		return root;
	};
}

function Section(section_type = "section", name, url, is_completable = true, is_complete = false) {
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

	if (this.completable) {
		this.is_complete = Boolean(is_complete);
	}

	this.build_link = function (base_url, target) {
		const link = document.createElement("a");
		if (base_url) {
			link.setAttribute("href", new URL(this.url, base_url));
		} else {
			link.setAttribute("href", this.url);
		}
		if (target) {
			link.setAttribute("target", target);
		}
		link.textContent = this.name;

		if (this.completable) {
			const checkbox = document.createElement("input");
			checkbox.setAttribute("type", "checkbox");

			if (this.is_complete) {
				checkbox.setAttribute("checked", "");
			}

			checkbox.addEventListener("change", (event) => {
				// TODO
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
	new Section("summary", "testaa", "testaa", false),
	new Section(undefined, "test", "test", false)
];

let chapter = new Chapter(undefined, "test", sections);

document.body.appendChild(chapter.build_content_listing(false));*/


/*let section = new Section(undefined, "test", "yeet", false, false);

document.body.appendChild(section.build_link());*/