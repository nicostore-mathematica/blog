import { _ as _export_sfc, c as createElementBlock, e as createStaticVNode, a as createBaseVNode, b as createTextVNode, o as openBlock } from "./app-C973mz5j.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="part-1-线性映射的概念" tabindex="-1"><a class="header-anchor" href="#part-1-线性映射的概念"><span>Part 1 线性映射的概念</span></a></h2><h3 id="·-映射" tabindex="-1"><a class="header-anchor" href="#·-映射"><span>· 映射</span></a></h3><p>所谓映射，是指从一个集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 到另一个集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 的对应 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo>:</mo><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">\\varphi: A \\to B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>.</p><p>对 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中任一元素 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span>，均有唯一的元素 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi><mo>∈</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">b \\in B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 与之对应，记之为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi><mo>=</mo><mi>φ</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">b = \\varphi(a)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span></span></span></span>. 元素 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> 称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> 在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 下的像，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> 称为元素 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> 的原像或逆像.</p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中元素在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 下的像全体构成 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 的一个子集，记之为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\varphi(A)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span></span></span></span> 或 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Im</mi><mo>⁡</mo><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\operatorname{Im} \\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mop"><span class="mord mathrm">Im</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">φ</span></span></span></span>.</p><p>如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Im</mi><mo>⁡</mo><mi>φ</mi><mo>=</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">\\operatorname{Im} \\varphi = B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mop"><span class="mord mathrm">Im</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">φ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>，即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 中任一元素 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> 均在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中有元素 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span>，使 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi><mo>=</mo><mi>φ</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">b = \\varphi(a)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span></span></span></span>，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是满映射或称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是映上的映射.</p><blockquote><p>如果映射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 适合下列条件：若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo mathvariant="normal">≠</mo><msup><mi>a</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow><annotation encoding="application/x-tex">a \\ne a&#39;</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7519em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span>，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo mathvariant="normal">≠</mo><mi>φ</mi><mo stretchy="false">(</mo><msup><mi>a</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\varphi(a) \\ne \\varphi(a&#39;)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0019em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，那么就称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是单映射.</p><p>单映射的另外一个等价说法是从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mi>φ</mi><mo stretchy="false">(</mo><msup><mi>a</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\varphi(a) = \\varphi(a&#39;)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0019em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> 可推出 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>=</mo><msup><mi>a</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow><annotation encoding="application/x-tex">a = a&#39;</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7519em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span>. 如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 既是单映射又是满映射，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是双射.</p><p>这时不仅对 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中的任一元素，有且仅有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 中的一个元素与之对应；而且对 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 中的任一元素，有且仅有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中的一个元素与之对应.</p><p>因此，双射又称为一一对应.</p></blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>M</mi><mi>n</mi></msub><mo stretchy="false">(</mo><mi mathvariant="double-struck">R</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">M_n(\\mathbb{R})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathbb">R</span><span class="mclose">)</span></span></span></span> 是实数域 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo stretchy="false">(</mo><mi>n</mi><mo>&gt;</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">n (n &gt; 1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">n</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span> 阶方阵全体组成的集合，定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>M</mi><mi>n</mi></msub><mo stretchy="false">(</mo><mi mathvariant="double-struck">R</mi><mo stretchy="false">)</mo><mo>→</mo><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">M_n(\\mathbb{R}) \\to \\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.109em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathbb">R</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 的映射为：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mi>det</mi><mo>⁡</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">\\varphi(A) = \\det A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mop">det</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">A</span></span></span></span>，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是映射，且这是个映上的映射，但它不是单映射. 事实上，对 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 中任意一个实数，均有无穷多个矩阵，其行列式值等于这个实数.</p><blockquote><p>Descartes 平面上的点到实数偶之间的对应：</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>φ</mi><mo>:</mo><mi>C</mi><mo>↦</mo><mo stretchy="false">(</mo><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">)</mo><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\varphi: C \\mapsto (a,b), </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6943em;vertical-align:-0.011em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">↦</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mclose">)</span><span class="mpunct">,</span></span></span></span></span></p><p>其中点 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>C</mi></mrow><annotation encoding="application/x-tex">C</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span></span></span></span> 的横坐标为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span>，纵坐标为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span>. 这是一个映射且是一个双射，即一一对应.</p></blockquote><p>若集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 是集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 的子集，作 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">A \\to B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 的映射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>j</mi></mrow><annotation encoding="application/x-tex">j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span></span></span></span>：</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>j</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mi>a</mi><mo separator="true">,</mo><mtext> </mtext><mi>a</mi><mo>∈</mo><mi>A</mi><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">j(a) = a,\\ a \\in A, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">A</span><span class="mpunct">,</span></span></span></span></span></p><p>则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>j</mi></mrow><annotation encoding="application/x-tex">j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span></span></span></span> 是一个映射且显然是单映射. 若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>=</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">A = B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>j</mi></mrow><annotation encoding="application/x-tex">j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span></span></span></span> 是一个一一对应，这时映射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>j</mi></mrow><annotation encoding="application/x-tex">j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span></span></span></span> 实际上把 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中任一元素映射为自身，因此称为恒等映射，记为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mn>1</mn><mi>A</mi></msub></mrow><annotation encoding="application/x-tex">1_A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7944em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 或 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>I</mi><mi>A</mi></msub></mrow><annotation encoding="application/x-tex">I_A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>.</p><p>一个集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 到自身的映射通常称为变换，比如 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">y = x^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span> 可以看成是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 自身的变换.</p><p>集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 的两个映射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 与 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi></mrow><annotation encoding="application/x-tex">g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span> 称为是相等的当且仅当对任意的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>∈</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">a \\in A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>，都有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mi>g</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(a) = g(a)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span></span></span></span>，这时记 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>=</mo><mi>g</mi></mrow><annotation encoding="application/x-tex">f = g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span>.</p><p>若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 是集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">A \\to B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 的映射，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi></mrow><annotation encoding="application/x-tex">g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span> 是集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi><mo>→</mo><mi>C</mi></mrow><annotation encoding="application/x-tex">B \\to C</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span></span></span></span> 的映射，定义映射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi></mrow><annotation encoding="application/x-tex">g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span> 与 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 的复合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mo>∘</mo><mi>f</mi></mrow><annotation encoding="application/x-tex">g \\circ f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 为集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>→</mo><mi>C</mi></mrow><annotation encoding="application/x-tex">A \\to C</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span></span></span></span> 的映射，且</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mi>g</mi><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo separator="true">,</mo><mtext> </mtext><mi>a</mi><mo>∈</mo><mi>A</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">(g \\circ f)(a) = g(f(a)),\\ a \\in A. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">)</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">))</span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord">.</span></span></span></span></span></p><p>这里需要注意的是并非任意两个映射都有复合. 只有当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 的像落在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi></mrow><annotation encoding="application/x-tex">g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span> 所定义的集合上时才可定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi></mrow><annotation encoding="application/x-tex">g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span> 与 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 的复合. 如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>=</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">A = B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>，那么 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 上的任意两个变换都可复合.</p><p>若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">A \\to B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 的映射，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi></mrow><annotation encoding="application/x-tex">g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi><mo>→</mo><mi>C</mi></mrow><annotation encoding="application/x-tex">B \\to C</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span></span></span></span> 的映射，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>h</mi></mrow><annotation encoding="application/x-tex">h</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">h</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>C</mi><mo>→</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">C \\to D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 的映射，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>h</mi><mo>∘</mo><mo stretchy="false">(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">h \\circ (g \\circ f)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">h</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">)</span></span></span></span> 及 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>h</mi><mo>∘</mo><mi>g</mi><mo stretchy="false">)</mo><mo>∘</mo><mi>f</mi></mrow><annotation encoding="application/x-tex">(h \\circ g) \\circ f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">h</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 都是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>→</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">A \\to D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 的映射且对任意的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>∈</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">a \\in A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>，有</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mo stretchy="false">(</mo><mi>h</mi><mo>∘</mo><mi>g</mi><mo stretchy="false">)</mo><mo>∘</mo><mi>f</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi>h</mi><mo>∘</mo><mi>g</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mi>h</mi><mo stretchy="false">(</mo><mi>g</mi><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">((h \\circ g) \\circ f)(a) = (h \\circ g)(f(a)) = h(g(f(a))), </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">((</span><span class="mord mathnormal">h</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">)</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">h</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mclose">)</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">))</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">h</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)))</span><span class="mpunct">,</span></span></span></span></span></p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mi>h</mi><mo>∘</mo><mo stretchy="false">(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mi>h</mi><mo stretchy="false">(</mo><mo stretchy="false">(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mi>h</mi><mo stretchy="false">(</mo><mi>g</mi><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">(h \\circ (g \\circ f))(a) = h((g \\circ f)(a)) = h(g(f(a))), </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">h</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">))</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">h</span><span class="mopen">((</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">)</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">))</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">h</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)))</span><span class="mpunct">,</span></span></span></span></span></p><p>因此</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mi>h</mi><mo>∘</mo><mi>g</mi><mo stretchy="false">)</mo><mo>∘</mo><mi>f</mi><mo>=</mo><mi>h</mi><mo>∘</mo><mo stretchy="false">(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo stretchy="false">)</mo><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">(h \\circ g) \\circ f = h \\circ (g \\circ f). </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">h</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">h</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">)</span><span class="mord">.</span></span></span></span></span></p><p>上式通常称为映射复合的结合律. 正因为如此，我们写 3 个（或 3 个以上）映射的复合时常省略去括号，写为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>h</mi><mo>∘</mo><mi>g</mi><mo>∘</mo><mi>f</mi></mrow><annotation encoding="application/x-tex">h \\circ g \\circ f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">h</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span>. 通常复合号 “<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>∘</mo></mrow><annotation encoding="application/x-tex">\\circ</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4445em;"></span><span class="mord">∘</span></span></span></span>” 也省略，即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mo>∘</mo><mi>f</mi></mrow><annotation encoding="application/x-tex">g \\circ f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 写为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mi>f</mi></mrow><annotation encoding="application/x-tex">gf</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span>.</p><p>下面我们着重讨论一下双射.</p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">A \\to B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 的双射，我们定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi><mo>→</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">B \\to A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的映射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi></mrow><annotation encoding="application/x-tex">g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span> 如下：对任一 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi><mo>∈</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">b \\in B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>，取 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> 在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 下的原像记为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span>，定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mi>a</mi></mrow><annotation encoding="application/x-tex">g(b) = a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span>. 由于 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 是双射，故对 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 中的元素 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span>，有且仅有一个 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> 作为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> 在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 下的原像.</p><p>因此 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi></mrow><annotation encoding="application/x-tex">g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span> 确是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi><mo>→</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">B \\to A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的映射. 不仅如此，显然 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi></mrow><annotation encoding="application/x-tex">g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span> 也是一个双射，且</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>g</mi><mi>f</mi><mo>=</mo><msub><mn>1</mn><mi>A</mi></msub><mo separator="true">,</mo><mtext> </mtext><mi>f</mi><mi>g</mi><mo>=</mo><msub><mn>1</mn><mi>B</mi></msub><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">gf = 1_A,\\ fg = 1_B. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7944em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05017em;">B</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">.</span></span></span></span></span></p><p>我们称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi></mrow><annotation encoding="application/x-tex">g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 的逆映射，记为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mo>=</mo><msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">g = f^{-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span>.</p></blockquote><p><strong>命题1</strong>. 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 是集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow><annotation encoding="application/x-tex">A \\to B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 的映射，如果存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi><mo>→</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">B \\to A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的映射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi></mrow><annotation encoding="application/x-tex">g</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span></span></span></span>，使</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>g</mi><mi>f</mi><mo>=</mo><msub><mn>1</mn><mi>A</mi></msub><mo separator="true">,</mo><mtext> </mtext><mi>f</mi><mi>g</mi><mo>=</mo><msub><mn>1</mn><mi>B</mi></msub><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">gf = 1_A,\\ fg = 1_B, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05017em;">B</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span></span></span></span></span></p><p>则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 是双射且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mo>=</mo><msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">g = f^{-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span>.</p><blockquote><p>先证 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 是单映射：若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(a_1) = f(a_2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，则由 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mi>f</mi><mo stretchy="false">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mn>1</mn><mi>A</mi></msub><mo stretchy="false">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">gf(a_1) = 1_A(a_1) = a_1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mi>f</mi><mo stretchy="false">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mn>1</mn><mi>A</mi></msub><mo stretchy="false">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">gf(a_2) = 1_A(a_2) = a_2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>，知 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">a_1 = a_2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>，因此 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 为单映射.</p><p>又对 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 中任一元素 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo><mo>∈</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">g(b) \\in A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mi>g</mi><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mn>1</mn><mi>B</mi></msub><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">fg(b) = 1_B(b) = b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05017em;">B</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span>. 因此 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">g(b)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>b</mi></mrow><annotation encoding="application/x-tex">b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> 在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 下的原像，即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 是映上的映射.</p></blockquote><p>从命题1 的证明中可看出，从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>g</mi><mi>f</mi><mo>=</mo><msub><mn>1</mn><mi>A</mi></msub></mrow><annotation encoding="application/x-tex">gf = 1_A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7944em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 可推出 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 是单映射，从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mi>g</mi><mo>=</mo><msub><mn>1</mn><mi>B</mi></msub></mrow><annotation encoding="application/x-tex">fg = 1_B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7944em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord">1</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05017em;">B</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 可推出 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 是满映射.</p><h3 id="·-线性映射" tabindex="-1"><a class="header-anchor" href="#·-线性映射"><span>· 线性映射</span></a></h3><p>现在我们转而来考虑线性映射.</p><p><strong>定义1</strong></p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是数域 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">K</mi></mrow><annotation encoding="application/x-tex">\\mathbb{K}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">K</span></span></span></span> 上线性空间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">K</mi></mrow><annotation encoding="application/x-tex">\\mathbb{K}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">K</span></span></span></span> 上线性空间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi></mrow><annotation encoding="application/x-tex">U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 的映射，如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 适合下列条件：</p><p>(1) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>α</mi><mo>+</mo><mi>β</mi><mo stretchy="false">)</mo><mo>=</mo><mi>φ</mi><mo stretchy="false">(</mo><mi>α</mi><mo stretchy="false">)</mo><mo>+</mo><mi>φ</mi><mo stretchy="false">(</mo><mi>β</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\varphi(\\alpha + \\beta) = \\varphi(\\alpha) + \\varphi(\\beta)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mclose">)</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>α</mi><mo separator="true">,</mo><mi>β</mi><mo>∈</mo><mi>V</mi></mrow><annotation encoding="application/x-tex">\\alpha, \\beta \\in V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span>；</p><p>(2) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>k</mi><mi>α</mi><mo stretchy="false">)</mo><mo>=</mo><mi>k</mi><mi>φ</mi><mo stretchy="false">(</mo><mi>α</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\varphi(k\\alpha) = k\\varphi(\\alpha)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mo>∈</mo><mi mathvariant="double-struck">K</mi></mrow><annotation encoding="application/x-tex">k \\in \\mathbb{K}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">K</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>α</mi><mo>∈</mo><mi>V</mi></mrow><annotation encoding="application/x-tex">\\alpha \\in V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span>，</p><p>则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo>→</mo><mi>U</mi></mrow><annotation encoding="application/x-tex">V \\to U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 的线性映射. <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 到自身的线性映射称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 上的线性变换. 若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>U</mi></mrow><annotation encoding="application/x-tex">\\varphi: V \\to U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 作为映射是单的，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是单线性映射；如 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 作为映射是满的，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是满线性映射.</p><p>若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是双射，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是线性同构，简称同构. 若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo>=</mo><mi>U</mi></mrow><annotation encoding="application/x-tex">V = U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 自身上的同构称为自同构.</p></blockquote><p>/example/</p>', 35),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "U")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V,U")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8778em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10903em" }
              }, "U")
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上的线性空间，定义 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode(" 为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "→"),
                  createBaseVNode("mi", null, "U")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V \\to U")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "→"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10903em" }
              }, "U")
            ])
          ])
        ]),
        createTextVNode(" 的映射，且对一切 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "α"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\alpha \\in V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.5782em", "vertical-align": "-0.0391em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.0037em" }
              }, "α"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "∈"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode("，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "α"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mn", null, "0")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi(\\alpha) = 0")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "1em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.0037em" }
              }, "α"),
              createBaseVNode("span", { class: "mclose" }, ")"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "="),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6444em" }
              }),
              createBaseVNode("span", { class: "mord" }, "0")
            ])
          ])
        ]),
        createTextVNode("，则 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode(" 是一个线性映射，称之为零映射，通常记为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mn", null, "0")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "0")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6444em" }
              }),
              createBaseVNode("span", { class: "mord" }, "0")
            ])
          ])
        ]),
        createTextVNode("，但要注意这是一个映射.")
      ]),
      createBaseVNode("hr"),
      createBaseVNode("p", null, [
        createTextVNode("设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上的线性空间，定义 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 到自身的映射为恒等映射 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mn", null, "1"),
                    createBaseVNode("mi", null, "V")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "1_V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.7944em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord" }, "1"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3283em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", {
                              class: "mord mathnormal mtight",
                              style: { "margin-right": "0.22222em" }
                            }, "V")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode("，则显然 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mn", null, "1"),
                    createBaseVNode("mi", null, "V")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "1_V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.7944em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord" }, "1"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3283em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", {
                              class: "mord mathnormal mtight",
                              style: { "margin-right": "0.22222em" }
                            }, "V")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 上的线性变换，称为恒等变换，记为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "I"),
                    createBaseVNode("mi", null, "V")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "I_V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8333em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.07847em" }
                }, "I"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3283em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.0785em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", {
                              class: "mord mathnormal mtight",
                              style: { "margin-right": "0.22222em" }
                            }, "V")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode(" 或 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "I"),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mi", null, "V")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "Id_V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8444em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.07847em" }
              }, "I"),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3283em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", {
                              class: "mord mathnormal mtight",
                              style: { "margin-right": "0.22222em" }
                            }, "V")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode("，在不致于混淆的情形下，也简记为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "I")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "I")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.07847em" }
              }, "I")
            ])
          ])
        ]),
        createTextVNode(".")
      ]),
      createBaseVNode("hr"),
      createBaseVNode("p", null, [
        createTextVNode("设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "K"),
                    createBaseVNode("mi", null, "n")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V = \\mathbb{K}_n")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "="),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8389em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathbb" }, "K"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.1514em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mathnormal mtight" }, "n")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode("，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "U"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "K"),
                    createBaseVNode("mi", null, "m")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "U = \\mathbb{K}_m")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10903em" }
              }, "U"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "="),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8389em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathbb" }, "K"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.1514em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode(" 分别是数域 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上的 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "n")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "n")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "n")
            ])
          ])
        ]),
        createTextVNode(" 维和 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "m")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "m")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "m")
            ])
          ])
        ]),
        createTextVNode(" 维列向量空间，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "A")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "A")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "A")
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上一个已知的 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "m"),
                  createBaseVNode("mo", null, "×"),
                  createBaseVNode("mi", null, "n")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "m \\times n")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6667em", "vertical-align": "-0.0833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "m"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              }),
              createBaseVNode("span", { class: "mbin" }, "×"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "n")
            ])
          ])
        ]),
        createTextVNode(" 矩阵，定义 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "→"),
                  createBaseVNode("mi", null, "U")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V \\to U")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "→"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10903em" }
              }, "U")
            ])
          ])
        ]),
        createTextVNode(" 的映射 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode(" 为")
      ]),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "A"),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mi", { mathvariant: "normal" }, ".")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi(\\alpha) = A\\alpha. ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6833em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "A"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", { class: "mord" }, ".")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("这个映射由矩阵乘法定义（"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "m"),
                  createBaseVNode("mo", null, "×"),
                  createBaseVNode("mi", null, "n")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "m \\times n")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6667em", "vertical-align": "-0.0833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "m"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              }),
              createBaseVNode("span", { class: "mbin" }, "×"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "n")
            ])
          ])
        ]),
        createTextVNode(" 矩阵乘以 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "n")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "n")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "n")
            ])
          ])
        ]),
        createTextVNode(" 维列向量是一个 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "m")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "m")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "m")
            ])
          ])
        ]),
        createTextVNode(" 维列向量），由矩阵乘法性质容易验证 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode(" 是一个线性映射.")
      ]),
      createBaseVNode("hr"),
      createBaseVNode("p", null, [
        createTextVNode("设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msup", null, [
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "K"),
                    createBaseVNode("mi", null, "n")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}^n")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathbb" }, "K"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.6644em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-3.063em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mathnormal mtight" }, "n")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "n")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "n")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "n")
            ])
          ])
        ]),
        createTextVNode(" 维行向量空间，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "K"),
                    createBaseVNode("mi", null, "n")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}_n")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8389em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathbb" }, "K"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.1514em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mathnormal mtight" }, "n")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "n")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "n")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "n")
            ])
          ])
        ]),
        createTextVNode(" 维列向量空间，定义 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msup", null, [
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "K"),
                    createBaseVNode("mi", null, "n")
                  ]),
                  createBaseVNode("mo", null, "→"),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "K"),
                    createBaseVNode("mi", null, "n")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}^n \\to \\mathbb{K}_n")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathbb" }, "K"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.6644em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-3.063em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mathnormal mtight" }, "n")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "→"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8389em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathbb" }, "K"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.1514em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mathnormal mtight" }, "n")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode(" 的映射 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode("：")
      ]),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "a"),
                      createBaseVNode("mn", null, "1")
                    ]),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "a"),
                      createBaseVNode("mn", null, "2")
                    ]),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mo", null, "⋯"),
                    createBaseVNode("mtext", null, " "),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "a"),
                      createBaseVNode("mi", null, "n")
                    ]),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "↦"),
                    createBaseVNode("mrow", null, [
                      createBaseVNode("mo", { fence: "true" }, "("),
                      createBaseVNode("mtable", {
                        rowspacing: "0.16em",
                        columnalign: "center",
                        columnspacing: "1em"
                      }, [
                        createBaseVNode("mtr", null, [
                          createBaseVNode("mtd", null, [
                            createBaseVNode("mstyle", {
                              scriptlevel: "0",
                              displaystyle: "false"
                            }, [
                              createBaseVNode("msub", null, [
                                createBaseVNode("mi", null, "a"),
                                createBaseVNode("mn", null, "1")
                              ])
                            ])
                          ])
                        ]),
                        createBaseVNode("mtr", null, [
                          createBaseVNode("mtd", null, [
                            createBaseVNode("mstyle", {
                              scriptlevel: "0",
                              displaystyle: "false"
                            }, [
                              createBaseVNode("msub", null, [
                                createBaseVNode("mi", null, "a"),
                                createBaseVNode("mn", null, "2")
                              ])
                            ])
                          ])
                        ]),
                        createBaseVNode("mtr", null, [
                          createBaseVNode("mtd", null, [
                            createBaseVNode("mstyle", {
                              scriptlevel: "0",
                              displaystyle: "false"
                            }, [
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", { mathvariant: "normal" }, "⋮"),
                                createBaseVNode("mpadded", {
                                  height: "0em",
                                  voffset: "0em"
                                }, [
                                  createBaseVNode("mspace", {
                                    mathbackground: "black",
                                    width: "0em",
                                    height: "1.5em"
                                  })
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createBaseVNode("mtr", null, [
                          createBaseVNode("mtd", null, [
                            createBaseVNode("mstyle", {
                              scriptlevel: "0",
                              displaystyle: "false"
                            }, [
                              createBaseVNode("msub", null, [
                                createBaseVNode("mi", null, "a"),
                                createBaseVNode("mi", null, "n")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createBaseVNode("mo", { fence: "true" }, ")")
                    ]),
                    createBaseVNode("mo", { separator: "true" }, ",")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "(a_1, a_2, \\cdots, a_n) \\mapsto \\begin{pmatrix} a_1 \\\\ a_2 \\\\ \\vdots \\\\ a_n \\end{pmatrix}, ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3011em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, "1")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3011em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, "2")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "minner" }, "⋯"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.1514em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "n")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "↦"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "5.46em", "vertical-align": "-2.48em" }
                }),
                createBaseVNode("span", { class: "minner" }, [
                  createBaseVNode("span", { class: "mopen" }, [
                    createBaseVNode("span", { class: "delimsizing mult" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2.95em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.95em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "7.4em" }
                              }),
                              createBaseVNode("span", { style: { "width": "0.875em", "height": "5.400em" } }, [
                                createBaseVNode("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "0.875em",
                                  height: "5.400em",
                                  viewBox: "0 0 875 5400"
                                }, [
                                  createBaseVNode("path", { d: "M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0,1884c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-1892c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z" })
                                ])
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2.45em" }
                          }, [
                            createBaseVNode("span")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("span", { class: "mord" }, [
                    createBaseVNode("span", { class: "mtable" }, [
                      createBaseVNode("span", { class: "col-align-c" }, [
                        createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                          createBaseVNode("span", { class: "vlist-r" }, [
                            createBaseVNode("span", {
                              class: "vlist",
                              style: { "height": "2.98em" }
                            }, [
                              createBaseVNode("span", { style: { "top": "-5.8275em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.6875em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                    createBaseVNode("span", { class: "msupsub" }, [
                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.3011em" }
                                          }, [
                                            createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                              createBaseVNode("span", {
                                                class: "pstrut",
                                                style: { "height": "2.7em" }
                                              }),
                                              createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                                createBaseVNode("span", { class: "mord mtight" }, "1")
                                              ])
                                            ])
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.15em" }
                                          }, [
                                            createBaseVNode("span")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createBaseVNode("span", { style: { "top": "-4.6275em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.6875em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                    createBaseVNode("span", { class: "msupsub" }, [
                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.3011em" }
                                          }, [
                                            createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                              createBaseVNode("span", {
                                                class: "pstrut",
                                                style: { "height": "2.7em" }
                                              }),
                                              createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                                createBaseVNode("span", { class: "mord mtight" }, "2")
                                              ])
                                            ])
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.15em" }
                                          }, [
                                            createBaseVNode("span")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createBaseVNode("span", { style: { "top": "-2.7675em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.6875em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mord" }, "⋮"),
                                    createBaseVNode("span", {
                                      class: "mord rule",
                                      style: { "border-right-width": "0em", "border-top-width": "1.5em", "bottom": "0em" }
                                    })
                                  ])
                                ])
                              ]),
                              createBaseVNode("span", { style: { "top": "-1.5675em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.6875em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                    createBaseVNode("span", { class: "msupsub" }, [
                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.1514em" }
                                          }, [
                                            createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                              createBaseVNode("span", {
                                                class: "pstrut",
                                                style: { "height": "2.7em" }
                                              }),
                                              createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "n")
                                              ])
                                            ])
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.15em" }
                                          }, [
                                            createBaseVNode("span")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createBaseVNode("span", { class: "vlist-s" }, "​")
                          ]),
                          createBaseVNode("span", { class: "vlist-r" }, [
                            createBaseVNode("span", {
                              class: "vlist",
                              style: { "height": "2.48em" }
                            }, [
                              createBaseVNode("span")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("span", { class: "mclose" }, [
                    createBaseVNode("span", { class: "delimsizing mult" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2.95em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.95em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "7.4em" }
                              }),
                              createBaseVNode("span", { style: { "width": "0.875em", "height": "5.400em" } }, [
                                createBaseVNode("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "0.875em",
                                  height: "5.400em",
                                  viewBox: "0 0 875 5400"
                                }, [
                                  createBaseVNode("path", { d: "M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,1809\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-1944c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z" })
                                ])
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2.45em" }
                          }, [
                            createBaseVNode("span")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mpunct" }, ",")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("则容易验证 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode(" 是线性同构.")
      ]),
      createBaseVNode("hr"),
      createBaseVNode("p", null, [
        createTextVNode("设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上的线性空间，定义 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 上变换 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode("，对任意的 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "α"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\alpha \\in V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.5782em", "vertical-align": "-0.0391em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.0037em" }
              }, "α"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "∈"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode("，有")
      ]),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "k"),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mo", { separator: "true" }, ",")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi(\\alpha) = k\\alpha, ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.8889em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03148em" }
                }, "k"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", { class: "mpunct" }, ",")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("其中 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "k")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "k")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6944em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03148em" }
              }, "k")
            ])
          ])
        ]),
        createTextVNode(" 是一个固定常数，则 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 上线性变换，这个变换常称之为纯量变换或数量变换.")
      ]),
      createBaseVNode("hr"),
      createBaseVNode("p", null, [
        createTextVNode("设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 是区间 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", { stretchy: "false" }, "["),
                  createBaseVNode("mn", null, "0"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mn", null, "1"),
                  createBaseVNode("mo", { stretchy: "false" }, "]")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "[0,1]")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "1em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mopen" }, "["),
              createBaseVNode("span", { class: "mord" }, "0"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord" }, "1"),
              createBaseVNode("span", { class: "mclose" }, "]")
            ])
          ])
        ]),
        createTextVNode(" 上的实无穷次可微函数全体组成的实线性空间，定义 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode(" 为求导变换")
      ]),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mfrac", null, [
                      createBaseVNode("mi", { mathvariant: "normal" }, "d"),
                      createBaseVNode("mrow", null, [
                        createBaseVNode("mi", { mathvariant: "normal" }, "d"),
                        createBaseVNode("mi", null, "x")
                      ])
                    ]),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { separator: "true" }, ",")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi(f(x)) = \\frac{\\mathrm{d}}{\\mathrm{d}x}f(x), ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                createBaseVNode("span", { class: "mclose" }, "))"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "2.0574em", "vertical-align": "-0.686em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mopen nulldelimiter" }),
                  createBaseVNode("span", { class: "mfrac" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "1.3714em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3em" }
                            }),
                            createBaseVNode("span", { class: "mord" }, [
                              createBaseVNode("span", { class: "mord mathrm" }, "d"),
                              createBaseVNode("span", { class: "mord mathnormal" }, "x")
                            ])
                          ]),
                          createBaseVNode("span", { style: { "top": "-3.23em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3em" }
                            }),
                            createBaseVNode("span", {
                              class: "frac-line",
                              style: { "border-bottom-width": "0.04em" }
                            })
                          ]),
                          createBaseVNode("span", { style: { "top": "-3.677em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3em" }
                            }),
                            createBaseVNode("span", { class: "mord" }, [
                              createBaseVNode("span", { class: "mord mathrm" }, "d")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.686em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("span", { class: "mclose nulldelimiter" })
                ]),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mpunct" }, ",")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("由求导性质知 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 上的线性变换.")
      ])
    ], -1),
    createStaticVNode('<p><strong>命题2</strong>：设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo>→</mo><mi>U</mi></mrow><annotation encoding="application/x-tex">V \\to U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 的线性映射，则</p><p>(1) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\varphi(0) = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>；</p><p>(2) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>k</mi><mi>α</mi><mo>+</mo><mi>l</mi><mi>β</mi><mo stretchy="false">)</mo><mo>=</mo><mi>k</mi><mi>φ</mi><mo stretchy="false">(</mo><mi>α</mi><mo stretchy="false">)</mo><mo>+</mo><mi>l</mi><mi>φ</mi><mo stretchy="false">(</mo><mi>β</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\varphi(k\\alpha + l\\beta) = k\\varphi(\\alpha) + l\\varphi(\\beta)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">lβ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">lφ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mclose">)</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>α</mi><mo separator="true">,</mo><mi>β</mi><mo>∈</mo><mi>V</mi></mrow><annotation encoding="application/x-tex">\\alpha, \\beta \\in V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mo separator="true">,</mo><mi>l</mi><mo>∈</mo><mi mathvariant="double-struck">K</mi></mrow><annotation encoding="application/x-tex">k, l \\in \\mathbb{K}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">K</span></span></span></span>；</p><p>(3) 若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是同构，则其逆映射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>φ</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">\\varphi^{-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span> 也是线性映射，从而是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi><mo>→</mo><mi>V</mi></mrow><annotation encoding="application/x-tex">U \\to V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 的同构.</p><blockquote><p>(1).</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mi>φ</mi><mo stretchy="false">(</mo><mn>0</mn><mo>⋅</mo><mi>α</mi><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn><mo>⋅</mo><mi>φ</mi><mo stretchy="false">(</mo><mi>α</mi><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\varphi(0) = \\varphi(0 \\cdot \\alpha) = 0 \\cdot \\varphi(\\alpha) = 0 </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord">0</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></span></p><p>(2).</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>k</mi><mi>α</mi><mo>+</mo><mi>l</mi><mi>β</mi><mo stretchy="false">)</mo><mo>=</mo><mi>φ</mi><mo stretchy="false">(</mo><mi>k</mi><mi>α</mi><mo stretchy="false">)</mo><mo>+</mo><mi>φ</mi><mo stretchy="false">(</mo><mi>l</mi><mi>β</mi><mo stretchy="false">)</mo><mo>=</mo><mi>k</mi><mi>φ</mi><mo stretchy="false">(</mo><mi>α</mi><mo stretchy="false">)</mo><mo>+</mo><mi>l</mi><mi>φ</mi><mo stretchy="false">(</mo><mi>β</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\varphi(k\\alpha + l\\beta) = \\varphi(k\\alpha) + \\varphi(l\\beta) = k\\varphi(\\alpha) + l\\varphi(\\beta) </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">lβ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05278em;">lβ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">lφ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mclose">)</span></span></span></span></span></p><p>(3). 省略</p></blockquote><div class="hint-container important"><p class="hint-container-title">重要</p><p><strong>注意</strong> 若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo>→</mo><mi>U</mi></mrow><annotation encoding="application/x-tex">V \\to U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 的一个映射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 适合命题2中的 (2)，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 必是线性映射. 在线性映射的定义中，我们要求 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 与 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi></mrow><annotation encoding="application/x-tex">U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 都是数域 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">K</mi></mrow><annotation encoding="application/x-tex">\\mathbb{K}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">K</span></span></span></span> 上的线性空间，不同数域上线性空间之间的映射不是线性映射.</p></div><h2 id="part-2-线性映射的运算" tabindex="-1"><a class="header-anchor" href="#part-2-线性映射的运算"><span>Part 2 线性映射的运算</span></a></h2><blockquote><p>任意一个 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi><mo>×</mo><mi>n</mi></mrow><annotation encoding="application/x-tex">m \\times n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> 矩阵 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 都可以定义一个从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> 维列向量空间到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi></mrow><annotation encoding="application/x-tex">m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span> 维列向量空间的线性映射：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>α</mi><mo stretchy="false">)</mo><mo>=</mo><mi>A</mi><mi>α</mi></mrow><annotation encoding="application/x-tex">\\varphi(\\alpha) = A\\alpha</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span></span></span></span>.</p><p>如果另有一个 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi><mo>×</mo><mi>n</mi></mrow><annotation encoding="application/x-tex">m \\times n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> 矩阵 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi></mrow><annotation encoding="application/x-tex">B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span>，它定义的线性映射是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ψ</mi><mo stretchy="false">(</mo><mi>α</mi><mo stretchy="false">)</mo><mo>=</mo><mi>B</mi><mi>α</mi></mrow><annotation encoding="application/x-tex">\\psi(\\alpha) = B\\alpha</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span></span></span></span>，注意到矩阵之间存在的运算，我们可以定义这两个映射的加法：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>φ</mi><mo>+</mo><mi>ψ</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>α</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy="false">)</mo><mi>α</mi></mrow><annotation encoding="application/x-tex">(\\varphi + \\psi)(\\alpha) = (A + B)\\alpha</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">φ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="mclose">)</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mclose">)</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span></span></span></span>.</p><p>显然这仍是一个线性映射.</p><p>类似地，我们还可定义线性映射的数乘：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>k</mi><mi>φ</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>α</mi><mo stretchy="false">)</mo><mo>=</mo><mi>k</mi><mi>A</mi><mi>α</mi></mrow><annotation encoding="application/x-tex">(k\\varphi)(\\alpha) = kA\\alpha</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">φ</span><span class="mclose">)</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span></span></span></span>. 对一般的线性映射，我们是否也可以定义它们的加法和数乘呢？</p></blockquote><p><strong>定义1</strong>：</p>', 9),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "ψ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi, \\psi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8889em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "ψ")
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上线性空间 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "→"),
                  createBaseVNode("mi", null, "U")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V \\to U")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "→"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10903em" }
              }, "U")
            ])
          ])
        ]),
        createTextVNode(" 的线性映射，定义 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "ψ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi + \\psi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.7778em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              }),
              createBaseVNode("span", { class: "mbin" }, "+"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8889em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "ψ")
            ])
          ])
        ]),
        createTextVNode(" 为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "→"),
                  createBaseVNode("mi", null, "U")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V \\to U")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "→"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10903em" }
              }, "U")
            ])
          ])
        ]),
        createTextVNode(" 的映射：")
      ]),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "ψ"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "ψ"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mtext", null, " "),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mo", null, "∈"),
                    createBaseVNode("mi", null, "V"),
                    createBaseVNode("mi", { mathvariant: "normal" }, ".")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "(\\varphi + \\psi)(\\alpha) = \\varphi(\\alpha) + \\psi(\\alpha),\\ \\alpha \\in V. ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "+"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "ψ"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "+"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "ψ"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", { class: "mspace" }, " "),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "∈"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6833em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.22222em" }
                }, "V"),
                createBaseVNode("span", { class: "mord" }, ".")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("若 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "k"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "k \\in \\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.7335em", "vertical-align": "-0.0391em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03148em" }
              }, "k"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "∈"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode("，定义 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "k"),
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "k\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8889em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03148em" }
              }, "k"),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode(" 为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "→"),
                  createBaseVNode("mi", null, "U")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V \\to U")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "→"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10903em" }
              }, "U")
            ])
          ])
        ]),
        createTextVNode(" 的映射：")
      ]),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "k"),
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "k"),
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mtext", null, " "),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mo", null, "∈"),
                    createBaseVNode("mi", null, "V"),
                    createBaseVNode("mi", { mathvariant: "normal" }, ".")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "(k\\varphi)(\\alpha) = k\\varphi(\\alpha),\\ \\alpha \\in V. ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03148em" }
                }, "k"),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03148em" }
                }, "k"),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", { class: "mspace" }, " "),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "∈"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6833em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.22222em" }
                }, "V"),
                createBaseVNode("span", { class: "mord" }, ".")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("容易验证 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "ψ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi + \\psi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.7778em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              }),
              createBaseVNode("span", { class: "mbin" }, "+"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8889em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "ψ")
            ])
          ])
        ]),
        createTextVNode(" 是线性映射. 事实上")
      ]),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mtable", {
                    rowspacing: "0.25em",
                    columnalign: "right left",
                    columnspacing: "0em"
                  }, [
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "l"),
                            createBaseVNode("mi", null, "β"),
                            createBaseVNode("mo", { stretchy: "false" }, ")")
                          ])
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "l"),
                            createBaseVNode("mi", null, "β"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "l"),
                            createBaseVNode("mi", null, "β"),
                            createBaseVNode("mo", { stretchy: "false" }, ")")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "l"),
                            createBaseVNode("mi", null, "β"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "l"),
                            createBaseVNode("mi", null, "β"),
                            createBaseVNode("mo", { stretchy: "false" }, ")")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "l"),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "β"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "l"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "β"),
                            createBaseVNode("mo", { stretchy: "false" }, ")")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "l"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "β"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "β"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, ")")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "l"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "β"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", { mathvariant: "normal" }, ".")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} (\\varphi + \\psi)(k\\alpha + l\\beta) &= \\varphi(k\\alpha + l\\beta) + \\psi(k\\alpha + l\\beta) \\\\\\\\ &= \\varphi(k\\alpha) + \\varphi(l\\beta) + \\psi(k\\alpha) + \\psi(l\\beta) \\\\\\\\ &= k\\varphi(\\alpha) + l\\varphi(\\beta) + k\\psi(\\alpha) + l\\psi(\\beta) \\\\\\\\ &= k(\\varphi(\\alpha) + \\psi(\\alpha)) + l(\\varphi(\\beta) + \\psi(\\beta)) \\\\\\\\ &= k(\\varphi + \\psi)(\\alpha) + l(\\varphi + \\psi)(\\beta). \\end{aligned} ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "13.5em", "vertical-align": "-6.5em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "7em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-9.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.05278em" }
                                }, "lβ"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-7.66em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-6.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-4.66em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.66em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-0.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "1.34em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "2.84em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "6.5em" }
                          }, [
                            createBaseVNode("span")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("span", { class: "col-align-l" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "7em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-9.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.05278em" }
                                }, "lβ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.05278em" }
                                }, "lβ"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-6.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.05278em" }
                                }, "lβ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.05278em" }
                                }, "lβ"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "lφ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.05278em" }
                                }, "β"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.01968em" }
                                }, "l"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.05278em" }
                                }, "β"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-0.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, "))"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.01968em" }
                                }, "l"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.05278em" }
                                }, "β"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.05278em" }
                                }, "β"),
                                createBaseVNode("span", { class: "mclose" }, "))")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "2.84em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.01968em" }
                                }, "l"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.05278em" }
                                }, "β"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord" }, ".")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "6.5em" }
                          }, [
                            createBaseVNode("span")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("同理可证明 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "k"),
                  createBaseVNode("mi", null, "φ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "k\\varphi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8889em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03148em" }
              }, "k"),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ")
            ])
          ])
        ]),
        createTextVNode(" 也是线性映射.")
      ]),
      createBaseVNode("p", null, [
        createTextVNode("若 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "U"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "U = \\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10903em" }
              }, "U"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "="),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode("，即把 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 看成是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上的一维空间，则 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "→"),
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V \\to \\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "→"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 的线性映射通常称为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 上的线性函数.")
      ])
    ], -1),
    createStaticVNode('<p>现在我们考虑从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi></mrow><annotation encoding="application/x-tex">U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 的线性映射全体组成的集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">L</mi><mo stretchy="false">(</mo><mi>V</mi><mo separator="true">,</mo><mi>U</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{L}(V,U)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal">L</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mclose">)</span></span></span></span>. 在这个集合上，既然我们定义了加法和数乘，它是一个线性空间吗？</p><p><strong>命题1</strong>： 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">L</mi><mo stretchy="false">(</mo><mi>V</mi><mo separator="true">,</mo><mi>U</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{L}(V,U)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal">L</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mclose">)</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo>→</mo><mi>U</mi></mrow><annotation encoding="application/x-tex">V \\to U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 的线性映射全体，则在上述线性映射的加法及数乘定义下，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">L</mi><mo stretchy="false">(</mo><mi>V</mi><mo separator="true">,</mo><mi>U</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{L}(V,U)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal">L</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mclose">)</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">K</mi></mrow><annotation encoding="application/x-tex">\\mathbb{K}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">K</span></span></span></span> 上的线性空间. 特别，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo>→</mo><mi mathvariant="double-struck">K</mi></mrow><annotation encoding="application/x-tex">V \\to \\mathbb{K}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">K</span></span></span></span> 上的所有线性函数全体构成一个线性空间.</p><div class="hint-container important"><p class="hint-container-title">重要</p><p>这个命题的证明很容易，只需按照线性空间的定义逐条验证即可. <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 上的所有线性函数构成的线性空间通常称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 的共轭空间，记为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>V</mi><mo>∗</mo></msup></mrow><annotation encoding="application/x-tex">V^*</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6887em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6887em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∗</span></span></span></span></span></span></span></span></span></span></span>. 当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 是有限维空间时，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>V</mi><mo>∗</mo></msup></mrow><annotation encoding="application/x-tex">V^*</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6887em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6887em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∗</span></span></span></span></span></span></span></span></span></span></span> 也称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 的对偶空间.</p><p>如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi><mo>=</mo><mi>U</mi></mrow><annotation encoding="application/x-tex">V = U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span>，我们用 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">L</mi><mo stretchy="false">(</mo><mi>V</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{L}(V)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal">L</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mclose">)</span></span></span></span> 来记 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">L</mi><mo stretchy="false">(</mo><mi>V</mi><mo separator="true">,</mo><mi>V</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{L}(V,V)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal">L</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mclose">)</span></span></span></span>，即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 上线性变换全体组成的集合. 这时在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">L</mi><mo stretchy="false">(</mo><mi>V</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{L}(V)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal">L</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mclose">)</span></span></span></span> 上，除了加法和数乘运算外，还有乘法运算，这个乘法就是映射的复合.</p></div><p><strong>定义2</strong>：</p>', 4),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "A")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "A")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "A")
            ])
          ])
        ]),
        createTextVNode(" 是数域 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上的线性空间，如果在 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "A")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "A")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "A")
            ])
          ])
        ]),
        createTextVNode(" 上定义了一个乘法 “"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", null, "⋅")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\cdot")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4445em" }
              }),
              createBaseVNode("span", { class: "mord" }, "⋅")
            ])
          ])
        ]),
        createTextVNode("”（通常可以省略），使对任意 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "A")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "A")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "A")
            ])
          ])
        ]),
        createTextVNode(" 中元素 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "b"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "c")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "a,b,c")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8889em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "b"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "c")
            ])
          ])
        ]),
        createTextVNode(" 及 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 中元素 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "k")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "k")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6944em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03148em" }
              }, "k")
            ])
          ])
        ]),
        createTextVNode("，适合下列条件：")
      ]),
      createBaseVNode("p", null, [
        createTextVNode("(1) 乘法结合律："),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mo", null, "⋅"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "b"),
                  createBaseVNode("mo", null, "⋅"),
                  createBaseVNode("mi", null, "c"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mo", null, "⋅"),
                  createBaseVNode("mi", null, "b"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", null, "⋅"),
                  createBaseVNode("mi", null, "c")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "a \\cdot (b \\cdot c) = (a \\cdot b) \\cdot c")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4445em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              }),
              createBaseVNode("span", { class: "mbin" }, "⋅"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "1em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord mathnormal" }, "b"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              }),
              createBaseVNode("span", { class: "mbin" }, "⋅"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "1em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "c"),
              createBaseVNode("span", { class: "mclose" }, ")"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "="),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "1em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              }),
              createBaseVNode("span", { class: "mbin" }, "⋅"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "1em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "b"),
              createBaseVNode("span", { class: "mclose" }, ")"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              }),
              createBaseVNode("span", { class: "mbin" }, "⋅"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "c")
            ])
          ])
        ]),
        createTextVNode("；")
      ]),
      createBaseVNode("p", null, [
        createTextVNode("(2) 存在 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "A")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "A")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "A")
            ])
          ])
        ]),
        createTextVNode(" 中元 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "e")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "e")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "e")
            ])
          ])
        ]),
        createTextVNode("，使对一切 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", null, "A")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "a \\in A")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.5782em", "vertical-align": "-0.0391em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "∈"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "A")
            ])
          ])
        ]),
        createTextVNode("，均有")
      ]),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "e"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", null, "e"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mtext", null, "；")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "e \\cdot a = a \\cdot e = a； ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.4445em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "e"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "⋅"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.4306em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.4445em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "⋅"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.4306em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "e"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6833em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", { class: "mord cjk_fallback" }, "；")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, "(3) 分配律："),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "b"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "c"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", null, "b"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", null, "c"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mspace", { linebreak: "newline" }),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "b"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "c"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "b"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "c"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mtext", null, "；")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "a \\cdot (b + c) = a \\cdot b + a \\cdot c, \\\\ (b + c) \\cdot a = b \\cdot a + c \\cdot a； ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.4445em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "⋅"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "+"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "c"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.4445em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "⋅"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.7778em", "vertical-align": "-0.0833em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "+"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.4445em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "⋅"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.625em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "c"),
                createBaseVNode("span", { class: "mpunct" }, ",")
              ]),
              createBaseVNode("span", { class: "mspace newline" }),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "+"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "c"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "⋅"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.4306em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6944em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "⋅"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6667em", "vertical-align": "-0.0833em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "+"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.4445em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "c"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "⋅"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6833em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", { class: "mord cjk_fallback" }, "；")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, "(4) 乘法与数乘的相容性："),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "k"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", null, "b"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "k"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", null, "b"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "k"),
                    createBaseVNode("mi", null, "b"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { separator: "true" }, ",")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "(ka) \\cdot b = k(a \\cdot b) = a \\cdot (kb), ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "ka"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "⋅"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6944em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03148em" }
                }, "k"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "⋅"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.4445em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "⋅"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "kb"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mpunct" }, ",")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("则称 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "A")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "A")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "A")
            ])
          ])
        ]),
        createTextVNode(" 是数域 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上的代数，元素 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "e")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "e")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "e")
            ])
          ])
        ]),
        createTextVNode(" 称为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "A")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "A")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "A")
            ])
          ])
        ]),
        createTextVNode(" 的恒等元.")
      ]),
      createBaseVNode("p", null, [
        createBaseVNode("strong", null, "注意"),
        createTextVNode(". "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "A")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "A")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "A")
            ])
          ])
        ]),
        createTextVNode(" 的恒等元常用 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mn", null, "1")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "1")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6444em" }
              }),
              createBaseVNode("span", { class: "mord" }, "1")
            ])
          ])
        ]),
        createTextVNode(" 表示，注意不要与数 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mn", null, "1")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "1")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6444em" }
              }),
              createBaseVNode("span", { class: "mord" }, "1")
            ])
          ])
        ]),
        createTextVNode(" 混淆.")
      ])
    ], -1),
    createStaticVNode('<p><strong>定理1</strong> 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 是数域 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">K</mi></mrow><annotation encoding="application/x-tex">\\mathbb{K}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">K</span></span></span></span> 上的线性空间，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">L</mi><mo stretchy="false">(</mo><mi>V</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{L}(V)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal">L</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mclose">)</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">K</mi></mrow><annotation encoding="application/x-tex">\\mathbb{K}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">K</span></span></span></span> 上的代数.</p>', 1),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("由命题1，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "script" }, "L"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathcal{L}(V)")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "1em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mord mathcal" }, "L"),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V"),
              createBaseVNode("span", { class: "mclose" }, ")")
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 上的线性空间. 我们逐条来验证定义2.")
      ]),
      createBaseVNode("p", null, "(1) 乘法结合律实际上就是映射复合的结合律，因此自然成立."),
      createBaseVNode("p", null, [
        createTextVNode("(2) 设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mn", null, "1"),
                    createBaseVNode("mi", null, "V")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "1_V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.7944em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord" }, "1"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3283em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", {
                              class: "mord mathnormal mtight",
                              style: { "margin-right": "0.22222em" }
                            }, "V")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 上的恒等映射，由上节可知它是线性变换，显然对任意的 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", { mathvariant: "script" }, "L"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi \\in \\mathcal{L}(V)")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.7335em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "∈"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "1em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mord mathcal" }, "L"),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V"),
              createBaseVNode("span", { class: "mclose" }, ")")
            ])
          ])
        ]),
        createTextVNode("，有")
      ]),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("msub", null, [
                      createBaseVNode("mn", null, "1"),
                      createBaseVNode("mi", null, "V")
                    ]),
                    createBaseVNode("mo", null, "∘"),
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", null, "∘"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mn", null, "1"),
                      createBaseVNode("mi", null, "V")
                    ]),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", { separator: "true" }, ",")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "1_V \\circ \\varphi = \\varphi \\circ 1_V = \\varphi, ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.7944em", "vertical-align": "-0.15em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord" }, "1"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3283em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.22222em" }
                              }, "V")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∘"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.625em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6389em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∘"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.7944em", "vertical-align": "-0.15em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord" }, "1"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3283em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.22222em" }
                              }, "V")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.625em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "mpunct" }, ",")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("因此 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mn", null, "1"),
                    createBaseVNode("mi", null, "V")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "1_V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.7944em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord" }, "1"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3283em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", {
                              class: "mord mathnormal mtight",
                              style: { "margin-right": "0.22222em" }
                            }, "V")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "script" }, "L"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathcal{L}(V)")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "1em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mord mathcal" }, "L"),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V"),
              createBaseVNode("span", { class: "mclose" }, ")")
            ])
          ])
        ]),
        createTextVNode(" 的恒等元.")
      ]),
      createBaseVNode("p", null, [
        createTextVNode("(3) 设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mn", null, "1")
                  ]),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mn", null, "2")
                  ]),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mn", null, "3")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi_1, \\varphi_2, \\varphi_3")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3011em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mtight" }, "1")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3011em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mtight" }, "2")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3011em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mtight" }, "3")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.15em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode(" 都是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 上线性变换，对任意的 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "α"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\alpha \\in V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.5782em", "vertical-align": "-0.0391em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.0037em" }
              }, "α"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "∈"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode("，有")
      ]),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mtable", {
                    rowspacing: "0.25em",
                    columnalign: "right left",
                    columnspacing: "0em"
                  }, [
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mo", null, "∘"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "3")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")")
                          ])
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "3")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, ")")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "3")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, ")")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "3")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, ")")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mo", null, "∘"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mo", null, "∘"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "3")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mo", null, "∘"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mo", null, "∘"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "φ"),
                              createBaseVNode("mn", null, "3")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", { mathvariant: "normal" }, ".")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} (\\varphi_1 \\circ (\\varphi_2 + \\varphi_3))(\\alpha) &= \\varphi_1((\\varphi_2 + \\varphi_3)(\\alpha)) \\\\\\\\ &= \\varphi_1(\\varphi_2(\\alpha) + \\varphi_3(\\alpha)) \\\\\\\\ &= \\varphi_1(\\varphi_2(\\alpha)) + \\varphi_1(\\varphi_3(\\alpha)) \\\\\\\\ &= (\\varphi_1 \\circ \\varphi_2)(\\alpha) + (\\varphi_1 \\circ \\varphi_3)(\\alpha) \\\\\\\\ &= (\\varphi_1 \\circ \\varphi_2 + \\varphi_1 \\circ \\varphi_3)(\\alpha). \\end{aligned} ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "13.5em", "vertical-align": "-6.5em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "7em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-9.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∘"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "3")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mclose" }, "))"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-7.66em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-6.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-4.66em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.66em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-0.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "1.34em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "2.84em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "6.5em" }
                          }, [
                            createBaseVNode("span")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("span", { class: "col-align-l" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "7em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-9.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "(("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "3")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, "))")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-6.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "3")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, "))")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, "))"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "3")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, "))")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-0.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∘"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∘"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "3")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "2.84em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∘"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∘"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3011em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "3")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.15em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord" }, ".")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "6.5em" }
                          }, [
                            createBaseVNode("span")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, "因此"),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "φ"),
                      createBaseVNode("mn", null, "1")
                    ]),
                    createBaseVNode("mo", null, "∘"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "φ"),
                      createBaseVNode("mn", null, "2")
                    ]),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "φ"),
                      createBaseVNode("mn", null, "3")
                    ]),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "φ"),
                      createBaseVNode("mn", null, "1")
                    ]),
                    createBaseVNode("mo", null, "∘"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "φ"),
                      createBaseVNode("mn", null, "2")
                    ]),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "φ"),
                      createBaseVNode("mn", null, "1")
                    ]),
                    createBaseVNode("mo", null, "∘"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "φ"),
                      createBaseVNode("mn", null, "3")
                    ]),
                    createBaseVNode("mi", { mathvariant: "normal" }, ".")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi_1 \\circ (\\varphi_2 + \\varphi_3) = \\varphi_1 \\circ \\varphi_2 + \\varphi_1 \\circ \\varphi_3. ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6389em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3011em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, "1")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∘"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3011em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, "2")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "+"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3011em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, "3")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6389em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3011em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, "1")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∘"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.7778em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3011em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, "2")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "+"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6389em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3011em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, "1")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∘"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.625em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3011em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, "3")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.15em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", { class: "mord" }, ".")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, "同理可证明另外一个分配律."),
      createBaseVNode("p", null, [
        createTextVNode("(4) 设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "k")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "k")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6944em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03148em" }
              }, "k")
            ])
          ])
        ]),
        createTextVNode(" 是 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "K")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{K}")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6889em" }
              }),
              createBaseVNode("span", { class: "mord mathbb" }, "K")
            ])
          ])
        ]),
        createTextVNode(" 中任一数，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "φ"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "ψ")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi, \\psi")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.8889em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "ψ")
            ])
          ])
        ]),
        createTextVNode(" 为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 上线性变换，则对 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "V")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "V")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6833em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.22222em" }
              }, "V")
            ])
          ])
        ]),
        createTextVNode(" 中任意的 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "α")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\alpha")
              ])
            ])
          ]),
          createBaseVNode("span", {
            class: "katex-html",
            "aria-hidden": "true"
          }, [
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.0037em" }
              }, "α")
            ])
          ])
        ]),
        createTextVNode("，有")
      ]),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mtable", {
                    rowspacing: "0.25em",
                    columnalign: "right left",
                    columnspacing: "0em"
                  }, [
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mo", {
                              fence: "true",
                              stretchy: "true",
                              minsize: "1.2em",
                              maxsize: "1.2em"
                            }, "("),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "∘"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", {
                              fence: "true",
                              stretchy: "true",
                              minsize: "1.2em",
                              maxsize: "1.2em"
                            }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")")
                          ])
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mo", {
                              fence: "true",
                              stretchy: "true",
                              minsize: "1.2em",
                              maxsize: "1.2em"
                            }, "("),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", {
                              fence: "true",
                              stretchy: "true",
                              minsize: "1.2em",
                              maxsize: "1.2em"
                            }, ")")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mtr", null, [
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow")
                        ])
                      ]),
                      createBaseVNode("mtd", null, [
                        createBaseVNode("mstyle", {
                          scriptlevel: "0",
                          displaystyle: "true"
                        }, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mrow"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mo", {
                              fence: "true",
                              stretchy: "true",
                              minsize: "1.2em",
                              maxsize: "1.2em"
                            }, "("),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", null, "∘"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", {
                              fence: "true",
                              stretchy: "true",
                              minsize: "1.2em",
                              maxsize: "1.2em"
                            }, ")"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mo", {
                              fence: "true",
                              stretchy: "true",
                              minsize: "1.2em",
                              maxsize: "1.2em"
                            }, "("),
                            createBaseVNode("mi", null, "k"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", null, "∘"),
                            createBaseVNode("mi", null, "ψ"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", {
                              fence: "true",
                              stretchy: "true",
                              minsize: "1.2em",
                              maxsize: "1.2em"
                            }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "α"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { separator: "true" }, ",")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} \\bigl((k\\varphi) \\circ \\psi\\bigr)(\\alpha) &= (k\\varphi)(\\psi(\\alpha)) = k\\bigl(\\varphi(\\psi(\\alpha))\\bigr) \\\\ &= k\\bigl((\\varphi \\circ \\psi)(\\alpha)\\bigr) = \\bigl(k(\\varphi \\circ \\psi)\\bigr)(\\alpha), \\end{aligned} ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "3.02em", "vertical-align": "-1.26em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "1.76em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-3.91em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mopen" }, [
                                  createBaseVNode("span", { class: "delimsizing size1" }, "(")
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∘"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mclose" }, [
                                  createBaseVNode("span", { class: "delimsizing size1" }, ")")
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-2.4em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "1.26em" }
                          }, [
                            createBaseVNode("span")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("span", { class: "col-align-l" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "1.76em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-3.91em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, "))"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", { class: "mopen" }, [
                                  createBaseVNode("span", { class: "delimsizing size1" }, "(")
                                ]),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, "))"),
                                createBaseVNode("span", { class: "mclose" }, [
                                  createBaseVNode("span", { class: "delimsizing size1" }, ")")
                                ])
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-2.4em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", { class: "mopen" }, [
                                  createBaseVNode("span", { class: "delimsizing size1" }, "(")
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∘"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mclose" }, [
                                  createBaseVNode("span", { class: "delimsizing size1" }, ")")
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, [
                                  createBaseVNode("span", { class: "delimsizing size1" }, "(")
                                ]),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03148em" }
                                }, "k"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∘"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ψ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mclose" }, [
                                  createBaseVNode("span", { class: "delimsizing size1" }, ")")
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.0037em" }
                                }, "α"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mpunct" }, ",")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "1.26em" }
                          }, [
                            createBaseVNode("span")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, "从而"),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "k"),
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "∘"),
                    createBaseVNode("mi", null, "ψ"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "k"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", null, "∘"),
                    createBaseVNode("mi", null, "ψ"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mi", { mathvariant: "normal" }, ".")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "(k\\varphi) \\circ \\psi = k(\\varphi \\circ \\psi). ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03148em" }
                }, "k"),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∘"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.8889em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "ψ"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03148em" }
                }, "k"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∘"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "ψ"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mord" }, ".")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, "同理可证明"),
      createBaseVNode("p", { class: "katex-block" }, [
        createBaseVNode("span", { class: "katex-display" }, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                display: "block"
              }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", null, "∘"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "k"),
                    createBaseVNode("mi", null, "ψ"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "k"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", null, "∘"),
                    createBaseVNode("mi", null, "ψ"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mi", { mathvariant: "normal" }, "."),
                    createBaseVNode("mtext", null, " ")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi \\circ (k\\psi) = k(\\varphi \\circ \\psi).\\ ")
                ])
              ])
            ]),
            createBaseVNode("span", {
              class: "katex-html",
              "aria-hidden": "true"
            }, [
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6389em", "vertical-align": "-0.1944em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∘"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03148em" }
                }, "k"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "ψ"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "="),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03148em" }
                }, "k"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∘"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "ψ"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mord" }, "."),
                createBaseVNode("span", { class: "mspace" }, " ")
              ])
            ])
          ])
        ])
      ])
    ], -1),
    createStaticVNode('<p>在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">L</mi><mo stretchy="false">(</mo><mi>V</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{L}(V)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal">L</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mclose">)</span></span></span></span> 中，定义线性变换 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> 次幂为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> 个 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 的复合，则不难验证：</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable width="100%"><mtr><mtd width="50%"></mtd><mtd><mrow><msup><mi>φ</mi><mi>n</mi></msup><mo>∘</mo><msup><mi>φ</mi><mi>m</mi></msup><mo>=</mo><msup><mi>φ</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi></mrow></msup><mo separator="true">,</mo><mtext> </mtext><mo stretchy="false">(</mo><msup><mi>φ</mi><mi>n</mi></msup><msup><mo stretchy="false">)</mo><mi>m</mi></msup><mo>=</mo><msup><mi>φ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msup><mi mathvariant="normal">.</mi></mrow></mtd><mtd width="50%"></mtd><mtd><mtext>(1)</mtext></mtd></mtr></mtable><annotation encoding="application/x-tex">\\varphi^n \\circ \\varphi^m = \\varphi^{n+m},\\ (\\varphi^n)^m = \\varphi^{nm}. \\tag{1} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9088em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.9088em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0713em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8213em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mathnormal mtight">m</span></span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.9088em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">nm</span></span></span></span></span></span></span></span></span><span class="mord">.</span></span><span class="tag"><span class="strut" style="height:1.0713em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">(</span><span class="mord"><span class="mord">1</span></span><span class="mord">)</span></span></span></span></span></span></p><p>若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是双射，即为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 上的自同构，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>φ</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">\\varphi^{-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span> 也是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>V</mi></mrow><annotation encoding="application/x-tex">V</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span></span></span></span> 上的线性映射（也是自同构），称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>φ</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding="application/x-tex">\\varphi^{-1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 的逆变换. 如定义</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>φ</mi><mrow><mo>−</mo><mi>n</mi></mrow></msup><mo>=</mo><mo stretchy="false">(</mo><msup><mi>φ</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><msup><mo stretchy="false">)</mo><mi>n</mi></msup><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\varphi^{-n} = (\\varphi^{-1})^n, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0158em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8213em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mpunct">,</span></span></span></span></span></p><p>则不难验证：</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable width="100%"><mtr><mtd width="50%"></mtd><mtd><mrow><msup><mi>φ</mi><mrow><mo>−</mo><mi>n</mi></mrow></msup><mo>=</mo><mo stretchy="false">(</mo><msup><mi>φ</mi><mi>n</mi></msup><msup><mo stretchy="false">)</mo><mrow><mo>−</mo><mn>1</mn></mrow></msup><mi mathvariant="normal">.</mi></mrow></mtd><mtd width="50%"></mtd><mtd><mtext>(2)</mtext></mtd></mtr></mtable><annotation encoding="application/x-tex">\\varphi^{-n} = (\\varphi^n)^{-1}. \\tag{2} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0158em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8213em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mord">.</span></span><span class="tag"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">(</span><span class="mord"><span class="mord">2</span></span><span class="mord">)</span></span></span></span></span></span></p><p>这时定义</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>φ</mi><mn>0</mn></msup><mo>=</mo><msub><mi>I</mi><mi>V</mi></msub><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\varphi^0 = I_V, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0585em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">V</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span></span></span></span></span></p><p>则 (1) 式对一切整数均成立. 但需注意 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 的负数次幂仅对自同构（又称可逆变换或非异变换）有意义.</p><blockquote><p>需要特别注意的是，线性变换的复合通常不满足交换律，即一般来说</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>φ</mi><mo>∘</mo><mi>ψ</mi><mo mathvariant="normal">≠</mo><mi>ψ</mi><mo>∘</mo><mi>φ</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\varphi \\circ \\psi \\ne \\psi \\circ \\varphi. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span><span class="mord">.</span></span></span></span></span></p><p>因此一般来说 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>φ</mi><mo>∘</mo><mi>ψ</mi><msup><mo stretchy="false">)</mo><mi>n</mi></msup><mo mathvariant="normal">≠</mo><msup><mi>φ</mi><mi>n</mi></msup><mo>∘</mo><msup><mi>ψ</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">(\\varphi \\circ \\psi)^n \\ne \\varphi^n \\circ \\psi^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">φ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8588em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>.</p><p>如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 与 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ψ</mi></mrow><annotation encoding="application/x-tex">\\psi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span></span></span></span> 都是可逆线性变换，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo>∘</mo><mi>ψ</mi></mrow><annotation encoding="application/x-tex">\\varphi \\circ \\psi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6389em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span></span></span></span> 也是可逆线性变换，且</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mi>φ</mi><mo>∘</mo><mi>ψ</mi><msup><mo stretchy="false">)</mo><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>ψ</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>∘</mo><msup><mi>φ</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">(\\varphi \\circ \\psi)^{-1} = \\psi^{-1} \\circ \\varphi^{-1}. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">φ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0585em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ψ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0585em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mord">.</span></span></span></span></span></p><p>对任一非零数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span>，若 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 可逆，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mi>φ</mi></mrow><annotation encoding="application/x-tex">k\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">φ</span></span></span></span> 也可逆，且</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mi>k</mi><mi>φ</mi><msup><mo stretchy="false">)</mo><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>k</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><msup><mi>φ</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">(k\\varphi)^{-1} = k^{-1}\\varphi^{-1}. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal">φ</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0585em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mord">.</span></span></span></span></span></p></blockquote><p>结束.</p>', 11)
  ])]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('{"path":"/algebra/algebra-6/","title":"Chapter 6 线性映射基础","lang":"zh-CN","frontmatter":{"title":"Chapter 6 线性映射基础","permalink":"/algebra/algebra-6/","createTime":"2025/12/18 17:43:53","description":"Part 1 线性映射的概念 · 映射 所谓映射，是指从一个集合 A 到另一个集合 B 的对应 φ:A→B. 对 A 中任一元素 a，均有唯一的元素 b∈B 与之对应，记之为 b=φ(a). 元素 b 称为 a 在 φ 下的像，a 称为元素 b 的原像或逆像. A 中元素在 φ 下的像全体构成 B 的一个子集，记之为 φ(A) 或 Imφ. 如果 Im...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Chapter 6 线性映射基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-01-09T12:04:11.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/algebra/algebra-6/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"Chapter 6 线性映射基础"}],["meta",{"property":"og:description","content":"Part 1 线性映射的概念 · 映射 所谓映射，是指从一个集合 A 到另一个集合 B 的对应 φ:A→B. 对 A 中任一元素 a，均有唯一的元素 b∈B 与之对应，记之为 b=φ(a). 元素 b 称为 a 在 φ 下的像，a 称为元素 b 的原像或逆像. A 中元素在 φ 下的像全体构成 B 的一个子集，记之为 φ(A) 或 Imφ. 如果 Im..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-01-09T12:04:11.000Z"}],["meta",{"property":"article:modified_time","content":"2026-01-09T12:04:11.000Z"}]]},"readingTime":{"minutes":11.4,"words":3421},"git":{"createdTime":1766118787000,"updatedTime":1767960251000,"contributors":[{"name":"nicostore-mathematica","username":"nicostore-mathematica","email":"nicostore.core@outlook.com","commits":3,"avatar":"https://avatars.githubusercontent.com/nicostore-mathematica?v=4","url":"https://github.com/nicostore-mathematica"}],"changelog":[{"hash":"a4974311eb0df6b4257ac732c60695445245e168","time":1767960251000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"docs:dev"},{"hash":"3caa5795d1efa3557aa742aaa24ea545ebb1d739","time":1766128509000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"integral-19"},{"hash":"71aa29eeda9f509ae2b60942924559b450b05009","time":1766118787000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"algebra+"}]},"autoDesc":true,"filePathRelative":"algebra/algebra-6.md","headers":[]}');
export {
  index_html as comp,
  data
};
