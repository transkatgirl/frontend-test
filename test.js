
let course1 = new CourseBook(
	{ url: "./textbook-scraper/test.epub/", interactive: false },
	{
		"chapters": [
			{
				"id": "ch01.xhtml#ch1",
				"sections": [
					"ch01.xhtml#ch01lev2",
					"ch01.xhtml#ch01lev15",
					"ch01.xhtml#ch01lev25",
					"ch01.xhtml#ch01lev45",
					"ch01.xhtml#ch01lev62",
					[
						"ch01.xhtml#ch01lev63",
						"ch01.xhtml#ch01lev64",
						"ch01.xhtml#ch01lev65"
					]

				]
			},
			{
				"id": "ch02.xhtml#ch2",
			},
			{
				"id": "ch03.xhtml#ch3",
			},
			{
				"id": "ch04.xhtml#ch4",
			},
			{
				"id": "ch05.xhtml#ch5",
			},
			{
				"id": "ch06.xhtml#ch6",
			},
			{
				"id": "ch07.xhtml#ch7",
			},
			{
				"id": "ch08.xhtml#ch8",
			},
			{
				"id": "ch09.xhtml#ch9",
			},
			{
				"id": "ch10.xhtml#ch10",
			}
		]
	},
	{
		completed: [
			"ch02.xhtml#ch2"
		],
	}
);

let course2 = new CourseBook({ url: "./textbook-scraper/alice.epub", interactive: false }, [], {});

let course3 = new CourseBook({ url: "./textbook-scraper/test.pdf", interactive: false }, [], {});

let course4 = new CourseBook({ url: "/textbook-scraper/math.pdf", interactive: false }, [], {});

course1.load({});
course2.prefetch();
course3.prefetch();
course4.prefetch();