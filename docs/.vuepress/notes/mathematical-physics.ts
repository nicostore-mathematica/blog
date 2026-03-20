import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "mathematical-physics",
	sidebar: [
		{
			text: "数学物理方程",
			collapsed: false,
			link: "/mathematical-physics/",
			items: [
				"chapter-0",
			],
		},
	],
	type: "doc",
	title: "数学物理方程"
});