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
			text: "数据结构",
			collapsed: false,
			items: [
				"structure-1",
			],
		},
	],
	type: "doc",
	title: "计算机科学"
});