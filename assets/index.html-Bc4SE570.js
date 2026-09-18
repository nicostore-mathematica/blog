import { _ as _export_sfc, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, w as withCtx, r as resolveComponent, o as openBlock } from "./app-C973mz5j.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_WordCount = resolveComponent("WordCount");
  const _component_VPLink = resolveComponent("VPLink");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("笔记目前总字数：", -1)),
      createVNode(_component_WordCount, { type: "circuit, integral, algebra, physics, probstathsy, complex, cybernetics, optics, electrodynamics, analytical-mechanics, computational-physics, mathematical-physics,signal-analysis " })
    ]),
    _cache[17] || (_cache[17] = createBaseVNode("h3", {
      id: "·-math",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#·-math"
      }, [
        createBaseVNode("span", null, "· math")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/integral/" }, {
        default: withCtx(() => [..._cache[1] || (_cache[1] = [
          createTextVNode("数学分析", -1)
        ])]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/algebra/" }, {
        default: withCtx(() => [..._cache[2] || (_cache[2] = [
          createTextVNode("代数学基础", -1)
        ])]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/probstathsy/" }, {
        default: withCtx(() => [..._cache[3] || (_cache[3] = [
          createTextVNode("应用数学", -1)
        ])]),
        _: 1
      }),
      _cache[4] || (_cache[4] = createTextVNode(" （包含数理统计，数值分析等，我是鸽子）", -1))
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/complex/" }, {
        default: withCtx(() => [..._cache[5] || (_cache[5] = [
          createTextVNode("复变函数", -1)
        ])]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/mathematical-physics/" }, {
        default: withCtx(() => [..._cache[6] || (_cache[6] = [
          createTextVNode("数学物理方程", -1)
        ])]),
        _: 1
      })
    ]),
    _cache[18] || (_cache[18] = createBaseVNode("h3", {
      id: "·-physics",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#·-physics"
      }, [
        createBaseVNode("span", null, "· physics")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/physics/" }, {
        default: withCtx(() => [..._cache[7] || (_cache[7] = [
          createTextVNode("基础物理", -1)
        ])]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/optics/" }, {
        default: withCtx(() => [..._cache[8] || (_cache[8] = [
          createTextVNode("光学", -1)
        ])]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/analytical-mechanics/" }, {
        default: withCtx(() => [..._cache[9] || (_cache[9] = [
          createTextVNode("分析力学", -1)
        ])]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/electrodynamics/" }, {
        default: withCtx(() => [..._cache[10] || (_cache[10] = [
          createTextVNode("电动力学", -1)
        ])]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/computational-physics/" }, {
        default: withCtx(() => [..._cache[11] || (_cache[11] = [
          createTextVNode("计算物理导论", -1)
        ])]),
        _: 1
      })
    ]),
    _cache[19] || (_cache[19] = createBaseVNode("h3", {
      id: "·-technology",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#·-technology"
      }, [
        createBaseVNode("span", null, "· Technology")
      ])
    ], -1)),
    createBaseVNode("p", null, [
      createBaseVNode("s", null, [
        createVNode(_component_VPLink, { href: "/CS/" }, {
          default: withCtx(() => [..._cache[12] || (_cache[12] = [
            createTextVNode("计算机科学", -1)
          ])]),
          _: 1
        })
      ])
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/circuit/" }, {
        default: withCtx(() => [..._cache[13] || (_cache[13] = [
          createTextVNode("电子电路", -1)
        ])]),
        _: 1
      })
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "" }, {
        default: withCtx(() => [..._cache[14] || (_cache[14] = [
          createTextVNode("RoboMaster", -1)
        ])]),
        _: 1
      }),
      _cache[15] || (_cache[15] = createTextVNode(" (一个半废弃的模块)", -1))
    ]),
    createBaseVNode("p", null, [
      createVNode(_component_VPLink, { href: "/cybernetics/" }, {
        default: withCtx(() => [..._cache[16] || (_cache[16] = [
          createTextVNode("控制理论", -1)
        ])]),
        _: 1
      })
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('{"path":"/notes/","title":"Notes","lang":"zh-CN","frontmatter":{"title":"Notes","permalink":"/notes/","description":"笔记目前总字数： · math （包含数理统计，数值分析等，我是鸽子） · physics · Technology (一个半废弃的模块)","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Notes\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-05-30T01:58:14.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/notes/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"Notes"}],["meta",{"property":"og:description","content":"笔记目前总字数： · math （包含数理统计，数值分析等，我是鸽子） · physics · Technology (一个半废弃的模块)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-05-30T01:58:14.000Z"}],["meta",{"property":"article:modified_time","content":"2026-05-30T01:58:14.000Z"}]]},"readingTime":{"minutes":0.43,"words":130},"git":{"createdTime":1760282032000,"updatedTime":1780106294000,"contributors":[{"name":"nicostore-mathematica","username":"nicostore-mathematica","email":"nicostore.core@outlook.com","commits":13,"avatar":"https://avatars.githubusercontent.com/nicostore-mathematica?v=4","url":"https://github.com/nicostore-mathematica"},{"name":"nicostore.mathematica","username":"","email":"nicostore.core@outlook.com","commits":2,"avatar":"https://gravatar.com/avatar/83f1fc35cd96b7f6bb40bfaac0f88b4d31f0b77f31c49136a7130d42e7d3992f?d=retro"}],"changelog":[{"hash":"838e379d6d2d73f8040600c07a25fbe147da8729","time":1780106294000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"test"},{"hash":"e5008a33843338f577445130e4c29823d978155e","time":1779895795000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"test+"},{"hash":"8f52307a2df080d0a34adceba1e6e504358af937","time":1774866488000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"signal"},{"hash":"c1cb93dcb0d909e24cd9451562a9bec8d1987a3b","time":1773996673000,"email":"nicostore.core@outlook.com","author":"nicostore.mathematica","message":"大清洗"},{"hash":"1eede73327dcb5307a60e2f5e153fe17ae45f7c0","time":1773411987000,"email":"nicostore.core@outlook.com","author":"nicostore.mathematica","message":"elec"},{"hash":"8cfa67565e329e070e394dbdd66b208c84bec42b","time":1767113228000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"about"},{"hash":"5f8280a77f66497e822b5f9697a387b4fda223cc","time":1766619706000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"CS+"},{"hash":"40677138c88969f906619424dbde159fa1b87809","time":1765885399000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"integral+"},{"hash":"325a3ceefe4b79c035350d2a8cc5a1efb55dc111","time":1765720678000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"chapter-2"},{"hash":"f29b3167a4e99274c966274f2eabdff8fd4d3891","time":1765706540000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"chapter-1"},{"hash":"fdf5771fb540cdb8df106c84a4f8e7059ee8984a","time":1764167843000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"vector"},{"hash":"22bd5080f9f60e145a85e680a4fcb2a11e5c08c9","time":1764141386000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"级数"},{"hash":"c1b47c315415420f7dc68170e4504b36c40015e8","time":1763821561000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"applied-mechanics"},{"hash":"9b4bb352876fa5c47866c47bd3b8d0beaa820ccb","time":1763467014000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"op"},{"hash":"c9ee809f71681e268b78de5c0f0589c79b33932a","time":1760282032000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"plume"}]},"autoDesc":true,"filePathRelative":"notes.md","headers":[]}');
export {
  index_html as comp,
  data
};
