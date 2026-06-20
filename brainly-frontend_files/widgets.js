Function && Function.prototype && Function.prototype.bind && (/(MSIE ([6789]|10|11))|Trident/.test(navigator.userAgent) || (window.__twttr && window.__twttr.widgets && window.__twttr.widgets.loaded && window.twttr.widgets.load && window.twttr.widgets.load(), window.__twttr && window.__twttr.widgets && window.__twttr.widgets.init || function(t) {
	function e(e) {
		for (var n, i, o = e[0], s = e[1], a = 0, c = []; a < o.length; a++) i = o[a], r[i] && c.push(r[i][0]), r[i] = 0;
		for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
		for (u && u(e); c.length;) c.shift()();
	}
	var n = {}, r = { 0: 0 };
	function i(e) {
		if (n[e]) return n[e].exports;
		var r = n[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
	}
	i.e = function(t) {
		var e = [], n = r[t];
		if (0 !== n) if (n) e.push(n[2]);
		else {
			var o = new Promise(function(e, i) {
				n = r[t] = [e, i];
			});
			e.push(n[2] = o);
			var s, a = document.getElementsByTagName("head")[0], u = document.createElement("script");
			u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.src = function(t) {
				return i.p + "js/" + ({
					1: "broadcast",
					2: "dm_button",
					3: "button",
					4: "moment",
					5: "periscope_on_air",
					6: "timeline",
					7: "tweet"
				}[t] || t) + "." + {
					1: "32f7abac95f95f4b72697654e422bf03",
					2: "82e934513bb92e5e48c40f0a5dba5ac3",
					3: "2276a045429f6681b56da5eb1dcfa53c",
					4: "d66d66402934d0020bbb58072f5fd8fb",
					5: "9dc744c66140b0ec5438ccc0bc92bb0b",
					6: "9ee124fd8db0c3ba3796e9613bbc9e53",
					7: "7a6003258de838c35e66fd0f50ebdb0f"
				}[t] + ".js";
			}(t), s = function(e) {
				u.onerror = u.onload = null, clearTimeout(c);
				var n = r[t];
				if (0 !== n) {
					if (n) {
						var i = e && ("load" === e.type ? "missing" : e.type), o = e && e.target && e.target.src, s = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + o + ")");
						s.type = i, s.request = o, n[1](s);
					}
					r[t] = void 0;
				}
			};
			var c = setTimeout(function() {
				s({
					type: "timeout",
					target: u
				});
			}, 12e4);
			u.onerror = u.onload = s, a.appendChild(u);
		}
		return Promise.all(e);
	}, i.m = t, i.c = n, i.d = function(t, e, n) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		});
	}, i.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
	}, i.t = function(t, e) {
		if (1 & e && (t = i(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default", {
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function(e) {
			return t[e];
		}.bind(null, r));
		return n;
	}, i.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default;
		} : function() {
			return t;
		};
		return i.d(e, "a", e), e;
	}, i.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e);
	}, i.p = "https://platform.twitter.com/", i.oe = function(t) {
		throw console.error(t), t;
	};
	var o = window.__twttrll = window.__twttrll || [], s = o.push.bind(o);
	o.push = e, o = o.slice();
	for (var a = 0; a < o.length; a++) e(o[a]);
	var u = s;
	i(i.s = 84);
}([
	function(t, e, n) {
		var r = n(1);
		function i(t, e) {
			var n;
			for (n in t) t.hasOwnProperty && !t.hasOwnProperty(n) || e(n, t[n]);
			return t;
		}
		function o(t) {
			return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
		}
		function s(t) {
			return t === Object(t);
		}
		function a(t) {
			var e;
			if (!s(t)) return !1;
			if (Object.keys) return !Object.keys(t).length;
			for (e in t) if (t.hasOwnProperty(e)) return !1;
			return !0;
		}
		function u(t) {
			return t ? Array.prototype.slice.call(t) : [];
		}
		t.exports = {
			aug: function(t) {
				return u(arguments).slice(1).forEach(function(e) {
					i(e, function(e, n) {
						t[e] = n;
					});
				}), t;
			},
			async: function(t, e) {
				r.setTimeout(function() {
					t.call(e || null);
				}, 0);
			},
			compact: function t(e) {
				return i(e, function(n, r) {
					s(r) && (t(r), a(r) && delete e[n]), void 0 !== r && null !== r && "" !== r || delete e[n];
				}), e;
			},
			contains: function(t, e) {
				return !(!t || !t.indexOf) && t.indexOf(e) > -1;
			},
			forIn: i,
			isObject: s,
			isEmptyObject: a,
			toType: o,
			isType: function(t, e) {
				return t == o(e);
			},
			toRealArray: u
		};
	},
	function(t, e) {
		t.exports = window;
	},
	function(t, e, n) {
		var r = n(6);
		t.exports = function() {
			var t = this;
			this.promise = new r(function(e, n) {
				t.resolve = e, t.reject = n;
			});
		};
	},
	function(t, e) {
		t.exports = document;
	},
	function(t, e, n) {
		var r = n(16), i = /(?:^|(?:https?:)?\/\/(?:www\.)?(?:x|twitter)\.com(?::\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i, o = /(?:^|(?:https?:)?\/\/(?:www\.)?(?:x|twitter)\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i, s = /^http(s?):\/\/(\w+\.)*(?:x|twitter)\.com([:/]|$)/i, a = /^http(s?):\/\/(ton|pbs)\.twimg\.com/, u = /^#?([^.,<>!\s/#\-()'"]+)$/, c = /(?:x|twitter)\.com(?::\d{2,4})?\/intent\/(\w+)/, d = /^https?:\/\/(?:www\.)?(?:x|twitter)\.com\/\w+\/timelines\/(\d+)/i, f = /^https?:\/\/(?:www\.)?(?:x|twitter)\.com\/i\/moments\/(\d+)/i, l = /^https?:\/\/(?:www\.)?(?:x|twitter)\.com\/(\w+)\/(?:likes|favorites)/i, h = /^https?:\/\/(?:www\.)?(?:x|twitter)\.com\/(\w+)\/lists\/([\w-%]+)/i, p = /^https?:\/\/(?:www\.)?(?:x|twitter)\.com\/i\/live\/(\d+)/i, m = /^https?:\/\/syndication\.(?:x|twitter)\.com\/settings/i, v = /^https?:\/\/(localhost|platform)\.(?:x|twitter)\.com(?::\d+)?\/widgets\/widget_iframe\.(.+)/i, g = /^https?:\/\/(?:www\.)?(?:x|twitter)\.com\/search\?q=(\w+)/i;
		function w(t) {
			return "string" == typeof t && i.test(t) && RegExp.$1.length <= 20;
		}
		function y(t) {
			if (w(t)) return RegExp.$1;
		}
		function b(t, e) {
			var n = r.decodeURL(t);
			if (e = e || !1, n.screen_name = y(t), n.screen_name) return r.url("https://x.com/intent/" + (e ? "follow" : "user"), n);
		}
		function _(t) {
			return "string" == typeof t && u.test(t);
		}
		function E(t) {
			return "string" == typeof t && o.test(t);
		}
		t.exports = {
			isHashTag: _,
			hashTag: function(t, e) {
				if (e = void 0 === e || e, _(t)) return (e ? "#" : "") + RegExp.$1;
			},
			isScreenName: w,
			screenName: y,
			isStatus: E,
			status: function(t) {
				return E(t) && RegExp.$1;
			},
			intentForProfileURL: b,
			intentForFollowURL: function(t) {
				return b(t, !0);
			},
			isTwitterURL: function(t) {
				return s.test(t);
			},
			isTwimgURL: function(t) {
				return a.test(t);
			},
			isIntentURL: function(t) {
				return c.test(t);
			},
			isSettingsURL: function(t) {
				return m.test(t);
			},
			isWidgetIframeURL: function(t) {
				return v.test(t);
			},
			isSearchUrl: function(t) {
				return g.test(t);
			},
			regexen: { profile: i },
			momentId: function(t) {
				return f.test(t) && RegExp.$1;
			},
			collectionId: function(t) {
				return d.test(t) && RegExp.$1;
			},
			intentType: function(t) {
				return c.test(t) && RegExp.$1;
			},
			likesScreenName: function(t) {
				return l.test(t) && RegExp.$1;
			},
			listScreenNameAndSlug: function(t) {
				var e, n, r;
				if (h.test(t)) {
					e = RegExp.$1, n = RegExp.$2;
					try {
						r = decodeURIComponent(n);
					} catch (t) {}
					return {
						ownerScreenName: e,
						slug: r || n
					};
				}
				return !1;
			},
			eventId: function(t) {
				return p.test(t) && RegExp.$1;
			}
		};
	},
	function(t, e, n) {
		var r = n(0), i = [
			!0,
			1,
			"1",
			"on",
			"ON",
			"true",
			"TRUE",
			"yes",
			"YES"
		], o = [
			!1,
			0,
			"0",
			"off",
			"OFF",
			"false",
			"FALSE",
			"no",
			"NO"
		];
		function s(t) {
			return void 0 !== t && null !== t && "" !== t;
		}
		function a(t) {
			return c(t) && t % 1 == 0;
		}
		function u(t) {
			return c(t) && !a(t);
		}
		function c(t) {
			return s(t) && !isNaN(t);
		}
		function d(t) {
			return r.contains(o, t);
		}
		function f(t) {
			return r.contains(i, t);
		}
		t.exports = {
			hasValue: s,
			isInt: a,
			isFloat: u,
			isNumber: c,
			isString: function(t) {
				return "string" === r.toType(t);
			},
			isArray: function(t) {
				return s(t) && "array" == r.toType(t);
			},
			isTruthValue: f,
			isFalseValue: d,
			asInt: function(t) {
				if (a(t)) return parseInt(t, 10);
			},
			asFloat: function(t) {
				if (u(t)) return t;
			},
			asNumber: function(t) {
				if (c(t)) return t;
			},
			asBoolean: function(t) {
				return !(!s(t) || !f(t) && (d(t) || !t));
			}
		};
	},
	function(t, e, n) {
		var r = n(1), i = n(20), o = n(45);
		i.hasPromiseSupport() || (r.Promise = o), t.exports = r.Promise;
	},
	function(t, e, n) {
		var r = n(0);
		t.exports = function(t, e) {
			var n = Array.prototype.slice.call(arguments, 2);
			return function() {
				var i = r.toRealArray(arguments);
				return t.apply(e, n.concat(i));
			};
		};
	},
	function(t, e) {
		t.exports = location;
	},
	function(t, e, n) {
		var r = n(47);
		t.exports = new r("__twttr");
	},
	function(t, e, n) {
		var r = n(0), i = /\b([\w-_]+)\b/g;
		function o(t) {
			return new RegExp("\\b" + t + "\\b", "g");
		}
		function s(t, e) {
			t.classList ? t.classList.add(e) : o(e).test(t.className) || (t.className += " " + e);
		}
		function a(t, e) {
			t.classList ? t.classList.remove(e) : t.className = t.className.replace(o(e), " ");
		}
		function u(t, e) {
			return t.classList ? t.classList.contains(e) : r.contains(c(t), e);
		}
		function c(t) {
			return r.toRealArray(t.classList ? t.classList : t.className.match(i));
		}
		t.exports = {
			add: s,
			remove: a,
			replace: function(t, e, n) {
				if (t.classList && u(t, e)) return a(t, e), void s(t, n);
				t.className = t.className.replace(o(e), n);
			},
			toggle: function(t, e, n) {
				return void 0 === n && t.classList && t.classList.toggle ? t.classList.toggle(e, n) : (n ? s(t, e) : a(t, e), n);
			},
			present: u,
			list: c
		};
	},
	function(t, e, n) {
		var r = n(19), i = n(5), o = n(16), s = n(0), a = n(110);
		t.exports = function(t) {
			var e = t.href && t.href.split("?")[1], n = e ? o.decode(e) : {}, u = {
				lang: a(t),
				width: t.getAttribute("data-width") || t.getAttribute("width"),
				height: t.getAttribute("data-height") || t.getAttribute("height"),
				related: t.getAttribute("data-related"),
				partner: t.getAttribute("data-partner")
			};
			return i.asBoolean(t.getAttribute("data-dnt")) && r.setOn(), s.forIn(u, function(t, e) {
				var r = n[t];
				n[t] = i.hasValue(r) ? r : e;
			}), s.compact(n);
		};
	},
	function(t, e, n) {
		var r = n(111), i = n(21);
		t.exports = function() {
			var t = "data-twitter-extracted-" + i.generate();
			return function(e, n) {
				return r(e, n).filter(function(e) {
					return !e.hasAttribute(t);
				}).map(function(e) {
					return e.setAttribute(t, "true"), e;
				});
			};
		};
	},
	function(t, e) {
		function n(t, e, n, r, i, o, s) {
			this.factory = t, this.Sandbox = e, this.srcEl = o, this.targetEl = i, this.parameters = r, this.className = n, this.options = s;
		}
		n.prototype.destroy = function() {
			this.srcEl = this.targetEl = null;
		}, t.exports = n;
	},
	function(t, e) {
		t.exports = {
			BROADCAST: "twitter-broadcast",
			DM_BUTTON: "twitter-dm-button",
			FOLLOW_BUTTON: "twitter-follow-button",
			HASHTAG_BUTTON: "twitter-hashtag-button",
			MENTION_BUTTON: "twitter-mention-button",
			MOMENT: "twitter-moment",
			PERISCOPE: "periscope-on-air",
			SHARE_BUTTON: "twitter-share-button",
			TIMELINE: "twitter-timeline",
			TWEET: "twitter-tweet"
		};
	},
	function(t, e, n) {
		var r = n(6), i = n(19), o = n(50), s = n(34), a = n(5), u = n(0);
		t.exports = function(t, e, n) {
			var c;
			return t = t || [], e = e || {}, c = "ƒ(" + t.join(", ") + ", target, [options]);", function() {
				var d, f, l, h, p = Array.prototype.slice.apply(arguments, [0, t.length]), m = Array.prototype.slice.apply(arguments, [t.length]);
				return m.forEach(function(t) {
					t && (t.nodeType !== Node.ELEMENT_NODE ? u.isType("function", t) ? d = t : u.isType("object", t) && (f = t) : l = t);
				}), p.length !== t.length || 0 === m.length ? (d && u.async(function() {
					d(!1);
				}), r.reject(new Error("Not enough parameters. Expected: " + c))) : l ? (f = u.aug({}, f || {}, e), t.forEach(function(t) {
					f[t] = p.shift();
				}), a.asBoolean(f.dnt) && i.setOn(), h = s.getExperiments().then(function(t) {
					return o.addWidget(n(f, l, void 0, t));
				}), d && h.then(d, function() {
					d(!1);
				}), h) : (d && u.async(function() {
					d(!1);
				}), r.reject(new Error("No target element specified. Expected: " + c)));
			};
		};
	},
	function(t, e, n) {
		var r = n(5), i = n(0);
		function o(t) {
			return encodeURIComponent(t).replace(/\+/g, "%2B").replace(/'/g, "%27");
		}
		function s(t) {
			return decodeURIComponent(t);
		}
		function a(t) {
			var e = [];
			return i.forIn(t, function(t, n) {
				var s = o(t);
				i.isType("array", n) || (n = [n]), n.forEach(function(t) {
					r.hasValue(t) && e.push(s + "=" + o(t));
				});
			}), e.sort().join("&");
		}
		function u(t) {
			var e = {};
			return t ? (t.split("&").forEach(function(t) {
				var n = t.split("="), r = s(n[0]), o = s(n[1]);
				if (2 == n.length) {
					if (!i.isType("array", e[r])) return r in e ? (e[r] = [e[r]], void e[r].push(o)) : void (e[r] = o);
					e[r].push(o);
				}
			}), e) : {};
		}
		t.exports = {
			url: function(t, e) {
				return a(e).length > 0 ? i.contains(t, "?") ? t + "&" + a(e) : t + "?" + a(e) : t;
			},
			decodeURL: function(t) {
				var e = t && t.split("?");
				return 2 == e.length ? u(e[1]) : {};
			},
			decode: u,
			encode: a,
			encodePart: o,
			decodePart: s
		};
	},
	function(t, e, n) {
		var r = n(92), i = n(2), o = n(0);
		function s(t, e) {
			return function() {
				try {
					e.resolve(t.call(this));
				} catch (t) {
					e.reject(t);
				}
			};
		}
		t.exports = {
			sync: function(t, e) {
				t.call(e);
			},
			read: function(t, e) {
				var n = new i();
				return r.read(s(t, n), e), n.promise;
			},
			write: function(t, e) {
				var n = new i();
				return r.write(s(t, n), e), n.promise;
			},
			defer: function(t, e, n) {
				var a = new i();
				return o.isType("function", t) && (n = e, e = t, t = 1), r.defer(t, s(e, a), n), a.promise;
			}
		};
	},
	function(t, e, n) {
		var r = n(8), i = n(1), o = n(0), s = {}, a = o.contains(r.href, "tw_debug=true");
		function u() {}
		function c() {}
		function d() {
			return i.performance && +i.performance.now() || +new Date();
		}
		function f(t, e) {
			if (i.console && i.console[t]) switch (e.length) {
				case 1:
					i.console[t](e[0]);
					break;
				case 2:
					i.console[t](e[0], e[1]);
					break;
				case 3:
					i.console[t](e[0], e[1], e[2]);
					break;
				case 4:
					i.console[t](e[0], e[1], e[2], e[3]);
					break;
				case 5:
					i.console[t](e[0], e[1], e[2], e[3], e[4]);
					break;
				default: 0 !== e.length && i.console.warn && i.console.warn("too many params passed to logger." + t);
			}
		}
		t.exports = {
			devError: u,
			devInfo: c,
			devObject: function(t, e) {},
			publicError: function() {
				f("error", o.toRealArray(arguments));
			},
			publicLog: function() {
				f("info", o.toRealArray(arguments));
			},
			publicWarn: function() {
				f("warn", o.toRealArray(arguments));
			},
			time: function(t) {
				a && (s[t] = d());
			},
			timeEnd: function(t) {
				a && s[t] && (d(), s[t]);
			}
		};
	},
	function(t, e, n) {
		var r = n(3), i = n(8), o = n(38), s = n(96), a = n(5), u = n(33), c = !1, d = /https?:\/\/([^/]+).*/i;
		t.exports = {
			setOn: function() {
				c = !0;
			},
			enabled: function(t, e) {
				return !!(c || a.asBoolean(u.val("dnt")) || s.isUrlSensitive(e || i.host) || o.isFramed() && s.isUrlSensitive(o.rootDocumentLocation()) || (t = d.test(t || r.referrer) && RegExp.$1) && s.isUrlSensitive(t));
			}
		};
	},
	function(t, e, n) {
		var r = n(3), i = n(85), o = n(1), s = n(0), a = i.userAgent;
		function u(t) {
			return /(Trident|MSIE|Edge[/ ]?\d)/.test(t = t || a);
		}
		t.exports = {
			retina: function(t) {
				return (t = t || o).devicePixelRatio ? t.devicePixelRatio >= 1.5 : !!t.matchMedia && t.matchMedia("only screen and (min-resolution: 144dpi)").matches;
			},
			anyIE: u,
			ie9: function(t) {
				return /MSIE 9/.test(t = t || a);
			},
			ie10: function(t) {
				return /MSIE 10/.test(t = t || a);
			},
			ios: function(t) {
				return /(iPad|iPhone|iPod)/.test(t = t || a);
			},
			android: function(t) {
				return /^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t = t || a);
			},
			canPostMessage: function(t, e) {
				return t = t || o, e = e || a, t.postMessage && !(u(e) && t.opener);
			},
			touch: function(t, e, n) {
				return t = t || o, e = e || i, n = n || a, "ontouchstart" in t || /Opera Mini/.test(n) || e.msMaxTouchPoints > 0;
			},
			cssTransitions: function() {
				var t = r.body.style;
				return void 0 !== t.transition || void 0 !== t.webkitTransition || void 0 !== t.mozTransition || void 0 !== t.oTransition || void 0 !== t.msTransition;
			},
			hasPromiseSupport: function() {
				return !!(o.Promise && o.Promise.resolve && o.Promise.reject && o.Promise.all && o.Promise.race && (new o.Promise(function(e) {
					t = e;
				}), s.isType("function", t)));
				var t;
			},
			hasIntersectionObserverSupport: function() {
				return !!o.IntersectionObserver;
			},
			hasPerformanceInformation: function() {
				return o.performance && o.performance.getEntriesByType;
			}
		};
	},
	function(t, e) {
		var n = "i", r = 0, i = 0;
		t.exports = {
			generate: function() {
				return n + String(+new Date()) + Math.floor(1e5 * Math.random()) + r++;
			},
			deterministic: function() {
				return n + String(i++);
			}
		};
	},
	function(t, e, n) {
		var r = n(46), i = n(49), o = n(0);
		t.exports = o.aug(r.get("events") || {}, i.Emitter);
	},
	function(t, e, n) {
		var r = n(6), i = n(2);
		function o(t, e) {
			return t.then(e, e);
		}
		function s(t) {
			return t instanceof r;
		}
		t.exports = {
			always: o,
			allResolved: function(t) {
				var e;
				return void 0 === t ? r.reject(new Error("undefined is not an object")) : Array.isArray(t) ? (e = t.length) ? new r(function(n, r) {
					var i = 0, o = [];
					function a() {
						(i += 1) === e && (0 === o.length ? r() : n(o));
					}
					function u(t) {
						o.push(t), a();
					}
					t.forEach(function(t) {
						s(t) ? t.then(u, a) : u(t);
					});
				}) : r.resolve([]) : r.reject(new Error("Type error"));
			},
			some: function(t) {
				var e;
				return e = (t = t || []).length, t = t.filter(s), e ? e !== t.length ? r.reject("non-Promise passed to .some") : new r(function(e, n) {
					var r = 0;
					function i() {
						(r += 1) === t.length && n();
					}
					t.forEach(function(t) {
						t.then(e, i);
					});
				}) : r.reject("no promises passed to .some");
			},
			isPromise: s,
			allSettled: function(t) {
				function e() {}
				return r.all((t || []).map(function(t) {
					return o(t, e);
				}));
			},
			timeout: function(t, e) {
				var n = new i();
				return setTimeout(function() {
					n.reject(new Error("Promise timed out"));
				}, e), t.then(function(t) {
					n.resolve(t);
				}, function(t) {
					n.reject(t);
				}), n.promise;
			}
		};
	},
	function(t, e, n) {
		var r = n(1).JSON;
		t.exports = {
			stringify: r.stringify || r.encode,
			parse: r.parse || r.decode
		};
	},
	function(t, e, n) {
		var r = n(39), i = n(99), o = n(7);
		(r = Object.create(r)).build = o(r.build, null, i), t.exports = r;
	},
	function(t, e, n) {
		var r = n(25), i = n(112);
		t.exports = r.build([i]);
	},
	function(t, e, n) {
		var r = n(49).makeEmitter();
		t.exports = {
			emitter: r,
			START: "start",
			ALL_WIDGETS_RENDER_START: "all_widgets_render_start",
			ALL_WIDGETS_RENDER_END: "all_widgets_render_end",
			ALL_WIDGETS_AND_IMAGES_LOADED: "all_widgets_and_images_loaded"
		};
	},
	function(t, e, n) {
		var r = n(9), i = n(104), o = "https://syndication.twitter.com", s = "https://platform.twitter.com", a = [
			"https://syndication.twitter.com",
			"https://cdn.syndication.twimg.com",
			"https://localhost.twitter.com:8444"
		], u = ["https://syndication.twitter.com", "https://localhost.twitter.com:8445"], c = [
			"https://platform.twitter.com",
			"https://localhost.twitter.com",
			/^https:\/\/ton\.local\.twitter\.com\/syndication-internal\/embed-iframe\/[0-9A-Za-z_-]+\/app/
		], d = function(t, e) {
			return t.some(function(t) {
				return t instanceof RegExp ? t.test(e) : t === e;
			});
		}, f = function() {
			var t = r.get("backendHost");
			return t && d(a, t) ? t : "https://cdn.syndication.twimg.com";
		}, l = function() {
			var t = r.get("settingsSvcHost");
			return t && d(u, t) ? t : o;
		};
		function h(t, e) {
			var n = [t];
			return e.forEach(function(t) {
				n.push(function(t) {
					var e = (t || "").toString(), n = "/" === e.slice(0, 1) ? 1 : 0, r = function(t) {
						return "/" === t.slice(-1);
					}(e) ? -1 : void 0;
					return e.slice(n, r);
				}(t));
			}), n.join("/");
		}
		t.exports = {
			cookieConsent: function(t) {
				var e = t || [];
				return e.unshift("cookie/consent"), h(l(), e);
			},
			embedIframe: function(t, e) {
				var n = t || [], o = s, a = r.get("embedIframeURL");
				return a && d(c, a) ? h(a, n) + ".html" : (n.unshift(i.getBaseURLPath(e)), h(o, n) + ".html");
			},
			embedService: function(t) {
				var e = t || [], n = o;
				return e.unshift("srv"), h(n, e);
			},
			eventVideo: function(t) {
				var e = t || [];
				return e.unshift("video/event"), h(f(), e);
			},
			grid: function(t) {
				var e = t || [];
				return e.unshift("grid/collection"), h(f(), e);
			},
			moment: function(t) {
				var e = t || [];
				return e.unshift("moments"), h(f(), e);
			},
			settings: function(t) {
				var e = t || [];
				return e.unshift("settings"), h(l(), e);
			},
			settingsScribe: function(t) {
				var e = t || [];
				return e.unshift("i/jot/embeds"), h(l(), e);
			},
			timeline: function(t) {
				var e = t || [];
				return e.unshift("timeline"), h(f(), e);
			},
			tweetBatch: function(t) {
				var e = t || [];
				return e.unshift("tweets.json"), h(f(), e);
			},
			video: function(t) {
				var e = t || [];
				return e.unshift("widgets/video"), h(f(), e);
			}
		};
	},
	function(t, e, n) {
		var r = n(3), i = n(0);
		t.exports = function(t, e, n) {
			var o;
			if (n = n || r, t = t || {}, e = e || {}, t.name) {
				try {
					o = n.createElement("<iframe name=\"" + t.name + "\"></iframe>");
				} catch (e) {
					(o = n.createElement("iframe")).name = t.name;
				}
				delete t.name;
			} else o = n.createElement("iframe");
			return t.id && (o.id = t.id, delete t.id), o.allowtransparency = "true", o.scrolling = "no", o.setAttribute("frameBorder", 0), o.setAttribute("allowTransparency", !0), i.forIn(t, function(t, e) {
				o.setAttribute(t, e);
			}), i.forIn(e, function(t, e) {
				o.style[t] = e;
			}), o;
		};
	},
	function(t, e, n) {
		var r = n(25), i = n(102);
		t.exports = r.build([i]);
	},
	function(t, e, n) {
		var r = n(39), i = n(40), o = n(7);
		(r = Object.create(r)).build = o(r.build, null, i), t.exports = r;
	},
	function(t, e, n) {
		var r = n(71), i = n(19), o = n(5), s = n(21), a = n(0);
		t.exports = function(t) {
			t.params({
				chrome: {},
				height: { transform: o.asInt },
				instanceId: {
					required: !0,
					fallback: s.deterministic
				},
				isPreconfigured: {},
				lang: {
					required: !0,
					transform: r.matchLanguage,
					fallback: "en"
				},
				theme: {},
				tweetLimit: { transform: o.asInt }
			}), t.defineProperty("endpoint", { get: function() {
				throw new Error("endpoint not specified");
			} }), t.define("queryParams", function() {
				return a.compact({
					dnt: i.enabled(),
					limit: this.params.tweetLimit,
					lang: this.params.lang
				});
			});
		};
	},
	function(t, e, n) {
		var r, i = n(3);
		function o(t) {
			var e, n, o, s = 0;
			for (r = {}, e = (t = t || i).getElementsByTagName("meta"); e[s]; s++) {
				if (n = e[s], /^twitter:/.test(n.getAttribute("name"))) o = n.getAttribute("name").replace(/^twitter:/, "");
				else {
					if (!/^twitter:/.test(n.getAttribute("property"))) continue;
					o = n.getAttribute("property").replace(/^twitter:/, "");
				}
				r[o] = n.getAttribute("content") || n.getAttribute("value");
			}
		}
		o(), t.exports = {
			init: o,
			val: function(t) {
				return r[t];
			}
		};
	},
	function(t, e, n) {
		var r = n(106), i = n(24), o = n(1);
		function s(t) {
			var e = "";
			if (!t) return "";
			try {
				return e = i.stringify(t), o.btoa(e);
			} catch (t) {
				return "";
			}
		}
		function a(t) {
			return r.settingsLoaded().then(function(e) {
				return e[t];
			});
		}
		function u() {
			return a("features");
		}
		t.exports = {
			encodeFeatures: s,
			shouldObtainCookieConsent: function() {
				return a("shouldObtainCookieConsent");
			},
			getExperiments: u,
			getExperiment: function(t) {
				return u().then(function(e) {
					if (!e[t]) throw new Error("Experiment not found");
					return e[t];
				});
			},
			getHorizonSettings: function() {
				return r.settingsLoaded().then(function(t) {
					return {
						features: t.features,
						sessionId: t.sessionId
					};
				});
			},
			getActiveExperimentDataString: function() {
				return u().then(function(t) {
					return s(t);
				});
			},
			getExperimentKeys: function() {
				return u().then(function(t) {
					return Object.keys(t);
				});
			},
			load: function() {
				r.load();
			}
		};
	},
	function(t, e, n) {
		var r = n(10), i = {}, o = -1, s = {};
		function a(t) {
			var e = t.getAttribute("data-twitter-event-id");
			return e || (t.setAttribute("data-twitter-event-id", ++o), o);
		}
		function u(t, e, n) {
			var r = 0, i = t && t.length || 0;
			for (r = 0; r < i; r++) if (t[r].call(e, n, e), n.ceaseImmediately) return !1;
		}
		function c(t, e, n) {
			for (var i = n || t.target || t.srcElement, o = r.list(i).map(function(t) {
				return "." + t;
			}).concat(i.tagName), s = 0, a = o.length; s < a; s++) if (!1 === u(e[o[s]], i, t)) return;
			t.cease || i !== this && c.call(this, t, e, i.parentElement || i.parentNode);
		}
		function d(t, e, n, r) {
			function i(r) {
				c.call(t, r, n[e]);
			}
			!function(t, e, n, r) {
				t.id && (s[t.id] = s[t.id] || [], s[t.id].push({
					el: t,
					listener: e,
					type: n,
					rootId: r
				}));
			}(t, i, e, r), t.addEventListener(e, i, !1);
		}
		function f(t) {
			t && t.preventDefault ? t.preventDefault() : t.returnValue = !1;
		}
		function l(t) {
			t && (t.cease = !0) && t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
		}
		t.exports = {
			stop: function(t) {
				return l(t), f(t), !1;
			},
			stopPropagation: l,
			stopImmediatePropagation: function(t) {
				t && (t.ceaseImmediately = !0, l(t), t.stopImmediatePropagation());
			},
			preventDefault: f,
			delegate: function(t, e, n, r) {
				var o = a(t);
				i[o] = i[o] || {}, i[o][e] || (i[o][e] = {}, d(t, e, i[o], o)), i[o][e][n] = i[o][e][n] || [], i[o][e][n].push(r);
			},
			simulate: function(t, e, n) {
				var r = a(e), o = i[r] && i[r];
				c.call(e, { target: n }, o[t]);
			},
			removeDelegatesForWidget: function(t) {
				var e = s[t];
				e && (e.forEach(function(t) {
					t.el.removeEventListener(t.type, t.listener, !1), delete i[t.rootId];
				}), delete s[t]);
			}
		};
	},
	function(t, e, n) {
		var r = n(0), i = n(48);
		t.exports = { closest: function t(e, n, o) {
			var s;
			if (n) return o = o || n && n.ownerDocument, s = r.isType("function", e) ? e : function(t) {
				return function(e) {
					return !!e.tagName && i(e, t);
				};
			}(e), n === o ? s(n) ? n : void 0 : s(n) ? n : t(s, n.parentNode, o);
		} };
	},
	function(t, e, n) {
		var r = n(42), i = n(3), o = n(19), s = n(36), a = n(75), u = n(24), c = n(9), d = n(4), f = n(0), l = 1, h = r.version, p = c.get("clientEventEndpoint") || "https://syndication.twitter.com/i/jot";
		function m(t) {
			return f.aug({ client: "tfw" }, t || {});
		}
		function v(t, e, n) {
			return e = e || {}, f.aug({}, e, {
				_category_: t,
				triggered_on: e.triggered_on || +new Date(),
				dnt: o.enabled(n)
			});
		}
		t.exports = {
			extractTermsFromDOM: function t(e, n) {
				var r;
				return n = n || {}, e && e.nodeType === Node.ELEMENT_NODE ? ((r = e.getAttribute("data-scribe")) && r.split(" ").forEach(function(t) {
					var e = t.trim().split(":"), r = e[0], i = e[1];
					r && i && !n[r] && (n[r] = i);
				}), t(e.parentNode, n)) : n;
			},
			clickEventElement: function(t) {
				var e = s.closest("[data-expanded-url]", t), n = e && e.getAttribute("data-expanded-url");
				return n && d.isTwitterURL(n) ? "twitter_url" : "url";
			},
			flattenClientEventPayload: function(t, e) {
				return f.aug({}, e, { event_namespace: t });
			},
			formatGenericEventData: v,
			formatClientEventData: function(t, e, n) {
				var r = t && t.widget_origin || i.referrer;
				return (t = v("tfw_client_event", t, r)).client_version = h, t.format_version = void 0 !== n ? n : 1, e || (t.widget_origin = r), t;
			},
			formatClientEventNamespace: m,
			formatHorizonTweetData: function(t) {
				var e = {
					item_ids: [],
					item_details: {}
				};
				return e.item_ids.push(t), e.item_details[t] = { item_type: a.TWEET }, e;
			},
			formatTweetAssociation: function(t, e) {
				var n = {};
				return (e = e || {}).association_namespace = m(t), n[l] = e, n;
			},
			noticeSeen: function(t) {
				return "notice" === t.element && "seen" === t.action;
			},
			splitLogEntry: function(t) {
				var e, n, r, i, o;
				return t.item_ids && t.item_ids.length > 1 ? (e = Math.floor(t.item_ids.length / 2), n = t.item_ids.slice(0, e), r = {}, i = t.item_ids.slice(e), o = {}, n.forEach(function(e) {
					r[e] = t.item_details[e];
				}), i.forEach(function(e) {
					o[e] = t.item_details[e];
				}), [f.aug({}, t, {
					item_ids: n,
					item_details: r
				}), f.aug({}, t, {
					item_ids: i,
					item_details: o
				})]) : [t];
			},
			stringify: function(t) {
				var e, n = Array.prototype.toJSON;
				return delete Array.prototype.toJSON, e = u.stringify(t), n && (Array.prototype.toJSON = n), e;
			},
			CLIENT_EVENT_ENDPOINT: p,
			RUFOUS_REDIRECT: "https://platform.twitter.com/jot.html"
		};
	},
	function(t, e, n) {
		var r = n(8), i = n(74), o = n(0), s = i.getCanonicalURL() || r.href, a = s;
		t.exports = {
			isFramed: function() {
				return s !== a;
			},
			rootDocumentLocation: function(t) {
				return t && o.isType("string", t) && (s = t), s;
			},
			currentDocumentLocation: function() {
				return a;
			}
		};
	},
	function(t, e, n) {
		var r = n(97), i = n(98), o = n(0);
		t.exports = {
			couple: function() {
				return o.toRealArray(arguments);
			},
			build: function(t, e, n) {
				var o = new t();
				return (e = i(r(e || []))).forEach(function(t) {
					t.call(null, o);
				}), o.build(n);
			}
		};
	},
	function(t, e, n) {
		var r = n(100), i = n(0), o = n(41);
		function s() {
			this.Component = this.factory(), this._adviceArgs = [], this._lastArgs = [];
		}
		i.aug(s.prototype, {
			factory: o,
			build: function(t) {
				var e = this;
				return this.Component, i.aug(this.Component.prototype.boundParams, t), this._adviceArgs.concat(this._lastArgs).forEach(function(t) {
					(function(t, e, n) {
						var r = this[e];
						if (!r) throw new Error(e + " does not exist");
						this[e] = t(r, n);
					}).apply(e.Component.prototype, t);
				}), delete this._lastArgs, delete this._adviceArgs, this.Component;
			},
			params: function(t) {
				var e = this.Component.prototype.paramConfigs;
				t = t || {}, this.Component.prototype.paramConfigs = i.aug({}, t, e);
			},
			define: function(t, e) {
				if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
				this.override(t, e);
			},
			defineStatic: function(t, e) {
				this.Component[t] = e;
			},
			override: function(t, e) {
				this.Component.prototype[t] = e;
			},
			defineProperty: function(t, e) {
				if (t in this.Component.prototype) throw new Error(t + " has previously been defined");
				this.overrideProperty(t, e);
			},
			overrideProperty: function(t, e) {
				var n = i.aug({ configurable: !0 }, e);
				Object.defineProperty(this.Component.prototype, t, n);
			},
			before: function(t, e) {
				this._adviceArgs.push([
					r.before,
					t,
					e
				]);
			},
			after: function(t, e) {
				this._adviceArgs.push([
					r.after,
					t,
					e
				]);
			},
			around: function(t, e) {
				this._adviceArgs.push([
					r.around,
					t,
					e
				]);
			},
			last: function(t, e) {
				this._lastArgs.push([
					r.after,
					t,
					e
				]);
			}
		}), t.exports = s;
	},
	function(t, e, n) {
		var r = n(0);
		function i() {
			return !0;
		}
		function o(t) {
			return t;
		}
		t.exports = function() {
			function t(t) {
				var e = this;
				t = t || {}, this.params = Object.keys(this.paramConfigs).reduce(function(n, s) {
					var a = [], u = e.boundParams, c = e.paramConfigs[s], d = c.validate || i, f = c.transform || o;
					if (s in u && a.push(u[s]), s in t && a.push(t[s]), a = "fallback" in c ? a.concat(c.fallback) : a, n[s] = function(t, e, n) {
						var i = null;
						return t.some(function(t) {
							if (t = r.isType("function", t) ? t() : t, e(t)) return i = n(t), !0;
						}), i;
					}(a, d, f), c.required && null == n[s]) throw new Error(s + " is a required parameter");
					return n;
				}, {}), this.initialize();
			}
			return r.aug(t.prototype, {
				paramConfigs: {},
				boundParams: {},
				initialize: function() {}
			}), t;
		};
	},
	function(t) {
		t.exports = { version: "6a3ad42b224df:1778106238597" };
	},
	function(t, e, n) {
		var r = n(1);
		t.exports = function(t, e, n) {
			var i, o = 0;
			return n = n || null, function s() {
				var a = n || this, u = arguments, c = +new Date();
				if (r.clearTimeout(i), c - o > e) return o = c, void t.apply(a, u);
				i = r.setTimeout(function() {
					s.apply(a, u);
				}, e);
			};
		};
	},
	function(t, e, n) {
		var r = n(18);
		t.exports = function() {
			r.publicError("Error: This Timeline type is no longer supported (Likes, Collections, & Moments). \n	", "* Twitter still supports Profile and List Timelines \n	", "* You can learn more about this change in our announcement: \n	", "https://twittercommunity.com/t/removing-support-for-embedded-like-collection-and-moment-timelines/150313 \n	", "* In order to create a new Embedded Timeline, visit: https://publish.twitter.com");
		};
	},
	function(t, e, n) {
		/*!
		* @overview es6-promise - a tiny implementation of Promises/A+.
		* @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		* @license   Licensed under MIT license
		*            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
		* @version   v4.2.5+7f2b526d
		*/
		var r;
		r = function() {
			"use strict";
			function t(t) {
				return "function" == typeof t;
			}
			var e = Array.isArray ? Array.isArray : function(t) {
				return "[object Array]" === Object.prototype.toString.call(t);
			}, n = 0, r = void 0, i = void 0, o = function(t, e) {
				l[n] = t, l[n + 1] = e, 2 === (n += 2) && (i ? i(h) : w());
			}, s = "undefined" != typeof window ? window : void 0, a = s || {}, u = a.MutationObserver || a.WebKitMutationObserver, c = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
			function f() {
				var t = setTimeout;
				return function() {
					return t(h, 1);
				};
			}
			var l = new Array(1e3);
			function h() {
				for (var t = 0; t < n; t += 2) (0, l[t])(l[t + 1]), l[t] = void 0, l[t + 1] = void 0;
				n = 0;
			}
			var p, m, v, g, w = void 0;
			function y(t, e) {
				var n = this, r = new this.constructor(E);
				void 0 === r[_] && k(r);
				var i = n._state;
				if (i) {
					var s = arguments[i - 1];
					o(function() {
						return D(i, r, s, n._result);
					});
				} else I(n, r, t, e);
				return r;
			}
			function b(t) {
				if (t && "object" == typeof t && t.constructor === this) return t;
				var e = new this(E);
				return C(e, t), e;
			}
			c ? w = function() {
				return process.nextTick(h);
			} : u ? (m = 0, v = new u(h), g = document.createTextNode(""), v.observe(g, { characterData: !0 }), w = function() {
				g.data = m = ++m % 2;
			}) : d ? ((p = new MessageChannel()).port1.onmessage = h, w = function() {
				return p.port2.postMessage(0);
			}) : w = void 0 === s ? function() {
				try {
					var t = Function("return this")().require("vertx");
					return void 0 !== (r = t.runOnLoop || t.runOnContext) ? function() {
						r(h);
					} : f();
				} catch (t) {
					return f();
				}
			}() : f();
			var _ = Math.random().toString(36).substring(2);
			function E() {}
			var x = void 0, T = 1, A = 2, S = { error: null };
			function R(t) {
				try {
					return t.then;
				} catch (t) {
					return S.error = t, S;
				}
			}
			function N(e, n, r) {
				n.constructor === e.constructor && r === y && n.constructor.resolve === b ? function(t, e) {
					e._state === T ? j(t, e._result) : e._state === A ? P(t, e._result) : I(e, void 0, function(e) {
						return C(t, e);
					}, function(e) {
						return P(t, e);
					});
				}(e, n) : r === S ? (P(e, S.error), S.error = null) : void 0 === r ? j(e, n) : t(r) ? function(t, e, n) {
					o(function(t) {
						var r = !1, i = function(t, e, n, r) {
							try {
								t.call(e, n, r);
							} catch (t) {
								return t;
							}
						}(n, e, function(n) {
							r || (r = !0, e !== n ? C(t, n) : j(t, n));
						}, function(e) {
							r || (r = !0, P(t, e));
						}, t._label);
						!r && i && (r = !0, P(t, i));
					}, t);
				}(e, n, r) : j(e, n);
			}
			function C(t, e) {
				var n, r;
				t === e ? P(t, new TypeError("You cannot resolve a promise with itself")) : (r = typeof (n = e), null === n || "object" !== r && "function" !== r ? j(t, e) : N(t, e, R(e)));
			}
			function L(t) {
				t._onerror && t._onerror(t._result), O(t);
			}
			function j(t, e) {
				t._state === x && (t._result = e, t._state = T, 0 !== t._subscribers.length && o(O, t));
			}
			function P(t, e) {
				t._state === x && (t._state = A, t._result = e, o(L, t));
			}
			function I(t, e, n, r) {
				var i = t._subscribers, s = i.length;
				t._onerror = null, i[s] = e, i[s + T] = n, i[s + A] = r, 0 === s && t._state && o(O, t);
			}
			function O(t) {
				var e = t._subscribers, n = t._state;
				if (0 !== e.length) {
					for (var r = void 0, i = void 0, o = t._result, s = 0; s < e.length; s += 3) r = e[s], i = e[s + n], r ? D(n, r, i, o) : i(o);
					t._subscribers.length = 0;
				}
			}
			function D(e, n, r, i) {
				var o = t(r), s = void 0, a = void 0, u = void 0, c = void 0;
				if (o) {
					if ((s = function(t, e) {
						try {
							return t(e);
						} catch (t) {
							return S.error = t, S;
						}
					}(r, i)) === S ? (c = !0, a = s.error, s.error = null) : u = !0, n === s) return void P(n, new TypeError("A promises callback cannot return that same promise."));
				} else s = i, u = !0;
				n._state !== x || (o && u ? C(n, s) : c ? P(n, a) : e === T ? j(n, s) : e === A && P(n, s));
			}
			var z = 0;
			function k(t) {
				t[_] = z++, t._state = void 0, t._result = void 0, t._subscribers = [];
			}
			var M = function() {
				function t(t, n) {
					this._instanceConstructor = t, this.promise = new t(E), this.promise[_] || k(this.promise), e(n) ? (this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? j(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(n), 0 === this._remaining && j(this.promise, this._result))) : P(this.promise, new Error("Array Methods must be provided an Array"));
				}
				return t.prototype._enumerate = function(t) {
					for (var e = 0; this._state === x && e < t.length; e++) this._eachEntry(t[e], e);
				}, t.prototype._eachEntry = function(t, e) {
					var n = this._instanceConstructor, r = n.resolve;
					if (r === b) {
						var i = R(t);
						if (i === y && t._state !== x) this._settledAt(t._state, e, t._result);
						else if ("function" != typeof i) this._remaining--, this._result[e] = t;
						else if (n === U) {
							var o = new n(E);
							N(o, t, i), this._willSettleAt(o, e);
						} else this._willSettleAt(new n(function(e) {
							return e(t);
						}), e);
					} else this._willSettleAt(r(t), e);
				}, t.prototype._settledAt = function(t, e, n) {
					var r = this.promise;
					r._state === x && (this._remaining--, t === A ? P(r, n) : this._result[e] = n), 0 === this._remaining && j(r, this._result);
				}, t.prototype._willSettleAt = function(t, e) {
					var n = this;
					I(t, void 0, function(t) {
						return n._settledAt(T, e, t);
					}, function(t) {
						return n._settledAt(A, e, t);
					});
				}, t;
			}(), U = function() {
				function e(t) {
					this[_] = z++, this._result = this._state = void 0, this._subscribers = [], E !== t && ("function" != typeof t && function() {
						throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
					}(), this instanceof e ? function(t, e) {
						try {
							e(function(e) {
								C(t, e);
							}, function(e) {
								P(t, e);
							});
						} catch (e) {
							P(t, e);
						}
					}(this, t) : function() {
						throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
					}());
				}
				return e.prototype.catch = function(t) {
					return this.then(null, t);
				}, e.prototype.finally = function(e) {
					var n = this.constructor;
					return t(e) ? this.then(function(t) {
						return n.resolve(e()).then(function() {
							return t;
						});
					}, function(t) {
						return n.resolve(e()).then(function() {
							throw t;
						});
					}) : this.then(e, e);
				}, e;
			}();
			return U.prototype.then = y, U.all = function(t) {
				return new M(this, t).promise;
			}, U.race = function(t) {
				var n = this;
				return e(t) ? new n(function(e, r) {
					for (var i = t.length, o = 0; o < i; o++) n.resolve(t[o]).then(e, r);
				}) : new n(function(t, e) {
					return e(new TypeError("You must pass an array to race."));
				});
			}, U.resolve = b, U.reject = function(t) {
				var e = new this(E);
				return P(e, t), e;
			}, U._setScheduler = function(t) {
				i = t;
			}, U._setAsap = function(t) {
				o = t;
			}, U._asap = o, U.polyfill = function() {
				var t = void 0;
				if ("undefined" != typeof global) t = global;
				else if ("undefined" != typeof self) t = self;
				else try {
					t = Function("return this")();
				} catch (t) {
					throw new Error("polyfill failed because global object is unavailable in this environment");
				}
				var e = t.Promise;
				if (e) {
					var n = null;
					try {
						n = Object.prototype.toString.call(e.resolve());
					} catch (t) {}
					if ("[object Promise]" === n && !e.cast) return;
				}
				t.Promise = U;
			}, U.Promise = U, U;
		}, t.exports = r();
	},
	function(t, e, n) {
		var r = n(47);
		t.exports = new r("twttr");
	},
	function(t, e, n) {
		var r = n(1), i = n(0);
		function o(t) {
			return i.isType("string", t) ? t.split(".") : i.isType("array", t) ? t : [];
		}
		function s(t, e) {
			(e = e || r)[t] = e[t] || {}, Object.defineProperty(this, "base", { value: e[t] }), Object.defineProperty(this, "name", { value: t });
		}
		i.aug(s.prototype, {
			get: function(t) {
				return o(t).reduce(function(t, e) {
					if (i.isObject(t)) return t[e];
				}, this.base);
			},
			set: function(t, e, n) {
				var r = o(t), s = function(t, e) {
					var n = o(e).slice(0, -1);
					return n.reduce(function(t, e, r) {
						if (t[e] = t[e] || {}, !i.isObject(t[e])) throw new Error(n.slice(0, r + 1).join(".") + " is already defined with a value.");
						return t[e];
					}, t);
				}(this.base, t), a = r.slice(-1);
				return n && a in s ? s[a] : s[a] = e;
			},
			init: function(t, e) {
				return this.set(t, e, !0);
			},
			unset: function(t) {
				var e = o(t), n = this.get(e.slice(0, -1));
				n && delete n[e.slice(-1)];
			},
			aug: function(t) {
				var e = this.get(t), n = i.toRealArray(arguments).slice(1);
				if (e = void 0 !== e ? e : {}, n.unshift(e), !n.every(i.isObject)) throw new Error("Cannot augment non-object.");
				return this.set(t, i.aug.apply(null, n));
			},
			call: function(t) {
				var e = this.get(t), n = i.toRealArray(arguments).slice(1);
				if (!i.isType("function", e)) throw new Error("Function " + t + "does not exist.");
				return e.apply(null, n);
			},
			fullPath: function(t) {
				var e = o(t);
				return e.unshift(this.name), e.join(".");
			}
		}), t.exports = s;
	},
	function(t, e, n) {
		var r = n(1).HTMLElement, i = r.prototype.matches || r.prototype.matchesSelector || r.prototype.webkitMatchesSelector || r.prototype.mozMatchesSelector || r.prototype.msMatchesSelector || r.prototype.oMatchesSelector;
		t.exports = function(t, e) {
			if (i) return i.call(t, e);
		};
	},
	function(t, e, n) {
		var r = n(0), i = n(7), o = {
			bind: function(t, e) {
				return this._handlers = this._handlers || {}, this._handlers[t] = this._handlers[t] || [], this._handlers[t].push(e);
			},
			unbind: function(t, e) {
				var n;
				this._handlers && this._handlers[t] && (e ? (n = this._handlers[t].indexOf(e)) >= 0 && this._handlers[t].splice(n, 1) : this._handlers[t] = []);
			},
			trigger: function(t, e) {
				var n = this._handlers && this._handlers[t];
				(e = e || {}).type = t, n && n.forEach(function(t) {
					r.async(i(t, this, e));
				});
			}
		};
		t.exports = {
			Emitter: o,
			makeEmitter: function() {
				return r.aug(function() {}, o);
			}
		};
	},
	function(t, e, n) {
		var r = n(91), i = n(93), o = n(6), s = n(23), a = n(7), u = n(0), c = new i(function(t) {
			var e = function(t) {
				return t.reduce(function(t, e) {
					return t[e._className] = t[e._className] || [], t[e._className].push(e), t;
				}, {});
			}(t.map(r.fromRawTask));
			u.forIn(e, function(t, e) {
				s.allSettled(e.map(function(t) {
					return t.initialize();
				})).then(function() {
					e.forEach(function(t) {
						o.all([t.hydrate(), t.insertIntoDom()]).then(a(t.render, t)).then(a(t.success, t), a(t.fail, t));
					});
				});
			});
		});
		t.exports = { addWidget: function(t) {
			return c.add(t);
		} };
	},
	function(t, e, n) {
		var r = n(17);
		t.exports = function(t) {
			return r.write(function() {
				t && t.parentNode && t.parentNode.removeChild(t);
			});
		};
	},
	function(t, e, n) {
		var r = n(95), i = n(72), o = new (n(105))(function(t) {
			(!function(t) {
				return 1 === t.length && i.canFlushOneItem(t[0]);
			}(t) ? function(t) {
				r.init(), t.forEach(function(t) {
					var e = t.input.namespace, n = t.input.data, i = t.input.offsite, o = t.input.version;
					r.clientEvent(e, n, i, o);
				}), r.flush().then(function() {
					t.forEach(function(t) {
						t.taskDoneDeferred.resolve();
					});
				}, function() {
					t.forEach(function(t) {
						t.taskDoneDeferred.reject();
					});
				});
			} : function(t) {
				t.forEach(function(t) {
					var e = t.input.namespace, n = t.input.data, r = t.input.offsite, o = t.input.version;
					i.clientEvent(e, n, r, o), t.taskDoneDeferred.resolve();
				});
			})(t);
		});
		t.exports = {
			scribe: function(t, e, n, r) {
				return o.add({
					namespace: t,
					data: e,
					offsite: n,
					version: r
				});
			},
			pause: function() {
				o.pause();
			},
			resume: function() {
				o.resume();
			}
		};
	},
	function(t, e, n) {
		n(18), t.exports = { log: function(t, e) {} };
	},
	function(t, e, n) {
		var r = n(1);
		function i(t) {
			return (t = t || r).getSelection && t.getSelection();
		}
		t.exports = {
			getSelection: i,
			getSelectedText: function(t) {
				var e = i(t);
				return e ? e.toString() : "";
			}
		};
	},
	function(t, e, n) {
		var r = n(3), i = n(1), o = n(2), s = 2e4;
		t.exports = function(t) {
			var e = new o(), n = r.createElement("img");
			return n.onload = n.onerror = function() {
				i.setTimeout(e.resolve, 50);
			}, n.src = t, i.setTimeout(e.reject, s), e.promise;
		};
	},
	function(t, e, n) {
		var r, i = n(10), o = n(3), s = n(1), a = n(33), u = n(51), c = n(5), d = n(21), f = "csptest";
		t.exports = { inlineStyle: function() {
			var t = f + d.generate(), e = o.createElement("div"), n = o.createElement("style"), l = "." + t + " { visibility: hidden; }";
			return !!o.body && (c.asBoolean(a.val("widgets:csp")) && (r = !1), void 0 !== r ? r : (e.style.display = "none", i.add(e, t), n.type = "text/css", n.appendChild(o.createTextNode(l)), o.body.appendChild(n), o.body.appendChild(e), r = "hidden" === s.getComputedStyle(e).visibility, u(e), u(n), r));
		} };
	},
	function(t, e) {
		t.exports = function(t) {
			var e = t.getBoundingClientRect();
			return {
				width: e.width,
				height: e.height
			};
		};
	},
	function(t, e, n) {
		var r = n(103);
		t.exports = function(t) {
			t.define("createElement", r), t.define("createFragment", r), t.define("htmlToElement", r), t.define("hasSelectedText", r), t.define("addRootClass", r), t.define("removeRootClass", r), t.define("hasRootClass", r), t.define("prependStyleSheet", r), t.define("appendStyleSheet", r), t.define("prependCss", r), t.define("appendCss", r), t.define("makeVisible", r), t.define("injectWidgetEl", r), t.define("matchHeightToContent", r), t.define("matchWidthToContent", r);
		};
	},
	function(t, e) {
		t.exports = function(t) {
			var e, n = !1;
			return function() {
				return n ? e : (n = !0, e = t.apply(this, arguments));
			};
		};
	},
	function(t, e, n) {
		var r = n(3), i = n(13), o = n(26), s = n(118), a = n(14);
		t.exports = function(t, e, n) {
			return new i(s, o, a.BROADCAST, t, e, n, { sandboxWrapperEl: r.createElement("div") });
		};
	},
	function(t, e, n) {
		var r = n(13), i = n(120), o = n(121), s = n(14);
		t.exports = function(t, e, n) {
			return new r(i, o, s.DM_BUTTON, t, e, n);
		};
	},
	function(t, e, n) {
		var r = n(25), i = n(122);
		t.exports = r.build([i]);
	},
	function(t, e, n) {
		var r = n(13), i = n(125), o = n(26), s = n(14);
		t.exports = function(t, e, n) {
			return new r(i, o, s.FOLLOW_BUTTON, t, e, n);
		};
	},
	function(t, e, n) {
		var r = n(13), i = n(127), o = n(30), s = n(14);
		t.exports = function(t, e, n) {
			return new r(i, o, s.MOMENT, t, e, n);
		};
	},
	function(t, e, n) {
		var r = n(13), i = n(129), o = n(30), s = n(14);
		t.exports = function(t, e, n) {
			return new r(i, o, s.PERISCOPE, t, e, n);
		};
	},
	function(t, e, n) {
		var r = n(131), i = n(132), o = n(136), s = n(138), a = n(140), u = {
			collection: i,
			likes: o,
			list: s,
			profile: a,
			url: d
		}, c = [
			a,
			o,
			i,
			s
		];
		function d(t) {
			return r(c, function(e) {
				try {
					return new e(t);
				} catch (t) {}
			});
		}
		t.exports = function(t) {
			return t ? function(t) {
				var e, n;
				return e = (t.sourceType + "").toLowerCase(), (n = u[e]) ? new n(t) : null;
			}(t) || d(t) : null;
		};
	},
	function(t, e, n) {
		var r = n(3), i = n(13), o = n(26), s = n(142), a = n(14);
		t.exports = function(t, e, n) {
			var u = r.createElement("div");
			return new i(s, o, a.TIMELINE, t, e, n, { sandboxWrapperEl: u });
		};
	},
	function(t, e, n) {
		var r = n(3), i = n(13), o = n(26), s = n(144), a = n(14);
		t.exports = function(t, e, n) {
			return new i(s, o, a.TWEET, t, e, n, { sandboxWrapperEl: r.createElement("div") });
		};
	},
	function(t, e, n) {
		var r = n(13), i = n(146), o = n(26), s = n(14);
		t.exports = function(t, e, n) {
			var a = t && t.type || "share", u = "hashtag" == a ? s.HASHTAG_BUTTON : "mention" == a ? s.MENTION_BUTTON : s.SHARE_BUTTON;
			return new r(i, o, u, t, e, n);
		};
	},
	function(t, e, n) {
		var r = n(52), i = n(38), o = n(0);
		t.exports = function(t) {
			var e = {
				widget_origin: i.rootDocumentLocation(),
				widget_frame: i.isFramed() ? i.currentDocumentLocation() : null,
				duration_ms: t.duration,
				item_ids: t.widgetIds || []
			}, n = o.aug(t.namespace, {
				page: "page",
				component: "performance"
			});
			r.scribe(n, e);
		};
	},
	function(t, e, n) {
		var r = n(0), i = n(133), o = [
			"ar",
			"fa",
			"he",
			"ur"
		];
		t.exports = {
			isRtlLang: function(t) {
				return t = String(t).toLowerCase(), r.contains(o, t);
			},
			matchLanguage: function(t) {
				return t = (t = (t || "").toLowerCase()).replace("_", "-"), i(t) ? t : (t = t.replace(/-.*/, ""), i(t) ? t : "en");
			}
		};
	},
	function(t, e, n) {
		var r = n(53), i = n(16), o = n(37), s = n(28), a = n(0), u = n(9), c = n(6), d = u.get("scribeCallback"), f = 2083, l = [], h = i.url(o.CLIENT_EVENT_ENDPOINT, {
			dnt: 0,
			l: ""
		}), p = encodeURIComponent(h).length;
		function m(t, e, n, r, i) {
			var u = !a.isObject(t), f = !!e && !a.isObject(e);
			if (!u && !f) return d && d(arguments), e = e || {}, c.resolve(v(o.formatClientEventNamespace(t), o.formatClientEventData(e, n, r), s.settingsScribe(), i));
		}
		function v(t, e, n, s) {
			var u;
			n && a.isObject(t) && a.isObject(e) && (r.log(t, e), u = o.flattenClientEventPayload(t, e), s = a.aug({}, s, { l: o.stringify(u) }), u.dnt && (s.dnt = 1), w(i.url(n, s)));
		}
		function g(t) {
			return l.push(t), l;
		}
		function w(t) {
			return new Image().src = t;
		}
		t.exports = {
			canFlushOneItem: function(t) {
				var e = o.stringify(t), n = encodeURIComponent(e).length + 3;
				return p + n < f;
			},
			_enqueueRawObject: g,
			scribe: v,
			clientEvent: m,
			enqueueClientEvent: function(t, e, n, r) {
				var i = !a.isObject(t), s = !!e && !a.isObject(e);
				if (!i && !s) return g(o.flattenClientEventPayload(o.formatClientEventNamespace(t), o.formatClientEventData(e, n, r)));
			},
			interaction: function(t, e, n, r) {
				var i = o.extractTermsFromDOM(t.target || t.srcElement);
				return i.action = r || "click", m(i, e, n);
			},
			placePixel: w
		};
	},
	function(t) {
		t.exports = {
			tweetButtonHtmlPath: "/widgets/tweet_button.1227a5674072e080ffb1ba14ac0c1079.{{lang}}.html",
			followButtonHtmlPath: "/widgets/follow_button.1227a5674072e080ffb1ba14ac0c1079.{{lang}}.html",
			hubHtmlPath: "/widgets/hub.html",
			widgetIframeHtmlPath: "/widgets/widget_iframe.1227a5674072e080ffb1ba14ac0c1079.html",
			resourceBaseUrl: "https://platform.twitter.com"
		};
	},
	function(t, e, n) {
		var r = n(3), i = n(8), o = n(4);
		function s(t, e) {
			var n, r;
			return e = e || i, /^https?:\/\//.test(t) ? t : /^\/\//.test(t) ? e.protocol + t : (n = e.host + (e.port.length ? ":" + e.port : ""), 0 !== t.indexOf("/") && ((r = e.pathname.split("/")).pop(), r.push(t), t = "/" + r.join("/")), [
				e.protocol,
				"//",
				n,
				t
			].join(""));
		}
		t.exports = {
			absolutize: s,
			getCanonicalURL: function() {
				for (var t, e = r.getElementsByTagName("link"), n = 0; e[n]; n++) if ("canonical" == (t = e[n]).rel) return s(t.href);
			},
			getScreenNameFromPage: function() {
				for (var t, e, n, i = [r.getElementsByTagName("a"), r.getElementsByTagName("link")], s = 0, a = 0, u = /\bme\b/; t = i[s]; s++) for (a = 0; e = t[a]; a++) if (u.test(e.rel) && (n = o.screenName(e.href))) return n;
			},
			getHostname: function(t) {
				var e = r.createElement("a");
				return e.setAttribute("href", t), e.hostname;
			}
		};
	},
	function(t) {
		t.exports = {
			TWEET: 0,
			RETWEET: 10,
			CUSTOM_TIMELINE: 17,
			LIVE_VIDEO_EVENT: 28,
			QUOTE_TWEET: 23
		};
	},
	,
	,
	,
	,
	,
	,
	,
	,
	function(t, e, n) {
		var r, i = n(2), o = n(3), s = n(86), a = n(46), u = n(9), c = n(87), d = n(22), f = n(90), l = n(147), h = n(156), p = n(157), m = n(27), v = n(34);
		n(158), m.emitter.trigger(m.START), u.set("widgets.init", !0), a.set("init", !0), p(), r = new i(), s.exposeReadyPromise(r.promise, a.base, "_e"), a.set("widgets", l), a.set("widgets.load", f.load), a.set("events", d), h(function() {
			v.load(), r.resolve(a.base), c.attachTo(o), f.loadPage();
		});
	},
	function(t, e) {
		t.exports = navigator;
	},
	function(t, e, n) {
		var r = n(7);
		t.exports = { exposeReadyPromise: function(t, e, n) {
			e.ready = r(t.then, t), n && Array.isArray(e[n]) && (e[n].forEach(r(t.then, t)), delete e[n]);
		} };
	},
	function(t, e, n) {
		var r = n(8), i = n(35), o = n(36), s = n(88), a = n(4);
		function u(t) {
			var e, n, u;
			t.altKey || t.metaKey || t.shiftKey || (e = o.closest(function(t) {
				return "A" === t.tagName || "AREA" === t.tagName;
			}, t.target)) && a.isIntentURL(e.href) && (n = (n = (n = [u = e.href, "original_referer=" + r.href].join(-1 == u.indexOf("?") ? "?" : "&")).replace(/^http[:]/, "https:")).replace(/^\/\//, "https://"), s.open(n, e), i.preventDefault(t));
		}
		t.exports = { attachTo: function(t) {
			t.addEventListener("click", u, !1);
		} };
	},
	function(t, e, n) {
		var r = n(4), i = n(89), o = n(22), s = n(16), a = {
			favorite: ["favorite", "like"],
			follow: ["follow"],
			like: ["favorite", "like"],
			retweet: ["retweet"],
			tweet: ["tweet"]
		};
		function u(t) {
			this.srcEl = [], this.element = t;
		}
		u.open = function(t, e, n) {
			var u = (r.intentType(t) || "").toLowerCase();
			r.isTwitterURL(t) && (function(t, e) {
				i.open(t, e);
			}(t, n), e && o.trigger("click", {
				target: e,
				region: "intent",
				type: "click",
				data: {}
			}), e && a[u] && a[u].forEach(function(n) {
				o.trigger(n, {
					target: e,
					region: "intent",
					type: n,
					data: function(t, e) {
						var n = s.decodeURL(e);
						switch (t) {
							case "favorite":
							case "like": return { tweet_id: n.tweet_id };
							case "follow": return {
								screen_name: n.screen_name,
								user_id: n.user_id
							};
							case "retweet": return { source_tweet_id: n.tweet_id };
							default: return {};
						}
					}(u, t)
				});
			}));
		}, t.exports = u;
	},
	function(t, e, n) {
		var r = n(1), i = n(35), o = n(36), s = n(20), a = n(4), u = n(21), c = "intent_";
		function d(t) {
			this.win = t;
		}
		d.prototype.open = function(t, e) {
			var n = e && "click" == e.type && o.closest("a", e.target), r = e && (e.altKey || e.metaKey || e.shiftKey), d = n && (s.ios() || s.android());
			if (a.isTwitterURL(t)) return r || d ? this : (this.name = c + u.generate(), this.popup = this.win.open(t, this.name), e && i.preventDefault(e), this);
		}, d.open = function(t, e) {
			return new d(r).open(t, e);
		}, t.exports = d;
	},
	function(t, e, n) {
		var r = n(3), i = n(6), o = n(23), s = n(50), a = n(33), u = n(9), c = n(52), d = n(22), f = n(5), l = n(0), h = n(34), p = n(108), m = n(27);
		function v() {
			var t = a.val("widgets:autoload") || !0;
			return !f.isFalseValue(t) && (f.isTruthValue(t) ? r.body : r.querySelectorAll(t));
		}
		function g(t, e) {
			var n, i;
			return t = (t = t || r.body).length ? l.toRealArray(t) : [t], c.pause(), i = function(t, e) {
				return t.reduce(function(t, n) {
					return t.concat(p.reduce(function(t, r) {
						return t.concat(r(n, e));
					}, []));
				}, []);
			}(t, e), m.emitter.trigger(m.ALL_WIDGETS_RENDER_START, { widgets: i }), n = o.allResolved(i.map(function(t) {
				return s.addWidget(t);
			})).then(function(t) {
				d.trigger("loaded", { widgets: t }), t && t.length && m.emitter.trigger(m.ALL_WIDGETS_RENDER_END, { widgets: t });
			}), o.always(n, function() {
				c.resume();
			}), n;
		}
		function w(t) {
			return h.getExperiments().then(function(e) {
				return g(t, e);
			});
		}
		t.exports = {
			load: w,
			loadPage: function() {
				var t = v();
				return !1 === t ? i.resolve() : (u.set("widgets.loaded", !0), w(t));
			},
			_getPageLoadTarget: v
		};
	},
	function(t, e, n) {
		var r = n(10), i = n(17), o = n(22), s = n(51), a = n(6), u = n(23);
		function c(t, e) {
			this._widget = null, this._sandbox = null, this._hydrated = !1, this._insertedIntoDom = !1, this._Sandbox = t.Sandbox, this._factory = t.factory, this._widgetParams = t.parameters, this._resolve = e, this._className = t.className, this._renderedClassName = t.className + "-rendered", this._errorClassName = t.className + "-error", this._srcEl = t.srcEl, this._targetGlobal = function(t) {
				return (t.srcEl || t.targetEl).ownerDocument.defaultView;
			}(t), this._sandboxWrapperEl = t.options ? t.options.sandboxWrapperEl : null, this._insertionStrategy = function(e) {
				var n, r = t.srcEl, i = t.targetEl, o = t.className, s = t.className + "-rendered", a = t.options ? t.options.sandboxWrapperEl : null;
				a ? (a.appendChild(e), a.classList.add(o, s), n = a) : n = e, r ? i.insertBefore(n, r) : i.appendChild(n);
			};
		}
		c.fromRawTask = function(t) {
			return new c(t.input, t.taskDoneDeferred.resolve);
		}, c.prototype.initialize = function() {
			var t = this, e = new this._Sandbox(this._targetGlobal);
			return this._factory(this._widgetParams, e).then(function(n) {
				return t._widget = n, t._sandbox = e, n._sandboxWrapperEl = t._sandboxWrapperEl, n;
			});
		}, c.prototype.insertIntoDom = function() {
			var t = this, e = this._sandboxWrapperEl ? "" : [this._className, this._renderedClassName].join(" ");
			return this._widget ? this._sandbox.insert(this._widget.id, { class: e }, null, this._insertionStrategy).then(function() {
				t._insertedIntoDom = !0;
			}) : a.reject(new Error("cannot insert widget into DOM before it is initialized"));
		}, c.prototype.hydrate = function() {
			var t = this;
			return this._widget ? this._widget.hydrate().then(function() {
				t._hydrated = !0;
			}) : a.reject(new Error("cannot hydrate widget before it is initialized"));
		}, c.prototype.render = function() {
			var t = this;
			function e(e) {
				var n = t._sandboxWrapperEl ? t._sandboxWrapperEl : t._sandbox.sandboxEl;
				return s(n).then(function() {
					return a.reject(e);
				});
			}
			return this._hydrated ? this._insertedIntoDom ? t._widget.render(t._sandbox).then(function() {
				return t._sandbox.onResize(function() {
					return t._widget.resize().then(function() {
						var e = t._sandboxWrapperEl ? t._sandboxWrapperEl : t._sandbox.sandboxEl;
						o.trigger("resize", { target: e });
					});
				}), t._widget.show();
			}).then(function() {
				return s(t._srcEl).then(function() {
					return t._sandbox.sandboxEl;
				});
			}, e) : e(new Error("cannot render widget before DOM insertion")) : e(new Error("cannot render widget before hydration"));
		}, c.prototype.fail = function() {
			var t = this, e = t._errorClassName, n = t._sandboxWrapperEl ? t._sandboxWrapperEl : t._srcEl;
			return this._srcEl ? u.always(i.write(function() {
				r.add(n, e);
			}), function() {
				o.trigger("rendered", { target: n }), t._resolve(n);
			}) : (t._resolve(), a.resolve());
		}, c.prototype.success = function() {
			var t = this._sandboxWrapperEl ? this._sandboxWrapperEl : this._sandbox.sandboxEl;
			o.trigger("rendered", { target: t }), this._resolve(t);
		}, t.exports = c;
	},
	function(t, e, n) {
		var r;
		!function() {
			"use strict";
			var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
				return window.setTimeout(t, 1e3 / 60);
			};
			function o() {
				this.frames = [], this.lastId = 0, this.raf = i, this.batch = {
					hash: {},
					read: [],
					write: [],
					mode: null
				};
			}
			o.prototype.read = function(t, e) {
				var n = this.add("read", t, e), r = n.id;
				return this.batch.read.push(n.id), "reading" === this.batch.mode || this.batch.scheduled ? r : (this.scheduleBatch(), r);
			}, o.prototype.write = function(t, e) {
				var n = this.add("write", t, e), r = this.batch.mode, i = n.id;
				return this.batch.write.push(n.id), "writing" === r || "reading" === r || this.batch.scheduled ? i : (this.scheduleBatch(), i);
			}, o.prototype.defer = function(t, e, n) {
				"function" == typeof t && (n = e, e = t, t = 1);
				var r = this, i = t - 1;
				return this.schedule(i, function() {
					r.run({
						fn: e,
						ctx: n
					});
				});
			}, o.prototype.clear = function(t) {
				if ("function" == typeof t) return this.clearFrame(t);
				t = Number(t);
				var e = this.batch.hash[t];
				if (e) {
					var n = this.batch[e.type], r = n.indexOf(t);
					delete this.batch.hash[t], ~r && n.splice(r, 1);
				}
			}, o.prototype.clearFrame = function(t) {
				var e = this.frames.indexOf(t);
				~e && this.frames.splice(e, 1);
			}, o.prototype.scheduleBatch = function() {
				var t = this;
				this.schedule(0, function() {
					t.batch.scheduled = !1, t.runBatch();
				}), this.batch.scheduled = !0;
			}, o.prototype.uniqueId = function() {
				return ++this.lastId;
			}, o.prototype.flush = function(t) {
				for (var e; e = t.shift();) this.run(this.batch.hash[e]);
			}, o.prototype.runBatch = function() {
				try {
					this.batch.mode = "reading", this.flush(this.batch.read), this.batch.mode = "writing", this.flush(this.batch.write), this.batch.mode = null;
				} catch (t) {
					throw this.runBatch(), t;
				}
			}, o.prototype.add = function(t, e, n) {
				var r = this.uniqueId();
				return this.batch.hash[r] = {
					id: r,
					fn: e,
					ctx: n,
					type: t
				};
			}, o.prototype.run = function(t) {
				var e = t.ctx || this, n = t.fn;
				if (delete this.batch.hash[t.id], !this.onError) return n.call(e);
				try {
					n.call(e);
				} catch (t) {
					this.onError(t);
				}
			}, o.prototype.loop = function() {
				var t, e = this, n = this.raf, r = !1;
				function i() {
					var t = e.frames.shift();
					e.frames.length ? n(i) : e.looping = !1, t && t();
				}
				this.looping || (t = setTimeout(function() {
					r = !0, i();
				}, 500), n(function() {
					r || (clearTimeout(t), i());
				}), this.looping = !0);
			}, o.prototype.schedule = function(t, e) {
				return this.frames[t] ? this.schedule(t + 1, e) : (this.loop(), this.frames[t] = e);
			};
			var s = new o();
			void 0 !== t && t.exports ? t.exports = s : void 0 === (r = function() {
				return s;
			}.call(e, n, e, t)) || (t.exports = r);
		}();
	},
	function(t, e, n) {
		var r = n(2), i = n(94), o = n(7);
		function s(t) {
			this._inputsQueue = [], this._task = t, this._hasFlushBeenScheduled = !1;
		}
		s.prototype.add = function(t) {
			var e = new r();
			return this._inputsQueue.push({
				input: t,
				taskDoneDeferred: e
			}), this._hasFlushBeenScheduled || (this._hasFlushBeenScheduled = !0, i(o(this._flush, this))), e.promise;
		}, s.prototype._flush = function() {
			try {
				this._task.call(null, this._inputsQueue);
			} catch (t) {
				this._inputsQueue.forEach(function(e) {
					e.taskDoneDeferred.reject(t);
				});
			}
			this._inputsQueue = [], this._hasFlushBeenScheduled = !1;
		}, t.exports = s;
	},
	function(t, e, n) {
		var r = n(45).Promise;
		t.exports = r._asap;
	},
	function(t, e, n) {
		var r, i, o, s = n(3), a = n(1), u = n(29), c = n(19), d = n(2), f = n(6), l = n(53), h = n(37), p = n(0), m = n(30), v = n(9).get("scribeCallback"), g = Math.floor(1e3 * Math.random()) + "_", w = "rufous-frame-" + g + "-", y = "rufous-form-" + g + "-", b = 0, _ = !1, E = new d();
		function x() {
			var t = o.createElement("form"), e = o.createElement("input"), n = o.createElement("input");
			return b++, t.action = h.CLIENT_EVENT_ENDPOINT, t.method = "POST", t.target = w + b, t.id = y + b, e.type = "hidden", e.name = "dnt", e.value = c.enabled(), n.type = "hidden", n.name = "tfw_redirect", n.value = h.RUFOUS_REDIRECT, t.appendChild(e), t.appendChild(n), t;
		}
		function T() {
			var t = w + b;
			return u({
				id: t,
				name: t,
				width: 0,
				height: 0,
				border: 0
			}, { display: "none" }, o.doc);
		}
		t.exports = {
			clientEvent: function(t, e, n, i) {
				(function(t, e) {
					var n = !p.isObject(t), r = !!e && !p.isObject(e), i = n || r;
					return i;
				})(t, e) || (v && v(arguments), E.promise.then(function() {
					!function(t, e) {
						var n, i, s;
						p.isObject(t) && p.isObject(e) && (l.log(t, e), s = h.flattenClientEventPayload(t, e), (n = r.firstChild).value = +(+n.value || s.dnt || 0), (i = o.createElement("input")).type = "hidden", i.name = "l", i.value = h.stringify(s), r.appendChild(i));
					}(h.formatClientEventNamespace(t), h.formatClientEventData(e, n, i));
				}));
			},
			flush: function() {
				return E.promise.then(function() {
					var t;
					return r.children.length <= 2 ? f.reject() : (t = f.all([o.doc.body.appendChild(r), o.doc.body.appendChild(i)]).then(function(t) {
						var e = t[0], n = t[1];
						return n.addEventListener("load", function() {
							!function(t, e) {
								return function() {
									var n = t.parentNode;
									n && (n.removeChild(t), n.removeChild(e));
								};
							}(e, n)();
						}), e.submit(), t;
					}), r = x(), i = T(), t);
				});
			},
			init: function() {
				return _ ? E.promise : ((o = new m(a)).insert("rufous-sandbox", null, { display: "none" }, function(t) {
					s.body.appendChild(t);
				}).then(function() {
					o.setTitle("Twitter analytics iframe"), r = x(), i = T(), E.resolve([r, i]);
				}), _ = !0, E.promise);
			}
		};
	},
	function(t, e, n) {
		var r = n(8), i = /^[^#?]*\.(gov|mil)(:\d+)?([#?].*)?$/i, o = {};
		function s(t) {
			return t in o ? o[t] : o[t] = i.test(t);
		}
		t.exports = {
			isUrlSensitive: s,
			isHostPageSensitive: function() {
				return s(r.host);
			}
		};
	},
	function(t, e, n) {
		var r = n(0);
		t.exports = function t(e) {
			var n = [];
			return e.forEach(function(e) {
				var i = r.isType("array", e) ? t(e) : [e];
				n = n.concat(i);
			}), n;
		};
	},
	function(t, e) {
		t.exports = function(t) {
			return t.filter(function(e, n) {
				return t.indexOf(e) === n;
			});
		};
	},
	function(t, e, n) {
		var r = n(40), i = n(0), o = n(101);
		function s() {
			r.apply(this, arguments);
		}
		s.prototype = Object.create(r.prototype), i.aug(s.prototype, { factory: o }), t.exports = s;
	},
	function(t, e, n) {
		var r = n(23), i = n(0), o = n(7);
		t.exports = {
			before: function(t, e) {
				return function() {
					var n, i = this, o = arguments;
					return n = e.apply(this, arguments), r.isPromise(n) ? n.then(function() {
						return t.apply(i, o);
					}) : t.apply(this, arguments);
				};
			},
			after: function(t, e) {
				return function() {
					var n, i = this, o = arguments;
					function s(t, e) {
						return r.isPromise(e) ? e.then(function() {
							return t;
						}) : t;
					}
					return n = t.apply(this, arguments), r.isPromise(n) ? n.then(function(t) {
						return s(t, e.apply(i, o));
					}) : s(n, e.apply(this, arguments));
				};
			},
			around: function(t, e) {
				return function() {
					var n = i.toRealArray(arguments);
					return n.unshift(o(t, this)), e.apply(this, n);
				};
			}
		};
	},
	function(t, e, n) {
		var r = n(10), i = n(17), o = n(41), s = n(6), a = n(0);
		t.exports = function() {
			var t = o();
			function e(e) {
				t.apply(this, arguments), Object.defineProperty(this, "targetGlobal", { value: e });
			}
			return e.prototype = Object.create(t.prototype), a.aug(e.prototype, {
				id: null,
				initialized: !1,
				width: 0,
				height: 0,
				sandboxEl: null,
				insert: function() {
					return s.reject();
				},
				onResize: function() {},
				addClass: function(t) {
					var e = this.sandboxEl;
					return t = Array.isArray(t) ? t : [t], i.write(function() {
						t.forEach(function(t) {
							r.add(e, t);
						});
					});
				},
				removeClass: function(t) {
					var e = this.sandboxEl;
					return t = Array.isArray(t) ? t : [t], i.write(function() {
						t.forEach(function(t) {
							r.remove(e, t);
						});
					});
				},
				styleSelf: function(t) {
					var e = this;
					return i.write(function() {
						a.forIn(t, function(t, n) {
							e.sandboxEl.style[t] = n;
						});
					});
				}
			}), e;
		};
	},
	function(t, e, n) {
		var r = n(3), i = n(10), o = n(17), s = n(54), a = n(25), u = n(55), c = n(56), d = n(43), f = n(29), l = n(18), h = n(57), p = n(2), m = n(6), v = n(0), g = n(9), w = n(21), y = n(7), b = { allowfullscreen: "true" }, _ = {
			position: "absolute",
			visibility: "hidden",
			display: "block",
			width: "0px",
			height: "0px",
			padding: "0",
			border: "none"
		}, E = {
			position: "static",
			visibility: "visible"
		}, x = "SandboxRoot", T = ".SandboxRoot { display: none; }", A = 50;
		function S(t, e, n, r) {
			return e = v.aug({ id: t }, b, e), n = v.aug({}, _, n), f(e, n, r);
		}
		function R(t, e, n, i, s) {
			var a = new p(), u = w.generate(), c = S(t, e, n, s);
			return g.set(["sandbox", u], function() {
				var t = c.contentWindow.document;
				o.write(function() {
					t.write("<!DOCTYPE html><html><head></head><body></body></html>");
				}).then(function() {
					t.close(), a.resolve(c);
				});
			}), c.src = [
				"javascript:",
				"document.write(\"\");",
				"try { window.parent.document; }",
				"catch (e) { document.domain=\"" + r.domain + "\"; }",
				"window.parent." + g.fullPath(["sandbox", u]) + "();"
			].join(""), c.addEventListener("error", a.reject, !1), o.write(function() {
				i.parentNode.replaceChild(c, i);
			}), a.promise;
		}
		t.exports = a.couple(n(58), function(t) {
			t.overrideProperty("id", { get: function() {
				return this.sandboxEl && this.sandboxEl.id;
			} }), t.overrideProperty("initialized", { get: function() {
				return !!this.win;
			} }), t.overrideProperty("width", { get: function() {
				return this._width;
			} }), t.overrideProperty("height", { get: function() {
				return this._height;
			} }), t.overrideProperty("sandboxEl", { get: function() {
				return this.iframeEl;
			} }), t.defineProperty("iframeEl", { get: function() {
				return this._iframe;
			} }), t.defineProperty("rootEl", { get: function() {
				return this.doc && this.doc.documentElement;
			} }), t.defineProperty("widgetEl", { get: function() {
				return this.doc && this.doc.body.firstElementChild;
			} }), t.defineProperty("win", { get: function() {
				return this.iframeEl && this.iframeEl.contentWindow;
			} }), t.defineProperty("doc", { get: function() {
				return this.win && this.win.document;
			} }), t.define("_updateCachedDimensions", function() {
				var t = this;
				return o.read(function() {
					var e, n = h(t.sandboxEl);
					"visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = h(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height;
				});
			}), t.define("_setTargetToBlank", function() {
				var t = this.createElement("base");
				t.target = "_blank", this.doc.head.appendChild(t);
			}), t.define("_didResize", function() {
				var t = this, e = this._resizeHandlers.slice(0);
				return this._updateCachedDimensions().then(function() {
					e.forEach(function(e) {
						e(t);
					});
				});
			}), t.define("setTitle", function(t) {
				this.iframeEl.title = t;
			}), t.override("createElement", function(t) {
				return this.doc.createElement(t);
			}), t.override("createFragment", function() {
				return this.doc.createDocumentFragment();
			}), t.override("htmlToElement", function(t) {
				var e;
				return (e = this.createElement("div")).innerHTML = t, e.firstElementChild;
			}), t.override("hasSelectedText", function() {
				return !!s.getSelectedText(this.win);
			}), t.override("addRootClass", function(t) {
				var e = this.rootEl;
				return t = Array.isArray(t) ? t : [t], this.initialized ? o.write(function() {
					t.forEach(function(t) {
						i.add(e, t);
					});
				}) : m.reject(new Error("sandbox not initialized"));
			}), t.override("removeRootClass", function(t) {
				var e = this.rootEl;
				return t = Array.isArray(t) ? t : [t], this.initialized ? o.write(function() {
					t.forEach(function(t) {
						i.remove(e, t);
					});
				}) : m.reject(new Error("sandbox not initialized"));
			}), t.override("hasRootClass", function(t) {
				return i.present(this.rootEl, t);
			}), t.define("addStyleSheet", function(t, e) {
				var n, r = new p();
				return this.initialized ? ((n = this.createElement("link")).type = "text/css", n.rel = "stylesheet", n.href = t, n.addEventListener("load", r.resolve, !1), n.addEventListener("error", r.reject, !1), o.write(y(e, null, n)).then(function() {
					return u(t).then(r.resolve, r.reject), r.promise;
				})) : m.reject(new Error("sandbox not initialized"));
			}), t.override("prependStyleSheet", function(t) {
				var e = this.doc;
				return this.addStyleSheet(t, function(t) {
					var n = e.head.firstElementChild;
					return n ? e.head.insertBefore(t, n) : e.head.appendChild(t);
				});
			}), t.override("appendStyleSheet", function(t) {
				var e = this.doc;
				return this.addStyleSheet(t, function(t) {
					return e.head.appendChild(t);
				});
			}), t.define("addCss", function(t, e) {
				var n;
				return c.inlineStyle() ? ((n = this.createElement("style")).type = "text/css", n.appendChild(this.doc.createTextNode(t)), o.write(y(e, null, n))) : (l.devError("CSP enabled; cannot embed inline styles"), m.resolve());
			}), t.override("prependCss", function(t) {
				var e = this.doc;
				return this.addCss(t, function(t) {
					var n = e.head.firstElementChild;
					return n ? e.head.insertBefore(t, n) : e.head.appendChild(t);
				});
			}), t.override("appendCss", function(t) {
				var e = this.doc;
				return this.addCss(t, function(t) {
					return e.head.appendChild(t);
				});
			}), t.override("makeVisible", function() {
				var t = this;
				return this.styleSelf(E).then(function() {
					t._updateCachedDimensions();
				});
			}), t.override("injectWidgetEl", function(t) {
				var e = this;
				return this.initialized ? this.widgetEl ? m.reject(new Error("widget already injected")) : o.write(function() {
					e.doc.body.appendChild(t);
				}) : m.reject(new Error("sandbox not initialized"));
			}), t.override("matchHeightToContent", function() {
				var t, e = this;
				return o.read(function() {
					t = e.widgetEl ? h(e.widgetEl).height : 0;
				}), o.write(function() {
					e.sandboxEl.style.height = t + "px";
				}).then(function() {
					return e._updateCachedDimensions();
				});
			}), t.override("matchWidthToContent", function() {
				var t, e = this;
				return o.read(function() {
					t = e.widgetEl ? h(e.widgetEl).width : 0;
				}), o.write(function() {
					e.sandboxEl.style.width = t + "px";
				}).then(function() {
					return e._updateCachedDimensions();
				});
			}), t.after("initialize", function() {
				this._iframe = null, this._width = this._height = 0, this._resizeHandlers = [];
			}), t.override("insert", function(t, e, n, r) {
				var i = this, s = new p(), a = this.targetGlobal.document, u = S(t, e, n, a);
				return o.write(y(r, null, u)), u.addEventListener("load", function() {
					(function(t) {
						try {
							t.contentWindow.document;
						} catch (t) {
							return m.reject(t);
						}
						return m.resolve(t);
					})(u).then(null, y(R, null, t, e, n, u, a)).then(s.resolve, s.reject);
				}, !1), u.addEventListener("error", s.reject, !1), s.promise.then(function(t) {
					var e = d(i._didResize, A, i);
					return i._iframe = t, i.win.addEventListener("resize", e, !1), m.all([
						i._setTargetToBlank(),
						i.addRootClass(x),
						i.prependCss(T)
					]);
				});
			}), t.override("onResize", function(t) {
				this._resizeHandlers.push(t);
			}), t.after("styleSelf", function() {
				return this._updateCachedDimensions();
			});
		});
	},
	function(t, e) {
		t.exports = function() {
			throw new Error("unimplemented method");
		};
	},
	function(t, e) {
		t.exports = { getBaseURLPath: function(t) {
			switch (t && t.tfw_team_holdback_11929 && t.tfw_team_holdback_11929.bucket) {
				case "control": return "embed-holdback";
				case "holdback_prod": return "embed-holdback-prod";
				default: return "embed";
			}
		} };
	},
	function(t, e, n) {
		var r = n(2), i = n(7), o = 100, s = 3e3;
		function a(t, e) {
			this._inputsQueue = [], this._task = t, this._isPaused = !1, this._flushDelay = e && e.flushDelay || o, this._pauseLength = e && e.pauseLength || s, this._flushTimeout = void 0;
		}
		a.prototype.add = function(t) {
			var e = new r();
			return this._inputsQueue.push({
				input: t,
				taskDoneDeferred: e
			}), this._scheduleFlush(), e.promise;
		}, a.prototype._scheduleFlush = function() {
			this._isPaused || (clearTimeout(this._flushTimeout), this._flushTimeout = setTimeout(i(this._flush, this), this._flushDelay));
		}, a.prototype._flush = function() {
			try {
				this._task.call(null, this._inputsQueue);
			} catch (t) {
				this._inputsQueue.forEach(function(e) {
					e.taskDoneDeferred.reject(t);
				});
			}
			this._inputsQueue = [], this._flushTimeout = void 0;
		}, a.prototype.pause = function(t) {
			clearTimeout(this._flushTimeout), this._isPaused = !0, !t && this._pauseLength && setTimeout(i(this.resume, this), this._pauseLength);
		}, a.prototype.resume = function() {
			this._isPaused = !1, this._scheduleFlush();
		}, t.exports = a;
	},
	function(t, e, n) {
		var r = n(73), i = n(29), o = n(2), s = n(3), a = n(28), u = n(20), c = n(24), d = n(8), f = n(18), l = n(107), h = n(59), p = n(9), m = n(16), v = n(4), g = n(0), w = n(1), y = h(function() {
			return new o();
		}), b = {
			shouldObtainCookieConsent: !1,
			features: {}
		};
		t.exports = {
			load: function() {
				var t, e, n, o;
				if (u.ie9() || u.ie10() || "http:" !== d.protocol && "https:" !== d.protocol) return f.devError("Using default settings due to unsupported browser or protocol."), void y().resolve();
				t = { origin: d.origin }, a.settings().indexOf("localhost") > -1 && (t.localSettings = !0), e = m.url(r.resourceBaseUrl + r.widgetIframeHtmlPath, t), n = function(t) {
					var n, r, i, o;
					if (r = v.isTwitterURL(t.origin), i = e.substr(0, t.origin.length) === t.origin, o = v.isTwimgURL(t.origin), i && r || o) try {
						(n = "string" == typeof t.data ? c.parse(t.data) : t.data).namespace === l.settings && (b = g.aug(b, {
							features: n.settings.features,
							sessionId: n.sessionId
						}), y().resolve());
					} catch (t) {
						f.devError(t);
					}
				}, w.addEventListener("message", n), o = i({
					src: e,
					title: "Twitter settings iframe"
				}, { display: "none" }), s.body.appendChild(o);
			},
			settingsLoaded: function() {
				var t, e;
				return t = p.get("experimentOverride"), y().promise.then(function() {
					return t && t.name && t.assignment && ((e = {})[t.name] = { bucket: t.assignment }, b.features = g.aug(b.features, e)), b;
				});
			}
		};
	},
	function(t, e) {
		t.exports = { settings: "twttr.settings" };
	},
	function(t, e, n) {
		t.exports = [
			n(109),
			n(119),
			n(124),
			n(126),
			n(128),
			n(130),
			n(143),
			n(145)
		];
	},
	function(t, e, n) {
		var r = n(0), i = n(11), o = n(12)(), s = n(60), a = "blockquote.twitter-broadcast";
		t.exports = function(t, e) {
			return o(t, a).map(function(t) {
				return s(function(t) {
					var e = i(t), n = t.getAttribute("data-broadcast-id");
					return r.aug(e, { broadcastId: n });
				}(t), t.parentNode, t, e);
			});
		};
	},
	function(t, e, n) {
		var r = n(0);
		t.exports = function t(e) {
			var n;
			if (e) return n = e.lang || e.getAttribute("data-lang"), r.isType("string", n) ? n : t(e.parentElement);
		};
	},
	function(t, e, n) {
		var r = n(0), i = n(48);
		t.exports = function(t, e) {
			return i(t, e) ? [t] : r.toRealArray(t.querySelectorAll(e));
		};
	},
	function(t, e, n) {
		var r = n(17), i = n(113), o = n(59), s = n(29), a = n(2), u = n(6), c = n(7), d = n(0), f = { allowfullscreen: "true" }, l = {
			position: "absolute",
			visibility: "hidden",
			width: "0px",
			height: "0px"
		}, h = {
			position: "static",
			visibility: "visible"
		}, p = {};
		i(function(t, e, n) {
			var r = p[t];
			if (r) return e = e || 1, n = n || 1, r.styleSelf({
				width: e + "px",
				height: n + "px"
			}).then(function() {
				r.didResize();
			});
		}, function(t) {
			var e = p[t];
			if (e) return e._results.resolve();
		}, function(t) {
			var e = p[t];
			if (e) return e._rendered.resolve();
		}, function(t, e) {
			var n = p[t];
			n && e && n.setIframeVersion(e);
		}, function(t) {
			var e = p[t];
			if (e) return e._results.reject();
		}), t.exports = function(t) {
			t.overrideProperty("id", { get: function() {
				return this.sandboxEl && this.sandboxEl.id;
			} }), t.overrideProperty("initialized", { get: function() {
				return !!this.iframeEl;
			} }), t.overrideProperty("width", { get: function() {
				return this._width;
			} }), t.overrideProperty("height", { get: function() {
				return this._height;
			} }), t.overrideProperty("sandboxEl", { get: function() {
				return this.iframeEl;
			} }), t.defineProperty("iframeEl", { get: function() {
				return this._iframe;
			} }), t.defineProperty("iframeVersion", { get: function() {
				return this._iframeVersion;
			} }), t.define("updateCachedDimensions", function() {
				var t = this;
				return this.initialized ? r.read(function() {
					t._width = t.sandboxEl.offsetWidth, t._height = t.sandboxEl.offsetHeight;
				}) : u.resolve();
			}), t.define("setTitle", function(t) {
				this.iframeEl.title = t;
			}), t.define("setWaitToSwapUntilRendered", function(t) {
				this._waitToSwapUntilRendered = t;
			}), t.define("setIframeVersion", function(t) {
				this._iframeVersion = t;
			}), t.define("getResultsPromise", function() {
				return this._results.promise;
			}), t.define("getRenderedPromise", function() {
				return this._rendered.promise;
			}), t.define("makeVisible", function() {
				return this.styleSelf(h);
			}), t.define("didResize", function() {
				var t = this, e = t._resizeHandlers.length > 0;
				return this.updateCachedDimensions().then(function() {
					e && t._resizeHandlers.forEach(function(e) {
						e(t);
					});
				});
			}), t.define("loadDocument", function(t) {
				var e = new a();
				return this.initialized ? this.iframeEl.src ? u.reject(new Error("widget already loaded")) : (this.iframeEl.addEventListener("load", e.resolve, !1), this.iframeEl.addEventListener("error", e.reject, !1), this.iframeEl.src = t, e.promise) : u.reject(new Error("sandbox not initialized"));
			}), t.after("initialize", function() {
				var t = new a(), e = new a();
				this._iframe = null, this._iframeVersion = null, this._width = this._height = 0, this._resizeHandlers = [], this._rendered = t, this._results = e, this._waitToSwapUntilRendered = !1;
			}), t.override("insert", function(t, e, n, i) {
				var a = this;
				return e = d.aug({ id: t }, f, e), n = d.aug({}, l, n), this._iframe = s(e, n), p[t] = this, a._waitToSwapUntilRendered || this.onResize(o(function() {
					a.makeVisible();
				})), r.write(c(i, null, this._iframe));
			}), t.override("onResize", function(t) {
				this._resizeHandlers.push(t);
			}), t.after("styleSelf", function() {
				return this.updateCachedDimensions();
			});
		};
	},
	function(t, e, n) {
		var r = n(1), i = n(114), o = n(116), s = n(22), a = n(5), u = n(117);
		t.exports = function(t, e, n, c, d) {
			function f(t) {
				var e = u(this);
				s.trigger(t.type, {
					target: e,
					region: t.region,
					type: t.type,
					data: t.data || {}
				});
			}
			function l(e) {
				var n = u(this), r = n && n.id, i = a.asInt(e.width), o = a.asInt(e.height);
				r && void 0 !== i && void 0 !== o && t(r, i, o);
			}
			new i().attachReceiver(new o.Receiver(r, "twttr.button")).bind("twttr.private.trigger", f).bind("twttr.private.resizeButton", l), new i().attachReceiver(new o.Receiver(r, "twttr.embed")).bind("twttr.private.initialized", function(t) {
				var e = u(this), n = e && e.id, r = t.iframe_version;
				n && r && c && c(n, r);
			}).bind("twttr.private.trigger", f).bind("twttr.private.results", function() {
				var t = u(this), n = t && t.id;
				n && e && e(n);
			}).bind("twttr.private.rendered", function() {
				var t = u(this), e = t && t.id;
				e && n && n(e);
			}).bind("twttr.private.no_results", function() {
				var t = u(this), e = t && t.id;
				e && d && d(e);
			}).bind("twttr.private.resize", l);
		};
	},
	function(t, e, n) {
		var r = n(24), i = n(115), o = n(0), s = n(6), a = n(23), u = "2.0";
		function c(t) {
			this.registry = t || {};
		}
		function d(t) {
			var e, n;
			return e = o.isType("string", t), n = o.isType("number", t), e || n || null === t;
		}
		function f(t, e) {
			return {
				jsonrpc: u,
				id: d(t) ? t : null,
				error: e
			};
		}
		c.prototype._invoke = function(t, e) {
			var n, r, i;
			n = this.registry[t.method], r = t.params || [], r = o.isType("array", r) ? r : [r];
			try {
				i = n.apply(e.source || null, r);
			} catch (t) {
				i = s.reject(t.message);
			}
			return a.isPromise(i) ? i : s.resolve(i);
		}, c.prototype._processRequest = function(t, e) {
			var n, r;
			return function(t) {
				var e, n, r;
				return !!o.isObject(t) && (e = t.jsonrpc === u, n = o.isType("string", t.method), r = !("id" in t) || d(t.id), e && n && r);
			}(t) ? (n = "params" in t && (r = t.params, !o.isObject(r) || o.isType("function", r)) ? s.resolve(f(t.id, i.INVALID_PARAMS)) : this.registry[t.method] ? this._invoke(t, { source: e }).then(function(e) {
				return n = t.id, {
					jsonrpc: u,
					id: n,
					result: e
				};
				var n;
			}, function() {
				return f(t.id, i.INTERNAL_ERROR);
			}) : s.resolve(f(t.id, i.METHOD_NOT_FOUND)), null != t.id ? n : s.resolve()) : s.resolve(f(t.id, i.INVALID_REQUEST));
		}, c.prototype.attachReceiver = function(t) {
			return t.attachTo(this), this;
		}, c.prototype.bind = function(t, e) {
			return this.registry[t] = e, this;
		}, c.prototype.receive = function(t, e) {
			var n, a, u, c = this;
			try {
				u = t, t = o.isType("string", u) ? r.parse(u) : u;
			} catch (t) {
				return s.resolve(f(null, i.PARSE_ERROR));
			}
			return e = e || null, a = ((n = o.isType("array", t)) ? t : [t]).map(function(t) {
				return c._processRequest(t, e);
			}), n ? function(t) {
				return s.all(t).then(function(t) {
					return (t = t.filter(function(t) {
						return void 0 !== t;
					})).length ? t : void 0;
				});
			}(a) : a[0];
		}, t.exports = c;
	},
	function(t) {
		t.exports = {
			PARSE_ERROR: {
				code: -32700,
				message: "Parse error"
			},
			INVALID_REQUEST: {
				code: -32600,
				message: "Invalid Request"
			},
			INVALID_PARAMS: {
				code: -32602,
				message: "Invalid params"
			},
			METHOD_NOT_FOUND: {
				code: -32601,
				message: "Method not found"
			},
			INTERNAL_ERROR: {
				code: -32603,
				message: "Internal error"
			}
		};
	},
	function(t, e, n) {
		var r = n(8), i = n(1), o = n(24), s = n(2), a = n(20), u = n(0), c = n(4), d = n(7), f = a.ie9();
		function l(t, e, n) {
			var r;
			t && t.postMessage && (f ? r = (n || "") + o.stringify(e) : n ? (r = {})[n] = e : r = e, t.postMessage(r, "*"));
		}
		function h(t) {
			return u.isType("string", t) ? t : "JSONRPC";
		}
		function p(t, e) {
			return e ? u.isType("string", t) && 0 === t.indexOf(e) ? t.substring(e.length) : t && t[e] ? t[e] : void 0 : t;
		}
		function m(t, e) {
			var n = t.document;
			this.filter = h(e), this.server = null, this.isTwitterFrame = c.isTwitterURL(n.location.href), t.addEventListener("message", d(this._onMessage, this), !1);
		}
		function v(t, e) {
			this.pending = {}, this.target = t, this.isTwitterHost = c.isTwitterURL(r.href), this.filter = h(e), i.addEventListener("message", d(this._onMessage, this), !1);
		}
		u.aug(m.prototype, {
			_onMessage: function(t) {
				var e, n = this;
				this.server && (this.isTwitterFrame && !c.isTwitterURL(t.origin) || (e = p(t.data, this.filter)) && this.server.receive(e, t.source).then(function(e) {
					e && l(t.source, e, n.filter);
				}));
			},
			attachTo: function(t) {
				this.server = t;
			},
			detach: function() {
				this.server = null;
			}
		}), u.aug(v.prototype, {
			_processResponse: function(t) {
				var e = this.pending[t.id];
				e && (e.resolve(t), delete this.pending[t.id]);
			},
			_onMessage: function(t) {
				var e;
				if ((!this.isTwitterHost || c.isTwitterURL(t.origin)) && (e = p(t.data, this.filter))) {
					if (u.isType("string", e)) try {
						e = o.parse(e);
					} catch (t) {
						return;
					}
					(e = u.isType("array", e) ? e : [e]).forEach(d(this._processResponse, this));
				}
			},
			send: function(t) {
				var e = new s();
				return t.id ? this.pending[t.id] = e : e.resolve(), l(this.target, t, this.filter), e.promise;
			}
		}), t.exports = {
			Receiver: m,
			Dispatcher: v,
			_stringifyPayload: function(t) {
				return arguments.length > 0 && (f = !!t), f;
			}
		};
	},
	function(t, e, n) {
		var r = n(3);
		t.exports = function(t) {
			for (var e, n = r.getElementsByTagName("iframe"), i = 0; n[i]; i++) if ((e = n[i]).contentWindow === t) return e;
		};
	},
	function(t, e, n) {
		var r = n(2);
		t.exports = function(t, e) {
			var i = new r();
			return n.e(1).then(function(r) {
				var o;
				try {
					o = n(76), i.resolve(new o(t, e));
				} catch (t) {
					i.reject(t);
				}
			}.bind(null, n)).catch(function(t) {
				i.reject(t);
			}), i.promise;
		};
	},
	function(t, e, n) {
		var r = n(16), i = n(5), o = n(0), s = n(11), a = n(12)(), u = n(61), c = "a.twitter-dm-button";
		t.exports = function(t) {
			return a(t, c).map(function(t) {
				return u(function(t) {
					var e = t.getAttribute("data-show-screen-name"), n = s(t), a = t.getAttribute("href"), u = t.getAttribute("data-screen-name"), c = e ? i.asBoolean(e) : null, d = t.getAttribute("data-size"), f = r.decodeURL(a), l = f.recipient_id, h = t.getAttribute("data-text") || f.text, p = t.getAttribute("data-welcome-message-id") || f.welcomeMessageId;
					return o.aug(n, {
						screenName: u,
						showScreenName: c,
						size: d,
						text: h,
						userId: l,
						welcomeMessageId: p
					});
				}(t), t.parentNode, t);
			});
		};
	},
	function(t, e, n) {
		var r = n(2);
		t.exports = function(t, e) {
			var i = new r();
			return n.e(2).then(function(r) {
				var o;
				try {
					o = n(77), i.resolve(new o(t, e));
				} catch (t) {
					i.reject(t);
				}
			}.bind(null, n)).catch(function(t) {
				i.reject(t);
			}), i.promise;
		};
	},
	function(t, e, n) {
		var r = n(62), i = n(30);
		t.exports = r.isSupported() ? r : i;
	},
	function(t, e, n) {
		var r = n(123), i = n(1), o = n(10), s = n(35), a = n(17), u = n(54), c = n(25), d = n(55), f = n(56), l = n(57), h = n(7), p = n(43), m = n(6), v = n(0), g = 50, w = {
			position: "absolute",
			visibility: "hidden",
			display: "block",
			transform: "rotate(0deg)"
		}, y = {
			position: "static",
			visibility: "visible"
		}, b = "twitter-widget", _ = "open", E = "SandboxRoot", x = ".SandboxRoot { display: none; max-height: 10000px; }";
		t.exports = c.couple(n(58), function(t) {
			t.defineStatic("isSupported", function() {
				return !!i.HTMLElement.prototype.attachShadow && f.inlineStyle();
			}), t.overrideProperty("id", { get: function() {
				return this.sandboxEl && this.sandboxEl.id;
			} }), t.overrideProperty("initialized", { get: function() {
				return !!this._shadowHost;
			} }), t.overrideProperty("width", { get: function() {
				return this._width;
			} }), t.overrideProperty("height", { get: function() {
				return this._height;
			} }), t.overrideProperty("sandboxEl", { get: function() {
				return this._shadowHost;
			} }), t.define("_updateCachedDimensions", function() {
				var t = this;
				return a.read(function() {
					var e, n = l(t.sandboxEl);
					"visible" == t.sandboxEl.style.visibility ? t._width = n.width : (e = l(t.sandboxEl.parentElement).width, t._width = Math.min(n.width, e)), t._height = n.height;
				});
			}), t.define("_didResize", function() {
				var t = this, e = this._resizeHandlers.slice(0);
				return this._updateCachedDimensions().then(function() {
					e.forEach(function(e) {
						e(t);
					});
				});
			}), t.override("createElement", function(t) {
				return this.targetGlobal.document.createElement(t);
			}), t.override("createFragment", function() {
				return this.targetGlobal.document.createDocumentFragment();
			}), t.override("htmlToElement", function(t) {
				var e;
				return (e = this.createElement("div")).innerHTML = t, e.firstElementChild;
			}), t.override("hasSelectedText", function() {
				return !!u.getSelectedText(this.targetGlobal);
			}), t.override("addRootClass", function(t) {
				var e = this._shadowRootBody;
				return t = Array.isArray(t) ? t : [t], this.initialized ? a.write(function() {
					t.forEach(function(t) {
						o.add(e, t);
					});
				}) : m.reject(new Error("sandbox not initialized"));
			}), t.override("removeRootClass", function(t) {
				var e = this._shadowRootBody;
				return t = Array.isArray(t) ? t : [t], this.initialized ? a.write(function() {
					t.forEach(function(t) {
						o.remove(e, t);
					});
				}) : m.reject(new Error("sandbox not initialized"));
			}), t.override("hasRootClass", function(t) {
				return o.present(this._shadowRootBody, t);
			}), t.override("addStyleSheet", function(t, e) {
				return this.addCss("@import url(\"" + t + "\");", e).then(function() {
					return d(t);
				});
			}), t.override("prependStyleSheet", function(t) {
				var e = this._shadowRoot;
				return this.addStyleSheet(t, function(t) {
					var n = e.firstElementChild;
					return n ? e.insertBefore(t, n) : e.appendChild(t);
				});
			}), t.override("appendStyleSheet", function(t) {
				var e = this._shadowRoot;
				return this.addStyleSheet(t, function(t) {
					return e.appendChild(t);
				});
			}), t.override("addCss", function(t, e) {
				var n;
				return this.initialized ? f.inlineStyle() ? ((n = this.createElement("style")).type = "text/css", n.appendChild(this.targetGlobal.document.createTextNode(t)), a.write(h(e, null, n))) : m.resolve() : m.reject(new Error("sandbox not initialized"));
			}), t.override("prependCss", function(t) {
				var e = this._shadowRoot;
				return this.addCss(t, function(t) {
					var n = e.firstElementChild;
					return n ? e.insertBefore(t, n) : e.appendChild(t);
				});
			}), t.override("appendCss", function(t) {
				var e = this._shadowRoot;
				return this.addCss(t, function(t) {
					return e.appendChild(t);
				});
			}), t.override("makeVisible", function() {
				return this.styleSelf(y);
			}), t.override("injectWidgetEl", function(t) {
				var e = this;
				return this.initialized ? this._shadowRootBody.firstElementChild ? m.reject(new Error("widget already injected")) : a.write(function() {
					e._shadowRootBody.appendChild(t);
				}).then(function() {
					return e._updateCachedDimensions();
				}).then(function() {
					var t = p(e._didResize, g, e);
					new r(e._shadowRootBody, t);
				}) : m.reject(new Error("sandbox not initialized"));
			}), t.override("matchHeightToContent", function() {
				return m.resolve();
			}), t.override("matchWidthToContent", function() {
				return m.resolve();
			}), t.override("insert", function(t, e, n, r) {
				var i = this.targetGlobal.document, o = this._shadowHost = i.createElement(b), u = this._shadowRoot = o.attachShadow({ mode: _ }), c = this._shadowRootBody = i.createElement("div");
				return v.forIn(e || {}, function(t, e) {
					o.setAttribute(t, e);
				}), o.id = t, u.appendChild(c), s.delegate(c, "click", "A", function(t, e) {
					e.hasAttribute("target") || e.setAttribute("target", "_blank");
				}), m.all([
					this.styleSelf(w),
					this.addRootClass(E),
					this.prependCss(x),
					a.write(r.bind(null, o))
				]);
			}), t.override("onResize", function(t) {
				this._resizeHandlers.push(t);
			}), t.after("initialize", function() {
				this._shadowHost = this._shadowRoot = this._shadowRootBody = null, this._width = this._height = 0, this._resizeHandlers = [];
			}), t.after("styleSelf", function() {
				return this._updateCachedDimensions();
			});
		});
	},
	function(t, e) {
		var n;
		(n = function(t, e) {
			function r(t, e) {
				if (t.resizedAttached) {
					if (t.resizedAttached) return void t.resizedAttached.add(e);
				} else t.resizedAttached = new function() {
					var t, e;
					this.q = [], this.add = function(t) {
						this.q.push(t);
					}, this.call = function() {
						for (t = 0, e = this.q.length; t < e; t++) this.q[t].call();
					};
				}(), t.resizedAttached.add(e);
				t.resizeSensor = document.createElement("div"), t.resizeSensor.className = "resize-sensor";
				var n = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;", r = "position: absolute; left: 0; top: 0; transition: 0s;";
				t.resizeSensor.style.cssText = n, t.resizeSensor.innerHTML = "<div class=\"resize-sensor-expand\" style=\"" + n + "\"><div style=\"" + r + "\"></div></div><div class=\"resize-sensor-shrink\" style=\"" + n + "\"><div style=\"" + r + " width: 200%; height: 200%\"></div></div>", t.appendChild(t.resizeSensor), {
					fixed: 1,
					absolute: 1
				}[function(t, e) {
					return t.currentStyle ? t.currentStyle[e] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(e) : t.style[e];
				}(t, "position")] || (t.style.position = "relative");
				var i, o, s = t.resizeSensor.childNodes[0], a = s.childNodes[0], u = t.resizeSensor.childNodes[1], c = (u.childNodes[0], function() {
					a.style.width = s.offsetWidth + 10 + "px", a.style.height = s.offsetHeight + 10 + "px", s.scrollLeft = s.scrollWidth, s.scrollTop = s.scrollHeight, u.scrollLeft = u.scrollWidth, u.scrollTop = u.scrollHeight, i = t.offsetWidth, o = t.offsetHeight;
				});
				c();
				var d = function(t, e, n) {
					t.attachEvent ? t.attachEvent("on" + e, n) : t.addEventListener(e, n);
				}, f = function() {
					t.offsetWidth == i && t.offsetHeight == o || t.resizedAttached && t.resizedAttached.call(), c();
				};
				d(s, "scroll", f), d(u, "scroll", f);
			}
			var i = Object.prototype.toString.call(t), o = "[object Array]" === i || "[object NodeList]" === i || "[object HTMLCollection]" === i || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
			if (o) for (var s = 0, a = t.length; s < a; s++) r(t[s], e);
			else r(t, e);
			this.detach = function() {
				if (o) for (var e = 0, r = t.length; e < r; e++) n.detach(t[e]);
				else n.detach(t);
			};
		}).detach = function(t) {
			t.resizeSensor && (t.removeChild(t.resizeSensor), delete t.resizeSensor, delete t.resizedAttached);
		}, void 0 !== t && void 0 !== t.exports ? t.exports = n : window.ResizeSensor = n;
	},
	function(t, e, n) {
		var r = n(4), i = n(0), o = n(11), s = n(12)(), a = n(63), u = n(5), c = "a.twitter-follow-button";
		t.exports = function(t) {
			return s(t, c).map(function(t) {
				return a(function(t) {
					var e = o(t), n = {
						screenName: r.screenName(t.href),
						showScreenName: "false" !== t.getAttribute("data-show-screen-name"),
						showCount: "false" !== t.getAttribute("data-show-count"),
						size: t.getAttribute("data-size"),
						count: t.getAttribute("data-count"),
						preview: t.getAttribute("data-preview")
					};
					return i.forIn(n, function(t, n) {
						var r = e[t];
						e[t] = u.hasValue(r) ? r : n;
					}), e.screenName = e.screenName || e.screen_name, e;
				}(t), t.parentNode, t);
			});
		};
	},
	function(t, e, n) {
		var r = n(2);
		t.exports = function(t, e) {
			var i = new r();
			return n.e(3).then(function(r) {
				var o;
				try {
					o = n(78), i.resolve(new o(t, e));
				} catch (t) {
					i.reject(t);
				}
			}.bind(null, n)).catch(function(t) {
				i.reject(t);
			}), i.promise;
		};
	},
	function(t, e, n) {
		var r = n(5), i = n(0), o = n(4), s = n(11), a = n(12)(), u = n(64), c = "a.twitter-moment";
		t.exports = function(t) {
			return a(t, c).map(function(t) {
				return u(function(t) {
					var e = s(t), n = {
						momentId: o.momentId(t.href),
						chrome: t.getAttribute("data-chrome"),
						limit: t.getAttribute("data-limit")
					};
					return i.forIn(n, function(t, n) {
						var i = e[t];
						e[t] = r.hasValue(i) ? i : n;
					}), e;
				}(t), t.parentNode, t);
			});
		};
	},
	function(t, e, n) {
		var r = n(2);
		t.exports = function(t, e) {
			var i = new r();
			return n.e(4).then(function(r) {
				var o;
				try {
					o = n(79), i.resolve(new o(t, e));
				} catch (t) {
					i.reject(t);
				}
			}.bind(null, n)).catch(function(t) {
				i.reject(t);
			}), i.promise;
		};
	},
	function(t, e, n) {
		var r = n(0), i = n(11), o = n(12)(), s = n(65), a = "a.periscope-on-air", u = /^https?:\/\/(?:www\.)?(?:periscope|pscp)\.tv\/@?([a-zA-Z0-9_]+)\/?$/i;
		t.exports = function(t) {
			return o(t, a).map(function(t) {
				return s(function(t) {
					var e = i(t), n = t.getAttribute("href"), o = t.getAttribute("data-size"), s = u.exec(n)[1];
					return r.aug(e, {
						username: s,
						size: o
					});
				}(t), t.parentNode, t);
			});
		};
	},
	function(t, e, n) {
		var r = n(2);
		t.exports = function(t, e) {
			var i = new r();
			return n.e(5).then(function(r) {
				var o;
				try {
					o = n(80), i.resolve(new o(t, e));
				} catch (t) {
					i.reject(t);
				}
			}.bind(null, n)).catch(function(t) {
				i.reject(t);
			}), i.promise;
		};
	},
	function(t, e, n) {
		var r = n(5), i = n(0), o = n(66), s = n(11), a = n(12)(), u = n(67), c = n(4), d = n(18), f = "a.twitter-timeline,div.twitter-timeline,a.twitter-grid", l = "Embedded Search timelines have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295.", h = "You may have been affected by an update to settings in embedded timelines. See https://twittercommunity.com/t/deprecating-widget-settings/102295.", p = "Embedded grids have been deprecated and will now render as timelines. Please update your embed code to use the twitter-timeline class. More info: https://twittercommunity.com/t/update-on-the-embedded-grid-display-type/119564.";
		t.exports = function(t, e) {
			return a(t, f).map(function(t) {
				return u(function(t) {
					var e = s(t), n = t.getAttribute("data-show-replies"), a = {
						isPreconfigured: !!t.getAttribute("data-widget-id"),
						chrome: t.getAttribute("data-chrome"),
						tweetLimit: t.getAttribute("data-tweet-limit") || t.getAttribute("data-limit"),
						ariaLive: t.getAttribute("data-aria-polite"),
						theme: t.getAttribute("data-theme"),
						borderColor: t.getAttribute("data-border-color"),
						showReplies: n ? r.asBoolean(n) : null,
						profileScreenName: t.getAttribute("data-screen-name"),
						profileUserId: t.getAttribute("data-user-id"),
						favoritesScreenName: t.getAttribute("data-favorites-screen-name"),
						favoritesUserId: t.getAttribute("data-favorites-user-id"),
						likesScreenName: t.getAttribute("data-likes-screen-name"),
						likesUserId: t.getAttribute("data-likes-user-id"),
						listOwnerScreenName: t.getAttribute("data-list-owner-screen-name"),
						listOwnerUserId: t.getAttribute("data-list-owner-id"),
						listId: t.getAttribute("data-list-id"),
						listSlug: t.getAttribute("data-list-slug"),
						customTimelineId: t.getAttribute("data-custom-timeline-id"),
						staticContent: t.getAttribute("data-static-content"),
						url: t.href
					};
					return a.isPreconfigured && (c.isSearchUrl(a.url) ? d.publicError(l, t) : d.publicLog(h, t)), "twitter-grid" === t.className && d.publicLog(p, t), (a = i.aug(a, e)).dataSource = o(a), a.id = a.dataSource && a.dataSource.id, a;
				}(t), t.parentNode, t, e);
			});
		};
	},
	function(t, e) {
		t.exports = function(t, e, n) {
			for (var r, i = 0; i < t.length; i++) if (r = e.call(n, t[i], i, t)) return r;
		};
	},
	function(t, e, n) {
		var r = n(31);
		t.exports = r.build([n(32), n(135)]);
	},
	function(t, e, n) {
		var r = n(0), i = n(134);
		t.exports = function(t) {
			return "en" === t || r.contains(i, t);
		};
	},
	function(t, e) {
		t.exports = [
			"hi",
			"zh-cn",
			"fr",
			"zh-tw",
			"msa",
			"fil",
			"fi",
			"sv",
			"pl",
			"ja",
			"ko",
			"de",
			"it",
			"pt",
			"es",
			"ru",
			"id",
			"tr",
			"da",
			"no",
			"nl",
			"hu",
			"fa",
			"ar",
			"ur",
			"he",
			"th",
			"cs",
			"uk",
			"vi",
			"ro",
			"bn",
			"el",
			"en-gb",
			"gu",
			"kn",
			"mr",
			"ta",
			"bg",
			"ca",
			"hr",
			"sr",
			"sk"
		];
	},
	function(t, e, n) {
		var r = n(4), i = n(44), o = "collection:";
		function s(t, e) {
			return r.collectionId(t) || e;
		}
		t.exports = function(t) {
			t.params({
				id: {},
				url: {}
			}), t.overrideProperty("id", { get: function() {
				var t = s(this.params.url, this.params.id);
				return o + t;
			} }), t.before("initialize", function() {
				if (!s(this.params.url, this.params.id)) throw new Error("one of url or id is required");
				i();
			});
		};
	},
	function(t, e, n) {
		var r = n(31);
		t.exports = r.build([n(32), n(137)]);
	},
	function(t, e, n) {
		var r = n(4), i = n(44), o = "likes:";
		function s(t) {
			return r.likesScreenName(t.url) || t.screenName;
		}
		t.exports = function(t) {
			t.params({
				screenName: {},
				userId: {},
				url: {}
			}), t.overrideProperty("id", { get: function() {
				var t = s(this.params) || this.params.userId;
				return o + t;
			} }), t.before("initialize", function() {
				if (!s(this.params) && !this.params.userId) throw new Error("screen name or user id is required");
				i();
			});
		};
	},
	function(t, e, n) {
		var r = n(31);
		t.exports = r.build([n(32), n(139)]);
	},
	function(t, e, n) {
		var r = n(4), i = n(0), o = n(28), s = "list:";
		function a(t) {
			var e = r.listScreenNameAndSlug(t.url) || t;
			return i.compact({
				screen_name: e.ownerScreenName,
				user_id: e.ownerUserId,
				list_slug: e.slug
			});
		}
		t.exports = function(t) {
			t.params({
				id: {},
				ownerScreenName: {},
				ownerUserId: {},
				slug: {},
				url: {}
			}), t.overrideProperty("id", { get: function() {
				var t, e, n;
				return this.params.id ? s + this.params.id : (e = (t = a(this.params)) && t.list_slug.replace(/-/g, "_"), n = t && (t.screen_name || t.user_id), s + (n + ":") + e);
			} }), t.overrideProperty("endpoint", { get: function() {
				var t, e = ["timeline-list"];
				return this.params.id ? e.push("list-id", this.params.id) : (t = a(this.params), e.push("screen-name", t.screen_name, "slug", t.list_slug)), o.embedService(e);
			} }), t.before("initialize", function() {
				var t = a(this.params);
				if (i.isEmptyObject(t) && !this.params.id) throw new Error("qualified slug or list id required");
			});
		};
	},
	function(t, e, n) {
		var r = n(31);
		t.exports = r.build([n(32), n(141)]);
	},
	function(t, e, n) {
		var r = n(4), i = n(5), o = n(0), s = n(28), a = "profile:";
		function u(t, e) {
			return r.screenName(t) || e;
		}
		t.exports = function(t) {
			t.params({
				showReplies: {
					fallback: !1,
					transform: i.asBoolean
				},
				screenName: {},
				userId: {},
				url: {}
			}), t.overrideProperty("id", { get: function() {
				var t = u(this.params.url, this.params.screenName);
				return a + (t || this.params.userId);
			} }), t.overrideProperty("endpoint", { get: function() {
				var t = ["timeline-profile"], e = u(this.params.url, this.params.screenName);
				return e ? t.push("screen-name", e) : t.push("user-id", this.params.userId), s.embedService(t);
			} }), t.around("queryParams", function(t) {
				return o.aug(t(), { showReplies: this.params.showReplies ? "true" : "false" });
			}), t.before("initialize", function() {
				if (!u(this.params.url, this.params.screenName) && !this.params.userId) throw new Error("screen name or user id is required");
			});
		};
	},
	function(t, e, n) {
		var r = n(2);
		t.exports = function(t, e) {
			var i = new r();
			return n.e(6).then(function(r) {
				var o;
				try {
					o = n(81), i.resolve(new o(t, e));
				} catch (t) {
					i.reject(t);
				}
			}.bind(null, n)).catch(function(t) {
				i.reject(t);
			}), i.promise;
		};
	},
	function(t, e, n) {
		var r = n(10), i = n(4), o = n(0), s = n(11), a = n(12)(), u = n(68), c = "blockquote.twitter-tweet, blockquote.twitter-video", d = /\btw-align-(left|right|center)\b/;
		t.exports = function(t, e) {
			return a(t, c).map(function(t) {
				return u(function(t) {
					var e = s(t), n = t.getElementsByTagName("A"), a = n && n[n.length - 1], u = a && i.status(a.href), c = t.getAttribute("data-conversation"), f = "none" == c || "hidden" == c || r.present(t, "tw-hide-thread"), l = t.getAttribute("data-cards"), h = "none" == l || "hidden" == l || r.present(t, "tw-hide-media"), p = t.getAttribute("data-media-max-width"), m = t.getAttribute("data-align") || t.getAttribute("align"), v = t.getAttribute("data-theme");
					return !m && d.test(t.className) && (m = RegExp.$1), o.aug(e, {
						tweetId: u,
						hideThread: f,
						hideCard: h,
						mediaMaxWidth: p,
						align: m,
						theme: v,
						id: u
					});
				}(t), t.parentNode, t, e);
			});
		};
	},
	function(t, e, n) {
		var r = n(2);
		t.exports = function(t, e) {
			var i = new r();
			return n.e(7).then(function(r) {
				var o;
				try {
					o = n(82), i.resolve(new o(t, e));
				} catch (t) {
					i.reject(t);
				}
			}.bind(null, n)).catch(function(t) {
				i.reject(t);
			}), i.promise;
		};
	},
	function(t, e, n) {
		var r = n(10), i = n(0), o = n(11), s = n(12)(), a = n(69), u = n(5), c = "a.twitter-share-button, a.twitter-mention-button, a.twitter-hashtag-button", d = "twitter-hashtag-button", f = "twitter-mention-button";
		t.exports = function(t) {
			return s(t, c).map(function(t) {
				return a(function(t) {
					var e = o(t), n = {
						screenName: t.getAttribute("data-button-screen-name"),
						text: t.getAttribute("data-text"),
						type: t.getAttribute("data-type"),
						size: t.getAttribute("data-size"),
						url: t.getAttribute("data-url"),
						hashtags: t.getAttribute("data-hashtags"),
						via: t.getAttribute("data-via"),
						buttonHashtag: t.getAttribute("data-button-hashtag")
					};
					return i.forIn(n, function(t, n) {
						var r = e[t];
						e[t] = u.hasValue(r) ? r : n;
					}), e.screenName = e.screenName || e.screen_name, e.buttonHashtag = e.buttonHashtag || e.button_hashtag || e.hashtag, r.present(t, d) && (e.type = "hashtag"), r.present(t, f) && (e.type = "mention"), e;
				}(t), t.parentNode, t);
			});
		};
	},
	function(t, e, n) {
		var r = n(2);
		t.exports = function(t, e) {
			var i = new r();
			return n.e(3).then(function(r) {
				var o;
				try {
					o = n(83), i.resolve(new o(t, e));
				} catch (t) {
					i.reject(t);
				}
			}.bind(null, n)).catch(function(t) {
				i.reject(t);
			}), i.promise;
		};
	},
	function(t, e, n) {
		var r = n(0);
		t.exports = r.aug({}, n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155));
	},
	function(t, e, n) {
		var r = n(60), i = n(15)(["broadcastId"], {}, r);
		t.exports = { createBroadcast: i };
	},
	function(t, e, n) {
		var r = n(61), i = n(15)(["userId"], {}, r);
		t.exports = { createDMButton: i };
	},
	function(t, e, n) {
		var r = n(63), i = n(15)(["screenName"], {}, r);
		t.exports = { createFollowButton: i };
	},
	function(t, e, n) {
		var r = n(64), i = n(15)(["momentId"], {}, r);
		t.exports = { createMoment: i };
	},
	function(t, e, n) {
		var r = n(65), i = n(15)(["username"], {}, r);
		t.exports = { createPeriscopeOnAirButton: i };
	},
	function(t, e, n) {
		var r = n(8), i = n(18), o = n(4), s = n(0), a = n(5), u = n(66), c = n(67), d = n(15)([], {}, c), f = n(6), l = "Embedded grids have been deprecated. Please use twttr.widgets.createTimeline instead. More info: https://twittercommunity.com/t/update-on-the-embedded-grid-display-type/119564.", h = {
			createTimeline: p,
			createGridFromCollection: function(t) {
				var e = s.toRealArray(arguments).slice(1), n = {
					sourceType: "collection",
					id: t
				};
				return e.unshift(n), i.publicLog(l), p.apply(this, e);
			}
		};
		function p(t) {
			var e, n = s.toRealArray(arguments).slice(1);
			return a.isString(t) || a.isNumber(t) ? f.reject("Embedded timelines with widget settings have been deprecated. See https://twittercommunity.com/t/deprecating-widget-settings/102295.") : s.isObject(t) ? (t = t || {}, n.forEach(function(t) {
				s.isType("object", t) && function(t) {
					t.ariaLive = t.ariaPolite;
				}(e = t);
			}), e || (e = {}, n.push(e)), t.lang = e.lang, t.tweetLimit = e.tweetLimit, t.showReplies = e.showReplies, e.dataSource = u(t), d.apply(this, n)) : f.reject("data source must be an object.");
		}
		o.isTwitterURL(r.href) && (h.createTimelinePreview = function(t, e, n) {
			var r = {
				previewParams: t,
				useLegacyDefaults: !0,
				isPreviewTimeline: !0
			};
			return r.dataSource = u(r), d(e, r, n);
		}), t.exports = h;
	},
	function(t, e, n) {
		var r, i = n(0), o = n(68), s = n(15), a = (r = s(["tweetId"], {}, o), function() {
			return i.toRealArray(arguments).slice(1).forEach(function(t) {
				i.isType("object", t) && (t.hideCard = "none" == t.cards || "hidden" == t.cards, t.hideThread = "none" == t.conversation || "hidden" == t.conversation);
			}), r.apply(this, arguments);
		});
		t.exports = {
			createTweet: a,
			createTweetEmbed: a,
			createVideo: a
		};
	},
	function(t, e, n) {
		var r = n(0), i = n(69), o = n(15), s = o(["url"], { type: "share" }, i), a = o(["buttonHashtag"], { type: "hashtag" }, i), u = o(["screenName"], { type: "mention" }, i);
		function c(t) {
			return function() {
				return r.toRealArray(arguments).slice(1).forEach(function(t) {
					r.isType("object", t) && (t.screenName = t.screenName || t.screen_name, t.buttonHashtag = t.buttonHashtag || t.button_hashtag || t.hashtag);
				}), t.apply(this, arguments);
			};
		}
		t.exports = {
			createShareButton: c(s),
			createHashtagButton: c(a),
			createMentionButton: c(u)
		};
	},
	function(t, e, n) {
		var r, i, o, s = n(3), a = n(1), u = 0, c = [], d = s.createElement("a");
		function f() {
			var t, e;
			for (u = 1, t = 0, e = c.length; t < e; t++) c[t]();
		}
		/^loade|c/.test(s.readyState) && (u = 1), s.addEventListener && s.addEventListener("DOMContentLoaded", i = function() {
			s.removeEventListener("DOMContentLoaded", i, !1), f();
		}, !1), d.doScroll && s.attachEvent("onreadystatechange", r = function() {
			/^c/.test(s.readyState) && (s.detachEvent("onreadystatechange", r), f());
		}), o = d.doScroll ? function(t) {
			a.self != a.top ? u ? t() : c.push(t) : function() {
				try {
					d.doScroll("left");
				} catch (e) {
					return setTimeout(function() {
						o(t);
					}, 50);
				}
				t();
			}();
		} : function(t) {
			u ? t() : c.push(t);
		}, t.exports = o;
	},
	function(t, e, n) {
		var r = n(42), i = n(9);
		t.exports = function() {
			i.set("buildVersion", r.version);
		};
	},
	function(t, e, n) {
		n(159), n(162), n(163);
	},
	function(t, e, n) {
		var r = n(160), i = n(27), o = n(70), s = new r(), a = function(t) {
			t.widgets && 1 === t.widgets.length && (s.start(), i.emitter.unbind(i.ALL_WIDGETS_RENDER_START, a));
		}, u = function(t) {
			var e;
			t.widgets && 1 === t.widgets.length && (e = t.widgets[0], s.end(), e.dataset && e.dataset.tweetId && o({
				duration: s.duration(),
				namespace: {
					element: "tweet",
					action: "render"
				},
				widgetIds: [e.dataset.tweetId]
			})), i.emitter.unbind(i.ALL_WIDGETS_RENDER_END, u);
		};
		i.emitter.bind(i.ALL_WIDGETS_RENDER_START, a), i.emitter.bind(i.ALL_WIDGETS_RENDER_END, u);
	},
	function(t, e, n) {
		var r = n(161);
		function i() {}
		i.prototype.start = function() {
			this._startTime = r();
		}, i.prototype.end = function() {
			this._duration = r() - this._startTime;
		}, i.prototype.duration = function() {
			return this._duration;
		}, t.exports = i;
	},
	function(t, e, n) {
		var r = n(1);
		t.exports = function() {
			return r.performance && r.performance.now ? r.performance.now() : Date.now();
		};
	},
	function(t, e, n) {
		var r, i = n(27), o = 0;
		function s() {
			r && r.length === o && (i.emitter.trigger(i.ALL_WIDGETS_AND_IMAGES_LOADED, r), r = null);
		}
		i.emitter.bind(i.ALL_WIDGETS_RENDER_END, function(t) {
			r = t.widgets, s();
		}), t.exports = { reportImagesLoadForAWidget: function() {
			o++, s();
		} };
	},
	function(t, e, n) {
		var r = n(27), i = n(70), o = n(164), s = n(4), a = n(1), u = n(0), c = n(20), d = n(62);
		function f(t) {
			return t.performance.getEntriesByType("resource").filter(function(t) {
				return s.isTwimgURL(t.name) || s.isTwitterURL(t.name);
			}).reduce(function(t, e) {
				return t[e.name] = e.duration, t;
			}, {});
		}
		r.emitter.bind(r.ALL_WIDGETS_AND_IMAGES_LOADED, function(t) {
			var e, n, r = [];
			c.hasPerformanceInformation() && (e = f(a), d.isSupported() || (r = function(t) {
				return t.reduce(function(t, e) {
					return u.aug(t, f(e.contentDocument.defaultView));
				}, {});
			}(t)), n = u.aug({}, e, r), Object.keys(o).forEach(function(t) {
				!function(t, e, n) {
					var r = Object.keys(t).reduce(function(e, r) {
						return n(r) ? e + t[r] : e;
					}, 0);
					i({
						duration: r,
						namespace: {
							element: e,
							action: "resource"
						}
					});
				}(n, t, o[t]);
			}));
		});
	},
	function(t, e, n) {
		var r = n(4), i = {
			all: function() {
				return !0;
			},
			image: function(t) {
				return r.isTwimgURL(t);
			},
			settings: function(t) {
				return r.isSettingsURL(t);
			},
			widget_iframe: function(t) {
				return r.isWidgetIframeURL(t);
			}
		};
		t.exports = i;
	}
])));

//# sourceMappingURL=data:application/json;base64,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cHJvdG90eXBlIiwiYmluZCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJfX3R3dHRyIiwid2lkZ2V0cyIsImxvYWRlZCIsInR3dHRyIiwibG9hZCIsImluaXQiLCJ0IiwiZSIsIm4iLCJpIiwibyIsInMiLCJhIiwiYyIsImxlbmd0aCIsInIiLCJwdXNoIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwidSIsInNoaWZ0IiwiZXhwb3J0cyIsImwiLCJQcm9taXNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJjaGFyc2V0IiwidGltZW91dCIsIm5jIiwic2V0QXR0cmlidXRlIiwic3JjIiwicCIsIm9uZXJyb3IiLCJvbmxvYWQiLCJjbGVhclRpbWVvdXQiLCJ0eXBlIiwidGFyZ2V0IiwiRXJyb3IiLCJyZXF1ZXN0Iiwic2V0VGltZW91dCIsImFwcGVuZENoaWxkIiwiYWxsIiwibSIsImQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwiX19lc01vZHVsZSIsImNyZWF0ZSIsImRlZmF1bHQiLCJvZSIsImNvbnNvbGUiLCJlcnJvciIsIl9fdHd0dHJsbCIsInNsaWNlIiwidG9TdHJpbmciLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwia2V5cyIsIkFycmF5IiwiYXVnIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsImFzeW5jIiwiY29tcGFjdCIsImNvbnRhaW5zIiwiaW5kZXhPZiIsImZvckluIiwiaXNPYmplY3QiLCJpc0VtcHR5T2JqZWN0IiwidG9UeXBlIiwiaXNUeXBlIiwidG9SZWFsQXJyYXkiLCJwcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImYiLCJoIiwidiIsImciLCJ3IiwiUmVnRXhwIiwiJDEiLCJ5IiwiYiIsImRlY29kZVVSTCIsInNjcmVlbl9uYW1lIiwidXJsIiwiXyIsIkUiLCJpc0hhc2hUYWciLCJoYXNoVGFnIiwiaXNTY3JlZW5OYW1lIiwic2NyZWVuTmFtZSIsImlzU3RhdHVzIiwic3RhdHVzIiwiaW50ZW50Rm9yUHJvZmlsZVVSTCIsImludGVudEZvckZvbGxvd1VSTCIsImlzVHdpdHRlclVSTCIsImlzVHdpbWdVUkwiLCJpc0ludGVudFVSTCIsImlzU2V0dGluZ3NVUkwiLCJpc1dpZGdldElmcmFtZVVSTCIsImlzU2VhcmNoVXJsIiwicmVnZXhlbiIsInByb2ZpbGUiLCJtb21lbnRJZCIsImNvbGxlY3Rpb25JZCIsImludGVudFR5cGUiLCJsaWtlc1NjcmVlbk5hbWUiLCJsaXN0U2NyZWVuTmFtZUFuZFNsdWciLCIkMiIsImRlY29kZVVSSUNvbXBvbmVudCIsIm93bmVyU2NyZWVuTmFtZSIsInNsdWciLCJldmVudElkIiwiaXNOYU4iLCJoYXNWYWx1ZSIsImlzSW50IiwiaXNGbG9hdCIsImlzTnVtYmVyIiwiaXNTdHJpbmciLCJpc0FycmF5IiwiaXNUcnV0aFZhbHVlIiwiaXNGYWxzZVZhbHVlIiwiYXNJbnQiLCJwYXJzZUludCIsImFzRmxvYXQiLCJhc051bWJlciIsImFzQm9vbGVhbiIsImhhc1Byb21pc2VTdXBwb3J0IiwiYXBwbHkiLCJjb25jYXQiLCJsb2NhdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsImNsYXNzTmFtZSIsInJlbW92ZSIsInJlcGxhY2UiLCJ0b2dnbGUiLCJwcmVzZW50IiwibGlzdCIsImhyZWYiLCJzcGxpdCIsImRlY29kZSIsImxhbmciLCJ3aWR0aCIsImdldEF0dHJpYnV0ZSIsImhlaWdodCIsInJlbGF0ZWQiLCJwYXJ0bmVyIiwic2V0T24iLCJnZW5lcmF0ZSIsImZpbHRlciIsImhhc0F0dHJpYnV0ZSIsIm1hcCIsImZhY3RvcnkiLCJTYW5kYm94Iiwic3JjRWwiLCJ0YXJnZXRFbCIsInBhcmFtZXRlcnMiLCJvcHRpb25zIiwiZGVzdHJveSIsIkJST0FEQ0FTVCIsIkRNX0JVVFRPTiIsIkZPTExPV19CVVRUT04iLCJIQVNIVEFHX0JVVFRPTiIsIk1FTlRJT05fQlVUVE9OIiwiTU9NRU5UIiwiUEVSSVNDT1BFIiwiU0hBUkVfQlVUVE9OIiwiVElNRUxJTkUiLCJUV0VFVCIsImpvaW4iLCJub2RlVHlwZSIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJkbnQiLCJnZXRFeHBlcmltZW50cyIsInRoZW4iLCJhZGRXaWRnZXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzb3J0IiwiZW5jb2RlIiwiZW5jb2RlUGFydCIsImRlY29kZVBhcnQiLCJzeW5jIiwicmVhZCIsIndyaXRlIiwiZGVmZXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkRhdGUiLCJ3YXJuIiwiZGV2RXJyb3IiLCJkZXZJbmZvIiwiZGV2T2JqZWN0IiwicHVibGljRXJyb3IiLCJwdWJsaWNMb2ciLCJwdWJsaWNXYXJuIiwidGltZSIsInRpbWVFbmQiLCJlbmFibGVkIiwidmFsIiwiaXNVcmxTZW5zaXRpdmUiLCJob3N0IiwiaXNGcmFtZWQiLCJyb290RG9jdW1lbnRMb2NhdGlvbiIsInJlZmVycmVyIiwicmV0aW5hIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYW55SUUiLCJpZTkiLCJpZTEwIiwiaW9zIiwiYW5kcm9pZCIsImNhblBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJvcGVuZXIiLCJ0b3VjaCIsIm1zTWF4VG91Y2hQb2ludHMiLCJjc3NUcmFuc2l0aW9ucyIsImJvZHkiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJ3ZWJraXRUcmFuc2l0aW9uIiwibW96VHJhbnNpdGlvbiIsIm9UcmFuc2l0aW9uIiwibXNUcmFuc2l0aW9uIiwicmFjZSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyU3VwcG9ydCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaGFzUGVyZm9ybWFuY2VJbmZvcm1hdGlvbiIsImdldEVudHJpZXNCeVR5cGUiLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkZXRlcm1pbmlzdGljIiwiRW1pdHRlciIsImFsd2F5cyIsImFsbFJlc29sdmVkIiwic29tZSIsImlzUHJvbWlzZSIsImFsbFNldHRsZWQiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJidWlsZCIsIm1ha2VFbWl0dGVyIiwiZW1pdHRlciIsIlNUQVJUIiwiQUxMX1dJREdFVFNfUkVOREVSX1NUQVJUIiwiQUxMX1dJREdFVFNfUkVOREVSX0VORCIsIkFMTF9XSURHRVRTX0FORF9JTUFHRVNfTE9BREVEIiwiY29va2llQ29uc2VudCIsInVuc2hpZnQiLCJlbWJlZElmcmFtZSIsImdldEJhc2VVUkxQYXRoIiwiZW1iZWRTZXJ2aWNlIiwiZXZlbnRWaWRlbyIsImdyaWQiLCJtb21lbnQiLCJzZXR0aW5ncyIsInNldHRpbmdzU2NyaWJlIiwidGltZWxpbmUiLCJ0d2VldEJhdGNoIiwidmlkZW8iLCJuYW1lIiwiaWQiLCJhbGxvd3RyYW5zcGFyZW5jeSIsInNjcm9sbGluZyIsInBhcmFtcyIsImNocm9tZSIsInRyYW5zZm9ybSIsImluc3RhbmNlSWQiLCJyZXF1aXJlZCIsImZhbGxiYWNrIiwiaXNQcmVjb25maWd1cmVkIiwibWF0Y2hMYW5ndWFnZSIsInRoZW1lIiwidHdlZXRMaW1pdCIsImRlZmluZSIsImxpbWl0IiwiYnRvYSIsInNldHRpbmdzTG9hZGVkIiwiZW5jb2RlRmVhdHVyZXMiLCJzaG91bGRPYnRhaW5Db29raWVDb25zZW50IiwiZ2V0RXhwZXJpbWVudCIsImdldEhvcml6b25TZXR0aW5ncyIsImZlYXR1cmVzIiwic2Vzc2lvbklkIiwiZ2V0QWN0aXZlRXhwZXJpbWVudERhdGFTdHJpbmciLCJnZXRFeHBlcmltZW50S2V5cyIsImNlYXNlSW1tZWRpYXRlbHkiLCJzcmNFbGVtZW50IiwidGFnTmFtZSIsImNlYXNlIiwicGFyZW50RWxlbWVudCIsInBhcmVudE5vZGUiLCJlbCIsImxpc3RlbmVyIiwicm9vdElkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJzdG9wIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZGVsZWdhdGUiLCJzaW11bGF0ZSIsInJlbW92ZURlbGVnYXRlc0ZvcldpZGdldCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9zZXN0Iiwib3duZXJEb2N1bWVudCIsInZlcnNpb24iLCJjbGllbnQiLCJfY2F0ZWdvcnlfIiwidHJpZ2dlcmVkX29uIiwiZXh0cmFjdFRlcm1zRnJvbURPTSIsInRyaW0iLCJjbGlja0V2ZW50RWxlbWVudCIsImZsYXR0ZW5DbGllbnRFdmVudFBheWxvYWQiLCJldmVudF9uYW1lc3BhY2UiLCJmb3JtYXRHZW5lcmljRXZlbnREYXRhIiwiZm9ybWF0Q2xpZW50RXZlbnREYXRhIiwid2lkZ2V0X29yaWdpbiIsImNsaWVudF92ZXJzaW9uIiwiZm9ybWF0X3ZlcnNpb24iLCJmb3JtYXRDbGllbnRFdmVudE5hbWVzcGFjZSIsImZvcm1hdEhvcml6b25Ud2VldERhdGEiLCJpdGVtX2lkcyIsIml0ZW1fZGV0YWlscyIsIml0ZW1fdHlwZSIsImZvcm1hdFR3ZWV0QXNzb2NpYXRpb24iLCJhc3NvY2lhdGlvbl9uYW1lc3BhY2UiLCJub3RpY2VTZWVuIiwiZWxlbWVudCIsImFjdGlvbiIsInNwbGl0TG9nRW50cnkiLCJ0b0pTT04iLCJDTElFTlRfRVZFTlRfRU5EUE9JTlQiLCJSVUZPVVNfUkVESVJFQ1QiLCJnZXRDYW5vbmljYWxVUkwiLCJjdXJyZW50RG9jdW1lbnRMb2NhdGlvbiIsImNvdXBsZSIsIkNvbXBvbmVudCIsIl9hZHZpY2VBcmdzIiwiX2xhc3RBcmdzIiwiYm91bmRQYXJhbXMiLCJwYXJhbUNvbmZpZ3MiLCJvdmVycmlkZSIsImRlZmluZVN0YXRpYyIsIm92ZXJyaWRlUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJiZWZvcmUiLCJhZnRlciIsImFyb3VuZCIsImxhc3QiLCJyZWR1Y2UiLCJ2YWxpZGF0ZSIsImluaXRpYWxpemUiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsInNlbGYiLCJwcm9jZXNzIiwiVWludDhDbGFtcGVkQXJyYXkiLCJpbXBvcnRTY3JpcHRzIiwiTWVzc2FnZUNoYW5uZWwiLCJjb25zdHJ1Y3RvciIsImsiLCJfc3RhdGUiLCJEIiwiX3Jlc3VsdCIsIkkiLCJDIiwibmV4dFRpY2siLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwiZGF0YSIsInBvcnQxIiwib25tZXNzYWdlIiwicG9ydDIiLCJyZXF1aXJlIiwicnVuT25Mb29wIiwicnVuT25Db250ZXh0Iiwic3Vic3RyaW5nIiwieCIsIlQiLCJBIiwiUyIsIlIiLCJOIiwiaiIsIlAiLCJfbGFiZWwiLCJUeXBlRXJyb3IiLCJMIiwiX29uZXJyb3IiLCJPIiwiX3N1YnNjcmliZXJzIiwieiIsIk0iLCJfaW5zdGFuY2VDb25zdHJ1Y3RvciIsIl9yZW1haW5pbmciLCJfZW51bWVyYXRlIiwiX2VhY2hFbnRyeSIsIl9zZXR0bGVkQXQiLCJVIiwiX3dpbGxTZXR0bGVBdCIsImNhdGNoIiwiZmluYWxseSIsIl9zZXRTY2hlZHVsZXIiLCJfc2V0QXNhcCIsIl9hc2FwIiwicG9seWZpbGwiLCJnbG9iYWwiLCJjYXN0IiwiYmFzZSIsInNldCIsInVuc2V0IiwiZXZlcnkiLCJmdWxsUGF0aCIsIkhUTUxFbGVtZW50IiwibWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwiX2hhbmRsZXJzIiwidW5iaW5kIiwic3BsaWNlIiwidHJpZ2dlciIsIl9jbGFzc05hbWUiLCJmcm9tUmF3VGFzayIsImh5ZHJhdGUiLCJpbnNlcnRJbnRvRG9tIiwicmVuZGVyIiwic3VjY2VzcyIsImZhaWwiLCJyZW1vdmVDaGlsZCIsImNhbkZsdXNoT25lSXRlbSIsImlucHV0IiwibmFtZXNwYWNlIiwib2Zmc2l0ZSIsImNsaWVudEV2ZW50IiwiZmx1c2giLCJ0YXNrRG9uZURlZmVycmVkIiwic2NyaWJlIiwicGF1c2UiLCJyZXN1bWUiLCJsb2ciLCJnZXRTZWxlY3Rpb24iLCJnZXRTZWxlY3RlZFRleHQiLCJpbmxpbmVTdHlsZSIsImRpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwidmlzaWJpbGl0eSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNhbmRib3hXcmFwcGVyRWwiLCJjb2xsZWN0aW9uIiwibGlrZXMiLCJzb3VyY2VUeXBlIiwid2lkZ2V0X2ZyYW1lIiwiZHVyYXRpb25fbXMiLCJkdXJhdGlvbiIsIndpZGdldElkcyIsInBhZ2UiLCJjb21wb25lbnQiLCJpc1J0bExhbmciLCJJbWFnZSIsIl9lbnF1ZXVlUmF3T2JqZWN0IiwiZW5xdWV1ZUNsaWVudEV2ZW50IiwiaW50ZXJhY3Rpb24iLCJwbGFjZVBpeGVsIiwidHdlZXRCdXR0b25IdG1sUGF0aCIsImZvbGxvd0J1dHRvbkh0bWxQYXRoIiwiaHViSHRtbFBhdGgiLCJ3aWRnZXRJZnJhbWVIdG1sUGF0aCIsInJlc291cmNlQmFzZVVybCIsInByb3RvY29sIiwicG9ydCIsInBhdGhuYW1lIiwicG9wIiwiYWJzb2x1dGl6ZSIsInJlbCIsImdldFNjcmVlbk5hbWVGcm9tUGFnZSIsImdldEhvc3RuYW1lIiwiaG9zdG5hbWUiLCJSRVRXRUVUIiwiQ1VTVE9NX1RJTUVMSU5FIiwiTElWRV9WSURFT19FVkVOVCIsIlFVT1RFX1RXRUVUIiwiZXhwb3NlUmVhZHlQcm9taXNlIiwiYXR0YWNoVG8iLCJsb2FkUGFnZSIsInJlYWR5IiwiYWx0S2V5IiwibWV0YUtleSIsInNoaWZ0S2V5Iiwib3BlbiIsImZhdm9yaXRlIiwiZm9sbG93IiwibGlrZSIsInJldHdlZXQiLCJ0d2VldCIsInJlZ2lvbiIsInR3ZWV0X2lkIiwidXNlcl9pZCIsInNvdXJjZV90d2VldF9pZCIsIndpbiIsInBvcHVwIiwicXVlcnlTZWxlY3RvckFsbCIsIl9nZXRQYWdlTG9hZFRhcmdldCIsIl93aWRnZXQiLCJfc2FuZGJveCIsIl9oeWRyYXRlZCIsIl9pbnNlcnRlZEludG9Eb20iLCJfU2FuZGJveCIsIl9mYWN0b3J5IiwiX3dpZGdldFBhcmFtcyIsIl9yZXNvbHZlIiwiX3JlbmRlcmVkQ2xhc3NOYW1lIiwiX2Vycm9yQ2xhc3NOYW1lIiwiX3NyY0VsIiwiX3RhcmdldEdsb2JhbCIsImRlZmF1bHRWaWV3IiwiX3NhbmRib3hXcmFwcGVyRWwiLCJfaW5zZXJ0aW9uU3RyYXRlZ3kiLCJpbnNlcnRCZWZvcmUiLCJpbnNlcnQiLCJjbGFzcyIsInNhbmRib3hFbCIsIm9uUmVzaXplIiwicmVzaXplIiwic2hvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWVzIiwibGFzdElkIiwicmFmIiwiYmF0Y2giLCJoYXNoIiwibW9kZSIsInNjaGVkdWxlZCIsInNjaGVkdWxlQmF0Y2giLCJzY2hlZHVsZSIsInJ1biIsImZuIiwiY3R4IiwiY2xlYXIiLCJjbGVhckZyYW1lIiwiTnVtYmVyIiwicnVuQmF0Y2giLCJ1bmlxdWVJZCIsIm9uRXJyb3IiLCJsb29wIiwibG9vcGluZyIsIl9pbnB1dHNRdWV1ZSIsIl90YXNrIiwiX2hhc0ZsdXNoQmVlblNjaGVkdWxlZCIsIl9mbHVzaCIsIm1ldGhvZCIsImJvcmRlciIsImRvYyIsImZpcnN0Q2hpbGQiLCJjaGlsZHJlbiIsInN1Ym1pdCIsInNldFRpdGxlIiwiaXNIb3N0UGFnZVNlbnNpdGl2ZSIsImluaXRpYWxpemVkIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInN0eWxlU2VsZiIsImFsbG93ZnVsbHNjcmVlbiIsInBvc2l0aW9uIiwicGFkZGluZyIsImNvbnRlbnRXaW5kb3ciLCJjbG9zZSIsImRvbWFpbiIsInJlcGxhY2VDaGlsZCIsIl93aWR0aCIsIl9oZWlnaHQiLCJpZnJhbWVFbCIsIl9pZnJhbWUiLCJkb2N1bWVudEVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm1pbiIsImhlYWQiLCJfcmVzaXplSGFuZGxlcnMiLCJfdXBkYXRlQ2FjaGVkRGltZW5zaW9ucyIsInRpdGxlIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImlubmVySFRNTCIsInJvb3RFbCIsImFkZFN0eWxlU2hlZXQiLCJhZGRDc3MiLCJ3aWRnZXRFbCIsInRhcmdldEdsb2JhbCIsIl9kaWRSZXNpemUiLCJfc2V0VGFyZ2V0VG9CbGFuayIsImFkZFJvb3RDbGFzcyIsInByZXBlbmRDc3MiLCJ0ZndfdGVhbV9ob2xkYmFja18xMTkyOSIsImJ1Y2tldCIsIl9pc1BhdXNlZCIsIl9mbHVzaERlbGF5IiwiZmx1c2hEZWxheSIsIl9wYXVzZUxlbmd0aCIsInBhdXNlTGVuZ3RoIiwiX2ZsdXNoVGltZW91dCIsIl9zY2hlZHVsZUZsdXNoIiwib3JpZ2luIiwibG9jYWxTZXR0aW5ncyIsInN1YnN0ciIsImFzc2lnbm1lbnQiLCJicm9hZGNhc3RJZCIsImRpZFJlc2l6ZSIsIl9yZXN1bHRzIiwiX3JlbmRlcmVkIiwic2V0SWZyYW1lVmVyc2lvbiIsIl9pZnJhbWVWZXJzaW9uIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJfd2FpdFRvU3dhcFVudGlsUmVuZGVyZWQiLCJ1cGRhdGVDYWNoZWREaW1lbnNpb25zIiwibWFrZVZpc2libGUiLCJhdHRhY2hSZWNlaXZlciIsIlJlY2VpdmVyIiwiaWZyYW1lX3ZlcnNpb24iLCJyZWdpc3RyeSIsImpzb25ycGMiLCJfaW52b2tlIiwic291cmNlIiwibWVzc2FnZSIsIl9wcm9jZXNzUmVxdWVzdCIsIklOVkFMSURfUEFSQU1TIiwicmVzdWx0IiwiSU5URVJOQUxfRVJST1IiLCJNRVRIT0RfTk9UX0ZPVU5EIiwiSU5WQUxJRF9SRVFVRVNUIiwicmVjZWl2ZSIsIlBBUlNFX0VSUk9SIiwiY29kZSIsInNlcnZlciIsImlzVHdpdHRlckZyYW1lIiwiX29uTWVzc2FnZSIsInBlbmRpbmciLCJpc1R3aXR0ZXJIb3N0IiwiZGV0YWNoIiwiX3Byb2Nlc3NSZXNwb25zZSIsInNlbmQiLCJEaXNwYXRjaGVyIiwiX3N0cmluZ2lmeVBheWxvYWQiLCJyZWNpcGllbnRfaWQiLCJ0ZXh0Iiwid2VsY29tZU1lc3NhZ2VJZCIsInNob3dTY3JlZW5OYW1lIiwic2l6ZSIsInVzZXJJZCIsImlzU3VwcG9ydGVkIiwiYXR0YWNoU2hhZG93IiwiX3NoYWRvd0hvc3QiLCJfc2hhZG93Um9vdEJvZHkiLCJfc2hhZG93Um9vdCIsInJlc2l6ZWRBdHRhY2hlZCIsInEiLCJyZXNpemVTZW5zb3IiLCJjc3NUZXh0IiwiZml4ZWQiLCJhYnNvbHV0ZSIsImN1cnJlbnRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJjaGlsZE5vZGVzIiwic2Nyb2xsTGVmdCIsInNjcm9sbFdpZHRoIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiYXR0YWNoRXZlbnQiLCJqUXVlcnkiLCJFbGVtZW50cyIsIlJlc2l6ZVNlbnNvciIsInNob3dDb3VudCIsImNvdW50IiwicHJldmlldyIsImV4ZWMiLCJ1c2VybmFtZSIsImFyaWFMaXZlIiwiYm9yZGVyQ29sb3IiLCJzaG93UmVwbGllcyIsInByb2ZpbGVTY3JlZW5OYW1lIiwicHJvZmlsZVVzZXJJZCIsImZhdm9yaXRlc1NjcmVlbk5hbWUiLCJmYXZvcml0ZXNVc2VySWQiLCJsaWtlc1VzZXJJZCIsImxpc3RPd25lclNjcmVlbk5hbWUiLCJsaXN0T3duZXJVc2VySWQiLCJsaXN0SWQiLCJsaXN0U2x1ZyIsImN1c3RvbVRpbWVsaW5lSWQiLCJzdGF0aWNDb250ZW50IiwiZGF0YVNvdXJjZSIsIm93bmVyVXNlcklkIiwibGlzdF9zbHVnIiwidHdlZXRJZCIsImhpZGVUaHJlYWQiLCJoaWRlQ2FyZCIsIm1lZGlhTWF4V2lkdGgiLCJhbGlnbiIsImhhc2h0YWdzIiwidmlhIiwiYnV0dG9uSGFzaHRhZyIsImJ1dHRvbl9oYXNodGFnIiwiaGFzaHRhZyIsImNyZWF0ZUJyb2FkY2FzdCIsImNyZWF0ZURNQnV0dG9uIiwiY3JlYXRlRm9sbG93QnV0dG9uIiwiY3JlYXRlTW9tZW50IiwiY3JlYXRlUGVyaXNjb3BlT25BaXJCdXR0b24iLCJjcmVhdGVUaW1lbGluZSIsImNyZWF0ZUdyaWRGcm9tQ29sbGVjdGlvbiIsImFyaWFQb2xpdGUiLCJjcmVhdGVUaW1lbGluZVByZXZpZXciLCJwcmV2aWV3UGFyYW1zIiwidXNlTGVnYWN5RGVmYXVsdHMiLCJpc1ByZXZpZXdUaW1lbGluZSIsImNhcmRzIiwiY29udmVyc2F0aW9uIiwiY3JlYXRlVHdlZXQiLCJjcmVhdGVUd2VldEVtYmVkIiwiY3JlYXRlVmlkZW8iLCJjcmVhdGVTaGFyZUJ1dHRvbiIsImNyZWF0ZUhhc2h0YWdCdXR0b24iLCJjcmVhdGVNZW50aW9uQnV0dG9uIiwicmVhZHlTdGF0ZSIsImRvU2Nyb2xsIiwiZGV0YWNoRXZlbnQiLCJ0b3AiLCJzdGFydCIsImVuZCIsImRhdGFzZXQiLCJfc3RhcnRUaW1lIiwiX2R1cmF0aW9uIiwicmVwb3J0SW1hZ2VzTG9hZEZvckFXaWRnZXQiLCJjb250ZW50RG9jdW1lbnQiLCJpbWFnZSIsIndpZGdldF9pZnJhbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsid2lkZ2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJGdW5jdGlvbiYmRnVuY3Rpb24ucHJvdG90eXBlJiZGdW5jdGlvbi5wcm90b3R5cGUuYmluZCYmKC8oTVNJRSAoWzY3ODldfDEwfDExKSl8VHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KXx8KHdpbmRvdy5fX3R3dHRyJiZ3aW5kb3cuX190d3R0ci53aWRnZXRzJiZ3aW5kb3cuX190d3R0ci53aWRnZXRzLmxvYWRlZCYmd2luZG93LnR3dHRyLndpZGdldHMubG9hZCYmd2luZG93LnR3dHRyLndpZGdldHMubG9hZCgpLHdpbmRvdy5fX3R3dHRyJiZ3aW5kb3cuX190d3R0ci53aWRnZXRzJiZ3aW5kb3cuX190d3R0ci53aWRnZXRzLmluaXR8fGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSl7Zm9yKHZhciBuLGksbz1lWzBdLHM9ZVsxXSxhPTAsYz1bXTthPG8ubGVuZ3RoO2ErKylpPW9bYV0scltpXSYmYy5wdXNoKHJbaV1bMF0pLHJbaV09MDtmb3IobiBpbiBzKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLG4pJiYodFtuXT1zW25dKTtmb3IodSYmdShlKTtjLmxlbmd0aDspYy5zaGlmdCgpKCl9dmFyIG49e30scj17MDowfTtmdW5jdGlvbiBpKGUpe2lmKG5bZV0pcmV0dXJuIG5bZV0uZXhwb3J0czt2YXIgcj1uW2VdPXtpOmUsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtlXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxpKSxyLmw9ITAsci5leHBvcnRzfWkuZT1mdW5jdGlvbih0KXt2YXIgZT1bXSxuPXJbdF07aWYoMCE9PW4paWYobillLnB1c2goblsyXSk7ZWxzZXt2YXIgbz1uZXcgUHJvbWlzZShmdW5jdGlvbihlLGkpe249clt0XT1bZSxpXX0pO2UucHVzaChuWzJdPW8pO3ZhciBzLGE9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLHU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt1LmNoYXJzZXQ9XCJ1dGYtOFwiLHUudGltZW91dD0xMjAsaS5uYyYmdS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLGkubmMpLHUuc3JjPWZ1bmN0aW9uKHQpe3JldHVybiBpLnArXCJqcy9cIisoezE6XCJicm9hZGNhc3RcIiwyOlwiZG1fYnV0dG9uXCIsMzpcImJ1dHRvblwiLDQ6XCJtb21lbnRcIiw1OlwicGVyaXNjb3BlX29uX2FpclwiLDY6XCJ0aW1lbGluZVwiLDc6XCJ0d2VldFwifVt0XXx8dCkrXCIuXCIrezE6XCIzMmY3YWJhYzk1Zjk1ZjRiNzI2OTc2NTRlNDIyYmYwM1wiLDI6XCI4MmU5MzQ1MTNiYjkyZTVlNDhjNDBmMGE1ZGJhNWFjM1wiLDM6XCIyMjc2YTA0NTQyOWY2NjgxYjU2ZGE1ZWIxZGNmYTUzY1wiLDQ6XCJkNjZkNjY0MDI5MzRkMDAyMGJiYjU4MDcyZjVmZDhmYlwiLDU6XCI5ZGM3NDRjNjYxNDBiMGVjNTQzOGNjYzBiYzkyYmIwYlwiLDY6XCI5ZWUxMjRmZDhkYjBjM2JhMzc5NmU5NjEzYmJjOWU1M1wiLDc6XCI3YTYwMDMyNThkZTgzOGMzNWU2NmZkMGY1MGViZGIwZlwifVt0XStcIi5qc1wifSh0KSxzPWZ1bmN0aW9uKGUpe3Uub25lcnJvcj11Lm9ubG9hZD1udWxsLGNsZWFyVGltZW91dChjKTt2YXIgbj1yW3RdO2lmKDAhPT1uKXtpZihuKXt2YXIgaT1lJiYoXCJsb2FkXCI9PT1lLnR5cGU/XCJtaXNzaW5nXCI6ZS50eXBlKSxvPWUmJmUudGFyZ2V0JiZlLnRhcmdldC5zcmMscz1uZXcgRXJyb3IoXCJMb2FkaW5nIGNodW5rIFwiK3QrXCIgZmFpbGVkLlxcbihcIitpK1wiOiBcIitvK1wiKVwiKTtzLnR5cGU9aSxzLnJlcXVlc3Q9byxuWzFdKHMpfXJbdF09dm9pZCAwfX07dmFyIGM9c2V0VGltZW91dChmdW5jdGlvbigpe3Moe3R5cGU6XCJ0aW1lb3V0XCIsdGFyZ2V0OnV9KX0sMTJlNCk7dS5vbmVycm9yPXUub25sb2FkPXMsYS5hcHBlbmRDaGlsZCh1KX1yZXR1cm4gUHJvbWlzZS5hbGwoZSl9LGkubT10LGkuYz1uLGkuZD1mdW5jdGlvbih0LGUsbil7aS5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0Om59KX0saS5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LGkudD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9aSh0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKGkucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIHIgaW4gdClpLmQobixyLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwscikpO3JldHVybiBufSxpLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIGkuZChlLFwiYVwiLGUpLGV9LGkubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0saS5wPVwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS9cIixpLm9lPWZ1bmN0aW9uKHQpe3Rocm93IGNvbnNvbGUuZXJyb3IodCksdH07dmFyIG89d2luZG93Ll9fdHd0dHJsbD13aW5kb3cuX190d3R0cmxsfHxbXSxzPW8ucHVzaC5iaW5kKG8pO28ucHVzaD1lLG89by5zbGljZSgpO2Zvcih2YXIgYT0wO2E8by5sZW5ndGg7YSsrKWUob1thXSk7dmFyIHU9cztpKGkucz04NCl9KFtmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxKTtmdW5jdGlvbiBpKHQsZSl7dmFyIG47Zm9yKG4gaW4gdCl0Lmhhc093blByb3BlcnR5JiYhdC5oYXNPd25Qcm9wZXJ0eShuKXx8ZShuLHRbbl0pO3JldHVybiB0fWZ1bmN0aW9uIG8odCl7cmV0dXJue30udG9TdHJpbmcuY2FsbCh0KS5tYXRjaCgvXFxzKFthLXpBLVpdKykvKVsxXS50b0xvd2VyQ2FzZSgpfWZ1bmN0aW9uIHModCl7cmV0dXJuIHQ9PT1PYmplY3QodCl9ZnVuY3Rpb24gYSh0KXt2YXIgZTtpZighcyh0KSlyZXR1cm4hMTtpZihPYmplY3Qua2V5cylyZXR1cm4hT2JqZWN0LmtleXModCkubGVuZ3RoO2ZvcihlIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShlKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiB1KHQpe3JldHVybiB0P0FycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQpOltdfXQuZXhwb3J0cz17YXVnOmZ1bmN0aW9uKHQpe3JldHVybiB1KGFyZ3VtZW50cykuc2xpY2UoMSkuZm9yRWFjaChmdW5jdGlvbihlKXtpKGUsZnVuY3Rpb24oZSxuKXt0W2VdPW59KX0pLHR9LGFzeW5jOmZ1bmN0aW9uKHQsZSl7ci5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5jYWxsKGV8fG51bGwpfSwwKX0sY29tcGFjdDpmdW5jdGlvbiB0KGUpe3JldHVybiBpKGUsZnVuY3Rpb24obixyKXtzKHIpJiYodChyKSxhKHIpJiZkZWxldGUgZVtuXSksdm9pZCAwIT09ciYmbnVsbCE9PXImJlwiXCIhPT1yfHxkZWxldGUgZVtuXX0pLGV9LGNvbnRhaW5zOmZ1bmN0aW9uKHQsZSl7cmV0dXJuISghdHx8IXQuaW5kZXhPZikmJnQuaW5kZXhPZihlKT4tMX0sZm9ySW46aSxpc09iamVjdDpzLGlzRW1wdHlPYmplY3Q6YSx0b1R5cGU6byxpc1R5cGU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdD09byhlKX0sdG9SZWFsQXJyYXk6dX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPXdpbmRvd30sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNik7dC5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLnByb21pc2U9bmV3IHIoZnVuY3Rpb24oZSxuKXt0LnJlc29sdmU9ZSx0LnJlamVjdD1ufSl9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1kb2N1bWVudH0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTYpLGk9Lyg/Ol58KD86aHR0cHM/Oik/XFwvXFwvKD86d3d3XFwuKT8oPzp4fHR3aXR0ZXIpXFwuY29tKD86OlxcZCspPyg/OlxcL2ludGVudFxcLyg/OmZvbGxvd3x1c2VyKVxcLz9cXD9zY3JlZW5fbmFtZT18KD86XFwvIyEpP1xcLykpQD8oW1xcd10rKSg/OlxcP3wmfCQpL2ksbz0vKD86XnwoPzpodHRwcz86KT9cXC9cXC8oPzp3d3dcXC4pPyg/Onh8dHdpdHRlcilcXC5jb20oPzo6XFxkKyk/XFwvKD86IyFcXC8pP1tcXHdfXStcXC9zdGF0dXMoPzplcyk/XFwvKShcXGQrKS9pLHM9L15odHRwKHM/KTpcXC9cXC8oXFx3K1xcLikqKD86eHx0d2l0dGVyKVxcLmNvbShbOi9dfCQpL2ksYT0vXmh0dHAocz8pOlxcL1xcLyh0b258cGJzKVxcLnR3aW1nXFwuY29tLyx1PS9eIz8oW14uLDw+IVxccy8jXFwtKCknXCJdKykkLyxjPS8oPzp4fHR3aXR0ZXIpXFwuY29tKD86OlxcZHsyLDR9KT9cXC9pbnRlbnRcXC8oXFx3KykvLGQ9L15odHRwcz86XFwvXFwvKD86d3d3XFwuKT8oPzp4fHR3aXR0ZXIpXFwuY29tXFwvXFx3K1xcL3RpbWVsaW5lc1xcLyhcXGQrKS9pLGY9L15odHRwcz86XFwvXFwvKD86d3d3XFwuKT8oPzp4fHR3aXR0ZXIpXFwuY29tXFwvaVxcL21vbWVudHNcXC8oXFxkKykvaSxsPS9eaHR0cHM/OlxcL1xcLyg/Ond3d1xcLik/KD86eHx0d2l0dGVyKVxcLmNvbVxcLyhcXHcrKVxcLyg/Omxpa2VzfGZhdm9yaXRlcykvaSxoPS9eaHR0cHM/OlxcL1xcLyg/Ond3d1xcLik/KD86eHx0d2l0dGVyKVxcLmNvbVxcLyhcXHcrKVxcL2xpc3RzXFwvKFtcXHctJV0rKS9pLHA9L15odHRwcz86XFwvXFwvKD86d3d3XFwuKT8oPzp4fHR3aXR0ZXIpXFwuY29tXFwvaVxcL2xpdmVcXC8oXFxkKykvaSxtPS9eaHR0cHM/OlxcL1xcL3N5bmRpY2F0aW9uXFwuKD86eHx0d2l0dGVyKVxcLmNvbVxcL3NldHRpbmdzL2ksdj0vXmh0dHBzPzpcXC9cXC8obG9jYWxob3N0fHBsYXRmb3JtKVxcLig/Onh8dHdpdHRlcilcXC5jb20oPzo6XFxkKyk/XFwvd2lkZ2V0c1xcL3dpZGdldF9pZnJhbWVcXC4oLispL2ksZz0vXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pPyg/Onh8dHdpdHRlcilcXC5jb21cXC9zZWFyY2hcXD9xPShcXHcrKS9pO2Z1bmN0aW9uIHcodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQmJmkudGVzdCh0KSYmUmVnRXhwLiQxLmxlbmd0aDw9MjB9ZnVuY3Rpb24geSh0KXtpZih3KHQpKXJldHVybiBSZWdFeHAuJDF9ZnVuY3Rpb24gYih0LGUpe3ZhciBuPXIuZGVjb2RlVVJMKHQpO2lmKGU9ZXx8ITEsbi5zY3JlZW5fbmFtZT15KHQpLG4uc2NyZWVuX25hbWUpcmV0dXJuIHIudXJsKFwiaHR0cHM6Ly94LmNvbS9pbnRlbnQvXCIrKGU/XCJmb2xsb3dcIjpcInVzZXJcIiksbil9ZnVuY3Rpb24gXyh0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdCYmdS50ZXN0KHQpfWZ1bmN0aW9uIEUodCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQmJm8udGVzdCh0KX10LmV4cG9ydHM9e2lzSGFzaFRhZzpfLGhhc2hUYWc6ZnVuY3Rpb24odCxlKXtpZihlPXZvaWQgMD09PWV8fGUsXyh0KSlyZXR1cm4oZT9cIiNcIjpcIlwiKStSZWdFeHAuJDF9LGlzU2NyZWVuTmFtZTp3LHNjcmVlbk5hbWU6eSxpc1N0YXR1czpFLHN0YXR1czpmdW5jdGlvbih0KXtyZXR1cm4gRSh0KSYmUmVnRXhwLiQxfSxpbnRlbnRGb3JQcm9maWxlVVJMOmIsaW50ZW50Rm9yRm9sbG93VVJMOmZ1bmN0aW9uKHQpe3JldHVybiBiKHQsITApfSxpc1R3aXR0ZXJVUkw6ZnVuY3Rpb24odCl7cmV0dXJuIHMudGVzdCh0KX0saXNUd2ltZ1VSTDpmdW5jdGlvbih0KXtyZXR1cm4gYS50ZXN0KHQpfSxpc0ludGVudFVSTDpmdW5jdGlvbih0KXtyZXR1cm4gYy50ZXN0KHQpfSxpc1NldHRpbmdzVVJMOmZ1bmN0aW9uKHQpe3JldHVybiBtLnRlc3QodCl9LGlzV2lkZ2V0SWZyYW1lVVJMOmZ1bmN0aW9uKHQpe3JldHVybiB2LnRlc3QodCl9LGlzU2VhcmNoVXJsOmZ1bmN0aW9uKHQpe3JldHVybiBnLnRlc3QodCl9LHJlZ2V4ZW46e3Byb2ZpbGU6aX0sbW9tZW50SWQ6ZnVuY3Rpb24odCl7cmV0dXJuIGYudGVzdCh0KSYmUmVnRXhwLiQxfSxjb2xsZWN0aW9uSWQ6ZnVuY3Rpb24odCl7cmV0dXJuIGQudGVzdCh0KSYmUmVnRXhwLiQxfSxpbnRlbnRUeXBlOmZ1bmN0aW9uKHQpe3JldHVybiBjLnRlc3QodCkmJlJlZ0V4cC4kMX0sbGlrZXNTY3JlZW5OYW1lOmZ1bmN0aW9uKHQpe3JldHVybiBsLnRlc3QodCkmJlJlZ0V4cC4kMX0sbGlzdFNjcmVlbk5hbWVBbmRTbHVnOmZ1bmN0aW9uKHQpe3ZhciBlLG4scjtpZihoLnRlc3QodCkpe2U9UmVnRXhwLiQxLG49UmVnRXhwLiQyO3RyeXtyPWRlY29kZVVSSUNvbXBvbmVudChuKX1jYXRjaCh0KXt9cmV0dXJue293bmVyU2NyZWVuTmFtZTplLHNsdWc6cnx8bn19cmV0dXJuITF9LGV2ZW50SWQ6ZnVuY3Rpb24odCl7cmV0dXJuIHAudGVzdCh0KSYmUmVnRXhwLiQxfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDApLGk9WyEwLDEsXCIxXCIsXCJvblwiLFwiT05cIixcInRydWVcIixcIlRSVUVcIixcInllc1wiLFwiWUVTXCJdLG89WyExLDAsXCIwXCIsXCJvZmZcIixcIk9GRlwiLFwiZmFsc2VcIixcIkZBTFNFXCIsXCJub1wiLFwiTk9cIl07ZnVuY3Rpb24gcyh0KXtyZXR1cm4gdm9pZCAwIT09dCYmbnVsbCE9PXQmJlwiXCIhPT10fWZ1bmN0aW9uIGEodCl7cmV0dXJuIGModCkmJnQlMT09MH1mdW5jdGlvbiB1KHQpe3JldHVybiBjKHQpJiYhYSh0KX1mdW5jdGlvbiBjKHQpe3JldHVybiBzKHQpJiYhaXNOYU4odCl9ZnVuY3Rpb24gZCh0KXtyZXR1cm4gci5jb250YWlucyhvLHQpfWZ1bmN0aW9uIGYodCl7cmV0dXJuIHIuY29udGFpbnMoaSx0KX10LmV4cG9ydHM9e2hhc1ZhbHVlOnMsaXNJbnQ6YSxpc0Zsb2F0OnUsaXNOdW1iZXI6Yyxpc1N0cmluZzpmdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT09ci50b1R5cGUodCl9LGlzQXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuIHModCkmJlwiYXJyYXlcIj09ci50b1R5cGUodCl9LGlzVHJ1dGhWYWx1ZTpmLGlzRmFsc2VWYWx1ZTpkLGFzSW50OmZ1bmN0aW9uKHQpe2lmKGEodCkpcmV0dXJuIHBhcnNlSW50KHQsMTApfSxhc0Zsb2F0OmZ1bmN0aW9uKHQpe2lmKHUodCkpcmV0dXJuIHR9LGFzTnVtYmVyOmZ1bmN0aW9uKHQpe2lmKGModCkpcmV0dXJuIHR9LGFzQm9vbGVhbjpmdW5jdGlvbih0KXtyZXR1cm4hKCFzKHQpfHwhZih0KSYmKGQodCl8fCF0KSl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMSksaT1uKDIwKSxvPW4oNDUpO2kuaGFzUHJvbWlzZVN1cHBvcnQoKXx8KHIuUHJvbWlzZT1vKSx0LmV4cG9ydHM9ci5Qcm9taXNlfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigwKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgbj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGk9ci50b1JlYWxBcnJheShhcmd1bWVudHMpO3JldHVybiB0LmFwcGx5KGUsbi5jb25jYXQoaSkpfX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWxvY2F0aW9ufSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0Nyk7dC5leHBvcnRzPW5ldyByKFwiX190d3R0clwiKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMCksaT0vXFxiKFtcXHctX10rKVxcYi9nO2Z1bmN0aW9uIG8odCl7cmV0dXJuIG5ldyBSZWdFeHAoXCJcXFxcYlwiK3QrXCJcXFxcYlwiLFwiZ1wiKX1mdW5jdGlvbiBzKHQsZSl7dC5jbGFzc0xpc3Q/dC5jbGFzc0xpc3QuYWRkKGUpOm8oZSkudGVzdCh0LmNsYXNzTmFtZSl8fCh0LmNsYXNzTmFtZSs9XCIgXCIrZSl9ZnVuY3Rpb24gYSh0LGUpe3QuY2xhc3NMaXN0P3QuY2xhc3NMaXN0LnJlbW92ZShlKTp0LmNsYXNzTmFtZT10LmNsYXNzTmFtZS5yZXBsYWNlKG8oZSksXCIgXCIpfWZ1bmN0aW9uIHUodCxlKXtyZXR1cm4gdC5jbGFzc0xpc3Q/dC5jbGFzc0xpc3QuY29udGFpbnMoZSk6ci5jb250YWlucyhjKHQpLGUpfWZ1bmN0aW9uIGModCl7cmV0dXJuIHIudG9SZWFsQXJyYXkodC5jbGFzc0xpc3Q/dC5jbGFzc0xpc3Q6dC5jbGFzc05hbWUubWF0Y2goaSkpfXQuZXhwb3J0cz17YWRkOnMscmVtb3ZlOmEscmVwbGFjZTpmdW5jdGlvbih0LGUsbil7aWYodC5jbGFzc0xpc3QmJnUodCxlKSlyZXR1cm4gYSh0LGUpLHZvaWQgcyh0LG4pO3QuY2xhc3NOYW1lPXQuY2xhc3NOYW1lLnJlcGxhY2UobyhlKSxuKX0sdG9nZ2xlOmZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdm9pZCAwPT09biYmdC5jbGFzc0xpc3QmJnQuY2xhc3NMaXN0LnRvZ2dsZT90LmNsYXNzTGlzdC50b2dnbGUoZSxuKToobj9zKHQsZSk6YSh0LGUpLG4pfSxwcmVzZW50OnUsbGlzdDpjfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTkpLGk9big1KSxvPW4oMTYpLHM9bigwKSxhPW4oMTEwKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5ocmVmJiZ0LmhyZWYuc3BsaXQoXCI/XCIpWzFdLG49ZT9vLmRlY29kZShlKTp7fSx1PXtsYW5nOmEodCksd2lkdGg6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIpfHx0LmdldEF0dHJpYnV0ZShcIndpZHRoXCIpLGhlaWdodDp0LmdldEF0dHJpYnV0ZShcImRhdGEtaGVpZ2h0XCIpfHx0LmdldEF0dHJpYnV0ZShcImhlaWdodFwiKSxyZWxhdGVkOnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWxhdGVkXCIpLHBhcnRuZXI6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcnRuZXJcIil9O3JldHVybiBpLmFzQm9vbGVhbih0LmdldEF0dHJpYnV0ZShcImRhdGEtZG50XCIpKSYmci5zZXRPbigpLHMuZm9ySW4odSxmdW5jdGlvbih0LGUpe3ZhciByPW5bdF07blt0XT1pLmhhc1ZhbHVlKHIpP3I6ZX0pLHMuY29tcGFjdChuKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDExMSksaT1uKDIxKTt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdD1cImRhdGEtdHdpdHRlci1leHRyYWN0ZWQtXCIraS5nZW5lcmF0ZSgpO3JldHVybiBmdW5jdGlvbihlLG4pe3JldHVybiByKGUsbikuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiFlLmhhc0F0dHJpYnV0ZSh0KX0pLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUodCxcInRydWVcIiksZX0pfX19LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0LGUsbixyLGksbyxzKXt0aGlzLmZhY3Rvcnk9dCx0aGlzLlNhbmRib3g9ZSx0aGlzLnNyY0VsPW8sdGhpcy50YXJnZXRFbD1pLHRoaXMucGFyYW1ldGVycz1yLHRoaXMuY2xhc3NOYW1lPW4sdGhpcy5vcHRpb25zPXN9bi5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuc3JjRWw9dGhpcy50YXJnZXRFbD1udWxsfSx0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9e0JST0FEQ0FTVDpcInR3aXR0ZXItYnJvYWRjYXN0XCIsRE1fQlVUVE9OOlwidHdpdHRlci1kbS1idXR0b25cIixGT0xMT1dfQlVUVE9OOlwidHdpdHRlci1mb2xsb3ctYnV0dG9uXCIsSEFTSFRBR19CVVRUT046XCJ0d2l0dGVyLWhhc2h0YWctYnV0dG9uXCIsTUVOVElPTl9CVVRUT046XCJ0d2l0dGVyLW1lbnRpb24tYnV0dG9uXCIsTU9NRU5UOlwidHdpdHRlci1tb21lbnRcIixQRVJJU0NPUEU6XCJwZXJpc2NvcGUtb24tYWlyXCIsU0hBUkVfQlVUVE9OOlwidHdpdHRlci1zaGFyZS1idXR0b25cIixUSU1FTElORTpcInR3aXR0ZXItdGltZWxpbmVcIixUV0VFVDpcInR3aXR0ZXItdHdlZXRcIn19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDYpLGk9bigxOSksbz1uKDUwKSxzPW4oMzQpLGE9big1KSx1PW4oMCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXt2YXIgYztyZXR1cm4gdD10fHxbXSxlPWV8fHt9LGM9XCLGkihcIit0LmpvaW4oXCIsIFwiKStcIiwgdGFyZ2V0LCBbb3B0aW9uc10pO1wiLGZ1bmN0aW9uKCl7dmFyIGQsZixsLGgscD1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYXJndW1lbnRzLFswLHQubGVuZ3RoXSksbT1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYXJndW1lbnRzLFt0Lmxlbmd0aF0pO3JldHVybiBtLmZvckVhY2goZnVuY3Rpb24odCl7dCYmKHQubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERT91LmlzVHlwZShcImZ1bmN0aW9uXCIsdCk/ZD10OnUuaXNUeXBlKFwib2JqZWN0XCIsdCkmJihmPXQpOmw9dCl9KSxwLmxlbmd0aCE9PXQubGVuZ3RofHwwPT09bS5sZW5ndGg/KGQmJnUuYXN5bmMoZnVuY3Rpb24oKXtkKCExKX0pLHIucmVqZWN0KG5ldyBFcnJvcihcIk5vdCBlbm91Z2ggcGFyYW1ldGVycy4gRXhwZWN0ZWQ6IFwiK2MpKSk6bD8oZj11LmF1Zyh7fSxmfHx7fSxlKSx0LmZvckVhY2goZnVuY3Rpb24odCl7Zlt0XT1wLnNoaWZ0KCl9KSxhLmFzQm9vbGVhbihmLmRudCkmJmkuc2V0T24oKSxoPXMuZ2V0RXhwZXJpbWVudHMoKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiBvLmFkZFdpZGdldChuKGYsbCx2b2lkIDAsdCkpfSksZCYmaC50aGVuKGQsZnVuY3Rpb24oKXtkKCExKX0pLGgpOihkJiZ1LmFzeW5jKGZ1bmN0aW9uKCl7ZCghMSl9KSxyLnJlamVjdChuZXcgRXJyb3IoXCJObyB0YXJnZXQgZWxlbWVudCBzcGVjaWZpZWQuIEV4cGVjdGVkOiBcIitjKSkpfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDUpLGk9bigwKTtmdW5jdGlvbiBvKHQpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQodCkucmVwbGFjZSgvXFwrL2csXCIlMkJcIikucmVwbGFjZSgvJy9nLFwiJTI3XCIpfWZ1bmN0aW9uIHModCl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh0KX1mdW5jdGlvbiBhKHQpe3ZhciBlPVtdO3JldHVybiBpLmZvckluKHQsZnVuY3Rpb24odCxuKXt2YXIgcz1vKHQpO2kuaXNUeXBlKFwiYXJyYXlcIixuKXx8KG49W25dKSxuLmZvckVhY2goZnVuY3Rpb24odCl7ci5oYXNWYWx1ZSh0KSYmZS5wdXNoKHMrXCI9XCIrbyh0KSl9KX0pLGUuc29ydCgpLmpvaW4oXCImXCIpfWZ1bmN0aW9uIHUodCl7dmFyIGU9e307cmV0dXJuIHQ/KHQuc3BsaXQoXCImXCIpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIG49dC5zcGxpdChcIj1cIikscj1zKG5bMF0pLG89cyhuWzFdKTtpZigyPT1uLmxlbmd0aCl7aWYoIWkuaXNUeXBlKFwiYXJyYXlcIixlW3JdKSlyZXR1cm4gciBpbiBlPyhlW3JdPVtlW3JdXSx2b2lkIGVbcl0ucHVzaChvKSk6dm9pZChlW3JdPW8pO2Vbcl0ucHVzaChvKX19KSxlKTp7fX10LmV4cG9ydHM9e3VybDpmdW5jdGlvbih0LGUpe3JldHVybiBhKGUpLmxlbmd0aD4wP2kuY29udGFpbnModCxcIj9cIik/dCtcIiZcIithKGUpOnQrXCI/XCIrYShlKTp0fSxkZWNvZGVVUkw6ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5zcGxpdChcIj9cIik7cmV0dXJuIDI9PWUubGVuZ3RoP3UoZVsxXSk6e319LGRlY29kZTp1LGVuY29kZTphLGVuY29kZVBhcnQ6byxkZWNvZGVQYXJ0OnN9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big5MiksaT1uKDIpLG89bigwKTtmdW5jdGlvbiBzKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dHJ5e2UucmVzb2x2ZSh0LmNhbGwodGhpcykpfWNhdGNoKHQpe2UucmVqZWN0KHQpfX19dC5leHBvcnRzPXtzeW5jOmZ1bmN0aW9uKHQsZSl7dC5jYWxsKGUpfSxyZWFkOmZ1bmN0aW9uKHQsZSl7dmFyIG49bmV3IGk7cmV0dXJuIHIucmVhZChzKHQsbiksZSksbi5wcm9taXNlfSx3cml0ZTpmdW5jdGlvbih0LGUpe3ZhciBuPW5ldyBpO3JldHVybiByLndyaXRlKHModCxuKSxlKSxuLnByb21pc2V9LGRlZmVyOmZ1bmN0aW9uKHQsZSxuKXt2YXIgYT1uZXcgaTtyZXR1cm4gby5pc1R5cGUoXCJmdW5jdGlvblwiLHQpJiYobj1lLGU9dCx0PTEpLHIuZGVmZXIodCxzKGUsYSksbiksYS5wcm9taXNlfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDgpLGk9bigxKSxvPW4oMCkscz17fSxhPW8uY29udGFpbnMoci5ocmVmLFwidHdfZGVidWc9dHJ1ZVwiKTtmdW5jdGlvbiB1KCl7fWZ1bmN0aW9uIGMoKXt9ZnVuY3Rpb24gZCgpe3JldHVybiBpLnBlcmZvcm1hbmNlJiYraS5wZXJmb3JtYW5jZS5ub3coKXx8K25ldyBEYXRlfWZ1bmN0aW9uIGYodCxlKXtpZihpLmNvbnNvbGUmJmkuY29uc29sZVt0XSlzd2l0Y2goZS5sZW5ndGgpe2Nhc2UgMTppLmNvbnNvbGVbdF0oZVswXSk7YnJlYWs7Y2FzZSAyOmkuY29uc29sZVt0XShlWzBdLGVbMV0pO2JyZWFrO2Nhc2UgMzppLmNvbnNvbGVbdF0oZVswXSxlWzFdLGVbMl0pO2JyZWFrO2Nhc2UgNDppLmNvbnNvbGVbdF0oZVswXSxlWzFdLGVbMl0sZVszXSk7YnJlYWs7Y2FzZSA1OmkuY29uc29sZVt0XShlWzBdLGVbMV0sZVsyXSxlWzNdLGVbNF0pO2JyZWFrO2RlZmF1bHQ6MCE9PWUubGVuZ3RoJiZpLmNvbnNvbGUud2FybiYmaS5jb25zb2xlLndhcm4oXCJ0b28gbWFueSBwYXJhbXMgcGFzc2VkIHRvIGxvZ2dlci5cIit0KX19dC5leHBvcnRzPXtkZXZFcnJvcjp1LGRldkluZm86YyxkZXZPYmplY3Q6ZnVuY3Rpb24odCxlKXt9LHB1YmxpY0Vycm9yOmZ1bmN0aW9uKCl7ZihcImVycm9yXCIsby50b1JlYWxBcnJheShhcmd1bWVudHMpKX0scHVibGljTG9nOmZ1bmN0aW9uKCl7ZihcImluZm9cIixvLnRvUmVhbEFycmF5KGFyZ3VtZW50cykpfSxwdWJsaWNXYXJuOmZ1bmN0aW9uKCl7ZihcIndhcm5cIixvLnRvUmVhbEFycmF5KGFyZ3VtZW50cykpfSx0aW1lOmZ1bmN0aW9uKHQpe2EmJihzW3RdPWQoKSl9LHRpbWVFbmQ6ZnVuY3Rpb24odCl7YSYmc1t0XSYmKGQoKSxzW3RdKX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzKSxpPW4oOCksbz1uKDM4KSxzPW4oOTYpLGE9big1KSx1PW4oMzMpLGM9ITEsZD0vaHR0cHM/OlxcL1xcLyhbXi9dKykuKi9pO3QuZXhwb3J0cz17c2V0T246ZnVuY3Rpb24oKXtjPSEwfSxlbmFibGVkOmZ1bmN0aW9uKHQsZSl7cmV0dXJuISEoY3x8YS5hc0Jvb2xlYW4odS52YWwoXCJkbnRcIikpfHxzLmlzVXJsU2Vuc2l0aXZlKGV8fGkuaG9zdCl8fG8uaXNGcmFtZWQoKSYmcy5pc1VybFNlbnNpdGl2ZShvLnJvb3REb2N1bWVudExvY2F0aW9uKCkpfHwodD1kLnRlc3QodHx8ci5yZWZlcnJlcikmJlJlZ0V4cC4kMSkmJnMuaXNVcmxTZW5zaXRpdmUodCkpfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDMpLGk9big4NSksbz1uKDEpLHM9bigwKSxhPWkudXNlckFnZW50O2Z1bmN0aW9uIHUodCl7cmV0dXJuLyhUcmlkZW50fE1TSUV8RWRnZVsvIF0/XFxkKS8udGVzdCh0PXR8fGEpfXQuZXhwb3J0cz17cmV0aW5hOmZ1bmN0aW9uKHQpe3JldHVybih0PXR8fG8pLmRldmljZVBpeGVsUmF0aW8/dC5kZXZpY2VQaXhlbFJhdGlvPj0xLjU6ISF0Lm1hdGNoTWVkaWEmJnQubWF0Y2hNZWRpYShcIm9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE0NGRwaSlcIikubWF0Y2hlc30sYW55SUU6dSxpZTk6ZnVuY3Rpb24odCl7cmV0dXJuL01TSUUgOS8udGVzdCh0PXR8fGEpfSxpZTEwOmZ1bmN0aW9uKHQpe3JldHVybi9NU0lFIDEwLy50ZXN0KHQ9dHx8YSl9LGlvczpmdW5jdGlvbih0KXtyZXR1cm4vKGlQYWR8aVBob25lfGlQb2QpLy50ZXN0KHQ9dHx8YSl9LGFuZHJvaWQ6ZnVuY3Rpb24odCl7cmV0dXJuL15Nb3ppbGxhXFwvNVxcLjAgXFwoTGludXg7IChVOyApP0FuZHJvaWQvLnRlc3QodD10fHxhKX0sY2FuUG9zdE1lc3NhZ2U6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdD10fHxvLGU9ZXx8YSx0LnBvc3RNZXNzYWdlJiYhKHUoZSkmJnQub3BlbmVyKX0sdG91Y2g6ZnVuY3Rpb24odCxlLG4pe3JldHVybiB0PXR8fG8sZT1lfHxpLG49bnx8YSxcIm9udG91Y2hzdGFydFwiaW4gdHx8L09wZXJhIE1pbmkvLnRlc3Qobil8fGUubXNNYXhUb3VjaFBvaW50cz4wfSxjc3NUcmFuc2l0aW9uczpmdW5jdGlvbigpe3ZhciB0PXIuYm9keS5zdHlsZTtyZXR1cm4gdm9pZCAwIT09dC50cmFuc2l0aW9ufHx2b2lkIDAhPT10LndlYmtpdFRyYW5zaXRpb258fHZvaWQgMCE9PXQubW96VHJhbnNpdGlvbnx8dm9pZCAwIT09dC5vVHJhbnNpdGlvbnx8dm9pZCAwIT09dC5tc1RyYW5zaXRpb259LGhhc1Byb21pc2VTdXBwb3J0OmZ1bmN0aW9uKCl7cmV0dXJuISEoby5Qcm9taXNlJiZvLlByb21pc2UucmVzb2x2ZSYmby5Qcm9taXNlLnJlamVjdCYmby5Qcm9taXNlLmFsbCYmby5Qcm9taXNlLnJhY2UmJihuZXcgby5Qcm9taXNlKGZ1bmN0aW9uKGUpe3Q9ZX0pLHMuaXNUeXBlKFwiZnVuY3Rpb25cIix0KSkpO3ZhciB0fSxoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclN1cHBvcnQ6ZnVuY3Rpb24oKXtyZXR1cm4hIW8uSW50ZXJzZWN0aW9uT2JzZXJ2ZXJ9LGhhc1BlcmZvcm1hbmNlSW5mb3JtYXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gby5wZXJmb3JtYW5jZSYmby5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlfX19LGZ1bmN0aW9uKHQsZSl7dmFyIG49XCJpXCIscj0wLGk9MDt0LmV4cG9ydHM9e2dlbmVyYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIG4rU3RyaW5nKCtuZXcgRGF0ZSkrTWF0aC5mbG9vcigxZTUqTWF0aC5yYW5kb20oKSkrcisrfSxkZXRlcm1pbmlzdGljOmZ1bmN0aW9uKCl7cmV0dXJuIG4rU3RyaW5nKGkrKyl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNDYpLGk9big0OSksbz1uKDApO3QuZXhwb3J0cz1vLmF1ZyhyLmdldChcImV2ZW50c1wiKXx8e30saS5FbWl0dGVyKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNiksaT1uKDIpO2Z1bmN0aW9uIG8odCxlKXtyZXR1cm4gdC50aGVuKGUsZSl9ZnVuY3Rpb24gcyh0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIHJ9dC5leHBvcnRzPXthbHdheXM6byxhbGxSZXNvbHZlZDpmdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4gdm9pZCAwPT09dD9yLnJlamVjdChuZXcgRXJyb3IoXCJ1bmRlZmluZWQgaXMgbm90IGFuIG9iamVjdFwiKSk6QXJyYXkuaXNBcnJheSh0KT8oZT10Lmxlbmd0aCk/bmV3IHIoZnVuY3Rpb24obixyKXt2YXIgaT0wLG89W107ZnVuY3Rpb24gYSgpeyhpKz0xKT09PWUmJigwPT09by5sZW5ndGg/cigpOm4obykpfWZ1bmN0aW9uIHUodCl7by5wdXNoKHQpLGEoKX10LmZvckVhY2goZnVuY3Rpb24odCl7cyh0KT90LnRoZW4odSxhKTp1KHQpfSl9KTpyLnJlc29sdmUoW10pOnIucmVqZWN0KG5ldyBFcnJvcihcIlR5cGUgZXJyb3JcIikpfSxzb21lOmZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybiBlPSh0PXR8fFtdKS5sZW5ndGgsdD10LmZpbHRlcihzKSxlP2UhPT10Lmxlbmd0aD9yLnJlamVjdChcIm5vbi1Qcm9taXNlIHBhc3NlZCB0byAuc29tZVwiKTpuZXcgcihmdW5jdGlvbihlLG4pe3ZhciByPTA7ZnVuY3Rpb24gaSgpeyhyKz0xKT09PXQubGVuZ3RoJiZuKCl9dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QudGhlbihlLGkpfSl9KTpyLnJlamVjdChcIm5vIHByb21pc2VzIHBhc3NlZCB0byAuc29tZVwiKX0saXNQcm9taXNlOnMsYWxsU2V0dGxlZDpmdW5jdGlvbih0KXtmdW5jdGlvbiBlKCl7fXJldHVybiByLmFsbCgodHx8W10pLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbyh0LGUpfSkpfSx0aW1lb3V0OmZ1bmN0aW9uKHQsZSl7dmFyIG49bmV3IGk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLnJlamVjdChuZXcgRXJyb3IoXCJQcm9taXNlIHRpbWVkIG91dFwiKSl9LGUpLHQudGhlbihmdW5jdGlvbih0KXtuLnJlc29sdmUodCl9LGZ1bmN0aW9uKHQpe24ucmVqZWN0KHQpfSksbi5wcm9taXNlfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEpLkpTT047dC5leHBvcnRzPXtzdHJpbmdpZnk6ci5zdHJpbmdpZnl8fHIuZW5jb2RlLHBhcnNlOnIucGFyc2V8fHIuZGVjb2RlfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMzkpLGk9big5OSksbz1uKDcpOyhyPU9iamVjdC5jcmVhdGUocikpLmJ1aWxkPW8oci5idWlsZCxudWxsLGkpLHQuZXhwb3J0cz1yfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyNSksaT1uKDExMik7dC5leHBvcnRzPXIuYnVpbGQoW2ldKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNDkpLm1ha2VFbWl0dGVyKCk7dC5leHBvcnRzPXtlbWl0dGVyOnIsU1RBUlQ6XCJzdGFydFwiLEFMTF9XSURHRVRTX1JFTkRFUl9TVEFSVDpcImFsbF93aWRnZXRzX3JlbmRlcl9zdGFydFwiLEFMTF9XSURHRVRTX1JFTkRFUl9FTkQ6XCJhbGxfd2lkZ2V0c19yZW5kZXJfZW5kXCIsQUxMX1dJREdFVFNfQU5EX0lNQUdFU19MT0FERUQ6XCJhbGxfd2lkZ2V0c19hbmRfaW1hZ2VzX2xvYWRlZFwifX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oOSksaT1uKDEwNCksbz1cImh0dHBzOi8vc3luZGljYXRpb24udHdpdHRlci5jb21cIixzPVwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbVwiLGE9W1wiaHR0cHM6Ly9zeW5kaWNhdGlvbi50d2l0dGVyLmNvbVwiLFwiaHR0cHM6Ly9jZG4uc3luZGljYXRpb24udHdpbWcuY29tXCIsXCJodHRwczovL2xvY2FsaG9zdC50d2l0dGVyLmNvbTo4NDQ0XCJdLHU9W1wiaHR0cHM6Ly9zeW5kaWNhdGlvbi50d2l0dGVyLmNvbVwiLFwiaHR0cHM6Ly9sb2NhbGhvc3QudHdpdHRlci5jb206ODQ0NVwiXSxjPVtcImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb21cIixcImh0dHBzOi8vbG9jYWxob3N0LnR3aXR0ZXIuY29tXCIsL15odHRwczpcXC9cXC90b25cXC5sb2NhbFxcLnR3aXR0ZXJcXC5jb21cXC9zeW5kaWNhdGlvbi1pbnRlcm5hbFxcL2VtYmVkLWlmcmFtZVxcL1swLTlBLVphLXpfLV0rXFwvYXBwL10sZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBSZWdFeHA/dC50ZXN0KGUpOnQ9PT1lfSl9LGY9ZnVuY3Rpb24oKXt2YXIgdD1yLmdldChcImJhY2tlbmRIb3N0XCIpO3JldHVybiB0JiZkKGEsdCk/dDpcImh0dHBzOi8vY2RuLnN5bmRpY2F0aW9uLnR3aW1nLmNvbVwifSxsPWZ1bmN0aW9uKCl7dmFyIHQ9ci5nZXQoXCJzZXR0aW5nc1N2Y0hvc3RcIik7cmV0dXJuIHQmJmQodSx0KT90Om99O2Z1bmN0aW9uIGgodCxlKXt2YXIgbj1bdF07cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbih0KXtuLnB1c2goZnVuY3Rpb24odCl7dmFyIGU9KHR8fFwiXCIpLnRvU3RyaW5nKCksbj1cIi9cIj09PWUuc2xpY2UoMCwxKT8xOjAscj1mdW5jdGlvbih0KXtyZXR1cm5cIi9cIj09PXQuc2xpY2UoLTEpfShlKT8tMTp2b2lkIDA7cmV0dXJuIGUuc2xpY2UobixyKX0odCkpfSksbi5qb2luKFwiL1wiKX10LmV4cG9ydHM9e2Nvb2tpZUNvbnNlbnQ6ZnVuY3Rpb24odCl7dmFyIGU9dHx8W107cmV0dXJuIGUudW5zaGlmdChcImNvb2tpZS9jb25zZW50XCIpLGgobCgpLGUpfSxlbWJlZElmcmFtZTpmdW5jdGlvbih0LGUpe3ZhciBuPXR8fFtdLG89cyxhPXIuZ2V0KFwiZW1iZWRJZnJhbWVVUkxcIik7cmV0dXJuIGEmJmQoYyxhKT9oKGEsbikrXCIuaHRtbFwiOihuLnVuc2hpZnQoaS5nZXRCYXNlVVJMUGF0aChlKSksaChvLG4pK1wiLmh0bWxcIil9LGVtYmVkU2VydmljZTpmdW5jdGlvbih0KXt2YXIgZT10fHxbXSxuPW87cmV0dXJuIGUudW5zaGlmdChcInNydlwiKSxoKG4sZSl9LGV2ZW50VmlkZW86ZnVuY3Rpb24odCl7dmFyIGU9dHx8W107cmV0dXJuIGUudW5zaGlmdChcInZpZGVvL2V2ZW50XCIpLGgoZigpLGUpfSxncmlkOmZ1bmN0aW9uKHQpe3ZhciBlPXR8fFtdO3JldHVybiBlLnVuc2hpZnQoXCJncmlkL2NvbGxlY3Rpb25cIiksaChmKCksZSl9LG1vbWVudDpmdW5jdGlvbih0KXt2YXIgZT10fHxbXTtyZXR1cm4gZS51bnNoaWZ0KFwibW9tZW50c1wiKSxoKGYoKSxlKX0sc2V0dGluZ3M6ZnVuY3Rpb24odCl7dmFyIGU9dHx8W107cmV0dXJuIGUudW5zaGlmdChcInNldHRpbmdzXCIpLGgobCgpLGUpfSxzZXR0aW5nc1NjcmliZTpmdW5jdGlvbih0KXt2YXIgZT10fHxbXTtyZXR1cm4gZS51bnNoaWZ0KFwiaS9qb3QvZW1iZWRzXCIpLGgobCgpLGUpfSx0aW1lbGluZTpmdW5jdGlvbih0KXt2YXIgZT10fHxbXTtyZXR1cm4gZS51bnNoaWZ0KFwidGltZWxpbmVcIiksaChmKCksZSl9LHR3ZWV0QmF0Y2g6ZnVuY3Rpb24odCl7dmFyIGU9dHx8W107cmV0dXJuIGUudW5zaGlmdChcInR3ZWV0cy5qc29uXCIpLGgoZigpLGUpfSx2aWRlbzpmdW5jdGlvbih0KXt2YXIgZT10fHxbXTtyZXR1cm4gZS51bnNoaWZ0KFwid2lkZ2V0cy92aWRlb1wiKSxoKGYoKSxlKX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzKSxpPW4oMCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXt2YXIgbztpZihuPW58fHIsdD10fHx7fSxlPWV8fHt9LHQubmFtZSl7dHJ5e289bi5jcmVhdGVFbGVtZW50KCc8aWZyYW1lIG5hbWU9XCInK3QubmFtZSsnXCI+PC9pZnJhbWU+Jyl9Y2F0Y2goZSl7KG89bi5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpKS5uYW1lPXQubmFtZX1kZWxldGUgdC5uYW1lfWVsc2Ugbz1uLmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7cmV0dXJuIHQuaWQmJihvLmlkPXQuaWQsZGVsZXRlIHQuaWQpLG8uYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCIsby5zY3JvbGxpbmc9XCJub1wiLG8uc2V0QXR0cmlidXRlKFwiZnJhbWVCb3JkZXJcIiwwKSxvLnNldEF0dHJpYnV0ZShcImFsbG93VHJhbnNwYXJlbmN5XCIsITApLGkuZm9ySW4odCxmdW5jdGlvbih0LGUpe28uc2V0QXR0cmlidXRlKHQsZSl9KSxpLmZvckluKGUsZnVuY3Rpb24odCxlKXtvLnN0eWxlW3RdPWV9KSxvfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjUpLGk9bigxMDIpO3QuZXhwb3J0cz1yLmJ1aWxkKFtpXSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDM5KSxpPW4oNDApLG89big3KTsocj1PYmplY3QuY3JlYXRlKHIpKS5idWlsZD1vKHIuYnVpbGQsbnVsbCxpKSx0LmV4cG9ydHM9cn0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNzEpLGk9bigxOSksbz1uKDUpLHM9bigyMSksYT1uKDApO3QuZXhwb3J0cz1mdW5jdGlvbih0KXt0LnBhcmFtcyh7Y2hyb21lOnt9LGhlaWdodDp7dHJhbnNmb3JtOm8uYXNJbnR9LGluc3RhbmNlSWQ6e3JlcXVpcmVkOiEwLGZhbGxiYWNrOnMuZGV0ZXJtaW5pc3RpY30saXNQcmVjb25maWd1cmVkOnt9LGxhbmc6e3JlcXVpcmVkOiEwLHRyYW5zZm9ybTpyLm1hdGNoTGFuZ3VhZ2UsZmFsbGJhY2s6XCJlblwifSx0aGVtZTp7fSx0d2VldExpbWl0Ont0cmFuc2Zvcm06by5hc0ludH19KSx0LmRlZmluZVByb3BlcnR5KFwiZW5kcG9pbnRcIix7Z2V0OmZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiZW5kcG9pbnQgbm90IHNwZWNpZmllZFwiKX19KSx0LmRlZmluZShcInF1ZXJ5UGFyYW1zXCIsZnVuY3Rpb24oKXtyZXR1cm4gYS5jb21wYWN0KHtkbnQ6aS5lbmFibGVkKCksbGltaXQ6dGhpcy5wYXJhbXMudHdlZXRMaW1pdCxsYW5nOnRoaXMucGFyYW1zLmxhbmd9KX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByLGk9bigzKTtmdW5jdGlvbiBvKHQpe3ZhciBlLG4sbyxzPTA7Zm9yKHI9e30sZT0odD10fHxpKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm1ldGFcIik7ZVtzXTtzKyspe2lmKG49ZVtzXSwvXnR3aXR0ZXI6Ly50ZXN0KG4uZ2V0QXR0cmlidXRlKFwibmFtZVwiKSkpbz1uLmdldEF0dHJpYnV0ZShcIm5hbWVcIikucmVwbGFjZSgvXnR3aXR0ZXI6LyxcIlwiKTtlbHNle2lmKCEvXnR3aXR0ZXI6Ly50ZXN0KG4uZ2V0QXR0cmlidXRlKFwicHJvcGVydHlcIikpKWNvbnRpbnVlO289bi5nZXRBdHRyaWJ1dGUoXCJwcm9wZXJ0eVwiKS5yZXBsYWNlKC9edHdpdHRlcjovLFwiXCIpfXJbb109bi5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpfHxuLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfX1vKCksdC5leHBvcnRzPXtpbml0Om8sdmFsOmZ1bmN0aW9uKHQpe3JldHVybiByW3RdfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEwNiksaT1uKDI0KSxvPW4oMSk7ZnVuY3Rpb24gcyh0KXt2YXIgZT1cIlwiO2lmKCF0KXJldHVyblwiXCI7dHJ5e3JldHVybiBlPWkuc3RyaW5naWZ5KHQpLG8uYnRvYShlKX1jYXRjaCh0KXtyZXR1cm5cIlwifX1mdW5jdGlvbiBhKHQpe3JldHVybiByLnNldHRpbmdzTG9hZGVkKCkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gZVt0XX0pfWZ1bmN0aW9uIHUoKXtyZXR1cm4gYShcImZlYXR1cmVzXCIpfXQuZXhwb3J0cz17ZW5jb2RlRmVhdHVyZXM6cyxzaG91bGRPYnRhaW5Db29raWVDb25zZW50OmZ1bmN0aW9uKCl7cmV0dXJuIGEoXCJzaG91bGRPYnRhaW5Db29raWVDb25zZW50XCIpfSxnZXRFeHBlcmltZW50czp1LGdldEV4cGVyaW1lbnQ6ZnVuY3Rpb24odCl7cmV0dXJuIHUoKS50aGVuKGZ1bmN0aW9uKGUpe2lmKCFlW3RdKXRocm93IG5ldyBFcnJvcihcIkV4cGVyaW1lbnQgbm90IGZvdW5kXCIpO3JldHVybiBlW3RdfSl9LGdldEhvcml6b25TZXR0aW5nczpmdW5jdGlvbigpe3JldHVybiByLnNldHRpbmdzTG9hZGVkKCkudGhlbihmdW5jdGlvbih0KXtyZXR1cm57ZmVhdHVyZXM6dC5mZWF0dXJlcyxzZXNzaW9uSWQ6dC5zZXNzaW9uSWR9fSl9LGdldEFjdGl2ZUV4cGVyaW1lbnREYXRhU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIHUoKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiBzKHQpfSl9LGdldEV4cGVyaW1lbnRLZXlzOmZ1bmN0aW9uKCl7cmV0dXJuIHUoKS50aGVuKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3Qua2V5cyh0KX0pfSxsb2FkOmZ1bmN0aW9uKCl7ci5sb2FkKCl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTApLGk9e30sbz0tMSxzPXt9O2Z1bmN0aW9uIGEodCl7dmFyIGU9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR3aXR0ZXItZXZlbnQtaWRcIik7cmV0dXJuIGV8fCh0LnNldEF0dHJpYnV0ZShcImRhdGEtdHdpdHRlci1ldmVudC1pZFwiLCsrbyksbyl9ZnVuY3Rpb24gdSh0LGUsbil7dmFyIHI9MCxpPXQmJnQubGVuZ3RofHwwO2ZvcihyPTA7cjxpO3IrKylpZih0W3JdLmNhbGwoZSxuLGUpLG4uY2Vhc2VJbW1lZGlhdGVseSlyZXR1cm4hMX1mdW5jdGlvbiBjKHQsZSxuKXtmb3IodmFyIGk9bnx8dC50YXJnZXR8fHQuc3JjRWxlbWVudCxvPXIubGlzdChpKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCIuXCIrdH0pLmNvbmNhdChpLnRhZ05hbWUpLHM9MCxhPW8ubGVuZ3RoO3M8YTtzKyspaWYoITE9PT11KGVbb1tzXV0saSx0KSlyZXR1cm47dC5jZWFzZXx8aSE9PXRoaXMmJmMuY2FsbCh0aGlzLHQsZSxpLnBhcmVudEVsZW1lbnR8fGkucGFyZW50Tm9kZSl9ZnVuY3Rpb24gZCh0LGUsbixyKXtmdW5jdGlvbiBpKHIpe2MuY2FsbCh0LHIsbltlXSl9IWZ1bmN0aW9uKHQsZSxuLHIpe3QuaWQmJihzW3QuaWRdPXNbdC5pZF18fFtdLHNbdC5pZF0ucHVzaCh7ZWw6dCxsaXN0ZW5lcjplLHR5cGU6bixyb290SWQ6cn0pKX0odCxpLGUsciksdC5hZGRFdmVudExpc3RlbmVyKGUsaSwhMSl9ZnVuY3Rpb24gZih0KXt0JiZ0LnByZXZlbnREZWZhdWx0P3QucHJldmVudERlZmF1bHQoKTp0LnJldHVyblZhbHVlPSExfWZ1bmN0aW9uIGwodCl7dCYmKHQuY2Vhc2U9ITApJiZ0LnN0b3BQcm9wYWdhdGlvbj90LnN0b3BQcm9wYWdhdGlvbigpOnQuY2FuY2VsQnViYmxlPSEwfXQuZXhwb3J0cz17c3RvcDpmdW5jdGlvbih0KXtyZXR1cm4gbCh0KSxmKHQpLCExfSxzdG9wUHJvcGFnYXRpb246bCxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24odCl7dCYmKHQuY2Vhc2VJbW1lZGlhdGVseT0hMCxsKHQpLHQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpfSxwcmV2ZW50RGVmYXVsdDpmLGRlbGVnYXRlOmZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBvPWEodCk7aVtvXT1pW29dfHx7fSxpW29dW2VdfHwoaVtvXVtlXT17fSxkKHQsZSxpW29dLG8pKSxpW29dW2VdW25dPWlbb11bZV1bbl18fFtdLGlbb11bZV1bbl0ucHVzaChyKX0sc2ltdWxhdGU6ZnVuY3Rpb24odCxlLG4pe3ZhciByPWEoZSksbz1pW3JdJiZpW3JdO2MuY2FsbChlLHt0YXJnZXQ6bn0sb1t0XSl9LHJlbW92ZURlbGVnYXRlc0ZvcldpZGdldDpmdW5jdGlvbih0KXt2YXIgZT1zW3RdO2UmJihlLmZvckVhY2goZnVuY3Rpb24odCl7dC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHQudHlwZSx0Lmxpc3RlbmVyLCExKSxkZWxldGUgaVt0LnJvb3RJZF19KSxkZWxldGUgc1t0XSl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMCksaT1uKDQ4KTt0LmV4cG9ydHM9e2Nsb3Nlc3Q6ZnVuY3Rpb24gdChlLG4sbyl7dmFyIHM7aWYobilyZXR1cm4gbz1vfHxuJiZuLm93bmVyRG9jdW1lbnQscz1yLmlzVHlwZShcImZ1bmN0aW9uXCIsZSk/ZTpmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuISFlLnRhZ05hbWUmJmkoZSx0KX19KGUpLG49PT1vP3Mobik/bjp2b2lkIDA6cyhuKT9uOnQocyxuLnBhcmVudE5vZGUsbyl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNDIpLGk9bigzKSxvPW4oMTkpLHM9bigzNiksYT1uKDc1KSx1PW4oMjQpLGM9big5KSxkPW4oNCksZj1uKDApLGw9MSxoPXIudmVyc2lvbixwPWMuZ2V0KFwiY2xpZW50RXZlbnRFbmRwb2ludFwiKXx8XCJodHRwczovL3N5bmRpY2F0aW9uLnR3aXR0ZXIuY29tL2kvam90XCI7ZnVuY3Rpb24gbSh0KXtyZXR1cm4gZi5hdWcoe2NsaWVudDpcInRmd1wifSx0fHx7fSl9ZnVuY3Rpb24gdih0LGUsbil7cmV0dXJuIGU9ZXx8e30sZi5hdWcoe30sZSx7X2NhdGVnb3J5Xzp0LHRyaWdnZXJlZF9vbjplLnRyaWdnZXJlZF9vbnx8K25ldyBEYXRlLGRudDpvLmVuYWJsZWQobil9KX10LmV4cG9ydHM9e2V4dHJhY3RUZXJtc0Zyb21ET006ZnVuY3Rpb24gdChlLG4pe3ZhciByO3JldHVybiBuPW58fHt9LGUmJmUubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERT8oKHI9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNjcmliZVwiKSkmJnIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9dC50cmltKCkuc3BsaXQoXCI6XCIpLHI9ZVswXSxpPWVbMV07ciYmaSYmIW5bcl0mJihuW3JdPWkpfSksdChlLnBhcmVudE5vZGUsbikpOm59LGNsaWNrRXZlbnRFbGVtZW50OmZ1bmN0aW9uKHQpe3ZhciBlPXMuY2xvc2VzdChcIltkYXRhLWV4cGFuZGVkLXVybF1cIix0KSxuPWUmJmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1leHBhbmRlZC11cmxcIik7cmV0dXJuIG4mJmQuaXNUd2l0dGVyVVJMKG4pP1widHdpdHRlcl91cmxcIjpcInVybFwifSxmbGF0dGVuQ2xpZW50RXZlbnRQYXlsb2FkOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGYuYXVnKHt9LGUse2V2ZW50X25hbWVzcGFjZTp0fSl9LGZvcm1hdEdlbmVyaWNFdmVudERhdGE6dixmb3JtYXRDbGllbnRFdmVudERhdGE6ZnVuY3Rpb24odCxlLG4pe3ZhciByPXQmJnQud2lkZ2V0X29yaWdpbnx8aS5yZWZlcnJlcjtyZXR1cm4odD12KFwidGZ3X2NsaWVudF9ldmVudFwiLHQscikpLmNsaWVudF92ZXJzaW9uPWgsdC5mb3JtYXRfdmVyc2lvbj12b2lkIDAhPT1uP246MSxlfHwodC53aWRnZXRfb3JpZ2luPXIpLHR9LGZvcm1hdENsaWVudEV2ZW50TmFtZXNwYWNlOm0sZm9ybWF0SG9yaXpvblR3ZWV0RGF0YTpmdW5jdGlvbih0KXt2YXIgZT17aXRlbV9pZHM6W10saXRlbV9kZXRhaWxzOnt9fTtyZXR1cm4gZS5pdGVtX2lkcy5wdXNoKHQpLGUuaXRlbV9kZXRhaWxzW3RdPXtpdGVtX3R5cGU6YS5UV0VFVH0sZX0sZm9ybWF0VHdlZXRBc3NvY2lhdGlvbjpmdW5jdGlvbih0LGUpe3ZhciBuPXt9O3JldHVybihlPWV8fHt9KS5hc3NvY2lhdGlvbl9uYW1lc3BhY2U9bSh0KSxuW2xdPWUsbn0sbm90aWNlU2VlbjpmdW5jdGlvbih0KXtyZXR1cm5cIm5vdGljZVwiPT09dC5lbGVtZW50JiZcInNlZW5cIj09PXQuYWN0aW9ufSxzcGxpdExvZ0VudHJ5OmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG87cmV0dXJuIHQuaXRlbV9pZHMmJnQuaXRlbV9pZHMubGVuZ3RoPjE/KGU9TWF0aC5mbG9vcih0Lml0ZW1faWRzLmxlbmd0aC8yKSxuPXQuaXRlbV9pZHMuc2xpY2UoMCxlKSxyPXt9LGk9dC5pdGVtX2lkcy5zbGljZShlKSxvPXt9LG4uZm9yRWFjaChmdW5jdGlvbihlKXtyW2VdPXQuaXRlbV9kZXRhaWxzW2VdfSksaS5mb3JFYWNoKGZ1bmN0aW9uKGUpe29bZV09dC5pdGVtX2RldGFpbHNbZV19KSxbZi5hdWcoe30sdCx7aXRlbV9pZHM6bixpdGVtX2RldGFpbHM6cn0pLGYuYXVnKHt9LHQse2l0ZW1faWRzOmksaXRlbV9kZXRhaWxzOm99KV0pOlt0XX0sc3RyaW5naWZ5OmZ1bmN0aW9uKHQpe3ZhciBlLG49QXJyYXkucHJvdG90eXBlLnRvSlNPTjtyZXR1cm4gZGVsZXRlIEFycmF5LnByb3RvdHlwZS50b0pTT04sZT11LnN0cmluZ2lmeSh0KSxuJiYoQXJyYXkucHJvdG90eXBlLnRvSlNPTj1uKSxlfSxDTElFTlRfRVZFTlRfRU5EUE9JTlQ6cCxSVUZPVVNfUkVESVJFQ1Q6XCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL2pvdC5odG1sXCJ9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big4KSxpPW4oNzQpLG89bigwKSxzPWkuZ2V0Q2Fub25pY2FsVVJMKCl8fHIuaHJlZixhPXM7dC5leHBvcnRzPXtpc0ZyYW1lZDpmdW5jdGlvbigpe3JldHVybiBzIT09YX0scm9vdERvY3VtZW50TG9jYXRpb246ZnVuY3Rpb24odCl7cmV0dXJuIHQmJm8uaXNUeXBlKFwic3RyaW5nXCIsdCkmJihzPXQpLHN9LGN1cnJlbnREb2N1bWVudExvY2F0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGF9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oOTcpLGk9big5OCksbz1uKDApO3QuZXhwb3J0cz17Y291cGxlOmZ1bmN0aW9uKCl7cmV0dXJuIG8udG9SZWFsQXJyYXkoYXJndW1lbnRzKX0sYnVpbGQ6ZnVuY3Rpb24odCxlLG4pe3ZhciBvPW5ldyB0O3JldHVybihlPWkocihlfHxbXSkpKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuY2FsbChudWxsLG8pfSksby5idWlsZChuKX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMDApLGk9bigwKSxvPW4oNDEpO2Z1bmN0aW9uIHMoKXt0aGlzLkNvbXBvbmVudD10aGlzLmZhY3RvcnkoKSx0aGlzLl9hZHZpY2VBcmdzPVtdLHRoaXMuX2xhc3RBcmdzPVtdfWkuYXVnKHMucHJvdG90eXBlLHtmYWN0b3J5Om8sYnVpbGQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztyZXR1cm4gdGhpcy5Db21wb25lbnQsaS5hdWcodGhpcy5Db21wb25lbnQucHJvdG90eXBlLmJvdW5kUGFyYW1zLHQpLHRoaXMuX2FkdmljZUFyZ3MuY29uY2F0KHRoaXMuX2xhc3RBcmdzKS5mb3JFYWNoKGZ1bmN0aW9uKHQpeyhmdW5jdGlvbih0LGUsbil7dmFyIHI9dGhpc1tlXTtpZighcil0aHJvdyBuZXcgRXJyb3IoZStcIiBkb2VzIG5vdCBleGlzdFwiKTt0aGlzW2VdPXQocixuKX0pLmFwcGx5KGUuQ29tcG9uZW50LnByb3RvdHlwZSx0KX0pLGRlbGV0ZSB0aGlzLl9sYXN0QXJncyxkZWxldGUgdGhpcy5fYWR2aWNlQXJncyx0aGlzLkNvbXBvbmVudH0scGFyYW1zOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuQ29tcG9uZW50LnByb3RvdHlwZS5wYXJhbUNvbmZpZ3M7dD10fHx7fSx0aGlzLkNvbXBvbmVudC5wcm90b3R5cGUucGFyYW1Db25maWdzPWkuYXVnKHt9LHQsZSl9LGRlZmluZTpmdW5jdGlvbih0LGUpe2lmKHQgaW4gdGhpcy5Db21wb25lbnQucHJvdG90eXBlKXRocm93IG5ldyBFcnJvcih0K1wiIGhhcyBwcmV2aW91c2x5IGJlZW4gZGVmaW5lZFwiKTt0aGlzLm92ZXJyaWRlKHQsZSl9LGRlZmluZVN0YXRpYzpmdW5jdGlvbih0LGUpe3RoaXMuQ29tcG9uZW50W3RdPWV9LG92ZXJyaWRlOmZ1bmN0aW9uKHQsZSl7dGhpcy5Db21wb25lbnQucHJvdG90eXBlW3RdPWV9LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKHQsZSl7aWYodCBpbiB0aGlzLkNvbXBvbmVudC5wcm90b3R5cGUpdGhyb3cgbmV3IEVycm9yKHQrXCIgaGFzIHByZXZpb3VzbHkgYmVlbiBkZWZpbmVkXCIpO3RoaXMub3ZlcnJpZGVQcm9wZXJ0eSh0LGUpfSxvdmVycmlkZVByb3BlcnR5OmZ1bmN0aW9uKHQsZSl7dmFyIG49aS5hdWcoe2NvbmZpZ3VyYWJsZTohMH0sZSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuQ29tcG9uZW50LnByb3RvdHlwZSx0LG4pfSxiZWZvcmU6ZnVuY3Rpb24odCxlKXt0aGlzLl9hZHZpY2VBcmdzLnB1c2goW3IuYmVmb3JlLHQsZV0pfSxhZnRlcjpmdW5jdGlvbih0LGUpe3RoaXMuX2FkdmljZUFyZ3MucHVzaChbci5hZnRlcix0LGVdKX0sYXJvdW5kOmZ1bmN0aW9uKHQsZSl7dGhpcy5fYWR2aWNlQXJncy5wdXNoKFtyLmFyb3VuZCx0LGVdKX0sbGFzdDpmdW5jdGlvbih0LGUpe3RoaXMuX2xhc3RBcmdzLnB1c2goW3IuYWZ0ZXIsdCxlXSl9fSksdC5leHBvcnRzPXN9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDApO2Z1bmN0aW9uIGkoKXtyZXR1cm4hMH1mdW5jdGlvbiBvKHQpe3JldHVybiB0fXQuZXhwb3J0cz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dmFyIGU9dGhpczt0PXR8fHt9LHRoaXMucGFyYW1zPU9iamVjdC5rZXlzKHRoaXMucGFyYW1Db25maWdzKS5yZWR1Y2UoZnVuY3Rpb24obixzKXt2YXIgYT1bXSx1PWUuYm91bmRQYXJhbXMsYz1lLnBhcmFtQ29uZmlnc1tzXSxkPWMudmFsaWRhdGV8fGksZj1jLnRyYW5zZm9ybXx8bztpZihzIGluIHUmJmEucHVzaCh1W3NdKSxzIGluIHQmJmEucHVzaCh0W3NdKSxhPVwiZmFsbGJhY2tcImluIGM/YS5jb25jYXQoYy5mYWxsYmFjayk6YSxuW3NdPWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT1udWxsO3JldHVybiB0LnNvbWUoZnVuY3Rpb24odCl7aWYodD1yLmlzVHlwZShcImZ1bmN0aW9uXCIsdCk/dCgpOnQsZSh0KSlyZXR1cm4gaT1uKHQpLCEwfSksaX0oYSxkLGYpLGMucmVxdWlyZWQmJm51bGw9PW5bc10pdGhyb3cgbmV3IEVycm9yKHMrXCIgaXMgYSByZXF1aXJlZCBwYXJhbWV0ZXJcIik7cmV0dXJuIG59LHt9KSx0aGlzLmluaXRpYWxpemUoKX1yZXR1cm4gci5hdWcodC5wcm90b3R5cGUse3BhcmFtQ29uZmlnczp7fSxib3VuZFBhcmFtczp7fSxpbml0aWFsaXplOmZ1bmN0aW9uKCl7fX0pLHR9fSxmdW5jdGlvbih0KXt0LmV4cG9ydHM9e3ZlcnNpb246XCI2YTNhZDQyYjIyNGRmOjE3NzgxMDYyMzg1OTdcIn19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7dmFyIGksbz0wO3JldHVybiBuPW58fG51bGwsZnVuY3Rpb24gcygpe3ZhciBhPW58fHRoaXMsdT1hcmd1bWVudHMsYz0rbmV3IERhdGU7aWYoci5jbGVhclRpbWVvdXQoaSksYy1vPmUpcmV0dXJuIG89Yyx2b2lkIHQuYXBwbHkoYSx1KTtpPXIuc2V0VGltZW91dChmdW5jdGlvbigpe3MuYXBwbHkoYSx1KX0sZSl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTgpO3QuZXhwb3J0cz1mdW5jdGlvbigpe3IucHVibGljRXJyb3IoXCJFcnJvcjogVGhpcyBUaW1lbGluZSB0eXBlIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgKExpa2VzLCBDb2xsZWN0aW9ucywgJiBNb21lbnRzKS4gXFxuXFx0XCIsXCIqIFR3aXR0ZXIgc3RpbGwgc3VwcG9ydHMgUHJvZmlsZSBhbmQgTGlzdCBUaW1lbGluZXMgXFxuXFx0XCIsXCIqIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCB0aGlzIGNoYW5nZSBpbiBvdXIgYW5ub3VuY2VtZW50OiBcXG5cXHRcIixcImh0dHBzOi8vdHdpdHRlcmNvbW11bml0eS5jb20vdC9yZW1vdmluZy1zdXBwb3J0LWZvci1lbWJlZGRlZC1saWtlLWNvbGxlY3Rpb24tYW5kLW1vbWVudC10aW1lbGluZXMvMTUwMzEzIFxcblxcdFwiLFwiKiBJbiBvcmRlciB0byBjcmVhdGUgYSBuZXcgRW1iZWRkZWQgVGltZWxpbmUsIHZpc2l0OiBodHRwczovL3B1Ymxpc2gudHdpdHRlci5jb21cIil9fSxmdW5jdGlvbih0LGUsbil7XG4vKiFcbiAqIEBvdmVydmlldyBlczYtcHJvbWlzZSAtIGEgdGlueSBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlcy9BKy5cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc3RlZmFucGVubmVyL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIHY0LjIuNSs3ZjJiNTI2ZFxuICovdmFyIHI7cj1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH12YXIgZT1BcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXk6ZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfSxuPTAscj12b2lkIDAsaT12b2lkIDAsbz1mdW5jdGlvbih0LGUpe2xbbl09dCxsW24rMV09ZSwyPT09KG4rPTIpJiYoaT9pKGgpOncoKSl9LHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dm9pZCAwLGE9c3x8e30sdT1hLk11dGF0aW9uT2JzZXJ2ZXJ8fGEuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixjPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmXCJbb2JqZWN0IHByb2Nlc3NdXCI9PT17fS50b1N0cmluZy5jYWxsKHByb2Nlc3MpLGQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgaW1wb3J0U2NyaXB0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1lc3NhZ2VDaGFubmVsO2Z1bmN0aW9uIGYoKXt2YXIgdD1zZXRUaW1lb3V0O3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0KGgsMSl9fXZhciBsPW5ldyBBcnJheSgxZTMpO2Z1bmN0aW9uIGgoKXtmb3IodmFyIHQ9MDt0PG47dCs9MikoMCxsW3RdKShsW3QrMV0pLGxbdF09dm9pZCAwLGxbdCsxXT12b2lkIDA7bj0wfXZhciBwLG0sdixnLHc9dm9pZCAwO2Z1bmN0aW9uIHkodCxlKXt2YXIgbj10aGlzLHI9bmV3IHRoaXMuY29uc3RydWN0b3IoRSk7dm9pZCAwPT09cltfXSYmayhyKTt2YXIgaT1uLl9zdGF0ZTtpZihpKXt2YXIgcz1hcmd1bWVudHNbaS0xXTtvKGZ1bmN0aW9uKCl7cmV0dXJuIEQoaSxyLHMsbi5fcmVzdWx0KX0pfWVsc2UgSShuLHIsdCxlKTtyZXR1cm4gcn1mdW5jdGlvbiBiKHQpe2lmKHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0LmNvbnN0cnVjdG9yPT09dGhpcylyZXR1cm4gdDt2YXIgZT1uZXcgdGhpcyhFKTtyZXR1cm4gQyhlLHQpLGV9Yz93PWZ1bmN0aW9uKCl7cmV0dXJuIHByb2Nlc3MubmV4dFRpY2soaCl9OnU/KG09MCx2PW5ldyB1KGgpLGc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIiksdi5vYnNlcnZlKGcse2NoYXJhY3RlckRhdGE6ITB9KSx3PWZ1bmN0aW9uKCl7Zy5kYXRhPW09KyttJTJ9KTpkPygocD1uZXcgTWVzc2FnZUNoYW5uZWwpLnBvcnQxLm9ubWVzc2FnZT1oLHc9ZnVuY3Rpb24oKXtyZXR1cm4gcC5wb3J0Mi5wb3N0TWVzc2FnZSgwKX0pOnc9dm9pZCAwPT09cz9mdW5jdGlvbigpe3RyeXt2YXIgdD1GdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkucmVxdWlyZShcInZlcnR4XCIpO3JldHVybiB2b2lkIDAhPT0ocj10LnJ1bk9uTG9vcHx8dC5ydW5PbkNvbnRleHQpP2Z1bmN0aW9uKCl7cihoKX06ZigpfWNhdGNoKHQpe3JldHVybiBmKCl9fSgpOmYoKTt2YXIgXz1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7ZnVuY3Rpb24gRSgpe312YXIgeD12b2lkIDAsVD0xLEE9MixTPXtlcnJvcjpudWxsfTtmdW5jdGlvbiBSKHQpe3RyeXtyZXR1cm4gdC50aGVufWNhdGNoKHQpe3JldHVybiBTLmVycm9yPXQsU319ZnVuY3Rpb24gTihlLG4scil7bi5jb25zdHJ1Y3Rvcj09PWUuY29uc3RydWN0b3ImJnI9PT15JiZuLmNvbnN0cnVjdG9yLnJlc29sdmU9PT1iP2Z1bmN0aW9uKHQsZSl7ZS5fc3RhdGU9PT1UP2oodCxlLl9yZXN1bHQpOmUuX3N0YXRlPT09QT9QKHQsZS5fcmVzdWx0KTpJKGUsdm9pZCAwLGZ1bmN0aW9uKGUpe3JldHVybiBDKHQsZSl9LGZ1bmN0aW9uKGUpe3JldHVybiBQKHQsZSl9KX0oZSxuKTpyPT09Uz8oUChlLFMuZXJyb3IpLFMuZXJyb3I9bnVsbCk6dm9pZCAwPT09cj9qKGUsbik6dChyKT9mdW5jdGlvbih0LGUsbil7byhmdW5jdGlvbih0KXt2YXIgcj0hMSxpPWZ1bmN0aW9uKHQsZSxuLHIpe3RyeXt0LmNhbGwoZSxuLHIpfWNhdGNoKHQpe3JldHVybiB0fX0obixlLGZ1bmN0aW9uKG4pe3J8fChyPSEwLGUhPT1uP0ModCxuKTpqKHQsbikpfSxmdW5jdGlvbihlKXtyfHwocj0hMCxQKHQsZSkpfSx0Ll9sYWJlbCk7IXImJmkmJihyPSEwLFAodCxpKSl9LHQpfShlLG4scik6aihlLG4pfWZ1bmN0aW9uIEModCxlKXt2YXIgbixyO3Q9PT1lP1AodCxuZXcgVHlwZUVycm9yKFwiWW91IGNhbm5vdCByZXNvbHZlIGEgcHJvbWlzZSB3aXRoIGl0c2VsZlwiKSk6KHI9dHlwZW9mKG49ZSksbnVsbD09PW58fFwib2JqZWN0XCIhPT1yJiZcImZ1bmN0aW9uXCIhPT1yP2oodCxlKTpOKHQsZSxSKGUpKSl9ZnVuY3Rpb24gTCh0KXt0Ll9vbmVycm9yJiZ0Ll9vbmVycm9yKHQuX3Jlc3VsdCksTyh0KX1mdW5jdGlvbiBqKHQsZSl7dC5fc3RhdGU9PT14JiYodC5fcmVzdWx0PWUsdC5fc3RhdGU9VCwwIT09dC5fc3Vic2NyaWJlcnMubGVuZ3RoJiZvKE8sdCkpfWZ1bmN0aW9uIFAodCxlKXt0Ll9zdGF0ZT09PXgmJih0Ll9zdGF0ZT1BLHQuX3Jlc3VsdD1lLG8oTCx0KSl9ZnVuY3Rpb24gSSh0LGUsbixyKXt2YXIgaT10Ll9zdWJzY3JpYmVycyxzPWkubGVuZ3RoO3QuX29uZXJyb3I9bnVsbCxpW3NdPWUsaVtzK1RdPW4saVtzK0FdPXIsMD09PXMmJnQuX3N0YXRlJiZvKE8sdCl9ZnVuY3Rpb24gTyh0KXt2YXIgZT10Ll9zdWJzY3JpYmVycyxuPXQuX3N0YXRlO2lmKDAhPT1lLmxlbmd0aCl7Zm9yKHZhciByPXZvaWQgMCxpPXZvaWQgMCxvPXQuX3Jlc3VsdCxzPTA7czxlLmxlbmd0aDtzKz0zKXI9ZVtzXSxpPWVbcytuXSxyP0QobixyLGksbyk6aShvKTt0Ll9zdWJzY3JpYmVycy5sZW5ndGg9MH19ZnVuY3Rpb24gRChlLG4scixpKXt2YXIgbz10KHIpLHM9dm9pZCAwLGE9dm9pZCAwLHU9dm9pZCAwLGM9dm9pZCAwO2lmKG8pe2lmKChzPWZ1bmN0aW9uKHQsZSl7dHJ5e3JldHVybiB0KGUpfWNhdGNoKHQpe3JldHVybiBTLmVycm9yPXQsU319KHIsaSkpPT09Uz8oYz0hMCxhPXMuZXJyb3Iscy5lcnJvcj1udWxsKTp1PSEwLG49PT1zKXJldHVybiB2b2lkIFAobixuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLlwiKSl9ZWxzZSBzPWksdT0hMDtuLl9zdGF0ZSE9PXh8fChvJiZ1P0MobixzKTpjP1AobixhKTplPT09VD9qKG4scyk6ZT09PUEmJlAobixzKSl9dmFyIHo9MDtmdW5jdGlvbiBrKHQpe3RbX109eisrLHQuX3N0YXRlPXZvaWQgMCx0Ll9yZXN1bHQ9dm9pZCAwLHQuX3N1YnNjcmliZXJzPVtdfXZhciBNPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3RoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I9dCx0aGlzLnByb21pc2U9bmV3IHQoRSksdGhpcy5wcm9taXNlW19dfHxrKHRoaXMucHJvbWlzZSksZShuKT8odGhpcy5sZW5ndGg9bi5sZW5ndGgsdGhpcy5fcmVtYWluaW5nPW4ubGVuZ3RoLHRoaXMuX3Jlc3VsdD1uZXcgQXJyYXkodGhpcy5sZW5ndGgpLDA9PT10aGlzLmxlbmd0aD9qKHRoaXMucHJvbWlzZSx0aGlzLl9yZXN1bHQpOih0aGlzLmxlbmd0aD10aGlzLmxlbmd0aHx8MCx0aGlzLl9lbnVtZXJhdGUobiksMD09PXRoaXMuX3JlbWFpbmluZyYmaih0aGlzLnByb21pc2UsdGhpcy5fcmVzdWx0KSkpOlAodGhpcy5wcm9taXNlLG5ldyBFcnJvcihcIkFycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheVwiKSl9cmV0dXJuIHQucHJvdG90eXBlLl9lbnVtZXJhdGU9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7dGhpcy5fc3RhdGU9PT14JiZlPHQubGVuZ3RoO2UrKyl0aGlzLl9lYWNoRW50cnkodFtlXSxlKX0sdC5wcm90b3R5cGUuX2VhY2hFbnRyeT1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3Iscj1uLnJlc29sdmU7aWYocj09PWIpe3ZhciBpPVIodCk7aWYoaT09PXkmJnQuX3N0YXRlIT09eCl0aGlzLl9zZXR0bGVkQXQodC5fc3RhdGUsZSx0Ll9yZXN1bHQpO2Vsc2UgaWYoXCJmdW5jdGlvblwiIT10eXBlb2YgaSl0aGlzLl9yZW1haW5pbmctLSx0aGlzLl9yZXN1bHRbZV09dDtlbHNlIGlmKG49PT1VKXt2YXIgbz1uZXcgbihFKTtOKG8sdCxpKSx0aGlzLl93aWxsU2V0dGxlQXQobyxlKX1lbHNlIHRoaXMuX3dpbGxTZXR0bGVBdChuZXcgbihmdW5jdGlvbihlKXtyZXR1cm4gZSh0KX0pLGUpfWVsc2UgdGhpcy5fd2lsbFNldHRsZUF0KHIodCksZSl9LHQucHJvdG90eXBlLl9zZXR0bGVkQXQ9ZnVuY3Rpb24odCxlLG4pe3ZhciByPXRoaXMucHJvbWlzZTtyLl9zdGF0ZT09PXgmJih0aGlzLl9yZW1haW5pbmctLSx0PT09QT9QKHIsbik6dGhpcy5fcmVzdWx0W2VdPW4pLDA9PT10aGlzLl9yZW1haW5pbmcmJmoocix0aGlzLl9yZXN1bHQpfSx0LnByb3RvdHlwZS5fd2lsbFNldHRsZUF0PWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcztJKHQsdm9pZCAwLGZ1bmN0aW9uKHQpe3JldHVybiBuLl9zZXR0bGVkQXQoVCxlLHQpfSxmdW5jdGlvbih0KXtyZXR1cm4gbi5fc2V0dGxlZEF0KEEsZSx0KX0pfSx0fSgpLFU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe3RoaXNbX109eisrLHRoaXMuX3Jlc3VsdD10aGlzLl9zdGF0ZT12b2lkIDAsdGhpcy5fc3Vic2NyaWJlcnM9W10sRSE9PXQmJihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yXCIpfSgpLHRoaXMgaW5zdGFuY2VvZiBlP2Z1bmN0aW9uKHQsZSl7dHJ5e2UoZnVuY3Rpb24oZSl7Qyh0LGUpfSxmdW5jdGlvbihlKXtQKHQsZSl9KX1jYXRjaChlKXtQKHQsZSl9fSh0aGlzLHQpOmZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKX0oKSl9cmV0dXJuIGUucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX0sZS5wcm90b3R5cGUuZmluYWxseT1mdW5jdGlvbihlKXt2YXIgbj10aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0KGUpP3RoaXMudGhlbihmdW5jdGlvbih0KXtyZXR1cm4gbi5yZXNvbHZlKGUoKSkudGhlbihmdW5jdGlvbigpe3JldHVybiB0fSl9LGZ1bmN0aW9uKHQpe3JldHVybiBuLnJlc29sdmUoZSgpKS50aGVuKGZ1bmN0aW9uKCl7dGhyb3cgdH0pfSk6dGhpcy50aGVuKGUsZSl9LGV9KCk7cmV0dXJuIFUucHJvdG90eXBlLnRoZW49eSxVLmFsbD1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IE0odGhpcyx0KS5wcm9taXNlfSxVLnJhY2U9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztyZXR1cm4gZSh0KT9uZXcgbihmdW5jdGlvbihlLHIpe2Zvcih2YXIgaT10Lmxlbmd0aCxvPTA7bzxpO28rKyluLnJlc29sdmUodFtvXSkudGhlbihlLHIpfSk6bmV3IG4oZnVuY3Rpb24odCxlKXtyZXR1cm4gZShuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byByYWNlLlwiKSl9KX0sVS5yZXNvbHZlPWIsVS5yZWplY3Q9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IHRoaXMoRSk7cmV0dXJuIFAoZSx0KSxlfSxVLl9zZXRTY2hlZHVsZXI9ZnVuY3Rpb24odCl7aT10fSxVLl9zZXRBc2FwPWZ1bmN0aW9uKHQpe289dH0sVS5fYXNhcD1vLFUucG9seWZpbGw9ZnVuY3Rpb24oKXt2YXIgdD12b2lkIDA7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCl0PWdsb2JhbDtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmKXQ9c2VsZjtlbHNlIHRyeXt0PUZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaCh0KXt0aHJvdyBuZXcgRXJyb3IoXCJwb2x5ZmlsbCBmYWlsZWQgYmVjYXVzZSBnbG9iYWwgb2JqZWN0IGlzIHVuYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnRcIil9dmFyIGU9dC5Qcm9taXNlO2lmKGUpe3ZhciBuPW51bGw7dHJ5e249T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUucmVzb2x2ZSgpKX1jYXRjaCh0KXt9aWYoXCJbb2JqZWN0IFByb21pc2VdXCI9PT1uJiYhZS5jYXN0KXJldHVybn10LlByb21pc2U9VX0sVS5Qcm9taXNlPVUsVX0sdC5leHBvcnRzPXIoKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNDcpO3QuZXhwb3J0cz1uZXcgcihcInR3dHRyXCIpfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxKSxpPW4oMCk7ZnVuY3Rpb24gbyh0KXtyZXR1cm4gaS5pc1R5cGUoXCJzdHJpbmdcIix0KT90LnNwbGl0KFwiLlwiKTppLmlzVHlwZShcImFycmF5XCIsdCk/dDpbXX1mdW5jdGlvbiBzKHQsZSl7KGU9ZXx8cilbdF09ZVt0XXx8e30sT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJiYXNlXCIse3ZhbHVlOmVbdF19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcIm5hbWVcIix7dmFsdWU6dH0pfWkuYXVnKHMucHJvdG90eXBlLHtnZXQ6ZnVuY3Rpb24odCl7cmV0dXJuIG8odCkucmVkdWNlKGZ1bmN0aW9uKHQsZSl7aWYoaS5pc09iamVjdCh0KSlyZXR1cm4gdFtlXX0sdGhpcy5iYXNlKX0sc2V0OmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1vKHQpLHM9ZnVuY3Rpb24odCxlKXt2YXIgbj1vKGUpLnNsaWNlKDAsLTEpO3JldHVybiBuLnJlZHVjZShmdW5jdGlvbih0LGUscil7aWYodFtlXT10W2VdfHx7fSwhaS5pc09iamVjdCh0W2VdKSl0aHJvdyBuZXcgRXJyb3Iobi5zbGljZSgwLHIrMSkuam9pbihcIi5cIikrXCIgaXMgYWxyZWFkeSBkZWZpbmVkIHdpdGggYSB2YWx1ZS5cIik7cmV0dXJuIHRbZV19LHQpfSh0aGlzLmJhc2UsdCksYT1yLnNsaWNlKC0xKTtyZXR1cm4gbiYmYSBpbiBzP3NbYV06c1thXT1lfSxpbml0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuc2V0KHQsZSwhMCl9LHVuc2V0OmZ1bmN0aW9uKHQpe3ZhciBlPW8odCksbj10aGlzLmdldChlLnNsaWNlKDAsLTEpKTtuJiZkZWxldGUgbltlLnNsaWNlKC0xKV19LGF1ZzpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldCh0KSxuPWkudG9SZWFsQXJyYXkoYXJndW1lbnRzKS5zbGljZSgxKTtpZihlPXZvaWQgMCE9PWU/ZTp7fSxuLnVuc2hpZnQoZSksIW4uZXZlcnkoaS5pc09iamVjdCkpdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGF1Z21lbnQgbm9uLW9iamVjdC5cIik7cmV0dXJuIHRoaXMuc2V0KHQsaS5hdWcuYXBwbHkobnVsbCxuKSl9LGNhbGw6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXQodCksbj1pLnRvUmVhbEFycmF5KGFyZ3VtZW50cykuc2xpY2UoMSk7aWYoIWkuaXNUeXBlKFwiZnVuY3Rpb25cIixlKSl0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBcIit0K1wiZG9lcyBub3QgZXhpc3QuXCIpO3JldHVybiBlLmFwcGx5KG51bGwsbil9LGZ1bGxQYXRoOmZ1bmN0aW9uKHQpe3ZhciBlPW8odCk7cmV0dXJuIGUudW5zaGlmdCh0aGlzLm5hbWUpLGUuam9pbihcIi5cIil9fSksdC5leHBvcnRzPXN9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEpLkhUTUxFbGVtZW50LGk9ci5wcm90b3R5cGUubWF0Y2hlc3x8ci5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yfHxyLnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fHIucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3Rvcnx8ci5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3J8fHIucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3I7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7aWYoaSlyZXR1cm4gaS5jYWxsKHQsZSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigwKSxpPW4oNyksbz17YmluZDpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLl9oYW5kbGVycz10aGlzLl9oYW5kbGVyc3x8e30sdGhpcy5faGFuZGxlcnNbdF09dGhpcy5faGFuZGxlcnNbdF18fFtdLHRoaXMuX2hhbmRsZXJzW3RdLnB1c2goZSl9LHVuYmluZDpmdW5jdGlvbih0LGUpe3ZhciBuO3RoaXMuX2hhbmRsZXJzJiZ0aGlzLl9oYW5kbGVyc1t0XSYmKGU/KG49dGhpcy5faGFuZGxlcnNbdF0uaW5kZXhPZihlKSk+PTAmJnRoaXMuX2hhbmRsZXJzW3RdLnNwbGljZShuLDEpOnRoaXMuX2hhbmRsZXJzW3RdPVtdKX0sdHJpZ2dlcjpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuX2hhbmRsZXJzJiZ0aGlzLl9oYW5kbGVyc1t0XTsoZT1lfHx7fSkudHlwZT10LG4mJm4uZm9yRWFjaChmdW5jdGlvbih0KXtyLmFzeW5jKGkodCx0aGlzLGUpKX0pfX07dC5leHBvcnRzPXtFbWl0dGVyOm8sbWFrZUVtaXR0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gci5hdWcoZnVuY3Rpb24oKXt9LG8pfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDkxKSxpPW4oOTMpLG89big2KSxzPW4oMjMpLGE9big3KSx1PW4oMCksYz1uZXcgaShmdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gdFtlLl9jbGFzc05hbWVdPXRbZS5fY2xhc3NOYW1lXXx8W10sdFtlLl9jbGFzc05hbWVdLnB1c2goZSksdH0se30pfSh0Lm1hcChyLmZyb21SYXdUYXNrKSk7dS5mb3JJbihlLGZ1bmN0aW9uKHQsZSl7cy5hbGxTZXR0bGVkKGUubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LmluaXRpYWxpemUoKX0pKS50aGVuKGZ1bmN0aW9uKCl7ZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe28uYWxsKFt0Lmh5ZHJhdGUoKSx0Lmluc2VydEludG9Eb20oKV0pLnRoZW4oYSh0LnJlbmRlcix0KSkudGhlbihhKHQuc3VjY2Vzcyx0KSxhKHQuZmFpbCx0KSl9KX0pfSl9KTt0LmV4cG9ydHM9e2FkZFdpZGdldDpmdW5jdGlvbih0KXtyZXR1cm4gYy5hZGQodCl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTcpO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gci53cml0ZShmdW5jdGlvbigpe3QmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpfSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big5NSksaT1uKDcyKSxvPW5ldyhuKDEwNSkpKGZ1bmN0aW9uKHQpeyghZnVuY3Rpb24odCl7cmV0dXJuIDE9PT10Lmxlbmd0aCYmaS5jYW5GbHVzaE9uZUl0ZW0odFswXSl9KHQpP2Z1bmN0aW9uKHQpe3IuaW5pdCgpLHQuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT10LmlucHV0Lm5hbWVzcGFjZSxuPXQuaW5wdXQuZGF0YSxpPXQuaW5wdXQub2Zmc2l0ZSxvPXQuaW5wdXQudmVyc2lvbjtyLmNsaWVudEV2ZW50KGUsbixpLG8pfSksci5mbHVzaCgpLnRoZW4oZnVuY3Rpb24oKXt0LmZvckVhY2goZnVuY3Rpb24odCl7dC50YXNrRG9uZURlZmVycmVkLnJlc29sdmUoKX0pfSxmdW5jdGlvbigpe3QuZm9yRWFjaChmdW5jdGlvbih0KXt0LnRhc2tEb25lRGVmZXJyZWQucmVqZWN0KCl9KX0pfTpmdW5jdGlvbih0KXt0LmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9dC5pbnB1dC5uYW1lc3BhY2Usbj10LmlucHV0LmRhdGEscj10LmlucHV0Lm9mZnNpdGUsbz10LmlucHV0LnZlcnNpb247aS5jbGllbnRFdmVudChlLG4scixvKSx0LnRhc2tEb25lRGVmZXJyZWQucmVzb2x2ZSgpfSl9KSh0KX0pO3QuZXhwb3J0cz17c2NyaWJlOmZ1bmN0aW9uKHQsZSxuLHIpe3JldHVybiBvLmFkZCh7bmFtZXNwYWNlOnQsZGF0YTplLG9mZnNpdGU6bix2ZXJzaW9uOnJ9KX0scGF1c2U6ZnVuY3Rpb24oKXtvLnBhdXNlKCl9LHJlc3VtZTpmdW5jdGlvbigpe28ucmVzdW1lKCl9fX0sZnVuY3Rpb24odCxlLG4pe24oMTgpLHQuZXhwb3J0cz17bG9nOmZ1bmN0aW9uKHQsZSl7fX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEpO2Z1bmN0aW9uIGkodCl7cmV0dXJuKHQ9dHx8cikuZ2V0U2VsZWN0aW9uJiZ0LmdldFNlbGVjdGlvbigpfXQuZXhwb3J0cz17Z2V0U2VsZWN0aW9uOmksZ2V0U2VsZWN0ZWRUZXh0OmZ1bmN0aW9uKHQpe3ZhciBlPWkodCk7cmV0dXJuIGU/ZS50b1N0cmluZygpOlwiXCJ9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMyksaT1uKDEpLG89bigyKSxzPTJlNDt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IG8sbj1yLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7cmV0dXJuIG4ub25sb2FkPW4ub25lcnJvcj1mdW5jdGlvbigpe2kuc2V0VGltZW91dChlLnJlc29sdmUsNTApfSxuLnNyYz10LGkuc2V0VGltZW91dChlLnJlamVjdCxzKSxlLnByb21pc2V9fSxmdW5jdGlvbih0LGUsbil7dmFyIHIsaT1uKDEwKSxvPW4oMykscz1uKDEpLGE9bigzMyksdT1uKDUxKSxjPW4oNSksZD1uKDIxKSxmPVwiY3NwdGVzdFwiO3QuZXhwb3J0cz17aW5saW5lU3R5bGU6ZnVuY3Rpb24oKXt2YXIgdD1mK2QuZ2VuZXJhdGUoKSxlPW8uY3JlYXRlRWxlbWVudChcImRpdlwiKSxuPW8uY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLGw9XCIuXCIrdCtcIiB7IHZpc2liaWxpdHk6IGhpZGRlbjsgfVwiO3JldHVybiEhby5ib2R5JiYoYy5hc0Jvb2xlYW4oYS52YWwoXCJ3aWRnZXRzOmNzcFwiKSkmJihyPSExKSx2b2lkIDAhPT1yP3I6KGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixpLmFkZChlLHQpLG4udHlwZT1cInRleHQvY3NzXCIsbi5hcHBlbmRDaGlsZChvLmNyZWF0ZVRleHROb2RlKGwpKSxvLmJvZHkuYXBwZW5kQ2hpbGQobiksby5ib2R5LmFwcGVuZENoaWxkKGUpLHI9XCJoaWRkZW5cIj09PXMuZ2V0Q29tcHV0ZWRTdHlsZShlKS52aXNpYmlsaXR5LHUoZSksdShuKSxyKSl9fX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtyZXR1cm57d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTAzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5kZWZpbmUoXCJjcmVhdGVFbGVtZW50XCIsciksdC5kZWZpbmUoXCJjcmVhdGVGcmFnbWVudFwiLHIpLHQuZGVmaW5lKFwiaHRtbFRvRWxlbWVudFwiLHIpLHQuZGVmaW5lKFwiaGFzU2VsZWN0ZWRUZXh0XCIsciksdC5kZWZpbmUoXCJhZGRSb290Q2xhc3NcIixyKSx0LmRlZmluZShcInJlbW92ZVJvb3RDbGFzc1wiLHIpLHQuZGVmaW5lKFwiaGFzUm9vdENsYXNzXCIsciksdC5kZWZpbmUoXCJwcmVwZW5kU3R5bGVTaGVldFwiLHIpLHQuZGVmaW5lKFwiYXBwZW5kU3R5bGVTaGVldFwiLHIpLHQuZGVmaW5lKFwicHJlcGVuZENzc1wiLHIpLHQuZGVmaW5lKFwiYXBwZW5kQ3NzXCIsciksdC5kZWZpbmUoXCJtYWtlVmlzaWJsZVwiLHIpLHQuZGVmaW5lKFwiaW5qZWN0V2lkZ2V0RWxcIixyKSx0LmRlZmluZShcIm1hdGNoSGVpZ2h0VG9Db250ZW50XCIsciksdC5kZWZpbmUoXCJtYXRjaFdpZHRoVG9Db250ZW50XCIscil9fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZSxuPSExO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBuP2U6KG49ITAsZT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9fX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMyksaT1uKDEzKSxvPW4oMjYpLHM9bigxMTgpLGE9bigxNCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gbmV3IGkocyxvLGEuQlJPQURDQVNULHQsZSxuLHtzYW5kYm94V3JhcHBlckVsOnIuY3JlYXRlRWxlbWVudChcImRpdlwiKX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTMpLGk9bigxMjApLG89bigxMjEpLHM9bigxNCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gbmV3IHIoaSxvLHMuRE1fQlVUVE9OLHQsZSxuKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDI1KSxpPW4oMTIyKTt0LmV4cG9ydHM9ci5idWlsZChbaV0pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMyksaT1uKDEyNSksbz1uKDI2KSxzPW4oMTQpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIG5ldyByKGksbyxzLkZPTExPV19CVVRUT04sdCxlLG4pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTMpLGk9bigxMjcpLG89bigzMCkscz1uKDE0KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBuZXcgcihpLG8scy5NT01FTlQsdCxlLG4pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTMpLGk9bigxMjkpLG89bigzMCkscz1uKDE0KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBuZXcgcihpLG8scy5QRVJJU0NPUEUsdCxlLG4pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTMxKSxpPW4oMTMyKSxvPW4oMTM2KSxzPW4oMTM4KSxhPW4oMTQwKSx1PXtjb2xsZWN0aW9uOmksbGlrZXM6byxsaXN0OnMscHJvZmlsZTphLHVybDpkfSxjPVthLG8saSxzXTtmdW5jdGlvbiBkKHQpe3JldHVybiByKGMsZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBuZXcgZSh0KX1jYXRjaCh0KXt9fSl9dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0P2Z1bmN0aW9uKHQpe3ZhciBlLG47cmV0dXJuIGU9KHQuc291cmNlVHlwZStcIlwiKS50b0xvd2VyQ2FzZSgpLChuPXVbZV0pP25ldyBuKHQpOm51bGx9KHQpfHxkKHQpOm51bGx9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzKSxpPW4oMTMpLG89bigyNikscz1uKDE0MiksYT1uKDE0KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4pe3ZhciB1PXIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gbmV3IGkocyxvLGEuVElNRUxJTkUsdCxlLG4se3NhbmRib3hXcmFwcGVyRWw6dX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMyksaT1uKDEzKSxvPW4oMjYpLHM9bigxNDQpLGE9bigxNCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gbmV3IGkocyxvLGEuVFdFRVQsdCxlLG4se3NhbmRib3hXcmFwcGVyRWw6ci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpfSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMyksaT1uKDE0Niksbz1uKDI2KSxzPW4oMTQpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7dmFyIGE9dCYmdC50eXBlfHxcInNoYXJlXCIsdT1cImhhc2h0YWdcIj09YT9zLkhBU0hUQUdfQlVUVE9OOlwibWVudGlvblwiPT1hP3MuTUVOVElPTl9CVVRUT046cy5TSEFSRV9CVVRUT047cmV0dXJuIG5ldyByKGksbyx1LHQsZSxuKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDUyKSxpPW4oMzgpLG89bigwKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9e3dpZGdldF9vcmlnaW46aS5yb290RG9jdW1lbnRMb2NhdGlvbigpLHdpZGdldF9mcmFtZTppLmlzRnJhbWVkKCk/aS5jdXJyZW50RG9jdW1lbnRMb2NhdGlvbigpOm51bGwsZHVyYXRpb25fbXM6dC5kdXJhdGlvbixpdGVtX2lkczp0LndpZGdldElkc3x8W119LG49by5hdWcodC5uYW1lc3BhY2Use3BhZ2U6XCJwYWdlXCIsY29tcG9uZW50OlwicGVyZm9ybWFuY2VcIn0pO3Iuc2NyaWJlKG4sZSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigwKSxpPW4oMTMzKSxvPVtcImFyXCIsXCJmYVwiLFwiaGVcIixcInVyXCJdO3QuZXhwb3J0cz17aXNSdGxMYW5nOmZ1bmN0aW9uKHQpe3JldHVybiB0PVN0cmluZyh0KS50b0xvd2VyQ2FzZSgpLHIuY29udGFpbnMobyx0KX0sbWF0Y2hMYW5ndWFnZTpmdW5jdGlvbih0KXtyZXR1cm4gdD0odD0odHx8XCJcIikudG9Mb3dlckNhc2UoKSkucmVwbGFjZShcIl9cIixcIi1cIiksaSh0KT90Oih0PXQucmVwbGFjZSgvLS4qLyxcIlwiKSxpKHQpP3Q6XCJlblwiKX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big1MyksaT1uKDE2KSxvPW4oMzcpLHM9bigyOCksYT1uKDApLHU9big5KSxjPW4oNiksZD11LmdldChcInNjcmliZUNhbGxiYWNrXCIpLGY9MjA4MyxsPVtdLGg9aS51cmwoby5DTElFTlRfRVZFTlRfRU5EUE9JTlQse2RudDowLGw6XCJcIn0pLHA9ZW5jb2RlVVJJQ29tcG9uZW50KGgpLmxlbmd0aDtmdW5jdGlvbiBtKHQsZSxuLHIsaSl7dmFyIHU9IWEuaXNPYmplY3QodCksZj0hIWUmJiFhLmlzT2JqZWN0KGUpO2lmKCF1JiYhZilyZXR1cm4gZCYmZChhcmd1bWVudHMpLGU9ZXx8e30sYy5yZXNvbHZlKHYoby5mb3JtYXRDbGllbnRFdmVudE5hbWVzcGFjZSh0KSxvLmZvcm1hdENsaWVudEV2ZW50RGF0YShlLG4scikscy5zZXR0aW5nc1NjcmliZSgpLGkpKX1mdW5jdGlvbiB2KHQsZSxuLHMpe3ZhciB1O24mJmEuaXNPYmplY3QodCkmJmEuaXNPYmplY3QoZSkmJihyLmxvZyh0LGUpLHU9by5mbGF0dGVuQ2xpZW50RXZlbnRQYXlsb2FkKHQsZSkscz1hLmF1Zyh7fSxzLHtsOm8uc3RyaW5naWZ5KHUpfSksdS5kbnQmJihzLmRudD0xKSx3KGkudXJsKG4scykpKX1mdW5jdGlvbiBnKHQpe3JldHVybiBsLnB1c2godCksbH1mdW5jdGlvbiB3KHQpe3JldHVybihuZXcgSW1hZ2UpLnNyYz10fXQuZXhwb3J0cz17Y2FuRmx1c2hPbmVJdGVtOmZ1bmN0aW9uKHQpe3ZhciBlPW8uc3RyaW5naWZ5KHQpLG49ZW5jb2RlVVJJQ29tcG9uZW50KGUpLmxlbmd0aCszO3JldHVybiBwK248Zn0sX2VucXVldWVSYXdPYmplY3Q6ZyxzY3JpYmU6dixjbGllbnRFdmVudDptLGVucXVldWVDbGllbnRFdmVudDpmdW5jdGlvbih0LGUsbixyKXt2YXIgaT0hYS5pc09iamVjdCh0KSxzPSEhZSYmIWEuaXNPYmplY3QoZSk7aWYoIWkmJiFzKXJldHVybiBnKG8uZmxhdHRlbkNsaWVudEV2ZW50UGF5bG9hZChvLmZvcm1hdENsaWVudEV2ZW50TmFtZXNwYWNlKHQpLG8uZm9ybWF0Q2xpZW50RXZlbnREYXRhKGUsbixyKSkpfSxpbnRlcmFjdGlvbjpmdW5jdGlvbih0LGUsbixyKXt2YXIgaT1vLmV4dHJhY3RUZXJtc0Zyb21ET00odC50YXJnZXR8fHQuc3JjRWxlbWVudCk7cmV0dXJuIGkuYWN0aW9uPXJ8fFwiY2xpY2tcIixtKGksZSxuKX0scGxhY2VQaXhlbDp3fX0sZnVuY3Rpb24odCl7dC5leHBvcnRzPXt0d2VldEJ1dHRvbkh0bWxQYXRoOlwiL3dpZGdldHMvdHdlZXRfYnV0dG9uLjEyMjdhNTY3NDA3MmUwODBmZmIxYmExNGFjMGMxMDc5Lnt7bGFuZ319Lmh0bWxcIixmb2xsb3dCdXR0b25IdG1sUGF0aDpcIi93aWRnZXRzL2ZvbGxvd19idXR0b24uMTIyN2E1Njc0MDcyZTA4MGZmYjFiYTE0YWMwYzEwNzkue3tsYW5nfX0uaHRtbFwiLGh1Ykh0bWxQYXRoOlwiL3dpZGdldHMvaHViLmh0bWxcIix3aWRnZXRJZnJhbWVIdG1sUGF0aDpcIi93aWRnZXRzL3dpZGdldF9pZnJhbWUuMTIyN2E1Njc0MDcyZTA4MGZmYjFiYTE0YWMwYzEwNzkuaHRtbFwiLHJlc291cmNlQmFzZVVybDpcImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb21cIn19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDMpLGk9big4KSxvPW4oNCk7ZnVuY3Rpb24gcyh0LGUpe3ZhciBuLHI7cmV0dXJuIGU9ZXx8aSwvXmh0dHBzPzpcXC9cXC8vLnRlc3QodCk/dDovXlxcL1xcLy8udGVzdCh0KT9lLnByb3RvY29sK3Q6KG49ZS5ob3N0KyhlLnBvcnQubGVuZ3RoP1wiOlwiK2UucG9ydDpcIlwiKSwwIT09dC5pbmRleE9mKFwiL1wiKSYmKChyPWUucGF0aG5hbWUuc3BsaXQoXCIvXCIpKS5wb3AoKSxyLnB1c2godCksdD1cIi9cIityLmpvaW4oXCIvXCIpKSxbZS5wcm90b2NvbCxcIi8vXCIsbix0XS5qb2luKFwiXCIpKX10LmV4cG9ydHM9e2Fic29sdXRpemU6cyxnZXRDYW5vbmljYWxVUkw6ZnVuY3Rpb24oKXtmb3IodmFyIHQsZT1yLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKSxuPTA7ZVtuXTtuKyspaWYoXCJjYW5vbmljYWxcIj09KHQ9ZVtuXSkucmVsKXJldHVybiBzKHQuaHJlZil9LGdldFNjcmVlbk5hbWVGcm9tUGFnZTpmdW5jdGlvbigpe2Zvcih2YXIgdCxlLG4saT1bci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIiksci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIildLHM9MCxhPTAsdT0vXFxibWVcXGIvO3Q9aVtzXTtzKyspZm9yKGE9MDtlPXRbYV07YSsrKWlmKHUudGVzdChlLnJlbCkmJihuPW8uc2NyZWVuTmFtZShlLmhyZWYpKSlyZXR1cm4gbn0sZ2V0SG9zdG5hbWU6ZnVuY3Rpb24odCl7dmFyIGU9ci5jcmVhdGVFbGVtZW50KFwiYVwiKTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsdCksZS5ob3N0bmFtZX19fSxmdW5jdGlvbih0KXt0LmV4cG9ydHM9e1RXRUVUOjAsUkVUV0VFVDoxMCxDVVNUT01fVElNRUxJTkU6MTcsTElWRV9WSURFT19FVkVOVDoyOCxRVU9URV9UV0VFVDoyM319LCwsLCwsLCwsZnVuY3Rpb24odCxlLG4pe3ZhciByLGk9bigyKSxvPW4oMykscz1uKDg2KSxhPW4oNDYpLHU9big5KSxjPW4oODcpLGQ9bigyMiksZj1uKDkwKSxsPW4oMTQ3KSxoPW4oMTU2KSxwPW4oMTU3KSxtPW4oMjcpLHY9bigzNCk7bigxNTgpLG0uZW1pdHRlci50cmlnZ2VyKG0uU1RBUlQpLHUuc2V0KFwid2lkZ2V0cy5pbml0XCIsITApLGEuc2V0KFwiaW5pdFwiLCEwKSxwKCkscj1uZXcgaSxzLmV4cG9zZVJlYWR5UHJvbWlzZShyLnByb21pc2UsYS5iYXNlLFwiX2VcIiksYS5zZXQoXCJ3aWRnZXRzXCIsbCksYS5zZXQoXCJ3aWRnZXRzLmxvYWRcIixmLmxvYWQpLGEuc2V0KFwiZXZlbnRzXCIsZCksaChmdW5jdGlvbigpe3YubG9hZCgpLHIucmVzb2x2ZShhLmJhc2UpLGMuYXR0YWNoVG8obyksZi5sb2FkUGFnZSgpfSl9LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPW5hdmlnYXRvcn0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNyk7dC5leHBvcnRzPXtleHBvc2VSZWFkeVByb21pc2U6ZnVuY3Rpb24odCxlLG4pe2UucmVhZHk9cih0LnRoZW4sdCksbiYmQXJyYXkuaXNBcnJheShlW25dKSYmKGVbbl0uZm9yRWFjaChyKHQudGhlbix0KSksZGVsZXRlIGVbbl0pfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDgpLGk9bigzNSksbz1uKDM2KSxzPW4oODgpLGE9big0KTtmdW5jdGlvbiB1KHQpe3ZhciBlLG4sdTt0LmFsdEtleXx8dC5tZXRhS2V5fHx0LnNoaWZ0S2V5fHwoZT1vLmNsb3Nlc3QoZnVuY3Rpb24odCl7cmV0dXJuXCJBXCI9PT10LnRhZ05hbWV8fFwiQVJFQVwiPT09dC50YWdOYW1lfSx0LnRhcmdldCkpJiZhLmlzSW50ZW50VVJMKGUuaHJlZikmJihuPShuPShuPVt1PWUuaHJlZixcIm9yaWdpbmFsX3JlZmVyZXI9XCIrci5ocmVmXS5qb2luKC0xPT11LmluZGV4T2YoXCI/XCIpP1wiP1wiOlwiJlwiKSkucmVwbGFjZSgvXmh0dHBbOl0vLFwiaHR0cHM6XCIpKS5yZXBsYWNlKC9eXFwvXFwvLyxcImh0dHBzOi8vXCIpLHMub3BlbihuLGUpLGkucHJldmVudERlZmF1bHQodCkpfXQuZXhwb3J0cz17YXR0YWNoVG86ZnVuY3Rpb24odCl7dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix1LCExKX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0KSxpPW4oODkpLG89bigyMikscz1uKDE2KSxhPXtmYXZvcml0ZTpbXCJmYXZvcml0ZVwiLFwibGlrZVwiXSxmb2xsb3c6W1wiZm9sbG93XCJdLGxpa2U6W1wiZmF2b3JpdGVcIixcImxpa2VcIl0scmV0d2VldDpbXCJyZXR3ZWV0XCJdLHR3ZWV0OltcInR3ZWV0XCJdfTtmdW5jdGlvbiB1KHQpe3RoaXMuc3JjRWw9W10sdGhpcy5lbGVtZW50PXR9dS5vcGVuPWZ1bmN0aW9uKHQsZSxuKXt2YXIgdT0oci5pbnRlbnRUeXBlKHQpfHxcIlwiKS50b0xvd2VyQ2FzZSgpO3IuaXNUd2l0dGVyVVJMKHQpJiYoZnVuY3Rpb24odCxlKXtpLm9wZW4odCxlKX0odCxuKSxlJiZvLnRyaWdnZXIoXCJjbGlja1wiLHt0YXJnZXQ6ZSxyZWdpb246XCJpbnRlbnRcIix0eXBlOlwiY2xpY2tcIixkYXRhOnt9fSksZSYmYVt1XSYmYVt1XS5mb3JFYWNoKGZ1bmN0aW9uKG4pe28udHJpZ2dlcihuLHt0YXJnZXQ6ZSxyZWdpb246XCJpbnRlbnRcIix0eXBlOm4sZGF0YTpmdW5jdGlvbih0LGUpe3ZhciBuPXMuZGVjb2RlVVJMKGUpO3N3aXRjaCh0KXtjYXNlXCJmYXZvcml0ZVwiOmNhc2VcImxpa2VcIjpyZXR1cm57dHdlZXRfaWQ6bi50d2VldF9pZH07Y2FzZVwiZm9sbG93XCI6cmV0dXJue3NjcmVlbl9uYW1lOm4uc2NyZWVuX25hbWUsdXNlcl9pZDpuLnVzZXJfaWR9O2Nhc2VcInJldHdlZXRcIjpyZXR1cm57c291cmNlX3R3ZWV0X2lkOm4udHdlZXRfaWR9O2RlZmF1bHQ6cmV0dXJue319fSh1LHQpfSl9KSl9LHQuZXhwb3J0cz11fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxKSxpPW4oMzUpLG89bigzNikscz1uKDIwKSxhPW4oNCksdT1uKDIxKSxjPVwiaW50ZW50X1wiO2Z1bmN0aW9uIGQodCl7dGhpcy53aW49dH1kLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZSYmXCJjbGlja1wiPT1lLnR5cGUmJm8uY2xvc2VzdChcImFcIixlLnRhcmdldCkscj1lJiYoZS5hbHRLZXl8fGUubWV0YUtleXx8ZS5zaGlmdEtleSksZD1uJiYocy5pb3MoKXx8cy5hbmRyb2lkKCkpO2lmKGEuaXNUd2l0dGVyVVJMKHQpKXJldHVybiByfHxkP3RoaXM6KHRoaXMubmFtZT1jK3UuZ2VuZXJhdGUoKSx0aGlzLnBvcHVwPXRoaXMud2luLm9wZW4odCx0aGlzLm5hbWUpLGUmJmkucHJldmVudERlZmF1bHQoZSksdGhpcyl9LGQub3Blbj1mdW5jdGlvbih0LGUpe3JldHVybiBuZXcgZChyKS5vcGVuKHQsZSl9LHQuZXhwb3J0cz1kfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzKSxpPW4oNiksbz1uKDIzKSxzPW4oNTApLGE9bigzMyksdT1uKDkpLGM9big1MiksZD1uKDIyKSxmPW4oNSksbD1uKDApLGg9bigzNCkscD1uKDEwOCksbT1uKDI3KTtmdW5jdGlvbiB2KCl7dmFyIHQ9YS52YWwoXCJ3aWRnZXRzOmF1dG9sb2FkXCIpfHwhMDtyZXR1cm4hZi5pc0ZhbHNlVmFsdWUodCkmJihmLmlzVHJ1dGhWYWx1ZSh0KT9yLmJvZHk6ci5xdWVyeVNlbGVjdG9yQWxsKHQpKX1mdW5jdGlvbiBnKHQsZSl7dmFyIG4saTtyZXR1cm4gdD0odD10fHxyLmJvZHkpLmxlbmd0aD9sLnRvUmVhbEFycmF5KHQpOlt0XSxjLnBhdXNlKCksaT1mdW5jdGlvbih0LGUpe3JldHVybiB0LnJlZHVjZShmdW5jdGlvbih0LG4pe3JldHVybiB0LmNvbmNhdChwLnJlZHVjZShmdW5jdGlvbih0LHIpe3JldHVybiB0LmNvbmNhdChyKG4sZSkpfSxbXSkpfSxbXSl9KHQsZSksbS5lbWl0dGVyLnRyaWdnZXIobS5BTExfV0lER0VUU19SRU5ERVJfU1RBUlQse3dpZGdldHM6aX0pLG49by5hbGxSZXNvbHZlZChpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gcy5hZGRXaWRnZXQodCl9KSkudGhlbihmdW5jdGlvbih0KXtkLnRyaWdnZXIoXCJsb2FkZWRcIix7d2lkZ2V0czp0fSksdCYmdC5sZW5ndGgmJm0uZW1pdHRlci50cmlnZ2VyKG0uQUxMX1dJREdFVFNfUkVOREVSX0VORCx7d2lkZ2V0czp0fSl9KSxvLmFsd2F5cyhuLGZ1bmN0aW9uKCl7Yy5yZXN1bWUoKX0pLG59ZnVuY3Rpb24gdyh0KXtyZXR1cm4gaC5nZXRFeHBlcmltZW50cygpLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIGcodCxlKX0pfXQuZXhwb3J0cz17bG9hZDp3LGxvYWRQYWdlOmZ1bmN0aW9uKCl7dmFyIHQ9digpO3JldHVybiExPT09dD9pLnJlc29sdmUoKToodS5zZXQoXCJ3aWRnZXRzLmxvYWRlZFwiLCEwKSx3KHQpKX0sX2dldFBhZ2VMb2FkVGFyZ2V0OnZ9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMCksaT1uKDE3KSxvPW4oMjIpLHM9big1MSksYT1uKDYpLHU9bigyMyk7ZnVuY3Rpb24gYyh0LGUpe3RoaXMuX3dpZGdldD1udWxsLHRoaXMuX3NhbmRib3g9bnVsbCx0aGlzLl9oeWRyYXRlZD0hMSx0aGlzLl9pbnNlcnRlZEludG9Eb209ITEsdGhpcy5fU2FuZGJveD10LlNhbmRib3gsdGhpcy5fZmFjdG9yeT10LmZhY3RvcnksdGhpcy5fd2lkZ2V0UGFyYW1zPXQucGFyYW1ldGVycyx0aGlzLl9yZXNvbHZlPWUsdGhpcy5fY2xhc3NOYW1lPXQuY2xhc3NOYW1lLHRoaXMuX3JlbmRlcmVkQ2xhc3NOYW1lPXQuY2xhc3NOYW1lK1wiLXJlbmRlcmVkXCIsdGhpcy5fZXJyb3JDbGFzc05hbWU9dC5jbGFzc05hbWUrXCItZXJyb3JcIix0aGlzLl9zcmNFbD10LnNyY0VsLHRoaXMuX3RhcmdldEdsb2JhbD1mdW5jdGlvbih0KXtyZXR1cm4odC5zcmNFbHx8dC50YXJnZXRFbCkub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld30odCksdGhpcy5fc2FuZGJveFdyYXBwZXJFbD10Lm9wdGlvbnM/dC5vcHRpb25zLnNhbmRib3hXcmFwcGVyRWw6bnVsbCx0aGlzLl9pbnNlcnRpb25TdHJhdGVneT1mdW5jdGlvbihlKXt2YXIgbixyPXQuc3JjRWwsaT10LnRhcmdldEVsLG89dC5jbGFzc05hbWUscz10LmNsYXNzTmFtZStcIi1yZW5kZXJlZFwiLGE9dC5vcHRpb25zP3Qub3B0aW9ucy5zYW5kYm94V3JhcHBlckVsOm51bGw7YT8oYS5hcHBlbmRDaGlsZChlKSxhLmNsYXNzTGlzdC5hZGQobyxzKSxuPWEpOm49ZSxyP2kuaW5zZXJ0QmVmb3JlKG4scik6aS5hcHBlbmRDaGlsZChuKX19Yy5mcm9tUmF3VGFzaz1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGModC5pbnB1dCx0LnRhc2tEb25lRGVmZXJyZWQucmVzb2x2ZSl9LGMucHJvdG90eXBlLmluaXRpYWxpemU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9bmV3IHRoaXMuX1NhbmRib3godGhpcy5fdGFyZ2V0R2xvYmFsKTtyZXR1cm4gdGhpcy5fZmFjdG9yeSh0aGlzLl93aWRnZXRQYXJhbXMsZSkudGhlbihmdW5jdGlvbihuKXtyZXR1cm4gdC5fd2lkZ2V0PW4sdC5fc2FuZGJveD1lLG4uX3NhbmRib3hXcmFwcGVyRWw9dC5fc2FuZGJveFdyYXBwZXJFbCxufSl9LGMucHJvdG90eXBlLmluc2VydEludG9Eb209ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dGhpcy5fc2FuZGJveFdyYXBwZXJFbD9cIlwiOlt0aGlzLl9jbGFzc05hbWUsdGhpcy5fcmVuZGVyZWRDbGFzc05hbWVdLmpvaW4oXCIgXCIpO3JldHVybiB0aGlzLl93aWRnZXQ/dGhpcy5fc2FuZGJveC5pbnNlcnQodGhpcy5fd2lkZ2V0LmlkLHtjbGFzczplfSxudWxsLHRoaXMuX2luc2VydGlvblN0cmF0ZWd5KS50aGVuKGZ1bmN0aW9uKCl7dC5faW5zZXJ0ZWRJbnRvRG9tPSEwfSk6YS5yZWplY3QobmV3IEVycm9yKFwiY2Fubm90IGluc2VydCB3aWRnZXQgaW50byBET00gYmVmb3JlIGl0IGlzIGluaXRpYWxpemVkXCIpKX0sYy5wcm90b3R5cGUuaHlkcmF0ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIHRoaXMuX3dpZGdldD90aGlzLl93aWRnZXQuaHlkcmF0ZSgpLnRoZW4oZnVuY3Rpb24oKXt0Ll9oeWRyYXRlZD0hMH0pOmEucmVqZWN0KG5ldyBFcnJvcihcImNhbm5vdCBoeWRyYXRlIHdpZGdldCBiZWZvcmUgaXQgaXMgaW5pdGlhbGl6ZWRcIikpfSxjLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO2Z1bmN0aW9uIGUoZSl7dmFyIG49dC5fc2FuZGJveFdyYXBwZXJFbD90Ll9zYW5kYm94V3JhcHBlckVsOnQuX3NhbmRib3guc2FuZGJveEVsO3JldHVybiBzKG4pLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYS5yZWplY3QoZSl9KX1yZXR1cm4gdGhpcy5faHlkcmF0ZWQ/dGhpcy5faW5zZXJ0ZWRJbnRvRG9tP3QuX3dpZGdldC5yZW5kZXIodC5fc2FuZGJveCkudGhlbihmdW5jdGlvbigpe3JldHVybiB0Ll9zYW5kYm94Lm9uUmVzaXplKGZ1bmN0aW9uKCl7cmV0dXJuIHQuX3dpZGdldC5yZXNpemUoKS50aGVuKGZ1bmN0aW9uKCl7dmFyIGU9dC5fc2FuZGJveFdyYXBwZXJFbD90Ll9zYW5kYm94V3JhcHBlckVsOnQuX3NhbmRib3guc2FuZGJveEVsO28udHJpZ2dlcihcInJlc2l6ZVwiLHt0YXJnZXQ6ZX0pfSl9KSx0Ll93aWRnZXQuc2hvdygpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBzKHQuX3NyY0VsKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHQuX3NhbmRib3guc2FuZGJveEVsfSl9LGUpOmUobmV3IEVycm9yKFwiY2Fubm90IHJlbmRlciB3aWRnZXQgYmVmb3JlIERPTSBpbnNlcnRpb25cIikpOmUobmV3IEVycm9yKFwiY2Fubm90IHJlbmRlciB3aWRnZXQgYmVmb3JlIGh5ZHJhdGlvblwiKSl9LGMucHJvdG90eXBlLmZhaWw9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5fZXJyb3JDbGFzc05hbWUsbj10Ll9zYW5kYm94V3JhcHBlckVsP3QuX3NhbmRib3hXcmFwcGVyRWw6dC5fc3JjRWw7cmV0dXJuIHRoaXMuX3NyY0VsP3UuYWx3YXlzKGkud3JpdGUoZnVuY3Rpb24oKXtyLmFkZChuLGUpfSksZnVuY3Rpb24oKXtvLnRyaWdnZXIoXCJyZW5kZXJlZFwiLHt0YXJnZXQ6bn0pLHQuX3Jlc29sdmUobil9KToodC5fcmVzb2x2ZSgpLGEucmVzb2x2ZSgpKX0sYy5wcm90b3R5cGUuc3VjY2Vzcz1mdW5jdGlvbigpe3ZhciB0PXRoaXMuX3NhbmRib3hXcmFwcGVyRWw/dGhpcy5fc2FuZGJveFdyYXBwZXJFbDp0aGlzLl9zYW5kYm94LnNhbmRib3hFbDtvLnRyaWdnZXIoXCJyZW5kZXJlZFwiLHt0YXJnZXQ6dH0pLHRoaXMuX3Jlc29sdmUodCl9LHQuZXhwb3J0cz1jfSxmdW5jdGlvbih0LGUsbil7dmFyIHI7IWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbih0KXtyZXR1cm4gd2luZG93LnNldFRpbWVvdXQodCwxZTMvNjApfTtmdW5jdGlvbiBvKCl7dGhpcy5mcmFtZXM9W10sdGhpcy5sYXN0SWQ9MCx0aGlzLnJhZj1pLHRoaXMuYmF0Y2g9e2hhc2g6e30scmVhZDpbXSx3cml0ZTpbXSxtb2RlOm51bGx9fW8ucHJvdG90eXBlLnJlYWQ9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLmFkZChcInJlYWRcIix0LGUpLHI9bi5pZDtyZXR1cm4gdGhpcy5iYXRjaC5yZWFkLnB1c2gobi5pZCksXCJyZWFkaW5nXCI9PT10aGlzLmJhdGNoLm1vZGV8fHRoaXMuYmF0Y2guc2NoZWR1bGVkP3I6KHRoaXMuc2NoZWR1bGVCYXRjaCgpLHIpfSxvLnByb3RvdHlwZS53cml0ZT1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuYWRkKFwid3JpdGVcIix0LGUpLHI9dGhpcy5iYXRjaC5tb2RlLGk9bi5pZDtyZXR1cm4gdGhpcy5iYXRjaC53cml0ZS5wdXNoKG4uaWQpLFwid3JpdGluZ1wiPT09cnx8XCJyZWFkaW5nXCI9PT1yfHx0aGlzLmJhdGNoLnNjaGVkdWxlZD9pOih0aGlzLnNjaGVkdWxlQmF0Y2goKSxpKX0sby5wcm90b3R5cGUuZGVmZXI9ZnVuY3Rpb24odCxlLG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIHQmJihuPWUsZT10LHQ9MSk7dmFyIHI9dGhpcyxpPXQtMTtyZXR1cm4gdGhpcy5zY2hlZHVsZShpLGZ1bmN0aW9uKCl7ci5ydW4oe2ZuOmUsY3R4Om59KX0pfSxvLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiB0aGlzLmNsZWFyRnJhbWUodCk7dD1OdW1iZXIodCk7dmFyIGU9dGhpcy5iYXRjaC5oYXNoW3RdO2lmKGUpe3ZhciBuPXRoaXMuYmF0Y2hbZS50eXBlXSxyPW4uaW5kZXhPZih0KTtkZWxldGUgdGhpcy5iYXRjaC5oYXNoW3RdLH5yJiZuLnNwbGljZShyLDEpfX0sby5wcm90b3R5cGUuY2xlYXJGcmFtZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmZyYW1lcy5pbmRleE9mKHQpO35lJiZ0aGlzLmZyYW1lcy5zcGxpY2UoZSwxKX0sby5wcm90b3R5cGUuc2NoZWR1bGVCYXRjaD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5zY2hlZHVsZSgwLGZ1bmN0aW9uKCl7dC5iYXRjaC5zY2hlZHVsZWQ9ITEsdC5ydW5CYXRjaCgpfSksdGhpcy5iYXRjaC5zY2hlZHVsZWQ9ITB9LG8ucHJvdG90eXBlLnVuaXF1ZUlkPWZ1bmN0aW9uKCl7cmV0dXJuKyt0aGlzLmxhc3RJZH0sby5wcm90b3R5cGUuZmx1c2g9ZnVuY3Rpb24odCl7Zm9yKHZhciBlO2U9dC5zaGlmdCgpOyl0aGlzLnJ1bih0aGlzLmJhdGNoLmhhc2hbZV0pfSxvLnByb3RvdHlwZS5ydW5CYXRjaD1mdW5jdGlvbigpe3RyeXt0aGlzLmJhdGNoLm1vZGU9XCJyZWFkaW5nXCIsdGhpcy5mbHVzaCh0aGlzLmJhdGNoLnJlYWQpLHRoaXMuYmF0Y2gubW9kZT1cIndyaXRpbmdcIix0aGlzLmZsdXNoKHRoaXMuYmF0Y2gud3JpdGUpLHRoaXMuYmF0Y2gubW9kZT1udWxsfWNhdGNoKHQpe3Rocm93IHRoaXMucnVuQmF0Y2goKSx0fX0sby5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10aGlzLnVuaXF1ZUlkKCk7cmV0dXJuIHRoaXMuYmF0Y2guaGFzaFtyXT17aWQ6cixmbjplLGN0eDpuLHR5cGU6dH19LG8ucHJvdG90eXBlLnJ1bj1mdW5jdGlvbih0KXt2YXIgZT10LmN0eHx8dGhpcyxuPXQuZm47aWYoZGVsZXRlIHRoaXMuYmF0Y2guaGFzaFt0LmlkXSwhdGhpcy5vbkVycm9yKXJldHVybiBuLmNhbGwoZSk7dHJ5e24uY2FsbChlKX1jYXRjaCh0KXt0aGlzLm9uRXJyb3IodCl9fSxvLnByb3RvdHlwZS5sb29wPWZ1bmN0aW9uKCl7dmFyIHQsZT10aGlzLG49dGhpcy5yYWYscj0hMTtmdW5jdGlvbiBpKCl7dmFyIHQ9ZS5mcmFtZXMuc2hpZnQoKTtlLmZyYW1lcy5sZW5ndGg/bihpKTplLmxvb3Bpbmc9ITEsdCYmdCgpfXRoaXMubG9vcGluZ3x8KHQ9c2V0VGltZW91dChmdW5jdGlvbigpe3I9ITAsaSgpfSw1MDApLG4oZnVuY3Rpb24oKXtyfHwoY2xlYXJUaW1lb3V0KHQpLGkoKSl9KSx0aGlzLmxvb3Bpbmc9ITApfSxvLnByb3RvdHlwZS5zY2hlZHVsZT1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmZyYW1lc1t0XT90aGlzLnNjaGVkdWxlKHQrMSxlKToodGhpcy5sb29wKCksdGhpcy5mcmFtZXNbdF09ZSl9O3ZhciBzPW5ldyBvO3ZvaWQgMCE9PXQmJnQuZXhwb3J0cz90LmV4cG9ydHM9czp2b2lkIDA9PT0ocj1mdW5jdGlvbigpe3JldHVybiBzfS5jYWxsKGUsbixlLHQpKXx8KHQuZXhwb3J0cz1yKX0oKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMiksaT1uKDk0KSxvPW4oNyk7ZnVuY3Rpb24gcyh0KXt0aGlzLl9pbnB1dHNRdWV1ZT1bXSx0aGlzLl90YXNrPXQsdGhpcy5faGFzRmx1c2hCZWVuU2NoZWR1bGVkPSExfXMucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXt2YXIgZT1uZXcgcjtyZXR1cm4gdGhpcy5faW5wdXRzUXVldWUucHVzaCh7aW5wdXQ6dCx0YXNrRG9uZURlZmVycmVkOmV9KSx0aGlzLl9oYXNGbHVzaEJlZW5TY2hlZHVsZWR8fCh0aGlzLl9oYXNGbHVzaEJlZW5TY2hlZHVsZWQ9ITAsaShvKHRoaXMuX2ZsdXNoLHRoaXMpKSksZS5wcm9taXNlfSxzLnByb3RvdHlwZS5fZmx1c2g9ZnVuY3Rpb24oKXt0cnl7dGhpcy5fdGFzay5jYWxsKG51bGwsdGhpcy5faW5wdXRzUXVldWUpfWNhdGNoKHQpe3RoaXMuX2lucHV0c1F1ZXVlLmZvckVhY2goZnVuY3Rpb24oZSl7ZS50YXNrRG9uZURlZmVycmVkLnJlamVjdCh0KX0pfXRoaXMuX2lucHV0c1F1ZXVlPVtdLHRoaXMuX2hhc0ZsdXNoQmVlblNjaGVkdWxlZD0hMX0sdC5leHBvcnRzPXN9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDQ1KS5Qcm9taXNlO3QuZXhwb3J0cz1yLl9hc2FwfSxmdW5jdGlvbih0LGUsbil7dmFyIHIsaSxvLHM9bigzKSxhPW4oMSksdT1uKDI5KSxjPW4oMTkpLGQ9bigyKSxmPW4oNiksbD1uKDUzKSxoPW4oMzcpLHA9bigwKSxtPW4oMzApLHY9big5KS5nZXQoXCJzY3JpYmVDYWxsYmFja1wiKSxnPU1hdGguZmxvb3IoMWUzKk1hdGgucmFuZG9tKCkpK1wiX1wiLHc9XCJydWZvdXMtZnJhbWUtXCIrZytcIi1cIix5PVwicnVmb3VzLWZvcm0tXCIrZytcIi1cIixiPTAsXz0hMSxFPW5ldyBkO2Z1bmN0aW9uIHgoKXt2YXIgdD1vLmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLGU9by5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksbj1vLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtyZXR1cm4gYisrLHQuYWN0aW9uPWguQ0xJRU5UX0VWRU5UX0VORFBPSU5ULHQubWV0aG9kPVwiUE9TVFwiLHQudGFyZ2V0PXcrYix0LmlkPXkrYixlLnR5cGU9XCJoaWRkZW5cIixlLm5hbWU9XCJkbnRcIixlLnZhbHVlPWMuZW5hYmxlZCgpLG4udHlwZT1cImhpZGRlblwiLG4ubmFtZT1cInRmd19yZWRpcmVjdFwiLG4udmFsdWU9aC5SVUZPVVNfUkVESVJFQ1QsdC5hcHBlbmRDaGlsZChlKSx0LmFwcGVuZENoaWxkKG4pLHR9ZnVuY3Rpb24gVCgpe3ZhciB0PXcrYjtyZXR1cm4gdSh7aWQ6dCxuYW1lOnQsd2lkdGg6MCxoZWlnaHQ6MCxib3JkZXI6MH0se2Rpc3BsYXk6XCJub25lXCJ9LG8uZG9jKX10LmV4cG9ydHM9e2NsaWVudEV2ZW50OmZ1bmN0aW9uKHQsZSxuLGkpeyhmdW5jdGlvbih0LGUpe3ZhciBuPSFwLmlzT2JqZWN0KHQpLHI9ISFlJiYhcC5pc09iamVjdChlKSxpPW58fHI7cmV0dXJuIGl9KSh0LGUpfHwodiYmdihhcmd1bWVudHMpLEUucHJvbWlzZS50aGVuKGZ1bmN0aW9uKCl7IWZ1bmN0aW9uKHQsZSl7dmFyIG4saSxzO3AuaXNPYmplY3QodCkmJnAuaXNPYmplY3QoZSkmJihsLmxvZyh0LGUpLHM9aC5mbGF0dGVuQ2xpZW50RXZlbnRQYXlsb2FkKHQsZSksKG49ci5maXJzdENoaWxkKS52YWx1ZT0rKCtuLnZhbHVlfHxzLmRudHx8MCksKGk9by5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnR5cGU9XCJoaWRkZW5cIixpLm5hbWU9XCJsXCIsaS52YWx1ZT1oLnN0cmluZ2lmeShzKSxyLmFwcGVuZENoaWxkKGkpKX0oaC5mb3JtYXRDbGllbnRFdmVudE5hbWVzcGFjZSh0KSxoLmZvcm1hdENsaWVudEV2ZW50RGF0YShlLG4saSkpfSkpfSxmbHVzaDpmdW5jdGlvbigpe3JldHVybiBFLnByb21pc2UudGhlbihmdW5jdGlvbigpe3ZhciB0O3JldHVybiByLmNoaWxkcmVuLmxlbmd0aDw9Mj9mLnJlamVjdCgpOih0PWYuYWxsKFtvLmRvYy5ib2R5LmFwcGVuZENoaWxkKHIpLG8uZG9jLmJvZHkuYXBwZW5kQ2hpbGQoaSldKS50aGVuKGZ1bmN0aW9uKHQpe3ZhciBlPXRbMF0sbj10WzFdO3JldHVybiBuLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXshZnVuY3Rpb24odCxlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj10LnBhcmVudE5vZGU7biYmKG4ucmVtb3ZlQ2hpbGQodCksbi5yZW1vdmVDaGlsZChlKSl9fShlLG4pKCl9KSxlLnN1Ym1pdCgpLHR9KSxyPXgoKSxpPVQoKSx0KX0pfSxpbml0OmZ1bmN0aW9uKCl7cmV0dXJuIF8/RS5wcm9taXNlOigobz1uZXcgbShhKSkuaW5zZXJ0KFwicnVmb3VzLXNhbmRib3hcIixudWxsLHtkaXNwbGF5Olwibm9uZVwifSxmdW5jdGlvbih0KXtzLmJvZHkuYXBwZW5kQ2hpbGQodCl9KS50aGVuKGZ1bmN0aW9uKCl7by5zZXRUaXRsZShcIlR3aXR0ZXIgYW5hbHl0aWNzIGlmcmFtZVwiKSxyPXgoKSxpPVQoKSxFLnJlc29sdmUoW3IsaV0pfSksXz0hMCxFLnByb21pc2UpfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDgpLGk9L15bXiM/XSpcXC4oZ292fG1pbCkoOlxcZCspPyhbIz9dLiopPyQvaSxvPXt9O2Z1bmN0aW9uIHModCl7cmV0dXJuIHQgaW4gbz9vW3RdOm9bdF09aS50ZXN0KHQpfXQuZXhwb3J0cz17aXNVcmxTZW5zaXRpdmU6cyxpc0hvc3RQYWdlU2Vuc2l0aXZlOmZ1bmN0aW9uKCl7cmV0dXJuIHMoci5ob3N0KX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigwKTt0LmV4cG9ydHM9ZnVuY3Rpb24gdChlKXt2YXIgbj1bXTtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBpPXIuaXNUeXBlKFwiYXJyYXlcIixlKT90KGUpOltlXTtuPW4uY29uY2F0KGkpfSksbn19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiB0LmZpbHRlcihmdW5jdGlvbihlLG4pe3JldHVybiB0LmluZGV4T2YoZSk9PT1ufSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0MCksaT1uKDApLG89bigxMDEpO2Z1bmN0aW9uIHMoKXtyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1zLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHIucHJvdG90eXBlKSxpLmF1ZyhzLnByb3RvdHlwZSx7ZmFjdG9yeTpvfSksdC5leHBvcnRzPXN9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIzKSxpPW4oMCksbz1uKDcpO3QuZXhwb3J0cz17YmVmb3JlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG4saT10aGlzLG89YXJndW1lbnRzO3JldHVybiBuPWUuYXBwbHkodGhpcyxhcmd1bWVudHMpLHIuaXNQcm9taXNlKG4pP24udGhlbihmdW5jdGlvbigpe3JldHVybiB0LmFwcGx5KGksbyl9KTp0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX19LGFmdGVyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG4saT10aGlzLG89YXJndW1lbnRzO2Z1bmN0aW9uIHModCxlKXtyZXR1cm4gci5pc1Byb21pc2UoZSk/ZS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHR9KTp0fXJldHVybiBuPXQuYXBwbHkodGhpcyxhcmd1bWVudHMpLHIuaXNQcm9taXNlKG4pP24udGhlbihmdW5jdGlvbih0KXtyZXR1cm4gcyh0LGUuYXBwbHkoaSxvKSl9KTpzKG4sZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfX0sYXJvdW5kOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIG49aS50b1JlYWxBcnJheShhcmd1bWVudHMpO3JldHVybiBuLnVuc2hpZnQobyh0LHRoaXMpKSxlLmFwcGx5KHRoaXMsbil9fX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDEwKSxpPW4oMTcpLG89big0MSkscz1uKDYpLGE9bigwKTt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdD1vKCk7ZnVuY3Rpb24gZShlKXt0LmFwcGx5KHRoaXMsYXJndW1lbnRzKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInRhcmdldEdsb2JhbFwiLHt2YWx1ZTplfSl9cmV0dXJuIGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodC5wcm90b3R5cGUpLGEuYXVnKGUucHJvdG90eXBlLHtpZDpudWxsLGluaXRpYWxpemVkOiExLHdpZHRoOjAsaGVpZ2h0OjAsc2FuZGJveEVsOm51bGwsaW5zZXJ0OmZ1bmN0aW9uKCl7cmV0dXJuIHMucmVqZWN0KCl9LG9uUmVzaXplOmZ1bmN0aW9uKCl7fSxhZGRDbGFzczpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnNhbmRib3hFbDtyZXR1cm4gdD1BcnJheS5pc0FycmF5KHQpP3Q6W3RdLGkud3JpdGUoZnVuY3Rpb24oKXt0LmZvckVhY2goZnVuY3Rpb24odCl7ci5hZGQoZSx0KX0pfSl9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuc2FuZGJveEVsO3JldHVybiB0PUFycmF5LmlzQXJyYXkodCk/dDpbdF0saS53cml0ZShmdW5jdGlvbigpe3QuZm9yRWFjaChmdW5jdGlvbih0KXtyLnJlbW92ZShlLHQpfSl9KX0sc3R5bGVTZWxmOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7cmV0dXJuIGkud3JpdGUoZnVuY3Rpb24oKXthLmZvckluKHQsZnVuY3Rpb24odCxuKXtlLnNhbmRib3hFbC5zdHlsZVt0XT1ufSl9KX19KSxlfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMyksaT1uKDEwKSxvPW4oMTcpLHM9big1NCksYT1uKDI1KSx1PW4oNTUpLGM9big1NiksZD1uKDQzKSxmPW4oMjkpLGw9bigxOCksaD1uKDU3KSxwPW4oMiksbT1uKDYpLHY9bigwKSxnPW4oOSksdz1uKDIxKSx5PW4oNyksYj17YWxsb3dmdWxsc2NyZWVuOlwidHJ1ZVwifSxfPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wiLHdpZHRoOlwiMHB4XCIsaGVpZ2h0OlwiMHB4XCIscGFkZGluZzpcIjBcIixib3JkZXI6XCJub25lXCJ9LEU9e3Bvc2l0aW9uOlwic3RhdGljXCIsdmlzaWJpbGl0eTpcInZpc2libGVcIn0seD1cIlNhbmRib3hSb290XCIsVD1cIi5TYW5kYm94Um9vdCB7IGRpc3BsYXk6IG5vbmU7IH1cIixBPTUwO2Z1bmN0aW9uIFModCxlLG4scil7cmV0dXJuIGU9di5hdWcoe2lkOnR9LGIsZSksbj12LmF1Zyh7fSxfLG4pLGYoZSxuLHIpfWZ1bmN0aW9uIFIodCxlLG4saSxzKXt2YXIgYT1uZXcgcCx1PXcuZ2VuZXJhdGUoKSxjPVModCxlLG4scyk7cmV0dXJuIGcuc2V0KFtcInNhbmRib3hcIix1XSxmdW5jdGlvbigpe3ZhciB0PWMuY29udGVudFdpbmRvdy5kb2N1bWVudDtvLndyaXRlKGZ1bmN0aW9uKCl7dC53cml0ZShcIjwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48L2JvZHk+PC9odG1sPlwiKX0pLnRoZW4oZnVuY3Rpb24oKXt0LmNsb3NlKCksYS5yZXNvbHZlKGMpfSl9KSxjLnNyYz1bXCJqYXZhc2NyaXB0OlwiLCdkb2N1bWVudC53cml0ZShcIlwiKTsnLFwidHJ5IHsgd2luZG93LnBhcmVudC5kb2N1bWVudDsgfVwiLCdjYXRjaCAoZSkgeyBkb2N1bWVudC5kb21haW49XCInK3IuZG9tYWluKydcIjsgfScsXCJ3aW5kb3cucGFyZW50LlwiK2cuZnVsbFBhdGgoW1wic2FuZGJveFwiLHVdKStcIigpO1wiXS5qb2luKFwiXCIpLGMuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsYS5yZWplY3QsITEpLG8ud3JpdGUoZnVuY3Rpb24oKXtpLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGMsaSl9KSxhLnByb21pc2V9dC5leHBvcnRzPWEuY291cGxlKG4oNTgpLGZ1bmN0aW9uKHQpe3Qub3ZlcnJpZGVQcm9wZXJ0eShcImlkXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNhbmRib3hFbCYmdGhpcy5zYW5kYm94RWwuaWR9fSksdC5vdmVycmlkZVByb3BlcnR5KFwiaW5pdGlhbGl6ZWRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLndpbn19KSx0Lm92ZXJyaWRlUHJvcGVydHkoXCJ3aWR0aFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fd2lkdGh9fSksdC5vdmVycmlkZVByb3BlcnR5KFwiaGVpZ2h0XCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9oZWlnaHR9fSksdC5vdmVycmlkZVByb3BlcnR5KFwic2FuZGJveEVsXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlmcmFtZUVsfX0pLHQuZGVmaW5lUHJvcGVydHkoXCJpZnJhbWVFbFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faWZyYW1lfX0pLHQuZGVmaW5lUHJvcGVydHkoXCJyb290RWxcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9jJiZ0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnR9fSksdC5kZWZpbmVQcm9wZXJ0eShcIndpZGdldEVsXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvYyYmdGhpcy5kb2MuYm9keS5maXJzdEVsZW1lbnRDaGlsZH19KSx0LmRlZmluZVByb3BlcnR5KFwid2luXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlmcmFtZUVsJiZ0aGlzLmlmcmFtZUVsLmNvbnRlbnRXaW5kb3d9fSksdC5kZWZpbmVQcm9wZXJ0eShcImRvY1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy53aW4mJnRoaXMud2luLmRvY3VtZW50fX0pLHQuZGVmaW5lKFwiX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnNcIixmdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIG8ucmVhZChmdW5jdGlvbigpe3ZhciBlLG49aCh0LnNhbmRib3hFbCk7XCJ2aXNpYmxlXCI9PXQuc2FuZGJveEVsLnN0eWxlLnZpc2liaWxpdHk/dC5fd2lkdGg9bi53aWR0aDooZT1oKHQuc2FuZGJveEVsLnBhcmVudEVsZW1lbnQpLndpZHRoLHQuX3dpZHRoPU1hdGgubWluKG4ud2lkdGgsZSkpLHQuX2hlaWdodD1uLmhlaWdodH0pfSksdC5kZWZpbmUoXCJfc2V0VGFyZ2V0VG9CbGFua1wiLGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKTt0LnRhcmdldD1cIl9ibGFua1wiLHRoaXMuZG9jLmhlYWQuYXBwZW5kQ2hpbGQodCl9KSx0LmRlZmluZShcIl9kaWRSZXNpemVcIixmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10aGlzLl9yZXNpemVIYW5kbGVycy5zbGljZSgwKTtyZXR1cm4gdGhpcy5fdXBkYXRlQ2FjaGVkRGltZW5zaW9ucygpLnRoZW4oZnVuY3Rpb24oKXtlLmZvckVhY2goZnVuY3Rpb24oZSl7ZSh0KX0pfSl9KSx0LmRlZmluZShcInNldFRpdGxlXCIsZnVuY3Rpb24odCl7dGhpcy5pZnJhbWVFbC50aXRsZT10fSksdC5vdmVycmlkZShcImNyZWF0ZUVsZW1lbnRcIixmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCh0KX0pLHQub3ZlcnJpZGUoXCJjcmVhdGVGcmFnbWVudFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9jLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKX0pLHQub3ZlcnJpZGUoXCJodG1sVG9FbGVtZW50XCIsZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuKGU9dGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5pbm5lckhUTUw9dCxlLmZpcnN0RWxlbWVudENoaWxkfSksdC5vdmVycmlkZShcImhhc1NlbGVjdGVkVGV4dFwiLGZ1bmN0aW9uKCl7cmV0dXJuISFzLmdldFNlbGVjdGVkVGV4dCh0aGlzLndpbil9KSx0Lm92ZXJyaWRlKFwiYWRkUm9vdENsYXNzXCIsZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5yb290RWw7cmV0dXJuIHQ9QXJyYXkuaXNBcnJheSh0KT90Olt0XSx0aGlzLmluaXRpYWxpemVkP28ud3JpdGUoZnVuY3Rpb24oKXt0LmZvckVhY2goZnVuY3Rpb24odCl7aS5hZGQoZSx0KX0pfSk6bS5yZWplY3QobmV3IEVycm9yKFwic2FuZGJveCBub3QgaW5pdGlhbGl6ZWRcIikpfSksdC5vdmVycmlkZShcInJlbW92ZVJvb3RDbGFzc1wiLGZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucm9vdEVsO3JldHVybiB0PUFycmF5LmlzQXJyYXkodCk/dDpbdF0sdGhpcy5pbml0aWFsaXplZD9vLndyaXRlKGZ1bmN0aW9uKCl7dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2kucmVtb3ZlKGUsdCl9KX0pOm0ucmVqZWN0KG5ldyBFcnJvcihcInNhbmRib3ggbm90IGluaXRpYWxpemVkXCIpKX0pLHQub3ZlcnJpZGUoXCJoYXNSb290Q2xhc3NcIixmdW5jdGlvbih0KXtyZXR1cm4gaS5wcmVzZW50KHRoaXMucm9vdEVsLHQpfSksdC5kZWZpbmUoXCJhZGRTdHlsZVNoZWV0XCIsZnVuY3Rpb24odCxlKXt2YXIgbixyPW5ldyBwO3JldHVybiB0aGlzLmluaXRpYWxpemVkPygobj10aGlzLmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpKS50eXBlPVwidGV4dC9jc3NcIixuLnJlbD1cInN0eWxlc2hlZXRcIixuLmhyZWY9dCxuLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsci5yZXNvbHZlLCExKSxuLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLHIucmVqZWN0LCExKSxvLndyaXRlKHkoZSxudWxsLG4pKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIHUodCkudGhlbihyLnJlc29sdmUsci5yZWplY3QpLHIucHJvbWlzZX0pKTptLnJlamVjdChuZXcgRXJyb3IoXCJzYW5kYm94IG5vdCBpbml0aWFsaXplZFwiKSl9KSx0Lm92ZXJyaWRlKFwicHJlcGVuZFN0eWxlU2hlZXRcIixmdW5jdGlvbih0KXt2YXIgZT10aGlzLmRvYztyZXR1cm4gdGhpcy5hZGRTdHlsZVNoZWV0KHQsZnVuY3Rpb24odCl7dmFyIG49ZS5oZWFkLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBuP2UuaGVhZC5pbnNlcnRCZWZvcmUodCxuKTplLmhlYWQuYXBwZW5kQ2hpbGQodCl9KX0pLHQub3ZlcnJpZGUoXCJhcHBlbmRTdHlsZVNoZWV0XCIsZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5kb2M7cmV0dXJuIHRoaXMuYWRkU3R5bGVTaGVldCh0LGZ1bmN0aW9uKHQpe3JldHVybiBlLmhlYWQuYXBwZW5kQ2hpbGQodCl9KX0pLHQuZGVmaW5lKFwiYWRkQ3NzXCIsZnVuY3Rpb24odCxlKXt2YXIgbjtyZXR1cm4gYy5pbmxpbmVTdHlsZSgpPygobj10aGlzLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSkudHlwZT1cInRleHQvY3NzXCIsbi5hcHBlbmRDaGlsZCh0aGlzLmRvYy5jcmVhdGVUZXh0Tm9kZSh0KSksby53cml0ZSh5KGUsbnVsbCxuKSkpOihsLmRldkVycm9yKFwiQ1NQIGVuYWJsZWQ7IGNhbm5vdCBlbWJlZCBpbmxpbmUgc3R5bGVzXCIpLG0ucmVzb2x2ZSgpKX0pLHQub3ZlcnJpZGUoXCJwcmVwZW5kQ3NzXCIsZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5kb2M7cmV0dXJuIHRoaXMuYWRkQ3NzKHQsZnVuY3Rpb24odCl7dmFyIG49ZS5oZWFkLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBuP2UuaGVhZC5pbnNlcnRCZWZvcmUodCxuKTplLmhlYWQuYXBwZW5kQ2hpbGQodCl9KX0pLHQub3ZlcnJpZGUoXCJhcHBlbmRDc3NcIixmdW5jdGlvbih0KXt2YXIgZT10aGlzLmRvYztyZXR1cm4gdGhpcy5hZGRDc3ModCxmdW5jdGlvbih0KXtyZXR1cm4gZS5oZWFkLmFwcGVuZENoaWxkKHQpfSl9KSx0Lm92ZXJyaWRlKFwibWFrZVZpc2libGVcIixmdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIHRoaXMuc3R5bGVTZWxmKEUpLnRoZW4oZnVuY3Rpb24oKXt0Ll91cGRhdGVDYWNoZWREaW1lbnNpb25zKCl9KX0pLHQub3ZlcnJpZGUoXCJpbmplY3RXaWRnZXRFbFwiLGZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZWQ/dGhpcy53aWRnZXRFbD9tLnJlamVjdChuZXcgRXJyb3IoXCJ3aWRnZXQgYWxyZWFkeSBpbmplY3RlZFwiKSk6by53cml0ZShmdW5jdGlvbigpe2UuZG9jLmJvZHkuYXBwZW5kQ2hpbGQodCl9KTptLnJlamVjdChuZXcgRXJyb3IoXCJzYW5kYm94IG5vdCBpbml0aWFsaXplZFwiKSl9KSx0Lm92ZXJyaWRlKFwibWF0Y2hIZWlnaHRUb0NvbnRlbnRcIixmdW5jdGlvbigpe3ZhciB0LGU9dGhpcztyZXR1cm4gby5yZWFkKGZ1bmN0aW9uKCl7dD1lLndpZGdldEVsP2goZS53aWRnZXRFbCkuaGVpZ2h0OjB9KSxvLndyaXRlKGZ1bmN0aW9uKCl7ZS5zYW5kYm94RWwuc3R5bGUuaGVpZ2h0PXQrXCJweFwifSkudGhlbihmdW5jdGlvbigpe3JldHVybiBlLl91cGRhdGVDYWNoZWREaW1lbnNpb25zKCl9KX0pLHQub3ZlcnJpZGUoXCJtYXRjaFdpZHRoVG9Db250ZW50XCIsZnVuY3Rpb24oKXt2YXIgdCxlPXRoaXM7cmV0dXJuIG8ucmVhZChmdW5jdGlvbigpe3Q9ZS53aWRnZXRFbD9oKGUud2lkZ2V0RWwpLndpZHRoOjB9KSxvLndyaXRlKGZ1bmN0aW9uKCl7ZS5zYW5kYm94RWwuc3R5bGUud2lkdGg9dCtcInB4XCJ9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGUuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKX0pfSksdC5hZnRlcihcImluaXRpYWxpemVcIixmdW5jdGlvbigpe3RoaXMuX2lmcmFtZT1udWxsLHRoaXMuX3dpZHRoPXRoaXMuX2hlaWdodD0wLHRoaXMuX3Jlc2l6ZUhhbmRsZXJzPVtdfSksdC5vdmVycmlkZShcImluc2VydFwiLGZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPXRoaXMscz1uZXcgcCxhPXRoaXMudGFyZ2V0R2xvYmFsLmRvY3VtZW50LHU9Uyh0LGUsbixhKTtyZXR1cm4gby53cml0ZSh5KHIsbnVsbCx1KSksdS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7KGZ1bmN0aW9uKHQpe3RyeXt0LmNvbnRlbnRXaW5kb3cuZG9jdW1lbnR9Y2F0Y2godCl7cmV0dXJuIG0ucmVqZWN0KHQpfXJldHVybiBtLnJlc29sdmUodCl9KSh1KS50aGVuKG51bGwseShSLG51bGwsdCxlLG4sdSxhKSkudGhlbihzLnJlc29sdmUscy5yZWplY3QpfSwhMSksdS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixzLnJlamVjdCwhMSkscy5wcm9taXNlLnRoZW4oZnVuY3Rpb24odCl7dmFyIGU9ZChpLl9kaWRSZXNpemUsQSxpKTtyZXR1cm4gaS5faWZyYW1lPXQsaS53aW4uYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGUsITEpLG0uYWxsKFtpLl9zZXRUYXJnZXRUb0JsYW5rKCksaS5hZGRSb290Q2xhc3MoeCksaS5wcmVwZW5kQ3NzKFQpXSl9KX0pLHQub3ZlcnJpZGUoXCJvblJlc2l6ZVwiLGZ1bmN0aW9uKHQpe3RoaXMuX3Jlc2l6ZUhhbmRsZXJzLnB1c2godCl9KSx0LmFmdGVyKFwic3R5bGVTZWxmXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fdXBkYXRlQ2FjaGVkRGltZW5zaW9ucygpfSl9KX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJ1bmltcGxlbWVudGVkIG1ldGhvZFwiKX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPXtnZXRCYXNlVVJMUGF0aDpmdW5jdGlvbih0KXtzd2l0Y2godCYmdC50ZndfdGVhbV9ob2xkYmFja18xMTkyOSYmdC50ZndfdGVhbV9ob2xkYmFja18xMTkyOS5idWNrZXQpe2Nhc2VcImNvbnRyb2xcIjpyZXR1cm5cImVtYmVkLWhvbGRiYWNrXCI7Y2FzZVwiaG9sZGJhY2tfcHJvZFwiOnJldHVyblwiZW1iZWQtaG9sZGJhY2stcHJvZFwiO2RlZmF1bHQ6cmV0dXJuXCJlbWJlZFwifX19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyKSxpPW4oNyksbz0xMDAscz0zZTM7ZnVuY3Rpb24gYSh0LGUpe3RoaXMuX2lucHV0c1F1ZXVlPVtdLHRoaXMuX3Rhc2s9dCx0aGlzLl9pc1BhdXNlZD0hMSx0aGlzLl9mbHVzaERlbGF5PWUmJmUuZmx1c2hEZWxheXx8byx0aGlzLl9wYXVzZUxlbmd0aD1lJiZlLnBhdXNlTGVuZ3RofHxzLHRoaXMuX2ZsdXNoVGltZW91dD12b2lkIDB9YS5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyByO3JldHVybiB0aGlzLl9pbnB1dHNRdWV1ZS5wdXNoKHtpbnB1dDp0LHRhc2tEb25lRGVmZXJyZWQ6ZX0pLHRoaXMuX3NjaGVkdWxlRmx1c2goKSxlLnByb21pc2V9LGEucHJvdG90eXBlLl9zY2hlZHVsZUZsdXNoPWZ1bmN0aW9uKCl7dGhpcy5faXNQYXVzZWR8fChjbGVhclRpbWVvdXQodGhpcy5fZmx1c2hUaW1lb3V0KSx0aGlzLl9mbHVzaFRpbWVvdXQ9c2V0VGltZW91dChpKHRoaXMuX2ZsdXNoLHRoaXMpLHRoaXMuX2ZsdXNoRGVsYXkpKX0sYS5wcm90b3R5cGUuX2ZsdXNoPWZ1bmN0aW9uKCl7dHJ5e3RoaXMuX3Rhc2suY2FsbChudWxsLHRoaXMuX2lucHV0c1F1ZXVlKX1jYXRjaCh0KXt0aGlzLl9pbnB1dHNRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UudGFza0RvbmVEZWZlcnJlZC5yZWplY3QodCl9KX10aGlzLl9pbnB1dHNRdWV1ZT1bXSx0aGlzLl9mbHVzaFRpbWVvdXQ9dm9pZCAwfSxhLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbih0KXtjbGVhclRpbWVvdXQodGhpcy5fZmx1c2hUaW1lb3V0KSx0aGlzLl9pc1BhdXNlZD0hMCwhdCYmdGhpcy5fcGF1c2VMZW5ndGgmJnNldFRpbWVvdXQoaSh0aGlzLnJlc3VtZSx0aGlzKSx0aGlzLl9wYXVzZUxlbmd0aCl9LGEucHJvdG90eXBlLnJlc3VtZT1mdW5jdGlvbigpe3RoaXMuX2lzUGF1c2VkPSExLHRoaXMuX3NjaGVkdWxlRmx1c2goKX0sdC5leHBvcnRzPWF9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDczKSxpPW4oMjkpLG89bigyKSxzPW4oMyksYT1uKDI4KSx1PW4oMjApLGM9bigyNCksZD1uKDgpLGY9bigxOCksbD1uKDEwNyksaD1uKDU5KSxwPW4oOSksbT1uKDE2KSx2PW4oNCksZz1uKDApLHc9bigxKSx5PWgoZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG99KSxiPXtzaG91bGRPYnRhaW5Db29raWVDb25zZW50OiExLGZlYXR1cmVzOnt9fTt0LmV4cG9ydHM9e2xvYWQ6ZnVuY3Rpb24oKXt2YXIgdCxlLG4sbztpZih1LmllOSgpfHx1LmllMTAoKXx8XCJodHRwOlwiIT09ZC5wcm90b2NvbCYmXCJodHRwczpcIiE9PWQucHJvdG9jb2wpcmV0dXJuIGYuZGV2RXJyb3IoXCJVc2luZyBkZWZhdWx0IHNldHRpbmdzIGR1ZSB0byB1bnN1cHBvcnRlZCBicm93c2VyIG9yIHByb3RvY29sLlwiKSx2b2lkIHkoKS5yZXNvbHZlKCk7dD17b3JpZ2luOmQub3JpZ2lufSxhLnNldHRpbmdzKCkuaW5kZXhPZihcImxvY2FsaG9zdFwiKT4tMSYmKHQubG9jYWxTZXR0aW5ncz0hMCksZT1tLnVybChyLnJlc291cmNlQmFzZVVybCtyLndpZGdldElmcmFtZUh0bWxQYXRoLHQpLG49ZnVuY3Rpb24odCl7dmFyIG4scixpLG87aWYocj12LmlzVHdpdHRlclVSTCh0Lm9yaWdpbiksaT1lLnN1YnN0cigwLHQub3JpZ2luLmxlbmd0aCk9PT10Lm9yaWdpbixvPXYuaXNUd2ltZ1VSTCh0Lm9yaWdpbiksaSYmcnx8byl0cnl7KG49XCJzdHJpbmdcIj09dHlwZW9mIHQuZGF0YT9jLnBhcnNlKHQuZGF0YSk6dC5kYXRhKS5uYW1lc3BhY2U9PT1sLnNldHRpbmdzJiYoYj1nLmF1ZyhiLHtmZWF0dXJlczpuLnNldHRpbmdzLmZlYXR1cmVzLHNlc3Npb25JZDpuLnNlc3Npb25JZH0pLHkoKS5yZXNvbHZlKCkpfWNhdGNoKHQpe2YuZGV2RXJyb3IodCl9fSx3LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbiksbz1pKHtzcmM6ZSx0aXRsZTpcIlR3aXR0ZXIgc2V0dGluZ3MgaWZyYW1lXCJ9LHtkaXNwbGF5Olwibm9uZVwifSkscy5ib2R5LmFwcGVuZENoaWxkKG8pfSxzZXR0aW5nc0xvYWRlZDpmdW5jdGlvbigpe3ZhciB0LGU7cmV0dXJuIHQ9cC5nZXQoXCJleHBlcmltZW50T3ZlcnJpZGVcIikseSgpLnByb21pc2UudGhlbihmdW5jdGlvbigpe3JldHVybiB0JiZ0Lm5hbWUmJnQuYXNzaWdubWVudCYmKChlPXt9KVt0Lm5hbWVdPXtidWNrZXQ6dC5hc3NpZ25tZW50fSxiLmZlYXR1cmVzPWcuYXVnKGIuZmVhdHVyZXMsZSkpLGJ9KX19fSxmdW5jdGlvbih0LGUpe3QuZXhwb3J0cz17c2V0dGluZ3M6XCJ0d3R0ci5zZXR0aW5nc1wifX0sZnVuY3Rpb24odCxlLG4pe3QuZXhwb3J0cz1bbigxMDkpLG4oMTE5KSxuKDEyNCksbigxMjYpLG4oMTI4KSxuKDEzMCksbigxNDMpLG4oMTQ1KV19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDApLGk9bigxMSksbz1uKDEyKSgpLHM9big2MCksYT1cImJsb2NrcXVvdGUudHdpdHRlci1icm9hZGNhc3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbyh0LGEpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gcyhmdW5jdGlvbih0KXt2YXIgZT1pKHQpLG49dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJyb2FkY2FzdC1pZFwiKTtyZXR1cm4gci5hdWcoZSx7YnJvYWRjYXN0SWQ6bn0pfSh0KSx0LnBhcmVudE5vZGUsdCxlKX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMCk7dC5leHBvcnRzPWZ1bmN0aW9uIHQoZSl7dmFyIG47aWYoZSlyZXR1cm4gbj1lLmxhbmd8fGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1sYW5nXCIpLHIuaXNUeXBlKFwic3RyaW5nXCIsbik/bjp0KGUucGFyZW50RWxlbWVudCl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigwKSxpPW4oNDgpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiBpKHQsZSk/W3RdOnIudG9SZWFsQXJyYXkodC5xdWVyeVNlbGVjdG9yQWxsKGUpKX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDE3KSxpPW4oMTEzKSxvPW4oNTkpLHM9bigyOSksYT1uKDIpLHU9big2KSxjPW4oNyksZD1uKDApLGY9e2FsbG93ZnVsbHNjcmVlbjpcInRydWVcIn0sbD17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIix3aWR0aDpcIjBweFwiLGhlaWdodDpcIjBweFwifSxoPXtwb3NpdGlvbjpcInN0YXRpY1wiLHZpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9LHA9e307aShmdW5jdGlvbih0LGUsbil7dmFyIHI9cFt0XTtpZihyKXJldHVybiBlPWV8fDEsbj1ufHwxLHIuc3R5bGVTZWxmKHt3aWR0aDplK1wicHhcIixoZWlnaHQ6bitcInB4XCJ9KS50aGVuKGZ1bmN0aW9uKCl7ci5kaWRSZXNpemUoKX0pfSxmdW5jdGlvbih0KXt2YXIgZT1wW3RdO2lmKGUpcmV0dXJuIGUuX3Jlc3VsdHMucmVzb2x2ZSgpfSxmdW5jdGlvbih0KXt2YXIgZT1wW3RdO2lmKGUpcmV0dXJuIGUuX3JlbmRlcmVkLnJlc29sdmUoKX0sZnVuY3Rpb24odCxlKXt2YXIgbj1wW3RdO24mJmUmJm4uc2V0SWZyYW1lVmVyc2lvbihlKX0sZnVuY3Rpb24odCl7dmFyIGU9cFt0XTtpZihlKXJldHVybiBlLl9yZXN1bHRzLnJlamVjdCgpfSksdC5leHBvcnRzPWZ1bmN0aW9uKHQpe3Qub3ZlcnJpZGVQcm9wZXJ0eShcImlkXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNhbmRib3hFbCYmdGhpcy5zYW5kYm94RWwuaWR9fSksdC5vdmVycmlkZVByb3BlcnR5KFwiaW5pdGlhbGl6ZWRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLmlmcmFtZUVsfX0pLHQub3ZlcnJpZGVQcm9wZXJ0eShcIndpZHRoXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl93aWR0aH19KSx0Lm92ZXJyaWRlUHJvcGVydHkoXCJoZWlnaHRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2hlaWdodH19KSx0Lm92ZXJyaWRlUHJvcGVydHkoXCJzYW5kYm94RWxcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaWZyYW1lRWx9fSksdC5kZWZpbmVQcm9wZXJ0eShcImlmcmFtZUVsXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9pZnJhbWV9fSksdC5kZWZpbmVQcm9wZXJ0eShcImlmcmFtZVZlcnNpb25cIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2lmcmFtZVZlcnNpb259fSksdC5kZWZpbmUoXCJ1cGRhdGVDYWNoZWREaW1lbnNpb25zXCIsZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiB0aGlzLmluaXRpYWxpemVkP3IucmVhZChmdW5jdGlvbigpe3QuX3dpZHRoPXQuc2FuZGJveEVsLm9mZnNldFdpZHRoLHQuX2hlaWdodD10LnNhbmRib3hFbC5vZmZzZXRIZWlnaHR9KTp1LnJlc29sdmUoKX0pLHQuZGVmaW5lKFwic2V0VGl0bGVcIixmdW5jdGlvbih0KXt0aGlzLmlmcmFtZUVsLnRpdGxlPXR9KSx0LmRlZmluZShcInNldFdhaXRUb1N3YXBVbnRpbFJlbmRlcmVkXCIsZnVuY3Rpb24odCl7dGhpcy5fd2FpdFRvU3dhcFVudGlsUmVuZGVyZWQ9dH0pLHQuZGVmaW5lKFwic2V0SWZyYW1lVmVyc2lvblwiLGZ1bmN0aW9uKHQpe3RoaXMuX2lmcmFtZVZlcnNpb249dH0pLHQuZGVmaW5lKFwiZ2V0UmVzdWx0c1Byb21pc2VcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLl9yZXN1bHRzLnByb21pc2V9KSx0LmRlZmluZShcImdldFJlbmRlcmVkUHJvbWlzZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3JlbmRlcmVkLnByb21pc2V9KSx0LmRlZmluZShcIm1ha2VWaXNpYmxlXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdHlsZVNlbGYoaCl9KSx0LmRlZmluZShcImRpZFJlc2l6ZVwiLGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuX3Jlc2l6ZUhhbmRsZXJzLmxlbmd0aD4wO3JldHVybiB0aGlzLnVwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKS50aGVuKGZ1bmN0aW9uKCl7ZSYmdC5fcmVzaXplSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihlKXtlKHQpfSl9KX0pLHQuZGVmaW5lKFwibG9hZERvY3VtZW50XCIsZnVuY3Rpb24odCl7dmFyIGU9bmV3IGE7cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZWQ/dGhpcy5pZnJhbWVFbC5zcmM/dS5yZWplY3QobmV3IEVycm9yKFwid2lkZ2V0IGFscmVhZHkgbG9hZGVkXCIpKToodGhpcy5pZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGUucmVzb2x2ZSwhMSksdGhpcy5pZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixlLnJlamVjdCwhMSksdGhpcy5pZnJhbWVFbC5zcmM9dCxlLnByb21pc2UpOnUucmVqZWN0KG5ldyBFcnJvcihcInNhbmRib3ggbm90IGluaXRpYWxpemVkXCIpKX0pLHQuYWZ0ZXIoXCJpbml0aWFsaXplXCIsZnVuY3Rpb24oKXt2YXIgdD1uZXcgYSxlPW5ldyBhO3RoaXMuX2lmcmFtZT1udWxsLHRoaXMuX2lmcmFtZVZlcnNpb249bnVsbCx0aGlzLl93aWR0aD10aGlzLl9oZWlnaHQ9MCx0aGlzLl9yZXNpemVIYW5kbGVycz1bXSx0aGlzLl9yZW5kZXJlZD10LHRoaXMuX3Jlc3VsdHM9ZSx0aGlzLl93YWl0VG9Td2FwVW50aWxSZW5kZXJlZD0hMX0pLHQub3ZlcnJpZGUoXCJpbnNlcnRcIixmdW5jdGlvbih0LGUsbixpKXt2YXIgYT10aGlzO3JldHVybiBlPWQuYXVnKHtpZDp0fSxmLGUpLG49ZC5hdWcoe30sbCxuKSx0aGlzLl9pZnJhbWU9cyhlLG4pLHBbdF09dGhpcyxhLl93YWl0VG9Td2FwVW50aWxSZW5kZXJlZHx8dGhpcy5vblJlc2l6ZShvKGZ1bmN0aW9uKCl7YS5tYWtlVmlzaWJsZSgpfSkpLHIud3JpdGUoYyhpLG51bGwsdGhpcy5faWZyYW1lKSl9KSx0Lm92ZXJyaWRlKFwib25SZXNpemVcIixmdW5jdGlvbih0KXt0aGlzLl9yZXNpemVIYW5kbGVycy5wdXNoKHQpfSksdC5hZnRlcihcInN0eWxlU2VsZlwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudXBkYXRlQ2FjaGVkRGltZW5zaW9ucygpfSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxKSxpPW4oMTE0KSxvPW4oMTE2KSxzPW4oMjIpLGE9big1KSx1PW4oMTE3KTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlLG4sYyxkKXtmdW5jdGlvbiBmKHQpe3ZhciBlPXUodGhpcyk7cy50cmlnZ2VyKHQudHlwZSx7dGFyZ2V0OmUscmVnaW9uOnQucmVnaW9uLHR5cGU6dC50eXBlLGRhdGE6dC5kYXRhfHx7fX0pfWZ1bmN0aW9uIGwoZSl7dmFyIG49dSh0aGlzKSxyPW4mJm4uaWQsaT1hLmFzSW50KGUud2lkdGgpLG89YS5hc0ludChlLmhlaWdodCk7ciYmdm9pZCAwIT09aSYmdm9pZCAwIT09byYmdChyLGksbyl9KG5ldyBpKS5hdHRhY2hSZWNlaXZlcihuZXcgby5SZWNlaXZlcihyLFwidHd0dHIuYnV0dG9uXCIpKS5iaW5kKFwidHd0dHIucHJpdmF0ZS50cmlnZ2VyXCIsZikuYmluZChcInR3dHRyLnByaXZhdGUucmVzaXplQnV0dG9uXCIsbCksKG5ldyBpKS5hdHRhY2hSZWNlaXZlcihuZXcgby5SZWNlaXZlcihyLFwidHd0dHIuZW1iZWRcIikpLmJpbmQoXCJ0d3R0ci5wcml2YXRlLmluaXRpYWxpemVkXCIsZnVuY3Rpb24odCl7dmFyIGU9dSh0aGlzKSxuPWUmJmUuaWQscj10LmlmcmFtZV92ZXJzaW9uO24mJnImJmMmJmMobixyKX0pLmJpbmQoXCJ0d3R0ci5wcml2YXRlLnRyaWdnZXJcIixmKS5iaW5kKFwidHd0dHIucHJpdmF0ZS5yZXN1bHRzXCIsZnVuY3Rpb24oKXt2YXIgdD11KHRoaXMpLG49dCYmdC5pZDtuJiZlJiZlKG4pfSkuYmluZChcInR3dHRyLnByaXZhdGUucmVuZGVyZWRcIixmdW5jdGlvbigpe3ZhciB0PXUodGhpcyksZT10JiZ0LmlkO2UmJm4mJm4oZSl9KS5iaW5kKFwidHd0dHIucHJpdmF0ZS5ub19yZXN1bHRzXCIsZnVuY3Rpb24oKXt2YXIgdD11KHRoaXMpLGU9dCYmdC5pZDtlJiZkJiZkKGUpfSkuYmluZChcInR3dHRyLnByaXZhdGUucmVzaXplXCIsbCl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyNCksaT1uKDExNSksbz1uKDApLHM9big2KSxhPW4oMjMpLHU9XCIyLjBcIjtmdW5jdGlvbiBjKHQpe3RoaXMucmVnaXN0cnk9dHx8e319ZnVuY3Rpb24gZCh0KXt2YXIgZSxuO3JldHVybiBlPW8uaXNUeXBlKFwic3RyaW5nXCIsdCksbj1vLmlzVHlwZShcIm51bWJlclwiLHQpLGV8fG58fG51bGw9PT10fWZ1bmN0aW9uIGYodCxlKXtyZXR1cm57anNvbnJwYzp1LGlkOmQodCk/dDpudWxsLGVycm9yOmV9fWMucHJvdG90eXBlLl9pbnZva2U9ZnVuY3Rpb24odCxlKXt2YXIgbixyLGk7bj10aGlzLnJlZ2lzdHJ5W3QubWV0aG9kXSxyPXQucGFyYW1zfHxbXSxyPW8uaXNUeXBlKFwiYXJyYXlcIixyKT9yOltyXTt0cnl7aT1uLmFwcGx5KGUuc291cmNlfHxudWxsLHIpfWNhdGNoKHQpe2k9cy5yZWplY3QodC5tZXNzYWdlKX1yZXR1cm4gYS5pc1Byb21pc2UoaSk/aTpzLnJlc29sdmUoaSl9LGMucHJvdG90eXBlLl9wcm9jZXNzUmVxdWVzdD1mdW5jdGlvbih0LGUpe3ZhciBuLHI7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlLG4scjtyZXR1cm4hIW8uaXNPYmplY3QodCkmJihlPXQuanNvbnJwYz09PXUsbj1vLmlzVHlwZShcInN0cmluZ1wiLHQubWV0aG9kKSxyPSEoXCJpZFwiaW4gdCl8fGQodC5pZCksZSYmbiYmcil9KHQpPyhuPVwicGFyYW1zXCJpbiB0JiYocj10LnBhcmFtcywhby5pc09iamVjdChyKXx8by5pc1R5cGUoXCJmdW5jdGlvblwiLHIpKT9zLnJlc29sdmUoZih0LmlkLGkuSU5WQUxJRF9QQVJBTVMpKTp0aGlzLnJlZ2lzdHJ5W3QubWV0aG9kXT90aGlzLl9pbnZva2UodCx7c291cmNlOmV9KS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBuPXQuaWQse2pzb25ycGM6dSxpZDpuLHJlc3VsdDplfTt2YXIgbn0sZnVuY3Rpb24oKXtyZXR1cm4gZih0LmlkLGkuSU5URVJOQUxfRVJST1IpfSk6cy5yZXNvbHZlKGYodC5pZCxpLk1FVEhPRF9OT1RfRk9VTkQpKSxudWxsIT10LmlkP246cy5yZXNvbHZlKCkpOnMucmVzb2x2ZShmKHQuaWQsaS5JTlZBTElEX1JFUVVFU1QpKX0sYy5wcm90b3R5cGUuYXR0YWNoUmVjZWl2ZXI9ZnVuY3Rpb24odCl7cmV0dXJuIHQuYXR0YWNoVG8odGhpcyksdGhpc30sYy5wcm90b3R5cGUuYmluZD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLnJlZ2lzdHJ5W3RdPWUsdGhpc30sYy5wcm90b3R5cGUucmVjZWl2ZT1mdW5jdGlvbih0LGUpe3ZhciBuLGEsdSxjPXRoaXM7dHJ5e3U9dCx0PW8uaXNUeXBlKFwic3RyaW5nXCIsdSk/ci5wYXJzZSh1KTp1fWNhdGNoKHQpe3JldHVybiBzLnJlc29sdmUoZihudWxsLGkuUEFSU0VfRVJST1IpKX1yZXR1cm4gZT1lfHxudWxsLGE9KChuPW8uaXNUeXBlKFwiYXJyYXlcIix0KSk/dDpbdF0pLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gYy5fcHJvY2Vzc1JlcXVlc3QodCxlKX0pLG4/ZnVuY3Rpb24odCl7cmV0dXJuIHMuYWxsKHQpLnRoZW4oZnVuY3Rpb24odCl7cmV0dXJuKHQ9dC5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMCE9PXR9KSkubGVuZ3RoP3Q6dm9pZCAwfSl9KGEpOmFbMF19LHQuZXhwb3J0cz1jfSxmdW5jdGlvbih0KXt0LmV4cG9ydHM9e1BBUlNFX0VSUk9SOntjb2RlOi0zMjcwMCxtZXNzYWdlOlwiUGFyc2UgZXJyb3JcIn0sSU5WQUxJRF9SRVFVRVNUOntjb2RlOi0zMjYwMCxtZXNzYWdlOlwiSW52YWxpZCBSZXF1ZXN0XCJ9LElOVkFMSURfUEFSQU1TOntjb2RlOi0zMjYwMixtZXNzYWdlOlwiSW52YWxpZCBwYXJhbXNcIn0sTUVUSE9EX05PVF9GT1VORDp7Y29kZTotMzI2MDEsbWVzc2FnZTpcIk1ldGhvZCBub3QgZm91bmRcIn0sSU5URVJOQUxfRVJST1I6e2NvZGU6LTMyNjAzLG1lc3NhZ2U6XCJJbnRlcm5hbCBlcnJvclwifX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDgpLGk9bigxKSxvPW4oMjQpLHM9bigyKSxhPW4oMjApLHU9bigwKSxjPW4oNCksZD1uKDcpLGY9YS5pZTkoKTtmdW5jdGlvbiBsKHQsZSxuKXt2YXIgcjt0JiZ0LnBvc3RNZXNzYWdlJiYoZj9yPShufHxcIlwiKStvLnN0cmluZ2lmeShlKTpuPyhyPXt9KVtuXT1lOnI9ZSx0LnBvc3RNZXNzYWdlKHIsXCIqXCIpKX1mdW5jdGlvbiBoKHQpe3JldHVybiB1LmlzVHlwZShcInN0cmluZ1wiLHQpP3Q6XCJKU09OUlBDXCJ9ZnVuY3Rpb24gcCh0LGUpe3JldHVybiBlP3UuaXNUeXBlKFwic3RyaW5nXCIsdCkmJjA9PT10LmluZGV4T2YoZSk/dC5zdWJzdHJpbmcoZS5sZW5ndGgpOnQmJnRbZV0/dFtlXTp2b2lkIDA6dH1mdW5jdGlvbiBtKHQsZSl7dmFyIG49dC5kb2N1bWVudDt0aGlzLmZpbHRlcj1oKGUpLHRoaXMuc2VydmVyPW51bGwsdGhpcy5pc1R3aXR0ZXJGcmFtZT1jLmlzVHdpdHRlclVSTChuLmxvY2F0aW9uLmhyZWYpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixkKHRoaXMuX29uTWVzc2FnZSx0aGlzKSwhMSl9ZnVuY3Rpb24gdih0LGUpe3RoaXMucGVuZGluZz17fSx0aGlzLnRhcmdldD10LHRoaXMuaXNUd2l0dGVySG9zdD1jLmlzVHdpdHRlclVSTChyLmhyZWYpLHRoaXMuZmlsdGVyPWgoZSksaS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGQodGhpcy5fb25NZXNzYWdlLHRoaXMpLCExKX11LmF1ZyhtLnByb3RvdHlwZSx7X29uTWVzc2FnZTpmdW5jdGlvbih0KXt2YXIgZSxuPXRoaXM7dGhpcy5zZXJ2ZXImJih0aGlzLmlzVHdpdHRlckZyYW1lJiYhYy5pc1R3aXR0ZXJVUkwodC5vcmlnaW4pfHwoZT1wKHQuZGF0YSx0aGlzLmZpbHRlcikpJiZ0aGlzLnNlcnZlci5yZWNlaXZlKGUsdC5zb3VyY2UpLnRoZW4oZnVuY3Rpb24oZSl7ZSYmbCh0LnNvdXJjZSxlLG4uZmlsdGVyKX0pKX0sYXR0YWNoVG86ZnVuY3Rpb24odCl7dGhpcy5zZXJ2ZXI9dH0sZGV0YWNoOmZ1bmN0aW9uKCl7dGhpcy5zZXJ2ZXI9bnVsbH19KSx1LmF1Zyh2LnByb3RvdHlwZSx7X3Byb2Nlc3NSZXNwb25zZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnBlbmRpbmdbdC5pZF07ZSYmKGUucmVzb2x2ZSh0KSxkZWxldGUgdGhpcy5wZW5kaW5nW3QuaWRdKX0sX29uTWVzc2FnZTpmdW5jdGlvbih0KXt2YXIgZTtpZigoIXRoaXMuaXNUd2l0dGVySG9zdHx8Yy5pc1R3aXR0ZXJVUkwodC5vcmlnaW4pKSYmKGU9cCh0LmRhdGEsdGhpcy5maWx0ZXIpKSl7aWYodS5pc1R5cGUoXCJzdHJpbmdcIixlKSl0cnl7ZT1vLnBhcnNlKGUpfWNhdGNoKHQpe3JldHVybn0oZT11LmlzVHlwZShcImFycmF5XCIsZSk/ZTpbZV0pLmZvckVhY2goZCh0aGlzLl9wcm9jZXNzUmVzcG9uc2UsdGhpcykpfX0sc2VuZDpmdW5jdGlvbih0KXt2YXIgZT1uZXcgcztyZXR1cm4gdC5pZD90aGlzLnBlbmRpbmdbdC5pZF09ZTplLnJlc29sdmUoKSxsKHRoaXMudGFyZ2V0LHQsdGhpcy5maWx0ZXIpLGUucHJvbWlzZX19KSx0LmV4cG9ydHM9e1JlY2VpdmVyOm0sRGlzcGF0Y2hlcjp2LF9zdHJpbmdpZnlQYXlsb2FkOmZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjAmJihmPSEhdCksZn19fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigzKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG49ci5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlmcmFtZVwiKSxpPTA7bltpXTtpKyspaWYoKGU9bltpXSkuY29udGVudFdpbmRvdz09PXQpcmV0dXJuIGV9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgaT1uZXcgcjtyZXR1cm4gbi5lKDEpLnRoZW4oZnVuY3Rpb24ocil7dmFyIG87dHJ5e289big3NiksaS5yZXNvbHZlKG5ldyBvKHQsZSkpfWNhdGNoKHQpe2kucmVqZWN0KHQpfX0uYmluZChudWxsLG4pKS5jYXRjaChmdW5jdGlvbih0KXtpLnJlamVjdCh0KX0pLGkucHJvbWlzZX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDE2KSxpPW4oNSksbz1uKDApLHM9bigxMSksYT1uKDEyKSgpLHU9big2MSksYz1cImEudHdpdHRlci1kbS1idXR0b25cIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIGEodCxjKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHUoZnVuY3Rpb24odCl7dmFyIGU9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3ctc2NyZWVuLW5hbWVcIiksbj1zKHQpLGE9dC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLHU9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNjcmVlbi1uYW1lXCIpLGM9ZT9pLmFzQm9vbGVhbihlKTpudWxsLGQ9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNpemVcIiksZj1yLmRlY29kZVVSTChhKSxsPWYucmVjaXBpZW50X2lkLGg9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRleHRcIil8fGYudGV4dCxwPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWxjb21lLW1lc3NhZ2UtaWRcIil8fGYud2VsY29tZU1lc3NhZ2VJZDtyZXR1cm4gby5hdWcobix7c2NyZWVuTmFtZTp1LHNob3dTY3JlZW5OYW1lOmMsc2l6ZTpkLHRleHQ6aCx1c2VySWQ6bCx3ZWxjb21lTWVzc2FnZUlkOnB9KX0odCksdC5wYXJlbnROb2RlLHQpfSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgaT1uZXcgcjtyZXR1cm4gbi5lKDIpLnRoZW4oZnVuY3Rpb24ocil7dmFyIG87dHJ5e289big3NyksaS5yZXNvbHZlKG5ldyBvKHQsZSkpfWNhdGNoKHQpe2kucmVqZWN0KHQpfX0uYmluZChudWxsLG4pKS5jYXRjaChmdW5jdGlvbih0KXtpLnJlamVjdCh0KX0pLGkucHJvbWlzZX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDYyKSxpPW4oMzApO3QuZXhwb3J0cz1yLmlzU3VwcG9ydGVkKCk/cjppfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMjMpLGk9bigxKSxvPW4oMTApLHM9bigzNSksYT1uKDE3KSx1PW4oNTQpLGM9bigyNSksZD1uKDU1KSxmPW4oNTYpLGw9big1NyksaD1uKDcpLHA9big0MyksbT1uKDYpLHY9bigwKSxnPTUwLHc9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCIsdHJhbnNmb3JtOlwicm90YXRlKDBkZWcpXCJ9LHk9e3Bvc2l0aW9uOlwic3RhdGljXCIsdmlzaWJpbGl0eTpcInZpc2libGVcIn0sYj1cInR3aXR0ZXItd2lkZ2V0XCIsXz1cIm9wZW5cIixFPVwiU2FuZGJveFJvb3RcIix4PVwiLlNhbmRib3hSb290IHsgZGlzcGxheTogbm9uZTsgbWF4LWhlaWdodDogMTAwMDBweDsgfVwiO3QuZXhwb3J0cz1jLmNvdXBsZShuKDU4KSxmdW5jdGlvbih0KXt0LmRlZmluZVN0YXRpYyhcImlzU3VwcG9ydGVkXCIsZnVuY3Rpb24oKXtyZXR1cm4hIWkuSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdyYmZi5pbmxpbmVTdHlsZSgpfSksdC5vdmVycmlkZVByb3BlcnR5KFwiaWRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2FuZGJveEVsJiZ0aGlzLnNhbmRib3hFbC5pZH19KSx0Lm92ZXJyaWRlUHJvcGVydHkoXCJpbml0aWFsaXplZFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuX3NoYWRvd0hvc3R9fSksdC5vdmVycmlkZVByb3BlcnR5KFwid2lkdGhcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3dpZHRofX0pLHQub3ZlcnJpZGVQcm9wZXJ0eShcImhlaWdodFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5faGVpZ2h0fX0pLHQub3ZlcnJpZGVQcm9wZXJ0eShcInNhbmRib3hFbFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc2hhZG93SG9zdH19KSx0LmRlZmluZShcIl91cGRhdGVDYWNoZWREaW1lbnNpb25zXCIsZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiBhLnJlYWQoZnVuY3Rpb24oKXt2YXIgZSxuPWwodC5zYW5kYm94RWwpO1widmlzaWJsZVwiPT10LnNhbmRib3hFbC5zdHlsZS52aXNpYmlsaXR5P3QuX3dpZHRoPW4ud2lkdGg6KGU9bCh0LnNhbmRib3hFbC5wYXJlbnRFbGVtZW50KS53aWR0aCx0Ll93aWR0aD1NYXRoLm1pbihuLndpZHRoLGUpKSx0Ll9oZWlnaHQ9bi5oZWlnaHR9KX0pLHQuZGVmaW5lKFwiX2RpZFJlc2l6ZVwiLGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXRoaXMuX3Jlc2l6ZUhhbmRsZXJzLnNsaWNlKDApO3JldHVybiB0aGlzLl91cGRhdGVDYWNoZWREaW1lbnNpb25zKCkudGhlbihmdW5jdGlvbigpe2UuZm9yRWFjaChmdW5jdGlvbihlKXtlKHQpfSl9KX0pLHQub3ZlcnJpZGUoXCJjcmVhdGVFbGVtZW50XCIsZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGFyZ2V0R2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCl9KSx0Lm92ZXJyaWRlKFwiY3JlYXRlRnJhZ21lbnRcIixmdW5jdGlvbigpe3JldHVybiB0aGlzLnRhcmdldEdsb2JhbC5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCl9KSx0Lm92ZXJyaWRlKFwiaHRtbFRvRWxlbWVudFwiLGZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybihlPXRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuaW5uZXJIVE1MPXQsZS5maXJzdEVsZW1lbnRDaGlsZH0pLHQub3ZlcnJpZGUoXCJoYXNTZWxlY3RlZFRleHRcIixmdW5jdGlvbigpe3JldHVybiEhdS5nZXRTZWxlY3RlZFRleHQodGhpcy50YXJnZXRHbG9iYWwpfSksdC5vdmVycmlkZShcImFkZFJvb3RDbGFzc1wiLGZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3NoYWRvd1Jvb3RCb2R5O3JldHVybiB0PUFycmF5LmlzQXJyYXkodCk/dDpbdF0sdGhpcy5pbml0aWFsaXplZD9hLndyaXRlKGZ1bmN0aW9uKCl7dC5mb3JFYWNoKGZ1bmN0aW9uKHQpe28uYWRkKGUsdCl9KX0pOm0ucmVqZWN0KG5ldyBFcnJvcihcInNhbmRib3ggbm90IGluaXRpYWxpemVkXCIpKX0pLHQub3ZlcnJpZGUoXCJyZW1vdmVSb290Q2xhc3NcIixmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9zaGFkb3dSb290Qm9keTtyZXR1cm4gdD1BcnJheS5pc0FycmF5KHQpP3Q6W3RdLHRoaXMuaW5pdGlhbGl6ZWQ/YS53cml0ZShmdW5jdGlvbigpe3QuZm9yRWFjaChmdW5jdGlvbih0KXtvLnJlbW92ZShlLHQpfSl9KTptLnJlamVjdChuZXcgRXJyb3IoXCJzYW5kYm94IG5vdCBpbml0aWFsaXplZFwiKSl9KSx0Lm92ZXJyaWRlKFwiaGFzUm9vdENsYXNzXCIsZnVuY3Rpb24odCl7cmV0dXJuIG8ucHJlc2VudCh0aGlzLl9zaGFkb3dSb290Qm9keSx0KX0pLHQub3ZlcnJpZGUoXCJhZGRTdHlsZVNoZWV0XCIsZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGRDc3MoJ0BpbXBvcnQgdXJsKFwiJyt0KydcIik7JyxlKS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGQodCl9KX0pLHQub3ZlcnJpZGUoXCJwcmVwZW5kU3R5bGVTaGVldFwiLGZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3NoYWRvd1Jvb3Q7cmV0dXJuIHRoaXMuYWRkU3R5bGVTaGVldCh0LGZ1bmN0aW9uKHQpe3ZhciBuPWUuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIG4/ZS5pbnNlcnRCZWZvcmUodCxuKTplLmFwcGVuZENoaWxkKHQpfSl9KSx0Lm92ZXJyaWRlKFwiYXBwZW5kU3R5bGVTaGVldFwiLGZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3NoYWRvd1Jvb3Q7cmV0dXJuIHRoaXMuYWRkU3R5bGVTaGVldCh0LGZ1bmN0aW9uKHQpe3JldHVybiBlLmFwcGVuZENoaWxkKHQpfSl9KSx0Lm92ZXJyaWRlKFwiYWRkQ3NzXCIsZnVuY3Rpb24odCxlKXt2YXIgbjtyZXR1cm4gdGhpcy5pbml0aWFsaXplZD9mLmlubGluZVN0eWxlKCk/KChuPXRoaXMuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpKS50eXBlPVwidGV4dC9jc3NcIixuLmFwcGVuZENoaWxkKHRoaXMudGFyZ2V0R2xvYmFsLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpKSxhLndyaXRlKGgoZSxudWxsLG4pKSk6bS5yZXNvbHZlKCk6bS5yZWplY3QobmV3IEVycm9yKFwic2FuZGJveCBub3QgaW5pdGlhbGl6ZWRcIikpfSksdC5vdmVycmlkZShcInByZXBlbmRDc3NcIixmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9zaGFkb3dSb290O3JldHVybiB0aGlzLmFkZENzcyh0LGZ1bmN0aW9uKHQpe3ZhciBuPWUuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIG4/ZS5pbnNlcnRCZWZvcmUodCxuKTplLmFwcGVuZENoaWxkKHQpfSl9KSx0Lm92ZXJyaWRlKFwiYXBwZW5kQ3NzXCIsZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fc2hhZG93Um9vdDtyZXR1cm4gdGhpcy5hZGRDc3ModCxmdW5jdGlvbih0KXtyZXR1cm4gZS5hcHBlbmRDaGlsZCh0KX0pfSksdC5vdmVycmlkZShcIm1ha2VWaXNpYmxlXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdHlsZVNlbGYoeSl9KSx0Lm92ZXJyaWRlKFwiaW5qZWN0V2lkZ2V0RWxcIixmdW5jdGlvbih0KXt2YXIgZT10aGlzO3JldHVybiB0aGlzLmluaXRpYWxpemVkP3RoaXMuX3NoYWRvd1Jvb3RCb2R5LmZpcnN0RWxlbWVudENoaWxkP20ucmVqZWN0KG5ldyBFcnJvcihcIndpZGdldCBhbHJlYWR5IGluamVjdGVkXCIpKTphLndyaXRlKGZ1bmN0aW9uKCl7ZS5fc2hhZG93Um9vdEJvZHkuYXBwZW5kQ2hpbGQodCl9KS50aGVuKGZ1bmN0aW9uKCl7cmV0dXJuIGUuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKX0pLnRoZW4oZnVuY3Rpb24oKXt2YXIgdD1wKGUuX2RpZFJlc2l6ZSxnLGUpO25ldyByKGUuX3NoYWRvd1Jvb3RCb2R5LHQpfSk6bS5yZWplY3QobmV3IEVycm9yKFwic2FuZGJveCBub3QgaW5pdGlhbGl6ZWRcIikpfSksdC5vdmVycmlkZShcIm1hdGNoSGVpZ2h0VG9Db250ZW50XCIsZnVuY3Rpb24oKXtyZXR1cm4gbS5yZXNvbHZlKCl9KSx0Lm92ZXJyaWRlKFwibWF0Y2hXaWR0aFRvQ29udGVudFwiLGZ1bmN0aW9uKCl7cmV0dXJuIG0ucmVzb2x2ZSgpfSksdC5vdmVycmlkZShcImluc2VydFwiLGZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPXRoaXMudGFyZ2V0R2xvYmFsLmRvY3VtZW50LG89dGhpcy5fc2hhZG93SG9zdD1pLmNyZWF0ZUVsZW1lbnQoYiksdT10aGlzLl9zaGFkb3dSb290PW8uYXR0YWNoU2hhZG93KHttb2RlOl99KSxjPXRoaXMuX3NoYWRvd1Jvb3RCb2R5PWkuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gdi5mb3JJbihlfHx7fSxmdW5jdGlvbih0LGUpe28uc2V0QXR0cmlidXRlKHQsZSl9KSxvLmlkPXQsdS5hcHBlbmRDaGlsZChjKSxzLmRlbGVnYXRlKGMsXCJjbGlja1wiLFwiQVwiLGZ1bmN0aW9uKHQsZSl7ZS5oYXNBdHRyaWJ1dGUoXCJ0YXJnZXRcIil8fGUuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsXCJfYmxhbmtcIil9KSxtLmFsbChbdGhpcy5zdHlsZVNlbGYodyksdGhpcy5hZGRSb290Q2xhc3MoRSksdGhpcy5wcmVwZW5kQ3NzKHgpLGEud3JpdGUoci5iaW5kKG51bGwsbykpXSl9KSx0Lm92ZXJyaWRlKFwib25SZXNpemVcIixmdW5jdGlvbih0KXt0aGlzLl9yZXNpemVIYW5kbGVycy5wdXNoKHQpfSksdC5hZnRlcihcImluaXRpYWxpemVcIixmdW5jdGlvbigpe3RoaXMuX3NoYWRvd0hvc3Q9dGhpcy5fc2hhZG93Um9vdD10aGlzLl9zaGFkb3dSb290Qm9keT1udWxsLHRoaXMuX3dpZHRoPXRoaXMuX2hlaWdodD0wLHRoaXMuX3Jlc2l6ZUhhbmRsZXJzPVtdfSksdC5hZnRlcihcInN0eWxlU2VsZlwiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3VwZGF0ZUNhY2hlZERpbWVuc2lvbnMoKX0pfSl9LGZ1bmN0aW9uKHQsZSl7dmFyIG47KG49ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiByKHQsZSl7aWYodC5yZXNpemVkQXR0YWNoZWQpe2lmKHQucmVzaXplZEF0dGFjaGVkKXJldHVybiB2b2lkIHQucmVzaXplZEF0dGFjaGVkLmFkZChlKX1lbHNlIHQucmVzaXplZEF0dGFjaGVkPW5ldyBmdW5jdGlvbigpe3ZhciB0LGU7dGhpcy5xPVtdLHRoaXMuYWRkPWZ1bmN0aW9uKHQpe3RoaXMucS5wdXNoKHQpfSx0aGlzLmNhbGw9ZnVuY3Rpb24oKXtmb3IodD0wLGU9dGhpcy5xLmxlbmd0aDt0PGU7dCsrKXRoaXMucVt0XS5jYWxsKCl9fSx0LnJlc2l6ZWRBdHRhY2hlZC5hZGQoZSk7dC5yZXNpemVTZW5zb3I9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0LnJlc2l6ZVNlbnNvci5jbGFzc05hbWU9XCJyZXNpemUtc2Vuc29yXCI7dmFyIG49XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgb3ZlcmZsb3c6IGhpZGRlbjsgei1pbmRleDogLTE7IHZpc2liaWxpdHk6IGhpZGRlbjtcIixyPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7IHRyYW5zaXRpb246IDBzO1wiO3QucmVzaXplU2Vuc29yLnN0eWxlLmNzc1RleHQ9bix0LnJlc2l6ZVNlbnNvci5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJyZXNpemUtc2Vuc29yLWV4cGFuZFwiIHN0eWxlPVwiJytuKydcIj48ZGl2IHN0eWxlPVwiJytyKydcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwicmVzaXplLXNlbnNvci1zaHJpbmtcIiBzdHlsZT1cIicrbisnXCI+PGRpdiBzdHlsZT1cIicrcisnIHdpZHRoOiAyMDAlOyBoZWlnaHQ6IDIwMCVcIj48L2Rpdj48L2Rpdj4nLHQuYXBwZW5kQ2hpbGQodC5yZXNpemVTZW5zb3IpLHtmaXhlZDoxLGFic29sdXRlOjF9W2Z1bmN0aW9uKHQsZSl7cmV0dXJuIHQuY3VycmVudFN0eWxlP3QuY3VycmVudFN0eWxlW2VdOndpbmRvdy5nZXRDb21wdXRlZFN0eWxlP3dpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShlKTp0LnN0eWxlW2VdfSh0LFwicG9zaXRpb25cIildfHwodC5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpO3ZhciBpLG8scz10LnJlc2l6ZVNlbnNvci5jaGlsZE5vZGVzWzBdLGE9cy5jaGlsZE5vZGVzWzBdLHU9dC5yZXNpemVTZW5zb3IuY2hpbGROb2Rlc1sxXSxjPSh1LmNoaWxkTm9kZXNbMF0sZnVuY3Rpb24oKXthLnN0eWxlLndpZHRoPXMub2Zmc2V0V2lkdGgrMTArXCJweFwiLGEuc3R5bGUuaGVpZ2h0PXMub2Zmc2V0SGVpZ2h0KzEwK1wicHhcIixzLnNjcm9sbExlZnQ9cy5zY3JvbGxXaWR0aCxzLnNjcm9sbFRvcD1zLnNjcm9sbEhlaWdodCx1LnNjcm9sbExlZnQ9dS5zY3JvbGxXaWR0aCx1LnNjcm9sbFRvcD11LnNjcm9sbEhlaWdodCxpPXQub2Zmc2V0V2lkdGgsbz10Lm9mZnNldEhlaWdodH0pO2MoKTt2YXIgZD1mdW5jdGlvbih0LGUsbil7dC5hdHRhY2hFdmVudD90LmF0dGFjaEV2ZW50KFwib25cIitlLG4pOnQuYWRkRXZlbnRMaXN0ZW5lcihlLG4pfSxmPWZ1bmN0aW9uKCl7dC5vZmZzZXRXaWR0aD09aSYmdC5vZmZzZXRIZWlnaHQ9PW98fHQucmVzaXplZEF0dGFjaGVkJiZ0LnJlc2l6ZWRBdHRhY2hlZC5jYWxsKCksYygpfTtkKHMsXCJzY3JvbGxcIixmKSxkKHUsXCJzY3JvbGxcIixmKX12YXIgaT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCksbz1cIltvYmplY3QgQXJyYXldXCI9PT1pfHxcIltvYmplY3QgTm9kZUxpc3RdXCI9PT1pfHxcIltvYmplY3QgSFRNTENvbGxlY3Rpb25dXCI9PT1pfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgalF1ZXJ5JiZ0IGluc3RhbmNlb2YgalF1ZXJ5fHxcInVuZGVmaW5lZFwiIT10eXBlb2YgRWxlbWVudHMmJnQgaW5zdGFuY2VvZiBFbGVtZW50cztpZihvKWZvcih2YXIgcz0wLGE9dC5sZW5ndGg7czxhO3MrKylyKHRbc10sZSk7ZWxzZSByKHQsZSk7dGhpcy5kZXRhY2g9ZnVuY3Rpb24oKXtpZihvKWZvcih2YXIgZT0wLHI9dC5sZW5ndGg7ZTxyO2UrKyluLmRldGFjaCh0W2VdKTtlbHNlIG4uZGV0YWNoKHQpfX0pLmRldGFjaD1mdW5jdGlvbih0KXt0LnJlc2l6ZVNlbnNvciYmKHQucmVtb3ZlQ2hpbGQodC5yZXNpemVTZW5zb3IpLGRlbGV0ZSB0LnJlc2l6ZVNlbnNvcixkZWxldGUgdC5yZXNpemVkQXR0YWNoZWQpfSx2b2lkIDAhPT10JiZ2b2lkIDAhPT10LmV4cG9ydHM/dC5leHBvcnRzPW46d2luZG93LlJlc2l6ZVNlbnNvcj1ufSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big0KSxpPW4oMCksbz1uKDExKSxzPW4oMTIpKCksYT1uKDYzKSx1PW4oNSksYz1cImEudHdpdHRlci1mb2xsb3ctYnV0dG9uXCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVybiBzKHQsYykubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBhKGZ1bmN0aW9uKHQpe3ZhciBlPW8odCksbj17c2NyZWVuTmFtZTpyLnNjcmVlbk5hbWUodC5ocmVmKSxzaG93U2NyZWVuTmFtZTpcImZhbHNlXCIhPT10LmdldEF0dHJpYnV0ZShcImRhdGEtc2hvdy1zY3JlZW4tbmFtZVwiKSxzaG93Q291bnQ6XCJmYWxzZVwiIT09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3ctY291bnRcIiksc2l6ZTp0LmdldEF0dHJpYnV0ZShcImRhdGEtc2l6ZVwiKSxjb3VudDp0LmdldEF0dHJpYnV0ZShcImRhdGEtY291bnRcIikscHJldmlldzp0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJldmlld1wiKX07cmV0dXJuIGkuZm9ySW4obixmdW5jdGlvbih0LG4pe3ZhciByPWVbdF07ZVt0XT11Lmhhc1ZhbHVlKHIpP3I6bn0pLGUuc2NyZWVuTmFtZT1lLnNjcmVlbk5hbWV8fGUuc2NyZWVuX25hbWUsZX0odCksdC5wYXJlbnROb2RlLHQpfSl9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigyKTt0LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXt2YXIgaT1uZXcgcjtyZXR1cm4gbi5lKDMpLnRoZW4oZnVuY3Rpb24ocil7dmFyIG87dHJ5e289big3OCksaS5yZXNvbHZlKG5ldyBvKHQsZSkpfWNhdGNoKHQpe2kucmVqZWN0KHQpfX0uYmluZChudWxsLG4pKS5jYXRjaChmdW5jdGlvbih0KXtpLnJlamVjdCh0KX0pLGkucHJvbWlzZX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDUpLGk9bigwKSxvPW4oNCkscz1uKDExKSxhPW4oMTIpKCksdT1uKDY0KSxjPVwiYS50d2l0dGVyLW1vbWVudFwiO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gYSh0LGMpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdShmdW5jdGlvbih0KXt2YXIgZT1zKHQpLG49e21vbWVudElkOm8ubW9tZW50SWQodC5ocmVmKSxjaHJvbWU6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNocm9tZVwiKSxsaW1pdDp0LmdldEF0dHJpYnV0ZShcImRhdGEtbGltaXRcIil9O3JldHVybiBpLmZvckluKG4sZnVuY3Rpb24odCxuKXt2YXIgaT1lW3RdO2VbdF09ci5oYXNWYWx1ZShpKT9pOm59KSxlfSh0KSx0LnBhcmVudE5vZGUsdCl9KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3ZhciBpPW5ldyByO3JldHVybiBuLmUoNCkudGhlbihmdW5jdGlvbihyKXt2YXIgbzt0cnl7bz1uKDc5KSxpLnJlc29sdmUobmV3IG8odCxlKSl9Y2F0Y2godCl7aS5yZWplY3QodCl9fS5iaW5kKG51bGwsbikpLmNhdGNoKGZ1bmN0aW9uKHQpe2kucmVqZWN0KHQpfSksaS5wcm9taXNlfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMCksaT1uKDExKSxvPW4oMTIpKCkscz1uKDY1KSxhPVwiYS5wZXJpc2NvcGUtb24tYWlyXCIsdT0vXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pPyg/OnBlcmlzY29wZXxwc2NwKVxcLnR2XFwvQD8oW2EtekEtWjAtOV9dKylcXC8/JC9pO3QuZXhwb3J0cz1mdW5jdGlvbih0KXtyZXR1cm4gbyh0LGEpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gcyhmdW5jdGlvbih0KXt2YXIgZT1pKHQpLG49dC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLG89dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNpemVcIikscz11LmV4ZWMobilbMV07cmV0dXJuIHIuYXVnKGUse3VzZXJuYW1lOnMsc2l6ZTpvfSl9KHQpLHQucGFyZW50Tm9kZSx0KX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7dmFyIGk9bmV3IHI7cmV0dXJuIG4uZSg1KS50aGVuKGZ1bmN0aW9uKHIpe3ZhciBvO3RyeXtvPW4oODApLGkucmVzb2x2ZShuZXcgbyh0LGUpKX1jYXRjaCh0KXtpLnJlamVjdCh0KX19LmJpbmQobnVsbCxuKSkuY2F0Y2goZnVuY3Rpb24odCl7aS5yZWplY3QodCl9KSxpLnByb21pc2V9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big1KSxpPW4oMCksbz1uKDY2KSxzPW4oMTEpLGE9bigxMikoKSx1PW4oNjcpLGM9big0KSxkPW4oMTgpLGY9XCJhLnR3aXR0ZXItdGltZWxpbmUsZGl2LnR3aXR0ZXItdGltZWxpbmUsYS50d2l0dGVyLWdyaWRcIixsPVwiRW1iZWRkZWQgU2VhcmNoIHRpbWVsaW5lcyBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gU2VlIGh0dHBzOi8vdHdpdHRlcmNvbW11bml0eS5jb20vdC9kZXByZWNhdGluZy13aWRnZXQtc2V0dGluZ3MvMTAyMjk1LlwiLGg9XCJZb3UgbWF5IGhhdmUgYmVlbiBhZmZlY3RlZCBieSBhbiB1cGRhdGUgdG8gc2V0dGluZ3MgaW4gZW1iZWRkZWQgdGltZWxpbmVzLiBTZWUgaHR0cHM6Ly90d2l0dGVyY29tbXVuaXR5LmNvbS90L2RlcHJlY2F0aW5nLXdpZGdldC1zZXR0aW5ncy8xMDIyOTUuXCIscD1cIkVtYmVkZGVkIGdyaWRzIGhhdmUgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIG5vdyByZW5kZXIgYXMgdGltZWxpbmVzLiBQbGVhc2UgdXBkYXRlIHlvdXIgZW1iZWQgY29kZSB0byB1c2UgdGhlIHR3aXR0ZXItdGltZWxpbmUgY2xhc3MuIE1vcmUgaW5mbzogaHR0cHM6Ly90d2l0dGVyY29tbXVuaXR5LmNvbS90L3VwZGF0ZS1vbi10aGUtZW1iZWRkZWQtZ3JpZC1kaXNwbGF5LXR5cGUvMTE5NTY0LlwiO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiBhKHQsZikubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB1KGZ1bmN0aW9uKHQpe3ZhciBlPXModCksbj10LmdldEF0dHJpYnV0ZShcImRhdGEtc2hvdy1yZXBsaWVzXCIpLGE9e2lzUHJlY29uZmlndXJlZDohIXQuZ2V0QXR0cmlidXRlKFwiZGF0YS13aWRnZXQtaWRcIiksY2hyb21lOnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jaHJvbWVcIiksdHdlZXRMaW1pdDp0LmdldEF0dHJpYnV0ZShcImRhdGEtdHdlZXQtbGltaXRcIil8fHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1saW1pdFwiKSxhcmlhTGl2ZTp0LmdldEF0dHJpYnV0ZShcImRhdGEtYXJpYS1wb2xpdGVcIiksdGhlbWU6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpLGJvcmRlckNvbG9yOnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1ib3JkZXItY29sb3JcIiksc2hvd1JlcGxpZXM6bj9yLmFzQm9vbGVhbihuKTpudWxsLHByb2ZpbGVTY3JlZW5OYW1lOnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zY3JlZW4tbmFtZVwiKSxwcm9maWxlVXNlcklkOnQuZ2V0QXR0cmlidXRlKFwiZGF0YS11c2VyLWlkXCIpLGZhdm9yaXRlc1NjcmVlbk5hbWU6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZhdm9yaXRlcy1zY3JlZW4tbmFtZVwiKSxmYXZvcml0ZXNVc2VySWQ6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZhdm9yaXRlcy11c2VyLWlkXCIpLGxpa2VzU2NyZWVuTmFtZTp0LmdldEF0dHJpYnV0ZShcImRhdGEtbGlrZXMtc2NyZWVuLW5hbWVcIiksbGlrZXNVc2VySWQ6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpa2VzLXVzZXItaWRcIiksbGlzdE93bmVyU2NyZWVuTmFtZTp0LmdldEF0dHJpYnV0ZShcImRhdGEtbGlzdC1vd25lci1zY3JlZW4tbmFtZVwiKSxsaXN0T3duZXJVc2VySWQ6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpc3Qtb3duZXItaWRcIiksbGlzdElkOnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1saXN0LWlkXCIpLGxpc3RTbHVnOnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1saXN0LXNsdWdcIiksY3VzdG9tVGltZWxpbmVJZDp0LmdldEF0dHJpYnV0ZShcImRhdGEtY3VzdG9tLXRpbWVsaW5lLWlkXCIpLHN0YXRpY0NvbnRlbnQ6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRpYy1jb250ZW50XCIpLHVybDp0LmhyZWZ9O3JldHVybiBhLmlzUHJlY29uZmlndXJlZCYmKGMuaXNTZWFyY2hVcmwoYS51cmwpP2QucHVibGljRXJyb3IobCx0KTpkLnB1YmxpY0xvZyhoLHQpKSxcInR3aXR0ZXItZ3JpZFwiPT09dC5jbGFzc05hbWUmJmQucHVibGljTG9nKHAsdCksKGE9aS5hdWcoYSxlKSkuZGF0YVNvdXJjZT1vKGEpLGEuaWQ9YS5kYXRhU291cmNlJiZhLmRhdGFTb3VyY2UuaWQsYX0odCksdC5wYXJlbnROb2RlLHQsZSl9KX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuKXtmb3IodmFyIHIsaT0wO2k8dC5sZW5ndGg7aSsrKWlmKHI9ZS5jYWxsKG4sdFtpXSxpLHQpKXJldHVybiByfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMzEpO3QuZXhwb3J0cz1yLmJ1aWxkKFtuKDMyKSxuKDEzNSldKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMCksaT1uKDEzNCk7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3JldHVyblwiZW5cIj09PXR8fHIuY29udGFpbnMoaSx0KX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPVtcImhpXCIsXCJ6aC1jblwiLFwiZnJcIixcInpoLXR3XCIsXCJtc2FcIixcImZpbFwiLFwiZmlcIixcInN2XCIsXCJwbFwiLFwiamFcIixcImtvXCIsXCJkZVwiLFwiaXRcIixcInB0XCIsXCJlc1wiLFwicnVcIixcImlkXCIsXCJ0clwiLFwiZGFcIixcIm5vXCIsXCJubFwiLFwiaHVcIixcImZhXCIsXCJhclwiLFwidXJcIixcImhlXCIsXCJ0aFwiLFwiY3NcIixcInVrXCIsXCJ2aVwiLFwicm9cIixcImJuXCIsXCJlbFwiLFwiZW4tZ2JcIixcImd1XCIsXCJrblwiLFwibXJcIixcInRhXCIsXCJiZ1wiLFwiY2FcIixcImhyXCIsXCJzclwiLFwic2tcIl19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDQpLGk9big0NCksbz1cImNvbGxlY3Rpb246XCI7ZnVuY3Rpb24gcyh0LGUpe3JldHVybiByLmNvbGxlY3Rpb25JZCh0KXx8ZX10LmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5wYXJhbXMoe2lkOnt9LHVybDp7fX0pLHQub3ZlcnJpZGVQcm9wZXJ0eShcImlkXCIse2dldDpmdW5jdGlvbigpe3ZhciB0PXModGhpcy5wYXJhbXMudXJsLHRoaXMucGFyYW1zLmlkKTtyZXR1cm4gbyt0fX0pLHQuYmVmb3JlKFwiaW5pdGlhbGl6ZVwiLGZ1bmN0aW9uKCl7aWYoIXModGhpcy5wYXJhbXMudXJsLHRoaXMucGFyYW1zLmlkKSl0aHJvdyBuZXcgRXJyb3IoXCJvbmUgb2YgdXJsIG9yIGlkIGlzIHJlcXVpcmVkXCIpO2koKX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMzEpO3QuZXhwb3J0cz1yLmJ1aWxkKFtuKDMyKSxuKDEzNyldKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNCksaT1uKDQ0KSxvPVwibGlrZXM6XCI7ZnVuY3Rpb24gcyh0KXtyZXR1cm4gci5saWtlc1NjcmVlbk5hbWUodC51cmwpfHx0LnNjcmVlbk5hbWV9dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3QucGFyYW1zKHtzY3JlZW5OYW1lOnt9LHVzZXJJZDp7fSx1cmw6e319KSx0Lm92ZXJyaWRlUHJvcGVydHkoXCJpZFwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgdD1zKHRoaXMucGFyYW1zKXx8dGhpcy5wYXJhbXMudXNlcklkO3JldHVybiBvK3R9fSksdC5iZWZvcmUoXCJpbml0aWFsaXplXCIsZnVuY3Rpb24oKXtpZighcyh0aGlzLnBhcmFtcykmJiF0aGlzLnBhcmFtcy51c2VySWQpdGhyb3cgbmV3IEVycm9yKFwic2NyZWVuIG5hbWUgb3IgdXNlciBpZCBpcyByZXF1aXJlZFwiKTtpKCl9KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDMxKTt0LmV4cG9ydHM9ci5idWlsZChbbigzMiksbigxMzkpXSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDQpLGk9bigwKSxvPW4oMjgpLHM9XCJsaXN0OlwiO2Z1bmN0aW9uIGEodCl7dmFyIGU9ci5saXN0U2NyZWVuTmFtZUFuZFNsdWcodC51cmwpfHx0O3JldHVybiBpLmNvbXBhY3Qoe3NjcmVlbl9uYW1lOmUub3duZXJTY3JlZW5OYW1lLHVzZXJfaWQ6ZS5vd25lclVzZXJJZCxsaXN0X3NsdWc6ZS5zbHVnfSl9dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3QucGFyYW1zKHtpZDp7fSxvd25lclNjcmVlbk5hbWU6e30sb3duZXJVc2VySWQ6e30sc2x1Zzp7fSx1cmw6e319KSx0Lm92ZXJyaWRlUHJvcGVydHkoXCJpZFwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgdCxlLG47cmV0dXJuIHRoaXMucGFyYW1zLmlkP3MrdGhpcy5wYXJhbXMuaWQ6KGU9KHQ9YSh0aGlzLnBhcmFtcykpJiZ0Lmxpc3Rfc2x1Zy5yZXBsYWNlKC8tL2csXCJfXCIpLG49dCYmKHQuc2NyZWVuX25hbWV8fHQudXNlcl9pZCkscysobitcIjpcIikrZSl9fSksdC5vdmVycmlkZVByb3BlcnR5KFwiZW5kcG9pbnRcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIHQsZT1bXCJ0aW1lbGluZS1saXN0XCJdO3JldHVybiB0aGlzLnBhcmFtcy5pZD9lLnB1c2goXCJsaXN0LWlkXCIsdGhpcy5wYXJhbXMuaWQpOih0PWEodGhpcy5wYXJhbXMpLGUucHVzaChcInNjcmVlbi1uYW1lXCIsdC5zY3JlZW5fbmFtZSxcInNsdWdcIix0Lmxpc3Rfc2x1ZykpLG8uZW1iZWRTZXJ2aWNlKGUpfX0pLHQuYmVmb3JlKFwiaW5pdGlhbGl6ZVwiLGZ1bmN0aW9uKCl7dmFyIHQ9YSh0aGlzLnBhcmFtcyk7aWYoaS5pc0VtcHR5T2JqZWN0KHQpJiYhdGhpcy5wYXJhbXMuaWQpdGhyb3cgbmV3IEVycm9yKFwicXVhbGlmaWVkIHNsdWcgb3IgbGlzdCBpZCByZXF1aXJlZFwiKX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMzEpO3QuZXhwb3J0cz1yLmJ1aWxkKFtuKDMyKSxuKDE0MSldKX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNCksaT1uKDUpLG89bigwKSxzPW4oMjgpLGE9XCJwcm9maWxlOlwiO2Z1bmN0aW9uIHUodCxlKXtyZXR1cm4gci5zY3JlZW5OYW1lKHQpfHxlfXQuZXhwb3J0cz1mdW5jdGlvbih0KXt0LnBhcmFtcyh7c2hvd1JlcGxpZXM6e2ZhbGxiYWNrOiExLHRyYW5zZm9ybTppLmFzQm9vbGVhbn0sc2NyZWVuTmFtZTp7fSx1c2VySWQ6e30sdXJsOnt9fSksdC5vdmVycmlkZVByb3BlcnR5KFwiaWRcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIHQ9dSh0aGlzLnBhcmFtcy51cmwsdGhpcy5wYXJhbXMuc2NyZWVuTmFtZSk7cmV0dXJuIGErKHR8fHRoaXMucGFyYW1zLnVzZXJJZCl9fSksdC5vdmVycmlkZVByb3BlcnR5KFwiZW5kcG9pbnRcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIHQ9W1widGltZWxpbmUtcHJvZmlsZVwiXSxlPXUodGhpcy5wYXJhbXMudXJsLHRoaXMucGFyYW1zLnNjcmVlbk5hbWUpO3JldHVybiBlP3QucHVzaChcInNjcmVlbi1uYW1lXCIsZSk6dC5wdXNoKFwidXNlci1pZFwiLHRoaXMucGFyYW1zLnVzZXJJZCkscy5lbWJlZFNlcnZpY2UodCl9fSksdC5hcm91bmQoXCJxdWVyeVBhcmFtc1wiLGZ1bmN0aW9uKHQpe3JldHVybiBvLmF1Zyh0KCkse3Nob3dSZXBsaWVzOnRoaXMucGFyYW1zLnNob3dSZXBsaWVzP1widHJ1ZVwiOlwiZmFsc2VcIn0pfSksdC5iZWZvcmUoXCJpbml0aWFsaXplXCIsZnVuY3Rpb24oKXtpZighdSh0aGlzLnBhcmFtcy51cmwsdGhpcy5wYXJhbXMuc2NyZWVuTmFtZSkmJiF0aGlzLnBhcmFtcy51c2VySWQpdGhyb3cgbmV3IEVycm9yKFwic2NyZWVuIG5hbWUgb3IgdXNlciBpZCBpcyByZXF1aXJlZFwiKX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7dmFyIGk9bmV3IHI7cmV0dXJuIG4uZSg2KS50aGVuKGZ1bmN0aW9uKHIpe3ZhciBvO3RyeXtvPW4oODEpLGkucmVzb2x2ZShuZXcgbyh0LGUpKX1jYXRjaCh0KXtpLnJlamVjdCh0KX19LmJpbmQobnVsbCxuKSkuY2F0Y2goZnVuY3Rpb24odCl7aS5yZWplY3QodCl9KSxpLnByb21pc2V9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMCksaT1uKDQpLG89bigwKSxzPW4oMTEpLGE9bigxMikoKSx1PW4oNjgpLGM9XCJibG9ja3F1b3RlLnR3aXR0ZXItdHdlZXQsIGJsb2NrcXVvdGUudHdpdHRlci12aWRlb1wiLGQ9L1xcYnR3LWFsaWduLShsZWZ0fHJpZ2h0fGNlbnRlcilcXGIvO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3JldHVybiBhKHQsYykubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB1KGZ1bmN0aW9uKHQpe3ZhciBlPXModCksbj10LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQVwiKSxhPW4mJm5bbi5sZW5ndGgtMV0sdT1hJiZpLnN0YXR1cyhhLmhyZWYpLGM9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbnZlcnNhdGlvblwiKSxmPVwibm9uZVwiPT1jfHxcImhpZGRlblwiPT1jfHxyLnByZXNlbnQodCxcInR3LWhpZGUtdGhyZWFkXCIpLGw9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhcmRzXCIpLGg9XCJub25lXCI9PWx8fFwiaGlkZGVuXCI9PWx8fHIucHJlc2VudCh0LFwidHctaGlkZS1tZWRpYVwiKSxwPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tZWRpYS1tYXgtd2lkdGhcIiksbT10LmdldEF0dHJpYnV0ZShcImRhdGEtYWxpZ25cIil8fHQuZ2V0QXR0cmlidXRlKFwiYWxpZ25cIiksdj10LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIik7cmV0dXJuIW0mJmQudGVzdCh0LmNsYXNzTmFtZSkmJihtPVJlZ0V4cC4kMSksby5hdWcoZSx7dHdlZXRJZDp1LGhpZGVUaHJlYWQ6ZixoaWRlQ2FyZDpoLG1lZGlhTWF4V2lkdGg6cCxhbGlnbjptLHRoZW1lOnYsaWQ6dX0pfSh0KSx0LnBhcmVudE5vZGUsdCxlKX0pfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMik7dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSl7dmFyIGk9bmV3IHI7cmV0dXJuIG4uZSg3KS50aGVuKGZ1bmN0aW9uKHIpe3ZhciBvO3RyeXtvPW4oODIpLGkucmVzb2x2ZShuZXcgbyh0LGUpKX1jYXRjaCh0KXtpLnJlamVjdCh0KX19LmJpbmQobnVsbCxuKSkuY2F0Y2goZnVuY3Rpb24odCl7aS5yZWplY3QodCl9KSxpLnByb21pc2V9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxMCksaT1uKDApLG89bigxMSkscz1uKDEyKSgpLGE9big2OSksdT1uKDUpLGM9XCJhLnR3aXR0ZXItc2hhcmUtYnV0dG9uLCBhLnR3aXR0ZXItbWVudGlvbi1idXR0b24sIGEudHdpdHRlci1oYXNodGFnLWJ1dHRvblwiLGQ9XCJ0d2l0dGVyLWhhc2h0YWctYnV0dG9uXCIsZj1cInR3aXR0ZXItbWVudGlvbi1idXR0b25cIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7cmV0dXJuIHModCxjKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGEoZnVuY3Rpb24odCl7dmFyIGU9byh0KSxuPXtzY3JlZW5OYW1lOnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1idXR0b24tc2NyZWVuLW5hbWVcIiksdGV4dDp0LmdldEF0dHJpYnV0ZShcImRhdGEtdGV4dFwiKSx0eXBlOnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpLHNpemU6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNpemVcIiksdXJsOnQuZ2V0QXR0cmlidXRlKFwiZGF0YS11cmxcIiksaGFzaHRhZ3M6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhhc2h0YWdzXCIpLHZpYTp0LmdldEF0dHJpYnV0ZShcImRhdGEtdmlhXCIpLGJ1dHRvbkhhc2h0YWc6dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJ1dHRvbi1oYXNodGFnXCIpfTtyZXR1cm4gaS5mb3JJbihuLGZ1bmN0aW9uKHQsbil7dmFyIHI9ZVt0XTtlW3RdPXUuaGFzVmFsdWUocik/cjpufSksZS5zY3JlZW5OYW1lPWUuc2NyZWVuTmFtZXx8ZS5zY3JlZW5fbmFtZSxlLmJ1dHRvbkhhc2h0YWc9ZS5idXR0b25IYXNodGFnfHxlLmJ1dHRvbl9oYXNodGFnfHxlLmhhc2h0YWcsci5wcmVzZW50KHQsZCkmJihlLnR5cGU9XCJoYXNodGFnXCIpLHIucHJlc2VudCh0LGYpJiYoZS50eXBlPVwibWVudGlvblwiKSxlfSh0KSx0LnBhcmVudE5vZGUsdCl9KX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUpe3ZhciBpPW5ldyByO3JldHVybiBuLmUoMykudGhlbihmdW5jdGlvbihyKXt2YXIgbzt0cnl7bz1uKDgzKSxpLnJlc29sdmUobmV3IG8odCxlKSl9Y2F0Y2godCl7aS5yZWplY3QodCl9fS5iaW5kKG51bGwsbikpLmNhdGNoKGZ1bmN0aW9uKHQpe2kucmVqZWN0KHQpfSksaS5wcm9taXNlfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMCk7dC5leHBvcnRzPXIuYXVnKHt9LG4oMTQ4KSxuKDE0OSksbigxNTApLG4oMTUxKSxuKDE1MiksbigxNTMpLG4oMTU0KSxuKDE1NSkpfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big2MCksaT1uKDE1KShbXCJicm9hZGNhc3RJZFwiXSx7fSxyKTt0LmV4cG9ydHM9e2NyZWF0ZUJyb2FkY2FzdDppfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNjEpLGk9bigxNSkoW1widXNlcklkXCJdLHt9LHIpO3QuZXhwb3J0cz17Y3JlYXRlRE1CdXR0b246aX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDYzKSxpPW4oMTUpKFtcInNjcmVlbk5hbWVcIl0se30scik7dC5leHBvcnRzPXtjcmVhdGVGb2xsb3dCdXR0b246aX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDY0KSxpPW4oMTUpKFtcIm1vbWVudElkXCJdLHt9LHIpO3QuZXhwb3J0cz17Y3JlYXRlTW9tZW50Oml9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big2NSksaT1uKDE1KShbXCJ1c2VybmFtZVwiXSx7fSxyKTt0LmV4cG9ydHM9e2NyZWF0ZVBlcmlzY29wZU9uQWlyQnV0dG9uOml9fSxmdW5jdGlvbih0LGUsbil7dmFyIHI9big4KSxpPW4oMTgpLG89big0KSxzPW4oMCksYT1uKDUpLHU9big2NiksYz1uKDY3KSxkPW4oMTUpKFtdLHt9LGMpLGY9big2KSxsPVwiRW1iZWRkZWQgZ3JpZHMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgdHd0dHIud2lkZ2V0cy5jcmVhdGVUaW1lbGluZSBpbnN0ZWFkLiBNb3JlIGluZm86IGh0dHBzOi8vdHdpdHRlcmNvbW11bml0eS5jb20vdC91cGRhdGUtb24tdGhlLWVtYmVkZGVkLWdyaWQtZGlzcGxheS10eXBlLzExOTU2NC5cIixoPXtjcmVhdGVUaW1lbGluZTpwLGNyZWF0ZUdyaWRGcm9tQ29sbGVjdGlvbjpmdW5jdGlvbih0KXt2YXIgZT1zLnRvUmVhbEFycmF5KGFyZ3VtZW50cykuc2xpY2UoMSksbj17c291cmNlVHlwZTpcImNvbGxlY3Rpb25cIixpZDp0fTtyZXR1cm4gZS51bnNoaWZ0KG4pLGkucHVibGljTG9nKGwpLHAuYXBwbHkodGhpcyxlKX19O2Z1bmN0aW9uIHAodCl7dmFyIGUsbj1zLnRvUmVhbEFycmF5KGFyZ3VtZW50cykuc2xpY2UoMSk7cmV0dXJuIGEuaXNTdHJpbmcodCl8fGEuaXNOdW1iZXIodCk/Zi5yZWplY3QoXCJFbWJlZGRlZCB0aW1lbGluZXMgd2l0aCB3aWRnZXQgc2V0dGluZ3MgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQuIFNlZSBodHRwczovL3R3aXR0ZXJjb21tdW5pdHkuY29tL3QvZGVwcmVjYXRpbmctd2lkZ2V0LXNldHRpbmdzLzEwMjI5NS5cIik6cy5pc09iamVjdCh0KT8odD10fHx7fSxuLmZvckVhY2goZnVuY3Rpb24odCl7cy5pc1R5cGUoXCJvYmplY3RcIix0KSYmZnVuY3Rpb24odCl7dC5hcmlhTGl2ZT10LmFyaWFQb2xpdGV9KGU9dCl9KSxlfHwoZT17fSxuLnB1c2goZSkpLHQubGFuZz1lLmxhbmcsdC50d2VldExpbWl0PWUudHdlZXRMaW1pdCx0LnNob3dSZXBsaWVzPWUuc2hvd1JlcGxpZXMsZS5kYXRhU291cmNlPXUodCksZC5hcHBseSh0aGlzLG4pKTpmLnJlamVjdChcImRhdGEgc291cmNlIG11c3QgYmUgYW4gb2JqZWN0LlwiKX1vLmlzVHdpdHRlclVSTChyLmhyZWYpJiYoaC5jcmVhdGVUaW1lbGluZVByZXZpZXc9ZnVuY3Rpb24odCxlLG4pe3ZhciByPXtwcmV2aWV3UGFyYW1zOnQsdXNlTGVnYWN5RGVmYXVsdHM6ITAsaXNQcmV2aWV3VGltZWxpbmU6ITB9O3JldHVybiByLmRhdGFTb3VyY2U9dShyKSxkKGUscixuKX0pLHQuZXhwb3J0cz1ofSxmdW5jdGlvbih0LGUsbil7dmFyIHIsaT1uKDApLG89big2OCkscz1uKDE1KSxhPShyPXMoW1widHdlZXRJZFwiXSx7fSxvKSxmdW5jdGlvbigpe3JldHVybiBpLnRvUmVhbEFycmF5KGFyZ3VtZW50cykuc2xpY2UoMSkuZm9yRWFjaChmdW5jdGlvbih0KXtpLmlzVHlwZShcIm9iamVjdFwiLHQpJiYodC5oaWRlQ2FyZD1cIm5vbmVcIj09dC5jYXJkc3x8XCJoaWRkZW5cIj09dC5jYXJkcyx0LmhpZGVUaHJlYWQ9XCJub25lXCI9PXQuY29udmVyc2F0aW9ufHxcImhpZGRlblwiPT10LmNvbnZlcnNhdGlvbil9KSxyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pO3QuZXhwb3J0cz17Y3JlYXRlVHdlZXQ6YSxjcmVhdGVUd2VldEVtYmVkOmEsY3JlYXRlVmlkZW86YX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDApLGk9big2OSksbz1uKDE1KSxzPW8oW1widXJsXCJdLHt0eXBlOlwic2hhcmVcIn0saSksYT1vKFtcImJ1dHRvbkhhc2h0YWdcIl0se3R5cGU6XCJoYXNodGFnXCJ9LGkpLHU9byhbXCJzY3JlZW5OYW1lXCJdLHt0eXBlOlwibWVudGlvblwifSxpKTtmdW5jdGlvbiBjKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiByLnRvUmVhbEFycmF5KGFyZ3VtZW50cykuc2xpY2UoMSkuZm9yRWFjaChmdW5jdGlvbih0KXtyLmlzVHlwZShcIm9iamVjdFwiLHQpJiYodC5zY3JlZW5OYW1lPXQuc2NyZWVuTmFtZXx8dC5zY3JlZW5fbmFtZSx0LmJ1dHRvbkhhc2h0YWc9dC5idXR0b25IYXNodGFnfHx0LmJ1dHRvbl9oYXNodGFnfHx0Lmhhc2h0YWcpfSksdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fXQuZXhwb3J0cz17Y3JlYXRlU2hhcmVCdXR0b246YyhzKSxjcmVhdGVIYXNodGFnQnV0dG9uOmMoYSksY3JlYXRlTWVudGlvbkJ1dHRvbjpjKHUpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByLGksbyxzPW4oMyksYT1uKDEpLHU9MCxjPVtdLGQ9cy5jcmVhdGVFbGVtZW50KFwiYVwiKTtmdW5jdGlvbiBmKCl7dmFyIHQsZTtmb3IodT0xLHQ9MCxlPWMubGVuZ3RoO3Q8ZTt0KyspY1t0XSgpfS9ebG9hZGV8Yy8udGVzdChzLnJlYWR5U3RhdGUpJiYodT0xKSxzLmFkZEV2ZW50TGlzdGVuZXImJnMuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixpPWZ1bmN0aW9uKCl7cy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGksITEpLGYoKX0sITEpLGQuZG9TY3JvbGwmJnMuYXR0YWNoRXZlbnQoXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixyPWZ1bmN0aW9uKCl7L15jLy50ZXN0KHMucmVhZHlTdGF0ZSkmJihzLmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsciksZigpKX0pLG89ZC5kb1Njcm9sbD9mdW5jdGlvbih0KXthLnNlbGYhPWEudG9wP3U/dCgpOmMucHVzaCh0KTpmdW5jdGlvbigpe3RyeXtkLmRvU2Nyb2xsKFwibGVmdFwiKX1jYXRjaChlKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe28odCl9LDUwKX10KCl9KCl9OmZ1bmN0aW9uKHQpe3U/dCgpOmMucHVzaCh0KX0sdC5leHBvcnRzPW99LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDQyKSxpPW4oOSk7dC5leHBvcnRzPWZ1bmN0aW9uKCl7aS5zZXQoXCJidWlsZFZlcnNpb25cIixyLnZlcnNpb24pfX0sZnVuY3Rpb24odCxlLG4pe24oMTU5KSxuKDE2MiksbigxNjMpfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxNjApLGk9bigyNyksbz1uKDcwKSxzPW5ldyByLGE9ZnVuY3Rpb24odCl7dC53aWRnZXRzJiYxPT09dC53aWRnZXRzLmxlbmd0aCYmKHMuc3RhcnQoKSxpLmVtaXR0ZXIudW5iaW5kKGkuQUxMX1dJREdFVFNfUkVOREVSX1NUQVJULGEpKX0sdT1mdW5jdGlvbih0KXt2YXIgZTt0LndpZGdldHMmJjE9PT10LndpZGdldHMubGVuZ3RoJiYoZT10LndpZGdldHNbMF0scy5lbmQoKSxlLmRhdGFzZXQmJmUuZGF0YXNldC50d2VldElkJiZvKHtkdXJhdGlvbjpzLmR1cmF0aW9uKCksbmFtZXNwYWNlOntlbGVtZW50OlwidHdlZXRcIixhY3Rpb246XCJyZW5kZXJcIn0sd2lkZ2V0SWRzOltlLmRhdGFzZXQudHdlZXRJZF19KSksaS5lbWl0dGVyLnVuYmluZChpLkFMTF9XSURHRVRTX1JFTkRFUl9FTkQsdSl9O2kuZW1pdHRlci5iaW5kKGkuQUxMX1dJREdFVFNfUkVOREVSX1NUQVJULGEpLGkuZW1pdHRlci5iaW5kKGkuQUxMX1dJREdFVFNfUkVOREVSX0VORCx1KX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMTYxKTtmdW5jdGlvbiBpKCl7fWkucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dGhpcy5fc3RhcnRUaW1lPXIoKX0saS5wcm90b3R5cGUuZW5kPWZ1bmN0aW9uKCl7dGhpcy5fZHVyYXRpb249cigpLXRoaXMuX3N0YXJ0VGltZX0saS5wcm90b3R5cGUuZHVyYXRpb249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZHVyYXRpb259LHQuZXhwb3J0cz1pfSxmdW5jdGlvbih0LGUsbil7dmFyIHI9bigxKTt0LmV4cG9ydHM9ZnVuY3Rpb24oKXtyZXR1cm4gci5wZXJmb3JtYW5jZSYmci5wZXJmb3JtYW5jZS5ub3c/ci5wZXJmb3JtYW5jZS5ub3coKTpEYXRlLm5vdygpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciByLGk9bigyNyksbz0wO2Z1bmN0aW9uIHMoKXtyJiZyLmxlbmd0aD09PW8mJihpLmVtaXR0ZXIudHJpZ2dlcihpLkFMTF9XSURHRVRTX0FORF9JTUFHRVNfTE9BREVELHIpLHI9bnVsbCl9aS5lbWl0dGVyLmJpbmQoaS5BTExfV0lER0VUU19SRU5ERVJfRU5ELGZ1bmN0aW9uKHQpe3I9dC53aWRnZXRzLHMoKX0pLHQuZXhwb3J0cz17cmVwb3J0SW1hZ2VzTG9hZEZvckFXaWRnZXQ6ZnVuY3Rpb24oKXtvKysscygpfX19LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDI3KSxpPW4oNzApLG89bigxNjQpLHM9big0KSxhPW4oMSksdT1uKDApLGM9bigyMCksZD1uKDYyKTtmdW5jdGlvbiBmKHQpe3JldHVybiB0LnBlcmZvcm1hbmNlLmdldEVudHJpZXNCeVR5cGUoXCJyZXNvdXJjZVwiKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHMuaXNUd2ltZ1VSTCh0Lm5hbWUpfHxzLmlzVHdpdHRlclVSTCh0Lm5hbWUpfSkucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbZS5uYW1lXT1lLmR1cmF0aW9uLHR9LHt9KX1yLmVtaXR0ZXIuYmluZChyLkFMTF9XSURHRVRTX0FORF9JTUFHRVNfTE9BREVELGZ1bmN0aW9uKHQpe3ZhciBlLG4scj1bXTtjLmhhc1BlcmZvcm1hbmNlSW5mb3JtYXRpb24oKSYmKGU9ZihhKSxkLmlzU3VwcG9ydGVkKCl8fChyPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiB1LmF1Zyh0LGYoZS5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcpKX0se30pfSh0KSksbj11LmF1Zyh7fSxlLHIpLE9iamVjdC5rZXlzKG8pLmZvckVhY2goZnVuY3Rpb24odCl7IWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1PYmplY3Qua2V5cyh0KS5yZWR1Y2UoZnVuY3Rpb24oZSxyKXtyZXR1cm4gbihyKT9lK3Rbcl06ZX0sMCk7aSh7ZHVyYXRpb246cixuYW1lc3BhY2U6e2VsZW1lbnQ6ZSxhY3Rpb246XCJyZXNvdXJjZVwifX0pfShuLHQsb1t0XSl9KSl9KX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oNCksaT17YWxsOmZ1bmN0aW9uKCl7cmV0dXJuITB9LGltYWdlOmZ1bmN0aW9uKHQpe3JldHVybiByLmlzVHdpbWdVUkwodCl9LHNldHRpbmdzOmZ1bmN0aW9uKHQpe3JldHVybiByLmlzU2V0dGluZ3NVUkwodCl9LHdpZGdldF9pZnJhbWU6ZnVuY3Rpb24odCl7cmV0dXJuIHIuaXNXaWRnZXRJZnJhbWVVUkwodCl9fTt0LmV4cG9ydHM9aX1dKSkpOyJdLCJmaWxlIjoiL1VzZXJzL3NvaGFtYWdhcndhbC9EZXNrdG9wL1dlYiBEZXYgQ29ob3J0IDMvY29ob3J0My9icmFpbmx5LWZyb250ZW5kL3dpZGdldHMuanMifQ==