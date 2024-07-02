/*let textbook = new Textbook("epub_unpacked", "./textbook-scraper/test.epub", false);

textbook.then((textbook) => textbook.render());*/

let course = new CourseBook(
	{ url: "./textbook-scraper/test.epub/", interactive: false },
	{
		"chapters": [
			{
				"id": "intro.xhtml#intro"
			},
			{
				"id": "ch01.xhtml#ch1",
				"sections": [
					[
						"ch01.xhtml#ch01lev2",
						"ch01.xhtml#ch01lev15",
						"ch01.xhtml#ch01lev25",
						"ch01.xhtml#ch01lev45"
					],
					[
						"ch01.xhtml#ch01lev62",
						"ch01.xhtml#ch01lev63",
						"ch01.xhtml#ch01lev64",
						"ch01.xhtml#ch01lev65"
					]
				]
			},
			{
				"id": "ch02.xhtml#ch2",
				"sections": [
					[
						"ch02.xhtml#ch02lev2",
						"ch02.xhtml#ch02lev18",
						"ch02.xhtml#ch02lev30",
						"ch02.xhtml#ch02lev39",
						"ch02.xhtml#ch02lev57",
						"ch02.xhtml#ch02lev73",
						"ch02.xhtml#ch02lev78",
						"ch02.xhtml#ch02lev96"
					],
					[
						"ch02.xhtml#ch02lev107",
						"ch02.xhtml#ch02lev108",
						"ch02.xhtml#ch02lev109",
						"ch02.xhtml#ch02lev110"
					]
				]
			},
			{
				"id": "ch03.xhtml#ch3",
				"sections": [
					[
						"ch03.xhtml#ch03lev2",
						"ch03.xhtml#ch03lev37",
						"ch03.xhtml#ch03lev51",
						"ch03.xhtml#ch03lev77",
						"ch03.xhtml#ch03lev145",
						"ch03.xhtml#ch03lev152",
						"ch03.xhtml#ch03lev176"
					],
					[
						"ch03.xhtml#ch03lev221",
						"ch03.xhtml#ch03lev222",
						"ch03.xhtml#ch03lev223",
						"ch03.xhtml#ch03lev224"
					]
				]
			},
			{
				"id": "ch04.xhtml#ch4",
				"sections": [
					[

					],
					[

					]
				]
			},
			{
				"id": "ch05.xhtml#ch5",
				"sections": [
					[

					],
					[

					]
				]
			},
			{
				"id": "ch06.xhtml#ch6",
				"sections": [
					[

					],
					[

					]
				]
			},
			{
				"id": "ch07.xhtml#ch7",
				"sections": [
					[

					],
					[

					]
				]
			},
			{
				"id": "ch08.xhtml#ch8",
				"sections": [
					[

					],
					[

					]
				]
			},
			{
				"id": "ch09.xhtml#ch9",
				"sections": [
					[

					],
					[

					]
				]
			},
			{
				"id": "ch10.xhtml#ch10",
				"sections": [
					[

					],
					[

					]
				]
			}
		]
	},
	{
		completed: [
			"intro.xhtml#intro"
		],
	}
);

course.load({});