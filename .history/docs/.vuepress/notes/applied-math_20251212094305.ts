import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "applied-math",
	sidebar: [
		{
			text: "应用数学基础",
			link: "/applied-math/",
			items: [
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
				{
					text: "概率统计",
					collapsed: false,
					link: "/applied-math/probstathsy/",
					items: [
						"/applied-math/probstathsy/probstathsy-1",
						"/applied-math/probstathsy/probstathsy-2",
					],
				},
			]
		}
	],
	type: "doc",
	title: "应用数学"
});