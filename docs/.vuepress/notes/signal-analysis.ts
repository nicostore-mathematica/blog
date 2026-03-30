import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "signal-analysis",
	sidebar: [
		{
			text: "信号分析",
			collapsed: false,
			link: "/signal-analysis/",
			items: [
				"signal-1",
				"signal-2",
			],
		},
	],
	type: "doc",
	title: "信号分析"
});