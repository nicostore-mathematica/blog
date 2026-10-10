import { defineCollection } from "vuepress-theme-plume";

export default defineCollection({
    dir: "Metrology",
    sidebar: [
        {
            text: "测量理论",
            collapsed: false,
            link: "/Metrology/",
            items: [
                "lesson-1",
                "lesson-2",
            ],
        },
    ],
    type: "doc",
    title: "测量理论"
});