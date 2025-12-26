import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "applied-math",
	sidebar: [
		{
			text: "概率统计基础",
			collapsed: false,
			link: "/applied-math/probstathsy/",
			items: [
				"/applied-math/probstathsy/probstathsy-1",
				"/applied-math/probstathsy/probstathsy-2",
			],
		},
		{
			text: "向量分析",
					collapsed: false,
					link: "/applied-math/vector/",
					items: [
						"/applied-math/vector-1",
					],
				},
				{
					text: "数值分析",
					collapsed: false,
					link: "/applied-math/numerical/",
					items: [
						"/applied-math/numerical/numerical-1",
						"/applied-math/numerical/numerical-2",
					],
				},
		},
	],
	type: "doc",
	title: "应用数学"
});