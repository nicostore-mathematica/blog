import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "analytical-mechanics",
	sidebar: [
		{
			text: "分析力学",
			collapsed: false,
			link: "/analytical-mechanics/",
			items: [
				"chapter-1",
				"chapter-2",
				"chapter-3",
			],
		},
	],
	type: "doc",
	title: "分析力学"
});