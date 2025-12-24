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
			text: "Python",
			collapsed: false,
			items: [
				"python-0",
			],
		},
		// {
		// 	text: "算法",
		// 	collapsed: false,
		// 	items: [
		// 		"algorithm-1",
		// 	],
		// },
		// {
		// 	text: "计算机网络",
		// 	collapsed: false,
		// 	items: [
		// 		"network-1",
		// 	],
		// },
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