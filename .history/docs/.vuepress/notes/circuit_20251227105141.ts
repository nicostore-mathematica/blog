import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
	dir: "circuit",
	sidebar: [
			{
				text: "电路理论",
				collapsed: true,
				link: "/circuit/Theory/",
				items: [
					"/circuit/Theory/circuit-1",
					"/circuit/Theory/circuit-2",
					"/circuit/Theory/circuit-3",
					"/circuit/Theory/circuit-4",
				],
			},
			{
				text: "模拟电路",
				collapsed: true,
				link: "/circuit/electronic/",
				items: [
					"/circuit/electronic/electronic-1",
					"/circuit/electronic/electronic-2",
					"/circuit/electronic/electronic-3",
					"/circuit/electronic/electronic-4",
					"/circuit/electronic/electronic-5",
					"/circuit/electronic/electronic-6",
					"/circuit/electronic/electronic-7",
					"/circuit/electronic/electronic-8",
					"/circuit/electronic/electronic-9",
					"/circuit/electronic/electronic-10",
					"/circuit/electronic/electronic-11",
					"/circuit/electronic/electronic-12",
					"/circuit/electronic/electronic-13",
					"/circuit/electronic/electronic-14",
					"/circuit/electronic/electronic-15",
					"/circuit/electronic/electronic-16",
					"/circuit/electronic/electronic-17",
					"/circuit/electronic/electronic-18",
					"/circuit/electronic/electronic-19",
				],
			},
			{
				text: "数字电路",
				collapsed: true,
				link: "/circuit/Digital/",
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
				text: "电力电子",
				collapsed: true,
				link: "/circuit/power/",
				items: [
					"/circuit/Power-Electronics/power-1",
				]
			}
	],
	type: "doc",
	title: "电路"
});