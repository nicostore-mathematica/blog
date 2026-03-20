import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "probstathsy",
	sidebar: [
		{
			text: "概率统计基础",
			collapsed: false,
			link: "/probstathsy/",
			items: [
				"probstathsy-1",
				"probstathsy-2",
			],
		},
	],
	type: "doc",
	title: "概率统计"
});