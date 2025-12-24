import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "CS",
	sidebar: [

		{
			text: "C++",
			collapsed: false,
			items: [
				"cpp-1",
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