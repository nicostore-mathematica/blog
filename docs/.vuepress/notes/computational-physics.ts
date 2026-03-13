import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "computational-physics",
	sidebar: [
		{
			text: "计算物理导论",
			collapsed: false,
			link: "/computational-physics/",
			items: [
				"chapter-1",
				"chapter-2",
				"chapter-3",
				"chapter-4",
				"chapter-5",
			],
		},
	],
	type: "doc",
	title: "计算物理导论"
});