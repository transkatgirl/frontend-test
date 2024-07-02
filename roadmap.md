# feature roadmap

## v0 (minimum-viable product / "alpha")
- [x] ePUB + PDF reader
	- [x] highlight active section
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
		- book metadata (title, description, author, license, tags)
		- marking which sections are completable
			- sections are indexed by number (x.y, x.y.z, x.y.z.a), starting from index 1
		- hash of book file (as JSON filename)
	- [ ] courses can be automatically or manually marked as complete
- [x] section-based progress tracking
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
	- allow displaying book metadata
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
	- support document tree -like courses
- UI improvements
	- PDF theming support