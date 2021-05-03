import e, {
  Fragment as n,
  useMemo as t,
  memo as r,
  useState as o,
  useEffect as a,
  useContext as i,
  createContext as c,
  useCallback as l,
  forwardRef as d,
  useRef as u,
  createElement as s,
} from "react";
import { useId as m } from "@reach/auto-id";
import { styled as f, setup as p } from "goober";
import g from "react-simple-code-editor";
import h, { defaultProps as b } from "prism-react-renderer";
import v from "prism-react-renderer/themes/nightOwl";
import {
  Tabs as k,
  TabList as w,
  Tab as E,
  TabPanels as y,
  TabPanel as x,
} from "@reach/tabs";
import C from "@agney/react-inspector";
import L from "lodash.merge";
function T() {
  return (T =
    Object.assign ||
    function (e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      }
      return e;
    }).apply(this, arguments);
}
function B(e, n) {
  return n || (n = e.slice(0)), (e.raw = n), e;
}
var R,
  N,
  O,
  W,
  j,
  H,
  I,
  P,
  U,
  D,
  J,
  M,
  z = f("div")(
    R ||
      (R = B([
        "\n  background-color: ",
        ";\n  color: ",
        ";\n  overflow-y: auto !important;\n  font-family: ",
        ";\n  font-feature-settings: normal;\n  height: 100%;\n",
      ])),
    function (e) {
      return e.theme.editor.backgroundColor;
    },
    function (e) {
      return e.theme.editor.color;
    },
    function (e) {
      return e.theme.editor.fontFamily;
    }
  ),
  F = function (t) {
    var r = t.language,
      o = t.onChange;
    return e.createElement(
      z,
      null,
      e.createElement(g, {
        value: t.code,
        onValueChange: function (e) {
          return o(e, r);
        },
        style: { height: "100%" },
        highlight: function (t) {
          return e.createElement(
            h,
            Object.assign({}, b, { theme: v, code: t, language: r }),
            function (t) {
              var r = t.getLineProps,
                o = t.getTokenProps;
              return e.createElement(
                n,
                null,
                t.tokens.map(function (n, t) {
                  return e.createElement(
                    "div",
                    Object.assign({}, r({ line: n, key: t })),
                    n.map(function (n, t) {
                      return e.createElement(
                        "span",
                        Object.assign({}, o({ token: n, key: t }))
                      );
                    })
                  );
                })
              );
            }
          );
        },
        padding: 10,
      })
    );
  },
  S = function (e) {
    return "@media (max-width: " + e + "px)";
  },
  A = Object.freeze({
    custom: S,
    desktop: S(922),
    tablet: S(768),
    phone: S(576),
  }),
  $ = f(k)(
    N ||
      (N = B([
        "\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  min-width: ",
        ";\n  background-color: white;\n\n  ",
        " {\n    width: 100% !important;\n  }\n",
      ])),
    function (e) {
      return e.theme.container.minWidth;
    },
    A.phone
  ),
  V = f(w)(O || (O = B(["\n  background-color: #4b4b5c;\n"]))),
  X = f(E)(
    W ||
      (W = B([
        "\n  border: none;\n  padding: 0.8em 0.5em;\n  color: ",
        ";\n\n  &[data-selected] {\n    border-bottom: 4px solid white;\n  }\n",
      ])),
    function (e) {
      return e.theme.tabs.tabHeader.color;
    }
  ),
  _ = f(y)(
    j || (j = B(["\n  flex: 1;\n\n  ", " {\n    height: ", ";\n  }\n"])),
    A.phone,
    function (e) {
      return e.theme.tabs.tabPanel.phoneHeight;
    }
  ),
  q = f(x)(H || (H = B(["\n  height: 100%;\n"]))),
  Y = f($)(I || (I = B(["\n  min-width: ", ";\n"])), function (e) {
    return e.theme.container.minWidth;
  }),
  G = function (n) {
    var r = n.code,
      o = n.defaultTab,
      a = n.onChange,
      i = n.width,
      c = t(function () {
        return [
          { name: "HTML", value: "markup" },
          { name: "CSS", value: "css" },
          { name: "JS", value: "javascript" },
        ];
      }, []);
    return e.createElement(
      Y,
      {
        defaultIndex: c.findIndex(function (e) {
          return e.value === o;
        }),
        style: { width: i },
      },
      e.createElement(
        V,
        null,
        c.map(function (n) {
          return e.createElement(X, { key: n.value }, n.name);
        })
      ),
      e.createElement(
        _,
        null,
        c.map(function (n) {
          return e.createElement(
            q,
            { key: n.value },
            e.createElement(F, {
              code: r[n.value],
              onChange: a,
              language: n.value,
            })
          );
        })
      )
    );
  },
  K = f("div")(
    P ||
      (P = B([
        "\n  background-color: ",
        ";\n  height: 100%;\n\n  li {\n    font-size: 16px !important;\n  }\n",
      ])),
    function (e) {
      return e.theme.console.background;
    }
  ),
  Q = function (n) {
    return e.createElement(
      K,
      null,
      n.logs.map(function (n, t) {
        return e.createElement(C, { data: n, key: t, theme: "chromeDark" });
      })
    );
  },
  Z = f("div")(
    U ||
      (U = B([
        "\n  background-color: ",
        ";\n  color: ",
        ";\n  padding: 0.2em 0.5em;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  box-sizing: border-box;\n",
      ])),
    function (e) {
      return e.theme.error.background;
    },
    function (e) {
      return e.theme.error.color;
    }
  ),
  ee = function (n) {
    return e.createElement(Z, null, e.createElement("p", null, n.error));
  },
  ne = f("div")(
    D ||
      (D = B([
        '\n  position: relative;\n  height: 100%;\n\n  &::after {\n    content: "";\n    display: inline-block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    top: 0;\n    left: 0;\n  }\n',
      ]))
  ),
  te = r(function (n) {
    var r = n.id,
      i = n.snippet,
      c = n.transformJs,
      l = n.presets,
      d = o(""),
      u = d[0],
      s = d[1],
      m = o(null),
      f = m[0],
      p = m[1];
    return (
      t(
        function () {
          try {
            var e = (function (e, n, t, r) {
              var o = e.javascript;
              return (
                '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8"/>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>\n      <title>Document</title>\n      <style>' +
                e.css +
                "</style>\n    </head>\n    <body>\n      " +
                e.markup +
                "\n      <span></span>\n      <script>\n        var _privateLog = console.log;\n        console.log = function(...rest) {\n          if(typeof window !== 'undefined') {\n            window.parent.postMessage({\n              source: \"frame-" +
                n +
                '",\n              message: {\n                type: "log",\n                data: rest\n              },\n            }, "*");\n          }\n          _privateLog.apply(console, arguments);\n        }\n        window.onerror = function(message) {\n          if(typeof window !== \'undefined\') {\n            window.parent.postMessage({\n              source: "frame-' +
                n +
                '",\n              message: {\n                type: "error",\n                data: message\n              },\n            }, "*");\n          }\n        }\n      </script>\n      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>\n      ' +
                (t
                  ? '\n        <script type="module">\n          const BareIdentifierFormat = /^((?:@[^\\/]+\\/)?[^\\/]+)(\\/.*)?$/\n\n          function validUrl(url) {\n            try {\n              new URL(url);\n              return true;\n            } catch(err) {\n              return false;\n            }\n          }\n\n          function unpkg(dependencies = {}) {\n            return {\n              visitor: {\n                "ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration"(path) {\n                  if (\n                    !path.node.source || // Probably a variable declaration\n                    validUrl(path.node.source.value) || // Valid URL\n                    path.node.source.value.substr(0, 2) === "//" || // URL w/o protocol\n                    [".", "/"].indexOf(path.node.source.value.charAt(0)) >= 0 // Local path\n                  )\n                    return; // Leave it alone\n\n                  // A "bare" identifier\n                  const match = BareIdentifierFormat.exec(path.node.source.value);\n                  const packageName = match[1];\n                  const file = match[2] || "";\n\n                  console.warn(\n                    dependencies[packageName],\n                    \'Missing version for package "%s" in dependencies; falling back to "latest"\',\n                    packageName\n                  );\n\n                  const version = dependencies[packageName] || "latest";\n\n                  path.node.source.value = `https://unpkg.com/${packageName}@${version}${file}?module`;\n                }\n              }\n            };\n          }\n\n          Babel.registerPlugin(\'unpkg\', unpkg);\n\n          const code = Babel.transform(decodeURI(`' +
                    encodeURI(o) +
                    "`), {\n            plugins: ['unpkg'],\n            presets: " +
                    JSON.stringify(r) +
                    '  \n          }).code;\n          const script = document.createElement("script");\n          script.type = "module";\n          script.innerHTML = code;\n          document.body.appendChild(script);\n        </script>\n      '
                  : "\n        <script>\n          " +
                    o +
                    "\n        </script>\n      ") +
                "\n    </body>\n    </html>\n  "
              );
            })(i, r, c, l);
            s(e), p(null);
          } catch (e) {
            p(e.message);
          }
        },
        [i, c]
      ),
      a(
        function () {
          "undefined" != typeof window &&
            window.addEventListener("message", function (e) {
              e.data.source === "frame-" + r &&
                "error" === e.data.message.type &&
                p(e.data.message.data);
            });
        },
        [r]
      ),
      e.createElement(
        ne,
        null,
        e.createElement("iframe", {
          height: "100%",
          width: "100%",
          title: "example",
          frameBorder: "0",
          srcDoc: u,
          loading: "lazy",
        }),
        f && e.createElement(ee, { error: f })
      )
    );
  }),
  re = function (n) {
    var r = n.id,
      i = n.snippet,
      c = n.presets,
      l = n.defaultTab,
      d = n.transformJs,
      u = n.width,
      s = o([]),
      m = s[0],
      f = s[1],
      p = t(function () {
        return [
          { name: "Result", value: "result" },
          { name: "Console", value: "console" },
        ];
      }, []);
    return (
      a(
        function () {
          "undefined" != typeof window &&
            window.addEventListener("message", function (e) {
              e.data.source === "frame-" + r &&
                "log" === e.data.message.type &&
                f(function (n) {
                  return [].concat(n, e.data.message.data);
                });
            });
        },
        [r]
      ),
      e.createElement(
        $,
        {
          defaultIndex: p.findIndex(function (e) {
            return e.value === l;
          }),
          style: { width: u },
        },
        e.createElement(
          _,
          null,
          e.createElement(
            q,
            null,
            e.createElement(te, {
              id: r,
              snippet: i,
              transformJs: d,
              presets: c,
            })
          ),
          e.createElement(q, null, e.createElement(Q, { logs: m }))
        )
      )
    );
  },
  oe = {
    container: { borderColor: "rgba(0, 0, 0, 0.3)" },
    error: { background: "#e74c3c", color: "#ffffff" },
    console: { background: "rgba(0, 0, 0, 1)" },
    divider: { background: "#202020" },
    editor: { backgroundColor: "#000000", color: "#ffffff" },
    tabs: {
      tabHeader: {
        background: "transparent",
        color: "#000000",
        borderBottom: "0.1em solid rgba(0, 0, 0, 0.1)",
      },
    },
  },
  ae = {
    container: { borderColor: "rgba(255, 255, 255, 0.4)" },
    error: { background: "#e74c3c", color: "#ffffff" },
    console: { background: "rgba(0, 0, 0, 1)" },
    divider: { background: "rgba(255, 255, 255, 0.5)" },
    editor: { backgroundColor: "#000000", color: "#ffffff" },
    tabs: {
      tabHeader: {
        background: "rgba(1, 21, 21, 0.8)",
        panelBackground: "rgb(1, 21, 21)",
        color: "#ffffff",
        borderBottom: "0.1em solid rgba(255, 255, 255, 0.4)",
      },
      selectedTab: { borderBottom: "0.2em solid rgb(255, 255, 255)" },
    },
  },
  ie = {
    container: { borderColor: "", minHeight: "20em", minWidth: "15em" },
    error: { background: "", color: "" },
    console: { background: "rgba(0, 0, 0, 1)" },
    divider: { width: 2, background: "" },
    editor: {
      fontFamily:
        "Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace",
      backgroundColor: "",
      color: "",
    },
    tabs: {
      tabHeader: {
        borderBottom: "",
        panelBackground: "",
        background: "",
        color: "",
      },
      tabPanel: { phoneHeight: "10em" },
      selectedTab: { background: "", borderBottom: "0.2em solid rgb(0, 0, 0)" },
    },
  },
  ce = c(ie),
  le = function () {
    return i(ce);
  };
function de(n) {
  var t = n.mode,
    r = n.userTheme,
    i = n.children,
    c = o(ie),
    l = c[0],
    d = c[1];
  return (
    a(
      function () {
        d(
          (function (e) {
            return (
              void 0 === e && (e = "light"), L(ie, "light" === e ? oe : ae)
            );
          })(t)
        );
      },
      [t]
    ),
    e.createElement(ce.Provider, { value: null != r ? r : l }, i)
  );
}
var ue,
  se = f(
    "div",
    d
  )(J || (J = B(["\n  display: flex;\n  align-items: stretch;\n"]))),
  me = f(
    "div",
    d
  )(
    M ||
      (M = B([
        "\n  width: 10px;\n  cursor: col-resize;\n  background-color: #4b4b5c;\n",
      ]))
  );
p(s, void 0, le);
var fe = f(function (n) {
  var t = n.className,
    r = void 0 === t ? "" : t,
    i = n.leftChild,
    c = n.rightChild,
    d = u(null),
    s = u(null),
    m = (function (e) {
      var n = e.containerRef,
        t = e.dividerRef,
        r = e.dividerWidth,
        i = o(0),
        c = i[0],
        d = i[1],
        u = o(null),
        s = u[0],
        m = u[1];
      a(function () {
        var e = n.current;
        if (e) {
          var t = e.clientWidth,
            r = e.getBoundingClientRect();
          m(r), d(t / 2);
        }
      }, []);
      var f = l(
          function (e) {
            s && d(e.clientX - s.left);
          },
          [s]
        ),
        p = l(
          function () {
            document.removeEventListener("mousemove", f),
              document.removeEventListener("mouseup", p);
          },
          [f]
        ),
        g = l(
          function () {
            document.addEventListener("mousemove", f),
              document.addEventListener("mouseup", p);
          },
          [f, p]
        );
      return (
        a(
          function () {
            var e = t.current;
            return (
              e && e.addEventListener("mousedown", g),
              function () {
                e && e.removeEventListener("mousedown", g);
              }
            );
          },
          [g]
        ),
        { leftWidth: c, rightWidth: s ? s.width - c - r : 0 }
      );
    })({ containerRef: d, dividerRef: s, dividerWidth: le().divider.width }),
    f = m.rightWidth;
  return e.createElement(
    se,
    { className: r, ref: d },
    i(m.leftWidth),
    e.createElement(me, { ref: s }),
    c(f)
  );
})(
  ue ||
    (ue = B([
      "\n  display: flex;\n  border: 12px solid #4b4b5c;\n  border-radius: 6px;\n  min-height: 300px;\n\n  ",
      " {\n    flex-direction: column;\n  }\n",
    ])),
  A.phone
);
export default function (n) {
  var t = n.id,
    r = n.defaultEditorTab,
    a = void 0 === r ? "markup" : r,
    i = n.defaultResultTab,
    c = void 0 === i ? "result" : i,
    l = n.transformJs,
    d = void 0 !== l && l,
    u = n.presets,
    s = void 0 === u ? [] : u,
    f = n.theme,
    p = n.mode,
    g = void 0 === p ? "light" : p,
    h = o(n.initialSnippet),
    b = h[0],
    v = h[1],
    k = m(t),
    w = function (e, n) {
      v(function (t) {
        var r;
        return T({}, t, (((r = {})[n] = e), r));
      });
    };
  return e.createElement(
    de,
    { userTheme: f, mode: g },
    e.createElement(
      "div",
      { className: "playground" },
      e.createElement(fe, {
        leftChild: function (n) {
          return e.createElement(G, {
            width: n,
            code: b,
            defaultTab: a,
            onChange: w,
          });
        },
        rightChild: function (n) {
          return e.createElement(re, {
            width: n,
            id: k,
            snippet: b,
            defaultTab: c,
            transformJs: d,
            presets: s,
          });
        },
      })
    )
  );
}
//# sourceMappingURL=playground.module.js.map
