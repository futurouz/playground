var e = require("react"),
  n = require("@reach/auto-id"),
  t = require("goober"),
  r = require("react-simple-code-editor"),
  a = require("prism-react-renderer"),
  o = require("prism-react-renderer/themes/nightOwl"),
  i = require("@reach/tabs"),
  l = require("@agney/react-inspector"),
  u = require("lodash.merge");
function d(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var c,
  s = d(e),
  f = d(r),
  m = d(a),
  p = d(o),
  g = d(l),
  h = d(u);
function b() {
  return (b =
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
function v(e, n) {
  return n || (n = e.slice(0)), (e.raw = n), e;
}
var k,
  y,
  w,
  E,
  x,
  C,
  T,
  L,
  R,
  B,
  P,
  S = t.styled("div")(
    c ||
      (c = v([
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
  N = function (n) {
    var t = n.language,
      r = n.onChange;
    return s.default.createElement(
      S,
      null,
      s.default.createElement(f.default, {
        value: n.code,
        onValueChange: function (e) {
          return r(e, t);
        },
        style: { height: "100%" },
        highlight: function (n) {
          return s.default.createElement(
            m.default,
            Object.assign({}, a.defaultProps, {
              theme: p.default,
              code: n,
              language: t,
            }),
            function (n) {
              var t = n.getLineProps,
                r = n.getTokenProps;
              return s.default.createElement(
                e.Fragment,
                null,
                n.tokens.map(function (e, n) {
                  return s.default.createElement(
                    "div",
                    Object.assign({}, t({ line: e, key: n })),
                    e.map(function (e, n) {
                      return s.default.createElement(
                        "span",
                        Object.assign({}, r({ token: e, key: n }))
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
  O = function (e) {
    return "@media (max-width: " + e + "px)";
  },
  j = Object.freeze({
    custom: O,
    desktop: O(922),
    tablet: O(768),
    phone: O(576),
  }),
  q = t.styled(i.Tabs)(
    k ||
      (k = v([
        "\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  min-width: ",
        ";\n  background-color: white;\n\n  ",
        " {\n    width: 100% !important;\n  }\n",
      ])),
    function (e) {
      return e.theme.container.minWidth;
    },
    j.phone
  ),
  I = t.styled(i.TabList)(y || (y = v(["\n  background-color: #4b4b5c;\n"]))),
  M = t.styled(i.Tab)(
    w ||
      (w = v([
        "\n  border: none;\n  padding: 0.8em 0.5em;\n  color: ",
        ";\n\n  &[data-selected] {\n    border-bottom: 4px solid white;\n  }\n",
      ])),
    function (e) {
      return e.theme.tabs.tabHeader.color;
    }
  ),
  W = t.styled(i.TabPanels)(
    E || (E = v(["\n  flex: 1;\n\n  ", " {\n    height: ", ";\n  }\n"])),
    j.phone,
    function (e) {
      return e.theme.tabs.tabPanel.phoneHeight;
    }
  ),
  H = t.styled(i.TabPanel)(x || (x = v(["\n  height: 100%;\n"]))),
  U = t.styled(q)(C || (C = v(["\n  min-width: ", ";\n"])), function (e) {
    return e.theme.container.minWidth;
  }),
  D = function (n) {
    var t = n.code,
      r = n.defaultTab,
      a = n.onChange,
      o = n.width,
      i = e.useMemo(function () {
        return [
          { name: "HTML", value: "markup" },
          { name: "CSS", value: "css" },
          { name: "JS", value: "javascript" },
        ];
      }, []);
    return s.default.createElement(
      U,
      {
        defaultIndex: i.findIndex(function (e) {
          return e.value === r;
        }),
        style: { width: o },
      },
      s.default.createElement(
        I,
        null,
        i.map(function (e) {
          return s.default.createElement(M, { key: e.value }, e.name);
        })
      ),
      s.default.createElement(
        W,
        null,
        i.map(function (e) {
          return s.default.createElement(
            H,
            { key: e.value },
            s.default.createElement(N, {
              code: t[e.value],
              onChange: a,
              language: e.value,
            })
          );
        })
      )
    );
  },
  J = t.styled("div")(
    T ||
      (T = v([
        "\n  background-color: ",
        ";\n  height: 100%;\n\n  li {\n    font-size: 16px !important;\n  }\n",
      ])),
    function (e) {
      return e.theme.console.background;
    }
  ),
  F = function (e) {
    return s.default.createElement(
      J,
      null,
      e.logs.map(function (e, n) {
        return s.default.createElement(g.default, {
          data: e,
          key: n,
          theme: "chromeDark",
        });
      })
    );
  },
  z = t.styled("div")(
    L ||
      (L = v([
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
  A = function (e) {
    return s.default.createElement(
      z,
      null,
      s.default.createElement("p", null, e.error)
    );
  },
  $ = t.styled("div")(
    R ||
      (R = v([
        '\n  position: relative;\n  height: 100%;\n\n  &::after {\n    content: "";\n    display: inline-block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    top: 0;\n    left: 0;\n  }\n',
      ]))
  ),
  V = e.memo(function (n) {
    var t = n.id,
      r = n.snippet,
      a = n.transformJs,
      o = n.presets,
      i = e.useState(""),
      l = i[0],
      u = i[1],
      d = e.useState(null),
      c = d[0],
      f = d[1];
    return (
      e.useMemo(
        function () {
          try {
            var e = (function (e, n, t, r) {
              var a = e.javascript;
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
                    encodeURI(a) +
                    "`), {\n            plugins: ['unpkg'],\n            presets: " +
                    JSON.stringify(r) +
                    '  \n          }).code;\n          const script = document.createElement("script");\n          script.type = "module";\n          script.innerHTML = code;\n          document.body.appendChild(script);\n        </script>\n      '
                  : "\n        <script>\n          " +
                    a +
                    "\n        </script>\n      ") +
                "\n    </body>\n    </html>\n  "
              );
            })(r, t, a, o);
            u(e), f(null);
          } catch (e) {
            f(e.message);
          }
        },
        [r, a]
      ),
      e.useEffect(
        function () {
          "undefined" != typeof window &&
            window.addEventListener("message", function (e) {
              e.data.source === "frame-" + t &&
                "error" === e.data.message.type &&
                f(e.data.message.data);
            });
        },
        [t]
      ),
      s.default.createElement(
        $,
        null,
        s.default.createElement("iframe", {
          height: "100%",
          width: "100%",
          title: "example",
          frameBorder: "0",
          srcDoc: l,
        }),
        c && s.default.createElement(A, { error: c })
      )
    );
  }),
  X = function (n) {
    var t = n.id,
      r = n.snippet,
      a = n.presets,
      o = n.defaultTab,
      i = n.transformJs,
      l = n.width,
      u = e.useState([]),
      d = u[0],
      c = u[1],
      f = e.useMemo(function () {
        return [
          { name: "Result", value: "result" },
          { name: "Console", value: "console" },
        ];
      }, []);
    return (
      e.useEffect(
        function () {
          "undefined" != typeof window &&
            window.addEventListener("message", function (e) {
              e.data.source === "frame-" + t &&
                "log" === e.data.message.type &&
                c(function (n) {
                  return [].concat(n, e.data.message.data);
                });
            });
        },
        [t]
      ),
      s.default.createElement(
        q,
        {
          defaultIndex: f.findIndex(function (e) {
            return e.value === o;
          }),
          style: { width: l },
        },
        s.default.createElement(
          W,
          null,
          s.default.createElement(
            H,
            null,
            s.default.createElement(V, {
              id: t,
              snippet: r,
              transformJs: i,
              presets: a,
            })
          ),
          s.default.createElement(
            H,
            null,
            s.default.createElement(F, { logs: d })
          )
        )
      )
    );
  },
  _ = {
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
  Y = {
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
  G = {
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
  K = e.createContext(G),
  Q = function () {
    return e.useContext(K);
  };
function Z(n) {
  var t = n.mode,
    r = n.userTheme,
    a = n.children,
    o = e.useState(G),
    i = o[0],
    l = o[1];
  return (
    e.useEffect(
      function () {
        l(
          (function (e) {
            return (
              void 0 === e && (e = "light"), h.default(G, "light" === e ? _ : Y)
            );
          })(t)
        );
      },
      [t]
    ),
    s.default.createElement(K.Provider, { value: null != r ? r : i }, a)
  );
}
var ee,
  ne = t.styled(
    "div",
    e.forwardRef
  )(B || (B = v(["\n  display: flex;\n  align-items: stretch;\n"]))),
  te = t.styled(
    "div",
    e.forwardRef
  )(
    P ||
      (P = v([
        "\n  width: 10px;\n  cursor: col-resize;\n  background-color: #4b4b5c;\n",
      ]))
  );
t.setup(e.createElement, void 0, Q);
var re = t.styled(function (n) {
  var t = n.className,
    r = void 0 === t ? "" : t,
    a = n.leftChild,
    o = n.rightChild,
    i = e.useRef(null),
    l = e.useRef(null),
    u = (function (n) {
      var t = n.containerRef,
        r = n.dividerRef,
        a = n.dividerWidth,
        o = e.useState(0),
        i = o[0],
        l = o[1],
        u = e.useState(null),
        d = u[0],
        c = u[1];
      e.useEffect(function () {
        var e = t.current;
        if (e) {
          var n = e.clientWidth,
            r = e.getBoundingClientRect();
          c(r), l(n / 2);
        }
      }, []);
      var s = e.useCallback(
          function (e) {
            d && l(e.clientX - d.left);
          },
          [d]
        ),
        f = e.useCallback(
          function () {
            document.removeEventListener("mousemove", s),
              document.removeEventListener("mouseup", f);
          },
          [s]
        ),
        m = e.useCallback(
          function () {
            document.addEventListener("mousemove", s),
              document.addEventListener("mouseup", f);
          },
          [s, f]
        );
      return (
        e.useEffect(
          function () {
            var e = r.current;
            return (
              e && e.addEventListener("mousedown", m),
              function () {
                e && e.removeEventListener("mousedown", m);
              }
            );
          },
          [m]
        ),
        { leftWidth: i, rightWidth: d ? d.width - i - a : 0 }
      );
    })({ containerRef: i, dividerRef: l, dividerWidth: Q().divider.width }),
    d = u.rightWidth;
  return s.default.createElement(
    ne,
    { className: r, ref: i },
    a(u.leftWidth),
    s.default.createElement(te, { ref: l }),
    o(d)
  );
})(
  ee ||
    (ee = v([
      "\n  display: flex;\n  border: 12px solid #4b4b5c;\n  border-radius: 6px;\n  min-height: 300px;\n\n  ",
      " {\n    flex-direction: column;\n  }\n",
    ])),
  j.phone
);
module.exports = function (t) {
  var r = t.id,
    a = t.defaultEditorTab,
    o = void 0 === a ? "markup" : a,
    i = t.defaultResultTab,
    l = void 0 === i ? "result" : i,
    u = t.transformJs,
    d = void 0 !== u && u,
    c = t.presets,
    f = void 0 === c ? [] : c,
    m = t.theme,
    p = t.mode,
    g = void 0 === p ? "light" : p,
    h = e.useState(t.initialSnippet),
    v = h[0],
    k = h[1],
    y = n.useId(r),
    w = function (e, n) {
      k(function (t) {
        var r;
        return b({}, t, (((r = {})[n] = e), r));
      });
    };
  return s.default.createElement(
    Z,
    { userTheme: m, mode: g },
    s.default.createElement(
      "div",
      { className: "playground" },
      s.default.createElement(re, {
        leftChild: function (e) {
          return s.default.createElement(D, {
            width: e,
            code: v,
            defaultTab: o,
            onChange: w,
          });
        },
        rightChild: function (e) {
          return s.default.createElement(X, {
            width: e,
            id: y,
            snippet: v,
            defaultTab: l,
            transformJs: d,
            presets: f,
          });
        },
      })
    )
  );
};
//# sourceMappingURL=playground.js.map
