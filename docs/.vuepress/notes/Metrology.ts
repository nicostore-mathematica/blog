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
                "lesson-3",
                "lesson-4",
                "lesson-5",
                "lesson-6",
                "lesson-7",
                "lesson-8",
            ],
        },
    ],
    type: "doc",
    title: "测量理论"
});