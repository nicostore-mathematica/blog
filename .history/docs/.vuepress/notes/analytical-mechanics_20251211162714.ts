import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "analytical-mechanics",
	sidebar: [
		{
			text: "电动力学",
			collapsed: false,
			link: "/analytical-mechanics/",
			items: [
				"electrodynamics-1",
				"electrodynamics-2",
			],
		},
	],
	type: "doc",
	title: "电动力学"
});