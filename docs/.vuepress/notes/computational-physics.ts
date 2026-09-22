import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "computational-physics",
	sidebar: [
		{
			text: "计算物理导论",
			collapsed: false,
			link: "/computational-physics/",
			items: [
				"lesson-1",
				"lesson-2",
				"lesson-3",
				"lesson-4",
				"lesson-5",
			],
		},
	],
	type: "doc",
	title: "计算物理导论"
});