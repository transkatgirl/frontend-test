let textbook = new Textbook("epub_unpacked", "./textbook-scraper/test.epub", {});

textbook.then((textbook) => textbook.render());