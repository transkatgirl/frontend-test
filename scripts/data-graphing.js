class TimeProgressMeter {
	#dataElements = [];
	constructor ({ min = 0, max = 150, size = 5 }) {
		this.min = Number(min);
		this.max = Number(max);
		this.size = Number(size);

		this.#render();
	}
	#render() {
		const root = document.createElement("table");
		root.setAttribute("class", "progress-map hourly-progress-map");
		const body = document.createElement("tbody");
		const row = document.createElement("tr");

		const header = document.createElement("th");
		header.innerText = "⏱️";

		row.appendChild(header);

		for (let i = 0; i < this.size; i++) {
			const dataElement = document.createElement("td");
			this.#dataElements.push(dataElement);
			row.appendChild(dataElement);
		}
		body.appendChild(row);
		root.appendChild(body);

		this.element = root;
	}
	update(value = this.min) {
		const normalizedValue = (value - this.min) / ((this.max - this.min) / this.size);

		const lowerBound = Math.floor(normalizedValue);
		const upperBound = Math.ceil(normalizedValue);

		this.#dataElements.forEach((element, i) => {
			if (lowerBound > i) {
				element.className = "finished";
			} else if (upperBound > i) {
				element.className = "in-progress";
			} else {
				element.className = "";
			}
			element.style = "color: transparent"; // Ugly hack
			element.style = ""; // Ugly hack
		});
	}
}

class BookChapterGraph {
	#dataElements = [];
	constructor ({ title, chapters, width = 10 }) {
		if (title) {
			this.title = String(title);
		}
		this.chapters = Number(chapters);
		this.width = Number(width);

		this.#render();
	}
	#render() {
		const root = document.createElement("table");
		root.setAttribute("class", "progress-map chapter-progress-map");
		if (this.title) {
			const caption = document.createElement("caption");
			caption.innerText = "📖 " + this.title;
			root.appendChild(caption);
		}

		const body = document.createElement("tbody");

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

		root.appendChild(body);
		this.element = root;
	}
	update(progress = []) {
		for (let i = 0; i < this.#dataElements.length; i++) {
			const element = this.#dataElements[i];

			if (i >= progress.length) {
				element.className = "";
				element.style = "color: transparent"; // Ugly hack
				element.style = ""; // Ugly hack
				continue;
			}

			const value = Number(progress[i]);

			if (value >= 1) {
				element.className = "finished";
			} else if (value > 0) {
				element.className = "in-progress";
			} else {
				element.className = "";
			}
			element.style = "color: transparent"; // Ugly hack
			element.style = ""; // Ugly hack
		}
	}
}

class MultiWeekProgressGraph {
	#dataElements = [];
	#localization;
	constructor ({ type, weeks = 24, min = 0, max, alwaysDisplayedWeeks = 16, dayNames = ["", "Mon", "", "Wed", "", "Fri", ""], weekLabel = "Week", listEveryWeeks = 4, lessLabel = "Less", moreLabel = "More" }) {
		if (type === "time" || type === "chapter") {
			this.type = type;
		} else {
			return null;
		}
		this.weeks = Number(weeks);
		this.min = Number(min);
		if (max) {
			this.max = Number(max);
		} else {
			switch (this.type) {
				case "chapter":
					this.max = 1.5;
					break;
				case "time":
					this.max = 360;
					break;
			}
		}

		this.#localization = {
			dayNames,
			weekLabel,
			listEveryWeeks,
			lessLabel,
			moreLabel,
			alwaysDisplayedWeeks
		};

		const container = document.createElement("div");
		this.keyElement = this.#renderKey();
		this.graphElement = this.#renderGraph();
		container.appendChild(this.graphElement);
		container.appendChild(this.keyElement);
		this.element = container;
	}
	#renderGraph() {
		const root = document.createElement("table");
		root.setAttribute("class", "progress-map");

		const body = document.createElement("tbody");

		let levels;
		switch (this.type) {
			case "chapter":
				root.classList.add("daily-chapter-progress-map");
				levels = 3;
				break;
			case "time":
				root.classList.add("daily-time-progress-map");
				levels = 5;
				break;
		}

		for (let ii = 0; ii < 7; ii++) {
			const row = document.createElement("tr");

			const rowHeader = document.createElement("th");
			rowHeader.innerText = this.#localization.dayNames[ii];

			row.appendChild(rowHeader);

			for (let i = 0; i < this.weeks; i++) {
				const dataElement = document.createElement("td");
				this.#dataElements.push(dataElement);
				if ((this.weeks - i) > this.#localization.alwaysDisplayedWeeks) {
					dataElement.classList.add("expanded-data");
				}
				row.appendChild(dataElement);
			}
			body.appendChild(row);
		}

		const footer = document.createElement("tfoot");
		const footerRow = document.createElement("tr");

		const footerCornerItem = document.createElement("th");
		footerCornerItem.innerText = this.#localization.weekLabel;
		footerRow.appendChild(footerCornerItem);

		for (let i = this.weeks; i > 0; i--) {
			const label = document.createElement("th");
			if (i % this.#localization.listEveryWeeks == 0) {
				label.innerText = i;
			}
			if (i > this.#localization.alwaysDisplayedWeeks) {
				label.classList.add("expanded-data");
			}
			footerRow.appendChild(label);
		}

		footer.appendChild(footerRow);

		root.appendChild(body);
		root.appendChild(footer);
		return root;
	}
	#renderKey() {
		const root = document.createElement("table");
		root.setAttribute("class", "progress-map color-key");
		const body = document.createElement("tbody");
		const row = document.createElement("tr");

		const headerLess = document.createElement("th");
		headerLess.innerText = this.#localization.lessLabel;

		const headerMore = document.createElement("th");
		headerMore.innerText = this.#localization.moreLabel;

		const itemZero = document.createElement("td");

		row.appendChild(headerLess);
		row.appendChild(itemZero);

		let levels;
		switch (this.type) {
			case "chapter":
				root.classList.add("daily-chapter-progress-map");
				levels = 3;
				break;
			case "time":
				root.classList.add("daily-time-progress-map");
				levels = 5;
				break;
		}

		for (let i = 1; i <= levels; i++) {
			const item = document.createElement("td");
			item.setAttribute("class", "level-" + i);
			row.appendChild(item);
		}

		row.appendChild(headerMore);

		body.appendChild(row);
		root.appendChild(body);
		return root;
	}
	#getDay(day) {
		day = (this.weeks * 7) - day;

		return this.#dataElements[((day % 7) * this.weeks) + Math.floor(day / 7)];
	}
	update(progressMap) {
		// TODO
	}
}