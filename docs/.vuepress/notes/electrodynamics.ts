import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "electrodynamics",
	sidebar: [
		{
			text: "电动力学",
			collapsed: false,
			link: "/electrodynamics/",
			items: [
				"electrodynamics-0",
				"electrodynamics-1",
				"electrodynamics-2",
				"electrodynamics-3",
				"electrodynamics-4",
				"electrodynamics-5",
				"electrodynamics-6",
			],
		},
	],
	type: "doc",
	title: "电动力学"
});