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
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "这个专业的性质使然所以我们要学大量光学工程的内容，所以这部分笔记应运而生。参考书为钟锡华老师的《现代光学基础》等", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("p", null, "后续应该会加上激光原理乃至于应用光学的内容。", -1)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("总字数：", -1)),
      createVNode(_component_WordCount, { type: "optics" })
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('{"path":"/optics/","title":"基础光学","lang":"zh-CN","frontmatter":{"title":"基础光学","permalink":"/optics/","createTime":"2025/11/18 20:57:28","description":"README 这个专业的性质使然所以我们要学大量光学工程的内容，所以这部分笔记应运而生。参考书为钟锡华老师的《现代光学基础》等 后续应该会加上激光原理乃至于应用光学的内容。 总字数：","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础光学\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-07-12T18:56:22.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/optics/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"基础光学"}],["meta",{"property":"og:description","content":"README 这个专业的性质使然所以我们要学大量光学工程的内容，所以这部分笔记应运而生。参考书为钟锡华老师的《现代光学基础》等 后续应该会加上激光原理乃至于应用光学的内容。 总字数："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-07-12T18:56:22.000Z"}],["meta",{"property":"article:modified_time","content":"2026-07-12T18:56:22.000Z"}]]},"readingTime":{"minutes":0.31,"words":93},"git":{"createdTime":1763467014000,"updatedTime":1783882582000,"contributors":[{"name":"nicostore-mathematica","username":"nicostore-mathematica","email":"nicostore.core@outlook.com","commits":3,"avatar":"https://avatars.githubusercontent.com/nicostore-mathematica?v=4","url":"https://github.com/nicostore-mathematica"},{"name":"nicostore.mathematica","username":"","email":"nicostore.core@outlook.com","commits":1,"avatar":"https://gravatar.com/avatar/83f1fc35cd96b7f6bb40bfaac0f88b4d31f0b77f31c49136a7130d42e7d3992f?d=retro"}],"changelog":[{"hash":"a891a1dbc82a059991c84d7997d943aff5f772b8","time":1783882582000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"travel-1"},{"hash":"1eede73327dcb5307a60e2f5e153fe17ae45f7c0","time":1773411987000,"email":"nicostore.core@outlook.com","author":"nicostore.mathematica","message":"elec"},{"hash":"1bca126ce10737357f1fb32bf8f4a205beef1b6c","time":1764309768000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"physics-5"},{"hash":"9b4bb352876fa5c47866c47bd3b8d0beaa820ccb","time":1763467014000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"op"}]},"autoDesc":true,"filePathRelative":"optics/README.md","headers":[]}');
export {
  index_html as comp,
  data
};
