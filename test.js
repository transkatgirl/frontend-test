
let course1 = new CourseBook(
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
						"ch04.xhtml#ch04lev2",
						"ch04.xhtml#ch04lev17",

					],
					[
						"ch04.xhtml#ch04lev22",
						"ch04.xhtml#ch04lev23",
						"ch04.xhtml#ch04lev24"
					]
				]
			},
			{
				"id": "ch05.xhtml#ch5",
				"sections": [
					[
						"ch05.xhtml#ch05lev2",
						"ch05.xhtml#ch05lev3",
						"ch05.xhtml#ch05lev33",
						"ch05.xhtml#ch05lev46",
						"ch05.xhtml#ch05lev60",
						"ch05.xhtml#ch05lev72",
						"ch05.xhtml#ch05lev103"
					],
					[
						"ch05.xhtml#ch05lev111",
						"ch05.xhtml#ch05lev112",
						"ch05.xhtml#ch05lev113",
						"ch05.xhtml#ch05lev114"
					]
				]
			},
			{
				"id": "ch06.xhtml#ch6",
				"sections": [
					[
						"ch06.xhtml#ch06lev2",
						"ch06.xhtml#ch06lev12",
						"ch06.xhtml#ch06lev29",
						"ch06.xhtml#ch06lev47",
						"ch06.xhtml#ch06lev62",
						"ch06.xhtml#ch06lev73",
						"ch06.xhtml#ch06lev99",
						"ch06.xhtml#ch06lev117",
						"ch06.xhtml#ch06lev131",
						"ch06.xhtml#ch06lev161",
						"ch06.xhtml#ch06lev177"
					],
					[
						"ch06.xhtml#ch06lev210",
						"ch06.xhtml#ch06lev211",
						"ch06.xhtml#ch06lev212",
						"ch06.xhtml#ch06lev213"
					]
				]
			},
			{
				"id": "ch07.xhtml#ch7",
				"sections": [
					[
						"ch07.xhtml#ch07lev2",
						"ch07.xhtml#ch07lev34",
						"ch07.xhtml#ch07lev42",
						"ch07.xhtml#ch07lev58",
						"ch07.xhtml#ch07lev85",
						"ch07.xhtml#ch07lev107",
						"ch07.xhtml#ch07lev127",
						"ch07.xhtml#ch07lev142",
						"ch07.xhtml#ch07lev146",
						"ch07.xhtml#ch07lev166"
					],
					[
						"ch07.xhtml#ch07lev182",
						"ch07.xhtml#ch07lev183",
						"ch07.xhtml#ch07lev184"
					]
				]
			},
			{
				"id": "ch08.xhtml#ch8",
				"sections": [
					[
						"ch08.xhtml#ch08lev2",
						"ch08.xhtml#ch08lev20",
						"ch08.xhtml#ch08lev23",
						"ch08.xhtml#ch08lev24",
						"ch08.xhtml#ch08lev25"
					],
					[
						"ch08.xhtml#ch08lev37",
						"ch08.xhtml#ch08lev38",
						"ch08.xhtml#ch08lev39",
						"ch08.xhtml#ch08lev40"
					]
				]
			},
			{
				"id": "ch09.xhtml#ch9",
				"sections": [
					[
						"ch09.xhtml#ch09lev2",
						"ch09.xhtml#ch09lev17",
						"ch09.xhtml#ch09lev31",
						"ch09.xhtml#ch09lev42",
						"ch09.xhtml#ch09lev59",
						"ch09.xhtml#ch09lev71",
						"ch09.xhtml#ch09lev83",
						"ch09.xhtml#ch09lev94",
						"ch09.xhtml#ch09lev98"
					],
					[
						"ch09.xhtml#ch09lev111",
						"ch09.xhtml#ch09lev112",
						"ch09.xhtml#ch09lev113",
						"ch09.xhtml#ch09lev114"
					]
				]
			},
			{
				"id": "ch10.xhtml#ch10"
			}
		]
	},
	{
		completed: [
			"intro.xhtml#intro"
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