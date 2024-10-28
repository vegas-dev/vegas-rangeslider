function g(r, e) {
  return r.filter(function(t) {
    return !e.includes(t);
  });
}
function p(...r) {
  const e = (t) => t && typeof t == "object";
  return r.reduce((t, i) => (Object.keys(i).forEach((n) => {
    const a = t[n], s = i[n];
    Array.isArray(a) && Array.isArray(s) ? t[n] = a.concat(...s) : e(a) && e(s) ? t[n] = p(a, s) : t[n] = s;
  }), t), {});
}
function h(r) {
  for (let e in r)
    if (Object.prototype.hasOwnProperty.call(r, e))
      return !1;
  return !0;
}
function y(r) {
  if (r === "true")
    return !0;
  if (r === "false")
    return !1;
  if (r === Number(r).toString())
    return Number(r);
  if (r === "" || r === "null")
    return null;
  if (typeof r != "string")
    return r;
  try {
    return JSON.parse(decodeURIComponent(r));
  } catch {
    return r;
  }
}
const d = {
  getDataAttributes(r, e = !0) {
    if (!r)
      return {};
    const t = {}, i = [].filter.call(r.attributes, function(n) {
      return /^data-/.test(n.name);
    });
    return i.length && i.forEach(function(n) {
      let a = n.name;
      e && (a = a.slice(5)), t[a] = y(n.value);
    }), t;
  },
  getAttribute: function(r, e) {
    return r ? r.getAttribute(e) : "";
  },
  find: function(r) {
    if (r)
      if (typeof r == "string") {
        let e = document.querySelector(r);
        if (e) return e;
        throw new Error("Ахпер! Не удалось найти элемент");
      } else {
        if (typeof r == "object")
          return r;
        throw new Error("КЭП! Какая-то дичь к нам залетела");
      }
    else
      throw new Error("Товарищ! Первый параметр не должен быть пустым!");
  }
};
class b {
  constructor() {
    this._element = null, this._params = {};
  }
  get element() {
    return this._element;
  }
  set element(e) {
    this._element = d.find(e);
  }
  get params() {
    return this._params;
  }
  set params(e) {
    if (!h(e)) {
      let t = d.getDataAttributes(this.element);
      this._params = p(e, t);
    }
  }
}
class w extends b {
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
    }, this._id = "vg-rs-" + Math.round(Math.random() * 100), this._container = null, this.element = e, this.params = p(t, this.paramsDefault), this.build(), this.init();
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
    this._container = d.find(e);
  }
  build() {
    const e = this;
    let t = document.createElement("span");
    switch (t.classList.add(e.classes.container), t.id = e._id, e.params.skin) {
      case "flat":
        t.classList.add(e.classes.skin.flat);
        break;
      case "round":
        t.classList.add(e.classes.skin.round);
        break;
    }
    i(t), n(t), a(t), e.element.setAttribute("value", e.params.from), e.element.before(t);
    function i(s) {
      let o = document.createElement("span");
      o.classList.add(e.classes.wrapper), l(o), s.appendChild(o);
      function l(c) {
        let f = [e.classes.line, e.classes.to, e.classes.from, e.classes.min, e.classes.max];
        if (e.params.type === "single") {
          let u = document.createElement("span");
          u.classList.add(e.classes.single), c.prepend(u), f = g(f, [e.classes.from, e.classes.to]);
        }
        f.length && f.forEach((u) => {
          let m = document.createElement("span");
          m.classList.add(u), c.prepend(m);
        });
      }
    }
    function n(s) {
      let o = document.createElement("span");
      o.classList.add(e.classes.bar), s.appendChild(o);
    }
    function a(s) {
      let o = document.createElement("span");
      o.classList.add(e.classes.handle), s.appendChild(o);
    }
  }
  toggle() {
    const e = this;
    let t = e.container.querySelector("." + e.classes.handle), i = [e.container.querySelector("." + e.classes.line), e.container.querySelector("." + e.classes.bar)], n = e.container.getBoundingClientRect();
    e.params.type === "single" && (i.forEach(function(a) {
      a.onclick = function(s) {
        let o = e.getPosition(s.clientX, n.left, n.width), l = e.setPosition(e.container, "single", {
          left: o,
          max: e.params.max,
          min: e.params.min,
          step: e.params.step
        });
        return e.setData(l), !1;
      };
    }), t.onpointerdown = function(a) {
      t.setPointerCapture(a.pointerId), t.onpointermove = function(s) {
        let o = e.getPosition(s.clientX, n.left, n.width), l = e.setPosition(e.container, "single", {
          left: o,
          max: e.params.max,
          min: e.params.min,
          step: e.params.step
        });
        e.setData(l);
      }, t.onpointerup = function() {
        t.onpointermove = null, t.onpointerup = null;
      };
    });
  }
  setData(e = {}) {
    const t = this;
    e = p(t.params, e);
    for (let i in e)
      if (typeof i != "object") {
        if (i === "min" || i === "max") {
          let n = t.container.querySelector(".vg-rs-" + i);
          n && (n.innerHTML = String(e[i]));
        }
        if (i === "type" && e[i] === "single") {
          let n = t.setPosition(t.container, e[i], e);
          t.container.querySelector(".vg-rs-single").style.left = n.left + "%", t.container.querySelector(".vg-rs-single").style.transform = "translateX(-" + n.left + "%)", t.container.querySelector(".vg-rs-single").innerHTML = n.from, t.container.querySelector(".vg-rs-bar").style.left = "0px", t.container.querySelector(".vg-rs-bar").style.width = n.left + "%", t.container.querySelector(".vg-rs-handle").style.left = n.left + "%", t.container.querySelector(".vg-rs-handle").style.transform = "translateX(-" + n.left + "%)";
        }
      }
  }
  setPosition(e, t, i) {
    let n = {};
    if (t === "single") {
      let a, s = i.from, o = i.step, l = i.min, c = i.max;
      "left" in i ? (a = i.left, s = a * c / 100) : (s > c ? a = 100 : a = s * 100 / c, s < l && (a = 0)), Number.isInteger(o) && (s = Math.round(s), o === 0 ? a = Math.round(a) : (s < o && (s = o), Number.isInteger(s / o) || (s = Math.floor(s / o) * o))), n = {
        left: a,
        max: c,
        min: l,
        from: s
      };
    }
    return n;
  }
  getPosition(e, t, i) {
    let n = (e - t) * 100 / i;
    return n < 0 ? 0 : n > 100 ? 100 : n;
  }
}
function S() {
  new w("#vg-range-slider");
}
document.addEventListener("DOMContentLoaded", S);
