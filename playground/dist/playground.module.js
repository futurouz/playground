import e, {
  useRef as t,
  useDebugValue as n,
  useContext as r,
  createElement as o,
  Fragment as a,
  useMemo as i,
  memo as s,
  useState as c,
  useEffect as l,
  createContext as u,
  useCallback as d,
} from "react";
import { useId as p } from "@reach/auto-id";
import { setup as f } from "goober";
import h from "react-simple-code-editor";
import m, { defaultProps as g } from "prism-react-renderer";
import y from "prism-react-renderer/themes/nightOwl";
import {
  TabList as v,
  Tab as b,
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
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
function A(e, t) {
  return t || (t = e.slice(0)), (e.raw = t), e;
}
function P(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var O = "function" == typeof Symbol && Symbol.for,
  _ = O ? Symbol.for("react.element") : 60103,
  N = O ? Symbol.for("react.portal") : 60106,
  R = O ? Symbol.for("react.fragment") : 60107,
  I = O ? Symbol.for("react.strict_mode") : 60108,
  T = O ? Symbol.for("react.profiler") : 60114,
  $ = O ? Symbol.for("react.provider") : 60109,
  D = O ? Symbol.for("react.context") : 60110,
  j = O ? Symbol.for("react.async_mode") : 60111,
  M = O ? Symbol.for("react.concurrent_mode") : 60111,
  L = O ? Symbol.for("react.forward_ref") : 60112,
  z = O ? Symbol.for("react.suspense") : 60113,
  F = O ? Symbol.for("react.suspense_list") : 60120,
  B = O ? Symbol.for("react.memo") : 60115,
  V = O ? Symbol.for("react.lazy") : 60116,
  H = O ? Symbol.for("react.block") : 60121,
  U = O ? Symbol.for("react.fundamental") : 60117,
  G = O ? Symbol.for("react.responder") : 60118,
  W = O ? Symbol.for("react.scope") : 60119;
function Y(e) {
  if ("object" == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case _:
        switch ((e = e.type)) {
          case j:
          case M:
          case R:
          case T:
          case I:
          case z:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case D:
              case L:
              case V:
              case B:
              case $:
                return e;
              default:
                return t;
            }
        }
      case N:
        return t;
    }
  }
}
function q(e) {
  return Y(e) === M;
}
var X = {
    AsyncMode: j,
    ConcurrentMode: M,
    ContextConsumer: D,
    ContextProvider: $,
    Element: _,
    ForwardRef: L,
    Fragment: R,
    Lazy: V,
    Memo: B,
    Portal: N,
    Profiler: T,
    StrictMode: I,
    Suspense: z,
    isAsyncMode: function (e) {
      return q(e) || Y(e) === j;
    },
    isConcurrentMode: q,
    isContextConsumer: function (e) {
      return Y(e) === D;
    },
    isContextProvider: function (e) {
      return Y(e) === $;
    },
    isElement: function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === _;
    },
    isForwardRef: function (e) {
      return Y(e) === L;
    },
    isFragment: function (e) {
      return Y(e) === R;
    },
    isLazy: function (e) {
      return Y(e) === V;
    },
    isMemo: function (e) {
      return Y(e) === B;
    },
    isPortal: function (e) {
      return Y(e) === N;
    },
    isProfiler: function (e) {
      return Y(e) === T;
    },
    isStrictMode: function (e) {
      return Y(e) === I;
    },
    isSuspense: function (e) {
      return Y(e) === z;
    },
    isValidElementType: function (e) {
      return (
        "string" == typeof e ||
        "function" == typeof e ||
        e === R ||
        e === M ||
        e === T ||
        e === I ||
        e === z ||
        e === F ||
        ("object" == typeof e &&
          null !== e &&
          (e.$$typeof === V ||
            e.$$typeof === B ||
            e.$$typeof === $ ||
            e.$$typeof === D ||
            e.$$typeof === L ||
            e.$$typeof === U ||
            e.$$typeof === G ||
            e.$$typeof === W ||
            e.$$typeof === H))
      );
    },
    typeOf: Y,
  },
  J = P(function (e, t) {
    "production" !== process.env.NODE_ENV &&
      (function () {
        var e = "function" == typeof Symbol && Symbol.for,
          n = e ? Symbol.for("react.element") : 60103,
          r = e ? Symbol.for("react.portal") : 60106,
          o = e ? Symbol.for("react.fragment") : 60107,
          a = e ? Symbol.for("react.strict_mode") : 60108,
          i = e ? Symbol.for("react.profiler") : 60114,
          s = e ? Symbol.for("react.provider") : 60109,
          c = e ? Symbol.for("react.context") : 60110,
          l = e ? Symbol.for("react.async_mode") : 60111,
          u = e ? Symbol.for("react.concurrent_mode") : 60111,
          d = e ? Symbol.for("react.forward_ref") : 60112,
          p = e ? Symbol.for("react.suspense") : 60113,
          f = e ? Symbol.for("react.suspense_list") : 60120,
          h = e ? Symbol.for("react.memo") : 60115,
          m = e ? Symbol.for("react.lazy") : 60116,
          g = e ? Symbol.for("react.block") : 60121,
          y = e ? Symbol.for("react.fundamental") : 60117,
          v = e ? Symbol.for("react.responder") : 60118,
          b = e ? Symbol.for("react.scope") : 60119;
        function w(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                var f = e.type;
                switch (f) {
                  case l:
                  case u:
                  case o:
                  case i:
                  case a:
                  case p:
                    return f;
                  default:
                    var g = f && f.$$typeof;
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
              case r:
                return t;
            }
          }
        }
        var k = u,
          S = c,
          C = s,
          E = n,
          x = d,
          A = o,
          P = m,
          O = h,
          _ = r,
          N = i,
          R = a,
          I = p,
          T = !1;
        function $(e) {
          return w(e) === u;
        }
        (t.AsyncMode = l),
          (t.ConcurrentMode = k),
          (t.ContextConsumer = S),
          (t.ContextProvider = C),
          (t.Element = E),
          (t.ForwardRef = x),
          (t.Fragment = A),
          (t.Lazy = P),
          (t.Memo = O),
          (t.Portal = _),
          (t.Profiler = N),
          (t.StrictMode = R),
          (t.Suspense = I),
          (t.isAsyncMode = function (e) {
            return (
              T ||
                ((T = !0),
                console.warn(
                  "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                )),
              $(e) || w(e) === l
            );
          }),
          (t.isConcurrentMode = $),
          (t.isContextConsumer = function (e) {
            return w(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === s;
          }),
          (t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === n;
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
            return w(e) === r;
          }),
          (t.isProfiler = function (e) {
            return w(e) === i;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === a;
          }),
          (t.isSuspense = function (e) {
            return w(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === o ||
              e === u ||
              e === i ||
              e === a ||
              e === p ||
              e === f ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === h ||
                  e.$$typeof === s ||
                  e.$$typeof === c ||
                  e.$$typeof === d ||
                  e.$$typeof === y ||
                  e.$$typeof === v ||
                  e.$$typeof === b ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = w);
      })();
  }),
  Z = P(function (e) {
    e.exports = "production" === process.env.NODE_ENV ? X : J;
  });
function K(e) {
  function t(e, r, c, l, p) {
    for (
      var f,
        h,
        m,
        g,
        w,
        S = 0,
        C = 0,
        E = 0,
        x = 0,
        A = 0,
        I = 0,
        $ = (m = f = 0),
        j = 0,
        M = 0,
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
        if (j === B && (0 < M && (V = V.replace(d, "")), 0 < V.trim().length)) {
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
            for (f = (V = V.trim()).charCodeAt(0), m = 1, z = ++j; j < F; ) {
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
                        for ($ = j + 1; $ < B; ++$)
                          switch (c.charCodeAt($)) {
                            case 47:
                              if (
                                42 === h &&
                                42 === c.charCodeAt($ - 1) &&
                                j + 2 !== $
                              ) {
                                j = $ + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (47 === h) {
                                j = $ + 1;
                                break e;
                              }
                          }
                        j = $;
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
              0 === f && (f = (V = V.replace(u, "").trim()).charCodeAt(0)),
              f)
            ) {
              case 64:
                switch (
                  (0 < M && (V = V.replace(d, "")), (h = V.charCodeAt(1)))
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    M = r;
                    break;
                  default:
                    M = R;
                }
                if (
                  ((z = (m = t(r, M, m, h, p + 1)).length),
                  0 < T &&
                    ((w = s(3, m, (M = n(R, V, L)), r, O, P, z, h, p, l)),
                    (V = M.join("")),
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
                          1 === N || (2 === N && a("@" + m, 3))
                            ? "@-webkit-" + m + "@" + m
                            : "@" + m);
                      break;
                    default:
                      (m = V + m), 112 === l && ((H += m), (m = ""));
                  }
                else m = "";
                break;
              default:
                m = t(r, n(r, V, L), m, l, p + 1);
            }
            (U += m),
              (m = L = M = $ = f = 0),
              (V = ""),
              (h = c.charCodeAt(++j));
            break;
          case 125:
          case 59:
            if (1 < (z = (V = (0 < M ? V.replace(d, "") : V).trim()).length))
              switch (
                (0 === $ &&
                  ((f = V.charCodeAt(0)), 45 === f || (96 < f && 123 > f)) &&
                  (z = (V = V.replace(" ", ":")).length),
                0 < T &&
                  void 0 !== (w = s(1, V, r, e, O, P, H.length, l, p, l)) &&
                  0 === (z = (V = w.trim()).length) &&
                  (V = "\0\0"),
                (f = V.charCodeAt(0)),
                (h = V.charCodeAt(1)),
                f)
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
                    (H += o(V, f, h, V.charCodeAt(2)));
              }
            (L = M = $ = f = 0), (V = ""), (h = c.charCodeAt(++j));
        }
      }
      switch (h) {
        case 13:
        case 10:
          47 === C
            ? (C = 0)
            : 0 === 1 + f &&
              107 !== l &&
              0 < V.length &&
              ((M = 1), (V += "\0")),
            0 < T * D && s(0, V, r, e, O, P, H.length, l, p, l),
            (P = 1),
            O++;
          break;
        case 59:
        case 125:
          if (0 === C + x + E + S) {
            P++;
            break;
          }
        default:
          switch ((P++, (g = c.charAt(j)), h)) {
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
              0 === x + C + S && ((M = L = 1), (g = "\f" + g));
              break;
            case 108:
              if (0 === x + C + S + _ && 0 < $)
                switch (j - $) {
                  case 2:
                    112 === A && 58 === c.charCodeAt(j - 3) && (_ = A);
                  case 8:
                    111 === I && (_ = I);
                }
              break;
            case 58:
              0 === x + C + S && ($ = j);
              break;
            case 44:
              0 === C + E + x + S && ((M = 1), (g += "\r"));
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
                if (0 === f)
                  switch (2 * A + 3 * I) {
                    case 533:
                      break;
                    default:
                      f = 1;
                  }
                E++;
              }
              break;
            case 64:
              0 === C + E + x + S + $ + m && (m = 1);
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
      (I = A), (A = h), j++;
    }
    if (0 < (z = H.length)) {
      if (
        ((M = r),
        0 < T &&
          void 0 !== (w = s(2, H, M, e, O, P, z, l, p, l)) &&
          0 === (H = w).length)
      )
        return G + H + U;
      if (((H = M.join(",") + "{" + H + "}"), 0 != N * _)) {
        switch ((2 !== N || a(H, 2) || (_ = 0), _)) {
          case 111:
            H = H.replace(b, ":-moz-$1") + H;
            break;
          case 112:
            H =
              H.replace(v, "::-webkit-input-$1") +
              H.replace(v, "::-moz-$1") +
              H.replace(v, ":-ms-input-$1") +
              H;
        }
        _ = 0;
      }
    }
    return G + H + U;
  }
  function n(e, t, n) {
    var o = t.trim().split(m);
    t = o;
    var a = o.length,
      i = e.length;
    switch (i) {
      case 0:
      case 1:
        var s = 0;
        for (e = 0 === i ? "" : e[0] + " "; s < a; ++s)
          t[s] = r(e, t[s], n).trim();
        break;
      default:
        var c = (s = 0);
        for (t = []; s < a; ++s)
          for (var l = 0; l < i; ++l) t[c++] = r(e[l] + " ", o[s], n).trim();
    }
    return t;
  }
  function r(e, t, n) {
    var r = t.charCodeAt(0);
    switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
      case 38:
        return t.replace(g, "$1" + e.trim());
      case 58:
        return e.trim() + t.replace(g, "$1" + e.trim());
      default:
        if (0 < 1 * n && 0 < t.indexOf("\f"))
          return t.replace(g, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim());
    }
    return e + t;
  }
  function o(e, t, n, r) {
    var i = e + ";",
      s = 2 * t + 3 * n + 4 * r;
    if (944 === s) {
      e = i.indexOf(":", 9) + 1;
      var c = i.substring(e, i.length - 1).trim();
      return (
        (c = i.substring(0, e).trim() + c + ";"),
        1 === N || (2 === N && a(c, 1)) ? "-webkit-" + c + c : c
      );
    }
    if (0 === N || (2 === N && !a(i, 1))) return i;
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
        return f.test(i)
          ? i.replace(p, ":-webkit-") + i.replace(p, ":-moz-") + i
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
            ? o(e.replace("stretch", "fill-available"), t, n, r).replace(
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
          211 === n + r &&
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
    var n = e.indexOf(1 === t ? ":" : "{"),
      r = e.substring(0, 3 !== t ? n : 10);
    return (
      (n = e.substring(n + 1, e.length - 1)),
      $(2 !== t ? r : r.replace(E, "$1"), n, t)
    );
  }
  function i(e, t) {
    var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
    return n !== t + ";"
      ? n.replace(S, " or ($1)").substring(4)
      : "(" + t + ")";
  }
  function s(e, t, n, r, o, a, i, s, c, u) {
    for (var d, p = 0, f = t; p < T; ++p)
      switch ((d = I[p].call(l, e, f, n, r, o, a, i, s, c, u))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          f = d;
      }
    if (f !== t) return f;
  }
  function c(e) {
    return (
      void 0 !== (e = e.prefix) &&
        (($ = null),
        e ? ("function" != typeof e ? (N = 1) : ((N = 2), ($ = e))) : (N = 0)),
      c
    );
  }
  function l(e, n) {
    var r = e;
    if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < T)) {
      var o = s(-1, n, r, r, O, P, 0, 0, 0, 0);
      void 0 !== o && "string" == typeof o && (n = o);
    }
    var a = t(R, r, n, 0, 0);
    return (
      0 < T &&
        void 0 !== (o = s(-2, a, r, r, O, P, a.length, 0, 0, 0)) &&
        (a = o),
      (_ = 0),
      (P = O = 1),
      a
    );
  }
  var u = /^\0+/g,
    d = /[\0\r\f]/g,
    p = /: */g,
    f = /zoo|gra/,
    h = /([,: ])(transform)/g,
    m = /,\r+?/g,
    g = /([\t\r\n ])*\f?&/g,
    y = /@(k\w+)\s*(\S*)\s*/,
    v = /::(place)/g,
    b = /:(read-only)/g,
    w = /[svh]\w+-[tblr]{2}/,
    k = /\(\s*(.*)\s*\)/g,
    S = /([\s\S]*?);/g,
    C = /-self|flex-/g,
    E = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    x = /stretch|:\s*\w+\-(?:conte|avail)/,
    A = /([^-])(image-set\()/,
    P = 1,
    O = 1,
    _ = 0,
    N = 1,
    R = [],
    I = [],
    T = 0,
    $ = null,
    D = 0;
  return (
    (l.use = function e(t) {
      switch (t) {
        case void 0:
        case null:
          T = I.length = 0;
          break;
        default:
          if ("function" == typeof t) I[T++] = t;
          else if ("object" == typeof t)
            for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
          else D = 0 | !!t;
      }
      return e;
    }),
    (l.set = c),
    void 0 !== e && c(e),
    l
  );
}
var Q,
  ee,
  te = {
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
  ne = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  re =
    ((Q = function (e) {
      return (
        ne.test(e) ||
        (111 === e.charCodeAt(0) &&
          110 === e.charCodeAt(1) &&
          e.charCodeAt(2) < 91)
      );
    }),
    (ee = {}),
    function (e) {
      return void 0 === ee[e] && (ee[e] = Q(e)), ee[e];
    }),
  oe = {
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
  ae = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  ie = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  se = {};
function ce(e) {
  return Z.isMemo(e) ? ie : se[e.$$typeof] || oe;
}
(se[Z.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
}),
  (se[Z.Memo] = ie);
var le = Object.defineProperty,
  ue = Object.getOwnPropertyNames,
  de = Object.getOwnPropertySymbols,
  pe = Object.getOwnPropertyDescriptor,
  fe = Object.getPrototypeOf,
  he = Object.prototype,
  me = function e(t, n, r) {
    if ("string" != typeof n) {
      if (he) {
        var o = fe(n);
        o && o !== he && e(t, o, r);
      }
      var a = ue(n);
      de && (a = a.concat(de(n)));
      for (var i = ce(t), s = ce(n), c = 0; c < a.length; ++c) {
        var l = a[c];
        if (!(ae[l] || (r && r[l]) || (s && s[l]) || (i && i[l]))) {
          var u = pe(n, l);
          try {
            le(t, l, u);
          } catch (e) {}
        }
      }
    }
    return t;
  };
function ge() {
  return (ge =
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
var ye = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  ve = function (e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "[object Object]" ===
        (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
      !Z.typeOf(e)
    );
  },
  be = Object.freeze([]),
  we = Object.freeze({});
function ke(e) {
  return "function" == typeof e;
}
function Se(e) {
  return (
    ("production" !== process.env.NODE_ENV && "string" == typeof e && e) ||
    e.displayName ||
    e.name ||
    "Component"
  );
}
function Ce(e) {
  return e && "string" == typeof e.styledComponentId;
}
var Ee =
    ("undefined" != typeof process &&
      (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
    "data-styled",
  xe = "undefined" != typeof window && "HTMLElement" in window,
  Ae = Boolean(
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
  Pe =
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
function Oe() {
  for (
    var e = arguments.length <= 0 ? void 0 : arguments[0],
      t = [],
      n = 1,
      r = arguments.length;
    n < r;
    n += 1
  )
    t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
  return (
    t.forEach(function (t) {
      e = e.replace(/%[a-z]/, t);
    }),
    e
  );
}
function _e(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw "production" === process.env.NODE_ENV
    ? new Error(
        "An error occurred. See https://git.io/JUIaE#" +
          e +
          " for more information." +
          (n.length > 0 ? " Args: " + n.join(", ") : "")
      )
    : new Error(Oe.apply(void 0, [Pe[e]].concat(n)).trim());
}
var Ne = (function () {
    function e(e) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = e);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (e) {
        for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
        return t;
      }),
      (t.insertRules = function (e, t) {
        if (e >= this.groupSizes.length) {
          for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
            (o <<= 1) < 0 && _e(16, "" + e);
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(n),
            (this.length = o);
          for (var a = r; a < o; a++) this.groupSizes[a] = 0;
        }
        for (var i = this.indexOfGroup(e + 1), s = 0, c = t.length; s < c; s++)
          this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++);
      }),
      (t.clearGroup = function (e) {
        if (e < this.length) {
          var t = this.groupSizes[e],
            n = this.indexOfGroup(e),
            r = n + t;
          this.groupSizes[e] = 0;
          for (var o = n; o < r; o++) this.tag.deleteRule(n);
        }
      }),
      (t.getGroup = function (e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e]) return t;
        for (
          var n = this.groupSizes[e],
            r = this.indexOfGroup(e),
            o = r + n,
            a = r;
          a < o;
          a++
        )
          t += this.tag.getRule(a) + "/*!sc*/\n";
        return t;
      }),
      e
    );
  })(),
  Re = new Map(),
  Ie = new Map(),
  Te = 1,
  $e = function (e) {
    if (Re.has(e)) return Re.get(e);
    for (; Ie.has(Te); ) Te++;
    var t = Te++;
    return (
      "production" !== process.env.NODE_ENV &&
        ((0 | t) < 0 || t > 1 << 30) &&
        _e(16, "" + t),
      Re.set(e, t),
      Ie.set(t, e),
      t
    );
  },
  De = function (e) {
    return Ie.get(e);
  },
  je = function (e, t) {
    Re.set(e, t), Ie.set(t, e);
  },
  Me = "style[" + Ee + '][data-styled-version="5.3.0"]',
  Le = new RegExp("^" + Ee + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ze = function (e, t, n) {
    for (var r, o = n.split(","), a = 0, i = o.length; a < i; a++)
      (r = o[a]) && e.registerName(t, r);
  },
  Fe = function (e, t) {
    for (
      var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, a = n.length;
      o < a;
      o++
    ) {
      var i = n[o].trim();
      if (i) {
        var s = i.match(Le);
        if (s) {
          var c = 0 | parseInt(s[1], 10),
            l = s[2];
          0 !== c && (je(l, c), ze(e, l, s[3]), e.getTag().insertRules(c, r)),
            (r.length = 0);
        } else r.push(i);
      }
    }
  },
  Be = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (e) {
        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
          var r = t[n];
          if (r && 1 === r.nodeType && r.hasAttribute(Ee)) return r;
        }
      })(n),
      a = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(Ee, "active"),
      r.setAttribute("data-styled-version", "5.3.0");
    var i =
      "undefined" != typeof window && void 0 !== window.__webpack_nonce__
        ? window.__webpack_nonce__
        : null;
    return i && r.setAttribute("nonce", i), n.insertBefore(r, a), r;
  },
  Ve = (function () {
    function e(e) {
      var t = (this.element = Be(e));
      t.appendChild(document.createTextNode("")),
        (this.sheet = (function (e) {
          if (e.sheet) return e.sheet;
          for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
            var o = t[n];
            if (o.ownerNode === e) return o;
          }
          _e(17);
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
  He = (function () {
    function e(e) {
      var t = (this.element = Be(e));
      (this.nodes = t.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (e, t) {
        if (e <= this.length && e >= 0) {
          var n = document.createTextNode(t);
          return (
            this.element.insertBefore(n, this.nodes[e] || null),
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
  Ue = (function () {
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
  Ge = xe,
  We = { isServer: !xe, useCSSOMInjection: !Ae },
  Ye = (function () {
    function e(e, t, n) {
      void 0 === e && (e = we),
        void 0 === t && (t = {}),
        (this.options = ge({}, We, {}, e)),
        (this.gs = t),
        (this.names = new Map(n)),
        !this.options.isServer &&
          xe &&
          Ge &&
          ((Ge = !1),
          (function (e) {
            for (
              var t = document.querySelectorAll(Me), n = 0, r = t.length;
              n < r;
              n++
            ) {
              var o = t[n];
              o &&
                "active" !== o.getAttribute(Ee) &&
                (Fe(e, o), o.parentNode && o.parentNode.removeChild(o));
            }
          })(this));
    }
    e.registerId = function (e) {
      return $e(e);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (t, n) {
        return (
          void 0 === n && (n = !0),
          new e(
            ge({}, this.options, {}, t),
            this.gs,
            (n && this.names) || void 0
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
            ((n = (t = this.options).isServer),
            (r = t.useCSSOMInjection),
            (o = t.target),
            (e = n ? new Ue(o) : r ? new Ve(o) : new He(o)),
            new Ne(e)))
        );
        var e, t, n, r, o;
      }),
      (t.hasNameForId = function (e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
      }),
      (t.registerName = function (e, t) {
        if (($e(e), this.names.has(e))) this.names.get(e).add(t);
        else {
          var n = new Set();
          n.add(t), this.names.set(e, n);
        }
      }),
      (t.insertRules = function (e, t, n) {
        this.registerName(e, t), this.getTag().insertRules($e(e), n);
      }),
      (t.clearNames = function (e) {
        this.names.has(e) && this.names.get(e).clear();
      }),
      (t.clearRules = function (e) {
        this.getTag().clearGroup($e(e)), this.clearNames(e);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (e) {
          for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
            var a = De(o);
            if (void 0 !== a) {
              var i = e.names.get(a),
                s = t.getGroup(o);
              if (void 0 !== i && 0 !== s.length) {
                var c = Ee + ".g" + o + '[id="' + a + '"]',
                  l = "";
                void 0 !== i &&
                  i.forEach(function (e) {
                    e.length > 0 && (l += e + ",");
                  }),
                  (r += "" + s + c + '{content:"' + l + '"}/*!sc*/\n');
              }
            }
          }
          return r;
        })(this);
      }),
      e
    );
  })(),
  qe = /(a)(d)/gi,
  Xe = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Je(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Xe(t % 52) + n;
  return (Xe(t % 52) + n).replace(qe, "$1-$2");
}
var Ze = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Ke = function (e) {
    return Ze(5381, e);
  },
  Qe = Ke("5.3.0"),
  et = (function () {
    function e(e, t, n) {
      (this.rules = e),
        (this.staticRulesId = ""),
        (this.isStatic =
          "production" === process.env.NODE_ENV &&
          (void 0 === n || n.isStatic) &&
          (function (e) {
            for (var t = 0; t < e.length; t += 1) {
              var n = e[t];
              if (ke(n) && !Ce(n)) return !1;
            }
            return !0;
          })(e)),
        (this.componentId = t),
        (this.baseHash = Ze(Qe, t)),
        (this.baseStyle = n),
        Ye.registerId(t);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (e, t, n) {
        var r = this.componentId,
          o = [];
        if (
          (this.baseStyle &&
            o.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
          this.isStatic && !n.hash)
        )
          if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
            o.push(this.staticRulesId);
          else {
            var a = ht(this.rules, e, t, n).join(""),
              i = Je(Ze(this.baseHash, a.length) >>> 0);
            if (!t.hasNameForId(r, i)) {
              var s = n(a, "." + i, void 0, r);
              t.insertRules(r, i, s);
            }
            o.push(i), (this.staticRulesId = i);
          }
        else {
          for (
            var c = this.rules.length,
              l = Ze(this.baseHash, n.hash),
              u = "",
              d = 0;
            d < c;
            d++
          ) {
            var p = this.rules[d];
            if ("string" == typeof p)
              (u += p),
                "production" !== process.env.NODE_ENV && (l = Ze(l, p + d));
            else if (p) {
              var f = ht(p, e, t, n),
                h = Array.isArray(f) ? f.join("") : f;
              (l = Ze(l, h + d)), (u += h);
            }
          }
          if (u) {
            var m = Je(l >>> 0);
            if (!t.hasNameForId(r, m)) {
              var g = n(u, "." + m, void 0, r);
              t.insertRules(r, m, g);
            }
            o.push(m);
          }
        }
        return o.join(" ");
      }),
      e
    );
  })(),
  tt = /^\s*\/\/.*$/gm,
  nt = [":", "[", ".", "#"],
  rt = e.createContext(),
  ot = e.createContext(),
  at = new Ye(),
  it = (function (e) {
    var t,
      n,
      r,
      o,
      a = we.options,
      i = we.plugins,
      s = void 0 === i ? be : i,
      c = new K(void 0 === a ? we : a),
      l = [],
      u = (function (e) {
        function t(t) {
          if (t)
            try {
              e(t + "}");
            } catch (e) {}
        }
        return function (n, r, o, a, i, s, c, l, u, d) {
          switch (n) {
            case 1:
              if (0 === u && 64 === r.charCodeAt(0)) return e(r + ";"), "";
              break;
            case 2:
              if (0 === l) return r + "/*|*/";
              break;
            case 3:
              switch (l) {
                case 102:
                case 112:
                  return e(o[0] + r), "";
                default:
                  return r + (0 === d ? "/*|*/" : "");
              }
            case -2:
              r.split("/*|*/}").forEach(t);
          }
        };
      })(function (e) {
        l.push(e);
      }),
      d = function (e, r, a) {
        return (0 === r && -1 !== nt.indexOf(a[n.length])) || a.match(o)
          ? e
          : "." + t;
      };
    function p(e, a, i, s) {
      void 0 === s && (s = "&");
      var l = e.replace(tt, ""),
        u = a && i ? i + " " + a + " { " + l + " }" : l;
      return (
        (t = s),
        (n = a),
        (r = new RegExp("\\" + n + "\\b", "g")),
        (o = new RegExp("(\\" + n + "\\b){2,}")),
        c(i || !a ? "" : a, u)
      );
    }
    return (
      c.use(
        [].concat(s, [
          function (e, t, o) {
            2 === e &&
              o.length &&
              o[0].lastIndexOf(n) > 0 &&
              (o[0] = o[0].replace(r, d));
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
      (p.hash = s.length
        ? s
            .reduce(function (e, t) {
              return t.name || _e(15), Ze(e, t.name);
            }, 5381)
            .toString()
        : ""),
      p
    );
  })(),
  st = (function () {
    function e(e, t) {
      var n = this;
      (this.inject = function (e, t) {
        void 0 === t && (t = it);
        var r = n.name + t.hash;
        e.hasNameForId(n.id, r) ||
          e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
      }),
        (this.toString = function () {
          return _e(12, String(n.name));
        }),
        (this.name = e),
        (this.id = "sc-keyframes-" + e),
        (this.rules = t);
    }
    return (
      (e.prototype.getName = function (e) {
        return void 0 === e && (e = it), this.name + e.hash;
      }),
      e
    );
  })(),
  ct = /([A-Z])/,
  lt = /([A-Z])/g,
  ut = /^ms-/,
  dt = function (e) {
    return "-" + e.toLowerCase();
  };
function pt(e) {
  return ct.test(e) ? e.replace(lt, dt).replace(ut, "-ms-") : e;
}
var ft = function (e) {
  return null == e || !1 === e || "" === e;
};
function ht(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, a = [], i = 0, s = e.length; i < s; i += 1)
      "" !== (o = ht(e[i], t, n, r)) &&
        (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
    return a;
  }
  if (ft(e)) return "";
  if (Ce(e)) return "." + e.styledComponentId;
  if (ke(e)) {
    if (
      "function" != typeof (l = e) ||
      (l.prototype && l.prototype.isReactComponent) ||
      !t
    )
      return e;
    var c = e(t);
    return (
      "production" !== process.env.NODE_ENV &&
        Z.isElement(c) &&
        console.warn(
          Se(e) +
            " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."
        ),
      ht(c, t, n, r)
    );
  }
  var l;
  return e instanceof st
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : ve(e)
    ? (function e(t, n) {
        var r,
          o = [];
        for (var a in t)
          t.hasOwnProperty(a) &&
            !ft(t[a]) &&
            (ve(t[a])
              ? o.push.apply(o, e(t[a], a))
              : ke(t[a])
              ? o.push(pt(a) + ":", t[a], ";")
              : o.push(
                  pt(a) +
                    ": " +
                    (null == (r = t[a]) || "boolean" == typeof r || "" === r
                      ? ""
                      : "number" != typeof r || 0 === r || a in te
                      ? String(r).trim()
                      : r + "px") +
                    ";"
                ));
        return n ? [n + " {"].concat(o, ["}"]) : o;
      })(e)
    : e.toString();
}
function mt(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return ke(e) || ve(e)
    ? ht(ye(be, [e].concat(n)))
    : 0 === n.length && 1 === e.length && "string" == typeof e[0]
    ? e
    : ht(ye(e, n));
}
var gt = /invalid hook call/i,
  yt = new Set(),
  vt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  bt = /(^-|-$)/g;
function wt(e) {
  return e.replace(vt, "-").replace(bt, "");
}
function kt(e) {
  return (
    "string" == typeof e &&
    ("production" === process.env.NODE_ENV ||
      e.charAt(0) === e.charAt(0).toLowerCase())
  );
}
var St = function (e) {
    return (
      "function" == typeof e ||
      ("object" == typeof e && null !== e && !Array.isArray(e))
    );
  },
  Ct = function (e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
  };
function Et(e, t, n) {
  var r = e[n];
  St(t) && St(r) ? xt(r, t) : (e[n] = t);
}
function xt(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var o = 0, a = n; o < a.length; o++) {
    var i = a[o];
    if (St(i)) for (var s in i) Ct(s) && Et(e, i[s], s);
  }
  return e;
}
var At = e.createContext(),
  Pt = {};
function Ot(a, i, s) {
  var c = Ce(a),
    l = !kt(a),
    u = i.attrs,
    d = void 0 === u ? be : u,
    p = i.componentId,
    f =
      void 0 === p
        ? (function (e, t) {
            var n = "string" != typeof e ? "sc" : wt(e);
            Pt[n] = (Pt[n] || 0) + 1;
            var r =
              n +
              "-" +
              (function (e) {
                return Je(Ke(e) >>> 0);
              })("5.3.0" + n + Pt[n]);
            return t ? t + "-" + r : r;
          })(i.displayName, i.parentComponentId)
        : p,
    h = i.displayName,
    m =
      void 0 === h
        ? (function (e) {
            return kt(e) ? "styled." + e : "Styled(" + Se(e) + ")";
          })(a)
        : h,
    g =
      i.displayName && i.componentId
        ? wt(i.displayName) + "-" + i.componentId
        : i.componentId || f,
    y = c && a.attrs ? Array.prototype.concat(a.attrs, d).filter(Boolean) : d,
    v = i.shouldForwardProp;
  c &&
    a.shouldForwardProp &&
    (v = i.shouldForwardProp
      ? function (e, t, n) {
          return a.shouldForwardProp(e, t, n) && i.shouldForwardProp(e, t, n);
        }
      : a.shouldForwardProp);
  var b,
    w = new et(s, g, c ? a.componentStyle : void 0),
    k = w.isStatic && 0 === d.length,
    S = function (e, t) {
      return (function (e, t, a, i) {
        var s = e.attrs,
          c = e.componentStyle,
          l = e.defaultProps,
          u = e.foldedComponentIds,
          d = e.shouldForwardProp,
          p = e.styledComponentId,
          f = e.target;
        "production" !== process.env.NODE_ENV && n(p);
        var h = (function (e, t, n) {
            void 0 === e && (e = we);
            var r = ge({}, t, { theme: e }),
              o = {};
            return (
              n.forEach(function (e) {
                var t,
                  n,
                  a,
                  i = e;
                for (t in (ke(i) && (i = i(r)), i))
                  r[t] = o[t] =
                    "className" === t
                      ? ((a = i[t]), (n = o[t]) && a ? n + " " + a : n || a)
                      : i[t];
              }),
              [r, o]
            );
          })(
            (function (e, t, n) {
              return (
                void 0 === n && (n = we),
                (e.theme !== n.theme && e.theme) || t || n.theme
              );
            })(t, r(At), l) || we,
            t,
            s
          ),
          m = h[1],
          g = (function (e, t, o, a) {
            var i = r(rt) || at,
              s = r(ot) || it,
              c = e.generateAndInjectStyles(t ? we : o, i, s);
            return (
              "production" !== process.env.NODE_ENV && n(c),
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
          v = m.$as || t.$as || m.as || t.as || f,
          b = kt(v),
          w = m !== t ? ge({}, t, {}, m) : t,
          k = {};
        for (var S in w)
          "$" !== S[0] &&
            "as" !== S &&
            ("forwardedAs" === S
              ? (k.as = w[S])
              : (d ? d(S, re, v) : !b || re(S)) && (k[S] = w[S]));
        return (
          t.style &&
            m.style !== t.style &&
            (k.style = ge({}, t.style, {}, m.style)),
          (k.className = Array.prototype
            .concat(u, p, g !== p ? g : null, t.className, m.className)
            .filter(Boolean)
            .join(" ")),
          (k.ref = y),
          o(v, k)
        );
      })(b, e, t, k);
    };
  return (
    (S.displayName = m),
    ((b = e.forwardRef(S)).attrs = y),
    (b.componentStyle = w),
    (b.displayName = m),
    (b.shouldForwardProp = v),
    (b.foldedComponentIds = c
      ? Array.prototype.concat(a.foldedComponentIds, a.styledComponentId)
      : be),
    (b.styledComponentId = g),
    (b.target = c ? a.target : a),
    (b.withComponent = function (e) {
      var t = i.componentId,
        n = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            t.indexOf((n = a[r])) >= 0 || (o[n] = e[n]);
          return o;
        })(i, ["componentId"]),
        r = t && t + "-" + (kt(e) ? e : wt(Se(e)));
      return Ot(e, ge({}, n, { attrs: y, componentId: r }), s);
    }),
    Object.defineProperty(b, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (e) {
        this._foldedDefaultProps = c ? xt({}, a.defaultProps, e) : e;
      },
    }),
    "production" !== process.env.NODE_ENV &&
      ((function (e, n) {
        if ("production" !== process.env.NODE_ENV) {
          var r =
            "The component " +
            e +
            (n ? ' with the id of "' + n + '"' : "") +
            " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";
          try {
            t(), yt.has(r) || (console.warn(r), yt.add(r));
          } catch (e) {
            gt.test(e.message) && yt.delete(r);
          }
        }
      })(m, g),
      (b.warnTooManyClasses = (function (e, t) {
        var n = {},
          r = !1;
        return function (o) {
          !r &&
            ((n[o] = !0), Object.keys(n).length >= 200) &&
            (console.warn(
              "Over 200 classes were generated for component " +
                e +
                (t ? ' with the id of "' + t + '"' : "") +
                ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"
            ),
            (r = !0),
            (n = {}));
        };
      })(m, g))),
    (b.toString = function () {
      return "." + b.styledComponentId;
    }),
    l &&
      me(b, a, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    b
  );
}
var _t,
  Nt = function (e) {
    return (function e(t, n, r) {
      if ((void 0 === r && (r = we), !Z.isValidElementType(n)))
        return _e(1, String(n));
      var o = function () {
        return t(n, r, mt.apply(void 0, arguments));
      };
      return (
        (o.withConfig = function (o) {
          return e(t, n, ge({}, r, {}, o));
        }),
        (o.attrs = function (o) {
          return e(
            t,
            n,
            ge({}, r, {
              attrs: Array.prototype.concat(r.attrs, o).filter(Boolean),
            })
          );
        }),
        o
      );
    })(Ot, e);
  };
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
  Nt[e] = Nt(e);
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
var Rt,
  It,
  Tt,
  $t,
  Dt,
  jt,
  Mt,
  Lt,
  zt,
  Ft,
  Bt = Nt.div(
    _t ||
      (_t = A([
        "\n  background-color: #252530;\n  overflow-y: auto;\n  font-feature-settings: normal;\n  width: 100%;\n  height: 100%;\n",
      ]))
  ),
  Vt = function (t) {
    var n = t.language,
      r = t.onChange;
    return e.createElement(
      Bt,
      null,
      e.createElement(h, {
        value: t.code,
        onValueChange: function (e) {
          return r(e, n);
        },
        style: { height: "100%" },
        highlight: function (t) {
          return e.createElement(
            m,
            Object.assign({}, g, { theme: y, code: t, language: n }),
            function (t) {
              var n = t.getLineProps,
                r = t.getTokenProps;
              return e.createElement(
                a,
                null,
                t.tokens.map(function (t, o) {
                  return e.createElement(
                    "div",
                    Object.assign({}, n({ line: t, key: o })),
                    t.map(function (t, n) {
                      return e.createElement(
                        "span",
                        Object.assign({}, r({ token: t, key: n }))
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
  Ht = function (e) {
    return "@media (max-width: " + e + "px)";
  },
  Ut = Object.freeze({
    custom: Ht,
    desktop: Ht(922),
    tablet: Ht(768),
    phone: Ht(576),
  }),
  Gt = Nt(S)(
    Rt ||
      (Rt = A([
        "\n  display: flex;\n  flex-direction: column;\n  min-width: 200px;\n  min-height: 350px;\n  background: #252530;\n\n  ",
        " {\n    min-width: 100% !important;\n    min-height: 100%;\n  }\n",
      ])),
    Ut.phone
  ),
  Wt = Nt(v)(It || (It = A(["\n  background-color: #252530;\n"]))),
  Yt = Nt(b)(
    Tt ||
      (Tt = A([
        "\n  border: none;\n  padding: 8px 5px;\n  color: gray;\n\n  &[data-selected] {\n    color: lightgray;\n  }\n",
      ]))
  ),
  qt = Nt(w)($t || ($t = A(["\n  flex: 1 1 0%;\n"]))),
  Xt = Nt(k)(Dt || (Dt = A(["\n  height: 100%;\n  width: 100%;\n"]))),
  Jt = function (t) {
    var n = t.code,
      r = t.defaultTab,
      o = t.onChange,
      a = t.width,
      s = i(function () {
        return [
          { name: "HTML", value: "markup" },
          { name: "CSS", value: "css" },
          { name: "JS", value: "javascript" },
        ];
      }, []);
    return e.createElement(
      Gt,
      {
        defaultIndex: s.findIndex(function (e) {
          return e.value === r;
        }),
        style: { width: a },
      },
      e.createElement(
        Wt,
        null,
        s.map(function (t) {
          return e.createElement(Yt, { key: t.value }, t.name);
        })
      ),
      e.createElement(
        qt,
        null,
        s.map(function (t) {
          return e.createElement(
            Xt,
            { key: t.value },
            e.createElement(Vt, {
              code: n[t.value],
              onChange: o,
              language: t.value,
            })
          );
        })
      )
    );
  },
  Zt = Nt.div(
    jt ||
      (jt = A([
        "\n  background-color: black;\n  color: white;\n  height: 100%;\n\n  li {\n    font-size: 16px !important;\n  }\n",
      ]))
  ),
  Kt = function (t) {
    return e.createElement(
      Zt,
      null,
      t.logs.map(function (t, n) {
        return e.createElement(C, { data: t, key: n, theme: "chromeDark" });
      })
    );
  },
  Qt = Nt.div(
    Mt ||
      (Mt = A([
        "\n  color: white;\n  padding: 0.2em 0.5em;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  box-sizing: border-box;\n",
      ]))
  ),
  en = function (t) {
    return e.createElement(Qt, null, e.createElement("p", null, t.error));
  },
  tn = Nt.div(
    Lt ||
      (Lt = A([
        '\n  position: relative;\n  height: 100%;\n  background: white;\n  border-radius: 8px;\n\n  &::after {\n    content: "";\n    display: inline-block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    top: 0;\n    left: 0;\n  }\n',
      ]))
  ),
  nn = s(function (t) {
    var n = t.id,
      r = t.snippet,
      o = t.transformJs,
      a = t.presets,
      s = c(""),
      u = s[0],
      d = s[1],
      p = c(null),
      f = p[0],
      h = p[1];
    return (
      i(
        function () {
          try {
            var e = (function (e, t, n, r) {
              var o = e.javascript;
              return (
                '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="UTF-8"/>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>\n      <title>Document</title>\n      <style>' +
                e.css +
                "</style>\n    </head>\n    <body>\n      " +
                e.markup +
                "\n      <span></span>\n      <script>\n        var _privateLog = console.log;\n        console.log = function(...rest) {\n          if(typeof window !== 'undefined') {\n            window.parent.postMessage({\n              source: \"frame-" +
                t +
                '",\n              message: {\n                type: "log",\n                data: rest\n              },\n            }, "*");\n          }\n          _privateLog.apply(console, arguments);\n        }\n        window.onerror = function(message) {\n          if(typeof window !== \'undefined\') {\n            window.parent.postMessage({\n              source: "frame-' +
                t +
                '",\n              message: {\n                type: "error",\n                data: message\n              },\n            }, "*");\n          }\n        }\n      </script>\n      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>\n      ' +
                (n
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
            })(r, n, o, a);
            d(e), h(null);
          } catch (e) {
            h(e.message);
          }
        },
        [r, o]
      ),
      l(
        function () {
          "undefined" != typeof window &&
            window.addEventListener("message", function (e) {
              e.data.source === "frame-" + n &&
                "error" === e.data.message.type &&
                h(e.data.message.data);
            });
        },
        [n]
      ),
      e.createElement(
        tn,
        null,
        e.createElement("iframe", {
          height: "100%",
          width: "100%",
          title: "example",
          frameBorder: "0",
          srcDoc: u,
        }),
        f && e.createElement(en, { error: f })
      )
    );
  }),
  rn = function (t) {
    var n = t.id,
      r = t.snippet,
      o = t.presets,
      a = t.defaultTab,
      s = t.transformJs,
      u = t.width,
      d = c([]),
      p = d[0],
      f = d[1],
      h = i(function () {
        return [
          { name: "Result", value: "result" },
          { name: "Console", value: "console" },
        ];
      }, []);
    return (
      l(
        function () {
          "undefined" != typeof window &&
            window.addEventListener("message", function (e) {
              e.data.source === "frame-" + n &&
                "log" === e.data.message.type &&
                f(function (t) {
                  return [].concat(t, e.data.message.data);
                });
            });
        },
        [n]
      ),
      e.createElement(
        Gt,
        {
          defaultIndex: h.findIndex(function (e) {
            return e.value === a;
          }),
          style: { width: u },
        },
        e.createElement(
          Wt,
          null,
          h.map(function (t) {
            return e.createElement(Yt, { key: t.value }, t.name);
          })
        ),
        e.createElement(
          qt,
          null,
          e.createElement(
            Xt,
            null,
            e.createElement(nn, {
              id: n,
              snippet: r,
              transformJs: s,
              presets: o,
            })
          ),
          e.createElement(Xt, null, e.createElement(Kt, { logs: p }))
        )
      )
    );
  },
  on = {
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
  an = {
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
  sn = {
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
  cn = u(sn),
  ln = function () {
    return r(cn);
  };
function un(t) {
  var n = t.mode,
    r = t.userTheme,
    o = t.children,
    a = c(sn),
    i = a[0],
    s = a[1];
  return (
    l(
      function () {
        s(
          (function (e) {
            return (
              void 0 === e && (e = "light"), E(sn, "light" === e ? on : an)
            );
          })(n)
        );
      },
      [n]
    ),
    e.createElement(cn.Provider, { value: null != r ? r : i }, o)
  );
}
var dn = Nt.div(
    zt ||
      (zt = A([
        "\n  display: flex;\n  border: 16px solid #252530;\n  border-radius: 8px;\n\n  ",
        " {\n    flex-direction: column;\n  }\n",
      ])),
    Ut.phone
  ),
  pn = Nt.div(
    Ft ||
      (Ft = A([
        "\n  width: 15px;\n  cursor: col-resize;\n  background-color: #252530;\n",
      ]))
  ),
  fn = function (n) {
    var r = n.leftChild,
      o = n.rightChild,
      a = t(null),
      i = t(null),
      s = (function (e) {
        var t = e.containerRef,
          n = e.dividerRef,
          r = e.dividerWidth,
          o = c(0),
          a = o[0],
          i = o[1],
          s = c(null),
          u = s[0],
          p = s[1];
        l(function () {
          var e = t.current;
          if (e) {
            var n = e.clientWidth,
              r = e.getBoundingClientRect();
            p(r), i(n / 2);
          }
        }, []);
        var f = d(
            function (e) {
              u && i(e.clientX - u.left);
            },
            [u]
          ),
          h = d(
            function () {
              document.removeEventListener("mousemove", f),
                document.removeEventListener("mouseup", h);
            },
            [f]
          ),
          m = d(
            function () {
              document.addEventListener("mousemove", f),
                document.addEventListener("mouseup", h);
            },
            [f, h]
          );
        return (
          l(
            function () {
              var e = n.current;
              return (
                e && e.addEventListener("mousedown", m),
                function () {
                  e && e.removeEventListener("mousedown", m);
                }
              );
            },
            [m]
          ),
          { leftWidth: a, rightWidth: u ? u.width - a - r : 0 }
        );
      })({ containerRef: a, dividerRef: i, dividerWidth: ln().divider.width }),
      u = s.rightWidth;
    return e.createElement(
      dn,
      { ref: a },
      r(s.leftWidth),
      e.createElement(pn, { ref: i }),
      o(u)
    );
  };
f(o, void 0, ln);
export default function (t) {
  var n = t.id,
    r = t.defaultEditorTab,
    o = void 0 === r ? "markup" : r,
    a = t.defaultResultTab,
    i = void 0 === a ? "result" : a,
    s = t.transformJs,
    l = void 0 !== s && s,
    u = t.presets,
    d = void 0 === u ? [] : u,
    f = t.theme,
    h = t.mode,
    m = void 0 === h ? "light" : h,
    g = c(t.initialSnippet),
    y = g[0],
    v = g[1],
    b = p(n),
    w = function (e, t) {
      v(function (n) {
        var r;
        return x({}, n, (((r = {})[t] = e), r));
      });
    };
  return e.createElement(
    un,
    { userTheme: f, mode: m },
    e.createElement(
      "div",
      { className: "playground" },
      e.createElement(fn, {
        leftChild: function (t) {
          return e.createElement(Jt, {
            width: t,
            code: y,
            defaultTab: o,
            onChange: w,
          });
        },
        rightChild: function (t) {
          return e.createElement(rn, {
            width: t,
            id: b,
            snippet: y,
            defaultTab: i,
            transformJs: l,
            presets: d,
          });
        },
      })
    )
  );
}
//# sourceMappingURL=playground.module.js.map
