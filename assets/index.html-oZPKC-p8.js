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
    _cache[2] || (_cache[2] = createBaseVNode("p", null, "这是猫条的代数学笔记，这部分的内容主要也是留档。我当时的老师是张旭，上课很好但我并未留下很详实的笔记。所以这里也在用自己的方式缝缝补补尝试建立自己的体系。", -1)),
    _cache[3] || (_cache[3] = createBaseVNode("p", null, "参考书为谢启鸿、姚慕生《高等代数学》，此外还有互联网上的一些材料.", -1)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("总字数：", -1)),
      createVNode(_component_WordCount, { type: "algebra" })
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('{"path":"/algebra/","title":"代数基础","lang":"zh-CN","frontmatter":{"title":"代数基础","permalink":"/algebra/","createTime":"2025/09/16 20:57:28","description":"README 这是猫条的代数学笔记，这部分的内容主要也是留档。我当时的老师是张旭，上课很好但我并未留下很详实的笔记。所以这里也在用自己的方式缝缝补补尝试建立自己的体系。 参考书为谢启鸿、姚慕生《高等代数学》，此外还有互联网上的一些材料. 总字数：","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代数基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-12-25T08:52:02.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/algebra/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"代数基础"}],["meta",{"property":"og:description","content":"README 这是猫条的代数学笔记，这部分的内容主要也是留档。我当时的老师是张旭，上课很好但我并未留下很详实的笔记。所以这里也在用自己的方式缝缝补补尝试建立自己的体系。 参考书为谢启鸿、姚慕生《高等代数学》，此外还有互联网上的一些材料. 总字数："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-12-25T08:52:02.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-25T08:52:02.000Z"}]]},"readingTime":{"minutes":0.4,"words":121},"git":{"createdTime":1759483611000,"updatedTime":1766652722000,"contributors":[{"name":"nicostore-mathematica","username":"nicostore-mathematica","email":"nicostore.core@outlook.com","commits":3,"avatar":"https://avatars.githubusercontent.com/nicostore-mathematica?v=4","url":"https://github.com/nicostore-mathematica"}],"changelog":[{"hash":"84287f6ae440acf949c5e41437154de63ba1cb98","time":1766652722000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"notes"},{"hash":"c9ee809f71681e268b78de5c0f0589c79b33932a","time":1760282032000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"plume"},{"hash":"a28aa90a281a25859c8927850ce2f567458b1f57","time":1759483611000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"a"}]},"autoDesc":true,"filePathRelative":"algebra/README.md","headers":[]}');
export {
  index_html as comp,
  data
};
