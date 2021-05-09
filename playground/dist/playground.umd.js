!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(
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
      ], t)
    : ((e || self).playground = t(
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
})(this, function (e, t, n, r, o, a, i, s, c) {
  function l(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var u = l(e),
    d = l(r),
    f = l(o),
    p = l(a),
    h = l(s),
    m = l(c);
  function g() {
    return (g =
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
  function y(e, t) {
    return t || (t = e.slice(0)), (e.raw = t), e;
  }
  function v(e) {
    var t = { exports: {} };
    return e(t, t.exports), t.exports;
  }
  var b = "function" == typeof Symbol && Symbol.for,
    w = b ? Symbol.for("react.element") : 60103,
    k = b ? Symbol.for("react.portal") : 60106,
    S = b ? Symbol.for("react.fragment") : 60107,
    C = b ? Symbol.for("react.strict_mode") : 60108,
    E = b ? Symbol.for("react.profiler") : 60114,
    x = b ? Symbol.for("react.provider") : 60109,
    A = b ? Symbol.for("react.context") : 60110,
    P = b ? Symbol.for("react.async_mode") : 60111,
    O = b ? Symbol.for("react.concurrent_mode") : 60111,
    _ = b ? Symbol.for("react.forward_ref") : 60112,
    R = b ? Symbol.for("react.suspense") : 60113,
    N = b ? Symbol.for("react.suspense_list") : 60120,
    T = b ? Symbol.for("react.memo") : 60115,
    I = b ? Symbol.for("react.lazy") : 60116,
    $ = b ? Symbol.for("react.block") : 60121,
    D = b ? Symbol.for("react.fundamental") : 60117,
    j = b ? Symbol.for("react.responder") : 60118,
    M = b ? Symbol.for("react.scope") : 60119;
  function L(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case w:
          switch ((e = e.type)) {
            case P:
            case O:
            case S:
            case E:
            case C:
            case R:
              return e;
            default:
              switch ((e = e && e.$$typeof)) {
                case A:
                case _:
                case I:
                case T:
                case x:
                  return e;
                default:
                  return t;
              }
          }
        case k:
          return t;
      }
    }
  }
  function z(e) {
    return L(e) === O;
  }
  var F = {
      AsyncMode: P,
      ConcurrentMode: O,
      ContextConsumer: A,
      ContextProvider: x,
      Element: w,
      ForwardRef: _,
      Fragment: S,
      Lazy: I,
      Memo: T,
      Portal: k,
      Profiler: E,
      StrictMode: C,
      Suspense: R,
      isAsyncMode: function (e) {
        return z(e) || L(e) === P;
      },
      isConcurrentMode: z,
      isContextConsumer: function (e) {
        return L(e) === A;
      },
      isContextProvider: function (e) {
        return L(e) === x;
      },
      isElement: function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === w;
      },
      isForwardRef: function (e) {
        return L(e) === _;
      },
      isFragment: function (e) {
        return L(e) === S;
      },
      isLazy: function (e) {
        return L(e) === I;
      },
      isMemo: function (e) {
        return L(e) === T;
      },
      isPortal: function (e) {
        return L(e) === k;
      },
      isProfiler: function (e) {
        return L(e) === E;
      },
      isStrictMode: function (e) {
        return L(e) === C;
      },
      isSuspense: function (e) {
        return L(e) === R;
      },
      isValidElementType: function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === S ||
          e === O ||
          e === E ||
          e === C ||
          e === R ||
          e === N ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === I ||
              e.$$typeof === T ||
              e.$$typeof === x ||
              e.$$typeof === A ||
              e.$$typeof === _ ||
              e.$$typeof === D ||
              e.$$typeof === j ||
              e.$$typeof === M ||
              e.$$typeof === $))
        );
      },
      typeOf: L,
    },
    B = v(function (e, t) {
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
            f = e ? Symbol.for("react.suspense") : 60113,
            p = e ? Symbol.for("react.suspense_list") : 60120,
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
            R = i,
            N = a,
            T = f,
            I = !1;
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
            (t.Profiler = R),
            (t.StrictMode = N),
            (t.Suspense = T),
            (t.isAsyncMode = function (e) {
              return (
                I ||
                  ((I = !0),
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
                    e.$$typeof === v ||
                    e.$$typeof === b ||
                    e.$$typeof === g))
              );
            }),
            (t.typeOf = w);
        })();
    }),
    V = v(function (e) {
      e.exports = "production" === process.env.NODE_ENV ? F : B;
    });
  function H(e) {
    function t(e, r, c, l, f) {
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
          T = 0,
          $ = (m = p = 0),
          j = 0,
          M = 0,
          L = 0,
          z = 0,
          F = c.length,
          B = F - 1,
          V = "",
          H = "",
          q = "",
          U = "";
        j < F;

      ) {
        if (
          ((h = c.charCodeAt(j)),
          j === B &&
            0 !== C + x + E + S &&
            (0 !== C && (h = 47 === C ? 10 : 47), (x = E = S = 0), F++, B++),
          0 === C + x + E + S)
        ) {
          if (
            j === B &&
            (0 < M && (V = V.replace(d, "")), 0 < V.trim().length)
          ) {
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
                0 === p && (p = (V = V.replace(u, "").trim()).charCodeAt(0)),
                p)
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
                      M = N;
                  }
                  if (
                    ((z = (m = t(r, M, m, h, f + 1)).length),
                    0 < I &&
                      ((w = s(3, m, (M = n(N, V, L)), r, O, P, z, h, f, l)),
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
                            1 === R || (2 === R && a("@" + m, 3))
                              ? "@-webkit-" + m + "@" + m
                              : "@" + m);
                        break;
                      default:
                        (m = V + m), 112 === l && ((H += m), (m = ""));
                    }
                  else m = "";
                  break;
                default:
                  m = t(r, n(r, V, L), m, l, f + 1);
              }
              (q += m),
                (m = L = M = $ = p = 0),
                (V = ""),
                (h = c.charCodeAt(++j));
              break;
            case 125:
            case 59:
              if (1 < (z = (V = (0 < M ? V.replace(d, "") : V).trim()).length))
                switch (
                  (0 === $ &&
                    ((p = V.charCodeAt(0)), 45 === p || (96 < p && 123 > p)) &&
                    (z = (V = V.replace(" ", ":")).length),
                  0 < I &&
                    void 0 !== (w = s(1, V, r, e, O, P, H.length, l, f, l)) &&
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
                      U += V + c.charAt(j);
                      break;
                    }
                  default:
                    58 !== V.charCodeAt(z - 1) &&
                      (H += o(V, p, h, V.charCodeAt(2)));
                }
              (L = M = $ = p = 0), (V = ""), (h = c.charCodeAt(++j));
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
                ((M = 1), (V += "\0")),
              0 < I * D && s(0, V, r, e, O, P, H.length, l, f, l),
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
                      111 === T && (_ = T);
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
                  if (0 === p)
                    switch (2 * A + 3 * T) {
                      case 533:
                        break;
                      default:
                        p = 1;
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
        (T = A), (A = h), j++;
      }
      if (0 < (z = H.length)) {
        if (
          ((M = r),
          0 < I &&
            void 0 !== (w = s(2, H, M, e, O, P, z, l, f, l)) &&
            0 === (H = w).length)
        )
          return U + H + q;
        if (((H = M.join(",") + "{" + H + "}"), 0 != R * _)) {
          switch ((2 !== R || a(H, 2) || (_ = 0), _)) {
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
      return U + H + q;
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
            return t.replace(
              g,
              (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
            );
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
          1 === R || (2 === R && a(c, 1)) ? "-webkit-" + c + c : c
        );
      }
      if (0 === R || (2 === R && !a(i, 1))) return i;
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
              i
                .substring(0, i.indexOf(";", 27) + 1)
                .replace(h, "$1-webkit-$2") + i
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
      for (var d, f = 0, p = t; f < I; ++f)
        switch ((d = T[f].call(l, e, p, n, r, o, a, i, s, c, u))) {
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
          (($ = null),
          e
            ? "function" != typeof e
              ? (R = 1)
              : ((R = 2), ($ = e))
            : (R = 0)),
        c
      );
    }
    function l(e, n) {
      var r = e;
      if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < I)) {
        var o = s(-1, n, r, r, O, P, 0, 0, 0, 0);
        void 0 !== o && "string" == typeof o && (n = o);
      }
      var a = t(N, r, n, 0, 0);
      return (
        0 < I &&
          void 0 !== (o = s(-2, a, r, r, O, P, a.length, 0, 0, 0)) &&
          (a = o),
        (_ = 0),
        (P = O = 1),
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
      R = 1,
      N = [],
      T = [],
      I = 0,
      $ = null,
      D = 0;
    return (
      (l.use = function e(t) {
        switch (t) {
          case void 0:
          case null:
            I = T.length = 0;
            break;
          default:
            if ("function" == typeof t) T[I++] = t;
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
  var q,
    U,
    G = {
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
    W = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Y =
      ((q = function (e) {
        return (
          W.test(e) ||
          (111 === e.charCodeAt(0) &&
            110 === e.charCodeAt(1) &&
            e.charCodeAt(2) < 91)
        );
      }),
      (U = {}),
      function (e) {
        return void 0 === U[e] && (U[e] = q(e)), U[e];
      }),
    X = {
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
    J = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    Z = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    K = {};
  function Q(e) {
    return V.isMemo(e) ? Z : K[e.$$typeof] || X;
  }
  (K[V.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  }),
    (K[V.Memo] = Z);
  var ee = Object.defineProperty,
    te = Object.getOwnPropertyNames,
    ne = Object.getOwnPropertySymbols,
    re = Object.getOwnPropertyDescriptor,
    oe = Object.getPrototypeOf,
    ae = Object.prototype,
    ie = function e(t, n, r) {
      if ("string" != typeof n) {
        if (ae) {
          var o = oe(n);
          o && o !== ae && e(t, o, r);
        }
        var a = te(n);
        ne && (a = a.concat(ne(n)));
        for (var i = Q(t), s = Q(n), c = 0; c < a.length; ++c) {
          var l = a[c];
          if (!(J[l] || (r && r[l]) || (s && s[l]) || (i && i[l]))) {
            var u = re(n, l);
            try {
              ee(t, l, u);
            } catch (e) {}
          }
        }
      }
      return t;
    };
  function se() {
    return (se =
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
  var ce = function (e, t) {
      for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
        n.push(t[r], e[r + 1]);
      return n;
    },
    le = function (e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "[object Object]" ===
          (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
        !V.typeOf(e)
      );
    },
    ue = Object.freeze([]),
    de = Object.freeze({});
  function fe(e) {
    return "function" == typeof e;
  }
  function pe(e) {
    return (
      ("production" !== process.env.NODE_ENV && "string" == typeof e && e) ||
      e.displayName ||
      e.name ||
      "Component"
    );
  }
  function he(e) {
    return e && "string" == typeof e.styledComponentId;
  }
  var me =
      ("undefined" != typeof process &&
        (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
      "data-styled",
    ge = "undefined" != typeof window && "HTMLElement" in window,
    ye = Boolean(
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
    ve =
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
  function be() {
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
  function we(e) {
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
      : new Error(be.apply(void 0, [ve[e]].concat(n)).trim());
  }
  var ke = (function () {
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
              (o <<= 1) < 0 && we(16, "" + e);
            (this.groupSizes = new Uint32Array(o)),
              this.groupSizes.set(n),
              (this.length = o);
            for (var a = r; a < o; a++) this.groupSizes[a] = 0;
          }
          for (
            var i = this.indexOfGroup(e + 1), s = 0, c = t.length;
            s < c;
            s++
          )
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
    Se = new Map(),
    Ce = new Map(),
    Ee = 1,
    xe = function (e) {
      if (Se.has(e)) return Se.get(e);
      for (; Ce.has(Ee); ) Ee++;
      var t = Ee++;
      return (
        "production" !== process.env.NODE_ENV &&
          ((0 | t) < 0 || t > 1 << 30) &&
          we(16, "" + t),
        Se.set(e, t),
        Ce.set(t, e),
        t
      );
    },
    Ae = function (e) {
      return Ce.get(e);
    },
    Pe = function (e, t) {
      Se.set(e, t), Ce.set(t, e);
    },
    Oe = "style[" + me + '][data-styled-version="5.3.0"]',
    _e = new RegExp("^" + me + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    Re = function (e, t, n) {
      for (var r, o = n.split(","), a = 0, i = o.length; a < i; a++)
        (r = o[a]) && e.registerName(t, r);
    },
    Ne = function (e, t) {
      for (
        var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, a = n.length;
        o < a;
        o++
      ) {
        var i = n[o].trim();
        if (i) {
          var s = i.match(_e);
          if (s) {
            var c = 0 | parseInt(s[1], 10),
              l = s[2];
            0 !== c && (Pe(l, c), Re(e, l, s[3]), e.getTag().insertRules(c, r)),
              (r.length = 0);
          } else r.push(i);
        }
      }
    },
    Te = function (e) {
      var t = document.head,
        n = e || t,
        r = document.createElement("style"),
        o = (function (e) {
          for (var t = e.childNodes, n = t.length; n >= 0; n--) {
            var r = t[n];
            if (r && 1 === r.nodeType && r.hasAttribute(me)) return r;
          }
        })(n),
        a = void 0 !== o ? o.nextSibling : null;
      r.setAttribute(me, "active"),
        r.setAttribute("data-styled-version", "5.3.0");
      var i =
        "undefined" != typeof window && void 0 !== window.__webpack_nonce__
          ? window.__webpack_nonce__
          : null;
      return i && r.setAttribute("nonce", i), n.insertBefore(r, a), r;
    },
    Ie = (function () {
      function e(e) {
        var t = (this.element = Te(e));
        t.appendChild(document.createTextNode("")),
          (this.sheet = (function (e) {
            if (e.sheet) return e.sheet;
            for (
              var t = document.styleSheets, n = 0, r = t.length;
              n < r;
              n++
            ) {
              var o = t[n];
              if (o.ownerNode === e) return o;
            }
            we(17);
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
    $e = (function () {
      function e(e) {
        var t = (this.element = Te(e));
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
    De = (function () {
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
    je = ge,
    Me = { isServer: !ge, useCSSOMInjection: !ye },
    Le = (function () {
      function e(e, t, n) {
        void 0 === e && (e = de),
          void 0 === t && (t = {}),
          (this.options = se({}, Me, {}, e)),
          (this.gs = t),
          (this.names = new Map(n)),
          !this.options.isServer &&
            ge &&
            je &&
            ((je = !1),
            (function (e) {
              for (
                var t = document.querySelectorAll(Oe), n = 0, r = t.length;
                n < r;
                n++
              ) {
                var o = t[n];
                o &&
                  "active" !== o.getAttribute(me) &&
                  (Ne(e, o), o.parentNode && o.parentNode.removeChild(o));
              }
            })(this));
      }
      e.registerId = function (e) {
        return xe(e);
      };
      var t = e.prototype;
      return (
        (t.reconstructWithOptions = function (t, n) {
          return (
            void 0 === n && (n = !0),
            new e(
              se({}, this.options, {}, t),
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
              (e = n ? new De(o) : r ? new Ie(o) : new $e(o)),
              new ke(e)))
          );
          var e, t, n, r, o;
        }),
        (t.hasNameForId = function (e, t) {
          return this.names.has(e) && this.names.get(e).has(t);
        }),
        (t.registerName = function (e, t) {
          if ((xe(e), this.names.has(e))) this.names.get(e).add(t);
          else {
            var n = new Set();
            n.add(t), this.names.set(e, n);
          }
        }),
        (t.insertRules = function (e, t, n) {
          this.registerName(e, t), this.getTag().insertRules(xe(e), n);
        }),
        (t.clearNames = function (e) {
          this.names.has(e) && this.names.get(e).clear();
        }),
        (t.clearRules = function (e) {
          this.getTag().clearGroup(xe(e)), this.clearNames(e);
        }),
        (t.clearTag = function () {
          this.tag = void 0;
        }),
        (t.toString = function () {
          return (function (e) {
            for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
              var a = Ae(o);
              if (void 0 !== a) {
                var i = e.names.get(a),
                  s = t.getGroup(o);
                if (void 0 !== i && 0 !== s.length) {
                  var c = me + ".g" + o + '[id="' + a + '"]',
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
    ze = /(a)(d)/gi,
    Fe = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97));
    };
  function Be(e) {
    var t,
      n = "";
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Fe(t % 52) + n;
    return (Fe(t % 52) + n).replace(ze, "$1-$2");
  }
  var Ve = function (e, t) {
      for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
      return e;
    },
    He = function (e) {
      return Ve(5381, e);
    },
    qe = He("5.3.0"),
    Ue = (function () {
      function e(e, t, n) {
        (this.rules = e),
          (this.staticRulesId = ""),
          (this.isStatic =
            "production" === process.env.NODE_ENV &&
            (void 0 === n || n.isStatic) &&
            (function (e) {
              for (var t = 0; t < e.length; t += 1) {
                var n = e[t];
                if (fe(n) && !he(n)) return !1;
              }
              return !0;
            })(e)),
          (this.componentId = t),
          (this.baseHash = Ve(qe, t)),
          (this.baseStyle = n),
          Le.registerId(t);
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
              var a = at(this.rules, e, t, n).join(""),
                i = Be(Ve(this.baseHash, a.length) >>> 0);
              if (!t.hasNameForId(r, i)) {
                var s = n(a, "." + i, void 0, r);
                t.insertRules(r, i, s);
              }
              o.push(i), (this.staticRulesId = i);
            }
          else {
            for (
              var c = this.rules.length,
                l = Ve(this.baseHash, n.hash),
                u = "",
                d = 0;
              d < c;
              d++
            ) {
              var f = this.rules[d];
              if ("string" == typeof f)
                (u += f),
                  "production" !== process.env.NODE_ENV && (l = Ve(l, f + d));
              else if (f) {
                var p = at(f, e, t, n),
                  h = Array.isArray(p) ? p.join("") : p;
                (l = Ve(l, h + d)), (u += h);
              }
            }
            if (u) {
              var m = Be(l >>> 0);
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
    Ge = /^\s*\/\/.*$/gm,
    We = [":", "[", ".", "#"],
    Ye = u.default.createContext(),
    Xe = u.default.createContext(),
    Je = new Le(),
    Ze = (function (e) {
      var t,
        n,
        r,
        o,
        a = de.options,
        i = de.plugins,
        s = void 0 === i ? ue : i,
        c = new H(void 0 === a ? de : a),
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
          return (0 === r && -1 !== We.indexOf(a[n.length])) || a.match(o)
            ? e
            : "." + t;
        };
      function f(e, a, i, s) {
        void 0 === s && (s = "&");
        var l = e.replace(Ge, ""),
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
        (f.hash = s.length
          ? s
              .reduce(function (e, t) {
                return t.name || we(15), Ve(e, t.name);
              }, 5381)
              .toString()
          : ""),
        f
      );
    })(),
    Ke = (function () {
      function e(e, t) {
        var n = this;
        (this.inject = function (e, t) {
          void 0 === t && (t = Ze);
          var r = n.name + t.hash;
          e.hasNameForId(n.id, r) ||
            e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
        }),
          (this.toString = function () {
            return we(12, String(n.name));
          }),
          (this.name = e),
          (this.id = "sc-keyframes-" + e),
          (this.rules = t);
      }
      return (
        (e.prototype.getName = function (e) {
          return void 0 === e && (e = Ze), this.name + e.hash;
        }),
        e
      );
    })(),
    Qe = /([A-Z])/,
    et = /([A-Z])/g,
    tt = /^ms-/,
    nt = function (e) {
      return "-" + e.toLowerCase();
    };
  function rt(e) {
    return Qe.test(e) ? e.replace(et, nt).replace(tt, "-ms-") : e;
  }
  var ot = function (e) {
    return null == e || !1 === e || "" === e;
  };
  function at(e, t, n, r) {
    if (Array.isArray(e)) {
      for (var o, a = [], i = 0, s = e.length; i < s; i += 1)
        "" !== (o = at(e[i], t, n, r)) &&
          (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
      return a;
    }
    if (ot(e)) return "";
    if (he(e)) return "." + e.styledComponentId;
    if (fe(e)) {
      if (
        "function" != typeof (l = e) ||
        (l.prototype && l.prototype.isReactComponent) ||
        !t
      )
        return e;
      var c = e(t);
      return (
        "production" !== process.env.NODE_ENV &&
          V.isElement(c) &&
          console.warn(
            pe(e) +
              " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."
          ),
        at(c, t, n, r)
      );
    }
    var l;
    return e instanceof Ke
      ? n
        ? (e.inject(n, r), e.getName(r))
        : e
      : le(e)
      ? (function e(t, n) {
          var r,
            o = [];
          for (var a in t)
            t.hasOwnProperty(a) &&
              !ot(t[a]) &&
              (le(t[a])
                ? o.push.apply(o, e(t[a], a))
                : fe(t[a])
                ? o.push(rt(a) + ":", t[a], ";")
                : o.push(
                    rt(a) +
                      ": " +
                      (null == (r = t[a]) || "boolean" == typeof r || "" === r
                        ? ""
                        : "number" != typeof r || 0 === r || a in G
                        ? String(r).trim()
                        : r + "px") +
                      ";"
                  ));
          return n ? [n + " {"].concat(o, ["}"]) : o;
        })(e)
      : e.toString();
  }
  function it(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    return fe(e) || le(e)
      ? at(ce(ue, [e].concat(n)))
      : 0 === n.length && 1 === e.length && "string" == typeof e[0]
      ? e
      : at(ce(e, n));
  }
  var st = /invalid hook call/i,
    ct = new Set(),
    lt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    ut = /(^-|-$)/g;
  function dt(e) {
    return e.replace(lt, "-").replace(ut, "");
  }
  function ft(e) {
    return (
      "string" == typeof e &&
      ("production" === process.env.NODE_ENV ||
        e.charAt(0) === e.charAt(0).toLowerCase())
    );
  }
  var pt = function (e) {
      return (
        "function" == typeof e ||
        ("object" == typeof e && null !== e && !Array.isArray(e))
      );
    },
    ht = function (e) {
      return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
    };
  function mt(e, t, n) {
    var r = e[n];
    pt(t) && pt(r) ? gt(r, t) : (e[n] = t);
  }
  function gt(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    for (var o = 0, a = n; o < a.length; o++) {
      var i = a[o];
      if (pt(i)) for (var s in i) ht(s) && mt(e, i[s], s);
    }
    return e;
  }
  var yt = u.default.createContext(),
    vt = {};
  function bt(t, n, r) {
    var o = he(t),
      a = !ft(t),
      i = n.attrs,
      s = void 0 === i ? ue : i,
      c = n.componentId,
      l =
        void 0 === c
          ? (function (e, t) {
              var n = "string" != typeof e ? "sc" : dt(e);
              vt[n] = (vt[n] || 0) + 1;
              var r =
                n +
                "-" +
                (function (e) {
                  return Be(He(e) >>> 0);
                })("5.3.0" + n + vt[n]);
              return t ? t + "-" + r : r;
            })(n.displayName, n.parentComponentId)
          : c,
      d = n.displayName,
      f =
        void 0 === d
          ? (function (e) {
              return ft(e) ? "styled." + e : "Styled(" + pe(e) + ")";
            })(t)
          : d,
      p =
        n.displayName && n.componentId
          ? dt(n.displayName) + "-" + n.componentId
          : n.componentId || l,
      h = o && t.attrs ? Array.prototype.concat(t.attrs, s).filter(Boolean) : s,
      m = n.shouldForwardProp;
    o &&
      t.shouldForwardProp &&
      (m = n.shouldForwardProp
        ? function (e, r, o) {
            return t.shouldForwardProp(e, r, o) && n.shouldForwardProp(e, r, o);
          }
        : t.shouldForwardProp);
    var g,
      y = new Ue(r, p, o ? t.componentStyle : void 0),
      v = y.isStatic && 0 === s.length,
      b = function (t, n) {
        return (function (t, n, r, o) {
          var a = t.attrs,
            i = t.componentStyle,
            s = t.defaultProps,
            c = t.foldedComponentIds,
            l = t.shouldForwardProp,
            u = t.styledComponentId,
            d = t.target;
          "production" !== process.env.NODE_ENV && e.useDebugValue(u);
          var f = (function (e, t, n) {
              void 0 === e && (e = de);
              var r = se({}, t, { theme: e }),
                o = {};
              return (
                n.forEach(function (e) {
                  var t,
                    n,
                    a,
                    i = e;
                  for (t in (fe(i) && (i = i(r)), i))
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
                  void 0 === n && (n = de),
                  (e.theme !== n.theme && e.theme) || t || n.theme
                );
              })(n, e.useContext(yt), s) || de,
              n,
              a
            ),
            p = f[1],
            h = (function (t, n, r, o) {
              var a = e.useContext(Ye) || Je,
                i = e.useContext(Xe) || Ze,
                s = t.generateAndInjectStyles(n ? de : r, a, i);
              return (
                "production" !== process.env.NODE_ENV && e.useDebugValue(s),
                "production" !== process.env.NODE_ENV && !n && o && o(s),
                s
              );
            })(
              i,
              o,
              f[0],
              "production" !== process.env.NODE_ENV
                ? t.warnTooManyClasses
                : void 0
            ),
            m = r,
            g = p.$as || n.$as || p.as || n.as || d,
            y = ft(g),
            v = p !== n ? se({}, n, {}, p) : n,
            b = {};
          for (var w in v)
            "$" !== w[0] &&
              "as" !== w &&
              ("forwardedAs" === w
                ? (b.as = v[w])
                : (l ? l(w, Y, g) : !y || Y(w)) && (b[w] = v[w]));
          return (
            n.style &&
              p.style !== n.style &&
              (b.style = se({}, n.style, {}, p.style)),
            (b.className = Array.prototype
              .concat(c, u, h !== u ? h : null, n.className, p.className)
              .filter(Boolean)
              .join(" ")),
            (b.ref = m),
            e.createElement(g, b)
          );
        })(g, t, n, v);
      };
    return (
      (b.displayName = f),
      ((g = u.default.forwardRef(b)).attrs = h),
      (g.componentStyle = y),
      (g.displayName = f),
      (g.shouldForwardProp = m),
      (g.foldedComponentIds = o
        ? Array.prototype.concat(t.foldedComponentIds, t.styledComponentId)
        : ue),
      (g.styledComponentId = p),
      (g.target = o ? t.target : t),
      (g.withComponent = function (e) {
        var t = n.componentId,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              t.indexOf((n = a[r])) >= 0 || (o[n] = e[n]);
            return o;
          })(n, ["componentId"]),
          a = t && t + "-" + (ft(e) ? e : dt(pe(e)));
        return bt(e, se({}, o, { attrs: h, componentId: a }), r);
      }),
      Object.defineProperty(g, "defaultProps", {
        get: function () {
          return this._foldedDefaultProps;
        },
        set: function (e) {
          this._foldedDefaultProps = o ? gt({}, t.defaultProps, e) : e;
        },
      }),
      "production" !== process.env.NODE_ENV &&
        ((function (t, n) {
          if ("production" !== process.env.NODE_ENV) {
            var r =
              "The component " +
              t +
              (n ? ' with the id of "' + n + '"' : "") +
              " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";
            try {
              e.useRef(), ct.has(r) || (console.warn(r), ct.add(r));
            } catch (t) {
              st.test(t.message) && ct.delete(r);
            }
          }
        })(f, p),
        (g.warnTooManyClasses = (function (e, t) {
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
        })(f, p))),
      (g.toString = function () {
        return "." + g.styledComponentId;
      }),
      a &&
        ie(g, t, {
          attrs: !0,
          componentStyle: !0,
          displayName: !0,
          foldedComponentIds: !0,
          shouldForwardProp: !0,
          styledComponentId: !0,
          target: !0,
          withComponent: !0,
        }),
      g
    );
  }
  var wt,
    kt = function (e) {
      return (function e(t, n, r) {
        if ((void 0 === r && (r = de), !V.isValidElementType(n)))
          return we(1, String(n));
        var o = function () {
          return t(n, r, it.apply(void 0, arguments));
        };
        return (
          (o.withConfig = function (o) {
            return e(t, n, se({}, r, {}, o));
          }),
          (o.attrs = function (o) {
            return e(
              t,
              n,
              se({}, r, {
                attrs: Array.prototype.concat(r.attrs, o).filter(Boolean),
              })
            );
          }),
          o
        );
      })(bt, e);
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
    kt[e] = kt(e);
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
  var St,
    Ct,
    Et,
    xt,
    At,
    Pt,
    Ot,
    _t,
    Rt,
    Nt,
    Tt = kt.div(
      wt ||
        (wt = y([
          "\n  background-color: #252530;\n  overflow-y: auto;\n  font-feature-settings: normal;\n  width: 100%;\n  height: 100%;\n",
        ]))
    ),
    It = function (t) {
      var n = t.language,
        r = t.onChange;
      return u.default.createElement(
        Tt,
        null,
        u.default.createElement(d.default, {
          value: t.code,
          onValueChange: function (e) {
            return r(e, n);
          },
          style: { height: "100%" },
          highlight: function (t) {
            return u.default.createElement(
              f.default,
              Object.assign({}, o.defaultProps, {
                theme: p.default,
                code: t,
                language: n,
              }),
              function (t) {
                var n = t.getLineProps,
                  r = t.getTokenProps;
                return u.default.createElement(
                  e.Fragment,
                  null,
                  t.tokens.map(function (e, t) {
                    return u.default.createElement(
                      "div",
                      Object.assign({}, n({ line: e, key: t })),
                      e.map(function (e, t) {
                        return u.default.createElement(
                          "span",
                          Object.assign({}, r({ token: e, key: t }))
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
    $t = function (e) {
      return "@media (max-width: " + e + "px)";
    },
    Dt = Object.freeze({
      custom: $t,
      desktop: $t(922),
      tablet: $t(768),
      phone: $t(576),
    }),
    jt = kt(i.Tabs)(
      St ||
        (St = y([
          "\n  display: flex;\n  flex-direction: column;\n  min-width: 200px;\n  min-height: 350px;\n  background: #252530;\n\n  ",
          " {\n    min-width: 100% !important;\n    min-height: 100%;\n  }\n",
        ])),
      Dt.phone
    ),
    Mt = kt(i.TabList)(Ct || (Ct = y(["\n  background-color: #252530;\n"]))),
    Lt = kt(i.Tab)(
      Et ||
        (Et = y([
          "\n  border: none;\n  padding: 8px 5px;\n  color: gray;\n\n  &[data-selected] {\n    color: lightgray;\n  }\n",
        ]))
    ),
    zt = kt(i.TabPanels)(xt || (xt = y(["\n  flex: 1 1 0%;\n"]))),
    Ft = kt(i.TabPanel)(
      At || (At = y(["\n  height: 100%;\n  width: 100%;\n"]))
    ),
    Bt = function (t) {
      var n = t.code,
        r = t.defaultTab,
        o = t.onChange,
        a = t.width,
        i = e.useMemo(function () {
          return [
            { name: "HTML", value: "markup" },
            { name: "CSS", value: "css" },
            { name: "JS", value: "javascript" },
          ];
        }, []);
      return u.default.createElement(
        jt,
        {
          defaultIndex: i.findIndex(function (e) {
            return e.value === r;
          }),
          style: { width: a },
        },
        u.default.createElement(
          Mt,
          null,
          i.map(function (e) {
            return u.default.createElement(Lt, { key: e.value }, e.name);
          })
        ),
        u.default.createElement(
          zt,
          null,
          i.map(function (e) {
            return u.default.createElement(
              Ft,
              { key: e.value },
              u.default.createElement(It, {
                code: n[e.value],
                onChange: o,
                language: e.value,
              })
            );
          })
        )
      );
    },
    Vt = kt.div(
      Pt ||
        (Pt = y([
          "\n  background-color: black;\n  color: white;\n  height: 100%;\n\n  li {\n    font-size: 16px !important;\n  }\n",
        ]))
    ),
    Ht = function (e) {
      return u.default.createElement(
        Vt,
        null,
        e.logs.map(function (e, t) {
          return u.default.createElement(h.default, {
            data: e,
            key: t,
            theme: "chromeDark",
          });
        })
      );
    },
    qt = kt.div(
      Ot ||
        (Ot = y([
          "\n  color: white;\n  padding: 0.2em 0.5em;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  box-sizing: border-box;\n",
        ]))
    ),
    Ut = function (e) {
      return u.default.createElement(
        qt,
        null,
        u.default.createElement("p", null, e.error)
      );
    },
    Gt = kt.div(
      _t ||
        (_t = y([
          '\n  position: relative;\n  height: 100%;\n  background: white;\n  border-radius: 8px;\n\n  &::after {\n    content: "";\n    display: inline-block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    top: 0;\n    left: 0;\n  }\n',
        ]))
    ),
    Wt = e.memo(function (t) {
      var n = t.id,
        r = t.snippet,
        o = t.transformJs,
        a = t.presets,
        i = e.useState(""),
        s = i[0],
        c = i[1],
        l = e.useState(null),
        d = l[0],
        f = l[1];
      return (
        e.useMemo(
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
              c(e), f(null);
            } catch (e) {
              f(e.message);
            }
          },
          [r, o]
        ),
        e.useEffect(
          function () {
            "undefined" != typeof window &&
              window.addEventListener("message", function (e) {
                e.data.source === "frame-" + n &&
                  "error" === e.data.message.type &&
                  f(e.data.message.data);
              });
          },
          [n]
        ),
        u.default.createElement(
          Gt,
          null,
          u.default.createElement("iframe", {
            height: "100%",
            width: "100%",
            title: "example",
            frameBorder: "0",
            srcDoc: s,
          }),
          d && u.default.createElement(Ut, { error: d })
        )
      );
    }),
    Yt = function (t) {
      var n = t.id,
        r = t.snippet,
        o = t.presets,
        a = t.defaultTab,
        i = t.transformJs,
        s = t.width,
        c = e.useState([]),
        l = c[0],
        d = c[1],
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
                e.data.source === "frame-" + n &&
                  "log" === e.data.message.type &&
                  d(function (t) {
                    return [].concat(t, e.data.message.data);
                  });
              });
          },
          [n]
        ),
        u.default.createElement(
          jt,
          {
            defaultIndex: f.findIndex(function (e) {
              return e.value === a;
            }),
            style: { width: s },
          },
          u.default.createElement(
            Mt,
            null,
            f.map(function (e) {
              return u.default.createElement(Lt, { key: e.value }, e.name);
            })
          ),
          u.default.createElement(
            zt,
            null,
            u.default.createElement(
              Ft,
              null,
              u.default.createElement(Wt, {
                id: n,
                snippet: r,
                transformJs: i,
                presets: o,
              })
            ),
            u.default.createElement(
              Ft,
              null,
              u.default.createElement(Ht, { logs: l })
            )
          )
        )
      );
    },
    Xt = {
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
    Jt = {
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
    Zt = {
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
    Kt = e.createContext(Zt),
    Qt = function () {
      return e.useContext(Kt);
    };
  function en(t) {
    var n = t.mode,
      r = t.userTheme,
      o = t.children,
      a = e.useState(Zt),
      i = a[0],
      s = a[1];
    return (
      e.useEffect(
        function () {
          s(
            (function (e) {
              return (
                void 0 === e && (e = "light"),
                m.default(Zt, "light" === e ? Xt : Jt)
              );
            })(n)
          );
        },
        [n]
      ),
      u.default.createElement(Kt.Provider, { value: null != r ? r : i }, o)
    );
  }
  var tn = kt.div(
      Rt ||
        (Rt = y([
          "\n  display: flex;\n  border: 16px solid #252530;\n  border-radius: 8px;\n\n  ",
          " {\n    flex-direction: column;\n  }\n",
        ])),
      Dt.phone
    ),
    nn = kt.div(
      Nt ||
        (Nt = y([
          "\n  width: 15px;\n  cursor: col-resize;\n  background-color: #252530;\n",
        ]))
    ),
    rn = function (t) {
      var n = t.leftChild,
        r = t.rightChild,
        o = e.useRef(null),
        a = e.useRef(null),
        i = (function (t) {
          var n = t.containerRef,
            r = t.dividerRef,
            o = t.dividerWidth,
            a = e.useState(0),
            i = a[0],
            s = a[1],
            c = e.useState(null),
            l = c[0],
            u = c[1];
          e.useEffect(function () {
            var e = n.current;
            if (e) {
              var t = e.clientWidth,
                r = e.getBoundingClientRect();
              u(r), s(t / 2);
            }
          }, []);
          var d = e.useCallback(
              function (e) {
                l && s(e.clientX - l.left);
              },
              [l]
            ),
            f = e.useCallback(
              function () {
                document.removeEventListener("mousemove", d),
                  document.removeEventListener("mouseup", f);
              },
              [d]
            ),
            p = e.useCallback(
              function () {
                document.addEventListener("mousemove", d),
                  document.addEventListener("mouseup", f);
              },
              [d, f]
            );
          return (
            e.useEffect(
              function () {
                var e = r.current;
                return (
                  e && e.addEventListener("mousedown", p),
                  function () {
                    e && e.removeEventListener("mousedown", p);
                  }
                );
              },
              [p]
            ),
            { leftWidth: i, rightWidth: l ? l.width - i - o : 0 }
          );
        })({
          containerRef: o,
          dividerRef: a,
          dividerWidth: Qt().divider.width,
        }),
        s = i.rightWidth;
      return u.default.createElement(
        tn,
        { ref: o },
        n(i.leftWidth),
        u.default.createElement(nn, { ref: a }),
        r(s)
      );
    };
  return (
    n.setup(e.createElement, void 0, Qt),
    function (n) {
      var r = n.id,
        o = n.defaultEditorTab,
        a = void 0 === o ? "markup" : o,
        i = n.defaultResultTab,
        s = void 0 === i ? "result" : i,
        c = n.transformJs,
        l = void 0 !== c && c,
        d = n.presets,
        f = void 0 === d ? [] : d,
        p = n.theme,
        h = n.mode,
        m = void 0 === h ? "light" : h,
        y = e.useState(n.initialSnippet),
        v = y[0],
        b = y[1],
        w = t.useId(r),
        k = function (e, t) {
          b(function (n) {
            var r;
            return g({}, n, (((r = {})[t] = e), r));
          });
        };
      return u.default.createElement(
        en,
        { userTheme: p, mode: m },
        u.default.createElement(
          "div",
          { className: "playground" },
          u.default.createElement(rn, {
            leftChild: function (e) {
              return u.default.createElement(Bt, {
                width: e,
                code: v,
                defaultTab: a,
                onChange: k,
              });
            },
            rightChild: function (e) {
              return u.default.createElement(Yt, {
                width: e,
                id: w,
                snippet: v,
                defaultTab: s,
                transformJs: l,
                presets: f,
              });
            },
          })
        )
      );
    }
  );
});
//# sourceMappingURL=playground.umd.js.map
