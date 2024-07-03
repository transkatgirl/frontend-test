class TimeProgressMeter {
	#dataElements;
	constructor (min = 0, max = 150, size = 5) {
		this.min = Number(min);
		this.max = Number(max);
		this.size = Number(size);
	}
	render() {
		if (!this.element) {
			this.element = document.createElement("table");
			this.element.setAttribute("class", "progress-map hourly-progress-map");
			const body = document.createElement("tbody");
			const row = document.createElement("tr");

			const header = document.createElement("th");
			header.innerText = "⏱️";

			row.appendChild(header);

			this.#dataElements = [];

			for (let i = 0; i < this.size; i++) {
				const dataElement = document.createElement("td");
				this.#dataElements.push(dataElement);
				row.appendChild(dataElement);
			}
			body.appendChild(row);
			this.element.appendChild(body);
		}

		return this.element;
	}
	update(value) {
		if (this.element) {
			const normalizedValue = (value - this.min) / ((this.max - this.min) / this.size);

			const lowerBound = Math.floor(normalizedValue);
			const upperBound = Math.ceil(normalizedValue);

			this.#dataElements.forEach((element, i) => {
				element.style = "color: transparent"; // Ugly hack
				if (lowerBound > i) {
					element.className = "finished";
				} else if (upperBound > i) {
					element.className = "in-progress";
				} else {
					element.className = "";
				}
				element.style = ""; // Ugly hack
			});
		}
	}
}

class BookChapterGraph {
	#dataElements;
	constructor (title, chapters, width = 10) {
		if (title) {
			this.title = String(title);
		}
		this.chapters = Number(chapters);
		this.width = Number(width);
	}
	render() {
		if (!this.element) {
			this.element = document.createElement("table");
			this.element.setAttribute("class", "progress-map chapter-progress-map");
			if (this.title) {
				const caption = document.createElement("caption");
				caption.innerText = "📖 " + this.title;
				this.element.appendChild(caption);
			}

			const body = document.createElement("tbody");

			this.#dataElements = [];

			let height = Math.ceil(this.chapters / this.width);

			for (let ii = 0; ii < height; ii++) {
				const row = document.createElement("tr");
				for (let i = 0; i < this.width; i++) {
					const dataElement = document.createElement("td");
					this.#dataElements.push(dataElement);
					row.appendChild(dataElement);
					if (this.#dataElements.length >= this.chapters) {
						break;
					}
				}
				body.appendChild(row);
			}

			this.element.appendChild(body);
		}

		return this.element;
	}
	update(progress) {

	}
}

class DailyProgressGraph {

}