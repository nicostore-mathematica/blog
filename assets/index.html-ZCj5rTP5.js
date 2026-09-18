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
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "这里是猫条的数学分析笔记，目的是建立一个符合自己的（自用）一个相对能看的笔记集。", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("p", null, "参考资料包括但不限于邓东皋老师的《数学分析简明教程》，高木贞治《解析概论》，梅加强老师的《数学分析讲义》，陆亚明老师的《数学分析入门》以及程艺老师的《数学分析讲义》", -1)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("总字数：", -1)),
      createVNode(_component_WordCount, { type: "integral" })
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('{"path":"/integral/","title":"数学分析","lang":"zh-CN","frontmatter":{"title":"数学分析","permalink":"/integral/","createTime":"2025/09/16 20:57:28","description":"README 这里是猫条的数学分析笔记，目的是建立一个符合自己的（自用）一个相对能看的笔记集。 参考资料包括但不限于邓东皋老师的《数学分析简明教程》，高木贞治《解析概论》，梅加强老师的《数学分析讲义》，陆亚明老师的《数学分析入门》以及程艺老师的《数学分析讲义》 总字数：","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数学分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-12-09T10:43:21.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/integral/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"数学分析"}],["meta",{"property":"og:description","content":"README 这里是猫条的数学分析笔记，目的是建立一个符合自己的（自用）一个相对能看的笔记集。 参考资料包括但不限于邓东皋老师的《数学分析简明教程》，高木贞治《解析概论》，梅加强老师的《数学分析讲义》，陆亚明老师的《数学分析入门》以及程艺老师的《数学分析讲义》 总字数："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-12-09T10:43:21.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-09T10:43:21.000Z"}]]},"readingTime":{"minutes":0.42,"words":125},"git":{"createdTime":1759483611000,"updatedTime":1765277001000,"contributors":[{"name":"nicostore-mathematica","username":"nicostore-mathematica","email":"nicostore.core@outlook.com","commits":5,"avatar":"https://avatars.githubusercontent.com/nicostore-mathematica?v=4","url":"https://github.com/nicostore-mathematica"}],"changelog":[{"hash":"752f1b17fbbbb0933750ccf12cb4c7148c97a01a","time":1765277001000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"integral"},{"hash":"03c0e10a39bfe6a931546fd6d8d594ae6cdef87c","time":1765016752000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"notes"},{"hash":"c9ee809f71681e268b78de5c0f0589c79b33932a","time":1760282032000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"plume"},{"hash":"a8b036783217a58660a0d5ca8011ad587f89626c","time":1759919973000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"cybernetics"},{"hash":"a28aa90a281a25859c8927850ce2f567458b1f57","time":1759483611000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"a"}]},"autoDesc":true,"filePathRelative":"integral/README.md","headers":[]}');
export {
  index_html as comp,
  data
};
