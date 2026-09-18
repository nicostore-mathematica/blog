import { _ as _export_sfc, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, r as resolveComponent, o as openBlock } from "./app-C973mz5j.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_WordCount = resolveComponent("WordCount");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode("h2", {
      id: "readme",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#readme"
      }, [
        createBaseVNode("span", null, "README")
      ])
    ], -1)),
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "这是猫条的计算物理导论笔记，该专栏的目的主要是侧重于数学中数值分析相关的内容，参考书为刘川老师的《计算物理导论》，边读边学，所以更新速度上可能没有那么快（咕咕）", -1)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("字数：", -1)),
      createVNode(_component_WordCount, { type: "computational-physics" })
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('{"path":"/computational-physics/","title":"计算物理导论","lang":"zh-CN","frontmatter":{"title":"计算物理导论","permalink":"/computational-physics/","createTime":"2026/03/13 19:38:43","description":"README 这是猫条的计算物理导论笔记，该专栏的目的主要是侧重于数学中数值分析相关的内容，参考书为刘川老师的《计算物理导论》，边读边学，所以更新速度上可能没有那么快（咕咕） 字数：","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算物理导论\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-03-13T14:26:27.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/computational-physics/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"计算物理导论"}],["meta",{"property":"og:description","content":"README 这是猫条的计算物理导论笔记，该专栏的目的主要是侧重于数学中数值分析相关的内容，参考书为刘川老师的《计算物理导论》，边读边学，所以更新速度上可能没有那么快（咕咕） 字数："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-03-13T14:26:27.000Z"}],["meta",{"property":"article:modified_time","content":"2026-03-13T14:26:27.000Z"}]]},"readingTime":{"minutes":0.32,"words":95},"git":{"createdTime":1773411987000,"updatedTime":1773411987000,"contributors":[{"name":"nicostore.mathematica","username":"","email":"nicostore.core@outlook.com","commits":1,"avatar":"https://gravatar.com/avatar/83f1fc35cd96b7f6bb40bfaac0f88b4d31f0b77f31c49136a7130d42e7d3992f?d=retro"}],"changelog":[{"hash":"1eede73327dcb5307a60e2f5e153fe17ae45f7c0","time":1773411987000,"email":"nicostore.core@outlook.com","author":"nicostore.mathematica","message":"elec"}]},"autoDesc":true,"filePathRelative":"computational-physics/README.md","headers":[]}');
export {
  index_html as comp,
  data
};
