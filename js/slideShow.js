(function (a, b) { function cy(a) { return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1 } function cu(a) { if (!cj[a]) { var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display"); d.remove(); if (e === "none" || e === "") { ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck); if (!cl || !ck.createElement) { cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close() } d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck) } cj[a] = e } return cj[a] } function ct(a, b) { var c = {}; f.each(cp.concat.apply([], cp.slice(0, b)), function () { c[this] = a }); return c } function cs() { cq = b } function cr() { setTimeout(cs, 0); return cq = f.now() } function ci() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) { } } function ch() { try { return new a.XMLHttpRequest } catch (b) { } } function cb(a, c) { a.dataFilter && (c = a.dataFilter(c, a.dataType)); var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p; for (g = 1; g < i; g++) { if (g === 1) { for (h in a.converters) { typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]) } } l = k, k = d[g]; if (k === "*") { k = l } else { if (l !== "*" && l !== k) { m = l + " " + k, n = e[m] || e["* " + k]; if (!n) { p = b; for (o in e) { j = o.split(" "); if (j[0] === l || j[0] === "*") { p = e[j[1] + " " + k]; if (p) { o = e[o], o === !0 ? n = p : p === !0 && (n = o); break } } } } !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c))) } } } return c } function ca(a, c, d) { var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k; for (i in g) { i in d && (c[g[i]] = d[i]) } while (f[0] === "*") { f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type")) } if (h) { for (i in e) { if (e[i] && e[i].test(h)) { f.unshift(i); break } } } if (f[0] in d) { j = f[0] } else { for (i in d) { if (!f[0] || a.converters[i + " " + f[0]]) { j = i; break } k || (k = i) } j = j || k } if (j) { j !== f[0] && f.unshift(j); return d[j] } } function b_(a, b, c, d) { if (f.isArray(b)) { f.each(b, function (b, e) { c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d) }) } else { if (!c && f.type(b) === "object") { for (var e in b) { b_(a + "[" + e + "]", b[e], c, d) } } else { d(a, b) } } } function b$(a, c) { var d, e, g = f.ajaxSettings.flatOptions || {}; for (d in c) { c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]) } e && f.extend(!0, a, e) } function bZ(a, c, d, e, f, g) { f = f || c.dataTypes[0], g = g || {}, g[f] = !0; var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l; for (; i < j && (k || !l) ; i++) { l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g))) } (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g)); return l } function bY(a) { return function (b, c) { typeof b != "string" && (c = b, b = "*"); if (f.isFunction(c)) { var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j; for (; e < g; e++) { h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c) } } } } function bB(a, b, c) { var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? 1 : 0, g = 4; if (d > 0) { if (c !== "border") { for (; e < g; e += 2) { c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0 } } return d + "px" } d = by(a, b); if (d < 0 || d == null) { d = a.style[b] } if (bt.test(d)) { return d } d = parseFloat(d) || 0; if (c) { for (; e < g; e += 2) { d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0) } } return d + "px" } function bo(a) { var b = c.createElement("div"); bh.appendChild(b), b.innerHTML = a.outerHTML; return b.firstChild } function bn(a) { var b = (a.nodeName || "").toLowerCase(); b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm) } function bm(a) { if (a.type === "checkbox" || a.type === "radio") { a.defaultChecked = a.checked } } function bl(a) { return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : [] } function bk(a, b) { var c; b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached")) } function bj(a, b) { if (b.nodeType === 1 && !!f.hasData(a)) { var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events; if (i) { delete h.handle, h.events = {}; for (c in i) { for (d = 0, e = i[c].length; d < e; d++) { f.event.add(b, c, i[c][d]) } } } h.data && (h.data = f.extend({}, h.data)) } } function bi(a, b) { return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a } function U(a) { var b = V.split("|"), c = a.createDocumentFragment(); if (c.createElement) { while (b.length) { c.createElement(b.pop()) } } return c } function T(a, b, c) { b = b || 0; if (f.isFunction(b)) { return f.grep(a, function (a, d) { var e = !!b.call(a, d, a); return e === c }) } if (b.nodeType) { return f.grep(a, function (a, d) { return a === b === c }) } if (typeof b == "string") { var d = f.grep(a, function (a) { return a.nodeType === 1 }); if (O.test(b)) { return f.filter(b, d, !c) } b = f.filter(b, d) } return f.grep(a, function (a, d) { return f.inArray(a, b) >= 0 === c }) } function S(a) { return !a || !a.parentNode || a.parentNode.nodeType === 11 } function K() { return !0 } function J() { return !1 } function n(a, b, c) { var d = b + "defer", e = b + "queue", g = b + "mark", h = f._data(a, d); h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () { !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire()) }, 0) } function m(a) { for (var b in a) { if (b === "data" && f.isEmptyObject(a[b])) { continue } if (b !== "toJSON") { return !1 } } return !0 } function l(a, c, d) { if (d === b && a.nodeType === 1) { var e = "data-" + c.replace(k, "-$1").toLowerCase(); d = a.getAttribute(e); if (typeof d == "string") { try { d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d } catch (g) { } f.data(a, c, d) } else { d = b } } return d } function h(a) { var b = g[a] = {}, c, d; a = a.split(/\s+/); for (c = 0, d = a.length; c < d; c++) { b[a[c]] = !0 } return b } var c = a.document, d = a.navigator, e = a.location, f = function () { function J() { if (!e.isReady) { try { c.documentElement.doScroll("left") } catch (a) { setTimeout(J, 1); return } e.ready() } } var e = function (a, b) { return new e.fn.init(a, b, h) }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) { return (b + "").toUpperCase() }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {}; e.fn = e.prototype = { constructor: e, init: function (a, d, f) { var g, h, j, k; if (!a) { return this } if (a.nodeType) { this.context = this[0] = a, this.length = 1; return this } if (a === "body" && !d && c.body) { this.context = c, this[0] = c.body, this.selector = a, this.length = 1; return this } if (typeof a == "string") { a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null]; if (g && (g[1] || !d)) { if (g[1]) { d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes); return e.merge(this, a) } h = c.getElementById(g[2]); if (h && h.parentNode) { if (h.id !== g[2]) { return f.find(a) } this.length = 1, this[0] = h } this.context = c, this.selector = a; return this } return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a) } if (e.isFunction(a)) { return f.ready(a) } a.selector !== b && (this.selector = a.selector, this.context = a.context); return e.makeArray(a, this) }, selector: "", jquery: "x.x.x", length: 0, size: function () { return this.length }, toArray: function () { return F.call(this, 0) }, get: function (a) { return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a] }, pushStack: function (a, b, c) { var d = this.constructor(); e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"); return d }, each: function (a, b) { return e.each(this, a, b) }, ready: function (a) { e.bindReady(), A.add(a); return this }, eq: function (a) { a = +a; return a === -1 ? this.slice(a) : this.slice(a, a + 1) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, slice: function () { return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(",")) }, map: function (a) { return this.pushStack(e.map(this, function (b, c) { return a.call(b, c, b) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: E, sort: [].sort, splice: [].splice }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () { var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1; typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j); for (; j < k; j++) { if ((a = arguments[j]) != null) { for (c in a) { d = i[c], f = a[c]; if (i === f) { continue } l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f) } } } return i }, e.extend({ noConflict: function (b) { a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f); return e }, isReady: !1, readyWait: 1, holdReady: function (a) { a ? e.readyWait++ : e.ready(!0) }, ready: function (a) { if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) { if (!c.body) { return setTimeout(e.ready, 1) } e.isReady = !0; if (a !== !0 && --e.readyWait > 0) { return } A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready") } }, bindReady: function () { if (!A) { A = e.Callbacks("once memory"); if (c.readyState === "complete") { return setTimeout(e.ready, 1) } if (c.addEventListener) { c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1) } else { if (c.attachEvent) { c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready); var b = !1; try { b = a.frameElement == null } catch (d) { } c.documentElement.doScroll && b && J() } } } }, isFunction: function (a) { return e.type(a) === "function" }, isArray: Array.isArray || function (a) { return e.type(a) === "array" }, isWindow: function (a) { return a != null && a == a.window }, isNumeric: function (a) { return !isNaN(parseFloat(a)) && isFinite(a) }, type: function (a) { return a == null ? String(a) : I[C.call(a)] || "object" }, isPlainObject: function (a) { if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) { return !1 } try { if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) { return !1 } } catch (c) { return !1 } var d; for (d in a) { } return d === b || D.call(a, d) }, isEmptyObject: function (a) { for (var b in a) { return !1 } return !0 }, error: function (a) { throw new Error(a) }, parseJSON: function (b) { if (typeof b != "string" || !b) { return null } b = e.trim(b); if (a.JSON && a.JSON.parse) { return a.JSON.parse(b) } if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) { return (new Function("return " + b))() } e.error("Invalid JSON: " + b) }, parseXML: function (c) { if (typeof c != "string" || !c) { return null } var d, f; try { a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c)) } catch (g) { d = b } (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c); return d }, noop: function () { }, globalEval: function (b) { b && j.test(b) && (a.execScript || function (b) { a.eval.call(a, b) })(b) }, camelCase: function (a) { return a.replace(w, "ms-").replace(v, x) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase() }, each: function (a, c, d) { var f, g = 0, h = a.length, i = h === b || e.isFunction(a); if (d) { if (i) { for (f in a) { if (c.apply(a[f], d) === !1) { break } } } else { for (; g < h;) { if (c.apply(a[g++], d) === !1) { break } } } } else { if (i) { for (f in a) { if (c.call(a[f], f, a[f]) === !1) { break } } } else { for (; g < h;) { if (c.call(a[g], g, a[g++]) === !1) { break } } } } return a }, trim: G ? function (a) { return a == null ? "" : G.call(a) } : function (a) { return a == null ? "" : (a + "").replace(k, "").replace(l, "") }, makeArray: function (a, b) { var c = b || []; if (a != null) { var d = e.type(a); a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a) } return c }, inArray: function (a, b, c) { var d; if (b) { if (H) { return H.call(b, a, c) } d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; for (; c < d; c++) { if (c in b && b[c] === a) { return c } } } return -1 }, merge: function (a, c) { var d = a.length, e = 0; if (typeof c.length == "number") { for (var f = c.length; e < f; e++) { a[d++] = c[e] } } else { while (c[e] !== b) { a[d++] = c[e++] } } a.length = d; return a }, grep: function (a, b, c) { var d = [], e; c = !!c; for (var f = 0, g = a.length; f < g; f++) { e = !!b(a[f], f), c !== e && d.push(a[f]) } return d }, map: function (a, c, d) { var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a)); if (k) { for (; i < j; i++) { f = c(a[i], i, d), f != null && (h[h.length] = f) } } else { for (g in a) { f = c(a[g], g, d), f != null && (h[h.length] = f) } } return h.concat.apply([], h) }, guid: 1, proxy: function (a, c) { if (typeof c == "string") { var d = a[c]; c = a, a = d } if (!e.isFunction(a)) { return b } var f = F.call(arguments, 2), g = function () { return a.apply(c, f.concat(F.call(arguments))) }; g.guid = a.guid = a.guid || g.guid || e.guid++; return g }, access: function (a, c, d, f, g, h, i) { var j, k = d == null, l = 0, m = a.length; if (d && typeof d == "object") { for (l in d) { e.access(a, c, l, d[l], 1, h, f) } g = 1 } else { if (f !== b) { j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) { return j.call(e(a), c) }) : (c.call(a, f), c = null)); if (c) { for (; l < m; l++) { c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i) } } g = 1 } } return g ? a : k ? c.call(a) : m ? c(a[0], d) : h }, now: function () { return (new Date).getTime() }, uaMatch: function (a) { a = a.toLowerCase(); var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || []; return { browser: b[1] || "", version: b[2] || "0" } }, sub: function () { function a(b, c) { return new a.fn.init(b, c) } e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) { f && f instanceof e && !(f instanceof a) && (f = a(f)); return e.fn.init.call(this, d, f, b) }, a.fn.init.prototype = a.fn; var b = a(c); return a }, browser: {} }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) { I["[object " + b + "]"] = b.toLowerCase() }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test("?") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () { c.removeEventListener("DOMContentLoaded", B, !1), e.ready() } : c.attachEvent && (B = function () { c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready()) }); return e }(), g = {}; f.Callbacks = function (a) { a = a ? g[a] || h(a) : {}; var c = [], d = [], e, i, j, k, l, m, n = function (b) { var d, e, g, h, i; for (d = 0, e = b.length; d < e; d++) { g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g) } }, o = function (b, f) { f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length; for (; c && m < l; m++) { if (c[m].apply(b, f) === !1 && a.stopOnFalse) { e = !0; break } } j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1]))) }, p = { add: function () { if (c) { var a = c.length; n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1])) } return this }, remove: function () { if (c) { var b = arguments, d = 0, e = b.length; for (; d < e; d++) { for (var f = 0; f < c.length; f++) { if (b[d] === c[f]) { j && f <= l && (l--, f <= m && m--), c.splice(f--, 1); if (a.unique) { break } } } } } return this }, has: function (a) { if (c) { var b = 0, d = c.length; for (; b < d; b++) { if (a === c[b]) { return !0 } } } return !1 }, empty: function () { c = []; return this }, disable: function () { c = d = e = b; return this }, disabled: function () { return !c }, lock: function () { d = b, (!e || e === !0) && p.disable(); return this }, locked: function () { return !d }, fireWith: function (b, c) { d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c)); return this }, fire: function () { p.fireWith(this, arguments); return this }, fired: function () { return !!i } }; return p }; var i = [].slice; f.extend({ Deferred: function (a) { var b = f.Callbacks("once memory"), c = f.Callbacks("once memory"), d = f.Callbacks("memory"), e = "pending", g = { resolve: b, reject: c, notify: d }, h = { done: b.add, fail: c.add, progress: d.add, state: function () { return e }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) { i.done(a).fail(b).progress(c); return this }, always: function () { i.done.apply(i, arguments).fail.apply(i, arguments); return this }, pipe: function (a, b, c) { return f.Deferred(function (d) { f.each({ done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"] }, function (a, b) { var c = b[0], e = b[1], g; f.isFunction(c) ? i[a](function () { g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g]) }) : i[a](d[e]) }) }).promise() }, promise: function (a) { if (a == null) { a = h } else { for (var b in h) { a[b] = h[b] } } return a } }, i = h.promise({}), j; for (j in g) { i[j] = g[j].fire, i[j + "With"] = g[j].fireWith } i.done(function () { e = "resolved" }, c.disable, d.lock).fail(function () { e = "rejected" }, b.disable, d.lock), a && a.call(i, i); return i }, when: function (a) { function m(a) { return function (b) { e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e) } } function l(a) { return function (c) { b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b) } } var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise(); if (d > 1) { for (; c < d; c++) { b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g } g || j.resolveWith(j, b) } else { j !== a && j.resolveWith(j, d ? [a] : []) } return k } }), f.support = function () { var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"), q = c.documentElement; p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0]; if (!d || !d.length || !e) { return {} } g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = { leadingWhitespace: p.firstChild.nodeType === 3, tbody: !p.getElementsByTagName("tbody").length, htmlSerialize: !!p.getElementsByTagName("link").length, style: /top/.test(e.getAttribute("style")), hrefNormalized: e.getAttribute("href") === "/a", opacity: /^0.55/.test(e.style.opacity), cssFloat: !!e.style.cssFloat, checkOn: i.value === "on", optSelected: h.selected, getSetAttribute: p.className !== "t", enctype: !!c.createElement("form").enctype, html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, pixelMargin: !0 }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled; try { delete p.test } catch (r) { b.deleteExpando = !1 } !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () { b.noCloneEvent = !1 }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p); if (p.attachEvent) { for (n in { submit: 1, change: 1, focusin: 1 }) { m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o } } j.removeChild(p), j = g = h = p = i = null, f(function () { var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0]; !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div><table " + n + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || { marginRight: 0 }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = { doesNotAddBorder: g.offsetTop !== 5, doesAddBorderForTableAndCells: i.offsetTop === 5 }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || { marginTop: 0 }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j)) }); return b }(); var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g; f.extend({ cache: {}, uuid: 0, expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function (a) { a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando]; return !!a && !m(a) }, data: function (a, c, d, e) { if (!!f.acceptData(a)) { var g, h, i, j = f.expando, k = typeof c == "string", l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === "events"; if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) { return } n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop)); if (typeof c == "object" || typeof c == "function") { e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c) } g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d); if (o && !h[c]) { return g.events } k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h; return i } }, removeData: function (a, b, c) { if (!!f.acceptData(a)) { var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h; if (!j[k]) { return } if (b) { d = c ? j[k] : j[k].data; if (d) { f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" "))); for (e = 0, g = b.length; e < g; e++) { delete d[b[e]] } if (!(c ? m : f.isEmptyObject)(d)) { return } } } if (!c) { delete j[k].data; if (!m(j[k])) { return } } f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null) } }, _data: function (a, b, c) { return f.data(a, b, c, !0) }, acceptData: function (a) { if (a.nodeName) { var b = f.noData[a.nodeName.toLowerCase()]; if (b) { return b !== !0 && a.getAttribute("classid") === b } } return !0 } }), f.fn.extend({ data: function (a, c) { var d, e, g, h, i, j = this[0], k = 0, m = null; if (a === b) { if (this.length) { m = f.data(j); if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) { g = j.attributes; for (i = g.length; k < i; k++) { h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h])) } f._data(j, "parsedAttrs", !0) } } return m } if (typeof a == "object") { return this.each(function () { f.data(this, a) }) } d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!"; return f.access(this, function (c) { if (c === b) { m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m)); return m === b && d[1] ? this.data(d[0]) : m } d[1] = c, this.each(function () { var b = f(this); b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d) }) }, null, c, arguments.length > 1, null, !1) }, removeData: function (a) { return this.each(function () { f.removeData(this, a) }) } }), f.extend({ _mark: function (a, b) { a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1)) }, _unmark: function (a, b, c) { a !== !0 && (c = b, b = a, a = !1); if (b) { c = c || "fx"; var d = c + "mark", e = a ? 0 : (f._data(b, d) || 1) - 1; e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark")) } }, queue: function (a, b, c) { var d; if (a) { b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c)); return d || [] } }, dequeue: function (a, b) { b = b || "fx"; var c = f.queue(a, b), d = c.shift(), e = {}; d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () { f.dequeue(a, b) }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue")) } }), f.fn.extend({ queue: function (a, c) { var d = 2; typeof a != "string" && (c = a, a = "fx", d--); if (arguments.length < d) { return f.queue(this[0], a) } return c === b ? this : this.each(function () { var b = f.queue(this, a, c); a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { f.dequeue(this, a) }) }, delay: function (a, b) { a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx"; return this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, clearQueue: function (a) { return this.queue(a || "fx", []) }, promise: function (a, c) { function m() { --h || d.resolveWith(e, [e]) } typeof a != "string" && (c = a, a = b), a = a || "fx"; var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l; while (g--) { if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) { h++, l.add(m) } } m(); return d.promise(c) } }); var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y; f.fn.extend({ attr: function (a, b) { return f.access(this, f.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { f.removeAttr(this, a) }) }, prop: function (a, b) { return f.access(this, f.prop, a, b, arguments.length > 1) }, removeProp: function (a) { a = f.propFix[a] || a; return this.each(function () { try { this[a] = b, delete this[a] } catch (c) { } }) }, addClass: function (a) { var b, c, d, e, g, h, i; if (f.isFunction(a)) { return this.each(function (b) { f(this).addClass(a.call(this, b, this.className)) }) } if (a && typeof a == "string") { b = a.split(p); for (c = 0, d = this.length; c < d; c++) { e = this[c]; if (e.nodeType === 1) { if (!e.className && b.length === 1) { e.className = a } else { g = " " + e.className + " "; for (h = 0, i = b.length; h < i; h++) { ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ") } e.className = f.trim(g) } } } } return this }, removeClass: function (a) { var c, d, e, g, h, i, j; if (f.isFunction(a)) { return this.each(function (b) { f(this).removeClass(a.call(this, b, this.className)) }) } if (a && typeof a == "string" || a === b) { c = (a || "").split(p); for (d = 0, e = this.length; d < e; d++) { g = this[d]; if (g.nodeType === 1 && g.className) { if (a) { h = (" " + g.className + " ").replace(o, " "); for (i = 0, j = c.length; i < j; i++) { h = h.replace(" " + c[i] + " ", " ") } g.className = f.trim(h) } else { g.className = "" } } } } return this }, toggleClass: function (a, b) { var c = typeof a, d = typeof b == "boolean"; if (f.isFunction(a)) { return this.each(function (c) { f(this).toggleClass(a.call(this, c, this.className, b), b) }) } return this.each(function () { if (c === "string") { var e, g = 0, h = f(this), i = b, j = a.split(p); while (e = j[g++]) { i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e) } } else { if (c === "undefined" || c === "boolean") { this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || "" } } }) }, hasClass: function (a) { var b = " " + a + " ", c = 0, d = this.length; for (; c < d; c++) { if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) { return !0 } } return !1 }, val: function (a) { var c, d, e, g = this[0]; if (!!arguments.length) { e = f.isFunction(a); return this.each(function (d) { var g = f(this), h; if (this.nodeType === 1) { e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) { return a == null ? "" : a + "" })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]; if (!c || !("set" in c) || c.set(this, h, "value") === b) { this.value = h } } }) } if (g) { c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()]; if (c && "get" in c && (d = c.get(g, "value")) !== b) { return d } d = g.value; return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d } } }), f.extend({ valHooks: { option: { get: function (a) { var b = a.attributes.value; return !b || b.specified ? a.value : a.text } }, select: { get: function (a) { var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === "select-one"; if (g < 0) { return null } c = j ? g : 0, d = j ? g + 1 : i.length; for (; c < d; c++) { e = i[c]; if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) { b = f(e).val(); if (j) { return b } h.push(b) } } if (j && !h.length && i.length) { return f(i[g]).val() } return h }, set: function (a, b) { var c = f.makeArray(b); f(a).find("option").each(function () { this.selected = f.inArray(f(this).val(), c) >= 0 }), c.length || (a.selectedIndex = -1); return c } } }, attrFn: { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0 }, attr: function (a, c, d, e) { var g, h, i, j = a.nodeType; if (!!a && j !== 3 && j !== 8 && j !== 2) { if (e && c in f.attrFn) { return f(a)[c](d) } if (typeof a.getAttribute == "undefined") { return f.prop(a, c, d) } i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w)); if (d !== b) { if (d === null) { f.removeAttr(a, c); return } if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) { return g } a.setAttribute(c, "" + d); return d } if (h && "get" in h && i && (g = h.get(a, c)) !== null) { return g } g = a.getAttribute(c); return g === null ? b : g } }, removeAttr: function (a, b) { var c, d, e, g, h, i = 0; if (b && a.nodeType === 1) { d = b.toLowerCase().split(p), g = d.length; for (; i < g; i++) { e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1)) } } }, attrHooks: { type: { set: function (a, b) { if (r.test(a.nodeName) && a.parentNode) { f.error("type property can't be changed") } else { if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) { var c = a.value; a.setAttribute("type", b), c && (a.value = c); return b } } } }, value: { get: function (a, b) { if (w && f.nodeName(a, "button")) { return w.get(a, b) } return b in a ? a.value : null }, set: function (a, b, c) { if (w && f.nodeName(a, "button")) { return w.set(a, b, c) } a.value = b } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function (a, c, d) { var e, g, h, i = a.nodeType; if (!!a && i !== 3 && i !== 8 && i !== 2) { h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]); return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c] } }, propHooks: { tabIndex: { get: function (a) { var c = a.getAttributeNode("tabindex"); return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b } } } }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = { get: function (a, c) { var d, e = f.prop(a, c); return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b }, set: function (a, b, c) { var d; b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())); return c } }, v || (y = { name: !0, id: !0, coords: !0 }, w = f.valHooks.button = { get: function (a, c) { var d; d = a.getAttributeNode(c); return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b }, set: function (a, b, d) { var e = a.getAttributeNode(d); e || (e = c.createAttribute(d), a.setAttributeNode(e)); return e.nodeValue = b + "" } }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) { f.attrHooks[b] = f.extend(f.attrHooks[b], { set: function (a, c) { if (c === "") { a.setAttribute(b, "auto"); return c } } }) }), f.attrHooks.contenteditable = { get: w.get, set: function (a, b, c) { b === "" && (b = "false"), w.set(a, b, c) } }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) { f.attrHooks[c] = f.extend(f.attrHooks[c], { get: function (a) { var d = a.getAttribute(c, 2); return d === null ? b : d } }) }), f.support.style || (f.attrHooks.style = { get: function (a) { return a.style.cssText.toLowerCase() || b }, set: function (a, b) { return a.style.cssText = "" + b } }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, { get: function (a) { var b = a.parentNode; b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex); return null } })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () { f.valHooks[this] = { get: function (a) { return a.getAttribute("value") === null ? "on" : a.value } } }), f.each(["radio", "checkbox"], function () { f.valHooks[this] = f.extend(f.valHooks[this], { set: function (a, b) { if (f.isArray(b)) { return a.checked = f.inArray(f(a).val(), b) >= 0 } } }) }); var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /(?:^|\s)hover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (a) { var b = F.exec(a); b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")); return b }, H = function (a, b) { var c = a.attributes || {}; return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value)) }, I = function (a) { return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1") }; f.event = { add: function (a, c, d, e, g) { var h, i, j, k, l, m, n, o, p, q, r, s; if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) { d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) { return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b }, i.elem = a), c = f.trim(I(c)).split(" "); for (k = 0; k < c.length; k++) { l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({ type: m, origType: l[1], data: e, handler: d, guid: d.guid, selector: g, quick: g && G(g), namespace: n.join(".") }, p), r = j[m]; if (!r) { r = j[m] = [], r.delegateCount = 0; if (!s.setup || s.setup.call(a, e, n, i) === !1) { a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i) } } s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0 } a = null } }, global: {}, remove: function (a, b, c, d, e) { var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s; if (!!g && !!(o = g.events)) { b = f.trim(I(b || "")).split(" "); for (h = 0; h < b.length; h++) { i = A.exec(b[h]) || [], j = k = i[1], l = i[2]; if (!j) { for (j in o) { f.event.remove(a, j + b[h], c, d, !0) } continue } p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null; for (n = 0; n < r.length; n++) { s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s)) } r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j]) } f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0)) } }, customEvent: { getData: !0, setData: !0, changeData: !0 }, trigger: function (c, d, e, g) { if (!e || e.nodeType !== 3 && e.nodeType !== 8) { var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s; if (E.test(h + f.event.triggered)) { return } h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort()); if ((!e || f.event.customEvent[h]) && !f.event.global[h]) { return } c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : ""; if (!e) { j = f.cache; for (l in j) { j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0) } return } c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {}; if (p.trigger && p.trigger.apply(e, d) === !1) { return } r = [[e, p.bindType || h]]; if (!g && !p.noBubble && !f.isWindow(e)) { s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null; for (; m; m = m.parentNode) { r.push([m, s]), n = m } n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s]) } for (l = 0; l < r.length && !c.isPropagationStopped() ; l++) { m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault() } c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n)); return c.result } }, dispatch: function (c) { c = f.event.fix(c || a.event); var d = (f._data(this, "events") || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s, t, u; g[0] = c, c.delegateTarget = this; if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) { if (e && (!c.button || c.type !== "click")) { n = f(this), n.context = this.ownerDocument || this; for (m = c.target; m != this; m = m.parentNode || this) { if (m.disabled !== !0) { p = {}, r = [], n[0] = m; for (k = 0; k < e; k++) { s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s) } r.length && j.push({ elem: m, matches: r }) } } } d.length > e && j.push({ elem: this, matches: d.slice(e) }); for (k = 0; k < j.length && !c.isPropagationStopped() ; k++) { q = j[k], c.currentTarget = q.elem; for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped() ; l++) { s = q.matches[l]; if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) { c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation())) } } } i.postDispatch && i.postDispatch.call(this, c); return c.result } }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (a, b) { a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode); return a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, d) { var e, f, g, h = d.button, i = d.fromElement; a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0); return a } }, fix: function (a) { if (a[f.expando]) { return a } var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props; a = f.Event(g); for (d = i.length; d;) { e = i[--d], a[e] = g[e] } a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey); return h.filter ? h.filter(a, g) : a }, special: { ready: { setup: f.bindReady }, load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function (a, b, c) { f.isWindow(this) && (this.onbeforeunload = c) }, teardown: function (a, b) { this.onbeforeunload === b && (this.onbeforeunload = null) } } }, simulate: function (a, b, c, d) { var e = f.extend(new f.Event, c, { type: a, isSimulated: !0, originalEvent: {} }); d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function (a, b, c) { a.detachEvent && a.detachEvent("on" + b, c) }, f.Event = function (a, b) { if (!(this instanceof f.Event)) { return new f.Event(a, b) } a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0 }, f.Event.prototype = { preventDefault: function () { this.isDefaultPrevented = K; var a = this.originalEvent; !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { this.isPropagationStopped = K; var a = this.originalEvent; !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = K, this.stopPropagation() }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J }, f.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) { f.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h; if (!d || d !== c && !f.contains(c, d)) { a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b } return h } } }), f.support.submitBubbles || (f.event.special.submit = { setup: function () { if (f.nodeName(this, "form")) { return !1 } f.event.add(this, "click._submit keypress._submit", function (a) { var c = a.target, d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b; d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) { a._submit_bubble = !0 }), d._submit_attached = !0) }) }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function () { if (f.nodeName(this, "form")) { return !1 } f.event.remove(this, "._submit") } }), f.support.changeBubbles || (f.event.special.change = { setup: function () { if (z.test(this.nodeName)) { if (this.type === "checkbox" || this.type === "radio") { f.event.add(this, "propertychange._change", function (a) { a.originalEvent.propertyName === "checked" && (this._just_changed = !0) }), f.event.add(this, "click._change", function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0)) }) } return !1 } f.event.add(this, "beforeactivate._change", function (a) { var b = a.target; z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) { this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0) }), b._change_attached = !0) }) }, handle: function (a) { var b = a.target; if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") { return a.handleObj.handler.apply(this, arguments) } }, teardown: function () { f.event.remove(this, "._change"); return z.test(this.nodeName) } }), f.support.focusinBubbles || f.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var d = 0, e = function (a) { f.event.simulate(b, a.target, f.event.fix(a), !0) }; f.event.special[b] = { setup: function () { d++ === 0 && c.addEventListener(a, e, !0) }, teardown: function () { --d === 0 && c.removeEventListener(a, e, !0) } } }), f.fn.extend({ on: function (a, c, d, e, g) { var h, i; if (typeof a == "object") { typeof c != "string" && (d = d || c, c = b); for (i in a) { this.on(i, c, d, a[i], g) } return this } d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b)); if (e === !1) { e = J } else { if (!e) { return this } } g === 1 && (h = e, e = function (a) { f().off(a); return h.apply(this, arguments) }, e.guid = h.guid || (h.guid = f.guid++)); return this.each(function () { f.event.add(this, a, e, d, c) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, c, d) { if (a && a.preventDefault && a.handleObj) { var e = a.handleObj; f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler); return this } if (typeof a == "object") { for (var g in a) { this.off(g, c, a[g]) } return this } if (c === !1 || typeof c == "function") { d = c, c = b } d === !1 && (d = J); return this.each(function () { f.event.remove(this, a, d, c) }) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, live: function (a, b, c) { f(this.context).on(a, this.selector, b, c); return this }, die: function (a, b) { f(this.context).off(a, this.selector || "**", b); return this }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c) }, trigger: function (a, b) { return this.each(function () { f.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { if (this[0]) { return f.event.trigger(a, b, this[0], !0) } }, toggle: function (a) { var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) { var e = (f._data(this, "lastToggle" + a.guid) || 0) % d; f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(); return b[e].apply(this, arguments) || !1 }; e.guid = c; while (d < b.length) { b[d++].guid = c } return this.click(e) }, hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) { f.fn[b] = function (a, c) { c == null && (c = a, a = null); return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks) }), function () { function x(a, b, c, e, f, g) { for (var h = 0, i = e.length; h < i; h++) { var j = e[h]; if (j) { var k = !1; j = j[a]; while (j) { if (j[d] === c) { k = e[j.sizset]; break } if (j.nodeType === 1) { g || (j[d] = c, j.sizset = h); if (typeof b != "string") { if (j === b) { k = !0; break } } else { if (m.filter(b, [j]).length > 0) { k = j; break } } } j = j[a] } e[h] = k } } } function w(a, b, c, e, f, g) { for (var h = 0, i = e.length; h < i; h++) { var j = e[h]; if (j) { var k = !1; j = j[a]; while (j) { if (j[d] === c) { k = e[j.sizset]; break } j.nodeType === 1 && !g && (j[d] = c, j.sizset = h); if (j.nodeName.toLowerCase() === b) { k = j; break } j = j[a] } e[h] = k } } } var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = "sizcache" + (Math.random() + "").replace(".", ""), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/;[0, 0].sort(function () { i = !1; return 0 }); var m = function (b, d, e, f) { e = e || [], d = d || c; var h = d; if (d.nodeType !== 1 && d.nodeType !== 9) { return [] } if (!b || typeof b != "string") { return e } var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b; do { a.exec(""), i = a.exec(x); if (i) { x = i[3], w.push(i[1]); if (i[2]) { l = i[3]; break } } } while (i); if (w.length > 1 && p.exec(b)) { if (w.length === 2 && o.relative[w[0]]) { j = y(w[0] + w[1], d, f) } else { j = o.relative[w[0]] ? [d] : m(w.shift(), d); while (w.length) { b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f) } } } else { !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]); if (d) { n = f ? { expr: w.pop(), set: s(f) } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1; while (w.length) { q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v) } } else { k = w = [] } } k || (k = j), k || m.error(q || b); if (g.call(k) === "[object Array]") { if (!u) { e.push.apply(e, k) } else { if (d && d.nodeType === 1) { for (t = 0; k[t] != null; t++) { k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]) } } else { for (t = 0; k[t] != null; t++) { k[t] && k[t].nodeType === 1 && e.push(j[t]) } } } } else { s(k, e) } l && (m(l, h, e, f), m.uniqueSort(e)); return e }; m.uniqueSort = function (a) { if (u) { h = i, a.sort(u); if (h) { for (var b = 1; b < a.length; b++) { a[b] === a[b - 1] && a.splice(b--, 1) } } } return a }, m.matches = function (a, b) { return m(a, null, null, b) }, m.matchesSelector = function (a, b) { return m(b, null, null, [a]).length > 0 }, m.find = function (a, b, c) { var d, e, f, g, h, i; if (!a) { return [] } for (e = 0, f = o.order.length; e < f; e++) { h = o.order[e]; if (g = o.leftMatch[h].exec(a)) { i = g[1], g.splice(1, 1); if (i.substr(i.length - 1) !== "\\") { g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c); if (d != null) { a = a.replace(o.match[h], ""); break } } } } d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []); return { set: d, expr: a } }, m.filter = function (a, c, d, e) { var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); while (a && c.length) { for (h in o.filter) { if ((f = o.leftMatch[h].exec(a)) != null && f[2]) { k = o.filter[h], l = f[1], g = !1, f.splice(1, 1); if (l.substr(l.length - 1) === "\\") { continue } s === r && (r = []); if (o.preFilter[h]) { f = o.preFilter[h](f, s, d, r, e, t); if (!f) { g = i = !0 } else { if (f === !0) { continue } } } if (f) { for (n = 0; (j = s[n]) != null; n++) { j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0)) } } if (i !== b) { d || (s = r), a = a.replace(o.match[h], ""); if (!g) { return [] } break } } } if (a === q) { if (g == null) { m.error(a) } else { break } } q = a } return s }, m.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a) }; var n = m.getText = function (a) { var b, c, d = a.nodeType, e = ""; if (d) { if (d === 1 || d === 9 || d === 11) { if (typeof a.textContent == "string") { return a.textContent } if (typeof a.innerText == "string") { return a.innerText.replace(k, "") } for (a = a.firstChild; a; a = a.nextSibling) { e += n(a) } } else { if (d === 3 || d === 4) { return a.nodeValue } } } else { for (b = 0; c = a[b]; b++) { c.nodeType !== 8 && (e += n(c)) } } return e }, o = m.selectors = { order: ["ID", "NAME", "TAG"], match: { ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/ }, leftMatch: {}, attrMap: { "class": "className", "for": "htmlFor" }, attrHandle: { href: function (a) { return a.getAttribute("href") }, type: function (a) { return a.getAttribute("type") } }, relative: { "+": function (a, b) { var c = typeof b == "string", d = c && !l.test(b), e = c && !d; d && (b = b.toLowerCase()); for (var f = 0, g = a.length, h; f < g; f++) { if (h = a[f]) { while ((h = h.previousSibling) && h.nodeType !== 1) { } a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b } } e && m.filter(b, a, !0) }, ">": function (a, b) { var c, d = typeof b == "string", e = 0, f = a.length; if (d && !l.test(b)) { b = b.toLowerCase(); for (; e < f; e++) { c = a[e]; if (c) { var g = c.parentNode; a[e] = g.nodeName.toLowerCase() === b ? g : !1 } } } else { for (; e < f; e++) { c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b) } d && m.filter(b, a, !0) } }, "": function (a, b, c) { var d, f = e++, g = x; typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c) }, "~": function (a, b, c) { var d, f = e++, g = x; typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c) } }, find: { ID: function (a, b, c) { if (typeof b.getElementById != "undefined" && !c) { var d = b.getElementById(a[1]); return d && d.parentNode ? [d] : [] } }, NAME: function (a, b) { if (typeof b.getElementsByName != "undefined") { var c = [], d = b.getElementsByName(a[1]); for (var e = 0, f = d.length; e < f; e++) { d[e].getAttribute("name") === a[1] && c.push(d[e]) } return c.length === 0 ? null : c } }, TAG: function (a, b) { if (typeof b.getElementsByTagName != "undefined") { return b.getElementsByTagName(a[1]) } } }, preFilter: { CLASS: function (a, b, c, d, e, f) { a = " " + a[1].replace(j, "") + " "; if (f) { return a } for (var g = 0, h; (h = b[g]) != null; g++) { h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1)) } return !1 }, ID: function (a) { return a[1].replace(j, "") }, TAG: function (a, b) { return a[1].replace(j, "").toLowerCase() }, CHILD: function (a) { if (a[1] === "nth") { a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, ""); var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]); a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0 } else { a[2] && m.error(a[0]) } a[0] = e++; return a }, ATTR: function (a, b, c, d, e, f) { var g = a[1] = a[1].replace(j, ""); !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " "); return a }, PSEUDO: function (b, c, d, e, f) { if (b[1] === "not") { if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) { b[3] = m(b[3], null, null, c) } else { var g = m.filter(b[3], c, d, !0 ^ f); d || e.push.apply(e, g); return !1 } } else { if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) { return !0 } } return b }, POS: function (a) { a.unshift(!0); return a } }, filters: { enabled: function (a) { return a.disabled === !1 && a.type !== "hidden" }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { return a.checked === !0 }, selected: function (a) { a.parentNode && a.parentNode.selectedIndex; return a.selected === !0 }, parent: function (a) { return !!a.firstChild }, empty: function (a) { return !a.firstChild }, has: function (a, b, c) { return !!m(c[3], a).length }, header: function (a) { return /h\d/i.test(a.nodeName) }, text: function (a) { var b = a.getAttribute("type"), c = a.type; return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null) }, radio: function (a) { return a.nodeName.toLowerCase() === "input" && "radio" === a.type }, checkbox: function (a) { return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type }, file: function (a) { return a.nodeName.toLowerCase() === "input" && "file" === a.type }, password: function (a) { return a.nodeName.toLowerCase() === "input" && "password" === a.type }, submit: function (a) { var b = a.nodeName.toLowerCase(); return (b === "input" || b === "button") && "submit" === a.type }, image: function (a) { return a.nodeName.toLowerCase() === "input" && "image" === a.type }, reset: function (a) { var b = a.nodeName.toLowerCase(); return (b === "input" || b === "button") && "reset" === a.type }, button: function (a) { var b = a.nodeName.toLowerCase(); return b === "input" && "button" === a.type || b === "button" }, input: function (a) { return /input|select|textarea|button/i.test(a.nodeName) }, focus: function (a) { return a === a.ownerDocument.activeElement } }, setFilters: { first: function (a, b) { return b === 0 }, last: function (a, b, c, d) { return b === d.length - 1 }, even: function (a, b) { return b % 2 === 0 }, odd: function (a, b) { return b % 2 === 1 }, lt: function (a, b, c) { return b < c[3] - 0 }, gt: function (a, b, c) { return b > c[3] - 0 }, nth: function (a, b, c) { return c[3] - 0 === b }, eq: function (a, b, c) { return c[3] - 0 === b } }, filter: { PSEUDO: function (a, b, c, d) { var e = b[1], f = o.filters[e]; if (f) { return f(a, c, b, d) } if (e === "contains") { return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0 } if (e === "not") { var g = b[3]; for (var h = 0, i = g.length; h < i; h++) { if (g[h] === a) { return !1 } } return !0 } m.error(e) }, CHILD: function (a, b) { var c, e, f, g, h, i, j, k = b[1], l = a; switch (k) { case "only": case "first": while (l = l.previousSibling) { if (l.nodeType === 1) { return !1 } } if (k === "first") { return !0 } l = a; case "last": while (l = l.nextSibling) { if (l.nodeType === 1) { return !1 } } return !0; case "nth": c = b[2], e = b[3]; if (c === 1 && e === 0) { return !0 } f = b[0], g = a.parentNode; if (g && (g[d] !== f || !a.nodeIndex)) { i = 0; for (l = g.firstChild; l; l = l.nextSibling) { l.nodeType === 1 && (l.nodeIndex = ++i) } g[d] = f } j = a.nodeIndex - e; return c === 0 ? j === 0 : j % c === 0 && j / c >= 0 } }, ID: function (a, b) { return a.nodeType === 1 && a.getAttribute("id") === b }, TAG: function (a, b) { return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b }, CLASS: function (a, b) { return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1 }, ATTR: function (a, b) { var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + "", f = b[2], g = b[4]; return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1 }, POS: function (a, b, c, d) { var e = b[2], f = o.setFilters[e]; if (f) { return f(a, c, b, d) } } } }, p = o.match.POS, q = function (a, b) { return "\\" + (b - 0 + 1) }; for (var r in o.match) { o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q)) } o.match.globalPOS = p; var s = function (a, b) { a = Array.prototype.slice.call(a, 0); if (b) { b.push.apply(b, a); return b } return a }; try { Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType } catch (t) { s = function (a, b) { var c = 0, d = b || []; if (g.call(a) === "[object Array]") { Array.prototype.push.apply(d, a) } else { if (typeof a.length == "number") { for (var e = a.length; c < e; c++) { d.push(a[c]) } } else { for (; a[c]; c++) { d.push(a[c]) } } } return d } } var u, v; c.documentElement.compareDocumentPosition ? u = function (a, b) { if (a === b) { h = !0; return 0 } if (!a.compareDocumentPosition || !b.compareDocumentPosition) { return a.compareDocumentPosition ? -1 : 1 } return a.compareDocumentPosition(b) & 4 ? -1 : 1 } : (u = function (a, b) { if (a === b) { h = !0; return 0 } if (a.sourceIndex && b.sourceIndex) { return a.sourceIndex - b.sourceIndex } var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g; if (g === i) { return v(a, b) } if (!g) { return -1 } if (!i) { return 1 } while (j) { e.unshift(j), j = j.parentNode } j = i; while (j) { f.unshift(j), j = j.parentNode } c = e.length, d = f.length; for (var k = 0; k < c && k < d; k++) { if (e[k] !== f[k]) { return v(e[k], f[k]) } } return k === c ? v(a, f[k], -1) : v(e[k], b, 1) }, v = function (a, b, c) { if (a === b) { return c } var d = a.nextSibling; while (d) { if (d === b) { return -1 } d = d.nextSibling } return 1 }), function () { var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement; a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) { if (typeof c.getElementById != "undefined" && !d) { var e = c.getElementById(a[1]); return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : [] } }, o.filter.ID = function (a, b) { var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id"); return a.nodeType === 1 && c && c.nodeValue === b }), e.removeChild(a), e = a = null }(), function () { var a = c.createElement("div"); a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) { var c = b.getElementsByTagName(a[1]); if (a[1] === "*") { var d = []; for (var e = 0; c[e]; e++) { c[e].nodeType === 1 && d.push(c[e]) } c = d } return c }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) { return a.getAttribute("href", 2) }), a = null }(), c.querySelectorAll && function () { var a = m, b = c.createElement("div"), d = "__sizzle__"; b.innerHTML = "<p class='TEST'></p>"; if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) { m = function (b, e, f, g) { e = e || c; if (!g && !m.isXML(e)) { var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b); if (h && (e.nodeType === 1 || e.nodeType === 9)) { if (h[1]) { return s(e.getElementsByTagName(b), f) } if (h[2] && o.find.CLASS && e.getElementsByClassName) { return s(e.getElementsByClassName(h[2]), f) } } if (e.nodeType === 9) { if (b === "body" && e.body) { return s([e.body], f) } if (h && h[3]) { var i = e.getElementById(h[3]); if (!i || !i.parentNode) { return s([], f) } if (i.id === h[3]) { return s([i], f) } } try { return s(e.querySelectorAll(b), f) } catch (j) { } } else { if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") { var k = e, l = e.getAttribute("id"), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b); l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode); try { if (!q || p) { return s(e.querySelectorAll("[id='" + n + "'] " + b), f) } } catch (r) { } finally { l || k.removeAttribute("id") } } } } return a(b, e, f, g) }; for (var e in a) { m[e] = a[e] } b = null } }(), function () { var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector; if (b) { var d = !b.call(c.createElement("div"), "div"), e = !1; try { b.call(c.documentElement, "[test!='']:sizzle") } catch (f) { e = !0 } m.matchesSelector = function (a, c) { c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"); if (!m.isXML(a)) { try { if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) { var f = b.call(a, c); if (f || !d || a.document && a.document.nodeType !== 11) { return f } } } catch (g) { } } return m(c, null, null, [a]).length > 0 } } }(), function () { var a = c.createElement("div"); a.innerHTML = "<div class='test e'></div><div class='test'></div>"; if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) { a.lastChild.className = "e"; if (a.getElementsByClassName("e").length === 1) { return } o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) { if (typeof b.getElementsByClassName != "undefined" && !c) { return b.getElementsByClassName(a[1]) } }, a = null } }(), c.documentElement.contains ? m.contains = function (a, b) { return a !== b && (a.contains ? a.contains(b) : !0) } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) { return !!(a.compareDocumentPosition(b) & 16) } : m.contains = function () { return !1 }, m.isXML = function (a) { var b = (a ? a.ownerDocument || a : 0).documentElement; return b ? b.nodeName !== "HTML" : !1 }; var y = function (a, b, c) { var d, e = [], f = "", g = b.nodeType ? [b] : b; while (d = o.match.PSEUDO.exec(a)) { f += d[0], a = a.replace(o.match.PSEUDO, "") } a = o.relative[a] ? a + "*" : a; for (var h = 0, i = g.length; h < i; h++) { m(a, g[h], e, c) } return m.filter(f, e) }; m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains }(); var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.globalPOS, R = { children: !0, contents: !0, next: !0, prev: !0 }; f.fn.extend({ find: function (a) { var b = this, c, d; if (typeof a != "string") { return f(a).filter(function () { for (c = 0, d = b.length; c < d; c++) { if (f.contains(b[c], this)) { return !0 } } }) } var e = this.pushStack("", "find", a), g, h, i; for (c = 0, d = this.length; c < d; c++) { g = e.length, f.find(a, this[c], e); if (c > 0) { for (h = g; h < e.length; h++) { for (i = 0; i < g; i++) { if (e[i] === e[h]) { e.splice(h--, 1); break } } } } } return e }, has: function (a) { var b = f(a); return this.filter(function () { for (var a = 0, c = b.length; a < c; a++) { if (f.contains(this, b[a])) { return !0 } } }) }, not: function (a) { return this.pushStack(T(this, a, !1), "not", a) }, filter: function (a) { return this.pushStack(T(this, a, !0), "filter", a) }, is: function (a) { return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0) }, closest: function (a, b) { var c = [], d, e, g = this[0]; if (f.isArray(a)) { var h = 1; while (g && g.ownerDocument && g !== b) { for (d = 0; d < a.length; d++) { f(g).is(a[d]) && c.push({ selector: a[d], elem: g, level: h }) } g = g.parentNode, h++ } return c } var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0; for (d = 0, e = this.length; d < e; d++) { g = this[d]; while (g) { if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) { c.push(g); break } g = g.parentNode; if (!g || !g.ownerDocument || g === b || g.nodeType === 11) { break } } } c = c.length > 1 ? f.unique(c) : c; return this.pushStack(c, "closest", a) }, index: function (a) { if (!a) { return this[0] && this[0].parentNode ? this.prevAll().length : -1 } if (typeof a == "string") { return f.inArray(this[0], f(a)) } return f.inArray(a.jquery ? a[0] : a, this) }, add: function (a, b) { var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c); return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d)) }, andSelf: function () { return this.add(this.prevObject) } }), f.each({ parent: function (a) { var b = a.parentNode; return b && b.nodeType !== 11 ? b : null }, parents: function (a) { return f.dir(a, "parentNode") }, parentsUntil: function (a, b, c) { return f.dir(a, "parentNode", c) }, next: function (a) { return f.nth(a, 2, "nextSibling") }, prev: function (a) { return f.nth(a, 2, "previousSibling") }, nextAll: function (a) { return f.dir(a, "nextSibling") }, prevAll: function (a) { return f.dir(a, "previousSibling") }, nextUntil: function (a, b, c) { return f.dir(a, "nextSibling", c) }, prevUntil: function (a, b, c) { return f.dir(a, "previousSibling", c) }, siblings: function (a) { return f.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return f.sibling(a.firstChild) }, contents: function (a) { return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes) } }, function (a, b) { f.fn[a] = function (c, d) { var e = f.map(this, b, c); L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse()); return this.pushStack(e, a, P.call(arguments).join(",")) } }), f.extend({ filter: function (a, b, c) { c && (a = ":not(" + a + ")"); return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b) }, dir: function (a, c, d) { var e = [], g = a[c]; while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) { g.nodeType === 1 && e.push(g), g = g[c] } return e }, nth: function (a, b, c, d) { b = b || 1; var e = 0; for (; a; a = a[c]) { if (a.nodeType === 1 && ++e === b) { break } } return a }, sibling: function (a, b) { var c = []; for (; a; a = a.nextSibling) { a.nodeType === 1 && a !== b && c.push(a) } return c } }); var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] }, bh = U(c); bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({ text: function (a) { return f.access(this, function (a) { return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a)) }, null, a, arguments.length) }, wrapAll: function (a) { if (f.isFunction(a)) { return this.each(function (b) { f(this).wrapAll(a.call(this, b)) }) } if (this[0]) { var b = f(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && a.firstChild.nodeType === 1) { a = a.firstChild } return a }).append(this) } return this }, wrapInner: function (a) { if (f.isFunction(a)) { return this.each(function (b) { f(this).wrapInner(a.call(this, b)) }) } return this.each(function () { var b = f(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = f.isFunction(a); return this.each(function (c) { f(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function () { return this.parent().each(function () { f.nodeName(this, "body") || f(this).replaceWith(this.childNodes) }).end() }, append: function () { return this.domManip(arguments, !0, function (a) { this.nodeType === 1 && this.appendChild(a) }) }, prepend: function () { return this.domManip(arguments, !0, function (a) { this.nodeType === 1 && this.insertBefore(a, this.firstChild) }) }, before: function () { if (this[0] && this[0].parentNode) { return this.domManip(arguments, !1, function (a) { this.parentNode.insertBefore(a, this) }) } if (arguments.length) { var a = f.clean(arguments); a.push.apply(a, this.toArray()); return this.pushStack(a, "before", arguments) } }, after: function () { if (this[0] && this[0].parentNode) { return this.domManip(arguments, !1, function (a) { this.parentNode.insertBefore(a, this.nextSibling) }) } if (arguments.length) { var a = this.pushStack(this, "after", arguments); a.push.apply(a, f.clean(arguments)); return a } }, remove: function (a, b) { for (var c = 0, d; (d = this[c]) != null; c++) { if (!a || f.filter(a, [d]).length) { !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d) } } return this }, empty: function () { for (var a = 0, b; (b = this[a]) != null; a++) { b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*")); while (b.firstChild) { b.removeChild(b.firstChild) } } return this }, clone: function (a, b) { a = a == null ? !1 : a, b = b == null ? a : b; return this.map(function () { return f.clone(this, a, b) }) }, html: function (a) { return f.access(this, function (a) { var c = this[0] || {}, d = 0, e = this.length; if (a === b) { return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null } if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) { a = a.replace(Y, "<$1></$2>"); try { for (; d < e; d++) { c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a) } c = 0 } catch (g) { } } c && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function (a) { if (this[0] && this[0].parentNode) { if (f.isFunction(a)) { return this.each(function (b) { var c = f(this), d = c.html(); c.replaceWith(a.call(this, b, d)) }) } typeof a != "string" && (a = f(a).detach()); return this.each(function () { var b = this.nextSibling, c = this.parentNode; f(this).remove(), b ? f(b).before(a) : f(c).append(a) }) } return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this }, detach: function (a) { return this.remove(a, !0) }, domManip: function (a, c, d) { var e, g, h, i, j = a[0], k = []; if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) { return this.each(function () { f(this).domManip(a, c, d, !0) }) } if (f.isFunction(j)) { return this.each(function (e) { var g = f(this); a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d) }) } if (this[0]) { i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = { fragment: i } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild; if (g) { c = c && f.nodeName(g, "tr"); for (var l = 0, m = this.length, n = m - 1; l < m; l++) { d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h) } } k.length && f.each(k, function (a, b) { b.src ? f.ajax({ type: "GET", global: !1, url: b.src, async: !1, dataType: "script" }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b) }) } return this } }), f.buildFragment = function (a, b, d) { var e, g, h, i, j = a[0]; b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1); return { fragment: e, cacheable: g } }, f.fragments = {}, f.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { f.fn[a] = function (c) { var d = [], e = f(c), g = this.length === 1 && this[0].parentNode; if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) { e[b](this[0]); return this } for (var h = 0, i = e.length; h < i; h++) { var j = (h > 0 ? this.clone(!0) : this).get(); f(e[h])[b](j), d = d.concat(j) } return this.pushStack(d, a, e.selector) } }), f.extend({ clone: function (a, b, c) { var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a); if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) { bk(a, h), d = bl(a), e = bl(h); for (g = 0; d[g]; ++g) { e[g] && bk(d[g], e[g]) } } if (b) { bj(a, h); if (c) { d = bl(a), e = bl(h); for (g = 0; d[g]; ++g) { bj(d[g], e[g]) } } } d = e = null; return h }, clean: function (a, b, d, e) { var g, h, i, j = []; b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c); for (var k = 0, l; (l = a[k]) != null; k++) { typeof l == "number" && (l += ""); if (!l) { continue } if (typeof l == "string") { if (!_.test(l)) { l = b.createTextNode(l) } else { l = l.replace(Y, "<$1></$2>"); var m = (Z.exec(l) || ["", ""])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0], p = b.createElement("div"), q = bh.childNodes, r; b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2]; while (o--) { p = p.lastChild } if (!f.support.tbody) { var s = $.test(l), t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : []; for (i = t.length - 1; i >= 0; --i) { f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i]) } } !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r))) } } var u; if (!f.support.appendChecked) { if (l[0] && typeof (u = l.length) == "number") { for (i = 0; i < u; i++) { bn(l[i]) } } else { bn(l) } } l.nodeType ? j.push(l) : j = f.merge(j, l) } if (d) { g = function (a) { return !a.type || be.test(a.type) }; for (k = 0; j[k]; k++) { h = j[k]; if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) { e.push(h.parentNode ? h.parentNode.removeChild(h) : h) } else { if (h.nodeType === 1) { var v = f.grep(h.getElementsByTagName("script"), g); j.splice.apply(j, [k + 1, 0].concat(v)) } d.appendChild(h) } } } return j }, cleanData: function (a) { var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando; for (var h = 0, i; (i = a[h]) != null; h++) { if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) { continue } c = i[f.expando]; if (c) { b = d[c]; if (b && b.events) { for (var j in b.events) { e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle) } b.handle && (b.handle.elem = null) } g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c] } } } }); var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i, bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/, bw = { position: "absolute", visibility: "hidden", display: "block" }, bx = ["Top", "Right", "Bottom", "Left"], by, bz, bA; f.fn.css = function (a, c) { return f.access(this, function (a, c, d) { return d !== b ? f.style(a, c, d) : f.css(a, c) }, a, c, arguments.length > 1) }, f.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) { var c = by(a, "opacity"); return c === "" ? "1" : c } return a.style.opacity } } }, cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": f.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (a, c, d, e) { if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) { var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i]; c = f.cssProps[i] || i; if (d === b) { if (k && "get" in k && (g = k.get(a, !1, e)) !== b) { return g } return j[c] } h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number"); if (d == null || h === "number" && isNaN(d)) { return } h === "number" && !f.cssNumber[i] && (d += "px"); if (!k || !("set" in k) || (d = k.set(a, d)) !== b) { try { j[c] = d } catch (l) { } } } }, css: function (a, c, d) { var e, g; c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float"); if (g && "get" in g && (e = g.get(a, !0, d)) !== b) { return e } if (by) { return by(a, c) } }, swap: function (a, b, c) { var d = {}, e, f; for (f in b) { d[f] = a.style[f], a.style[f] = b[f] } e = c.call(a); for (f in b) { a.style[f] = d[f] } return e } }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) { var c, d, e, g, h = a.style; b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g); return c }), c.documentElement.currentStyle && (bA = function (a, b) { var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style; f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)); return f === "" ? "auto" : f }), by = bz || bA, f.each(["height", "width"], function (a, b) { f.cssHooks[b] = { get: function (a, c, d) { if (c) { return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () { return bB(a, b, d) }) } }, set: function (a, b) { return bs.test(b) ? b + "px" : b } } }), f.support.opacity || (f.cssHooks.opacity = { get: function (a, b) { return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : "" }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "", g = d && d.filter || c.filter || ""; c.zoom = 1; if (b >= 1 && f.trim(g.replace(bp, "")) === "") { c.removeAttribute("filter"); if (d && !d.filter) { return } } c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e } }), f(function () { f.support.reliableMarginRight || (f.cssHooks.marginRight = { get: function (a, b) { return f.swap(a, { display: "inline-block" }, function () { return b ? by(a, "margin-right") : a.style.marginRight }) } }) }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) { var b = a.offsetWidth, c = a.offsetHeight; return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none" }, f.expr.filters.visible = function (a) { return !f.expr.filters.hidden(a) }), f.each({ margin: "", padding: "", border: "Width" }, function (a, b) { f.cssHooks[a + b] = { expand: function (c) { var d, e = typeof c == "string" ? c.split(" ") : [c], f = {}; for (d = 0; d < 4; d++) { f[a + bx[d] + b] = e[d] || e[d - 2] || e[0] } return f } } }); var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//, bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/, bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {}, bU, bV, bW = ["*/"] + ["*"]; try { bU = e.href } catch (bX) { bU = c.createElement("a"), bU.href = "", bU = bU.href } bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({ load: function (a, c, d) { if (typeof a != "string" && bR) { return bR.apply(this, arguments) } if (!this.length) { return this } var e = a.indexOf(" "); if (e >= 0) { var g = a.slice(e, a.length); a = a.slice(0, e) } var h = "GET"; c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST")); var i = this; f.ajax({ url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) { c = a.responseText, a.isResolved() && (a.done(function (a) { c = a }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a]) } }); return this }, serialize: function () { return f.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { return this.elements ? f.makeArray(this.elements) : this }).filter(function () { return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type)) }).map(function (a, b) { var c = f(this).val(); return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) { return { name: b.name, value: a.replace(bE, "\r\n") } }) : { name: b.name, value: c.replace(bE, "\r\n") } }).get() } }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) { f.fn[b] = function (a) { return this.on(b, a) } }), f.each(["get", "post"], function (a, c) { f[c] = function (a, d, e, g) { f.isFunction(d) && (g = g || e, e = d, d = b); return f.ajax({ type: c, url: a, data: d, success: e, dataType: g }) } }), f.extend({ getScript: function (a, c) { return f.get(a, b, c, "script") }, getJSON: function (a, b, c) { return f.get(a, b, c, "json") }, ajaxSetup: function (a, b) { b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b); return a }, ajaxSettings: { url: bU, isLocal: bI.test(bV[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": bW }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML }, flatOptions: { context: !0, url: !0 } }, ajaxPrefilter: bY(bS), ajaxTransport: bY(bT), ajax: function (a, c) { function w(a, c, l, m) { if (s !== 2) { s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0; var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z; if (a >= 200 && a < 300 || a === 304) { if (d.ifModified) { if (y = v.getResponseHeader("Last-Modified")) { f.lastModified[k] = y } if (z = v.getResponseHeader("Etag")) { f.etag[k] = z } } if (a === 304) { w = "notmodified", o = !0 } else { try { r = cb(d, x), w = "success", o = !0 } catch (A) { w = "parsererror", u = A } } } else { u = w; if (!w || a) { w = "error", a < 0 && (a = 0) } } v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop")) } } typeof a == "object" && (c = a, a = b), c = c || {}; var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks("once memory"), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = { readyState: 0, setRequestHeader: function (a, b) { if (!s) { var c = a.toLowerCase(); a = m[c] = m[c] || a, l[a] = b } return this }, getAllResponseHeaders: function () { return s === 2 ? n : null }, getResponseHeader: function (a) { var c; if (s === 2) { if (!o) { o = {}; while (c = bG.exec(n)) { o[c[1].toLowerCase()] = c[2] } } c = o[a.toLowerCase()] } return c === b ? null : c }, overrideMimeType: function (a) { s || (d.mimeType = a); return this }, abort: function (a) { a = a || "abort", p && p.abort(a), w(0, a); return this } }; h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) { if (a) { var b; if (s < 2) { for (b in a) { j[b] = [j[b], a[b]] } } else { b = a[v.status], v.then(b, b) } } return this }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v); if (s === 2) { return !1 } t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart"); if (!d.hasContent) { d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url; if (d.cache === !1) { var x = f.now(), y = d.url.replace(bP, "$1_=" + x); d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "") } } (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]); for (u in d.headers) { v.setRequestHeader(u, d.headers[u]) } if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) { v.abort(); return !1 } for (u in { success: 1, error: 1, complete: 1 }) { v[u](d[u]) } p = bZ(bT, d, c, v); if (!p) { w(-1, "No Transport") } else { v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () { v.abort("timeout") }, d.timeout)); try { s = 1, p.send(l, w) } catch (z) { if (s < 2) { w(-1, z) } else { throw z } } } return v }, param: function (a, c) { var d = [], e = function (a, b) { b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; c === b && (c = f.ajaxSettings.traditional); if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) { f.each(a, function () { e(this.name, this.value) }) } else { for (var g in a) { b_(g, a[g], c, e) } } return d.join("&").replace(bC, "+") } }), f.extend({ active: 0, lastModified: {}, etag: {} }); var cc = f.now(), cd = /(\=)\?(&|$)|\?\?/i; f.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { return f.expando + "_" + cc++ } }), f.ajaxPrefilter("json jsonp", function (b, c, d) { var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType); if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) { var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2"; b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) { g = [a] }, d.always(function () { a[h] = i, g && f.isFunction(i) && a[h](g[0]) }), b.converters["script json"] = function () { g || f.error(h + " was not called"); return g[0] }, b.dataTypes[0] = "json"; return "script" } }), f.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function (a) { f.globalEval(a); return a } } }), f.ajaxPrefilter("script", function (a) { a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), f.ajaxTransport("script", function (a) { if (a.crossDomain) { var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement; return { send: function (f, g) { d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) { if (c || !d.readyState || /loaded|complete/.test(d.readyState)) { d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success") } }, e.insertBefore(d, e.firstChild) }, abort: function () { d && d.onload(0, 1) } } } }); var ce = a.ActiveXObject ? function () { for (var a in cg) { cg[a](0, 1) } } : !1, cf = 0, cg; f.ajaxSettings.xhr = a.ActiveXObject ? function () { return !this.isLocal && ch() || ci() } : ch, function (a) { f.extend(f.support, { ajax: !!a, cors: !!a && "withCredentials" in a }) }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) { if (!c.crossDomain || f.support.cors) { var d; return { send: function (e, g) { var h = c.xhr(), i, j; c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async); if (c.xhrFields) { for (j in c.xhrFields) { h[j] = c.xhrFields[j] } } c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest"); try { for (j in e) { h.setRequestHeader(j, e[j]) } } catch (k) { } h.send(c.hasContent && c.data || null), d = function (a, e) { var j, k, l, m, n; try { if (d && (e || h.readyState === 4)) { d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]); if (e) { h.readyState !== 4 && h.abort() } else { j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n); try { m.text = h.responseText } catch (a) { } try { k = h.statusText } catch (o) { k = "" } !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204) } } } catch (p) { e || g(-1, p) } m && g(j, k, m, l) }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d) }, abort: function () { d && d(0, 1) } } } }); var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co, cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cq; f.fn.extend({ show: function (a, b, c) { var d, e; if (a || a === 0) { return this.animate(ct("show", 3), a, b, c) } for (var g = 0, h = this.length; g < h; g++) { d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName))) } for (g = 0; g < h; g++) { d = this[g]; if (d.style) { e = d.style.display; if (e === "" || e === "none") { d.style.display = f._data(d, "olddisplay") || "" } } } return this }, hide: function (a, b, c) { if (a || a === 0) { return this.animate(ct("hide", 3), a, b, c) } var d, e, g = 0, h = this.length; for (; g < h; g++) { d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e)) } for (g = 0; g < h; g++) { this[g].style && (this[g].style.display = "none") } return this }, _toggle: f.fn.toggle, toggle: function (a, b, c) { var d = typeof a == "boolean"; f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () { var b = d ? a : f(this).is(":hidden"); f(this)[b ? "show" : "hide"]() }) : this.animate(ct("toggle", 3), a, b, c); return this }, fadeTo: function (a, b, c, d) { return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function (a, b, c, d) { function g() { e.queue === !1 && f._mark(this); var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o, p, q; b.animatedProperties = {}; for (i in a) { g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]); if ((k = f.cssHooks[g]) && "expand" in k) { l = k.expand(a[g]), delete a[g]; for (i in l) { i in a || (a[i] = l[i]) } } } for (g in a) { h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing"; if (h === "hide" && d || h === "show" && !d) { return b.complete.call(this) } c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1)) } b.overflow != null && (this.style.overflow = "hidden"); for (i in a) { j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, "")) } return !0 } var e = f.speed(b, c, d); if (f.isEmptyObject(a)) { return this.each(e.complete, [!1]) } a = f.extend({}, a); return e.queue === !1 ? this.each(g) : this.queue(e.queue, g) }, stop: function (a, c, d) { typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []); return this.each(function () { function h(a, b, c) { var e = b[c]; f.removeData(a, c, !0), e.stop(d) } var b, c = !1, e = f.timers, g = f._data(this); d || f._unmark(!0, this); if (a == null) { for (b in g) { g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b) } } else { g[b = a + ".run"] && g[b].stop && h(this, g, b) } for (b = e.length; b--;) { e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1)) } (!d || !c) && f.dequeue(this, a) }) } }), f.each({ slideDown: ct("show", 1), slideUp: ct("hide", 1), slideToggle: ct("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { f.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), f.extend({ speed: function (a, b, c) { var d = a && typeof a == "object" ? f.extend({}, a) : { complete: c || !c && b || f.isFunction(a) && a, duration: a, easing: c && b || b && !f.isFunction(b) && b }; d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default; if (d.queue == null || d.queue === !0) { d.queue = "fx" } d.old = d.complete, d.complete = function (a) { f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this) }; return d }, easing: { linear: function (a) { return a }, swing: function (a) { return -Math.cos(a * Math.PI) / 2 + 0.5 } }, timers: [], fx: function (a, b, c) { this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {} } }), f.fx.prototype = { update: function () { this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this) }, cur: function () { if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) { return this.elem[this.prop] } var a, b = f.css(this.elem, this.prop); return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a }, custom: function (a, c, d) { function h(a) { return e.step(a) } var e = this, g = f.fx; this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () { f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end)) }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval)) }, show: function () { var a = f._data(this.elem, "fxshow" + this.prop); this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show() }, hide: function () { this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0) }, step: function (a) { var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options; if (a || e >= i.duration + this.startTime) { this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0; for (b in i.animatedProperties) { i.animatedProperties[b] !== !0 && (g = !1) } if (g) { i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) { h.style["overflow" + b] = i.overflow[a] }), i.hide && f(h).hide(); if (i.hide || i.show) { for (b in i.animatedProperties) { f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0) } } d = i.complete, d && (i.complete = !1, d.call(h)) } return !1 } i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(); return !0 } }, f.extend(f.fx, { tick: function () { var a, b = f.timers, c = 0; for (; c < b.length; c++) { a = b[c], !a() && b[c] === a && b.splice(c--, 1) } b.length || f.fx.stop() }, interval: 13, stop: function () { clearInterval(co), co = null }, speeds: { slow: 600, fast: 200, _default: 400 }, step: { opacity: function (a) { f.style(a.elem, "opacity", a.now) }, _default: function (a) { a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now } } }), f.each(cp.concat.apply([], cp), function (a, b) { b.indexOf("margin") && (f.fx.step[b] = function (a) { f.style(a.elem, b, Math.max(0, a.now) + a.unit) }) }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) { return f.grep(f.timers, function (b) { return a === b.elem }).length }); var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i; "getBoundingClientRect" in c.documentElement ? cv = function (a, b, c, d) { try { d = a.getBoundingClientRect() } catch (e) { } if (!d || !f.contains(c, a)) { return d ? { top: d.top, left: d.left } : { top: 0, left: 0 } } var g = b.body, h = cy(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0, k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop, l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft, m = d.top + k - i, n = d.left + l - j; return { top: m, left: n } } : cv = function (a, b, c) { var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft; while ((a = a.parentNode) && a !== h && a !== c) { if (f.support.fixedPosition && j.position === "fixed") { break } d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d } if (j.position === "relative" || j.position === "static") { k += h.offsetTop, l += h.offsetLeft } f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft)); return { top: k, left: l } }, f.fn.offset = function (a) { if (arguments.length) { return a === b ? this : this.each(function (b) { f.offset.setOffset(this, a, b) }) } var c = this[0], d = c && c.ownerDocument; if (!d) { return null } if (c === d.body) { return f.offset.bodyOffset(c) } return cv(c, d, d.documentElement) }, f.offset = { bodyOffset: function (a) { var b = a.offsetTop, c = a.offsetLeft; f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0); return { top: b, left: c } }, setOffset: function (a, b, c) { var d = f.css(a, "position"); d === "static" && (a.style.position = "relative"); var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n; j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k) } }, f.fn.extend({ position: function () { if (!this[0]) { return null } var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset(); c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0; return { top: c.top - d.top, left: c.left - d.left } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || c.body; while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") { a = a.offsetParent } return a }) } }), f.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, c) { var d = /Y/.test(c); f.fn[a] = function (e) { return f.access(this, function (a, e, g) { var h = cy(a); if (g === b) { return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e] } h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g }, a, e, arguments.length, null) } }), f.each({ Height: "height", Width: "width" }, function (a, c) { var d = "client" + a, e = "scroll" + a, g = "offset" + a; f.fn["inner" + a] = function () { var a = this[0]; return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null }, f.fn["outer" + a] = function (a) { var b = this[0]; return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null }, f.fn[c] = function (a) { return f.access(this, function (a, c, h) { var i, j, k, l; if (f.isWindow(a)) { i = a.document, j = i.documentElement[d]; return f.support.boxModel && j || i.body && i.body[d] || j } if (a.nodeType === 9) { i = a.documentElement; if (i[d] >= i[e]) { return i[d] } return Math.max(a.body[e], i[e], a.body[g], i[g]) } if (h === b) { k = f.css(a, c), l = parseFloat(k); return f.isNumeric(l) ? l : k } f(a).css(c, h) }, c, a, arguments.length, null) } }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () { return f }) })(window);
/* jFormPlugin309 */
(function (h) { var j = {}; j.fileapi = h("<input type='file'/>").get(0).files !== undefined; j.formdata = window.FormData !== undefined; h.fn.ajaxSubmit = function (Q) { if (!this.length) { i("ajaxSubmit: skipping submit process - no element selected"); return this } var R, d, O, M = this; if (typeof Q == "function") { Q = { success: Q } } R = this.attr("method"); d = this.attr("action"); O = (typeof d === "string") ? h.trim(d) : ""; O = O || window.location.href || ""; if (O) { O = (O.match(/^([^#]+)/) || [])[1] } Q = h.extend(true, { url: O, success: h.ajaxSettings.success, type: R || "GET", iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank" }, Q); var F = {}; this.trigger("form-pre-serialize", [this, Q, F]); if (F.veto) { i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"); return this } if (Q.beforeSerialize && Q.beforeSerialize(this, Q) === false) { i("ajaxSubmit: submit aborted via beforeSerialize callback"); return this } var N = Q.traditional; if (N === undefined) { N = h.ajaxSettings.traditional } var J = []; var a, I = this.formToArray(Q.semantic, J); if (Q.data) { Q.extraData = Q.data; a = h.param(Q.data, N) } if (Q.beforeSubmit && Q.beforeSubmit(I, this, Q) === false) { i("ajaxSubmit: submit aborted via beforeSubmit callback"); return this } this.trigger("form-submit-validate", [I, this, Q, F]); if (F.veto) { i("ajaxSubmit: submit vetoed via form-submit-validate trigger"); return this } var k = h.param(I, N); if (a) { k = (k ? (k + "&" + a) : a) } if (Q.type.toUpperCase() == "GET") { Q.url += (Q.url.indexOf("?") >= 0 ? "&" : "?") + k; Q.data = null } else { Q.data = k } var E = []; if (Q.resetForm) { E.push(function () { M.resetForm() }) } if (Q.clearForm) { E.push(function () { M.clearForm(Q.includeHidden) }) } if (!Q.dataType && Q.target) { var P = Q.success || function () { }; E.push(function (m) { var l = Q.replaceTarget ? "replaceWith" : "html"; h(Q.target)[l](m).each(P, arguments) }) } else { if (Q.success) { E.push(Q.success) } } Q.success = function (n, p, m) { var o = Q.context || Q; for (var r = 0, l = E.length; r < l; r++) { E[r].apply(o, [n, p, m || M, M]) } }; var b = h("input:file:enabled[value]", this); var L = b.length > 0; var c = "multipart/form-data"; var q = (M.attr("enctype") == c || M.attr("encoding") == c); var D = j.fileapi && j.formdata; i("fileAPI :" + D); var K = (L || q) && !D; if (Q.iframe !== false && (Q.iframe || K)) { if (Q.closeKeepAlive) { h.get(Q.closeKeepAlive, function () { G(I) }) } else { G(I) } } else { if ((L || q) && D) { H(I) } else { h.ajax(Q) } } for (var e = 0; e < J.length; e++) { J[e] = null } this.trigger("form-submit-notify", [this, Q]); return this; function H(p) { var l = new FormData(); for (var r = 0; r < p.length; r++) { l.append(p[r].name, p[r].value) } if (Q.extraData) { for (var m in Q.extraData) { if (Q.extraData.hasOwnProperty(m)) { l.append(m, Q.extraData[m]) } } } Q.data = null; var n = h.extend(true, {}, h.ajaxSettings, Q, { contentType: false, processData: false, cache: false, type: "POST" }); if (Q.uploadProgress) { n.xhr = function () { var s = jQuery.ajaxSettings.xhr(); if (s.upload) { s.upload.onprogress = function (t) { var u = 0; var w = t.loaded || t.position; var v = t.total; if (t.lengthComputable) { u = Math.ceil(w / v * 100) } Q.uploadProgress(t, w, v, u) } } return s } } n.data = null; var o = n.beforeSend; n.beforeSend = function (s, t) { t.data = l; if (o) { o.call(t, s, Q) } }; h.ajax(n) } function G(ao) { var ag = M[0], ah, n, u, l, r, ae, z, B, A, p, m, w; var C = !!h.fn.prop; if (h(":input[name=submit],:input[id=submit]", ag).length) { alert('Error: Form elements must not have name or id of "submit".'); return } if (ao) { for (n = 0; n < J.length; n++) { ah = h(J[n]); if (C) { ah.prop("disabled", false) } else { ah.removeAttr("disabled") } } } u = h.extend(true, {}, h.ajaxSettings, Q); u.context = u.context || u; r = "jqFormIO" + (new Date().getTime()); if (u.iframeTarget) { ae = h(u.iframeTarget); p = ae.attr("name"); if (!p) { ae.attr("name", r) } else { r = p } } else { ae = h('<iframe name="' + r + '" src="' + u.iframeSrc + '" />'); ae.css({ position: "absolute", top: "-1000px", left: "-1000px" }) } z = ae[0]; B = { aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function () { }, getResponseHeader: function () { }, setRequestHeader: function () { }, abort: function (T) { var S = (T === "timeout" ? "timeout" : "aborted"); i("aborting upload... " + S); this.aborted = 1; ae.attr("src", u.iframeSrc); B.error = S; if (u.error) { u.error.call(u.context, B, S, T) } if (l) { h.event.trigger("ajaxError", [B, u, S]) } if (u.complete) { u.complete.call(u.context, B, S) } } }; l = u.global; if (l && 0 === h.active++) { h.event.trigger("ajaxStart") } if (l) { h.event.trigger("ajaxSend", [B, u]) } if (u.beforeSend && u.beforeSend.call(u.context, B, u) === false) { if (u.global) { h.active-- } return } if (B.aborted) { return } A = ag.clk; if (A) { p = A.name; if (p && !A.disabled) { u.extraData = u.extraData || {}; u.extraData[p] = A.value; if (A.type == "image") { u.extraData[p + ".x"] = ag.clk_x; u.extraData[p + ".y"] = ag.clk_y } } } var v = 1; var y = 2; function x(S) { var T = S.contentWindow ? S.contentWindow.document : S.contentDocument ? S.contentDocument : S.document; return T } var ai = h("meta[name=csrf-token]").attr("content"); var aj = h("meta[name=csrf-param]").attr("content"); if (aj && ai) { u.extraData = u.extraData || {}; u.extraData[aj] = ai } function o() { var U = M.attr("target"), W = M.attr("action"); ag.setAttribute("target", r); if (!R) { ag.setAttribute("method", "POST") } if (W != u.url) { ag.setAttribute("action", u.url) } if (!u.skipEncodingOverride && (!R || /post/i.test(R))) { M.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }) } if (u.timeout) { w = setTimeout(function () { m = true; s(v) }, u.timeout) } function T() { try { var Y = x(z).readyState; i("state = " + Y); if (Y && Y.toLowerCase() == "uninitialized") { setTimeout(T, 50) } } catch (X) { i("Server abort: ", X, " (", X.name, ")"); s(y); if (w) { clearTimeout(w) } w = undefined } } var V = []; try { if (u.extraData) { for (var S in u.extraData) { if (u.extraData.hasOwnProperty(S)) { V.push(h('<input type="hidden" name="' + S + '">').attr("value", u.extraData[S]).appendTo(ag)[0]) } } } if (!u.iframeTarget) { ae.appendTo("body"); if (z.attachEvent) { z.attachEvent("onload", s) } else { z.addEventListener("load", s, false) } } setTimeout(T, 15); ag.submit() } finally { ag.setAttribute("action", W); if (U) { ag.setAttribute("target", U) } else { M.removeAttr("target") } h(V).remove() } } if (u.forceSync) { o() } else { setTimeout(o, 10) } var an, am, ap = 50, af; function s(X) { if (B.aborted || af) { return } try { am = x(z) } catch (U) { i("cannot access response document: ", U); X = y } if (X === v && B) { B.abort("timeout"); return } else { if (X == y && B) { B.abort("server abort"); return } } if (!am || am.location.href == u.iframeSrc) { if (!m) { return } } if (z.detachEvent) { z.detachEvent("onload", s) } else { z.removeEventListener("load", s, false) } var Z = "success", V; try { if (m) { throw "timeout" } var aa = u.dataType == "xml" || am.XMLDocument || h.isXMLDoc(am); i("isXml=" + aa); if (!aa && window.opera && (am.body === null || !am.body.innerHTML)) { if (--ap) { i("requeing onLoad callback, DOM not available"); setTimeout(s, 250); return } } var T = am.body ? am.body : am.documentElement; B.responseText = T ? T.innerHTML : null; B.responseXML = am.XMLDocument ? am.XMLDocument : am; if (aa) { u.dataType = "xml" } B.getResponseHeader = function (ad) { var ar = { "content-type": u.dataType }; return ar[ad] }; if (T) { B.status = Number(T.getAttribute("status")) || B.status; B.statusText = T.getAttribute("statusText") || B.statusText } var ac = (u.dataType || "").toLowerCase(); var W = /(json|script|text)/.test(ac); if (W || u.textarea) { var Y = am.getElementsByTagName("textarea")[0]; if (Y) { B.responseText = Y.value; B.status = Number(Y.getAttribute("status")) || B.status; B.statusText = Y.getAttribute("statusText") || B.statusText } else { if (W) { var ab = am.getElementsByTagName("pre")[0]; var S = am.getElementsByTagName("body")[0]; if (ab) { B.responseText = ab.textContent ? ab.textContent : ab.innerText } else { if (S) { B.responseText = S.textContent ? S.textContent : S.innerText } } } } } else { if (ac == "xml" && !B.responseXML && B.responseText) { B.responseXML = t(B.responseText) } } try { an = al(B, ac, u) } catch (X) { Z = "parsererror"; B.error = V = (X || Z) } } catch (X) { i("error caught: ", X); Z = "error"; B.error = V = (X || Z) } if (B.aborted) { i("upload aborted"); Z = null } if (B.status) { Z = (B.status >= 200 && B.status < 300 || B.status === 304) ? "success" : "error" } if (Z === "success") { if (u.success) { u.success.call(u.context, an, "success", B) } if (l) { h.event.trigger("ajaxSuccess", [B, u]) } } else { if (Z) { if (V === undefined) { V = B.statusText } if (u.error) { u.error.call(u.context, B, Z, V) } if (l) { h.event.trigger("ajaxError", [B, u, V]) } } } if (l) { h.event.trigger("ajaxComplete", [B, u]) } if (l && !--h.active) { h.event.trigger("ajaxStop") } if (u.complete) { u.complete.call(u.context, B, Z) } af = true; if (u.timeout) { clearTimeout(w) } setTimeout(function () { if (!u.iframeTarget) { ae.remove() } B.responseXML = null }, 100) } var t = h.parseXML || function (T, S) { if (window.ActiveXObject) { S = new ActiveXObject("Microsoft.XMLDOM"); S.async = "false"; S.loadXML(T) } else { S = (new DOMParser()).parseFromString(T, "text/xml") } return (S && S.documentElement && S.documentElement.nodeName != "parsererror") ? S : null }; var ak = h.parseJSON || function (S) { return window["eval"]("(" + S + ")") }; var al = function (X, T, U) { var V = X.getResponseHeader("content-type") || "", W = T === "xml" || !T && V.indexOf("xml") >= 0, S = W ? X.responseXML : X.responseText; if (W && S.documentElement.nodeName === "parsererror") { if (h.error) { h.error("parsererror") } } if (U && U.dataFilter) { S = U.dataFilter(S, T) } if (typeof S === "string") { if (T === "json" || !T && V.indexOf("json") >= 0) { S = ak(S) } else { if (T === "script" || !T && V.indexOf("javascript") >= 0) { h.globalEval(S) } } } return S } } }; h.fn.ajaxForm = function (b) { b = b || {}; b.delegation = b.delegation && h.isFunction(h.fn.on); if (!b.delegation && this.length === 0) { var a = { s: this.selector, c: this.context }; if (!h.isReady && a.s) { i("DOM not ready, queuing ajaxForm"); h(function () { h(a.s, a.c).ajaxForm(b) }); return this } i("terminating; zero elements found by selector" + (h.isReady ? "" : " (DOM not ready)")); return this } if (b.delegation) { h(document).off("submit.form-plugin", this.selector, f).off("click.form-plugin", this.selector, g).on("submit.form-plugin", this.selector, b, f).on("click.form-plugin", this.selector, b, g); return this } return this.ajaxFormUnbind().bind("submit.form-plugin", b, f).bind("click.form-plugin", b, g) }; function f(a) { var b = a.data; if (!a.isDefaultPrevented()) { a.preventDefault(); h(this).ajaxSubmit(b) } } function g(b) { var c = b.target; var e = h(c); if (!(e.is(":submit,input:image"))) { var l = e.closest(":submit"); if (l.length === 0) { return } c = l[0] } var d = this; d.clk = c; if (c.type == "image") { if (b.offsetX !== undefined) { d.clk_x = b.offsetX; d.clk_y = b.offsetY } else { if (typeof h.fn.offset == "function") { var a = e.offset(); d.clk_x = b.pageX - a.left; d.clk_y = b.pageY - a.top } else { d.clk_x = b.pageX - c.offsetLeft; d.clk_y = b.pageY - c.offsetTop } } } setTimeout(function () { d.clk = d.clk_x = d.clk_y = null }, 100) } h.fn.ajaxFormUnbind = function () { return this.unbind("submit.form-plugin click.form-plugin") }; h.fn.formToArray = function (C, A) { var D = []; if (this.length === 0) { return D } var v = this[0]; var d = C ? v.getElementsByTagName("*") : v.elements; if (!d) { return D } var b, c, e, B, n, F, y; for (b = 0, F = d.length; b < F; b++) { n = d[b]; e = n.name; if (!e) { continue } if (C && v.clk && n.type == "image") { if (!n.disabled && v.clk == n) { D.push({ name: e, value: h(n).val(), type: n.type }); D.push({ name: e + ".x", value: v.clk_x }, { name: e + ".y", value: v.clk_y }) } continue } B = h.fieldValue(n, true); if (B && B.constructor == Array) { if (A) { A.push(n) } for (c = 0, y = B.length; c < y; c++) { D.push({ name: e, value: B[c] }) } } else { if (j.fileapi && n.type == "file" && !n.disabled) { if (A) { A.push(n) } var z = n.files; if (z.length) { for (c = 0; c < z.length; c++) { D.push({ name: e, value: z[c], type: n.type }) } } else { D.push({ name: e, value: "", type: n.type }) } } else { if (B !== null && typeof B != "undefined") { if (A) { A.push(n) } D.push({ name: e, value: B, type: n.type, required: n.required }) } } } } if (!C && v.clk) { var a = h(v.clk), E = a[0]; e = E.name; if (e && !E.disabled && E.type == "image") { D.push({ name: e, value: a.val() }); D.push({ name: e + ".x", value: v.clk_x }, { name: e + ".y", value: v.clk_y }) } } return D }; h.fn.formSerialize = function (a) { return h.param(this.formToArray(a)) }; h.fn.fieldSerialize = function (a) { var b = []; this.each(function () { var c = this.name; if (!c) { return } var e = h.fieldValue(this, a); if (e && e.constructor == Array) { for (var d = 0, m = e.length; d < m; d++) { b.push({ name: c, value: e[d] }) } } else { if (e !== null && typeof e != "undefined") { b.push({ name: this.name, value: e }) } } }); return h.param(b) }; h.fn.fieldValue = function (a) { for (var b = [], d = 0, m = this.length; d < m; d++) { var c = this[d]; var e = h.fieldValue(c, a); if (e === null || typeof e == "undefined" || (e.constructor == Array && !e.length)) { continue } if (e.constructor == Array) { h.merge(b, e) } else { b.push(e) } } return b }; h.fieldValue = function (y, e) { var w = y.name, A = y.type, z = y.tagName.toLowerCase(); if (e === undefined) { e = true } if (e && (!w || y.disabled || A == "reset" || A == "button" || (A == "checkbox" || A == "radio") && !y.checked || (A == "submit" || A == "image") && y.form && y.form.clk != y || z == "select" && y.selectedIndex == -1)) { return null } if (z == "select") { var d = y.selectedIndex; if (d < 0) { return null } var b = [], x = y.options; var t = (A == "select-one"); var c = (t ? d + 1 : x.length); for (var v = (t ? d : 0) ; v < c; v++) { var n = x[v]; if (n.selected) { var a = n.value; if (!a) { a = (n.attributes && n.attributes.value && !(n.attributes.value.specified)) ? n.text : n.value } if (t) { return a } b.push(a) } } return b } return h(y).val() }; h.fn.clearForm = function (a) { return this.each(function () { h("input,select,textarea", this).clearFields(a) }) }; h.fn.clearFields = h.fn.clearInputs = function (b) { var a = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; return this.each(function () { var c = this.type, d = this.tagName.toLowerCase(); if (a.test(c) || d == "textarea") { this.value = "" } else { if (c == "checkbox" || c == "radio") { this.checked = false } else { if (d == "select") { this.selectedIndex = -1 } else { if (b) { if ((b === true && /hidden/.test(c)) || (typeof b == "string" && h(this).is(b))) { this.value = "" } } } } } }) }; h.fn.resetForm = function () { return this.each(function () { if (typeof this.reset == "function" || (typeof this.reset == "object" && !this.reset.nodeType)) { this.reset() } }) }; h.fn.enable = function (a) { if (a === undefined) { a = true } return this.each(function () { this.disabled = !a }) }; h.fn.selected = function (a) { if (a === undefined) { a = true } return this.each(function () { var c = this.type; if (c == "checkbox" || c == "radio") { this.checked = a } else { if (this.tagName.toLowerCase() == "option") { var b = h(this).parent("select"); if (a && b[0] && b[0].type == "select-one") { b.find("option").selected(false) } this.selected = a } } }) }; h.fn.ajaxSubmit.debug = false; function i() { if (!h.fn.ajaxSubmit.debug) { return } var a = "[jquery.form] " + Array.prototype.join.call(arguments, ""); if (window.console && window.console.log) { window.console.log(a) } else { if (window.opera && window.opera.postError) { window.opera.postError(a) } } } })(jQuery);
/* ! jquery.KinSlideshow-1.2.1.min.js */
eval(function (h, b, i, d, g, f) { g = function (a) { return (a < 62 ? "" : g(parseInt(a / 62))) + ((a = a % 62) > 35 ? String.fromCharCode(a + 29) : a.toString(36)) }; if ("0".replace(0, g) == 0) { while (i--) { f[g(i)] = d[i] } d = [function (a) { return f[a] || a }]; g = function () { return "([4689b-hj-yA-Z]|[12]\\w)" }; i = 1 } while (i--) { if (d[i]) { h = h.replace(new RegExp("\\b" + g(i) + "\\b", "g"), d[i]) } } return h }('(c($){$.fn.KinSlideshow=c(4){4=21.extend({22:5,k:400,t:"p",23:"24",26:1l,O:{1C:40,1E:"#1m",1F:0.5,1n:\'1c\'},1G:1l,U:{1H:12,1I:"#27",1J:"1o",1K:"28"},29:1l,b:{Z:"#2a",10:"#2b",11:"#2c",13:"#1m",1L:"1o",14:"#2d",15:"#2e",P:1,1M:0.7}},4);j 1N={1C:40,1E:"#1m",1F:0.5,1n:\'1c\'};j 1O={1H:12,1I:"#27",1J:"1o",1K:"28"};j 1P={Z:"#2a",10:"#2b",11:"#2c",13:"#1m",1L:"1o",14:"#2d",15:"#2e",P:1,1M:0.7};1p(j u in 1N){d(4.O[u]==1R){4.O[u]=1N[u]}}1p(j u in 1O){d(4.U[u]==1R){4.U[u]=1O[u]}}1p(j u in 1P){d(4.b[u]==1R){4.b[u]=1P[u]}}j B=C;j 6=$(B).selector;j 1S=2f 2g();j r=0;j g=2f 2g();j e=0;j F=4.22;j V;j G=1l;j H;d(1T(F)||F<=1){F=5}d(4.k>2h){4.k=2h}n d(4.k<1d){4.k=1d}c 2i(){$(B).f({2j:"W"});$(6+" a 1q").f({border:0});2k();2l()};c 2k(){r=$(6+" a").length;g.1U($(6+" a 1q").y());g.1U($(6+" a 1q").A());$(6+" a 1q").16(c(i){1S.1U($(C).2m("alt"))});$(6+" a").X("<h I=\'v\'></h>");$(6).8("#v").clone().2m("I","J").appendTo(B);2n();2o();2p();2q();2r(4.23);$(B).f({2j:"visible"})};c 2n(){$(B).f({y:g[0],A:g[1],17:"W",Q:"1e"});$(B).1r("<h 1s=\'1t\'></h>");H=4.O.1C;d(1T(H)){H=40}n d(H<25){H=25};d(4.O.1n=="19"){$(B).f(\'A\',g[1]+H)}$(6+" .1t").f({A:H,y:"1d%",Q:"1V",1c:0,p:0});d(4.26){$(6+" .1t").f({K:4.O.1E,2s:4.O.1F})}};c 2o(){d(4.1G){$(B).1r("<h 1s=\'1u\'><h2 1s=\'2t\' 1f=\'2u:3px 0 0 6px;2v:0;\'></h2></h>");$(6+" .1u").f({A:H,y:"1d%",Q:"1V",1c:0,p:0});$(6+" .1u h2").f({2w:4.U.1H,L:4.U.1I,2x:4.U.1J,fontWeight:4.U.1K});1a(0)}};c 2p(){d(4.b.P>2){4.b.P=2}d(4.b.P<0||1T(4.b.P)){4.b.P=0}d(4.29&&r>=2){$(B).1r("<h 1s=\'1W\' 1f=\'Q:1V;1g:10px;1c:"+(4.O.1n=="19"?($(6+" .1t").A()+5+\'px\'):\'5px\')+"; z-R:1d\'></h>");j 1h="";1p(i=1;i<=r;i++){1h+="<s>"+i+"</s>"}1h="<ul I=\'w\' 1f=\'2u:0;2v:0; 17:W\'>"+1h+"</ul>";$(6+" .1W").1r(1h);$(6+" .1W #w s").f({listStyle:"none",Y:"p",y:18,A:18,borderWidth:4.b.P,S:4.b.14,borderStyle:"solid",K:4.b.Z,textAlign:"center",cursor:"pointer",marginLeft:3,2w:12,2x:4.b.1L,lineHeight:"18px",2s:4.b.1M,L:4.b.11});$(6+" #w s:eq(0)").f({K:4.b.10,S:4.b.15,L:4.b.13})}};c 2q(){1i(4.t){m"p":1Y();l;m"1g":2z();l;m"up":2A();l;m"19":2B();l;2C:4.t="p";1Y()}};c 1Y(){$(6+" h:lt(2)").X("<h I=\'9\'></h>");$(6).8("#9").f({y:g[0],A:g[1],17:"W",Q:"1e"});$(6).8("#v").f({Y:"p"});$(6).8("#J").f({Y:"p"});$(6+" #9 h").X("<h I=\'1y\'></h>");$(6).8("#1y").f({Y:"p",y:"2D%"});V=1j(c(){T(4.t)},F*1k+4.k)};c 2z(){$(6+" h:lt(2)").X("<h I=\'9\'></h>");$(6).8("#9").f({y:g[0],A:g[1],17:"W",Q:"1e"});$(6).8("#v").f({Y:"p"});$(6).8("#J").f({Y:"p"});$(6+" #9 h").X("<h I=\'1y\'></h>");$(6).8("#1y").f({Y:"p",y:"2D%"});$(6).8("#J").M("");$(6+" #v a").2E("<1b></1b>");$(6+" #v a").16(c(i){$(6).8("#J").2F($(6+" #v 1b:eq("+i+")").M())});$(6).8("#v").M($(6).8("#J").M());j D=(r-1)*g[0];$(6).8("#9").N(D);V=1j(c(){T(4.t)},F*1k+4.k)};c 2A(){$(6+" h:lt(2)").X("<h I=\'9\'></h>");$(6).8("#9").f({y:g[0],A:g[1],17:"W",Q:"1e"});$(6).8("#9").q({E:0},1);V=1j(c(){T(4.t)},F*1k+4.k)};c 2B(){$(6+" h:lt(2)").X("<h I=\'9\'></h>");$(6).8("#9").f({y:g[0],A:g[1],17:"W",Q:"1e"});$(6).8("#J").M("");$(6+" #v a").2E("<1b></1b>");$(6+" #v a").16(c(i){$(6).8("#J").2F($(6+" #v 1b:eq("+i+")").M())});$(6).8("#v").M($(6).8("#J").M());j 2G=(r-1)*g[1];$(6).8("#9").q({E:2G},1);V=1j(c(){T(4.t)},F*1k+4.k)};c T(1f){1i(1f){m"p":d(e>=r){e=0;$(6).8("#9").N(0);$(6).8("#9").q({N:g[0]},4.k)}n{x=(e+1)*g[0];d($(6).8("#9").is(\':1A\')){$(6).8("#9").1B();$(6).8("#9").q({N:x},4.k)}n{$(6).8("#9").q({N:x},4.k)}}1a(e+1);l;m"1g":j D=(r-1)*g[0];d(e>=r){e=0;$(6).8("#9").N(D+g[0]);$(6).8("#9").q({N:D},4.k)}n{d(G){e++;G=2H}x=D-(e*g[0]);d($(6).8("#9").is(\':1A\')){$(6).8("#9").1B();$(6).8("#9").q({N:x},4.k)}n{$(6).8("#9").q({N:x},4.k)}}1a(e);l;m"up":d(e>=r){e=0;$(6).8("#9").E(0);$(6).8("#9").q({E:g[1]},4.k)}n{x=(e+1)*g[1];d($(6).8("#9").is(\':1A\')){$(6).8("#9").1B();$(6).8("#9").q({E:x},4.k)}n{$(6).8("#9").q({E:x},4.k)}}1a(e+1);l;m"19":j D=(r-1)*g[1];d(e>=r){e=0;$(6).8("#9").E(D+g[1]);$(6).8("#9").q({E:D},4.k)}n{d(G){e++;G=2H}x=D-(e*g[1]);d($(6).8("#9").is(\':1A\')){$(6).8("#9").1B();$(6).8("#9").q({E:x},4.k)}n{$(6).8("#9").q({E:x},4.k)}}1a(e);l}e++}c 1a(R){d(R==r){R=0};d(4.1G){$(6+" .1u h2.2t").M(1S[R])};$(6+" #w s").16(c(i){d(i==R){$(C).f({K:4.b.10,S:4.b.15,L:4.b.13})}n{$(C).f({K:4.b.Z,S:4.b.14,L:4.b.11})}})};c 2r(2I){1i(2I){m"1Z":2J();l;m"24":20();l;2C:20()}};c 2J(){$(6+" #w s").1Z(c(){j o=$(6+" #w s").R($(C));1i(4.t){m"p":e=o-1;l;m"1g":d(G){e=o-1;l}n{e=o;l}m"up":e=o-1;l;m"19":d(G){e=o-1;l}n{e=o;l}}T(4.t);$(6+" #w s").16(c(i){d(i==o){$(C).f({K:4.b.10,S:4.b.15,L:4.b.13})}n{$(C).f({K:4.b.Z,S:4.b.14,L:4.b.11})}})})};c 20(){$(6+" #w s").click(c(){j o=$(6+" #w s").R($(C));1i(4.t){m"p":e=o-1;l;m"1g":d(G){e=o-1;l}n{e=o;l}m"up":e=o-1;l;m"19":d(G){e=o-1;l}n{e=o;l}};T(4.t);$(6+" #w s").16(c(i){d(i==o){$(C).f({K:4.b.10,S:4.b.15,L:4.b.13})}n{$(C).f({K:4.b.Z,S:4.b.14,L:4.b.11})}})})};c 2l(){$(6+" #w s").1Z(c(){clearInterval(V)});$(6+" #w s").mouseout(c(){V=1j(c(){T(4.t)},F*1k+4.k)})};return 2i()}})(21);', [], 170, "||||settings||ksbs||find|KSS_moveBox||btn|function|if|KSS_changeFlag|css|KSS_Size|div||var|moveSpeedTime|break|case|else|curLiIndex|left|animate|KSS_imgaeLength|li|moveStyle|key|KSS_content|btnlistID|sp|width||height|ksthis|this|KSS_offsetLeft|scrollTop|KSS_IntervalTime|KSS_firstMoveFlag|getTitleBar_Height|id|KSS_contentClone|background|color|html|scrollLeft|titleBar|btn_borderWidth|position|index|borderColor|KSS_move|titleFont|KSS_setInterval|hidden|wrapAll|float|btn_bgColor|btn_bgHoverColor|btn_fontColor||btn_fontHoverColor|btn_borderColor|btn_borderHoverColor|each|overflow||down|setTiltFontShow|span|bottom|100|relative|style|right|KSS_btnList|switch|setInterval|1000|true|000000|titleBar_position|Verdana|for|img|append|class|KSS_titleBar|KSS_titleBox||||KSS_XposBox||animated|stop|titleBar_height||titleBar_bgColor|titleBar_alpha|isHasTitleFont|TitleFont_size|TitleFont_color|TitleFont_family|TitleFont_weight|btn_fontFamily|btn_bgAlpha|titleBar_Bak|titleFont_Bak|btn_Bak||undefined|KSS_DateArray|isNaN|push|absolute|KSS_btnBox||KSS_moveLeft|mouseover|KSS_btnMouseclick|jQuery|intervalTime|mouseEvent|mouseclick||isHasTitleBar|FFFFFF|bold|isHasBtn|666666|CC0000|CCCCCC|999999|FF0000|new|Array|500|KSS_initialize|visibility|KSS_start|KSS_mousehover|attr|KSS_setTitleBar|KSS_setTitleFont|KSS_setBtn|KSS_action|KSS_btnEvent|opacity|title|margin|padding|fontSize|fontFamily||KSS_moveRight|KSS_moveUp|KSS_moveDown|default|2000|wrap|prepend|KSS_offsetTop|false|Event|KSS_btnMouseover".split("|"), 0, {}));
/* lhgcore Dialog Plugin v4.2.0 */
eval(function (h, b, i, d, g, f) { g = function (a) { return (a < b ? "" : g(parseInt(a / b))) + ((a = a % b) > 35 ? String.fromCharCode(a + 29) : a.toString(36)) }; if (!"".replace(/^/, String)) { while (i--) { f[g(i)] = d[i] || g(i) } d = [function (a) { return f[a] }]; g = function () { return "\\w+" }; i = 1 } while (i--) { if (d[i]) { h = h.replace(new RegExp("\\b" + g(i) + "\\b", "g"), d[i]) } } return h }('(6(a,b,c){A d=b.3i&&!b.4A,e=6(){},f=0,g=/^2O:/,h,i,j=b.1P,k="4B"+ +(2P 3j),l=\'<2o H="4C"><2p><16><K H="4D"></K><K H="4E"></K><K H="4F"></K></16><16><K H="4G"></K><K H="4H"><Q H="4I"><2o H="4J"><2p><16><K 3k="2"><Q H="4K"><Q H="4L" 4M="4N"></Q><Q H="4O"><a H="4P" 1D="1E:2q(0);" R="\\3l\\4Q\\3m"><b H="4R"></b></a><a H="4S" 1D="1E:2q(0);" R="\\3l\\4T\\3m"><b H="4U"></b></a><a H="4V" 1D="1E:2q(0);" R="\\4W\\4X"><b H="4Y"></b><b H="4Z"></b></a><a H="51" 1D="1E:2q(0);" R="\\52\\53(2Q\\54)">\\55</a></Q></Q></K></16><16><K H="56"></K><K H="57"><Q H="58"></Q></K></16><16><K 3k="2"><Q H="59"></Q></K></16></2p></2o></Q></K><K H="5a"></K></16><16><K H="5b"></K><K H="5c"></K><K H="5d"></K></16></2p></2o>\',m,n=6(a,b,c){A d=a.1F;1x(;b<d;b++){c=j.5e?a[b].1b:a[b].5f("1b",4);J(c.3n(c.3o("/")).2r("2R")!==-1)5g}B c=c.1Q("?"),m=c[1],c[0].3n(0,c[0].3o("/")+1)}(j.1y("5h"),0),o=6(a){J(m){A b=m.1Q("&"),c=0,d=b.1F,e;1x(;c<d;c++){e=b[c].1Q("=");J(a===e[0])B e[1]}}B T},p=o("2S")||"5i",q,r=6(a){1R{q=a.C.1P,q.1y}1S(b){B q=a.1P,a}B o("5j")==="5k"||q.1y("5l").1F>0?(q=a.1P,a):a.C}(b),s=q.3p,t=q.5m==="5n";D$1p=a(q),D$C=a(r),D$1q=a(q.1y("1q")[0]);1R{q.5o("5p",!1,!0)}1S(u){}(6(a){J(!a){A b=q.1y("5q")[0],c=q.1G("5r");c.1D=n+"2s/"+p+".1T",c.5s="5t",c.X="3q",b.3r(c,b.3s)}})(q.5u("3q")),d&&6(a){D$1q.1T(a)!=="Y"&&D$1q.1T({5v:1,3t:"2O(5w:5x)",3u:"Y"})}("3u");A v=6(a){a=a||{};A b,d=v.1h;1x(A e 1U d)a[e]===c&&(a[e]=d[e]);B a.X=a.X||k+f,b=v.1z[a.X],b?b.22().N():(a.1r=a.1r||[],a.1H&&a.1r.3v({X:"1H",2t:a.3w,1A:a.1H,N:a.N}),a.1c&&a.1r.3v({X:"1c",2t:a.2T,1A:a.1c}),v.1h.V=a.V,f++,v.1z[a.X]=h?h.2u(a):2P v.23.2u(a))};v.23=v.3x={5y:v,2u:6(a){A c=8,d,e=a.W,f=g.3y(e);B c.5z=b,c.U=a,c.F=d=c.F||c.3z(),c.3A=!1,c.2U=a.2U,a.13&&!f?(a.1i=!1,a.S=!1,d.13[0].7.G="",d.13[0].1j=\'<3B 1b="\'+a.2v+"2s/3C/"+a.13+\'" H="3D"/>\'):d.13[0].7.G="O",d.P.1s(a.2S),d.24[0].7.18=a.Z?"3E-Z":"11",d.R[0].7.18=a.1V?"25":"11",d.S[0].7.G=a.S?"26-1W":"O",d.1i[0].7.G=a.1i?"26-1W":"O",d.1d[0].7.G=a.1c===!1?"O":"26-1W",d.W[0].7.2w=a.2w,c.1r.2x(c,a.1r),c.R(a.R).W(e,!0,f).1I(a.E,a.I).12(a.L,a.C).1X(a.1X)[a.2y?"2y":"2V"](!0).22(),a.N&&c.N(),a.1t&&c.1t(),c.3F().3G(),h=T,!f&&a.1Y&&a.1Y.1e(c,b),c},1r:6(){A b=8,c=b.F,d=c.2z[0],e="5A",f=b.2A=b.2A||{},g=[].5B.1e(2B),h=0,i,j,l,m,n;1x(;h<g.1F;h++)i=g[h],j=i.2t,l=i.X||j,m=!f[l],n=m?q.1G("2W"):f[l].3H,n.5C="1r",f[l]||(f[l]={}),j&&(n.2X=j),i.1A&&(f[l].1A=i.1A),i.N&&(b.28&&b.28.1k(e),b.28=a(n).1s(e),b.N()),n[k+"1A"]=l,n.2Y=!!i.2Y,m&&(f[l].3H=n,d.29(n));B d.7.G=g.1F?"":"O",b.2a(),b},R:6(a){J(a===c)B 8;A b=8.F,d=b.19,e=b.R[0];B a===!1?(e.7.G="O",e.1j="",d.1s("3I")):(e.7.G="",e.1j=a,d.1k("3I")),8},W:6(a,b,d){J(a===c)B 8;A e=8,f=e.F,g=f.P[0],h=g.1a,i=g.1l,j=1J(g.7.L),k=1J(g.7.C),l=g.7.E,m=f.W,n=v.1h.W;B d?(m[0].1j=n,e.3J(a.1Q("2O:")[1])):m.1q(a),b||(h=g.1a-h,i=g.1l-i,j-=h/2,k-=i/2,g.7.L=1f.S(j,0)+"M",g.7.C=1f.S(k,0)+"M",l&&l!=="11"&&(g.7.E=g.1a+"M"),e.2b()),e.2a(),e},1I:6(a,b){A c=8,d=c.F,e=d.P[0],f=d.1u[0].7;B e.7.E="11",1B a=="2c"&&(a+="M"),1B b=="2c"&&(b+="M"),f.E=a,f.I=b,a!=="11"&&(e.7.E=e.1a+"M"),c.2a(),c},12:6(a,b){A e=8,f=e.U,g=e.F.P[0],h=g.7,i=d?!1:f.Y,j=d&&f.Y,k=D$C.1K(),l=D$C.1L(),m=i?0:k,n=i?0:l,o=D$C.E(),p=D$C.I(),q=g.1a,r=g.1l;J(a||a===0)e.3K=a.3L().2r("%")!==-1?a:T,a=e.2Z(a,o-q),1B a=="2c"&&(a=j?a+=k:a+m,a=1f.S(a,m)+"M"),h.L=a;J(b||b===0)e.3M=b.3L().2r("%")!==-1?b:T,b=e.2Z(b,p-r),1B b=="2c"&&(b=j?b+=l:b+n,b=1f.S(b,n)+"M"),h.C=b;B a!==c&&b!==c&&e.2b(),e},1X:6(a,b){A c=8,d=c.3N;B d&&30(d),b&&b.1e(c),a&&(c.3N=2d(6(){c.2e("1c")},5D*a)),c},2y:6(b){B 8.F.P[0].7.2f="3O",8.F.19.1s("3P"),!b&&8.1M&&(a("#1C",q)[0].7.G=""),8},2V:6(b){B 8.F.P[0].7.2f="2C",8.F.19.1k("3P"),!b&&8.1M&&(a("#1C",q)[0].7.G="O"),8},22:6(){A a=8,b=a.F,c=a.2g,d=v.N,e=v.1h.V++;B b.P[0].7.V=e,d&&d.F.19.1k("31"),v.N=a,b.19.1s("31"),c&&c.7.V&&(c.7.G="O"),d&&d!==a&&d.14&&(d.2g.7.G=""),a},N:6(){1R{32=8.28&&8.28[0]||8.F.1d[0],32&&32.N()}1S(a){}B 8},1t:6(){A b=8,c,e=v.1h.V-1,f=b.U,g=a("#1C",q)[0],h=g?g.7:"",i=d?"1m":"Y";B g||(c=\'<14 1b="1E:\\\'\\\'" 7="E:1v%;I:1v%;12:1m;C:0;L:0;z-33:-1;2h:2D(1Z=0)"></14>\',g=q.1G("Q"),g.X="1C",g.7.1w="12:"+i+";L:0;C:0;E:1v%;I:1v%;5E:2C;",h=g.7,d&&(g.1j=c),q.2i.29(g)),i==="1m"&&(h.E=D$C.E(),h.I=D$C.I(),h.C=D$C.1L(),h.L=D$C.1K(),b.34(g)),h.V=e,h.G="",b.22(),b.F.19.1s("3Q"),b.1M=!0,b},3R:6(){A b=8,c=b.U,d=a("#1C",q)[0];J(d&&b.1M){J(c.1N&&c.1N.1M){A e=c.1N.F.P[0].7.V;d.7.V=1J(e,10)-1}2j d.7.G="O";b.F.19.1k("3Q")}B b.1M=!1,b},1d:6(){A c=8,d=c.F,e=d.P,f=v.1z,g=c.U.1d;c.1X();J(c.14){J(1B g=="6"&&g.1e(c,c.14.3S,b)===!1)B c;a(c.14).1n("3T",c.3U).35("1b","1E:\'\'").2k(),d.W.1k("3V"),c.36&&30(c.36)}2j J(1B g=="6"&&g.1e(c,b)===!1)B c;c.3R(),c.1O&&(D$1q.1k("37"),d.2E[0].7.G="O"),v.N===c&&(v.N=T),c.3W(),2F f[c.U.X];J(h)e.2k();2j{h=c,c.2l&&(d.1u[0].7.G="",d.2z[0].7.G="",d.2G[0].7.E=""),d.P[0].7.1w="L:0;C:0;",d.P[0].3X="",d.19.1k("31"),d.R[0].1j="",d.W.1q(""),d.13[0].1j="",d.2z[0].1j="",c.2V(!0).2m();1x(A i 1U c)c.5F(i)&&i!=="F"&&2F c[i]}B c.3A=!0,c},S:6(){A a=8,b,c=a.F,e=c.P[0].7,f=c.1u[0].7,g=c.24[0].7,h=c.R[0].7,i=a.U,j=D$C.1L(),k=D$C.1K();B a.1O?(D$1q.1k("37"),e.C=a.1o.t,e.L=a.1o.l,a.1I(a.1o.w,a.1o.h).2b(),i.1V=a.1o.d,i.Z=a.1o.r,g.18=a.1o.3Y,h.18=a.1o.3Z,c.2E[0].7.G="O",c.S[0].7.G="26-1W",2F a.1o,a.1O=!1):(D$1q.1s("37"),a.2l&&a.1i(),a.1o={t:e.C,l:e.L,w:f.E,h:f.I,d:i.1V,r:i.Z,3Y:g.18,3Z:h.18},e.C=j+"M",e.L=k+"M",b=a.39(),a.1I(b.w,b.h).2m(),d&&t&&(e.E=D$C.E()+"M"),i.1V=!1,i.Z=!1,g.18="11",h.18="11",c.S[0].7.G="O",c.2E[0].7.G="26-1W",a.1O=!0),a},1i:6(){A a=8,b=a.F,c=b.1u[0].7,d=b.2z[0].7,e=b.2G[0].7,f=b.24[0].7.18,g=a.U.Z;B a.2l?(c.G="",d.G=a.2n.40,e.E="",g=a.2n,f.18=a.2n.41?"3E-Z":"11",2F a.2n,a.2l=!1):(a.1O&&a.S(),a.2n={41:g,40:d.G},c.G="O",d.G="O",e.E=c.E,f.18="11",g=!1,a.2l=!0),a.2a(),a},5G:6(a,b){B v.1z[a]?b===1?v.1z[a]:v.1z[a].W||T:T},5H:6(c,d,e){c=c||b;1R{c.42.1D=d?d:c.42.1D}1S(f){d=8.14.1b,a(8.14).35("1b",d)}B e&&e.1e(8),8},3J:6(b){A c=8,e,f,g,h,i,j,k,l=c.F.W,m=c.U,n=c.2g=a(".43",l[0])[0],o="12:1m;L:-44;19:O 0;3a:5I",p="E:1v%;I:1v%;19:O 0;";J(m.45===!1){A s=(2P 3j).5J(),t=b.5K(/([?&])D=[^&]*/,"$5L="+s);b=t+(t===b?(/\\?/.3y(b)?"&":"?")+"D="+s:"")}e=c.14=q.1G("14"),e.2t=m.X,e.7.1w=o,e.5M("5N",0,0),f=a(e),l[0].29(e),c.36=2d(6(){f.35("1b",b)},1);A u=c.3U=6(){l.1s("3V");A b=c.F,f,o=b.5O[0].1l,q=b.1u[0].7;n.7.1w="G:O;12:1m;3a:#46;1Z:0;2h:2D(1Z=0);z-33:1;E:"+q.E+";I:"+q.I+";";1R{g=c.W=e.3S,h=a(g.1P),i=a(g.1P.2i)}1S(s){e.7.1w=p;B}j=m.E==="11"?h.E()+(d?0:1J(i.1T("5P"))):m.E,k=m.I==="11"?h.I():m.I,2d(6(){e.7.1w=p},0),c.1O||c.1I(j,k).12(m.L,m.C),n.7.E=q.E,n.7.I=q.I,m.1Y&&m.1Y.1e(c,g,r)};c.14.5Q=c,f.15("3T",u)},3z:6(){A b=q.1G("Q"),c=q.2i;b.7.1w="12:1m;L:0;C:0;2f:2C;",b.1j=l;A d,e=0,f={P:a(b)},g=b.1y("*"),h=g.1F;1x(;e<h;e++)d=g[e].3X.1Q("5R")[1],d&&(f[d]=a(g[e]));B c.3r(b,c.3s),f},2Z:6(a,b){B 1B a=="2c"?a:(a.2r("%")!==-1&&(a=1J(b*a.1Q("%")[0]/1v)),a)},39:6(){A a=8,b=a.F,c=b.P[0],d=b.1u[0],e,f;B e=D$C.E()-c.1a+d.1a,f=D$C.I()-c.1l+d.1l,{w:e,h:f}},3F:6(){J(d){A a=0,b,c,e,f,g=v.1h.2v+"/2s/",h=8.F.P[0].1y("*");1x(;a<h.1F;a++)b=h[a],c=b.5S.5T,c&&(e=g+c,f=b.5U,f.3t="O",f.2h="5V:5W.5X.5Y(1b=\'"+e+"\',5Z=\'60\')")}B 8},2a:d?6(){A a=8.F.P,b=a[0],c=c+"61",d=a[c],e=b.1a,f=b.1l;e+="M",f+="M",d?(d.7.E=e,d.7.I=f):(d=b.29(q.1G("14")),a[c]=d,d.1b="1E:\'\'",d.7.1w="12:1m;z-33:-1;L:0;C:0;2h:2D(1Z=0);E:"+e+";I:"+f)}:e,2b:6(){8[8.U.Y?"34":"2m"]()},34:6(a){A b=a?a.7:8.F.P[0].7;J(d){A c=D$C.1K(),e=D$C.1L(),f=1J(b.L)-c,g=1J(b.C)-e,h=t?"8.47.2i":"8.47.3p";8.2m(),b.48("L",h+".1K +"+f),b.48("C",h+".1L +"+g)}2j b.12="Y"},2m:6(){A a=8.F.P[0].7;d&&(a.49("L"),a.49("C")),a.12="1m"},2e:6(a){A c=8,d=c.2A[a]&&c.2A[a].1A;B 1B d!="6"||d.1e(c,b)!==!1?c.1d():c},4a:6(){A c=!!b.3i,e,f=8,g=D$C.E(),h=D$C.I(),i=f.4b||g*h,j=f.4c||g,k=f.3K,l=f.3M;J(c){f.1M&&d&&a("#1C",q).1T({E:g+"M",I:h+17+"M"}),4d=f.4c=g,e=f.4b=g*h;J(i===e)B}J(f.1O){A m=f.39();f.1I(m.w,m.h)}J(c&&1f.62(j-4d)===17)B;(k||l)&&f.12(k,l)},3G:6(){A a,b=8,c=b.U,d=b.F;b.3b=6(){a&&30(a),a=2d(6(){b.4a()},63)},D$C.15("Z",b.3b),d.P.15("4e",6(a){A c=a.2H,e;J(c.2Y)B!1;J(c===d.1d[0])B b.2e("1c"),!1;J(c===d.S[0]||c===d.2E[0]||c===d.64[0]||c===d.65[0]||c===d.66[0])B b.S(),!1;J(c===d.1i[0]||c===d.67[0])B b.1i(),!1;e=c[k+"1A"],e&&b.2e(e)}).15("68",6(a){b.22();A e=a.2H;J(c.1V!==!1&&e===d.R[0]||c.Z!==!1&&e===d.24[0])B w(a),!1}),c.S&&d.R.15("3c",6(){B b.S(),!1})},3W:6(){A a=8,b=a.F;b.P.1n(),b.R.1n(),D$C.1n("Z",a.3b)}},v.23.2u.3x=v.23,v.N=T,v.1z={},i=6(a){A b=a.2H,c=v.N,d=a.69;J(!c||!c.U.2Q||c.U.1c===!1)B;d===27&&c.2e(c.U.2T)},D$1p.15("4f",i),r!=b&&a(b).15("6a",6(){A b=v.1z;1x(A c 1U b)b[c]&&b[c].1d();h&&h.F.P.2k(),D$1p.1n("4f",i),a("#1C",q)[0]&&a("#1C",q).2k(),a("#3d",q)[0]&&a("#3d",q).2k()}),v.1h={W:\'<Q H="43"><4g>6b...</4g></Q>\',R:"\\6c\\6d ",1r:T,1H:T,1c:T,1Y:T,1d:T,3w:"\\4h\\6e",2T:"\\6f\\6g",2S:"",2Q:!0,2y:!0,E:"11",I:"11",13:T,2v:n,1t:!1,N:!0,1N:T,2w:"6h",Y:!1,L:"50%",C:"38.2%",S:!0,1i:!0,V:6i,Z:!0,1V:!0,45:!0,2U:T,4i:!1};A w,x="4j"1U s,y="6j"1U s;v.21={3e:e,2I:6(a){A b=v.21;B D$1p.15("4k",b.25).15("4l",b.1g),b.4m=a.2J,b.4n=a.2K,b.3e(a.2J,a.2K),!1},3f:e,25:6(a){A b=v.21;B b.3f(a.2J-b.4m,a.2K-b.4n),!1},3g:e,1g:6(a){A b=v.21;B D$1p.1n("4k",b.25).1n("4l",b.1g),b.3g(a.2J,a.2K),!1}},w=6(b){A c,e,f,g,h,i,j=v.N,k=j.U,l=j.F,m=l.P[0],n=l.R,o=l.1u[0],p=v.21,s="4o"1U r?6(){r.4o().6k()}:6(){1R{q.6l.6m()}1S(a){}};p.3e=6(a,b){i?(e=o.1a,f=o.1l):(g=m.6n,h=m.6o),D$1p.15("3c",p.1g),!d&&y?n.15("4p",p.1g):D$C.15("4q",p.1g),x&&n[0].4j(),l.19.1s("4r"),j.N()},p.3f=6(b,d){J(i){A l=m.7,n=o.7,p=b+e,q=d+f;l.E="11",k.E=n.E=1f.S(0,p)+"M",l.E=m.1a+"M",k.I=n.I=1f.S(0,q)+"M",j.2g&&a(j.2g).1T({E:n.E,I:n.I})}2j{A n=m.7,r=b+g,t=d+h;k.L=1f.S(c.4s,1f.1i(c.2L,r)),k.C=1f.S(c.4t,1f.1i(c.2M,t)),n.L=k.L+"M",n.C=k.C+"M"}s()},p.3g=6(a,b){D$1p.1n("3c",p.1g),!d&&y?n.1n("4p",p.1g):D$C.1n("4q",p.1g),x&&n[0].6p(),d&&j.2b(),l.19.1k("4r")},i=b.2H===l.24[0]?!0:!1,c=6(a){A b=m.1a,c=n[0].1l||20,d=D$C.E(),e=D$C.I(),f=a?0:D$C.1K(),g=a?0:D$C.1L();B 2L=d-b+f,2M=e-c+g,{4s:f,4t:g,2L:2L,2M:2M}}(m.7.12==="Y"),p.2I(b)},a(6(){2d(6(){J(f)B;v({L:"-44",1X:9,Y:!1,1t:!1,N:!1})},6q),v.1h.4i&&6(a){A b=q.1G("Q"),c=b.7,e=d?"1m":"Y";b.X="3d",c.1w="G:O;12:"+e+";L:0;C:0;E:1v%;I:1v%;"+"18:25;2h:2D(1Z=0);1Z:0;3a:#46;6r-6s:O;",q.2i.29(b),a.4u=a.2I,a.4v=a.1g,a.2I=6(){A b=v.N,d=b.F.1u[0],f=b.14;a.4u.2x(8,2B),c.G="1W",c.V=v.1h.V+3,e==="1m"&&(c.E=D$C.E()+"M",c.I=D$C.I()+"M",c.L=D$1p.1K()+"M",c.C=D$1p.1L()+"M"),f&&d.1a*d.1l>6t&&(d.7.2f="2C")},a.1g=6(){A b=v.N;a.4v.2x(8,2B),c.G="O",b&&(b.F.1u[0].7.2f="3O")}}(v.21)}),a.23.2G=6(){A a=2B;B 8.15("4e",6(){B v.2x(8,a),!1}),8},b.2R=a.2G=v})(8.4w||8.4x,8),6(a,b,c){A d=6(){B b.1h.V};b.4y=6(a,c,e){B b({R:"\\6u\\6v",X:"6w",V:d(),13:"4y.2N",Y:!0,1t:!0,W:a,1H:!0,Z:!1,1d:c,1N:e||T})},b.3h=6(a,c,e,f){B b({R:"\\4h\\6x",X:"3h.2N",V:d(),13:"3h.2N",Y:!0,1t:!0,W:a,Z:!1,1N:f||T,1H:6(a){B c.1e(8,a)},1c:6(a){B e&&e.1e(8,a)}})},b.4z=6(a,c,e,f){e=e||"";A g;B b({R:"\\6y\\6z",X:"6A",V:d(),13:"4z.2N",Y:!0,1t:!0,1N:f||T,W:[\'<Q 7="6B-6C:6D;6E-1I:6F">\',a,"</Q>","<Q>",\'<2W 2X="\',e,\'" 7="E:6G;2w:6H 6I" />\',"</Q>"].6J(""),1Y:6(){g=8.F.W[0].1y("2W")[0],g.6K(),g.N()},1H:6(a){B c&&c.1e(8,g.2X,a)},1c:!0})},b.6L=6(a,c,e,f){A g=e?6(){8.F.13[0].1j=\'<3B 1b="\'+8.U.2v+"2s/3C/"+e+\'" H="3D"/>\',8.F.13[0].7.G="",f&&(8.U.1d=f)}:6(){8.F.13[0].7.G="O",f&&(8.U.1d=f)};B b({X:"6M",V:d(),R:!1,1c:!1,Y:!0,1t:!1,Z:!1}).W(a).1X(c||1.5,g)}}(8.4w||8.4x,8.2R)', 62, 421, "||||||function|style|this||||||||||||||||||||||||||||var|return|top|_|width|DOM|display|class|height|if|td|left|px|focus|none|wrap|div|title|max|null|config|zIndex|content|id|fixed|resize||auto|position|icon|iframe|bind|tr||cursor|border|offsetWidth|src|cancel|close|call|Math|end|setting|min|innerHTML|removeClass|offsetHeight|absolute|unbind|_or|doc|html|button|addClass|lock|main|100|cssText|for|getElementsByTagName|list|callback|typeof|ldg_lockmask|href|javascript|length|createElement|ok|size|parseInt|scrollLeft|scrollTop|_lock|parent|_maxState|document|split|try|catch|css|in|drag|block|time|init|opacity||dragEvent|zindex|fn|rb|move|inline||_focus|appendChild|_ie6SelectFix|_autoPositionType|number|setTimeout|_click|visibility|_load|filter|body|else|remove|_minState|_setAbsolute|_minRz|table|tbody|void|indexOf|skins|name|_init|path|padding|apply|show|buttons|_listeners|arguments|hidden|alpha|res|delete|dialog|target|start|clientX|clientY|maxX|maxY|gif|url|new|esc|lhgdialog|skin|cancelVal|data|hide|input|value|disabled|_toNumber|clearTimeout|ui_state_focus|elemFocus|index|_setFixed|attr|_frmTimer|ui_lock_scroll||_maxSize|background|_winResize|dblclick|ldg_dragmask|onstart|onmove|onend|confirm|ActiveXObject|Date|colspan|u6700|u5316|substr|lastIndexOf|documentElement|lhgdialoglink|insertBefore|firstChild|backgroundImage|backgroundAttachment|push|okVal|prototype|test|_getDOM|closed|img|icons|ui_icon_bg|se|_ie6PngFix|_addEvent|elem|ui_state_tips|_iframe|_left|toString|_top|_timer|visible|ui_state_visible|ui_state_lock|unlock|contentWindow|load|_fmLoad|ui_state_full|_removeEvent|className|rc|tc|btn|rzs|location|ui_loading|9999em|cache|FFF|ownerDocument|setExpression|removeExpression|_reset|_winSize|_lockDocW|newWidth|click|keydown|span|u786e|extendDrag|setCapture|mousemove|mouseup|_sClientX|_sClientY|getSelection|losecapture|blur|ui_state_drag|minX|minY|_start|_end|jQuery|lhgcore|alert|prompt|XMLHttpRequest|JDG|ui_border|ui_lt|ui_t|ui_rt|ui_l|ui_c|ui_inner|ui_dialog|ui_title_bar|ui_title|unselectable|on|ui_title_buttons|ui_min|u5c0f|ui_min_b|ui_max|u5927|ui_max_b|ui_res|u8fd8|u539f|ui_res_b|ui_res_t||ui_close|u5173|u95ed|u952e|u00d7|ui_icon|ui_main|ui_content|ui_buttons|ui_r|ui_lb|ui_b|ui_rb|querySelector|getAttribute|break|script|default|self|true|frameset|compatMode|BackCompat|execCommand|BackgroundImageCache|head|link|rel|stylesheet|getElementById|zoom|about|blank|constructor|opener|ui_state_highlight|slice|type|1e3|overflow|hasOwnProperty|get|reload|transparent|getTime|replace|1_|setAttribute|frameborder|lt|marginLeft|api|ui_|currentStyle|png|runtimeStyle|progid|DXImageTransform|Microsoft|AlphaImageLoader|sizingMethod|scale|iframeMask|abs|140|max_b|res_b|res_t|min_b|mousedown|keyCode|unload|loading|u89c6|u7a97|u5b9a|u53d6|u6d88|10px|1976|onlosecapture|removeAllRanges|selection|empty|offsetLeft|offsetTop|releaseCapture|150|pointer|events|307200|u8b66|u544a|Alert|u8ba4|u63d0|u95ee|Prompt|margin|bottom|5px|font|12px|18em|6px|4px|join|select|tips|Tips".split("|"), 0, {})); $.extend($.fn, { Tips: function (f) { var e = $.extend({ type: "load", text: "åŠ è½½ä¸­...", time: 3 }, f), h = ".jquery_tips", d = { okay: "#080", warn: "#808", error: "#800", load: "#008" }; if ($(h).length > 0) { $(h).remove() } var a = e.text.length * 14 + 65, g = $(document).width() / 2 - a / 2, b = $(document).scrollTop() + 200; return $('<div class="jquery_tips"><span class="jquery_tips_right"></span><span class="jquery_tips_left"></span><p class="jquery_tips_main"><span class="jquery_tips_stat jquery_tips_' + e.type + '"></span>' + e.text + "</p></div>").css({ width: a, left: g, top: b, color: d[e.type] }).appendTo("body").delay((e.time - 1) * 1000).fadeOut(1000, function () { $(h).remove() }) } }); var path = "/eportal/uiFramework/huilan-jquery-ui/images/simple-tree/"; $.fn.simpleTree = function (b) { return this.each(function () { var k = this; var m = $(".root", this); var q = false; var l = false; var r = false; var p = false; var a = false; var n = false; var o = Array(); k.option = { drag: true, animate: false, autoclose: false, speed: "fast", afterAjax: false, afterMove: false, afterClick: false, afterDblClick: false, afterContextMenu: false, docToFolderConvert: false }; k.option = $.extend(k.option, b); $.extend(this, { getSelected: function () { return $("span.active", this).parent() } }); k.closeNearby = function (c) { $(c).siblings().filter(".folder-open, .folder-open-last").each(function () { var e = $(">ul", this); var d = this.className; this.className = d.replace("open", "close"); if (k.option.animate) { e.animate({ height: "toggle" }, k.option.speed) } else { e.hide() } }) }; k.nodeToggle = function (c) { var d = $(">ul", c); if (d.is(":visible")) { c.className = c.className.replace("open", "close"); if (k.option.animate) { d.animate({ height: "toggle" }, k.option.speed) } else { d.hide() } } else { c.className = c.className.replace("close", "open"); if (k.option.animate) { d.animate({ height: "toggle" }, k.option.speed, function () { if (k.option.autoclose) { k.closeNearby(c) } if (d.is(".ajax")) { k.setAjaxNodes(d, c.id) } }) } else { d.show(); if (k.option.autoclose) { k.closeNearby(c) } if (d.is(".ajax")) { k.setAjaxNodes(d, c.id) } } } }; k.setAjaxNodes = function (d, f, c) { if ($.inArray(f, o) == -1) { o[o.length] = f; var e = $.trim($(">li", d).text()); if (e && e.indexOf("url:")) { e = $.trim(e.replace(/.*\{url:(.*)\}/i, "$1")); $.ajax({ type: "GET", url: e, contentType: "html", cache: false, success: function (g) { d.removeAttr("class"); d.html(g); $.extend(d, { url: e }); k.setTreeNodes(d, true); if (typeof k.option.afterAjax == "function") { k.option.afterAjax(d) } if (typeof c == "function") { c(d) } } }) } } }; k.setTreeNodes = function (c, d) { c = d ? c.parent() : c; $("li>span", c).addClass("text").bind("selectstart", function () { return false }).click(function () { $(".active", k).attr("class", "text"); if (this.className == "text") { this.className = "active" } if (typeof k.option.afterClick == "function") { k.option.afterClick($(this).parent()) } return false }).dblclick(function () { q = false; k.nodeToggle($(this).parent().get(0)); if (typeof k.option.afterDblClick == "function") { k.option.afterDblClick($(this).parent()) } return false }).bind("contextmenu", function () { $(".active", k).attr("class", "text"); if (this.className == "text") { this.className = "active" } if (typeof k.option.afterContextMenu == "function") { k.option.afterContextMenu($(this).parent()) } return false }).mousedown(function (f) { q = true; cloneNode = $(this).parent().clone(); var e = $(this).parent(); if (k.option.drag) { $(">ul", cloneNode).hide(); $("body").append('<div id="drag_container"><ul></ul></div>'); $("#drag_container").hide().css({ opacity: "0.8" }); $("#drag_container >ul").append(cloneNode); $("<img>").attr({ id: "tree_plus", src: path + "plus.gif" }).css({ width: "7px", display: "block", position: "absolute", left: "5px", top: "5px", display: "none" }).appendTo("body"); $(document).bind("mousemove", { LI: e }, k.dragStart).bind("mouseup", k.dragEnd) } return false }).mouseup(function () { if (q && l && a) { k.moveNodeToFolder($(this).parent()) } k.eventDestroy() }); $("li", c).each(function (h) { var g = this.className; var j = false; var t = false; var e = this; var i = $(">ul", this); if (i.size() > 0) { var f = "folder-"; if (g && g.indexOf("open") >= 0) { f = f + "open"; j = true } else { f = f + "close" } this.className = f + ($(this).is(":last-child") ? "-last" : ""); if (!j || g.indexOf("ajax") >= 0) { i.hide() } k.setTrigger(this) } else { var f = "doc"; this.className = f + ($(this).is(":last-child") ? "-last" : "") } }).before('<li class="line">&nbsp;</li>').filter(":last-child").after('<li class="line-last"></li>'); k.setEventLine($(".line, .line-last", c)) }; k.setTrigger = function (c) { $(">span", c).before("<img class='trigger' src='" + path + "spacer.gif' border=0>"); var d = $(">.trigger", c); d.click(function (e) { k.nodeToggle(c) }); if (!$.browser.msie) { d.css("float", "left") } }; k.dragStart = function (j) { var i = $(j.data.LI); if (q) { l = true; if (n) { clearTimeout(n) } if ($("#drag_container:not(:visible)")) { $("#drag_container").show(); i.prev(".line").hide(); a = i } $("#drag_container").css({ position: "absolute", left: (j.pageX + 5), top: (j.pageY + 15) }); if (i.is(":visible")) { i.hide() } var g = false; if (j.target.tagName.toLowerCase() == "span" && $.inArray(j.target.className, Array("text", "active", "trigger")) != -1) { var c = j.target.parentNode; var d = $(c).offset({ scroll: false }); var t = { x: (d.left - 3), y: j.pageY - d.top }; var e = $("#tree_plus").attr("src"); var f = $(">ul.ajax", c).size(); var h = $(">ul.ajax", c); t.x += 19; t.y = j.pageY - t.y + 5; if (c.className.indexOf("folder-close") >= 0 && f == 0) { if (e.indexOf("minus") != -1) { $("#tree_plus").attr("src", path + "plus.gif") } $("#tree_plus").css({ left: t.x, top: t.y }).show(); n = setTimeout(function () { c.className = c.className.replace("close", "open"); $(">ul", c).show() }, 700) } else { if (c.className.indexOf("folder") >= 0 && f == 0) { if (e.indexOf("minus") != -1) { $("#tree_plus").attr("src", path + "plus.gif") } $("#tree_plus").css({ left: t.x, top: t.y }).show() } else { if (c.className.indexOf("folder-close") >= 0 && f > 0) { l = false; $("#tree_plus").attr("src", path + "minus.gif"); $("#tree_plus").css({ left: t.x, top: t.y }).show(); $(">ul", c).show(); k.setAjaxNodes(h, c.id, function () { c.className = c.className.replace("close", "open"); l = true; $("#tree_plus").attr("src", path + "plus.gif"); $("#tree_plus").css({ left: t.x, top: t.y }).show() }) } else { if (k.option.docToFolderConvert) { $("#tree_plus").css({ left: t.x, top: t.y }).show() } else { $("#tree_plus").hide() } } } } } else { $("#tree_plus").hide() } return false } return true }; k.dragEnd = function () { if (n) { clearTimeout(n) } k.eventDestroy() }; k.setEventLine = function (c) { c.mouseover(function () { if (this.className.indexOf("over") < 0 && q && l) { this.className = this.className.replace("line", "line-over") } }).mouseout(function () { if (this.className.indexOf("over") >= 0) { this.className = this.className.replace("-over", "") } }).mouseup(function () { if (q && a && l) { p = $(this).parents("li:first"); k.moveNodeToLine(this); k.eventDestroy() } }) }; k.checkNodeIsLast = function (c) { if (c.className.indexOf("last") >= 0) { var d = a.prev().prev(); if (d.size() > 0) { d[0].className += "-last" } c.className = c.className.replace("-last", "") } }; k.checkLineIsLast = function (d) { if (d.className.indexOf("last") >= 0) { var c = $(d).prev(); if (c.size() > 0) { c[0].className = c[0].className.replace("-last", "") } a[0].className += "-last" } }; k.eventDestroy = function () { $(document).unbind("mousemove", k.dragStart).unbind("mouseup").unbind("mousedown"); $("#drag_container, #tree_plus").remove(); if (a) { $(a).show().prev(".line").show() } p = a = q = l = false }; k.convertToFolder = function (c) { c[0].className = c[0].className.replace("doc", "folder-open"); c.append('<ul><li class="line-last"></li></ul>'); k.setTrigger(c[0]); k.setEventLine($(".line, .line-last", c)) }; k.convertToDoc = function (c) { $(">ul", c).remove(); $("img", c).remove(); c[0].className = c[0].className.replace(/folder-(open|close)/gi, "doc") }; k.moveNodeToFolder = function (c) { if (!k.option.docToFolderConvert && c[0].className.indexOf("doc") != -1) { return true } else { if (k.option.docToFolderConvert && c[0].className.indexOf("doc") != -1) { k.convertToFolder(c) } } k.checkNodeIsLast(a[0]); var d = $(">ul >.line-last", c); if (d.size() > 0) { k.moveNodeToLine(d[0]) } }; k.moveNodeToLine = function (g) { k.checkNodeIsLast(a[0]); k.checkLineIsLast(g); var c = $(a).parents("li:first"); var d = $(a).prev(".line"); $(g).before(a); $(a).before(d); g.className = g.className.replace("-over", ""); var e = $(">ul >li", c).not(".line, .line-last").filter(":visible").size(); if (k.option.docToFolderConvert && e == 0) { k.convertToDoc(c) } else { if (e == 0) { c[0].className = c[0].className.replace("open", "close"); $(">ul", c).hide() } } if ($("span:first", a).attr("class") == "text") { $(".active", k).attr("class", "text"); $("span:first", a).attr("class", "active") } if (typeof (k.option.afterMove) == "function") { var f = $(a).prevAll(":not(.line)").size(); k.option.afterMove($(g).parents("li:first"), $(a), f) } }; k.addNode = function (f, d, c) { var e = $('<li><ul><li id="' + f + '"><span>' + d + "</span></li></ul></li>"); k.setTreeNodes(e); p = k.getSelected(); a = $(".doc-last", e); k.moveNodeToFolder(p); e.remove(); if (typeof (c) == "function") { c(p, a) } }; k.delNode = function (c) { a = k.getSelected(); k.checkNodeIsLast(a[0]); a.prev().remove(); a.remove(); if (typeof (c) == "function") { c(p) } }; k.init = function (c) { k.setTreeNodes(c, false) }; k.init(m) }) }; (function (j) { var h = [], k = /^url\(["']?([^"'\)]*)["']?\);?$/i, l = /\.png$/i, g = !!window.createPopup && document.documentElement.currentStyle.minWidth == "undefined"; function i() { j.each(h, function () { this.refresh(true) }) } j(window).resize(i); j.Poshytip = function (a, b) { this.$elm = j(a); this.opts = j.extend({}, j.fn.poshytip.defaults, b); this.$tip = j(['<div class="', this.opts.className, '">', '<div class="tip-inner tip-bg-image"></div>', '<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>', "</div>"].join("")).appendTo(document.body); this.$arrow = this.$tip.find("div.tip-arrow"); this.$inner = this.$tip.find("div.tip-inner"); this.disabled = false; this.content = null; this.init() }; j.Poshytip.prototype = { init: function () { h.push(this); var a = this.$elm.attr("title"); this.$elm.data("title.poshytip", a !== undefined ? a : null).data("poshytip", this); if (this.opts.showOn != "none") { this.$elm.bind({ "mouseenter.poshytip": j.proxy(this.mouseenter, this), "mouseleave.poshytip": j.proxy(this.mouseleave, this) }); switch (this.opts.showOn) { case "hover": if (this.opts.alignTo == "cursor") { this.$elm.bind("mousemove.poshytip", j.proxy(this.mousemove, this)) } if (this.opts.allowTipHover) { this.$tip.hover(j.proxy(this.clearTimeouts, this), j.proxy(this.mouseleave, this)) } break; case "focus": this.$elm.bind({ "focus.poshytip": j.proxy(this.showDelayed, this), "blur.poshytip": j.proxy(this.hideDelayed, this) }); break } } }, mouseenter: function (a) { if (this.disabled) { return true } this.$elm.attr("title", ""); if (this.opts.showOn == "focus") { return true } this.showDelayed() }, mouseleave: function (b) { if (this.disabled || this.asyncAnimating && (this.$tip[0] === b.relatedTarget || jQuery.contains(this.$tip[0], b.relatedTarget))) { return true } if (!this.$tip.data("active")) { var a = this.$elm.data("title.poshytip"); if (a !== null) { this.$elm.attr("title", a) } } if (this.opts.showOn == "focus") { return true } this.hideDelayed() }, mousemove: function (a) { if (this.disabled) { return true } this.eventX = a.pageX; this.eventY = a.pageY; if (this.opts.followCursor && this.$tip.data("active")) { this.calcPos(); this.$tip.css({ left: this.pos.l, top: this.pos.t }); if (this.pos.arrow) { this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow } } }, show: function () { if (this.disabled || this.$tip.data("active")) { return } this.reset(); this.update(); if (!this.content) { return } this.display(); if (this.opts.timeOnScreen) { this.hideDelayed(this.opts.timeOnScreen) } }, showDelayed: function (a) { this.clearTimeouts(); this.showTimeout = setTimeout(j.proxy(this.show, this), typeof a == "number" ? a : this.opts.showTimeout) }, hide: function () { if (this.disabled || !this.$tip.data("active")) { return } this.display(true) }, hideDelayed: function (a) { this.clearTimeouts(); this.hideTimeout = setTimeout(j.proxy(this.hide, this), typeof a == "number" ? a : this.opts.hideTimeout) }, reset: function () { this.$tip.queue([]).detach().css("visibility", "hidden").data("active", false); this.$inner.find("*").poshytip("hide"); if (this.opts.fade) { this.$tip.css("opacity", this.opacity) } this.$arrow[0].className = "tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"; this.asyncAnimating = false }, update: function (b, a) { if (this.disabled) { return } var c = b !== undefined; if (c) { if (!a) { this.opts.content = b } if (!this.$tip.data("active")) { return } } else { b = this.opts.content } var d = this, e = typeof b == "function" ? b.call(this.$elm[0], function (f) { d.update(f) }) : b == "[title]" ? this.$elm.data("title.poshytip") : b; if (this.content !== e) { this.$inner.empty().append(e); this.content = e } this.refresh(c) }, refresh: function (s) { if (this.disabled) { return } if (s) { if (!this.$tip.data("active")) { return } var f = { left: this.$tip.css("left"), top: this.$tip.css("top") } } this.$tip.css({ left: 0, top: 0 }).appendTo(document.body); if (this.opacity === undefined) { this.opacity = this.$tip.css("opacity") } var e = this.$tip.css("background-image").match(k), d = this.$arrow.css("background-image").match(k); if (e) { var r = l.test(e[1]); if (g && r) { this.$tip.css("background-image", "none"); this.$inner.css({ margin: 0, border: 0, padding: 0 }); e = r = false } else { this.$tip.prepend('<table class="tip-table" border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({ border: 0, padding: 0, "background-image": "none", "background-color": "transparent" }).find(".tip-bg-image").css("background-image", 'url("' + e[1] + '")').end().find("td").eq(3).append(this.$inner) } if (r && !j.support.opacity) { this.opts.fade = false } } if (d && !j.support.opacity) { if (g && l.test(d[1])) { d = false; this.$arrow.css("background-image", "none") } this.opts.fade = false } var b = this.$tip.find("> table.tip-table"); if (g) { this.$tip[0].style.width = ""; b.width("auto").find("td").eq(3).width("auto"); var c = this.$tip.width(), q = parseInt(this.$tip.css("min-width")), t = parseInt(this.$tip.css("max-width")); if (!isNaN(q) && c < q) { c = q } else { if (!isNaN(t) && c > t) { c = t } } this.$tip.add(b).width(c).eq(0).find("td").eq(3).width("100%") } else { if (b[0]) { b.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find("td").eq(3).width("100%") } } this.tipOuterW = this.$tip.outerWidth(); this.tipOuterH = this.$tip.outerHeight(); this.calcPos(); if (d && this.pos.arrow) { this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow; this.$arrow.css("visibility", "inherit") } if (s && this.opts.refreshAniDuration) { this.asyncAnimating = true; var a = this; this.$tip.css(f).animate({ left: this.pos.l, top: this.pos.t }, this.opts.refreshAniDuration, function () { a.asyncAnimating = false }) } else { this.$tip.css({ left: this.pos.l, top: this.pos.t }) } }, display: function (f) { var e = this.$tip.data("active"); if (e && !f || !e && f) { return } this.$tip.stop(); if ((this.opts.slide && this.pos.arrow || this.opts.fade) && (f && this.opts.hideAniDuration || !f && this.opts.showAniDuration)) { var p = {}, a = {}; if (this.opts.slide && this.pos.arrow) { var b, o; if (this.pos.arrow == "bottom" || this.pos.arrow == "top") { b = "top"; o = "bottom" } else { b = "left"; o = "right" } var c = parseInt(this.$tip.css(b)); p[b] = c + (f ? 0 : (this.pos.arrow == o ? -this.opts.slideOffset : this.opts.slideOffset)); a[b] = c + (f ? (this.pos.arrow == o ? this.opts.slideOffset : -this.opts.slideOffset) : 0) + "px" } if (this.opts.fade) { p.opacity = f ? this.$tip.css("opacity") : 0; a.opacity = f ? 0 : this.opacity } this.$tip.css(p).animate(a, this.opts[f ? "hideAniDuration" : "showAniDuration"]) } f ? this.$tip.queue(j.proxy(this.reset, this)) : this.$tip.css("visibility", "inherit"); if (e) { var d = this.$elm.data("title.poshytip"); if (d !== null) { this.$elm.attr("title", d) } } this.$tip.data("active", !e) }, disable: function () { this.reset(); this.disabled = true }, enable: function () { this.disabled = false }, destroy: function () { this.reset(); this.$tip.remove(); delete this.$tip; this.content = null; this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip"); h.splice(j.inArray(this, h), 1) }, clearTimeouts: function () { if (this.showTimeout) { clearTimeout(this.showTimeout); this.showTimeout = 0 } if (this.hideTimeout) { clearTimeout(this.hideTimeout); this.hideTimeout = 0 } }, calcPos: function () { var d = { l: 0, t: 0, arrow: "" }, u = j(window), r = { l: u.scrollLeft(), t: u.scrollTop(), w: u.width(), h: u.height() }, b, s, e, t, a, v; if (this.opts.alignTo == "cursor") { b = s = e = this.eventX; t = a = v = this.eventY } else { var c = this.$elm.offset(), f = { l: c.left, t: c.top, w: this.$elm.outerWidth(), h: this.$elm.outerHeight() }; b = f.l + (this.opts.alignX != "inner-right" ? 0 : f.w); s = b + Math.floor(f.w / 2); e = b + (this.opts.alignX != "inner-left" ? f.w : 0); t = f.t + (this.opts.alignY != "inner-bottom" ? 0 : f.h); a = t + Math.floor(f.h / 2); v = t + (this.opts.alignY != "inner-top" ? f.h : 0) } switch (this.opts.alignX) { case "right": case "inner-left": d.l = e + this.opts.offsetX; if (this.opts.keepInViewport && d.l + this.tipOuterW > r.l + r.w) { d.l = r.l + r.w - this.tipOuterW } if (this.opts.alignX == "right" || this.opts.alignY == "center") { d.arrow = "left" } break; case "center": d.l = s - Math.floor(this.tipOuterW / 2); if (this.opts.keepInViewport) { if (d.l + this.tipOuterW > r.l + r.w) { d.l = r.l + r.w - this.tipOuterW } else { if (d.l < r.l) { d.l = r.l } } } break; default: d.l = b - this.tipOuterW - this.opts.offsetX; if (this.opts.keepInViewport && d.l < r.l) { d.l = r.l } if (this.opts.alignX == "left" || this.opts.alignY == "center") { d.arrow = "right" } } switch (this.opts.alignY) { case "bottom": case "inner-top": d.t = v + this.opts.offsetY; if (!d.arrow || this.opts.alignTo == "cursor") { d.arrow = "top" } if (this.opts.keepInViewport && d.t + this.tipOuterH > r.t + r.h) { d.t = t - this.tipOuterH - this.opts.offsetY; if (d.arrow == "top") { d.arrow = "bottom" } } break; case "center": d.t = a - Math.floor(this.tipOuterH / 2); if (this.opts.keepInViewport) { if (d.t + this.tipOuterH > r.t + r.h) { d.t = r.t + r.h - this.tipOuterH } else { if (d.t < r.t) { d.t = r.t } } } break; default: d.t = t - this.tipOuterH - this.opts.offsetY; if (!d.arrow || this.opts.alignTo == "cursor") { d.arrow = "bottom" } if (this.opts.keepInViewport && d.t < r.t) { d.t = v + this.opts.offsetY; if (d.arrow == "bottom") { d.arrow = "top" } } } this.pos = d } }; j.fn.poshytip = function (e) { if (typeof e == "string") { var f = arguments, a = e; Array.prototype.shift.call(f); if (a == "destroy") { this.die ? this.die("mouseenter.poshytip").die("focus.poshytip") : j(document).undelegate(this.selector, "mouseenter.poshytip").undelegate(this.selector, "focus.poshytip") } return this.each(function () { var n = j(this).data("poshytip"); if (n && n[a]) { n[a].apply(n, f) } }) } var c = j.extend({}, j.fn.poshytip.defaults, e); if (!j("#poshytip-css-" + c.className)[0]) { j(['<style id="poshytip-css-', c.className, '" type="text/css">', "div.", c.className, "{visibility:hidden;position:absolute;top:0;left:0;}", "div.", c.className, " table.tip-table, div.", c.className, " table.tip-table td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;vertical-align:middle;}", "div.", c.className, " td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:", c.bgImageFrameSize, "px;width:", c.bgImageFrameSize, "px;overflow:hidden;}", "div.", c.className, " td.tip-right{background-position:100% 0;}", "div.", c.className, " td.tip-bottom{background-position:100% 100%;}", "div.", c.className, " td.tip-left{background-position:0 100%;}", "div.", c.className, " div.tip-inner{background-position:-", c.bgImageFrameSize, "px -", c.bgImageFrameSize, "px;}", "div.", c.className, " div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}", "</style>"].join("")).appendTo("head") } if (c.liveEvents && c.showOn != "none") { var d, b = j.extend({}, c, { liveEvents: false }); switch (c.showOn) { case "hover": d = function () { var n = j(this); if (!n.data("poshytip")) { n.poshytip(b).poshytip("mouseenter") } }; this.live ? this.live("mouseenter.poshytip", d) : j(document).delegate(this.selector, "mouseenter.poshytip", d); break; case "focus": d = function () { var n = j(this); if (!n.data("poshytip")) { n.poshytip(b).poshytip("showDelayed") } }; this.live ? this.live("focus.poshytip", d) : j(document).delegate(this.selector, "focus.poshytip", d); break } return this } return this.each(function () { new j.Poshytip(this, c) }) }; j.fn.poshytip.defaults = { content: "[title]", className: "tip-yellow", bgImageFrameSize: 10, showTimeout: 500, hideTimeout: 100, timeOnScreen: 0, showOn: "hover", liveEvents: false, alignTo: "cursor", alignX: "right", alignY: "top", offsetX: -22, offsetY: 18, keepInViewport: true, allowTipHover: true, followCursor: false, fade: true, slide: true, slideOffset: 8, showAniDuration: 300, hideAniDuration: 300, refreshAniDuration: 200 } })(jQuery);
/* layer-v2.0 */
; !function (a, b) { "use strict"; var c, d, e = { getPath: function () { var a = document.scripts, b = a[a.length - 1], c = b.src; if (!b.getAttribute("merge")) return c.substring(0, c.lastIndexOf("/") + 1) }(), enter: function (a) { 13 === a.keyCode && a.preventDefault() }, config: {}, end: {}, btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"], type: ["dialog", "page", "iframe", "loading", "tips"] }, f = { v: "2.0", ie6: !!a.ActiveXObject && !a.XMLHttpRequest, index: 0, path: e.getPath, config: function (a, b) { var d = 0; return a = a || {}, f.cache = e.config = c.extend(e.config, a), f.path = e.config.path || f.path, "string" == typeof a.extend && (a.extend = [a.extend]), f.use("../js/layui/css/layer.css", a.extend && a.extend.length > 0 ? function g() { var c = a.extend; f.use(c[c[d] ? d : d - 1], d < c.length ? function () { return ++d, g }() : b) }() : b), this }, use: function (a, b, d) { var e = c("head")[0], a = a.replace(/\s/g, ""), g = /\.css$/.test(a), h = document.createElement(g ? "link" : "script"), i = "layui_layer_" + a.replace(/\.|\//g, ""); return f.path ? (g && (h.rel = "stylesheet"), h[g ? "href" : "src"] = /^http:\/\//.test(a) ? a : f.path + a, h.id = i, c("#" + i)[0] || e.appendChild(h), function j() { (g ? 1989 === parseInt(c("#" + i).css("width")) : f[d || i]) ? function () { b && b(); try { g || e.removeChild(h) } catch (a) { } }() : setTimeout(j, 100) }(), this) : void 0 }, ready: function (a, b) { var d = "function" == typeof a; return d && (b = a), f.config(c.extend(e.config, function () { return d ? {} : { path: a } }()), b), this }, alert: function (a, b, d) { var e = "function" == typeof b; return e && (d = b), f.open(c.extend({ content: a, yes: d }, e ? {} : b)) }, confirm: function (a, b, d, g) { var h = "function" == typeof b; return h && (g = d, d = b), f.open(c.extend({ content: a, btn: e.btn, yes: d, cancel: g }, h ? {} : b)) }, msg: function (a, d, g) { var i = "function" == typeof d, j = e.config.skin, k = (j ? j + " " + j + "-msg" : "") || "layui-layer-msg", l = h.anim.length - 1; return i && (g = d), f.open(c.extend({ content: a, time: 3e3, shade: !1, skin: k, title: !1, closeBtn: !1, btn: !1, end: g }, i && !e.config.skin ? { skin: k + " layui-layer-hui", shift: l } : function () { return d = d || {}, (-1 === d.icon || d.icon === b && !e.config.skin) && (d.skin = k + " " + (d.skin || "layui-layer-hui")), d }())) }, load: function (a, b) { return f.open(c.extend({ type: 3, icon: a || 0, shade: .01 }, b)) }, tips: function (a, b, d) { return f.open(c.extend({ type: 4, content: [a, b], closeBtn: !1, time: 3e3, maxWidth: 210 }, d)) } }, g = function (a) { var b = this; b.index = ++f.index, b.config = c.extend({}, b.config, e.config, a), b.creat() }; g.pt = g.prototype; var h = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"]; h.anim = ["layui-anim", "layui-anim-01", "layui-anim-02", "layui-anim-03", "layui-anim-04", "layui-anim-05", "layui-anim-06"], g.pt.config = { type: 0, shade: .3, fix: !0, move: h[1], title: "&#x4FE1;&#x606F;", offset: "auto", area: "auto", closeBtn: 1, time: 0, zIndex: 19891014, maxWidth: 360, shift: 0, icon: -1, scrollbar: !0, tips: 2 }, g.pt.vessel = function (a, b) { var c = this, d = c.index, f = c.config, g = f.zIndex + d, i = "object" == typeof f.title, j = f.maxmin && (1 === f.type || 2 === f.type), k = f.title ? '<div class="layui-layer-title" style="' + (i ? f.title[1] : "") + '">' + (i ? f.title[0] : f.title) + "</div>" : ""; return f.zIndex = g, b([f.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + d + '" times="' + d + '" style="' + ("z-index:" + (g - 1) + "; background-color:" + (f.shade[1] || "#000") + "; opacity:" + (f.shade[0] || f.shade) + "; filter:alpha(opacity=" + (100 * f.shade[0] || 100 * f.shade) + ");") + '"></div>' : "", '<div class="' + h[0] + " " + (h.anim[f.shift] || "") + (" layui-layer-" + e.type[f.type]) + (0 != f.type && 2 != f.type || f.shade ? "" : " layui-layer-border") + " " + (f.skin || "") + '" id="' + h[0] + d + '" type="' + e.type[f.type] + '" times="' + d + '" showtime="' + f.time + '" conType="' + (a ? "object" : "string") + '" style="z-index: ' + g + "; width:" + f.area[0] + ";height:" + f.area[1] + (f.fix ? "" : ";position:absolute;") + '">' + (a && 2 != f.type ? "" : k) + '<div class="layui-layer-content' + (0 == f.type && -1 !== f.icon ? " layui-layer-padding" : "") + (3 == f.type ? " layui-layer-loading" + f.icon : "") + '">' + (0 == f.type && -1 !== f.icon ? '<i class="layui-layer-ico layui-layer-ico' + f.icon + '"></i>' : "") + (1 == f.type && a ? "" : f.content || "") + '</div><span class="layui-layer-setwin">' + function () { var a = j ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : ""; return f.closeBtn && (a += '<a class="layui-layer-ico ' + h[7] + " " + h[7] + (f.title ? f.closeBtn : 4 == f.type ? "1" : "2") + '" href="javascript:;"></a>'), a }() + "</span>" + (f.btn ? function () { var a = ""; "string" == typeof f.btn && (f.btn = [f.btn]); for (var b = 0, c = f.btn.length; c > b; b++) a += '<a class="' + h[6] + b + '">' + f.btn[b] + "</a>"; return '<div class="' + h[6] + '">' + a + "</div>" }() : "") + "</div>"], k), c }, g.pt.creat = function () { var a = this, b = a.config, g = a.index, i = b.content, j = "object" == typeof i; switch ("string" == typeof b.area && (b.area = "auto" === b.area ? ["", ""] : [b.area, ""]), b.type) { case 0: b.btn = "btn" in b ? b.btn : e.btn[0], f.closeAll("dialog"); break; case 2: var i = b.content = j ? b.content : [b.content || "http://sentsin.com?from=layer", "auto"]; b.content = '<iframe scrolling="' + (b.content[1] || "auto") + '" allowtransparency="true" id="' + h[4] + g + '" name="' + h[4] + g + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + b.content[0] + '"></iframe>'; break; case 3: b.title = !1, b.closeBtn = !1, -1 === b.icon && 0 === b.icon, f.closeAll("loading"); break; case 4: j || (b.content = [b.content, "body"]), b.follow = b.content[1], b.content = b.content[0] + '<i class="layui-layer-TipsG"></i>', b.title = !1, b.shade = !1, b.fix = !1, b.tips = "object" == typeof b.tips ? b.tips : [b.tips, !0], b.tipsMore || f.closeAll("tips") } a.vessel(j, function (d, e) { c("body").append(d[0]), j ? function () { 2 == b.type || 4 == b.type ? function () { c("body").append(d[1]) }() : function () { i.parents("." + h[0])[0] || (i.show().addClass("layui-layer-wrap").wrap(d[1]), c("#" + h[0] + g).find("." + h[5]).before(e)) }() }() : c("body").append(d[1]), a.layero = c("#" + h[0] + g), b.scrollbar || h.html.css("overflow", "hidden").attr("layer-full", g) }).auto(g), 2 == b.type && f.ie6 && a.layero.find("iframe").attr("src", i[0]), c(document).off("keydown", e.enter).on("keydown", e.enter), 4 == b.type ? a.tips() : a.offset(), b.fix && d.on("resize", function () { a.offset(), (/^\d+%$/.test(b.area[0]) || /^\d+%$/.test(b.area[1])) && a.auto(g), 4 == b.type && a.tips() }), b.time <= 0 || setTimeout(function () { f.close(a.index) }, b.time), a.move().callback() }, g.pt.auto = function (a) { function b(a) { a = g.find(a), a.height(i[1] - j - k - 2 * (0 | parseFloat(a.css("padding")))) } var e = this, f = e.config, g = c("#" + h[0] + a); "" === f.area[0] && f.maxWidth > 0 && (/MSIE 7/.test(navigator.userAgent) && f.btn && g.width(g.innerWidth()), g.outerWidth() > f.maxWidth && g.width(f.maxWidth)); var i = [g.innerWidth(), g.innerHeight()], j = g.find(h[1]).outerHeight() || 0, k = g.find("." + h[6]).outerHeight() || 0; switch (f.type) { case 2: b("iframe"); break; default: "" === f.area[1] ? f.fix && i[1] >= d.height() && (i[1] = d.height(), b("." + h[5])) : b("." + h[5]) } return e }, g.pt.offset = function () { var a = this, b = a.config, c = a.layero, e = [c.outerWidth(), c.outerHeight()], f = "object" == typeof b.offset; a.offsetTop = (d.height() - e[1]) / 2, a.offsetLeft = (d.width() - e[0]) / 2, f ? (a.offsetTop = b.offset[0], a.offsetLeft = b.offset[1] || a.offsetLeft) : "auto" !== b.offset && (a.offsetTop = b.offset, "rb" === b.offset && (a.offsetTop = d.height() - e[1], a.offsetLeft = d.width() - e[0])), b.fix || (a.offsetTop = /%$/.test(a.offsetTop) ? d.height() * parseFloat(a.offsetTop) / 100 : parseFloat(a.offsetTop), a.offsetLeft = /%$/.test(a.offsetLeft) ? d.width() * parseFloat(a.offsetLeft) / 100 : parseFloat(a.offsetLeft), a.offsetTop += d.scrollTop(), a.offsetLeft += d.scrollLeft()), c.css({ top: a.offsetTop, left: a.offsetLeft }) }, g.pt.tips = function () { var a = this, b = a.config, e = a.layero, f = [e.outerWidth(), e.outerHeight()], g = c(b.follow); g[0] || (g = c("body")); var i = { width: g.outerWidth(), height: g.outerHeight(), top: g.offset().top, left: g.offset().left }, j = e.find(".layui-layer-TipsG"), k = b.tips[0]; b.tips[1] || j.remove(), i.autoLeft = function () { i.left + f[0] - d.width() > 0 ? (i.tipLeft = i.left + i.width - f[0], j.css({ right: 12, left: "auto" })) : i.tipLeft = i.left }, i.where = [function () { i.autoLeft(), i.tipTop = i.top - f[1] - 10, j.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", b.tips[1]) }, function () { i.tipLeft = i.left + i.width + 10, i.tipTop = i.top, j.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", b.tips[1]) }, function () { i.autoLeft(), i.tipTop = i.top + i.height + 10, j.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", b.tips[1]) }, function () { i.tipLeft = i.left - f[0] - 10, i.tipTop = i.top, j.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", b.tips[1]) }], i.where[k - 1](), 1 === k ? i.top - (d.scrollTop() + f[1] + 16) < 0 && i.where[2]() : 2 === k ? d.width() - (i.left + i.width + f[0] + 16) > 0 || i.where[3]() : 3 === k ? i.top - d.scrollTop() + i.height + f[1] + 16 - d.height() > 0 && i.where[0]() : 4 === k && f[0] + 16 - i.left > 0 && i.where[1](), e.find("." + h[5]).css({ "background-color": b.tips[1], "padding-right": b.closeBtn ? "30px" : "" }), e.css({ left: i.tipLeft, top: i.tipTop }) }, g.pt.move = function () { var a = this, b = a.config, e = { setY: 0, moveLayer: function () { var a = e.layero, b = parseInt(a.css("margin-left")), c = parseInt(e.move.css("left")); 0 === b || (c -= b), "fixed" !== a.css("position") && (c -= a.parent().offset().left, e.setY = 0), a.css({ left: c, top: parseInt(e.move.css("top")) - e.setY }) } }, f = a.layero.find(b.move); return b.move && f.attr("move", "ok"), f.css({ cursor: b.move ? "move" : "auto" }), c(b.move).on("mousedown", function (a) { if (a.preventDefault(), "ok" === c(this).attr("move")) { e.ismove = !0, e.layero = c(this).parents("." + h[0]); var f = e.layero.offset().left, g = e.layero.offset().top, i = e.layero.outerWidth() - 6, j = e.layero.outerHeight() - 6; c("#layui-layer-moves")[0] || c("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:' + f + "px; top:" + g + "px; width:" + i + "px; height:" + j + 'px; z-index:2147483584"></div>'), e.move = c("#layui-layer-moves"), b.moveType && e.move.css({ visibility: "hidden" }), e.moveX = a.pageX - e.move.position().left, e.moveY = a.pageY - e.move.position().top, "fixed" !== e.layero.css("position") || (e.setY = d.scrollTop()) } }), c(document).mousemove(function (a) { if (e.ismove) { var c = a.pageX - e.moveX, f = a.pageY - e.moveY; if (a.preventDefault(), !b.moveOut) { e.setY = d.scrollTop(); var g = d.width() - e.move.outerWidth(), h = e.setY; 0 > c && (c = 0), c > g && (c = g), h > f && (f = h), f > d.height() - e.move.outerHeight() + e.setY && (f = d.height() - e.move.outerHeight() + e.setY) } e.move.css({ left: c, top: f }), b.moveType && e.moveLayer(), c = f = g = h = null } }).mouseup(function () { try { e.ismove && (e.moveLayer(), e.move.remove(), b.moveEnd && b.moveEnd()), e.ismove = !1 } catch (a) { e.ismove = !1 } }), a }, g.pt.callback = function () { function a() { var a = g.cancel && g.cancel(b.index); a === !1 || f.close(b.index) } var b = this, d = b.layero, g = b.config; b.openLayer(), g.success && (2 == g.type ? d.find("iframe")[0].onload = function () { this.className = "", g.success(d, b.index) } : g.success(d, b.index)), f.ie6 && b.IE6(d), d.find("." + h[6]).children("a").on("click", function () { var e = c(this).index(); g["btn" + (e + 1)] && g["btn" + (e + 1)](b.index, d), 0 === e ? g.yes ? g.yes(b.index, d) : f.close(b.index) : 1 === e ? a() : g["btn" + (e + 1)] || f.close(b.index) }), d.find("." + h[7]).on("click", a), g.shadeClose && c("#layui-layer-shade" + b.index).on("click", function () { f.close(b.index) }), d.find(".layui-layer-min").on("click", function () { f.min(b.index, g), g.min && g.min(d) }), d.find(".layui-layer-max").on("click", function () { c(this).hasClass("layui-layer-maxmin") ? (f.restore(b.index), g.restore && g.restore(d)) : (f.full(b.index, g), g.full && g.full(d)) }), g.end && (e.end[b.index] = g.end) }, e.reselect = function () { c.each(c("select"), function (a, b) { var d = c(this); d.parents("." + h[0])[0] || 1 == d.attr("layer") && c("." + h[0]).length < 1 && d.removeAttr("layer").show(), d = null }) }, g.pt.IE6 = function (a) { function b() { a.css({ top: f + (e.config.fix ? d.scrollTop() : 0) }) } var e = this, f = a.offset().top; b(), d.scroll(b), c("select").each(function (a, b) { var d = c(this); d.parents("." + h[0])[0] || "none" === d.css("display") || d.attr({ layer: "1" }).hide(), d = null }) }, g.pt.openLayer = function () { var a = this; f.zIndex = a.config.zIndex, f.setTop = function (a) { var b = function () { f.zIndex++, a.css("z-index", f.zIndex + 1) }; return f.zIndex = parseInt(a[0].style.zIndex), a.on("mousedown", b), f.zIndex } }, e.record = function (a) { var b = [a.outerWidth(), a.outerHeight(), a.position().top, a.position().left + parseFloat(a.css("margin-left"))]; a.find(".layui-layer-max").addClass("layui-layer-maxmin"), a.attr({ area: b }) }, e.rescollbar = function (a) { h.html.attr("layer-full") == a && (h.html[0].style.removeProperty ? h.html[0].style.removeProperty("overflow") : h.html[0].style.removeAttribute("overflow"), h.html.removeAttr("layer-full")) }, f.getChildFrame = function (a, b) { return b = b || c("." + h[4]).attr("times"), c("#" + h[0] + b).find("iframe").contents().find(a) }, f.getFrameIndex = function (a) { return c("#" + a).parents("." + h[4]).attr("times") }, f.iframeAuto = function (a) { if (a) { var b = f.getChildFrame("body", a).outerHeight(), d = c("#" + h[0] + a), e = d.find(h[1]).outerHeight() || 0, g = d.find("." + h[6]).outerHeight() || 0; d.css({ height: b + e + g }), d.find("iframe").css({ height: b }) } }, f.iframeSrc = function (a, b) { c("#" + h[0] + a).find("iframe").attr("src", b) }, f.style = function (a, b) { var d = c("#" + h[0] + a), f = d.attr("type"), g = d.find(h[1]).outerHeight() || 0, i = d.find("." + h[6]).outerHeight() || 0; (f === e.type[1] || f === e.type[2]) && (d.css(b), f === e.type[2] && d.find("iframe").css({ height: parseFloat(b.height) - g - i })) }, f.min = function (a, b) { var d = c("#" + h[0] + a), g = d.find(h[1]).outerHeight() || 0; e.record(d), f.style(a, { width: 180, height: g, overflow: "hidden" }), d.find(".layui-layer-min").hide(), "page" === d.attr("type") && d.find(h[4]).hide(), e.rescollbar(a) }, f.restore = function (a) { var b = c("#" + h[0] + a), d = b.attr("area").split(","); b.attr("type"); f.style(a, { width: parseFloat(d[0]), height: parseFloat(d[1]), top: parseFloat(d[2]), left: parseFloat(d[3]), overflow: "visible" }), b.find(".layui-layer-max").removeClass("layui-layer-maxmin"), b.find(".layui-layer-min").show(), "page" === b.attr("type") && b.find(h[4]).show(), e.rescollbar(a) }, f.full = function (a) { var b, g = c("#" + h[0] + a); e.record(g), h.html.attr("layer-full") || h.html.css("overflow", "hidden").attr("layer-full", a), clearTimeout(b), b = setTimeout(function () { var b = "fixed" === g.css("position"); f.style(a, { top: b ? 0 : d.scrollTop(), left: b ? 0 : d.scrollLeft(), width: d.width(), height: d.height() }), g.find(".layui-layer-min").hide() }, 100) }, f.title = function (a, b) { var d = c("#" + h[0] + (b || f.index)).find(h[1]); d.html(a) }, f.close = function (a) { var b = c("#" + h[0] + a), d = b.attr("type"); if (b[0]) { if (d === e.type[1] && "object" === b.attr("conType")) { b.children(":not(." + h[5] + ")").remove(); for (var g = 0; 2 > g; g++) b.find(".layui-layer-wrap").unwrap().hide() } else { if (d === e.type[2]) try { var i = c("#" + h[4] + a)[0]; i.contentWindow.document.write(""), i.contentWindow.close(), b.find("." + h[5])[0].removeChild(i) } catch (j) { } b[0].innerHTML = "", b.remove() } c("#layui-layer-moves, #layui-layer-shade" + a).remove(), f.ie6 && e.reselect(), e.rescollbar(a), c(document).off("keydown", e.enter), "function" == typeof e.end[a] && e.end[a](), delete e.end[a] } }, f.closeAll = function (a) { c.each(c("." + h[0]), function () { var b = c(this), d = a ? b.attr("type") === a : 1; d && f.close(b.attr("times")), d = null }) }, e.run = function () { c = jQuery, d = c(a), h.html = c("html"), f.open = function (a) { var b = new g(a); return b.index } }, "function" == typeof define ? define(function () { return e.run(), f }) : function () { a.layer = f, e.run(), f.use("skin/layer.css") }() }(window);
/* ! jQuery UI Core 1.10.3 http://jqueryui.com/ */
(function (f, d) { var e = 0, c = /^ui-id-\d+$/; f.ui = f.ui || {}; f.extend(f.ui, { version: "1.10.3", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }); f.fn.extend({ focus: (function (g) { return function (i, h) { return typeof i === "number" ? this.each(function () { var j = this; setTimeout(function () { f(j).focus(); if (h) { h.call(j) } }, i) }) : g.apply(this, arguments) } })(f.fn.focus), scrollParent: function () { var g; if ((f.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) { g = this.parents().filter(function () { return (/(relative|absolute|fixed)/).test(f.css(this, "position")) && (/(auto|scroll)/).test(f.css(this, "overflow") + f.css(this, "overflow-y") + f.css(this, "overflow-x")) }).eq(0) } else { g = this.parents().filter(function () { return (/(auto|scroll)/).test(f.css(this, "overflow") + f.css(this, "overflow-y") + f.css(this, "overflow-x")) }).eq(0) } return (/fixed/).test(this.css("position")) || !g.length ? f(document) : g }, zIndex: function (h) { if (h !== d) { return this.css("zIndex", h) } if (this.length) { var j = f(this[0]), i, g; while (j.length && j[0] !== document) { i = j.css("position"); if (i === "absolute" || i === "relative" || i === "fixed") { g = parseInt(j.css("zIndex"), 10); if (!isNaN(g) && g !== 0) { return g } } j = j.parent() } } return 0 }, uniqueId: function () { return this.each(function () { if (!this.id) { this.id = "ui-id-" + (++e) } }) }, removeUniqueId: function () { return this.each(function () { if (c.test(this.id)) { f(this).removeAttr("id") } }) } }); function b(k, i) { var g, l, j, h = k.nodeName.toLowerCase(); if ("area" === h) { g = k.parentNode; l = g.name; if (!k.href || !l || g.nodeName.toLowerCase() !== "map") { return false } j = f("img[usemap=#" + l + "]")[0]; return !!j && a(j) } return (/input|select|textarea|button|object/.test(h) ? !k.disabled : "a" === h ? k.href || i : i) && a(k) } function a(g) { return f.expr.filters.visible(g) && !f(g).parents().addBack().filter(function () { return f.css(this, "visibility") === "hidden" }).length } f.extend(f.expr[":"], { data: f.expr.createPseudo ? f.expr.createPseudo(function (g) { return function (h) { return !!f.data(h, g) } }) : function (h, g, i) { return !!f.data(h, i[3]) }, focusable: function (g) { return b(g, !isNaN(f.attr(g, "tabindex"))) }, tabbable: function (h) { var i = f.attr(h, "tabindex"), g = isNaN(i); return (g || i >= 0) && b(h, !g) } }); if (!f("<a>").outerWidth(1).jquery) { f.each(["Width", "Height"], function (k, i) { var j = i === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], l = i.toLowerCase(), h = { innerWidth: f.fn.innerWidth, innerHeight: f.fn.innerHeight, outerWidth: f.fn.outerWidth, outerHeight: f.fn.outerHeight }; function g(p, o, n, t) { f.each(j, function () { o -= parseFloat(f.css(p, "padding" + this)) || 0; if (n) { o -= parseFloat(f.css(p, "border" + this + "Width")) || 0 } if (t) { o -= parseFloat(f.css(p, "margin" + this)) || 0 } }); return o } f.fn["inner" + i] = function (n) { if (n === d) { return h["inner" + i].call(this) } return this.each(function () { f(this).css(l, g(this, n) + "px") }) }; f.fn["outer" + i] = function (n, p) { if (typeof n !== "number") { return h["outer" + i].call(this, n) } return this.each(function () { f(this).css(l, g(this, n, true, p) + "px") }) } }) } if (!f.fn.addBack) { f.fn.addBack = function (g) { return this.add(g == null ? this.prevObject : this.prevObject.filter(g)) } } if (f("<a>").data("a-b", "a").removeData("a-b").data("a-b")) { f.fn.removeData = (function (g) { return function (h) { if (arguments.length) { return g.call(this, f.camelCase(h)) } else { return g.call(this) } } })(f.fn.removeData) } f.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()); f.support.selectstart = "onselectstart" in document.createElement("div"); f.fn.extend({ disableSelection: function () { return this.bind((f.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (g) { g.preventDefault() }) }, enableSelection: function () { return this.unbind(".ui-disableSelection") } }); f.extend(f.ui, { plugin: { add: function (j, k, h) { var i, g = f.ui[j].prototype; for (i in h) { g.plugins[i] = g.plugins[i] || []; g.plugins[i].push([k, h[i]]) } }, call: function (i, k, j) { var g, h = i.plugins[k]; if (!h || !i.element[0].parentNode || i.element[0].parentNode.nodeType === 11) { return } for (g = 0; g < h.length; g++) { if (i.options[h[g][0]]) { h[g][1].apply(i.element, j) } } } }, hasScroll: function (h, j) { if (f(h).css("overflow") === "hidden") { return false } var i = (j && j === "left") ? "scrollLeft" : "scrollTop", g = false; if (h[i] > 0) { return true } h[i] = 1; g = (h[i] > 0); h[i] = 0; return g } }) })(jQuery); (function (e, c) { var d = 0, b = Array.prototype.slice, a = e.cleanData; e.cleanData = function (h) { for (var i = 0, f; (f = h[i]) != null; i++) { try { e(f).triggerHandler("remove") } catch (g) { } } a(h) }; e.widget = function (f, g, n) { var k, l, i, m, h = {}, j = f.split(".")[0]; f = f.split(".")[1]; k = j + "-" + f; if (!n) { n = g; g = e.Widget } e.expr[":"][k.toLowerCase()] = function (o) { return !!e.data(o, k) }; e[j] = e[j] || {}; l = e[j][f]; i = e[j][f] = function (o, p) { if (!this._createWidget) { return new i(o, p) } if (arguments.length) { this._createWidget(o, p) } }; e.extend(i, l, { version: n.version, _proto: e.extend({}, n), _childConstructors: [] }); m = new g(); m.options = e.widget.extend({}, m.options); e.each(n, function (p, o) { if (!e.isFunction(o)) { h[p] = o; return } h[p] = (function () { var r = function () { return g.prototype[p].apply(this, arguments) }, q = function (s) { return g.prototype[p].apply(this, s) }; return function () { var u = this._super, s = this._superApply, t; this._super = r; this._superApply = q; t = o.apply(this, arguments); this._super = u; this._superApply = s; return t } })() }); i.prototype = e.widget.extend(m, { widgetEventPrefix: l ? m.widgetEventPrefix : f }, h, { constructor: i, namespace: j, widgetName: f, widgetFullName: k }); if (l) { e.each(l._childConstructors, function (p, q) { var o = q.prototype; e.widget(o.namespace + "." + o.widgetName, i, q._proto) }); delete l._childConstructors } else { g._childConstructors.push(i) } e.widget.bridge(f, i) }; e.widget.extend = function (h) { var i = b.call(arguments, 1), f = 0, g = i.length, j, k; for (; f < g; f++) { for (j in i[f]) { k = i[f][j]; if (i[f].hasOwnProperty(j) && k !== c) { if (e.isPlainObject(k)) { h[j] = e.isPlainObject(h[j]) ? e.widget.extend({}, h[j], k) : e.widget.extend({}, k) } else { h[j] = k } } } } return h }; e.widget.bridge = function (f, h) { var g = h.prototype.widgetFullName || f; e.fn[f] = function (j) { var l = typeof j === "string", i = b.call(arguments, 1), k = this; j = !l && i.length ? e.widget.extend.apply(null, [j].concat(i)) : j; if (l) { this.each(function () { var m, n = e.data(this, g); if (!n) { return e.error("cannot call methods on " + f + " prior to initialization; attempted to call method '" + j + "'") } if (!e.isFunction(n[j]) || j.charAt(0) === "_") { return e.error("no such method '" + j + "' for " + f + " widget instance") } m = n[j].apply(n, i); if (m !== n && m !== c) { k = m && m.jquery ? k.pushStack(m.get()) : m; return false } }) } else { this.each(function () { var m = e.data(this, g); if (m) { m.option(j || {})._init() } else { e.data(this, g, new h(j, this)) } }) } return k } }; e.Widget = function () { }; e.Widget._childConstructors = []; e.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: false, create: null }, _createWidget: function (f, g) { g = e(g || this.defaultElement || this)[0]; this.element = e(g); this.uuid = d++; this.eventNamespace = "." + this.widgetName + this.uuid; this.options = e.widget.extend({}, this.options, this._getCreateOptions(), f); this.bindings = e(); this.hoverable = e(); this.focusable = e(); if (g !== this) { e.data(g, this.widgetFullName, this); this._on(true, this.element, { remove: function (h) { if (h.target === g) { this.destroy() } } }); this.document = e(g.style ? g.ownerDocument : g.document || g); this.window = e(this.document[0].defaultView || this.document[0].parentWindow) } this._create(); this._trigger("create", null, this._getCreateEventData()); this._init() }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function () { this._destroy(); this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)); this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"); this.bindings.unbind(this.eventNamespace); this.hoverable.removeClass("ui-state-hover"); this.focusable.removeClass("ui-state-focus") }, _destroy: e.noop, widget: function () { return this.element }, option: function (k, g) { var f = k, h, j, i; if (arguments.length === 0) { return e.widget.extend({}, this.options) } if (typeof k === "string") { f = {}; h = k.split("."); k = h.shift(); if (h.length) { j = f[k] = e.widget.extend({}, this.options[k]); for (i = 0; i < h.length - 1; i++) { j[h[i]] = j[h[i]] || {}; j = j[h[i]] } k = h.pop(); if (g === c) { return j[k] === c ? null : j[k] } j[k] = g } else { if (g === c) { return this.options[k] === c ? null : this.options[k] } f[k] = g } } this._setOptions(f); return this }, _setOptions: function (f) { var g; for (g in f) { this._setOption(g, f[g]) } return this }, _setOption: function (f, g) { this.options[f] = g; if (f === "disabled") { this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!g).attr("aria-disabled", g); this.hoverable.removeClass("ui-state-hover"); this.focusable.removeClass("ui-state-focus") } return this }, enable: function () { return this._setOption("disabled", false) }, disable: function () { return this._setOption("disabled", true) }, _on: function (f, j, i) { var g, h = this; if (typeof f !== "boolean") { i = j; j = f; f = false } if (!i) { i = j; j = this.element; g = this.widget() } else { j = g = e(j); this.bindings = this.bindings.add(j) } e.each(i, function (m, l) { function p() { if (!f && (h.options.disabled === true || e(this).hasClass("ui-state-disabled"))) { return } return (typeof l === "string" ? h[l] : l).apply(h, arguments) } if (typeof l !== "string") { p.guid = l.guid = l.guid || p.guid || e.guid++ } var k = m.match(/^(\w+)\s*(.*)$/), o = k[1] + h.eventNamespace, n = k[2]; if (n) { g.delegate(n, o, p) } else { j.bind(o, p) } }) }, _off: function (g, f) { f = (f || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace; g.unbind(f).undelegate(f) }, _delay: function (g, f) { function i() { return (typeof g === "string" ? h[g] : g).apply(h, arguments) } var h = this; return setTimeout(i, f || 0) }, _hoverable: function (f) { this.hoverable = this.hoverable.add(f); this._on(f, { mouseenter: function (g) { e(g.currentTarget).addClass("ui-state-hover") }, mouseleave: function (g) { e(g.currentTarget).removeClass("ui-state-hover") } }) }, _focusable: function (f) { this.focusable = this.focusable.add(f); this._on(f, { focusin: function (g) { e(g.currentTarget).addClass("ui-state-focus") }, focusout: function (g) { e(g.currentTarget).removeClass("ui-state-focus") } }) }, _trigger: function (h, i, j) { var g, f, k = this.options[h]; j = j || {}; i = e.Event(i); i.type = (h === this.widgetEventPrefix ? h : this.widgetEventPrefix + h).toLowerCase(); i.target = this.element[0]; f = i.originalEvent; if (f) { for (g in f) { if (!(g in i)) { i[g] = f[g] } } } this.element.trigger(i, j); return !(e.isFunction(k) && k.apply(this.element[0], [i].concat(j)) === false || i.isDefaultPrevented()) } }; e.each({ show: "fadeIn", hide: "fadeOut" }, function (g, f) { e.Widget.prototype["_" + g] = function (i, h, l) { if (typeof h === "string") { h = { effect: h } } var j, k = !h ? g : h === true || typeof h === "number" ? f : h.effect || f; h = h || {}; if (typeof h === "number") { h = { duration: h } } j = !e.isEmptyObject(h); h.complete = l; if (h.delay) { i.delay(h.delay) } if (j && e.effects && e.effects.effect[k]) { i[g](h) } else { if (k !== g && i[k]) { i[k](h.duration, h.easing, l) } else { i.queue(function (m) { e(this)[g](); if (l) { l.call(i[0]) } m() }) } } } }) })(jQuery); (function (h, e) { h.ui = h.ui || {}; var m, n = Math.max, f = Math.abs, b = Math.round, g = /left|center|right/, k = /top|center|bottom/, a = /[\+\-]\d+(\.[\d]+)?%?/, o = /^\w+/, d = /%$/, j = h.fn.position; function c(q, p, r) { return [parseFloat(q[0]) * (d.test(q[0]) ? p / 100 : 1), parseFloat(q[1]) * (d.test(q[1]) ? r / 100 : 1)] } function l(p, q) { return parseInt(h.css(p, q), 10) || 0 } function i(q) { var p = q[0]; if (p.nodeType === 9) { return { width: q.width(), height: q.height(), offset: { top: 0, left: 0 } } } if (h.isWindow(p)) { return { width: q.width(), height: q.height(), offset: { top: q.scrollTop(), left: q.scrollLeft() } } } if (p.preventDefault) { return { width: 0, height: 0, offset: { top: p.pageY, left: p.pageX } } } return { width: q.outerWidth(), height: q.outerHeight(), offset: q.offset() } } h.position = { scrollbarWidth: function () { if (m !== e) { return m } var s, r, q = h("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), p = q.children()[0]; h("body").append(q); s = p.offsetWidth; q.css("overflow", "scroll"); r = p.offsetWidth; if (s === r) { r = q[0].clientWidth } q.remove(); return (m = s - r) }, getScrollInfo: function (q) { var p = q.isWindow ? "" : q.element.css("overflow-x"), t = q.isWindow ? "" : q.element.css("overflow-y"), s = p === "scroll" || (p === "auto" && q.width < q.element[0].scrollWidth), r = t === "scroll" || (t === "auto" && q.height < q.element[0].scrollHeight); return { width: r ? h.position.scrollbarWidth() : 0, height: s ? h.position.scrollbarWidth() : 0 } }, getWithinInfo: function (p) { var q = h(p || window), r = h.isWindow(q[0]); return { element: q, isWindow: r, offset: q.offset() || { left: 0, top: 0 }, scrollLeft: q.scrollLeft(), scrollTop: q.scrollTop(), width: r ? q.width() : q.outerWidth(), height: r ? q.height() : q.outerHeight() } } }; h.fn.position = function (w) { if (!w || !w.of) { return j.apply(this, arguments) } w = h.extend({}, w); var x, t, r, v, q, y, s = h(w.of), p = h.position.getWithinInfo(w.within), z = h.position.getScrollInfo(p), u = (w.collision || "flip").split(" "), A = {}; y = i(s); if (s[0].preventDefault) { w.at = "left top" } t = y.width; r = y.height; v = y.offset; q = h.extend({}, v); h.each(["my", "at"], function () { var B = (w[this] || "").split(" "), D, C; if (B.length === 1) { B = g.test(B[0]) ? B.concat(["center"]) : k.test(B[0]) ? ["center"].concat(B) : ["center", "center"] } B[0] = g.test(B[0]) ? B[0] : "center"; B[1] = k.test(B[1]) ? B[1] : "center"; D = a.exec(B[0]); C = a.exec(B[1]); A[this] = [D ? D[0] : 0, C ? C[0] : 0]; w[this] = [o.exec(B[0])[0], o.exec(B[1])[0]] }); if (u.length === 1) { u[1] = u[0] } if (w.at[0] === "right") { q.left += t } else { if (w.at[0] === "center") { q.left += t / 2 } } if (w.at[1] === "bottom") { q.top += r } else { if (w.at[1] === "center") { q.top += r / 2 } } x = c(A.at, t, r); q.left += x[0]; q.top += x[1]; return this.each(function () { var C, L, E = h(this), G = E.outerWidth(), D = E.outerHeight(), F = l(this, "marginLeft"), B = l(this, "marginTop"), K = G + F + l(this, "marginRight") + z.width, J = D + B + l(this, "marginBottom") + z.height, H = h.extend({}, q), I = c(A.my, E.outerWidth(), E.outerHeight()); if (w.my[0] === "right") { H.left -= G } else { if (w.my[0] === "center") { H.left -= G / 2 } } if (w.my[1] === "bottom") { H.top -= D } else { if (w.my[1] === "center") { H.top -= D / 2 } } H.left += I[0]; H.top += I[1]; if (!h.support.offsetFractions) { H.left = b(H.left); H.top = b(H.top) } C = { marginLeft: F, marginTop: B }; h.each(["left", "top"], function (N, M) { if (h.ui.position[u[N]]) { h.ui.position[u[N]][M](H, { targetWidth: t, targetHeight: r, elemWidth: G, elemHeight: D, collisionPosition: C, collisionWidth: K, collisionHeight: J, offset: [x[0] + I[0], x[1] + I[1]], my: w.my, at: w.at, within: p, elem: E }) } }); if (w.using) { L = function (P) { var R = v.left - H.left, O = R + t - G, Q = v.top - H.top, N = Q + r - D, M = { target: { element: s, left: v.left, top: v.top, width: t, height: r }, element: { element: E, left: H.left, top: H.top, width: G, height: D }, horizontal: O < 0 ? "left" : R > 0 ? "right" : "center", vertical: N < 0 ? "top" : Q > 0 ? "bottom" : "middle" }; if (t < G && f(R + O) < t) { M.horizontal = "center" } if (r < D && f(Q + N) < r) { M.vertical = "middle" } if (n(f(R), f(O)) > n(f(Q), f(N))) { M.important = "horizontal" } else { M.important = "vertical" } w.using.call(this, P, M) } } E.offset(h.extend(H, { using: L })) }) }; h.ui.position = { fit: { left: function (q, p) { var x = p.within, s = x.isWindow ? x.scrollLeft : x.offset.left, u = x.width, r = q.left - p.collisionPosition.marginLeft, t = s - r, w = r + p.collisionWidth - u - s, v; if (p.collisionWidth > u) { if (t > 0 && w <= 0) { v = q.left + t + p.collisionWidth - u - s; q.left += t - v } else { if (w > 0 && t <= 0) { q.left = s } else { if (t > w) { q.left = s + u - p.collisionWidth } else { q.left = s } } } } else { if (t > 0) { q.left += t } else { if (w > 0) { q.left -= w } else { q.left = n(q.left - r, q.left) } } } }, top: function (p, x) { var w = x.within, t = w.isWindow ? w.scrollTop : w.offset.top, u = x.within.height, r = p.top - x.collisionPosition.marginTop, s = t - r, q = r + x.collisionHeight - u - t, v; if (x.collisionHeight > u) { if (s > 0 && q <= 0) { v = p.top + s + x.collisionHeight - u - t; p.top += s - v } else { if (q > 0 && s <= 0) { p.top = t } else { if (s > q) { p.top = t + u - x.collisionHeight } else { p.top = t } } } } else { if (s > 0) { p.top += s } else { if (q > 0) { p.top -= q } else { p.top = n(p.top - r, p.top) } } } } }, flip: { left: function (s, r) { var q = r.within, w = q.offset.left + q.scrollLeft, A = q.width, C = q.isWindow ? q.scrollLeft : q.offset.left, t = s.left - r.collisionPosition.marginLeft, x = t - C, B = t + r.collisionWidth - A - C, v = r.my[0] === "left" ? -r.elemWidth : r.my[0] === "right" ? r.elemWidth : 0, y = r.at[0] === "left" ? r.targetWidth : r.at[0] === "right" ? -r.targetWidth : 0, p = -2 * r.offset[0], z, u; if (x < 0) { z = s.left + v + y + p + r.collisionWidth - A - w; if (z < 0 || z < f(x)) { s.left += v + y + p } } else { if (B > 0) { u = s.left - r.collisionPosition.marginLeft + v + y + p - C; if (u > 0 || f(u) < B) { s.left += v + y + p } } } }, top: function (r, q) { var p = q.within, z = p.offset.top + p.scrollTop, A = p.height, y = p.isWindow ? p.scrollTop : p.offset.top, t = r.top - q.collisionPosition.marginTop, v = t - y, s = t + q.collisionHeight - A - y, w = q.my[1] === "top", u = w ? -q.elemHeight : q.my[1] === "bottom" ? q.elemHeight : 0, C = q.at[1] === "top" ? q.targetHeight : q.at[1] === "bottom" ? -q.targetHeight : 0, D = -2 * q.offset[1], x, B; if (v < 0) { B = r.top + u + C + D + q.collisionHeight - A - z; if ((r.top + u + C + D) > v && (B < 0 || B < f(v))) { r.top += u + C + D } } else { if (s > 0) { x = r.top - q.collisionPosition.marginTop + u + C + D - y; if ((r.top + u + C + D) > s && (x > 0 || f(x) < s)) { r.top += u + C + D } } } } }, flipfit: { left: function () { h.ui.position.flip.left.apply(this, arguments); h.ui.position.fit.left.apply(this, arguments) }, top: function () { h.ui.position.flip.top.apply(this, arguments); h.ui.position.fit.top.apply(this, arguments) } } }; (function () { var v, q, s, u, t, r = document.getElementsByTagName("body")[0], p = document.createElement("div"); v = document.createElement(r ? "div" : "body"); s = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }; if (r) { h.extend(s, { position: "absolute", left: "-1000px", top: "-1000px" }) } for (t in s) { v.style[t] = s[t] } v.appendChild(p); q = r || document.documentElement; q.insertBefore(v, q.firstChild); p.style.cssText = "position: absolute; left: 10.7432222px;"; u = h(p).offset().left; h.support.offsetFractions = u > 10 && u < 11; v.innerHTML = ""; q.removeChild(v) })() }(jQuery)); (function (a, b) { a.widget("ui.menu", { version: "1.10.3", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-carat-1-e" }, menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function () { this.activeMenu = this.element; this.mouseHandled = false; this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }).bind("click" + this.eventNamespace, a.proxy(function (c) { if (this.options.disabled) { c.preventDefault() } }, this)); if (this.options.disabled) { this.element.addClass("ui-state-disabled").attr("aria-disabled", "true") } this._on({ "mousedown .ui-menu-item > a": function (c) { c.preventDefault() }, "click .ui-state-disabled > a": function (c) { c.preventDefault() }, "click .ui-menu-item:has(a)": function (c) { var d = a(c.target).closest(".ui-menu-item"); if (!this.mouseHandled && d.not(".ui-state-disabled").length) { this.mouseHandled = true; this.select(c); if (d.has(".ui-menu").length) { this.expand(c) } else { if (!this.element.is(":focus")) { this.element.trigger("focus", [true]); if (this.active && this.active.parents(".ui-menu").length === 1) { clearTimeout(this.timer) } } } } }, "mouseenter .ui-menu-item": function (c) { var d = a(c.currentTarget); d.siblings().children(".ui-state-active").removeClass("ui-state-active"); this.focus(c, d) }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (d, e) { var c = this.active || this.element.children(".ui-menu-item").eq(0); if (!e) { this.focus(d, c) } }, blur: function (c) { this._delay(function () { if (!a.contains(this.element[0], this.document[0].activeElement)) { this.collapseAll(c) } }) }, keydown: "_keydown" }); this.refresh(); this._on(this.document, { click: function (c) { if (!a(c.target).closest(".ui-menu").length) { this.collapseAll(c) } this.mouseHandled = false } }) }, _destroy: function () { this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(); this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () { var c = a(this); if (c.data("ui-menu-submenu-carat")) { c.remove() } }); this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content") }, _keydown: function (d) { var i, g, f, e, c, h = true; function j(k) { return k.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") } switch (d.keyCode) { case a.ui.keyCode.PAGE_UP: this.previousPage(d); break; case a.ui.keyCode.PAGE_DOWN: this.nextPage(d); break; case a.ui.keyCode.HOME: this._move("first", "first", d); break; case a.ui.keyCode.END: this._move("last", "last", d); break; case a.ui.keyCode.UP: this.previous(d); break; case a.ui.keyCode.DOWN: this.next(d); break; case a.ui.keyCode.LEFT: this.collapse(d); break; case a.ui.keyCode.RIGHT: if (this.active && !this.active.is(".ui-state-disabled")) { this.expand(d) } break; case a.ui.keyCode.ENTER: case a.ui.keyCode.SPACE: this._activate(d); break; case a.ui.keyCode.ESCAPE: this.collapse(d); break; default: h = false; g = this.previousFilter || ""; f = String.fromCharCode(d.keyCode); e = false; clearTimeout(this.filterTimer); if (f === g) { e = true } else { f = g + f } c = new RegExp("^" + j(f), "i"); i = this.activeMenu.children(".ui-menu-item").filter(function () { return c.test(a(this).children("a").text()) }); i = e && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i; if (!i.length) { f = String.fromCharCode(d.keyCode); c = new RegExp("^" + j(f), "i"); i = this.activeMenu.children(".ui-menu-item").filter(function () { return c.test(a(this).children("a").text()) }) } if (i.length) { this.focus(d, i); if (i.length > 1) { this.previousFilter = f; this.filterTimer = this._delay(function () { delete this.previousFilter }, 1000) } else { delete this.previousFilter } } else { delete this.previousFilter } } if (h) { d.preventDefault() } }, _activate: function (c) { if (!this.active.is(".ui-state-disabled")) { if (this.active.children("a[aria-haspopup='true']").length) { this.expand(c) } else { this.select(c) } } }, refresh: function () { var d, c = this.options.icons.submenu, e = this.element.find(this.options.menus); e.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () { var h = a(this), g = h.prev("a"), f = a("<span>").addClass("ui-menu-icon ui-icon " + c).data("ui-menu-submenu-carat", true); g.attr("aria-haspopup", "true").prepend(f); h.attr("aria-labelledby", g.attr("id")) }); d = e.add(this.element); d.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({ tabIndex: -1, role: this._itemRole() }); d.children(":not(.ui-menu-item)").each(function () { var f = a(this); if (!/[^\-\u2014\u2013\s]/.test(f.text())) { f.addClass("ui-widget-content ui-menu-divider") } }); d.children(".ui-state-disabled").attr("aria-disabled", "true"); if (this.active && !a.contains(this.element[0], this.active[0])) { this.blur() } }, _itemRole: function () { return { menu: "menuitem", listbox: "option" }[this.options.role] }, _setOption: function (c, d) { if (c === "icons") { this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(d.submenu) } this._super(c, d) }, focus: function (f, e) { var d, c; this.blur(f, f && f.type === "focus"); this._scrollIntoView(e); this.active = e.first(); c = this.active.children("a").addClass("ui-state-focus"); if (this.options.role) { this.element.attr("aria-activedescendant", c.attr("id")) } this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"); if (f && f.type === "keydown") { this._close() } else { this.timer = this._delay(function () { this._close() }, this.delay) } d = e.children(".ui-menu"); if (d.length && (/^mouse/.test(f.type))) { this._startOpening(d) } this.activeMenu = e.parent(); this._trigger("focus", f, { item: e }) }, _scrollIntoView: function (g) { var f, e, h, i, d, c; if (this._hasScroll()) { f = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0; e = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0; h = g.offset().top - this.activeMenu.offset().top - f - e; i = this.activeMenu.scrollTop(); d = this.activeMenu.height(); c = g.height(); if (h < 0) { this.activeMenu.scrollTop(i + h) } else { if (h + c > d) { this.activeMenu.scrollTop(i + h - d + c) } } } }, blur: function (d, c) { if (!c) { clearTimeout(this.timer) } if (!this.active) { return } this.active.children("a").removeClass("ui-state-focus"); this.active = null; this._trigger("blur", d, { item: this.active }) }, _startOpening: function (c) { clearTimeout(this.timer); if (c.attr("aria-hidden") !== "true") { return } this.timer = this._delay(function () { this._close(); this._open(c) }, this.delay) }, _open: function (d) { var c = a.extend({ of: this.active }, this.options.position); clearTimeout(this.timer); this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden", "true"); d.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c) }, collapseAll: function (d, c) { clearTimeout(this.timer); this.timer = this._delay(function () { var e = c ? this.element : a(d && d.target).closest(this.element.find(".ui-menu")); if (!e.length) { e = this.element } this._close(e); this.blur(d); this.activeMenu = e }, this.delay) }, _close: function (c) { if (!c) { c = this.active ? this.active.parent() : this.element } c.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active") }, collapse: function (d) { var c = this.active && this.active.parent().closest(".ui-menu-item", this.element); if (c && c.length) { this._close(); this.focus(d, c) } }, expand: function (d) { var c = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first(); if (c && c.length) { this._open(c.parent()); this._delay(function () { this.focus(d, c) }) } }, next: function (c) { this._move("next", "first", c) }, previous: function (c) { this._move("prev", "last", c) }, isFirstItem: function () { return this.active && !this.active.prevAll(".ui-menu-item").length }, isLastItem: function () { return this.active && !this.active.nextAll(".ui-menu-item").length }, _move: function (d, f, c) { var e; if (this.active) { if (d === "first" || d === "last") { e = this.active[d === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) } else { e = this.active[d + "All"](".ui-menu-item").eq(0) } } if (!e || !e.length || !this.active) { e = this.activeMenu.children(".ui-menu-item")[f]() } this.focus(c, e) }, nextPage: function (c) { var f, d, e; if (!this.active) { this.next(c); return } if (this.isLastItem()) { return } if (this._hasScroll()) { d = this.active.offset().top; e = this.element.height(); this.active.nextAll(".ui-menu-item").each(function () { f = a(this); return f.offset().top - d - e < 0 }); this.focus(c, f) } else { this.focus(c, this.activeMenu.children(".ui-menu-item")[!this.active ? "first" : "last"]()) } }, previousPage: function (c) { var f, d, e; if (!this.active) { this.next(c); return } if (this.isFirstItem()) { return } if (this._hasScroll()) { d = this.active.offset().top; e = this.element.height(); this.active.prevAll(".ui-menu-item").each(function () { f = a(this); return f.offset().top - d + e > 0 }); this.focus(c, f) } else { this.focus(c, this.activeMenu.children(".ui-menu-item").first()) } }, _hasScroll: function () { return this.element.outerHeight() < this.element.prop("scrollHeight") }, select: function (c) { this.active = this.active || a(c.target).closest(".ui-menu-item"); var d = { item: this.active }; if (!this.active.has(".ui-menu").length) { this.collapseAll(c, true) } this._trigger("select", c, d) } }) }(jQuery)); (function (b, c) { var a = 0; b.widget("ui.autocomplete", { version: "1.10.3", defaultElement: "<input>", options: { appendTo: null, autoFocus: false, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, pending: 0, _create: function () { var h, f, i, e = this.element[0].nodeName.toLowerCase(), d = e === "textarea", g = e === "input"; this.isMultiLine = d ? true : g ? false : this.element.prop("isContentEditable"); this.valueMethod = this.element[d || g ? "val" : "text"]; this.isNewMenu = true; this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"); this._on(this.element, { keydown: function (j) { if (this.element.prop("readOnly")) { h = true; i = true; f = true; return } h = false; i = false; f = false; var k = b.ui.keyCode; switch (j.keyCode) { case k.PAGE_UP: h = true; this._move("previousPage", j); break; case k.PAGE_DOWN: h = true; this._move("nextPage", j); break; case k.UP: h = true; this._keyEvent("previous", j); break; case k.DOWN: h = true; this._keyEvent("next", j); break; case k.ENTER: case k.NUMPAD_ENTER: if (this.menu.active) { h = true; j.preventDefault(); this.menu.select(j) } break; case k.TAB: if (this.menu.active) { this.menu.select(j) } break; case k.ESCAPE: if (this.menu.element.is(":visible")) { this._value(this.term); this.close(j); j.preventDefault() } break; default: f = true; this._searchTimeout(j); break } }, keypress: function (j) { if (h) { h = false; if (!this.isMultiLine || this.menu.element.is(":visible")) { j.preventDefault() } return } if (f) { return } var k = b.ui.keyCode; switch (j.keyCode) { case k.PAGE_UP: this._move("previousPage", j); break; case k.PAGE_DOWN: this._move("nextPage", j); break; case k.UP: this._keyEvent("previous", j); break; case k.DOWN: this._keyEvent("next", j); break } }, input: function (j) { if (i) { i = false; j.preventDefault(); return } this._searchTimeout(j) }, focus: function () { this.selectedItem = null; this.previous = this._value() }, blur: function (j) { if (this.cancelBlur) { delete this.cancelBlur; return } clearTimeout(this.searching); this.close(j); this._change(j) } }); this._initSource(); this.menu = b("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().data("ui-menu"); this._on(this.menu.element, { mousedown: function (j) { j.preventDefault(); this.cancelBlur = true; this._delay(function () { delete this.cancelBlur }); var k = this.menu.element[0]; if (!b(j.target).closest(".ui-menu-item").length) { this._delay(function () { var l = this; this.document.one("mousedown", function (m) { if (m.target !== l.element[0] && m.target !== k && !b.contains(k, m.target)) { l.close() } }) }) } }, menufocus: function (k, l) { if (this.isNewMenu) { this.isNewMenu = false; if (k.originalEvent && /^mouse/.test(k.originalEvent.type)) { this.menu.blur(); this.document.one("mousemove", function () { b(k.target).trigger(k.originalEvent) }); return } } var j = l.item.data("ui-autocomplete-item"); if (false !== this._trigger("focus", k, { item: j })) { if (k.originalEvent && /^key/.test(k.originalEvent.type)) { this._value(j.value) } } else { this.liveRegion.text(j.value) } }, menuselect: function (k, l) { var j = l.item.data("ui-autocomplete-item"), m = this.previous; if (this.element[0] !== this.document[0].activeElement) { this.element.focus(); this.previous = m; this._delay(function () { this.previous = m; this.selectedItem = j }) } if (false !== this._trigger("select", k, { item: j })) { this._value(j.value) } this.term = this._value(); this.close(k); this.selectedItem = j } }); this.liveRegion = b("<span>", { role: "status", "aria-live": "polite" }).addClass("ui-helper-hidden-accessible").insertBefore(this.element); this._on(this.window, { beforeunload: function () { this.element.removeAttr("autocomplete") } }) }, _destroy: function () { clearTimeout(this.searching); this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"); this.menu.element.remove(); this.liveRegion.remove() }, _setOption: function (d, e) { this._super(d, e); if (d === "source") { this._initSource() } if (d === "appendTo") { this.menu.element.appendTo(this._appendTo()) } if (d === "disabled" && e && this.xhr) { this.xhr.abort() } }, _appendTo: function () { var d = this.options.appendTo; if (d) { d = d.jquery || d.nodeType ? b(d) : this.document.find(d).eq(0) } if (!d) { d = this.element.closest(".ui-front") } if (!d.length) { d = this.document[0].body } return d }, _initSource: function () { var e, f, d = this; if (b.isArray(this.options.source)) { e = this.options.source; this.source = function (h, g) { g(b.ui.autocomplete.filter(e, h.term)) } } else { if (typeof this.options.source === "string") { f = this.options.source; this.source = function (h, g) { if (d.xhr) { d.xhr.abort() } d.xhr = b.ajax({ url: f, data: h, dataType: "json", success: function (i) { g(i) }, error: function () { g([]) } }) } } else { this.source = this.options.source } } }, _searchTimeout: function (d) { clearTimeout(this.searching); this.searching = this._delay(function () { if (this.term !== this._value()) { this.selectedItem = null; this.search(null, d) } }, this.options.delay) }, search: function (e, d) { e = e != null ? e : this._value(); this.term = this._value(); if (e.length < this.options.minLength) { return this.close(d) } if (this._trigger("search", d) === false) { return } return this._search(e) }, _search: function (d) { this.pending++; this.element.addClass("ui-autocomplete-loading"); this.cancelSearch = false; this.source({ term: d }, this._response()) }, _response: function () { var e = this, d = ++a; return function (f) { if (d === a) { e.__response(f) } e.pending--; if (!e.pending) { e.element.removeClass("ui-autocomplete-loading") } } }, __response: function (d) { if (d) { d = this._normalize(d) } this._trigger("response", null, { content: d }); if (!this.options.disabled && d && d.length && !this.cancelSearch) { this._suggest(d); this._trigger("open") } else { this._close() } }, close: function (d) { this.cancelSearch = true; this._close(d) }, _close: function (d) { if (this.menu.element.is(":visible")) { this.menu.element.hide(); this.menu.blur(); this.isNewMenu = true; this._trigger("close", d) } }, _change: function (d) { if (this.previous !== this._value()) { this._trigger("change", d, { item: this.selectedItem }) } }, _normalize: function (d) { if (d.length && d[0].label && d[0].value) { return d } return b.map(d, function (e) { if (typeof e === "string") { return { label: e, value: e } } return b.extend({ label: e.label || e.value, value: e.value || e.label }, e) }) }, _suggest: function (d) { var e = this.menu.element.empty(); this._renderMenu(e, d); this.isNewMenu = true; this.menu.refresh(); e.show(); this._resizeMenu(); e.position(b.extend({ of: this.element }, this.options.position)); if (this.options.autoFocus) { this.menu.next() } }, _resizeMenu: function () { var d = this.menu.element; d.outerWidth(Math.max(d.width("").outerWidth() + 1, this.element.outerWidth())) }, _renderMenu: function (d, f) { var e = this; b.each(f, function (g, h) { e._renderItemData(d, h) }) }, _renderItemData: function (d, e) { return this._renderItem(d, e).data("ui-autocomplete-item", e) }, _renderItem: function (d, e) { return b("<li>").append(b("<a>").text(e.label)).appendTo(d) }, _move: function (e, d) { if (!this.menu.element.is(":visible")) { this.search(null, d); return } if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) { this._value(this.term); this.menu.blur(); return } this.menu[e](d) }, widget: function () { return this.menu.element }, _value: function () { return this.valueMethod.apply(this.element, arguments) }, _keyEvent: function (e, d) { if (!this.isMultiLine || this.menu.element.is(":visible")) { this._move(e, d); d.preventDefault() } } }); b.extend(b.ui.autocomplete, { escapeRegex: function (d) { return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function (e, f) { var d = new RegExp(b.ui.autocomplete.escapeRegex(f), "i"); return b.grep(e, function (g) { return d.test(g.label || g.value || g) }) } }); b.widget("ui.autocomplete", b.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function (d) { return d + (d > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } }, __response: function (e) { var d; this._superApply(arguments); if (this.options.disabled || this.cancelSearch) { return } if (e && e.length) { d = this.options.messages.results(e.length) } else { d = this.options.messages.noResults } this.liveRegion.text(d) } }) }(jQuery));
$(document)
       .ready(
               function () {
                   $(".portlet-header").hide();
                   /** *********************å¤„ç†æŠ•ç¥¨æ•°ç›®******************************************** */
                   var countFlag = $("<span voteCounts='yes'></span>");
                   if (!countFlag || countFlag.length <= 0) {// æ²¡æœ‰ä½¿ç”¨æ–‡ç« æŠ•ç¥¨åŠŸèƒ½
                       var articleKey = $("#voteArticleKey");
                       if (!articleKey || articleKey.length <= 0) {
                           return;
                       }
                       if (articleKey.val().match(/^\s*$/)) {
                           return;
                       }
                       var $epsPortletId = $("#epsPortletId").val();
                       var $pageId = $("#eprotalCurrentPageId").val();
                       var url = "/eportal/ui?moduleId=" + $epsPortletId + "&pageId=" + $pageId + "&struts.portlet.action=/portlet/article!getVoteCount.action";
                       if (url.match(/^\s*$/)) {
                           return;
                       }
                       url = url + '&key=' + articleKey.val();
                       $.ajax({
                           type: "post",
                           url: url,
                           dataType: "text",
                           async: false,
                           success: function (msg) {
                               $("span[voteCounts=yes]").html(msg);
                           },
                           error: function (msg) {
                               // $("span[voteCounts=yes]").html(msg);
                           }
                       });
                   }
                   /** ************å¤„ç†æ–‡ç« å’Œé¢‘é“è®¡æ•°åŠŸèƒ½************************************************************ */
                   $.each($("span[articlehits=yes]"), function () {
                       var countFlag = $(this);
                       if (countFlag != null && typeof (countFlag[0]) != "undefined") {
                           var articleKey = countFlag.attr("articlekey");
                           if (articleKey != null && articleKey != "undefined" && !articleKey.match(/^\s*$/)) {
                               var moduleId = $("#eportalappPortletId").val();
                               var url = "/eportal/ui?pageId=" + $("#eprotalCurrentPageId").val() + "&moduleId=" + moduleId + "&articleKey=" + articleKey + "&struts.portlet.action=/app/counting-front!saveInfo.action&getHitsOnly=true";
                               if (countFlag.attr("scan") == "yes") {
                                   var moduleId = $("#epsPortletId").val();
                                   var url = "/eportal/ui?pageId=" + $("#eprotalCurrentPageId").val() + "&moduleId=" + moduleId + "&articleKey=" + articleKey + "&struts.portlet.action=/portlet/article-scan!getCountByArticleKey.action";
                               }
                               $.ajax({
                                   type: "post",
                                   url: url,
                                   dataType: "text",
                                   async: false,
                                   success: function (msg) {
                                       countFlag.html(msg);
                                   },
                                   error: function (msg) {
                                       // countFlag.html(msg);
                                   }
                               });
                           }
                       }
                   });
                   /** ************å¤„ç†æ–‡ç« å’Œé¢‘é“æµè§ˆè®°å½•åŠŸèƒ½************************************************************ */
                   if ($("#isOpenArticleScan").val() == "yes") {
                       var scanFlag = $("span[scanRecord=yes]");
                       if (scanFlag != null && typeof (scanFlag[0]) != "undefined") {
                           var articleKey = $("#eprotalCurrentArticleKey").val();
                           var columnId = $("#eprotalCurrentPageId").val();
                           var moduleId = $("#epsPortletId").val();
                           var pageId = $("#eprotalCurrentPageId").val();
                           var url = "/eportal/ui?pageId=" + pageId + "&moduleId=" + moduleId + "&struts.portlet.action=/portlet/article-scan!saveArticleOrPageScanHits.action";
                           url += "&articleKey=" + articleKey + "&columnId=" + columnId;
                           if (articleKey != "" || columnId != "") {
                               $.ajax({
                                   type: "post",
                                   url: url,
                                   dataType: "text",
                                   async: false,
                                   success: function (msg) {
                                   },
                                   error: function (msg) {

                                   }
                               });
                           }
                       }
                   }
                   /** ************åŠ¨æ€å¼•å…¥ç”¨æˆ·è¡Œä¸ºåˆ†æžè„šæœ¬************************************************************ */
                   if ($("#behaviourAnalysisSiteId")[0]) {
                       if (!$("#behaviourAnalysisSiteId").val().match(/^\s*$/)) {
                           var jsUrl = "http://pw.cnzz.com/c.php?id=" + $("#behaviourAnalysisSiteId").val() + "&l=0&random=" + new Date().getTime();
                           includeJsFile(jsUrl, "");
                       }
                   }
                   /** ************å¤„ç†çƒ­è¯ç›¸å…³æ–‡ç« ************************************************************ */
                   if ($("#eprotalCurrentArticleKey")[0]) {
                       var articleKey = $("#eprotalCurrentArticleKey").val();
                       var columnId = $("#eprotalCurrentColumnId").val();
                       var colorArray = ["tip-violet", "tip-skyblue", "tip-yellow", "tip-yellowsimple", "tip-green"];
                       var tipClassName = colorArray[Math.ceil(Math.random() * 4)];
                       var $epsPortletId = $("#epsPortletId").val();
                       var $pageId = $("#eprotalCurrentPageId").val();
                       var $staticRequest = $("#isStaticRequest").val();
                       var getHotWordRelativeArticleUrl = "/eportal/ui?moduleId=" + $epsPortletId + "&pageId=" + $pageId + "&struts.portlet.action=/portlet/article!getHotWordRelativeArticle.action&staticRequest=" + $staticRequest;
                       $.each($("a[class*='hotwordLinkClass']"), function () {
                           var relativeHtml = "";
                           var hotWord = $(this).html();
                           $.ajax({
                               type: "post",
                               url: getHotWordRelativeArticleUrl,
                               dataType: "text",
                               async: false,
                               data: { "articleKey": articleKey, "columnId": columnId, "hotWord": hotWord },
                               success: function (msg) {
                                   relativeHtml = msg;
                               },
                               error: function (response) {
                                   relativeHtml = "";
                               }
                           });
                           if (relativeHtml != "") {
                               $(this).poshytip({
                                   className: tipClassName,
                                   bgImageFrameSize: 15,
                                   alignY: 'bottom',
                                   content: function (updateCallback) {
                                       return relativeHtml;
                                   }
                               });
                           }
                       });
                   }
                   $(".eportal_title_close").hide();
                   // å¤„ç†ä¸ªæ€§åŒ–é—¨æˆ·æ¨¡å—çš„æ˜¾ç¤º
                   $.each($("[runat='server'][id][type]"), function () {
                       var $panelEle = $(this);
                       var type = $panelEle.attr("type");
                       var panelCode = $panelEle.attr("id");
                       // åˆ¤æ–­ç”¨æˆ·æ˜¯å¦ç™»é™†
                       if (type == "admin") {
                           if ($("#currentLoginUserLoginName").val().match(/^\s*$/)) {
                               return;
                           }
                       } else if (type == "member") {
                           if ($("#currentLoginMemberName").val().match(/^\s*$/)) {
                               return;
                           }
                       } else {

                           return;
                       }
                       // æ˜¾ç¤ºæ·»åŠ æ¨¡å—çš„+å·
                       var moduleAddHtml = "<a  class='huilan-add-new-site' title='è¯·é€‰æ‹©æ„Ÿå…´è¶£çš„æ¨¡å—'  onclick=\"javascript:void(0)\"><i class='huilan-pcl-img huilan-icon-add' style='cursor:pointer' onclick=\"javascript:choosePersonNalityModule('" + type + "','" + panelCode + "')\"></i></a>";
                       $(this).prepend(moduleAddHtml);
                       // ç»™portletçª—å£åŠ å…¥åˆ é™¤åŠŸèƒ½
                       $(".eportal_title_close").show();
                       $(".eportal_title_close").click(function () {
                           deletePersonNalityPortlet($(this), type);
                       });
                       $(".personalized").sortable({
                           opacity: 0.5,
                           // æ‹–åŠ¨çš„é€æ˜Žåº¦
                           revert: false,
                           // ç¼“å†²æ•ˆæžœ
                           appendTo: "parent",
                           containment: false,
                           cursor: 'move',
                           // æ‹–åŠ¨çš„æ—¶å€™é¼ æ ‡æ ·å¼
                           connectWith: '.column',
                           // axis: false, // å…ƒç´ ä»…èƒ½æ¨ªå‘æˆ–çºµå‘æ‹–åŠ¨ã€‚å¯é€‰å€¼ï¼š'x', 'y'
                           handle: '.eportal_title',
                           placeholder: 'ui-state-highlight',
                           forcePlaceholderSize: true,
                           forceHelperSize: true,
                           tolerance: "intersect",
                           cancel: "span",
                           // é˜»æ­¢æŽ’åºåŠ¨ä½œåœ¨åŒ¹é…çš„å…ƒç´ ä¸Šå‘ç”Ÿã€‚
                           tolerance: "pointer",
                           dropOnEmpty: true
                       }).enableSelection().bind(
                               'sortupdate',
                       function (event, ui) {
                           // ä¿å­˜ä¸ªæ€§åŒ–æ¨¡å—ç§»åŠ¨æ“ä½œ
                           savePersonalityPortletLayoutSetting(type);
                       }).attr("border", "1px dotted #dcdcdc");
                   });
               });
function dealDefaultPanelBackground($portletPanel) {
    // å¤„ç†å®¹å™¨é‡Œæ¨¡å—ä¸ºç©ºçš„æƒ…å†µ
    if ($portletPanel.find("[class=portlet]")[0]) {
        $portletPanel.removeClass("easysite-section-one-background");
        $portletPanel.removeClass("easysite-section-two-background");
        $portletPanel.removeClass("easysite-section-three-background");
        $portletPanel.removeClass("easysite-section-four-background");
        $portletPanel.removeClass("easysite-section-five-background");
    } else {
        var panelId = $portletPanel.attr("id");
        if (panelId == "panel1") {
            $portletPanel.addClass("easysite-section-one-background");
        } else if (panelId == "panel2") {
            $portletPanel.addClass("easysite-section-two-background");
        } else if (panelId == "panel3") {
            $portletPanel.addClass("easysite-section-three-background");
        } else if (panelId == "panel4") {
            $portletPanel.addClass("easysite-section-four-background");
        } else if (panelId == "contentpanel") {
            $portletPanel.addClass("easysite-section-five-background");
        }
    }
}
// é€‰æ‹©ä¸ªæ€§åŒ–æ¨¡å—åˆ—è¡¨
function choosePersonNalityModule(panelType, panelCode) {
    var moduleId = $("#portaltoolsPortletId").val();
    var pageId = $("#eprotalCurrentPageId").val();
    var url = "/eportal/ui?pageId=" + pageId + "&moduleId=" + moduleId + "&panelType=" + panelType + "&panelCode=" + panelCode + "&struts.portlet.action=/portlet/portlet-personality!toChooseModuleList.action";
    openDialog("PersonNalityModuleList", "è¯·é€‰æ‹©æ„Ÿå…´è¶£çš„æ¨¡å—", url, 900, 600);
}
// ä¿å­˜ä¸ªæ€§åŒ–æ¨¡å—ç§»åŠ¨æ“ä½œ
function savePersonalityPortletLayoutSetting(panelType) {
    var result = "";
    $.each($(".column"), function (m) {
        result += $(this).attr("id") + ":";
        $.each($(this).children(".portlet"), function (d) {
            var pageModuleId = $(this).attr('pagemoduleid');
            if (typeof (pageModuleId) != "undefined") {
                result += pageModuleId + "@";
            }
        });
        if (endWith(result, "@")) {
            result = result.substring(0, result.length - 1);
        }
        result += "#";
    });
    if (endWith(result, "#")) {
        result = result.substring(0, result.length - 1);
    }
    var moduleId = $("#portaltoolsPortletId").val();
    var pageId = $("#eprotalCurrentPageId").val();
    var url = "/eportal/ui?pageId=" + pageId + "&moduleId=" + moduleId + "&panelType=" + panelType + "&struts.portlet.action=/portlet/portlet-personality!savePersonalityPortletSetting.action";
    $.ajax({
        type: "post",
        url: url,
        dataType: "text",
        data: {
            "layoutInfo": result,
            "panelType": panelType
        },
        success: function (msg) {
            if (checkPermission(msg)) {
                if (msg == "success") {
                    showTipsDialog('å·²æˆåŠŸä¿å­˜å¸ƒå±€ï¼', "okay");
                    refreshMobileViewIframe();
                } else {
                    $.dialog.alert("ä¿å­˜é¡µé¢å¸ƒå±€å‡ºé”™å•¦ï¼");
                }
            }
        },
        error: function () {
            $.dialog.alert("è¯·æ±‚é”™è¯¯ï¼Œä¿å­˜é¡µé¢å¸ƒå±€å‡ºé”™å•¦ï¼");
            flag = false;
        }
    });
}
/**
 * ç³»ç»Ÿè‡ªå¸¦å¼¹å‡ºå±‚æ–¹æ³•
 * 
 * @param id
 *            å¼¹å‡ºæ¡†id
 * @param title
 *            å¼¹å‡ºæ¡†æ ‡é¢˜
 * @param url
 *            å¼¹å‡ºæ¡†æ‰“å¼€çš„URLåœ°å€é“¾æŽ¥
 * @param width
 *            å®½åº¦
 * @param height
 *            é«˜åº¦
 * @param zIndex
 *            çª—å£çš„indexå±žæ€§
 * @return
 */
function openDialog(id, title, url, width, height, zIndex, lock) {
    if (zIndex != null && typeof (zIndex) != 'undefined') {
        zIndex = zIndex;
    } else {
        zIndex = 9999999999;
    }
    if (lock != null && typeof (lock) != 'undefined') {
        if (lock == true || lock == false) {
            lock = lock;
        } else {
            lock = true;
        }
    } else {
        lock = true;
    }
    $.dialog({
        // left: 100,//è‡ªå®šä¹‰åæ ‡ [left & top]
        // top: '60%',
        // icon: 'success.gif',//å®šä¹‰æ¶ˆæ¯å›¾æ ‡ [icon]
        padding: 0,
        // å†…å®¹ä¸Žè¾¹ç•Œå¡«å……è¾¹è· [padding]
        // drag: false,//ä¸è®¸æ‹–æ‹½ [drag & resize]
        resize: false,
        id: id,
        // é˜²æ­¢é‡å¤å¼¹å‡º [id]
        title: title,
        content: "url:" + url,
        // ä½¿ç”¨iframeæ–¹å¼åŠ è½½å•ç‹¬çš„å†…å®¹é¡µ
        width: width,
        height: height,
        max: false,
        min: false,
        fixed: true,
        // é™æ­¢å®šä½ [fixed]
        lock: lock
        // zIndex : zIndex
        // é”å± [lock & background & opacity]
    });
}
function openContentDialog(id, title, content, width, height, max, zIndex, lock) {
    if (zIndex != null && typeof (zIndex) != 'undefined') {
        zIndex = zIndex;
    } else {
        zIndex = 9999999999;
    }
    if (lock != null && typeof (lock) != 'undefined') {
        if (lock == true || lock == false) {
            lock = lock;
        } else {
            lock = true;
        }
    } else {
        lock = true;
    }
    if (max != null && typeof (max) != 'undefined') {
        if (max == true || max == false) {
            max = max;
        } else {
            max = true;
        }
    } else {
        max = false;
    }
    $.dialog({
        // left: 100,//è‡ªå®šä¹‰åæ ‡ [left & top]
        // top: '60%',
        // icon: 'success.gif',//å®šä¹‰æ¶ˆæ¯å›¾æ ‡ [icon]
        padding: 0,
        // å†…å®¹ä¸Žè¾¹ç•Œå¡«å……è¾¹è· [padding]
        // drag: false,//ä¸è®¸æ‹–æ‹½ [drag & resize]
        resize: false,
        id: id,
        // é˜²æ­¢é‡å¤å¼¹å‡º [id]
        title: title,
        content: content,
        // ä½¿ç”¨iframeæ–¹å¼åŠ è½½å•ç‹¬çš„å†…å®¹é¡µ
        width: width,
        height: height,
        max: max,
        min: false,
        fixed: true,
        // é™æ­¢å®šä½ [fixed]
        lock: lock
        // zIndex : zIndex
        // é”å± [lock & background & opacity]
    });
}

/**
 * å¼¹å‡ºå±‚å¯¹è¯æ¡†æ˜¾ç¤ºæ–¹æ³•
 * 
 * @param title
 *            æ ‡é¢˜
 * @param url
 *            iframeé¡µé¢å¯¹åº”çš„åœ°å€
 * @param width
 *            å®½åº¦
 * @param height
 *            é«˜åº¦
 * @param lock
 *            æ˜¯å¦ä¸ºæ¨¡å¼å¯¹è¯æ¡† trueä¸ºyes
 * @param maxmin
 *            æ˜¯å¦ä¸ºå…¨å±
 * @param type
 *            0ï¼ˆä¿¡æ¯æ¡†ï¼‰1ï¼ˆé¡µé¢å±‚ï¼‰2ï¼ˆiframeå±‚ï¼Œé»˜è®¤ï¼‰3ï¼ˆåŠ è½½å±‚ï¼‰4ï¼ˆtipså±‚ï¼‰
 * @param zIndex
 *            zIndexå±žæ€§
 * @return
 */
function openLayerDialog(title, url, width, height, lock, maxmin, type, zIndex) {

    if (type == null || typeof (type) == 'undefined') {
        type = 2;
    }
    if (lock != null && typeof (lock) != 'undefined') {
        if (lock != true && lock != false) {
            lock = true;
        }
    } else {
        lock = true;
    }
    if (maxmin == null || typeof (maxmin) == 'undefined') {
        maxmin = false;
    }
    if (zIndex != null && typeof (zIndex) != 'undefined') {
        zIndex = zIndex;
    } else {
        zIndex = 9999999999;
    }
    layer.open({
        type: type,
        title: title,
        area: [width, height],
        shadeClose: !lock,
        content: url,
        maxmin: maxmin
    });
}
/**
 * ä¿¡æ¯æç¤ºå‡½æ•°
 * 
 * @param txt
 *            æ¬²æç¤ºçš„ä¿¡æ¯ï¼Œæ­¤ä¿¡æ¯å¿…é€‰
 * @param tp
 *            æç¤ºçš„çŠ¶æ€ï¼Œæœ‰4ä¸ªå€¼ï¼š'okay'ï¼ˆæˆåŠŸï¼‰ï¼Œ'warn'ï¼ˆè­¦å‘Šï¼‰ï¼Œ'error'ï¼ˆé”™è¯¯ï¼‰ï¼Œ'load'ï¼ˆåŠ è½½ä¸­ï¼‰,é»˜è®¤ä¸ºåŠ è½½ä¸­ï¼Œå¯æ ¹æ®æƒ…å†µçœç•¥
 * @param tm
 *            æç¤ºä¹‹åŽéšè—çš„æ—¶é—´ï¼Œå•ä½ä¸ºç§’ï¼Œé»˜è®¤ä¸º3ç§’ï¼Œå¯çœç•¥
 * @return
 */
function showTipsDialog(txt, tp, tm) {
    var tip = $.fn.Tips({
        text: txt,
        type: tp,
        time: tm
    });
    return tip;
}

/** å–æ¶ˆé¡µé¢å¸ƒå±€ */
function cancelSetting() {
    $("#noticeArea").hide();
    window.location.reload();
}
/** æ”¹å˜æ¨¡å¼ */
function changeMode(showMode, notice) {
    var $portaltoolsPortletId = $("#portaltoolsPortletId").val();
    var $pageId = $("#eprotalCurrentPageId").val();
    var url = "/eportal/ui?moduleId=" + $portaltoolsPortletId + "&pageId=" + $pageId + "&struts.portlet.action=/portlet/changeMode.action";
    $.ajax({
        type: "post",
        url: url,
        dataType: "text",
        data: {
            "showMode": showMode
        },
        success: function (msg) {
            if (checkPermission(msg)) {
                if (msg == "success") {
                    $.dialog.tips('æ­£åœ¨åˆ‡æ¢è‡³' + notice, 2, "loading2.gif");
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                } else {
                    $.dialog.alert("æ”¹å˜è®¾è®¡æ¨¡å¼å‡ºé”™å•¦ï¼");
                }
            }
        },
        error: function () {
            // $.dialog.alert("å‡ºé”™å•¦ï¼");
            flag = false;
        }
    });
}

/** åˆ é™¤ä¸ªæ€§åŒ–æ¨¡å—portlet */
function deletePersonNalityPortlet($close, panelType) {
    var portletId = $close.closest(".portlet").attr("id");
    var panelCode = $close.closest(".column").attr("id");
    var pageId = $("#eprotalCurrentPageId").val();
    var moduleId = $("#portaltoolsPortletId").val();
    var url = "/eportal/ui?pageId=" + pageId + "&moduleId=" + moduleId + "&panelType=" + panelType + "&panelCode=" + panelCode + "&struts.portlet.action=/portlet/portlet-personality!deletePersonalityModule.action";
    var message = "ä½ ç¡®å®šè¦åˆ é™¤è¿™ä¸ªæ¨¡å—å—ï¼Ÿ";
    $.dialog.confirm(message, function () {
        $.ajax({
            type: "post",
            url: url,
            dataType: "text",
            data: {
                "portletId": portletId
            },
            async: false,
            // è®¾ç½®ä¸ºåŒæ­¥
            success: function (msg) {
                if (checkPermission(msg)) {
                    if (msg == "success") {
                        showTipsDialog('å·²æˆåŠŸåˆ é™¤è¯¥æ¨¡å—ï¼', "okay");
                        $close.closest(".portlet").remove();
                        // refreshMobileViewIframe();
                    } else {
                        $.dialog.alert("åˆ é™¤æ¨¡å—å‡ºé”™å•¦ï¼é”™è¯¯ä¿¡æ¯ï¼š" + msg);
                    }
                }
            },
            error: function () {
                $.dialog.alert("è¯·æ±‚å¤±è´¥ï¼");
                flag = false;
            }
        });
    });
}
/** æ£€æŸ¥å¹¶æç¤ºå‰å°æ“ä½œç›¸å…³æƒé™ */
function checkPermission(msg) {
    try {
        var result = msg.split("#");
        if (result[0] == "sessionInvalidate") {
            $.dialog.alert("ä¼šè¯å·²ç»å¤±æ•ˆï¼Œè¯·é‡æ–°ç™»å½•ï¼", function () {
                getRootWin().location.href = result[1];
            });
            return false;
        } else if (result[0] == "withoutPermission") {
            $.dialog.alert("ä½ æ²¡æœ‰è®¿é—®è¯¥åŠŸèƒ½çš„æƒé™ï¼", function () {
                getRootWin().location.href = result[1];
            });
            return false;
        }
    } catch (e) {
        console.log(e);
    }
    return true;
}

/** è¿”å›žä»»æ„æ·±åº¦çš„iframeçª—ä½“çš„çˆ¶çª—ä½“ */
function getRootWin() {
    var win = window;
    while (win != win.parent) {
        win = win.parent;
    }
    return win;
}
/** ä¸Žjavaä¸­endWithæœ‰ç›¸åŒçš„åŠŸèƒ½ */
function endWith(s1, s2) {
    if (s1.length < s2.length)
        return false;
    if (s1 == s2)
        return true;
    if (s1.substring(s1.length - s2.length) == s2)
        return true;
    return false;
}
/** æ˜¾ç¤ºæ—¶é—´ */
function showTime(clockId) {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var day = now.getDay();
    var hour = now.getHours();
    var minu = now.getMinutes();
    var sec = now.getSeconds();
    var week;
    month = month + 1;
    if (month < 10)
        month = "0" + month;
    if (date < 10)
        date = "0" + date;
    if (hour < 10)
        hour = "0" + hour;
    if (minu < 10)
        minu = "0" + minu;
    if (sec < 10)
        sec = "0" + sec;
    var arr_week = new Array("æ˜ŸæœŸæ—¥", "æ˜ŸæœŸä¸€", "æ˜ŸæœŸäºŒ", "æ˜ŸæœŸä¸‰", "æ˜ŸæœŸå››", "æ˜ŸæœŸäº”", "æ˜ŸæœŸå…­");
    week = arr_week[day];
    var time = "";
    time = year + "å¹´" + month + "æœˆ" + date + "æ—¥" + "  " + hour + ":" + minu
			+ ":" + sec + "  " + week;
    document.getElementById(clockId).innerHTML = time;
}
/** è·³è½¬è‡³æŒ‡å®šé¡µ */
function jumpToPage(event, input, totalPages, currentPage, requestUrl) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which
			: event.charCode;
    var requestUrlTemp = requestUrl;
    if (keyCode == 13) {
        // æ­¤å¤„å¤„ç†å›žè½¦åŠ¨ä½œ
        var $input = $(input);
        if (!$input.val().match(/^\d*$/)) {
            // alert('åªèƒ½è¾“å…¥æ•°å­—ï¼');
            $input.val(currentPage);
            $input.focus();
        } else if (parseInt($input.val()) > parseInt(totalPages)
				|| parseInt($input.val()) <= 0) {
            // alert('å¯¹ä¸èµ·,æ‚¨è¾“å…¥çš„é¡µç è¶…å‡ºäº†èŒƒå›´ï¼');
            $input.val(currentPage);
            $input.focus();
        } else {
            currentPage = $input.val();
            var requestUrl = requestUrl.split("||");
            var isStaticRequest = $("#isStaticRequest").val();
            var isOpenStaticPageList = $("#isOpenStaticPageList").val();
            var defaultPublishPage = parseInt($("#defaultPublishPage").val());
            var flag = false;
            if (isStaticRequest == "yes") {
                if (isOpenStaticPageList == "yes") {
                    if (currentPage > defaultPublishPage) {
                        requestUrl = requestUrl[0];
                        flag = true;
                    } else {
                        requestUrl = requestUrl[1];
                    }
                } else {
                    requestUrl = requestUrl[1];
                }
            } else {
                requestUrl = requestUrl[0];
            }
            if (typeof (requestUrl) == "undefined") {
                requestUrl = requestUrlTemp;
            }
            requestUrl = String.format(requestUrl, $input
					.val());
            if (flag) {
                requestUrl += "&staticRequest=yes";
            }
            queryArticleByCondition(input, requestUrl);
        }
    }
    return;
}
function jumpTo(btn, totalPages, currentPage, requestUrl) {
    var requestUrlTemp = requestUrl;
    var $input = $(btn).prev("input");
    if (!$input.val().match(/^\d*$/)) {
        // alert('åªèƒ½è¾“å…¥æ•°å­—ï¼');
        $input.val(currentPage);
        $input.focus();
    } else if (parseInt($input.val()) > parseInt(totalPages)
			|| parseInt($input.val()) <= 0) {
        // alert('å¯¹ä¸èµ·,æ‚¨è¾“å…¥çš„é¡µç è¶…å‡ºäº†èŒƒå›´ï¼');
        $input.val(currentPage);
        $input.focus();
    } else {
        currentPage = $input.val();
        var requestUrl = requestUrl.split("||");
        var isStaticRequest = $("#isStaticRequest").val();
        var isOpenStaticPageList = $("#isOpenStaticPageList").val();
        var defaultPublishPage = parseInt($("#defaultPublishPage").val());
        var flag = false;
        if (isStaticRequest == "yes") {
            if (isOpenStaticPageList == "yes") {
                if (currentPage > defaultPublishPage) {
                    requestUrl = requestUrl[0];
                    flag = true;
                } else {
                    requestUrl = requestUrl[1];
                }
            } else {
                requestUrl = requestUrl[1];
            }
        } else {
            requestUrl = requestUrl[0];
        }
        if (typeof (requestUrl) == "undefined") {
            requestUrl = requestUrlTemp;
        }
        requestUrl = String.format(requestUrl, $input
					.val());
        if (flag) {
            requestUrl += "&staticRequest=yes";
        }
        // getRootWin().location.href = requestUrl;
        queryArticleByCondition(btn, requestUrl);
    }
}
/** js formatå‡½æ•°,ä¾‹å¦‚ï¼ŒString.format(â€™<a href=â€%1â€³>%2</a>â€™, url, msg); */
String.format = function (str) {
    var args = arguments, re = new RegExp("%([1-" + args.length + "])", "g");
    return String(str).replace(re, function ($1, $2) {
        return args[$2];
    });
};
/** èŽ·å–éšæœºé¢œè‰² */
function getRandomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16))
			.substr(-6);
}
/**
 * ç”Ÿæˆå¯Œæ–‡æœ¬ç¼–è¾‘å™¨
 * 
 * @param id
 * @param width
 * @param height
 * @return
 */
function getCkEditor(id, width, height) {
    var $portaltoolsPortletId = getRootWin().$("#portaltoolsPortletId").val();
    var $pageId = getRootWin().$("#eprotalCurrentPageId").val();
    var uploadUrl = "/eportal/ui?moduleId=" + $portaltoolsPortletId + "&pageId=" + $pageId + "&struts.portlet.action=/portlet/uploadFile.action&isCkEditor=true";
    var ckeditor = CKEDITOR.replace(id,
			{
			    width: width,
			    height: height,
			    autoUpdateElement: true,
			    skin: 'extGray',
			    enterMode: CKEDITOR.ENTER_BR,
			    filebrowserUploadUrl: uploadUrl + "&uploadType=attach",
			    filebrowserImageUploadUrl: uploadUrl + "&uploadType=image",
			    filebrowserFlashUploadUrl: uploadUrl + "&uploadType=video",
			    resize_enabled: false,
			    ifCheckContent: true,
			    extraPlugins: 'iframedialog',
			    toolbar: [
						{
						    name: 'document',
						    items: ['Source', '-', 'DocProps', 'Print', '-']
						},
						{
						    name: 'clipboard',
						    items: ['PasteText', 'PasteFromWord', '-',
									'Undo', 'Redo', '-']
						},
						{
						    name: 'editing',
						    items: ['Find', 'Replace', '-', 'SelectAll']
						},
						{
						    name: 'insert',
						    items: ['Image', 'Flash', 'Table',
									'HorizontalRule', '-']
						},
						// '/',
						{
						    name: 'basicstyles',
						    items: ['Bold', 'Italic', 'Underline', 'Strike',
									'-', 'RemoveFormat']
						},
						{
						    name: 'paragraph',
						    items: ['JustifyLeft', 'JustifyCenter',
									'JustifyRight', 'JustifyBlock', '-']
						}, {
						    name: 'links',
						    items: ['Link', 'Unlink', '-']
						},
						// 'textindent','textoutdent','textIndentAll','delAllFirstSpaces','delEmptyP','changetext'
						// '/',
						{
						    name: 'styles',
						    items: ['Font', 'FontSize', '-']
						}, {
						    name: 'colors',
						    items: ['TextColor', 'BGColor', '-']
						}, {
						    name: 'tools',
						    items: ['ShowBlocks']
						}]
			});
    return ckeditor;
}
function getMyCkEditor(id, array, hasTabBar, readOnly, ifCheckContent, isSourceMode) {
    if (readOnly != null && typeof (readOnly) != 'undefined') {
        readOnly = readOnly;
    } else {
        readOnly = false;
    }
    if (ifCheckContent != null && typeof (ifCheckContent) != 'undefined') {
        ifCheckContent = ifCheckContent;
    } else {
        ifCheckContent = false;
    }
    var $portaltoolsPortletId = getRootWin().$("#portaltoolsPortletId").val();
    var $pageId = getRootWin().$("#eprotalCurrentPageId").val();
    var uploadUrl = "/eportal/ui?moduleId=" + $portaltoolsPortletId + "&pageId=" + $pageId + "&struts.portlet.action=/portlet/uploadFile.action&isCkEditor=true";
    var isOnlyUseCkeditorSourceMode = $("#isOnlyUseCkeditorSourceMode").val();
    var myToolBar = null;
    var startupMode = "wysiwyg";
    if ("yes" == isOnlyUseCkeditorSourceMode) {
        myToolBar = [
			{ name: 'document', items: ['DocProps', 'Print', '-'] },
			{ name: 'clipboard', items: ['PasteText', 'PasteFromWord', 'uploadWordImg', '-', 'Undo', 'Redo', '-'] },
			// { name: 'clipboard', items : [
			// 'PasteText','PasteFromWord','-','Undo','Redo','-' ] },
			{ name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll'] },
			{ name: 'insert', items: ['imageUpload', 'Flash', 'Table', 'HorizontalRule', '-'] },
			// { name: 'insert', items : [
			// 'Image','Flash','Table','HorizontalRule','-'] },
			// '/',
			{ name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat'] },
			{ name: 'paragraph', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-'] },
			{ name: 'links', items: ['Link', 'Unlink', '-'] },
         // 'textindent','textoutdent','textIndentAll','delAllFirstSpaces','delEmptyP','changetext'
			// '/',
			{ name: 'styles', items: ['Font', 'FontSize', '-'] },
			{ name: 'colors', items: ['TextColor', 'BGColor', '-'] },
			{ name: 'tools', items: ['ShowBlocks'] }
        ];
        startupMode = "source";
    } else {
        myToolBar = [
					{ name: 'document', items: ['Source', '-', 'DocProps', 'Print', '-'] },
					{ name: 'clipboard', items: ['PasteText', 'PasteFromWord', 'uploadWordImg', '-', 'Undo', 'Redo', '-'] },
					// { name: 'clipboard', items : [
					// 'PasteText','PasteFromWord','-','Undo','Redo','-' ] },
					{ name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll'] },
					{ name: 'insert', items: ['imageUpload', 'Flash', 'Table', 'HorizontalRule', '-'] },
					// { name: 'insert', items : [
					// 'Image','Flash','Table','HorizontalRule','-'] },
					// '/',
					{ name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat'] },
					{ name: 'paragraph', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-'] },
					{ name: 'links', items: ['Link', 'Unlink', '-'] },
		         // 'textindent','textoutdent','textIndentAll','delAllFirstSpaces','delEmptyP','changetext'
					// '/',
					{ name: 'styles', items: ['Font', 'FontSize', '-'] },
					{ name: 'colors', items: ['TextColor', 'BGColor', '-'] },
					{ name: 'tools', items: ['ShowBlocks'] }
        ];
        // å¦‚æžœæ˜¯htmlç¼–è¾‘é¡µé¢éœ€è¦æ ¹æ®ç³»ç»Ÿå‚æ•°isShowSourceæ¥æŽ§åˆ¶æºç æŒ‰é’®çš„æ˜¾ç¤º
        var isShowSourceButton = document.getElementById("isShowSourceButton");
        if (typeof (isShowSourceButton) != 'undefined') {
            try {
                isShowSourceButton = document.getElementById("isShowSourceButton").value;
            } catch (e) {
                isShowSourceButton = "true";
            }
        } else {
            isShowSourceButton = "true";
        }
        if (isShowSourceButton != "true") {
            myToolBar = [
						{ name: 'document', items: ['DocProps', 'Print', '-'] },
						{ name: 'clipboard', items: ['PasteText', 'PasteFromWord', 'uploadWordImg', '-', 'Undo', 'Redo', '-'] },
						// { name: 'clipboard', items : [
						// 'PasteText','PasteFromWord','-','Undo','Redo','-' ]
						// },
						{ name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll'] },
						{ name: 'insert', items: ['imageUpload', 'Flash', 'Table', 'HorizontalRule', '-'] },
						// { name: 'insert', items : [
						// 'Image','Flash','Table','HorizontalRule','-'] },
						// '/',
						{ name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat'] },
						{ name: 'paragraph', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-'] },
						{ name: 'links', items: ['Link', 'Unlink', '-'] },
			         // 'textindent','textoutdent','textIndentAll','delAllFirstSpaces','delEmptyP','changetext'
						// '/',
						{ name: 'styles', items: ['Font', 'FontSize', '-'] },
						{ name: 'colors', items: ['TextColor', 'BGColor', '-'] },
						{ name: 'tools', items: ['ShowBlocks'] }
            ];
        }
    }
    var editor = new myEditor(document.getElementById(id), {
        toolbar: myToolBar,
        data: array,
        hasTabBar: hasTabBar,
        readOnly: readOnly,
        hasFormatBar: false,
        ifCheckContent: ifCheckContent,
        startupMode: startupMode,
        enterMode: CKEDITOR.ENTER_BR,
        filebrowserImageUploadSuffix: ["gif", "jpg", "jpeg", "bmp", "png", "GIF", "JPG", "JPEG", "BMP", "PNG"],
        filebrowserUploadUrl: uploadUrl + "&uploadType=attach",
        filebrowserFlashUploadUrl: uploadUrl + "&uploadType=video",
        filebrowserImageUploadUrl: uploadUrl + "&uploadType=image",
        ImgUploadUrl: uploadUrl + "&imageUpload=true&uploadType=image"
    });
    return editor;
}
/**
 * @param element
 *            è§¦å‘çš„å…ƒç´ 
 * @param url
 *            æŸ¥è¯¢åœ°å€
 * @return
 */
function queryArticleByCondition(element, url) {
    var $form = $(element).closest("form");
    var params = "";
    if (typeof ($form[0]) != "undefined") {
        $form[0].action = url;
        $form[0].submit();
    } else {
        $forms = $(element).closest(".portlet").find("form");
        if (typeof ($forms[0]) != "undefined") {
            $forms[0].action = url;
            $forms[0].submit();
        } else {
            jumpToUrl(url);
        }
    }
}
function jumpToUrl(url) {
    getRootWin().location.href = url;
}
/**
 * å‰å°ç³»ç»Ÿé€€å‡º
 * 
 * @param url
 * @return
 */
function logoutCms() {
    var $epsPortletId = $("#epsPortletId").val();
    var $pageId = $("#eprotalCurrentPageId").val();
    var url = "/eportal/ui?moduleId=" + $epsPortletId + "&pageId=" + $pageId + "&struts.portlet.action=/security/frontLogout.action";
    $.ajax({
        type: "post",
        url: url,
        dataType: "text",
        success: function (msg) {
            if (msg == "success") {
                showTipsDialog('é€€å‡ºæˆåŠŸï¼', 'okay');
                window.location.reload();
            } else {
                window.location.reload();
            }
        },
        error: function () {
            // $.dialog.alert("é€€å‡ºå‡ºé”™å•¦ï¼");
        }
    });
}
/** jsæš‚åœå‡½æ•° */
function Pause(obj, iMinSecond) {
    if (window.eventList == null)
        window.eventList = new Array();
    var ind = -1;
    for (var i = 0; i < window.eventList.length; i++) {
        if (window.eventList[i] == null) {
            window.eventList[i] = obj;
            ind = i;
            break;
        }
    }
    if (ind == -1) {
        ind = window.eventList.length;
        window.eventList[ind] = obj;
    }
    setTimeout("GoOn(" + ind + ")", iMinSecond);
}
// jsç»§ç»­å‡½æ•°
function GoOn(ind) {
    var obj = window.eventList[ind];
    window.eventList[ind] = null;
    if (obj.NextStep)
        obj.NextStep();
    else
        obj();
}
/**
 * æŠ•ç¥¨å‡½æ•° *
 * 
 * @param key:æ–‡ç« key
 * @param isMany:-1ä»£è¡¨ä¸é™åˆ¶æŠ•ç¥¨æ¬¡æ•°,ä¸ºç©ºæ—¶ä»£è¡¨æ¯ä¸ªä¼šå‘˜å¯¹ä¸€ç¯‡æ–‡ç« åªå…è®¸æŠ•ä¸€æ¬¡ï¼Œ>0æ—¶ä»£è¡¨å¯ä»¥æŠ•å¤šå°‘æ¬¡
 * @return
 */
function articleVote(key, isMany) {
    if (key.match(/^\s*$/)) {
        $.dialog.alert('æ²¡æœ‰èŽ·å–åˆ°ä½œå“key');
        return;
    }
    var memeber = $('#currentLoginMemberId').val();
    if (memeber.match(/^\s*$/)) {// æœªç™»å½•
        var bt = window.confirm('ç™»å½•åŽæ‰èƒ½æŠ•ç¥¨ï¼Œè¯·å…ˆç™»å½•');
        if (bt == true) {
            var $eportalappPortletId = $("#eportalappPortletId").val();
            var $pageId = $("#eprotalCurrentPageId").val();
            var memberLoginUrl = "/eportal/ui?moduleId=" + $eportalappPortletId + "&pageId=" + $pageId + "&struts.portlet.action=/app/member!toLogin.action";
            openDialog('memberLoginWin', 'ä¼šå‘˜ç™»å½•', memberLoginUrl, 320, 160);
        }
        return;
    } else {// å·²ç»ç™»å½•
        var $epsPortletId = $("#epsPortletId").val();
        var $pageId = $("#eprotalCurrentPageId").val();
        var voteUrl = "/eportal/ui?moduleId=" + $epsPortletId + "&pageId=" + $pageId + "&struts.portlet.action=/portlet/article!vote.action";
        var url = voteUrl + '&key=' + key;
        if (typeof (isMany) != 'undefined' && !isMany.match(/^\s*$/)) {
            url = voteUrl + '&key=' + key + '&isMany=' + isMany;
        }
        if (url.match(/^\s*$/)) {
            $.dialog.alert('æ²¡æœ‰è®¾ç½®æŠ•ç¥¨æŽ¥å£(head.vm)');
            return;
        }
        $.ajax({
            type: "post",
            url: url,
            dataType: "text",
            async: false,
            success: function (response) {
                var result = eval("(" + response + ")");
                if (result.success == true) {
                    showTipsDialog('æ­å–œæ‚¨ï¼ŒæŠ•ç¥¨æˆåŠŸï¼', 'okay');
                } else {
                    $.dialog.alert(result.msg);
                }
            },
            error: function (response) {
                result = eval("(" + response + ")");
                $.dialog.alert(result.msg);
            }
        });
    }
}
/** åœ¨å‰å°åˆ é™¤æ–‡ç«  */
function deleteArticleFun(entityId, columnId) {
    var pageId = $("#eprotalCurrentPageId").val();
    var moduleId = $("#epsPortletId").val();
    var url = "/eportal/ui?moduleId=" + moduleId + "&pageId=" + pageId + "&struts.portlet.action=/portlet/article!deleteArticle.action";
    $.dialog.confirm("ä½ ç¡®å®šè¦åˆ é™¤å—?", function () {
        $.ajax({
            type: "post",
            url: url,
            dataType: "text",
            data: { "entityId": entityId, "columnId": columnId },
            success: function (msg) {
                if (msg == "success") {
                    showTipsDialog('åˆ é™¤æˆåŠŸï¼', 'okay');
                    window.location.reload();
                } else {
                    $.dialog.alert(msg);
                }
            },
            error: function (response) {
                $.dialog.alert("åˆ é™¤å¤±è´¥!" + response);
            }
        });
    });
}
/** åŠ¨æ€å¼•å…¥jsæ–‡ä»¶ */
function includeJsFile(jsPath, callback) {
    var flag = false;
    var scriptTags = document.getElementsByTagName('script');
    for (var i = 0; i < scriptTags.length; i++) {
        var src = scriptTags[i].getAttribute("src");
        if (src == jsPath) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        if (typeof (callback) != "undefined" && !callback.match(/^\s*$/)) {
            // åˆ›å»ºæµ®åŠ¨å±‚
            $.blockUI({
                message: "<h1><img src='"
                        + $("#contextPath").val()
                        + "/uiFramework/images/loading.gif'/>åŠ è½½æ•°æ®ä¸­ã€‚ã€‚ã€‚è¯·ç¨åŽï¼</h1>",
                css: {
                    border: '3px solid #FFFFFF',
                    height: '40px'
                },
                overlayCSS: {
                    backgroundColor: '#E5ECF9'
                }
            });
        }
        var html_doc = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', jsPath);
        html_doc.appendChild(script);
        if ($.browser.msie) {
            script.onreadystatechange = function () {
                if (this.readyState == 'loaded' || this.readyState == 'complete') {
                    if (typeof (callback) != "undefined" && !callback.match(/^\s*$/)) {
                        // å…³é—­æµ®åŠ¨å±‚
                        $.unblockUI();
                        eval(callback + "()");
                    }
                }
            }
        } else {
            script.onload = function () {
                if (typeof (callback) != "undefined" && !callback.match(/^\s*$/)) {
                    // å…³é—­æµ®åŠ¨å±‚
                    $.unblockUI();
                    eval(callback + "()");
                }
            }
        }
    } else {
        if (typeof (callback) != "undefined" && !callback.match(/^\s*$/)) {
            eval(callback + "()");
        }
    }
    return false;
}
/** åˆ·æ–°æ‰‹æœºç«™ç‚¹iframeé¡µé¢ */
function refreshMobileViewIframe() {
    if ($("iframe[class=eps-phone-view]")[0]) {
        var eprotalCurrentPageId = $("#eprotalCurrentPageId").val();
        $("iframe[class=eps-phone-view]").attr("src", "/eportal/ui?mobilePreviewMode=true&&pageId=" + eprotalCurrentPageId);
    }
}
/** åˆ›å»ºcookie */
function setCookie(name, value) {
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if (expires != null) {
        var LargeExpDate = new Date();
        LargeExpDate.setTime(LargeExpDate.getTime()
                + (expires * 1000 * 3600 * 24));
    }
    document.cookie = name
            + "="
            + escape(value)
            + ((expires == null) ? "" : ("; expires=" + LargeExpDate
                    .toGMTString()));
}
/** èŽ·å–cookie */
function getCookie(Name) {
    var search = Name + "="
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if (end == -1)
                end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        } else
            return ""
    }
}
/** åˆ¤æ–­httpè¯·æ±‚æ˜¯å¦æ¥è‡ªPCè®¾å¤‡ */
function jumpToPhoneSite(phoneUrl, homePageId) {
    // å¹³å°ã€è®¾å¤‡å’Œæ“ä½œç³»ç»Ÿ
    var system = {
        win: false,
        mac: false,
        xll: false
    };
    // æ£€æµ‹å¹³å°
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    var flag = system.win || system.mac || system.xll;
    // å¦‚æžœä¸æ˜¯æ¥è‡ªç”µè„‘åˆ™è½¬å‘æ‰‹æœºåœ°å€
    if (!flag) {
        var eprotalCurrentPageId = $("#eprotalCurrentPageId").val();
        if (typeof (homePageId) == "undefined" || homePageId == null || homePageId == null) {
            window.location.href = phoneUrl;
        } else if (eprotalCurrentPageId == homePageId) {
            window.location.href = phoneUrl;
        }
    }
}
// å¤„ç†snsç”¨æˆ·ç™»å½•
function toSnsUserLogin(loginType) {
    var $eportalappPortletId = $("#eportalappPortletId").val();
    var $pageId = $("#eprotalCurrentPageId").val();
    var toSnsLoginUrl = "/eportal/ui?moduleId=" + $eportalappPortletId + "&pageId=" + $pageId + "&struts.portlet.action=/app/member-sns-login!toSnsLogin.action";
    window.location.href = toSnsLoginUrl + "&loginType=" + loginType;
}
// å¤„ç†é”™è¯¯é¡µé¢æç¤º
$(document).keyup(function (e) {
    try {
        var eprotalCurrentArticleKey = $("input[id='eprotalCurrentArticleKey']").val();
        if (eprotalCurrentArticleKey != null && eprotalCurrentArticleKey != "") {
            if (e.ctrlKey && e.which == 13) {
                if (window.getSelection) {
                    var errorDescribe = window.getSelection().toString();
                    toErrorCorrectViewPopUp(errorDescribe)
                }
                else if (document.getSelection) {
                    var errorDescribe = document.getSelection();
                    toErrorCorrectViewPopUp(errorDescribe)
                }
                else if (document.selection) {
                    var errorDescribe = document.selection.createRange().text;
                    toErrorCorrectViewPopUp(errorDescribe)
                }
            }
        }
    } catch (err) {

    }
});
// è·³è½¬è‡³çº é”™é¡µé¢
function toErrorCorrectViewPopUp(errorDescribe) {
    try {
        var moduleId;
        var pageId = $("input[id='eprotalCurrentPageId']").val()
        var articleKey = $("input[id='eprotalCurrentArticleKey']").val();
        var columnId = $("input[id='eprotalCurrentColumnId']").val()
        var url = window.location.href;
        url = url.replace(/&/g, "^");
        var title = document.title;
        jQuery.ajax({
            type: "POST",
            url: "/eportal/ui?moduleId=3&struts.portlet.action=/portlet/errorCorrectFront!getModuleId.action",
            async: false,
            error: function (request) {
            },
            success: function (data) {
                moduleId = data;
                var popUrl = "/eportal/ui?mode=popup&columnId=" + columnId + "&moduleId=" + moduleId + "&channelId=" + pageId + "&articleKey=" + articleKey + "&url=" + url + "&title=" + title + "&errorDescribe=" + errorDescribe + "&struts.portlet.action=/portlet/errorCorrectFront!toView.action";
                openDialog('toErrorCorrectView', 'æ–‡ç« çº é”™ç®¡ç†', popUrl, 800, 300)
            }
        });
    } catch (err) {

    }
}
function toErrorCorrectView() {
    try {
        var id = "";;
        jQuery.ajax({
            type: "POST",
            url: "/eportal/ui?moduleId=3&struts.portlet.action=/portlet/errorCorrectFront!getPageId.action&pageId=" + $("#eprotalCurrentPageId").val(),
            async: false,
            error: function (request) {
            },
            success: function (data) {
                id = data;
            }
        });
        if (id == "") {
            alert("æœªæ‰¾åˆ°è¯¥ç«™ç‚¹çº é”™é¡µé¢ï¼");
            return;
        }
        var pageId = $("input[id='eprotalCurrentPageId']").val()
        var articleKey = $("input[id='eprotalCurrentArticleKey']").val();
        var columnId = $("input[id='eprotalCurrentColumnId']").val()
        var aform = document.createElement('form');
        var url = window.location.href;
        var title = document.title;
        aform.method = 'post';
        aform.target = '_blank';
        aform.action = '/eportal/ui?pageId=' + id;
        var a = document.createElement('input');
        a.type = 'hidden';
        a.name = 'channelId';
        a.value = pageId;
        aform.appendChild(a);
        var b = document.createElement('input');
        b.type = 'hidden';
        b.name = 'articleKey';
        b.value = articleKey;
        aform.appendChild(b);
        var c = document.createElement('input');
        c.type = 'hidden';
        c.name = 'pageId';
        c.value = id;
        aform.appendChild(c);
        var d = document.createElement('input');
        d.type = 'hidden';
        d.name = 'url';
        d.value = url;
        aform.appendChild(d);
        var e = document.createElement('input');
        e.type = 'hidden';
        e.name = 'title';
        e.value = title;
        aform.appendChild(e);
        var f = document.createElement('input');
        f.type = 'hidden';
        f.name = 'mode';
        f.value = 'common';
        aform.appendChild(f);
        var g = document.createElement('input');
        g.type = 'hidden';
        g.name = 'columnId';
        g.value = columnId;
        aform.appendChild(g);
        document.body.appendChild(aform);
        aform.submit();
    } catch (err) { }
}

/**
 * è®°å½•å¤–é“¾æ–‡ç« æµè§ˆæ¬¡æ•°
 * 
 * @param articleKey
 *            æ–‡ç« key
 * @return
 */
function recordLinkArticleHits(articleKey) {
    if ($("#isOpenArticleScan").val() == "yes") {
        if (articleKey != null && articleKey != "undefined" && articleKey != "null" && !articleKey.match(/^\s*$/)) {
            var moduleId = $("#epsPortletId").val();
            var url = "/eportal/ui?pageId=" + $("#eprotalCurrentPageId").val() + "&moduleId=" + moduleId + "&articleKey=" + articleKey + "&articleType=yes&struts.portlet.action=/portlet/article-scan!scanSave.action";
            $.ajax({
                type: "post",
                url: url,
                dataType: "text",
                async: false,
                success: function (msg) {
                }
            });
        }
    }
}
/**
 * è®¾ç½®cookie
 * 
 * @param name
 *            cookieåç§°
 * @param value
 *            cookieå€¼
 * @param expiresDays
 *            è¿‡æœŸå¤©æ•°ï¼Œä¸ºç©ºé»˜è®¤åå¤©
 * @return
 */
function setPortalCookie(name, value, expiresDays) {
    var expDate = new Date();
    if (expiresDays != null) {
        expDate.setTime(expDate.getTime()
				+ (expiresDays * 1000 * 3600 * 24));
    } else {
        expDate.setTime(expDate.getTime()
				+ (10 * 1000 * 3600 * 24));
    }
    document.cookie = name
			+ "="
			+ escape(value)
			+ ("; expires=" + expDate
					.toGMTString());
}
/**
 * æ ¹æ®cookieçš„åç§°èŽ·å–cookie
 * 
 * @param Name
 * @return
 */
function getPortalCookie(Name) {
    var search = Name + "="
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if (end == -1) {
                end = document.cookie.length;
            }
            return unescape(document.cookie.substring(offset, end))
        } else {
            return "";
        }
    }
    return "";
}
/**
 * å‰å°æ¨¡å—è®¾ç½®é¡µé¢è¿”å›žè·³è½¬å‡½æ•°
 * 
 * @param url
 * @return
 */
function jumpToEportalPageUrl(url) {
    var portalLastRequestUrl = $("#portalLastRequestUrl").val();
    if (typeof (portalLastRequestUrl) != "undefined" && portalLastRequestUrl != "") {
        url = portalLastRequestUrl;
    }
    window.location.href = url;
}
// èŽ·å–ä¼šå‘˜ä¿¡æ¯
function getMemberLoginInfo() {
    var result = "";
    var url = "/eportal/ui?moduleId=" + $("#eportalappPortletId").val() + "&pageId=" + $("#eprotalCurrentPageId").val() + "&struts.portlet.action=/app/member!getLoginInfo.action&loginType=2";
    $.ajax({
        type: "post",
        url: url,
        async: false,// è®¾ç½®ä¸ºåŒæ­¥
        dataType: "json",
        success: function (msg) {
            result = msg;
        },
        error: function () {
            result = "";
        }
    });
    return result;
}
/** èŽ·å–ç®¡ç†å‘˜ä¿¡æ¯ */
function getManagerLoginInfo() {
    var result = "";
    var url = "/eportal/ui?moduleId=" + $("#eportalappPortletId").val() + "&pageId=" + $("#eprotalCurrentPageId").val() + "&struts.portlet.action=/app/member!getLoginInfo.action&loginType=1";
    $.ajax({
        type: "post",
        url: url,
        async: false,// è®¾ç½®ä¸ºåŒæ­¥
        dataType: "json",
        cache: true,
        timeout: 15000,
        success: function (msg) {
            result = msg;
        },
        error: function () {
            alert("èŽ·å–ç®¡ç†å‘˜ä¿¡æ¯è¯·æ±‚é”™è¯¯");
        }
    });
    return result;
}
/** ä¼šå‘˜é€€å‡ºå‡½æ•° */
function memberLogoutEasysite() {
    var url = "/eportal/ui?moduleId=" + $("#eportalappPortletId").val() + "&pageId=" + $("#eprotalCurrentPageId").val() + "&struts.portlet.action=/app/member!logout.action";
    $.ajax({
        type: "post",
        url: url,
        dataType: "text",
        timeout: 15000,
        cache: true,
        success: function (msg) {
            msg = eval("(" + msg + ")");
            if (msg.success) {
                showTipsDialog('é€€å‡ºæˆåŠŸï¼', 'okay');
                window.location.reload();
            } else {
                showTipsDialog('é€€å‡ºå‡ºé”™ï¼', 'error');
            }
        },
        error: function () {
            showTipsDialog('é€€å‡ºå‡ºé”™ï¼', 'error');
            flag = false;
        }
    });
}