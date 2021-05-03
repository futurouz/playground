import e, {
  Fragment as t,
  useMemo as n,
  memo as r,
  useState as o,
  useEffect as a,
  useContext as i,
  createContext as l,
  useCallback as c,
  forwardRef as d,
  useRef as s,
  createElement as m,
} from "react";
import { useId as u } from "@reach/auto-id";
import { styled as p, setup as g } from "goober";
import h from "react-simple-code-editor";
import f, { defaultProps as b } from "prism-react-renderer";
import v from "prism-react-renderer/themes/nightOwl";
import {
  Tabs as k,
  TabList as w,
  Tab as E,
  TabPanels as y,
  TabPanel as $,
} from "@reach/tabs";
import x from "@agney/react-inspector";
import C from "lodash.merge";
function L() {
  return (L =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
let T;
const B = p("div")(
    T ||
      (T = ((e) => e)`
  background-color: ${0};
  color: ${0};
  overflow-y: auto !important;
  font-family: ${0};
  font-feature-settings: normal;
  height: 100%;
`),
    (e) => e.theme.editor.backgroundColor,
    (e) => e.theme.editor.color,
    (e) => e.theme.editor.fontFamily
  ),
  R = ({ code: n, language: r, onChange: o }) =>
    e.createElement(
      B,
      null,
      e.createElement(h, {
        value: n,
        onValueChange: (e) => o(e, r),
        style: { height: "100%" },
        highlight: (n) =>
          e.createElement(
            f,
            Object.assign({}, b, { theme: v, code: n, language: r }),
            ({ tokens: n, getLineProps: r, getTokenProps: o }) =>
              e.createElement(
                t,
                null,
                n.map((t, n) =>
                  e.createElement(
                    "div",
                    Object.assign({}, r({ line: t, key: n })),
                    t.map((t, n) =>
                      e.createElement(
                        "span",
                        Object.assign({}, o({ token: t, key: n }))
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
let W,
  j,
  H,
  I,
  P,
  U = (e) => e;
const D = p(k)(
    W ||
      (W = U`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: ${0};
  background-color: white;

  ${0} {
    width: 100% !important;
  }
`),
    (e) => e.theme.container.minWidth,
    O.phone
  ),
  J = p(w)(
    j ||
      (j = U`
  background-color: #4b4b5c;
`)
  ),
  M = p(E)(
    H ||
      (H = U`
  border: none;
  padding: 0.8em 0.5em;
  color: ${0};

  &[data-selected] {
    border-bottom: 4px solid white;
  }
`),
    (e) => e.theme.tabs.tabHeader.color
  ),
  z = p(y)(
    I ||
      (I = U`
  flex: 1;

  ${0} {
    height: ${0};
  }
`),
    O.phone,
    (e) => e.theme.tabs.tabPanel.phoneHeight
  ),
  F = p($)(
    P ||
      (P = U`
  height: 100%;
`)
  );
let S;
const A = p(D)(
    S ||
      (S = ((e) => e)`
  min-width: ${0};
`),
    (e) => e.theme.container.minWidth
  ),
  V = ({ code: t, defaultTab: r, onChange: o, width: a }) => {
    const i = n(
      () => [
        { name: "HTML", value: "markup" },
        { name: "CSS", value: "css" },
        { name: "JS", value: "javascript" },
      ],
      []
    );
    return e.createElement(
      A,
      { defaultIndex: i.findIndex((e) => e.value === r), style: { width: a } },
      e.createElement(
        J,
        null,
        i.map((t) => e.createElement(M, { key: t.value }, t.name))
      ),
      e.createElement(
        z,
        null,
        i.map((n) =>
          e.createElement(
            F,
            { key: n.value },
            e.createElement(R, {
              code: t[n.value],
              onChange: o,
              language: n.value,
            })
          )
        )
      )
    );
  };
let X;
const _ = p("div")(
    X ||
      (X = ((e) => e)`
  background-color: ${0};
  height: 100%;

  li {
    font-size: 16px !important;
  }
`),
    (e) => e.theme.console.background
  ),
  q = ({ logs: t }) =>
    e.createElement(
      _,
      null,
      t.map((t, n) =>
        e.createElement(x, { data: t, key: n, theme: "chromeDark" })
      )
    );
let Y;
const G = p("div")(
    Y ||
      (Y = ((e) => e)`
  background-color: ${0};
  color: ${0};
  padding: 0.2em 0.5em;
  position: absolute;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
`),
    (e) => e.theme.error.background,
    (e) => e.theme.error.color
  ),
  K = ({ error: t }) => e.createElement(G, null, e.createElement("p", null, t));
let Q;
const Z = p("div")(
    Q ||
      (Q = ((e) => e)`
  position: relative;
  height: 100%;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
  }
`)
  ),
  ee = r(({ id: t, snippet: r, transformJs: i, presets: l }) => {
    const [c, d] = o(""),
      [s, m] = o(null);
    return (
      n(() => {
        try {
          const e = (function ({ markup: e, css: t, javascript: n }, r, o, a) {
            return `\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8"/>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>\n      <title>Document</title>\n      <style>${t}</style>\n    </head>\n    <body>\n      ${e}\n      <span></span>\n      <script>\n        var _privateLog = console.log;\n        console.log = function(...rest) {\n          if(typeof window !== 'undefined') {\n            window.parent.postMessage({\n              source: "frame-${r}",\n              message: {\n                type: "log",\n                data: rest\n              },\n            }, "*");\n          }\n          _privateLog.apply(console, arguments);\n        }\n        window.onerror = function(message) {\n          if(typeof window !== 'undefined') {\n            window.parent.postMessage({\n              source: "frame-${r}",\n              message: {\n                type: "error",\n                data: message\n              },\n            }, "*");\n          }\n        }\n      <\/script>\n      <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n      ${
              o
                ? `\n        <script type="module">\n          const BareIdentifierFormat = /^((?:@[^\\/]+\\/)?[^\\/]+)(\\/.*)?$/\n\n          function validUrl(url) {\n            try {\n              new URL(url);\n              return true;\n            } catch(err) {\n              return false;\n            }\n          }\n\n          function unpkg(dependencies = {}) {\n            return {\n              visitor: {\n                "ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration"(path) {\n                  if (\n                    !path.node.source || // Probably a variable declaration\n                    validUrl(path.node.source.value) || // Valid URL\n                    path.node.source.value.substr(0, 2) === "//" || // URL w/o protocol\n                    [".", "/"].indexOf(path.node.source.value.charAt(0)) >= 0 // Local path\n                  )\n                    return; // Leave it alone\n\n                  // A "bare" identifier\n                  const match = BareIdentifierFormat.exec(path.node.source.value);\n                  const packageName = match[1];\n                  const file = match[2] || "";\n\n                  console.warn(\n                    dependencies[packageName],\n                    'Missing version for package "%s" in dependencies; falling back to "latest"',\n                    packageName\n                  );\n\n                  const version = dependencies[packageName] || "latest";\n\n                  path.node.source.value = \`https://unpkg.com/\${packageName}@\${version}\${file}?module\`;\n                }\n              }\n            };\n          }\n\n          Babel.registerPlugin('unpkg', unpkg);\n\n          const code = Babel.transform(decodeURI(\`${encodeURI(
                    n
                  )}\`), {\n            plugins: ['unpkg'],\n            presets: ${JSON.stringify(
                    a
                  )}  \n          }).code;\n          const script = document.createElement("script");\n          script.type = "module";\n          script.innerHTML = code;\n          document.body.appendChild(script);\n        <\/script>\n      `
                : `\n        <script>\n          ${n}\n        <\/script>\n      `
            }\n    </body>\n    </html>\n  `;
          })(r, t, i, l);
          d(e), m(null);
        } catch (e) {
          m(e.message);
        }
      }, [r, i]),
      a(() => {
        "undefined" != typeof window &&
          window.addEventListener("message", (e) => {
            e.data.source === `frame-${t}` &&
              "error" === e.data.message.type &&
              m(e.data.message.data);
          });
      }, [t]),
      e.createElement(
        Z,
        null,
        e.createElement("iframe", {
          height: "100%",
          width: "100%",
          title: "example",
          frameBorder: "0",
          srcDoc: c,
        }),
        s && e.createElement(K, { error: s })
      )
    );
  }),
  te = ({
    id: t,
    snippet: r,
    presets: i,
    defaultTab: l,
    transformJs: c,
    width: d,
  }) => {
    const [s, m] = o([]),
      u = n(
        () => [
          { name: "Result", value: "result" },
          { name: "Console", value: "console" },
        ],
        []
      );
    return (
      a(() => {
        "undefined" != typeof window &&
          window.addEventListener("message", (e) => {
            e.data.source === `frame-${t}` &&
              "log" === e.data.message.type &&
              m((t) => [...t, ...e.data.message.data]);
          });
      }, [t]),
      e.createElement(
        D,
        {
          defaultIndex: u.findIndex((e) => e.value === l),
          style: { width: d },
        },
        e.createElement(
          z,
          null,
          e.createElement(
            F,
            null,
            e.createElement(ee, {
              id: t,
              snippet: r,
              transformJs: c,
              presets: i,
            })
          ),
          e.createElement(F, null, e.createElement(q, { logs: s }))
        )
      )
    );
  },
  ne = {
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
  re = {
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
  oe = {
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
  ae = l(oe),
  ie = () => i(ae);
function le({ mode: t, userTheme: n, children: r }) {
  const [i, l] = o(oe);
  return (
    a(() => {
      l(
        (function (e = "light") {
          return C(oe, "light" === e ? ne : re);
        })(t)
      );
    }, [t]),
    e.createElement(ae.Provider, { value: null != n ? n : i }, r)
  );
}
let ce,
  de,
  se = (e) => e;
const me = p(
    "div",
    d
  )(
    ce ||
      (ce = se`
  display: flex;
  align-items: stretch;
`)
  ),
  ue = p(
    "div",
    d
  )(
    de ||
      (de = se`
  width: 10px;
  cursor: col-resize;
  background-color: #4b4b5c;
`)
  );
let pe;
g(m, void 0, ie);
const ge = p(({ className: t = "", leftChild: n, rightChild: r }) => {
  const i = s(null),
    l = s(null),
    d = ie(),
    { leftWidth: m, rightWidth: u } = (function ({
      containerRef: e,
      dividerRef: t,
      dividerWidth: n,
    }) {
      const [r, i] = o(0),
        [l, d] = o(null);
      a(() => {
        const t = e.current;
        if (t) {
          const e = t.clientWidth,
            n = t.getBoundingClientRect();
          d(n), i(e / 2);
        }
      }, []);
      const s = c(
          (e) => {
            const { clientX: t } = e;
            l && i(t - l.left);
          },
          [l]
        ),
        m = c(() => {
          document.removeEventListener("mousemove", s),
            document.removeEventListener("mouseup", m);
        }, [s]),
        u = c(() => {
          document.addEventListener("mousemove", s),
            document.addEventListener("mouseup", m);
        }, [s, m]);
      return (
        a(() => {
          const e = t.current;
          return (
            e && e.addEventListener("mousedown", u),
            () => {
              e && e.removeEventListener("mousedown", u);
            }
          );
        }, [u]),
        { leftWidth: r, rightWidth: l ? l.width - r - n : 0 }
      );
    })({ containerRef: i, dividerRef: l, dividerWidth: d.divider.width });
  return e.createElement(
    me,
    { className: t, ref: i },
    n(m),
    e.createElement(ue, { ref: l }),
    r(u)
  );
})(
  pe ||
    (pe = ((e) => e)`
  display: flex;
  border: 12px solid #4b4b5c;
  border-radius: 6px;
  min-height: 300px;

  ${0} {
    flex-direction: column;
  }
`),
  O.phone
);
export default ({
  id: t,
  initialSnippet: n,
  defaultEditorTab: r = "markup",
  defaultResultTab: a = "result",
  transformJs: i = !1,
  presets: l = [],
  theme: c,
  mode: d = "light",
}) => {
  const [s, m] = o(n),
    p = u(t),
    g = (e, t) => {
      m((n) => L({}, n, { [t]: e }));
    };
  return e.createElement(
    le,
    { userTheme: c, mode: d },
    e.createElement(
      "div",
      { className: "playground" },
      e.createElement(ge, {
        leftChild: (t) =>
          e.createElement(V, { width: t, code: s, defaultTab: r, onChange: g }),
        rightChild: (t) =>
          e.createElement(te, {
            width: t,
            id: p,
            snippet: s,
            defaultTab: a,
            transformJs: i,
            presets: l,
          }),
      })
    )
  );
};
//# sourceMappingURL=playground.modern.js.map
