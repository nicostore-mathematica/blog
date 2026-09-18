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
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "这部分的笔记纯粹是因为培养方案没有分析力学但是在实际使用电动力学和量子力学导论的时候不可避免遇见一些分析力学的结论，因此特别开一个栏目讲述分析力学部分的相关学习.", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("p", null, "参考资料为高显《经典力学讲义》，李岩松老师《分析力学讲义》，以及哈工大任延宇老师的课程.", -1)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("总字数：", -1)),
      createVNode(_component_WordCount, { type: "analytical-mechanics" })
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('{"path":"/analytical-mechanics/","title":"分析力学","lang":"zh-CN","frontmatter":{"title":"分析力学","permalink":"/analytical-mechanics/","createTime":"2025/12/11 20:57:28","description":"README 这部分的笔记纯粹是因为培养方案没有分析力学但是在实际使用电动力学和量子力学导论的时候不可避免遇见一些分析力学的结论，因此特别开一个栏目讲述分析力学部分的相关学习. 参考资料为高显《经典力学讲义》，李岩松老师《分析力学讲义》，以及哈工大任延宇老师的课程. 总字数：","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分析力学\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-03-14T18:19:23.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/analytical-mechanics/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"分析力学"}],["meta",{"property":"og:description","content":"README 这部分的笔记纯粹是因为培养方案没有分析力学但是在实际使用电动力学和量子力学导论的时候不可避免遇见一些分析力学的结论，因此特别开一个栏目讲述分析力学部分的相关学习. 参考资料为高显《经典力学讲义》，李岩松老师《分析力学讲义》，以及哈工大任延宇老师的课程. 总字数："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-03-14T18:19:23.000Z"}],["meta",{"property":"article:modified_time","content":"2026-03-14T18:19:23.000Z"}]]},"readingTime":{"minutes":0.47,"words":140},"git":{"createdTime":1765706540000,"updatedTime":1773512363000,"contributors":[{"name":"nicostore-mathematica","username":"nicostore-mathematica","email":"nicostore.core@outlook.com","commits":2,"avatar":"https://avatars.githubusercontent.com/nicostore-mathematica?v=4","url":"https://github.com/nicostore-mathematica"},{"name":"nicostore.mathematica","username":"","email":"nicostore.core@outlook.com","commits":1,"avatar":"https://gravatar.com/avatar/83f1fc35cd96b7f6bb40bfaac0f88b4d31f0b77f31c49136a7130d42e7d3992f?d=retro"}],"changelog":[{"hash":"e38ed036b96a10f12c20f2fd124b392aff161f50","time":1773512363000,"email":"nicostore.core@outlook.com","author":"nicostore.mathematica","message":"+"},{"hash":"8a3383f746c63c731ee7b7f829e4e72a4833f52e","time":1769088400000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"电控怎么这么难啊"},{"hash":"f29b3167a4e99274c966274f2eabdff8fd4d3891","time":1765706540000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"chapter-1"}]},"autoDesc":true,"filePathRelative":"analytical-mechanics/README.md","headers":[]}');
export {
  index_html as comp,
  data
};
