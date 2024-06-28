# feature roadmap

## v0 (minimum-viable product / "alpha")
- [x] ePUB + PDF reader
	- [ ] highlight active page
	- [x] save/restore of active section
- course-based progress tracking
	- courses are made up of 1 or more books tied together by JSON files
	- contents of *per-course-map* JSON files:
		- course map file version
		- list of courses included
		- representation of course graph (mermaid.js based graph)
		- title
	- [ ] contents of *per-course* JSON files:
		- course file version
		- list of books included (by file hash)
		- title
	- [ ] contents of *per-book* "sidecar" JSON files:
		- sidecar file version
		- marking which sections are completable
		- hash of book file (JSON title file)
	- [ ] courses can be automatically or manually marked as complete
- [ ] section-based progress tracking
- [ ] time-based progress tracking
	- [ ] graphical progress display
	- [ ] inactivity detection

# v0.5 ("beta")
- improvements to course building
	- graphical per-book sidecar file builder
	- graphical course builder
	- allow modifying contents tree to pair sections together (such as questions w/ answer keys)
- improvements to course architecture & UI
	- allow adding metadata to course maps (description, author, tags)
	- allow adding metadata to courses (description, author, tags)
	- allow either retrieving metadata from a book (default) or manually overriding it in the sidecar file
- UI improvements
	- theming support
		- custom theme support
		- ePub theming support

## v1 (first release)
- improvements to book reader
	- search (requires indexing ePubs)
	- annotations
	- note-taking UI
	- better assignment UI
		- tracking of individual question completion
		- tracking of answers to individual questions
		- split-screen view of answered questions and relevant answers
- improvements to course building
	- graphical course map builder
	- hybrid (multi-book) course support
		- support reference books
		- support problem books
- UI improvements
	- PDF theming support