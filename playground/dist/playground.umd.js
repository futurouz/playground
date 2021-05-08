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
  var b = 60103,
    w = 60106,
    k = 60107,
    S = 60108,
    C = 60114,
    E = 60109,
    x = 60110,
    A = 60112,
    $ = 60113,
    P = 60120,
    _ = 60115,
    O = 60116,
    R = 60121,
    N = 60122,
    T = 60117,
    I = 60129,
    M = 60131;
  if ("function" == typeof Symbol && Symbol.for) {
    var j = Symbol.for;
    (b = j("react.element")),
      (w = j("react.portal")),
      (k = j("react.fragment")),
      (S = j("react.strict_mode")),
      (C = j("react.profiler")),
      (E = j("react.provider")),
      (x = j("react.context")),
      (A = j("react.forward_ref")),
      ($ = j("react.suspense")),
      (P = j("react.suspense_list")),
      (_ = j("react.memo")),
      (O = j("react.lazy")),
      (R = j("react.block")),
      (N = j("react.server.block")),
      (T = j("react.fundamental")),
      (I = j("react.debug_trace_mode")),
      (M = j("react.legacy_hidden"));
  }
  function D(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case b:
          switch ((e = e.type)) {
            case k:
            case C:
            case S:
            case $:
            case P:
              return e;
            default:
              switch ((e = e && e.$$typeof)) {
                case x:
                case A:
                case O:
                case _:
                case E:
                  return e;
                default:
                  return t;
              }
          }
        case w:
          return t;
      }
    }
  }
  var L = {
      ContextConsumer: x,
      ContextProvider: E,
      Element: b,
      ForwardRef: A,
      Fragment: k,
      Lazy: O,
      Memo: _,
      Portal: w,
      Profiler: C,
      StrictMode: S,
      Suspense: $,
      isAsyncMode: function () {
        return !1;
      },
      isConcurrentMode: function () {
        return !1;
      },
      isContextConsumer: function (e) {
        return D(e) === x;
      },
      isContextProvider: function (e) {
        return D(e) === E;
      },
      isElement: function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === b;
      },
      isForwardRef: function (e) {
        return D(e) === A;
      },
      isFragment: function (e) {
        return D(e) === k;
      },
      isLazy: function (e) {
        return D(e) === O;
      },
      isMemo: function (e) {
        return D(e) === _;
      },
      isPortal: function (e) {
        return D(e) === w;
      },
      isProfiler: function (e) {
        return D(e) === C;
      },
      isStrictMode: function (e) {
        return D(e) === S;
      },
      isSuspense: function (e) {
        return D(e) === $;
      },
      isValidElementType: function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === k ||
          e === C ||
          e === I ||
          e === S ||
          e === $ ||
          e === P ||
          e === M ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === O ||
              e.$$typeof === _ ||
              e.$$typeof === E ||
              e.$$typeof === x ||
              e.$$typeof === A ||
              e.$$typeof === T ||
              e.$$typeof === R ||
              e[0] === N))
        );
      },
      typeOf: D,
    },
    z = v(function (e, t) {
      "production" !== process.env.NODE_ENV &&
        (function () {
          var e = 60103,
            n = 60106,
            r = 60107,
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
            var v = Symbol.for;
            (e = v("react.element")),
              (n = v("react.portal")),
              (r = v("react.fragment")),
              (o = v("react.strict_mode")),
              (a = v("react.profiler")),
              (i = v("react.provider")),
              (s = v("react.context")),
              (c = v("react.forward_ref")),
              (l = v("react.suspense")),
              (u = v("react.suspense_list")),
              (d = v("react.memo")),
              (f = v("react.lazy")),
              (p = v("react.block")),
              (h = v("react.server.block")),
              (m = v("react.fundamental")),
              v("react.scope"),
              v("react.opaque.id"),
              (g = v("react.debug_trace_mode")),
              v("react.offscreen"),
              (y = v("react.legacy_hidden"));
          }
          function b(t) {
            if ("object" == typeof t && null !== t) {
              var p = t.$$typeof;
              switch (p) {
                case e:
                  var h = t.type;
                  switch (h) {
                    case r:
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
                case n:
                  return p;
              }
            }
          }
          var w = i,
            k = e,
            S = c,
            C = r,
            E = f,
            x = d,
            A = n,
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
              return b(e) === s;
            }),
            (t.isContextProvider = function (e) {
              return b(e) === i;
            }),
            (t.isElement = function (t) {
              return "object" == typeof t && null !== t && t.$$typeof === e;
            }),
            (t.isForwardRef = function (e) {
              return b(e) === c;
            }),
            (t.isFragment = function (e) {
              return b(e) === r;
            }),
            (t.isLazy = function (e) {
              return b(e) === f;
            }),
            (t.isMemo = function (e) {
              return b(e) === d;
            }),
            (t.isPortal = function (e) {
              return b(e) === n;
            }),
            (t.isProfiler = function (e) {
              return b(e) === a;
            }),
            (t.isStrictMode = function (e) {
              return b(e) === o;
            }),
            (t.isSuspense = function (e) {
              return b(e) === l;
            }),
            (t.isValidElementType = function (e) {
              return (
                "string" == typeof e ||
                "function" == typeof e ||
                e === r ||
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
            (t.typeOf = b);
        })();
    }),
    F = v(function (e) {
      e.exports = "production" === process.env.NODE_ENV ? L : z;
    });
  function B(e) {
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
            (0 < D && (V = V.replace(d, "")), 0 < V.trim().length)
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
                      D = r;
                      break;
                    default:
                      D = R;
                  }
                  if (
                    ((z = (m = t(r, D, m, h, f + 1)).length),
                    0 < T &&
                      ((w = s(3, m, (D = n(R, V, L)), r, P, $, z, h, f, l)),
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
                  m = t(r, n(r, V, L), m, l, f + 1);
              }
              (q += m),
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
                    void 0 !== (w = s(1, V, r, e, P, $, H.length, l, f, l)) &&
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
              0 < T * M && s(0, V, r, e, P, $, H.length, l, f, l),
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
          ((D = r),
          0 < T &&
            void 0 !== (w = s(2, H, D, e, P, $, z, l, f, l)) &&
            0 === (H = w).length)
        )
          return U + H + q;
        if (((H = D.join(",") + "{" + H + "}"), 0 != O * _)) {
          switch ((2 !== O || a(H, 2) || (_ = 0), _)) {
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
        I(2 !== t ? r : r.replace(E, "$1"), n, t)
      );
    }
    function i(e, t) {
      var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
      return n !== t + ";"
        ? n.replace(S, " or ($1)").substring(4)
        : "(" + t + ")";
    }
    function s(e, t, n, r, o, a, i, s, c, u) {
      for (var d, f = 0, p = t; f < T; ++f)
        switch ((d = N[f].call(l, e, p, n, r, o, a, i, s, c, u))) {
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
          e
            ? "function" != typeof e
              ? (O = 1)
              : ((O = 2), (I = e))
            : (O = 0)),
        c
      );
    }
    function l(e, n) {
      var r = e;
      if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < T)) {
        var o = s(-1, n, r, r, P, $, 0, 0, 0, 0);
        void 0 !== o && "string" == typeof o && (n = o);
      }
      var a = t(R, r, n, 0, 0);
      return (
        0 < T &&
          void 0 !== (o = s(-2, a, r, r, P, $, a.length, 0, 0, 0)) &&
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
      v = /::(place)/g,
      b = /:(read-only)/g,
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
              for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
            else M = 0 | !!t;
        }
        return e;
      }),
      (l.set = c),
      void 0 !== e && c(e),
      l
    );
  }
  var V,
    H,
    q = {
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
    U = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    G =
      ((V = function (e) {
        return (
          U.test(e) ||
          (111 === e.charCodeAt(0) &&
            110 === e.charCodeAt(1) &&
            e.charCodeAt(2) < 91)
        );
      }),
      (H = {}),
      function (e) {
        return void 0 === H[e] && (H[e] = V(e)), H[e];
      }),
    W = "function" == typeof Symbol && Symbol.for,
    Y = W ? Symbol.for("react.element") : 60103,
    X = W ? Symbol.for("react.portal") : 60106,
    J = W ? Symbol.for("react.fragment") : 60107,
    Z = W ? Symbol.for("react.strict_mode") : 60108,
    K = W ? Symbol.for("react.profiler") : 60114,
    Q = W ? Symbol.for("react.provider") : 60109,
    ee = W ? Symbol.for("react.context") : 60110,
    te = W ? Symbol.for("react.async_mode") : 60111,
    ne = W ? Symbol.for("react.concurrent_mode") : 60111,
    re = W ? Symbol.for("react.forward_ref") : 60112,
    oe = W ? Symbol.for("react.suspense") : 60113,
    ae = W ? Symbol.for("react.suspense_list") : 60120,
    ie = W ? Symbol.for("react.memo") : 60115,
    se = W ? Symbol.for("react.lazy") : 60116,
    ce = W ? Symbol.for("react.block") : 60121,
    le = W ? Symbol.for("react.fundamental") : 60117,
    ue = W ? Symbol.for("react.responder") : 60118,
    de = W ? Symbol.for("react.scope") : 60119;
  function fe(e) {
    if ("object" == typeof e && null !== e) {
      var t = e.$$typeof;
      switch (t) {
        case Y:
          switch ((e = e.type)) {
            case te:
            case ne:
            case J:
            case K:
            case Z:
            case oe:
              return e;
            default:
              switch ((e = e && e.$$typeof)) {
                case ee:
                case re:
                case se:
                case ie:
                case Q:
                  return e;
                default:
                  return t;
              }
          }
        case X:
          return t;
      }
    }
  }
  function pe(e) {
    return fe(e) === ne;
  }
  var he = {
      AsyncMode: te,
      ConcurrentMode: ne,
      ContextConsumer: ee,
      ContextProvider: Q,
      Element: Y,
      ForwardRef: re,
      Fragment: J,
      Lazy: se,
      Memo: ie,
      Portal: X,
      Profiler: K,
      StrictMode: Z,
      Suspense: oe,
      isAsyncMode: function (e) {
        return pe(e) || fe(e) === te;
      },
      isConcurrentMode: pe,
      isContextConsumer: function (e) {
        return fe(e) === ee;
      },
      isContextProvider: function (e) {
        return fe(e) === Q;
      },
      isElement: function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === Y;
      },
      isForwardRef: function (e) {
        return fe(e) === re;
      },
      isFragment: function (e) {
        return fe(e) === J;
      },
      isLazy: function (e) {
        return fe(e) === se;
      },
      isMemo: function (e) {
        return fe(e) === ie;
      },
      isPortal: function (e) {
        return fe(e) === X;
      },
      isProfiler: function (e) {
        return fe(e) === K;
      },
      isStrictMode: function (e) {
        return fe(e) === Z;
      },
      isSuspense: function (e) {
        return fe(e) === oe;
      },
      isValidElementType: function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === J ||
          e === ne ||
          e === K ||
          e === Z ||
          e === oe ||
          e === ae ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === se ||
              e.$$typeof === ie ||
              e.$$typeof === Q ||
              e.$$typeof === ee ||
              e.$$typeof === re ||
              e.$$typeof === le ||
              e.$$typeof === ue ||
              e.$$typeof === de ||
              e.$$typeof === ce))
        );
      },
      typeOf: fe,
    },
    me = v(function (e, t) {
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
            $ = m,
            P = h,
            _ = r,
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
    ge = v(function (e) {
      e.exports = "production" === process.env.NODE_ENV ? he : me;
    }),
    ye = {
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
    ve = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    be = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    we = {};
  function ke(e) {
    return ge.isMemo(e) ? be : we[e.$$typeof] || ye;
  }
  (we[ge.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  }),
    (we[ge.Memo] = be);
  var Se = Object.defineProperty,
    Ce = Object.getOwnPropertyNames,
    Ee = Object.getOwnPropertySymbols,
    xe = Object.getOwnPropertyDescriptor,
    Ae = Object.getPrototypeOf,
    $e = Object.prototype,
    Pe = function e(t, n, r) {
      if ("string" != typeof n) {
        if ($e) {
          var o = Ae(n);
          o && o !== $e && e(t, o, r);
        }
        var a = Ce(n);
        Ee && (a = a.concat(Ee(n)));
        for (var i = ke(t), s = ke(n), c = 0; c < a.length; ++c) {
          var l = a[c];
          if (!(ve[l] || (r && r[l]) || (s && s[l]) || (i && i[l]))) {
            var u = xe(n, l);
            try {
              Se(t, l, u);
            } catch (e) {}
          }
        }
      }
      return t;
    };
  function _e() {
    return (_e =
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
  var Oe = function (e, t) {
      for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
        n.push(t[r], e[r + 1]);
      return n;
    },
    Re = function (e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "[object Object]" ===
          (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
        !F.typeOf(e)
      );
    },
    Ne = Object.freeze([]),
    Te = Object.freeze({});
  function Ie(e) {
    return "function" == typeof e;
  }
  function Me(e) {
    return (
      ("production" !== process.env.NODE_ENV && "string" == typeof e && e) ||
      e.displayName ||
      e.name ||
      "Component"
    );
  }
  function je(e) {
    return e && "string" == typeof e.styledComponentId;
  }
  var De =
      ("undefined" != typeof process &&
        (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
      "data-styled",
    Le = "undefined" != typeof window && "HTMLElement" in window,
    ze = Boolean(
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
    Fe =
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
  function Be() {
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
  function Ve(e) {
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
      : new Error(Be.apply(void 0, [Fe[e]].concat(n)).trim());
  }
  var He = (function () {
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
              (o <<= 1) < 0 && Ve(16, "" + e);
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
    qe = new Map(),
    Ue = new Map(),
    Ge = 1,
    We = function (e) {
      if (qe.has(e)) return qe.get(e);
      for (; Ue.has(Ge); ) Ge++;
      var t = Ge++;
      return (
        "production" !== process.env.NODE_ENV &&
          ((0 | t) < 0 || t > 1 << 30) &&
          Ve(16, "" + t),
        qe.set(e, t),
        Ue.set(t, e),
        t
      );
    },
    Ye = function (e) {
      return Ue.get(e);
    },
    Xe = function (e, t) {
      qe.set(e, t), Ue.set(t, e);
    },
    Je = "style[" + De + '][data-styled-version="5.3.0"]',
    Ze = new RegExp("^" + De + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    Ke = function (e, t, n) {
      for (var r, o = n.split(","), a = 0, i = o.length; a < i; a++)
        (r = o[a]) && e.registerName(t, r);
    },
    Qe = function (e, t) {
      for (
        var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, a = n.length;
        o < a;
        o++
      ) {
        var i = n[o].trim();
        if (i) {
          var s = i.match(Ze);
          if (s) {
            var c = 0 | parseInt(s[1], 10),
              l = s[2];
            0 !== c && (Xe(l, c), Ke(e, l, s[3]), e.getTag().insertRules(c, r)),
              (r.length = 0);
          } else r.push(i);
        }
      }
    },
    et = function (e) {
      var t = document.head,
        n = e || t,
        r = document.createElement("style"),
        o = (function (e) {
          for (var t = e.childNodes, n = t.length; n >= 0; n--) {
            var r = t[n];
            if (r && 1 === r.nodeType && r.hasAttribute(De)) return r;
          }
        })(n),
        a = void 0 !== o ? o.nextSibling : null;
      r.setAttribute(De, "active"),
        r.setAttribute("data-styled-version", "5.3.0");
      var i =
        "undefined" != typeof window && void 0 !== window.__webpack_nonce__
          ? window.__webpack_nonce__
          : null;
      return i && r.setAttribute("nonce", i), n.insertBefore(r, a), r;
    },
    tt = (function () {
      function e(e) {
        var t = (this.element = et(e));
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
            Ve(17);
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
    nt = (function () {
      function e(e) {
        var t = (this.element = et(e));
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
    rt = (function () {
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
    ot = Le,
    at = { isServer: !Le, useCSSOMInjection: !ze },
    it = (function () {
      function e(e, t, n) {
        void 0 === e && (e = Te),
          void 0 === t && (t = {}),
          (this.options = _e({}, at, {}, e)),
          (this.gs = t),
          (this.names = new Map(n)),
          !this.options.isServer &&
            Le &&
            ot &&
            ((ot = !1),
            (function (e) {
              for (
                var t = document.querySelectorAll(Je), n = 0, r = t.length;
                n < r;
                n++
              ) {
                var o = t[n];
                o &&
                  "active" !== o.getAttribute(De) &&
                  (Qe(e, o), o.parentNode && o.parentNode.removeChild(o));
              }
            })(this));
      }
      e.registerId = function (e) {
        return We(e);
      };
      var t = e.prototype;
      return (
        (t.reconstructWithOptions = function (t, n) {
          return (
            void 0 === n && (n = !0),
            new e(
              _e({}, this.options, {}, t),
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
              (e = n ? new rt(o) : r ? new tt(o) : new nt(o)),
              new He(e)))
          );
          var e, t, n, r, o;
        }),
        (t.hasNameForId = function (e, t) {
          return this.names.has(e) && this.names.get(e).has(t);
        }),
        (t.registerName = function (e, t) {
          if ((We(e), this.names.has(e))) this.names.get(e).add(t);
          else {
            var n = new Set();
            n.add(t), this.names.set(e, n);
          }
        }),
        (t.insertRules = function (e, t, n) {
          this.registerName(e, t), this.getTag().insertRules(We(e), n);
        }),
        (t.clearNames = function (e) {
          this.names.has(e) && this.names.get(e).clear();
        }),
        (t.clearRules = function (e) {
          this.getTag().clearGroup(We(e)), this.clearNames(e);
        }),
        (t.clearTag = function () {
          this.tag = void 0;
        }),
        (t.toString = function () {
          return (function (e) {
            for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
              var a = Ye(o);
              if (void 0 !== a) {
                var i = e.names.get(a),
                  s = t.getGroup(o);
                if (void 0 !== i && 0 !== s.length) {
                  var c = De + ".g" + o + '[id="' + a + '"]',
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
    st = /(a)(d)/gi,
    ct = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97));
    };
  function lt(e) {
    var t,
      n = "";
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = ct(t % 52) + n;
    return (ct(t % 52) + n).replace(st, "$1-$2");
  }
  var ut = function (e, t) {
      for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
      return e;
    },
    dt = function (e) {
      return ut(5381, e);
    },
    ft = dt("5.3.0"),
    pt = (function () {
      function e(e, t, n) {
        (this.rules = e),
          (this.staticRulesId = ""),
          (this.isStatic =
            "production" === process.env.NODE_ENV &&
            (void 0 === n || n.isStatic) &&
            (function (e) {
              for (var t = 0; t < e.length; t += 1) {
                var n = e[t];
                if (Ie(n) && !je(n)) return !1;
              }
              return !0;
            })(e)),
          (this.componentId = t),
          (this.baseHash = ut(ft, t)),
          (this.baseStyle = n),
          it.registerId(t);
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
              var a = $t(this.rules, e, t, n).join(""),
                i = lt(ut(this.baseHash, a.length) >>> 0);
              if (!t.hasNameForId(r, i)) {
                var s = n(a, "." + i, void 0, r);
                t.insertRules(r, i, s);
              }
              o.push(i), (this.staticRulesId = i);
            }
          else {
            for (
              var c = this.rules.length,
                l = ut(this.baseHash, n.hash),
                u = "",
                d = 0;
              d < c;
              d++
            ) {
              var f = this.rules[d];
              if ("string" == typeof f)
                (u += f),
                  "production" !== process.env.NODE_ENV && (l = ut(l, f + d));
              else if (f) {
                var p = $t(f, e, t, n),
                  h = Array.isArray(p) ? p.join("") : p;
                (l = ut(l, h + d)), (u += h);
              }
            }
            if (u) {
              var m = lt(l >>> 0);
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
    ht = /^\s*\/\/.*$/gm,
    mt = [":", "[", ".", "#"],
    gt = u.default.createContext(),
    yt = u.default.createContext(),
    vt = new it(),
    bt = (function (e) {
      var t,
        n,
        r,
        o,
        a = Te.options,
        i = Te.plugins,
        s = void 0 === i ? Ne : i,
        c = new B(void 0 === a ? Te : a),
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
          return (0 === r && -1 !== mt.indexOf(a[n.length])) || a.match(o)
            ? e
            : "." + t;
        };
      function f(e, a, i, s) {
        void 0 === s && (s = "&");
        var l = e.replace(ht, ""),
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
                return t.name || Ve(15), ut(e, t.name);
              }, 5381)
              .toString()
          : ""),
        f
      );
    })(),
    wt = (function () {
      function e(e, t) {
        var n = this;
        (this.inject = function (e, t) {
          void 0 === t && (t = bt);
          var r = n.name + t.hash;
          e.hasNameForId(n.id, r) ||
            e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
        }),
          (this.toString = function () {
            return Ve(12, String(n.name));
          }),
          (this.name = e),
          (this.id = "sc-keyframes-" + e),
          (this.rules = t);
      }
      return (
        (e.prototype.getName = function (e) {
          return void 0 === e && (e = bt), this.name + e.hash;
        }),
        e
      );
    })(),
    kt = /([A-Z])/,
    St = /([A-Z])/g,
    Ct = /^ms-/,
    Et = function (e) {
      return "-" + e.toLowerCase();
    };
  function xt(e) {
    return kt.test(e) ? e.replace(St, Et).replace(Ct, "-ms-") : e;
  }
  var At = function (e) {
    return null == e || !1 === e || "" === e;
  };
  function $t(e, t, n, r) {
    if (Array.isArray(e)) {
      for (var o, a = [], i = 0, s = e.length; i < s; i += 1)
        "" !== (o = $t(e[i], t, n, r)) &&
          (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
      return a;
    }
    if (At(e)) return "";
    if (je(e)) return "." + e.styledComponentId;
    if (Ie(e)) {
      if (
        "function" != typeof (l = e) ||
        (l.prototype && l.prototype.isReactComponent) ||
        !t
      )
        return e;
      var c = e(t);
      return (
        "production" !== process.env.NODE_ENV &&
          F.isElement(c) &&
          console.warn(
            Me(e) +
              " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."
          ),
        $t(c, t, n, r)
      );
    }
    var l;
    return e instanceof wt
      ? n
        ? (e.inject(n, r), e.getName(r))
        : e
      : Re(e)
      ? (function e(t, n) {
          var r,
            o = [];
          for (var a in t)
            t.hasOwnProperty(a) &&
              !At(t[a]) &&
              (Re(t[a])
                ? o.push.apply(o, e(t[a], a))
                : Ie(t[a])
                ? o.push(xt(a) + ":", t[a], ";")
                : o.push(
                    xt(a) +
                      ": " +
                      (null == (r = t[a]) || "boolean" == typeof r || "" === r
                        ? ""
                        : "number" != typeof r || 0 === r || a in q
                        ? String(r).trim()
                        : r + "px") +
                      ";"
                  ));
          return n ? [n + " {"].concat(o, ["}"]) : o;
        })(e)
      : e.toString();
  }
  function Pt(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    return Ie(e) || Re(e)
      ? $t(Oe(Ne, [e].concat(n)))
      : 0 === n.length && 1 === e.length && "string" == typeof e[0]
      ? e
      : $t(Oe(e, n));
  }
  var _t = /invalid hook call/i,
    Ot = new Set(),
    Rt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    Nt = /(^-|-$)/g;
  function Tt(e) {
    return e.replace(Rt, "-").replace(Nt, "");
  }
  function It(e) {
    return (
      "string" == typeof e &&
      ("production" === process.env.NODE_ENV ||
        e.charAt(0) === e.charAt(0).toLowerCase())
    );
  }
  var Mt = function (e) {
      return (
        "function" == typeof e ||
        ("object" == typeof e && null !== e && !Array.isArray(e))
      );
    },
    jt = function (e) {
      return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
    };
  function Dt(e, t, n) {
    var r = e[n];
    Mt(t) && Mt(r) ? Lt(r, t) : (e[n] = t);
  }
  function Lt(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    for (var o = 0, a = n; o < a.length; o++) {
      var i = a[o];
      if (Mt(i)) for (var s in i) jt(s) && Dt(e, i[s], s);
    }
    return e;
  }
  var zt = u.default.createContext(),
    Ft = {};
  function Bt(t, n, r) {
    var o = je(t),
      a = !It(t),
      i = n.attrs,
      s = void 0 === i ? Ne : i,
      c = n.componentId,
      l =
        void 0 === c
          ? (function (e, t) {
              var n = "string" != typeof e ? "sc" : Tt(e);
              Ft[n] = (Ft[n] || 0) + 1;
              var r =
                n +
                "-" +
                (function (e) {
                  return lt(dt(e) >>> 0);
                })("5.3.0" + n + Ft[n]);
              return t ? t + "-" + r : r;
            })(n.displayName, n.parentComponentId)
          : c,
      d = n.displayName,
      f =
        void 0 === d
          ? (function (e) {
              return It(e) ? "styled." + e : "Styled(" + Me(e) + ")";
            })(t)
          : d,
      p =
        n.displayName && n.componentId
          ? Tt(n.displayName) + "-" + n.componentId
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
      y = new pt(r, p, o ? t.componentStyle : void 0),
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
              void 0 === e && (e = Te);
              var r = _e({}, t, { theme: e }),
                o = {};
              return (
                n.forEach(function (e) {
                  var t,
                    n,
                    a,
                    i = e;
                  for (t in (Ie(i) && (i = i(r)), i))
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
                  void 0 === n && (n = Te),
                  (e.theme !== n.theme && e.theme) || t || n.theme
                );
              })(n, e.useContext(zt), s) || Te,
              n,
              a
            ),
            p = f[1],
            h = (function (t, n, r, o) {
              var a = e.useContext(gt) || vt,
                i = e.useContext(yt) || bt,
                s = t.generateAndInjectStyles(n ? Te : r, a, i);
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
            y = It(g),
            v = p !== n ? _e({}, n, {}, p) : n,
            b = {};
          for (var w in v)
            "$" !== w[0] &&
              "as" !== w &&
              ("forwardedAs" === w
                ? (b.as = v[w])
                : (l ? l(w, G, g) : !y || G(w)) && (b[w] = v[w]));
          return (
            n.style &&
              p.style !== n.style &&
              (b.style = _e({}, n.style, {}, p.style)),
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
        : Ne),
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
          a = t && t + "-" + (It(e) ? e : Tt(Me(e)));
        return Bt(e, _e({}, o, { attrs: h, componentId: a }), r);
      }),
      Object.defineProperty(g, "defaultProps", {
        get: function () {
          return this._foldedDefaultProps;
        },
        set: function (e) {
          this._foldedDefaultProps = o ? Lt({}, t.defaultProps, e) : e;
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
              e.useRef(), Ot.has(r) || (console.warn(r), Ot.add(r));
            } catch (t) {
              _t.test(t.message) && Ot.delete(r);
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
        Pe(g, t, {
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
  var Vt,
    Ht = function (e) {
      return (function e(t, n, r) {
        if ((void 0 === r && (r = Te), !F.isValidElementType(n)))
          return Ve(1, String(n));
        var o = function () {
          return t(n, r, Pt.apply(void 0, arguments));
        };
        return (
          (o.withConfig = function (o) {
            return e(t, n, _e({}, r, {}, o));
          }),
          (o.attrs = function (o) {
            return e(
              t,
              n,
              _e({}, r, {
                attrs: Array.prototype.concat(r.attrs, o).filter(Boolean),
              })
            );
          }),
          o
        );
      })(Bt, e);
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
    Ht[e] = Ht(e);
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
  var qt,
    Ut,
    Gt,
    Wt,
    Yt,
    Xt,
    Jt = Ht.div(
      Vt ||
        (Vt = y([
          "\n  background-color: #252530;\n  overflow-y: auto;\n  font-feature-settings: normal;\n  width: 100%;\n  height: 100%;\n",
        ]))
    ),
    Zt = function (t) {
      var n = t.language,
        r = t.onChange;
      return u.default.createElement(
        Jt,
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
    Kt = function (e) {
      return "@media (max-width: " + e + "px)";
    },
    Qt = Object.freeze({
      custom: Kt,
      desktop: Kt(922),
      tablet: Kt(768),
      phone: Kt(576),
    }),
    en = Ht(i.Tabs)(
      qt ||
        (qt = y([
          "\n  display: flex;\n  flex-direction: column;\n  min-width: 200px;\n  min-height: 350px;\n  background: #252530;\n\n  ",
          " {\n    min-width: 100% !important;\n    min-height: 100%;\n  }\n",
        ])),
      Qt.phone
    ),
    tn = Ht(i.TabList)(Ut || (Ut = y(["\n  background-color: #252530;\n"]))),
    nn = Ht(i.Tab)(
      Gt ||
        (Gt = y([
          "\n  border: none;\n  padding: 8px 5px;\n  color: gray;\n\n  &[data-selected] {\n    color: lightgray;\n  }\n",
        ]))
    ),
    rn = Ht(i.TabPanels)(Wt || (Wt = y(["\n  flex: 1 1 0%;\n"]))),
    on = Ht(i.TabPanel)(
      Yt || (Yt = y(["\n  height: 100%;\n  width: 100%;\n"]))
    );
  function an(t) {
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
      en,
      {
        defaultIndex: i.findIndex(function (e) {
          return e.value === r;
        }),
        style: { width: a },
      },
      u.default.createElement(
        tn,
        null,
        i.map(function (e) {
          return u.default.createElement(nn, { key: e.value }, e.name);
        })
      ),
      u.default.createElement(
        rn,
        null,
        i.map(function (e) {
          return u.default.createElement(
            on,
            { key: e.value },
            u.default.createElement(Zt, {
              code: n[e.value],
              onChange: o,
              language: e.value,
            })
          );
        })
      )
    );
  }
  var sn,
    cn = Ht.div(
      Xt ||
        (Xt = y([
          "\n  background-color: black;\n  color: white;\n  height: 100%;\n\n  li {\n    font-size: 16px !important;\n  }\n",
        ]))
    );
  function ln(e) {
    return u.default.createElement(
      cn,
      null,
      e.logs.map(function (e, t) {
        return u.default.createElement(h.default, {
          data: e,
          key: t,
          theme: "chromeDark",
        });
      })
    );
  }
  var un,
    dn = Ht.div(
      sn ||
        (sn = y([
          "\n  background-color: red;\n  color: white;\n  padding: 0.2em 0.5em;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  box-sizing: border-box;\n",
        ]))
    ),
    fn = function (e) {
      return u.default.createElement(
        dn,
        null,
        u.default.createElement("p", null, e.error)
      );
    },
    pn = Ht.div(
      un ||
        (un = y([
          '\n  position: relative;\n  height: 100%;\n  background: white;\n  border-radius: 8px;\n\n  &::after {\n    content: "";\n    display: inline-block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    top: 0;\n    left: 0;\n  }\n',
        ]))
    ),
    hn = e.memo(function (t) {
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
          pn,
          null,
          u.default.createElement("iframe", {
            height: "100%",
            width: "100%",
            title: "example",
            frameBorder: "0",
            srcDoc: s,
          }),
          d && u.default.createElement(fn, { error: d })
        )
      );
    });
  function mn(t) {
    var n = e.useState([]),
      r = n[0],
      o = n[1],
      a = e.useMemo(function () {
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
              e.data.source === "frame-" + t.id &&
                "log" === e.data.message.type &&
                o(function (t) {
                  return [].concat(t, e.data.message.data);
                });
            });
        },
        [t.id]
      ),
      u.default.createElement(
        en,
        {
          defaultIndex: a.findIndex(function (e) {
            return e.value === t.defaultTab;
          }),
          style: { width: t.width },
        },
        u.default.createElement(
          tn,
          null,
          a.map(function (e) {
            return u.default.createElement(nn, { key: e.value }, e.name);
          })
        ),
        u.default.createElement(
          rn,
          null,
          u.default.createElement(
            on,
            null,
            u.default.createElement(hn, {
              id: t.id,
              snippet: t.snippet,
              transformJs: t.transformJs,
              presets: t.presets,
            })
          ),
          u.default.createElement(
            on,
            null,
            u.default.createElement(ln, { logs: r })
          )
        )
      )
    );
  }
  var gn,
    yn,
    vn = {
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
    bn = {
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
    wn = {
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
    kn = e.createContext(wn),
    Sn = function () {
      return e.useContext(kn);
    };
  function Cn(t) {
    var n = t.mode,
      r = t.userTheme,
      o = t.children,
      a = e.useState(wn),
      i = a[0],
      s = a[1];
    return (
      e.useEffect(
        function () {
          s(
            (function (e) {
              return (
                void 0 === e && (e = "light"),
                m.default(wn, "light" === e ? vn : bn)
              );
            })(n)
          );
        },
        [n]
      ),
      u.default.createElement(kn.Provider, { value: null != r ? r : i }, o)
    );
  }
  var En = Ht.div(
      gn ||
        (gn = y([
          "\n  display: flex;\n  border: 16px solid #252530;\n  border-radius: 8px;\n\n  ",
          " {\n    flex-direction: column;\n  }\n",
        ])),
      Qt.phone
    ),
    xn = Ht.div(
      yn ||
        (yn = y([
          "\n  width: 15px;\n  cursor: col-resize;\n  background-color: #252530;\n",
        ]))
    );
  function An(t) {
    var n = e.useRef(null),
      r = e.useRef(null),
      o = (function (t) {
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
      })({ containerRef: n, dividerRef: r, dividerWidth: Sn().divider.width }),
      a = o.rightWidth;
    return u.default.createElement(
      En,
      { ref: n },
      t.leftChild(o.leftWidth),
      u.default.createElement(xn, { ref: r }),
      t.rightChild(a)
    );
  }
  return (
    n.setup(e.createElement, void 0, Sn),
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
        Cn,
        { userTheme: p, mode: m },
        u.default.createElement(
          "div",
          { className: "playground" },
          u.default.createElement(An, {
            leftChild: function (e) {
              return u.default.createElement(an, {
                width: e,
                code: v,
                defaultTab: a,
                onChange: k,
              });
            },
            rightChild: function (e) {
              return u.default.createElement(mn, {
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
