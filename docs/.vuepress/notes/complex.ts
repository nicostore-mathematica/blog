import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "complex",
	sidebar: [
		{
			text: "复变函数",
			collapsed: false,
			link: "/complex/",
			items: [
				"complex-1",
				"complex-2",
				"complex-3",
				"complex-4",
				"complex-5",
				"complex-6",
				"complex-7",
			],
		},
	],
	type: "doc",
	title: "复变函数"
});