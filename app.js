
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
		for (const grouping in Object.entries(this.sections)) {
			for (const section of grouping) {
				if (section.completable && !section.is_complete) {
					return false;
				}
			}
		}

		return true;
	};

	this.build_content_listing = function () {

	};
}

function Section(section_type = "section", name, base_url, content_url, is_completable = true, is_complete = false) {
	this.name = String(name);
	this.url = new URL(content_url, base_url);

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