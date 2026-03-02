import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "circuit",
	sidebar: [
			{
				text: "电路理论",
				collapsed: true,
				items: [
					"/circuit/circuit/circuit-1",
					"/circuit/circuit/circuit-2",
					"/circuit/circuit/circuit-3",
					"/circuit/circuit/circuit-4",
				],
			},
			{
				text: "模拟电路",
				collapsed: true,
				items: [
					"/circuit/electronic/electronic-0",
					"/circuit/electronic/electronic-1",
				],
			},
			{
				text: "数字电路",
				collapsed: true,
				items: [
					"/circuit/Digital/Digital-1",
					"/circuit/Digital/Digital-2",
					"/circuit/Digital/Digital-3",
					"/circuit/Digital/Digital-4",
					"/circuit/Digital/Digital-5",
					"/circuit/Digital/Digital-6",
					"/circuit/Digital/Digital-7",
					"/circuit/Digital/Digital-8",
					"/circuit/Digital/Digital-9",
				]
			},
			{
				text: "电力电子电路",
				collapsed: true,
				items: [
					"/circuit/Power-Electronics/power-1",
				]
			}
	],
	type: "doc",
	title: "电路"
});