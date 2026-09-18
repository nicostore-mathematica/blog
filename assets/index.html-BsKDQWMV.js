import { _ as _export_sfc, c as createElementBlock, e as createStaticVNode, a as createBaseVNode, b as createTextVNode, o as openBlock } from "./app-C973mz5j.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="part-3-中值定理" tabindex="-1"><a class="header-anchor" href="#part-3-中值定理"><span>Part 3 中值定理</span></a></h2><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mo separator="true">,</mo><mi>q</mi><mo>∈</mo><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">p, q \\in \\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>，令</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>σ</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy="false">)</mo><mo>⋅</mo><mi>p</mi><mo>+</mo><mi>t</mi><mo>⋅</mo><mi>q</mi><mo separator="true">,</mo><mspace width="1em"></mspace><mi mathvariant="normal">∀</mi><mi>t</mi><mo>∈</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\sigma(t) = (1 - t) \\cdot p + t \\cdot q, \\quad \\forall t \\in [0, 1]. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">σ</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="mpunct">,</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∀</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mord">.</span></span></span></span></span></p><p>我们称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>σ</mi><mo>:</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo><mo>→</mo><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\sigma: [0, 1] \\to \\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">σ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 中连接 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi></mrow><annotation encoding="application/x-tex">p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span></span></span></span>, <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>q</mi></mrow><annotation encoding="application/x-tex">q</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span></span></span></span> 的直线段. 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 中的子集，如果任给 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>∈</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">a_1, a_2 \\in A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>，连接 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>a</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>a</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">a_1, a_2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 的直线段仍包含于 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 为凸集. 特别地，凸集都是道路连通的. 我们将开的凸集称为凸域.</p><p>/example/ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 中的开球 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><mi>r</mi></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">B_r(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span> 都是凸集.</p><h3 id="·-中值定理" tabindex="-1"><a class="header-anchor" href="#·-中值定理"><span>· 中值定理</span></a></h3><p>我们知道，包括 Lagrange 定理、Cauchy 定理等在内的微分中值定理是研究一元函数的重要工具. 对于多元函数，也有部分类似结果. 例如，对于多元函数，我们有</p><p><strong>定理1 (微分中值定理)</strong>. 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 中凸域，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>:</mo><mi>D</mi><mo>→</mo><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">f: D \\to \\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 可微，则任给 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo>∈</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">a, b \\in D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span>，存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ξ</mi><mo>∈</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">\\xi \\in D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span>，使得</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo><mo>−</mo><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mi>J</mi><mi>f</mi><mo stretchy="false">(</mo><mi>ξ</mi><mo stretchy="false">)</mo><mo>⋅</mo><mo stretchy="false">(</mo><mi>b</mi><mo>−</mo><mi>a</mi><mo stretchy="false">)</mo><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">f(b) - f(a) = Jf(\\xi) \\cdot (b - a), </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">Jf</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mpunct">,</span></span></span></span></span></p><p>其中 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ξ</mi><mo>=</mo><mi>a</mi><mo>+</mo><mi>θ</mi><mo stretchy="false">(</mo><mi>b</mi><mo>−</mo><mi>a</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\xi = a + \\theta(b - a)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi><mo>∈</mo><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\theta \\in (0, 1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span>，即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ξ</mi></mrow><annotation encoding="application/x-tex">\\xi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span></span></span></span> 位于连接 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo separator="true">,</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">a, b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span></span></span></span> 的直线段上.</p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>σ</mi><mo>:</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo><mo>→</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">\\sigma: [0, 1] \\to D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">σ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 为连接 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo separator="true">,</mo><mi>b</mi></mrow><annotation encoding="application/x-tex">a, b</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span></span></span></span> 的直线段，则复合函数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo>∘</mo><mi>σ</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\varphi(t) = f \\circ \\sigma(t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">σ</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span> 是可微的一元函数. 由一元函数的微分中值定理，存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi><mo>∈</mo><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\theta \\in (0, 1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span> 使得</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>−</mo><mi>φ</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi>φ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi>θ</mi><mo stretchy="false">)</mo><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo stretchy="false">)</mo><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\varphi(1) - \\varphi(0) = \\varphi&#39;(\\theta) \\cdot (1 - 0). </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0519em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0</span><span class="mclose">)</span><span class="mord">.</span></span></span></span></span></p><p>上式即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo><mo>−</mo><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mi>J</mi><mi>f</mi><mo stretchy="false">(</mo><mi>ξ</mi><mo stretchy="false">)</mo><mo>⋅</mo><mo stretchy="false">(</mo><mi>b</mi><mo>−</mo><mi>a</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(b) - f(a) = Jf(\\xi) \\cdot (b - a)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">Jf</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span></span></span></span>，其中 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ξ</mi><mo>=</mo><mi>σ</mi><mo stretchy="false">(</mo><mi>θ</mi><mo stretchy="false">)</mo><mo>=</mo><mi>a</mi><mo>+</mo><mi>θ</mi><mo stretchy="false">(</mo><mi>b</mi><mo>−</mo><mi>a</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\xi = \\sigma(\\theta) = a + \\theta(b - a)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">σ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span></span></span></span>.</p></blockquote><p><strong>推论2</strong>. 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 中区域（道路连通开集），<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>:</mo><mi>D</mi><mo>→</mo><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">f: D \\to \\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 可微. 如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>J</mi><mi>f</mi><mo>≡</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">Jf \\equiv 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">Jf</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≡</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 为常数.</p><blockquote><p>如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 为凸域，则欲证结论从定理1立即得到. 一般地，任取 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 中两点 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mo separator="true">,</mo><mi>q</mi></mrow><annotation encoding="application/x-tex">p, q</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span></span></span></span>，设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>τ</mi><mo>:</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo><mo>→</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">\\tau: [0, 1] \\to D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 是连接 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mo separator="true">,</mo><mi>q</mi></mrow><annotation encoding="application/x-tex">p, q</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span></span></span></span> 的连续曲线. 令</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>T</mi><mo>=</mo><mi>sup</mi><mo>⁡</mo><mo stretchy="false">{</mo><mi>t</mi><mo>∣</mo><mtext>当 </mtext><mn>0</mn><mo>≤</mo><mi>s</mi><mo>≤</mo><mi>t</mi><mtext> 时</mtext><mo separator="true">,</mo><mi>f</mi><mo>∘</mo><mi>τ</mi><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>p</mi><mo stretchy="false">)</mo><mo stretchy="false">}</mo><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">T = \\sup\\{t \\mid \\text{当 } 0 \\le s \\le t \\text{ 时}, f \\circ \\tau(s) = f(p)\\}. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">sup</span><span class="mopen">{</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8193em;vertical-align:-0.136em;"></span><span class="mord text"><span class="mord cjk_fallback">当</span><span class="mord"> </span></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">t</span><span class="mord text"><span class="mord"> </span><span class="mord cjk_fallback">时</span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mclose">)}</span><span class="mord">.</span></span></span></span></span></p><p>因为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 为开集，故存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\varepsilon &gt; 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">ε</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> 使得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><mi>ε</mi></msub><mo stretchy="false">(</mo><mi>p</mi><mo stretchy="false">)</mo><mo>⊂</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">B_\\varepsilon(p) \\subset D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">ε</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span>. 由 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>τ</mi></mrow><annotation encoding="application/x-tex">\\tau</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span></span></span></span> 的连续性知，存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>δ</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\delta &gt; 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，使得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>τ</mi><mo stretchy="false">(</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mi>δ</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>⊂</mo><msub><mi>B</mi><mi>ε</mi></msub><mo stretchy="false">(</mo><mi>p</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\tau([0, \\delta)) \\subset B_\\varepsilon(p)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span><span class="mopen">([</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span><span class="mclose">))</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">ε</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mclose">)</span></span></span></span>. 由于 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><mi>ε</mi></msub><mo stretchy="false">(</mo><mi>p</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">B_\\varepsilon(p)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">ε</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mclose">)</span></span></span></span> 为凸域，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><mi>ε</mi></msub><mo stretchy="false">(</mo><mi>p</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">B_\\varepsilon(p)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">ε</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mclose">)</span></span></span></span> 中为常值函数，故 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo>≥</mo><mi>δ</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">T \\ge \\delta &gt; 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8193em;vertical-align:-0.136em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>.</p><p>下面证明 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">T = 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>（反证法）. 如果不然，则在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>τ</mi><mo stretchy="false">(</mo><mi>T</mi><mo stretchy="false">)</mo><mo>∈</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">\\tau(T) \\in D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 处作和上面在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>τ</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mi>p</mi></mrow><annotation encoding="application/x-tex">\\tau(0) = p</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span></span></span></span> 处一样的讨论知，存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>δ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\delta&#39; &gt; 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.791em;vertical-align:-0.0391em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> 使得</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mi>T</mi><mo>+</mo><msup><mi>δ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">)</mo><mo>⊂</mo><mo stretchy="false">{</mo><mi>s</mi><mo>∈</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo><mo>∣</mo><mi>f</mi><mo>∘</mo><mi>τ</mi><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>p</mi><mo stretchy="false">)</mo><mo stretchy="false">}</mo><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">[0, T + \\delta&#39;) \\subset \\{s \\in [0, 1] \\mid f \\circ \\tau(s) = f(p)\\}. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0519em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∘</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span><span class="mopen">(</span><span class="mord mathnormal">s</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mclose">)}</span><span class="mord">.</span></span></span></span></span></p><p>这和 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span> 的定义相矛盾！从而 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">T = 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>. 由连续性立知 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>q</mi><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>τ</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>τ</mi><mo stretchy="false">(</mo><mi>T</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>p</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(q) = f(\\tau(1)) = f(\\tau(T)) = f(p)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">))</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mclose">))</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">p</span><span class="mclose">)</span></span></span></span>. 因为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>p</mi><mo separator="true">,</mo><mi>q</mi></mrow><annotation encoding="application/x-tex">p, q</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">q</span></span></span></span> 是任取的，故 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 为常数.</p></blockquote><p>考虑向量值函数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>:</mo><mi mathvariant="double-struck">R</mi><mo>→</mo><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">f: \\mathbb{R} \\to \\mathbb{R}^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msup><mi>t</mi><mn>2</mn></msup><mo separator="true">,</mo><msup><mi>t</mi><mn>3</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(t) = (t^2, t^3)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，则</p>', 14),
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
                  createBaseVNode("mi", null, "J"),
                  createBaseVNode("mi", null, "f"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "t"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", null, "="),
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
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mn", null, "2"),
                              createBaseVNode("mi", null, "t")
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
                              createBaseVNode("mn", null, "3"),
                              createBaseVNode("msup", null, [
                                createBaseVNode("mi", null, "t"),
                                createBaseVNode("mn", null, "2")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mo", { fence: "true" }, ")")
                  ]),
                  createBaseVNode("mi", { mathvariant: "normal" }, ".")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "Jf(t) = \\begin{pmatrix} 2t \\\\ 3t^2 \\end{pmatrix}. ")
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
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10764em" }
              }, "Jf"),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                style: { "height": "2.4em", "vertical-align": "-0.95em" }
              }),
              createBaseVNode("span", { class: "minner" }, [
                createBaseVNode("span", {
                  class: "mopen delimcenter",
                  style: { "top": "0em" }
                }, [
                  createBaseVNode("span", { class: "delimsizing size3" }, "(")
                ]),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-c" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "1.45em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-3.61em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }, "2"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-2.41em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }, "3"),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.8141em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.063em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
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
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "0.95em" }
                          }, [
                            createBaseVNode("span")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mclose delimcenter",
                  style: { "top": "0em" }
                }, [
                  createBaseVNode("span", { class: "delimsizing size3" }, ")")
                ])
              ]),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord" }, ".")
            ])
          ])
        ])
      ])
    ], -1),
    createStaticVNode('<p>如果存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi><mo>∈</mo><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\theta \\in (0, 1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span> 使得</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>−</mo><mi>f</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mi>J</mi><mi>f</mi><mo stretchy="false">(</mo><mi>θ</mi><mo stretchy="false">)</mo><mo>⋅</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo stretchy="false">)</mo><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">f(1) - f(0) = Jf(\\theta) \\cdot (1 - 0), </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">Jf</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0</span><span class="mclose">)</span><span class="mpunct">,</span></span></span></span></span></p><p>则</p>', 3),
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
                            createBaseVNode("mn", null, "1")
                          ])
                        ])
                      ]),
                      createBaseVNode("mtr", null, [
                        createBaseVNode("mtd", null, [
                          createBaseVNode("mstyle", {
                            scriptlevel: "0",
                            displaystyle: "false"
                          }, [
                            createBaseVNode("mn", null, "1")
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mo", { fence: "true" }, ")")
                  ]),
                  createBaseVNode("mo", null, "="),
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
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mn", null, "2"),
                              createBaseVNode("mi", null, "θ")
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
                              createBaseVNode("mn", null, "3"),
                              createBaseVNode("msup", null, [
                                createBaseVNode("mi", null, "θ"),
                                createBaseVNode("mn", null, "2")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("mo", { fence: "true" }, ")")
                  ]),
                  createBaseVNode("mi", { mathvariant: "normal" }, ".")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2\\theta \\\\ 3\\theta^2 \\end{pmatrix}. ")
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
                style: { "height": "2.4em", "vertical-align": "-0.95em" }
              }),
              createBaseVNode("span", { class: "minner" }, [
                createBaseVNode("span", {
                  class: "mopen delimcenter",
                  style: { "top": "0em" }
                }, [
                  createBaseVNode("span", { class: "delimsizing size3" }, "(")
                ]),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-c" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "1.45em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-3.61em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }, "1")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-2.41em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }, "1")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "0.95em" }
                          }, [
                            createBaseVNode("span")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mclose delimcenter",
                  style: { "top": "0em" }
                }, [
                  createBaseVNode("span", { class: "delimsizing size3" }, ")")
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
                style: { "height": "2.4em", "vertical-align": "-0.95em" }
              }),
              createBaseVNode("span", { class: "minner" }, [
                createBaseVNode("span", {
                  class: "mopen delimcenter",
                  style: { "top": "0em" }
                }, [
                  createBaseVNode("span", { class: "delimsizing size3" }, "(")
                ]),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-c" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "1.45em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-3.61em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }, "2"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.02778em" }
                                }, "θ")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-2.41em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }, "3"),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.02778em" }
                                  }, "θ"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.8141em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.063em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
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
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "0.95em" }
                          }, [
                            createBaseVNode("span")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mclose delimcenter",
                  style: { "top": "0em" }
                }, [
                  createBaseVNode("span", { class: "delimsizing size3" }, ")")
                ])
              ]),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord" }, ".")
            ])
          ])
        ])
      ])
    ], -1),
    createStaticVNode('<p>但这个等式无解. 这就说明定理1对向量值函数不再成立.</p><p>根据这个例子，微分中值定理不能直接推广到向量值函数. 但我们仍有下面的有用结果.</p><p><strong>定理3 (拟微分中值定理)</strong>. 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 中凸域，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>:</mo><mi>D</mi><mo>→</mo><msup><mi mathvariant="double-struck">R</mi><mi>m</mi></msup></mrow><annotation encoding="application/x-tex">f: D \\to \\mathbb{R}^m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span></span></span></span></span></span></span></span> 可微，则任给 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo>∈</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">a, b \\in D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span>，存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ξ</mi><mo>∈</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">\\xi \\in D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 使得</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">∥</mi><mi>f</mi><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo><mo>−</mo><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mi mathvariant="normal">∥</mi><mo>≤</mo><mi mathvariant="normal">∥</mi><mi>J</mi><mi>f</mi><mo stretchy="false">(</mo><mi>ξ</mi><mo stretchy="false">)</mo><mi mathvariant="normal">∥</mi><mo>⋅</mo><mi mathvariant="normal">∥</mi><mi>b</mi><mo>−</mo><mi>a</mi><mi mathvariant="normal">∥</mi><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\|f(b) - f(a)\\| \\le \\|Jf(\\xi)\\| \\cdot \\|b - a\\|, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∥</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mord">∥</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∥</span><span class="mord mathnormal" style="margin-right:0.10764em;">Jf</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mclose">)</span><span class="mord">∥</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∥</span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mord">∥</span><span class="mpunct">,</span></span></span></span></span></p><p>其中 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ξ</mi><mo>=</mo><mi>a</mi><mo>+</mo><mi>θ</mi><mo stretchy="false">(</mo><mi>b</mi><mo>−</mo><mi>a</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\xi = a + \\theta(b - a)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi><mo>∈</mo><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\theta \\in (0, 1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span>.</p>', 5),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("记 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "σ"),
                  createBaseVNode("mo", null, ":"),
                  createBaseVNode("mo", { stretchy: "false" }, "["),
                  createBaseVNode("mn", null, "0"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mn", null, "1"),
                  createBaseVNode("mo", { stretchy: "false" }, "]"),
                  createBaseVNode("mo", null, "→"),
                  createBaseVNode("mi", null, "D")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\sigma: [0, 1] \\to D")
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
                style: { "margin-right": "0.03588em" }
              }, "σ"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, ":"),
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
              createBaseVNode("span", { class: "mopen" }, "["),
              createBaseVNode("span", { class: "mord" }, "0"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord" }, "1"),
              createBaseVNode("span", { class: "mclose" }, "]"),
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
                style: { "margin-right": "0.02778em" }
              }, "D")
            ])
          ])
        ]),
        createTextVNode(" 为连接 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "b")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "a, b")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "b")
            ])
          ])
        ]),
        createTextVNode(" 的直线段. 考虑复合函数")
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
                    createBaseVNode("mo", null, ":"),
                    createBaseVNode("mo", { stretchy: "false" }, "["),
                    createBaseVNode("mn", null, "0"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mn", null, "1"),
                    createBaseVNode("mo", { stretchy: "false" }, "]"),
                    createBaseVNode("mo", null, "→"),
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "R"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mspace", { width: "1em" }),
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "t"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "b"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", null, "∘"),
                    createBaseVNode("mi", null, "σ"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "t"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                    createBaseVNode("mo", { separator: "true" }, ",")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi: [0, 1] \\to \\mathbb{R}, \\quad \\varphi(t) = \\langle f(b) - f(a), f \\circ \\sigma(t) \\rangle, ")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, ":"),
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
                createBaseVNode("span", { class: "mopen" }, "["),
                createBaseVNode("span", { class: "mord" }, "0"),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mord" }, "1"),
                createBaseVNode("span", { class: "mclose" }, "]"),
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
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord mathbb" }, "R"),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "1em" }
                }),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                createBaseVNode("span", { class: "mopen" }, "⟨"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
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
                }, "σ"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                createBaseVNode("span", { class: "mclose" }, ")⟩"),
                createBaseVNode("span", { class: "mpunct" }, ",")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("则 "),
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
        createTextVNode(" 为一元可微函数，且 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msup", null, [
                    createBaseVNode("mi", null, "φ"),
                    createBaseVNode("mo", {
                      mathvariant: "normal",
                      lspace: "0em",
                      rspace: "0em"
                    }, "′")
                  ]),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "t"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                  createBaseVNode("mi", null, "f"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "b"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", null, "−"),
                  createBaseVNode("mi", null, "f"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "J"),
                  createBaseVNode("mi", null, "f"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "σ"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "t"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", null, "⋅"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "b"),
                  createBaseVNode("mo", null, "−"),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", { stretchy: "false" }, "⟩")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varphi'(t) = \\langle f(b) - f(a), Jf(\\sigma(t)) \\cdot (b - a) \\rangle")
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
                style: { "height": "1.0019em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.7519em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-3.063em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, "′")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
              createBaseVNode("span", { class: "mopen" }, "⟨"),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10764em" }
              }, "f"),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord mathnormal" }, "b"),
              createBaseVNode("span", { class: "mclose" }, ")"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              }),
              createBaseVNode("span", { class: "mbin" }, "−"),
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
                style: { "margin-right": "0.10764em" }
              }, "f"),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
              createBaseVNode("span", { class: "mclose" }, ")"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10764em" }
              }, "Jf"),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "σ"),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
              createBaseVNode("span", { class: "mclose" }, "))"),
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
              createBaseVNode("span", { class: "mbin" }, "−"),
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
              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
              createBaseVNode("span", { class: "mclose" }, ")⟩")
            ])
          ])
        ]),
        createTextVNode(". 由一元函数的微分中值定理，存在 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "θ"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mn", null, "0"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mn", null, "1"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\theta \\in (0, 1)")
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
                style: { "margin-right": "0.02778em" }
              }, "θ"),
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
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord" }, "0"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord" }, "1"),
              createBaseVNode("span", { class: "mclose" }, ")")
            ])
          ])
        ]),
        createTextVNode(" 使得")
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
                            createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mn", null, "1"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mn", null, "0"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∣")
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
                            createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "θ"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                            createBaseVNode("mo", null, "≤"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "b"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "J"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "σ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "θ"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "b"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥")
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
                            createBaseVNode("mo", null, "≤"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "b"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "J"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "ξ"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "b"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", { mathvariant: "normal" }, ".")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} |\\varphi(1) - \\varphi(0)| &= |\\varphi(\\theta)| \\le \\|f(b) - f(a)\\| \\cdot \\|Jf(\\sigma(\\theta)) \\cdot (b - a)\\| \\\\\\\\ &\\le \\|f(b) - f(a)\\| \\cdot \\|Jf(\\xi)\\| \\cdot \\|b - a\\|. \\end{aligned} ")
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
                  style: { "height": "4.5em", "vertical-align": "-2em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2.5em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.66em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }, "∣"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, "1"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, "0"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord" }, "∣")
                              ])
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
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2em" }
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
                            style: { "height": "2.5em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.66em" } }, [
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
                                createBaseVNode("span", { class: "mord" }, "∣"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.02778em" }
                                }, "θ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord" }, "∣"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "≤"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "Jf"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "σ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.02778em" }
                                }, "θ"),
                                createBaseVNode("span", { class: "mclose" }, "))"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord" }, "∥")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.66em" } }, [
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
                                createBaseVNode("span", { class: "mrel" }, "≤"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "Jf"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04601em" }
                                }, "ξ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mord" }, "∥.")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2em" }
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
      createBaseVNode("p", null, "因为"),
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
                            createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mn", null, "1"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "φ"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mn", null, "0"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∣")
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
                            createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                            createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "b"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { separator: "true" }, ","),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "b"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "b"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { separator: "true" }, ","),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∣")
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
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "b"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mo", { separator: "true" }, ",")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} |\\varphi(1) - \\varphi(0)| &= |\\langle f(b) - f(a), f(b) - f(a) \\rangle - \\langle f(b) - f(a), f(a) \\rangle| \\\\\\\\ &= \\|f(b) - f(a)\\|^2, \\end{aligned} ")
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
                  style: { "height": "4.5241em", "vertical-align": "-2.0121em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2.5121em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.6721em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }, "∣"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, "1"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "φ"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, "0"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord" }, "∣")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.1721em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.6479em" } }, [
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
                            style: { "height": "2.0121em" }
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
                            style: { "height": "2.5121em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.6721em" } }, [
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
                                createBaseVNode("span", { class: "mord" }, "∣"),
                                createBaseVNode("span", { class: "mopen" }, "⟨"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mpunct" }, ","),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mclose" }, ")⟩"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "⟨"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mpunct" }, ","),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mclose" }, ")⟩"),
                                createBaseVNode("span", { class: "mord" }, "∣")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.6479em" } }, [
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
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "b"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord" }, "∥"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.8641em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mpunct" }, ",")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2.0121em" }
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
      createBaseVNode("p", null, "代入不等式就得到了定理的证明.")
    ], -1),
    createStaticVNode('<p><strong>推论4</strong>. 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 中区域，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>:</mo><mi>D</mi><mo>→</mo><msup><mi mathvariant="double-struck">R</mi><mi>m</mi></msup></mrow><annotation encoding="application/x-tex">f: D \\to \\mathbb{R}^m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span></span></span></span></span></span></span></span> 可微. 如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>J</mi><mi>f</mi><mo>≡</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">Jf \\equiv 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">Jf</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≡</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 为常值映射.</p><h3 id="·-泰勒公式" tabindex="-1"><a class="header-anchor" href="#·-泰勒公式"><span>· 泰勒公式</span></a></h3><p>根据定义，如果一个多元函数可微，则它可以用线性函数逼近，利用这一点我们可以做近似计算.</p><p>利用微分作近似计算只考虑了函数的线性部分而已，为了更好地求近似值，我们要考虑高阶逼近.</p><p>跟一元函数一样，可以用多元多项式来逼近多元函数. 为此先引进一些记号. 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>α</mi><mi>i</mi></msub><mo>∈</mo><msup><mi mathvariant="double-struck">Z</mi><mo>+</mo></msup></mrow><annotation encoding="application/x-tex">\\alpha_i \\in \\mathbb{Z}^+</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0037em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7713em;"></span><span class="mord"><span class="mord mathbb">Z</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7713em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">+</span></span></span></span></span></span></span></span></span></span></span> (<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn><mo>≤</mo><mi>i</mi><mo>≤</mo><mi>n</mi></mrow><annotation encoding="application/x-tex">1 \\le i \\le n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7804em;vertical-align:-0.136em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7955em;vertical-align:-0.136em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>)，记 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>α</mi><mo>=</mo><mo stretchy="false">(</mo><msub><mi>α</mi><mn>1</mn></msub><mo separator="true">,</mo><mo>⋯</mo><mtext> </mtext><mo separator="true">,</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\alpha = (\\alpha_1, \\cdots, \\alpha_n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0037em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0037em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，称为多重指标. 记</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">∣</mi><mi>α</mi><mi mathvariant="normal">∣</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>α</mi><mi>i</mi></msub><mo separator="true">,</mo><mspace width="1em"></mspace><mi>α</mi><mo stretchy="false">!</mo><mo>=</mo><msub><mi>α</mi><mn>1</mn></msub><mo stretchy="false">!</mo><mo>⋅</mo><msub><mi>α</mi><mn>2</mn></msub><mo stretchy="false">!</mo><mo>⋯</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy="false">!</mo><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">|\\alpha| = \\sum_{i=1}^n \\alpha_i, \\quad \\alpha! = \\alpha_1! \\cdot \\alpha_2! \\cdots \\alpha_n!. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.9291em;vertical-align:-1.2777em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0037em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">!</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0037em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">!</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0037em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">!</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0037em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">!</span><span class="mord">.</span></span></span></span></span></p><p>如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>=</mo><mo stretchy="false">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><mo>⋯</mo><mtext> </mtext><mo separator="true">,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy="false">)</mo><mo>∈</mo><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">x = (x_1, \\cdots, x_n) \\in \\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>，则记</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>x</mi><mi>α</mi></msup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><msub><mi>α</mi><mn>1</mn></msub></msubsup><mo>⋅</mo><msubsup><mi>x</mi><mn>2</mn><msub><mi>α</mi><mn>2</mn></msub></msubsup><mo>⋯</mo><msubsup><mi>x</mi><mi>n</mi><msub><mi>α</mi><mi>n</mi></msub></msubsup><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">x^\\alpha = x_1^{\\alpha_1} \\cdot x_2^{\\alpha_2} \\cdots x_n^{\\alpha_n}. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7144em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0126em;vertical-align:-0.2663em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7463em;"><span style="top:-2.4337em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span><span style="top:-3.1449em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:-0.0037em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2663em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0126em;vertical-align:-0.2663em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7463em;"><span style="top:-2.4337em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span><span style="top:-3.1449em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:-0.0037em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2663em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-2.453em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:-0.0037em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mord">.</span></span></span></span></span></p><p>对于多元函数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span>，还用下面的记号表示 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∣</mi><mi>α</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">|\\alpha|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mord">∣</span></span></span></span> 阶偏导数：</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>D</mi><mi>α</mi></msup><mi>f</mi><mo stretchy="false">(</mo><msup><mi>x</mi><mn>0</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">∂</mi><mrow><mi mathvariant="normal">∣</mi><mi>α</mi><mi mathvariant="normal">∣</mi></mrow></msup><mi>f</mi></mrow><mrow><mi mathvariant="normal">∂</mi><msubsup><mi>x</mi><mn>1</mn><msub><mi>α</mi><mn>1</mn></msub></msubsup><mo>⋯</mo><mi mathvariant="normal">∂</mi><msubsup><mi>x</mi><mi>n</mi><msub><mi>α</mi><mi>n</mi></msub></msubsup></mrow></mfrac><mo stretchy="false">(</mo><msup><mi>x</mi><mn>0</mn></msup><mo stretchy="false">)</mo><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">D^\\alpha f(x^0) = \\frac{\\partial^{|\\alpha|} f}{\\partial x_1^{\\alpha_1} \\cdots \\partial x_n^{\\alpha_n}}(x^0). </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.5173em;vertical-align:-0.9523em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.565em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7463em;"><span style="top:-2.4337em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span><span style="top:-3.1449em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:-0.0037em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2663em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7463em;"><span style="top:-2.5834em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span><span style="top:-3.1449em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:-0.0037em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1166em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.888em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∣</span><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="mord mtight">∣</span></span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9523em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mord">.</span></span></span></span></span></p><p><strong>定理5 (Taylor 公式)</strong>. 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 中凸域，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>∈</mo><msup><mi>C</mi><mrow><mi>m</mi><mo>+</mo><mn>1</mn></mrow></msup><mo stretchy="false">(</mo><mi>D</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f \\in C^{m+1}(D)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mclose">)</span></span></span></span>（即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 具有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">m+1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 阶连续偏导数），<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>=</mo><mo stretchy="false">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo separator="true">,</mo><mo>⋯</mo><mtext> </mtext><mo separator="true">,</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy="false">)</mo><mo>∈</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">a = (a_1, \\cdots, a_n) \\in D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span>. 则任给 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>∈</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">x \\in D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span>，存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi><mo>∈</mo><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\theta \\in (0, 1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span> 使得</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>m</mi></munderover><munder><mo>∑</mo><mrow><mi mathvariant="normal">∣</mi><mi>α</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>k</mi></mrow></munder><mfrac><mrow><msup><mi>D</mi><mi>α</mi></msup><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo></mrow><mrow><mi>α</mi><mo stretchy="false">!</mo></mrow></mfrac><mo>⋅</mo><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy="false">)</mo><mi>α</mi></msup><mo>+</mo><munder><mo>∑</mo><mrow><mi mathvariant="normal">∣</mi><mi>α</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mo>+</mo><mn>1</mn></mrow></munder><mfrac><mrow><msup><mi>D</mi><mi>α</mi></msup><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo>+</mo><mi>θ</mi><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><mrow><mi>α</mi><mo stretchy="false">!</mo></mrow></mfrac><mo>⋅</mo><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy="false">)</mo><mi>α</mi></msup><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">f(x) = \\sum_{k=0}^m \\sum_{|\\alpha|=k} \\frac{D^\\alpha f(a)}{\\alpha!} \\cdot (x - a)^\\alpha + \\sum_{|\\alpha|=m+1} \\frac{D^\\alpha f(a + \\theta(x - a))}{\\alpha!} \\cdot (x - a)^\\alpha. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.1674em;vertical-align:-1.516em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8479em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mrel mtight">=</span><span class="mord mtight">0</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.3021em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.809em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∣</span><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="mord mtight">∣</span><span class="mrel mtight">=</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.516em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">!</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:2.943em;vertical-align:-1.516em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.809em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∣</span><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="mord mtight">∣</span><span class="mrel mtight">=</span><span class="mord mathnormal mtight">m</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.516em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">!</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">a</span><span class="mclose">))</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mord">.</span></span></span></span></span></p><blockquote><p>考虑一元函数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo>+</mo><mi>t</mi><mo>⋅</mo><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\varphi(t) = f(a + t \\cdot (x - a))</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose">))</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mo>∈</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">t \\in [0, 1]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6542em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span></span></span></span>. <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 具有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">m+1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 阶连续导数，故由一元函数的 Taylor 公式，存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi><mo>∈</mo><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\theta \\in (0, 1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span></span></span></span>，使得</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mo>∗</mo><mo stretchy="false">)</mo><mspace width="1em"></mspace><mi>φ</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mi>φ</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mi>φ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo stretchy="false">!</mo></mrow></mfrac><msup><mi>φ</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>+</mo><mo>⋯</mo><mo>+</mo><mfrac><mn>1</mn><mrow><mi>m</mi><mo stretchy="false">!</mo></mrow></mfrac><msup><mi>φ</mi><mrow><mo stretchy="false">(</mo><mi>m</mi><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>+</mo><mfrac><mn>1</mn><mrow><mo stretchy="false">(</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">!</mo></mrow></mfrac><msup><mi>φ</mi><mrow><mo stretchy="false">(</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">(</mo><mi>θ</mi><mo stretchy="false">)</mo><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">(*) \\quad \\varphi(1) = \\varphi(0) + \\varphi&#39;(0) + \\frac{1}{2!}\\varphi&#39;&#39;(0) + \\cdots + \\frac{1}{m!}\\varphi^{(m)}(0) + \\frac{1}{(m+1)!}\\varphi^{(m+1)}(\\theta), </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∗</span><span class="mclose">)</span><span class="mspace" style="margin-right:1em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0519em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:2.0074em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span><span class="mclose">!</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8019em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:2.0074em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">m</span><span class="mclose">!</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.938em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">m</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:2.2574em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)!</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.938em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight">m</span><span class="mbin mtight">+</span><span class="mord mtight">1</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span><span class="mpunct">,</span></span></span></span></span></p><p>利用归纳法不难证明</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>φ</mi><mrow><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><munder><mo>∑</mo><mrow><mi mathvariant="normal">∣</mi><mi>α</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>k</mi></mrow></munder><mfrac><mrow><mi>k</mi><mo stretchy="false">!</mo></mrow><mrow><mi>α</mi><mo stretchy="false">!</mo></mrow></mfrac><msup><mi>D</mi><mi>α</mi></msup><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo>+</mo><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>⋅</mo><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy="false">)</mo><mi>α</mi></msup><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\varphi^{(k)}(t) = \\sum_{|\\alpha|=k} \\frac{k!}{\\alpha!} D^\\alpha f(a + t(x - a)) \\cdot (x - a)^\\alpha. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.188em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.938em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.8874em;vertical-align:-1.516em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.809em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∣</span><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="mord mtight">∣</span><span class="mrel mtight">=</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.516em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">!</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">!</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose">))</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mord">.</span></span></span></span></span></p><p>特别地，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">t = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> 时，有</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>φ</mi><mrow><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><munder><mo>∑</mo><mrow><mi mathvariant="normal">∣</mi><mi>α</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>k</mi></mrow></munder><mfrac><mrow><mi>k</mi><mo stretchy="false">!</mo></mrow><mrow><mi>α</mi><mo stretchy="false">!</mo></mrow></mfrac><msup><mi>D</mi><mi>α</mi></msup><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>⋅</mo><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy="false">)</mo><mi>α</mi></msup><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\varphi^{(k)}(0) = \\sum_{|\\alpha|=k} \\frac{k!}{\\alpha!} D^\\alpha f(a) \\cdot (x - a)^\\alpha, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.188em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.938em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mclose mtight">)</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.8874em;vertical-align:-1.516em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.809em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∣</span><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="mord mtight">∣</span><span class="mrel mtight">=</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.516em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">!</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">!</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mpunct">,</span></span></span></span></span></p><p>上式代入 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mo>∗</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(*)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">∗</span><span class="mclose">)</span></span></span></span> 即得欲证公式.</p></blockquote><p>记</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>R</mi><mi>m</mi></msub><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>−</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>m</mi></munderover><munder><mo>∑</mo><mrow><mi mathvariant="normal">∣</mi><mi>α</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>k</mi></mrow></munder><mfrac><mrow><msup><mi>D</mi><mi>α</mi></msup><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo></mrow><mrow><mi>α</mi><mo stretchy="false">!</mo></mrow></mfrac><mo>⋅</mo><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy="false">)</mo><mi>α</mi></msup><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">R_m = f(x) - \\sum_{k=0}^m \\sum_{|\\alpha|=k} \\frac{D^\\alpha f(a)}{\\alpha!} \\cdot (x - a)^\\alpha. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:3.1674em;vertical-align:-1.516em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8479em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mrel mtight">=</span><span class="mord mtight">0</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.3021em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.809em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∣</span><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="mord mtight">∣</span><span class="mrel mtight">=</span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.516em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">!</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mord">.</span></span></span></span></span></p><p>由 Taylor 公式，当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>∈</mo><msup><mi>C</mi><mrow><mi>m</mi><mo>+</mo><mn>1</mn></mrow></msup><mo stretchy="false">(</mo><mi>D</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f \\in C^{m+1}(D)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mclose">)</span></span></span></span> 时</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>R</mi><mi>m</mi></msub><mo>=</mo><munder><mo>∑</mo><mrow><mi mathvariant="normal">∣</mi><mi>α</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mo>+</mo><mn>1</mn></mrow></munder><mfrac><mrow><msup><mi>D</mi><mi>α</mi></msup><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mo>+</mo><mi>θ</mi><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><mrow><mi>α</mi><mo stretchy="false">!</mo></mrow></mfrac><mo>⋅</mo><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy="false">)</mo><mi>α</mi></msup><mi mathvariant="normal">.</mi><mspace width="1em"></mspace><mtext>(Lagrange remainder term)</mtext></mrow><annotation encoding="application/x-tex">R_m = \\sum_{|\\alpha|=m+1} \\frac{D^\\alpha f(a + \\theta(x - a))}{\\alpha!} \\cdot (x - a)^\\alpha. \\quad \\text{(Lagrange remainder term)} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.943em;vertical-align:-1.516em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.809em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∣</span><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span><span class="mord mtight">∣</span><span class="mrel mtight">=</span><span class="mord mathnormal mtight">m</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.516em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mclose">!</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">a</span><span class="mclose">))</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.0037em;">α</span></span></span></span></span></span></span></span><span class="mord">.</span><span class="mspace" style="margin-right:1em;"></span><span class="mord text"><span class="mord">(Lagrange remainder term)</span></span></span></span></span></span></p><p><strong>推论6</strong>. 在定理的条件下，当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∥</mi><mi>x</mi><mo>−</mo><mi>a</mi><mi mathvariant="normal">∥</mi></mrow><annotation encoding="application/x-tex">\\|x - a\\|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∥</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mord">∥</span></span></span></span> 充分小时，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>R</mi><mi>m</mi></msub><mo>=</mo><mi>O</mi><mo stretchy="false">(</mo><mi mathvariant="normal">∥</mi><mi>x</mi><mo>−</mo><mi>a</mi><msup><mi mathvariant="normal">∥</mi><mrow><mi>m</mi><mo>+</mo><mn>1</mn></mrow></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">R_m = O(\\|x - a\\|^{m+1})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0077em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">∥</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal">a</span><span class="mord"><span class="mord">∥</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">m</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>.</p>', 18),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("取 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "δ"),
                  createBaseVNode("mo", null, ">"),
                  createBaseVNode("mn", null, "0")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\delta > 0")
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
                style: { "margin-right": "0.03785em" }
              }, "δ"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, ">"),
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
        createTextVNode("，使得 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mover", { accent: "true" }, [
                      createBaseVNode("mi", null, "B"),
                      createBaseVNode("mo", null, "ˉ")
                    ]),
                    createBaseVNode("mi", null, "δ")
                  ]),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", null, "⊂"),
                  createBaseVNode("mi", null, "D")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\bar{B}_\\delta(a) \\subset D")
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
                style: { "height": "1.0701em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord accent" }, [
                  createBaseVNode("span", { class: "vlist-t" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.8201em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-3em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "3em" }
                          }),
                          createBaseVNode("span", {
                            class: "mord mathnormal",
                            style: { "margin-right": "0.05017em" }
                          }, "B")
                        ]),
                        createBaseVNode("span", { style: { "top": "-3.2523em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "3em" }
                          }),
                          createBaseVNode("span", {
                            class: "accent-body",
                            style: { "left": "-0.1667em" }
                          }, [
                            createBaseVNode("span", { class: "mord" }, "ˉ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3361em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.0502em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", {
                              class: "mord mathnormal mtight",
                              style: { "margin-right": "0.03785em" }
                            }, "δ")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
              createBaseVNode("span", { class: "mclose" }, ")"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "⊂"),
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
                style: { "margin-right": "0.02778em" }
              }, "D")
            ])
          ])
        ]),
        createTextVNode(". 由于 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "f"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("msup", null, [
                    createBaseVNode("mi", null, "C"),
                    createBaseVNode("mrow", null, [
                      createBaseVNode("mi", null, "m"),
                      createBaseVNode("mo", null, "+"),
                      createBaseVNode("mn", null, "1")
                    ])
                  ]),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "D"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "f \\in C^{m+1}(D)")
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
                style: { "margin-right": "0.10764em" }
              }, "f"),
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
                style: { "height": "1.0641em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.07153em" }
                }, "C"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.8141em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-3.063em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mtight" }, [
                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "m"),
                              createBaseVNode("span", { class: "mbin mtight" }, "+"),
                              createBaseVNode("span", { class: "mord mtight" }, "1")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.02778em" }
              }, "D"),
              createBaseVNode("span", { class: "mclose" }, ")")
            ])
          ])
        ]),
        createTextVNode("，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mover", { accent: "true" }, [
                      createBaseVNode("mi", null, "B"),
                      createBaseVNode("mo", null, "ˉ")
                    ]),
                    createBaseVNode("mi", null, "δ")
                  ]),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "a"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\bar{B}_\\delta(a)")
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
                style: { "height": "1.0701em", "vertical-align": "-0.25em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord accent" }, [
                  createBaseVNode("span", { class: "vlist-t" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.8201em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-3em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "3em" }
                          }),
                          createBaseVNode("span", {
                            class: "mord mathnormal",
                            style: { "margin-right": "0.05017em" }
                          }, "B")
                        ]),
                        createBaseVNode("span", { style: { "top": "-3.2523em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "3em" }
                          }),
                          createBaseVNode("span", {
                            class: "accent-body",
                            style: { "left": "-0.1667em" }
                          }, [
                            createBaseVNode("span", { class: "mord" }, "ˉ")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3361em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.0502em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", {
                              class: "mord mathnormal mtight",
                              style: { "margin-right": "0.03785em" }
                            }, "δ")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
              createBaseVNode("span", { class: "mclose" }, ")")
            ])
          ])
        ]),
        createTextVNode(" 紧致，故存在 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "M"),
                  createBaseVNode("mo", null, ">"),
                  createBaseVNode("mn", null, "0")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "M > 0")
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
                style: { "height": "0.7224em", "vertical-align": "-0.0391em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10903em" }
              }, "M"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, ">"),
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
        createTextVNode(" 使得")
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
                    createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                    createBaseVNode("msup", null, [
                      createBaseVNode("mi", null, "D"),
                      createBaseVNode("mi", null, "α")
                    ]),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                    createBaseVNode("mo", null, "≤"),
                    createBaseVNode("mi", null, "M"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mspace", { width: "1em" }),
                    createBaseVNode("mi", { mathvariant: "normal" }, "∀"),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, "∈"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mover", { accent: "true" }, [
                        createBaseVNode("mi", null, "B"),
                        createBaseVNode("mo", null, "ˉ")
                      ]),
                      createBaseVNode("mi", null, "δ")
                    ]),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mtext", null, "  "),
                    createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                    createBaseVNode("mi", null, "α"),
                    createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                    createBaseVNode("mo", null, "≤"),
                    createBaseVNode("mi", null, "m"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mn", null, "1.")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "|D^\\alpha f(x)| \\le M, \\quad \\forall x \\in \\bar{B}_\\delta(a), \\; |\\alpha| \\le m+1. ")
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
                createBaseVNode("span", { class: "mord" }, "∣"),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.02778em" }
                  }, "D"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.7144em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.0037em" }
                              }, "α")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mord" }, "∣"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "≤"),
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
                  style: { "margin-right": "0.10903em" }
                }, "M"),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "1em" }
                }),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mord" }, "∀"),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                  style: { "height": "1.0701em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord accent" }, [
                    createBaseVNode("span", { class: "vlist-t" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.8201em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3em" }
                            }),
                            createBaseVNode("span", {
                              class: "mord mathnormal",
                              style: { "margin-right": "0.05017em" }
                            }, "B")
                          ]),
                          createBaseVNode("span", { style: { "top": "-3.2523em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3em" }
                            }),
                            createBaseVNode("span", {
                              class: "accent-body",
                              style: { "left": "-0.1667em" }
                            }, [
                              createBaseVNode("span", { class: "mord" }, "ˉ")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3361em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.0502em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.03785em" }
                              }, "δ")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mord" }, "∣"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.0037em" }
                }, "α"),
                createBaseVNode("span", { class: "mord" }, "∣"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "≤"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                })
              ]),
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
                createBaseVNode("span", { class: "mbin" }, "+"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.6444em" }
                }),
                createBaseVNode("span", { class: "mord" }, "1.")
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
                            createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "R"),
                              createBaseVNode("mi", null, "m")
                            ]),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∣")
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
                            createBaseVNode("mo", null, "≤"),
                            createBaseVNode("mi", null, "M"),
                            createBaseVNode("munder", null, [
                              createBaseVNode("mo", null, "∑"),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                                createBaseVNode("mi", null, "α"),
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                                createBaseVNode("mo", null, "="),
                                createBaseVNode("mi", null, "m"),
                                createBaseVNode("mo", null, "+"),
                                createBaseVNode("mn", null, "1")
                              ])
                            ]),
                            createBaseVNode("mfrac", null, [
                              createBaseVNode("mn", null, "1"),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "α"),
                                createBaseVNode("mo", { stretchy: "false" }, "!")
                              ])
                            ]),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                              createBaseVNode("mi", null, "α")
                            ])
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
                            createBaseVNode("mo", null, "≤"),
                            createBaseVNode("mi", null, "M"),
                            createBaseVNode("munder", null, [
                              createBaseVNode("mo", null, "∑"),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                                createBaseVNode("mi", null, "α"),
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                                createBaseVNode("mo", null, "="),
                                createBaseVNode("mi", null, "m"),
                                createBaseVNode("mo", null, "+"),
                                createBaseVNode("mn", null, "1")
                              ])
                            ]),
                            createBaseVNode("mfrac", null, [
                              createBaseVNode("mn", null, "1"),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "α"),
                                createBaseVNode("mo", { stretchy: "false" }, "!")
                              ])
                            ]),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                                createBaseVNode("mi", null, "α"),
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣")
                              ])
                            ]),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mi", null, "C"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "m"),
                                createBaseVNode("mo", null, "+"),
                                createBaseVNode("mn", null, "1")
                              ])
                            ]),
                            createBaseVNode("mi", { mathvariant: "normal" }, ".")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} |R_m| &\\le M \\sum_{|\\alpha|=m+1} \\frac{1}{\\alpha!} |x - a|^\\alpha \\\\\\\\ &\\le M \\sum_{|\\alpha|=m+1} \\frac{1}{\\alpha!} \\|x - a\\|^{|\\alpha|} = C \\cdot \\|x - a\\|^{m+1}. \\end{aligned} ")
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
                  style: { "height": "7.7749em", "vertical-align": "-3.6374em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "4.1374em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-6.1374em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.3214em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }, "∣"),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.00773em" }
                                  }, "R"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.0077em", "margin-right": "0.05em" } }, [
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
                                ]),
                                createBaseVNode("span", { class: "mord" }, "∣")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.4814em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.3214em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.5em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.3214em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "3.6374em" }
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
                            style: { "height": "4.1374em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-6.1374em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.3214em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "≤"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10903em" }
                                }, "M"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mop op-limits" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.05em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-1.809em", "margin-left": "0em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α"),
                                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                                              createBaseVNode("span", { class: "mrel mtight" }, "="),
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "m"),
                                              createBaseVNode("span", { class: "mbin mtight" }, "+"),
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", null, [
                                            createBaseVNode("span", { class: "mop op-symbol large-op" }, "∑")
                                          ])
                                        ])
                                      ]),
                                      createBaseVNode("span", { class: "vlist-s" }, "​")
                                    ]),
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.516em" }
                                      }, [
                                        createBaseVNode("span")
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mopen nulldelimiter" }),
                                  createBaseVNode("span", { class: "mfrac" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.3214em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "3em" }
                                            }),
                                            createBaseVNode("span", { class: "mord" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α"),
                                              createBaseVNode("span", { class: "mclose" }, "!")
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
                                              createBaseVNode("span", { class: "mord" }, "1")
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
                                createBaseVNode("span", { class: "mord" }, "∣"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord" }, "∣"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.7144em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α")
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.5em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.3214em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "≤"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10903em" }
                                }, "M"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mop op-limits" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.05em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-1.809em", "margin-left": "0em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α"),
                                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                                              createBaseVNode("span", { class: "mrel mtight" }, "="),
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "m"),
                                              createBaseVNode("span", { class: "mbin mtight" }, "+"),
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", null, [
                                            createBaseVNode("span", { class: "mop op-symbol large-op" }, "∑")
                                          ])
                                        ])
                                      ]),
                                      createBaseVNode("span", { class: "vlist-s" }, "​")
                                    ]),
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.516em" }
                                      }, [
                                        createBaseVNode("span")
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mopen nulldelimiter" }),
                                  createBaseVNode("span", { class: "mfrac" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.3214em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "3em" }
                                            }),
                                            createBaseVNode("span", { class: "mord" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α"),
                                              createBaseVNode("span", { class: "mclose" }, "!")
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
                                              createBaseVNode("span", { class: "mord" }, "1")
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
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord" }, "∥"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.938em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, [
                                                createBaseVNode("span", { class: "mord mtight" }, "∣"),
                                                createBaseVNode("span", {
                                                  class: "mord mathnormal mtight",
                                                  style: { "margin-right": "0.0037em" }
                                                }, "α"),
                                                createBaseVNode("span", { class: "mord mtight" }, "∣")
                                              ])
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
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.07153em" }
                                }, "C"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord" }, "∥"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.8641em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, [
                                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "m"),
                                                createBaseVNode("span", { class: "mbin mtight" }, "+"),
                                                createBaseVNode("span", { class: "mord mtight" }, "1")
                                              ])
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mord" }, ".")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "3.6374em" }
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
      createBaseVNode("p", null, "推论得证.")
    ], -1),
    createBaseVNode("div", { class: "hint-container important" }, [
      createBaseVNode("p", { class: "hint-container-title" }, "重要"),
      createBaseVNode("p", null, [
        createBaseVNode("strong", null, "注意"),
        createTextVNode(". (1) 如果 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "f"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("msup", null, [
                    createBaseVNode("mi", null, "C"),
                    createBaseVNode("mi", null, "m")
                  ]),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "D"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "f \\in C^m(D)")
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
                style: { "margin-right": "0.10764em" }
              }, "f"),
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
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.07153em" }
                }, "C"),
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
                            createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.02778em" }
              }, "D"),
              createBaseVNode("span", { class: "mclose" }, ")")
            ])
          ])
        ]),
        createTextVNode("，则 Taylor 公式可写为")
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
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
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
                            createBaseVNode("munderover", null, [
                              createBaseVNode("mo", null, "∑"),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "k"),
                                createBaseVNode("mo", null, "="),
                                createBaseVNode("mn", null, "0")
                              ]),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "m"),
                                createBaseVNode("mo", null, "−"),
                                createBaseVNode("mn", null, "1")
                              ])
                            ]),
                            createBaseVNode("munder", null, [
                              createBaseVNode("mo", null, "∑"),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                                createBaseVNode("mi", null, "α"),
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                                createBaseVNode("mo", null, "="),
                                createBaseVNode("mi", null, "k")
                              ])
                            ]),
                            createBaseVNode("mfrac", null, [
                              createBaseVNode("mrow", null, [
                                createBaseVNode("msup", null, [
                                  createBaseVNode("mi", null, "D"),
                                  createBaseVNode("mi", null, "α")
                                ]),
                                createBaseVNode("mi", null, "f"),
                                createBaseVNode("mo", { stretchy: "false" }, "("),
                                createBaseVNode("mi", null, "a"),
                                createBaseVNode("mo", { stretchy: "false" }, ")")
                              ]),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "α"),
                                createBaseVNode("mo", { stretchy: "false" }, "!")
                              ])
                            ]),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mi", null, "α")
                            ]),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("munder", null, [
                              createBaseVNode("mo", null, "∑"),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                                createBaseVNode("mi", null, "α"),
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                                createBaseVNode("mo", null, "="),
                                createBaseVNode("mi", null, "m")
                              ])
                            ]),
                            createBaseVNode("mfrac", null, [
                              createBaseVNode("mrow", null, [
                                createBaseVNode("msup", null, [
                                  createBaseVNode("mi", null, "D"),
                                  createBaseVNode("mi", null, "α")
                                ]),
                                createBaseVNode("mi", null, "f"),
                                createBaseVNode("mo", { stretchy: "false" }, "("),
                                createBaseVNode("mi", null, "a"),
                                createBaseVNode("mo", null, "+"),
                                createBaseVNode("mi", null, "θ"),
                                createBaseVNode("mo", { stretchy: "false" }, "("),
                                createBaseVNode("mi", null, "x"),
                                createBaseVNode("mo", null, "−"),
                                createBaseVNode("mi", null, "a"),
                                createBaseVNode("mo", { stretchy: "false" }, ")"),
                                createBaseVNode("mo", { stretchy: "false" }, ")")
                              ]),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "α"),
                                createBaseVNode("mo", { stretchy: "false" }, "!")
                              ])
                            ]),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mi", null, "α")
                            ])
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
                            createBaseVNode("munderover", null, [
                              createBaseVNode("mo", null, "∑"),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "k"),
                                createBaseVNode("mo", null, "="),
                                createBaseVNode("mn", null, "0")
                              ]),
                              createBaseVNode("mi", null, "m")
                            ]),
                            createBaseVNode("munder", null, [
                              createBaseVNode("mo", null, "∑"),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                                createBaseVNode("mi", null, "α"),
                                createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                                createBaseVNode("mo", null, "="),
                                createBaseVNode("mi", null, "k")
                              ])
                            ]),
                            createBaseVNode("mfrac", null, [
                              createBaseVNode("mrow", null, [
                                createBaseVNode("msup", null, [
                                  createBaseVNode("mi", null, "D"),
                                  createBaseVNode("mi", null, "α")
                                ]),
                                createBaseVNode("mi", null, "f"),
                                createBaseVNode("mo", { stretchy: "false" }, "("),
                                createBaseVNode("mi", null, "a"),
                                createBaseVNode("mo", { stretchy: "false" }, ")")
                              ]),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "α"),
                                createBaseVNode("mo", { stretchy: "false" }, "!")
                              ])
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mi", null, "α")
                            ]),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "R"),
                              createBaseVNode("mi", null, "m")
                            ]),
                            createBaseVNode("mo", { separator: "true" }, ",")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} f(x) &= \\sum_{k=0}^{m-1} \\sum_{|\\alpha|=k} \\frac{D^\\alpha f(a)}{\\alpha!} \\cdot (x - a)^\\alpha + \\sum_{|\\alpha|=m} \\frac{D^\\alpha f(a + \\theta(x - a))}{\\alpha!} \\cdot (x - a)^\\alpha \\\\\\\\ &= \\sum_{k=0}^m \\sum_{|\\alpha|=k} \\frac{D^\\alpha f(a)}{\\alpha!} (x - a)^\\alpha + R_m, \\end{aligned} ")
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
                  style: { "height": "8.5845em", "vertical-align": "-4.0423em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "4.5423em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-6.5423em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.8011em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.8863em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.8011em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.5749em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.8011em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "4.0423em" }
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
                            style: { "height": "4.5423em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-6.5423em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.8011em" }
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
                                createBaseVNode("span", { class: "mop op-limits" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.8011em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-1.8479em", "margin-left": "0em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03148em" }
                                              }, "k"),
                                              createBaseVNode("span", { class: "mrel mtight" }, "="),
                                              createBaseVNode("span", { class: "mord mtight" }, "0")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", null, [
                                            createBaseVNode("span", { class: "mop op-symbol large-op" }, "∑")
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-4.3em", "margin-left": "0em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, [
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "m"),
                                              createBaseVNode("span", { class: "mbin mtight" }, "−"),
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      createBaseVNode("span", { class: "vlist-s" }, "​")
                                    ]),
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.3021em" }
                                      }, [
                                        createBaseVNode("span")
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mop op-limits" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.05em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-1.809em", "margin-left": "0em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α"),
                                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                                              createBaseVNode("span", { class: "mrel mtight" }, "="),
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03148em" }
                                              }, "k")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", null, [
                                            createBaseVNode("span", { class: "mop op-symbol large-op" }, "∑")
                                          ])
                                        ])
                                      ]),
                                      createBaseVNode("span", { class: "vlist-s" }, "​")
                                    ]),
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.516em" }
                                      }, [
                                        createBaseVNode("span")
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mopen nulldelimiter" }),
                                  createBaseVNode("span", { class: "mfrac" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.427em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "3em" }
                                            }),
                                            createBaseVNode("span", { class: "mord" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α"),
                                              createBaseVNode("span", { class: "mclose" }, "!")
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
                                              createBaseVNode("span", { class: "mord" }, [
                                                createBaseVNode("span", {
                                                  class: "mord mathnormal",
                                                  style: { "margin-right": "0.02778em" }
                                                }, "D"),
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
                                                            createBaseVNode("span", {
                                                              class: "mord mathnormal mtight",
                                                              style: { "margin-right": "0.0037em" }
                                                            }, "α")
                                                          ])
                                                        ])
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ]),
                                              createBaseVNode("span", {
                                                class: "mord mathnormal",
                                                style: { "margin-right": "0.10764em" }
                                              }, "f"),
                                              createBaseVNode("span", { class: "mopen" }, "("),
                                              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                              createBaseVNode("span", { class: "mclose" }, ")")
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
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mclose" }, [
                                  createBaseVNode("span", { class: "mclose" }, ")"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.7144em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α")
                                            ])
                                          ])
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
                                createBaseVNode("span", { class: "mop op-limits" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.05em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-1.809em", "margin-left": "0em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α"),
                                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                                              createBaseVNode("span", { class: "mrel mtight" }, "="),
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", null, [
                                            createBaseVNode("span", { class: "mop op-symbol large-op" }, "∑")
                                          ])
                                        ])
                                      ]),
                                      createBaseVNode("span", { class: "vlist-s" }, "​")
                                    ]),
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.516em" }
                                      }, [
                                        createBaseVNode("span")
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mopen nulldelimiter" }),
                                  createBaseVNode("span", { class: "mfrac" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.427em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "3em" }
                                            }),
                                            createBaseVNode("span", { class: "mord" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α"),
                                              createBaseVNode("span", { class: "mclose" }, "!")
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
                                              createBaseVNode("span", { class: "mord" }, [
                                                createBaseVNode("span", {
                                                  class: "mord mathnormal",
                                                  style: { "margin-right": "0.02778em" }
                                                }, "D"),
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
                                                            createBaseVNode("span", {
                                                              class: "mord mathnormal mtight",
                                                              style: { "margin-right": "0.0037em" }
                                                            }, "α")
                                                          ])
                                                        ])
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ]),
                                              createBaseVNode("span", {
                                                class: "mord mathnormal",
                                                style: { "margin-right": "0.10764em" }
                                              }, "f"),
                                              createBaseVNode("span", { class: "mopen" }, "("),
                                              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
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
                                                style: { "margin-right": "0.02778em" }
                                              }, "θ"),
                                              createBaseVNode("span", { class: "mopen" }, "("),
                                              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                              createBaseVNode("span", {
                                                class: "mspace",
                                                style: { "margin-right": "0.2222em" }
                                              }),
                                              createBaseVNode("span", { class: "mbin" }, "−"),
                                              createBaseVNode("span", {
                                                class: "mspace",
                                                style: { "margin-right": "0.2222em" }
                                              }),
                                              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                              createBaseVNode("span", { class: "mclose" }, "))")
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
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mclose" }, [
                                  createBaseVNode("span", { class: "mclose" }, ")"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.7144em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α")
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.5749em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.8011em" }
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
                                createBaseVNode("span", { class: "mop op-limits" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.6514em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-1.8479em", "margin-left": "0em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03148em" }
                                              }, "k"),
                                              createBaseVNode("span", { class: "mrel mtight" }, "="),
                                              createBaseVNode("span", { class: "mord mtight" }, "0")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", null, [
                                            createBaseVNode("span", { class: "mop op-symbol large-op" }, "∑")
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-4.3em", "margin-left": "0em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
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
                                        style: { "height": "1.3021em" }
                                      }, [
                                        createBaseVNode("span")
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mop op-limits" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.05em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-1.809em", "margin-left": "0em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α"),
                                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                                              createBaseVNode("span", { class: "mrel mtight" }, "="),
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03148em" }
                                              }, "k")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", null, [
                                            createBaseVNode("span", { class: "mop op-symbol large-op" }, "∑")
                                          ])
                                        ])
                                      ]),
                                      createBaseVNode("span", { class: "vlist-s" }, "​")
                                    ]),
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.516em" }
                                      }, [
                                        createBaseVNode("span")
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mopen nulldelimiter" }),
                                  createBaseVNode("span", { class: "mfrac" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.427em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "3em" }
                                            }),
                                            createBaseVNode("span", { class: "mord" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α"),
                                              createBaseVNode("span", { class: "mclose" }, "!")
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
                                              createBaseVNode("span", { class: "mord" }, [
                                                createBaseVNode("span", {
                                                  class: "mord mathnormal",
                                                  style: { "margin-right": "0.02778em" }
                                                }, "D"),
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
                                                            createBaseVNode("span", {
                                                              class: "mord mathnormal mtight",
                                                              style: { "margin-right": "0.0037em" }
                                                            }, "α")
                                                          ])
                                                        ])
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ]),
                                              createBaseVNode("span", {
                                                class: "mord mathnormal",
                                                style: { "margin-right": "0.10764em" }
                                              }, "f"),
                                              createBaseVNode("span", { class: "mopen" }, "("),
                                              createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                              createBaseVNode("span", { class: "mclose" }, ")")
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
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                createBaseVNode("span", { class: "mclose" }, [
                                  createBaseVNode("span", { class: "mclose" }, ")"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.7144em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.0037em" }
                                              }, "α")
                                            ])
                                          ])
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
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.00773em" }
                                  }, "R"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.0077em", "margin-right": "0.05em" } }, [
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
                                ]),
                                createBaseVNode("span", { class: "mpunct" }, ",")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "4.0423em" }
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
      createBaseVNode("p", null, "其中"),
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
                      createBaseVNode("mi", null, "R"),
                      createBaseVNode("mi", null, "m")
                    ]),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("munder", null, [
                      createBaseVNode("mo", null, "∑"),
                      createBaseVNode("mrow", null, [
                        createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                        createBaseVNode("mi", null, "α"),
                        createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                        createBaseVNode("mo", null, "="),
                        createBaseVNode("mi", null, "m")
                      ])
                    ]),
                    createBaseVNode("mfrac", null, [
                      createBaseVNode("mn", null, "1"),
                      createBaseVNode("mrow", null, [
                        createBaseVNode("mi", null, "α"),
                        createBaseVNode("mo", { stretchy: "false" }, "!")
                      ])
                    ]),
                    createBaseVNode("mo", { stretchy: "false" }, "["),
                    createBaseVNode("msup", null, [
                      createBaseVNode("mi", null, "D"),
                      createBaseVNode("mi", null, "α")
                    ]),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "θ"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("msup", null, [
                      createBaseVNode("mi", null, "D"),
                      createBaseVNode("mi", null, "α")
                    ]),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { stretchy: "false" }, "]"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("msup", null, [
                      createBaseVNode("mo", { stretchy: "false" }, ")"),
                      createBaseVNode("mi", null, "α")
                    ]),
                    createBaseVNode("mi", { mathvariant: "normal" }, ".")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "R_m = \\sum_{|\\alpha|=m} \\frac{1}{\\alpha!} [D^\\alpha f(a + \\theta(x - a)) - D^\\alpha f(a)] \\cdot (x - a)^\\alpha. ")
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
                    style: { "margin-right": "0.00773em" }
                  }, "R"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.1514em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.0077em", "margin-right": "0.05em" } }, [
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
                  style: { "height": "2.8374em", "vertical-align": "-1.516em" }
                }),
                createBaseVNode("span", { class: "mop op-limits" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "1.05em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-1.809em", "margin-left": "0em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "3.05em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.0037em" }
                              }, "α"),
                              createBaseVNode("span", { class: "mord mtight" }, "∣"),
                              createBaseVNode("span", { class: "mrel mtight" }, "="),
                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { style: { "top": "-3.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "3.05em" }
                          }),
                          createBaseVNode("span", null, [
                            createBaseVNode("span", { class: "mop op-symbol large-op" }, "∑")
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "vlist-s" }, "​")
                    ]),
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "1.516em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mopen nulldelimiter" }),
                  createBaseVNode("span", { class: "mfrac" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "1.3214em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3em" }
                            }),
                            createBaseVNode("span", { class: "mord" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal",
                                style: { "margin-right": "0.0037em" }
                              }, "α"),
                              createBaseVNode("span", { class: "mclose" }, "!")
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
                              createBaseVNode("span", { class: "mord" }, "1")
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
                createBaseVNode("span", { class: "mopen" }, "["),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.02778em" }
                  }, "D"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.7144em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.0037em" }
                              }, "α")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
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
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.02778em" }
                }, "θ"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", { class: "mclose" }, "))"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.02778em" }
                  }, "D"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.7144em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.0037em" }
                              }, "α")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", { class: "mclose" }, ")]"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", { class: "mclose" }, [
                  createBaseVNode("span", { class: "mclose" }, ")"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.7144em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.0037em" }
                              }, "α")
                            ])
                          ])
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
      createBaseVNode("p", null, "用推论的证明方法可得如下估计："),
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
                      createBaseVNode("mi", null, "R"),
                      createBaseVNode("mi", null, "m")
                    ]),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "o"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("msup", null, [
                      createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                      createBaseVNode("mi", null, "m")
                    ]),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mspace", { width: "1em" }),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, "→"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mi", { mathvariant: "normal" }, "."),
                    createBaseVNode("mspace", { width: "1em" }),
                    createBaseVNode("mtext", null, "(Peano remainder term)")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "R_m = o(\\|x - a\\|^m) \\quad (x \\to a). \\quad \\text{(Peano remainder term)} ")
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
                    style: { "margin-right": "0.00773em" }
                  }, "R"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.1514em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.0077em", "margin-right": "0.05em" } }, [
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
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "o"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord" }, "∥"),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord" }, "∥"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.7144em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "1em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mord" }, "."),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "1em" }
                }),
                createBaseVNode("span", { class: "mord text" }, [
                  createBaseVNode("span", { class: "mord" }, "(Peano remainder term)")
                ])
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, "(2) 多元函数 Taylor 展开的前三项为"),
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
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "J"),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mfrac", null, [
                      createBaseVNode("mn", null, "1"),
                      createBaseVNode("mn", null, "2")
                    ]),
                    createBaseVNode("munderover", null, [
                      createBaseVNode("mo", null, "∑"),
                      createBaseVNode("mrow", null, [
                        createBaseVNode("mi", null, "i"),
                        createBaseVNode("mo", { separator: "true" }, ","),
                        createBaseVNode("mi", null, "j"),
                        createBaseVNode("mo", null, "="),
                        createBaseVNode("mn", null, "1")
                      ]),
                      createBaseVNode("mi", null, "n")
                    ]),
                    createBaseVNode("mfrac", null, [
                      createBaseVNode("mrow", null, [
                        createBaseVNode("msup", null, [
                          createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                          createBaseVNode("mn", null, "2")
                        ]),
                        createBaseVNode("mi", null, "f")
                      ]),
                      createBaseVNode("mrow", null, [
                        createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                        createBaseVNode("msub", null, [
                          createBaseVNode("mi", null, "x"),
                          createBaseVNode("mi", null, "i")
                        ]),
                        createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                        createBaseVNode("msub", null, [
                          createBaseVNode("mi", null, "x"),
                          createBaseVNode("mi", null, "j")
                        ])
                      ])
                    ]),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "x"),
                      createBaseVNode("mi", null, "i")
                    ]),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "a"),
                      createBaseVNode("mi", null, "i")
                    ]),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "x"),
                      createBaseVNode("mi", null, "j")
                    ]),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "a"),
                      createBaseVNode("mi", null, "j")
                    ]),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mo", null, "⋯")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "f(x) = f(a) + Jf(a) \\cdot (x - a) + \\frac{1}{2} \\sum_{i,j=1}^n \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(a) \\cdot (x_i - a_i) \\cdot (x_j - a_j) + \\cdots ")
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
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
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
                  style: { "margin-right": "0.10764em" }
                }, "Jf"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
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
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
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
                  style: { "height": "3.0652em", "vertical-align": "-1.4138em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mopen nulldelimiter" }),
                  createBaseVNode("span", { class: "mfrac" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "1.3214em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3em" }
                            }),
                            createBaseVNode("span", { class: "mord" }, [
                              createBaseVNode("span", { class: "mord" }, "2")
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
                              createBaseVNode("span", { class: "mord" }, "1")
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
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mop op-limits" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "1.6514em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "3.05em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mtight" }, [
                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                              createBaseVNode("span", { class: "mpunct mtight" }, ","),
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.05724em" }
                              }, "j"),
                              createBaseVNode("span", { class: "mrel mtight" }, "="),
                              createBaseVNode("span", { class: "mord mtight" }, "1")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { style: { "top": "-3.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "3.05em" }
                          }),
                          createBaseVNode("span", null, [
                            createBaseVNode("span", { class: "mop op-symbol large-op" }, "∑")
                          ])
                        ]),
                        createBaseVNode("span", { style: { "top": "-4.3em", "margin-left": "0em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "3.05em" }
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
                        style: { "height": "1.4138em" }
                      }, [
                        createBaseVNode("span")
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mopen nulldelimiter" }),
                  createBaseVNode("span", { class: "mfrac" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "1.4911em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3em" }
                            }),
                            createBaseVNode("span", { class: "mord" }, [
                              createBaseVNode("span", {
                                class: "mord",
                                style: { "margin-right": "0.05556em" }
                              }, "∂"),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "msupsub" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "0.3117em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "2.7em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mathnormal mtight" }, "i")
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
                                class: "mord",
                                style: { "margin-right": "0.05556em" }
                              }, "∂"),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "msupsub" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "0.3117em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "2.7em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", {
                                              class: "mord mathnormal mtight",
                                              style: { "margin-right": "0.05724em" }
                                            }, "j")
                                          ])
                                        ])
                                      ]),
                                      createBaseVNode("span", { class: "vlist-s" }, "​")
                                    ]),
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "0.2861em" }
                                      }, [
                                        createBaseVNode("span")
                                      ])
                                    ])
                                  ])
                                ])
                              ])
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
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", {
                                  class: "mord",
                                  style: { "margin-right": "0.05556em" }
                                }, "∂"),
                                createBaseVNode("span", { class: "msupsub" }, [
                                  createBaseVNode("span", { class: "vlist-t" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "0.8141em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-3.063em", "margin-right": "0.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "2.7em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, "2")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createBaseVNode("span", {
                                class: "mord mathnormal",
                                style: { "margin-right": "0.10764em" }
                              }, "f")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.9721em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("span", { class: "mclose nulldelimiter" })
                ]),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
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
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3117em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "i")
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
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                  createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3117em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "i")
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
                  style: { "height": "1.0361em", "vertical-align": "-0.2861em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3117em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.05724em" }
                              }, "j")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.2861em" }
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
                createBaseVNode("span", { class: "mbin" }, "−"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "1.0361em", "vertical-align": "-0.2861em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.3117em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.05724em" }
                              }, "j")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.2861em" }
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
                  style: { "height": "0.313em" }
                }),
                createBaseVNode("span", { class: "minner" }, "⋯")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, "记"),
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
                    createBaseVNode("mi", { mathvariant: "normal" }, "Hess"),
                    createBaseVNode("mo", null, "⁡"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mrow", null, [
                        createBaseVNode("mo", { fence: "true" }, "["),
                        createBaseVNode("mfrac", null, [
                          createBaseVNode("mrow", null, [
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mi", null, "f")
                          ]),
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "x"),
                              createBaseVNode("mi", null, "i")
                            ]),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "x"),
                              createBaseVNode("mi", null, "j")
                            ])
                          ])
                        ]),
                        createBaseVNode("mo", { stretchy: "false" }, "("),
                        createBaseVNode("mi", null, "a"),
                        createBaseVNode("mo", { stretchy: "false" }, ")"),
                        createBaseVNode("mo", { fence: "true" }, "]")
                      ]),
                      createBaseVNode("mrow", null, [
                        createBaseVNode("mi", null, "n"),
                        createBaseVNode("mo", null, "×"),
                        createBaseVNode("mi", null, "n")
                      ])
                    ]),
                    createBaseVNode("mo", { separator: "true" }, ",")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\operatorname{Hess}(f) = \\left[ \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(a) \\right]_{n \\times n}, ")
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
                createBaseVNode("span", { class: "mop" }, [
                  createBaseVNode("span", { class: "mord mathrm" }, "Hess")
                ]),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
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
                  style: { "height": "2.5712em", "vertical-align": "-1.0801em" }
                }),
                createBaseVNode("span", { class: "minner" }, [
                  createBaseVNode("span", { class: "minner" }, [
                    createBaseVNode("span", {
                      class: "mopen delimcenter",
                      style: { "top": "0em" }
                    }, [
                      createBaseVNode("span", { class: "delimsizing size3" }, "[")
                    ]),
                    createBaseVNode("span", { class: "mord" }, [
                      createBaseVNode("span", { class: "mopen nulldelimiter" }),
                      createBaseVNode("span", { class: "mfrac" }, [
                        createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                          createBaseVNode("span", { class: "vlist-r" }, [
                            createBaseVNode("span", {
                              class: "vlist",
                              style: { "height": "1.4911em" }
                            }, [
                              createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", {
                                    class: "mord",
                                    style: { "margin-right": "0.05556em" }
                                  }, "∂"),
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                    createBaseVNode("span", { class: "msupsub" }, [
                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.3117em" }
                                          }, [
                                            createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                              createBaseVNode("span", {
                                                class: "pstrut",
                                                style: { "height": "2.7em" }
                                              }),
                                              createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "i")
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
                                    class: "mord",
                                    style: { "margin-right": "0.05556em" }
                                  }, "∂"),
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                    createBaseVNode("span", { class: "msupsub" }, [
                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.3117em" }
                                          }, [
                                            createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                              createBaseVNode("span", {
                                                class: "pstrut",
                                                style: { "height": "2.7em" }
                                              }),
                                              createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                                createBaseVNode("span", {
                                                  class: "mord mathnormal mtight",
                                                  style: { "margin-right": "0.05724em" }
                                                }, "j")
                                              ])
                                            ])
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.2861em" }
                                          }, [
                                            createBaseVNode("span")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
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
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", {
                                      class: "mord",
                                      style: { "margin-right": "0.05556em" }
                                    }, "∂"),
                                    createBaseVNode("span", { class: "msupsub" }, [
                                      createBaseVNode("span", { class: "vlist-t" }, [
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.8141em" }
                                          }, [
                                            createBaseVNode("span", { style: { "top": "-3.063em", "margin-right": "0.05em" } }, [
                                              createBaseVNode("span", {
                                                class: "pstrut",
                                                style: { "height": "2.7em" }
                                              }),
                                              createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                                createBaseVNode("span", { class: "mord mtight" }, "2")
                                              ])
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]),
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.10764em" }
                                  }, "f")
                                ])
                              ])
                            ]),
                            createBaseVNode("span", { class: "vlist-s" }, "​")
                          ]),
                          createBaseVNode("span", { class: "vlist-r" }, [
                            createBaseVNode("span", {
                              class: "vlist",
                              style: { "height": "0.9721em" }
                            }, [
                              createBaseVNode("span")
                            ])
                          ])
                        ])
                      ]),
                      createBaseVNode("span", { class: "mclose nulldelimiter" })
                    ]),
                    createBaseVNode("span", { class: "mopen" }, "("),
                    createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                    createBaseVNode("span", { class: "mclose" }, ")"),
                    createBaseVNode("span", {
                      class: "mclose delimcenter",
                      style: { "top": "0em" }
                    }, [
                      createBaseVNode("span", { class: "delimsizing size3" }, "]")
                    ])
                  ]),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "-0.6135em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-1.6782em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, [
                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "n"),
                                createBaseVNode("span", { class: "mbin mtight" }, "×"),
                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "n")
                              ])
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "1.0801em" }
                        }, [
                          createBaseVNode("span")
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
        createTextVNode("称为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "f")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "f")
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
                style: { "margin-right": "0.10764em" }
              }, "f")
            ])
          ])
        ]),
        createTextVNode(" 在 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "a")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "a")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "a")
            ])
          ])
        ]),
        createTextVNode(" 处的 Hessian.")
      ]),
      createBaseVNode("p", null, [
        createTextVNode("(3) Taylor 展开式的系数由 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "f")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "f")
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
                style: { "margin-right": "0.10764em" }
              }, "f")
            ])
          ])
        ]),
        createTextVNode(" 惟一确定.")
      ])
    ], -1),
    createStaticVNode('<h3 id="·-凸函数" tabindex="-1"><a class="header-anchor" href="#·-凸函数"><span>· 凸函数</span></a></h3><p><strong>定义 (凸函数)</strong>.</p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 中的凸域，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>:</mo><mi>D</mi><mo>→</mo><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">f: D \\to \\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 为多元函数. 如果任给 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo mathvariant="normal">≠</mo><mi>y</mi><mo>∈</mo><mi>D</mi></mrow><annotation encoding="application/x-tex">x \\ne y \\in D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span>，均有</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy="false">)</mo><mi>y</mi><mo stretchy="false">)</mo><mo>≤</mo><mi>t</mi><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy="false">)</mo><mi>f</mi><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo separator="true">,</mo><mspace width="1em"></mspace><mi mathvariant="normal">∀</mi><mi>t</mi><mo>∈</mo><mo stretchy="false">(</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">)</mo><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">f(tx + (1 - t)y) \\le t f(x) + (1 - t) f(y), \\quad \\forall t \\in (0, 1), </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∀</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mpunct">,</span></span></span></span></span></p><p>则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 上的凸函数. 上式中 “<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>≤</mo></mrow><annotation encoding="application/x-tex">\\le</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mrel">≤</span></span></span></span>” 换成 “<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>&lt;</mo></mrow><annotation encoding="application/x-tex">&lt;</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mrel">&lt;</span></span></span></span>” 时，称为严格凸函数.</p></blockquote><p><strong>定理7</strong>.</p><p>(1) 如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 在凸域 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span> 上有连续一阶偏导数，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 为凸函数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>  </mtext><mo>⟺</mo><mtext>  </mtext></mrow><annotation encoding="application/x-tex">\\iff</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.549em;vertical-align:-0.024em;"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⟺</span><span class="mspace" style="margin-right:0.2778em;"></span></span></span></span></p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>≥</mo><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>+</mo><mi>J</mi><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>⋅</mo><mo stretchy="false">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy="false">)</mo><mo separator="true">,</mo><mspace width="1em"></mspace><mi mathvariant="normal">∀</mi><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo>∈</mo><mi>D</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">f(y) \\ge f(x) + Jf(x) \\cdot (y - x), \\quad \\forall x, y \\in D. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">Jf</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∀</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mord">.</span></span></span></span></span></p><p>(2) 如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 有连续二阶偏导数，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 为凸函数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>  </mtext><mo>⟺</mo><mtext>  </mtext><mi mathvariant="normal">Hess</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">)</mo><mo>≥</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\iff \\operatorname{Hess}(f) \\ge 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.549em;vertical-align:-0.024em;"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⟺</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mord mathrm">Hess</span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>（半正定）.</p>', 7),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("(1) “"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", null, "⇒")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\Rightarrow")
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
                style: { "height": "0.3669em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "⇒")
            ])
          ])
        ]),
        createTextVNode("” 任给 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", null, "D")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "x, y \\in D")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "y"),
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
                style: { "margin-right": "0.02778em" }
              }, "D")
            ])
          ])
        ]),
        createTextVNode("，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "t"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mn", null, "0"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mn", null, "1"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "t \\in (0, 1)")
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
                style: { "height": "0.6542em", "vertical-align": "-0.0391em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord" }, "0"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord" }, "1"),
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
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
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
                            createBaseVNode("mo", null, "≥"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
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
                            createBaseVNode("mi", null, "J"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "o"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { separator: "true" }, ",")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} t(f(y) - f(x)) &\\ge f(x + t(y - x)) - f(x) \\\\\\\\ &= Jf(x) \\cdot t(y - x) + o(t\\|y - x\\|), \\end{aligned} ")
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
                  style: { "height": "4.5em", "vertical-align": "-2em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2.5em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.66em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, "))")
                              ])
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
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2em" }
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
                            style: { "height": "2.5em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.66em" } }, [
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
                                createBaseVNode("span", { class: "mrel" }, "≥"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, "))"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.66em" } }, [
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
                                  style: { "margin-right": "0.10764em" }
                                }, "Jf"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "o"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mord" }, "∥"),
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
                            style: { "height": "2em" }
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
        createTextVNode("上式两边除以 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "t")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "t")
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
                style: { "height": "0.6151em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "t")
            ])
          ])
        ]),
        createTextVNode("，然后令 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "t"),
                  createBaseVNode("mo", null, "→"),
                  createBaseVNode("msup", null, [
                    createBaseVNode("mn", null, "0"),
                    createBaseVNode("mo", null, "+")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "t \\to 0^+")
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
                style: { "height": "0.6151em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                style: { "height": "0.7713em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord" }, "0"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.7713em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-3.063em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mbin mtight" }, "+")
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
        createTextVNode(" 即得")
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
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "≥"),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "J"),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mi", { mathvariant: "normal" }, ".")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "f(y) \\ge f(x) + Jf(x) \\cdot (y - x). ")
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
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "y"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "≥"),
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
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                  style: { "margin-right": "0.10764em" }
                }, "Jf"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "y"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mord" }, ".")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("“"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", null, "⇐")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\Leftarrow")
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
                style: { "height": "0.3669em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "⇐")
            ])
          ])
        ]),
        createTextVNode("” 任给 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", null, "D")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "x, y \\in D")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "y"),
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
                style: { "margin-right": "0.02778em" }
              }, "D")
            ])
          ])
        ]),
        createTextVNode("，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "t"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mo", { stretchy: "false" }, "["),
                  createBaseVNode("mn", null, "0"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mn", null, "1"),
                  createBaseVNode("mo", { stretchy: "false" }, "]")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "t \\in [0, 1]")
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
                style: { "height": "0.6542em", "vertical-align": "-0.0391em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
        createTextVNode("，记 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "z"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mi", null, "t"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mn", null, "1"),
                  createBaseVNode("mo", null, "−"),
                  createBaseVNode("mi", null, "t"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mo", null, "⋅"),
                  createBaseVNode("mi", null, "y")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "z = tx + (1 - t) \\cdot y")
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
                style: { "margin-right": "0.04398em" }
              }, "z"),
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
                style: { "height": "0.6984em", "vertical-align": "-0.0833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord" }, "1"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              }),
              createBaseVNode("span", { class: "mbin" }, "−"),
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
              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                style: { "height": "0.625em", "vertical-align": "-0.1944em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "y")
            ])
          ])
        ]),
        createTextVNode("，则")
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
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
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
                            createBaseVNode("mo", null, "≥"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "J"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { separator: "true" }, ",")
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
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "y"),
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
                            createBaseVNode("mo", null, "≥"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "J"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { separator: "true" }, ",")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} f(x) &\\ge f(z) + Jf(z) \\cdot (x - z), \\\\\\\\ f(y) &\\ge f(z) + Jf(z) \\cdot (y - z), \\end{aligned} ")
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
                  style: { "height": "4.5em", "vertical-align": "-2em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2.5em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.66em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
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
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2em" }
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
                            style: { "height": "2.5em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.66em" } }, [
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
                                createBaseVNode("span", { class: "mrel" }, "≥"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
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
                                  style: { "margin-right": "0.10764em" }
                                }, "Jf"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mpunct" }, ",")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.66em" } }, [
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
                                createBaseVNode("span", { class: "mrel" }, "≥"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
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
                                  style: { "margin-right": "0.10764em" }
                                }, "Jf"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
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
                            style: { "height": "2em" }
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
      createBaseVNode("p", null, "这说明"),
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
                    createBaseVNode("mi", null, "t"),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mn", null, "1"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mi", null, "t"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "≥"),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "z"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "J"),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "z"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mo", { stretchy: "false" }, "["),
                    createBaseVNode("mi", null, "t"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mi", null, "z"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mn", null, "1"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mi", null, "t"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mi", null, "z"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { stretchy: "false" }, "]"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "z"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mi", { mathvariant: "normal" }, ".")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "t f(x) + (1 - t) f(y) \\ge f(z) + Jf(z) \\cdot [t(x - z) + (1 - t)(y - z)] = f(z). ")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord" }, "1"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "y"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "≥"),
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
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.04398em" }
                }, "z"),
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
                  style: { "margin-right": "0.10764em" }
                }, "Jf"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.04398em" }
                }, "z"),
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
                  style: { "height": "1em", "vertical-align": "-0.25em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "["),
                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                  style: { "margin-right": "0.04398em" }
                }, "z"),
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
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord" }, "1"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "y"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "−"),
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
                  style: { "margin-right": "0.04398em" }
                }, "z"),
                createBaseVNode("span", { class: "mclose" }, ")]"),
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
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.04398em" }
                }, "z"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mord" }, ".")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("(2) “"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", null, "⇐")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\Leftarrow")
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
                style: { "height": "0.3669em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "⇐")
            ])
          ])
        ]),
        createTextVNode("” 设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "f")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "f")
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
                style: { "margin-right": "0.10764em" }
              }, "f")
            ])
          ])
        ]),
        createTextVNode(" 有连续的二阶偏导数，且 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "Hess"),
                  createBaseVNode("mo", null, "⁡"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "f"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\operatorname{Hess}(f)")
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
              createBaseVNode("span", { class: "mop" }, [
                createBaseVNode("span", { class: "mord mathrm" }, "Hess")
              ]),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10764em" }
              }, "f"),
              createBaseVNode("span", { class: "mclose" }, ")")
            ])
          ])
        ]),
        createTextVNode(" 半正定，则由 Taylor 公式，任给 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", null, "D")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "x, y \\in D")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "y"),
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
                style: { "margin-right": "0.02778em" }
              }, "D")
            ])
          ])
        ]),
        createTextVNode("，存在 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "ξ"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "θ"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", null, "−"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\xi = x + \\theta(y - x)")
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
                style: { "margin-right": "0.04601em" }
              }, "ξ"),
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
                style: { "height": "0.6667em", "vertical-align": "-0.0833em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                style: { "margin-right": "0.02778em" }
              }, "θ"),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "y"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2222em" }
              }),
              createBaseVNode("span", { class: "mbin" }, "−"),
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
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
              createBaseVNode("span", { class: "mclose" }, ")")
            ])
          ])
        ]),
        createTextVNode("，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "θ"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mn", null, "0"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mn", null, "1"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\theta \\in (0, 1)")
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
                style: { "margin-right": "0.02778em" }
              }, "θ"),
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
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord" }, "0"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord" }, "1"),
              createBaseVNode("span", { class: "mclose" }, ")")
            ])
          ])
        ]),
        createTextVNode(" 使得")
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
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "y"),
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
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "J"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mfrac", null, [
                              createBaseVNode("mn", null, "1"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mi", null, "T")
                            ]),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "Hess"),
                            createBaseVNode("mo", null, "⁡"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "ξ"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "x"),
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
                            createBaseVNode("mo", null, "≥"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "J"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", { mathvariant: "normal" }, ".")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} f(y) &= f(x) + Jf(x) \\cdot (y - x) + \\frac{1}{2}(y - x)^T \\cdot \\operatorname{Hess}(f)(\\xi) \\cdot (y - x) \\\\\\\\ &\\ge f(x) + Jf(x) \\cdot (y - x). \\end{aligned} ")
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
                  style: { "height": "5.3074em", "vertical-align": "-2.4037em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2.9037em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.9037em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.3214em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.0777em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.3214em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.5777em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.3214em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "2.4037em" }
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
                            style: { "height": "2.9037em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-4.9037em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.3214em" }
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
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                                  style: { "margin-right": "0.10764em" }
                                }, "Jf"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                                  createBaseVNode("span", { class: "mopen nulldelimiter" }),
                                  createBaseVNode("span", { class: "mfrac" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.3214em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "3em" }
                                            }),
                                            createBaseVNode("span", { class: "mord" }, [
                                              createBaseVNode("span", { class: "mord" }, "2")
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
                                              createBaseVNode("span", { class: "mord" }, "1")
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
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, [
                                  createBaseVNode("span", { class: "mclose" }, ")"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.8913em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.13889em" }
                                              }, "T")
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mop" }, [
                                  createBaseVNode("span", { class: "mord mathrm" }, "Hess")
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04601em" }
                                }, "ξ"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.5777em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.3214em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "≥"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                                  style: { "margin-right": "0.10764em" }
                                }, "Jf"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "−"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                            style: { "height": "2.4037em" }
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
        createTextVNode("由 (1) 知 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "f")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "f")
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
                style: { "margin-right": "0.10764em" }
              }, "f")
            ])
          ])
        ]),
        createTextVNode(" 为凸函数.")
      ]),
      createBaseVNode("p", null, [
        createTextVNode("“"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", null, "⇒")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\Rightarrow")
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
                style: { "height": "0.3669em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "⇒")
            ])
          ])
        ]),
        createTextVNode("”（反证法）. 如果 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "Hess"),
                  createBaseVNode("mo", null, "⁡"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "f"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\operatorname{Hess}(f)")
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
              createBaseVNode("span", { class: "mop" }, [
                createBaseVNode("span", { class: "mord mathrm" }, "Hess")
              ]),
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.10764em" }
              }, "f"),
              createBaseVNode("span", { class: "mclose" }, ")")
            ])
          ])
        ]),
        createTextVNode(" 不是半正定的，则存在 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", null, "D")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "x \\in D")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                style: { "margin-right": "0.02778em" }
              }, "D")
            ])
          ])
        ]),
        createTextVNode("，以及 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msup", null, [
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "R"),
                    createBaseVNode("mi", null, "n")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{R}^n")
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
                createBaseVNode("span", { class: "mord mathbb" }, "R"),
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
        createTextVNode(" 中的非零向量 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "h")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "h")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "h")
            ])
          ])
        ]),
        createTextVNode("，使得")
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
                    createBaseVNode("msup", null, [
                      createBaseVNode("mi", null, "h"),
                      createBaseVNode("mi", null, "T")
                    ]),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", { mathvariant: "normal" }, "Hess"),
                    createBaseVNode("mo", null, "⁡"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", null, "h"),
                    createBaseVNode("mo", null, "<"),
                    createBaseVNode("mn", null, "0.")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "h^T \\cdot \\operatorname{Hess}(f)(x) \\cdot h < 0. ")
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
                  style: { "height": "0.8913em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "h"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.8913em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal mtight",
                                style: { "margin-right": "0.13889em" }
                              }, "T")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
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
                createBaseVNode("span", { class: "mop" }, [
                  createBaseVNode("span", { class: "mord mathrm" }, "Hess")
                ]),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                  style: { "height": "0.7335em", "vertical-align": "-0.0391em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "h"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "<"),
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
                createBaseVNode("span", { class: "mord" }, "0.")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("由 Taylor 公式及其注记，当 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "ε"),
                  createBaseVNode("mo", null, "→"),
                  createBaseVNode("mn", null, "0")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varepsilon \\to 0")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
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
                style: { "height": "0.6444em" }
              }),
              createBaseVNode("span", { class: "mord" }, "0")
            ])
          ])
        ]),
        createTextVNode(" 时，有")
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
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "ε"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", null, "h"),
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
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "ε"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", null, "J"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", null, "h"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mfrac", null, [
                              createBaseVNode("mn", null, "1"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", null, "ε"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", null, "h"),
                              createBaseVNode("mi", null, "T")
                            ]),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "Hess"),
                            createBaseVNode("mo", null, "⁡"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", null, "h"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "o"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "ε"),
                            createBaseVNode("mi", null, "h"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mn", null, "2")
                            ]),
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
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "ε"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", null, "J"),
                            createBaseVNode("mi", null, "f"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", null, "h"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", null, "ε"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mo", { fence: "true" }, "["),
                              createBaseVNode("mfrac", null, [
                                createBaseVNode("mn", null, "1"),
                                createBaseVNode("mn", null, "2")
                              ]),
                              createBaseVNode("msup", null, [
                                createBaseVNode("mi", null, "h"),
                                createBaseVNode("mi", null, "T")
                              ]),
                              createBaseVNode("mo", null, "⋅"),
                              createBaseVNode("mi", { mathvariant: "normal" }, "Hess"),
                              createBaseVNode("mo", null, "⁡"),
                              createBaseVNode("mo", { stretchy: "false" }, "("),
                              createBaseVNode("mi", null, "f"),
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mo", { stretchy: "false" }, "("),
                              createBaseVNode("mi", null, "x"),
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mo", null, "⋅"),
                              createBaseVNode("mi", null, "h"),
                              createBaseVNode("mo", null, "+"),
                              createBaseVNode("mi", null, "o"),
                              createBaseVNode("mo", { stretchy: "false" }, "("),
                              createBaseVNode("mn", null, "1"),
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mo", { fence: "true" }, "]")
                            ]),
                            createBaseVNode("mi", { mathvariant: "normal" }, ".")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} f(x + \\varepsilon \\cdot h) &= f(x) + \\varepsilon \\cdot Jf(x) \\cdot h + \\frac{1}{2} \\varepsilon^2 \\cdot h^T \\cdot \\operatorname{Hess}(f) \\cdot h + o(\\|\\varepsilon h\\|^2) \\\\\\\\ &= f(x) + \\varepsilon \\cdot Jf(x) \\cdot h + \\varepsilon^2 \\left[ \\frac{1}{2} h^T \\cdot \\operatorname{Hess}(f)(x) \\cdot h + o(1) \\right]. \\end{aligned} ")
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
                  style: { "height": "6.5075em", "vertical-align": "-3.0037em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "3.5037em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-5.6323em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.45em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "h"),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.8063em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.45em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.6963em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.45em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "3.0037em" }
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
                            style: { "height": "3.5037em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-5.6323em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.45em" }
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
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "Jf"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "h"),
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
                                  createBaseVNode("span", { class: "mopen nulldelimiter" }),
                                  createBaseVNode("span", { class: "mfrac" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.3214em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "3em" }
                                            }),
                                            createBaseVNode("span", { class: "mord" }, [
                                              createBaseVNode("span", { class: "mord" }, "2")
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
                                              createBaseVNode("span", { class: "mord" }, "1")
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
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.8641em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "h"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.8913em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.13889em" }
                                              }, "T")
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mop" }, [
                                  createBaseVNode("span", { class: "mord mathrm" }, "Hess")
                                ]),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "h"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "o"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "h"),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord" }, "∥"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.8641em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mclose" }, ")")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.6963em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.45em" }
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
                                  style: { "margin-right": "0.10764em" }
                                }, "f"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.10764em" }
                                }, "Jf"),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "⋅"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "h"),
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.8641em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "2")
                                            ])
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
                                createBaseVNode("span", { class: "minner" }, [
                                  createBaseVNode("span", {
                                    class: "mopen delimcenter",
                                    style: { "top": "0em" }
                                  }, [
                                    createBaseVNode("span", { class: "delimsizing size3" }, "[")
                                  ]),
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mopen nulldelimiter" }),
                                    createBaseVNode("span", { class: "mfrac" }, [
                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "1.3214em" }
                                          }, [
                                            createBaseVNode("span", { style: { "top": "-2.314em" } }, [
                                              createBaseVNode("span", {
                                                class: "pstrut",
                                                style: { "height": "3em" }
                                              }),
                                              createBaseVNode("span", { class: "mord" }, [
                                                createBaseVNode("span", { class: "mord" }, "2")
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
                                                createBaseVNode("span", { class: "mord" }, "1")
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
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mord mathnormal" }, "h"),
                                    createBaseVNode("span", { class: "msupsub" }, [
                                      createBaseVNode("span", { class: "vlist-t" }, [
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.8913em" }
                                          }, [
                                            createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                              createBaseVNode("span", {
                                                class: "pstrut",
                                                style: { "height": "2.7em" }
                                              }),
                                              createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                                createBaseVNode("span", {
                                                  class: "mord mathnormal mtight",
                                                  style: { "margin-right": "0.13889em" }
                                                }, "T")
                                              ])
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mbin" }, "⋅"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mop" }, [
                                    createBaseVNode("span", { class: "mord mathrm" }, "Hess")
                                  ]),
                                  createBaseVNode("span", { class: "mopen" }, "("),
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.10764em" }
                                  }, "f"),
                                  createBaseVNode("span", { class: "mclose" }, ")"),
                                  createBaseVNode("span", { class: "mopen" }, "("),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                  createBaseVNode("span", { class: "mclose" }, ")"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mbin" }, "⋅"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "h"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mbin" }, "+"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "o"),
                                  createBaseVNode("span", { class: "mopen" }, "("),
                                  createBaseVNode("span", { class: "mord" }, "1"),
                                  createBaseVNode("span", { class: "mclose" }, ")"),
                                  createBaseVNode("span", {
                                    class: "mclose delimcenter",
                                    style: { "top": "0em" }
                                  }, [
                                    createBaseVNode("span", { class: "delimsizing size3" }, "]")
                                  ])
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, ".")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "3.0037em" }
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
        createTextVNode("当 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "ε"),
                  createBaseVNode("mo", { mathvariant: "normal" }, "≠"),
                  createBaseVNode("mn", null, "0")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varepsilon \\ne 0")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, [
                createBaseVNode("span", { class: "mrel" }, [
                  createBaseVNode("span", { class: "mord vbox" }, [
                    createBaseVNode("span", { class: "thinbox" }, [
                      createBaseVNode("span", { class: "rlap" }, [
                        createBaseVNode("span", {
                          class: "strut",
                          style: { "height": "0.8889em", "vertical-align": "-0.1944em" }
                        }),
                        createBaseVNode("span", { class: "inner" }, [
                          createBaseVNode("span", { class: "mord" }, [
                            createBaseVNode("span", { class: "mrel" }, "")
                          ])
                        ]),
                        createBaseVNode("span", { class: "fix" })
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", { class: "mrel" }, "=")
              ]),
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
        createTextVNode(" 充分小时，上式第三项 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", null, "<"),
                  createBaseVNode("mn", null, "0")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "< 0")
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
              createBaseVNode("span", { class: "mrel" }, "<"),
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
        createTextVNode(". 此时")
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
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "ε"),
                    createBaseVNode("mi", null, "h"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "<"),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "J"),
                    createBaseVNode("mi", null, "f"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "⋅"),
                    createBaseVNode("mi", null, "ε"),
                    createBaseVNode("mi", null, "h"),
                    createBaseVNode("mi", { mathvariant: "normal" }, ".")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "f(x + \\varepsilon h) < f(x) + Jf(x) \\cdot \\varepsilon h. ")
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
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
                createBaseVNode("span", { class: "mord mathnormal" }, "h"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2778em" }
                }),
                createBaseVNode("span", { class: "mrel" }, "<"),
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
                  style: { "margin-right": "0.10764em" }
                }, "f"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                  style: { "margin-right": "0.10764em" }
                }, "Jf"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
                createBaseVNode("span", { class: "mord mathnormal" }, "h"),
                createBaseVNode("span", { class: "mord" }, ".")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, [
        createTextVNode("这与 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "f")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "f")
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
                style: { "margin-right": "0.10764em" }
              }, "f")
            ])
          ])
        ]),
        createTextVNode(" 为凸函数相矛盾（用到 (1)）.")
      ])
    ], -1),
    createStaticVNode('<p>/example/ 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup><mo>→</mo><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">f: \\mathbb{R}^n \\to \\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 为二阶连续可微函数，如果</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">Hess</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>≥</mo><msub><mi>I</mi><mi>n</mi></msub><mo separator="true">,</mo><mspace width="1em"></mspace><mi mathvariant="normal">∀</mi><mi>x</mi><mo>∈</mo><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\operatorname{Hess}(f)(x) \\ge I_n, \\quad \\forall x \\in \\mathbb{R}^n, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mord mathrm">Hess</span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">)</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∀</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.9088em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mpunct">,</span></span></span></span></span></p><p>其中 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>I</mi><mi>n</mi></msub></mrow><annotation encoding="application/x-tex">I_n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0785em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> 阶单位方阵，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 有惟一最小值.</p><blockquote><p>根据 Taylor 公式，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span> 可在原点处展开为</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>+</mo><mi>J</mi><mi>f</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>⋅</mo><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mi>T</mi></msup><mo>⋅</mo><mi mathvariant="normal">Hess</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>f</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>ξ</mi><mo stretchy="false">)</mo><mo>⋅</mo><mi>x</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">f(x) = f(0) + Jf(0) \\cdot x + \\frac{1}{2} x^T \\cdot \\operatorname{Hess}(f)(\\xi) \\cdot x. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">Jf</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:2.0074em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8913em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mord mathrm">Hess</span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mclose">)</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.04601em;">ξ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mord">.</span></span></span></span></span></p><p>由已知条件得</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>≥</mo><mi>f</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>+</mo><mi>J</mi><mi>f</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>⋅</mo><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant="normal">∥</mi><mi>x</mi><msup><mi mathvariant="normal">∥</mi><mn>2</mn></msup><mo separator="true">,</mo><mspace width="1em"></mspace><mi mathvariant="normal">∀</mi><mi>x</mi><mo>∈</mo><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">f(x) \\ge f(0) + Jf(0) \\cdot x + \\frac{1}{2} \\|x\\|^2, \\quad \\forall x \\in \\mathbb{R}^n. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">Jf</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:2.0074em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">2</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord">∥</span><span class="mord mathnormal">x</span><span class="mord"><span class="mord">∥</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∀</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7144em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mord">.</span></span></span></span></span></p><p>特别地，当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow><annotation encoding="application/x-tex">x \\to \\infty</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord">∞</span></span></span></span> 时，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>→</mo><mo>+</mo><mi mathvariant="normal">∞</mi></mrow><annotation encoding="application/x-tex">f(x) \\to +\\infty</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">+</span><span class="mord">∞</span></span></span></span>，这说明 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 的最小值存在. 最小值的唯一性由 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 的严格凸性给出，留给读者思考（对照一元凸函数的情形）.</p></blockquote>', 4)
  ])]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('{"path":"/integral/integral-31/","title":"Lesson 31 多元函数微分 II","lang":"zh-CN","frontmatter":{"title":"Lesson 31 多元函数微分 II","permalink":"/integral/integral-31/","createTime":"2026/08/17 14:17:43","description":"Part 3 中值定理 设 p,q∈Rn，令 σ(t)=(1−t)⋅p+t⋅q,∀t∈[0,1]. 我们称 σ:[0,1]→Rn 为 Rn 中连接 p, q 的直线段. 设 A 为 Rn 中的子集，如果任给 a1​,a2​∈A，连接 a1​,a2​ 的直线段仍包含于 A，则称 A 为凸集. 特别地，凸集都是道路连通的. 我们将开的凸集称为凸域. /ex...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lesson 31 多元函数微分 II\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-08-17T07:22:27.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/integral/integral-31/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"Lesson 31 多元函数微分 II"}],["meta",{"property":"og:description","content":"Part 3 中值定理 设 p,q∈Rn，令 σ(t)=(1−t)⋅p+t⋅q,∀t∈[0,1]. 我们称 σ:[0,1]→Rn 为 Rn 中连接 p, q 的直线段. 设 A 为 Rn 中的子集，如果任给 a1​,a2​∈A，连接 a1​,a2​ 的直线段仍包含于 A，则称 A 为凸集. 特别地，凸集都是道路连通的. 我们将开的凸集称为凸域. /ex..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-08-17T07:22:27.000Z"}],["meta",{"property":"article:modified_time","content":"2026-08-17T07:22:27.000Z"}]]},"readingTime":{"minutes":8.69,"words":2607},"git":{"createdTime":1786951347000,"updatedTime":1786951347000,"contributors":[{"name":"nicostore-mathematica","username":"nicostore-mathematica","email":"nicostore.core@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/nicostore-mathematica?v=4","url":"https://github.com/nicostore-mathematica"}],"changelog":[{"hash":"44b2c35133fdda464519e8cf9f0db5f368774022","time":1786951347000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"notes re"}]},"autoDesc":true,"filePathRelative":"integral/integral-31.md","headers":[]}');
export {
  index_html as comp,
  data
};
