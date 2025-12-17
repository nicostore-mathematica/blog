import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "integral",
	sidebar: [
		{
			text: "数学分析",
			collapsed: false,
			link: "/integral/",	
			items: [
				"integral-0",
				"integral-1",
				"integral-2",
				"integral-3",
				"integral-4",
				"integral-5",
				"integral-6",
				"integral-7",
				"integral-8",
				"integral-9",
				"integral-10",
				"integral-11",
				"integral-12",
				"integral-13",
				"integral-14",
				"integral-15",
				"integral-16",
			],
		},
	],
	type: "doc",
	title: "数学分析"
});