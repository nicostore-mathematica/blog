import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "analytical-mechanics",
	sidebar: [
		{
			text: "分析力学",
			collapsed: false,
			link: "/analytical-mechanics/",
			items: [
				"lesson-1",
				"lesson-2",
				"lesson-3",
				"lesson-4",
				// "lesson-5",
				// "lesson-6",
				"lesson-7",
				"lesson-8",
				"lesson-9",
				
			],
		},
	],
	type: "doc",
	title: "分析力学"
});