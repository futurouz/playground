import e, {
  useRef as t,
  useDebugValue as r,
  useContext as n,
  createElement as o,
  Fragment as a,
  useMemo as i,
  memo as s,
  useState as c,
  useEffect as l,
  createContext as u,
  useCallback as d,
} from "react";
import { useId as f } from "@reach/auto-id";
import { setup as p } from "goober";
import h from "react-simple-code-editor";
import m, { defaultProps as g } from "prism-react-renderer";
import y from "prism-react-renderer/themes/nightOwl";
import {
  TabList as b,
  Tab as v,
  TabPanels as w,
  TabPanel as k,
  Tabs as S,
} from "@reach/tabs";
import C from "@agney/react-inspector";
import E from "lodash.merge";
function x() {
  return (x =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function A(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var $ = 60103,
  P = 60106,
  _ = 60107,
  O = 60108,
  R = 60114,
  N = 60109,
  T = 60110,
  I = 60112,
  M = 60113,
  j = 60120,
  D = 60115,
  L = 60116,
  z = 60121,
  F = 60122,
  B = 60117,
  V = 60129,
  H = 60131;
if ("function" == typeof Symbol && Symbol.for) {
  var U = Symbol.for;
  ($ = U("react.element")),
    (P = U("react.portal")),
    (_ = U("react.fragment")),
    (O = U("react.strict_mode")),
    (R = U("react.profiler")),
    (N = U("react.provider")),
    (T = U("react.context")),
    (I = U("react.forward_ref")),
    (M = U("react.suspense")),
    (j = U("react.suspense_list")),
    (D = U("react.memo")),
    (L = U("react.lazy")),
    (z = U("react.block")),
    (F = U("react.server.block")),
    (B = U("react.fundamental")),
    (V = U("react.debug_trace_mode")),
    (H = U("react.legacy_hidden"));
}
function G(e) {
  if ("object" == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case $:
        switch ((e = e.type)) {
          case _:
          case R:
          case O:
          case M:
          case j:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case T:
              case I:
              case L:
              case D:
              case N:
                return e;
              default:
                return t;
            }
        }
      case P:
        return t;
    }
  }
}
var W = {
    ContextConsumer: T,
    ContextProvider: N,
    Element: $,
    ForwardRef: I,
    Fragment: _,
    Lazy: L,
    Memo: D,
    Portal: P,
    Profiler: R,
    StrictMode: O,
    Suspense: M,
    isAsyncMode: function () {
      return !1;
    },
    isConcurrentMode: function () {
      return !1;
    },
    isContextConsumer: function (e) {
      return G(e) === T;
    },
    isContextProvider: function (e) {
      return G(e) === N;
    },
    isElement: function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === $;
    },
    isForwardRef: function (e) {
      return G(e) === I;
    },
    isFragment: function (e) {
      return G(e) === _;
    },
    isLazy: function (e) {
      return G(e) === L;
    },
    isMemo: function (e) {
      return G(e) === D;
    },
    isPortal: function (e) {
      return G(e) === P;
    },
    isProfiler: function (e) {
      return G(e) === R;
    },
    isStrictMode: function (e) {
      return G(e) === O;
    },
    isSuspense: function (e) {
      return G(e) === M;
    },
    isValidElementType: function (e) {
      return (
        "string" == typeof e ||
        "function" == typeof e ||
        e === _ ||
        e === R ||
        e === V ||
        e === O ||
        e === M ||
        e === j ||
        e === H ||
        ("object" == typeof e &&
          null !== e &&
          (e.$$typeof === L ||
            e.$$typeof === D ||
            e.$$typeof === N ||
            e.$$typeof === T ||
            e.$$typeof === I ||
            e.$$typeof === B ||
            e.$$typeof === z ||
            e[0] === F))
      );
    },
    typeOf: G,
  },
  Y = A(function (e, t) {
    "production" !== process.env.NODE_ENV &&
      (function () {
        var e = 60103,
          r = 60106,
          n = 60107,
          o = 60108,
          a = 60114,
          i = 60109,
          s = 60110,
          c = 60112,
          l = 60113,
          u = 60120,
          d = 60115,
          f = 60116,
          p = 60121,
          h = 60122,
          m = 60117,
          g = 60129,
          y = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var b = Symbol.for;
          (e = b("react.element")),
            (r = b("react.portal")),
            (n = b("react.fragment")),
            (o = b("react.strict_mode")),
            (a = b("react.profiler")),
            (i = b("react.provider")),
            (s = b("react.context")),
            (c = b("react.forward_ref")),
            (l = b("react.suspense")),
            (u = b("react.suspense_list")),
            (d = b("react.memo")),
            (f = b("react.lazy")),
            (p = b("react.block")),
            (h = b("react.server.block")),
            (m = b("react.fundamental")),
            b("react.scope"),
            b("react.opaque.id"),
            (g = b("react.debug_trace_mode")),
            b("react.offscreen"),
            (y = b("react.legacy_hidden"));
        }
        function v(t) {
          if ("object" == typeof t && null !== t) {
            var p = t.$$typeof;
            switch (p) {
              case e:
                var h = t.type;
                switch (h) {
                  case n:
                  case a:
                  case o:
                  case l:
                  case u:
                    return h;
                  default:
                    var m = h && h.$$typeof;
                    switch (m) {
                      case s:
                      case c:
                      case f:
                      case d:
                      case i:
                        return m;
                      default:
                        return p;
                    }
                }
              case r:
                return p;
            }
          }
        }
        var w = i,
          k = e,
          S = c,
          C = n,
          E = f,
          x = d,
          A = r,
          $ = a,
          P = o,
          _ = l,
          O = !1,
          R = !1;
        (t.ContextConsumer = s),
          (t.ContextProvider = w),
          (t.Element = k),
          (t.ForwardRef = S),
          (t.Fragment = C),
          (t.Lazy = E),
          (t.Memo = x),
          (t.Portal = A),
          (t.Profiler = $),
          (t.StrictMode = P),
          (t.Suspense = _),
          (t.isAsyncMode = function (e) {
            return (
              O ||
                ((O = !0),
                console.warn(
                  "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+."
                )),
              !1
            );
          }),
          (t.isConcurrentMode = function (e) {
            return (
              R ||
                ((R = !0),
                console.warn(
                  "The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+."
                )),
              !1
            );
          }),
          (t.isContextConsumer = function (e) {
            return v(e) === s;
          }),
          (t.isContextProvider = function (e) {
            return v(e) === i;
          }),
          (t.isElement = function (t) {
            return "object" == typeof t && null !== t && t.$$typeof === e;
          }),
          (t.isForwardRef = function (e) {
            return v(e) === c;
          }),
          (t.isFragment = function (e) {
            return v(e) === n;
          }),
          (t.isLazy = function (e) {
            return v(e) === f;
          }),
          (t.isMemo = function (e) {
            return v(e) === d;
          }),
          (t.isPortal = function (e) {
            return v(e) === r;
          }),
          (t.isProfiler = function (e) {
            return v(e) === a;
          }),
          (t.isStrictMode = function (e) {
            return v(e) === o;
          }),
          (t.isSuspense = function (e) {
            return v(e) === l;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === n ||
              e === a ||
              e === g ||
              e === o ||
              e === l ||
              e === u ||
              e === y ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === f ||
                  e.$$typeof === d ||
                  e.$$typeof === i ||
                  e.$$typeof === s ||
                  e.$$typeof === c ||
                  e.$$typeof === m ||
                  e.$$typeof === p ||
                  e[0] === h))
            );
          }),
          (t.typeOf = v);
      })();
  }),
  q = A(function (e) {
    e.exports = "production" === process.env.NODE_ENV ? W : Y;
  });
function X(e) {
  function t(e, n, c, l, f) {
    for (
      var p,
        h,
        m,
        g,
        w,
        S = 0,
        C = 0,
        E = 0,
        x = 0,
        A = 0,
        N = 0,
        I = (m = p = 0),
        j = 0,
        D = 0,
        L = 0,
        z = 0,
        F = c.length,
        B = F - 1,
        V = "",
        H = "",
        U = "",
        G = "";
      j < F;

    ) {
      if (
        ((h = c.charCodeAt(j)),
        j === B &&
          0 !== C + x + E + S &&
          (0 !== C && (h = 47 === C ? 10 : 47), (x = E = S = 0), F++, B++),
        0 === C + x + E + S)
      ) {
        if (j === B && (0 < D && (V = V.replace(d, "")), 0 < V.trim().length)) {
          switch (h) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              V += c.charAt(j);
          }
          h = 59;
        }
        switch (h) {
          case 123:
            for (p = (V = V.trim()).charCodeAt(0), m = 1, z = ++j; j < F; ) {
              switch ((h = c.charCodeAt(j))) {
                case 123:
                  m++;
                  break;
                case 125:
                  m--;
                  break;
                case 47:
                  switch ((h = c.charCodeAt(j + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (I = j + 1; I < B; ++I)
                          switch (c.charCodeAt(I)) {
                            case 47:
                              if (
                                42 === h &&
                                42 === c.charCodeAt(I - 1) &&
                                j + 2 !== I
                              ) {
                                j = I + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (47 === h) {
                                j = I + 1;
                                break e;
                              }
                          }
                        j = I;
                      }
                  }
                  break;
                case 91:
                  h++;
                case 40:
                  h++;
                case 34:
                case 39:
                  for (; j++ < B && c.charCodeAt(j) !== h; );
              }
              if (0 === m) break;
              j++;
            }
            switch (
              ((m = c.substring(z, j)),
              0 === p && (p = (V = V.replace(u, "").trim()).charCodeAt(0)),
              p)
            ) {
              case 64:
                switch (
                  (0 < D && (V = V.replace(d, "")), (h = V.charCodeAt(1)))
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    D = n;
                    break;
                  default:
                    D = R;
                }
                if (
                  ((z = (m = t(n, D, m, h, f + 1)).length),
                  0 < T &&
                    ((w = s(3, m, (D = r(R, V, L)), n, P, $, z, h, f, l)),
                    (V = D.join("")),
                    void 0 !== w &&
                      0 === (z = (m = w.trim()).length) &&
                      ((h = 0), (m = ""))),
                  0 < z)
                )
                  switch (h) {
                    case 115:
                      V = V.replace(k, i);
                    case 100:
                    case 109:
                    case 45:
                      m = V + "{" + m + "}";
                      break;
                    case 107:
                      (m = (V = V.replace(y, "$1 $2")) + "{" + m + "}"),
                        (m =
                          1 === O || (2 === O && a("@" + m, 3))
                            ? "@-webkit-" + m + "@" + m
                            : "@" + m);
                      break;
                    default:
                      (m = V + m), 112 === l && ((H += m), (m = ""));
                  }
                else m = "";
                break;
              default:
                m = t(n, r(n, V, L), m, l, f + 1);
            }
            (U += m),
              (m = L = D = I = p = 0),
              (V = ""),
              (h = c.charCodeAt(++j));
            break;
          case 125:
          case 59:
            if (1 < (z = (V = (0 < D ? V.replace(d, "") : V).trim()).length))
              switch (
                (0 === I &&
                  ((p = V.charCodeAt(0)), 45 === p || (96 < p && 123 > p)) &&
                  (z = (V = V.replace(" ", ":")).length),
                0 < T &&
                  void 0 !== (w = s(1, V, n, e, P, $, H.length, l, f, l)) &&
                  0 === (z = (V = w.trim()).length) &&
                  (V = "\0\0"),
                (p = V.charCodeAt(0)),
                (h = V.charCodeAt(1)),
                p)
              ) {
                case 0:
                  break;
                case 64:
                  if (105 === h || 99 === h) {
                    G += V + c.charAt(j);
                    break;
                  }
                default:
                  58 !== V.charCodeAt(z - 1) &&
                    (H += o(V, p, h, V.charCodeAt(2)));
              }
            (L = D = I = p = 0), (V = ""), (h = c.charCodeAt(++j));
        }
      }
      switch (h) {
        case 13:
        case 10:
          47 === C
            ? (C = 0)
            : 0 === 1 + p &&
              107 !== l &&
              0 < V.length &&
              ((D = 1), (V += "\0")),
            0 < T * M && s(0, V, n, e, P, $, H.length, l, f, l),
            ($ = 1),
            P++;
          break;
        case 59:
        case 125:
          if (0 === C + x + E + S) {
            $++;
            break;
          }
        default:
          switch (($++, (g = c.charAt(j)), h)) {
            case 9:
            case 32:
              if (0 === x + S + C)
                switch (A) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    g = "";
                    break;
                  default:
                    32 !== h && (g = " ");
                }
              break;
            case 0:
              g = "\\0";
              break;
            case 12:
              g = "\\f";
              break;
            case 11:
              g = "\\v";
              break;
            case 38:
              0 === x + C + S && ((D = L = 1), (g = "\f" + g));
              break;
            case 108:
              if (0 === x + C + S + _ && 0 < I)
                switch (j - I) {
                  case 2:
                    112 === A && 58 === c.charCodeAt(j - 3) && (_ = A);
                  case 8:
                    111 === N && (_ = N);
                }
              break;
            case 58:
              0 === x + C + S && (I = j);
              break;
            case 44:
              0 === C + E + x + S && ((D = 1), (g += "\r"));
              break;
            case 34:
            case 39:
              0 === C && (x = x === h ? 0 : 0 === x ? h : x);
              break;
            case 91:
              0 === x + C + E && S++;
              break;
            case 93:
              0 === x + C + E && S--;
              break;
            case 41:
              0 === x + C + S && E--;
              break;
            case 40:
              if (0 === x + C + S) {
                if (0 === p)
                  switch (2 * A + 3 * N) {
                    case 533:
                      break;
                    default:
                      p = 1;
                  }
                E++;
              }
              break;
            case 64:
              0 === C + E + x + S + I + m && (m = 1);
              break;
            case 42:
            case 47:
              if (!(0 < x + S + E))
                switch (C) {
                  case 0:
                    switch (2 * h + 3 * c.charCodeAt(j + 1)) {
                      case 235:
                        C = 47;
                        break;
                      case 220:
                        (z = j), (C = 42);
                    }
                    break;
                  case 42:
                    47 === h &&
                      42 === A &&
                      z + 2 !== j &&
                      (33 === c.charCodeAt(z + 2) &&
                        (H += c.substring(z, j + 1)),
                      (g = ""),
                      (C = 0));
                }
          }
          0 === C && (V += g);
      }
      (N = A), (A = h), j++;
    }
    if (0 < (z = H.length)) {
      if (
        ((D = n),
        0 < T &&
          void 0 !== (w = s(2, H, D, e, P, $, z, l, f, l)) &&
          0 === (H = w).length)
      )
        return G + H + U;
      if (((H = D.join(",") + "{" + H + "}"), 0 != O * _)) {
        switch ((2 !== O || a(H, 2) || (_ = 0), _)) {
          case 111:
            H = H.replace(v, ":-moz-$1") + H;
            break;
          case 112:
            H =
              H.replace(b, "::-webkit-input-$1") +
              H.replace(b, "::-moz-$1") +
              H.replace(b, ":-ms-input-$1") +
              H;
        }
        _ = 0;
      }
    }
    return G + H + U;
  }
  function r(e, t, r) {
    var o = t.trim().split(m);
    t = o;
    var a = o.length,
      i = e.length;
    switch (i) {
      case 0:
      case 1:
        var s = 0;
        for (e = 0 === i ? "" : e[0] + " "; s < a; ++s)
          t[s] = n(e, t[s], r).trim();
        break;
      default:
        var c = (s = 0);
        for (t = []; s < a; ++s)
          for (var l = 0; l < i; ++l) t[c++] = n(e[l] + " ", o[s], r).trim();
    }
    return t;
  }
  function n(e, t, r) {
    var n = t.charCodeAt(0);
    switch ((33 > n && (n = (t = t.trim()).charCodeAt(0)), n)) {
      case 38:
        return t.replace(g, "$1" + e.trim());
      case 58:
        return e.trim() + t.replace(g, "$1" + e.trim());
      default:
        if (0 < 1 * r && 0 < t.indexOf("\f"))
          return t.replace(g, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim());
    }
    return e + t;
  }
  function o(e, t, r, n) {
    var i = e + ";",
      s = 2 * t + 3 * r + 4 * n;
    if (944 === s) {
      e = i.indexOf(":", 9) + 1;
      var c = i.substring(e, i.length - 1).trim();
      return (
        (c = i.substring(0, e).trim() + c + ";"),
        1 === O || (2 === O && a(c, 1)) ? "-webkit-" + c + c : c
      );
    }
    if (0 === O || (2 === O && !a(i, 1))) return i;
    switch (s) {
      case 1015:
        return 97 === i.charCodeAt(10) ? "-webkit-" + i + i : i;
      case 951:
        return 116 === i.charCodeAt(3) ? "-webkit-" + i + i : i;
      case 963:
        return 110 === i.charCodeAt(5) ? "-webkit-" + i + i : i;
      case 1009:
        if (100 !== i.charCodeAt(4)) break;
      case 969:
      case 942:
        return "-webkit-" + i + i;
      case 978:
        return "-webkit-" + i + "-moz-" + i + i;
      case 1019:
      case 983:
        return "-webkit-" + i + "-moz-" + i + "-ms-" + i + i;
      case 883:
        if (45 === i.charCodeAt(8)) return "-webkit-" + i + i;
        if (0 < i.indexOf("image-set(", 11))
          return i.replace(A, "$1-webkit-$2") + i;
        break;
      case 932:
        if (45 === i.charCodeAt(4))
          switch (i.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                i.replace("-grow", "") +
                "-webkit-" +
                i +
                "-ms-" +
                i.replace("grow", "positive") +
                i
              );
            case 115:
              return (
                "-webkit-" + i + "-ms-" + i.replace("shrink", "negative") + i
              );
            case 98:
              return (
                "-webkit-" +
                i +
                "-ms-" +
                i.replace("basis", "preferred-size") +
                i
              );
          }
        return "-webkit-" + i + "-ms-" + i + i;
      case 964:
        return "-webkit-" + i + "-ms-flex-" + i + i;
      case 1023:
        if (99 !== i.charCodeAt(8)) break;
        return (
          "-webkit-box-pack" +
          (c = i
            .substring(i.indexOf(":", 15))
            .replace("flex-", "")
            .replace("space-between", "justify")) +
          "-webkit-" +
          i +
          "-ms-flex-pack" +
          c +
          i
        );
      case 1005:
        return p.test(i)
          ? i.replace(f, ":-webkit-") + i.replace(f, ":-moz-") + i
          : i;
      case 1e3:
        switch (
          ((t = (c = i.substring(13).trim()).indexOf("-") + 1),
          c.charCodeAt(0) + c.charCodeAt(t))
        ) {
          case 226:
            c = i.replace(w, "tb");
            break;
          case 232:
            c = i.replace(w, "tb-rl");
            break;
          case 220:
            c = i.replace(w, "lr");
            break;
          default:
            return i;
        }
        return "-webkit-" + i + "-ms-" + c + i;
      case 1017:
        if (-1 === i.indexOf("sticky", 9)) break;
      case 975:
        switch (
          ((t = (i = e).length - 10),
          (s =
            (c = (33 === i.charCodeAt(t) ? i.substring(0, t) : i)
              .substring(e.indexOf(":", 7) + 1)
              .trim()).charCodeAt(0) +
            (0 | c.charCodeAt(7))))
        ) {
          case 203:
            if (111 > c.charCodeAt(8)) break;
          case 115:
            i = i.replace(c, "-webkit-" + c) + ";" + i;
            break;
          case 207:
          case 102:
            i =
              i.replace(c, "-webkit-" + (102 < s ? "inline-" : "") + "box") +
              ";" +
              i.replace(c, "-webkit-" + c) +
              ";" +
              i.replace(c, "-ms-" + c + "box") +
              ";" +
              i;
        }
        return i + ";";
      case 938:
        if (45 === i.charCodeAt(5))
          switch (i.charCodeAt(6)) {
            case 105:
              return (
                (c = i.replace("-items", "")),
                "-webkit-" + i + "-webkit-box-" + c + "-ms-flex-" + c + i
              );
            case 115:
              return "-webkit-" + i + "-ms-flex-item-" + i.replace(C, "") + i;
            default:
              return (
                "-webkit-" +
                i +
                "-ms-flex-line-pack" +
                i.replace("align-content", "").replace(C, "") +
                i
              );
          }
        break;
      case 973:
      case 989:
        if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
      case 931:
      case 953:
        if (!0 === x.test(e))
          return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
            ? o(e.replace("stretch", "fill-available"), t, r, n).replace(
                ":fill-available",
                ":stretch"
              )
            : i.replace(c, "-webkit-" + c) +
                i.replace(c, "-moz-" + c.replace("fill-", "")) +
                i;
        break;
      case 962:
        if (
          ((i =
            "-webkit-" + i + (102 === i.charCodeAt(5) ? "-ms-" + i : "") + i),
          211 === r + n &&
            105 === i.charCodeAt(13) &&
            0 < i.indexOf("transform", 10))
        )
          return (
            i.substring(0, i.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") +
            i
          );
    }
    return i;
  }
  function a(e, t) {
    var r = e.indexOf(1 === t ? ":" : "{"),
      n = e.substring(0, 3 !== t ? r : 10);
    return (
      (r = e.substring(r + 1, e.length - 1)),
      I(2 !== t ? n : n.replace(E, "$1"), r, t)
    );
  }
  function i(e, t) {
    var r = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
    return r !== t + ";"
      ? r.replace(S, " or ($1)").substring(4)
      : "(" + t + ")";
  }
  function s(e, t, r, n, o, a, i, s, c, u) {
    for (var d, f = 0, p = t; f < T; ++f)
      switch ((d = N[f].call(l, e, p, r, n, o, a, i, s, c, u))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          p = d;
      }
    if (p !== t) return p;
  }
  function c(e) {
    return (
      void 0 !== (e = e.prefix) &&
        ((I = null),
        e ? ("function" != typeof e ? (O = 1) : ((O = 2), (I = e))) : (O = 0)),
      c
    );
  }
  function l(e, r) {
    var n = e;
    if ((33 > n.charCodeAt(0) && (n = n.trim()), (n = [n]), 0 < T)) {
      var o = s(-1, r, n, n, P, $, 0, 0, 0, 0);
      void 0 !== o && "string" == typeof o && (r = o);
    }
    var a = t(R, n, r, 0, 0);
    return (
      0 < T &&
        void 0 !== (o = s(-2, a, n, n, P, $, a.length, 0, 0, 0)) &&
        (a = o),
      (_ = 0),
      ($ = P = 1),
      a
    );
  }
  var u = /^\0+/g,
    d = /[\0\r\f]/g,
    f = /: */g,
    p = /zoo|gra/,
    h = /([,: ])(transform)/g,
    m = /,\r+?/g,
    g = /([\t\r\n ])*\f?&/g,
    y = /@(k\w+)\s*(\S*)\s*/,
    b = /::(place)/g,
    v = /:(read-only)/g,
    w = /[svh]\w+-[tblr]{2}/,
    k = /\(\s*(.*)\s*\)/g,
    S = /([\s\S]*?);/g,
    C = /-self|flex-/g,
    E = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    x = /stretch|:\s*\w+\-(?:conte|avail)/,
    A = /([^-])(image-set\()/,
    $ = 1,
    P = 1,
    _ = 0,
    O = 1,
    R = [],
    N = [],
    T = 0,
    I = null,
    M = 0;
  return (
    (l.use = function e(t) {
      switch (t) {
        case void 0:
        case null:
          T = N.length = 0;
          break;
        default:
          if ("function" == typeof t) N[T++] = t;
          else if ("object" == typeof t)
            for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
          else M = 0 | !!t;
      }
      return e;
    }),
    (l.set = c),
    void 0 !== e && c(e),
    l
  );
}
var J,
  Z,
  K = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Q = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  ee =
    ((J = function (e) {
      return (
        Q.test(e) ||
        (111 === e.charCodeAt(0) &&
          110 === e.charCodeAt(1) &&
          e.charCodeAt(2) < 91)
      );
    }),
    (Z = {}),
    function (e) {
      return void 0 === Z[e] && (Z[e] = J(e)), Z[e];
    }),
  te = "function" == typeof Symbol && Symbol.for,
  re = te ? Symbol.for("react.element") : 60103,
  ne = te ? Symbol.for("react.portal") : 60106,
  oe = te ? Symbol.for("react.fragment") : 60107,
  ae = te ? Symbol.for("react.strict_mode") : 60108,
  ie = te ? Symbol.for("react.profiler") : 60114,
  se = te ? Symbol.for("react.provider") : 60109,
  ce = te ? Symbol.for("react.context") : 60110,
  le = te ? Symbol.for("react.async_mode") : 60111,
  ue = te ? Symbol.for("react.concurrent_mode") : 60111,
  de = te ? Symbol.for("react.forward_ref") : 60112,
  fe = te ? Symbol.for("react.suspense") : 60113,
  pe = te ? Symbol.for("react.suspense_list") : 60120,
  he = te ? Symbol.for("react.memo") : 60115,
  me = te ? Symbol.for("react.lazy") : 60116,
  ge = te ? Symbol.for("react.block") : 60121,
  ye = te ? Symbol.for("react.fundamental") : 60117,
  be = te ? Symbol.for("react.responder") : 60118,
  ve = te ? Symbol.for("react.scope") : 60119;
function we(e) {
  if ("object" == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case re:
        switch ((e = e.type)) {
          case le:
          case ue:
          case oe:
          case ie:
          case ae:
          case fe:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case ce:
              case de:
              case me:
              case he:
              case se:
                return e;
              default:
                return t;
            }
        }
      case ne:
        return t;
    }
  }
}
function ke(e) {
  return we(e) === ue;
}
var Se = {
    AsyncMode: le,
    ConcurrentMode: ue,
    ContextConsumer: ce,
    ContextProvider: se,
    Element: re,
    ForwardRef: de,
    Fragment: oe,
    Lazy: me,
    Memo: he,
    Portal: ne,
    Profiler: ie,
    StrictMode: ae,
    Suspense: fe,
    isAsyncMode: function (e) {
      return ke(e) || we(e) === le;
    },
    isConcurrentMode: ke,
    isContextConsumer: function (e) {
      return we(e) === ce;
    },
    isContextProvider: function (e) {
      return we(e) === se;
    },
    isElement: function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === re;
    },
    isForwardRef: function (e) {
      return we(e) === de;
    },
    isFragment: function (e) {
      return we(e) === oe;
    },
    isLazy: function (e) {
      return we(e) === me;
    },
    isMemo: function (e) {
      return we(e) === he;
    },
    isPortal: function (e) {
      return we(e) === ne;
    },
    isProfiler: function (e) {
      return we(e) === ie;
    },
    isStrictMode: function (e) {
      return we(e) === ae;
    },
    isSuspense: function (e) {
      return we(e) === fe;
    },
    isValidElementType: function (e) {
      return (
        "string" == typeof e ||
        "function" == typeof e ||
        e === oe ||
        e === ue ||
        e === ie ||
        e === ae ||
        e === fe ||
        e === pe ||
        ("object" == typeof e &&
          null !== e &&
          (e.$$typeof === me ||
            e.$$typeof === he ||
            e.$$typeof === se ||
            e.$$typeof === ce ||
            e.$$typeof === de ||
            e.$$typeof === ye ||
            e.$$typeof === be ||
            e.$$typeof === ve ||
            e.$$typeof === ge))
      );
    },
    typeOf: we,
  },
  Ce = A(function (e, t) {
    "production" !== process.env.NODE_ENV &&
      (function () {
        var e = "function" == typeof Symbol && Symbol.for,
          r = e ? Symbol.for("react.element") : 60103,
          n = e ? Symbol.for("react.portal") : 60106,
          o = e ? Symbol.for("react.fragment") : 60107,
          a = e ? Symbol.for("react.strict_mode") : 60108,
          i = e ? Symbol.for("react.profiler") : 60114,
          s = e ? Symbol.for("react.provider") : 60109,
          c = e ? Symbol.for("react.context") : 60110,
          l = e ? Symbol.for("react.async_mode") : 60111,
          u = e ? Symbol.for("react.concurrent_mode") : 60111,
          d = e ? Symbol.for("react.forward_ref") : 60112,
          f = e ? Symbol.for("react.suspense") : 60113,
          p = e ? Symbol.for("react.suspense_list") : 60120,
          h = e ? Symbol.for("react.memo") : 60115,
          m = e ? Symbol.for("react.lazy") : 60116,
          g = e ? Symbol.for("react.block") : 60121,
          y = e ? Symbol.for("react.fundamental") : 60117,
          b = e ? Symbol.for("react.responder") : 60118,
          v = e ? Symbol.for("react.scope") : 60119;
        function w(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                var p = e.type;
                switch (p) {
                  case l:
                  case u:
                  case o:
                  case i:
                  case a:
                  case f:
                    return p;
                  default:
                    var g = p && p.$$typeof;
                    switch (g) {
                      case c:
                      case d:
                      case m:
                      case h:
                      case s:
                        return g;
                      default:
                        return t;
                    }
                }
              case n:
                return t;
            }
          }
        }
        var k = u,
          S = c,
          C = s,
          E = r,
          x = d,
          A = o,
          $ = m,
          P = h,
          _ = n,
          O = i,
          R = a,
          N = f,
          T = !1;
        function I(e) {
          return w(e) === u;
        }
        (t.AsyncMode = l),
          (t.ConcurrentMode = k),
          (t.ContextConsumer = S),
          (t.ContextProvider = C),
          (t.Element = E),
          (t.ForwardRef = x),
          (t.Fragment = A),
          (t.Lazy = $),
          (t.Memo = P),
          (t.Portal = _),
          (t.Profiler = O),
          (t.StrictMode = R),
          (t.Suspense = N),
          (t.isAsyncMode = function (e) {
            return (
              T ||
                ((T = !0),
                console.warn(
                  "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                )),
              I(e) || w(e) === l
            );
          }),
          (t.isConcurrentMode = I),
          (t.isContextConsumer = function (e) {
            return w(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === s;
          }),
          (t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === d;
          }),
          (t.isFragment = function (e) {
            return w(e) === o;
          }),
          (t.isLazy = function (e) {
            return w(e) === m;
          }),
          (t.isMemo = function (e) {
            return w(e) === h;
          }),
          (t.isPortal = function (e) {
            return w(e) === n;
          }),
          (t.isProfiler = function (e) {
            return w(e) === i;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === a;
          }),
          (t.isSuspense = function (e) {
            return w(e) === f;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === o ||
              e === u ||
              e === i ||
              e === a ||
              e === f ||
              e === p ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === h ||
                  e.$$typeof === s ||
                  e.$$typeof === c ||
                  e.$$typeof === d ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === v ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = w);
      })();
  }),
  Ee = A(function (e) {
    e.exports = "production" === process.env.NODE_ENV ? Se : Ce;
  }),
  xe = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Ae = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  $e = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Pe = {};
function _e(e) {
  return Ee.isMemo(e) ? $e : Pe[e.$$typeof] || xe;
}
(Pe[Ee.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
}),
  (Pe[Ee.Memo] = $e);
var Oe = Object.defineProperty,
  Re = Object.getOwnPropertyNames,
  Ne = Object.getOwnPropertySymbols,
  Te = Object.getOwnPropertyDescriptor,
  Ie = Object.getPrototypeOf,
  Me = Object.prototype,
  je = function e(t, r, n) {
    if ("string" != typeof r) {
      if (Me) {
        var o = Ie(r);
        o && o !== Me && e(t, o, n);
      }
      var a = Re(r);
      Ne && (a = a.concat(Ne(r)));
      for (var i = _e(t), s = _e(r), c = 0; c < a.length; ++c) {
        var l = a[c];
        if (!(Ae[l] || (n && n[l]) || (s && s[l]) || (i && i[l]))) {
          var u = Te(r, l);
          try {
            Oe(t, l, u);
          } catch (e) {}
        }
      }
    }
    return t;
  };
function De() {
  return (De =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
var Le = function (e, t) {
    for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
      r.push(t[n], e[n + 1]);
    return r;
  },
  ze = function (e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "[object Object]" ===
        (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
      !q.typeOf(e)
    );
  },
  Fe = Object.freeze([]),
  Be = Object.freeze({});
function Ve(e) {
  return "function" == typeof e;
}
function He(e) {
  return (
    ("production" !== process.env.NODE_ENV && "string" == typeof e && e) ||
    e.displayName ||
    e.name ||
    "Component"
  );
}
function Ue(e) {
  return e && "string" == typeof e.styledComponentId;
}
var Ge =
    ("undefined" != typeof process &&
      (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
    "data-styled",
  We = "undefined" != typeof window && "HTMLElement" in window,
  Ye = Boolean(
    "boolean" == typeof SC_DISABLE_SPEEDY
      ? SC_DISABLE_SPEEDY
      : "undefined" != typeof process &&
        void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
        "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY
      ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
        process.env.REACT_APP_SC_DISABLE_SPEEDY
      : "undefined" != typeof process &&
        void 0 !== process.env.SC_DISABLE_SPEEDY &&
        "" !== process.env.SC_DISABLE_SPEEDY
      ? "false" !== process.env.SC_DISABLE_SPEEDY &&
        process.env.SC_DISABLE_SPEEDY
      : "production" !== process.env.NODE_ENV
  ),
  qe =
    "production" !== process.env.NODE_ENV
      ? {
          1: "Cannot create styled-component for component: %s.\n\n",
          2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
          3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
          4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
          5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
          6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
          7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
          8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
          9: "Missing document `<head>`\n\n",
          10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
          11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
          12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
          13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
          14: 'ThemeProvider: "theme" prop is required.\n\n',
          15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
          16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
          17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
        }
      : {};
function Xe() {
  for (
    var e = arguments.length <= 0 ? void 0 : arguments[0],
      t = [],
      r = 1,
      n = arguments.length;
    r < n;
    r += 1
  )
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return (
    t.forEach(function (t) {
      e = e.replace(/%[a-z]/, t);
    }),
    e
  );
}
function Je(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  throw "production" === process.env.NODE_ENV
    ? new Error(
        "An error occurred. See https://git.io/JUIaE#" +
          e +
          " for more information." +
          (r.length > 0 ? " Args: " + r.join(", ") : "")
      )
    : new Error(Xe.apply(void 0, [qe[e]].concat(r)).trim());
}
var Ze = (function () {
    function e(e) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = e);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (e) {
        for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
        return t;
      }),
      (t.insertRules = function (e, t) {
        if (e >= this.groupSizes.length) {
          for (var r = this.groupSizes, n = r.length, o = n; e >= o; )
            (o <<= 1) < 0 && Je(16, "" + e);
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(r),
            (this.length = o);
          for (var a = n; a < o; a++) this.groupSizes[a] = 0;
        }
        for (var i = this.indexOfGroup(e + 1), s = 0, c = t.length; s < c; s++)
          this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++);
      }),
      (t.clearGroup = function (e) {
        if (e < this.length) {
          var t = this.groupSizes[e],
            r = this.indexOfGroup(e),
            n = r + t;
          this.groupSizes[e] = 0;
          for (var o = r; o < n; o++) this.tag.deleteRule(r);
        }
      }),
      (t.getGroup = function (e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e]) return t;
        for (
          var r = this.groupSizes[e],
            n = this.indexOfGroup(e),
            o = n + r,
            a = n;
          a < o;
          a++
        )
          t += this.tag.getRule(a) + "/*!sc*/\n";
        return t;
      }),
      e
    );
  })(),
  Ke = new Map(),
  Qe = new Map(),
  et = 1,
  tt = function (e) {
    if (Ke.has(e)) return Ke.get(e);
    for (; Qe.has(et); ) et++;
    var t = et++;
    return (
      "production" !== process.env.NODE_ENV &&
        ((0 | t) < 0 || t > 1 << 30) &&
        Je(16, "" + t),
      Ke.set(e, t),
      Qe.set(t, e),
      t
    );
  },
  rt = function (e) {
    return Qe.get(e);
  },
  nt = function (e, t) {
    Ke.set(e, t), Qe.set(t, e);
  },
  ot = "style[" + Ge + '][data-styled-version="5.3.0"]',
  at = new RegExp("^" + Ge + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  it = function (e, t, r) {
    for (var n, o = r.split(","), a = 0, i = o.length; a < i; a++)
      (n = o[a]) && e.registerName(t, n);
  },
  st = function (e, t) {
    for (
      var r = t.innerHTML.split("/*!sc*/\n"), n = [], o = 0, a = r.length;
      o < a;
      o++
    ) {
      var i = r[o].trim();
      if (i) {
        var s = i.match(at);
        if (s) {
          var c = 0 | parseInt(s[1], 10),
            l = s[2];
          0 !== c && (nt(l, c), it(e, l, s[3]), e.getTag().insertRules(c, n)),
            (n.length = 0);
        } else n.push(i);
      }
    }
  },
  ct = function (e) {
    var t = document.head,
      r = e || t,
      n = document.createElement("style"),
      o = (function (e) {
        for (var t = e.childNodes, r = t.length; r >= 0; r--) {
          var n = t[r];
          if (n && 1 === n.nodeType && n.hasAttribute(Ge)) return n;
        }
      })(r),
      a = void 0 !== o ? o.nextSibling : null;
    n.setAttribute(Ge, "active"),
      n.setAttribute("data-styled-version", "5.3.0");
    var i =
      "undefined" != typeof window && void 0 !== window.__webpack_nonce__
        ? window.__webpack_nonce__
        : null;
    return i && n.setAttribute("nonce", i), r.insertBefore(n, a), n;
  },
  lt = (function () {
    function e(e) {
      var t = (this.element = ct(e));
      t.appendChild(document.createTextNode("")),
        (this.sheet = (function (e) {
          if (e.sheet) return e.sheet;
          for (var t = document.styleSheets, r = 0, n = t.length; r < n; r++) {
            var o = t[r];
            if (o.ownerNode === e) return o;
          }
          Je(17);
        })(t)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (e, t) {
        try {
          return this.sheet.insertRule(t, e), this.length++, !0;
        } catch (e) {
          return !1;
        }
      }),
      (t.deleteRule = function (e) {
        this.sheet.deleteRule(e), this.length--;
      }),
      (t.getRule = function (e) {
        var t = this.sheet.cssRules[e];
        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
      }),
      e
    );
  })(),
  ut = (function () {
    function e(e) {
      var t = (this.element = ct(e));
      (this.nodes = t.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (e, t) {
        if (e <= this.length && e >= 0) {
          var r = document.createTextNode(t);
          return (
            this.element.insertBefore(r, this.nodes[e] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (t.deleteRule = function (e) {
        this.element.removeChild(this.nodes[e]), this.length--;
      }),
      (t.getRule = function (e) {
        return e < this.length ? this.nodes[e].textContent : "";
      }),
      e
    );
  })(),
  dt = (function () {
    function e(e) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (e, t) {
        return (
          e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
        );
      }),
      (t.deleteRule = function (e) {
        this.rules.splice(e, 1), this.length--;
      }),
      (t.getRule = function (e) {
        return e < this.length ? this.rules[e] : "";
      }),
      e
    );
  })(),
  ft = We,
  pt = { isServer: !We, useCSSOMInjection: !Ye },
  ht = (function () {
    function e(e, t, r) {
      void 0 === e && (e = Be),
        void 0 === t && (t = {}),
        (this.options = De({}, pt, {}, e)),
        (this.gs = t),
        (this.names = new Map(r)),
        !this.options.isServer &&
          We &&
          ft &&
          ((ft = !1),
          (function (e) {
            for (
              var t = document.querySelectorAll(ot), r = 0, n = t.length;
              r < n;
              r++
            ) {
              var o = t[r];
              o &&
                "active" !== o.getAttribute(Ge) &&
                (st(e, o), o.parentNode && o.parentNode.removeChild(o));
            }
          })(this));
    }
    e.registerId = function (e) {
      return tt(e);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (t, r) {
        return (
          void 0 === r && (r = !0),
          new e(
            De({}, this.options, {}, t),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (e) {
        return (this.gs[e] = (this.gs[e] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((r = (t = this.options).isServer),
            (n = t.useCSSOMInjection),
            (o = t.target),
            (e = r ? new dt(o) : n ? new lt(o) : new ut(o)),
            new Ze(e)))
        );
        var e, t, r, n, o;
      }),
      (t.hasNameForId = function (e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
      }),
      (t.registerName = function (e, t) {
        if ((tt(e), this.names.has(e))) this.names.get(e).add(t);
        else {
          var r = new Set();
          r.add(t), this.names.set(e, r);
        }
      }),
      (t.insertRules = function (e, t, r) {
        this.registerName(e, t), this.getTag().insertRules(tt(e), r);
      }),
      (t.clearNames = function (e) {
        this.names.has(e) && this.names.get(e).clear();
      }),
      (t.clearRules = function (e) {
        this.getTag().clearGroup(tt(e)), this.clearNames(e);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (e) {
          for (var t = e.getTag(), r = t.length, n = "", o = 0; o < r; o++) {
            var a = rt(o);
            if (void 0 !== a) {
              var i = e.names.get(a),
                s = t.getGroup(o);
              if (void 0 !== i && 0 !== s.length) {
                var c = Ge + ".g" + o + '[id="' + a + '"]',
                  l = "";
                void 0 !== i &&
                  i.forEach(function (e) {
                    e.length > 0 && (l += e + ",");
                  }),
                  (n += "" + s + c + '{content:"' + l + '"}/*!sc*/\n');
              }
            }
          }
          return n;
        })(this);
      }),
      e
    );
  })(),
  mt = /(a)(d)/gi,
  gt = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function yt(e) {
  var t,
    r = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = gt(t % 52) + r;
  return (gt(t % 52) + r).replace(mt, "$1-$2");
}
var bt = function (e, t) {
    for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
    return e;
  },
  vt = function (e) {
    return bt(5381, e);
  },
  wt = vt("5.3.0"),
  kt = (function () {
    function e(e, t, r) {
      (this.rules = e),
        (this.staticRulesId = ""),
        (this.isStatic =
          "production" === process.env.NODE_ENV &&
          (void 0 === r || r.isStatic) &&
          (function (e) {
            for (var t = 0; t < e.length; t += 1) {
              var r = e[t];
              if (Ve(r) && !Ue(r)) return !1;
            }
            return !0;
          })(e)),
        (this.componentId = t),
        (this.baseHash = bt(wt, t)),
        (this.baseStyle = r),
        ht.registerId(t);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (e, t, r) {
        var n = this.componentId,
          o = [];
        if (
          (this.baseStyle &&
            o.push(this.baseStyle.generateAndInjectStyles(e, t, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && t.hasNameForId(n, this.staticRulesId))
            o.push(this.staticRulesId);
          else {
            var a = Mt(this.rules, e, t, r).join(""),
              i = yt(bt(this.baseHash, a.length) >>> 0);
            if (!t.hasNameForId(n, i)) {
              var s = r(a, "." + i, void 0, n);
              t.insertRules(n, i, s);
            }
            o.push(i), (this.staticRulesId = i);
          }
        else {
          for (
            var c = this.rules.length,
              l = bt(this.baseHash, r.hash),
              u = "",
              d = 0;
            d < c;
            d++
          ) {
            var f = this.rules[d];
            if ("string" == typeof f)
              (u += f),
                "production" !== process.env.NODE_ENV && (l = bt(l, f + d));
            else if (f) {
              var p = Mt(f, e, t, r),
                h = Array.isArray(p) ? p.join("") : p;
              (l = bt(l, h + d)), (u += h);
            }
          }
          if (u) {
            var m = yt(l >>> 0);
            if (!t.hasNameForId(n, m)) {
              var g = r(u, "." + m, void 0, n);
              t.insertRules(n, m, g);
            }
            o.push(m);
          }
        }
        return o.join(" ");
      }),
      e
    );
  })(),
  St = /^\s*\/\/.*$/gm,
  Ct = [":", "[", ".", "#"],
  Et = e.createContext(),
  xt = e.createContext(),
  At = new ht(),
  $t = (function (e) {
    var t,
      r,
      n,
      o,
      a = Be.options,
      i = Be.plugins,
      s = void 0 === i ? Fe : i,
      c = new X(void 0 === a ? Be : a),
      l = [],
      u = (function (e) {
        function t(t) {
          if (t)
            try {
              e(t + "}");
            } catch (e) {}
        }
        return function (r, n, o, a, i, s, c, l, u, d) {
          switch (r) {
            case 1:
              if (0 === u && 64 === n.charCodeAt(0)) return e(n + ";"), "";
              break;
            case 2:
              if (0 === l) return n + "/*|*/";
              break;
            case 3:
              switch (l) {
                case 102:
                case 112:
                  return e(o[0] + n), "";
                default:
                  return n + (0 === d ? "/*|*/" : "");
              }
            case -2:
              n.split("/*|*/}").forEach(t);
          }
        };
      })(function (e) {
        l.push(e);
      }),
      d = function (e, n, a) {
        return (0 === n && -1 !== Ct.indexOf(a[r.length])) || a.match(o)
          ? e
          : "." + t;
      };
    function f(e, a, i, s) {
      void 0 === s && (s = "&");
      var l = e.replace(St, ""),
        u = a && i ? i + " " + a + " { " + l + " }" : l;
      return (
        (t = s),
        (r = a),
        (n = new RegExp("\\" + r + "\\b", "g")),
        (o = new RegExp("(\\" + r + "\\b){2,}")),
        c(i || !a ? "" : a, u)
      );
    }
    return (
      c.use(
        [].concat(s, [
          function (e, t, o) {
            2 === e &&
              o.length &&
              o[0].lastIndexOf(r) > 0 &&
              (o[0] = o[0].replace(n, d));
          },
          u,
          function (e) {
            if (-2 === e) {
              var t = l;
              return (l = []), t;
            }
          },
        ])
      ),
      (f.hash = s.length
        ? s
            .reduce(function (e, t) {
              return t.name || Je(15), bt(e, t.name);
            }, 5381)
            .toString()
        : ""),
      f
    );
  })(),
  Pt = (function () {
    function e(e, t) {
      var r = this;
      (this.inject = function (e, t) {
        void 0 === t && (t = $t);
        var n = r.name + t.hash;
        e.hasNameForId(r.id, n) ||
          e.insertRules(r.id, n, t(r.rules, n, "@keyframes"));
      }),
        (this.toString = function () {
          return Je(12, String(r.name));
        }),
        (this.name = e),
        (this.id = "sc-keyframes-" + e),
        (this.rules = t);
    }
    return (
      (e.prototype.getName = function (e) {
        return void 0 === e && (e = $t), this.name + e.hash;
      }),
      e
    );
  })(),
  _t = /([A-Z])/,
  Ot = /([A-Z])/g,
  Rt = /^ms-/,
  Nt = function (e) {
    return "-" + e.toLowerCase();
  };
function Tt(e) {
  return _t.test(e) ? e.replace(Ot, Nt).replace(Rt, "-ms-") : e;
}
var It = function (e) {
  return null == e || !1 === e || "" === e;
};
function Mt(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, a = [], i = 0, s = e.length; i < s; i += 1)
      "" !== (o = Mt(e[i], t, r, n)) &&
        (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
    return a;
  }
  if (It(e)) return "";
  if (Ue(e)) return "." + e.styledComponentId;
  if (Ve(e)) {
    if (
      "function" != typeof (l = e) ||
      (l.prototype && l.prototype.isReactComponent) ||
      !t
    )
      return e;
    var c = e(t);
    return (
      "production" !== process.env.NODE_ENV &&
        q.isElement(c) &&
        console.warn(
          He(e) +
            " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."
        ),
      Mt(c, t, r, n)
    );
  }
  var l;
  return e instanceof Pt
    ? r
      ? (e.inject(r, n), e.getName(n))
      : e
    : ze(e)
    ? (function e(t, r) {
        var n,
          o = [];
        for (var a in t)
          t.hasOwnProperty(a) &&
            !It(t[a]) &&
            (ze(t[a])
              ? o.push.apply(o, e(t[a], a))
              : Ve(t[a])
              ? o.push(Tt(a) + ":", t[a], ";")
              : o.push(
                  Tt(a) +
                    ": " +
                    (null == (n = t[a]) || "boolean" == typeof n || "" === n
                      ? ""
                      : "number" != typeof n || 0 === n || a in K
                      ? String(n).trim()
                      : n + "px") +
                    ";"
                ));
        return r ? [r + " {"].concat(o, ["}"]) : o;
      })(e)
    : e.toString();
}
function jt(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  return Ve(e) || ze(e)
    ? Mt(Le(Fe, [e].concat(r)))
    : 0 === r.length && 1 === e.length && "string" == typeof e[0]
    ? e
    : Mt(Le(e, r));
}
var Dt = /invalid hook call/i,
  Lt = new Set(),
  zt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Ft = /(^-|-$)/g;
function Bt(e) {
  return e.replace(zt, "-").replace(Ft, "");
}
function Vt(e) {
  return (
    "string" == typeof e &&
    ("production" === process.env.NODE_ENV ||
      e.charAt(0) === e.charAt(0).toLowerCase())
  );
}
var Ht = function (e) {
    return (
      "function" == typeof e ||
      ("object" == typeof e && null !== e && !Array.isArray(e))
    );
  },
  Ut = function (e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
  };
function Gt(e, t, r) {
  var n = e[r];
  Ht(t) && Ht(n) ? Wt(n, t) : (e[r] = t);
}
function Wt(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  for (var o = 0, a = r; o < a.length; o++) {
    var i = a[o];
    if (Ht(i)) for (var s in i) Ut(s) && Gt(e, i[s], s);
  }
  return e;
}
var Yt = e.createContext(),
  qt = {};
function Xt(a, i, s) {
  var c = Ue(a),
    l = !Vt(a),
    u = i.attrs,
    d = void 0 === u ? Fe : u,
    f = i.componentId,
    p =
      void 0 === f
        ? (function (e, t) {
            var r = "string" != typeof e ? "sc" : Bt(e);
            qt[r] = (qt[r] || 0) + 1;
            var n =
              r +
              "-" +
              (function (e) {
                return yt(vt(e) >>> 0);
              })("5.3.0" + r + qt[r]);
            return t ? t + "-" + n : n;
          })(i.displayName, i.parentComponentId)
        : f,
    h = i.displayName,
    m =
      void 0 === h
        ? (function (e) {
            return Vt(e) ? "styled." + e : "Styled(" + He(e) + ")";
          })(a)
        : h,
    g =
      i.displayName && i.componentId
        ? Bt(i.displayName) + "-" + i.componentId
        : i.componentId || p,
    y = c && a.attrs ? Array.prototype.concat(a.attrs, d).filter(Boolean) : d,
    b = i.shouldForwardProp;
  c &&
    a.shouldForwardProp &&
    (b = i.shouldForwardProp
      ? function (e, t, r) {
          return a.shouldForwardProp(e, t, r) && i.shouldForwardProp(e, t, r);
        }
      : a.shouldForwardProp);
  var v,
    w = new kt(s, g, c ? a.componentStyle : void 0),
    k = w.isStatic && 0 === d.length,
    S = function (e, t) {
      return (function (e, t, a, i) {
        var s = e.attrs,
          c = e.componentStyle,
          l = e.defaultProps,
          u = e.foldedComponentIds,
          d = e.shouldForwardProp,
          f = e.styledComponentId,
          p = e.target;
        "production" !== process.env.NODE_ENV && r(f);
        var h = (function (e, t, r) {
            void 0 === e && (e = Be);
            var n = De({}, t, { theme: e }),
              o = {};
            return (
              r.forEach(function (e) {
                var t,
                  r,
                  a,
                  i = e;
                for (t in (Ve(i) && (i = i(n)), i))
                  n[t] = o[t] =
                    "className" === t
                      ? ((a = i[t]), (r = o[t]) && a ? r + " " + a : r || a)
                      : i[t];
              }),
              [n, o]
            );
          })(
            (function (e, t, r) {
              return (
                void 0 === r && (r = Be),
                (e.theme !== r.theme && e.theme) || t || r.theme
              );
            })(t, n(Yt), l) || Be,
            t,
            s
          ),
          m = h[1],
          g = (function (e, t, o, a) {
            var i = n(Et) || At,
              s = n(xt) || $t,
              c = e.generateAndInjectStyles(t ? Be : o, i, s);
            return (
              "production" !== process.env.NODE_ENV && r(c),
              "production" !== process.env.NODE_ENV && !t && a && a(c),
              c
            );
          })(
            c,
            i,
            h[0],
            "production" !== process.env.NODE_ENV
              ? e.warnTooManyClasses
              : void 0
          ),
          y = a,
          b = m.$as || t.$as || m.as || t.as || p,
          v = Vt(b),
          w = m !== t ? De({}, t, {}, m) : t,
          k = {};
        for (var S in w)
          "$" !== S[0] &&
            "as" !== S &&
            ("forwardedAs" === S
              ? (k.as = w[S])
              : (d ? d(S, ee, b) : !v || ee(S)) && (k[S] = w[S]));
        return (
          t.style &&
            m.style !== t.style &&
            (k.style = De({}, t.style, {}, m.style)),
          (k.className = Array.prototype
            .concat(u, f, g !== f ? g : null, t.className, m.className)
            .filter(Boolean)
            .join(" ")),
          (k.ref = y),
          o(b, k)
        );
      })(v, e, t, k);
    };
  return (
    (S.displayName = m),
    ((v = e.forwardRef(S)).attrs = y),
    (v.componentStyle = w),
    (v.displayName = m),
    (v.shouldForwardProp = b),
    (v.foldedComponentIds = c
      ? Array.prototype.concat(a.foldedComponentIds, a.styledComponentId)
      : Fe),
    (v.styledComponentId = g),
    (v.target = c ? a.target : a),
    (v.withComponent = function (e) {
      var t = i.componentId,
        r = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            o = {},
            a = Object.keys(e);
          for (n = 0; n < a.length; n++)
            t.indexOf((r = a[n])) >= 0 || (o[r] = e[r]);
          return o;
        })(i, ["componentId"]),
        n = t && t + "-" + (Vt(e) ? e : Bt(He(e)));
      return Xt(e, De({}, r, { attrs: y, componentId: n }), s);
    }),
    Object.defineProperty(v, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (e) {
        this._foldedDefaultProps = c ? Wt({}, a.defaultProps, e) : e;
      },
    }),
    "production" !== process.env.NODE_ENV &&
      ((function (e, r) {
        if ("production" !== process.env.NODE_ENV) {
          var n =
            "The component " +
            e +
            (r ? ' with the id of "' + r + '"' : "") +
            " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";
          try {
            t(), Lt.has(n) || (console.warn(n), Lt.add(n));
          } catch (e) {
            Dt.test(e.message) && Lt.delete(n);
          }
        }
      })(m, g),
      (v.warnTooManyClasses = (function (e, t) {
        var r = {},
          n = !1;
        return function (o) {
          !n &&
            ((r[o] = !0), Object.keys(r).length >= 200) &&
            (console.warn(
              "Over 200 classes were generated for component " +
                e +
                (t ? ' with the id of "' + t + '"' : "") +
                ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"
            ),
            (n = !0),
            (r = {}));
        };
      })(m, g))),
    (v.toString = function () {
      return "." + v.styledComponentId;
    }),
    l &&
      je(v, a, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    v
  );
}
var Jt = function (e) {
  return (function e(t, r, n) {
    if ((void 0 === n && (n = Be), !q.isValidElementType(r)))
      return Je(1, String(r));
    var o = function () {
      return t(r, n, jt.apply(void 0, arguments));
    };
    return (
      (o.withConfig = function (o) {
        return e(t, r, De({}, n, {}, o));
      }),
      (o.attrs = function (o) {
        return e(
          t,
          r,
          De({}, n, {
            attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
          })
        );
      }),
      o
    );
  })(Xt, e);
};
let Zt;
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (e) {
  Jt[e] = Jt(e);
}),
  "production" !== process.env.NODE_ENV &&
    "undefined" != typeof navigator &&
    "ReactNative" === navigator.product &&
    console.warn(
      "It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"
    ),
  "production" !== process.env.NODE_ENV &&
    "test" !== process.env.NODE_ENV &&
    ((window["__styled-components-init__"] =
      window["__styled-components-init__"] || 0),
    1 === window["__styled-components-init__"] &&
      console.warn(
        "It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."
      ),
    (window["__styled-components-init__"] += 1));
const Kt = Jt.div(
    Zt ||
      (Zt = ((e) => e)`
  background-color: #252530;
  overflow-y: auto;
  font-feature-settings: normal;
  width: 100%;
  height: 100%;
`)
  ),
  Qt = ({ code: t, language: r, onChange: n }) =>
    e.createElement(
      Kt,
      null,
      e.createElement(h, {
        value: t,
        onValueChange: (e) => n(e, r),
        style: { height: "100%" },
        highlight: (t) =>
          e.createElement(
            m,
            Object.assign({}, g, { theme: y, code: t, language: r }),
            ({ tokens: t, getLineProps: r, getTokenProps: n }) =>
              e.createElement(
                a,
                null,
                t.map((t, o) =>
                  e.createElement(
                    "div",
                    Object.assign({}, r({ line: t, key: o })),
                    t.map((t, r) =>
                      e.createElement(
                        "span",
                        Object.assign({}, n({ token: t, key: r }))
                      )
                    )
                  )
                )
              )
          ),
        padding: 10,
      })
    ),
  er = (e) => `@media (max-width: ${e}px)`,
  tr = Object.freeze({
    custom: er,
    desktop: er(922),
    tablet: er(768),
    phone: er(576),
  });
let rr,
  nr,
  or,
  ar,
  ir,
  sr = (e) => e;
const cr = Jt(S)(
    rr ||
      (rr = sr`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 350px;
  background: #252530;

  ${0} {
    min-width: 100% !important;
    min-height: 100%;
  }
`),
    tr.phone
  ),
  lr = Jt(b)(
    nr ||
      (nr = sr`
  background-color: #252530;
`)
  ),
  ur = Jt(v)(
    or ||
      (or = sr`
  border: none;
  padding: 8px 5px;
  color: gray;

  &[data-selected] {
    color: lightgray;
  }
`)
  ),
  dr = Jt(w)(
    ar ||
      (ar = sr`
  flex: 1 1 0%;
`)
  ),
  fr = Jt(k)(
    ir ||
      (ir = sr`
  height: 100%;
  width: 100%;
`)
  );
function pr({ code: t, defaultTab: r, onChange: n, width: o }) {
  const a = i(
    () => [
      { name: "HTML", value: "markup" },
      { name: "CSS", value: "css" },
      { name: "JS", value: "javascript" },
    ],
    []
  );
  return e.createElement(
    cr,
    { defaultIndex: a.findIndex((e) => e.value === r), style: { width: o } },
    e.createElement(
      lr,
      null,
      a.map((t) => e.createElement(ur, { key: t.value }, t.name))
    ),
    e.createElement(
      dr,
      null,
      a.map((r) =>
        e.createElement(
          fr,
          { key: r.value },
          e.createElement(Qt, {
            code: t[r.value],
            onChange: n,
            language: r.value,
          })
        )
      )
    )
  );
}
let hr;
const mr = Jt.div(
  hr ||
    (hr = ((e) => e)`
  background-color: black;
  color: white;
  height: 100%;

  li {
    font-size: 16px !important;
  }
`)
);
function gr({ logs: t }) {
  return e.createElement(
    mr,
    null,
    t.map((t, r) =>
      e.createElement(C, { data: t, key: r, theme: "chromeDark" })
    )
  );
}
let yr;
const br = Jt.div(
    yr ||
      (yr = ((e) => e)`
  background-color: red;
  color: white;
  padding: 0.2em 0.5em;
  position: absolute;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
`)
  ),
  vr = ({ error: t }) =>
    e.createElement(br, null, e.createElement("p", null, t));
let wr;
const kr = Jt.div(
    wr ||
      (wr = ((e) => e)`
  position: relative;
  height: 100%;
  background: white;
  border-radius: 8px;

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
  Sr = s(({ id: t, snippet: r, transformJs: n, presets: o }) => {
    const [a, s] = c(""),
      [u, d] = c(null);
    return (
      i(() => {
        try {
          const e = (function ({ markup: e, css: t, javascript: r }, n, o, a) {
            return `\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8"/>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>\n      <title>Document</title>\n      <style>${t}</style>\n    </head>\n    <body>\n      ${e}\n      <span></span>\n      <script>\n        var _privateLog = console.log;\n        console.log = function(...rest) {\n          if(typeof window !== 'undefined') {\n            window.parent.postMessage({\n              source: "frame-${n}",\n              message: {\n                type: "log",\n                data: rest\n              },\n            }, "*");\n          }\n          _privateLog.apply(console, arguments);\n        }\n        window.onerror = function(message) {\n          if(typeof window !== 'undefined') {\n            window.parent.postMessage({\n              source: "frame-${n}",\n              message: {\n                type: "error",\n                data: message\n              },\n            }, "*");\n          }\n        }\n      <\/script>\n      <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n      ${
              o
                ? `\n        <script type="module">\n          const BareIdentifierFormat = /^((?:@[^\\/]+\\/)?[^\\/]+)(\\/.*)?$/\n\n          function validUrl(url) {\n            try {\n              new URL(url);\n              return true;\n            } catch(err) {\n              return false;\n            }\n          }\n\n          function unpkg(dependencies = {}) {\n            return {\n              visitor: {\n                "ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration"(path) {\n                  if (\n                    !path.node.source || // Probably a variable declaration\n                    validUrl(path.node.source.value) || // Valid URL\n                    path.node.source.value.substr(0, 2) === "//" || // URL w/o protocol\n                    [".", "/"].indexOf(path.node.source.value.charAt(0)) >= 0 // Local path\n                  )\n                    return; // Leave it alone\n\n                  // A "bare" identifier\n                  const match = BareIdentifierFormat.exec(path.node.source.value);\n                  const packageName = match[1];\n                  const file = match[2] || "";\n\n                  console.warn(\n                    dependencies[packageName],\n                    'Missing version for package "%s" in dependencies; falling back to "latest"',\n                    packageName\n                  );\n\n                  const version = dependencies[packageName] || "latest";\n\n                  path.node.source.value = \`https://unpkg.com/\${packageName}@\${version}\${file}?module\`;\n                }\n              }\n            };\n          }\n\n          Babel.registerPlugin('unpkg', unpkg);\n\n          const code = Babel.transform(decodeURI(\`${encodeURI(
                    r
                  )}\`), {\n            plugins: ['unpkg'],\n            presets: ${JSON.stringify(
                    a
                  )}  \n          }).code;\n          const script = document.createElement("script");\n          script.type = "module";\n          script.innerHTML = code;\n          document.body.appendChild(script);\n        <\/script>\n      `
                : `\n        <script>\n          ${r}\n        <\/script>\n      `
            }\n    </body>\n    </html>\n  `;
          })(r, t, n, o);
          s(e), d(null);
        } catch (e) {
          d(e.message);
        }
      }, [r, n]),
      l(() => {
        "undefined" != typeof window &&
          window.addEventListener("message", (e) => {
            e.data.source === `frame-${t}` &&
              "error" === e.data.message.type &&
              d(e.data.message.data);
          });
      }, [t]),
      e.createElement(
        kr,
        null,
        e.createElement("iframe", {
          height: "100%",
          width: "100%",
          title: "example",
          frameBorder: "0",
          srcDoc: a,
        }),
        u && e.createElement(vr, { error: u })
      )
    );
  });
function Cr(t) {
  const [r, n] = c([]),
    o = i(
      () => [
        { name: "Result", value: "result" },
        { name: "Console", value: "console" },
      ],
      []
    );
  return (
    l(() => {
      "undefined" != typeof window &&
        window.addEventListener("message", (e) => {
          e.data.source === `frame-${t.id}` &&
            "log" === e.data.message.type &&
            n((t) => [...t, ...e.data.message.data]);
        });
    }, [t.id]),
    e.createElement(
      cr,
      {
        defaultIndex: o.findIndex((e) => e.value === t.defaultTab),
        style: { width: t.width },
      },
      e.createElement(
        lr,
        null,
        o.map((t) => e.createElement(ur, { key: t.value }, t.name))
      ),
      e.createElement(
        dr,
        null,
        e.createElement(
          fr,
          null,
          e.createElement(Sr, {
            id: t.id,
            snippet: t.snippet,
            transformJs: t.transformJs,
            presets: t.presets,
          })
        ),
        e.createElement(fr, null, e.createElement(gr, { logs: r }))
      )
    )
  );
}
const Er = {
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
  xr = {
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
  Ar = {
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
  $r = u(Ar),
  Pr = () => n($r);
function _r({ mode: t, userTheme: r, children: n }) {
  const [o, a] = c(Ar);
  return (
    l(() => {
      a(
        (function (e = "light") {
          return E(Ar, "light" === e ? Er : xr);
        })(t)
      );
    }, [t]),
    e.createElement($r.Provider, { value: null != r ? r : o }, n)
  );
}
let Or,
  Rr,
  Nr = (e) => e;
const Tr = Jt.div(
    Or ||
      (Or = Nr`
  display: flex;
  border: 16px solid #252530;
  border-radius: 8px;

  ${0} {
    flex-direction: column;
  }
`),
    tr.phone
  ),
  Ir = Jt.div(
    Rr ||
      (Rr = Nr`
  width: 15px;
  cursor: col-resize;
  background-color: #252530;
`)
  );
function Mr(r) {
  const n = t(null),
    o = t(null),
    a = Pr(),
    { leftWidth: i, rightWidth: s } = (function ({
      containerRef: e,
      dividerRef: t,
      dividerWidth: r,
    }) {
      const [n, o] = c(0),
        [a, i] = c(null);
      l(() => {
        const t = e.current;
        if (t) {
          const e = t.clientWidth,
            r = t.getBoundingClientRect();
          i(r), o(e / 2);
        }
      }, []);
      const s = d(
          (e) => {
            const { clientX: t } = e;
            a && o(t - a.left);
          },
          [a]
        ),
        u = d(() => {
          document.removeEventListener("mousemove", s),
            document.removeEventListener("mouseup", u);
        }, [s]),
        f = d(() => {
          document.addEventListener("mousemove", s),
            document.addEventListener("mouseup", u);
        }, [s, u]);
      return (
        l(() => {
          const e = t.current;
          return (
            e && e.addEventListener("mousedown", f),
            () => {
              e && e.removeEventListener("mousedown", f);
            }
          );
        }, [f]),
        { leftWidth: n, rightWidth: a ? a.width - n - r : 0 }
      );
    })({ containerRef: n, dividerRef: o, dividerWidth: a.divider.width });
  return e.createElement(
    Tr,
    { ref: n },
    r.leftChild(i),
    e.createElement(Ir, { ref: o }),
    r.rightChild(s)
  );
}
function jr({
  id: t,
  initialSnippet: r,
  defaultEditorTab: n = "markup",
  defaultResultTab: o = "result",
  transformJs: a = !1,
  presets: i = [],
  theme: s,
  mode: l = "light",
}) {
  const [u, d] = c(r),
    p = f(t),
    h = (e, t) => {
      d((r) => x({}, r, { [t]: e }));
    };
  return e.createElement(
    _r,
    { userTheme: s, mode: l },
    e.createElement(
      "div",
      { className: "playground" },
      e.createElement(Mr, {
        leftChild: (t) =>
          e.createElement(pr, {
            width: t,
            code: u,
            defaultTab: n,
            onChange: h,
          }),
        rightChild: (t) =>
          e.createElement(Cr, {
            width: t,
            id: p,
            snippet: u,
            defaultTab: o,
            transformJs: a,
            presets: i,
          }),
      })
    )
  );
}
p(o, void 0, Pr);
export default jr;
//# sourceMappingURL=playground.modern.js.map
