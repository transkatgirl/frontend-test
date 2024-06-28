let textbook = new Textbook("epub_unpacked", "./textbook-scraper/test.epub", { sandbox: false });

textbook.then((textbook) => textbook.render());