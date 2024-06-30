let textbook = new Textbook("epub_unpacked", "./textbook-scraper/test.epub", false);

textbook.then((textbook) => textbook.render());