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
import { useId as p } from "@reach/auto-id";
import { setup as f } from "goober";
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
var P = "function" == typeof Symbol && Symbol.for,
  O = P ? Symbol.for("react.element") : 60103,
  _ = P ? Symbol.for("react.portal") : 60106,
  $ = P ? Symbol.for("react.fragment") : 60107,
  N = P ? Symbol.for("react.strict_mode") : 60108,
  R = P ? Symbol.for("react.profiler") : 60114,
  I = P ? Symbol.for("react.provider") : 60109,
  T = P ? Symbol.for("react.context") : 60110,
  D = P ? Symbol.for("react.async_mode") : 60111,
  j = P ? Symbol.for("react.concurrent_mode") : 60111,
  M = P ? Symbol.for("react.forward_ref") : 60112,
  L = P ? Symbol.for("react.suspense") : 60113,
  z = P ? Symbol.for("react.suspense_list") : 60120,
  F = P ? Symbol.for("react.memo") : 60115,
  B = P ? Symbol.for("react.lazy") : 60116,
  V = P ? Symbol.for("react.block") : 60121,
  H = P ? Symbol.for("react.fundamental") : 60117,
  U = P ? Symbol.for("react.responder") : 60118,
  G = P ? Symbol.for("react.scope") : 60119;
function W(e) {
  if ("object" == typeof e && null !== e) {
    var t = e.$$typeof;
    switch (t) {
      case O:
        switch ((e = e.type)) {
          case D:
          case j:
          case $:
          case R:
          case N:
          case L:
            return e;
          default:
            switch ((e = e && e.$$typeof)) {
              case T:
              case M:
              case B:
              case F:
              case I:
                return e;
              default:
                return t;
            }
        }
      case _:
        return t;
    }
  }
}
function Y(e) {
  return W(e) === j;
}
var q = {
    AsyncMode: D,
    ConcurrentMode: j,
    ContextConsumer: T,
    ContextProvider: I,
    Element: O,
    ForwardRef: M,
    Fragment: $,
    Lazy: B,
    Memo: F,
    Portal: _,
    Profiler: R,
    StrictMode: N,
    Suspense: L,
    isAsyncMode: function (e) {
      return Y(e) || W(e) === D;
    },
    isConcurrentMode: Y,
    isContextConsumer: function (e) {
      return W(e) === T;
    },
    isContextProvider: function (e) {
      return W(e) === I;
    },
    isElement: function (e) {
      return "object" == typeof e && null !== e && e.$$typeof === O;
    },
    isForwardRef: function (e) {
      return W(e) === M;
    },
    isFragment: function (e) {
      return W(e) === $;
    },
    isLazy: function (e) {
      return W(e) === B;
    },
    isMemo: function (e) {
      return W(e) === F;
    },
    isPortal: function (e) {
      return W(e) === _;
    },
    isProfiler: function (e) {
      return W(e) === R;
    },
    isStrictMode: function (e) {
      return W(e) === N;
    },
    isSuspense: function (e) {
      return W(e) === L;
    },
    isValidElementType: function (e) {
      return (
        "string" == typeof e ||
        "function" == typeof e ||
        e === $ ||
        e === j ||
        e === R ||
        e === N ||
        e === L ||
        e === z ||
        ("object" == typeof e &&
          null !== e &&
          (e.$$typeof === B ||
            e.$$typeof === F ||
            e.$$typeof === I ||
            e.$$typeof === T ||
            e.$$typeof === M ||
            e.$$typeof === H ||
            e.$$typeof === U ||
            e.$$typeof === G ||
            e.$$typeof === V))
      );
    },
    typeOf: W,
  },
  X = A(function (e, t) {
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
          p = e ? Symbol.for("react.suspense") : 60113,
          f = e ? Symbol.for("react.suspense_list") : 60120,
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
          P = m,
          O = h,
          _ = n,
          $ = i,
          N = a,
          R = p,
          I = !1;
        function T(e) {
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
          (t.Profiler = $),
          (t.StrictMode = N),
          (t.Suspense = R),
          (t.isAsyncMode = function (e) {
            return (
              I ||
                ((I = !0),
                console.warn(
                  "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                )),
              T(e) || w(e) === l
            );
          }),
          (t.isConcurrentMode = T),
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
                  e.$$typeof === b ||
                  e.$$typeof === v ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = w);
      })();
  }),
  J = A(function (e) {
    e.exports = "production" === process.env.NODE_ENV ? q : X;
  });
function Z(e) {
  function t(e, n, c, l, p) {
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
        R = 0,
        T = (m = f = 0),
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
                        for (T = j + 1; T < B; ++T)
                          switch (c.charCodeAt(T)) {
                            case 47:
                              if (
                                42 === h &&
                                42 === c.charCodeAt(T - 1) &&
                                j + 2 !== T
                              ) {
                                j = T + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (47 === h) {
                                j = T + 1;
                                break e;
                              }
                          }
                        j = T;
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
                    M = n;
                    break;
                  default:
                    M = N;
                }
                if (
                  ((z = (m = t(n, M, m, h, p + 1)).length),
                  0 < I &&
                    ((w = s(3, m, (M = r(N, V, L)), n, O, P, z, h, p, l)),
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
                          1 === $ || (2 === $ && a("@" + m, 3))
                            ? "@-webkit-" + m + "@" + m
                            : "@" + m);
                      break;
                    default:
                      (m = V + m), 112 === l && ((H += m), (m = ""));
                  }
                else m = "";
                break;
              default:
                m = t(n, r(n, V, L), m, l, p + 1);
            }
            (U += m),
              (m = L = M = T = f = 0),
              (V = ""),
              (h = c.charCodeAt(++j));
            break;
          case 125:
          case 59:
            if (1 < (z = (V = (0 < M ? V.replace(d, "") : V).trim()).length))
              switch (
                (0 === T &&
                  ((f = V.charCodeAt(0)), 45 === f || (96 < f && 123 > f)) &&
                  (z = (V = V.replace(" ", ":")).length),
                0 < I &&
                  void 0 !== (w = s(1, V, n, e, O, P, H.length, l, p, l)) &&
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
            (L = M = T = f = 0), (V = ""), (h = c.charCodeAt(++j));
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
            0 < I * D && s(0, V, n, e, O, P, H.length, l, p, l),
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
              if (0 === x + C + S + _ && 0 < T)
                switch (j - T) {
                  case 2:
                    112 === A && 58 === c.charCodeAt(j - 3) && (_ = A);
                  case 8:
                    111 === R && (_ = R);
                }
              break;
            case 58:
              0 === x + C + S && (T = j);
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
                  switch (2 * A + 3 * R) {
                    case 533:
                      break;
                    default:
                      f = 1;
                  }
                E++;
              }
              break;
            case 64:
              0 === C + E + x + S + T + m && (m = 1);
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
      (R = A), (A = h), j++;
    }
    if (0 < (z = H.length)) {
      if (
        ((M = n),
        0 < I &&
          void 0 !== (w = s(2, H, M, e, O, P, z, l, p, l)) &&
          0 === (H = w).length)
      )
        return G + H + U;
      if (((H = M.join(",") + "{" + H + "}"), 0 != $ * _)) {
        switch ((2 !== $ || a(H, 2) || (_ = 0), _)) {
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
        1 === $ || (2 === $ && a(c, 1)) ? "-webkit-" + c + c : c
      );
    }
    if (0 === $ || (2 === $ && !a(i, 1))) return i;
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
      T(2 !== t ? n : n.replace(E, "$1"), r, t)
    );
  }
  function i(e, t) {
    var r = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
    return r !== t + ";"
      ? r.replace(S, " or ($1)").substring(4)
      : "(" + t + ")";
  }
  function s(e, t, r, n, o, a, i, s, c, u) {
    for (var d, p = 0, f = t; p < I; ++p)
      switch ((d = R[p].call(l, e, f, r, n, o, a, i, s, c, u))) {
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
        ((T = null),
        e ? ("function" != typeof e ? ($ = 1) : (($ = 2), (T = e))) : ($ = 0)),
      c
    );
  }
  function l(e, r) {
    var n = e;
    if ((33 > n.charCodeAt(0) && (n = n.trim()), (n = [n]), 0 < I)) {
      var o = s(-1, r, n, n, O, P, 0, 0, 0, 0);
      void 0 !== o && "string" == typeof o && (r = o);
    }
    var a = t(N, n, r, 0, 0);
    return (
      0 < I &&
        void 0 !== (o = s(-2, a, n, n, O, P, a.length, 0, 0, 0)) &&
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
    b = /::(place)/g,
    v = /:(read-only)/g,
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
    $ = 1,
    N = [],
    R = [],
    I = 0,
    T = null,
    D = 0;
  return (
    (l.use = function e(t) {
      switch (t) {
        case void 0:
        case null:
          I = R.length = 0;
          break;
        default:
          if ("function" == typeof t) R[I++] = t;
          else if ("object" == typeof t)
            for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
          else D = 0 | !!t;
      }
      return e;
    }),
    (l.set = c),
    void 0 !== e && c(e),
    l
  );
}
var K,
  Q,
  ee = {
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
  te = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  re =
    ((K = function (e) {
      return (
        te.test(e) ||
        (111 === e.charCodeAt(0) &&
          110 === e.charCodeAt(1) &&
          e.charCodeAt(2) < 91)
      );
    }),
    (Q = {}),
    function (e) {
      return void 0 === Q[e] && (Q[e] = K(e)), Q[e];
    }),
  ne = {
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
  oe = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  ae = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ie = {};
function se(e) {
  return J.isMemo(e) ? ae : ie[e.$$typeof] || ne;
}
(ie[J.ForwardRef] = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
}),
  (ie[J.Memo] = ae);
var ce = Object.defineProperty,
  le = Object.getOwnPropertyNames,
  ue = Object.getOwnPropertySymbols,
  de = Object.getOwnPropertyDescriptor,
  pe = Object.getPrototypeOf,
  fe = Object.prototype,
  he = function e(t, r, n) {
    if ("string" != typeof r) {
      if (fe) {
        var o = pe(r);
        o && o !== fe && e(t, o, n);
      }
      var a = le(r);
      ue && (a = a.concat(ue(r)));
      for (var i = se(t), s = se(r), c = 0; c < a.length; ++c) {
        var l = a[c];
        if (!(oe[l] || (n && n[l]) || (s && s[l]) || (i && i[l]))) {
          var u = de(r, l);
          try {
            ce(t, l, u);
          } catch (e) {}
        }
      }
    }
    return t;
  };
function me() {
  return (me =
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
var ge = function (e, t) {
    for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
      r.push(t[n], e[n + 1]);
    return r;
  },
  ye = function (e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "[object Object]" ===
        (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
      !J.typeOf(e)
    );
  },
  be = Object.freeze([]),
  ve = Object.freeze({});
function we(e) {
  return "function" == typeof e;
}
function ke(e) {
  return (
    ("production" !== process.env.NODE_ENV && "string" == typeof e && e) ||
    e.displayName ||
    e.name ||
    "Component"
  );
}
function Se(e) {
  return e && "string" == typeof e.styledComponentId;
}
var Ce =
    ("undefined" != typeof process &&
      (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
    "data-styled",
  Ee = "undefined" != typeof window && "HTMLElement" in window,
  xe = Boolean(
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
  Ae =
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
function Pe() {
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
function Oe(e) {
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
    : new Error(Pe.apply(void 0, [Ae[e]].concat(r)).trim());
}
var _e = (function () {
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
            (o <<= 1) < 0 && Oe(16, "" + e);
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
  $e = new Map(),
  Ne = new Map(),
  Re = 1,
  Ie = function (e) {
    if ($e.has(e)) return $e.get(e);
    for (; Ne.has(Re); ) Re++;
    var t = Re++;
    return (
      "production" !== process.env.NODE_ENV &&
        ((0 | t) < 0 || t > 1 << 30) &&
        Oe(16, "" + t),
      $e.set(e, t),
      Ne.set(t, e),
      t
    );
  },
  Te = function (e) {
    return Ne.get(e);
  },
  De = function (e, t) {
    $e.set(e, t), Ne.set(t, e);
  },
  je = "style[" + Ce + '][data-styled-version="5.3.0"]',
  Me = new RegExp("^" + Ce + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  Le = function (e, t, r) {
    for (var n, o = r.split(","), a = 0, i = o.length; a < i; a++)
      (n = o[a]) && e.registerName(t, n);
  },
  ze = function (e, t) {
    for (
      var r = t.innerHTML.split("/*!sc*/\n"), n = [], o = 0, a = r.length;
      o < a;
      o++
    ) {
      var i = r[o].trim();
      if (i) {
        var s = i.match(Me);
        if (s) {
          var c = 0 | parseInt(s[1], 10),
            l = s[2];
          0 !== c && (De(l, c), Le(e, l, s[3]), e.getTag().insertRules(c, n)),
            (n.length = 0);
        } else n.push(i);
      }
    }
  },
  Fe = function (e) {
    var t = document.head,
      r = e || t,
      n = document.createElement("style"),
      o = (function (e) {
        for (var t = e.childNodes, r = t.length; r >= 0; r--) {
          var n = t[r];
          if (n && 1 === n.nodeType && n.hasAttribute(Ce)) return n;
        }
      })(r),
      a = void 0 !== o ? o.nextSibling : null;
    n.setAttribute(Ce, "active"),
      n.setAttribute("data-styled-version", "5.3.0");
    var i =
      "undefined" != typeof window && void 0 !== window.__webpack_nonce__
        ? window.__webpack_nonce__
        : null;
    return i && n.setAttribute("nonce", i), r.insertBefore(n, a), n;
  },
  Be = (function () {
    function e(e) {
      var t = (this.element = Fe(e));
      t.appendChild(document.createTextNode("")),
        (this.sheet = (function (e) {
          if (e.sheet) return e.sheet;
          for (var t = document.styleSheets, r = 0, n = t.length; r < n; r++) {
            var o = t[r];
            if (o.ownerNode === e) return o;
          }
          Oe(17);
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
  Ve = (function () {
    function e(e) {
      var t = (this.element = Fe(e));
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
  He = (function () {
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
  Ue = Ee,
  Ge = { isServer: !Ee, useCSSOMInjection: !xe },
  We = (function () {
    function e(e, t, r) {
      void 0 === e && (e = ve),
        void 0 === t && (t = {}),
        (this.options = me({}, Ge, {}, e)),
        (this.gs = t),
        (this.names = new Map(r)),
        !this.options.isServer &&
          Ee &&
          Ue &&
          ((Ue = !1),
          (function (e) {
            for (
              var t = document.querySelectorAll(je), r = 0, n = t.length;
              r < n;
              r++
            ) {
              var o = t[r];
              o &&
                "active" !== o.getAttribute(Ce) &&
                (ze(e, o), o.parentNode && o.parentNode.removeChild(o));
            }
          })(this));
    }
    e.registerId = function (e) {
      return Ie(e);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (t, r) {
        return (
          void 0 === r && (r = !0),
          new e(
            me({}, this.options, {}, t),
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
            (e = r ? new He(o) : n ? new Be(o) : new Ve(o)),
            new _e(e)))
        );
        var e, t, r, n, o;
      }),
      (t.hasNameForId = function (e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
      }),
      (t.registerName = function (e, t) {
        if ((Ie(e), this.names.has(e))) this.names.get(e).add(t);
        else {
          var r = new Set();
          r.add(t), this.names.set(e, r);
        }
      }),
      (t.insertRules = function (e, t, r) {
        this.registerName(e, t), this.getTag().insertRules(Ie(e), r);
      }),
      (t.clearNames = function (e) {
        this.names.has(e) && this.names.get(e).clear();
      }),
      (t.clearRules = function (e) {
        this.getTag().clearGroup(Ie(e)), this.clearNames(e);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (e) {
          for (var t = e.getTag(), r = t.length, n = "", o = 0; o < r; o++) {
            var a = Te(o);
            if (void 0 !== a) {
              var i = e.names.get(a),
                s = t.getGroup(o);
              if (void 0 !== i && 0 !== s.length) {
                var c = Ce + ".g" + o + '[id="' + a + '"]',
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
  Ye = /(a)(d)/gi,
  qe = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Xe(e) {
  var t,
    r = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = qe(t % 52) + r;
  return (qe(t % 52) + r).replace(Ye, "$1-$2");
}
var Je = function (e, t) {
    for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
    return e;
  },
  Ze = function (e) {
    return Je(5381, e);
  },
  Ke = Ze("5.3.0"),
  Qe = (function () {
    function e(e, t, r) {
      (this.rules = e),
        (this.staticRulesId = ""),
        (this.isStatic =
          "production" === process.env.NODE_ENV &&
          (void 0 === r || r.isStatic) &&
          (function (e) {
            for (var t = 0; t < e.length; t += 1) {
              var r = e[t];
              if (we(r) && !Se(r)) return !1;
            }
            return !0;
          })(e)),
        (this.componentId = t),
        (this.baseHash = Je(Ke, t)),
        (this.baseStyle = r),
        We.registerId(t);
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
            var a = ft(this.rules, e, t, r).join(""),
              i = Xe(Je(this.baseHash, a.length) >>> 0);
            if (!t.hasNameForId(n, i)) {
              var s = r(a, "." + i, void 0, n);
              t.insertRules(n, i, s);
            }
            o.push(i), (this.staticRulesId = i);
          }
        else {
          for (
            var c = this.rules.length,
              l = Je(this.baseHash, r.hash),
              u = "",
              d = 0;
            d < c;
            d++
          ) {
            var p = this.rules[d];
            if ("string" == typeof p)
              (u += p),
                "production" !== process.env.NODE_ENV && (l = Je(l, p + d));
            else if (p) {
              var f = ft(p, e, t, r),
                h = Array.isArray(f) ? f.join("") : f;
              (l = Je(l, h + d)), (u += h);
            }
          }
          if (u) {
            var m = Xe(l >>> 0);
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
  et = /^\s*\/\/.*$/gm,
  tt = [":", "[", ".", "#"],
  rt = e.createContext(),
  nt = e.createContext(),
  ot = new We(),
  at = (function (e) {
    var t,
      r,
      n,
      o,
      a = ve.options,
      i = ve.plugins,
      s = void 0 === i ? be : i,
      c = new Z(void 0 === a ? ve : a),
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
        return (0 === n && -1 !== tt.indexOf(a[r.length])) || a.match(o)
          ? e
          : "." + t;
      };
    function p(e, a, i, s) {
      void 0 === s && (s = "&");
      var l = e.replace(et, ""),
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
      (p.hash = s.length
        ? s
            .reduce(function (e, t) {
              return t.name || Oe(15), Je(e, t.name);
            }, 5381)
            .toString()
        : ""),
      p
    );
  })(),
  it = (function () {
    function e(e, t) {
      var r = this;
      (this.inject = function (e, t) {
        void 0 === t && (t = at);
        var n = r.name + t.hash;
        e.hasNameForId(r.id, n) ||
          e.insertRules(r.id, n, t(r.rules, n, "@keyframes"));
      }),
        (this.toString = function () {
          return Oe(12, String(r.name));
        }),
        (this.name = e),
        (this.id = "sc-keyframes-" + e),
        (this.rules = t);
    }
    return (
      (e.prototype.getName = function (e) {
        return void 0 === e && (e = at), this.name + e.hash;
      }),
      e
    );
  })(),
  st = /([A-Z])/,
  ct = /([A-Z])/g,
  lt = /^ms-/,
  ut = function (e) {
    return "-" + e.toLowerCase();
  };
function dt(e) {
  return st.test(e) ? e.replace(ct, ut).replace(lt, "-ms-") : e;
}
var pt = function (e) {
  return null == e || !1 === e || "" === e;
};
function ft(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, a = [], i = 0, s = e.length; i < s; i += 1)
      "" !== (o = ft(e[i], t, r, n)) &&
        (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
    return a;
  }
  if (pt(e)) return "";
  if (Se(e)) return "." + e.styledComponentId;
  if (we(e)) {
    if (
      "function" != typeof (l = e) ||
      (l.prototype && l.prototype.isReactComponent) ||
      !t
    )
      return e;
    var c = e(t);
    return (
      "production" !== process.env.NODE_ENV &&
        J.isElement(c) &&
        console.warn(
          ke(e) +
            " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."
        ),
      ft(c, t, r, n)
    );
  }
  var l;
  return e instanceof it
    ? r
      ? (e.inject(r, n), e.getName(n))
      : e
    : ye(e)
    ? (function e(t, r) {
        var n,
          o = [];
        for (var a in t)
          t.hasOwnProperty(a) &&
            !pt(t[a]) &&
            (ye(t[a])
              ? o.push.apply(o, e(t[a], a))
              : we(t[a])
              ? o.push(dt(a) + ":", t[a], ";")
              : o.push(
                  dt(a) +
                    ": " +
                    (null == (n = t[a]) || "boolean" == typeof n || "" === n
                      ? ""
                      : "number" != typeof n || 0 === n || a in ee
                      ? String(n).trim()
                      : n + "px") +
                    ";"
                ));
        return r ? [r + " {"].concat(o, ["}"]) : o;
      })(e)
    : e.toString();
}
function ht(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  return we(e) || ye(e)
    ? ft(ge(be, [e].concat(r)))
    : 0 === r.length && 1 === e.length && "string" == typeof e[0]
    ? e
    : ft(ge(e, r));
}
var mt = /invalid hook call/i,
  gt = new Set(),
  yt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  bt = /(^-|-$)/g;
function vt(e) {
  return e.replace(yt, "-").replace(bt, "");
}
function wt(e) {
  return (
    "string" == typeof e &&
    ("production" === process.env.NODE_ENV ||
      e.charAt(0) === e.charAt(0).toLowerCase())
  );
}
var kt = function (e) {
    return (
      "function" == typeof e ||
      ("object" == typeof e && null !== e && !Array.isArray(e))
    );
  },
  St = function (e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
  };
function Ct(e, t, r) {
  var n = e[r];
  kt(t) && kt(n) ? Et(n, t) : (e[r] = t);
}
function Et(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  for (var o = 0, a = r; o < a.length; o++) {
    var i = a[o];
    if (kt(i)) for (var s in i) St(s) && Ct(e, i[s], s);
  }
  return e;
}
var xt = e.createContext(),
  At = {};
function Pt(a, i, s) {
  var c = Se(a),
    l = !wt(a),
    u = i.attrs,
    d = void 0 === u ? be : u,
    p = i.componentId,
    f =
      void 0 === p
        ? (function (e, t) {
            var r = "string" != typeof e ? "sc" : vt(e);
            At[r] = (At[r] || 0) + 1;
            var n =
              r +
              "-" +
              (function (e) {
                return Xe(Ze(e) >>> 0);
              })("5.3.0" + r + At[r]);
            return t ? t + "-" + n : n;
          })(i.displayName, i.parentComponentId)
        : p,
    h = i.displayName,
    m =
      void 0 === h
        ? (function (e) {
            return wt(e) ? "styled." + e : "Styled(" + ke(e) + ")";
          })(a)
        : h,
    g =
      i.displayName && i.componentId
        ? vt(i.displayName) + "-" + i.componentId
        : i.componentId || f,
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
    w = new Qe(s, g, c ? a.componentStyle : void 0),
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
        "production" !== process.env.NODE_ENV && r(p);
        var h = (function (e, t, r) {
            void 0 === e && (e = ve);
            var n = me({}, t, { theme: e }),
              o = {};
            return (
              r.forEach(function (e) {
                var t,
                  r,
                  a,
                  i = e;
                for (t in (we(i) && (i = i(n)), i))
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
                void 0 === r && (r = ve),
                (e.theme !== r.theme && e.theme) || t || r.theme
              );
            })(t, n(xt), l) || ve,
            t,
            s
          ),
          m = h[1],
          g = (function (e, t, o, a) {
            var i = n(rt) || ot,
              s = n(nt) || at,
              c = e.generateAndInjectStyles(t ? ve : o, i, s);
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
          b = m.$as || t.$as || m.as || t.as || f,
          v = wt(b),
          w = m !== t ? me({}, t, {}, m) : t,
          k = {};
        for (var S in w)
          "$" !== S[0] &&
            "as" !== S &&
            ("forwardedAs" === S
              ? (k.as = w[S])
              : (d ? d(S, re, b) : !v || re(S)) && (k[S] = w[S]));
        return (
          t.style &&
            m.style !== t.style &&
            (k.style = me({}, t.style, {}, m.style)),
          (k.className = Array.prototype
            .concat(u, p, g !== p ? g : null, t.className, m.className)
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
      : be),
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
        n = t && t + "-" + (wt(e) ? e : vt(ke(e)));
      return Pt(e, me({}, r, { attrs: y, componentId: n }), s);
    }),
    Object.defineProperty(v, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (e) {
        this._foldedDefaultProps = c ? Et({}, a.defaultProps, e) : e;
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
            t(), gt.has(n) || (console.warn(n), gt.add(n));
          } catch (e) {
            mt.test(e.message) && gt.delete(n);
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
      he(v, a, {
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
var Ot = function (e) {
  return (function e(t, r, n) {
    if ((void 0 === n && (n = ve), !J.isValidElementType(r)))
      return Oe(1, String(r));
    var o = function () {
      return t(r, n, ht.apply(void 0, arguments));
    };
    return (
      (o.withConfig = function (o) {
        return e(t, r, me({}, n, {}, o));
      }),
      (o.attrs = function (o) {
        return e(
          t,
          r,
          me({}, n, {
            attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
          })
        );
      }),
      o
    );
  })(Pt, e);
};
let _t;
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
  Ot[e] = Ot(e);
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
const $t = Ot.div(
    _t ||
      (_t = ((e) => e)`
  background-color: #252530;
  overflow-y: auto;
  font-feature-settings: normal;
  width: 100%;
  height: 100%;
`)
  ),
  Nt = ({ code: t, language: r, onChange: n }) =>
    e.createElement(
      $t,
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
  Rt = (e) => `@media (max-width: ${e}px)`,
  It = Object.freeze({
    custom: Rt,
    desktop: Rt(922),
    tablet: Rt(768),
    phone: Rt(576),
  });
let Tt,
  Dt,
  jt,
  Mt,
  Lt,
  zt = (e) => e;
const Ft = Ot(S)(
    Tt ||
      (Tt = zt`
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
    It.phone
  ),
  Bt = Ot(b)(
    Dt ||
      (Dt = zt`
  background-color: #252530;
`)
  ),
  Vt = Ot(v)(
    jt ||
      (jt = zt`
  border: none;
  padding: 8px 5px;
  color: gray;

  &[data-selected] {
    color: lightgray;
  }
`)
  ),
  Ht = Ot(w)(
    Mt ||
      (Mt = zt`
  flex: 1 1 0%;
`)
  ),
  Ut = Ot(k)(
    Lt ||
      (Lt = zt`
  height: 100%;
  width: 100%;
`)
  ),
  Gt = ({ code: t, defaultTab: r, onChange: n, width: o }) => {
    const a = i(
      () => [
        { name: "HTML", value: "markup" },
        { name: "CSS", value: "css" },
        { name: "JS", value: "javascript" },
      ],
      []
    );
    return e.createElement(
      Ft,
      { defaultIndex: a.findIndex((e) => e.value === r), style: { width: o } },
      e.createElement(
        Bt,
        null,
        a.map((t) => e.createElement(Vt, { key: t.value }, t.name))
      ),
      e.createElement(
        Ht,
        null,
        a.map((r) =>
          e.createElement(
            Ut,
            { key: r.value },
            e.createElement(Nt, {
              code: t[r.value],
              onChange: n,
              language: r.value,
            })
          )
        )
      )
    );
  };
let Wt;
const Yt = Ot.div(
    Wt ||
      (Wt = ((e) => e)`
  background-color: black;
  color: white;
  height: 100%;

  li {
    font-size: 16px !important;
  }
`)
  ),
  qt = ({ logs: t }) =>
    e.createElement(
      Yt,
      null,
      t.map((t, r) =>
        e.createElement(C, { data: t, key: r, theme: "chromeDark" })
      )
    );
let Xt;
const Jt = Ot.div(
    Xt ||
      (Xt = ((e) => e)`
  color: white;
  padding: 0.2em 0.5em;
  position: absolute;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
`)
  ),
  Zt = ({ error: t }) =>
    e.createElement(Jt, null, e.createElement("p", null, t));
let Kt;
const Qt = Ot.div(
    Kt ||
      (Kt = ((e) => e)`
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
  er = s(({ id: t, snippet: r, transformJs: n, presets: o }) => {
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
        Qt,
        null,
        e.createElement("iframe", {
          height: "100%",
          width: "100%",
          title: "example",
          frameBorder: "0",
          srcDoc: a,
        }),
        u && e.createElement(Zt, { error: u })
      )
    );
  }),
  tr = ({
    id: t,
    snippet: r,
    presets: n,
    defaultTab: o,
    transformJs: a,
    width: s,
  }) => {
    const [u, d] = c([]),
      p = i(
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
            e.data.source === `frame-${t}` &&
              "log" === e.data.message.type &&
              d((t) => [...t, ...e.data.message.data]);
          });
      }, [t]),
      e.createElement(
        Ft,
        {
          defaultIndex: p.findIndex((e) => e.value === o),
          style: { width: s },
        },
        e.createElement(
          Bt,
          null,
          p.map((t) => e.createElement(Vt, { key: t.value }, t.name))
        ),
        e.createElement(
          Ht,
          null,
          e.createElement(
            Ut,
            null,
            e.createElement(er, {
              id: t,
              snippet: r,
              transformJs: a,
              presets: n,
            })
          ),
          e.createElement(Ut, null, e.createElement(qt, { logs: u }))
        )
      )
    );
  },
  rr = {
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
  nr = {
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
  or = {
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
  ar = u(or),
  ir = () => n(ar);
function sr({ mode: t, userTheme: r, children: n }) {
  const [o, a] = c(or);
  return (
    l(() => {
      a(
        (function (e = "light") {
          return E(or, "light" === e ? rr : nr);
        })(t)
      );
    }, [t]),
    e.createElement(ar.Provider, { value: null != r ? r : o }, n)
  );
}
let cr,
  lr,
  ur = (e) => e;
const dr = Ot.div(
    cr ||
      (cr = ur`
  display: flex;
  border: 16px solid #252530;
  border-radius: 8px;

  ${0} {
    flex-direction: column;
  }
`),
    It.phone
  ),
  pr = Ot.div(
    lr ||
      (lr = ur`
  width: 15px;
  cursor: col-resize;
  background-color: #252530;
`)
  ),
  fr = ({ leftChild: r, rightChild: n }) => {
    const o = t(null),
      a = t(null),
      i = ir(),
      { leftWidth: s, rightWidth: u } = (function ({
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
          p = d(() => {
            document.addEventListener("mousemove", s),
              document.addEventListener("mouseup", u);
          }, [s, u]);
        return (
          l(() => {
            const e = t.current;
            return (
              e && e.addEventListener("mousedown", p),
              () => {
                e && e.removeEventListener("mousedown", p);
              }
            );
          }, [p]),
          { leftWidth: n, rightWidth: a ? a.width - n - r : 0 }
        );
      })({ containerRef: o, dividerRef: a, dividerWidth: i.divider.width });
    return e.createElement(
      dr,
      { ref: o },
      r(s),
      e.createElement(pr, { ref: a }),
      n(u)
    );
  };
f(o, void 0, ir);
export default ({
  id: t,
  initialSnippet: r,
  defaultEditorTab: n = "markup",
  defaultResultTab: o = "result",
  transformJs: a = !1,
  presets: i = [],
  theme: s,
  mode: l = "light",
}) => {
  const [u, d] = c(r),
    f = p(t),
    h = (e, t) => {
      d((r) => x({}, r, { [t]: e }));
    };
  return e.createElement(
    sr,
    { userTheme: s, mode: l },
    e.createElement(
      "div",
      { className: "playground" },
      e.createElement(fr, {
        leftChild: (t) =>
          e.createElement(Gt, {
            width: t,
            code: u,
            defaultTab: n,
            onChange: h,
          }),
        rightChild: (t) =>
          e.createElement(tr, {
            width: t,
            id: f,
            snippet: u,
            defaultTab: o,
            transformJs: a,
            presets: i,
          }),
      })
    )
  );
};
//# sourceMappingURL=playground.modern.js.map
