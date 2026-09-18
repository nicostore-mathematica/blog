import { u as useRoutes, f as useRouter, c as createElementBlock, a as createBaseVNode, o as openBlock } from "./app-C973mz5j.js";
const _sfc_main = {
  __name: "index.html",
  setup(__props) {
    const router = useRouter();
    const routes = useRoutes();
    const routeList = Object.keys(routes.value);
    const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);
    const target = routeList[getRandomInt(routeList.length)];
    router.push(target);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
        createBaseVNode("p", null, "正在随机跳转到一个页面……", -1)
      ])]);
    };
  }
};
const data = JSON.parse('{"path":"/random/","title":"随机跳转","lang":"zh-CN","frontmatter":{"changelog":false,"title":"随机跳转","permalink":"/random/","pageLayout":"doc","copyright":false,"feed":false,"createTime":"2025/03/05 19:49:07","comments":false,"article":false,"aside":false,"description":"正在随机跳转到一个页面……","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"随机跳转\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-10-03T09:26:51.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/random/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"随机跳转"}],["meta",{"property":"og:description","content":"正在随机跳转到一个页面……"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-10-03T09:26:51.000Z"}],["meta",{"property":"article:modified_time","content":"2025-10-03T09:26:51.000Z"}]]},"readingTime":{"minutes":0.25,"words":75},"git":{"createdTime":1759483611000,"updatedTime":1759483611000,"contributors":[{"name":"nicostore-mathematica","username":"nicostore-mathematica","email":"nicostore.core@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/nicostore-mathematica?v=4","url":"https://github.com/nicostore-mathematica"}]},"autoDesc":true,"filePathRelative":"random.md","headers":[]}');
export {
  _sfc_main as comp,
  data
};
