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
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "这部分是猫条老师的信号相关课程学习笔记.", -1)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("总字数：", -1)),
      createVNode(_component_WordCount, { type: "signal-analysis" })
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('{"path":"/signal-analysis/","title":"信号分析","lang":"zh-CN","frontmatter":{"title":"信号分析","permalink":"/signal-analysis/","createTime":"2026/03/30 18:23:51","description":"README 这部分是猫条老师的信号相关课程学习笔记. 总字数：","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"信号分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-03-30T10:28:08.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/signal-analysis/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"信号分析"}],["meta",{"property":"og:description","content":"README 这部分是猫条老师的信号相关课程学习笔记. 总字数："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-03-30T10:28:08.000Z"}],["meta",{"property":"article:modified_time","content":"2026-03-30T10:28:08.000Z"}]]},"readingTime":{"minutes":0.14,"words":42},"git":{"createdTime":1774866488000,"updatedTime":1774866488000,"contributors":[{"name":"nicostore-mathematica","username":"nicostore-mathematica","email":"nicostore.core@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/nicostore-mathematica?v=4","url":"https://github.com/nicostore-mathematica"}],"changelog":[{"hash":"8f52307a2df080d0a34adceba1e6e504358af937","time":1774866488000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"signal"}]},"autoDesc":true,"filePathRelative":"signal-analysis/README.md","headers":[]}');
export {
  index_html as comp,
  data
};
