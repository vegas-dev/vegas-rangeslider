function h(s, e) {
  return s.filter(function(t) {
    return !e.includes(t);
  });
}
function p(...s) {
  const e = (t) => t && typeof t == "object";
  return s.reduce((t, r) => (Object.keys(r).forEach((n) => {
    const i = t[n], a = r[n];
    Array.isArray(i) && Array.isArray(a) ? t[n] = i.concat(...a) : e(i) && e(a) ? t[n] = p(i, a) : t[n] = a;
  }), t), {});
}
function y(s) {
  for (let e in s)
    if (Object.prototype.hasOwnProperty.call(s, e))
      return !1;
  return !0;
}
function b(s) {
  if (s === "true")
    return !0;
  if (s === "false")
    return !1;
  if (s === Number(s).toString())
    return Number(s);
  if (s === "" || s === "null")
    return null;
  if (typeof s != "string")
    return s;
  try {
    return JSON.parse(decodeURIComponent(s));
  } catch {
    return s;
  }
}
const u = {
  getDataAttributes(s, e = !0) {
    if (!s)
      return {};
    const t = {}, r = [].filter.call(s.attributes, function(n) {
      return /^data-/.test(n.name);
    });
    return r.length && r.forEach(function(n) {
      let i = n.name;
      e && (i = i.slice(5)), t[i] = b(n.value);
    }), t;
  },
  getAttribute: function(s, e) {
    return s ? s.getAttribute(e) : "";
  },
  find: function(s) {
    if (s)
      if (typeof s == "string") {
        let e = document.querySelector(s);
        if (e) return e;
        throw new Error("Ахпер! Не удалось найти элемент");
      } else {
        if (typeof s == "object")
          return s;
        throw new Error("КЭП! Какая-то дичь к нам залетела");
      }
    else
      throw new Error("Товарищ! Первый параметр не должен быть пустым!");
  }
};
class w {
  constructor() {
    this._element = null, this._params = {};
  }
  get element() {
    return this._element;
  }
  set element(e) {
    this._element = u.find(e);
  }
  get params() {
    return this._params;
  }
  set params(e) {
    if (!y(e)) {
      let t = u.getDataAttributes(this.element);
      this._params = p(e, t);
    }
  }
}
class L extends w {
  constructor(e, t = {}) {
    super(), this.paramsDefault = {
      disabled: !1,
      type: "single",
      skin: "round",
      min: 0,
      max: 0,
      from: 0,
      to: 0,
      step: 0,
      postfix: "",
      grid: !0
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
    }, this._id = "vg-rs-" + Math.round(Math.random() * 100), this._container = null, this.isGridLine = !1, this.element = e, this.params = p(t, this.paramsDefault), this.build(), this.init();
  }
  init() {
    const e = this;
    e.container = "#" + this._id, e.setData(), e.toggle(), window.addEventListener("resize", function() {
      e.toggle();
    });
  }
  get container() {
    return this._container;
  }
  set container(e) {
    this._container = u.find(e);
  }
  build() {
    const e = this;
    let t = document.createElement("span");
    switch (t.classList.add(e.classes.container), t.id = e._id, e.params.grid && t.classList.add("vg-rs-with-grid"), e.params.skin) {
      case "flat":
        t.classList.add(e.classes.skin.flat);
        break;
      case "round":
        t.classList.add(e.classes.skin.round);
        break;
    }
    r(t), n(t), i(t), a(t), e.element.setAttribute("value", e.params.from), e.element.before(t);
    function r(l) {
      let o = document.createElement("span");
      o.classList.add(e.classes.wrapper), c(o), l.appendChild(o);
      function c(m) {
        let f = [e.classes.line, e.classes.to, e.classes.from, e.classes.min, e.classes.max];
        if (e.params.type === "single") {
          let d = document.createElement("span");
          d.classList.add(e.classes.single), m.prepend(d), f = h(f, [e.classes.from, e.classes.to]);
        }
        f.length && f.forEach((d) => {
          let g = document.createElement("span");
          g.classList.add(d), m.prepend(g);
        });
      }
    }
    function n(l) {
      let o = document.createElement("span");
      o.classList.add(e.classes.bar), l.appendChild(o);
    }
    function i(l) {
      let o = document.createElement("span");
      o.classList.add(e.classes.handle), l.appendChild(o);
    }
    function a(l) {
      if (e.params.grid) {
        let o = document.createElement("span");
        o.classList.add(e.classes.grid), l.appendChild(o);
      }
    }
  }
  toggle() {
    const e = this;
    let t = e.container.querySelector("." + e.classes.handle), r = [e.container.querySelector("." + e.classes.line), e.container.querySelector("." + e.classes.bar)], n = e.container.getBoundingClientRect();
    e.params.type === "single" && (r.forEach(function(i) {
      i.onclick = function(a) {
        let l = e.getPosition(a.clientX, n.left, n.width), o = e.setPosition(e.container, "single", {
          left: l,
          max: e.params.max,
          min: e.params.min,
          step: e.params.step
        });
        return e.setData(o), !1;
      };
    }), t.onpointerdown = function(i) {
      t.setPointerCapture(i.pointerId), t.onpointermove = function(a) {
        let l = e.getPosition(a.clientX, n.left, n.width), o = e.setPosition(e.container, "single", {
          left: l,
          max: e.params.max,
          min: e.params.min,
          step: e.params.step
        });
        e.setData(o);
      }, t.onpointerup = function() {
        t.onpointermove = null, t.onpointerup = null;
      };
    });
  }
  setData(e = {}) {
    const t = this;
    e = p(t.params, e);
    for (let r in e)
      if (typeof r != "object") {
        if (r === "min" || r === "max") {
          let n = t.container.querySelector(".vg-rs-" + r);
          n && (n.innerHTML = String(e[r]));
        }
        if (r === "grid") {
          let n = e.step, i = 0;
          if (n === 0 && (n = 1), n !== 1 ? i = e.max / n : i = e.max / 5, !t.isGridLine) {
            let a = t.container.querySelector("." + t.classes.grid), l = document.createElement("span");
            l.classList.add("big"), l.classList.add(t.classes.grid + "-line"), a.append(l);
            for (let o = 1; o <= i; o++) {
              let c = document.createElement("span");
              c.classList.add(t.classes.grid + "-line"), c.classList.add("big"), a.append(c);
            }
            t.isGridLine = !0;
          }
        }
        if (r === "type" && e[r] === "single") {
          let n = t.setPosition(t.container, e[r], e);
          t.container.querySelector(".vg-rs-single").style.left = n.left + "%", t.container.querySelector(".vg-rs-single").style.transform = "translateX(-" + n.left + "%)", t.container.querySelector(".vg-rs-single").innerHTML = n.from, t.container.querySelector(".vg-rs-bar").style.left = "0px", t.container.querySelector(".vg-rs-bar").style.width = n.left + "%", t.container.querySelector(".vg-rs-handle").style.left = n.left + "%", t.container.querySelector(".vg-rs-handle").style.transform = "translateX(-" + n.left + "%)";
        }
      }
  }
  setPosition(e, t, r) {
    let n = {};
    if (t === "single") {
      let i, a = r.from, l = r.step, o = r.min, c = r.max;
      "left" in r ? (i = r.left, a = i * c / 100) : (a > c ? i = 100 : i = a * 100 / c, a < o && (i = 0)), Number.isInteger(l) && (a = Math.round(a), l === 0 ? i = Math.round(i) : (a < l && (a = l), Number.isInteger(a / l) || (a = Math.floor(a / l) * l))), n = {
        left: i,
        max: c,
        min: o,
        from: a
      };
    }
    return n;
  }
  getPosition(e, t, r) {
    let n = (e - t) * 100 / r;
    return n < 0 ? 0 : n > 100 ? 100 : n;
  }
}
function S() {
  new L("#vg-range-slider");
}
document.addEventListener("DOMContentLoaded", S);
