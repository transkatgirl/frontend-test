
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

function Chapter(chapter_type = "chapter", name, base_url, sections = []) {
	this.name = name;

	switch (chapter_type) {
		case "introduction":
			this.chapter_type = "introduction";

		case "conclusion":
			this.chapter_type = "conclusion";

		default:
			this.chapter_type = "chapter";
	}

	this.sections = {};
	for (const section of sections) {
		const section_object = new Section(section.section_type, section.name, base_url, section.url, section.is_completable, section.is_complete);

		if (!Object.values(this.sections).includes(section_object.section_type)) {
			this.sections[section_object.section_type] = [];
		}

		this.sections[section_object.section_type].append(section_object);
	}

	this.is_complete = function () {
		Object.entries(this.sections).forEach((value) => {
			for (const section of value) {
				if (section.completable && !section.is_complete) {
					return false;
				}
			}
		});

		return true;
	};

	this.build_content_listing = function () {
		levels = {};

		Object.entries(this.sections).forEach((value, key) => {
			let level;

			switch (key) {
				case "introduction" | "conclusion":
					level = document.createElement("ul");

				case "assignment" | "summary":
					level = document.createElement("details");

				default:
					level = document.createElement("ol");
			}

			for (const section of value) {
				// TODO
			}

			//levels["test"] = aaaa;
		});

		/*const listing = document.createElement("div");

		listing.appendChild(level_intro);
		listing.appendChild(level_main);
		listing.appendChild(level_conclu);
		listing.appendChild(level_supp);*/
	};
}

function Section(section_type = "section", name, content_url, is_completable = true, is_complete = false) {
	this.name = String(name);
	this.url = String(content_url);

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

/*let section = new Section(undefined, "test", "yeet", false, false);

document.body.appendChild(section.build_link());*/