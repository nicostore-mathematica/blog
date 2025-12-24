import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "CS",
	sidebar: [
		{
			text: "C语言",
			collapsed: false,
			items: [
				"C-class",
				"C-mooc",
			],
		},
		{
			text: "python",
			collapsed: false,
			items: [
				"python-0",
			],
		},
	],
	type: "doc",
	title: "计算机科学"
});