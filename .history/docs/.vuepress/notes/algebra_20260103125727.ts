import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "algebra",
	sidebar: [
			{
				text: "线性代数引论",
				collapsed: true,
				items: [
					"/algebra/introduction/introduction-1",
					"/algebra/introduction/introduction-2",
				],
			},
			{
				text: "高等代数",
				collapsed: false,
				items: [
					"/algebra/advanced-algebra/algebra-0",
					"/algebra/advanced-algebra/algebra-1",
					"/algebra/advanced-algebra/algebra-2",
					"/algebra/advanced-algebra/algebra-3",
					"/algebra/advanced-algebra/algebra-4",
					"/algebra/advanced-algebra/algebra-5",
					"/algebra/advanced-algebra/algebra-6",
					"/algebra/advanced-algebra/algebra-7",
					"/algebra/advanced-algebra/algebra-8",
					"/algebra/advanced-algebra/algebra-9",
					"/algebra/advanced-algebra/algebra-10",
					"/algebra/advanced-algebra/algebra-11",
					],
			},
			],
	type: "doc",
	title: "代数学基础"
});