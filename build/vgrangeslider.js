var y = Object.defineProperty;
var b = (t, r, e) => r in t ? y(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var c = (t, r, e) => b(t, typeof r != "symbol" ? r + "" : r, e);
function w(t, r) {
  return t.filter(function(e) {
    return !r.includes(e);
  });
}
function d(...t) {
  return t.reduce((r, e) => (Object.keys(e).forEach((s) => {
    const i = r[s], n = e[s];
    Array.isArray(i) && Array.isArray(n) ? r[s] = i.concat(...n) : g(i) && g(n) ? r[s] = d(i, n) : r[s] = n;
  }), r), {});
}
function E(t) {
  for (let r in t)
    if (Object.prototype.hasOwnProperty.call(t, r))
      return !1;
  return !0;
}
function g(t) {
  return t && typeof t == "object";
}
function S(t) {
  if (t === "true")
    return !0;
  if (t === "false")
    return !1;
  if (t === Number(t).toString())
    return Number(t);
  if (t === "" || t === "null")
    return null;
  if (typeof t != "string")
    return t;
  try {
    return JSON.parse(decodeURIComponent(t));
  } catch {
    return t;
  }
}
const v = {
  getDataAttributes(t, r = !0) {
    if (!t)
      return {};
    const e = {}, s = [].filter.call(t.attributes, function(i) {
      return /^data-/.test(i.name);
    });
    return s.length && s.forEach(function(i) {
      let n = i.name;
      r && (n = n.slice(5)), e[n] = S(i.value);
    }), e;
  },
  getAttribute: function(t, r) {
    return t ? t.getAttribute(r) : "";
  }
};
class L {
  constructor() {
    c(this, "_element");
    c(this, "_params", {});
  }
  get element() {
    return this._element;
  }
  set element(r) {
    if (r)
      if (typeof r == "string") {
        let e = document.querySelector(r);
        if (e) this._element = e;
        else throw new Error("Ахпер! Не удалось найти элемент");
      } else if (typeof r == "object")
        this._element = r;
      else
        throw new Error("КЭП! Какая-то дичь к нам залетела");
    else
      throw new Error("Товарищ! Первый параметр не должен быть пустым!");
  }
  get params() {
    return this._params;
  }
  set params(r) {
    if (!E(r)) {
      let e = v.getDataAttributes(this.element);
      this._params = d(r, e);
    }
  }
}
class C extends L {
  constructor(e, s = {}) {
    super();
    c(this, "paramsDefault");
    c(this, "classes");
    c(this, "id");
    this.paramsDefault = {
      disabled: !1,
      type: "single",
      skin: "round",
      min: 0,
      max: 0,
      from: 0,
      to: 0,
      step: 1,
      postfix: "",
      grid: !1
    }, this.classes = {
      container: "vg-rs",
      wrapper: "vg-rs-wrapper",
      line: "vg-rs-line",
      min: "vg-rs-min",
      max: "vg-rs-max",
      from: "vg-rs-from",
      to: "vg-rs-to",
      single: "vg-rs-single",
      bar: "vg-rs-bar",
      handle: "vg-rs-handle",
      grid: "vg-rs-grid",
      skin: {
        flat: "vg-rs-skin-flat",
        round: "vg-rs-skin-round"
      }
    }, this.element = e, this.params = d(s, this.paramsDefault), this.id = "vg-rs-" + Math.round(Math.random() * 100), this.build(), this.setData({});
  }
  setData(e) {
    const s = this;
    e = d(s.params, e);
    let i = document.getElementById(s.id);
    if (i) {
      for (let n in e)
        if (typeof n != "object") {
          if (n === "min" || n === "max") {
            let a = i.querySelector(".vg-rs-" + n);
            a && (a.innerHTML = String(e[n]));
          }
          if (n === "type" && e[n] === "single") {
            let a = s.setPostion("single", e);
            i.querySelector(".vg-rs-single").style.left = a + "%", i.querySelector(".vg-rs-single").style.transform = "translateX(-" + a + "%)", i.querySelector(".vg-rs-single").innerHTML = Math.round(a), i.querySelector(".vg-rs-bar").style.left = 0, i.querySelector(".vg-rs-bar").style.width = a + "%", i.querySelector(".vg-rs-handle").style.left = a + "%", i.querySelector(".vg-rs-handle").style.transform = "translateX(-" + a + "%)";
          }
        }
    }
  }
  build() {
    const e = this;
    let s = document.createElement("span");
    switch (s.classList.add(e.classes.container), s.id = e.id, e.params.skin) {
      case "flat":
        s.classList.add(e.classes.skin.flat);
        break;
      case "round":
        s.classList.add(e.classes.skin.round);
        break;
    }
    i(s), n(s), a(s), e.element.before(s), e.toggle();
    function i(o) {
      let l = document.createElement("span");
      l.classList.add(e.classes.wrapper), h(l), o.appendChild(l);
      function h(m) {
        let u = [e.classes.line, e.classes.to, e.classes.from, e.classes.min, e.classes.max];
        if (e.params.type === "single") {
          let f = document.createElement("span");
          f.classList.add(e.classes.single), m.prepend(f), u = w(u, [e.classes.from, e.classes.to]);
        }
        u.length && u.forEach((f) => {
          let p = document.createElement("span");
          p.classList.add(f), m.prepend(p);
        });
      }
    }
    function n(o) {
      let l = document.createElement("span");
      l.classList.add(e.classes.bar), o.appendChild(l);
    }
    function a(o) {
      let l = document.createElement("span");
      l.classList.add(e.classes.handle), o.appendChild(l);
    }
  }
  toggle() {
    const e = this;
    if (e.params.type === "single") {
      let s = document.getElementById(e.id), i = s.clientWidth, n = s.querySelector("." + e.classes.handle);
      n.onpointerdown = function(a) {
        n.setPointerCapture(a.pointerId), n.onpointermove = function(o) {
          let l = (o.clientX - s.getBoundingClientRect().left) * 100 / i;
          e.setData({
            from: l
          });
        }, n.onpointerup = function() {
          n.onpointermove = null, n.onpointerup = null;
        };
      };
    }
  }
  setPostion(e, s) {
    if (e === "single") {
      let i = Number(s.max), n = Number(s.min), a = Number(s.from);
      return a <= n && (a = n), a >= i && (a = i), a / 100 * i;
    }
    return 0;
  }
}
function D() {
  new C("#vg-range-slider");
}
document.addEventListener("DOMContentLoaded", D);
