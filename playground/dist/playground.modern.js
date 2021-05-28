import e, {
  Fragment as n,
  useMemo as t,
  memo as r,
  useState as o,
  useEffect as a,
  useContext as i,
  createContext as l,
  useCallback as d,
  forwardRef as c,
  useRef as s,
  createElement as m,
} from "react";
import { useId as u } from "@reach/auto-id";
import { styled as p, setup as g } from "goober";
import f from "react-simple-code-editor";
import h, { defaultProps as b } from "prism-react-renderer";
import v from "prism-react-renderer/themes/nightOwl";
import {
  Tabs as w,
  TabList as k,
  Tab as E,
  TabPanels as y,
  TabPanel as x,
} from "@reach/tabs";
import C from "@agney/react-inspector";
import T from "lodash.merge";
function L() {
  return (L =
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
let $;
const B = p("div")(
    $ ||
      ($ = ((e) => e)`
  background-color: #252530;
  overflow-y: auto;
  font-feature-settings: normal;
  width: 100%;
  height: 100%;

  textarea {
    caret-color: white;
  }
`)
  ),
  R = ({ code: t, language: r, onChange: o }) =>
    e.createElement(
      B,
      null,
      e.createElement(f, {
        value: t,
        onValueChange: (e) => o(e, r),
        style: { height: "100%" },
        highlight: (t) =>
          e.createElement(
            h,
            Object.assign({}, b, { theme: v, code: t, language: r }),
            ({ tokens: t, getLineProps: r, getTokenProps: o }) =>
              e.createElement(
                n,
                null,
                t.map((n, t) =>
                  e.createElement(
                    "div",
                    Object.assign({}, r({ line: n, key: t })),
                    n.map((n, t) =>
                      e.createElement(
                        "span",
                        Object.assign({}, o({ token: n, key: t }))
                      )
                    )
                  )
                )
              )
          ),
        padding: 10,
      })
    ),
  N = (e) => `@media (max-width: ${e}px)`,
  O = Object.freeze({
    custom: N,
    desktop: N(922),
    tablet: N(768),
    phone: N(576),
  });
let j,
  I,
  U,
  P,
  W,
  D = (e) => e;
const H = p(w)(
    j ||
      (j = D`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 200px;
  min-height: 350px;
  background: #252530;

  ${0} {
    min-width: 100% !important;
    min-height: 100%;
  }
`),
    O.phone
  ),
  J = p(k)(
    I ||
      (I = D`
  background-color: #252530;
`)
  ),
  M = p(E)(
    U ||
      (U = D`
  border: none;
  padding: 8px 5px;
  color: gray;

  &[data-selected] {
    color: lightgray;
    font-weight: 600;
  }
`)
  ),
  z = p(y)(
    P ||
      (P = D`
  flex: 1 1 0%;
  overflow: auto;
`)
  ),
  S = p(x)(
    W ||
      (W = D`
  height: 100%;
  width: 100%;
`)
  ),
  A = ({
    code: n,
    defaultTab: r,
    excludeEditorTabs: o,
    onChange: a,
    width: i,
  }) => {
    const l = t(
      () =>
        [
          { name: "HTML", value: "markup" },
          { name: "CSS", value: "css" },
          { name: "JS", value: "javascript" },
        ].filter((e) => o.find((n) => n !== e.value)),
      [o]
    );
    return e.createElement(
      H,
      { defaultIndex: l.findIndex((e) => e.value === r), style: { width: i } },
      e.createElement(
        J,
        null,
        l.map((n) => e.createElement(M, { key: n.value }, n.name))
      ),
      e.createElement(
        z,
        null,
        l.map((t) =>
          e.createElement(
            S,
            { key: t.value },
            e.createElement(R, {
              code: n[t.value],
              onChange: a,
              language: t.value,
            })
          )
        )
      )
    );
  };
let F;
const V = p("div")(
    F ||
      (F = ((e) => e)`
  background-color: black;
  color: white;
  height: 100%;

  li {
    font-size: 16px !important;
  }
`)
  ),
  X = ({ logs: n }) =>
    e.createElement(
      V,
      null,
      n.map((n, t) =>
        e.createElement(C, { data: n, key: t, theme: "chromeDark" })
      )
    );
let _;
const q = p("div")(
    _ ||
      (_ = ((e) => e)`
  color: white;
  padding: 0.2em 0.5em;
  position: absolute;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  background: #e63946;
`)
  ),
  Y = ({ error: n }) => e.createElement(q, null, e.createElement("p", null, n));
let G;
const K = p("div")(
    G ||
      (G = ((e) => e)`
  position: relative;
  height: 100%;
  background: white;
  border-radius: 8px;

  iframe {
    pointer-events: none;
  }
`)
  ),
  Q = r(({ id: n, snippet: r, transformJs: i, presets: l }) => {
    const [d, c] = o(""),
      [s, m] = o(null);
    return (
      t(() => {
        try {
          const e = (function ({ markup: e, css: n, javascript: t }, r, o, a) {
            return `\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8"/>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>\n      <title>Document</title>\n      <style>${n}</style>\n    </head>\n    <body>\n      ${e}\n      <span></span>\n      <script>\n        var _privateLog = console.log;\n        console.log = function(...rest) {\n          if(typeof window !== 'undefined') {\n            window.parent.postMessage({\n              source: "frame-${r}",\n              message: {\n                type: "log",\n                data: rest\n              },\n            }, "*");\n          }\n          _privateLog.apply(console, arguments);\n        }\n        window.onerror = function(message) {\n          if(typeof window !== 'undefined') {\n            window.parent.postMessage({\n              source: "frame-${r}",\n              message: {\n                type: "error",\n                data: message\n              },\n            }, "*");\n          }\n        }\n      <\/script>\n      <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n      ${
              o
                ? `\n        <script type="module">\n          const BareIdentifierFormat = /^((?:@[^\\/]+\\/)?[^\\/]+)(\\/.*)?$/\n\n          function validUrl(url) {\n            try {\n              new URL(url);\n              return true;\n            } catch(err) {\n              return false;\n            }\n          }\n\n          function unpkg(dependencies = {}) {\n            return {\n              visitor: {\n                "ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration"(path) {\n                  if (\n                    !path.node.source || // Probably a variable declaration\n                    validUrl(path.node.source.value) || // Valid URL\n                    path.node.source.value.substr(0, 2) === "//" || // URL w/o protocol\n                    [".", "/"].indexOf(path.node.source.value.charAt(0)) >= 0 // Local path\n                  )\n                    return; // Leave it alone\n\n                  // A "bare" identifier\n                  const match = BareIdentifierFormat.exec(path.node.source.value);\n                  const packageName = match[1];\n                  const file = match[2] || "";\n\n                  console.warn(\n                    dependencies[packageName],\n                    'Missing version for package "%s" in dependencies; falling back to "latest"',\n                    packageName\n                  );\n\n                  const version = dependencies[packageName] || "latest";\n\n                  path.node.source.value = \`https://unpkg.com/\${packageName}@\${version}\${file}?module\`;\n                }\n              }\n            };\n          }\n\n          Babel.registerPlugin('unpkg', unpkg);\n\n          const code = Babel.transform(decodeURI(\`${encodeURI(
                    t
                  )}\`), {\n            plugins: ['unpkg'],\n            presets: ${JSON.stringify(
                    a
                  )}  \n          }).code;\n          const script = document.createElement("script");\n          script.type = "module";\n          script.innerHTML = code;\n          document.body.appendChild(script);\n        <\/script>\n      `
                : `\n        <script>\n          ${t}\n        <\/script>\n      `
            }\n    </body>\n    </html>\n  `;
          })(r, n, i, l);
          c(e), m(null);
        } catch (e) {
          m(e.message);
        }
      }, [r, i]),
      a(() => {
        "undefined" != typeof window &&
          window.addEventListener("message", (e) => {
            e.data.source === `frame-${n}` &&
              "error" === e.data.message.type &&
              m(e.data.message.data);
          });
      }, [n]),
      e.createElement(
        K,
        null,
        e.createElement("iframe", {
          height: "100%",
          width: "100%",
          title: "example",
          frameBorder: "0",
          srcDoc: d,
        }),
        s && e.createElement(Y, { error: s })
      )
    );
  }),
  Z = ({
    id: n,
    snippet: r,
    presets: i,
    defaultTab: l,
    excludeTabs: d,
    transformJs: c,
    width: s,
  }) => {
    const [m, u] = o([]),
      p = t(
        () =>
          [
            { name: "Result", value: "result" },
            { name: "Console", value: "console" },
          ].filter((e) => d.find((n) => n !== e.value)),
        [d]
      );
    return (
      a(() => {
        "undefined" != typeof window &&
          window.addEventListener("message", (e) => {
            e.data.source === `frame-${n}` &&
              "log" === e.data.message.type &&
              u((n) => [...n, ...e.data.message.data]);
          });
      }, [n]),
      e.createElement(
        H,
        {
          defaultIndex: p.findIndex((e) => e.value === l),
          style: { width: s },
        },
        e.createElement(
          J,
          null,
          p.map((n) => e.createElement(M, { key: n.value }, n.name))
        ),
        e.createElement(
          z,
          null,
          e.createElement(
            S,
            null,
            e.createElement(Q, {
              id: n,
              snippet: r,
              transformJs: c,
              presets: i,
            })
          ),
          e.createElement(S, null, e.createElement(X, { logs: m }))
        )
      )
    );
  },
  ee = {
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
  ne = {
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
  te = {
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
  re = l(te),
  oe = () => i(re);
function ae({ mode: n, userTheme: t, children: r }) {
  const [i, l] = o(te);
  return (
    a(() => {
      l(
        (function (e = "light") {
          return T(te, "light" === e ? ee : ne);
        })(n)
      );
    }, [n]),
    e.createElement(re.Provider, { value: null != t ? t : i }, r)
  );
}
let ie,
  le,
  de = (e) => e;
const ce = p("div", c)(
    ie ||
      (ie = de`
  display: flex;
  border: 16px solid #252530;
  border-radius: 8px;

  ${0} {
    flex-direction: column;
  }
`),
    O.phone
  ),
  se = p(
    "div",
    c
  )(
    le ||
      (le = de`
  width: 15px;
  cursor: col-resize;
  background-color: #252530;
`)
  ),
  me = ({ className: n = "", leftChild: t, rightChild: r }) => {
    const i = s(null),
      l = s(null),
      c = oe(),
      { leftWidth: m, rightWidth: u } = (function ({
        containerRef: e,
        dividerRef: n,
        dividerWidth: t,
      }) {
        const [r, i] = o(0),
          [l, c] = o(null);
        a(() => {
          function n() {
            const n = e.current;
            if (n) {
              const e = n.clientWidth,
                t = n.getBoundingClientRect();
              c(t), i(e / 2);
            }
          }
          n(), window.addEventListener("resize", n);
        }, []);
        const s = d(
            (e) => {
              const { clientX: n } = e;
              l && i(n - l.left);
            },
            [l]
          ),
          m = d(() => {
            document.removeEventListener("mousemove", s),
              document.removeEventListener("mouseup", m);
          }, [s]),
          u = d(() => {
            document.addEventListener("mousemove", s),
              document.addEventListener("mouseup", m);
          }, [s, m]);
        return (
          a(() => {
            const e = n.current;
            return (
              e && e.addEventListener("mousedown", u),
              () => {
                e && e.removeEventListener("mousedown", u);
              }
            );
          }, [u]),
          { leftWidth: r, rightWidth: l ? l.width - r - t : 0 }
        );
      })({ containerRef: i, dividerRef: l, dividerWidth: c.divider.width });
    return e.createElement(
      ce,
      { className: n, ref: i },
      t(m),
      e.createElement(se, { ref: l }),
      r(u)
    );
  };
g(m, void 0, oe);
export default ({
  id: n,
  initialSnippet: t,
  defaultEditorTab: r = "markup",
  excludeEditorTabs: a = [],
  defaultResultTab: i = "result",
  excludeResultTabs: l = [],
  transformJs: d = !1,
  presets: c = [],
  theme: s,
  mode: m = "light",
}) => {
  const [p, g] = o(t),
    f = u(n),
    h = (e, n) => {
      g((t) => L({}, t, { [n]: e }));
    };
  return e.createElement(
    ae,
    { userTheme: s, mode: m },
    e.createElement(
      "div",
      { className: "playground" },
      e.createElement(me, {
        leftChild: (n) =>
          e.createElement(A, {
            width: n,
            code: p,
            defaultTab: r,
            excludeEditorTabs: a,
            onChange: h,
          }),
        rightChild: (n) =>
          e.createElement(Z, {
            width: n,
            id: f,
            snippet: p,
            defaultTab: i,
            excludeTabs: l,
            transformJs: d,
            presets: c,
          }),
      })
    )
  );
};
//# sourceMappingURL=playground.modern.js.map
