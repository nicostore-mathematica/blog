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
				link: "/circuit/analog/",
				items: [
					"/circuit/analog/-1",
					"/circuit/analog/analog-2",
					"/circuit/analog/analog-3",
					"/circuit/analog/analog-4",
					"/circuit/analog/analog-5",
					"/circuit/analog/analog-6",
					"/circuit/analog/analog-7",
					"/circuit/analog/analog-8",
					"/circuit/analog/analog-9",
					"/circuit/analog/analog-10",
					"/circuit/analog/analog-11",
					"/circuit/analog/analog-12",
					"/circuit/analog/analog-13",
					"/circuit/analog/analog-14",
					"/circuit/analog/analog-15",
					"/circuit/analog/analog-16",
					"/circuit/analog/analog-17",
					"/circuit/analog/analog-18",
					"/circuit/analog/analog-19",
				],
			},
			{
				text: "数字电路",
				collapsed: false,
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
					"/circuit/Digital/Digital-10",
					"/circuit/Digital/Digital-11",
				]
			}
	],
	type: "doc",
	title: "电路"
});