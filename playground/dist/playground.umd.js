!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n(
        require("react"),
        require("@reach/auto-id"),
        require("goober"),
        require("react-simple-code-editor"),
        require("prism-react-renderer"),
        require("prism-react-renderer/themes/nightOwl"),
        require("@reach/tabs"),
        require("@agney/react-inspector"),
        require("lodash.merge")
      ))
    : "function" == typeof define && define.amd
    ? define([
        "react",
        "@reach/auto-id",
        "goober",
        "react-simple-code-editor",
        "prism-react-renderer",
        "prism-react-renderer/themes/nightOwl",
        "@reach/tabs",
        "@agney/react-inspector",
        "lodash.merge",
      ], n)
    : ((e || self).playground = n(
        e.react,
        e.autoId,
        e.goober,
        e.reactSimpleCodeEditor,
        e.prismReactRenderer,
        e.theme$1,
        e.tabs,
        e.Inspector,
        e.merge
      ));
})(this, function (e, n, t, r, a, o, i, d, l) {
  function u(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var c,
    s = u(e),
    f = u(r),
    m = u(a),
    p = u(o),
    g = u(d),
    h = u(l);
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
  var w,
    E,
    y,
    k,
    x,
    C,
    T,
    L,
    R,
    B,
    S = t.styled("div")(
      c ||
        (c = v([
          "\n  background-color: #252530;\n  overflow-y: auto;\n  font-feature-settings: normal;\n  width: 100%;\n  height: 100%;\n\n  textarea {\n    caret-color: white;\n  }\n",
        ]))
    ),
    I = function (n) {
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
    N = t.styled(i.Tabs)(
      w ||
        (w = v([
          "\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  min-width: 200px;\n  min-height: 350px;\n  background: #252530;\n\n  ",
          " {\n    min-width: 100% !important;\n    min-height: 100%;\n  }\n",
        ])),
      j.phone
    ),
    P = t.styled(i.TabList)(E || (E = v(["\n  background-color: #252530;\n"]))),
    q = t.styled(i.Tab)(
      y ||
        (y = v([
          "\n  border: none;\n  padding: 8px 5px;\n  color: gray;\n\n  &[data-selected] {\n    color: lightgray;\n    font-weight: 600;\n  }\n",
        ]))
    ),
    M = t.styled(i.TabPanels)(
      k || (k = v(["\n  flex: 1 1 0%;\n  overflow: auto;\n"]))
    ),
    U = t.styled(i.TabPanel)(
      x || (x = v(["\n  height: 100%;\n  width: 100%;\n"]))
    ),
    W = function (n) {
      var t = n.code,
        r = n.defaultTab,
        a = n.excludeEditorTabs,
        o = n.onChange,
        i = n.width,
        d = e.useMemo(
          function () {
            return [
              { name: "HTML", value: "markup" },
              { name: "CSS", value: "css" },
              { name: "JS", value: "javascript" },
            ].filter(function (e) {
              return a.find(function (n) {
                return n !== e.value;
              });
            });
          },
          [a]
        );
      return s.default.createElement(
        N,
        {
          defaultIndex: d.findIndex(function (e) {
            return e.value === r;
          }),
          style: { width: i },
        },
        s.default.createElement(
          P,
          null,
          d.map(function (e) {
            return s.default.createElement(q, { key: e.value }, e.name);
          })
        ),
        s.default.createElement(
          M,
          null,
          d.map(function (e) {
            return s.default.createElement(
              U,
              { key: e.value },
              s.default.createElement(I, {
                code: t[e.value],
                onChange: o,
                language: e.value,
              })
            );
          })
        )
      );
    },
    D = t.styled("div")(
      C ||
        (C = v([
          "\n  background-color: black;\n  color: white;\n  height: 100%;\n\n  li {\n    font-size: 16px !important;\n  }\n",
        ]))
    ),
    H = function (e) {
      return s.default.createElement(
        D,
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
    J = t.styled("div")(
      T ||
        (T = v([
          "\n  color: white;\n  padding: 0.2em 0.5em;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  box-sizing: border-box;\n  background: #e63946;\n",
        ]))
    ),
    z = function (e) {
      return s.default.createElement(
        J,
        null,
        s.default.createElement("p", null, e.error)
      );
    },
    F = t.styled("div")(
      L ||
        (L = v([
          "\n  position: relative;\n  height: 100%;\n  background: white;\n  border-radius: 8px;\n\n  iframe {\n    pointer-events: none;\n  }\n",
        ]))
    ),
    $ = e.memo(function (n) {
      var t = n.id,
        r = n.snippet,
        a = n.transformJs,
        o = n.presets,
        i = e.useState(""),
        d = i[0],
        l = i[1],
        u = e.useState(null),
        c = u[0],
        f = u[1];
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
              l(e), f(null);
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
          F,
          null,
          s.default.createElement("iframe", {
            height: "100%",
            width: "100%",
            title: "example",
            frameBorder: "0",
            srcDoc: d,
          }),
          c && s.default.createElement(z, { error: c })
        )
      );
    }),
    A = function (n) {
      var t = n.id,
        r = n.snippet,
        a = n.presets,
        o = n.defaultTab,
        i = n.excludeTabs,
        d = n.transformJs,
        l = n.width,
        u = e.useState([]),
        c = u[0],
        f = u[1],
        m = e.useMemo(
          function () {
            return [
              { name: "Result", value: "result" },
              { name: "Console", value: "console" },
            ].filter(function (e) {
              return i.find(function (n) {
                return n !== e.value;
              });
            });
          },
          [i]
        );
      return (
        e.useEffect(
          function () {
            "undefined" != typeof window &&
              window.addEventListener("message", function (e) {
                e.data.source === "frame-" + t &&
                  "log" === e.data.message.type &&
                  f(function (n) {
                    return [].concat(n, e.data.message.data);
                  });
              });
          },
          [t]
        ),
        s.default.createElement(
          N,
          {
            defaultIndex: m.findIndex(function (e) {
              return e.value === o;
            }),
            style: { width: l },
          },
          s.default.createElement(
            P,
            null,
            m.map(function (e) {
              return s.default.createElement(q, { key: e.value }, e.name);
            })
          ),
          s.default.createElement(
            M,
            null,
            s.default.createElement(
              U,
              null,
              s.default.createElement($, {
                id: t,
                snippet: r,
                transformJs: d,
                presets: a,
              })
            ),
            s.default.createElement(
              U,
              null,
              s.default.createElement(H, { logs: c })
            )
          )
        )
      );
    },
    V = {
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
    X = {
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
    _ = {
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
        selectedTab: {
          background: "",
          borderBottom: "0.2em solid rgb(0, 0, 0)",
        },
      },
    },
    Y = e.createContext(_),
    G = function () {
      return e.useContext(Y);
    };
  function K(n) {
    var t = n.mode,
      r = n.userTheme,
      a = n.children,
      o = e.useState(_),
      i = o[0],
      d = o[1];
    return (
      e.useEffect(
        function () {
          d(
            (function (e) {
              return (
                void 0 === e && (e = "light"),
                h.default(_, "light" === e ? V : X)
              );
            })(t)
          );
        },
        [t]
      ),
      s.default.createElement(Y.Provider, { value: null != r ? r : i }, a)
    );
  }
  var Q = t.styled("div", e.forwardRef)(
      R ||
        (R = v([
          "\n  display: flex;\n  border: 16px solid #252530;\n  border-radius: 8px;\n\n  ",
          " {\n    flex-direction: column;\n  }\n",
        ])),
      j.phone
    ),
    Z = t.styled(
      "div",
      e.forwardRef
    )(
      B ||
        (B = v([
          "\n  width: 15px;\n  cursor: col-resize;\n  background-color: #252530;\n",
        ]))
    ),
    ee = function (n) {
      var t = n.className,
        r = void 0 === t ? "" : t,
        a = n.leftChild,
        o = n.rightChild,
        i = e.useRef(null),
        d = e.useRef(null),
        l = (function (n) {
          var t = n.containerRef,
            r = n.dividerRef,
            a = n.dividerWidth,
            o = e.useState(0),
            i = o[0],
            d = o[1],
            l = e.useState(null),
            u = l[0],
            c = l[1];
          e.useEffect(function () {
            function e() {
              var e = t.current;
              if (e) {
                var n = e.clientWidth,
                  r = e.getBoundingClientRect();
                c(r), d(n / 2);
              }
            }
            e(), window.addEventListener("resize", e);
          }, []);
          var s = e.useCallback(
              function (e) {
                u && d(e.clientX - u.left);
              },
              [u]
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
            { leftWidth: i, rightWidth: u ? u.width - i - a : 0 }
          );
        })({ containerRef: i, dividerRef: d, dividerWidth: G().divider.width }),
        u = l.rightWidth;
      return s.default.createElement(
        Q,
        { className: r, ref: i },
        a(l.leftWidth),
        s.default.createElement(Z, { ref: d }),
        o(u)
      );
    };
  return (
    t.setup(e.createElement, void 0, G),
    function (t) {
      var r = t.id,
        a = t.defaultEditorTab,
        o = void 0 === a ? "markup" : a,
        i = t.excludeEditorTabs,
        d = void 0 === i ? [] : i,
        l = t.defaultResultTab,
        u = void 0 === l ? "result" : l,
        c = t.excludeResultTabs,
        f = void 0 === c ? [] : c,
        m = t.transformJs,
        p = void 0 !== m && m,
        g = t.presets,
        h = void 0 === g ? [] : g,
        v = t.theme,
        w = t.mode,
        E = void 0 === w ? "light" : w,
        y = e.useState(t.initialSnippet),
        k = y[0],
        x = y[1],
        C = n.useId(r),
        T = function (e, n) {
          x(function (t) {
            var r;
            return b({}, t, (((r = {})[n] = e), r));
          });
        };
      return s.default.createElement(
        K,
        { userTheme: v, mode: E },
        s.default.createElement(
          "div",
          { className: "playground" },
          s.default.createElement(ee, {
            leftChild: function (e) {
              return s.default.createElement(W, {
                width: e,
                code: k,
                defaultTab: o,
                excludeEditorTabs: d,
                onChange: T,
              });
            },
            rightChild: function (e) {
              return s.default.createElement(A, {
                width: e,
                id: C,
                snippet: k,
                defaultTab: u,
                excludeTabs: f,
                transformJs: p,
                presets: h,
              });
            },
          })
        )
      );
    }
  );
});
//# sourceMappingURL=playground.umd.js.map
