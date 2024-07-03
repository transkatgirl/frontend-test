class TimeProgressMeter {
	#dataElements;
	constructor (size, min, max) {
		if (size && size > 0) {
			this.size = Number(size);
		} else {
			this.size = 5;
		}
		this.min = Number(min);
		this.max = Number(max);
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
			const normalizedValue = (value - this.min) / (this.max / this.size);

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

}

class DailyProgressGraph {

}