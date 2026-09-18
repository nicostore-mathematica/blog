import { _ as _export_sfc, c as createElementBlock, a as createBaseVNode, e as createStaticVNode, b as createTextVNode, o as openBlock } from "./app-C973mz5j.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("p", null, "从这一章开始我们要研究多个变量的函数. 实数集的基本性质对于一元实函数的各种性质都有决定性的影响. 因此，为了研究多个变量的函数，我们要首先研究它们的定义域的基本性质.", -1),
    createBaseVNode("h2", {
      id: "part-1-基本概念",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#part-1-基本概念"
      }, [
        createBaseVNode("span", null, "Part 1 基本概念")
      ])
    ], -1),
    createBaseVNode("h3", {
      id: "·-内积与度量",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#·-内积与度量"
      }, [
        createBaseVNode("span", null, "· 内积与度量")
      ])
    ], -1),
    createBaseVNode("p", null, [
      createBaseVNode("strong", null, "定义1"),
      createTextVNode(" (内积)：")
    ], -1),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "X")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "X")
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
              }, "X")
            ])
          ])
        ]),
        createTextVNode(" 是实数域 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "R")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{R}")
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
              createBaseVNode("span", { class: "mord mathbb" }, "R")
            ])
          ])
        ]),
        createTextVNode(" 上的向量空间，如果映射")
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
                            createBaseVNode("mi", null, "g"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                            createBaseVNode("mo", { separator: "true" }, ","),
                            createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                            createBaseVNode("mspace"),
                            createBaseVNode("mspace", { width: "0.1111em" }),
                            createBaseVNode("mo", {
                              lspace: "0em",
                              rspace: "0.17em"
                            }),
                            createBaseVNode("mtext", null, " ⁣"),
                            createBaseVNode("mo", {
                              lspace: "0em",
                              rspace: "0em"
                            }, ":"),
                            createBaseVNode("mspace", { width: "0.3333em" }),
                            createBaseVNode("mi", null, "X"),
                            createBaseVNode("mo", null, "×"),
                            createBaseVNode("mi", null, "X"),
                            createBaseVNode("mo", null, "→"),
                            createBaseVNode("mi", { mathvariant: "double-struck" }, "R")
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
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { separator: "true" }, ","),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "↦"),
                            createBaseVNode("mi", null, "g"),
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { separator: "true" }, ","),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", { stretchy: "false" }, ")"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { separator: "true" }, ","),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", { stretchy: "false" }, "⟩")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} &g = \\langle,\\rangle\\colon X \\times X \\to \\mathbb{R} \\\\\\\\ &(x,y) \\mapsto g(x,y) = \\langle x,y\\rangle \\end{aligned} ")
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
                            createBaseVNode("span", { style: { "top": "-4.5em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "2.84em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-3em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "2.84em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.5em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "2.84em" }
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
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "g"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "⟨"),
                                createBaseVNode("span", { class: "mpunct" }, ","),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mclose" }, "⟩"),
                                createBaseVNode("span", { class: "mspace nobreak" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1111em" }
                                }),
                                createBaseVNode("span", { class: "mpunct" }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "-0.1667em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mrel" }, ":")
                                ]),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.3333em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.07847em" }
                                }, "X"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "×"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.07847em" }
                                }, "X"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "→"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mord mathbb" }, "R")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-1.66em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }),
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
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "↦"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "g"),
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
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "⟨"),
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
                                createBaseVNode("span", { class: "mclose" }, "⟩")
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
      createBaseVNode("p", null, "满足以下条件："),
      createBaseVNode("p", null, [
        createTextVNode("(1) "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                  createBaseVNode("mo", null, "⩾"),
                  createBaseVNode("mn", null, "0")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\langle x,x\\rangle \\geqslant 0")
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
              createBaseVNode("span", { class: "mopen" }, "⟨"),
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
              createBaseVNode("span", { class: "mclose" }, "⟩"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel amsrm" }, "⩾"),
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
        createTextVNode("，且 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mn", null, "0"),
                  createBaseVNode("mo", null, "⟺"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mn", null, "0")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\langle x,x\\rangle = 0 \\Longleftrightarrow x = 0")
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
              createBaseVNode("span", { class: "mopen" }, "⟨"),
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
              createBaseVNode("span", { class: "mclose" }, "⟩"),
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
                style: { "height": "0.6684em", "vertical-align": "-0.024em" }
              }),
              createBaseVNode("span", { class: "mord" }, "0"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "⟺"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.4306em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
        createTextVNode("（正定性）；")
      ]),
      createBaseVNode("p", null, [
        createTextVNode("(2) "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { stretchy: "false" }, "⟩")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\langle x,y\\rangle = \\langle y,x\\rangle")
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
              createBaseVNode("span", { class: "mopen" }, "⟨"),
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
              createBaseVNode("span", { class: "mclose" }, "⟩"),
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
                style: { "margin-right": "0.03588em" }
              }, "y"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
              createBaseVNode("span", { class: "mclose" }, "⟩")
            ])
          ])
        ]),
        createTextVNode("，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "∀"),
                  createBaseVNode("mtext", null, " "),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", null, "X")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\forall\\,x,y \\in X")
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
              createBaseVNode("span", { class: "mord" }, "∀"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
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
                style: { "margin-right": "0.07847em" }
              }, "X")
            ])
          ])
        ]),
        createTextVNode("（对称性）；")
      ]),
      createBaseVNode("p", null, [
        createTextVNode("(3) "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                  createBaseVNode("mi", null, "λ"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "μ"),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "z"),
                  createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mi", null, "λ"),
                  createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "z"),
                  createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "μ"),
                  createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "z"),
                  createBaseVNode("mo", { stretchy: "false" }, "⟩")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\langle \\lambda x + \\mu y,z\\rangle = \\lambda\\langle x,z\\rangle + \\mu\\langle y,z\\rangle")
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
              createBaseVNode("span", { class: "mopen" }, "⟨"),
              createBaseVNode("span", { class: "mord mathnormal" }, "λ"),
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
              createBaseVNode("span", { class: "mord mathnormal" }, "μ"),
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
              createBaseVNode("span", { class: "mclose" }, "⟩"),
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
              createBaseVNode("span", { class: "mord mathnormal" }, "λ"),
              createBaseVNode("span", { class: "mopen" }, "⟨"),
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.04398em" }
              }, "z"),
              createBaseVNode("span", { class: "mclose" }, "⟩"),
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
              createBaseVNode("span", { class: "mopen" }, "⟨"),
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
              createBaseVNode("span", { class: "mclose" }, "⟩")
            ])
          ])
        ]),
        createTextVNode("，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "∀"),
                  createBaseVNode("mtext", null, " "),
                  createBaseVNode("mi", null, "λ"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "μ"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "R")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\forall\\,\\lambda,\\mu \\in \\mathbb{R}")
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
              createBaseVNode("span", { class: "mord" }, "∀"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
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
        createTextVNode("，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "z"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mi", null, "X")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "x,y,z \\in X")
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
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.04398em" }
              }, "z"),
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
                style: { "margin-right": "0.07847em" }
              }, "X")
            ])
          ])
        ]),
        createTextVNode("（线性性）.")
      ]),
      createBaseVNode("p", null, [
        createTextVNode("则称 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "g"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mo", { stretchy: "false" }, "⟩")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "g = \\langle,\\rangle")
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
              }, "g"),
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
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mclose" }, "⟩")
            ])
          ])
        ]),
        createTextVNode(" 为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "X")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "X")
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
              }, "X")
            ])
          ])
        ]),
        createTextVNode(" 上的一个内积，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "X"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "(X,\\langle,\\rangle)")
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
                style: { "margin-right": "0.07847em" }
              }, "X"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mopen" }, "⟨"),
              createBaseVNode("span", { class: "mpunct" }, ","),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.1667em" }
              }),
              createBaseVNode("span", { class: "mclose" }, "⟩)")
            ])
          ])
        ]),
        createTextVNode(" 称为内积空间，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "y"),
                  createBaseVNode("mo", { stretchy: "false" }, "⟩")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\langle x,y\\rangle")
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
              createBaseVNode("span", { class: "mopen" }, "⟨"),
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
              createBaseVNode("span", { class: "mclose" }, "⟩")
            ])
          ])
        ]),
        createTextVNode(" 称为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "x")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "x")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "x")
            ])
          ])
        ]),
        createTextVNode(" 与 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "y")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "y")
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
              }, "y")
            ])
          ])
        ]),
        createTextVNode(" 的内积，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("msqrt", null, [
                    createBaseVNode("mrow", null, [
                      createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                      createBaseVNode("mi", null, "x"),
                      createBaseVNode("mo", { separator: "true" }, ","),
                      createBaseVNode("mi", null, "x"),
                      createBaseVNode("mo", { stretchy: "false" }, "⟩")
                    ])
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\|x\\| = \\sqrt{\\langle x,x\\rangle}")
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
              createBaseVNode("span", { class: "mord" }, "∥"),
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
              createBaseVNode("span", { class: "mord" }, "∥"),
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
                style: { "height": "1.24em", "vertical-align": "-0.305em" }
              }),
              createBaseVNode("span", { class: "mord sqrt" }, [
                createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                  createBaseVNode("span", { class: "vlist-r" }, [
                    createBaseVNode("span", {
                      class: "vlist",
                      style: { "height": "0.935em" }
                    }, [
                      createBaseVNode("span", {
                        class: "svg-align",
                        style: { "top": "-3.2em" }
                      }, [
                        createBaseVNode("span", {
                          class: "pstrut",
                          style: { "height": "3.2em" }
                        }),
                        createBaseVNode("span", {
                          class: "mord",
                          style: { "padding-left": "1em" }
                        }, [
                          createBaseVNode("span", { class: "mopen" }, "⟨"),
                          createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                          createBaseVNode("span", { class: "mpunct" }, ","),
                          createBaseVNode("span", {
                            class: "mspace",
                            style: { "margin-right": "0.1667em" }
                          }),
                          createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                          createBaseVNode("span", { class: "mclose" }, "⟩")
                        ])
                      ]),
                      createBaseVNode("span", { style: { "top": "-2.895em" } }, [
                        createBaseVNode("span", {
                          class: "pstrut",
                          style: { "height": "3.2em" }
                        }),
                        createBaseVNode("span", {
                          class: "hide-tail",
                          style: { "min-width": "1.02em", "height": "1.28em" }
                        }, [
                          createBaseVNode("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "400em",
                            height: "1.28em",
                            viewBox: "0 0 400000 1296",
                            preserveAspectRatio: "xMinYMin slice"
                          }, [
                            createBaseVNode("path", { d: "M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z" })
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("span", { class: "vlist-s" }, "​")
                  ]),
                  createBaseVNode("span", { class: "vlist-r" }, [
                    createBaseVNode("span", {
                      class: "vlist",
                      style: { "height": "0.305em" }
                    }, [
                      createBaseVNode("span")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        createTextVNode(" 称为 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "x")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "x")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "x")
            ])
          ])
        ]),
        createTextVNode(" 的范数.")
      ])
    ], -1),
    createStaticVNode('<p>/example/</p><blockquote><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 上的内积</p><blockquote><p>对任意 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo>∈</mo><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">x,y \\in \\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span>，定义 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">⟨</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">⟩</mo><mo>=</mo><mi>x</mi><mi>y</mi></mrow><annotation encoding="application/x-tex">\\langle x,y\\rangle = xy</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">⟩</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">x</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span>，则显然 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">⟨</mo><mo separator="true">,</mo><mo stretchy="false">⟩</mo></mrow><annotation encoding="application/x-tex">\\langle,\\rangle</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mclose">⟩</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 上的内积. 此时，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 的范数就是其绝对值 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∣</mi><mi>x</mi><mi mathvariant="normal">∣</mi></mrow><annotation encoding="application/x-tex">|x|</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal">x</span><span class="mord">∣</span></span></span></span>.</p></blockquote><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 上的内积</p><blockquote><p>记 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup><mo>=</mo><mo stretchy="false">{</mo><mo stretchy="false">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><mo>⋯</mo><mtext> </mtext><mo separator="true">,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy="false">)</mo><mo>∣</mo><msub><mi>x</mi><mi>i</mi></msub><mo>∈</mo><mi mathvariant="double-struck">R</mi><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n = \\{(x_1,\\cdots,x_n)\\mid x_i \\in \\mathbb{R}\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathbb">R</span><span class="mclose">}</span></span></span></span> 为全体 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> 元有序实数组，以显然的方式，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 成为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 上的向量空间，称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span> 维欧氏空间. <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 上有标准的内积 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">⟨</mo><mo separator="true">,</mo><mo stretchy="false">⟩</mo></mrow><annotation encoding="application/x-tex">\\langle,\\rangle</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mclose">⟩</span></span></span></span>：</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">⟨</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">⟩</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>x</mi><mi>i</mi></msub><msub><mi>y</mi><mi>i</mi></msub><mo separator="true">,</mo><mspace width="1em"></mspace><mi mathvariant="normal">∀</mi><mtext> </mtext><mi>x</mi><mo>=</mo><mo stretchy="false">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><mo>⋯</mo><mtext> </mtext><mo separator="true">,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy="false">)</mo><mo separator="true">,</mo><mtext> </mtext><mi>y</mi><mo>=</mo><mo stretchy="false">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo separator="true">,</mo><mo>⋯</mo><mtext> </mtext><mo separator="true">,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy="false">)</mo><mo>∈</mo><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\langle x,y\\rangle = \\sum_{i=1}^n x_iy_i,\\quad \\forall\\,x = (x_1,\\cdots,x_n),\\,y = (y_1,\\cdots,y_n) \\in \\mathbb{R}^n. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">⟩</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.9291em;vertical-align:-1.2777em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∀</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7144em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mord">.</span></span></span></span></span></p><p>如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>=</mo><mo stretchy="false">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo separator="true">,</mo><mo>⋯</mo><mtext> </mtext><mo separator="true">,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy="false">)</mo><mo>∈</mo><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">x = (x_1,\\cdots,x_n) \\in \\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>，则其范数为</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">∥</mi><mi>x</mi><mi mathvariant="normal">∥</mi><mo>=</mo><mo stretchy="false">(</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>⋯</mo><mo>+</mo><msubsup><mi>x</mi><mi>n</mi><mn>2</mn></msubsup><msup><mo stretchy="false">)</mo><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></msup><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\|x\\| = (x_1^2 + x_2^2 + \\cdots + x_n^2)^{1/2}. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∥</span><span class="mord mathnormal">x</span><span class="mord">∥</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-2.453em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1111em;vertical-align:-0.247em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-2.453em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.188em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-2.453em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.938em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1/2</span></span></span></span></span></span></span></span></span><span class="mord">.</span></span></span></span></span></p></blockquote><p>闭区间上连续函数空间的内积</p><blockquote><p>记 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>C</mi><mn>0</mn></msup><mo stretchy="false">[</mo><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">C^0[a,b]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span></span></span></span></span><span class="mopen">[</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mclose">]</span></span></span></span> 为闭区间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">[</mo><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">[a,b]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mclose">]</span></span></span></span> 上连续函数的全体形成的向量空间. 定义内积 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">⟨</mo><mo separator="true">,</mo><mo stretchy="false">⟩</mo></mrow><annotation encoding="application/x-tex">\\langle,\\rangle</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mclose">⟩</span></span></span></span> 如下：</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">⟨</mo><mi>f</mi><mo separator="true">,</mo><mi>g</mi><mo stretchy="false">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mi>g</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mtext> </mtext><mi>d</mi><mi>x</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\langle f,g\\rangle = \\int_a^b f(x)g(x)\\,dx. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mclose">⟩</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.511em;vertical-align:-0.9119em;"></span><span class="mop"><span class="mop op-symbol large-op" style="margin-right:0.44445em;position:relative;top:-0.0011em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.599em;"><span style="top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">a</span></span></span><span style="top:-3.8129em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">b</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9119em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span><span class="mord">.</span></span></span></span></span></p><p>其中，内积的正定性需要用到连续性的条件：</p><p>非负连续函数的积分一定是非负实数，且积分为零当且仅当被积函数为零.</p></blockquote></blockquote><p><strong>定理1</strong> (Schwarz 不等式)：设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>X</mi><mo separator="true">,</mo><mo stretchy="false">⟨</mo><mo separator="true">,</mo><mo stretchy="false">⟩</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(X,\\langle,\\rangle)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">⟨</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mclose">⟩)</span></span></span></span> 为内积空间，则</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">∣</mi><mo stretchy="false">⟨</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">⟩</mo><mi mathvariant="normal">∣</mi><mo>⩽</mo><mi mathvariant="normal">∥</mi><mi>x</mi><mi mathvariant="normal">∥</mi><mo>⋅</mo><mi mathvariant="normal">∥</mi><mi>y</mi><mi mathvariant="normal">∥</mi><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">|\\langle x,y\\rangle| \\leqslant \\|x\\| \\cdot \\|y\\|, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mopen">⟨</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">⟩</span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⩽</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∥</span><span class="mord mathnormal">x</span><span class="mord">∥</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∥</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mord">∥</span><span class="mpunct">,</span></span></span></span></span></p><p>且等号成立当且仅当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 与 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi></mrow><annotation encoding="application/x-tex">y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span> 线性相关.</p><blockquote><p>当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">x = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>（或 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">y = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>）时，由内积的线性知</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">⟨</mo><mn>0</mn><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">⟩</mo><mo>=</mo><mo stretchy="false">⟨</mo><mn>0</mn><mo>⋅</mo><mn>0</mn><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">⟩</mo><mo>=</mo><mn>0</mn><mo stretchy="false">⟨</mo><mn>0</mn><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">⟩</mo><mo>=</mo><mn>0</mn><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\langle 0,y\\rangle = \\langle 0\\cdot 0,y\\rangle = 0\\langle 0,y\\rangle = 0, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">⟩</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mord">0</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">⟩</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0</span><span class="mopen">⟨</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">⟩</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span></span></span></span></span></p><p>此时 Schwarz 不等式自然成立. 下设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo mathvariant="normal">≠</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">x \\ne 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo mathvariant="normal">≠</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">y \\ne 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，则对任意 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mo>∈</mo><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">t \\in \\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6542em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span>，有</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">⟨</mo><mi>x</mi><mo separator="true">,</mo><mi>x</mi><mo stretchy="false">⟩</mo><mo>−</mo><mn>2</mn><mi>t</mi><mo stretchy="false">⟨</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">⟩</mo><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy="false">⟨</mo><mi>y</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">⟩</mo><mo>=</mo><mo stretchy="false">⟨</mo><mi>x</mi><mo>−</mo><mi>t</mi><mi>y</mi><mo separator="true">,</mo><mi>x</mi><mo>−</mo><mi>t</mi><mi>y</mi><mo stretchy="false">⟩</mo><mo>⩾</mo><mn>0</mn><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\langle x,x\\rangle - 2t\\langle x,y\\rangle + t^2\\langle y,y\\rangle = \\langle x - ty,x - ty\\rangle \\geqslant 0, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mclose">⟩</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mord mathnormal">t</span><span class="mopen">⟨</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">⟩</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mopen">⟨</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">⟩</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8095em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">⟩</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⩾</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span></span></span></span></span></p><p>上式是关于 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span> 的一元二次函数，因此其判别式非正：</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">Δ</mi><mo>=</mo><mn>4</mn><mo stretchy="false">⟨</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><msup><mo stretchy="false">⟩</mo><mn>2</mn></msup><mo>−</mo><mn>4</mn><mo stretchy="false">⟨</mo><mi>x</mi><mo separator="true">,</mo><mi>x</mi><mo stretchy="false">⟩</mo><mo stretchy="false">⟨</mo><mi>y</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">⟩</mo><mo>⩽</mo><mn>0</mn><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\Delta = 4\\langle x,y\\rangle^2 - 4\\langle x,x\\rangle\\langle y,y\\rangle \\leqslant 0, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Δ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord">4</span><span class="mopen">⟨</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose"><span class="mclose">⟩</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">4</span><span class="mopen">⟨</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mclose">⟩</span><span class="mopen">⟨</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">⟩</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⩽</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span></span></span></span></span></p><p>等号成立的条件略.</p><p><strong>注意</strong>. 如果不考虑等式成立条件，只要 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">⟨</mo><mo separator="true">,</mo><mo stretchy="false">⟩</mo></mrow><annotation encoding="application/x-tex">\\langle,\\rangle</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">⟨</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mclose">⟩</span></span></span></span> 具有非负性，则 Schwarz 不等式仍然成立.</p></blockquote><p>根据 Schwarz 不等式，当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo separator="true">,</mo><mi>y</mi></mrow><annotation encoding="application/x-tex">x,y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span> 为非零向量时，可以取 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>∈</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mi>π</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">\\theta(x,y) \\in [0,\\pi]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mclose">]</span></span></span></span>，使得</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>cos</mi><mo>⁡</mo><mi>θ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">⟨</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">⟩</mo></mrow><mrow><mi mathvariant="normal">∥</mi><mi>x</mi><mi mathvariant="normal">∥</mi><mo>⋅</mo><mi mathvariant="normal">∥</mi><mi>y</mi><mi mathvariant="normal">∥</mi></mrow></mfrac><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\cos\\theta(x,y) = \\frac{\\langle x,y\\rangle}{\\|x\\| \\cdot \\|y\\|}, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">cos</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.363em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">∥</span><span class="mord mathnormal">x</span><span class="mord">∥</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">∥</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mord">∥</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">⟨</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">⟩</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mpunct">,</span></span></span></span></span></p><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>θ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\theta(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span> 称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo separator="true">,</mo><mi>y</mi></mrow><annotation encoding="application/x-tex">x,y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span> 的夹角，也记为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∠</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\angle(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∠</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>.</p><p><strong>推论2</strong>：设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>X</mi><mo separator="true">,</mo><mo stretchy="false">⟨</mo><mo separator="true">,</mo><mo stretchy="false">⟩</mo><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(X,\\langle,\\rangle)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">⟨</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mclose">⟩)</span></span></span></span> 为内积空间，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo>∈</mo><mi>X</mi></mrow><annotation encoding="application/x-tex">x,y \\in X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>，则</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">∥</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi mathvariant="normal">∥</mi><mo>⩽</mo><mi mathvariant="normal">∥</mi><mi>x</mi><mi mathvariant="normal">∥</mi><mo>+</mo><mi mathvariant="normal">∥</mi><mi>y</mi><mi mathvariant="normal">∥</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\|x + y\\| \\leqslant \\|x\\| + \\|y\\|. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∥</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mord">∥</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⩽</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∥</span><span class="mord mathnormal">x</span><span class="mord">∥</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∥</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mord">∥.</span></span></span></span></span></p>', 11),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, "根据 Schwarz 不等式，有"),
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
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mn", null, "2")
                            ])
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
                            createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", { separator: "true" }, ","),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                            createBaseVNode("mo", null, "="),
                            createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { separator: "true" }, ","),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mn", null, "2"),
                            createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mo", { separator: "true" }, ","),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", { separator: "true" }, ","),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mo", { stretchy: "false" }, "⟩")
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
                            createBaseVNode("mo", null, "⩽"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mn", null, "2"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mo", null, "⋅"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mn", null, "2")
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
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "x"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mo", null, "+"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("mi", null, "y"),
                            createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mn", null, "2")
                            ]),
                            createBaseVNode("mo", { separator: "true" }, ",")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} \\|x + y\\|^2 &= \\langle x + y,x + y\\rangle = \\langle x,x\\rangle + 2\\langle x,y\\rangle + \\langle y,y\\rangle \\\\\\\\ &\\leqslant \\|x\\|^2 + 2\\|x\\|\\cdot\\|y\\| + \\|y\\|^2 \\\\\\\\ &= (\\|x\\| + \\|y\\|)^2, \\end{aligned} ")
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
                  style: { "height": "7.5723em", "vertical-align": "-3.5362em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "4.0362em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-6.1721em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mord" }, "∥"),
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
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
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
                                ])
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-4.6721em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.1479em" } }, [
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
                            ]),
                            createBaseVNode("span", { style: { "top": "-0.1238em" } }, [
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
                            style: { "height": "3.5362em" }
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
                            style: { "height": "4.0362em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-6.1721em" } }, [
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
                                createBaseVNode("span", { class: "mopen" }, "⟨"),
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
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mpunct" }, ","),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
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
                                }),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mclose" }, "⟩"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mrel" }, "="),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "⟨"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mpunct" }, ","),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.1667em" }
                                }),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mclose" }, "⟩"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, "2"),
                                createBaseVNode("span", { class: "mopen" }, "⟨"),
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
                                createBaseVNode("span", { class: "mclose" }, "⟩"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mopen" }, "⟨"),
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
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mclose" }, "⟩")
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.1479em" } }, [
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
                                createBaseVNode("span", { class: "mrel amsrm" }, "⩽"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2778em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, "2∥"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
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
                                ])
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-0.1238em" } }, [
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
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "+"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", {
                                  class: "mord mathnormal",
                                  style: { "margin-right": "0.03588em" }
                                }, "y"),
                                createBaseVNode("span", { class: "mord" }, "∥"),
                                createBaseVNode("span", { class: "mclose" }, [
                                  createBaseVNode("span", { class: "mclose" }, ")"),
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
                            style: { "height": "3.5362em" }
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
      createBaseVNode("p", null, "因此欲证不等式成立.")
    ], -1),
    createStaticVNode('<p><strong>定义2</strong> (度量):</p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>X</mi></mrow><annotation encoding="application/x-tex">X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> 为非空集合，如果映射 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ρ</mi><mspace></mspace><mspace width="0.1111em"></mspace><mo lspace="0em" rspace="0.17em"></mo><mtext> ⁣</mtext><mo lspace="0em" rspace="0em">:</mo><mspace width="0.3333em"></mspace><mi>X</mi><mo>×</mo><mi>X</mi><mo>→</mo><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\rho\\colon X \\times X \\to \\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">ρ</span><span class="mspace nobreak"></span><span class="mspace" style="margin-right:0.1111em;"></span><span class="mpunct"></span><span class="mspace" style="margin-right:-0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mrel">:</span></span><span class="mspace" style="margin-right:0.3333em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 满足以下条件：</p><p>(1) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ρ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>⩾</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\rho(x,y) \\geqslant 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⩾</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> 且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ρ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn><mo>⟺</mo><mi>x</mi><mo>=</mo><mi>y</mi></mrow><annotation encoding="application/x-tex">\\rho(x,y) = 0 \\Longleftrightarrow x = y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6684em;vertical-align:-0.024em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⟺</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span>；</p><p>(2) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ρ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>ρ</mi><mo stretchy="false">(</mo><mi>y</mi><mo separator="true">,</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\rho(x,y) = \\rho(y,x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span>；</p><p>(3) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ρ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>z</mi><mo stretchy="false">)</mo><mo>⩽</mo><mi>ρ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>+</mo><mi>ρ</mi><mo stretchy="false">(</mo><mi>y</mi><mo separator="true">,</mo><mi>z</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\rho(x,z) \\leqslant \\rho(x,y) + \\rho(y,z)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⩽</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.04398em;">z</span><span class="mclose">)</span></span></span></span>. （三角不等式）</p><p>则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding="application/x-tex">\\rho</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">ρ</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>X</mi></mrow><annotation encoding="application/x-tex">X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> 上的一个度量（或距离），<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>X</mi><mo separator="true">,</mo><mi>ρ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(X,\\rho)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">ρ</span><span class="mclose">)</span></span></span></span> 称为度量空间（或距离空间），<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ρ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\rho(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span> 称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo separator="true">,</mo><mi>y</mi></mrow><annotation encoding="application/x-tex">x,y</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span></span></span></span> 之间的距离.</p></blockquote><p>/example/</p>', 3),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", { mathvariant: "double-struck" }, "R")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{R}")
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
              createBaseVNode("span", { class: "mord mathbb" }, "R")
            ])
          ])
        ]),
        createTextVNode(" 上的度量")
      ]),
      createBaseVNode("blockquote", null, [
        createBaseVNode("p", null, [
          createTextVNode("任给 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", null, "∈"),
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "R")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "x,y \\in \\mathbb{R}")
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
                  style: { "height": "0.6889em" }
                }),
                createBaseVNode("span", { class: "mord mathbb" }, "R")
              ])
            ])
          ]),
          createTextVNode("，令 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "ρ"),
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mo", { stretchy: "false" }, ")"),
                    createBaseVNode("mo", null, "="),
                    createBaseVNode("mi", { mathvariant: "normal" }, "∣"),
                    createBaseVNode("mi", null, "x"),
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mi", null, "y"),
                    createBaseVNode("mi", { mathvariant: "normal" }, "∣")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\rho(x,y) = |x - y|")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "ρ"),
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
                }, "y"),
                createBaseVNode("span", { class: "mord" }, "∣")
              ])
            ])
          ]),
          createTextVNode("，则 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "ρ")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\rho")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "ρ")
              ])
            ])
          ]),
          createTextVNode(" 为 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "R")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\mathbb{R}")
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
                createBaseVNode("span", { class: "mord mathbb" }, "R")
              ])
            ])
          ]),
          createTextVNode(" 上的度量.")
        ])
      ]),
      createBaseVNode("p", null, "内积诱导距离"),
      createBaseVNode("blockquote", null, [
        createBaseVNode("p", null, [
          createTextVNode("设 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mo", { stretchy: "false" }, "("),
                    createBaseVNode("mi", null, "X"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mo", { stretchy: "false" }, "⟨"),
                    createBaseVNode("mo", { separator: "true" }, ","),
                    createBaseVNode("mo", { stretchy: "false" }, "⟩"),
                    createBaseVNode("mo", { stretchy: "false" }, ")")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "(X,\\langle,\\rangle)")
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
                  style: { "margin-right": "0.07847em" }
                }, "X"),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mopen" }, "⟨"),
                createBaseVNode("span", { class: "mpunct" }, ","),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mclose" }, "⟩)")
              ])
            ])
          ]),
          createTextVNode(" 为内积空间，则令")
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
                      createBaseVNode("mi", null, "ρ"),
                      createBaseVNode("mo", { stretchy: "false" }, "("),
                      createBaseVNode("mi", null, "x"),
                      createBaseVNode("mo", { separator: "true" }, ","),
                      createBaseVNode("mi", null, "y"),
                      createBaseVNode("mo", { stretchy: "false" }, ")"),
                      createBaseVNode("mo", null, "="),
                      createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                      createBaseVNode("mi", null, "x"),
                      createBaseVNode("mo", null, "−"),
                      createBaseVNode("mi", null, "y"),
                      createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                      createBaseVNode("mo", { separator: "true" }, ","),
                      createBaseVNode("mspace", { width: "1em" }),
                      createBaseVNode("mi", { mathvariant: "normal" }, "∀"),
                      createBaseVNode("mtext", null, " "),
                      createBaseVNode("mi", null, "x"),
                      createBaseVNode("mo", { separator: "true" }, ","),
                      createBaseVNode("mi", null, "y"),
                      createBaseVNode("mo", null, "∈"),
                      createBaseVNode("mi", null, "X"),
                      createBaseVNode("mi", { mathvariant: "normal" }, ".")
                    ]),
                    createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\rho(x,y) = \\|x - y\\|,\\quad \\forall\\,x,y \\in X. ")
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
                  createBaseVNode("span", { class: "mord mathnormal" }, "ρ"),
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
                  createBaseVNode("span", {
                    class: "mord mathnormal",
                    style: { "margin-right": "0.03588em" }
                  }, "y"),
                  createBaseVNode("span", { class: "mord" }, "∥"),
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
                  createBaseVNode("span", {
                    class: "mspace",
                    style: { "margin-right": "0.1667em" }
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
                    style: { "margin-right": "0.07847em" }
                  }, "X"),
                  createBaseVNode("span", { class: "mord" }, ".")
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("p", null, [
          createTextVNode("显然 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "ρ")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\rho")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "ρ")
              ])
            ])
          ]),
          createTextVNode(" 满足度量定义中的 (1)，(2)，而三角不等式也成立：")
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
                              createBaseVNode("mi", null, "ρ"),
                              createBaseVNode("mo", { stretchy: "false" }, "("),
                              createBaseVNode("mi", null, "x"),
                              createBaseVNode("mo", { separator: "true" }, ","),
                              createBaseVNode("mi", null, "z"),
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
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mi", null, "x"),
                              createBaseVNode("mo", null, "−"),
                              createBaseVNode("mi", null, "z"),
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mo", { stretchy: "false" }, "("),
                              createBaseVNode("mi", null, "x"),
                              createBaseVNode("mo", null, "−"),
                              createBaseVNode("mi", null, "y"),
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mo", null, "+"),
                              createBaseVNode("mo", { stretchy: "false" }, "("),
                              createBaseVNode("mi", null, "y"),
                              createBaseVNode("mo", null, "−"),
                              createBaseVNode("mi", null, "z"),
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
                              createBaseVNode("mo", null, "⩽"),
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mi", null, "x"),
                              createBaseVNode("mo", null, "−"),
                              createBaseVNode("mi", null, "y"),
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mo", null, "+"),
                              createBaseVNode("mi", { mathvariant: "normal" }, "∥"),
                              createBaseVNode("mi", null, "y"),
                              createBaseVNode("mo", null, "−"),
                              createBaseVNode("mi", null, "z"),
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
                              createBaseVNode("mo", null, "="),
                              createBaseVNode("mi", null, "ρ"),
                              createBaseVNode("mo", { stretchy: "false" }, "("),
                              createBaseVNode("mi", null, "x"),
                              createBaseVNode("mo", { separator: "true" }, ","),
                              createBaseVNode("mi", null, "y"),
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mo", null, "+"),
                              createBaseVNode("mi", null, "ρ"),
                              createBaseVNode("mo", { stretchy: "false" }, "("),
                              createBaseVNode("mi", null, "y"),
                              createBaseVNode("mo", { separator: "true" }, ","),
                              createBaseVNode("mi", null, "z"),
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mi", { mathvariant: "normal" }, ".")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} \\rho(x,z) &= \\|x - z\\| = \\|(x - y) + (y - z)\\| \\\\\\\\ &\\leqslant \\|x - y\\| + \\|y - z\\| \\\\\\\\ &= \\rho(x,y) + \\rho(y,z).\\\\ \\end{aligned} ")
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "ρ"),
                                  createBaseVNode("span", { class: "mopen" }, "("),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "x"),
                                  createBaseVNode("span", { class: "mpunct" }, ","),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.1667em" }
                                  }),
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.04398em" }
                                  }, "z"),
                                  createBaseVNode("span", { class: "mclose" }, ")")
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
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.04398em" }
                                  }, "z"),
                                  createBaseVNode("span", { class: "mord" }, "∥"),
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
                                    style: { "margin-right": "0.03588em" }
                                  }, "y"),
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
                                  createBaseVNode("span", { class: "mord" }, "∥")
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
                                  createBaseVNode("span", { class: "mrel amsrm" }, "⩽"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2778em" }
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
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.03588em" }
                                  }, "y"),
                                  createBaseVNode("span", { class: "mord" }, "∥"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mbin" }, "+"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
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
                                  createBaseVNode("span", {
                                    class: "mord mathnormal",
                                    style: { "margin-right": "0.04398em" }
                                  }, "z"),
                                  createBaseVNode("span", { class: "mord" }, "∥")
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "ρ"),
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
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mbin" }, "+"),
                                  createBaseVNode("span", {
                                    class: "mspace",
                                    style: { "margin-right": "0.2222em" }
                                  }),
                                  createBaseVNode("span", { class: "mord mathnormal" }, "ρ"),
                                  createBaseVNode("span", { class: "mopen" }, "("),
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
        ]),
        createBaseVNode("p", null, [
          createTextVNode("因此 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "ρ")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\rho")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "ρ")
              ])
            ])
          ]),
          createTextVNode(" 为 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "X")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "X")
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
                }, "X")
              ])
            ])
          ]),
          createTextVNode(" 上的度量，称为由内积诱导的度量.")
        ])
      ]),
      createBaseVNode("p", null, "离散度量空间"),
      createBaseVNode("blockquote", null, [
        createBaseVNode("p", null, [
          createTextVNode("度量空间比内积空间要广泛得多，它们不一定为向量空间. 例如，设 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "X")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "X")
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
                }, "X")
              ])
            ])
          ]),
          createTextVNode(" 为任意非空集合，定义映射 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "d"),
                    createBaseVNode("mspace"),
                    createBaseVNode("mspace", { width: "0.1111em" }),
                    createBaseVNode("mo", {
                      lspace: "0em",
                      rspace: "0.17em"
                    }),
                    createBaseVNode("mtext", null, " ⁣"),
                    createBaseVNode("mo", {
                      lspace: "0em",
                      rspace: "0em"
                    }, ":"),
                    createBaseVNode("mspace", { width: "0.3333em" }),
                    createBaseVNode("mi", null, "X"),
                    createBaseVNode("mo", null, "×"),
                    createBaseVNode("mi", null, "X"),
                    createBaseVNode("mo", null, "→"),
                    createBaseVNode("mi", { mathvariant: "double-struck" }, "R")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "d\\colon X \\times X \\to \\mathbb{R}")
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
                  style: { "height": "0.7778em", "vertical-align": "-0.0833em" }
                }),
                createBaseVNode("span", { class: "mord mathnormal" }, "d"),
                createBaseVNode("span", { class: "mspace nobreak" }),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1111em" }
                }),
                createBaseVNode("span", { class: "mpunct" }),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "-0.1667em" }
                }),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.1667em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mrel" }, ":")
                ]),
                createBaseVNode("span", {
                  class: "mspace",
                  style: { "margin-right": "0.3333em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.07847em" }
                }, "X"),
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
                  style: { "height": "0.6833em" }
                }),
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.07847em" }
                }, "X"),
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
                createBaseVNode("span", { class: "mord mathbb" }, "R")
              ])
            ])
          ]),
          createTextVNode(" 如下：")
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
                      createBaseVNode("mi", null, "x"),
                      createBaseVNode("mo", { separator: "true" }, ","),
                      createBaseVNode("mi", null, "y"),
                      createBaseVNode("mo", { stretchy: "false" }, ")"),
                      createBaseVNode("mo", null, "="),
                      createBaseVNode("mrow", null, [
                        createBaseVNode("mo", { fence: "true" }, "{"),
                        createBaseVNode("mtable", {
                          rowspacing: "0.36em",
                          columnalign: "left left",
                          columnspacing: "1em"
                        }, [
                          createBaseVNode("mtr", null, [
                            createBaseVNode("mtd", null, [
                              createBaseVNode("mstyle", {
                                scriptlevel: "0",
                                displaystyle: "false"
                              }, [
                                createBaseVNode("mrow", null, [
                                  createBaseVNode("mn", null, "1"),
                                  createBaseVNode("mo", { separator: "true" }, ",")
                                ])
                              ])
                            ]),
                            createBaseVNode("mtd", null, [
                              createBaseVNode("mstyle", {
                                scriptlevel: "0",
                                displaystyle: "false"
                              }, [
                                createBaseVNode("mrow", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("mo", { mathvariant: "normal" }, "≠"),
                                  createBaseVNode("mi", null, "y"),
                                  createBaseVNode("mo", { separator: "true" }, ",")
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
                                  createBaseVNode("mn", null, "0"),
                                  createBaseVNode("mo", { separator: "true" }, ",")
                                ])
                              ])
                            ]),
                            createBaseVNode("mtd", null, [
                              createBaseVNode("mstyle", {
                                scriptlevel: "0",
                                displaystyle: "false"
                              }, [
                                createBaseVNode("mrow", null, [
                                  createBaseVNode("mi", null, "x"),
                                  createBaseVNode("mo", null, "="),
                                  createBaseVNode("mi", null, "y"),
                                  createBaseVNode("mi", { mathvariant: "normal" }, ".")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("annotation", { encoding: "application/x-tex" }, "d(x,y) = \\begin{cases} 1,& x \\ne y,\\\\ 0,& x = y. \\end{cases} ")
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
                    style: { "height": "3em", "vertical-align": "-1.25em" }
                  }),
                  createBaseVNode("span", { class: "minner" }, [
                    createBaseVNode("span", {
                      class: "mopen delimcenter",
                      style: { "top": "0em" }
                    }, [
                      createBaseVNode("span", { class: "delimsizing size4" }, "{")
                    ]),
                    createBaseVNode("span", { class: "mord" }, [
                      createBaseVNode("span", { class: "mtable" }, [
                        createBaseVNode("span", { class: "col-align-l" }, [
                          createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                            createBaseVNode("span", { class: "vlist-r" }, [
                              createBaseVNode("span", {
                                class: "vlist",
                                style: { "height": "1.69em" }
                              }, [
                                createBaseVNode("span", { style: { "top": "-3.69em" } }, [
                                  createBaseVNode("span", {
                                    class: "pstrut",
                                    style: { "height": "3.008em" }
                                  }),
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mord" }, "1"),
                                    createBaseVNode("span", { class: "mpunct" }, ",")
                                  ])
                                ]),
                                createBaseVNode("span", { style: { "top": "-2.25em" } }, [
                                  createBaseVNode("span", {
                                    class: "pstrut",
                                    style: { "height": "3.008em" }
                                  }),
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mord" }, "0"),
                                    createBaseVNode("span", { class: "mpunct" }, ",")
                                  ])
                                ])
                              ]),
                              createBaseVNode("span", { class: "vlist-s" }, "​")
                            ]),
                            createBaseVNode("span", { class: "vlist-r" }, [
                              createBaseVNode("span", {
                                class: "vlist",
                                style: { "height": "1.19em" }
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
                        createBaseVNode("span", { class: "col-align-l" }, [
                          createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                            createBaseVNode("span", { class: "vlist-r" }, [
                              createBaseVNode("span", {
                                class: "vlist",
                                style: { "height": "1.69em" }
                              }, [
                                createBaseVNode("span", { style: { "top": "-3.69em" } }, [
                                  createBaseVNode("span", {
                                    class: "pstrut",
                                    style: { "height": "3.008em" }
                                  }),
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                                    }),
                                    createBaseVNode("span", {
                                      class: "mord mathnormal",
                                      style: { "margin-right": "0.03588em" }
                                    }, "y"),
                                    createBaseVNode("span", { class: "mpunct" }, ",")
                                  ])
                                ]),
                                createBaseVNode("span", { style: { "top": "-2.25em" } }, [
                                  createBaseVNode("span", {
                                    class: "pstrut",
                                    style: { "height": "3.008em" }
                                  }),
                                  createBaseVNode("span", { class: "mord" }, [
                                    createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                                style: { "height": "1.19em" }
                              }, [
                                createBaseVNode("span")
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createBaseVNode("span", { class: "mclose nulldelimiter" })
                  ])
                ])
              ])
            ])
          ])
        ]),
        createBaseVNode("p", null, [
          createTextVNode("不难验证 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "d")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "d")
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
                createBaseVNode("span", { class: "mord mathnormal" }, "d")
              ])
            ])
          ]),
          createTextVNode(" 为 "),
          createBaseVNode("span", { class: "katex" }, [
            createBaseVNode("span", { class: "katex-mathml" }, [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("semantics", null, [
                  createBaseVNode("mrow", null, [
                    createBaseVNode("mi", null, "X")
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "X")
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
                }, "X")
              ])
            ])
          ]),
          createTextVNode(" 上的一个度量，称为离散度量.")
        ])
      ])
    ], -1),
    createStaticVNode('<h3 id="·-度量空间的拓扑" tabindex="-1"><a class="header-anchor" href="#·-度量空间的拓扑"><span>· 度量空间的拓扑</span></a></h3><p>这部分假设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>X</mi><mo separator="true">,</mo><mi>ρ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(X,\\rho)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">ρ</span><span class="mclose">)</span></span></span></span> 为度量空间. 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>∈</mo><mi>X</mi></mrow><annotation encoding="application/x-tex">x \\in X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">r &gt; 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，记</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>B</mi><mi>r</mi></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">{</mo><mi>y</mi><mo>∈</mo><mi>X</mi><mo>∣</mo><mi>ρ</mi><mo stretchy="false">(</mo><mi>y</mi><mo separator="true">,</mo><mi>x</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mi>r</mi><mo stretchy="false">}</mo><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">B_r(x) = \\{y \\in X \\mid \\rho(y,x) &lt; r\\}, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mclose">}</span><span class="mpunct">,</span></span></span></span></span></p><p>称为以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 为中心，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi></mrow><annotation encoding="application/x-tex">r</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span></span></span></span> 为半径的开球.</p><p><strong>欧氏空间中的开球</strong>：</p><blockquote><p>在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 中，以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 为中心，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi></mrow><annotation encoding="application/x-tex">r</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span></span></span></span> 为半径的开球就是开区间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><mi>r</mi><mo separator="true">,</mo><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mi>r</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(x_0 - r,x_0 + r)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mclose">)</span></span></span></span>. 在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span> 中，以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo separator="true">,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(x_0,y_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> 为中心，以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi></mrow><annotation encoding="application/x-tex">r</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span></span></span></span> 为半径的开球实际上是圆盘</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">{</mo><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>∈</mo><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup><mo>∣</mo><mo stretchy="false">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>0</mn></msub><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>&lt;</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy="false">}</mo><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\{(x,y) \\in \\mathbb{R}^2 \\mid (x - x_0)^2 + (y - y_0)^2 &lt; r^2\\}. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">}</span><span class="mord">.</span></span></span></span></span></p><p>在一般的欧氏空间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 中，以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><msubsup><mi>x</mi><mn>0</mn><mn>1</mn></msubsup><mo separator="true">,</mo><mo>⋯</mo><mtext> </mtext><mo separator="true">,</mo><msubsup><mi>x</mi><mn>0</mn><mi>n</mi></msubsup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(x_0^1,\\cdots,x_0^n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-2.4519em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2481em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.4519em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2481em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> 为中心，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi></mrow><annotation encoding="application/x-tex">r</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span></span></span></span> 为半径的开球是</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">{</mo><mo stretchy="false">(</mo><msup><mi>x</mi><mn>1</mn></msup><mo separator="true">,</mo><mo>⋯</mo><mtext> </mtext><mo separator="true">,</mo><msup><mi>x</mi><mi>n</mi></msup><mo stretchy="false">)</mo><mo>∈</mo><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup><mo>∣</mo><mo stretchy="false">(</mo><msup><mi>x</mi><mn>1</mn></msup><mo>−</mo><msubsup><mi>x</mi><mn>0</mn><mn>1</mn></msubsup><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo>⋯</mo><mo>+</mo><mo stretchy="false">(</mo><msup><mi>x</mi><mi>n</mi></msup><mo>−</mo><msubsup><mi>x</mi><mn>0</mn><mi>n</mi></msubsup><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>&lt;</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy="false">}</mo><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\{(x^1,\\cdots,x^n) \\in \\mathbb{R}^n \\mid (x^1 - x_0^1)^2 + \\cdots + (x^n - x_0^n)^2 &lt; r^2\\}. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mopen">{(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-2.453em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-2.453em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.247em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1141em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">}</span><span class="mord">.</span></span></span></span></span></p></blockquote><p><strong>离散度量空间中的开球</strong>：</p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>X</mi></mrow><annotation encoding="application/x-tex">X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> 是离散度量空间. 由于 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>X</mi></mrow><annotation encoding="application/x-tex">X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> 中的距离只取 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn></mrow><annotation encoding="application/x-tex">0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> 或 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn></mrow><annotation encoding="application/x-tex">1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>，因此</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>B</mi><mi>r</mi></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">{</mo><mi>x</mi><mo stretchy="false">}</mo><mo separator="true">,</mo><mspace width="1em"></mspace><mi mathvariant="normal">∀</mi><mtext> </mtext><mi>r</mi><mo>⩽</mo><mn>1</mn><mo separator="true">;</mo><mspace width="1em"></mspace><msub><mi>B</mi><mi>r</mi></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mi>X</mi><mo separator="true">,</mo><mspace width="1em"></mspace><mi mathvariant="normal">∀</mi><mtext> </mtext><mi>r</mi><mo>&gt;</mo><mn>1.</mn></mrow><annotation encoding="application/x-tex">B_r(x) = \\{x\\},\\quad \\forall\\,r \\leqslant 1;\\quad B_r(x) = X,\\quad \\forall\\,r &gt; 1. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord mathnormal">x</span><span class="mclose">}</span><span class="mpunct">,</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∀</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⩽</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1</span><span class="mpunct">;</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mpunct">,</span><span class="mspace" style="margin-right:1em;"></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∀</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1.</span></span></span></span></span></p><p>我们注意到离散度量空间中的开球看上去和欧氏空间中的很不一样.</p></blockquote><p><strong>定义1</strong> (开集和闭集)：</p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi></mrow><annotation encoding="application/x-tex">U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>X</mi></mrow><annotation encoding="application/x-tex">X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> 的子集，如果任给 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>∈</mo><mi>U</mi></mrow><annotation encoding="application/x-tex">x \\in U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span>，均存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\varepsilon &gt; 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">ε</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，使得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><mi>ε</mi></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><mi>U</mi></mstyle></mrow><annotation encoding="application/x-tex">B_\\varepsilon(x) \\displaystyle\\subset U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">ε</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span>，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi></mrow><annotation encoding="application/x-tex">U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 为开集；约定空集也是开集. 如果一个集合的补集（余集）是开集，则称该集合为闭集.</p><p>显然，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>X</mi></mrow><annotation encoding="application/x-tex">X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> 为开集，从而空集也是闭集. 含有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 的开集称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 的开邻域.</p></blockquote><p>/example/</p><blockquote><p>欧氏空间中的一些开集和闭集</p><blockquote><p>开区间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(a,b)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>a</mi><mo separator="true">,</mo><mo>+</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(a,+\\infty)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">+</span><span class="mord">∞</span><span class="mclose">)</span></span></span></span> 和 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(-\\infty,b)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">−</span><span class="mord">∞</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span></span> 都是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 中的开集；闭区间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">[</mo><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">[a,b]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mclose">]</span></span></span></span> 以及区间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">[</mo><mi>a</mi><mo separator="true">,</mo><mo>+</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">[a,+\\infty)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">+</span><span class="mord">∞</span><span class="mclose">)</span></span></span></span> 和 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">(-\\infty,b]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">−</span><span class="mord">∞</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mclose">]</span></span></span></span> 都是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 中的闭集.</p><p>上半平面 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">{</mo><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>∈</mo><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup><mo>∣</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\{(x,y) \\in \\mathbb{R}^2 \\mid y &gt; 0\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0</span><span class="mclose">}</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span> 中的开集，闭的圆盘 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">{</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>⩽</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\{x^2 + y^2 \\leqslant r^2\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⩽</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">}</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span> 中的闭集.</p><p>一般地，一个子集可能既不是开集，也不是闭集，比如 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 中的半开半闭区间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">[</mo><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">[a,b)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord mathnormal">a</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span></span>.</p><p>不过，离散度量空间的情形却很特殊.</p></blockquote><p>离散度量空间中的开集和闭集</p><blockquote><p>因为以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 为中心，以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow><annotation encoding="application/x-tex">1/2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">1/2</span></span></span></span> 为半径的开球就是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">{</mo><mi>x</mi><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\{x\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord mathnormal">x</span><span class="mclose">}</span></span></span></span>，因此离散度量空间的任何子集都是开集，从而任何子集也都是闭集.</p></blockquote><p>度量空间中的开球为开集</p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>∈</mo><msub><mi>B</mi><mi>r</mi></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">x \\in B_r(x_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ρ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mo>&lt;</mo><mi>r</mi></mrow><annotation encoding="application/x-tex">\\rho(x,x_0) &lt; r</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span></span></span></span>. 令 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ε</mi><mo>=</mo><mi>r</mi><mo>−</mo><mi>ρ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\varepsilon = r - \\rho(x,x_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">ε</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，则当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>∈</mo><msub><mi>B</mi><mi>ε</mi></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">y \\in B_\\varepsilon(x)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">ε</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span></span> 时，由三角不等式，有</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>ρ</mi><mo stretchy="false">(</mo><mi>y</mi><mo separator="true">,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mo>⩽</mo><mi>ρ</mi><mo stretchy="false">(</mo><mi>y</mi><mo separator="true">,</mo><mi>x</mi><mo stretchy="false">)</mo><mo>+</mo><mi>ρ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mo>&lt;</mo><mi>ε</mi><mo>+</mo><mi>ρ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mo>=</mo><mi>r</mi><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\rho(y,x_0) \\leqslant \\rho(y,x) + \\rho(x,x_0) &lt; \\varepsilon + \\rho(x,x_0) = r, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⩽</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">ε</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mpunct">,</span></span></span></span></span></p><p>这说明 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>∈</mo><msub><mi>B</mi><mi>r</mi></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">y \\in B_r(x_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><mi>ε</mi></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><msub><mi>B</mi><mi>r</mi></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mstyle></mrow><annotation encoding="application/x-tex">B_\\varepsilon(x) \\displaystyle\\subset B_r(x_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">ε</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，因此 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><mi>r</mi></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">B_r(x_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> 是开集.</p><p>类似可证 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">{</mo><mi>y</mi><mo>∈</mo><mi>X</mi><mo>∣</mo><mi>ρ</mi><mo stretchy="false">(</mo><mi>y</mi><mo separator="true">,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mo>&gt;</mo><mi>r</mi><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\{y \\in X \\mid \\rho(y,x_0) &gt; r\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∣</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mclose">}</span></span></span></span> 为开集，其补集称为闭球，是闭集.</p></blockquote></blockquote><p>下面的命题反映了开集和闭集的基本性质.</p><p><strong>命题1</strong>：</p><p>(1) 有限多个开集之交仍为开集；任意多个开集之并仍为开集；</p><p>(2) 有限多个闭集之并仍为闭集；任意多个闭集之交仍为闭集.</p>', 16),
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("(1) 设 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "U"),
                    createBaseVNode("mn", null, "1")
                  ]),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mo", null, "⋯"),
                  createBaseVNode("mtext", null, " "),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "U"),
                    createBaseVNode("mi", null, "k")
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "U_1,\\cdots,U_k")
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
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10903em" }
                }, "U"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3011em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.109em", "margin-right": "0.05em" } }, [
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
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10903em" }
                }, "U"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3361em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.109em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", {
                              class: "mord mathnormal mtight",
                              style: { "margin-right": "0.03148em" }
                            }, "k")
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
        createTextVNode(" 为开集，任给 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", null, "∈"),
                  createBaseVNode("mstyle", {
                    scriptlevel: "0",
                    displaystyle: "true"
                  }, [
                    createBaseVNode("munderover", null, [
                      createBaseVNode("mo", null, "⋂"),
                      createBaseVNode("mrow", null, [
                        createBaseVNode("mi", null, "i"),
                        createBaseVNode("mo", null, "="),
                        createBaseVNode("mn", null, "1")
                      ]),
                      createBaseVNode("mi", null, "k")
                    ]),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "U"),
                      createBaseVNode("mi", null, "i")
                    ])
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "x \\in \\displaystyle\\bigcap_{i=1}^k U_i")
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
                style: { "height": "3.1138em", "vertical-align": "-1.2777em" }
              }),
              createBaseVNode("span", { class: "mop op-limits" }, [
                createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                  createBaseVNode("span", { class: "vlist-r" }, [
                    createBaseVNode("span", {
                      class: "vlist",
                      style: { "height": "1.8361em" }
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
                          createBaseVNode("span", { class: "mop op-symbol large-op" }, "⋂")
                        ])
                      ]),
                      createBaseVNode("span", { style: { "top": "-4.3em", "margin-left": "0em" } }, [
                        createBaseVNode("span", {
                          class: "pstrut",
                          style: { "height": "3.05em" }
                        }),
                        createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                          createBaseVNode("span", {
                            class: "mord mathnormal mtight",
                            style: { "margin-right": "0.03148em" }
                          }, "k")
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
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10903em" }
                }, "U"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3117em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.109em", "margin-right": "0.05em" } }, [
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
        createTextVNode("，由定义，存在 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "ε"),
                    createBaseVNode("mi", null, "i")
                  ]),
                  createBaseVNode("mo", null, ">"),
                  createBaseVNode("mn", null, "0")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varepsilon_i > 0")
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
                style: { "height": "0.6891em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
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
                    createBaseVNode("mi", null, "B"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "ε"),
                      createBaseVNode("mi", null, "i")
                    ])
                  ]),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mstyle", {
                    scriptlevel: "0",
                    displaystyle: "true"
                  }, [
                    createBaseVNode("mo", null, "⊂"),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "U"),
                      createBaseVNode("mi", null, "i")
                    ])
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "B_{\\varepsilon_i}(x) \\displaystyle\\subset U_i")
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
                style: { "height": "1.0001em", "vertical-align": "-0.2501em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.05017em" }
                }, "B"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.1514em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.0502em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mtight" }, [
                              createBaseVNode("span", { class: "mord mtight" }, [
                                createBaseVNode("span", { class: "mord mathnormal mtight" }, "ε"),
                                createBaseVNode("span", { class: "msupsub" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "0.3281em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-2.357em", "margin-left": "0em", "margin-right": "0.0714em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "2.5em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size3 size1 mtight" }, [
                                            createBaseVNode("span", { class: "mord mathnormal mtight" }, "i")
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
              createBaseVNode("span", { class: "mopen" }, "("),
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                style: { "height": "0.8333em", "vertical-align": "-0.15em" }
              }),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10903em" }
                }, "U"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3117em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.109em", "margin-right": "0.05em" } }, [
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
        createTextVNode("，"),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "i"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mn", null, "1"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mo", null, "⋯"),
                  createBaseVNode("mtext", null, " "),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "k")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "i = 1,\\cdots,k")
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
                style: { "height": "0.6595em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "i"),
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
              createBaseVNode("span", { class: "mord" }, "1"),
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
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03148em" }
              }, "k")
            ])
          ])
        ]),
        createTextVNode(". 令 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mi", null, "ε"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mi", null, "min"),
                  createBaseVNode("mo", null, "⁡"),
                  createBaseVNode("mo", { stretchy: "false" }, "{"),
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "ε"),
                    createBaseVNode("mi", null, "i")
                  ]),
                  createBaseVNode("mo", null, "∣"),
                  createBaseVNode("mi", null, "i"),
                  createBaseVNode("mo", null, "="),
                  createBaseVNode("mn", null, "1"),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mo", null, "⋯"),
                  createBaseVNode("mtext", null, " "),
                  createBaseVNode("mo", { separator: "true" }, ","),
                  createBaseVNode("mi", null, "k"),
                  createBaseVNode("mo", { stretchy: "false" }, "}")
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\varepsilon = \\min\\{\\varepsilon_i\\mid i = 1,\\cdots,k\\}")
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
              createBaseVNode("span", { class: "mop" }, "min"),
              createBaseVNode("span", { class: "mopen" }, "{"),
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", { class: "mord mathnormal" }, "ε"),
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
                style: { "margin-right": "0.2778em" }
              }),
              createBaseVNode("span", { class: "mrel" }, "∣"),
              createBaseVNode("span", {
                class: "mspace",
                style: { "margin-right": "0.2778em" }
              })
            ]),
            createBaseVNode("span", { class: "base" }, [
              createBaseVNode("span", {
                class: "strut",
                style: { "height": "0.6595em" }
              }),
              createBaseVNode("span", { class: "mord mathnormal" }, "i"),
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
              createBaseVNode("span", { class: "mord" }, "1"),
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
              createBaseVNode("span", {
                class: "mord mathnormal",
                style: { "margin-right": "0.03148em" }
              }, "k"),
              createBaseVNode("span", { class: "mclose" }, "}")
            ])
          ])
        ]),
        createTextVNode("，则 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("msub", null, [
                    createBaseVNode("mi", null, "B"),
                    createBaseVNode("mi", null, "ε")
                  ]),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "x"),
                  createBaseVNode("mo", { stretchy: "false" }, ")"),
                  createBaseVNode("mstyle", {
                    scriptlevel: "0",
                    displaystyle: "true"
                  }, [
                    createBaseVNode("mo", null, "⊂"),
                    createBaseVNode("mstyle", {
                      scriptlevel: "0",
                      displaystyle: "true"
                    }, [
                      createBaseVNode("munderover", null, [
                        createBaseVNode("mo", null, "⋂"),
                        createBaseVNode("mrow", null, [
                          createBaseVNode("mi", null, "i"),
                          createBaseVNode("mo", null, "="),
                          createBaseVNode("mn", null, "1")
                        ]),
                        createBaseVNode("mi", null, "k")
                      ]),
                      createBaseVNode("msub", null, [
                        createBaseVNode("mi", null, "U"),
                        createBaseVNode("mi", null, "i")
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "B_\\varepsilon(x) \\displaystyle\\subset \\displaystyle\\bigcap_{i=1}^k U_i")
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
              createBaseVNode("span", { class: "mord" }, [
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.05017em" }
                }, "B"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.1514em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.0502em", "margin-right": "0.05em" } }, [
                          createBaseVNode("span", {
                            class: "pstrut",
                            style: { "height": "2.7em" }
                          }),
                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                            createBaseVNode("span", { class: "mord mathnormal mtight" }, "ε")
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
              createBaseVNode("span", { class: "mord mathnormal" }, "x"),
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
                style: { "height": "3.1138em", "vertical-align": "-1.2777em" }
              }),
              createBaseVNode("span", { class: "mop op-limits" }, [
                createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                  createBaseVNode("span", { class: "vlist-r" }, [
                    createBaseVNode("span", {
                      class: "vlist",
                      style: { "height": "1.8361em" }
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
                          createBaseVNode("span", { class: "mop op-symbol large-op" }, "⋂")
                        ])
                      ]),
                      createBaseVNode("span", { style: { "top": "-4.3em", "margin-left": "0em" } }, [
                        createBaseVNode("span", {
                          class: "pstrut",
                          style: { "height": "3.05em" }
                        }),
                        createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                          createBaseVNode("span", {
                            class: "mord mathnormal mtight",
                            style: { "margin-right": "0.03148em" }
                          }, "k")
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
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10903em" }
                }, "U"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3117em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.109em", "margin-right": "0.05em" } }, [
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
        createTextVNode("，故 "),
        createBaseVNode("span", { class: "katex" }, [
          createBaseVNode("span", { class: "katex-mathml" }, [
            createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
              createBaseVNode("semantics", null, [
                createBaseVNode("mrow", null, [
                  createBaseVNode("mstyle", {
                    scriptlevel: "0",
                    displaystyle: "true"
                  }, [
                    createBaseVNode("munderover", null, [
                      createBaseVNode("mo", null, "⋂"),
                      createBaseVNode("mrow", null, [
                        createBaseVNode("mi", null, "i"),
                        createBaseVNode("mo", null, "="),
                        createBaseVNode("mn", null, "1")
                      ]),
                      createBaseVNode("mi", null, "k")
                    ]),
                    createBaseVNode("msub", null, [
                      createBaseVNode("mi", null, "U"),
                      createBaseVNode("mi", null, "i")
                    ])
                  ])
                ]),
                createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\displaystyle\\bigcap_{i=1}^k U_i")
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
                style: { "height": "3.1138em", "vertical-align": "-1.2777em" }
              }),
              createBaseVNode("span", { class: "mop op-limits" }, [
                createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                  createBaseVNode("span", { class: "vlist-r" }, [
                    createBaseVNode("span", {
                      class: "vlist",
                      style: { "height": "1.8361em" }
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
                          createBaseVNode("span", { class: "mop op-symbol large-op" }, "⋂")
                        ])
                      ]),
                      createBaseVNode("span", { style: { "top": "-4.3em", "margin-left": "0em" } }, [
                        createBaseVNode("span", {
                          class: "pstrut",
                          style: { "height": "3.05em" }
                        }),
                        createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                          createBaseVNode("span", {
                            class: "mord mathnormal mtight",
                            style: { "margin-right": "0.03148em" }
                          }, "k")
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
                createBaseVNode("span", {
                  class: "mord mathnormal",
                  style: { "margin-right": "0.10903em" }
                }, "U"),
                createBaseVNode("span", { class: "msupsub" }, [
                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                    createBaseVNode("span", { class: "vlist-r" }, [
                      createBaseVNode("span", {
                        class: "vlist",
                        style: { "height": "0.3117em" }
                      }, [
                        createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "-0.109em", "margin-right": "0.05em" } }, [
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
        createTextVNode(" 为开集，从而开集的定义立即可以推出任意多个开集之并仍为开集.")
      ]),
      createBaseVNode("p", null, "(2) 利用集合的运算"),
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
                              createBaseVNode("mi", null, "A"),
                              createBaseVNode("mn", null, "1")
                            ]),
                            createBaseVNode("mo", null, "∪"),
                            createBaseVNode("mo", null, "⋯"),
                            createBaseVNode("mo", null, "∪"),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "A"),
                              createBaseVNode("mi", null, "k")
                            ]),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mi", null, "c")
                            ])
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
                            createBaseVNode("msubsup", null, [
                              createBaseVNode("mi", null, "A"),
                              createBaseVNode("mn", null, "1"),
                              createBaseVNode("mi", null, "c")
                            ]),
                            createBaseVNode("mo", null, "∩"),
                            createBaseVNode("mo", null, "⋯"),
                            createBaseVNode("mo", null, "∩"),
                            createBaseVNode("msubsup", null, [
                              createBaseVNode("mi", null, "A"),
                              createBaseVNode("mi", null, "k"),
                              createBaseVNode("mi", null, "c")
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
                          createBaseVNode("mrow", null, [
                            createBaseVNode("mo", { stretchy: "false" }, "("),
                            createBaseVNode("munder", null, [
                              createBaseVNode("mo", null, "⋂"),
                              createBaseVNode("mi", null, "α")
                            ]),
                            createBaseVNode("msub", null, [
                              createBaseVNode("mi", null, "A"),
                              createBaseVNode("mi", null, "α")
                            ]),
                            createBaseVNode("msup", null, [
                              createBaseVNode("mo", { stretchy: "false" }, ")"),
                              createBaseVNode("mi", null, "c")
                            ])
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
                            createBaseVNode("munder", null, [
                              createBaseVNode("mo", null, "⋃"),
                              createBaseVNode("mi", null, "α")
                            ]),
                            createBaseVNode("msubsup", null, [
                              createBaseVNode("mi", null, "A"),
                              createBaseVNode("mi", null, "α"),
                              createBaseVNode("mi", null, "c")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("annotation", { encoding: "application/x-tex" }, "\\begin{aligned} (A_1 \\cup \\cdots \\cup A_k)^c &= A_1^c \\cap \\cdots \\cap A_k^c \\\\\\\\ (\\bigcap_\\alpha A_\\alpha)^c &= \\bigcup_\\alpha A_\\alpha^c \\end{aligned} ")
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
                  style: { "height": "5.6em", "vertical-align": "-2.55em" }
                }),
                createBaseVNode("span", { class: "mord" }, [
                  createBaseVNode("span", { class: "mtable" }, [
                    createBaseVNode("span", { class: "col-align-r" }, [
                      createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                        createBaseVNode("span", { class: "vlist-r" }, [
                          createBaseVNode("span", {
                            class: "vlist",
                            style: { "height": "3.05em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-5.26em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.05em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "A"),
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
                                createBaseVNode("span", { class: "mbin" }, "∪"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "minner" }, "⋯"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∪"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "A"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.3361em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.55em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03148em" }
                                              }, "k")
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
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "c")
                                            ])
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-3.76em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.05em" }
                              }),
                              createBaseVNode("span", { class: "mord" })
                            ]),
                            createBaseVNode("span", { style: { "top": "-2.05em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.05em" }
                              }),
                              createBaseVNode("span", { class: "mord" }, [
                                createBaseVNode("span", { class: "mopen" }, "("),
                                createBaseVNode("span", { class: "mop op-limits" }, [
                                  createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.05em" }
                                      }, [
                                        createBaseVNode("span", { style: { "top": "-1.9em", "margin-left": "0em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", {
                                              class: "mord mathnormal mtight",
                                              style: { "margin-right": "0.0037em" }
                                            }, "α")
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", null, [
                                            createBaseVNode("span", { class: "mop op-symbol large-op" }, "⋂")
                                          ])
                                        ])
                                      ]),
                                      createBaseVNode("span", { class: "vlist-s" }, "​")
                                    ]),
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.25em" }
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "A"),
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
                                                style: { "margin-right": "0.0037em" }
                                              }, "α")
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
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "c")
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
                            style: { "height": "2.55em" }
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
                            style: { "height": "3.05em" }
                          }, [
                            createBaseVNode("span", { style: { "top": "-5.26em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.05em" }
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "A"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.7144em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.453em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mtight" }, "1")
                                            ])
                                          ]),
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "c")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.247em" }
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
                                createBaseVNode("span", { class: "mbin" }, "∩"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "minner" }, "⋯"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mbin" }, "∩"),
                                createBaseVNode("span", {
                                  class: "mspace",
                                  style: { "margin-right": "0.2222em" }
                                }),
                                createBaseVNode("span", { class: "mord" }, [
                                  createBaseVNode("span", { class: "mord mathnormal" }, "A"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.7144em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.453em", "margin-left": "0em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", {
                                                class: "mord mathnormal mtight",
                                                style: { "margin-right": "0.03148em" }
                                              }, "k")
                                            ])
                                          ]),
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "c")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.247em" }
                                        }, [
                                          createBaseVNode("span")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createBaseVNode("span", { style: { "top": "-2.05em" } }, [
                              createBaseVNode("span", {
                                class: "pstrut",
                                style: { "height": "3.05em" }
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
                                        createBaseVNode("span", { style: { "top": "-1.9em", "margin-left": "0em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                            createBaseVNode("span", {
                                              class: "mord mathnormal mtight",
                                              style: { "margin-right": "0.0037em" }
                                            }, "α")
                                          ])
                                        ]),
                                        createBaseVNode("span", { style: { "top": "-3.05em" } }, [
                                          createBaseVNode("span", {
                                            class: "pstrut",
                                            style: { "height": "3.05em" }
                                          }),
                                          createBaseVNode("span", null, [
                                            createBaseVNode("span", { class: "mop op-symbol large-op" }, "⋃")
                                          ])
                                        ])
                                      ]),
                                      createBaseVNode("span", { class: "vlist-s" }, "​")
                                    ]),
                                    createBaseVNode("span", { class: "vlist-r" }, [
                                      createBaseVNode("span", {
                                        class: "vlist",
                                        style: { "height": "1.25em" }
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
                                  createBaseVNode("span", { class: "mord mathnormal" }, "A"),
                                  createBaseVNode("span", { class: "msupsub" }, [
                                    createBaseVNode("span", { class: "vlist-t vlist-t2" }, [
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.7144em" }
                                        }, [
                                          createBaseVNode("span", { style: { "top": "-2.453em", "margin-left": "0em", "margin-right": "0.05em" } }, [
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
                                          ]),
                                          createBaseVNode("span", { style: { "top": "-3.113em", "margin-right": "0.05em" } }, [
                                            createBaseVNode("span", {
                                              class: "pstrut",
                                              style: { "height": "2.7em" }
                                            }),
                                            createBaseVNode("span", { class: "sizing reset-size6 size3 mtight" }, [
                                              createBaseVNode("span", { class: "mord mathnormal mtight" }, "c")
                                            ])
                                          ])
                                        ]),
                                        createBaseVNode("span", { class: "vlist-s" }, "​")
                                      ]),
                                      createBaseVNode("span", { class: "vlist-r" }, [
                                        createBaseVNode("span", {
                                          class: "vlist",
                                          style: { "height": "0.247em" }
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
                            style: { "height": "2.55em" }
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
      createBaseVNode("p", null, "及 (1) 即可.")
    ], -1),
    createStaticVNode('<p>为了刻画闭集，我们引入极限的概念，它是实数的数列极限概念的推广.</p><p><strong>定义2</strong> (极限)：</p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">{</mo><msub><mi>x</mi><mi>n</mi></msub><msubsup><mo stretchy="false">}</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi mathvariant="normal">∞</mi></msubsup></mrow><annotation encoding="application/x-tex">\\{x_n\\}_{n=1}^\\infty</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose"><span class="mclose">}</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-2.4519em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">∞</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2481em;"><span></span></span></span></span></span></span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>X</mi></mrow><annotation encoding="application/x-tex">X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> 中的点列，如果存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>∈</mo><mi>X</mi></mrow><annotation encoding="application/x-tex">x_0 \\in X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>，使得任给 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\varepsilon &gt; 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">ε</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，均存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo>=</mo><mi>N</mi><mo stretchy="false">(</mo><mi>ε</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">N = N(\\varepsilon)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mopen">(</span><span class="mord mathnormal">ε</span><span class="mclose">)</span></span></span></span>，当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mi>N</mi></mrow><annotation encoding="application/x-tex">n &gt; N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> 时，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mi>n</mi></msub><mo>∈</mo><msub><mi>B</mi><mi>ε</mi></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">x_n \\in B_\\varepsilon(x_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">ε</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">{</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\{x_n\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">}</span></span></span></span> 收敛到极限 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>，记为</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mspace width="1em"></mspace><mtext>or</mtext><mspace width="1em"></mspace><msub><mi>x</mi><mi>n</mi></msub><mo>→</mo><msub><mi>x</mi><mn>0</mn></msub><mtext> </mtext><mo stretchy="false">(</mo><mi>n</mi><mo>→</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\lim_{n \\to \\infty} x_n = x_0 \\quad \\text{or} \\quad x_n \\to x_0\\,(n \\to \\infty). </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3944em;vertical-align:-0.7em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6944em;"><span style="top:-2.4em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">→</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">lim</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:1em;"></span><span class="mord text"><span class="mord">or</span></span><span class="mspace" style="margin-right:1em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∞</span><span class="mclose">)</span><span class="mord">.</span></span></span></span></span></p></blockquote><p><strong>注意</strong>：</p><p>(1) <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mi>n</mi></msub><mo>∈</mo><msub><mi>B</mi><mi>ε</mi></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">x_n \\in B_\\varepsilon(x_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">ε</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> 可改写为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ρ</mi><mo stretchy="false">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo separator="true">,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mo>&lt;</mo><mi>ε</mi></mrow><annotation encoding="application/x-tex">\\rho(x_n,x_0) &lt; \\varepsilon</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">ε</span></span></span></span>，因此有</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mo>⟺</mo><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><mi>ρ</mi><mo stretchy="false">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo separator="true">,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mo>=</mo><mn>0.</mn></mrow><annotation encoding="application/x-tex">\\lim_{n \\to \\infty} x_n = x_0 \\Longleftrightarrow \\lim_{n \\to \\infty} \\rho(x_n,x_0) = 0. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3944em;vertical-align:-0.7em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6944em;"><span style="top:-2.4em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">→</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">lim</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.675em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⟺</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.45em;vertical-align:-0.7em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6944em;"><span style="top:-2.4em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">→</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">lim</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">ρ</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.</span></span></span></span></span></p><p>(2) 由三角不等式和 (1) 易见，极限如果存在，则必唯一.</p><p>极限也可以用开集来描述，它的好处是可以不涉及度量，从而便于推广到更一般的空间中.</p><p><strong>命题2</strong>：设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">{</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\{x_n\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">}</span></span></span></span> 为度量空间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>X</mi><mo separator="true">,</mo><mi>ρ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(X,\\rho)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">ρ</span><span class="mclose">)</span></span></span></span> 中的点列，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">{</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\{x_n\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">}</span></span></span></span> 收敛于 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 当且仅当任给 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 的开邻域 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi></mrow><annotation encoding="application/x-tex">U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span>，存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi></mrow><annotation encoding="application/x-tex">N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span>，当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mi>N</mi></mrow><annotation encoding="application/x-tex">n &gt; N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> 时 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mi>n</mi></msub><mo>∈</mo><mi>U</mi></mrow><annotation encoding="application/x-tex">x_n \\in U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span>.</p><blockquote><p>(必要性) 设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle scriptlevel="0" displaystyle="true"><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mstyle></mrow><annotation encoding="application/x-tex">\\displaystyle\\lim_{n \\to \\infty} x_n = x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3944em;vertical-align:-0.7em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6944em;"><span style="top:-2.4em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">→</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">lim</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi></mrow><annotation encoding="application/x-tex">U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 的一个开邻域. 于是存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\varepsilon &gt; 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">ε</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，使得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><mi>ε</mi></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><mi>U</mi></mstyle></mrow><annotation encoding="application/x-tex">B_\\varepsilon(x_0) \\displaystyle\\subset U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">ε</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span>. 根据极限的定义，存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo>=</mo><mi>N</mi><mo stretchy="false">(</mo><mi>ε</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">N = N(\\varepsilon)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mopen">(</span><span class="mord mathnormal">ε</span><span class="mclose">)</span></span></span></span>，当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mi>N</mi></mrow><annotation encoding="application/x-tex">n &gt; N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> 时</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>x</mi><mi>n</mi></msub><mo>∈</mo><msub><mi>B</mi><mi>ε</mi></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mo>⊂</mo><mi>U</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">x_n \\in B_\\varepsilon(x_0) \\subset U. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">ε</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mord">.</span></span></span></span></span></p><p>(充分性) 取 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi></mrow><annotation encoding="application/x-tex">U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span> 为开球即可.</p></blockquote><p><strong>命题3</strong>：集合 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 为闭集当且仅当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中任何收敛点列的极限仍在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中.</p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 为闭集，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">{</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy="false">}</mo><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><mi>A</mi></mstyle></mrow><annotation encoding="application/x-tex">\\{x_n\\} \\displaystyle\\subset A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">}</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>，且 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle scriptlevel="0" displaystyle="true"><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mstyle></mrow><annotation encoding="application/x-tex">\\displaystyle\\lim_{n \\to \\infty} x_n = x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3944em;vertical-align:-0.7em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6944em;"><span style="top:-2.4em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">→</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">lim</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>.</p><p>\\如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub><mo mathvariant="normal">∉</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">x_0 \\notin A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mord"><span class="mrel">∈</span></span><span class="mord vbox"><span class="thinbox"><span class="llap"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="inner"><span class="mord"><span class="mord">/</span><span class="mspace" style="margin-right:0.0556em;"></span></span></span><span class="fix"></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>，则存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>ε</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">\\varepsilon_0 &gt; 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">ε</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，使得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><msub><mi>ε</mi><mn>0</mn></msub></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><msup><mi>A</mi><mi>c</mi></msup></mstyle></mrow><annotation encoding="application/x-tex">B_{\\varepsilon_0}(x_0) \\displaystyle\\subset A^c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0001em;vertical-align:-0.2501em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ε</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7144em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span></span></span></span>，但 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle scriptlevel="0" displaystyle="true"><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mstyle></mrow><annotation encoding="application/x-tex">\\displaystyle\\lim_{n \\to \\infty} x_n = x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3944em;vertical-align:-0.7em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6944em;"><span style="top:-2.4em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">→</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">lim</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 意味着，存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo>=</mo><mi>N</mi><mo stretchy="false">(</mo><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">N = N(\\varepsilon_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">ε</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span> 使得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>&gt;</mo><mi>N</mi></mrow><annotation encoding="application/x-tex">n &gt; N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span> 时 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mi>n</mi></msub><mo>∈</mo><msub><mi>B</mi><msub><mi>ε</mi><mn>0</mn></msub></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">x_n \\in B_{\\varepsilon_0}(x_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0001em;vertical-align:-0.2501em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ε</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2501em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，这与 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mi>n</mi></msub><mo>∈</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">x_n \\in A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 相矛盾！因此 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>∈</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">x_0 \\in A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>.</p><p>反之，如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中任何收敛点列的极限仍在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中，则任取 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub><mo mathvariant="normal">∉</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">x_0 \\notin A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mord"><span class="mrel">∈</span></span><span class="mord vbox"><span class="thinbox"><span class="llap"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="inner"><span class="mord"><span class="mord">/</span><span class="mspace" style="margin-right:0.0556em;"></span></span></span><span class="fix"></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>，我们说明存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">n_0 &gt; 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> 使得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><mrow><mn>1</mn><mi mathvariant="normal">/</mi><msub><mi>n</mi><mn>0</mn></msub></mrow></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><msup><mi>A</mi><mi>c</mi></msup></mstyle></mrow><annotation encoding="application/x-tex">B_{1/n_0}(x_0) \\displaystyle\\subset A^c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1052em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1/</span><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3173em;"><span style="top:-2.357em;margin-left:0em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.143em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7144em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span></span></span></span>，即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>A</mi><mi>c</mi></msup></mrow><annotation encoding="application/x-tex">A^c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span></span></span></span> 为开集.</p><p>（反证法）如果不然，则对任意 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>⩾</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">n \\geqslant 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7733em;vertical-align:-0.1367em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel amsrm">⩾</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>，均有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>B</mi><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mi>n</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mo>∩</mo><mi>A</mi><mo mathvariant="normal">≠</mo><mi mathvariant="normal">∅</mi></mrow><annotation encoding="application/x-tex">B_{1/n}(x_0) \\cap A \\ne \\varnothing</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1052em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1/</span><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∩</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6633em;vertical-align:-0.0817em;"></span><span class="mord amsrm">∅</span></span></span></span>. 取 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mi>n</mi></msub><mo>∈</mo><msub><mi>B</mi><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mi>n</mi></mrow></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mo>∩</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">x_n \\in B_{1/n}(x_0) \\cap A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1052em;vertical-align:-0.3552em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.5198em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1/</span><span class="mord mathnormal mtight">n</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.3552em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∩</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle scriptlevel="0" displaystyle="true"><munder><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>n</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mstyle></mrow><annotation encoding="application/x-tex">\\displaystyle\\lim_{n \\to \\infty} x_n = x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.3944em;vertical-align:-0.7em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6944em;"><span style="top:-2.4em;margin-left:0em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mrel mtight">→</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span><span class="mop">lim</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>，这导出了矛盾.</p></blockquote><p><strong>PS</strong>. 这个命题可以用来解释闭集的属性：闭集关于求极限运算是封闭的.</p><p><strong>定义3</strong> (内点，外点，边界点)：</p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 为度量空间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>X</mi></mrow><annotation encoding="application/x-tex">X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> 的子集，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>∈</mo><mi>X</mi></mrow><annotation encoding="application/x-tex">x_0 \\in X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span>. 如果存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 的开邻域 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi></mrow><annotation encoding="application/x-tex">U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span>，使得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><mi>A</mi></mstyle></mrow><annotation encoding="application/x-tex">U \\displaystyle\\subset A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的内点，内点的全体记为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">int</mi><mo>⁡</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">\\operatorname{int}A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mop"><span class="mord mathrm">int</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">A</span></span></span></span> 或 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>A</mi><mo>˚</mo></mover></mrow><annotation encoding="application/x-tex">\\mathring{A}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9468em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9468em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.2361em;"><span class="mord">˚</span></span></span></span></span></span></span></span></span></span>，称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的内部；</p><p>如果存在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 的开邻域 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi></mrow><annotation encoding="application/x-tex">U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span>，使得 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><msup><mi>A</mi><mi>c</mi></msup></mstyle></mrow><annotation encoding="application/x-tex">U \\displaystyle\\subset A^c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7144em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span></span></span></span>，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的外点；</p><p>如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 的任意开邻域中都既有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中的点，也有不属于 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 中的点，则称 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的边界点，边界点的全体记为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∂</mi><mi>A</mi></mrow><annotation encoding="application/x-tex">\\partial A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">A</span></span></span></span>，称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的边界.</p></blockquote><p>从定义不难看出，内点集 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>A</mi><mo>˚</mo></mover></mrow><annotation encoding="application/x-tex">\\mathring{A}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9468em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.9468em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.2361em;"><span class="mord">˚</span></span></span></span></span></span></span></span></span></span> 是包含于 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的“最大”开集，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的外点就是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>A</mi><mi>c</mi></msup></mrow><annotation encoding="application/x-tex">A^c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span></span></span></span> 的内点，空间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>X</mi></mrow><annotation encoding="application/x-tex">X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> 可分解为</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>X</mi><mo>=</mo><mi mathvariant="normal">int</mi><mo>⁡</mo><mi>A</mi><mo>∪</mo><mi mathvariant="normal">∂</mi><mi>A</mi><mo>∪</mo><mi mathvariant="normal">int</mi><mo>⁡</mo><mo stretchy="false">(</mo><msup><mi>A</mi><mi>c</mi></msup><mo stretchy="false">)</mo><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">X = \\operatorname{int}A \\cup \\partial A \\cup \\operatorname{int}(A^c), </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mop"><span class="mord mathrm">int</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∪</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∪</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mord mathrm">int</span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mpunct">,</span></span></span></span></span></p><p>这个分解中的三个子集互不相交. 由此可得如下性质：</p><blockquote><p>(1). <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∂</mi><mi>A</mi></mrow><annotation encoding="application/x-tex">\\partial A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">A</span></span></span></span> 为闭集，这是因为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∂</mi><mi>A</mi><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">int</mi><mo>⁡</mo><mi>A</mi><mo>∪</mo><mi mathvariant="normal">int</mi><mo>⁡</mo><mo stretchy="false">(</mo><msup><mi>A</mi><mi>c</mi></msup><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mi>c</mi></msup></mrow><annotation encoding="application/x-tex">\\partial A = (\\operatorname{int}A \\cup \\operatorname{int}(A^c))^c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mop"><span class="mord mathrm">int</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∪</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mord mathrm">int</span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span></span></span></span>.</p><p>(2). <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">int</mi><mo>⁡</mo><mi>A</mi><mo>∪</mo><mi mathvariant="normal">∂</mi><mi>A</mi></mrow><annotation encoding="application/x-tex">\\operatorname{int}A \\cup \\partial A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mop"><span class="mord mathrm">int</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∪</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">A</span></span></span></span> 也是闭集，记为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding="application/x-tex">\\bar{A}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8201em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span></span></span></span>，称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的闭包. 闭包是闭集是因为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">int</mi><mo>⁡</mo><mo stretchy="false">(</mo><msup><mi>A</mi><mi>c</mi></msup><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mi>c</mi></msup></mrow><annotation encoding="application/x-tex">\\bar{A} = (\\operatorname{int}(A^c))^c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8201em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mop"><span class="mord mathrm">int</span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span></span></span></span>. 此外，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo>=</mo><mi>A</mi><mo>∪</mo><mi mathvariant="normal">∂</mi><mi>A</mi></mrow><annotation encoding="application/x-tex">\\bar{A} = A \\cup \\partial A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8201em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∪</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">A</span></span></span></span> 也成立. 这是因为，按定义显然有 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><mi>A</mi><mo>∪</mo><mi mathvariant="normal">∂</mi><mi>A</mi></mstyle></mrow><annotation encoding="application/x-tex">A \\displaystyle\\subset A \\cup \\partial A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∪</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">A</span></span></span></span>. 其次，如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>∈</mo><mi>A</mi><mo>∪</mo><mi mathvariant="normal">∂</mi><mi>A</mi></mrow><annotation encoding="application/x-tex">a \\in A \\cup \\partial A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∪</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">A</span></span></span></span>，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>∈</mo><mi>A</mi></mrow><annotation encoding="application/x-tex">a \\in A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 或 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>∈</mo><mi mathvariant="normal">∂</mi><mi>A</mi></mrow><annotation encoding="application/x-tex">a \\in \\partial A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">A</span></span></span></span>，总之 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> 不是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的外点，因此 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>∈</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding="application/x-tex">a \\in \\bar{A}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8201em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span></span></span></span>，即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>∪</mo><mi mathvariant="normal">∂</mi><mi>A</mi><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover></mstyle></mrow><annotation encoding="application/x-tex">A \\cup \\partial A \\displaystyle\\subset \\bar{A}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∪</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8201em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span></span></span></span> 也成立.</p><p>(3). <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 为闭集当且仅当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">∂</mi><mi>A</mi><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><mi>A</mi></mstyle></mrow><annotation encoding="application/x-tex">\\partial A \\displaystyle\\subset A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7335em;vertical-align:-0.0391em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>，即 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mo>=</mo><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding="application/x-tex">A = \\bar{A}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8201em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span></span></span></span>. 根据前一条性质，只要证明必要性就可以了. 事实上，如果 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 是闭集，则 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>A</mi><mi>c</mi></msup></mrow><annotation encoding="application/x-tex">A^c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span></span></span></span> 为开集，从而 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>A</mi><mi>c</mi></msup></mrow><annotation encoding="application/x-tex">A^c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span></span></span></span> 就是 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi></mrow><annotation encoding="application/x-tex">A</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 的全体外点，于是</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">int</mi><mo>⁡</mo><mo stretchy="false">(</mo><msup><mi>A</mi><mi>c</mi></msup><mo stretchy="false">)</mo><msup><mo stretchy="false">)</mo><mi>c</mi></msup><mo>=</mo><mo stretchy="false">(</mo><msup><mi>A</mi><mi>c</mi></msup><msup><mo stretchy="false">)</mo><mi>c</mi></msup><mo>=</mo><mi>A</mi><mi mathvariant="normal">.</mi></mrow><annotation encoding="application/x-tex">\\bar{A} = (\\operatorname{int}(A^c))^c = (A^c)^c = A. </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8201em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mop"><span class="mord mathrm">int</span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord">.</span></span></span></span></span></p><p>(4). 当 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>A</mi><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><mi>B</mi></mstyle></mrow><annotation encoding="application/x-tex">A \\displaystyle\\subset B</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span></span></span> 时，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><mover accent="true"><mi>B</mi><mo>ˉ</mo></mover></mstyle></mrow><annotation encoding="application/x-tex">\\bar{A} \\displaystyle\\subset \\bar{B}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8592em;vertical-align:-0.0391em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8201em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1667em;"><span class="mord">ˉ</span></span></span></span></span></span></span></span></span></span>. 这是因为，此时 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>A</mi><mi>c</mi></msup><mo>⊃</mo><msup><mi>B</mi><mi>c</mi></msup></mrow><annotation encoding="application/x-tex">A^c \\supset B^c</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊃</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">int</mi><mo>⁡</mo><mo stretchy="false">(</mo><msup><mi>A</mi><mi>c</mi></msup><mo stretchy="false">)</mo><mo>⊃</mo><mi mathvariant="normal">int</mi><mo>⁡</mo><mo stretchy="false">(</mo><msup><mi>B</mi><mi>c</mi></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\operatorname{int}(A^c) \\supset \\operatorname{int}(B^c)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mord mathrm">int</span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">A</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊃</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop"><span class="mord mathrm">int</span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">c</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>，从而 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mover accent="true"><mi>A</mi><mo>ˉ</mo></mover><mstyle scriptlevel="0" displaystyle="true"><mo>⊂</mo><mover accent="true"><mi>B</mi><mo>ˉ</mo></mover></mstyle></mrow><annotation encoding="application/x-tex">\\bar{A} \\displaystyle\\subset \\bar{B}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8592em;vertical-align:-0.0391em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal">A</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1111em;"><span class="mord">ˉ</span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⊂</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8201em;"></span><span class="mord accent"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8201em;"><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span></span><span style="top:-3.2523em;"><span class="pstrut" style="height:3em;"></span><span class="accent-body" style="left:-0.1667em;"><span class="mord">ˉ</span></span></span></span></span></span></span></span></span></span> 成立.</p></blockquote><p>考虑多元积分时，我们将要用到闭包和边界的上述性质.</p><p>作为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span> 的子集，有理数全体 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">Q</mi></mrow><annotation encoding="application/x-tex">\\mathbb{Q}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8556em;vertical-align:-0.1667em;"></span><span class="mord mathbb">Q</span></span></span></span> 既无内点，也无外点. 因此 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">Q</mi></mrow><annotation encoding="application/x-tex">\\mathbb{Q}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8556em;vertical-align:-0.1667em;"></span><span class="mord mathbb">Q</span></span></span></span> 的边界点为整个空间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="double-struck">R</mi></mrow><annotation encoding="application/x-tex">\\mathbb{R}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord mathbb">R</span></span></span></span>.</p><p><strong>欧氏空间 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">\\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span> 中开球的边界</strong>：</p><blockquote><p>设 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>∈</mo><msup><mi mathvariant="double-struck">R</mi><mi>n</mi></msup></mrow><annotation encoding="application/x-tex">x_0 \\in \\mathbb{R}^n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6891em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6889em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">n</span></span></span></span></span></span></span></span></span></span></span>，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">r &gt; 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>. 由于 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">{</mo><mi mathvariant="normal">∥</mi><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mi mathvariant="normal">∥</mi><mo>&lt;</mo><mi>r</mi><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\{\\|x - x_0\\| &lt; r\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">∥</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∥</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mclose">}</span></span></span></span> 和 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">{</mo><mi mathvariant="normal">∥</mi><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mi mathvariant="normal">∥</mi><mo>&gt;</mo><mi>r</mi><mo stretchy="false">}</mo></mrow><annotation encoding="application/x-tex">\\{\\|x - x_0\\| &gt; r\\}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">∥</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∥</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mclose">}</span></span></span></span> 均为开集，故</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="normal">∂</mi><msub><mi>B</mi><mi>r</mi></msub><mo stretchy="false">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">{</mo><mi mathvariant="normal">∥</mi><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mi mathvariant="normal">∥</mi><mo>=</mo><mi>r</mi><mo stretchy="false">}</mo><mo separator="true">,</mo></mrow><annotation encoding="application/x-tex">\\partial B_r(x_0) = \\{\\|x - x_0\\| = r\\}, </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0502em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">{</span><span class="mord">∥</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∥</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mclose">}</span><span class="mpunct">,</span></span></span></span></span></p><p>这个边界称为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">n - 1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 维球面（以 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>x</mi><mn>0</mn></msub></mrow><annotation encoding="application/x-tex">x_0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> 为中心，<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi></mrow><annotation encoding="application/x-tex">r</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span></span></span></span> 为半径）.</p></blockquote>', 23)
  ])]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('{"path":"/integral/integral-27/","title":"Lesson 27 连续映射 I","lang":"zh-CN","frontmatter":{"title":"Lesson 27 连续映射 I","permalink":"/integral/integral-27/","createTime":"2026/08/17 14:17:33","description":"从这一章开始我们要研究多个变量的函数. 实数集的基本性质对于一元实函数的各种性质都有决定性的影响. 因此，为了研究多个变量的函数，我们要首先研究它们的定义域的基本性质. Part 1 基本概念 · 内积与度量 定义1 (内积)： 设 X 是实数域 R 上的向量空间，如果映射 ​g=⟨,⟩:X×X→R(x,y)↦g(x,y)=⟨x,y⟩​ 满足以下条件：...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lesson 27 连续映射 I\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-08-17T07:22:27.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://soda-official.top/integral/integral-27/"}],["meta",{"property":"og:site_name","content":"soda-official"}],["meta",{"property":"og:title","content":"Lesson 27 连续映射 I"}],["meta",{"property":"og:description","content":"从这一章开始我们要研究多个变量的函数. 实数集的基本性质对于一元实函数的各种性质都有决定性的影响. 因此，为了研究多个变量的函数，我们要首先研究它们的定义域的基本性质. Part 1 基本概念 · 内积与度量 定义1 (内积)： 设 X 是实数域 R 上的向量空间，如果映射 ​g=⟨,⟩:X×X→R(x,y)↦g(x,y)=⟨x,y⟩​ 满足以下条件：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-08-17T07:22:27.000Z"}],["meta",{"property":"article:modified_time","content":"2026-08-17T07:22:27.000Z"}]]},"readingTime":{"minutes":10.83,"words":3249},"git":{"createdTime":1786951347000,"updatedTime":1786951347000,"contributors":[{"name":"nicostore-mathematica","username":"nicostore-mathematica","email":"nicostore.core@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/nicostore-mathematica?v=4","url":"https://github.com/nicostore-mathematica"}],"changelog":[{"hash":"44b2c35133fdda464519e8cf9f0db5f368774022","time":1786951347000,"email":"nicostore.core@outlook.com","author":"nicostore-mathematica","message":"notes re"}]},"autoDesc":true,"filePathRelative":"integral/integral-27.md","headers":[]}');
export {
  index_html as comp,
  data
};
