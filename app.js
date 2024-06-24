
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

		case "conclusion":
			this.chapter_type = "conclusion";

		default:
			this.chapter_type = "chapter";
	}

	this.sections = new Map();
	for (const section of sections) {
		const section_object = new Section(section.section_type, section.name, section.url, section.completable, section.is_complete);

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
				case "introduction" | "conclusion" | "assignment" | "summary":
					list = document.createElement("ul");

				default:
					list = document.createElement("ol");
			}

			for (const section of value) {
				const list_item = document.createElement("li");
				list_item.appendChild(section.build_link(base_url, target));

				list.appendChild(list_item);
			}

			switch (key) {
				case "assignment" | "summary":
					const details = document.createElement("details");

					const summary = document.createElement("summary");
					summary.innerText = key;
					details.appendChild(summary);
					details.appendChild(list);

					groupings.set(key, details);

				default:
					groupings.set(key, list);
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

		case "conclusion":
			this.section_type = "conclusion";
			this.completable = Boolean(is_completable);

		case "assignment":
			this.section_type = "assignment";
			this.completable = true;

		case "summary":
			this.section_type = "summary";
			this.completable = false;

		default:
			this.section_type = "section";
			this.completable = Boolean(is_completable);
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
	new Section(undefined, "testaa", "testaa", false),
	new Section(undefined, "test", "test", false)
];

let chapter = new Chapter(undefined, "test", sections);

document.body.appendChild(chapter.build_content_listing(false));*/


/*let section = new Section(undefined, "test", "yeet", false, false);

document.body.appendChild(section.build_link());*/