import { _ as _export_sfc, c as createElementBlock, e as createStaticVNode, a as createBaseVNode, b as createTextVNode, o as openBlock } from "./app-C973mz5j.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<h2 id="part-2-外微分运算" tabindex="-1"><a class="header-anchor" href="#part-2-外微分运算"><span>Part 2 外微分运算</span></a></h2><h3 id="·-计算" tabindex="-1"><a class="header-anchor" href="#·-计算"><span>· 计算</span></a></h3><p>为了方便起见，我们将函数称为 0 次微分形式。我们知道，给定可微函数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span>，它的全微分 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mi>f</mi></mrow><annotation encoding="application/x-tex">df</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">df</span></span></span></span> 是一个 1 次微分形式。</p><p>从 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 得到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mi>f</mi></mrow><annotation encoding="application/x-tex">df</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">df</span></span></span></span> 是一个求导的过程。</p><p>现在，给定一个 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi></mrow><annotation encoding="application/x-tex">s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">s</span></span></span></span> 次的微分形式 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span>，我们要定义一个 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">s+1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 次的微分形式，它由 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 求导得到，记为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mi>ω</mi></mrow><annotation encoding="application/x-tex">d\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span>。</p><p>先讨论 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>m</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span></span></span></span></span></span></span></span> 中的微分形式。设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>C</mi><mn>1</mn></msup></mrow><annotation encoding="application/x-tex">C^1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span></span></span></span></span></span></span></span> 的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi></mrow><annotation encoding="application/x-tex">s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">s</span></span></span></span> 次微分形式，则它可以表示为</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>ω</mi><mo>=</mo><munder><mo>∑</mo><mrow><mn>1</mn><mo>≤</mo><msub><mi>i</mi><mn>1</mn></msub><mo>&lt;</mo><mo>⋯</mo><mo>&lt;</mo><msub><mi>i</mi><mi>s</mi></msub><mo>≤</mo><mi>m</mi></mrow></munder><msub><mi>ω</mi><mrow><msub><mi>i</mi><mn>1</mn></msub><mo>⋯</mo><msub><mi>i</mi><mi>s</mi></msub></mrow></msub><mi>d</mi><msub><mi>x</mi><msub><mi>i</mi><mn>1</mn></msub></msub><mo>∧</mo><mo>⋯</mo><mo>∧</mo><mi>d</mi><msub><mi>x</mi><msub><mi>i</mi><mi>s</mi></msub></msub><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\omega = \\sum_{1 \\le i_1 &lt; \\cdots &lt; i_s \\le m} \\omega_{i_1 \\cdots i_s} dx_{i_1} \\wedge \\cdots \\wedge dx_{i_s}, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4278em;vertical-align:-1.3778em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mrel mtight">≤</span><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mrel mtight">&lt;</span><span class="minner mtight">⋯</span><span class="mrel mtight">&lt;</span><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mrel mtight">≤</span><span class="mord mathnormal mtight">m</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.3778em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="minner mtight">⋯</span><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mord mathnormal">d</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∧</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5556em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∧</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.9445em;vertical-align:-0.2501em;"></span><span class="mord mathnormal">d</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mpunct">,</span></span></span></span></span></p><p>我们定义</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>d</mi><mi>ω</mi><mo>=</mo><munder><mo>∑</mo><mrow><mn>1</mn><mo>≤</mo><msub><mi>i</mi><mn>1</mn></msub><mo>&lt;</mo><mo>⋯</mo><mo>&lt;</mo><msub><mi>i</mi><mi>s</mi></msub><mo>≤</mo><mi>m</mi></mrow></munder><mi>d</mi><msub><mi>ω</mi><mrow><msub><mi>i</mi><mn>1</mn></msub><mo>⋯</mo><msub><mi>i</mi><mi>s</mi></msub></mrow></msub><mo>∧</mo><mi>d</mi><msub><mi>x</mi><msub><mi>i</mi><mn>1</mn></msub></msub><mo>∧</mo><mo>⋯</mo><mo>∧</mo><mi>d</mi><msub><mi>x</mi><msub><mi>i</mi><mi>s</mi></msub></msub><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">d\\omega = \\sum_{1 \\le i_1 &lt; \\cdots &lt; i_s \\le m} d\\omega_{i_1 \\cdots i_s} \\wedge dx_{i_1} \\wedge \\cdots \\wedge dx_{i_s}, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4278em;vertical-align:-1.3778em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span><span class="mrel mtight">≤</span><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mrel mtight">&lt;</span><span class="minner mtight">⋯</span><span class="mrel mtight">&lt;</span><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="mrel mtight">≤</span><span class="mord mathnormal mtight">m</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.3778em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span><span class="minner mtight">⋯</span><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∧</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.9445em;vertical-align:-0.2501em;"></span><span class="mord mathnormal">d</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∧</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.5556em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∧</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.9445em;vertical-align:-0.2501em;"></span><span class="mord mathnormal">d</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1645em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mpunct">,</span></span></span></span></span></p><p>显然，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mi>ω</mi></mrow><annotation encoding="application/x-tex">d\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">s+1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 次的微分形式，称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 的外微分。</p><p>/example/ 平面上 1 次微分形式的外微分</p>', 11),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "ω"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mi", null, "P"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mi", null, "d"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "Q"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mi", null, "d"),
                  createBaseVNode("mi", null, "y")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\omega = P(x,y)dx + Q(x,y)dy")
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
              }, "ω"),
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
                style: { "margin-right": "0.13889em" }
              }, "P"),
              createBaseVNode("span", { class: "mopen" }, "("),
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
              createBaseVNode("span", { class: "mclose" }, ")"),
              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
              createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
              createBaseVNode("span", { class: "mopen" }, "("),
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
              createBaseVNode("span", { class: "mclose" }, ")"),
              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "y")
            ])
          ])
        ]),
        createTextVNode(" 为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msup", null, [
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "R"),
                    createBaseVNode("mn", null, "2")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{R}^2")
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
                style: { "height": "0.8141em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathbb" }, "R"),
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
        createTextVNode(" 中的 1 次微分形式，则")
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
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "ω")
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
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "P"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "Q"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y")
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
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y")
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
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mi", { mathvariant: "normal" }, ".")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} d\\omega &= dP \\wedge dx + dQ \\wedge dy \\\\\\\\ &= (P_x dx + P_y dy) \\wedge dx + (Q_x dx + Q_y dy) \\wedge dy\\\\\\\\ &= (Q_x - P_y) dx \\wedge dy. \\end{aligned} ")
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
                  style: { "height": "7.5em", "vertical-align": "-3.5em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "4em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-6.16em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ω")
                              ])
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
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "3.5em" }
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
                            style: { "height": "4em" }
                          }, [
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.13889em" }
                                }, "P"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y")
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
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y")
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mord" }, ".")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "3.5em" }
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
      ])
    ], -1),
    createStaticVNode('<p>/example/ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>3</mn></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span></span></span></span> 中 2 次微分形式的外微分</p>', 1),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msup", null, [
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "R"),
                    createBaseVNode("mn", null, "3")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{R}^3")
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
                style: { "height": "0.8141em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathbb" }, "R"),
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
                            createBaseVNode("span", { class: "mord mtight" }, "3")
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
        createTextVNode(" 中 2 次微分形式")
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
                    createBaseVNode("mi", null, "ω"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "P"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mi", null, "z"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", null, "∧"),
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mi", null, "z"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "Q"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mi", null, "z"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mi", null, "z"),
                    createBaseVNode("mo", null, "∧"),
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, "+"),
                    createBaseVNode("mi", null, "R"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mi", null, "z"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, "∧"),
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", { separator: "true" }, ",")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\omega = P(x,y,z) dy \\wedge dz + Q(x,y,z) dz \\wedge dx + R(x,y,z) dx \\wedge dy, ")
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
                }, "ω"),
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
                  style: { "margin-right": "0.13889em" }
                }, "P"),
                createBaseVNode("span", { class: "mopen" }, "("),
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
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.04398em" }
                }, "z"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "y"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∧"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.04398em" }
                }, "z"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
                createBaseVNode("span", { class: "mopen" }, "("),
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
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.04398em" }
                }, "z"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.04398em" }
                }, "z"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∧"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                  style: { "margin-right": "0.00773em" }
                }, "R"),
                createBaseVNode("span", { class: "mopen" }, "("),
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
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.04398em" }
                }, "z"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∧"),
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
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "y"),
                createBaseVNode("span", { class: "mpunct" }, ",")
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("p", null, "则"),
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
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "ω")
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
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "P"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "Q"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "R"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y")
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
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "z")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z")
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
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "z")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x")
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
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "R"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "R"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "R"),
                              createBaseVNode("mi", null, "z")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y")
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
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "R"),
                              createBaseVNode("mi", null, "z")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mi", { mathvariant: "normal" }, ".")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} d\\omega &= dP \\wedge dy \\wedge dz + dQ \\wedge dz \\wedge dx + dR \\wedge dx \\wedge dy\\\\\\\\ &= (P_x dx + P_y dy + P_z dz) \\wedge dy \\wedge dz \\\\\\\\ &+ (Q_x dx + Q_y dy + Q_z dz) \\wedge dz \\wedge dx\\\\\\\\ &+ (R_x dx + R_y dy + R_z dz) \\wedge dx \\wedge dy\\\\\\\\ &= (P_x + Q_y + R_z) dx \\wedge dy \\wedge dz. \\end{aligned} ")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ω")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.13889em" }
                                }, "P"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.00773em" }
                                }, "R"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y")
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
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
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
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.04398em" }
                                              }, "z")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z")
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
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.04398em" }
                                              }, "z")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x")
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
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
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
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.04398em" }
                                              }, "z")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y")
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
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.04398em" }
                                              }, "z")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
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
      ])
    ], -1),
    createStaticVNode('<p>/example/ <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>3</mn></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span></span></span></span> 中 1 次微分形式的外微分</p>', 1),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "ω"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mi", null, "P"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "z"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mi", null, "d"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "Q"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "z"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mi", null, "d"),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "R"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "z"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mi", null, "d"),
                  createBaseVNode("mi", null, "z")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\omega = P(x,y,z) dx + Q(x,y,z) dy + R(x,y,z) dz")
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
              }, "ω"),
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
                style: { "margin-right": "0.13889em" }
              }, "P"),
              createBaseVNode("span", { class: "mopen" }, "("),
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
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.04398em" }
              }, "z"),
              createBaseVNode("span", { class: "mclose" }, ")"),
              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
              createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
              createBaseVNode("span", { class: "mopen" }, "("),
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
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.04398em" }
              }, "z"),
              createBaseVNode("span", { class: "mclose" }, ")"),
              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03588em" }
              }, "y"),
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
                style: { "margin-right": "0.00773em" }
              }, "R"),
              createBaseVNode("span", { class: "mopen" }, "("),
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
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.04398em" }
              }, "z"),
              createBaseVNode("span", { class: "mclose" }, ")"),
              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.04398em" }
              }, "z")
            ])
          ])
        ]),
        createTextVNode(" 为 1 次微分形式，则")
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
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "ω")
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
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "P"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "Q"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "R"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z")
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
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "z")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "z")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y")
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
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "R"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "R"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "R"),
                              createBaseVNode("mi", null, "z")
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z")
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
                              createBaseVNode("mi", null, "R"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "z")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "z")
                            ]),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "R"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "z"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "Q"),
                              createBaseVNode("mi", null, "x")
                            ]),
                            createBaseVNode("mo", null, "−"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "P"),
                              createBaseVNode("mi", null, "y")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "∧"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mi", { mathvariant: "normal" }, ".")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} d\\omega &= dP \\wedge dx + dQ \\wedge dy + dR \\wedge dz\\\\\\\\ &= (P_x dx + P_y dy + P_z dz) \\wedge dx + (Q_x dx + Q_y dy + Q_z dz) \\wedge dy\\\\\\\\ &+ (R_x dx + R_y dy + R_z dz) \\wedge dz\\\\\\\\ &= (R_y - Q_z) dy \\wedge dz + (P_z - R_x) dz \\wedge dx + (Q_x - P_y) dx \\wedge dy. \\end{aligned} ")
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
                  style: { "height": "10.5em", "vertical-align": "-5em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "5.5em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-7.66em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "ω")
                              ])
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
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "5em" }
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
                            style: { "height": "5.5em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-7.66em" } }, [
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.13889em" }
                                }, "P"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.00773em" }
                                }, "R"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z")
                              ])
                            ]),
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
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
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
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.04398em" }
                                              }, "z")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.04398em" }
                                              }, "z")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y")
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
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "("),
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
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.04398em" }
                                              }, "z")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "1.34em" } }, [
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.04398em" }
                                              }, "z")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
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
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.04398em" }
                                              }, "z")
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
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.04398em" }
                                }, "z"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "Q"),
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
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "x")
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
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.13889em" }
                                  }, "P"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1514em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.1389em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03588em" }
                                              }, "y")
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∧"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mord" }, ".")
                              ])
                            ])
                          ]),
                          createBaseVNode("span", { class: "vlist-s" }, "​")
                        ]),
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "5em" }
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
      ])
    ], -1),
    createBaseVNode("h3", {
      id: "·-性质",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#·-性质"
      }, [
        createBaseVNode("span", null, "· 性质")
      ])
    ], -1),
    createBaseVNode("p", null, "外微分运算具有以下性质：", -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createTextVNode("如果 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "ω"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mi", null, "η")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\omega, \\eta")
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
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "ω"),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "η")
              ])
            ])
          ]),
          createTextVNode(" 均为 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "s")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "s")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "s")
              ])
            ])
          ]),
          createTextVNode(" 次微分形式，"),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "λ"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mi", null, "μ"),
                    createBaseVNode("mo", null, "∈"),
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "R")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\lambda, \\mu \\in \\mathbb{R}")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "λ"),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "μ"),
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
                createBaseVNode("span", { class: "mord mathbb" }, "R")
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
                    createBaseVNode("mrow", null, [
                      createBaseVNode("mi", null, "d"),
                      createBaseVNode("mo", { stretchy: "false" }, "("),
                      createBaseVNode("mi", null, "λ"),
                      createBaseVNode("mi", null, "ω"),
                      createBaseVNode("mo", null, "+"),
                      createBaseVNode("mi", null, "μ"),
                      createBaseVNode("mi", null, "η"),
                      createBaseVNode("mo", { stretchy: "false" }, ")"),
                      createBaseVNode("mo", null, "="),
                      createBaseVNode("mi", null, "λ"),
                      createBaseVNode("mi", null, "d"),
                      createBaseVNode("mi", null, "ω"),
                      createBaseVNode("mo", null, "+"),
                      createBaseVNode("mi", null, "μ"),
                      createBaseVNode("mi", null, "d"),
                      createBaseVNode("mi", null, "η"),
                      createBaseVNode("mo", { separator: "true" }, ";")
                    ]),
                    createBaseVNode("annotation", { encoding: "application/x-tex" }, "d(\\lambda \\omega + \\mu \\eta) = \\lambda d\\omega + \\mu d\\eta; ")
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
                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                  createBaseVNode("span", { class: "mopen" }, "("),
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.03588em" }
                  }, "λω"),
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
                  createBaseVNode("span", { class: "mord mathnormal" }, "μ"),
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.03588em" }
                  }, "η"),
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
                    style: { "height": "0.7778em", "vertical-align": "-0.0833em" }
                  }),
                  createBaseVNode("span", { class: "mord mathnormal" }, "λ"),
                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.03588em" }
                  }, "ω"),
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
                  createBaseVNode("span", { class: "mord mathnormal" }, "μ"),
                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.03588em" }
                  }, "η"),
                  createBaseVNode("span", { class: "mpunct" }, ";")
                ])
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createTextVNode("如果 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "ω")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\omega")
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
                }, "ω")
              ])
            ])
          ]),
          createTextVNode(" 为 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "s")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "s")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "s")
              ])
            ])
          ]),
          createTextVNode(" 次微分形式，"),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "η")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\eta")
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
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "η")
              ])
            ])
          ]),
          createTextVNode(" 为 "),
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
          createTextVNode(" 次微分形式，则")
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
                      createBaseVNode("mi", null, "d"),
                      createBaseVNode("mo", { stretchy: "false" }, "("),
                      createBaseVNode("mi", null, "ω"),
                      createBaseVNode("mo", null, "∧"),
                      createBaseVNode("mi", null, "η"),
                      createBaseVNode("mo", { stretchy: "false" }, ")"),
                      createBaseVNode("mo", null, "="),
                      createBaseVNode("mi", null, "d"),
                      createBaseVNode("mi", null, "ω"),
                      createBaseVNode("mo", null, "∧"),
                      createBaseVNode("mi", null, "η"),
                      createBaseVNode("mo", null, "+"),
                      createBaseVNode("mo", { stretchy: "false" }, "("),
                      createBaseVNode("mo", null, "−"),
                      createBaseVNode("mn", null, "1"),
                      createBaseVNode("msup", null, [
                        createBaseVNode("mo", { stretchy: "false" }, ")"),
                        createBaseVNode("mi", null, "s")
                      ]),
                      createBaseVNode("mi", null, "ω"),
                      createBaseVNode("mo", null, "∧"),
                      createBaseVNode("mi", null, "d"),
                      createBaseVNode("mi", null, "η"),
                      createBaseVNode("mo", { separator: "true" }, ";")
                    ]),
                    createBaseVNode("annotation", { encoding: "application/x-tex" }, "d(\\omega \\wedge \\eta) = d\\omega \\wedge \\eta + (-1)^s \\omega \\wedge d\\eta; ")
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
                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                  createBaseVNode("span", { class: "mopen" }, "("),
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.03588em" }
                  }, "ω"),
                  createBaseVNode("span", {
                    class: "mspace",
                    style: { "margin-right": "0.2222em" }
                  }),
                  createBaseVNode("span", { class: "mbin" }, "∧"),
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
                  }, "η"),
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
                    style: { "height": "0.6944em" }
                  }),
                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.03588em" }
                  }, "ω"),
                  createBaseVNode("span", {
                    class: "mspace",
                    style: { "margin-right": "0.2222em" }
                  }),
                  createBaseVNode("span", { class: "mbin" }, "∧"),
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
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.03588em" }
                  }, "η"),
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
                  createBaseVNode("span", { class: "mord" }, "−"),
                  createBaseVNode("span", { class: "mord" }, "1"),
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
                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "s")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.03588em" }
                  }, "ω"),
                  createBaseVNode("span", {
                    class: "mspace",
                    style: { "margin-right": "0.2222em" }
                  }),
                  createBaseVNode("span", { class: "mbin" }, "∧"),
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
                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.03588em" }
                  }, "η"),
                  createBaseVNode("span", { class: "mpunct" }, ";")
                ])
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("msup", null, [
                      createBaseVNode("mi", null, "d"),
                      createBaseVNode("mn", null, "2")
                    ]),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mn", null, "0")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "d^2 = 0")
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
                  style: { "height": "0.8141em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
          createTextVNode("，即 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mi", null, "ω"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mn", null, "0")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "d(d\\omega) = 0")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "ω"),
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
          createTextVNode("。以 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "ω"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", null, "a"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "x"),
                      createBaseVNode("msub", null, [
                        createBaseVNode("mi", null, "i"),
                        createBaseVNode("mn", null, "1")
                      ])
                    ]),
                    createBaseVNode("mo", null, "∧"),
                    createBaseVNode("mo", null, "⋯"),
                    createBaseVNode("mo", null, "∧"),
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "x"),
                      createBaseVNode("msub", null, [
                        createBaseVNode("mi", null, "i"),
                        createBaseVNode("mi", null, "s")
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\omega = a(x) dx_{i_1} \\wedge \\cdots \\wedge dx_{i_s}")
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
                }, "ω"),
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
                  style: { "height": "1.0001em", "vertical-align": "-0.2501em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                createBaseVNode("span", { class: "mopen" }, "("),
                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                createBaseVNode("span", { class: "mclose" }, ")"),
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                              createBaseVNode("span", { class: "mord mtight" }, [
                                createBaseVNode("span", { class: "mord mtight" }, [
                                  createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3173em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.5em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.143em" }
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
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.2501em" }
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
                createBaseVNode("span", { class: "mbin" }, "∧"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.5556em" }
                }),
                createBaseVNode("span", { class: "minner" }, "⋯"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                }),
                createBaseVNode("span", { class: "mbin" }, "∧"),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.2222em" }
                })
              ]),
              createBaseVNode("span", { class: "base" }, [
                createBaseVNode("span", {
                  class: "strut",
                  style: { "height": "0.9445em", "vertical-align": "-0.2501em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                              createBaseVNode("span", { class: "mord mtight" }, [
                                createBaseVNode("span", { class: "mord mtight" }, [
                                  createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.1645em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.5em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "s")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.143em" }
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
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.2501em" }
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
          createTextVNode(" 为例：")
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
                      createBaseVNode("mspace", { linebreak: "newline" }),
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
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("mo", { stretchy: "false" }, "("),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("mi", null, "ω"),
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
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("mo", { stretchy: "false" }, "("),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("mi", null, "a"),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("msub", null, [
                                    createBaseVNode("mi", null, "i"),
                                    createBaseVNode("mn", null, "1")
                                  ])
                                ]),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mo", null, "⋯"),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("msub", null, [
                                    createBaseVNode("mi", null, "i"),
                                    createBaseVNode("mi", null, "s")
                                  ])
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
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("mrow", null, [
                                  createBaseVNode("mo", { fence: "true" }, "("),
                                  createBaseVNode("munderover", null, [
                                    createBaseVNode("mo", null, "∑"),
                                    createBaseVNode("mrow", null, [
                                      createBaseVNode("mi", null, "i"),
                                      createBaseVNode("mo", null, "="),
                                      createBaseVNode("mn", null, "1")
                                    ]),
                                    createBaseVNode("mi", null, "m")
                                  ]),
                                  createBaseVNode("mfrac", null, [
                                    createBaseVNode("mrow", null, [
                                      createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                      createBaseVNode("mi", null, "a")
                                    ]),
                                    createBaseVNode("mrow", null, [
                                      createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                      createBaseVNode("msub", null, [
                                        createBaseVNode("mi", null, "x"),
                                        createBaseVNode("mi", null, "i")
                                      ])
                                    ])
                                  ]),
                                  createBaseVNode("mi", null, "d"),
                                  createBaseVNode("msub", null, [
                                    createBaseVNode("mi", null, "x"),
                                    createBaseVNode("mi", null, "i")
                                  ]),
                                  createBaseVNode("mo", null, "∧"),
                                  createBaseVNode("mi", null, "d"),
                                  createBaseVNode("msub", null, [
                                    createBaseVNode("mi", null, "x"),
                                    createBaseVNode("msub", null, [
                                      createBaseVNode("mi", null, "i"),
                                      createBaseVNode("mn", null, "1")
                                    ])
                                  ]),
                                  createBaseVNode("mo", null, "∧"),
                                  createBaseVNode("mo", null, "⋯"),
                                  createBaseVNode("mo", null, "∧"),
                                  createBaseVNode("mi", null, "d"),
                                  createBaseVNode("msub", null, [
                                    createBaseVNode("mi", null, "x"),
                                    createBaseVNode("msub", null, [
                                      createBaseVNode("mi", null, "i"),
                                      createBaseVNode("mi", null, "s")
                                    ])
                                  ]),
                                  createBaseVNode("mo", { fence: "true" }, ")")
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
                                    createBaseVNode("mi", null, "i"),
                                    createBaseVNode("mo", null, "="),
                                    createBaseVNode("mn", null, "1")
                                  ]),
                                  createBaseVNode("mi", null, "m")
                                ]),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("mrow", null, [
                                  createBaseVNode("mo", { fence: "true" }, "("),
                                  createBaseVNode("mfrac", null, [
                                    createBaseVNode("mrow", null, [
                                      createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                      createBaseVNode("mi", null, "a")
                                    ]),
                                    createBaseVNode("mrow", null, [
                                      createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                      createBaseVNode("msub", null, [
                                        createBaseVNode("mi", null, "x"),
                                        createBaseVNode("mi", null, "i")
                                      ])
                                    ])
                                  ]),
                                  createBaseVNode("mo", { fence: "true" }, ")")
                                ]),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("mi", null, "i")
                                ]),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("msub", null, [
                                    createBaseVNode("mi", null, "i"),
                                    createBaseVNode("mn", null, "1")
                                  ])
                                ]),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mo", null, "⋯"),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("msub", null, [
                                    createBaseVNode("mi", null, "i"),
                                    createBaseVNode("mi", null, "s")
                                  ])
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
                                createBaseVNode("munder", null, [
                                  createBaseVNode("mo", null, "∑"),
                                  createBaseVNode("mrow", null, [
                                    createBaseVNode("mn", null, "1"),
                                    createBaseVNode("mo", null, "≤"),
                                    createBaseVNode("mi", null, "i"),
                                    createBaseVNode("mo", { separator: "true" }, ","),
                                    createBaseVNode("mi", null, "j"),
                                    createBaseVNode("mo", null, "≤"),
                                    createBaseVNode("mi", null, "m")
                                  ])
                                ]),
                                createBaseVNode("mfrac", null, [
                                  createBaseVNode("mrow", null, [
                                    createBaseVNode("msup", null, [
                                      createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                      createBaseVNode("mn", null, "2")
                                    ]),
                                    createBaseVNode("mi", null, "a")
                                  ]),
                                  createBaseVNode("mrow", null, [
                                    createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                    createBaseVNode("msub", null, [
                                      createBaseVNode("mi", null, "x"),
                                      createBaseVNode("mi", null, "j")
                                    ]),
                                    createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                    createBaseVNode("msub", null, [
                                      createBaseVNode("mi", null, "x"),
                                      createBaseVNode("mi", null, "i")
                                    ])
                                  ])
                                ]),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("mi", null, "j")
                                ]),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("mi", null, "i")
                                ]),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("msub", null, [
                                    createBaseVNode("mi", null, "i"),
                                    createBaseVNode("mn", null, "1")
                                  ])
                                ]),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mo", null, "⋯"),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("msub", null, [
                                    createBaseVNode("mi", null, "i"),
                                    createBaseVNode("mi", null, "s")
                                  ])
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
                                createBaseVNode("munder", null, [
                                  createBaseVNode("mo", null, "∑"),
                                  createBaseVNode("mrow", null, [
                                    createBaseVNode("mi", null, "i"),
                                    createBaseVNode("mo", null, "<"),
                                    createBaseVNode("mi", null, "j")
                                  ])
                                ]),
                                createBaseVNode("mrow", null, [
                                  createBaseVNode("mo", { fence: "true" }, "["),
                                  createBaseVNode("mfrac", null, [
                                    createBaseVNode("mrow", null, [
                                      createBaseVNode("msup", null, [
                                        createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                        createBaseVNode("mn", null, "2")
                                      ]),
                                      createBaseVNode("mi", null, "a")
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
                                  createBaseVNode("mo", null, "−"),
                                  createBaseVNode("mfrac", null, [
                                    createBaseVNode("mrow", null, [
                                      createBaseVNode("msup", null, [
                                        createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                        createBaseVNode("mn", null, "2")
                                      ]),
                                      createBaseVNode("mi", null, "a")
                                    ]),
                                    createBaseVNode("mrow", null, [
                                      createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                      createBaseVNode("msub", null, [
                                        createBaseVNode("mi", null, "x"),
                                        createBaseVNode("mi", null, "j")
                                      ]),
                                      createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                      createBaseVNode("msub", null, [
                                        createBaseVNode("mi", null, "x"),
                                        createBaseVNode("mi", null, "i")
                                      ])
                                    ])
                                  ]),
                                  createBaseVNode("mo", { fence: "true" }, "]")
                                ]),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("mi", null, "i")
                                ]),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("mi", null, "j")
                                ]),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("msub", null, [
                                    createBaseVNode("mi", null, "i"),
                                    createBaseVNode("mn", null, "1")
                                  ])
                                ]),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mo", null, "⋯"),
                                createBaseVNode("mo", null, "∧"),
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("msub", null, [
                                    createBaseVNode("mi", null, "i"),
                                    createBaseVNode("mi", null, "s")
                                  ])
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
                                createBaseVNode("mn", null, "0.")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createBaseVNode("mspace", { linebreak: "newline" }),
                      createBaseVNode("mspace", { linebreak: "newline" })
                    ]),
                    createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\\\\\begin{aligned} d(d\\omega) &= d(da \\wedge dx_{i_1} \\wedge \\cdots \\wedge dx_{i_s})\\\\\\\\ &= d\\left( \\sum_{i=1}^m \\frac{\\partial a}{\\partial x_i} dx_i \\wedge dx_{i_1} \\wedge \\cdots \\wedge dx_{i_s} \\right)\\\\\\\\ &= \\sum_{i=1}^m d\\left( \\frac{\\partial a}{\\partial x_i} \\right) \\wedge dx_i \\wedge dx_{i_1} \\wedge \\cdots \\wedge dx_{i_s}\\\\\\\\ &= \\sum_{1 \\le i,j \\le m} \\frac{\\partial^2 a}{\\partial x_j \\partial x_i} dx_j \\wedge dx_i \\wedge dx_{i_1} \\wedge \\cdots \\wedge dx_{i_s}\\\\\\\\ &= \\sum_{i<j} \\left[ \\frac{\\partial^2 a}{\\partial x_i \\partial x_j} - \\frac{\\partial^2 a}{\\partial x_j \\partial x_i} \\right] dx_i \\wedge dx_j \\wedge dx_{i_1} \\wedge \\cdots \\wedge dx_{i_s}\\\\\\\\ &= 0. \\end{aligned}\\\\\\\\ ")
                  ])
                ])
              ]),
              createBaseVNode("span", {
                class: "katex-html",
                "aria-hidden": "true"
              }, [
                createBaseVNode("span", { class: "mspace newline" }),
                createBaseVNode("span", { class: "base" }, [
                  createBaseVNode("span", {
                    class: "strut",
                    style: { "height": "23.4665em", "vertical-align": "-11.4833em" }
                  }),
                  createBaseVNode("span", { class: "mord" }, [
                    createBaseVNode("span", { class: "mtable" }, [
                      createBaseVNode("span", { class: "col-align-r" }, [
                        createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                          createBaseVNode("span", { class: "vlist-r" }, [
                            createBaseVNode("span", {
                              class: "vlist",
                              style: { "height": "11.9833em" }
                            }, [
                              createBaseVNode("span", { style: { "top": "-14.8933em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                  createBaseVNode("span", { class: "mopen" }, "("),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.03588em" }
                                  }, "ω"),
                                  createBaseVNode("span", { class: "mclose" }, ")")
                                ])
                              ]),
                              createBaseVNode("span", { style: { "top": "-13.3933em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
                                }),
                                createBaseVNode("span", { class: "mord" })
                              ]),
                              createBaseVNode("span", { style: { "top": "-10.9833em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
                                }),
                                createBaseVNode("span", { class: "mord" })
                              ]),
                              createBaseVNode("span", { style: { "top": "-8.5656em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
                                }),
                                createBaseVNode("span", { class: "mord" })
                              ]),
                              createBaseVNode("span", { style: { "top": "-6.2542em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
                                }),
                                createBaseVNode("span", { class: "mord" })
                              ]),
                              createBaseVNode("span", { style: { "top": "-3.8365em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
                                }),
                                createBaseVNode("span", { class: "mord" })
                              ]),
                              createBaseVNode("span", { style: { "top": "-1.6854em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
                                }),
                                createBaseVNode("span", { class: "mord" })
                              ]),
                              createBaseVNode("span", { style: { "top": "0.8684em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
                                }),
                                createBaseVNode("span", { class: "mord" })
                              ]),
                              createBaseVNode("span", { style: { "top": "3.0195em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
                                }),
                                createBaseVNode("span", { class: "mord" })
                              ]),
                              createBaseVNode("span", { style: { "top": "5.5733em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
                                }),
                                createBaseVNode("span", { class: "mord" })
                              ]),
                              createBaseVNode("span", { style: { "top": "7.0733em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
                                }),
                                createBaseVNode("span", { class: "mord" })
                              ])
                            ]),
                            createBaseVNode("span", { class: "vlist-s" }, "​")
                          ]),
                          createBaseVNode("span", { class: "vlist-r" }, [
                            createBaseVNode("span", {
                              class: "vlist",
                              style: { "height": "11.4833em" }
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
                              style: { "height": "11.9833em" }
                            }, [
                              createBaseVNode("span", { style: { "top": "-14.8933em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                  createBaseVNode("span", { class: "mopen" }, "("),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "a"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                                createBaseVNode("span", { class: "mord mtight" }, [
                                                  createBaseVNode("span", { class: "mord mtight" }, [
                                                    createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                    createBaseVNode("span", { class: "msupsub" }, [
                                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.3173em" }
                                                          }, [
                                                            createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                                              createBaseVNode("span", {
                                                                class: "pstrut",
                                                                style: { "height": "2.5em" }
                                                              }),
                                                              createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                                                createBaseVNode("span", { class: "mord mtight" }, "1")
                                                              ])
                                                            ])
                                                          ]),
                                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                                        ]),
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.143em" }
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
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.2501em" }
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
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "minner" }, "⋯"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                                createBaseVNode("span", { class: "mord mtight" }, [
                                                  createBaseVNode("span", { class: "mord mtight" }, [
                                                    createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                    createBaseVNode("span", { class: "msupsub" }, [
                                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.1645em" }
                                                          }, [
                                                            createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                                              createBaseVNode("span", {
                                                                class: "pstrut",
                                                                style: { "height": "2.5em" }
                                                              }),
                                                              createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "s")
                                                              ])
                                                            ])
                                                          ]),
                                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                                        ]),
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.143em" }
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
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.2501em" }
                                          }, [
                                            createBaseVNode("span")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]),
                                  createBaseVNode("span", { class: "mclose" }, ")")
                                ])
                              ]),
                              createBaseVNode("span", { style: { "top": "-10.9833em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.1667em" }
                                  }),
                                  createBaseVNode("span", { class: "minner" }, [
                                    createBaseVNode("span", {
                                      class: "mopen delimcenter",
                                      style: { "top": "0em" }
                                    }, [
                                      createBaseVNode("span", { class: "delimsizing size4" }, "(")
                                    ]),
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
                                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                                              ])
                                            ])
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "1.2777em" }
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
                                              style: { "height": "1.3714em" }
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
                                                  createBaseVNode("span", {
                                                    class: "mord",
                                                    style: { "margin-right": "0.05556em" }
                                                  }, "∂"),
                                                  createBaseVNode("span", { class: "mord mathnormal" }, "a")
                                                ])
                                              ])
                                            ]),
                                            createBaseVNode("span", { class: "vlist-s" }, "​")
                                          ]),
                                          createBaseVNode("span", { class: "vlist-r" }, [
                                            createBaseVNode("span", {
                                              class: "vlist",
                                              style: { "height": "0.836em" }
                                            }, [
                                              createBaseVNode("span")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      createBaseVNode("span", { class: "mclose nulldelimiter" })
                                    ]),
                                    createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                    createBaseVNode("span", { class: "mbin" }, "∧"),
                                    createBaseVNode("span", {
                                      class: "mspace",
                                      style: { "margin-right": "0.2222em" }
                                    }),
                                    createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                                  createBaseVNode("span", { class: "mord mtight" }, [
                                                    createBaseVNode("span", { class: "mord mtight" }, [
                                                      createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                      createBaseVNode("span", { class: "msupsub" }, [
                                                        createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                                          createBaseVNode("span", { class: "vlist-r" }, [
                                                            createBaseVNode("span", {
                                                              class: "vlist",
                                                              style: { "height": "0.3173em" }
                                                            }, [
                                                              createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                                                createBaseVNode("span", {
                                                                  class: "pstrut",
                                                                  style: { "height": "2.5em" }
                                                                }),
                                                                createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                                                  createBaseVNode("span", { class: "mord mtight" }, "1")
                                                                ])
                                                              ])
                                                            ]),
                                                            createBaseVNode("span", { class: "vlist-s" }, "​")
                                                          ]),
                                                          createBaseVNode("span", { class: "vlist-r" }, [
                                                            createBaseVNode("span", {
                                                              class: "vlist",
                                                              style: { "height": "0.143em" }
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
                                            ]),
                                            createBaseVNode("span", { class: "vlist-s" }, "​")
                                          ]),
                                          createBaseVNode("span", { class: "vlist-r" }, [
                                            createBaseVNode("span", {
                                              class: "vlist",
                                              style: { "height": "0.2501em" }
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
                                    createBaseVNode("span", { class: "mbin" }, "∧"),
                                    createBaseVNode("span", {
                                      class: "mspace",
                                      style: { "margin-right": "0.2222em" }
                                    }),
                                    createBaseVNode("span", { class: "minner" }, "⋯"),
                                    createBaseVNode("span", {
                                      class: "mspace",
                                      style: { "margin-right": "0.2222em" }
                                    }),
                                    createBaseVNode("span", { class: "mbin" }, "∧"),
                                    createBaseVNode("span", {
                                      class: "mspace",
                                      style: { "margin-right": "0.2222em" }
                                    }),
                                    createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                                  createBaseVNode("span", { class: "mord mtight" }, [
                                                    createBaseVNode("span", { class: "mord mtight" }, [
                                                      createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                      createBaseVNode("span", { class: "msupsub" }, [
                                                        createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                                          createBaseVNode("span", { class: "vlist-r" }, [
                                                            createBaseVNode("span", {
                                                              class: "vlist",
                                                              style: { "height": "0.1645em" }
                                                            }, [
                                                              createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                                                createBaseVNode("span", {
                                                                  class: "pstrut",
                                                                  style: { "height": "2.5em" }
                                                                }),
                                                                createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                                                  createBaseVNode("span", { class: "mord mathnormal mtight" }, "s")
                                                                ])
                                                              ])
                                                            ]),
                                                            createBaseVNode("span", { class: "vlist-s" }, "​")
                                                          ]),
                                                          createBaseVNode("span", { class: "vlist-r" }, [
                                                            createBaseVNode("span", {
                                                              class: "vlist",
                                                              style: { "height": "0.143em" }
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
                                            ]),
                                            createBaseVNode("span", { class: "vlist-s" }, "​")
                                          ]),
                                          createBaseVNode("span", { class: "vlist-r" }, [
                                            createBaseVNode("span", {
                                              class: "vlist",
                                              style: { "height": "0.2501em" }
                                            }, [
                                              createBaseVNode("span")
                                            ])
                                          ])
                                        ])
                                      ])
                                    ]),
                                    createBaseVNode("span", {
                                      class: "mclose delimcenter",
                                      style: { "top": "0em" }
                                    }, [
                                      createBaseVNode("span", { class: "delimsizing size4" }, ")")
                                    ])
                                  ])
                                ])
                              ]),
                              createBaseVNode("span", { style: { "top": "-6.2542em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
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
                                          createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "3.05em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, [
                                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
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
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.2777em" }
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.1667em" }
                                  }),
                                  createBaseVNode("span", { class: "minner" }, [
                                    createBaseVNode("span", {
                                      class: "mopen delimcenter",
                                      style: { "top": "0em" }
                                    }, [
                                      createBaseVNode("span", { class: "delimsizing size3" }, "(")
                                    ]),
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
                                                  createBaseVNode("span", {
                                                    class: "mord",
                                                    style: { "margin-right": "0.05556em" }
                                                  }, "∂"),
                                                  createBaseVNode("span", { class: "mord mathnormal" }, "a")
                                                ])
                                              ])
                                            ]),
                                            createBaseVNode("span", { class: "vlist-s" }, "​")
                                          ]),
                                          createBaseVNode("span", { class: "vlist-r" }, [
                                            createBaseVNode("span", {
                                              class: "vlist",
                                              style: { "height": "0.836em" }
                                            }, [
                                              createBaseVNode("span")
                                            ])
                                          ])
                                        ])
                                      ]),
                                      createBaseVNode("span", { class: "mclose nulldelimiter" })
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
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                                createBaseVNode("span", { class: "mord mtight" }, [
                                                  createBaseVNode("span", { class: "mord mtight" }, [
                                                    createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                    createBaseVNode("span", { class: "msupsub" }, [
                                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.3173em" }
                                                          }, [
                                                            createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                                              createBaseVNode("span", {
                                                                class: "pstrut",
                                                                style: { "height": "2.5em" }
                                                              }),
                                                              createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                                                createBaseVNode("span", { class: "mord mtight" }, "1")
                                                              ])
                                                            ])
                                                          ]),
                                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                                        ]),
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.143em" }
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
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.2501em" }
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
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "minner" }, "⋯"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                                createBaseVNode("span", { class: "mord mtight" }, [
                                                  createBaseVNode("span", { class: "mord mtight" }, [
                                                    createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                    createBaseVNode("span", { class: "msupsub" }, [
                                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.1645em" }
                                                          }, [
                                                            createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                                              createBaseVNode("span", {
                                                                class: "pstrut",
                                                                style: { "height": "2.5em" }
                                                              }),
                                                              createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "s")
                                                              ])
                                                            ])
                                                          ]),
                                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                                        ]),
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.143em" }
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
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.2501em" }
                                          }, [
                                            createBaseVNode("span")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createBaseVNode("span", { style: { "top": "-1.6854em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
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
                                          style: { "height": "1.05em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "3.05em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, [
                                                createBaseVNode("span", { class: "mord mtight" }, "1"),
                                                createBaseVNode("span", { class: "mrel mtight" }, "≤"),
                                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                createBaseVNode("span", { class: "mpunct mtight" }, ","),
                                                createBaseVNode("span", {
                                                  class: "mord mathnormal mtight",
                                                  style: { "margin-right": "0.05724em" }
                                                }, "j"),
                                                createBaseVNode("span", { class: "mrel mtight" }, "≤"),
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
                                                createBaseVNode("span", { class: "mord mathnormal" }, "a")
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                                createBaseVNode("span", { class: "mord mtight" }, [
                                                  createBaseVNode("span", { class: "mord mtight" }, [
                                                    createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                    createBaseVNode("span", { class: "msupsub" }, [
                                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.3173em" }
                                                          }, [
                                                            createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                                              createBaseVNode("span", {
                                                                class: "pstrut",
                                                                style: { "height": "2.5em" }
                                                              }),
                                                              createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                                                createBaseVNode("span", { class: "mord mtight" }, "1")
                                                              ])
                                                            ])
                                                          ]),
                                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                                        ]),
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.143em" }
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
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.2501em" }
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
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "minner" }, "⋯"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                                createBaseVNode("span", { class: "mord mtight" }, [
                                                  createBaseVNode("span", { class: "mord mtight" }, [
                                                    createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                    createBaseVNode("span", { class: "msupsub" }, [
                                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.1645em" }
                                                          }, [
                                                            createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                                              createBaseVNode("span", {
                                                                class: "pstrut",
                                                                style: { "height": "2.5em" }
                                                              }),
                                                              createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "s")
                                                              ])
                                                            ])
                                                          ]),
                                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                                        ]),
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.143em" }
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
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.2501em" }
                                          }, [
                                            createBaseVNode("span")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createBaseVNode("span", { style: { "top": "3.0195em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
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
                                          style: { "height": "1.05em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "3.05em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, [
                                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                createBaseVNode("span", { class: "mrel mtight" }, "<"),
                                                createBaseVNode("span", {
                                                  class: "mord mathnormal mtight",
                                                  style: { "margin-right": "0.05724em" }
                                                }, "j")
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
                                                  createBaseVNode("span", { class: "mord mathnormal" }, "a")
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
                                    createBaseVNode("span", {
                                      class: "mspace",
                                      style: { "margin-right": "0.2222em" }
                                    }),
                                    createBaseVNode("span", { class: "mbin" }, "−"),
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
                                                  createBaseVNode("span", { class: "mord mathnormal" }, "a")
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                                createBaseVNode("span", { class: "mord mtight" }, [
                                                  createBaseVNode("span", { class: "mord mtight" }, [
                                                    createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                    createBaseVNode("span", { class: "msupsub" }, [
                                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.3173em" }
                                                          }, [
                                                            createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                                              createBaseVNode("span", {
                                                                class: "pstrut",
                                                                style: { "height": "2.5em" }
                                                              }),
                                                              createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                                                createBaseVNode("span", { class: "mord mtight" }, "1")
                                                              ])
                                                            ])
                                                          ]),
                                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                                        ]),
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.143em" }
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
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.2501em" }
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
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "minner" }, "⋯"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mbin" }, "∧"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                                createBaseVNode("span", { class: "mord mtight" }, [
                                                  createBaseVNode("span", { class: "mord mtight" }, [
                                                    createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
                                                    createBaseVNode("span", { class: "msupsub" }, [
                                                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.1645em" }
                                                          }, [
                                                            createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                                              createBaseVNode("span", {
                                                                class: "pstrut",
                                                                style: { "height": "2.5em" }
                                                              }),
                                                              createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "s")
                                                              ])
                                                            ])
                                                          ]),
                                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                                        ]),
                                                        createBaseVNode("span", { class: "vlist-r" }, [
                                                          createBaseVNode("span", {
                                                            class: "vlist",
                                                            style: { "height": "0.143em" }
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
                                          ]),
                                          createBaseVNode("span", { class: "vlist-s" }, "​")
                                        ]),
                                        createBaseVNode("span", { class: "vlist-r" }, [
                                          createBaseVNode("span", {
                                            class: "vlist",
                                            style: { "height": "0.2501em" }
                                          }, [
                                            createBaseVNode("span")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createBaseVNode("span", { style: { "top": "7.0733em" } }, [
                                createBaseVNode("span", {
                                  class: "pstrut",
                                  style: { "height": "3.75em" }
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
                                  createBaseVNode("span", { class: "mord" }, "0.")
                                ])
                              ])
                            ]),
                            createBaseVNode("span", { class: "vlist-s" }, "​")
                          ]),
                          createBaseVNode("span", { class: "vlist-r" }, [
                            createBaseVNode("span", {
                              class: "vlist",
                              style: { "height": "11.4833em" }
                            }, [
                              createBaseVNode("span")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", { class: "mspace newline" }),
                createBaseVNode("span", { class: "mspace newline" })
              ])
            ])
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("p", null, [
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("msup", null, [
                      createBaseVNode("mi", null, "f"),
                      createBaseVNode("mo", null, "∗")
                    ]),
                    createBaseVNode("mi", null, "ω"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("msup", null, [
                      createBaseVNode("mi", null, "f"),
                      createBaseVNode("mo", null, "∗")
                    ]),
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mi", null, "ω")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "df^* \\omega = f^* d\\omega")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.10764em" }
                  }, "f"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.6887em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.063em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mbin mtight" }, "∗")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "ω"),
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
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.10764em" }
                  }, "f"),
                  createBaseVNode("span", { class: "msupsub" }, [
                    createBaseVNode("span", { class: "vlist-t" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "0.6887em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.063em", "margin-right": "0.05em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "2.7em" }
                            }),
                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                              createBaseVNode("span", { class: "mbin mtight" }, "∗")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.03588em" }
                }, "ω")
              ])
            ])
          ]),
          createTextVNode("。这可由前两条性质得出。")
        ])
      ])
    ], -1),
    createStaticVNode('<div class="hint-container important"><p class="hint-container-title">重要</p><p>外微分运算在曲面上也可以定义。它的一个定义方法是这样的：考虑参数曲面 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi><mo>:</mo><mi mathvariant="normal">Ω</mi><mo>→</mo><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\varphi: \\Omega \\to \\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>，设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span> 是正则的，即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><msub><mi>φ</mi><mi>p</mi></msub><mo>:</mo><msub><mi>T</mi><mi>p</mi></msub><mi mathvariant="normal">Ω</mi><mo>→</mo><msub><mi>T</mi><mrow><mi>φ</mi><mo stretchy="false">(</mo><mi>p</mi><mo stretchy="false">)</mo></mrow></msub><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">d\\varphi_p: T_p \\Omega \\to T_{\\varphi(p)} \\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9805em;vertical-align:-0.2861em;"></span><span class="mord mathnormal">d</span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">p</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">p</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mord">Ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0385em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">φ</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">p</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span><span class="mord">Σ</span></span></span></span> 为线性同构，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∀</mi><mtext> </mtext><mi>p</mi><mo>∈</mo><mi mathvariant="normal">Ω</mi><mo>⊂</mo><msup><mi mathvariant="double-struck">R</mi><mi>m</mi></msup></mrow><annotation encoding="application/x-tex">\\forall\\ p \\in \\Omega \\subset \\mathbb{R}^m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">∀</span><span class="mspace"> </span><span class="mord mathnormal">p</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord">Ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span></span></span></span></span></span></span></span>。</p><p>如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span> 上的一个 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi></mrow><annotation encoding="application/x-tex">s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">s</span></span></span></span> 次微分形式，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>φ</mi><mo>∗</mo></msup><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\varphi^* \\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8831em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6887em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∗</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Ω</mi></mrow><annotation encoding="application/x-tex">\\Omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Ω</span></span></span></span> 中的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi></mrow><annotation encoding="application/x-tex">s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">s</span></span></span></span> 次微分形式，从而 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><msup><mi>φ</mi><mo>∗</mo></msup><mi>ω</mi></mrow><annotation encoding="application/x-tex">d\\varphi^* \\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">d</span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6887em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∗</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">s+1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 次微分形式。</p><p>由 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mi>φ</mi></mrow><annotation encoding="application/x-tex">d\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal">φ</span></span></span></span> 为同构知可以找到 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Σ</mi></mrow><annotation encoding="application/x-tex">\\Sigma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Σ</span></span></span></span> 上的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">s+1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 次微分形式，记为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mi>ω</mi></mrow><annotation encoding="application/x-tex">d\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span>，使得</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>φ</mi><mo>∗</mo></msup><mi>d</mi><mi>ω</mi><mo>=</mo><mi>d</mi><msup><mi>φ</mi><mo>∗</mo></msup><mi>ω</mi><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\varphi^* d\\omega = d\\varphi^* \\omega, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9331em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7387em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∗</span></span></span></span></span></span></span></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.9331em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">d</span><span class="mord"><span class="mord mathnormal">φ</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7387em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∗</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mpunct">,</span></span></span></span></span></p><p>这样 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 的外微分 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mi>ω</mi></mrow><annotation encoding="application/x-tex">d\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 就定义好了。请读者验证，这个定义与曲面参数化的选取无关。</p><p>曲面上的外微分同样具有以上几条性质。如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mi>ω</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">d\\omega = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 为<strong>闭形式</strong>；如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi><mo>=</mo><mi>d</mi><mi>η</mi></mrow><annotation encoding="application/x-tex">\\omega = d\\eta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">η</span></span></span></span>，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 为<strong>恰当形式</strong>。</p><p>由 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>d</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">d^2 = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal">d</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> 知恰当形式必为闭形式，反之不然。</p></div><p>/example/. <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup><mo>−</mo><mo stretchy="false">{</mo><mn>0</mn><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\mathbb{R}^2 - \\{0\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">0</span><span class="mclose">}</span></span></span></span> 上的一个非恰当的闭形式</p><blockquote><p>考虑 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup><mo>−</mo><mo stretchy="false">{</mo><mn>0</mn><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\mathbb{R}^2 - \\{0\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">0</span><span class="mclose">}</span></span></span></span> 上的 1 次微分形式</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>ω</mi><mo>=</mo><mfrac><mi>x</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>y</mi><mo>−</mo><mfrac><mi>y</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\omega = \\frac{x}{x^2 + y^2} dy - \\frac{y}{x^2 + y^2} dx, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.988em;vertical-align:-0.8804em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.1076em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">x</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.988em;vertical-align:-0.8804em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.1076em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.8804em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span><span class="mpunct">,</span></span></span></span></span></p><p>直接的计算表明 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mi>ω</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">d\\omega = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 为闭的 1 形式。如果用极坐标 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>r</mi><mo separator="true">,</mo><mi>θ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(r,\\theta)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span></span></span></span> 表示，则由</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>d</mi><mi>x</mi><mo>=</mo><mi>cos</mi><mo>⁡</mo><mi>θ</mi><mtext> </mtext><mi>d</mi><mi>r</mi><mo>−</mo><mi>r</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi><mtext> </mtext><mi>d</mi><mi>θ</mi><mo separator="true">,</mo><mspace width="1em"></mspace><mi>d</mi><mi>y</mi><mo>=</mo><mi>sin</mi><mo>⁡</mo><mi>θ</mi><mtext> </mtext><mi>d</mi><mi>r</mi><mo>+</mo><mi>r</mi><mi>cos</mi><mo>⁡</mo><mi>θ</mi><mtext> </mtext><mi>d</mi><mi>θ</mi></mrow><annotation encoding="application/x-tex">dx = \\cos\\theta\\, dr - r\\sin\\theta\\, d\\theta,\\quad dy = \\sin\\theta\\, dr + r\\cos\\theta\\, d\\theta </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mop">cos</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">sin</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mpunct">,</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mop">sin</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">cos</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span></span></p><p>可得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi><mo>=</mo><mi>d</mi><mi>θ</mi></mrow><annotation encoding="application/x-tex">\\omega = d\\theta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span>。不过，这个等式并不表明 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 是恰当形式，因为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi></mrow><annotation encoding="application/x-tex">\\theta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span> 不能定义在整个 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup><mo>−</mo><mo stretchy="false">{</mo><mn>0</mn><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\mathbb{R}^2 - \\{0\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">0</span><span class="mclose">}</span></span></span></span> 上。</p><p>事实上，不存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup><mo>−</mo><mo stretchy="false">{</mo><mn>0</mn><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\mathbb{R}^2 - \\{0\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">0</span><span class="mclose">}</span></span></span></span> 上的函数 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span>，使得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi><mo>=</mo><mi>d</mi><mi>f</mi></mrow><annotation encoding="application/x-tex">\\omega = df</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">df</span></span></span></span>。</p><p>（反证法）如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span> 存在，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mo stretchy="false">(</mo><mi>f</mi><mo>−</mo><mi>θ</mi><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">d(f - \\theta) = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">d</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，因此 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo>−</mo><mi>θ</mi></mrow><annotation encoding="application/x-tex">f - \\theta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span> 在连通的开集 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup><mo>−</mo><mo stretchy="false">{</mo><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mn>0</mn><mo stretchy="false">)</mo><mo>∣</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\mathbb{R}^2 - \\{(x,0)\\mid x &gt; 0\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0</span><span class="mclose">}</span></span></span></span> 上必为常数，这样的话 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi></mrow><annotation encoding="application/x-tex">\\theta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span></span></span></span> 就可以连续地定义在整个 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup><mo>−</mo><mo stretchy="false">{</mo><mn>0</mn><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\mathbb{R}^2 - \\{0\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">0</span><span class="mclose">}</span></span></span></span> 上了，这当然是不可能的。</p></blockquote><p>现在考虑 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>m</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^m</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span></span></span></span></span></span></span></span> 中闭的 1 次微分形式 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>m</mi></msubsup><msub><mi>a</mi><mi>i</mi></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mi>d</mi><msub><mi>x</mi><mi>i</mi></msub></mrow><annotation encoding="application/x-tex">\\omega = \\sum_{i=1}^m a_i(x) dx_i</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.104em;vertical-align:-0.2997em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8043em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">m</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord mathnormal">d</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>，如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi><mo>=</mo><mi>d</mi><mi>f</mi></mrow><annotation encoding="application/x-tex">\\omega = df</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">df</span></span></span></span>，则根据 Newton-Leibniz 公式，有</p>', 4),
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
                  columnalign: "right left right left",
                  columnspacing: "0em 1em 0em"
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
                          createBaseVNode("mi", null, "f"),
                          createBaseVNode("mo", { stretchy: "false" }, "("),
                          createBaseVNode("mn", null, "0"),
                          createBaseVNode("mo", { stretchy: "false" }, ")"),
                          createBaseVNode("mo", null, "+"),
                          createBaseVNode("msubsup", null, [
                            createBaseVNode("mo", null, "∫"),
                            createBaseVNode("mn", null, "0"),
                            createBaseVNode("mn", null, "1")
                          ]),
                          createBaseVNode("mfrac", null, [
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mi", null, "d"),
                              createBaseVNode("mi", null, "t")
                            ])
                          ]),
                          createBaseVNode("mi", null, "f"),
                          createBaseVNode("mo", { stretchy: "false" }, "("),
                          createBaseVNode("mi", null, "t"),
                          createBaseVNode("mi", null, "x"),
                          createBaseVNode("mo", { stretchy: "false" }, ")"),
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("mi", null, "t")
                        ])
                      ])
                    ]),
                    createBaseVNode("mtd", null, [
                      createBaseVNode("mstyle", {
                        scriptlevel: "0",
                        displaystyle: "true"
                      }, [
                        createBaseVNode("mrow", null, [
                          createBaseVNode("mo", null, "="),
                          createBaseVNode("mi", null, "f"),
                          createBaseVNode("mo", { stretchy: "false" }, "("),
                          createBaseVNode("mn", null, "0"),
                          createBaseVNode("mo", { stretchy: "false" }, ")"),
                          createBaseVNode("mo", null, "+"),
                          createBaseVNode("msubsup", null, [
                            createBaseVNode("mo", null, "∫"),
                            createBaseVNode("mn", null, "0"),
                            createBaseVNode("mn", null, "1")
                          ]),
                          createBaseVNode("munderover", null, [
                            createBaseVNode("mo", null, "∑"),
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mi", null, "i"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("mfrac", null, [
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                              createBaseVNode("mi", null, "f")
                            ]),
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                              createBaseVNode("msub", null, [
                                createBaseVNode("mi", null, "x"),
                                createBaseVNode("mi", null, "i")
                              ])
                            ])
                          ]),
                          createBaseVNode("mo", { stretchy: "false" }, "("),
                          createBaseVNode("mi", null, "t"),
                          createBaseVNode("mi", null, "x"),
                          createBaseVNode("mo", { stretchy: "false" }, ")"),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "i")
                          ]),
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("mi", null, "t")
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
                          createBaseVNode("mn", null, "0"),
                          createBaseVNode("mo", { stretchy: "false" }, ")"),
                          createBaseVNode("mo", null, "+"),
                          createBaseVNode("msubsup", null, [
                            createBaseVNode("mo", null, "∫"),
                            createBaseVNode("mn", null, "0"),
                            createBaseVNode("mn", null, "1")
                          ]),
                          createBaseVNode("munderover", null, [
                            createBaseVNode("mo", null, "∑"),
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mi", null, "i"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("mi", null, "i")
                          ]),
                          createBaseVNode("mo", { stretchy: "false" }, "("),
                          createBaseVNode("mi", null, "t"),
                          createBaseVNode("mi", null, "x"),
                          createBaseVNode("mo", { stretchy: "false" }, ")"),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "i")
                          ]),
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("mi", null, "t"),
                          createBaseVNode("mi", { mathvariant: "normal" }, ".")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} f(x) &= f(0) + \\int_0^1 \\frac{d}{dt} f(tx) dt &= f(0) + \\int_0^1 \\sum_{i=1}^m \\frac{\\partial f}{\\partial x_i}(tx) x_i dt &= f(0) + \\int_0^1 \\sum_{i=1}^m a_i(tx) x_i dt. \\end{aligned} ")
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
                style: { "height": "3.2291em", "vertical-align": "-1.3645em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mtable" }, [
                  createBaseVNode("span", { class: "col-align-r" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "1.8645em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.8645em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
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
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "1.3645em" }
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
                          style: { "height": "1.8645em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.8645em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
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
                              createBaseVNode("span", { class: "mord" }, "0"),
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
                              createBaseVNode("span", { class: "mop" }, [
                                createBaseVNode("span", {
                                  class: "mop op-symbol large-op",
                                  style: { "margin-right": "0.44445em", "position": "relative", "top": "-0.0011em" }
                                }, "∫"),
                                createBaseVNode("span", { class: "msupsub" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.564em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-1.7881em", "margin-left": "-0.4445em", "margin-right": "0.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "2.7em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, "0")
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.8129em", "margin-right": "0.05em" } }, [
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
                                        style: { "height": "0.9119em" }
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
                                            createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                            createBaseVNode("span", { class: "mord mathnormal" }, "t")
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
                                            createBaseVNode("span", { class: "mord mathnormal" }, "d")
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
                              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                              createBaseVNode("span", { class: "mclose" }, ")"),
                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                              createBaseVNode("span", { class: "mord mathnormal" }, "t")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "1.3645em" }
                        }, [
                          createBaseVNode("span")
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("span", {
                    class: "arraycolsep",
                    style: { "width": "1em" }
                  }),
                  createBaseVNode("span", { class: "col-align-r" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "1.8645em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.8645em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
                            }),
                            createBaseVNode("span", { class: "mord" }, [
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
                              createBaseVNode("span", { class: "mord" }, "0"),
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
                              createBaseVNode("span", { class: "mop" }, [
                                createBaseVNode("span", {
                                  class: "mop op-symbol large-op",
                                  style: { "margin-right": "0.44445em", "position": "relative", "top": "-0.0011em" }
                                }, "∫"),
                                createBaseVNode("span", { class: "msupsub" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.564em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-1.7881em", "margin-left": "-0.4445em", "margin-right": "0.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "2.7em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, "0")
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.8129em", "margin-right": "0.05em" } }, [
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
                                        style: { "height": "0.9119em" }
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                                        ])
                                      ])
                                    ]),
                                    createBaseVNode("span", { class: "vlist-s" }, "​")
                                  ]),
                                  createBaseVNode("span", { class: "vlist-r" }, [
                                    createBaseVNode("span", {
                                      class: "vlist",
                                      style: { "height": "1.2777em" }
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
                                        style: { "height": "1.3714em" }
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
                                            createBaseVNode("span", {
                                              class: "mord",
                                              style: { "margin-right": "0.05556em" }
                                            }, "∂"),
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
                                        style: { "height": "0.836em" }
                                      }, [
                                        createBaseVNode("span")
                                      ])
                                    ])
                                  ])
                                ]),
                                createBaseVNode("span", { class: "mclose nulldelimiter" })
                              ]),
                              createBaseVNode("span", { class: "mopen" }, "("),
                              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                              createBaseVNode("span", { class: "mclose" }, ")"),
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
                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                              createBaseVNode("span", { class: "mord mathnormal" }, "t")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "1.3645em" }
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
                          style: { "height": "1.8645em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-3.8645em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
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
                              createBaseVNode("span", { class: "mord" }, "0"),
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
                              createBaseVNode("span", { class: "mop" }, [
                                createBaseVNode("span", {
                                  class: "mop op-symbol large-op",
                                  style: { "margin-right": "0.44445em", "position": "relative", "top": "-0.0011em" }
                                }, "∫"),
                                createBaseVNode("span", { class: "msupsub" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.564em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-1.7881em", "margin-left": "-0.4445em", "margin-right": "0.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "2.7em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", { class: "mord mtight" }, "0")
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.8129em", "margin-right": "0.05em" } }, [
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
                                        style: { "height": "0.9119em" }
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                                        ])
                                      ])
                                    ]),
                                    createBaseVNode("span", { class: "vlist-s" }, "​")
                                  ]),
                                  createBaseVNode("span", { class: "vlist-r" }, [
                                    createBaseVNode("span", {
                                      class: "vlist",
                                      style: { "height": "1.2777em" }
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
                              createBaseVNode("span", { class: "mopen" }, "("),
                              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                              createBaseVNode("span", { class: "mclose" }, ")"),
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
                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                              createBaseVNode("span", { class: "mord" }, ".")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "1.3645em" }
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
    ], -1),
    createStaticVNode('<p>反之，如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span> 是闭形式，用上式定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span>，则</p>', 1),
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
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("mi", null, "f")
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
                              createBaseVNode("mi", null, "i"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mo", { fence: "true" }, "("),
                            createBaseVNode("msubsup", null, [
                              createBaseVNode("mo", null, "∫"),
                              createBaseVNode("mn", null, "0"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "a"),
                              createBaseVNode("mi", null, "i")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mo", { fence: "true" }, ")")
                          ]),
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "i")
                          ]),
                          createBaseVNode("mo", null, "+"),
                          createBaseVNode("munderover", null, [
                            createBaseVNode("mo", null, "∑"),
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mi", null, "i"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("munderover", null, [
                            createBaseVNode("mo", null, "∑"),
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mi", null, "j"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mo", { fence: "true" }, "("),
                            createBaseVNode("msubsup", null, [
                              createBaseVNode("mo", null, "∫"),
                              createBaseVNode("mn", null, "0"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mfrac", null, [
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "a"),
                                  createBaseVNode("mi", null, "i")
                                ])
                              ]),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("mi", null, "j")
                                ])
                              ])
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mo", { fence: "true" }, ")")
                          ]),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "i")
                          ]),
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "j")
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
                              createBaseVNode("mi", null, "j"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mo", { fence: "true" }, "("),
                            createBaseVNode("msubsup", null, [
                              createBaseVNode("mo", null, "∫"),
                              createBaseVNode("mn", null, "0"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "a"),
                              createBaseVNode("mi", null, "j")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mo", { fence: "true" }, ")")
                          ]),
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "j")
                          ]),
                          createBaseVNode("mo", null, "+"),
                          createBaseVNode("munderover", null, [
                            createBaseVNode("mo", null, "∑"),
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mi", null, "j"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("munderover", null, [
                            createBaseVNode("mo", null, "∑"),
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mi", null, "i"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mo", { fence: "true" }, "("),
                            createBaseVNode("msubsup", null, [
                              createBaseVNode("mo", null, "∫"),
                              createBaseVNode("mn", null, "0"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mfrac", null, [
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "a"),
                                  createBaseVNode("mi", null, "j")
                                ])
                              ]),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", { mathvariant: "normal" }, "∂"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("mi", null, "i")
                                ])
                              ])
                            ]),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mo", { fence: "true" }, ")")
                          ]),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "i")
                          ]),
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "j")
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
                              createBaseVNode("mi", null, "j"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mo", { fence: "true" }, "("),
                            createBaseVNode("msubsup", null, [
                              createBaseVNode("mo", null, "∫"),
                              createBaseVNode("mn", null, "0"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "a"),
                              createBaseVNode("mi", null, "j")
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mo", { fence: "true" }, ")")
                          ]),
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "j")
                          ]),
                          createBaseVNode("mo", null, "+"),
                          createBaseVNode("munderover", null, [
                            createBaseVNode("mo", null, "∑"),
                            createBaseVNode("mrow", null, [
                              createBaseVNode("mi", null, "j"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mo", { fence: "true" }, "("),
                            createBaseVNode("msubsup", null, [
                              createBaseVNode("mo", null, "∫"),
                              createBaseVNode("mn", null, "0"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mfrac", null, [
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "a"),
                                  createBaseVNode("mi", null, "j")
                                ])
                              ]),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("mi", null, "t")
                              ])
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mo", { fence: "true" }, ")")
                          ]),
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "j")
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
                              createBaseVNode("mi", null, "j"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mo", { fence: "true" }, "("),
                            createBaseVNode("msubsup", null, [
                              createBaseVNode("mo", null, "∫"),
                              createBaseVNode("mn", null, "0"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mfrac", null, [
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("mo", { stretchy: "false" }, "("),
                                createBaseVNode("mi", null, "t"),
                                createBaseVNode("msub", null, [
                                  createBaseVNode("mi", null, "a"),
                                  createBaseVNode("mi", null, "j")
                                ]),
                                createBaseVNode("mo", { stretchy: "false" }, ")")
                              ]),
                              createBaseVNode("mrow", null, [
                                createBaseVNode("mi", null, "d"),
                                createBaseVNode("mi", null, "t")
                              ])
                            ]),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mi", null, "d"),
                            createBaseVNode("mi", null, "t"),
                            createBaseVNode("mo", { fence: "true" }, ")")
                          ]),
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "j")
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
                              createBaseVNode("mi", null, "j"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mi", null, "m")
                          ]),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "a"),
                            createBaseVNode("mi", null, "j")
                          ]),
                          createBaseVNode("mo", { stretchy: "false" }, "("),
                          createBaseVNode("mi", null, "x"),
                          createBaseVNode("mo", { stretchy: "false" }, ")"),
                          createBaseVNode("mi", null, "d"),
                          createBaseVNode("msub", null, [
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", null, "j")
                          ]),
                          createBaseVNode("mo", null, "="),
                          createBaseVNode("mi", null, "ω"),
                          createBaseVNode("mi", { mathvariant: "normal" }, ".")
                        ])
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} df &= \\sum_{i=1}^m \\left( \\int_0^1 a_i(tx) dt \\right) dx_i + \\sum_{i=1}^m \\sum_{j=1}^m \\left( \\int_0^1 t \\frac{\\partial a_i}{\\partial x_j} dt \\right) x_i dx_j\\\\\\\\ &= \\sum_{j=1}^m \\left( \\int_0^1 a_j(tx) dt \\right) dx_j + \\sum_{j=1}^m \\sum_{i=1}^m \\left( \\int_0^1 t \\frac{\\partial a_j}{\\partial x_i} dt \\right) x_i dx_j\\\\\\\\ &= \\sum_{j=1}^m \\left( \\int_0^1 a_j(tx) dt \\right) dx_j + \\sum_{j=1}^m \\left( \\int_0^1 t \\frac{da_j}{dt}(tx) dt \\right) dx_j\\\\\\\\ &= \\sum_{j=1}^m \\left( \\int_0^1 \\frac{d(ta_j)}{dt}(tx) dt \\right) dx_j\\\\\\\\ &= \\sum_{j=1}^m a_j(x) dx_j = \\omega. \\end{aligned} ")
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
                style: { "height": "22.8259em", "vertical-align": "-11.1629em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mtable" }, [
                  createBaseVNode("span", { class: "col-align-r" }, [
                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "11.6629em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-13.6629em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
                            }),
                            createBaseVNode("span", { class: "mord" }, [
                              createBaseVNode("span", {
                                class: "mord mathnormal",
                                style: { "margin-right": "0.10764em" }
                              }, "df")
                            ])
                          ]),
                          createBaseVNode("span", { style: { "top": "-11.1092em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
                            }),
                            createBaseVNode("span", { class: "mord" })
                          ]),
                          createBaseVNode("span", { style: { "top": "-8.7978em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
                            }),
                            createBaseVNode("span", { class: "mord" })
                          ]),
                          createBaseVNode("span", { style: { "top": "-6.244em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
                            }),
                            createBaseVNode("span", { class: "mord" })
                          ]),
                          createBaseVNode("span", { style: { "top": "-3.9326em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
                            }),
                            createBaseVNode("span", { class: "mord" })
                          ]),
                          createBaseVNode("span", { style: { "top": "-1.3788em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
                            }),
                            createBaseVNode("span", { class: "mord" })
                          ]),
                          createBaseVNode("span", { style: { "top": "0.9326em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
                            }),
                            createBaseVNode("span", { class: "mord" })
                          ]),
                          createBaseVNode("span", { style: { "top": "3.4864em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
                            }),
                            createBaseVNode("span", { class: "mord" })
                          ]),
                          createBaseVNode("span", { style: { "top": "5.7978em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
                            }),
                            createBaseVNode("span", { class: "mord" })
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "11.1629em" }
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
                          style: { "height": "11.6629em" }
                        }, [
                          createBaseVNode("span", { style: { "top": "-13.6629em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
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
                                      createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                                        createBaseVNode("span", {
                                          class: "pstrut",
                                          style: { "height": "3.05em" }
                                        }),
                                        createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                          createBaseVNode("span", { class: "mord mtight" }, [
                                            createBaseVNode("span", { class: "mord mathnormal mtight" }, "i"),
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                                        ])
                                      ])
                                    ]),
                                    createBaseVNode("span", { class: "vlist-s" }, "​")
                                  ]),
                                  createBaseVNode("span", { class: "vlist-r" }, [
                                    createBaseVNode("span", {
                                      class: "vlist",
                                      style: { "height": "1.2777em" }
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
                              createBaseVNode("span", { class: "minner" }, [
                                createBaseVNode("span", {
                                  class: "mopen delimcenter",
                                  style: { "top": "0em" }
                                }, [
                                  createBaseVNode("span", { class: "delimsizing size3" }, "(")
                                ]),
                                createBaseVNode("span", { class: "mop" }, [
                                  createBaseVNode("span", {
                                    class: "mop op-symbol large-op",
                                    style: { "margin-right": "0.44445em", "position": "relative", "top": "-0.0011em" }
                                  }, "∫"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.564em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-1.7881em", "margin-left": "-0.4445em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "0")
                                            ])
                                          ]),
                                          createBaseVNode("span", { style: { "top": "-3.8129em", "margin-right": "0.05em" } }, [
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
                                          style: { "height": "0.9119em" }
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
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                                        ])
                                      ])
                                    ]),
                                    createBaseVNode("span", { class: "vlist-s" }, "​")
                                  ]),
                                  createBaseVNode("span", { class: "vlist-r" }, [
                                    createBaseVNode("span", {
                                      class: "vlist",
                                      style: { "height": "1.2777em" }
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
                                      style: { "height": "1.6514em" }
                                    }, [
                                      createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                                        createBaseVNode("span", {
                                          class: "pstrut",
                                          style: { "height": "3.05em" }
                                        }),
                                        createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                          createBaseVNode("span", { class: "mord mtight" }, [
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
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
                              createBaseVNode("span", { class: "minner" }, [
                                createBaseVNode("span", {
                                  class: "mopen delimcenter",
                                  style: { "top": "0em" }
                                }, [
                                  createBaseVNode("span", { class: "delimsizing size3" }, "(")
                                ]),
                                createBaseVNode("span", { class: "mop" }, [
                                  createBaseVNode("span", {
                                    class: "mop op-symbol large-op",
                                    style: { "margin-right": "0.44445em", "position": "relative", "top": "-0.0011em" }
                                  }, "∫"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.564em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-1.7881em", "margin-left": "-0.4445em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "0")
                                            ])
                                          ]),
                                          createBaseVNode("span", { style: { "top": "-3.8129em", "margin-right": "0.05em" } }, [
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
                                          style: { "height": "0.9119em" }
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                                              createBaseVNode("span", {
                                                class: "mord",
                                                style: { "margin-right": "0.05556em" }
                                              }, "∂"),
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
                                              ])
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                          createBaseVNode("span", { style: { "top": "-8.7978em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
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
                                      createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                                        createBaseVNode("span", {
                                          class: "pstrut",
                                          style: { "height": "3.05em" }
                                        }),
                                        createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                          createBaseVNode("span", { class: "mord mtight" }, [
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
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
                              createBaseVNode("span", { class: "minner" }, [
                                createBaseVNode("span", {
                                  class: "mopen delimcenter",
                                  style: { "top": "0em" }
                                }, [
                                  createBaseVNode("span", { class: "delimsizing size3" }, "(")
                                ]),
                                createBaseVNode("span", { class: "mop" }, [
                                  createBaseVNode("span", {
                                    class: "mop op-symbol large-op",
                                    style: { "margin-right": "0.44445em", "position": "relative", "top": "-0.0011em" }
                                  }, "∫"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.564em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-1.7881em", "margin-left": "-0.4445em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "0")
                                            ])
                                          ]),
                                          createBaseVNode("span", { style: { "top": "-3.8129em", "margin-right": "0.05em" } }, [
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
                                          style: { "height": "0.9119em" }
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
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                      style: { "height": "1.6514em" }
                                    }, [
                                      createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                                        createBaseVNode("span", {
                                          class: "pstrut",
                                          style: { "height": "3.05em" }
                                        }),
                                        createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                          createBaseVNode("span", { class: "mord mtight" }, [
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
                                        ])
                                      ])
                                    ]),
                                    createBaseVNode("span", { class: "vlist-s" }, "​")
                                  ]),
                                  createBaseVNode("span", { class: "vlist-r" }, [
                                    createBaseVNode("span", {
                                      class: "vlist",
                                      style: { "height": "1.2777em" }
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
                              createBaseVNode("span", { class: "minner" }, [
                                createBaseVNode("span", {
                                  class: "mopen delimcenter",
                                  style: { "top": "0em" }
                                }, [
                                  createBaseVNode("span", { class: "delimsizing size3" }, "(")
                                ]),
                                createBaseVNode("span", { class: "mop" }, [
                                  createBaseVNode("span", {
                                    class: "mop op-symbol large-op",
                                    style: { "margin-right": "0.44445em", "position": "relative", "top": "-0.0011em" }
                                  }, "∫"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.564em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-1.7881em", "margin-left": "-0.4445em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "0")
                                            ])
                                          ]),
                                          createBaseVNode("span", { style: { "top": "-3.8129em", "margin-right": "0.05em" } }, [
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
                                          style: { "height": "0.9119em" }
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                                              createBaseVNode("span", {
                                                class: "mord",
                                                style: { "margin-right": "0.05556em" }
                                              }, "∂"),
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
                                              ])
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.836em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ]),
                                  createBaseVNode("span", { class: "mclose nulldelimiter" })
                                ]),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                          createBaseVNode("span", { style: { "top": "-3.9326em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
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
                                      createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                                        createBaseVNode("span", {
                                          class: "pstrut",
                                          style: { "height": "3.05em" }
                                        }),
                                        createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                          createBaseVNode("span", { class: "mord mtight" }, [
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
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
                              createBaseVNode("span", { class: "minner" }, [
                                createBaseVNode("span", {
                                  class: "mopen delimcenter",
                                  style: { "top": "0em" }
                                }, [
                                  createBaseVNode("span", { class: "delimsizing size3" }, "(")
                                ]),
                                createBaseVNode("span", { class: "mop" }, [
                                  createBaseVNode("span", {
                                    class: "mop op-symbol large-op",
                                    style: { "margin-right": "0.44445em", "position": "relative", "top": "-0.0011em" }
                                  }, "∫"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.564em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-1.7881em", "margin-left": "-0.4445em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "0")
                                            ])
                                          ]),
                                          createBaseVNode("span", { style: { "top": "-3.8129em", "margin-right": "0.05em" } }, [
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
                                          style: { "height": "0.9119em" }
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
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                      style: { "height": "1.6514em" }
                                    }, [
                                      createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                                        createBaseVNode("span", {
                                          class: "pstrut",
                                          style: { "height": "3.05em" }
                                        }),
                                        createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                          createBaseVNode("span", { class: "mord mtight" }, [
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
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
                              createBaseVNode("span", { class: "minner" }, [
                                createBaseVNode("span", {
                                  class: "mopen delimcenter",
                                  style: { "top": "0em" }
                                }, [
                                  createBaseVNode("span", { class: "delimsizing size3" }, "(")
                                ]),
                                createBaseVNode("span", { class: "mop" }, [
                                  createBaseVNode("span", {
                                    class: "mop op-symbol large-op",
                                    style: { "margin-right": "0.44445em", "position": "relative", "top": "-0.0011em" }
                                  }, "∫"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.564em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-1.7881em", "margin-left": "-0.4445em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "0")
                                            ])
                                          ]),
                                          createBaseVNode("span", { style: { "top": "-3.8129em", "margin-right": "0.05em" } }, [
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
                                          style: { "height": "0.9119em" }
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                              createBaseVNode("span", { class: "mord mathnormal" }, "t")
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
                                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                              ])
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                          createBaseVNode("span", { style: { "top": "0.9326em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
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
                                      createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                                        createBaseVNode("span", {
                                          class: "pstrut",
                                          style: { "height": "3.05em" }
                                        }),
                                        createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                          createBaseVNode("span", { class: "mord mtight" }, [
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
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
                              createBaseVNode("span", { class: "minner" }, [
                                createBaseVNode("span", {
                                  class: "mopen delimcenter",
                                  style: { "top": "0em" }
                                }, [
                                  createBaseVNode("span", { class: "delimsizing size3" }, "(")
                                ]),
                                createBaseVNode("span", { class: "mop" }, [
                                  createBaseVNode("span", {
                                    class: "mop op-symbol large-op",
                                    style: { "margin-right": "0.44445em", "position": "relative", "top": "-0.0011em" }
                                  }, "∫"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "1.564em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-1.7881em", "margin-left": "-0.4445em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "0")
                                            ])
                                          ]),
                                          createBaseVNode("span", { style: { "top": "-3.8129em", "margin-right": "0.05em" } }, [
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
                                          style: { "height": "0.9119em" }
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
                                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                              createBaseVNode("span", { class: "mord mathnormal" }, "t")
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
                                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                              createBaseVNode("span", { class: "mopen" }, "("),
                                              createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, ")"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "t"),
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
                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                          createBaseVNode("span", { style: { "top": "5.7978em" } }, [
                            createBaseVNode("span", {
                              class: "pstrut",
                              style: { "height": "3.6514em" }
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
                                      createBaseVNode("span", { style: { "top": "-1.8723em", "margin-left": "0em" } }, [
                                        createBaseVNode("span", {
                                          class: "pstrut",
                                          style: { "height": "3.05em" }
                                        }),
                                        createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                          createBaseVNode("span", { class: "mord mtight" }, [
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
                                          createBaseVNode("span", { class: "mord mathnormal mtight" }, "m")
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
                              createBaseVNode("span", { class: "mopen" }, "("),
                              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                              createBaseVNode("span", { class: "mclose" }, ")"),
                              createBaseVNode("span", { class: "mord mathnormal" }, "d"),
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
                                style: { "margin-right": "0.2778em" }
                              }),
                              createBaseVNode("span", { class: "mrel" }, "="),
                              createBaseVNode("span", {
                                class: "mspace",
                                style: { "margin-right": "0.2778em" }
                              }),
                              createBaseVNode("span", {
                                class: "mord mathnormal",
                                style: { "margin-right": "0.03588em" }
                              }, "ω"),
                              createBaseVNode("span", { class: "mord" }, ".")
                            ])
                          ])
                        ]),
                        createBaseVNode("span", { class: "vlist-s" }, "​")
                      ]),
                      createBaseVNode("span", { class: "vlist-r" }, [
                        createBaseVNode("span", {
                          class: "vlist",
                          style: { "height": "11.1629em" }
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
    ], -1),
    createStaticVNode('<p>其中，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle displaystyle="true" scriptlevel="0"><mfrac><mrow><mi mathvariant="normal">∂</mi><msub><mi>a</mi><mi>i</mi></msub></mrow><mrow><mi mathvariant="normal">∂</mi><msub><mi>x</mi><mi>j</mi></msub></mrow></mfrac></mstyle><mo>=</mo><mstyle displaystyle="true" scriptlevel="0"><mfrac><mrow><mi mathvariant="normal">∂</mi><msub><mi>a</mi><mi>j</mi></msub></mrow><mrow><mi mathvariant="normal">∂</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></mfrac></mstyle></mrow><annotation encoding="application/x-tex">\\dfrac{\\partial a_i}{\\partial x_j} = \\dfrac{\\partial a_j}{\\partial x_i}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.3435em;vertical-align:-0.9721em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9721em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.2074em;vertical-align:-0.836em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.836em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> 是因为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi><mi>ω</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">d\\omega = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>。这就说明 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span> 中闭的 1 次微分形式必为恰当形式，这个方法也可以推广到高维。</p>', 1)
  ])]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('{"path":"/integral/integral-44/","title":"Lesson 44 微分形式积分 II","lang":"zh-CN","frontmatter":{"title":"Lesson 44 微分形式积分 II","permalink":"/integral/integral-44/","createTime":"2026/08/17 14:18:19","description":"Part 2 外微分运算 · 计算 为了方便起见，我们将函数称为 0 次微分形式。我们知道，给定可微函数 f，它的全微分 df 是一个 1 次微分形式。 从 f 得到 df 是一个求导的过程。 现在，给定一个 s 次的微分形式 ω，我们要定义一个 s+1 次的微分形式，它由 ω 求导得到，记为 dω。 先讨论 Rm 中的微分形式。设 ω 为 C1 的 ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lesson 44 微分形式积分 II\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-08-17T07:22:27.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/integral/integral-44/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"Lesson 44 微分形式积分 II"}],["meta",{"property":"og:description","content":"Part 2 外微分运算 · 计算 为了方便起见，我们将函数称为 0 次微分形式。我们知道，给定可微函数 f，它的全微分 df 是一个 1 次微分形式。 从 f 得到 df 是一个求导的过程。 现在，给定一个 s 次的微分形式 ω，我们要定义一个 s+1 次的微分形式，它由 ω 求导得到，记为 dω。 先讨论 Rm 中的微分形式。设 ω 为 C1 的 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-08-17T07:22:27.000Z"}],["meta",{"property":"article:modified_time","content":"2026-08-17T07:22:27.000Z"}]]},"readingTime":{"minutes":4.8,"words":1441},"git":{"createdTime":1786951347000,"updatedTime":1786951347000,"contributors":[{"name":"nicostore-mathematica","username":"nicostore-mathematica","email":"nicostore.core@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/nicostore-mathematica?v=4","url":"https://github.com/nicostore-mathematica"}],"changelog":[{"hash":"44b2c35133fdda464519e8cf9f0db5f368774022","time":1786951347000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"notes re"}]},"autoDesc":true,"filePathRelative":"integral/integral-44.md","headers":[]}');
export {
  index_html as comp,
  data
};
