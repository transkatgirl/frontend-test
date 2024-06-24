
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

function Chapter(chapter_type = "chapter", name, sections = [], ordering = 0) {
	this.name = name;
	this.sections = sections;

	switch (chapter_type) {
		case "introduction":
			this.chapter_type = "introduction";

		case "conclusion":
			this.chapter_type = "conclusion";

		default:
			this.chapter_type = "chapter";
	}
	this.ordering = Number(ordering);

	this.get_progress = function () {
		const progress = new Map();
		for (const section of sections) {

		}
	};

	this.build_content_listing = function () {

	};
}

function Section(section_type = "section", name, content, ordering = 0, is_completable = true, is_complete = false) {
	this.name = String(name);
	this.content = content;

	switch (section_type) {
		case "introduction":
			this.section_type = "introduction";
			this.is_completable = Boolean(is_completable);

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
	this.ordering = Number(ordering);

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