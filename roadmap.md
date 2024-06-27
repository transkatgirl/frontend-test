# feature roadmap

## v0 (minimum-viable product)
- ePUB + PDF reader
- course-based progress tracking
	- courses are made up of 1 or more books tied together by JSON files
	- contents of *per-course-map* JSON files:
		- list of courses included
		- representation of course graph (mermaid.js based graph)
		- course map metadata
	- contents of *per-course* JSON files:
		- list of books included
		- course metadata
	- contents of *per-book* JSON files:
		- marking which sections are completable
		- modifying contents tree to pair distant sections together (such as questions with their answer key)
		- adding/replacing metadata
	- courses can be automatically or manually marked as complete
- section-based progress tracking
	- if a book does not have an accompanying sidecar file, whole-book completion is displayed instead
	- chapters can either be automatically or manually marked as complete
- time-based progress tracking
	- inactivity detection

## v1
- improvements to book reader
	- search
	- highlighting of current page
	- annotations
	- more reliable progress restoration
	- better assignment UI
		- tracking of individual question completion
		- tracking of answers to individual questions
		- split-screen view of answered questions and relevant answers
- improvements to course building
	- graphical course builder
	- hybrid (multi-book) course support
		- support reference books
		- support problem books
- UI improvements
	- custom theme support
	- ePub custom CSS support
	- PDF theming support
- built-in note taking functionality