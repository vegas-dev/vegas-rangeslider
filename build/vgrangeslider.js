function ba(s, e) {
  return s.filter(function(B) {
    return !e.includes(B);
  });
}
function rB(...s) {
  const e = (B) => B && typeof B == "object";
  return s.reduce((B, t) => (Object.keys(t).forEach((r) => {
    const C = B[r], i = t[r];
    Array.isArray(C) && Array.isArray(i) ? B[r] = C.concat(...i) : e(C) && e(i) ? B[r] = rB(C, i) : B[r] = i;
  }), B), {});
}
function xa(s) {
  for (let e in s)
    if (Object.prototype.hasOwnProperty.call(s, e))
      return !1;
  return !0;
}
function Aa(s) {
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
const _t = {
  getDataAttributes(s, e = !0) {
    if (!s)
      return {};
    const B = {}, t = [].filter.call(s.attributes, function(r) {
      return /^data-/.test(r.name);
    });
    return t.length && t.forEach(function(r) {
      let C = r.name;
      e && (C = C.slice(5)), B[C] = Aa(r.value);
    }), B;
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
class Sa {
  constructor() {
    this._element = null, this._params = {};
  }
  get element() {
    return this._element;
  }
  set element(e) {
    this._element = _t.find(e);
  }
  get params() {
    return this._params;
  }
  set params(e) {
    if (!xa(e)) {
      let B = _t.getDataAttributes(this.element);
      this._params = rB(e, B);
    }
  }
}
function Ea(s) {
  if (s.__esModule) return s;
  var e = s.default;
  if (typeof e == "function") {
    var B = function t() {
      return this instanceof t ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    B.prototype = e.prototype;
  } else B = {};
  return Object.defineProperty(B, "__esModule", { value: !0 }), Object.keys(s).forEach(function(t) {
    var r = Object.getOwnPropertyDescriptor(s, t);
    Object.defineProperty(B, t, r.get ? r : {
      enumerable: !0,
      get: function() {
        return s[t];
      }
    });
  }), B;
}
const ka = [
  {
    name: "nodejs",
    version: "0.2.0",
    date: "2011-08-26",
    lts: !1,
    security: !1,
    v8: "2.3.8.0"
  },
  {
    name: "nodejs",
    version: "0.3.0",
    date: "2011-08-26",
    lts: !1,
    security: !1,
    v8: "2.5.1.0"
  },
  {
    name: "nodejs",
    version: "0.4.0",
    date: "2011-08-26",
    lts: !1,
    security: !1,
    v8: "3.1.2.0"
  },
  {
    name: "nodejs",
    version: "0.5.0",
    date: "2011-08-26",
    lts: !1,
    security: !1,
    v8: "3.1.8.25"
  },
  {
    name: "nodejs",
    version: "0.6.0",
    date: "2011-11-04",
    lts: !1,
    security: !1,
    v8: "3.6.6.6"
  },
  {
    name: "nodejs",
    version: "0.7.0",
    date: "2012-01-17",
    lts: !1,
    security: !1,
    v8: "3.8.6.0"
  },
  {
    name: "nodejs",
    version: "0.8.0",
    date: "2012-06-22",
    lts: !1,
    security: !1,
    v8: "3.11.10.10"
  },
  {
    name: "nodejs",
    version: "0.9.0",
    date: "2012-07-20",
    lts: !1,
    security: !1,
    v8: "3.11.10.15"
  },
  {
    name: "nodejs",
    version: "0.10.0",
    date: "2013-03-11",
    lts: !1,
    security: !1,
    v8: "3.14.5.8"
  },
  {
    name: "nodejs",
    version: "0.11.0",
    date: "2013-03-28",
    lts: !1,
    security: !1,
    v8: "3.17.13.0"
  },
  {
    name: "nodejs",
    version: "0.12.0",
    date: "2015-02-06",
    lts: !1,
    security: !1,
    v8: "3.28.73.0"
  },
  {
    name: "nodejs",
    version: "4.0.0",
    date: "2015-09-08",
    lts: !1,
    security: !1,
    v8: "4.5.103.30"
  },
  {
    name: "nodejs",
    version: "4.1.0",
    date: "2015-09-17",
    lts: !1,
    security: !1,
    v8: "4.5.103.33"
  },
  {
    name: "nodejs",
    version: "4.2.0",
    date: "2015-10-12",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.35"
  },
  {
    name: "nodejs",
    version: "4.3.0",
    date: "2016-02-09",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.35"
  },
  {
    name: "nodejs",
    version: "4.4.0",
    date: "2016-03-08",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.35"
  },
  {
    name: "nodejs",
    version: "4.5.0",
    date: "2016-08-16",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.37"
  },
  {
    name: "nodejs",
    version: "4.6.0",
    date: "2016-09-27",
    lts: "Argon",
    security: !0,
    v8: "4.5.103.37"
  },
  {
    name: "nodejs",
    version: "4.7.0",
    date: "2016-12-06",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.43"
  },
  {
    name: "nodejs",
    version: "4.8.0",
    date: "2017-02-21",
    lts: "Argon",
    security: !1,
    v8: "4.5.103.45"
  },
  {
    name: "nodejs",
    version: "4.9.0",
    date: "2018-03-28",
    lts: "Argon",
    security: !0,
    v8: "4.5.103.53"
  },
  {
    name: "nodejs",
    version: "5.0.0",
    date: "2015-10-29",
    lts: !1,
    security: !1,
    v8: "4.6.85.28"
  },
  {
    name: "nodejs",
    version: "5.1.0",
    date: "2015-11-17",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.2.0",
    date: "2015-12-09",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.3.0",
    date: "2015-12-15",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.4.0",
    date: "2016-01-06",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.5.0",
    date: "2016-01-21",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.6.0",
    date: "2016-02-09",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.7.0",
    date: "2016-02-23",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.8.0",
    date: "2016-03-09",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.9.0",
    date: "2016-03-16",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.10.0",
    date: "2016-04-01",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.11.0",
    date: "2016-04-21",
    lts: !1,
    security: !1,
    v8: "4.6.85.31"
  },
  {
    name: "nodejs",
    version: "5.12.0",
    date: "2016-06-23",
    lts: !1,
    security: !1,
    v8: "4.6.85.32"
  },
  {
    name: "nodejs",
    version: "6.0.0",
    date: "2016-04-26",
    lts: !1,
    security: !1,
    v8: "5.0.71.35"
  },
  {
    name: "nodejs",
    version: "6.1.0",
    date: "2016-05-05",
    lts: !1,
    security: !1,
    v8: "5.0.71.35"
  },
  {
    name: "nodejs",
    version: "6.2.0",
    date: "2016-05-17",
    lts: !1,
    security: !1,
    v8: "5.0.71.47"
  },
  {
    name: "nodejs",
    version: "6.3.0",
    date: "2016-07-06",
    lts: !1,
    security: !1,
    v8: "5.0.71.52"
  },
  {
    name: "nodejs",
    version: "6.4.0",
    date: "2016-08-12",
    lts: !1,
    security: !1,
    v8: "5.0.71.60"
  },
  {
    name: "nodejs",
    version: "6.5.0",
    date: "2016-08-26",
    lts: !1,
    security: !1,
    v8: "5.1.281.81"
  },
  {
    name: "nodejs",
    version: "6.6.0",
    date: "2016-09-14",
    lts: !1,
    security: !1,
    v8: "5.1.281.83"
  },
  {
    name: "nodejs",
    version: "6.7.0",
    date: "2016-09-27",
    lts: !1,
    security: !0,
    v8: "5.1.281.83"
  },
  {
    name: "nodejs",
    version: "6.8.0",
    date: "2016-10-12",
    lts: !1,
    security: !1,
    v8: "5.1.281.84"
  },
  {
    name: "nodejs",
    version: "6.9.0",
    date: "2016-10-18",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.84"
  },
  {
    name: "nodejs",
    version: "6.10.0",
    date: "2017-02-21",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.93"
  },
  {
    name: "nodejs",
    version: "6.11.0",
    date: "2017-06-06",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.102"
  },
  {
    name: "nodejs",
    version: "6.12.0",
    date: "2017-11-06",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.108"
  },
  {
    name: "nodejs",
    version: "6.13.0",
    date: "2018-02-10",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.111"
  },
  {
    name: "nodejs",
    version: "6.14.0",
    date: "2018-03-28",
    lts: "Boron",
    security: !0,
    v8: "5.1.281.111"
  },
  {
    name: "nodejs",
    version: "6.15.0",
    date: "2018-11-27",
    lts: "Boron",
    security: !0,
    v8: "5.1.281.111"
  },
  {
    name: "nodejs",
    version: "6.16.0",
    date: "2018-12-26",
    lts: "Boron",
    security: !1,
    v8: "5.1.281.111"
  },
  {
    name: "nodejs",
    version: "6.17.0",
    date: "2019-02-28",
    lts: "Boron",
    security: !0,
    v8: "5.1.281.111"
  },
  {
    name: "nodejs",
    version: "7.0.0",
    date: "2016-10-25",
    lts: !1,
    security: !1,
    v8: "5.4.500.36"
  },
  {
    name: "nodejs",
    version: "7.1.0",
    date: "2016-11-08",
    lts: !1,
    security: !1,
    v8: "5.4.500.36"
  },
  {
    name: "nodejs",
    version: "7.2.0",
    date: "2016-11-22",
    lts: !1,
    security: !1,
    v8: "5.4.500.43"
  },
  {
    name: "nodejs",
    version: "7.3.0",
    date: "2016-12-20",
    lts: !1,
    security: !1,
    v8: "5.4.500.45"
  },
  {
    name: "nodejs",
    version: "7.4.0",
    date: "2017-01-04",
    lts: !1,
    security: !1,
    v8: "5.4.500.45"
  },
  {
    name: "nodejs",
    version: "7.5.0",
    date: "2017-01-31",
    lts: !1,
    security: !1,
    v8: "5.4.500.48"
  },
  {
    name: "nodejs",
    version: "7.6.0",
    date: "2017-02-21",
    lts: !1,
    security: !1,
    v8: "5.5.372.40"
  },
  {
    name: "nodejs",
    version: "7.7.0",
    date: "2017-02-28",
    lts: !1,
    security: !1,
    v8: "5.5.372.41"
  },
  {
    name: "nodejs",
    version: "7.8.0",
    date: "2017-03-29",
    lts: !1,
    security: !1,
    v8: "5.5.372.43"
  },
  {
    name: "nodejs",
    version: "7.9.0",
    date: "2017-04-11",
    lts: !1,
    security: !1,
    v8: "5.5.372.43"
  },
  {
    name: "nodejs",
    version: "7.10.0",
    date: "2017-05-02",
    lts: !1,
    security: !1,
    v8: "5.5.372.43"
  },
  {
    name: "nodejs",
    version: "8.0.0",
    date: "2017-05-30",
    lts: !1,
    security: !1,
    v8: "5.8.283.41"
  },
  {
    name: "nodejs",
    version: "8.1.0",
    date: "2017-06-08",
    lts: !1,
    security: !1,
    v8: "5.8.283.41"
  },
  {
    name: "nodejs",
    version: "8.2.0",
    date: "2017-07-19",
    lts: !1,
    security: !1,
    v8: "5.8.283.41"
  },
  {
    name: "nodejs",
    version: "8.3.0",
    date: "2017-08-08",
    lts: !1,
    security: !1,
    v8: "6.0.286.52"
  },
  {
    name: "nodejs",
    version: "8.4.0",
    date: "2017-08-15",
    lts: !1,
    security: !1,
    v8: "6.0.286.52"
  },
  {
    name: "nodejs",
    version: "8.5.0",
    date: "2017-09-12",
    lts: !1,
    security: !1,
    v8: "6.0.287.53"
  },
  {
    name: "nodejs",
    version: "8.6.0",
    date: "2017-09-26",
    lts: !1,
    security: !1,
    v8: "6.0.287.53"
  },
  {
    name: "nodejs",
    version: "8.7.0",
    date: "2017-10-11",
    lts: !1,
    security: !1,
    v8: "6.1.534.42"
  },
  {
    name: "nodejs",
    version: "8.8.0",
    date: "2017-10-24",
    lts: !1,
    security: !1,
    v8: "6.1.534.42"
  },
  {
    name: "nodejs",
    version: "8.9.0",
    date: "2017-10-31",
    lts: "Carbon",
    security: !1,
    v8: "6.1.534.46"
  },
  {
    name: "nodejs",
    version: "8.10.0",
    date: "2018-03-06",
    lts: "Carbon",
    security: !1,
    v8: "6.2.414.50"
  },
  {
    name: "nodejs",
    version: "8.11.0",
    date: "2018-03-28",
    lts: "Carbon",
    security: !0,
    v8: "6.2.414.50"
  },
  {
    name: "nodejs",
    version: "8.12.0",
    date: "2018-09-10",
    lts: "Carbon",
    security: !1,
    v8: "6.2.414.66"
  },
  {
    name: "nodejs",
    version: "8.13.0",
    date: "2018-11-20",
    lts: "Carbon",
    security: !1,
    v8: "6.2.414.72"
  },
  {
    name: "nodejs",
    version: "8.14.0",
    date: "2018-11-27",
    lts: "Carbon",
    security: !0,
    v8: "6.2.414.72"
  },
  {
    name: "nodejs",
    version: "8.15.0",
    date: "2018-12-26",
    lts: "Carbon",
    security: !1,
    v8: "6.2.414.75"
  },
  {
    name: "nodejs",
    version: "8.16.0",
    date: "2019-04-16",
    lts: "Carbon",
    security: !1,
    v8: "6.2.414.77"
  },
  {
    name: "nodejs",
    version: "8.17.0",
    date: "2019-12-17",
    lts: "Carbon",
    security: !0,
    v8: "6.2.414.78"
  },
  {
    name: "nodejs",
    version: "9.0.0",
    date: "2017-10-31",
    lts: !1,
    security: !1,
    v8: "6.2.414.32"
  },
  {
    name: "nodejs",
    version: "9.1.0",
    date: "2017-11-07",
    lts: !1,
    security: !1,
    v8: "6.2.414.32"
  },
  {
    name: "nodejs",
    version: "9.2.0",
    date: "2017-11-14",
    lts: !1,
    security: !1,
    v8: "6.2.414.44"
  },
  {
    name: "nodejs",
    version: "9.3.0",
    date: "2017-12-12",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.4.0",
    date: "2018-01-10",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.5.0",
    date: "2018-01-31",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.6.0",
    date: "2018-02-21",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.7.0",
    date: "2018-03-01",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.8.0",
    date: "2018-03-07",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.9.0",
    date: "2018-03-21",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.10.0",
    date: "2018-03-28",
    lts: !1,
    security: !0,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "9.11.0",
    date: "2018-04-04",
    lts: !1,
    security: !1,
    v8: "6.2.414.46"
  },
  {
    name: "nodejs",
    version: "10.0.0",
    date: "2018-04-24",
    lts: !1,
    security: !1,
    v8: "6.6.346.24"
  },
  {
    name: "nodejs",
    version: "10.1.0",
    date: "2018-05-08",
    lts: !1,
    security: !1,
    v8: "6.6.346.27"
  },
  {
    name: "nodejs",
    version: "10.2.0",
    date: "2018-05-23",
    lts: !1,
    security: !1,
    v8: "6.6.346.32"
  },
  {
    name: "nodejs",
    version: "10.3.0",
    date: "2018-05-29",
    lts: !1,
    security: !1,
    v8: "6.6.346.32"
  },
  {
    name: "nodejs",
    version: "10.4.0",
    date: "2018-06-06",
    lts: !1,
    security: !1,
    v8: "6.7.288.43"
  },
  {
    name: "nodejs",
    version: "10.5.0",
    date: "2018-06-20",
    lts: !1,
    security: !1,
    v8: "6.7.288.46"
  },
  {
    name: "nodejs",
    version: "10.6.0",
    date: "2018-07-04",
    lts: !1,
    security: !1,
    v8: "6.7.288.46"
  },
  {
    name: "nodejs",
    version: "10.7.0",
    date: "2018-07-18",
    lts: !1,
    security: !1,
    v8: "6.7.288.49"
  },
  {
    name: "nodejs",
    version: "10.8.0",
    date: "2018-08-01",
    lts: !1,
    security: !1,
    v8: "6.7.288.49"
  },
  {
    name: "nodejs",
    version: "10.9.0",
    date: "2018-08-15",
    lts: !1,
    security: !1,
    v8: "6.8.275.24"
  },
  {
    name: "nodejs",
    version: "10.10.0",
    date: "2018-09-06",
    lts: !1,
    security: !1,
    v8: "6.8.275.30"
  },
  {
    name: "nodejs",
    version: "10.11.0",
    date: "2018-09-19",
    lts: !1,
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.12.0",
    date: "2018-10-10",
    lts: !1,
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.13.0",
    date: "2018-10-30",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.14.0",
    date: "2018-11-27",
    lts: "Dubnium",
    security: !0,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.15.0",
    date: "2018-12-26",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.16.0",
    date: "2019-05-28",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.17.0",
    date: "2019-10-22",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.18.0",
    date: "2019-12-17",
    lts: "Dubnium",
    security: !0,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.19.0",
    date: "2020-02-05",
    lts: "Dubnium",
    security: !0,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.20.0",
    date: "2020-03-26",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.21.0",
    date: "2020-06-02",
    lts: "Dubnium",
    security: !0,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.22.0",
    date: "2020-07-21",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.23.0",
    date: "2020-10-27",
    lts: "Dubnium",
    security: !1,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "10.24.0",
    date: "2021-02-23",
    lts: "Dubnium",
    security: !0,
    v8: "6.8.275.32"
  },
  {
    name: "nodejs",
    version: "11.0.0",
    date: "2018-10-23",
    lts: !1,
    security: !1,
    v8: "7.0.276.28"
  },
  {
    name: "nodejs",
    version: "11.1.0",
    date: "2018-10-30",
    lts: !1,
    security: !1,
    v8: "7.0.276.32"
  },
  {
    name: "nodejs",
    version: "11.2.0",
    date: "2018-11-15",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.3.0",
    date: "2018-11-27",
    lts: !1,
    security: !0,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.4.0",
    date: "2018-12-07",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.5.0",
    date: "2018-12-18",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.6.0",
    date: "2018-12-26",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.7.0",
    date: "2019-01-17",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.8.0",
    date: "2019-01-24",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.9.0",
    date: "2019-01-30",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.10.0",
    date: "2019-02-14",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.11.0",
    date: "2019-03-05",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.12.0",
    date: "2019-03-14",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.13.0",
    date: "2019-03-28",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.14.0",
    date: "2019-04-10",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "11.15.0",
    date: "2019-04-30",
    lts: !1,
    security: !1,
    v8: "7.0.276.38"
  },
  {
    name: "nodejs",
    version: "12.0.0",
    date: "2019-04-23",
    lts: !1,
    security: !1,
    v8: "7.4.288.21"
  },
  {
    name: "nodejs",
    version: "12.1.0",
    date: "2019-04-29",
    lts: !1,
    security: !1,
    v8: "7.4.288.21"
  },
  {
    name: "nodejs",
    version: "12.2.0",
    date: "2019-05-07",
    lts: !1,
    security: !1,
    v8: "7.4.288.21"
  },
  {
    name: "nodejs",
    version: "12.3.0",
    date: "2019-05-21",
    lts: !1,
    security: !1,
    v8: "7.4.288.27"
  },
  {
    name: "nodejs",
    version: "12.4.0",
    date: "2019-06-04",
    lts: !1,
    security: !1,
    v8: "7.4.288.27"
  },
  {
    name: "nodejs",
    version: "12.5.0",
    date: "2019-06-26",
    lts: !1,
    security: !1,
    v8: "7.5.288.22"
  },
  {
    name: "nodejs",
    version: "12.6.0",
    date: "2019-07-03",
    lts: !1,
    security: !1,
    v8: "7.5.288.22"
  },
  {
    name: "nodejs",
    version: "12.7.0",
    date: "2019-07-23",
    lts: !1,
    security: !1,
    v8: "7.5.288.22"
  },
  {
    name: "nodejs",
    version: "12.8.0",
    date: "2019-08-06",
    lts: !1,
    security: !1,
    v8: "7.5.288.22"
  },
  {
    name: "nodejs",
    version: "12.9.0",
    date: "2019-08-20",
    lts: !1,
    security: !1,
    v8: "7.6.303.29"
  },
  {
    name: "nodejs",
    version: "12.10.0",
    date: "2019-09-04",
    lts: !1,
    security: !1,
    v8: "7.6.303.29"
  },
  {
    name: "nodejs",
    version: "12.11.0",
    date: "2019-09-25",
    lts: !1,
    security: !1,
    v8: "7.7.299.11"
  },
  {
    name: "nodejs",
    version: "12.12.0",
    date: "2019-10-11",
    lts: !1,
    security: !1,
    v8: "7.7.299.13"
  },
  {
    name: "nodejs",
    version: "12.13.0",
    date: "2019-10-21",
    lts: "Erbium",
    security: !1,
    v8: "7.7.299.13"
  },
  {
    name: "nodejs",
    version: "12.14.0",
    date: "2019-12-17",
    lts: "Erbium",
    security: !0,
    v8: "7.7.299.13"
  },
  {
    name: "nodejs",
    version: "12.15.0",
    date: "2020-02-05",
    lts: "Erbium",
    security: !0,
    v8: "7.7.299.13"
  },
  {
    name: "nodejs",
    version: "12.16.0",
    date: "2020-02-11",
    lts: "Erbium",
    security: !1,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.17.0",
    date: "2020-05-26",
    lts: "Erbium",
    security: !1,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.18.0",
    date: "2020-06-02",
    lts: "Erbium",
    security: !0,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.19.0",
    date: "2020-10-06",
    lts: "Erbium",
    security: !1,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.20.0",
    date: "2020-11-24",
    lts: "Erbium",
    security: !1,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.21.0",
    date: "2021-02-23",
    lts: "Erbium",
    security: !0,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "12.22.0",
    date: "2021-03-30",
    lts: "Erbium",
    security: !1,
    v8: "7.8.279.23"
  },
  {
    name: "nodejs",
    version: "13.0.0",
    date: "2019-10-22",
    lts: !1,
    security: !1,
    v8: "7.8.279.17"
  },
  {
    name: "nodejs",
    version: "13.1.0",
    date: "2019-11-05",
    lts: !1,
    security: !1,
    v8: "7.8.279.17"
  },
  {
    name: "nodejs",
    version: "13.2.0",
    date: "2019-11-21",
    lts: !1,
    security: !1,
    v8: "7.9.317.23"
  },
  {
    name: "nodejs",
    version: "13.3.0",
    date: "2019-12-03",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.4.0",
    date: "2019-12-17",
    lts: !1,
    security: !0,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.5.0",
    date: "2019-12-18",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.6.0",
    date: "2020-01-07",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.7.0",
    date: "2020-01-21",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.8.0",
    date: "2020-02-05",
    lts: !1,
    security: !0,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.9.0",
    date: "2020-02-18",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.10.0",
    date: "2020-03-04",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.11.0",
    date: "2020-03-12",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.12.0",
    date: "2020-03-26",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.13.0",
    date: "2020-04-14",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "13.14.0",
    date: "2020-04-29",
    lts: !1,
    security: !1,
    v8: "7.9.317.25"
  },
  {
    name: "nodejs",
    version: "14.0.0",
    date: "2020-04-21",
    lts: !1,
    security: !1,
    v8: "8.1.307.30"
  },
  {
    name: "nodejs",
    version: "14.1.0",
    date: "2020-04-29",
    lts: !1,
    security: !1,
    v8: "8.1.307.31"
  },
  {
    name: "nodejs",
    version: "14.2.0",
    date: "2020-05-05",
    lts: !1,
    security: !1,
    v8: "8.1.307.31"
  },
  {
    name: "nodejs",
    version: "14.3.0",
    date: "2020-05-19",
    lts: !1,
    security: !1,
    v8: "8.1.307.31"
  },
  {
    name: "nodejs",
    version: "14.4.0",
    date: "2020-06-02",
    lts: !1,
    security: !0,
    v8: "8.1.307.31"
  },
  {
    name: "nodejs",
    version: "14.5.0",
    date: "2020-06-30",
    lts: !1,
    security: !1,
    v8: "8.3.110.9"
  },
  {
    name: "nodejs",
    version: "14.6.0",
    date: "2020-07-20",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.7.0",
    date: "2020-07-29",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.8.0",
    date: "2020-08-11",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.9.0",
    date: "2020-08-27",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.10.0",
    date: "2020-09-08",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.11.0",
    date: "2020-09-15",
    lts: !1,
    security: !0,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.12.0",
    date: "2020-09-22",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.13.0",
    date: "2020-09-29",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.14.0",
    date: "2020-10-15",
    lts: !1,
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.15.0",
    date: "2020-10-27",
    lts: "Fermium",
    security: !1,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.16.0",
    date: "2021-02-23",
    lts: "Fermium",
    security: !0,
    v8: "8.4.371.19"
  },
  {
    name: "nodejs",
    version: "14.17.0",
    date: "2021-05-11",
    lts: "Fermium",
    security: !1,
    v8: "8.4.371.23"
  },
  {
    name: "nodejs",
    version: "14.18.0",
    date: "2021-09-28",
    lts: "Fermium",
    security: !1,
    v8: "8.4.371.23"
  },
  {
    name: "nodejs",
    version: "14.19.0",
    date: "2022-02-01",
    lts: "Fermium",
    security: !1,
    v8: "8.4.371.23"
  },
  {
    name: "nodejs",
    version: "14.20.0",
    date: "2022-07-07",
    lts: "Fermium",
    security: !0,
    v8: "8.4.371.23"
  },
  {
    name: "nodejs",
    version: "14.21.0",
    date: "2022-11-01",
    lts: "Fermium",
    security: !1,
    v8: "8.4.371.23"
  },
  {
    name: "nodejs",
    version: "15.0.0",
    date: "2020-10-20",
    lts: !1,
    security: !1,
    v8: "8.6.395.16"
  },
  {
    name: "nodejs",
    version: "15.1.0",
    date: "2020-11-04",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.2.0",
    date: "2020-11-10",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.3.0",
    date: "2020-11-24",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.4.0",
    date: "2020-12-09",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.5.0",
    date: "2020-12-22",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.6.0",
    date: "2021-01-14",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.7.0",
    date: "2021-01-25",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.8.0",
    date: "2021-02-02",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.9.0",
    date: "2021-02-18",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.10.0",
    date: "2021-02-23",
    lts: !1,
    security: !0,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.11.0",
    date: "2021-03-03",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.12.0",
    date: "2021-03-17",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.13.0",
    date: "2021-03-31",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "15.14.0",
    date: "2021-04-06",
    lts: !1,
    security: !1,
    v8: "8.6.395.17"
  },
  {
    name: "nodejs",
    version: "16.0.0",
    date: "2021-04-20",
    lts: !1,
    security: !1,
    v8: "9.0.257.17"
  },
  {
    name: "nodejs",
    version: "16.1.0",
    date: "2021-05-04",
    lts: !1,
    security: !1,
    v8: "9.0.257.24"
  },
  {
    name: "nodejs",
    version: "16.2.0",
    date: "2021-05-19",
    lts: !1,
    security: !1,
    v8: "9.0.257.25"
  },
  {
    name: "nodejs",
    version: "16.3.0",
    date: "2021-06-03",
    lts: !1,
    security: !1,
    v8: "9.0.257.25"
  },
  {
    name: "nodejs",
    version: "16.4.0",
    date: "2021-06-23",
    lts: !1,
    security: !1,
    v8: "9.1.269.36"
  },
  {
    name: "nodejs",
    version: "16.5.0",
    date: "2021-07-14",
    lts: !1,
    security: !1,
    v8: "9.1.269.38"
  },
  {
    name: "nodejs",
    version: "16.6.0",
    date: "2021-07-29",
    lts: !1,
    security: !0,
    v8: "9.2.230.21"
  },
  {
    name: "nodejs",
    version: "16.7.0",
    date: "2021-08-18",
    lts: !1,
    security: !1,
    v8: "9.2.230.21"
  },
  {
    name: "nodejs",
    version: "16.8.0",
    date: "2021-08-25",
    lts: !1,
    security: !1,
    v8: "9.2.230.21"
  },
  {
    name: "nodejs",
    version: "16.9.0",
    date: "2021-09-07",
    lts: !1,
    security: !1,
    v8: "9.3.345.16"
  },
  {
    name: "nodejs",
    version: "16.10.0",
    date: "2021-09-22",
    lts: !1,
    security: !1,
    v8: "9.3.345.19"
  },
  {
    name: "nodejs",
    version: "16.11.0",
    date: "2021-10-08",
    lts: !1,
    security: !1,
    v8: "9.4.146.19"
  },
  {
    name: "nodejs",
    version: "16.12.0",
    date: "2021-10-20",
    lts: !1,
    security: !1,
    v8: "9.4.146.19"
  },
  {
    name: "nodejs",
    version: "16.13.0",
    date: "2021-10-26",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.19"
  },
  {
    name: "nodejs",
    version: "16.14.0",
    date: "2022-02-08",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.24"
  },
  {
    name: "nodejs",
    version: "16.15.0",
    date: "2022-04-26",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.24"
  },
  {
    name: "nodejs",
    version: "16.16.0",
    date: "2022-07-07",
    lts: "Gallium",
    security: !0,
    v8: "9.4.146.24"
  },
  {
    name: "nodejs",
    version: "16.17.0",
    date: "2022-08-16",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.26"
  },
  {
    name: "nodejs",
    version: "16.18.0",
    date: "2022-10-12",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.26"
  },
  {
    name: "nodejs",
    version: "16.19.0",
    date: "2022-12-13",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.26"
  },
  {
    name: "nodejs",
    version: "16.20.0",
    date: "2023-03-28",
    lts: "Gallium",
    security: !1,
    v8: "9.4.146.26"
  },
  {
    name: "nodejs",
    version: "17.0.0",
    date: "2021-10-19",
    lts: !1,
    security: !1,
    v8: "9.5.172.21"
  },
  {
    name: "nodejs",
    version: "17.1.0",
    date: "2021-11-09",
    lts: !1,
    security: !1,
    v8: "9.5.172.25"
  },
  {
    name: "nodejs",
    version: "17.2.0",
    date: "2021-11-30",
    lts: !1,
    security: !1,
    v8: "9.6.180.14"
  },
  {
    name: "nodejs",
    version: "17.3.0",
    date: "2021-12-17",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.4.0",
    date: "2022-01-18",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.5.0",
    date: "2022-02-10",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.6.0",
    date: "2022-02-22",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.7.0",
    date: "2022-03-09",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.8.0",
    date: "2022-03-22",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "17.9.0",
    date: "2022-04-07",
    lts: !1,
    security: !1,
    v8: "9.6.180.15"
  },
  {
    name: "nodejs",
    version: "18.0.0",
    date: "2022-04-18",
    lts: !1,
    security: !1,
    v8: "10.1.124.8"
  },
  {
    name: "nodejs",
    version: "18.1.0",
    date: "2022-05-03",
    lts: !1,
    security: !1,
    v8: "10.1.124.8"
  },
  {
    name: "nodejs",
    version: "18.2.0",
    date: "2022-05-17",
    lts: !1,
    security: !1,
    v8: "10.1.124.8"
  },
  {
    name: "nodejs",
    version: "18.3.0",
    date: "2022-06-02",
    lts: !1,
    security: !1,
    v8: "10.2.154.4"
  },
  {
    name: "nodejs",
    version: "18.4.0",
    date: "2022-06-16",
    lts: !1,
    security: !1,
    v8: "10.2.154.4"
  },
  {
    name: "nodejs",
    version: "18.5.0",
    date: "2022-07-06",
    lts: !1,
    security: !0,
    v8: "10.2.154.4"
  },
  {
    name: "nodejs",
    version: "18.6.0",
    date: "2022-07-13",
    lts: !1,
    security: !1,
    v8: "10.2.154.13"
  },
  {
    name: "nodejs",
    version: "18.7.0",
    date: "2022-07-26",
    lts: !1,
    security: !1,
    v8: "10.2.154.13"
  },
  {
    name: "nodejs",
    version: "18.8.0",
    date: "2022-08-24",
    lts: !1,
    security: !1,
    v8: "10.2.154.13"
  },
  {
    name: "nodejs",
    version: "18.9.0",
    date: "2022-09-07",
    lts: !1,
    security: !1,
    v8: "10.2.154.15"
  },
  {
    name: "nodejs",
    version: "18.10.0",
    date: "2022-09-28",
    lts: !1,
    security: !1,
    v8: "10.2.154.15"
  },
  {
    name: "nodejs",
    version: "18.11.0",
    date: "2022-10-13",
    lts: !1,
    security: !1,
    v8: "10.2.154.15"
  },
  {
    name: "nodejs",
    version: "18.12.0",
    date: "2022-10-25",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.15"
  },
  {
    name: "nodejs",
    version: "18.13.0",
    date: "2023-01-05",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.23"
  },
  {
    name: "nodejs",
    version: "18.14.0",
    date: "2023-02-01",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.23"
  },
  {
    name: "nodejs",
    version: "18.15.0",
    date: "2023-03-05",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "18.16.0",
    date: "2023-04-12",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "18.17.0",
    date: "2023-07-18",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "18.18.0",
    date: "2023-09-18",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "18.19.0",
    date: "2023-11-29",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "18.20.0",
    date: "2024-03-26",
    lts: "Hydrogen",
    security: !1,
    v8: "10.2.154.26"
  },
  {
    name: "nodejs",
    version: "19.0.0",
    date: "2022-10-17",
    lts: !1,
    security: !1,
    v8: "10.7.193.13"
  },
  {
    name: "nodejs",
    version: "19.1.0",
    date: "2022-11-14",
    lts: !1,
    security: !1,
    v8: "10.7.193.20"
  },
  {
    name: "nodejs",
    version: "19.2.0",
    date: "2022-11-29",
    lts: !1,
    security: !1,
    v8: "10.8.168.20"
  },
  {
    name: "nodejs",
    version: "19.3.0",
    date: "2022-12-14",
    lts: !1,
    security: !1,
    v8: "10.8.168.21"
  },
  {
    name: "nodejs",
    version: "19.4.0",
    date: "2023-01-05",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "19.5.0",
    date: "2023-01-24",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "19.6.0",
    date: "2023-02-01",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "19.7.0",
    date: "2023-02-21",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "19.8.0",
    date: "2023-03-14",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "19.9.0",
    date: "2023-04-10",
    lts: !1,
    security: !1,
    v8: "10.8.168.25"
  },
  {
    name: "nodejs",
    version: "20.0.0",
    date: "2023-04-17",
    lts: !1,
    security: !1,
    v8: "11.3.244.4"
  },
  {
    name: "nodejs",
    version: "20.1.0",
    date: "2023-05-03",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.2.0",
    date: "2023-05-16",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.3.0",
    date: "2023-06-08",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.4.0",
    date: "2023-07-04",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.5.0",
    date: "2023-07-19",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.6.0",
    date: "2023-08-23",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.7.0",
    date: "2023-09-18",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.8.0",
    date: "2023-09-28",
    lts: !1,
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.9.0",
    date: "2023-10-24",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.10.0",
    date: "2023-11-22",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.11.0",
    date: "2024-01-09",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.12.0",
    date: "2024-03-26",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.13.0",
    date: "2024-05-07",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.14.0",
    date: "2024-05-28",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "20.15.0",
    date: "2024-06-20",
    lts: "Iron",
    security: !1,
    v8: "11.3.244.8"
  },
  {
    name: "nodejs",
    version: "21.0.0",
    date: "2023-10-17",
    lts: !1,
    security: !1,
    v8: "11.8.172.13"
  },
  {
    name: "nodejs",
    version: "21.1.0",
    date: "2023-10-24",
    lts: !1,
    security: !1,
    v8: "11.8.172.15"
  },
  {
    name: "nodejs",
    version: "21.2.0",
    date: "2023-11-14",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "21.3.0",
    date: "2023-11-30",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "21.4.0",
    date: "2023-12-05",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "21.5.0",
    date: "2023-12-19",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "21.6.0",
    date: "2024-01-14",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "21.7.0",
    date: "2024-03-06",
    lts: !1,
    security: !1,
    v8: "11.8.172.17"
  },
  {
    name: "nodejs",
    version: "22.0.0",
    date: "2024-04-24",
    lts: !1,
    security: !1,
    v8: "12.4.254.14"
  },
  {
    name: "nodejs",
    version: "22.1.0",
    date: "2024-05-02",
    lts: !1,
    security: !1,
    v8: "12.4.254.14"
  },
  {
    name: "nodejs",
    version: "22.2.0",
    date: "2024-05-15",
    lts: !1,
    security: !1,
    v8: "12.4.254.14"
  },
  {
    name: "nodejs",
    version: "22.3.0",
    date: "2024-06-11",
    lts: !1,
    security: !1,
    v8: "12.4.254.20"
  },
  {
    name: "nodejs",
    version: "22.4.0",
    date: "2024-07-02",
    lts: !1,
    security: !1,
    v8: "12.4.254.21"
  },
  {
    name: "nodejs",
    version: "22.5.0",
    date: "2024-07-17",
    lts: !1,
    security: !1,
    v8: "12.4.254.21"
  }
];
var br = {}, xr = {}, Fa = { A: "ie", B: "edge", C: "firefox", D: "chrome", E: "safari", F: "opera", G: "ios_saf", H: "op_mini", I: "android", J: "bb", K: "op_mob", L: "and_chr", M: "and_ff", N: "ie_mob", O: "and_uc", P: "samsung", Q: "and_qq", R: "baidu", S: "kaios" };
xr.browsers = Fa;
var Ar = {}, Ra = { 0: "21", 1: "22", 2: "23", 3: "24", 4: "25", 5: "115", 6: "116", 7: "117", 8: "118", 9: "119", A: "10", B: "11", C: "12", D: "7", E: "8", F: "9", G: "15", H: "80", I: "129", J: "4", K: "6", L: "13", M: "14", N: "16", O: "17", P: "18", Q: "79", R: "81", S: "83", T: "84", U: "85", V: "86", W: "87", X: "88", Y: "89", Z: "90", a: "91", b: "92", c: "93", d: "94", e: "95", f: "96", g: "97", h: "98", i: "99", j: "100", k: "101", l: "102", m: "103", n: "104", o: "105", p: "106", q: "107", r: "108", s: "109", t: "110", u: "111", v: "112", w: "113", x: "114", y: "130", z: "20", AB: "120", BB: "121", CB: "122", DB: "123", EB: "124", FB: "125", GB: "126", HB: "127", IB: "128", JB: "5", KB: "19", LB: "26", MB: "27", NB: "28", OB: "29", PB: "30", QB: "31", RB: "32", SB: "33", TB: "34", UB: "35", VB: "36", WB: "37", XB: "38", YB: "39", ZB: "40", aB: "41", bB: "42", cB: "43", dB: "44", eB: "45", fB: "46", gB: "47", hB: "48", iB: "49", jB: "50", kB: "51", lB: "52", mB: "53", nB: "54", oB: "55", pB: "56", qB: "57", rB: "58", sB: "60", tB: "62", uB: "63", vB: "64", wB: "65", xB: "66", yB: "67", zB: "68", "0B": "69", "1B": "70", "2B": "71", "3B": "72", "4B": "73", "5B": "74", "6B": "75", "7B": "76", "8B": "77", "9B": "78", AC: "11.1", BC: "12.1", CC: "15.5", DC: "16.0", EC: "17.0", FC: "18.0", GC: "3", HC: "59", IC: "61", JC: "82", KC: "131", LC: "132", MC: "133", NC: "3.2", OC: "10.1", PC: "15.2-15.3", QC: "15.4", RC: "16.1", SC: "16.2", TC: "16.3", UC: "16.4", VC: "16.5", WC: "17.1", XC: "17.2", YC: "17.3", ZC: "17.4", aC: "17.5", bC: "17.6", cC: "18.1", dC: "11.5", eC: "4.2-4.3", fC: "5.5", gC: "2", hC: "134", iC: "3.5", jC: "3.6", kC: "3.1", lC: "5.1", mC: "6.1", nC: "7.1", oC: "9.1", pC: "13.1", qC: "14.1", rC: "15.1", sC: "15.6", tC: "16.6", uC: "TP", vC: "9.5-9.6", wC: "10.0-10.1", xC: "10.5", yC: "10.6", zC: "11.6", "0C": "4.0-4.1", "1C": "5.0-5.1", "2C": "6.0-6.1", "3C": "7.0-7.1", "4C": "8.1-8.4", "5C": "9.0-9.2", "6C": "9.3", "7C": "10.0-10.2", "8C": "10.3", "9C": "11.0-11.2", AD: "11.3-11.4", BD: "12.0-12.1", CD: "12.2-12.5", DD: "13.0-13.1", ED: "13.2", FD: "13.3", GD: "13.4-13.7", HD: "14.0-14.4", ID: "14.5-14.8", JD: "15.0-15.1", KD: "15.6-15.8", LD: "16.6-16.7", MD: "all", ND: "2.1", OD: "2.2", PD: "2.3", QD: "4.1", RD: "4.4", SD: "4.4.3-4.4.4", TD: "5.0-5.4", UD: "6.2-6.4", VD: "7.2-7.4", WD: "8.2", XD: "9.2", YD: "11.1-11.2", ZD: "12.0", aD: "13.0", bD: "14.0", cD: "15.0", dD: "19.0", eD: "14.9", fD: "13.52", gD: "2.5", hD: "3.0-3.1" };
Ar.browserVersions = Ra;
var Ia = { A: { A: { K: 0, D: 0, E: 0.0563043, F: 0.0422282, A: 0.0140761, B: 0.478586, fC: 0 }, B: "ms", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "fC", "K", "D", "E", "F", "A", "B", "", "", ""], E: "IE", F: { fC: 962323200, K: 998870400, D: 1161129600, E: 1237420800, F: 1300060800, A: 1346716800, B: 1381968e3 } }, B: { A: { 5: 7166e-6, 6: 7166e-6, 7: 0.010749, 8: 7166e-6, 9: 0.010749, C: 0, L: 0, M: 3583e-6, G: 0, N: 0, O: 7166e-6, P: 0.057328, Q: 0, H: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0, a: 0, b: 0.014332, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 3583e-6, r: 7166e-6, s: 0.064494, t: 7166e-6, u: 7166e-6, v: 7166e-6, w: 0.010749, x: 0.014332, AB: 0.039413, BB: 0.017915, CB: 0.025081, DB: 0.014332, EB: 0.025081, FB: 0.053745, GB: 0.254393, HB: 3.38594, IB: 0.917248, I: 0, y: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "C", "L", "M", "G", "N", "O", "P", "Q", "H", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "5", "6", "7", "8", "9", "AB", "BB", "CB", "DB", "EB", "FB", "GB", "HB", "IB", "I", "y", "", "", ""], E: "Edge", F: { 5: 1689897600, 6: 1692576e3, 7: 1694649600, 8: 1697155200, 9: 1698969600, C: 1438128e3, L: 1447286400, M: 1470096e3, G: 1491868800, N: 1508198400, O: 1525046400, P: 1542067200, Q: 1579046400, H: 1581033600, R: 1586736e3, S: 1590019200, T: 1594857600, U: 1598486400, V: 1602201600, W: 1605830400, X: 161136e4, Y: 1614816e3, Z: 1618358400, a: 1622073600, b: 1626912e3, c: 1630627200, d: 1632441600, e: 1634774400, f: 1637539200, g: 1641427200, h: 1643932800, i: 1646265600, j: 1649635200, k: 1651190400, l: 1653955200, m: 1655942400, n: 1659657600, o: 1661990400, p: 1664755200, q: 1666915200, r: 1670198400, s: 1673481600, t: 1675900800, u: 1678665600, v: 1680825600, w: 1683158400, x: 1685664e3, AB: 1701993600, BB: 1706227200, CB: 1708732800, DB: 1711152e3, EB: 1713398400, FB: 1715990400, GB: 1718841600, HB: 1721865600, IB: 1724371200, I: 1726704e3, y: 1729123200 }, D: { C: "ms", L: "ms", M: "ms", G: "ms", N: "ms", O: "ms", P: "ms" } }, C: { A: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0.351134, 6: 0, 7: 7166e-6, 8: 0.089575, 9: 0, gC: 0, GC: 0, J: 3583e-6, JB: 0, K: 0, D: 0, E: 0, F: 0, A: 0, B: 0.014332, C: 0, L: 0, M: 0, G: 0, N: 0, O: 0, P: 0, KB: 0, z: 0, LB: 0, MB: 0, NB: 0, OB: 0, PB: 0, QB: 0, RB: 0, SB: 0, TB: 0, UB: 0, VB: 0, WB: 0, XB: 0, YB: 0, ZB: 0, aB: 0, bB: 0, cB: 3583e-6, dB: 7166e-6, eB: 3583e-6, fB: 0, gB: 0, hB: 0, iB: 0, jB: 3583e-6, kB: 0, lB: 0.042996, mB: 0, nB: 7166e-6, oB: 3583e-6, pB: 0.017915, qB: 0, rB: 0, HC: 3583e-6, sB: 0, IC: 0, tB: 0, uB: 0, vB: 0, wB: 0, xB: 0, yB: 0, zB: 0, "0B": 0, "1B": 0, "2B": 0, "3B": 0, "4B": 0, "5B": 0, "6B": 0, "7B": 0, "8B": 0, "9B": 0.014332, Q: 0, H: 0, R: 0, JC: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 7166e-6, Y: 0, Z: 0, a: 0, b: 0, c: 0, d: 3583e-6, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 7166e-6, m: 0.010749, n: 0, o: 3583e-6, p: 0, q: 0, r: 0, s: 7166e-6, t: 0, u: 0, v: 0, w: 7166e-6, x: 0, AB: 7166e-6, BB: 7166e-6, CB: 3583e-6, DB: 7166e-6, EB: 7166e-6, FB: 0.014332, GB: 0.032247, HB: 0.042996, IB: 0.447875, I: 1.08923, y: 7166e-6, KC: 0, LC: 0, MC: 0, hC: 0, iC: 0, jC: 0 }, B: "moz", C: ["gC", "GC", "iC", "jC", "J", "JB", "K", "D", "E", "F", "A", "B", "C", "L", "M", "G", "N", "O", "P", "KB", "z", "0", "1", "2", "3", "4", "LB", "MB", "NB", "OB", "PB", "QB", "RB", "SB", "TB", "UB", "VB", "WB", "XB", "YB", "ZB", "aB", "bB", "cB", "dB", "eB", "fB", "gB", "hB", "iB", "jB", "kB", "lB", "mB", "nB", "oB", "pB", "qB", "rB", "HC", "sB", "IC", "tB", "uB", "vB", "wB", "xB", "yB", "zB", "0B", "1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "Q", "H", "R", "JC", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "5", "6", "7", "8", "9", "AB", "BB", "CB", "DB", "EB", "FB", "GB", "HB", "IB", "I", "y", "KC", "LC", "MC", "hC"], E: "Firefox", F: { 0: 1364860800, 1: 1368489600, 2: 1372118400, 3: 1375747200, 4: 1379376e3, 5: 1688428800, 6: 1690848e3, 7: 1693267200, 8: 1695686400, 9: 1698105600, gC: 1161648e3, GC: 1213660800, iC: 124632e4, jC: 1264032e3, J: 1300752e3, JB: 1308614400, K: 1313452800, D: 1317081600, E: 1317081600, F: 1320710400, A: 1324339200, B: 1327968e3, C: 1331596800, L: 1335225600, M: 1338854400, G: 1342483200, N: 1346112e3, O: 1349740800, P: 1353628800, KB: 1357603200, z: 1361232e3, LB: 1386633600, MB: 1391472e3, NB: 1395100800, OB: 1398729600, PB: 1402358400, QB: 1405987200, RB: 1409616e3, SB: 1413244800, TB: 1417392e3, UB: 1421107200, VB: 1424736e3, WB: 1428278400, XB: 1431475200, YB: 1435881600, ZB: 1439251200, aB: 144288e4, bB: 1446508800, cB: 1450137600, dB: 1453852800, eB: 1457395200, fB: 1461628800, gB: 1465257600, hB: 1470096e3, iB: 1474329600, jB: 1479168e3, kB: 1485216e3, lB: 1488844800, mB: 149256e4, nB: 1497312e3, oB: 1502150400, pB: 1506556800, qB: 1510617600, rB: 1516665600, HC: 1520985600, sB: 1525824e3, IC: 1529971200, tB: 1536105600, uB: 1540252800, vB: 1544486400, wB: 154872e4, xB: 1552953600, yB: 1558396800, zB: 1562630400, "0B": 1567468800, "1B": 1571788800, "2B": 1575331200, "3B": 1578355200, "4B": 1581379200, "5B": 1583798400, "6B": 1586304e3, "7B": 1588636800, "8B": 1591056e3, "9B": 1593475200, Q: 1595894400, H: 1598313600, R: 1600732800, JC: 1603152e3, S: 1605571200, T: 1607990400, U: 1611619200, V: 1614038400, W: 1616457600, X: 1618790400, Y: 1622505600, Z: 1626134400, a: 1628553600, b: 1630972800, c: 1633392e3, d: 1635811200, e: 1638835200, f: 1641859200, g: 1644364800, h: 1646697600, i: 1649116800, j: 1651536e3, k: 1653955200, l: 1656374400, m: 1658793600, n: 1661212800, o: 1663632e3, p: 1666051200, q: 1668470400, r: 1670889600, s: 1673913600, t: 1676332800, u: 1678752e3, v: 1681171200, w: 1683590400, x: 1686009600, AB: 1700524800, BB: 1702944e3, CB: 1705968e3, DB: 1708387200, EB: 1710806400, FB: 1713225600, GB: 1715644800, HB: 1718064e3, IB: 1720483200, I: 1722902400, y: 1725321600, KC: 1727740800, LC: null, MC: null, hC: null } }, D: { A: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0.03583, 6: 0.168401, 7: 0.10749, 8: 0.07166, 9: 0.068077, J: 0, JB: 0, K: 0, D: 0, E: 0, F: 0, A: 0, B: 0, C: 0, L: 0, M: 0, G: 0, N: 0, O: 0, P: 0, KB: 0, z: 0, LB: 0, MB: 0, NB: 0, OB: 0, PB: 0, QB: 0, RB: 0, SB: 0, TB: 0, UB: 0, VB: 0, WB: 0, XB: 0.010749, YB: 0, ZB: 0, aB: 0, bB: 0, cB: 0, dB: 0, eB: 3583e-6, fB: 0, gB: 7166e-6, hB: 0.025081, iB: 0.021498, jB: 7166e-6, kB: 3583e-6, lB: 3583e-6, mB: 7166e-6, nB: 0, oB: 0, pB: 0.032247, qB: 3583e-6, rB: 7166e-6, HC: 0, sB: 0, IC: 3583e-6, tB: 0, uB: 0, vB: 0, wB: 0, xB: 0.025081, yB: 7166e-6, zB: 0, "0B": 0.028664, "1B": 0.028664, "2B": 0, "3B": 0, "4B": 7166e-6, "5B": 0.010749, "6B": 0.010749, "7B": 7166e-6, "8B": 0.021498, "9B": 0.017915, Q: 0.103907, H: 0.014332, R: 0.021498, S: 0.032247, T: 0.010749, U: 0.014332, V: 0.025081, W: 0.075243, X: 0.017915, Y: 0.010749, Z: 0.014332, a: 0.053745, b: 0.014332, c: 0.014332, d: 0.050162, e: 0.010749, f: 0.010749, g: 0.017915, h: 0.046579, i: 0.025081, j: 0.021498, k: 0.021498, l: 0.017915, m: 0.111073, n: 0.085992, o: 0.017915, p: 0.028664, q: 0.03583, r: 0.046579, s: 1.42603, t: 0.025081, u: 0.039413, v: 0.050162, w: 0.10749, x: 0.103907, AB: 0.10749, BB: 0.10749, CB: 0.118239, DB: 0.14332, EB: 0.229312, FB: 0.369049, GB: 1.49053, HB: 12.777, IB: 2.30745, I: 0.014332, y: 3583e-6, KC: 0, LC: 0, MC: 0 }, B: "webkit", C: ["", "", "", "", "", "", "J", "JB", "K", "D", "E", "F", "A", "B", "C", "L", "M", "G", "N", "O", "P", "KB", "z", "0", "1", "2", "3", "4", "LB", "MB", "NB", "OB", "PB", "QB", "RB", "SB", "TB", "UB", "VB", "WB", "XB", "YB", "ZB", "aB", "bB", "cB", "dB", "eB", "fB", "gB", "hB", "iB", "jB", "kB", "lB", "mB", "nB", "oB", "pB", "qB", "rB", "HC", "sB", "IC", "tB", "uB", "vB", "wB", "xB", "yB", "zB", "0B", "1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "Q", "H", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "5", "6", "7", "8", "9", "AB", "BB", "CB", "DB", "EB", "FB", "GB", "HB", "IB", "I", "y", "KC", "LC", "MC"], E: "Chrome", F: { 0: 1340668800, 1: 1343692800, 2: 1348531200, 3: 1352246400, 4: 1357862400, 5: 1689724800, 6: 1692057600, 7: 1694476800, 8: 1696896e3, 9: 1698710400, J: 1264377600, JB: 1274745600, K: 1283385600, D: 1287619200, E: 1291248e3, F: 1296777600, A: 1299542400, B: 1303862400, C: 1307404800, L: 1312243200, M: 1316131200, G: 1316131200, N: 1319500800, O: 1323734400, P: 1328659200, KB: 1332892800, z: 133704e4, LB: 1361404800, MB: 1364428800, NB: 1369094400, OB: 1374105600, PB: 1376956800, QB: 1384214400, RB: 1389657600, SB: 1392940800, TB: 1397001600, UB: 1400544e3, VB: 1405468800, WB: 1409011200, XB: 141264e4, YB: 1416268800, ZB: 1421798400, aB: 1425513600, bB: 1429401600, cB: 143208e4, dB: 1437523200, eB: 1441152e3, fB: 1444780800, gB: 1449014400, hB: 1453248e3, iB: 1456963200, jB: 1460592e3, kB: 1464134400, lB: 1469059200, mB: 1472601600, nB: 1476230400, oB: 1480550400, pB: 1485302400, qB: 1489017600, rB: 149256e4, HC: 1496707200, sB: 1500940800, IC: 1504569600, tB: 1508198400, uB: 1512518400, vB: 1516752e3, wB: 1520294400, xB: 1523923200, yB: 1527552e3, zB: 1532390400, "0B": 1536019200, "1B": 1539648e3, "2B": 1543968e3, "3B": 154872e4, "4B": 1552348800, "5B": 1555977600, "6B": 1559606400, "7B": 1564444800, "8B": 1568073600, "9B": 1571702400, Q: 1575936e3, H: 1580860800, R: 1586304e3, S: 1589846400, T: 1594684800, U: 1598313600, V: 1601942400, W: 1605571200, X: 1611014400, Y: 1614556800, Z: 1618272e3, a: 1621987200, b: 1626739200, c: 1630368e3, d: 1632268800, e: 1634601600, f: 1637020800, g: 1641340800, h: 1643673600, i: 1646092800, j: 1648512e3, k: 1650931200, l: 1653350400, m: 1655769600, n: 1659398400, o: 1661817600, p: 1664236800, q: 1666656e3, r: 166968e4, s: 1673308800, t: 1675728e3, u: 1678147200, v: 1680566400, w: 1682985600, x: 1685404800, AB: 1701993600, BB: 1705968e3, CB: 1708387200, DB: 1710806400, EB: 1713225600, FB: 1715644800, GB: 1718064e3, HB: 1721174400, IB: 1724112e3, I: 1726531200, y: 1728950400, KC: null, LC: null, MC: null } }, E: { A: { J: 0, JB: 0, K: 0, D: 0, E: 0, F: 3583e-6, A: 0, B: 0, C: 0, L: 7166e-6, M: 0.028664, G: 7166e-6, kC: 0, NC: 0, lC: 0, mC: 0, nC: 0, oC: 0, OC: 0, AC: 7166e-6, BC: 0.010749, pC: 0.057328, qC: 0.078826, rC: 0.025081, PC: 0.010749, QC: 0.021498, CC: 0.028664, sC: 0.218563, DC: 0.028664, RC: 0.03583, SC: 0.032247, TC: 0.182733, UC: 0.021498, VC: 0.042996, tC: 0.290223, EC: 0.017915, WC: 0.039413, XC: 0.039413, YC: 0.042996, ZC: 0.118239, aC: 1.44753, bC: 0.415628, FC: 0.017915, cC: 0, uC: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "kC", "NC", "J", "JB", "lC", "K", "mC", "D", "nC", "E", "F", "oC", "A", "OC", "B", "AC", "C", "BC", "L", "pC", "M", "qC", "G", "rC", "PC", "QC", "CC", "sC", "DC", "RC", "SC", "TC", "UC", "VC", "tC", "EC", "WC", "XC", "YC", "ZC", "aC", "bC", "FC", "cC", "uC", ""], E: "Safari", F: { kC: 1205798400, NC: 1226534400, J: 1244419200, JB: 1275868800, lC: 131112e4, K: 1343174400, mC: 13824e5, D: 13824e5, nC: 1410998400, E: 1413417600, F: 1443657600, oC: 1458518400, A: 1474329600, OC: 1490572800, B: 1505779200, AC: 1522281600, C: 1537142400, BC: 1553472e3, L: 1568851200, pC: 1585008e3, M: 1600214400, qC: 1619395200, G: 1632096e3, rC: 1635292800, PC: 1639353600, QC: 1647216e3, CC: 1652745600, sC: 1658275200, DC: 1662940800, RC: 1666569600, SC: 1670889600, TC: 1674432e3, UC: 1679875200, VC: 1684368e3, tC: 1690156800, EC: 1695686400, WC: 1698192e3, XC: 1702252800, YC: 1705881600, ZC: 1709596800, aC: 1715558400, bC: 1722211200, FC: 1726444800, cC: null, uC: null } }, F: { A: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, F: 0, B: 0, C: 0, G: 0, N: 0, O: 0, P: 0, KB: 0, z: 0, LB: 0, MB: 0, NB: 0, OB: 0, PB: 0, QB: 0, RB: 0, SB: 0, TB: 0, UB: 0, VB: 0, WB: 0, XB: 0, YB: 0, ZB: 3583e-6, aB: 0, bB: 0, cB: 0, dB: 0, eB: 0, fB: 0.017915, gB: 0, hB: 0, iB: 0, jB: 0, kB: 0, lB: 0, mB: 0, nB: 0, oB: 0, pB: 0, qB: 0, rB: 0, sB: 0, tB: 0, uB: 0, vB: 0, wB: 0, xB: 0, yB: 0, zB: 0, "0B": 0, "1B": 0, "2B": 0, "3B": 0, "4B": 0, "5B": 0, "6B": 0, "7B": 0, "8B": 0, "9B": 0, Q: 0, H: 0, R: 0, JC: 0, S: 0.028664, T: 3583e-6, U: 0, V: 0, W: 0, X: 0, Y: 0, Z: 0, a: 0, b: 0, c: 0, d: 0, e: 0.039413, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0.032247, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0.154069, t: 0, u: 0.060911, v: 0, w: 0, x: 0, vC: 0, wC: 0, xC: 0, yC: 0, AC: 0, dC: 0, zC: 0, BC: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "F", "vC", "wC", "xC", "yC", "B", "AC", "dC", "zC", "C", "BC", "G", "N", "O", "P", "KB", "z", "0", "1", "2", "3", "4", "LB", "MB", "NB", "OB", "PB", "QB", "RB", "SB", "TB", "UB", "VB", "WB", "XB", "YB", "ZB", "aB", "bB", "cB", "dB", "eB", "fB", "gB", "hB", "iB", "jB", "kB", "lB", "mB", "nB", "oB", "pB", "qB", "rB", "sB", "tB", "uB", "vB", "wB", "xB", "yB", "zB", "0B", "1B", "2B", "3B", "4B", "5B", "6B", "7B", "8B", "9B", "Q", "H", "R", "JC", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "", "", ""], E: "Opera", F: { 0: 1399334400, 1: 1401753600, 2: 1405987200, 3: 1409616e3, 4: 1413331200, F: 1150761600, vC: 1223424e3, wC: 1251763200, xC: 1267488e3, yC: 1277942400, B: 1292457600, AC: 1302566400, dC: 1309219200, zC: 1323129600, C: 1323129600, BC: 1352073600, G: 1372723200, N: 1377561600, O: 1381104e3, P: 1386288e3, KB: 1390867200, z: 1393891200, LB: 1417132800, MB: 1422316800, NB: 1425945600, OB: 1430179200, PB: 1433808e3, QB: 1438646400, RB: 1442448e3, SB: 1445904e3, TB: 1449100800, UB: 1454371200, VB: 1457308800, WB: 146232e4, XB: 1465344e3, YB: 1470096e3, ZB: 1474329600, aB: 1477267200, bB: 1481587200, cB: 1486425600, dB: 1490054400, eB: 1494374400, fB: 1498003200, gB: 1502236800, hB: 1506470400, iB: 1510099200, jB: 1515024e3, kB: 1517961600, lB: 1521676800, mB: 1525910400, nB: 1530144e3, oB: 1534982400, pB: 1537833600, qB: 1543363200, rB: 1548201600, sB: 1554768e3, tB: 1561593600, uB: 1566259200, vB: 1570406400, wB: 1573689600, xB: 1578441600, yB: 1583971200, zB: 1587513600, "0B": 1592956800, "1B": 1595894400, "2B": 1600128e3, "3B": 1603238400, "4B": 161352e4, "5B": 1612224e3, "6B": 1616544e3, "7B": 1619568e3, "8B": 1623715200, "9B": 1627948800, Q: 1631577600, H: 1633392e3, R: 1635984e3, JC: 1638403200, S: 1642550400, T: 1644969600, U: 1647993600, V: 1650412800, W: 1652745600, X: 1654646400, Y: 1657152e3, Z: 1660780800, a: 1663113600, b: 1668816e3, c: 1668643200, d: 1671062400, e: 1675209600, f: 1677024e3, g: 1679529600, h: 1681948800, i: 1684195200, j: 1687219200, k: 1690329600, l: 1692748800, m: 1696204800, n: 169992e4, o: 169992e4, p: 1702944e3, q: 1707264e3, r: 1710115200, s: 1711497600, t: 1716336e3, u: 1719273600, v: 1721088e3, w: 1724284800, x: 1727222400 }, D: { F: "o", B: "o", C: "o", vC: "o", wC: "o", xC: "o", yC: "o", AC: "o", dC: "o", zC: "o", BC: "o" } }, G: { A: { E: 0, NC: 0, "0C": 0, eC: 447708e-8, "1C": 149236e-8, "2C": 746181e-8, "3C": 895417e-8, "4C": 0, "5C": 746181e-8, "6C": 0.0298472, "7C": 895417e-8, "8C": 0.0462632, "9C": 0.117897, AD: 0.0149236, BD: 0.0119389, CD: 0.199976, DD: 298472e-8, ED: 0.0656639, FD: 895417e-8, GD: 0.037309, HD: 0.152221, ID: 0.105958, JD: 0.0567097, PC: 0.0567097, QC: 0.0671563, CC: 0.0790952, KD: 0.741704, DC: 0.150729, RC: 0.317873, SC: 0.15819, TC: 0.264148, UC: 0.0656639, VC: 0.10745, LD: 0.920787, EC: 0.0850646, WC: 0.131328, XC: 0.120881, YC: 0.179083, ZC: 0.419354, aC: 8.55869, bC: 1.44162, FC: 0.156698, cC: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "NC", "0C", "eC", "1C", "2C", "3C", "E", "4C", "5C", "6C", "7C", "8C", "9C", "AD", "BD", "CD", "DD", "ED", "FD", "GD", "HD", "ID", "JD", "PC", "QC", "CC", "KD", "DC", "RC", "SC", "TC", "UC", "VC", "LD", "EC", "WC", "XC", "YC", "ZC", "aC", "bC", "FC", "cC", "", ""], E: "Safari on iOS", F: { NC: 1270252800, "0C": 1283904e3, eC: 1299628800, "1C": 1331078400, "2C": 1359331200, "3C": 1394409600, E: 1410912e3, "4C": 1413763200, "5C": 1442361600, "6C": 1458518400, "7C": 1473724800, "8C": 1490572800, "9C": 1505779200, AD: 1522281600, BD: 1537142400, CD: 1553472e3, DD: 1568851200, ED: 1572220800, FD: 1580169600, GD: 1585008e3, HD: 1600214400, ID: 1619395200, JD: 1632096e3, PC: 1639353600, QC: 1647216e3, CC: 1652659200, KD: 1658275200, DC: 1662940800, RC: 1666569600, SC: 1670889600, TC: 1674432e3, UC: 1679875200, VC: 1684368e3, LD: 1690156800, EC: 1694995200, WC: 1698192e3, XC: 1702252800, YC: 1705881600, ZC: 1709596800, aC: 1715558400, bC: 1722211200, FC: 1726444800, cC: null } }, H: { A: { MD: 0.05 }, B: "o", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "MD", "", "", ""], E: "Opera Mini", F: { MD: 1426464e3 } }, I: { A: { GC: 0, J: 327216e-10, I: 0.326169, ND: 0, OD: 0, PD: 0, QD: 130886e-9, eC: 130886e-9, RD: 0, SD: 523546e-9 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "ND", "OD", "PD", "GC", "J", "QD", "eC", "RD", "SD", "I", "", "", ""], E: "Android Browser", F: { ND: 1256515200, OD: 1274313600, PD: 1291593600, GC: 1298332800, J: 1318896e3, QD: 1341792e3, eC: 1374624e3, RD: 1386547200, SD: 1401667200, I: 1726531200 } }, J: { A: { D: 0, A: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "D", "A", "", "", ""], E: "Blackberry Browser", F: { D: 1325376e3, A: 1359504e3 } }, K: { A: { A: 0, B: 0, C: 0, H: 1.24603, AC: 0, dC: 0, BC: 0 }, B: "o", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "A", "B", "AC", "dC", "C", "BC", "H", "", "", ""], E: "Opera Mobile", F: { A: 1287100800, B: 1300752e3, AC: 1314835200, dC: 1318291200, C: 1330300800, BC: 1349740800, H: 1709769600 }, D: { H: "webkit" } }, L: { A: { I: 44.331 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "I", "", "", ""], E: "Chrome for Android", F: { I: 1726531200 } }, M: { A: { y: 0.365712 }, B: "moz", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "y", "", "", ""], E: "Firefox for Android", F: { y: 1725321600 } }, N: { A: { A: 0, B: 0 }, B: "ms", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "A", "B", "", "", ""], E: "IE Mobile", F: { A: 1340150400, B: 1353456e3 } }, O: { A: { CC: 1.13563 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "CC", "", "", ""], E: "UC Browser for Android", F: { CC: 1710115200 }, D: { CC: "webkit" } }, P: { A: { 0: 0.0431574, 1: 0.0647361, 2: 0.0647361, 3: 0.0755255, 4: 1.27314, J: 0.0971042, z: 0.0215787, TD: 0.0107894, UD: 0.0107894, VD: 0.0323681, WD: 0, XD: 0, OC: 0, YD: 0.0107894, ZD: 0, aD: 0.0107894, bD: 0, cD: 0, DC: 0, EC: 0.0215787, FC: 0, dD: 0.0215787 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "J", "TD", "UD", "VD", "WD", "XD", "OC", "YD", "ZD", "aD", "bD", "cD", "DC", "EC", "FC", "dD", "z", "0", "1", "2", "3", "4", "", "", ""], E: "Samsung Internet", F: { 0: 1684454400, 1: 1689292800, 2: 1697587200, 3: 1711497600, 4: 1715126400, J: 1461024e3, TD: 1481846400, UD: 1509408e3, VD: 1528329600, WD: 1546128e3, XD: 1554163200, OC: 1567900800, YD: 1582588800, ZD: 1593475200, aD: 1605657600, bD: 1618531200, cD: 1629072e3, DC: 1640736e3, EC: 1651708800, FC: 1659657600, dD: 1667260800, z: 1677369600 } }, Q: { A: { eD: 0.3208 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "eD", "", "", ""], E: "QQ Browser", F: { eD: 1710288e3 } }, R: { A: { fD: 0 }, B: "webkit", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "fD", "", "", ""], E: "Baidu Browser", F: { fD: 1710201600 } }, S: { A: { gD: 0.051328, hD: 0 }, B: "moz", C: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "gD", "hD", "", "", ""], E: "KaiOS Browser", F: { gD: 1527811200, hD: 1631664e3 } } };
const Oa = xr.browsers, er = Ar.browserVersions, Wr = Ia;
function zr(s) {
  return Object.keys(s).reduce((e, B) => (e[er[B]] = s[B], e), {});
}
br.agents = Object.keys(Wr).reduce((s, e) => {
  let B = Wr[e];
  return s[Oa[e]] = Object.keys(B).reduce((t, r) => (r === "A" ? t.usage_global = zr(B[r]) : r === "C" ? t.versions = B[r].reduce((C, i) => (i === "" ? C.push(null) : C.push(er[i]), C), []) : r === "D" ? t.prefix_exceptions = zr(B[r]) : r === "E" ? t.browser = B[r] : r === "F" ? t.release_date = Object.keys(B[r]).reduce(
    (C, i) => (C[er[i]] = B[r][i], C),
    {}
  ) : t.prefix = B[r], t), {}), s;
}, {});
var ja = {
  "0.20": "39",
  "0.21": "41",
  "0.22": "41",
  "0.23": "41",
  "0.24": "41",
  "0.25": "42",
  "0.26": "42",
  "0.27": "43",
  "0.28": "43",
  "0.29": "43",
  "0.30": "44",
  "0.31": "45",
  "0.32": "45",
  "0.33": "45",
  "0.34": "45",
  "0.35": "45",
  "0.36": "47",
  "0.37": "49",
  "1.0": "49",
  "1.1": "50",
  "1.2": "51",
  "1.3": "52",
  "1.4": "53",
  "1.5": "54",
  "1.6": "56",
  "1.7": "58",
  "1.8": "59",
  "2.0": "61",
  "2.1": "61",
  "3.0": "66",
  "3.1": "66",
  "4.0": "69",
  "4.1": "69",
  "4.2": "69",
  "5.0": "73",
  "6.0": "76",
  "6.1": "76",
  "7.0": "78",
  "7.1": "78",
  "7.2": "78",
  "7.3": "78",
  "8.0": "80",
  "8.1": "80",
  "8.2": "80",
  "8.3": "80",
  "8.4": "80",
  "8.5": "80",
  "9.0": "83",
  "9.1": "83",
  "9.2": "83",
  "9.3": "83",
  "9.4": "83",
  "10.0": "85",
  "10.1": "85",
  "10.2": "85",
  "10.3": "85",
  "10.4": "85",
  "11.0": "87",
  "11.1": "87",
  "11.2": "87",
  "11.3": "87",
  "11.4": "87",
  "11.5": "87",
  "12.0": "89",
  "12.1": "89",
  "12.2": "89",
  "13.0": "91",
  "13.1": "91",
  "13.2": "91",
  "13.3": "91",
  "13.4": "91",
  "13.5": "91",
  "13.6": "91",
  "14.0": "93",
  "14.1": "93",
  "14.2": "93",
  "15.0": "94",
  "15.1": "94",
  "15.2": "94",
  "15.3": "94",
  "15.4": "94",
  "15.5": "94",
  "16.0": "96",
  "16.1": "96",
  "16.2": "96",
  "17.0": "98",
  "17.1": "98",
  "17.2": "98",
  "17.3": "98",
  "17.4": "98",
  "18.0": "100",
  "18.1": "100",
  "18.2": "100",
  "18.3": "100",
  "19.0": "102",
  "19.1": "102",
  "20.0": "104",
  "20.1": "104",
  "20.2": "104",
  "20.3": "104",
  "21.0": "106",
  "21.1": "106",
  "21.2": "106",
  "21.3": "106",
  "21.4": "106",
  "22.0": "108",
  "22.1": "108",
  "22.2": "108",
  "22.3": "108",
  "23.0": "110",
  "23.1": "110",
  "23.2": "110",
  "23.3": "110",
  "24.0": "112",
  "24.1": "112",
  "24.2": "112",
  "24.3": "112",
  "24.4": "112",
  "24.5": "112",
  "24.6": "112",
  "24.7": "112",
  "24.8": "112",
  "25.0": "114",
  "25.1": "114",
  "25.2": "114",
  "25.3": "114",
  "25.4": "114",
  "25.5": "114",
  "25.6": "114",
  "25.7": "114",
  "25.8": "114",
  "25.9": "114",
  "26.0": "116",
  "26.1": "116",
  "26.2": "116",
  "26.3": "116",
  "26.4": "116",
  "26.5": "116",
  "26.6": "116",
  "27.0": "118",
  "27.1": "118",
  "27.2": "118",
  "27.3": "118",
  "28.0": "120",
  "28.1": "120",
  "28.2": "120",
  "28.3": "120",
  "29.0": "122",
  "29.1": "122",
  "29.2": "122",
  "29.3": "122",
  "29.4": "122",
  "30.0": "124",
  "30.1": "124",
  "30.2": "124",
  "30.3": "124",
  "30.4": "124",
  "30.5": "124",
  "31.0": "126",
  "31.1": "126",
  "31.2": "126",
  "31.3": "126",
  "31.4": "126",
  "31.5": "126",
  "31.6": "126",
  "31.7": "126",
  "32.0": "128",
  "32.1": "128",
  "32.2": "128",
  "33.0": "130",
  "34.0": "132"
};
const Pa = {
  start: "2015-09-08",
  lts: "2015-10-12",
  maintenance: "2017-04-01",
  end: "2018-04-30",
  codename: "Argon"
}, Ga = {
  start: "2015-10-29",
  maintenance: "2016-04-30",
  end: "2016-06-30"
}, Ma = {
  start: "2016-04-26",
  lts: "2016-10-18",
  maintenance: "2018-04-30",
  end: "2019-04-30",
  codename: "Boron"
}, Na = {
  start: "2016-10-25",
  maintenance: "2017-04-30",
  end: "2017-06-30"
}, La = {
  start: "2017-05-30",
  lts: "2017-10-31",
  maintenance: "2019-01-01",
  end: "2019-12-31",
  codename: "Carbon"
}, Ta = {
  start: "2017-10-01",
  maintenance: "2018-04-01",
  end: "2018-06-30"
}, Ha = {
  start: "2018-04-24",
  lts: "2018-10-30",
  maintenance: "2020-05-19",
  end: "2021-04-30",
  codename: "Dubnium"
}, Ja = {
  start: "2018-10-23",
  maintenance: "2019-04-22",
  end: "2019-06-01"
}, Ua = {
  start: "2019-04-23",
  lts: "2019-10-21",
  maintenance: "2020-11-30",
  end: "2022-04-30",
  codename: "Erbium"
}, Va = {
  start: "2019-10-22",
  maintenance: "2020-04-01",
  end: "2020-06-01"
}, Ka = {
  start: "2020-04-21",
  lts: "2020-10-27",
  maintenance: "2021-10-19",
  end: "2023-04-30",
  codename: "Fermium"
}, Qa = {
  start: "2020-10-20",
  maintenance: "2021-04-01",
  end: "2021-06-01"
}, Wa = {
  start: "2021-04-20",
  lts: "2021-10-26",
  maintenance: "2022-10-18",
  end: "2023-09-11",
  codename: "Gallium"
}, za = {
  start: "2021-10-19",
  maintenance: "2022-04-01",
  end: "2022-06-01"
}, qa = {
  start: "2022-04-19",
  lts: "2022-10-25",
  maintenance: "2023-10-18",
  end: "2025-04-30",
  codename: "Hydrogen"
}, Ya = {
  start: "2022-10-18",
  maintenance: "2023-04-01",
  end: "2023-06-01"
}, Xa = {
  start: "2023-04-18",
  lts: "2023-10-24",
  maintenance: "2024-10-22",
  end: "2026-04-30",
  codename: "Iron"
}, Za = {
  start: "2023-10-17",
  maintenance: "2024-04-01",
  end: "2024-06-01"
}, $a = {
  start: "2024-04-24",
  lts: "2024-10-29",
  maintenance: "2025-10-21",
  end: "2027-04-30",
  codename: ""
}, _a = {
  start: "2024-10-15",
  maintenance: "2025-04-01",
  end: "2025-06-01"
}, eo = {
  start: "2025-04-22",
  lts: "2025-10-28",
  maintenance: "2026-10-20",
  end: "2028-04-30",
  codename: ""
}, Bo = {
  "v0.8": {
    start: "2012-06-25",
    end: "2014-07-31"
  },
  "v0.10": {
    start: "2013-03-11",
    end: "2016-10-31"
  },
  "v0.12": {
    start: "2015-02-06",
    end: "2016-12-31"
  },
  v4: Pa,
  v5: Ga,
  v6: Ma,
  v7: Na,
  v8: La,
  v9: Ta,
  v10: Ha,
  v11: Ja,
  v12: Ua,
  v13: Va,
  v14: Ka,
  v15: Qa,
  v16: Wa,
  v17: za,
  v18: qa,
  v19: Ya,
  v20: Xa,
  v21: Za,
  v22: $a,
  v23: _a,
  v24: eo
}, to = {}, ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: to
}, Symbol.toStringTag, { value: "Module" })), T = /* @__PURE__ */ Ea(ro);
function Sr(s) {
  this.name = "BrowserslistError", this.message = s, this.browserslist = !0, Error.captureStackTrace && Error.captureStackTrace(this, Sr);
}
Sr.prototype = Error.prototype;
var Di = Sr, Ne = Di;
function Ce() {
}
var so = {
  loadQueries: function() {
    throw new Ne(
      "Sharable configs are not supported in client-side build of Browserslist"
    );
  },
  getStat: function(e) {
    return e.stats;
  },
  loadConfig: function(e) {
    if (e.config)
      throw new Ne(
        "Browserslist config are not supported in client-side build"
      );
  },
  loadCountry: function() {
    throw new Ne(
      "Country statistics are not supported in client-side build of Browserslist"
    );
  },
  loadFeature: function() {
    throw new Ne(
      "Supports queries are not available in client-side build of Browserslist"
    );
  },
  currentNode: function(e, B) {
    return e(["maintained node versions"], B)[0];
  },
  parseConfig: Ce,
  readConfig: Ce,
  findConfig: Ce,
  findConfigFile: Ce,
  clearCaches: Ce,
  oldDataWarning: Ce,
  env: {}
}, qr = /^\s+and\s+(.*)/i, Yr = /^(?:,\s*|\s+or\s+)(.*)/i;
function pi(s) {
  return Array.isArray(s) ? s.reduce(function(e, B) {
    return e.concat(pi(B));
  }, []) : [s];
}
function Co(s, e) {
  for (var B = s.length, t = 1; t <= B; t++) {
    var r = s.substr(-t, t);
    if (e(r, t, B))
      return s.slice(0, -t);
  }
  return "";
}
function mB(s, e) {
  var B = { query: e };
  e.indexOf("not ") === 0 && (B.not = !0, e = e.slice(4));
  for (var t in s) {
    var r = s[t], C = e.match(r.regexp);
    if (C) {
      B.type = t;
      for (var i = 0; i < r.matches.length; i++)
        B[r.matches[i]] = C[i + 1];
      return B;
    }
  }
  return B.type = "unknown", B;
}
function io(s, e, B) {
  var t;
  return Co(e, function(r, C, i) {
    return qr.test(r) ? (t = mB(s, r.match(qr)[1]), t.compose = "and", B.unshift(t), !0) : Yr.test(r) ? (t = mB(s, r.match(Yr)[1]), t.compose = "or", B.unshift(t), !0) : C === i ? (t = mB(s, r.trim()), t.compose = "or", B.unshift(t), !0) : !1;
  });
}
var no = function(e, B) {
  return Array.isArray(B) || (B = [B]), pi(
    B.map(function(t) {
      var r = [];
      do
        t = io(e, t, r);
      while (t);
      return r;
    })
  );
}, ao = ka, z = br.agents, H = ja, vB = Bo, sB = T, M = Di, G = so, hi = no, oo = 365.259641 * 24 * 60 * 60 * 1e3, mi = "37", lo = 14;
function vi(s, e) {
  return (s + ".").indexOf(e + ".") === 0;
}
function uo(s) {
  var e = s.slice(1);
  return y.nodeVersions.some(function(B) {
    return vi(B, e);
  });
}
function Xr(s) {
  return s.filter(function(e) {
    return typeof e == "string";
  });
}
function Le(s) {
  var e = s;
  return s.split(".").length === 3 && (e = s.split(".").slice(0, -1).join(".")), e;
}
function Z(s) {
  return function(B) {
    return s + " " + B;
  };
}
function Br(s) {
  return parseInt(s.split(".")[0]);
}
function Te(s, e) {
  if (s.length === 0) return [];
  var B = gi(s.map(Br)), t = B[B.length - e];
  if (!t)
    return s;
  for (var r = [], C = s.length - 1; C >= 0 && !(t > Br(s[C])); C--)
    r.unshift(s[C]);
  return r;
}
function gi(s) {
  for (var e = [], B = 0; B < s.length; B++)
    e.indexOf(s[B]) === -1 && e.push(s[B]);
  return e;
}
function oB(s, e, B) {
  for (var t in B)
    s[e + " " + t] = B[t];
}
function Zr(s, e) {
  if (e = parseFloat(e), s === ">")
    return function(t) {
      return B(t) > e;
    };
  return s === ">=" ? function(t) {
    return B(t) >= e;
  } : s === "<" ? function(t) {
    return parseFloat(t) < e;
  } : function(t) {
    return parseFloat(t) <= e;
  };
  function B(t) {
    return parseFloat(t.split("-")[1] || t);
  }
}
function fo(s, e) {
  return e = e.split(".").map($), e[1] = e[1] || 0, e[2] = e[2] || 0, s === ">" ? function(B) {
    return B = B.split(".").map($), ve(B, e) > 0;
  } : s === ">=" ? function(B) {
    return B = B.split(".").map($), ve(B, e) >= 0;
  } : s === "<" ? function(B) {
    return B = B.split(".").map($), ve(e, B) > 0;
  } : function(B) {
    return B = B.split(".").map($), ve(e, B) >= 0;
  };
}
function $(s) {
  return parseInt(s);
}
function _e(s, e) {
  return s < e ? -1 : s > e ? 1 : 0;
}
function ve(s, e) {
  return _e(parseInt(s[0]), parseInt(e[0])) || _e(parseInt(s[1] || "0"), parseInt(e[1] || "0")) || _e(parseInt(s[2] || "0"), parseInt(e[2] || "0"));
}
function $r(s, e) {
  switch (e = e.split(".").map($), typeof e[1] > "u" && (e[1] = "x"), s) {
    case "<=":
      return function(B) {
        return B = B.split(".").map($), _r(B, e) <= 0;
      };
    case ">=":
    default:
      return function(B) {
        return B = B.split(".").map($), _r(B, e) >= 0;
      };
  }
}
function _r(s, e) {
  return s[0] !== e[0] ? s[0] < e[0] ? -1 : 1 : e[1] === "x" ? 0 : s[1] !== e[1] ? s[1] < e[1] ? -1 : 1 : 0;
}
function co(s, e) {
  return s.versions.indexOf(e) !== -1 ? e : y.versionAliases[s.name][e] ? y.versionAliases[s.name][e] : !1;
}
function He(s, e) {
  var B = co(s, e);
  return B || (s.versions.length === 1 ? s.versions[0] : !1);
}
function yi(s, e) {
  return s = s / 1e3, Object.keys(z).reduce(function(B, t) {
    var r = _(t, e);
    if (!r) return B;
    var C = Object.keys(r.releaseDate).filter(function(i) {
      var n = r.releaseDate[i];
      return n !== null && n >= s;
    });
    return B.concat(C.map(Z(r.name)));
  }, []);
}
function es(s) {
  return {
    name: s.name,
    versions: s.versions,
    released: s.released,
    releaseDate: s.releaseDate
  };
}
function _(s, e) {
  if (s = s.toLowerCase(), s = y.aliases[s] || s, e.mobileToDesktop && y.desktopNames[s]) {
    var B = y.data[y.desktopNames[s]];
    if (s === "android")
      return po(es(y.data[s]), B);
    var t = es(B);
    return t.name = s, t;
  }
  return y.data[s];
}
function Bs(s, e) {
  var B = e.indexOf(mi);
  return s.filter(function(t) {
    return /^(?:[2-4]\.|[34]$)/.test(t);
  }).concat(e.slice(B));
}
function Do(s) {
  var e = {};
  for (var B in s)
    e[B] = s[B];
  return e;
}
function po(s, e) {
  return s.released = Bs(s.released, e.released), s.versions = Bs(s.versions, e.versions), s.releaseDate = Do(s.releaseDate), s.released.forEach(function(B) {
    s.releaseDate[B] === void 0 && (s.releaseDate[B] = e.releaseDate[B]);
  }), s;
}
function ie(s, e) {
  var B = _(s, e);
  if (!B) throw new M("Unknown browser " + s);
  return B;
}
function ho(s) {
  return new M(
    "Unknown browser query `" + s + "`. Maybe you are using old Browserslist or made typo in query."
  );
}
function Je(s, e, B, t) {
  var r = 1;
  switch (e) {
    case "android":
      if (t.mobileToDesktop) return s;
      var C = y.data.chrome.released;
      r = C.length - C.indexOf(mi);
      break;
    case "op_mob":
      var i = y.data.op_mob.released.slice(-1)[0];
      r = Br(i) - lo + 1;
      break;
    default:
      return s;
  }
  return B <= r ? s.slice(-1) : s.slice(r - 1 - B);
}
function ts(s, e) {
  return typeof s == "string" && (s.indexOf("y") >= 0 || e && s.indexOf("a") >= 0);
}
function oe(s, e) {
  return hi(tr, s).reduce(function(B, t, r) {
    if (t.not && r === 0)
      throw new M(
        "Write any browsers query (for instance, `defaults`) before `" + t.query + "`"
      );
    var C = tr[t.type], i = C.select.call(y, e, t).map(function(a) {
      var o = a.split(" ");
      return o[1] === "0" ? o[0] + " " + _(o[0], e).versions[0] : a;
    });
    if (t.compose === "and")
      return t.not ? B.filter(function(a) {
        return i.indexOf(a) === -1;
      }) : B.filter(function(a) {
        return i.indexOf(a) !== -1;
      });
    if (t.not) {
      var n = {};
      return i.forEach(function(a) {
        n[a] = !0;
      }), B.filter(function(a) {
        return !n[a];
      });
    }
    return B.concat(i);
  }, []);
}
function wi(s) {
  return typeof s > "u" && (s = {}), typeof s.path > "u" && (s.path = sB.resolve ? sB.resolve(".") : "."), s;
}
function bi(s, e) {
  if (typeof s > "u" || s === null) {
    var B = y.loadConfig(e);
    B ? s = B : s = y.defaults;
  }
  return s;
}
function xi(s) {
  if (!(typeof s == "string" || Array.isArray(s)))
    throw new M(
      "Browser queries must be an array or string. Got " + typeof s + "."
    );
}
var gB = {};
function y(s, e) {
  e = wi(e), s = bi(s, e), xi(s);
  var B = {
    ignoreUnknownVersions: e.ignoreUnknownVersions,
    dangerousExtend: e.dangerousExtend,
    mobileToDesktop: e.mobileToDesktop,
    path: e.path,
    env: e.env
  };
  G.oldDataWarning(y.data);
  var t = G.getStat(e, y.data);
  if (t) {
    B.customUsage = {};
    for (var r in t)
      oB(B.customUsage, r, t[r]);
  }
  var C = JSON.stringify([s, B]);
  if (gB[C]) return gB[C];
  var i = gi(oe(s, B)).sort(function(n, a) {
    if (n = n.split(" "), a = a.split(" "), n[0] === a[0]) {
      var o = n[1].split("-")[0], u = a[1].split("-")[0];
      return ve(u.split("."), o.split("."));
    } else
      return _e(n[0], a[0]);
  });
  return G.env.BROWSERSLIST_DISABLE_CACHE || (gB[C] = i), i;
}
y.parse = function(s, e) {
  return e = wi(e), s = bi(s, e), xi(s), hi(tr, s);
};
y.cache = {};
y.data = {};
y.usage = {
  global: {},
  custom: null
};
y.defaults = ["> 0.5%", "last 2 versions", "Firefox ESR", "not dead"];
y.aliases = {
  fx: "firefox",
  ff: "firefox",
  ios: "ios_saf",
  explorer: "ie",
  blackberry: "bb",
  explorermobile: "ie_mob",
  operamini: "op_mini",
  operamobile: "op_mob",
  chromeandroid: "and_chr",
  firefoxandroid: "and_ff",
  ucandroid: "and_uc",
  qqandroid: "and_qq"
};
y.desktopNames = {
  and_chr: "chrome",
  and_ff: "firefox",
  ie_mob: "ie",
  android: "chrome"
  // has extra processing logic
};
y.versionAliases = {};
y.clearCaches = G.clearCaches;
y.parseConfig = G.parseConfig;
y.readConfig = G.readConfig;
y.findConfigFile = G.findConfigFile;
y.findConfig = G.findConfig;
y.loadConfig = G.loadConfig;
y.coverage = function(s, e) {
  var B;
  if (typeof e > "u")
    B = y.usage.global;
  else if (e === "my stats") {
    var t = {};
    t.path = sB.resolve ? sB.resolve(".") : ".";
    var r = G.getStat(t);
    if (!r)
      throw new M("Custom usage statistics was not provided");
    B = {};
    for (var C in r)
      oB(B, C, r[C]);
  } else if (typeof e == "string")
    e.length > 2 ? e = e.toLowerCase() : e = e.toUpperCase(), G.loadCountry(y.usage, e, y.data), B = y.usage[e];
  else {
    "dataByBrowser" in e && (e = e.dataByBrowser), B = {};
    for (var i in e)
      for (var n in e[i])
        B[i + " " + n] = e[i][n];
  }
  return s.reduce(function(a, o) {
    var u = B[o];
    return u === void 0 && (u = B[o.replace(/ \S+$/, " 0")]), a + (u || 0);
  }, 0);
};
function yB(s, e) {
  var B = y.nodeVersions.filter(function(t) {
    return vi(t, e.version);
  });
  if (B.length === 0) {
    if (s.ignoreUnknownVersions)
      return [];
    throw new M(
      "Unknown version " + e.version + " of Node.js"
    );
  }
  return ["node " + B[B.length - 1]];
}
function wB(s, e) {
  var B = parseInt(e.year), t = parseInt(e.month || "01") - 1, r = parseInt(e.day || "01");
  return yi(Date.UTC(B, t, r, 0, 0, 0), s);
}
function rs(s, e) {
  var B = parseFloat(e.coverage), t = y.usage.global;
  if (e.place)
    if (e.place.match(/^my\s+stats$/i)) {
      if (!s.customUsage)
        throw new M("Custom usage statistics was not provided");
      t = s.customUsage;
    } else {
      var r;
      e.place.length === 2 ? r = e.place.toUpperCase() : r = e.place.toLowerCase(), G.loadCountry(y.usage, r, y.data), t = y.usage[r];
    }
  for (var C = Object.keys(t).sort(function(u, l) {
    return t[l] - t[u];
  }), i = 0, n = [], a, o = 0; o < C.length && (a = C[o], !(t[a] === 0 || (i += t[a], n.push(a), i >= B))); o++)
    ;
  return n;
}
var tr = {
  last_major_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+major\s+versions?$/i,
    select: function(s, e) {
      return Object.keys(z).reduce(function(B, t) {
        var r = _(t, s);
        if (!r) return B;
        var C = Te(r.released, e.versions);
        return C = C.map(Z(r.name)), C = Je(C, r.name, e.versions, s), B.concat(C);
      }, []);
    }
  },
  last_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+versions?$/i,
    select: function(s, e) {
      return Object.keys(z).reduce(function(B, t) {
        var r = _(t, s);
        if (!r) return B;
        var C = r.released.slice(-e.versions);
        return C = C.map(Z(r.name)), C = Je(C, r.name, e.versions, s), B.concat(C);
      }, []);
    }
  },
  last_electron_major_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+electron\s+major\s+versions?$/i,
    select: function(s, e) {
      var B = Te(Object.keys(H), e.versions);
      return B.map(function(t) {
        return "chrome " + H[t];
      });
    }
  },
  last_node_major_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+node\s+major\s+versions?$/i,
    select: function(s, e) {
      return Te(y.nodeVersions, e.versions).map(
        function(B) {
          return "node " + B;
        }
      );
    }
  },
  last_browser_major_versions: {
    matches: ["versions", "browser"],
    regexp: /^last\s+(\d+)\s+(\w+)\s+major\s+versions?$/i,
    select: function(s, e) {
      var B = ie(e.browser, s), t = Te(B.released, e.versions), r = t.map(Z(B.name));
      return r = Je(r, B.name, e.versions, s), r;
    }
  },
  last_electron_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+electron\s+versions?$/i,
    select: function(s, e) {
      return Object.keys(H).slice(-e.versions).map(function(B) {
        return "chrome " + H[B];
      });
    }
  },
  last_node_versions: {
    matches: ["versions"],
    regexp: /^last\s+(\d+)\s+node\s+versions?$/i,
    select: function(s, e) {
      return y.nodeVersions.slice(-e.versions).map(function(B) {
        return "node " + B;
      });
    }
  },
  last_browser_versions: {
    matches: ["versions", "browser"],
    regexp: /^last\s+(\d+)\s+(\w+)\s+versions?$/i,
    select: function(s, e) {
      var B = ie(e.browser, s), t = B.released.slice(-e.versions).map(Z(B.name));
      return t = Je(t, B.name, e.versions, s), t;
    }
  },
  unreleased_versions: {
    matches: [],
    regexp: /^unreleased\s+versions$/i,
    select: function(s) {
      return Object.keys(z).reduce(function(e, B) {
        var t = _(B, s);
        if (!t) return e;
        var r = t.versions.filter(function(C) {
          return t.released.indexOf(C) === -1;
        });
        return r = r.map(Z(t.name)), e.concat(r);
      }, []);
    }
  },
  unreleased_electron_versions: {
    matches: [],
    regexp: /^unreleased\s+electron\s+versions?$/i,
    select: function() {
      return [];
    }
  },
  unreleased_browser_versions: {
    matches: ["browser"],
    regexp: /^unreleased\s+(\w+)\s+versions?$/i,
    select: function(s, e) {
      var B = ie(e.browser, s);
      return B.versions.filter(function(t) {
        return B.released.indexOf(t) === -1;
      }).map(Z(B.name));
    }
  },
  last_years: {
    matches: ["years"],
    regexp: /^last\s+(\d*.?\d+)\s+years?$/i,
    select: function(s, e) {
      return yi(Date.now() - oo * e.years, s);
    }
  },
  since_y: {
    matches: ["year"],
    regexp: /^since (\d+)$/i,
    select: wB
  },
  since_y_m: {
    matches: ["year", "month"],
    regexp: /^since (\d+)-(\d+)$/i,
    select: wB
  },
  since_y_m_d: {
    matches: ["year", "month", "day"],
    regexp: /^since (\d+)-(\d+)-(\d+)$/i,
    select: wB
  },
  popularity: {
    matches: ["sign", "popularity"],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%$/,
    select: function(s, e) {
      var B = parseFloat(e.popularity), t = y.usage.global;
      return Object.keys(t).reduce(function(r, C) {
        return e.sign === ">" ? t[C] > B && r.push(C) : e.sign === "<" ? t[C] < B && r.push(C) : e.sign === "<=" ? t[C] <= B && r.push(C) : t[C] >= B && r.push(C), r;
      }, []);
    }
  },
  popularity_in_my_stats: {
    matches: ["sign", "popularity"],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+my\s+stats$/,
    select: function(s, e) {
      var B = parseFloat(e.popularity);
      if (!s.customUsage)
        throw new M("Custom usage statistics was not provided");
      var t = s.customUsage;
      return Object.keys(t).reduce(function(r, C) {
        var i = t[C];
        return i == null || (e.sign === ">" ? i > B && r.push(C) : e.sign === "<" ? i < B && r.push(C) : e.sign === "<=" ? i <= B && r.push(C) : i >= B && r.push(C)), r;
      }, []);
    }
  },
  popularity_in_config_stats: {
    matches: ["sign", "popularity", "config"],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+(\S+)\s+stats$/,
    select: function(s, e) {
      var B = parseFloat(e.popularity), t = G.loadStat(s, e.config, y.data);
      if (t) {
        s.customUsage = {};
        for (var r in t)
          oB(s.customUsage, r, t[r]);
      }
      if (!s.customUsage)
        throw new M("Custom usage statistics was not provided");
      var C = s.customUsage;
      return Object.keys(C).reduce(function(i, n) {
        var a = C[n];
        return a == null || (e.sign === ">" ? a > B && i.push(n) : e.sign === "<" ? a < B && i.push(n) : e.sign === "<=" ? a <= B && i.push(n) : a >= B && i.push(n)), i;
      }, []);
    }
  },
  popularity_in_place: {
    matches: ["sign", "popularity", "place"],
    regexp: /^(>=?|<=?)\s*(\d+|\d+\.\d+|\.\d+)%\s+in\s+((alt-)?\w\w)$/,
    select: function(s, e) {
      var B = parseFloat(e.popularity), t = e.place;
      t.length === 2 ? t = t.toUpperCase() : t = t.toLowerCase(), G.loadCountry(y.usage, t, y.data);
      var r = y.usage[t];
      return Object.keys(r).reduce(function(C, i) {
        var n = r[i];
        return n == null || (e.sign === ">" ? n > B && C.push(i) : e.sign === "<" ? n < B && C.push(i) : e.sign === "<=" ? n <= B && C.push(i) : n >= B && C.push(i)), C;
      }, []);
    }
  },
  cover: {
    matches: ["coverage"],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%$/i,
    select: rs
  },
  cover_in: {
    matches: ["coverage", "place"],
    regexp: /^cover\s+(\d+|\d+\.\d+|\.\d+)%\s+in\s+(my\s+stats|(alt-)?\w\w)$/i,
    select: rs
  },
  supports: {
    matches: ["supportType", "feature"],
    regexp: /^(?:(fully|partially)\s+)?supports\s+([\w-]+)$/,
    select: function(s, e) {
      G.loadFeature(y.cache, e.feature);
      var B = e.supportType !== "fully", t = y.cache[e.feature], r = [];
      for (var C in t) {
        for (var i = _(C, s), n = i.released.length - 1; n >= 0 && !(i.released[n] in t[C]); )
          n--;
        var a = s.mobileToDesktop && C in y.desktopNames && ts(t[C][i.released[n]], B);
        i.versions.forEach(function(o) {
          var u = t[C][o];
          u === void 0 && a && (u = t[y.desktopNames[C]][o]), ts(u, B) && r.push(C + " " + o);
        });
      }
      return r;
    }
  },
  electron_range: {
    matches: ["from", "to"],
    regexp: /^electron\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function(s, e) {
      var B = Le(e.from), t = Le(e.to), r = parseFloat(e.from), C = parseFloat(e.to);
      if (!H[B])
        throw new M("Unknown version " + r + " of electron");
      if (!H[t])
        throw new M("Unknown version " + C + " of electron");
      return Object.keys(H).filter(function(i) {
        var n = parseFloat(i);
        return n >= r && n <= C;
      }).map(function(i) {
        return "chrome " + H[i];
      });
    }
  },
  node_range: {
    matches: ["from", "to"],
    regexp: /^node\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function(s, e) {
      return y.nodeVersions.filter($r(">=", e.from)).filter($r("<=", e.to)).map(function(B) {
        return "node " + B;
      });
    }
  },
  browser_range: {
    matches: ["browser", "from", "to"],
    regexp: /^(\w+)\s+([\d.]+)\s*-\s*([\d.]+)$/i,
    select: function(s, e) {
      var B = ie(e.browser, s), t = parseFloat(He(B, e.from) || e.from), r = parseFloat(He(B, e.to) || e.to);
      function C(i) {
        var n = parseFloat(i);
        return n >= t && n <= r;
      }
      return B.released.filter(C).map(Z(B.name));
    }
  },
  electron_ray: {
    matches: ["sign", "version"],
    regexp: /^electron\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function(s, e) {
      var B = Le(e.version);
      return Object.keys(H).filter(Zr(e.sign, B)).map(function(t) {
        return "chrome " + H[t];
      });
    }
  },
  node_ray: {
    matches: ["sign", "version"],
    regexp: /^node\s*(>=?|<=?)\s*([\d.]+)$/i,
    select: function(s, e) {
      return y.nodeVersions.filter(fo(e.sign, e.version)).map(function(B) {
        return "node " + B;
      });
    }
  },
  browser_ray: {
    matches: ["browser", "sign", "version"],
    regexp: /^(\w+)\s*(>=?|<=?)\s*([\d.]+)$/,
    select: function(s, e) {
      var B = e.version, t = ie(e.browser, s), r = y.versionAliases[t.name][B];
      return r && (B = r), t.released.filter(Zr(e.sign, B)).map(function(C) {
        return t.name + " " + C;
      });
    }
  },
  firefox_esr: {
    matches: [],
    regexp: /^(firefox|ff|fx)\s+esr$/i,
    select: function() {
      return ["firefox 115", "firefox 128"];
    }
  },
  opera_mini_all: {
    matches: [],
    regexp: /(operamini|op_mini)\s+all/i,
    select: function() {
      return ["op_mini all"];
    }
  },
  electron_version: {
    matches: ["version"],
    regexp: /^electron\s+([\d.]+)$/i,
    select: function(s, e) {
      var B = Le(e.version), t = H[B];
      if (!t)
        throw new M(
          "Unknown version " + e.version + " of electron"
        );
      return ["chrome " + t];
    }
  },
  node_major_version: {
    matches: ["version"],
    regexp: /^node\s+(\d+)$/i,
    select: yB
  },
  node_minor_version: {
    matches: ["version"],
    regexp: /^node\s+(\d+\.\d+)$/i,
    select: yB
  },
  node_patch_version: {
    matches: ["version"],
    regexp: /^node\s+(\d+\.\d+\.\d+)$/i,
    select: yB
  },
  current_node: {
    matches: [],
    regexp: /^current\s+node$/i,
    select: function(s) {
      return [G.currentNode(oe, s)];
    }
  },
  maintained_node: {
    matches: [],
    regexp: /^maintained\s+node\s+versions$/i,
    select: function(s) {
      var e = Date.now(), B = Object.keys(vB).filter(function(t) {
        return e < Date.parse(vB[t].end) && e > Date.parse(vB[t].start) && uo(t);
      }).map(function(t) {
        return "node " + t.slice(1);
      });
      return oe(B, s);
    }
  },
  phantomjs_1_9: {
    matches: [],
    regexp: /^phantomjs\s+1.9$/i,
    select: function() {
      return ["safari 5"];
    }
  },
  phantomjs_2_1: {
    matches: [],
    regexp: /^phantomjs\s+2.1$/i,
    select: function() {
      return ["safari 6"];
    }
  },
  browser_version: {
    matches: ["browser", "version"],
    regexp: /^(\w+)\s+(tp|[\d.]+)$/i,
    select: function(s, e) {
      var B = e.version;
      /^tp$/i.test(B) && (B = "TP");
      var t = ie(e.browser, s), r = He(t, B);
      if (r)
        B = r;
      else if (B.indexOf(".") === -1 ? r = B + ".0" : r = B.replace(/\.0$/, ""), r = He(t, r), r)
        B = r;
      else {
        if (s.ignoreUnknownVersions)
          return [];
        throw new M(
          "Unknown version " + B + " of " + e.browser
        );
      }
      return [t.name + " " + B];
    }
  },
  browserslist_config: {
    matches: [],
    regexp: /^browserslist config$/i,
    select: function(s) {
      return y(void 0, s);
    }
  },
  extends: {
    matches: ["config"],
    regexp: /^extends (.+)$/i,
    select: function(s, e) {
      return oe(G.loadQueries(s, e.config), s);
    }
  },
  defaults: {
    matches: [],
    regexp: /^defaults$/i,
    select: function(s) {
      return oe(y.defaults, s);
    }
  },
  dead: {
    matches: [],
    regexp: /^dead$/i,
    select: function(s) {
      var e = [
        "Baidu >= 0",
        "ie <= 11",
        "ie_mob <= 11",
        "bb <= 10",
        "op_mob <= 12.1",
        "samsung 4"
      ];
      return oe(e, s);
    }
  },
  unknown: {
    matches: [],
    regexp: /^(\w+)$/i,
    select: function(s, e) {
      throw _(e.query, s) ? new M(
        "Specify versions in Browserslist query for browser " + e.query
      ) : ho(e.query);
    }
  }
};
(function() {
  for (var s in z) {
    var e = z[s];
    y.data[s] = {
      name: s,
      versions: Xr(z[s].versions),
      released: Xr(z[s].versions.slice(0, -3)),
      releaseDate: z[s].release_date
    }, oB(y.usage.global, s, e.usage_global), y.versionAliases[s] = {};
    for (var B = 0; B < e.versions.length; B++) {
      var t = e.versions[B];
      if (t && t.indexOf("-") !== -1)
        for (var r = t.split("-"), C = 0; C < r.length; C++)
          y.versionAliases[s][r[C]] = t;
    }
  }
  y.nodeVersions = ao.map(function(i) {
    return i.version;
  });
})();
var Ai = y, Er = { exports: {} }, F = String, Si = function() {
  return { isColorSupported: !1, reset: F, bold: F, dim: F, italic: F, underline: F, inverse: F, hidden: F, strikethrough: F, black: F, red: F, green: F, yellow: F, blue: F, magenta: F, cyan: F, white: F, gray: F, bgBlack: F, bgRed: F, bgGreen: F, bgYellow: F, bgBlue: F, bgMagenta: F, bgCyan: F, bgWhite: F, blackBright: F, redBright: F, greenBright: F, yellowBright: F, blueBright: F, magentaBright: F, cyanBright: F, whiteBright: F, bgBlackBright: F, bgRedBright: F, bgGreenBright: F, bgYellowBright: F, bgBlueBright: F, bgMagentaBright: F, bgCyanBright: F, bgWhiteBright: F };
};
Er.exports = Si();
Er.exports.createColors = Si;
var mo = Er.exports, j = {};
let ss = mo, Cs = T, rr = class Ei extends Error {
  constructor(e, B, t, r, C, i) {
    super(e), this.name = "CssSyntaxError", this.reason = e, C && (this.file = C), r && (this.source = r), i && (this.plugin = i), typeof B < "u" && typeof t < "u" && (typeof B == "number" ? (this.line = B, this.column = t) : (this.line = B.line, this.column = B.column, this.endLine = t.line, this.endColumn = t.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Ei);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source) return "";
    let B = this.source;
    e == null && (e = ss.isColorSupported);
    let t = (u) => u, r = (u) => u, C = (u) => u;
    if (e) {
      let { bold: u, gray: l, red: c } = ss.createColors(!0);
      r = (h) => u(c(h)), t = (h) => l(h), Cs && (C = (h) => Cs(h));
    }
    let i = B.split(/\r?\n/), n = Math.max(this.line - 3, 0), a = Math.min(this.line + 2, i.length), o = String(a).length;
    return i.slice(n, a).map((u, l) => {
      let c = n + 1 + l, h = " " + (" " + c).slice(-o) + " | ";
      if (c === this.line) {
        if (u.length > 160) {
          let b = 20, p = Math.max(0, this.column - b), f = Math.max(
            this.column + b,
            this.endColumn + b
          ), d = u.slice(p, f), D = t(h.replace(/\d/g, " ")) + u.slice(0, Math.min(this.column - 1, b - 1)).replace(/[^\t]/g, " ");
          return r(">") + t(h) + C(d) + `
 ` + D + r("^");
        }
        let w = t(h.replace(/\d/g, " ")) + u.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return r(">") + t(h) + C(u) + `
 ` + w + r("^");
      }
      return " " + t(h) + C(u);
    }).join(`
`);
  }
  toString() {
    let e = this.showSourceCode();
    return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
  }
};
var kr = rr;
rr.default = rr;
const is = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function vo(s) {
  return s[0].toUpperCase() + s.slice(1);
}
let sr = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, B) {
    let t = "@" + e.name, r = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? t += e.raws.afterName : r && (t += " "), e.nodes)
      this.block(e, t + r);
    else {
      let C = (e.raws.between || "") + (B ? ";" : "");
      this.builder(t + r + C, e);
    }
  }
  beforeAfter(e, B) {
    let t;
    e.type === "decl" ? t = this.raw(e, null, "beforeDecl") : e.type === "comment" ? t = this.raw(e, null, "beforeComment") : B === "before" ? t = this.raw(e, null, "beforeRule") : t = this.raw(e, null, "beforeClose");
    let r = e.parent, C = 0;
    for (; r && r.type !== "root"; )
      C += 1, r = r.parent;
    if (t.includes(`
`)) {
      let i = this.raw(e, null, "indent");
      if (i.length)
        for (let n = 0; n < C; n++) t += i;
    }
    return t;
  }
  block(e, B) {
    let t = this.raw(e, "between", "beforeOpen");
    this.builder(B + t + "{", e, "start");
    let r;
    e.nodes && e.nodes.length ? (this.body(e), r = this.raw(e, "after")) : r = this.raw(e, "after", "emptyBody"), r && this.builder(r), this.builder("}", e, "end");
  }
  body(e) {
    let B = e.nodes.length - 1;
    for (; B > 0 && e.nodes[B].type === "comment"; )
      B -= 1;
    let t = this.raw(e, "semicolon");
    for (let r = 0; r < e.nodes.length; r++) {
      let C = e.nodes[r], i = this.raw(C, "before");
      i && this.builder(i), this.stringify(C, B !== r || t);
    }
  }
  comment(e) {
    let B = this.raw(e, "left", "commentLeft"), t = this.raw(e, "right", "commentRight");
    this.builder("/*" + B + e.text + t + "*/", e);
  }
  decl(e, B) {
    let t = this.raw(e, "between", "colon"), r = e.prop + t + this.rawValue(e, "value");
    e.important && (r += e.raws.important || " !important"), B && (r += ";"), this.builder(r, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, B, t) {
    let r;
    if (t || (t = B), B && (r = e.raws[B], typeof r < "u"))
      return r;
    let C = e.parent;
    if (t === "before" && (!C || C.type === "root" && C.first === e || C && C.type === "document"))
      return "";
    if (!C) return is[t];
    let i = e.root();
    if (i.rawCache || (i.rawCache = {}), typeof i.rawCache[t] < "u")
      return i.rawCache[t];
    if (t === "before" || t === "after")
      return this.beforeAfter(e, t);
    {
      let n = "raw" + vo(t);
      this[n] ? r = this[n](i, e) : i.walk((a) => {
        if (r = a.raws[B], typeof r < "u") return !1;
      });
    }
    return typeof r > "u" && (r = is[t]), i.rawCache[t] = r, r;
  }
  rawBeforeClose(e) {
    let B;
    return e.walk((t) => {
      if (t.nodes && t.nodes.length > 0 && typeof t.raws.after < "u")
        return B = t.raws.after, B.includes(`
`) && (B = B.replace(/[^\n]+$/, "")), !1;
    }), B && (B = B.replace(/\S/g, "")), B;
  }
  rawBeforeComment(e, B) {
    let t;
    return e.walkComments((r) => {
      if (typeof r.raws.before < "u")
        return t = r.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), typeof t > "u" ? t = this.raw(B, null, "beforeDecl") : t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeDecl(e, B) {
    let t;
    return e.walkDecls((r) => {
      if (typeof r.raws.before < "u")
        return t = r.raws.before, t.includes(`
`) && (t = t.replace(/[^\n]+$/, "")), !1;
    }), typeof t > "u" ? t = this.raw(B, null, "beforeRule") : t && (t = t.replace(/\S/g, "")), t;
  }
  rawBeforeOpen(e) {
    let B;
    return e.walk((t) => {
      if (t.type !== "decl" && (B = t.raws.between, typeof B < "u"))
        return !1;
    }), B;
  }
  rawBeforeRule(e) {
    let B;
    return e.walk((t) => {
      if (t.nodes && (t.parent !== e || e.first !== t) && typeof t.raws.before < "u")
        return B = t.raws.before, B.includes(`
`) && (B = B.replace(/[^\n]+$/, "")), !1;
    }), B && (B = B.replace(/\S/g, "")), B;
  }
  rawColon(e) {
    let B;
    return e.walkDecls((t) => {
      if (typeof t.raws.between < "u")
        return B = t.raws.between.replace(/[^\s:]/g, ""), !1;
    }), B;
  }
  rawEmptyBody(e) {
    let B;
    return e.walk((t) => {
      if (t.nodes && t.nodes.length === 0 && (B = t.raws.after, typeof B < "u"))
        return !1;
    }), B;
  }
  rawIndent(e) {
    if (e.raws.indent) return e.raws.indent;
    let B;
    return e.walk((t) => {
      let r = t.parent;
      if (r && r !== e && r.parent && r.parent === e && typeof t.raws.before < "u") {
        let C = t.raws.before.split(`
`);
        return B = C[C.length - 1], B = B.replace(/\S/g, ""), !1;
      }
    }), B;
  }
  rawSemicolon(e) {
    let B;
    return e.walk((t) => {
      if (t.nodes && t.nodes.length && t.last.type === "decl" && (B = t.raws.semicolon, typeof B < "u"))
        return !1;
    }), B;
  }
  rawValue(e, B) {
    let t = e[B], r = e.raws[B];
    return r && r.value === t ? r.raw : t;
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  stringify(e, B) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, B);
  }
};
var ki = sr;
sr.default = sr;
let go = ki;
function Cr(s, e) {
  new go(e).stringify(s);
}
var lB = Cr;
Cr.default = Cr;
var Ae = {};
Ae.isClean = Symbol("isClean");
Ae.my = Symbol("my");
let yo = kr, wo = ki, bo = lB, { isClean: De, my: xo } = Ae;
function ir(s, e) {
  let B = new s.constructor();
  for (let t in s) {
    if (!Object.prototype.hasOwnProperty.call(s, t) || t === "proxyCache") continue;
    let r = s[t], C = typeof r;
    t === "parent" && C === "object" ? e && (B[t] = e) : t === "source" ? B[t] = r : Array.isArray(r) ? B[t] = r.map((i) => ir(i, B)) : (C === "object" && r !== null && (r = ir(r)), B[t] = r);
  }
  return B;
}
let nr = class {
  constructor(e = {}) {
    this.raws = {}, this[De] = !1, this[xo] = !0;
    for (let B in e)
      if (B === "nodes") {
        this.nodes = [];
        for (let t of e[B])
          typeof t.clone == "function" ? this.append(t.clone()) : this.append(t);
      } else
        this[B] = e[B];
  }
  addToError(e) {
    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
      let B = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${B.input.from}:${B.start.line}:${B.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let B in e)
      this[B] = e[B];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
  }
  clone(e = {}) {
    let B = ir(this);
    for (let t in e)
      B[t] = e[t];
    return B;
  }
  cloneAfter(e = {}) {
    let B = this.clone(e);
    return this.parent.insertAfter(this, B), B;
  }
  cloneBefore(e = {}) {
    let B = this.clone(e);
    return this.parent.insertBefore(this, B), B;
  }
  error(e, B = {}) {
    if (this.source) {
      let { end: t, start: r } = this.rangeBy(B);
      return this.source.input.error(
        e,
        { column: r.column, line: r.line },
        { column: t.column, line: t.line },
        B
      );
    }
    return new yo(e);
  }
  getProxyProcessor() {
    return {
      get(e, B) {
        return B === "proxyOf" ? e : B === "root" ? () => e.root().toProxy() : e[B];
      },
      set(e, B, t) {
        return e[B] === t || (e[B] = t, (B === "prop" || B === "value" || B === "name" || B === "params" || B === "important" || /* c8 ignore next */
        B === "text") && e.markDirty()), !0;
      }
    };
  }
  /* c8 ignore next 3 */
  markClean() {
    this[De] = !0;
  }
  markDirty() {
    if (this[De]) {
      this[De] = !1;
      let e = this;
      for (; e = e.parent; )
        e[De] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e, B) {
    let t = this.source.start;
    if (e.index)
      t = this.positionInside(e.index, B);
    else if (e.word) {
      B = this.toString();
      let r = B.indexOf(e.word);
      r !== -1 && (t = this.positionInside(r, B));
    }
    return t;
  }
  positionInside(e, B) {
    let t = B || this.toString(), r = this.source.start.column, C = this.source.start.line;
    for (let i = 0; i < e; i++)
      t[i] === `
` ? (r = 1, C += 1) : r += 1;
    return { column: r, line: C };
  }
  prev() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e) {
    let B = {
      column: this.source.start.column,
      line: this.source.start.line
    }, t = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line
    } : {
      column: B.column + 1,
      line: B.line
    };
    if (e.word) {
      let r = this.toString(), C = r.indexOf(e.word);
      C !== -1 && (B = this.positionInside(C, r), t = this.positionInside(
        C + e.word.length,
        r
      ));
    } else
      e.start ? B = {
        column: e.start.column,
        line: e.start.line
      } : e.index && (B = this.positionInside(e.index)), e.end ? t = {
        column: e.end.column,
        line: e.end.line
      } : typeof e.endIndex == "number" ? t = this.positionInside(e.endIndex) : e.index && (t = this.positionInside(e.index + 1));
    return (t.line < B.line || t.line === B.line && t.column <= B.column) && (t = { column: B.column + 1, line: B.line }), { end: t, start: B };
  }
  raw(e, B) {
    return new wo().raw(this, e, B);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let B = this, t = !1;
      for (let r of e)
        r === this ? t = !0 : t ? (this.parent.insertAfter(B, r), B = r) : this.parent.insertBefore(B, r);
      t || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; )
      e = e.parent;
    return e;
  }
  toJSON(e, B) {
    let t = {}, r = B == null;
    B = B || /* @__PURE__ */ new Map();
    let C = 0;
    for (let i in this) {
      if (!Object.prototype.hasOwnProperty.call(this, i) || i === "parent" || i === "proxyCache") continue;
      let n = this[i];
      if (Array.isArray(n))
        t[i] = n.map((a) => typeof a == "object" && a.toJSON ? a.toJSON(null, B) : a);
      else if (typeof n == "object" && n.toJSON)
        t[i] = n.toJSON(null, B);
      else if (i === "source") {
        let a = B.get(n.input);
        a == null && (a = C, B.set(n.input, C), C++), t[i] = {
          end: n.end,
          inputId: a,
          start: n.start
        };
      } else
        t[i] = n;
    }
    return r && (t.inputs = [...B.keys()].map((i) => i.toJSON())), t;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = bo) {
    e.stringify && (e = e.stringify);
    let B = "";
    return e(this, (t) => {
      B += t;
    }), B;
  }
  warn(e, B, t) {
    let r = { node: this };
    for (let C in t) r[C] = t[C];
    return e.warn(B, r);
  }
  get proxyOf() {
    return this;
  }
};
var uB = nr;
nr.default = nr;
let Ao = uB, ar = class extends Ao {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var fB = ar;
ar.default = ar;
let So = uB, or = class extends So {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var cB = or;
or.default = or;
let Fi = fB, Ri = cB, Eo = uB, { isClean: Ii, my: Oi } = Ae, Fr, ji, Pi, Rr;
function Gi(s) {
  return s.map((e) => (e.nodes && (e.nodes = Gi(e.nodes)), delete e.source, e));
}
function Mi(s) {
  if (s[Ii] = !1, s.proxyOf.nodes)
    for (let e of s.proxyOf.nodes)
      Mi(e);
}
let Y = class Ni extends Eo {
  append(...e) {
    for (let B of e) {
      let t = this.normalize(B, this.last);
      for (let r of t) this.proxyOf.nodes.push(r);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let B of this.nodes) B.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes) return;
    let B = this.getIterator(), t, r;
    for (; this.indexes[B] < this.proxyOf.nodes.length && (t = this.indexes[B], r = e(this.proxyOf.nodes[t], t), r !== !1); )
      this.indexes[B] += 1;
    return delete this.indexes[B], r;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let e = this.lastEach;
    return this.indexes[e] = 0, e;
  }
  getProxyProcessor() {
    return {
      get(e, B) {
        return B === "proxyOf" ? e : e[B] ? B === "each" || typeof B == "string" && B.startsWith("walk") ? (...t) => e[B](
          ...t.map((r) => typeof r == "function" ? (C, i) => r(C.toProxy(), i) : r)
        ) : B === "every" || B === "some" ? (t) => e[B](
          (r, ...C) => t(r.toProxy(), ...C)
        ) : B === "root" ? () => e.root().toProxy() : B === "nodes" ? e.nodes.map((t) => t.toProxy()) : B === "first" || B === "last" ? e[B].toProxy() : e[B] : e[B];
      },
      set(e, B, t) {
        return e[B] === t || (e[B] = t, (B === "name" || B === "params" || B === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, B) {
    let t = this.index(e), r = this.normalize(B, this.proxyOf.nodes[t]).reverse();
    t = this.index(e);
    for (let i of r) this.proxyOf.nodes.splice(t + 1, 0, i);
    let C;
    for (let i in this.indexes)
      C = this.indexes[i], t < C && (this.indexes[i] = C + r.length);
    return this.markDirty(), this;
  }
  insertBefore(e, B) {
    let t = this.index(e), r = t === 0 ? "prepend" : !1, C = this.normalize(
      B,
      this.proxyOf.nodes[t],
      r
    ).reverse();
    t = this.index(e);
    for (let n of C) this.proxyOf.nodes.splice(t, 0, n);
    let i;
    for (let n in this.indexes)
      i = this.indexes[n], t <= i && (this.indexes[n] = i + C.length);
    return this.markDirty(), this;
  }
  normalize(e, B) {
    if (typeof e == "string")
      e = Gi(ji(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let r of e)
        r.parent && r.parent.removeChild(r, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let r of e)
        r.parent && r.parent.removeChild(r, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new Ri(e)];
    } else if (e.selector || e.selectors)
      e = [new Rr(e)];
    else if (e.name)
      e = [new Fr(e)];
    else if (e.text)
      e = [new Fi(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((r) => (r[Oi] || Ni.rebuild(r), r = r.proxyOf, r.parent && r.parent.removeChild(r), r[Ii] && Mi(r), r.raws || (r.raws = {}), typeof r.raws.before > "u" && B && typeof B.raws.before < "u" && (r.raws.before = B.raws.before.replace(/\S/g, "")), r.parent = this.proxyOf, r));
  }
  prepend(...e) {
    e = e.reverse();
    for (let B of e) {
      let t = this.normalize(B, this.first, "prepend").reverse();
      for (let r of t) this.proxyOf.nodes.unshift(r);
      for (let r in this.indexes)
        this.indexes[r] = this.indexes[r] + t.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return e.parent = this, this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes) e.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  removeChild(e) {
    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
    let B;
    for (let t in this.indexes)
      B = this.indexes[t], B >= e && (this.indexes[t] = B - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, B, t) {
    return t || (t = B, B = {}), this.walkDecls((r) => {
      B.props && !B.props.includes(r.prop) || B.fast && !r.value.includes(B.fast) || (r.value = r.value.replace(e, t));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((B, t) => {
      let r;
      try {
        r = e(B, t);
      } catch (C) {
        throw B.addToError(C);
      }
      return r !== !1 && B.walk && (r = B.walk(e)), r;
    });
  }
  walkAtRules(e, B) {
    return B ? e instanceof RegExp ? this.walk((t, r) => {
      if (t.type === "atrule" && e.test(t.name))
        return B(t, r);
    }) : this.walk((t, r) => {
      if (t.type === "atrule" && t.name === e)
        return B(t, r);
    }) : (B = e, this.walk((t, r) => {
      if (t.type === "atrule")
        return B(t, r);
    }));
  }
  walkComments(e) {
    return this.walk((B, t) => {
      if (B.type === "comment")
        return e(B, t);
    });
  }
  walkDecls(e, B) {
    return B ? e instanceof RegExp ? this.walk((t, r) => {
      if (t.type === "decl" && e.test(t.prop))
        return B(t, r);
    }) : this.walk((t, r) => {
      if (t.type === "decl" && t.prop === e)
        return B(t, r);
    }) : (B = e, this.walk((t, r) => {
      if (t.type === "decl")
        return B(t, r);
    }));
  }
  walkRules(e, B) {
    return B ? e instanceof RegExp ? this.walk((t, r) => {
      if (t.type === "rule" && e.test(t.selector))
        return B(t, r);
    }) : this.walk((t, r) => {
      if (t.type === "rule" && t.selector === e)
        return B(t, r);
    }) : (B = e, this.walk((t, r) => {
      if (t.type === "rule")
        return B(t, r);
    }));
  }
  get first() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
};
Y.registerParse = (s) => {
  ji = s;
};
Y.registerRule = (s) => {
  Rr = s;
};
Y.registerAtRule = (s) => {
  Fr = s;
};
Y.registerRoot = (s) => {
  Pi = s;
};
var re = Y;
Y.default = Y;
Y.rebuild = (s) => {
  s.type === "atrule" ? Object.setPrototypeOf(s, Fr.prototype) : s.type === "rule" ? Object.setPrototypeOf(s, Rr.prototype) : s.type === "decl" ? Object.setPrototypeOf(s, Ri.prototype) : s.type === "comment" ? Object.setPrototypeOf(s, Fi.prototype) : s.type === "root" && Object.setPrototypeOf(s, Pi.prototype), s[Oi] = !0, s.nodes && s.nodes.forEach((e) => {
    Y.rebuild(e);
  });
};
let Li = re, CB = class extends Li {
  constructor(e) {
    super(e), this.type = "atrule";
  }
  append(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
  }
  prepend(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
  }
};
var Ir = CB;
CB.default = CB;
Li.registerAtRule(CB);
let ko = re, Ti, Hi, ge = class extends ko {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new Ti(new Hi(), this, e).stringify();
  }
};
ge.registerLazyResult = (s) => {
  Ti = s;
};
ge.registerProcessor = (s) => {
  Hi = s;
};
var Or = ge;
ge.default = ge;
let Fo = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Ro = (s, e = 21) => (B = e) => {
  let t = "", r = B;
  for (; r--; )
    t += s[Math.random() * s.length | 0];
  return t;
}, Io = (s = 21) => {
  let e = "", B = s;
  for (; B--; )
    e += Fo[Math.random() * 64 | 0];
  return e;
};
var Oo = { nanoid: Io, customAlphabet: Ro };
let { existsSync: jo, readFileSync: Po } = T, { dirname: bB, join: Go } = T, { SourceMapConsumer: ns, SourceMapGenerator: as } = T;
function Mo(s) {
  return Buffer ? Buffer.from(s, "base64").toString() : window.atob(s);
}
let lr = class {
  constructor(e, B) {
    if (B.map === !1) return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let t = B.map ? B.map.prev : void 0, r = this.loadMap(B.from, t);
    !this.mapFile && B.from && (this.mapFile = B.from), this.mapFile && (this.root = bB(this.mapFile)), r && (this.text = r);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new ns(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let B = /^data:application\/json;charset=utf-?8;base64,/, t = /^data:application\/json;base64,/, r = /^data:application\/json;charset=utf-?8,/, C = /^data:application\/json,/, i = e.match(r) || e.match(C);
    if (i)
      return decodeURIComponent(e.substr(i[0].length));
    let n = e.match(B) || e.match(t);
    if (n)
      return Mo(e.substr(n[0].length));
    let a = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + a);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let B = e.match(/\/\*\s*# sourceMappingURL=/g);
    if (!B) return;
    let t = e.lastIndexOf(B.pop()), r = e.indexOf("*/", t);
    t > -1 && r > -1 && (this.annotation = this.getAnnotationURL(e.substring(t, r)));
  }
  loadFile(e) {
    if (this.root = bB(e), jo(e))
      return this.mapFile = e, Po(e, "utf-8").toString().trim();
  }
  loadMap(e, B) {
    if (B === !1) return !1;
    if (B) {
      if (typeof B == "string")
        return B;
      if (typeof B == "function") {
        let t = B(e);
        if (t) {
          let r = this.loadFile(t);
          if (!r)
            throw new Error(
              "Unable to load previous source map: " + t.toString()
            );
          return r;
        }
      } else {
        if (B instanceof ns)
          return as.fromSourceMap(B).toString();
        if (B instanceof as)
          return B.toString();
        if (this.isMap(B))
          return JSON.stringify(B);
        throw new Error(
          "Unsupported previous source map format: " + B.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let t = this.annotation;
        return e && (t = Go(bB(e), t)), this.loadFile(t);
      }
    }
  }
  startWith(e, B) {
    return e ? e.substr(0, B.length) === B : !1;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var Ji = lr;
lr.default = lr;
let { nanoid: No } = Oo, { isAbsolute: ur, resolve: fr } = T, { SourceMapConsumer: Lo, SourceMapGenerator: To } = T, { fileURLToPath: os, pathToFileURL: Ue } = T, ls = kr, Ho = Ji, xB = T, AB = Symbol("fromOffsetCache"), Jo = !!(Lo && To), us = !!(fr && ur), iB = class {
  constructor(e, B = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, B.from && (!us || /^\w+:\/\//.test(B.from) || ur(B.from) ? this.file = B.from : this.file = fr(B.from)), us && Jo) {
      let t = new Ho(this.css, B);
      if (t.text) {
        this.map = t;
        let r = t.consumer().file;
        !this.file && r && (this.file = this.mapResolve(r));
      }
    }
    this.file || (this.id = "<input css " + No(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, B, t, r = {}) {
    let C, i, n;
    if (B && typeof B == "object") {
      let o = B, u = t;
      if (typeof o.offset == "number") {
        let l = this.fromOffset(o.offset);
        B = l.line, t = l.col;
      } else
        B = o.line, t = o.column;
      if (typeof u.offset == "number") {
        let l = this.fromOffset(u.offset);
        i = l.line, C = l.col;
      } else
        i = u.line, C = u.column;
    } else if (!t) {
      let o = this.fromOffset(B);
      B = o.line, t = o.col;
    }
    let a = this.origin(B, t, i, C);
    return a ? n = new ls(
      e,
      a.endLine === void 0 ? a.line : { column: a.column, line: a.line },
      a.endLine === void 0 ? a.column : { column: a.endColumn, line: a.endLine },
      a.source,
      a.file,
      r.plugin
    ) : n = new ls(
      e,
      i === void 0 ? B : { column: t, line: B },
      i === void 0 ? t : { column: C, line: i },
      this.css,
      this.file,
      r.plugin
    ), n.input = { column: t, endColumn: C, endLine: i, line: B, source: this.css }, this.file && (Ue && (n.input.url = Ue(this.file).toString()), n.input.file = this.file), n;
  }
  fromOffset(e) {
    let B, t;
    if (this[AB])
      t = this[AB];
    else {
      let C = this.css.split(`
`);
      t = new Array(C.length);
      let i = 0;
      for (let n = 0, a = C.length; n < a; n++)
        t[n] = i, i += C[n].length + 1;
      this[AB] = t;
    }
    B = t[t.length - 1];
    let r = 0;
    if (e >= B)
      r = t.length - 1;
    else {
      let C = t.length - 2, i;
      for (; r < C; )
        if (i = r + (C - r >> 1), e < t[i])
          C = i - 1;
        else if (e >= t[i + 1])
          r = i + 1;
        else {
          r = i;
          break;
        }
    }
    return {
      col: e - t[r] + 1,
      line: r + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : fr(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, B, t, r) {
    if (!this.map) return !1;
    let C = this.map.consumer(), i = C.originalPositionFor({ column: B, line: e });
    if (!i.source) return !1;
    let n;
    typeof t == "number" && (n = C.originalPositionFor({ column: r, line: t }));
    let a;
    ur(i.source) ? a = Ue(i.source) : a = new URL(
      i.source,
      this.map.consumer().sourceRoot || Ue(this.map.mapFile)
    );
    let o = {
      column: i.column,
      endColumn: n && n.column,
      endLine: n && n.line,
      line: i.line,
      url: a.toString()
    };
    if (a.protocol === "file:")
      if (os)
        o.file = os(a);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let u = C.sourceContentFor(i.source);
    return u && (o.source = u), o;
  }
  toJSON() {
    let e = {};
    for (let B of ["hasBOM", "css", "file", "id"])
      this[B] != null && (e[B] = this[B]);
    return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
  }
  get from() {
    return this.file || this.id;
  }
};
var dB = iB;
iB.default = iB;
xB && xB.registerInput && xB.registerInput(iB);
let Ui = re, Vi, Ki, le = class extends Ui {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, B, t) {
    let r = super.normalize(e);
    if (B) {
      if (t === "prepend")
        this.nodes.length > 1 ? B.raws.before = this.nodes[1].raws.before : delete B.raws.before;
      else if (this.first !== B)
        for (let C of r)
          C.raws.before = B.raws.before;
    }
    return r;
  }
  removeChild(e, B) {
    let t = this.index(e);
    return !B && t === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[t].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new Vi(new Ki(), this, e).stringify();
  }
};
le.registerLazyResult = (s) => {
  Vi = s;
};
le.registerProcessor = (s) => {
  Ki = s;
};
var Se = le;
le.default = le;
Ui.registerRoot(le);
let ye = {
  comma(s) {
    return ye.split(s, [","], !0);
  },
  space(s) {
    let e = [" ", `
`, "	"];
    return ye.split(s, e);
  },
  split(s, e, B) {
    let t = [], r = "", C = !1, i = 0, n = !1, a = "", o = !1;
    for (let u of s)
      o ? o = !1 : u === "\\" ? o = !0 : n ? u === a && (n = !1) : u === '"' || u === "'" ? (n = !0, a = u) : u === "(" ? i += 1 : u === ")" ? i > 0 && (i -= 1) : i === 0 && e.includes(u) && (C = !0), C ? (r !== "" && t.push(r.trim()), r = "", C = !1) : r += u;
    return (B || r !== "") && t.push(r.trim()), t;
  }
};
var Qi = ye;
ye.default = ye;
let Wi = re, Uo = Qi, nB = class extends Wi {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return Uo.comma(this.selector);
  }
  set selectors(e) {
    let B = this.selector ? this.selector.match(/,\s*/) : null, t = B ? B[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(t);
  }
};
var jr = nB;
nB.default = nB;
Wi.registerRule(nB);
let Vo = Ir, Ko = fB, Qo = cB, Wo = dB, zo = Ji, qo = Se, Yo = jr;
function we(s, e) {
  if (Array.isArray(s)) return s.map((r) => we(r));
  let { inputs: B, ...t } = s;
  if (B) {
    e = [];
    for (let r of B) {
      let C = { ...r, __proto__: Wo.prototype };
      C.map && (C.map = {
        ...C.map,
        __proto__: zo.prototype
      }), e.push(C);
    }
  }
  if (t.nodes && (t.nodes = s.nodes.map((r) => we(r, e))), t.source) {
    let { inputId: r, ...C } = t.source;
    t.source = C, r != null && (t.source.input = e[r]);
  }
  if (t.type === "root")
    return new qo(t);
  if (t.type === "decl")
    return new Qo(t);
  if (t.type === "rule")
    return new Yo(t);
  if (t.type === "comment")
    return new Ko(t);
  if (t.type === "atrule")
    return new Vo(t);
  throw new Error("Unknown node type: " + s.type);
}
var Xo = we;
we.default = we;
let { dirname: eB, relative: zi, resolve: qi, sep: Yi } = T, { SourceMapConsumer: Xi, SourceMapGenerator: BB } = T, { pathToFileURL: fs } = T, Zo = dB, $o = !!(Xi && BB), _o = !!(eB && qi && zi && Yi), el = class {
  constructor(e, B, t, r) {
    this.stringify = e, this.mapOpts = t.map || {}, this.root = B, this.opts = t, this.css = r, this.originalCSS = r, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let e;
    this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
    let B = `
`;
    this.css.includes(`\r
`) && (B = `\r
`), this.css += B + "/*# sourceMappingURL=" + e + " */";
  }
  applyPrevMaps() {
    for (let e of this.previous()) {
      let B = this.toUrl(this.path(e.file)), t = e.root || eB(e.file), r;
      this.mapOpts.sourcesContent === !1 ? (r = new Xi(e.text), r.sourcesContent && (r.sourcesContent = null)) : r = e.consumer(), this.map.applySourceMap(r, B, this.toUrl(this.path(t)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let e;
        for (let B = this.root.nodes.length - 1; B >= 0; B--)
          e = this.root.nodes[B], e.type === "comment" && e.text.startsWith("# sourceMappingURL=") && this.root.removeChild(B);
      } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  generate() {
    if (this.clearAnnotation(), _o && $o && this.isMap())
      return this.generateMap();
    {
      let e = "";
      return this.stringify(this.root, (B) => {
        e += B;
      }), [e];
    }
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let e = this.previous()[0].consumer();
      e.file = this.outputFile(), this.map = BB.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new BB({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new BB({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, B = 1, t = "<no source>", r = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, C, i;
    this.stringify(this.root, (n, a, o) => {
      if (this.css += n, a && o !== "end" && (r.generated.line = e, r.generated.column = B - 1, a.source && a.source.start ? (r.source = this.sourcePath(a), r.original.line = a.source.start.line, r.original.column = a.source.start.column - 1, this.map.addMapping(r)) : (r.source = t, r.original.line = 1, r.original.column = 0, this.map.addMapping(r))), i = n.match(/\n/g), i ? (e += i.length, C = n.lastIndexOf(`
`), B = n.length - C) : B += n.length, a && o !== "start") {
        let u = a.parent || { raws: {} };
        (!(a.type === "decl" || a.type === "atrule" && !a.nodes) || a !== u.last || u.raws.semicolon) && (a.source && a.source.end ? (r.source = this.sourcePath(a), r.original.line = a.source.end.line, r.original.column = a.source.end.column - 1, r.generated.line = e, r.generated.column = B - 2, this.map.addMapping(r)) : (r.source = t, r.original.line = 1, r.original.column = 0, r.generated.line = e, r.generated.column = B - 1, this.map.addMapping(r)));
      }
    });
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : !0;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let e = this.mapOpts.annotation;
    return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some((B) => B.inline) : !0;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : !0;
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  path(e) {
    if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
    let B = this.memoizedPaths.get(e);
    if (B) return B;
    let t = this.opts.to ? eB(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (t = eB(qi(t, this.mapOpts.annotation)));
    let r = zi(t, e);
    return this.memoizedPaths.set(e, r), r;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((e) => {
          if (e.source && e.source.input.map) {
            let B = e.source.input.map;
            this.previousMaps.includes(B) || this.previousMaps.push(B);
          }
        });
      else {
        let e = new Zo(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((B) => {
        if (B.source) {
          let t = B.source.input.from;
          if (t && !e[t]) {
            e[t] = !0;
            let r = this.usesFileUrls ? this.toFileUrl(t) : this.toUrl(this.path(t));
            this.map.setSourceContent(r, B.source.input.css);
          }
        }
      });
    else if (this.css) {
      let B = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(B, this.css);
    }
  }
  sourcePath(e) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
  }
  toBase64(e) {
    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
  }
  toFileUrl(e) {
    let B = this.memoizedFileURLs.get(e);
    if (B) return B;
    if (fs) {
      let t = fs(e).toString();
      return this.memoizedFileURLs.set(e, t), t;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let B = this.memoizedURLs.get(e);
    if (B) return B;
    Yi === "\\" && (e = e.replace(/\\/g, "/"));
    let t = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, t), t;
  }
};
var Zi = el;
const SB = 39, cs = 34, Ve = 92, ds = 47, Ke = 10, pe = 32, Qe = 12, We = 9, ze = 13, Bl = 91, tl = 93, rl = 40, sl = 41, Cl = 123, il = 125, nl = 59, al = 42, ol = 58, ll = 64, qe = /[\t\n\f\r "#'()/;[\\\]{}]/g, Ye = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, ul = /.[\r\n"'(/\\]/, Ds = /[\da-f]/i;
var fl = function(e, B = {}) {
  let t = e.css.valueOf(), r = B.ignoreErrors, C, i, n, a, o, u, l, c, h, w, b = t.length, p = 0, f = [], d = [];
  function D() {
    return p;
  }
  function m(K) {
    throw e.error("Unclosed " + K, p);
  }
  function A() {
    return d.length === 0 && p >= b;
  }
  function O(K) {
    if (d.length) return d.pop();
    if (p >= b) return;
    let X = K ? K.ignoreUnclosed : !1;
    switch (C = t.charCodeAt(p), C) {
      case Ke:
      case pe:
      case We:
      case ze:
      case Qe: {
        a = p;
        do
          a += 1, C = t.charCodeAt(a);
        while (C === pe || C === Ke || C === We || C === ze || C === Qe);
        u = ["space", t.slice(p, a)], p = a - 1;
        break;
      }
      case Bl:
      case tl:
      case Cl:
      case il:
      case ol:
      case nl:
      case sl: {
        let Q = String.fromCharCode(C);
        u = [Q, Q, p];
        break;
      }
      case rl: {
        if (w = f.length ? f.pop()[1] : "", h = t.charCodeAt(p + 1), w === "url" && h !== SB && h !== cs && h !== pe && h !== Ke && h !== We && h !== Qe && h !== ze) {
          a = p;
          do {
            if (l = !1, a = t.indexOf(")", a + 1), a === -1)
              if (r || X) {
                a = p;
                break;
              } else
                m("bracket");
            for (c = a; t.charCodeAt(c - 1) === Ve; )
              c -= 1, l = !l;
          } while (l);
          u = ["brackets", t.slice(p, a + 1), p, a], p = a;
        } else
          a = t.indexOf(")", p + 1), i = t.slice(p, a + 1), a === -1 || ul.test(i) ? u = ["(", "(", p] : (u = ["brackets", i, p, a], p = a);
        break;
      }
      case SB:
      case cs: {
        o = C === SB ? "'" : '"', a = p;
        do {
          if (l = !1, a = t.indexOf(o, a + 1), a === -1)
            if (r || X) {
              a = p + 1;
              break;
            } else
              m("string");
          for (c = a; t.charCodeAt(c - 1) === Ve; )
            c -= 1, l = !l;
        } while (l);
        u = ["string", t.slice(p, a + 1), p, a], p = a;
        break;
      }
      case ll: {
        qe.lastIndex = p + 1, qe.test(t), qe.lastIndex === 0 ? a = t.length - 1 : a = qe.lastIndex - 2, u = ["at-word", t.slice(p, a + 1), p, a], p = a;
        break;
      }
      case Ve: {
        for (a = p, n = !0; t.charCodeAt(a + 1) === Ve; )
          a += 1, n = !n;
        if (C = t.charCodeAt(a + 1), n && C !== ds && C !== pe && C !== Ke && C !== We && C !== ze && C !== Qe && (a += 1, Ds.test(t.charAt(a)))) {
          for (; Ds.test(t.charAt(a + 1)); )
            a += 1;
          t.charCodeAt(a + 1) === pe && (a += 1);
        }
        u = ["word", t.slice(p, a + 1), p, a], p = a;
        break;
      }
      default: {
        C === ds && t.charCodeAt(p + 1) === al ? (a = t.indexOf("*/", p + 2) + 1, a === 0 && (r || X ? a = t.length : m("comment")), u = ["comment", t.slice(p, a + 1), p, a], p = a) : (Ye.lastIndex = p + 1, Ye.test(t), Ye.lastIndex === 0 ? a = t.length - 1 : a = Ye.lastIndex - 2, u = ["word", t.slice(p, a + 1), p, a], f.push(u), p = a);
        break;
      }
    }
    return p++, u;
  }
  function I(K) {
    d.push(K);
  }
  return {
    back: I,
    endOfFile: A,
    nextToken: O,
    position: D
  };
};
let cl = Ir, dl = fB, Dl = cB, pl = Se, ps = jr, hl = fl;
const hs = {
  empty: !0,
  space: !0
};
function ml(s) {
  for (let e = s.length - 1; e >= 0; e--) {
    let B = s[e], t = B[3] || B[2];
    if (t) return t;
  }
}
let vl = class {
  constructor(e) {
    this.input = e, this.root = new pl(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let B = new cl();
    B.name = e[1].slice(1), B.name === "" && this.unnamedAtrule(B, e), this.init(B, e[2]);
    let t, r, C, i = !1, n = !1, a = [], o = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), t = e[0], t === "(" || t === "[" ? o.push(t === "(" ? ")" : "]") : t === "{" && o.length > 0 ? o.push("}") : t === o[o.length - 1] && o.pop(), o.length === 0)
        if (t === ";") {
          B.source.end = this.getPosition(e[2]), B.source.end.offset++, this.semicolon = !0;
          break;
        } else if (t === "{") {
          n = !0;
          break;
        } else if (t === "}") {
          if (a.length > 0) {
            for (C = a.length - 1, r = a[C]; r && r[0] === "space"; )
              r = a[--C];
            r && (B.source.end = this.getPosition(r[3] || r[2]), B.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          a.push(e);
      else
        a.push(e);
      if (this.tokenizer.endOfFile()) {
        i = !0;
        break;
      }
    }
    B.raws.between = this.spacesAndCommentsFromEnd(a), a.length ? (B.raws.afterName = this.spacesAndCommentsFromStart(a), this.raw(B, "params", a), i && (e = a[a.length - 1], B.source.end = this.getPosition(e[3] || e[2]), B.source.end.offset++, this.spaces = B.raws.between, B.raws.between = "")) : (B.raws.afterName = "", B.params = ""), n && (B.nodes = [], this.current = B);
  }
  checkMissedSemicolon(e) {
    let B = this.colon(e);
    if (B === !1) return;
    let t = 0, r;
    for (let C = B - 1; C >= 0 && (r = e[C], !(r[0] !== "space" && (t += 1, t === 2))); C--)
      ;
    throw this.input.error(
      "Missed semicolon",
      r[0] === "word" ? r[3] + 1 : r[2]
    );
  }
  colon(e) {
    let B = 0, t, r, C;
    for (let [i, n] of e.entries()) {
      if (r = n, C = r[0], C === "(" && (B += 1), C === ")" && (B -= 1), B === 0 && C === ":")
        if (!t)
          this.doubleColon(r);
        else {
          if (t[0] === "word" && t[1] === "progid")
            continue;
          return i;
        }
      t = r;
    }
    return !1;
  }
  comment(e) {
    let B = new dl();
    this.init(B, e[2]), B.source.end = this.getPosition(e[3] || e[2]), B.source.end.offset++;
    let t = e[1].slice(2, -2);
    if (/^\s*$/.test(t))
      B.text = "", B.raws.left = t, B.raws.right = "";
    else {
      let r = t.match(/^(\s*)([^]*\S)(\s*)$/);
      B.text = r[2], B.raws.left = r[1], B.raws.right = r[3];
    }
  }
  createTokenizer() {
    this.tokenizer = hl(this.input);
  }
  decl(e, B) {
    let t = new Dl();
    this.init(t, e[0][2]);
    let r = e[e.length - 1];
    for (r[0] === ";" && (this.semicolon = !0, e.pop()), t.source.end = this.getPosition(
      r[3] || r[2] || ml(e)
    ), t.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), t.raws.before += e.shift()[1];
    for (t.source.start = this.getPosition(e[0][2]), t.prop = ""; e.length; ) {
      let o = e[0][0];
      if (o === ":" || o === "space" || o === "comment")
        break;
      t.prop += e.shift()[1];
    }
    t.raws.between = "";
    let C;
    for (; e.length; )
      if (C = e.shift(), C[0] === ":") {
        t.raws.between += C[1];
        break;
      } else
        C[0] === "word" && /\w/.test(C[1]) && this.unknownWord([C]), t.raws.between += C[1];
    (t.prop[0] === "_" || t.prop[0] === "*") && (t.raws.before += t.prop[0], t.prop = t.prop.slice(1));
    let i = [], n;
    for (; e.length && (n = e[0][0], !(n !== "space" && n !== "comment")); )
      i.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let o = e.length - 1; o >= 0; o--) {
      if (C = e[o], C[1].toLowerCase() === "!important") {
        t.important = !0;
        let u = this.stringFrom(e, o);
        u = this.spacesFromEnd(e) + u, u !== " !important" && (t.raws.important = u);
        break;
      } else if (C[1].toLowerCase() === "important") {
        let u = e.slice(0), l = "";
        for (let c = o; c > 0; c--) {
          let h = u[c][0];
          if (l.trim().startsWith("!") && h !== "space")
            break;
          l = u.pop()[1] + l;
        }
        l.trim().startsWith("!") && (t.important = !0, t.raws.important = l, e = u);
      }
      if (C[0] !== "space" && C[0] !== "comment")
        break;
    }
    e.some((o) => o[0] !== "space" && o[0] !== "comment") && (t.raws.between += i.map((o) => o[1]).join(""), i = []), this.raw(t, "value", i.concat(e), B), t.value.includes(":") && !B && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let B = new ps();
    this.init(B, e[2]), B.selector = "", B.raws.between = "", this.current = B;
  }
  end(e) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(e) {
    if (this.spaces += e[1], this.current.nodes) {
      let B = this.current.nodes[this.current.nodes.length - 1];
      B && B.type === "rule" && !B.raws.ownSemicolon && (B.raws.ownSemicolon = this.spaces, this.spaces = "");
    }
  }
  // Helpers
  getPosition(e) {
    let B = this.input.fromOffset(e);
    return {
      column: B.col,
      line: B.line,
      offset: e
    };
  }
  init(e, B) {
    this.current.push(e), e.source = {
      input: this.input,
      start: this.getPosition(B)
    }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let B = !1, t = null, r = !1, C = null, i = [], n = e[1].startsWith("--"), a = [], o = e;
    for (; o; ) {
      if (t = o[0], a.push(o), t === "(" || t === "[")
        C || (C = o), i.push(t === "(" ? ")" : "]");
      else if (n && r && t === "{")
        C || (C = o), i.push("}");
      else if (i.length === 0)
        if (t === ";")
          if (r) {
            this.decl(a, n);
            return;
          } else
            break;
        else if (t === "{") {
          this.rule(a);
          return;
        } else if (t === "}") {
          this.tokenizer.back(a.pop()), B = !0;
          break;
        } else t === ":" && (r = !0);
      else t === i[i.length - 1] && (i.pop(), i.length === 0 && (C = null));
      o = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (B = !0), i.length > 0 && this.unclosedBracket(C), B && r) {
      if (!n)
        for (; a.length && (o = a[a.length - 1][0], !(o !== "space" && o !== "comment")); )
          this.tokenizer.back(a.pop());
      this.decl(a, n);
    } else
      this.unknownWord(a);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(e, B, t, r) {
    let C, i, n = t.length, a = "", o = !0, u, l;
    for (let c = 0; c < n; c += 1)
      C = t[c], i = C[0], i === "space" && c === n - 1 && !r ? o = !1 : i === "comment" ? (l = t[c - 1] ? t[c - 1][0] : "empty", u = t[c + 1] ? t[c + 1][0] : "empty", !hs[l] && !hs[u] ? a.slice(-1) === "," ? o = !1 : a += C[1] : o = !1) : a += C[1];
    if (!o) {
      let c = t.reduce((h, w) => h + w[1], "");
      e.raws[B] = { raw: c, value: a };
    }
    e[B] = a;
  }
  rule(e) {
    e.pop();
    let B = new ps();
    this.init(B, e[0][2]), B.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(B, "selector", e), this.current = B;
  }
  spacesAndCommentsFromEnd(e) {
    let B, t = "";
    for (; e.length && (B = e[e.length - 1][0], !(B !== "space" && B !== "comment")); )
      t = e.pop()[1] + t;
    return t;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let B, t = "";
    for (; e.length && (B = e[0][0], !(B !== "space" && B !== "comment")); )
      t += e.shift()[1];
    return t;
  }
  spacesFromEnd(e) {
    let B, t = "";
    for (; e.length && (B = e[e.length - 1][0], B === "space"); )
      t = e.pop()[1] + t;
    return t;
  }
  stringFrom(e, B) {
    let t = "";
    for (let r = B; r < e.length; r++)
      t += e[r][1];
    return e.splice(B, e.length - B), t;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word",
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, B) {
    throw this.input.error(
      "At-rule without name",
      { offset: B[2] },
      { offset: B[2] + B[1].length }
    );
  }
};
var gl = vl;
let yl = re, wl = dB, bl = gl;
function aB(s, e) {
  let B = new wl(s, e), t = new bl(B);
  try {
    t.parse();
  } catch (r) {
    throw process.env.NODE_ENV !== "production" && r.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? r.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? r.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (r.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), r;
  }
  return t.root;
}
var Pr = aB;
aB.default = aB;
yl.registerParse(aB);
let cr = class {
  constructor(e, B = {}) {
    if (this.type = "warning", this.text = e, B.node && B.node.source) {
      let t = B.node.rangeBy(B);
      this.line = t.start.line, this.column = t.start.column, this.endLine = t.end.line, this.endColumn = t.end.column;
    }
    for (let t in B) this[t] = B[t];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var $i = cr;
cr.default = cr;
let xl = $i, dr = class {
  constructor(e, B, t) {
    this.processor = e, this.messages = [], this.root = B, this.opts = t, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, B = {}) {
    B.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (B.plugin = this.lastPlugin.postcssPlugin);
    let t = new xl(e, B);
    return this.messages.push(t), t;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Gr = dr;
dr.default = dr;
let ms = {};
var _i = function(e) {
  ms[e] || (ms[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let Al = re, Sl = Or, El = Zi, kl = Pr, vs = Gr, Fl = Se, Rl = lB, { isClean: U, my: Il } = Ae, Ol = _i;
const jl = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, Pl = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, Gl = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, ue = 0;
function he(s) {
  return typeof s == "object" && typeof s.then == "function";
}
function en(s) {
  let e = !1, B = jl[s.type];
  return s.type === "decl" ? e = s.prop.toLowerCase() : s.type === "atrule" && (e = s.name.toLowerCase()), e && s.append ? [
    B,
    B + "-" + e,
    ue,
    B + "Exit",
    B + "Exit-" + e
  ] : e ? [B, B + "-" + e, B + "Exit", B + "Exit-" + e] : s.append ? [B, ue, B + "Exit"] : [B, B + "Exit"];
}
function gs(s) {
  let e;
  return s.type === "document" ? e = ["Document", ue, "DocumentExit"] : s.type === "root" ? e = ["Root", ue, "RootExit"] : e = en(s), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: s,
    visitorIndex: 0,
    visitors: []
  };
}
function Dr(s) {
  return s[U] = !1, s.nodes && s.nodes.forEach((e) => Dr(e)), s;
}
let pr = {}, fe = class Bn {
  constructor(e, B, t) {
    this.stringified = !1, this.processed = !1;
    let r;
    if (typeof B == "object" && B !== null && (B.type === "root" || B.type === "document"))
      r = Dr(B);
    else if (B instanceof Bn || B instanceof vs)
      r = Dr(B.root), B.map && (typeof t.map > "u" && (t.map = {}), t.map.inline || (t.map.inline = !1), t.map.prev = B.map);
    else {
      let C = kl;
      t.syntax && (C = t.syntax.parse), t.parser && (C = t.parser), C.parse && (C = C.parse);
      try {
        r = C(B, t);
      } catch (i) {
        this.processed = !0, this.error = i;
      }
      r && !r[Il] && Al.rebuild(r);
    }
    this.result = new vs(e, r, t), this.helpers = { ...pr, postcss: pr, result: this.result }, this.plugins = this.processor.plugins.map((C) => typeof C == "object" && C.prepare ? { ...C, ...C.prepare(this.result) } : C);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(e, B) {
    let t = this.result.lastPlugin;
    try {
      if (B && B.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = t.postcssPlugin, e.setMessage();
      else if (t.postcssVersion && process.env.NODE_ENV !== "production") {
        let r = t.postcssPlugin, C = t.postcssVersion, i = this.result.processor.version, n = C.split("."), a = i.split(".");
        (n[0] !== a[0] || parseInt(n[1]) > parseInt(a[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + i + ", but " + r + " uses " + C + ". Perhaps this is the source of the error below."
        );
      }
    } catch (r) {
      console && console.error && console.error(r);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (B, t, r) => {
      this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push([B, r]);
    };
    for (let B of this.plugins)
      if (typeof B == "object")
        for (let t in B) {
          if (!Pl[t] && /^[A-Z]/.test(t))
            throw new Error(
              `Unknown event ${t} in ${B.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!Gl[t])
            if (typeof B[t] == "object")
              for (let r in B[t])
                r === "*" ? e(B, t, B[t][r]) : e(
                  B,
                  t + "-" + r.toLowerCase(),
                  B[t][r]
                );
            else typeof B[t] == "function" && e(B, t, B[t]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let B = this.plugins[e], t = this.runOnRoot(B);
      if (he(t))
        try {
          await t;
        } catch (r) {
          throw this.handleError(r);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[U]; ) {
        e[U] = !0;
        let B = [gs(e)];
        for (; B.length > 0; ) {
          let t = this.visitTick(B);
          if (he(t))
            try {
              await t;
            } catch (r) {
              let C = B[B.length - 1].node;
              throw this.handleError(r, C);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [B, t] of this.listeners.OnceExit) {
          this.result.lastPlugin = B;
          try {
            if (e.type === "document") {
              let r = e.nodes.map(
                (C) => t(C, this.helpers)
              );
              await Promise.all(r);
            } else
              await t(e, this.helpers);
          } catch (r) {
            throw this.handleError(r);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  runOnRoot(e) {
    this.result.lastPlugin = e;
    try {
      if (typeof e == "object" && e.Once) {
        if (this.result.root.type === "document") {
          let B = this.result.root.nodes.map(
            (t) => e.Once(t, this.helpers)
          );
          return he(B[0]) ? Promise.all(B) : B;
        }
        return e.Once(this.result.root, this.helpers);
      } else if (typeof e == "function")
        return e(this.result.root, this.result);
    } catch (B) {
      throw this.handleError(B);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = !0, this.sync();
    let e = this.result.opts, B = Rl;
    e.syntax && (B = e.syntax.stringify), e.stringifier && (B = e.stringifier), B.stringify && (B = B.stringify);
    let r = new El(B, this.result.root, this.result.opts).generate();
    return this.result.css = r[0], this.result.map = r[1], this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let B = this.runOnRoot(e);
      if (he(B))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[U]; )
        e[U] = !0, this.walkSync(e);
      if (this.listeners.OnceExit)
        if (e.type === "document")
          for (let B of e.nodes)
            this.visitSync(this.listeners.OnceExit, B);
        else
          this.visitSync(this.listeners.OnceExit, e);
    }
    return this.result;
  }
  then(e, B) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || Ol(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, B);
  }
  toString() {
    return this.css;
  }
  visitSync(e, B) {
    for (let [t, r] of e) {
      this.result.lastPlugin = t;
      let C;
      try {
        C = r(B, this.helpers);
      } catch (i) {
        throw this.handleError(i, B.proxyOf);
      }
      if (B.type !== "root" && B.type !== "document" && !B.parent)
        return !0;
      if (he(C))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let B = e[e.length - 1], { node: t, visitors: r } = B;
    if (t.type !== "root" && t.type !== "document" && !t.parent) {
      e.pop();
      return;
    }
    if (r.length > 0 && B.visitorIndex < r.length) {
      let [i, n] = r[B.visitorIndex];
      B.visitorIndex += 1, B.visitorIndex === r.length && (B.visitors = [], B.visitorIndex = 0), this.result.lastPlugin = i;
      try {
        return n(t.toProxy(), this.helpers);
      } catch (a) {
        throw this.handleError(a, t);
      }
    }
    if (B.iterator !== 0) {
      let i = B.iterator, n;
      for (; n = t.nodes[t.indexes[i]]; )
        if (t.indexes[i] += 1, !n[U]) {
          n[U] = !0, e.push(gs(n));
          return;
        }
      B.iterator = 0, delete t.indexes[i];
    }
    let C = B.events;
    for (; B.eventIndex < C.length; ) {
      let i = C[B.eventIndex];
      if (B.eventIndex += 1, i === ue) {
        t.nodes && t.nodes.length && (t[U] = !0, B.iterator = t.getIterator());
        return;
      } else if (this.listeners[i]) {
        B.visitors = this.listeners[i];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[U] = !0;
    let B = en(e);
    for (let t of B)
      if (t === ue)
        e.nodes && e.each((r) => {
          r[U] || this.walkSync(r);
        });
      else {
        let r = this.listeners[t];
        if (r && this.visitSync(r, e.toProxy()))
          return;
      }
  }
  warnings() {
    return this.sync().warnings();
  }
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
};
fe.registerPostcss = (s) => {
  pr = s;
};
var tn = fe;
fe.default = fe;
Fl.registerLazyResult(fe);
Sl.registerLazyResult(fe);
let Ml = Zi, Nl = Pr;
const Ll = Gr;
let Tl = lB, Hl = _i, hr = class {
  constructor(e, B, t) {
    B = B.toString(), this.stringified = !1, this._processor = e, this._css = B, this._opts = t, this._map = void 0;
    let r, C = Tl;
    this.result = new Ll(this._processor, r, this._opts), this.result.css = B;
    let i = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return i.root;
      }
    });
    let n = new Ml(C, r, this._opts, B);
    if (n.isMap()) {
      let [a, o] = n.generate();
      a && (this.result.css = a), o && (this.result.map = o);
    } else
      n.clearAnnotation(), this.result.css = n.css;
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(e, B) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Hl(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, B);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root)
      return this._root;
    let e, B = Nl;
    try {
      e = B(this._css, this._opts);
    } catch (t) {
      this.error = t;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
};
var Jl = hr;
hr.default = hr;
let Ul = Or, Vl = tn, Kl = Jl, Ql = Se, be = class {
  constructor(e = []) {
    this.version = "8.4.47", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let B = [];
    for (let t of e)
      if (t.postcss === !0 ? t = t() : t.postcss && (t = t.postcss), typeof t == "object" && Array.isArray(t.plugins))
        B = B.concat(t.plugins);
      else if (typeof t == "object" && t.postcssPlugin)
        B.push(t);
      else if (typeof t == "function")
        B.push(t);
      else if (typeof t == "object" && (t.parse || t.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(t + " is not a PostCSS plugin");
    return B;
  }
  process(e, B = {}) {
    return !this.plugins.length && !B.parser && !B.stringifier && !B.syntax ? new Kl(this, e, B) : new Vl(this, e, B);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var Wl = be;
be.default = be;
Ql.registerProcessor(be);
Ul.registerProcessor(be);
let rn = Ir, sn = fB, zl = re, ql = kr, Cn = cB, nn = Or, Yl = Xo, Xl = dB, Zl = tn, $l = Qi, _l = uB, eu = Pr, Mr = Wl, Bu = Gr, an = Se, on = jr, tu = lB, ru = $i;
function R(...s) {
  return s.length === 1 && Array.isArray(s[0]) && (s = s[0]), new Mr(s);
}
R.plugin = function(e, B) {
  let t = !1;
  function r(...i) {
    console && console.warn && !t && (t = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let n = B(...i);
    return n.postcssPlugin = e, n.postcssVersion = new Mr().version, n;
  }
  let C;
  return Object.defineProperty(r, "postcss", {
    get() {
      return C || (C = r()), C;
    }
  }), r.process = function(i, n, a) {
    return R([r(a)]).process(i, n);
  }, r;
};
R.stringify = tu;
R.parse = eu;
R.fromJSON = Yl;
R.list = $l;
R.comment = (s) => new sn(s);
R.atRule = (s) => new rn(s);
R.decl = (s) => new Cn(s);
R.rule = (s) => new on(s);
R.root = (s) => new an(s);
R.document = (s) => new nn(s);
R.CssSyntaxError = ql;
R.Declaration = Cn;
R.Container = zl;
R.Processor = Mr;
R.Document = nn;
R.Comment = sn;
R.Warning = ru;
R.AtRule = rn;
R.Result = Bu;
R.Input = Xl;
R.Rule = on;
R.Root = an;
R.Node = _l;
Zl.registerPostcss(R);
var Ee = R;
R.default = R;
let { list: mr } = Ee;
j.error = function(s) {
  let e = new Error(s);
  throw e.autoprefixer = !0, e;
};
j.uniq = function(s) {
  return [...new Set(s)];
};
j.removeNote = function(s) {
  return s.includes(" ") ? s.split(" ")[0] : s;
};
j.escapeRegexp = function(s) {
  return s.replace(/[$()*+-.?[\\\]^{|}]/g, "\\$&");
};
j.regexp = function(s, e = !0) {
  return e && (s = this.escapeRegexp(s)), new RegExp(`(^|[\\s,(])(${s}($|[\\s(,]))`, "gi");
};
j.editList = function(s, e) {
  let B = mr.comma(s), t = e(B, []);
  if (B === t)
    return s;
  let r = s.match(/,\s*/);
  return r = r ? r[0] : ", ", t.join(r);
};
j.splitSelector = function(s) {
  return mr.comma(s).map((e) => mr.space(e).map((B) => B.split(/(?=\.|#)/g)));
};
j.isPureNumber = function(s) {
  return typeof s == "number" ? !0 : typeof s == "string" ? /^[0-9]+$/.test(s) : !1;
};
let su = Ai, { agents: ys } = br, Cu = j, iu = class {
  constructor(e, B, t, r) {
    this.data = e, this.options = t || {}, this.browserslistOpts = r || {}, this.selected = this.parse(B);
  }
  /**
   * Return all prefixes for default browser data
   */
  static prefixes() {
    if (this.prefixesCache)
      return this.prefixesCache;
    this.prefixesCache = [];
    for (let e in ys)
      this.prefixesCache.push(`-${ys[e].prefix}-`);
    return this.prefixesCache = Cu.uniq(this.prefixesCache).sort((e, B) => B.length - e.length), this.prefixesCache;
  }
  /**
   * Check is value contain any possible prefix
   */
  static withPrefix(e) {
    return this.prefixesRegexp || (this.prefixesRegexp = new RegExp(this.prefixes().join("|"))), this.prefixesRegexp.test(e);
  }
  /**
   * Is browser is selected by requirements
   */
  isSelected(e) {
    return this.selected.includes(e);
  }
  /**
   * Return browsers selected by requirements
   */
  parse(e) {
    let B = {};
    for (let t in this.browserslistOpts)
      B[t] = this.browserslistOpts[t];
    return B.path = this.options.from, su(e, B);
  }
  /**
   * Return prefix for selected browser
   */
  prefix(e) {
    let [B, t] = e.split(" "), r = this.data[B], C = r.prefix_exceptions && r.prefix_exceptions[t];
    return C || (C = r.prefix), `-${C}-`;
  }
};
var Nr = iu, ln = {
  prefix(s) {
    let e = s.match(/^(-\w+-)/);
    return e ? e[0] : "";
  },
  unprefixed(s) {
    return s.replace(/^-\w+-/, "");
  }
};
let nu = Nr, ws = ln, au = j;
function vr(s, e) {
  let B = new s.constructor();
  for (let t of Object.keys(s || {})) {
    let r = s[t];
    t === "parent" && typeof r == "object" ? e && (B[t] = e) : t === "source" || t === null ? B[t] = r : Array.isArray(r) ? B[t] = r.map((C) => vr(C, B)) : t !== "_autoprefixerPrefix" && t !== "_autoprefixerValues" && t !== "proxyCache" && (typeof r == "object" && r !== null && (r = vr(r, B)), B[t] = r);
  }
  return B;
}
let ou = class un {
  constructor(e, B, t) {
    this.prefixes = B, this.name = e, this.all = t;
  }
  /**
   * Clone node and clean autprefixer custom caches
   */
  static clone(e, B) {
    let t = vr(e);
    for (let r in B)
      t[r] = B[r];
    return t;
  }
  /**
   * Add hack to selected names
   */
  static hack(e) {
    return this.hacks || (this.hacks = {}), e.names.map((B) => (this.hacks[B] = e, this.hacks[B]));
  }
  /**
   * Load hacks for some names
   */
  static load(e, B, t) {
    let r = this.hacks && this.hacks[e];
    return r ? new r(e, B, t) : new this(e, B, t);
  }
  /**
   * Shortcut for Prefixer.clone
   */
  clone(e, B) {
    return un.clone(e, B);
  }
  /**
   * Find prefix in node parents
   */
  parentPrefix(e) {
    let B;
    return typeof e._autoprefixerPrefix < "u" ? B = e._autoprefixerPrefix : e.type === "decl" && e.prop[0] === "-" ? B = ws.prefix(e.prop) : e.type === "root" ? B = !1 : e.type === "rule" && e.selector.includes(":-") && /:(-\w+-)/.test(e.selector) ? B = e.selector.match(/:(-\w+-)/)[1] : e.type === "atrule" && e.name[0] === "-" ? B = ws.prefix(e.name) : B = this.parentPrefix(e.parent), nu.prefixes().includes(B) || (B = !1), e._autoprefixerPrefix = B, e._autoprefixerPrefix;
  }
  /**
   * Clone node with prefixes
   */
  process(e, B) {
    if (!this.check(e))
      return;
    let t = this.parentPrefix(e), r = this.prefixes.filter(
      (i) => !t || t === au.removeNote(i)
    ), C = [];
    for (let i of r)
      this.add(e, i, C.concat([i]), B) && C.push(i);
    return C;
  }
};
var Lr = ou;
let lu = Lr, uu = Nr, bs = j, fu = class extends lu {
  /**
   * Clone and add prefixes for declaration
   */
  add(e, B, t, r) {
    let C = this.prefixed(e.prop, B);
    if (!(this.isAlready(e, C) || this.otherPrefixes(e.value, B)))
      return this.insert(e, B, t, r);
  }
  /**
   * Calculate indentation to create visual cascade
   */
  calcBefore(e, B, t = "") {
    let C = this.maxPrefixed(e, B) - bs.removeNote(t).length, i = B.raw("before");
    return C > 0 && (i += Array(C).fill(" ").join("")), i;
  }
  /**
   * Always true, because we already get prefixer by property name
   */
  check() {
    return !0;
  }
  /**
   * Clone and insert new declaration
   */
  insert(e, B, t) {
    let r = this.set(this.clone(e), B);
    if (!(!r || e.parent.some(
      (i) => i.prop === r.prop && i.value === r.value
    )))
      return this.needCascade(e) && (r.raws.before = this.calcBefore(t, e, B)), e.parent.insertBefore(e, r);
  }
  /**
   * Did this declaration has this prefix above
   */
  isAlready(e, B) {
    let t = this.all.group(e).up((r) => r.prop === B);
    return t || (t = this.all.group(e).down((r) => r.prop === B)), t;
  }
  /**
   * Return maximum length of possible prefixed property
   */
  maxPrefixed(e, B) {
    if (B._autoprefixerMax)
      return B._autoprefixerMax;
    let t = 0;
    for (let r of e)
      r = bs.removeNote(r), r.length > t && (t = r.length);
    return B._autoprefixerMax = t, B._autoprefixerMax;
  }
  /**
   * Should we use visual cascade for prefixes
   */
  needCascade(e) {
    return e._autoprefixerCascade || (e._autoprefixerCascade = this.all.options.cascade !== !1 && e.raw("before").includes(`
`)), e._autoprefixerCascade;
  }
  /**
   * Return unprefixed version of property
   */
  normalize(e) {
    return e;
  }
  /**
   * Return list of prefixed properties to clean old prefixes
   */
  old(e, B) {
    return [this.prefixed(e, B)];
  }
  /**
   * Check `value`, that it contain other prefixes, rather than `prefix`
   */
  otherPrefixes(e, B) {
    for (let t of uu.prefixes())
      if (t !== B && e.includes(t))
        return e.replace(/var\([^)]+\)/, "").includes(t);
    return !1;
  }
  /**
   * Return prefixed version of property
   */
  prefixed(e, B) {
    return B + e;
  }
  /**
   * Add spaces for visual cascade
   */
  process(e, B) {
    if (!this.needCascade(e)) {
      super.process(e, B);
      return;
    }
    let t = super.process(e, B);
    !t || !t.length || (this.restoreBefore(e), e.raws.before = this.calcBefore(t, e));
  }
  /**
   * Remove visual cascade
   */
  restoreBefore(e) {
    let B = e.raw("before").split(`
`), t = B[B.length - 1];
    this.all.group(e).up((r) => {
      let C = r.raw("before").split(`
`), i = C[C.length - 1];
      i.length < t.length && (t = i);
    }), B[B.length - 1] = t, e.raws.before = B.join(`
`);
  }
  /**
   * Set prefix to declaration
   */
  set(e, B) {
    return e.prop = this.prefixed(e.prop, B), e;
  }
};
var x = fu, xs = { exports: {} };
/**
 * @license Fraction.js v4.3.7 31/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
(function(s, e) {
  (function(B) {
    var t = 2e3, r = {
      s: 1,
      n: 0,
      d: 1
    };
    function C(f, d) {
      if (isNaN(f = parseInt(f, 10)))
        throw b();
      return f * d;
    }
    function i(f, d) {
      if (d === 0)
        throw w();
      var D = Object.create(h.prototype);
      D.s = f < 0 ? -1 : 1, f = f < 0 ? -f : f;
      var m = c(f, d);
      return D.n = f / m, D.d = d / m, D;
    }
    function n(f) {
      for (var d = {}, D = f, m = 2, A = 4; A <= D; ) {
        for (; D % m === 0; )
          D /= m, d[m] = (d[m] || 0) + 1;
        A += 1 + 2 * m++;
      }
      return D !== f ? D > 1 && (d[D] = (d[D] || 0) + 1) : d[f] = (d[f] || 0) + 1, d;
    }
    var a = function(f, d) {
      var D = 0, m = 1, A = 1, O = 0, I = 0, K = 0, X = 1, Q = 1, S = 0, k = 1, se = 1, W = 1, Me = 1e7, hB;
      if (f != null) if (d !== void 0) {
        if (D = f, m = d, A = D * m, D % 1 !== 0 || m % 1 !== 0)
          throw p();
      } else
        switch (typeof f) {
          case "object": {
            if ("d" in f && "n" in f)
              D = f.n, m = f.d, "s" in f && (D *= f.s);
            else if (0 in f)
              D = f[0], 1 in f && (m = f[1]);
            else
              throw b();
            A = D * m;
            break;
          }
          case "number": {
            if (f < 0 && (A = f, f = -f), f % 1 === 0)
              D = f;
            else if (f > 0) {
              for (f >= 1 && (Q = Math.pow(10, Math.floor(1 + Math.log(f) / Math.LN10)), f /= Q); k <= Me && W <= Me; )
                if (hB = (S + se) / (k + W), f === hB) {
                  k + W <= Me ? (D = S + se, m = k + W) : W > k ? (D = se, m = W) : (D = S, m = k);
                  break;
                } else
                  f > hB ? (S += se, k += W) : (se += S, W += k), k > Me ? (D = se, m = W) : (D = S, m = k);
              D *= Q;
            } else (isNaN(f) || isNaN(d)) && (m = D = NaN);
            break;
          }
          case "string": {
            if (k = f.match(/\d+|./g), k === null)
              throw b();
            if (k[S] === "-" ? (A = -1, S++) : k[S] === "+" && S++, k.length === S + 1 ? I = C(k[S++], A) : k[S + 1] === "." || k[S] === "." ? (k[S] !== "." && (O = C(k[S++], A)), S++, (S + 1 === k.length || k[S + 1] === "(" && k[S + 3] === ")" || k[S + 1] === "'" && k[S + 3] === "'") && (I = C(k[S], A), X = Math.pow(10, k[S].length), S++), (k[S] === "(" && k[S + 2] === ")" || k[S] === "'" && k[S + 2] === "'") && (K = C(k[S + 1], A), Q = Math.pow(10, k[S + 1].length) - 1, S += 3)) : k[S + 1] === "/" || k[S + 1] === ":" ? (I = C(k[S], A), X = C(k[S + 2], 1), S += 3) : k[S + 3] === "/" && k[S + 1] === " " && (O = C(k[S], A), I = C(k[S + 2], A), X = C(k[S + 4], 1), S += 5), k.length <= S) {
              m = X * Q, A = /* void */
              D = K + m * O + Q * I;
              break;
            }
          }
          default:
            throw b();
        }
      if (m === 0)
        throw w();
      r.s = A < 0 ? -1 : 1, r.n = Math.abs(D), r.d = Math.abs(m);
    };
    function o(f, d, D) {
      for (var m = 1; d > 0; f = f * f % D, d >>= 1)
        d & 1 && (m = m * f % D);
      return m;
    }
    function u(f, d) {
      for (; d % 2 === 0; d /= 2)
        ;
      for (; d % 5 === 0; d /= 5)
        ;
      if (d === 1)
        return 0;
      for (var D = 10 % d, m = 1; D !== 1; m++)
        if (D = D * 10 % d, m > t)
          return 0;
      return m;
    }
    function l(f, d, D) {
      for (var m = 1, A = o(10, D, d), O = 0; O < 300; O++) {
        if (m === A)
          return O;
        m = m * 10 % d, A = A * 10 % d;
      }
      return 0;
    }
    function c(f, d) {
      if (!f)
        return d;
      if (!d)
        return f;
      for (; ; ) {
        if (f %= d, !f)
          return d;
        if (d %= f, !d)
          return f;
      }
    }
    function h(f, d) {
      if (a(f, d), this instanceof h)
        f = c(r.d, r.n), this.s = r.s, this.n = r.n / f, this.d = r.d / f;
      else
        return i(r.s * r.n, r.d);
    }
    var w = function() {
      return new Error("Division by Zero");
    }, b = function() {
      return new Error("Invalid argument");
    }, p = function() {
      return new Error("Parameters must be integer");
    };
    h.prototype = {
      s: 1,
      n: 0,
      d: 1,
      /**
       * Calculates the absolute value
       *
       * Ex: new Fraction(-4).abs() => 4
       **/
      abs: function() {
        return i(this.n, this.d);
      },
      /**
       * Inverts the sign of the current fraction
       *
       * Ex: new Fraction(-4).neg() => 4
       **/
      neg: function() {
        return i(-this.s * this.n, this.d);
      },
      /**
       * Adds two rational numbers
       *
       * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
       **/
      add: function(f, d) {
        return a(f, d), i(
          this.s * this.n * r.d + r.s * this.d * r.n,
          this.d * r.d
        );
      },
      /**
       * Subtracts two rational numbers
       *
       * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
       **/
      sub: function(f, d) {
        return a(f, d), i(
          this.s * this.n * r.d - r.s * this.d * r.n,
          this.d * r.d
        );
      },
      /**
       * Multiplies two rational numbers
       *
       * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
       **/
      mul: function(f, d) {
        return a(f, d), i(
          this.s * r.s * this.n * r.n,
          this.d * r.d
        );
      },
      /**
       * Divides two rational numbers
       *
       * Ex: new Fraction("-17.(345)").inverse().div(3)
       **/
      div: function(f, d) {
        return a(f, d), i(
          this.s * r.s * this.n * r.d,
          this.d * r.n
        );
      },
      /**
       * Clones the actual object
       *
       * Ex: new Fraction("-17.(345)").clone()
       **/
      clone: function() {
        return i(this.s * this.n, this.d);
      },
      /**
       * Calculates the modulo of two rational numbers - a more precise fmod
       *
       * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
       **/
      mod: function(f, d) {
        if (isNaN(this.n) || isNaN(this.d))
          return new h(NaN);
        if (f === void 0)
          return i(this.s * this.n % this.d, 1);
        if (a(f, d), r.n === 0 && this.d === 0)
          throw w();
        return i(
          this.s * (r.d * this.n) % (r.n * this.d),
          r.d * this.d
        );
      },
      /**
       * Calculates the fractional gcd of two rational numbers
       *
       * Ex: new Fraction(5,8).gcd(3,7) => 1/56
       */
      gcd: function(f, d) {
        return a(f, d), i(c(r.n, this.n) * c(r.d, this.d), r.d * this.d);
      },
      /**
       * Calculates the fractional lcm of two rational numbers
       *
       * Ex: new Fraction(5,8).lcm(3,7) => 15
       */
      lcm: function(f, d) {
        return a(f, d), r.n === 0 && this.n === 0 ? i(0, 1) : i(r.n * this.n, c(r.n, this.n) * c(r.d, this.d));
      },
      /**
       * Calculates the ceil of a rational number
       *
       * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
       **/
      ceil: function(f) {
        return f = Math.pow(10, f || 0), isNaN(this.n) || isNaN(this.d) ? new h(NaN) : i(Math.ceil(f * this.s * this.n / this.d), f);
      },
      /**
       * Calculates the floor of a rational number
       *
       * Ex: new Fraction('4.(3)').floor() => (4 / 1)
       **/
      floor: function(f) {
        return f = Math.pow(10, f || 0), isNaN(this.n) || isNaN(this.d) ? new h(NaN) : i(Math.floor(f * this.s * this.n / this.d), f);
      },
      /**
       * Rounds a rational numbers
       *
       * Ex: new Fraction('4.(3)').round() => (4 / 1)
       **/
      round: function(f) {
        return f = Math.pow(10, f || 0), isNaN(this.n) || isNaN(this.d) ? new h(NaN) : i(Math.round(f * this.s * this.n / this.d), f);
      },
      /**
       * Rounds a rational number to a multiple of another rational number
       *
       * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
       **/
      roundTo: function(f, d) {
        return a(f, d), i(this.s * Math.round(this.n * r.d / (this.d * r.n)) * r.n, r.d);
      },
      /**
       * Gets the inverse of the fraction, means numerator and denominator are exchanged
       *
       * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
       **/
      inverse: function() {
        return i(this.s * this.d, this.n);
      },
      /**
       * Calculates the fraction to some rational exponent, if possible
       *
       * Ex: new Fraction(-1,2).pow(-3) => -8
       */
      pow: function(f, d) {
        if (a(f, d), r.d === 1)
          return r.s < 0 ? i(Math.pow(this.s * this.d, r.n), Math.pow(this.n, r.n)) : i(Math.pow(this.s * this.n, r.n), Math.pow(this.d, r.n));
        if (this.s < 0) return null;
        var D = n(this.n), m = n(this.d), A = 1, O = 1;
        for (var I in D)
          if (I !== "1") {
            if (I === "0") {
              A = 0;
              break;
            }
            if (D[I] *= r.n, D[I] % r.d === 0)
              D[I] /= r.d;
            else return null;
            A *= Math.pow(I, D[I]);
          }
        for (var I in m)
          if (I !== "1") {
            if (m[I] *= r.n, m[I] % r.d === 0)
              m[I] /= r.d;
            else return null;
            O *= Math.pow(I, m[I]);
          }
        return r.s < 0 ? i(O, A) : i(A, O);
      },
      /**
       * Check if two rational numbers are the same
       *
       * Ex: new Fraction(19.6).equals([98, 5]);
       **/
      equals: function(f, d) {
        return a(f, d), this.s * this.n * r.d === r.s * r.n * this.d;
      },
      /**
       * Check if two rational numbers are the same
       *
       * Ex: new Fraction(19.6).equals([98, 5]);
       **/
      compare: function(f, d) {
        a(f, d);
        var D = this.s * this.n * r.d - r.s * r.n * this.d;
        return (0 < D) - (D < 0);
      },
      simplify: function(f) {
        if (isNaN(this.n) || isNaN(this.d))
          return this;
        f = f || 1e-3;
        for (var d = this.abs(), D = d.toContinued(), m = 1; m < D.length; m++) {
          for (var A = i(D[m - 1], 1), O = m - 2; O >= 0; O--)
            A = A.inverse().add(D[O]);
          if (Math.abs(A.sub(d).valueOf()) < f)
            return A.mul(this.s);
        }
        return this;
      },
      /**
       * Check if two rational numbers are divisible
       *
       * Ex: new Fraction(19.6).divisible(1.5);
       */
      divisible: function(f, d) {
        return a(f, d), !(!(r.n * this.d) || this.n * r.d % (r.n * this.d));
      },
      /**
       * Returns a decimal representation of the fraction
       *
       * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
       **/
      valueOf: function() {
        return this.s * this.n / this.d;
      },
      /**
       * Returns a string-fraction representation of a Fraction object
       *
       * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
       **/
      toFraction: function(f) {
        var d, D = "", m = this.n, A = this.d;
        return this.s < 0 && (D += "-"), A === 1 ? D += m : (f && (d = Math.floor(m / A)) > 0 && (D += d, D += " ", m %= A), D += m, D += "/", D += A), D;
      },
      /**
       * Returns a latex representation of a Fraction object
       *
       * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
       **/
      toLatex: function(f) {
        var d, D = "", m = this.n, A = this.d;
        return this.s < 0 && (D += "-"), A === 1 ? D += m : (f && (d = Math.floor(m / A)) > 0 && (D += d, m %= A), D += "\\frac{", D += m, D += "}{", D += A, D += "}"), D;
      },
      /**
       * Returns an array of continued fraction elements
       *
       * Ex: new Fraction("7/8").toContinued() => [0,1,7]
       */
      toContinued: function() {
        var f, d = this.n, D = this.d, m = [];
        if (isNaN(d) || isNaN(D))
          return m;
        do
          m.push(Math.floor(d / D)), f = d % D, d = D, D = f;
        while (d !== 1);
        return m;
      },
      /**
       * Creates a string representation of a fraction with all digits
       *
       * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
       **/
      toString: function(f) {
        var d = this.n, D = this.d;
        if (isNaN(d) || isNaN(D))
          return "NaN";
        f = f || 15;
        var m = u(d, D), A = l(d, D, m), O = this.s < 0 ? "-" : "";
        if (O += d / D | 0, d %= D, d *= 10, d && (O += "."), m) {
          for (var I = A; I--; )
            O += d / D | 0, d %= D, d *= 10;
          O += "(";
          for (var I = m; I--; )
            O += d / D | 0, d %= D, d *= 10;
          O += ")";
        } else
          for (var I = f; d && I--; )
            O += d / D | 0, d %= D, d *= 10;
        return O;
      }
    }, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = h, s.exports = h;
  })();
})(xs, xs.exports);
var EB = 40, kB = 41, Xe = 39, FB = 34, RB = 92, ne = 47, IB = 44, OB = 58, Ze = 42, cu = 117, du = 85, Du = 43, pu = /^[a-f0-9?-]+$/i, hu = function(s) {
  for (var e = [], B = s, t, r, C, i, n, a, o, u, l = 0, c = B.charCodeAt(l), h = B.length, w = [{ nodes: e }], b = 0, p, f = "", d = "", D = ""; l < h; )
    if (c <= 32) {
      t = l;
      do
        t += 1, c = B.charCodeAt(t);
      while (c <= 32);
      i = B.slice(l, t), C = e[e.length - 1], c === kB && b ? D = i : C && C.type === "div" ? (C.after = i, C.sourceEndIndex += i.length) : c === IB || c === OB || c === ne && B.charCodeAt(t + 1) !== Ze && (!p || p && p.type === "function" && p.value !== "calc") ? d = i : e.push({
        type: "space",
        sourceIndex: l,
        sourceEndIndex: t,
        value: i
      }), l = t;
    } else if (c === Xe || c === FB) {
      t = l, r = c === Xe ? "'" : '"', i = {
        type: "string",
        sourceIndex: l,
        quote: r
      };
      do
        if (n = !1, t = B.indexOf(r, t + 1), ~t)
          for (a = t; B.charCodeAt(a - 1) === RB; )
            a -= 1, n = !n;
        else
          B += r, t = B.length - 1, i.unclosed = !0;
      while (n);
      i.value = B.slice(l + 1, t), i.sourceEndIndex = i.unclosed ? t : t + 1, e.push(i), l = t + 1, c = B.charCodeAt(l);
    } else if (c === ne && B.charCodeAt(l + 1) === Ze)
      t = B.indexOf("*/", l), i = {
        type: "comment",
        sourceIndex: l,
        sourceEndIndex: t + 2
      }, t === -1 && (i.unclosed = !0, t = B.length, i.sourceEndIndex = t), i.value = B.slice(l + 2, t), e.push(i), l = t + 2, c = B.charCodeAt(l);
    else if ((c === ne || c === Ze) && p && p.type === "function" && p.value === "calc")
      i = B[l], e.push({
        type: "word",
        sourceIndex: l - d.length,
        sourceEndIndex: l + i.length,
        value: i
      }), l += 1, c = B.charCodeAt(l);
    else if (c === ne || c === IB || c === OB)
      i = B[l], e.push({
        type: "div",
        sourceIndex: l - d.length,
        sourceEndIndex: l + i.length,
        value: i,
        before: d,
        after: ""
      }), d = "", l += 1, c = B.charCodeAt(l);
    else if (EB === c) {
      t = l;
      do
        t += 1, c = B.charCodeAt(t);
      while (c <= 32);
      if (u = l, i = {
        type: "function",
        sourceIndex: l - f.length,
        value: f,
        before: B.slice(u + 1, t)
      }, l = t, f === "url" && c !== Xe && c !== FB) {
        t -= 1;
        do
          if (n = !1, t = B.indexOf(")", t + 1), ~t)
            for (a = t; B.charCodeAt(a - 1) === RB; )
              a -= 1, n = !n;
          else
            B += ")", t = B.length - 1, i.unclosed = !0;
        while (n);
        o = t;
        do
          o -= 1, c = B.charCodeAt(o);
        while (c <= 32);
        u < o ? (l !== o + 1 ? i.nodes = [
          {
            type: "word",
            sourceIndex: l,
            sourceEndIndex: o + 1,
            value: B.slice(l, o + 1)
          }
        ] : i.nodes = [], i.unclosed && o + 1 !== t ? (i.after = "", i.nodes.push({
          type: "space",
          sourceIndex: o + 1,
          sourceEndIndex: t,
          value: B.slice(o + 1, t)
        })) : (i.after = B.slice(o + 1, t), i.sourceEndIndex = t)) : (i.after = "", i.nodes = []), l = t + 1, i.sourceEndIndex = i.unclosed ? t : l, c = B.charCodeAt(l), e.push(i);
      } else
        b += 1, i.after = "", i.sourceEndIndex = l + 1, e.push(i), w.push(i), e = i.nodes = [], p = i;
      f = "";
    } else if (kB === c && b)
      l += 1, c = B.charCodeAt(l), p.after = D, p.sourceEndIndex += D.length, D = "", b -= 1, w[w.length - 1].sourceEndIndex = l, w.pop(), p = w[b], e = p.nodes;
    else {
      t = l;
      do
        c === RB && (t += 1), t += 1, c = B.charCodeAt(t);
      while (t < h && !(c <= 32 || c === Xe || c === FB || c === IB || c === OB || c === ne || c === EB || c === Ze && p && p.type === "function" && p.value === "calc" || c === ne && p.type === "function" && p.value === "calc" || c === kB && b));
      i = B.slice(l, t), EB === c ? f = i : (cu === i.charCodeAt(0) || du === i.charCodeAt(0)) && Du === i.charCodeAt(1) && pu.test(i.slice(2)) ? e.push({
        type: "unicode-range",
        sourceIndex: l,
        sourceEndIndex: t,
        value: i
      }) : e.push({
        type: "word",
        sourceIndex: l,
        sourceEndIndex: t,
        value: i
      }), l = t;
    }
  for (l = w.length - 1; l; l -= 1)
    w[l].unclosed = !0, w[l].sourceEndIndex = B.length;
  return w[0].nodes;
}, mu = function s(e, B, t) {
  var r, C, i, n;
  for (r = 0, C = e.length; r < C; r += 1)
    i = e[r], t || (n = B(i, r, e)), n !== !1 && i.type === "function" && Array.isArray(i.nodes) && s(i.nodes, B, t), t && B(i, r, e);
};
function As(s, e) {
  var B = s.type, t = s.value, r, C;
  return e && (C = e(s)) !== void 0 ? C : B === "word" || B === "space" ? t : B === "string" ? (r = s.quote || "", r + t + (s.unclosed ? "" : r)) : B === "comment" ? "/*" + t + (s.unclosed ? "" : "*/") : B === "div" ? (s.before || "") + t + (s.after || "") : Array.isArray(s.nodes) ? (r = fn(s.nodes, e), B !== "function" ? r : t + "(" + (s.before || "") + r + (s.after || "") + (s.unclosed ? "" : ")")) : t;
}
function fn(s, e) {
  var B, t;
  if (Array.isArray(s)) {
    for (B = "", t = s.length - 1; ~t; t -= 1)
      B = As(s[t], e) + B;
    return B;
  }
  return As(s, e);
}
var vu = fn, jB, Ss;
function gu() {
  if (Ss) return jB;
  Ss = 1;
  var s = 45, e = 43, B = 46, t = 101, r = 69;
  function C(i) {
    var n = i.charCodeAt(0), a;
    if (n === e || n === s) {
      if (a = i.charCodeAt(1), a >= 48 && a <= 57)
        return !0;
      var o = i.charCodeAt(2);
      return a === B && o >= 48 && o <= 57;
    }
    return n === B ? (a = i.charCodeAt(1), a >= 48 && a <= 57) : n >= 48 && n <= 57;
  }
  return jB = function(i) {
    var n = 0, a = i.length, o, u, l;
    if (a === 0 || !C(i))
      return !1;
    for (o = i.charCodeAt(n), (o === e || o === s) && n++; n < a && (o = i.charCodeAt(n), !(o < 48 || o > 57)); )
      n += 1;
    if (o = i.charCodeAt(n), u = i.charCodeAt(n + 1), o === B && u >= 48 && u <= 57)
      for (n += 2; n < a && (o = i.charCodeAt(n), !(o < 48 || o > 57)); )
        n += 1;
    if (o = i.charCodeAt(n), u = i.charCodeAt(n + 1), l = i.charCodeAt(n + 2), (o === t || o === r) && (u >= 48 && u <= 57 || (u === e || u === s) && l >= 48 && l <= 57))
      for (n += u === e || u === s ? 3 : 2; n < a && (o = i.charCodeAt(n), !(o < 48 || o > 57)); )
        n += 1;
    return {
      number: i.slice(0, n),
      unit: i.slice(n)
    };
  }, jB;
}
var yu = hu, cn = mu, dn = vu;
function Be(s) {
  return this instanceof Be ? (this.nodes = yu(s), this) : new Be(s);
}
Be.prototype.toString = function() {
  return Array.isArray(this.nodes) ? dn(this.nodes) : "";
};
Be.prototype.walk = function(s, e) {
  return cn(this.nodes, s, e), this;
};
Be.unit = gu();
Be.walk = cn;
Be.stringify = dn;
var Tr = Be;
let wu = j, bu = class {
  constructor(e, B, t, r) {
    this.unprefixed = e, this.prefixed = B, this.string = t || B, this.regexp = r || wu.regexp(B);
  }
  /**
   * Check, that value contain old value
   */
  check(e) {
    return e.includes(this.string) ? !!e.match(this.regexp) : !1;
  }
};
var ke = bu;
let xu = Lr, Au = ke, Su = ln, Eu = j, ku = class extends xu {
  /**
   * Clone decl for each prefixed values
   */
  static save(e, B) {
    let t = B.prop, r = [];
    for (let C in B._autoprefixerValues) {
      let i = B._autoprefixerValues[C];
      if (i === B.value)
        continue;
      let n, a = Su.prefix(t);
      if (a === "-pie-")
        continue;
      if (a === C) {
        n = B.value = i, r.push(n);
        continue;
      }
      let o = e.prefixed(t, C), u = B.parent;
      if (!u.every((w) => w.prop !== o)) {
        r.push(n);
        continue;
      }
      let l = i.replace(/\s+/, " ");
      if (u.some(
        (w) => w.prop === B.prop && w.value.replace(/\s+/, " ") === l
      )) {
        r.push(n);
        continue;
      }
      let h = this.clone(B, { value: i });
      n = B.parent.insertBefore(B, h), r.push(n);
    }
    return r;
  }
  /**
   * Save values with next prefixed token
   */
  add(e, B) {
    e._autoprefixerValues || (e._autoprefixerValues = {});
    let t = e._autoprefixerValues[B] || this.value(e), r;
    do
      if (r = t, t = this.replace(t, B), t === !1) return;
    while (t !== r);
    e._autoprefixerValues[B] = t;
  }
  /**
   * Is declaration need to be prefixed
   */
  check(e) {
    let B = e.value;
    return B.includes(this.name) ? !!B.match(this.regexp()) : !1;
  }
  /**
   * Return function to fast find prefixed value
   */
  old(e) {
    return new Au(this.name, e + this.name);
  }
  /**
   * Lazy regexp loading
   */
  regexp() {
    return this.regexpCache || (this.regexpCache = Eu.regexp(this.name));
  }
  /**
   * Add prefix to values in string
   */
  replace(e, B) {
    return e.replace(this.regexp(), `$1${B}$2`);
  }
  /**
   * Get value with comments if it was not changed
   */
  value(e) {
    return e.raws.value && e.raws.value.value === e.value ? e.raws.value.raw : e.value;
  }
};
var V = ku, P = {};
let N = Tr, ce = Ee.list, Es = j.uniq, Fu = j.escapeRegexp, gr = j.splitSelector;
function ks(s) {
  return s && s.length === 2 && s[0] === "span" && parseInt(s[1], 10) > 0 ? [!1, parseInt(s[1], 10)] : s && s.length === 1 && parseInt(s[0], 10) > 0 ? [parseInt(s[0], 10), !1] : [!1, !1];
}
P.translate = Ru;
function Ru(s, e, B) {
  let t = s[e], r = s[B];
  if (!t)
    return [!1, !1];
  let [C, i] = ks(t), [n, a] = ks(r);
  return C && !r ? [C, !1] : i && n ? [n - i, i] : C && a ? [C, a] : C && n ? [C, n - C] : [!1, !1];
}
P.parse = Iu;
function Iu(s) {
  let e = N(s.value), B = [], t = 0;
  B[t] = [];
  for (let r of e.nodes)
    r.type === "div" ? (t += 1, B[t] = []) : r.type === "word" && B[t].push(r.value);
  return B;
}
P.insertDecl = Ou;
function Ou(s, e, B) {
  B && !s.parent.some((t) => t.prop === `-ms-${e}`) && s.cloneBefore({
    prop: `-ms-${e}`,
    value: B.toString()
  });
}
P.prefixTrackProp = ju;
function ju({ prefix: s, prop: e }) {
  return s + e.replace("template-", "");
}
function Pu({ nodes: s }, { gap: e }) {
  let { count: B, size: t } = s.reduce(
    (r, C) => (C.type === "div" && C.value === "," ? r.key = "size" : r[r.key].push(N.stringify(C)), r),
    {
      count: [],
      key: "count",
      size: []
    }
  );
  if (e) {
    t = t.filter((C) => C.trim());
    let r = [];
    for (let C = 1; C <= B; C++)
      t.forEach((i, n) => {
        (n > 0 || C > 1) && r.push(e), r.push(i);
      });
    return r.join(" ");
  }
  return `(${t.join("")})[${B.join("")}]`;
}
P.prefixTrackValue = yr;
function yr({ gap: s, value: e }) {
  let B = N(e).nodes.reduce((t, r) => r.type === "function" && r.value === "repeat" ? t.concat({
    type: "word",
    value: Pu(r, { gap: s })
  }) : s && r.type === "space" ? t.concat(
    {
      type: "space",
      value: " "
    },
    {
      type: "word",
      value: s
    },
    r
  ) : t.concat(r), []);
  return N.stringify(B);
}
let Gu = /^\.+$/;
function Fs(s, e) {
  return { end: e, span: e - s, start: s };
}
function Mu(s) {
  return s.trim().split(/\s+/g);
}
P.parseGridAreas = Hr;
function Hr({ gap: s, rows: e }) {
  return e.reduce((B, t, r) => (s.row && (r *= 2), t.trim() === "" || Mu(t).forEach((C, i) => {
    if (!Gu.test(C))
      if (s.column && (i *= 2), typeof B[C] > "u")
        B[C] = {
          column: Fs(i + 1, i + 2),
          row: Fs(r + 1, r + 2)
        };
      else {
        let { column: n, row: a } = B[C];
        n.start = Math.min(n.start, i + 1), n.end = Math.max(n.end, i + 2), n.span = n.end - n.start, a.start = Math.min(a.start, r + 1), a.end = Math.max(a.end, r + 2), a.span = a.end - a.start;
      }
  }), B), {});
}
function Nu(s) {
  return s.type === "word" && /^\[.+]$/.test(s.value);
}
function Rs(s) {
  return s.areas.length > s.rows.length && s.rows.push("auto"), s;
}
P.parseTemplate = Jr;
function Jr({ decl: s, gap: e }) {
  let B = N(s.value).nodes.reduce(
    (t, r) => {
      let { type: C, value: i } = r;
      return Nu(r) || C === "space" || (C === "string" && (t = Rs(t), t.areas.push(i)), (C === "word" || C === "function") && t[t.key].push(N.stringify(r)), C === "div" && i === "/" && (t.key = "columns", t = Rs(t))), t;
    },
    {
      areas: [],
      columns: [],
      key: "rows",
      rows: []
    }
  );
  return {
    areas: Hr({
      gap: e,
      rows: B.areas
    }),
    columns: yr({
      gap: e.column,
      value: B.columns.join(" ")
    }),
    rows: yr({
      gap: e.row,
      value: B.rows.join(" ")
    })
  };
}
function $e(s, e = !1, B = !1) {
  let t = [
    {
      prop: "-ms-grid-row",
      value: String(s.row.start)
    }
  ];
  return (s.row.span > 1 || e) && t.push({
    prop: "-ms-grid-row-span",
    value: String(s.row.span)
  }), t.push({
    prop: "-ms-grid-column",
    value: String(s.column.start)
  }), (s.column.span > 1 || B) && t.push({
    prop: "-ms-grid-column-span",
    value: String(s.column.span)
  }), t;
}
function xe(s) {
  return s.type === "atrule" && s.name === "media" ? s : s.parent ? xe(s.parent) : !1;
}
function Is(s, e) {
  return s = s.map((B) => {
    let t = ce.space(B), r = ce.comma(B);
    return t.length > r.length && (B = t.slice(-1).join("")), B;
  }), s.map((B) => e.map((r, C) => `${C === 0 ? "" : " "}${r} > ${B}`));
}
function Os(s, e) {
  return s.selectors.some((B) => e.selectors.includes(B));
}
function Lu(s) {
  let e = [];
  return s.walkDecls(/grid-template(-areas)?$/, (B) => {
    let t = B.parent, r = xe(t), C = DB(B), i = Dn(B, C), { areas: n } = Jr({ decl: B, gap: i || C }), a = Object.keys(n);
    if (a.length === 0)
      return !0;
    let o = e.reduce((u, { allAreas: l }, c) => l && a.some((w) => l.includes(w)) ? c : u, null);
    if (o !== null) {
      let { allAreas: u, rules: l } = e[o], c = l.some((b) => b.hasDuplicates === !1 && Os(b, t)), h = !1, w = l.reduce((b, p) => !p.params && Os(p, t) ? (h = !0, p.duplicateAreaNames) : (h || a.forEach((f) => {
        p.areas[f] && b.push(f);
      }), Es(b)), []);
      l.forEach((b) => {
        a.forEach((p) => {
          let f = b.areas[p];
          f && f.row.span !== n[p].row.span && (n[p].row.updateSpan = !0), f && f.column.span !== n[p].column.span && (n[p].column.updateSpan = !0);
        });
      }), e[o].allAreas = Es([...u, ...a]), e[o].rules.push({
        areas: n,
        duplicateAreaNames: w,
        hasDuplicates: !c,
        node: t,
        params: r.params,
        selectors: t.selectors
      });
    } else
      e.push({
        allAreas: a,
        areasCount: 0,
        rules: [
          {
            areas: n,
            duplicateAreaNames: [],
            duplicateRules: [],
            hasDuplicates: !1,
            node: t,
            params: r.params,
            selectors: t.selectors
          }
        ]
      });
  }), e;
}
P.insertAreas = Tu;
function Tu(s, e) {
  let B = Lu(s);
  if (B.length === 0)
    return;
  let t = {};
  s.walkDecls("grid-area", (r) => {
    let C = r.parent, i = C.first.prop === "-ms-grid-row", n = xe(C);
    if (e(r))
      return;
    let a = s.index(n || C), o = r.value, u = B.filter((p) => p.allAreas.includes(o))[0];
    if (!u)
      return !0;
    let l = u.allAreas[u.allAreas.length - 1], c = ce.space(C.selector), h = ce.comma(C.selector), w = c.length > 1 && c.length > h.length;
    if (i)
      return !1;
    t[l] || (t[l] = {});
    let b = !1;
    for (let p of u.rules) {
      let f = p.areas[o], d = p.duplicateAreaNames.includes(o);
      if (!f) {
        let D = t[l].lastRule, m;
        D ? m = s.index(D) : m = -1, a > m && (t[l].lastRule = n || C);
        continue;
      }
      if (p.params && !t[l][p.params] && (t[l][p.params] = []), (!p.hasDuplicates || !d) && !p.params)
        $e(f, !1, !1).reverse().forEach(
          (D) => C.prepend(
            Object.assign(D, {
              raws: {
                between: r.raws.between
              }
            })
          )
        ), t[l].lastRule = C, b = !0;
      else if (p.hasDuplicates && !p.params && !w) {
        let D = C.clone();
        D.removeAll(), $e(f, f.row.updateSpan, f.column.updateSpan).reverse().forEach(
          (m) => D.prepend(
            Object.assign(m, {
              raws: {
                between: r.raws.between
              }
            })
          )
        ), D.selectors = Is(
          D.selectors,
          p.selectors
        ), t[l].lastRule && t[l].lastRule.after(D), t[l].lastRule = D, b = !0;
      } else if (p.hasDuplicates && !p.params && w && C.selector.includes(p.selectors[0]))
        C.walkDecls(/-ms-grid-(row|column)/, (D) => D.remove()), $e(f, f.row.updateSpan, f.column.updateSpan).reverse().forEach(
          (D) => C.prepend(
            Object.assign(D, {
              raws: {
                between: r.raws.between
              }
            })
          )
        );
      else if (p.params) {
        let D = C.clone();
        D.removeAll(), $e(f, f.row.updateSpan, f.column.updateSpan).reverse().forEach(
          (m) => D.prepend(
            Object.assign(m, {
              raws: {
                between: r.raws.between
              }
            })
          )
        ), p.hasDuplicates && d && (D.selectors = Is(
          D.selectors,
          p.selectors
        )), D.raws = p.node.raws, s.index(p.node.parent) > a ? p.node.parent.append(D) : t[l][p.params].push(D), b || (t[l].lastRule = n || C);
      }
    }
  }), Object.keys(t).forEach((r) => {
    let C = t[r], i = C.lastRule;
    Object.keys(C).reverse().filter((n) => n !== "lastRule").forEach((n) => {
      C[n].length > 0 && i && (i.after({ name: "media", params: n }), i.next().append(C[n]));
    });
  });
}
P.warnMissedAreas = Hu;
function Hu(s, e, B) {
  let t = Object.keys(s);
  e.root().walkDecls("grid-area", (r) => {
    t = t.filter((C) => C !== r.value);
  }), t.length > 0 && e.warn(B, "Can not find grid areas: " + t.join(", "));
}
P.warnTemplateSelectorNotFound = Ju;
function Ju(s, e) {
  let B = s.parent, t = s.root(), r = !1, C = ce.space(B.selector).filter((i) => i !== ">").slice(0, -1);
  if (C.length > 0) {
    let i = !1, n = null;
    t.walkDecls(/grid-template(-areas)?$/, (a) => {
      let o = a.parent, u = o.selectors, { areas: l } = Jr({ decl: a, gap: DB(a) }), c = l[s.value];
      for (let h of u) {
        if (i)
          break;
        i = ce.space(h).filter((b) => b !== ">").every(
          (b, p) => b === C[p]
        );
      }
      if (i || !c)
        return !0;
      n || (n = o.selector), n && n !== o.selector && (r = !0);
    }), !i && r && s.warn(
      e,
      `Autoprefixer cannot find a grid-template containing the duplicate grid-area "${s.value}" with full selector matching: ${C.join(" ")}`
    );
  }
}
P.warnIfGridRowColumnExists = Uu;
function Uu(s, e) {
  let B = s.parent, t = [];
  B.walkDecls(/^grid-(row|column)/, (r) => {
    !r.prop.endsWith("-end") && !r.value.startsWith("span") && !r.prop.endsWith("-gap") && t.push(r);
  }), t.length > 0 && t.forEach((r) => {
    r.warn(
      e,
      `You already have a grid-area declaration present in the rule. You should use either grid-area or ${r.prop}, not both`
    );
  });
}
P.getGridGap = DB;
function DB(s) {
  let e = {}, B = /^(grid-)?((row|column)-)?gap$/;
  return s.parent.walkDecls(B, ({ prop: t, value: r }) => {
    if (/^(grid-)?gap$/.test(t)) {
      let [C, , i] = N(r).nodes;
      e.row = C && N.stringify(C), e.column = i ? N.stringify(i) : e.row;
    }
    /^(grid-)?row-gap$/.test(t) && (e.row = r), /^(grid-)?column-gap$/.test(t) && (e.column = r);
  }), e;
}
function js(s) {
  if (!s)
    return [];
  let e = N(s), B, t;
  return e.walk((r) => {
    r.type === "word" && /min|max/g.test(r.value) ? B = r.value : r.value.includes("px") && (t = parseInt(r.value.replace(/\D/g, "")));
  }), [B, t];
}
function Vu(s, e) {
  let B, t = gr(s), r = gr(e);
  if (t[0].length < r[0].length)
    return !1;
  if (t[0].length > r[0].length) {
    let C = t[0].reduce((i, [n], a) => {
      let o = r[0][0][0];
      return n === o ? a : !1;
    }, !1);
    C && (B = r[0].every((i, n) => i.every(
      (a, o) => (
        // because selectorA has more space elements, we need to slice
        // selectorA array by 'idx' number to compare them
        t[0].slice(C)[n][o] === a
      )
    )));
  } else
    B = r.some((C) => C.every((i, n) => i.every(
      (a, o) => t[0][n][o] === a
    )));
  return B;
}
P.inheritGridGap = Dn;
function Dn(s, e) {
  let B = s.parent, t = xe(B), r = B.root(), C = gr(B.selector);
  if (Object.keys(e).length > 0)
    return !1;
  let [i] = js(t.params), n = C[0], a = Fu(n[n.length - 1][0]), o = new RegExp(`(${a}$)|(${a}[,.])`), u;
  return r.walkRules(o, (l) => {
    let c;
    if (B.toString() === l.toString())
      return !1;
    if (l.walkDecls("grid-gap", (w) => c = DB(w)), !c || Object.keys(c).length === 0 || !Vu(B.selector, l.selector))
      return !0;
    let h = xe(l);
    if (h) {
      if (js(h.params)[0] === i)
        return u = c, !0;
    } else
      return u = c, !0;
  }), u && Object.keys(u).length > 0 ? u : !1;
}
P.warnGridGap = Ku;
function Ku({ decl: s, gap: e, hasColumns: B, result: t }) {
  let r = e.row && e.column;
  !B && (r || e.column && !e.row) && (delete e.column, s.warn(
    t,
    "Can not implement grid-gap without grid-template-columns"
  ));
}
function Ps(s) {
  return N(s).nodes.reduce((B, t) => {
    if (t.type === "function" && t.value === "repeat") {
      let r = "count", [C, i] = t.nodes.reduce(
        (n, a) => a.type === "word" && r === "count" ? (n[0] = Math.abs(parseInt(a.value)), n) : a.type === "div" && a.value === "," ? (r = "value", n) : (r === "value" && (n[1] += N.stringify(a)), n),
        [0, ""]
      );
      if (C)
        for (let n = 0; n < C; n++)
          B.push(i);
      return B;
    }
    return t.type === "space" ? B : B.concat(N.stringify(t));
  }, []);
}
P.autoplaceGridItems = Qu;
function Qu(s, e, B, t = "row") {
  let { parent: r } = s, C = r.nodes.find((c) => c.prop === "grid-template-rows"), i = Ps(C.value), n = Ps(s.value), a = i.map((c, h) => Array.from(
    { length: n.length },
    (w, b) => b + h * n.length + 1
  ).join(" ")), o = Hr({ gap: B, rows: a }), u = Object.keys(o), l = u.map((c) => o[c]);
  t.includes("column") && (l = l.sort((c, h) => c.column.start - h.column.start)), l.reverse().forEach((c, h) => {
    let { column: w, row: b } = c, p = r.selectors.map((d) => d + ` > *:nth-child(${u.length - h})`).join(", "), f = r.clone().removeAll();
    f.selector = p, f.append({ prop: "-ms-grid-row", value: b.start }), f.append({ prop: "-ms-grid-column", value: w.start }), r.after(f);
  });
}
let Gs = Tr, Wu = V, zu = P.insertAreas;
const qu = /(^|[^-])linear-gradient\(\s*(top|left|right|bottom)/i, Yu = /(^|[^-])radial-gradient\(\s*\d+(\w*|%)\s+\d+(\w*|%)\s*,/i, Xu = /(!\s*)?autoprefixer:\s*ignore\s+next/i, Zu = /(!\s*)?autoprefixer\s*grid:\s*(on|off|(no-)?autoplace)/i, $u = [
  "width",
  "height",
  "min-width",
  "max-width",
  "min-height",
  "max-height",
  "inline-size",
  "min-inline-size",
  "max-inline-size",
  "block-size",
  "min-block-size",
  "max-block-size"
];
function PB(s) {
  return s.parent.some(
    (e) => e.prop === "grid-template" || e.prop === "grid-template-areas"
  );
}
function _u(s) {
  let e = s.parent.some((t) => t.prop === "grid-template-rows"), B = s.parent.some((t) => t.prop === "grid-template-columns");
  return e && B;
}
let e0 = class {
  constructor(e) {
    this.prefixes = e;
  }
  /**
   * Add necessary prefixes
   */
  add(e, B) {
    let t = this.prefixes.add["@resolution"], r = this.prefixes.add["@keyframes"], C = this.prefixes.add["@viewport"], i = this.prefixes.add["@supports"];
    e.walkAtRules((o) => {
      if (o.name === "keyframes") {
        if (!this.disabled(o, B))
          return r && r.process(o);
      } else if (o.name === "viewport") {
        if (!this.disabled(o, B))
          return C && C.process(o);
      } else if (o.name === "supports") {
        if (this.prefixes.options.supports !== !1 && !this.disabled(o, B))
          return i.process(o);
      } else if (o.name === "media" && o.params.includes("-resolution") && !this.disabled(o, B))
        return t && t.process(o);
    }), e.walkRules((o) => {
      if (!this.disabled(o, B))
        return this.prefixes.add.selectors.map((u) => u.process(o, B));
    });
    function n(o) {
      return o.parent.nodes.some((u) => {
        if (u.type !== "decl") return !1;
        let l = u.prop === "display" && /(inline-)?grid/.test(u.value), c = u.prop.startsWith("grid-template"), h = /^grid-([A-z]+-)?gap/.test(u.prop);
        return l || c || h;
      });
    }
    let a = this.gridStatus(e, B) && this.prefixes.add["grid-area"] && this.prefixes.add["grid-area"].prefixes;
    return e.walkDecls((o) => {
      if (this.disabledDecl(o, B)) return;
      let u = o.parent, l = o.prop, c = o.value;
      if (l === "color-adjust")
        u.every((w) => w.prop !== "print-color-adjust") && B.warn(
          "Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated.",
          { node: o }
        );
      else if (l === "grid-row-span") {
        B.warn(
          "grid-row-span is not part of final Grid Layout. Use grid-row.",
          { node: o }
        );
        return;
      } else if (l === "grid-column-span") {
        B.warn(
          "grid-column-span is not part of final Grid Layout. Use grid-column.",
          { node: o }
        );
        return;
      } else if (l === "display" && c === "box") {
        B.warn(
          "You should write display: flex by final spec instead of display: box",
          { node: o }
        );
        return;
      } else if (l === "text-emphasis-position")
        (c === "under" || c === "over") && B.warn(
          "You should use 2 values for text-emphasis-position For example, `under left` instead of just `under`.",
          { node: o }
        );
      else if (l === "text-decoration-skip" && c === "ink")
        B.warn(
          "Replace text-decoration-skip: ink to text-decoration-skip-ink: auto, because spec had been changed",
          { node: o }
        );
      else {
        if (a && this.gridStatus(o, B))
          if (o.value === "subgrid" && B.warn("IE does not support subgrid", { node: o }), /^(align|justify|place)-items$/.test(l) && n(o)) {
            let w = l.replace("-items", "-self");
            B.warn(
              `IE does not support ${l} on grid containers. Try using ${w} on child elements instead: ${o.parent.selector} > * { ${w}: ${o.value} }`,
              { node: o }
            );
          } else if (/^(align|justify|place)-content$/.test(l) && n(o))
            B.warn(`IE does not support ${o.prop} on grid containers`, {
              node: o
            });
          else if (l === "display" && o.value === "contents") {
            B.warn(
              "Please do not use display: contents; if you have grid setting enabled",
              { node: o }
            );
            return;
          } else if (o.prop === "grid-gap") {
            let w = this.gridStatus(o, B);
            w === "autoplace" && !_u(o) && !PB(o) ? B.warn(
              "grid-gap only works if grid-template(-areas) is being used or both rows and columns have been declared and cells have not been manually placed inside the explicit grid",
              { node: o }
            ) : (w === !0 || w === "no-autoplace") && !PB(o) && B.warn(
              "grid-gap only works if grid-template(-areas) is being used",
              { node: o }
            );
          } else if (l === "grid-auto-columns") {
            B.warn("grid-auto-columns is not supported by IE", {
              node: o
            });
            return;
          } else if (l === "grid-auto-rows") {
            B.warn("grid-auto-rows is not supported by IE", { node: o });
            return;
          } else if (l === "grid-auto-flow") {
            let w = u.some((p) => p.prop === "grid-template-rows"), b = u.some((p) => p.prop === "grid-template-columns");
            PB(o) ? B.warn("grid-auto-flow is not supported by IE", {
              node: o
            }) : c.includes("dense") ? B.warn("grid-auto-flow: dense is not supported by IE", {
              node: o
            }) : !w && !b && B.warn(
              "grid-auto-flow works only if grid-template-rows and grid-template-columns are present in the same rule",
              { node: o }
            );
            return;
          } else if (c.includes("auto-fit")) {
            B.warn("auto-fit value is not supported by IE", {
              node: o,
              word: "auto-fit"
            });
            return;
          } else if (c.includes("auto-fill")) {
            B.warn("auto-fill value is not supported by IE", {
              node: o,
              word: "auto-fill"
            });
            return;
          } else l.startsWith("grid-template") && c.includes("[") && B.warn(
            "Autoprefixer currently does not support line names. Try using grid-template-areas instead.",
            { node: o, word: "[" }
          );
        if (c.includes("radial-gradient"))
          if (Yu.test(o.value))
            B.warn(
              "Gradient has outdated direction syntax. New syntax is like `closest-side at 0 0` instead of `0 0, closest-side`.",
              { node: o }
            );
          else {
            let w = Gs(c);
            for (let b of w.nodes)
              if (b.type === "function" && b.value === "radial-gradient")
                for (let p of b.nodes)
                  p.type === "word" && (p.value === "cover" ? B.warn(
                    "Gradient has outdated direction syntax. Replace `cover` to `farthest-corner`.",
                    { node: o }
                  ) : p.value === "contain" && B.warn(
                    "Gradient has outdated direction syntax. Replace `contain` to `closest-side`.",
                    { node: o }
                  ));
          }
        c.includes("linear-gradient") && qu.test(c) && B.warn(
          "Gradient has outdated direction syntax. New syntax is like `to left` instead of `right`.",
          { node: o }
        );
      }
      $u.includes(o.prop) && (o.value.includes("-fill-available") || (o.value.includes("fill-available") ? B.warn(
        "Replace fill-available to stretch, because spec had been changed",
        { node: o }
      ) : o.value.includes("fill") && Gs(c).nodes.some((b) => b.type === "word" && b.value === "fill") && B.warn(
        "Replace fill to stretch, because spec had been changed",
        { node: o }
      )));
      let h;
      if (o.prop === "transition" || o.prop === "transition-property")
        return this.prefixes.transition.add(o, B);
      if (o.prop === "align-self") {
        if (this.displayType(o) !== "grid" && this.prefixes.options.flexbox !== !1 && (h = this.prefixes.add["align-self"], h && h.prefixes && h.process(o)), this.gridStatus(o, B) !== !1 && (h = this.prefixes.add["grid-row-align"], h && h.prefixes))
          return h.process(o, B);
      } else if (o.prop === "justify-self") {
        if (this.gridStatus(o, B) !== !1 && (h = this.prefixes.add["grid-column-align"], h && h.prefixes))
          return h.process(o, B);
      } else if (o.prop === "place-self") {
        if (h = this.prefixes.add["place-self"], h && h.prefixes && this.gridStatus(o, B) !== !1)
          return h.process(o, B);
      } else if (h = this.prefixes.add[o.prop], h && h.prefixes)
        return h.process(o, B);
    }), this.gridStatus(e, B) && zu(e, this.disabled), e.walkDecls((o) => {
      if (this.disabledValue(o, B)) return;
      let u = this.prefixes.unprefixed(o.prop), l = this.prefixes.values("add", u);
      if (Array.isArray(l))
        for (let c of l)
          c.process && c.process(o, B);
      Wu.save(this.prefixes, o);
    });
  }
  /**
   * Check for control comment and global options
   */
  disabled(e, B) {
    if (!e) return !1;
    if (e._autoprefixerDisabled !== void 0)
      return e._autoprefixerDisabled;
    if (e.parent) {
      let r = e.prev();
      if (r && r.type === "comment" && Xu.test(r.text))
        return e._autoprefixerDisabled = !0, e._autoprefixerSelfDisabled = !0, !0;
    }
    let t = null;
    if (e.nodes) {
      let r;
      e.each((C) => {
        C.type === "comment" && /(!\s*)?autoprefixer:\s*(off|on)/i.test(C.text) && (typeof r < "u" ? B.warn(
          "Second Autoprefixer control comment was ignored. Autoprefixer applies control comment to whole block, not to next rules.",
          { node: C }
        ) : r = /on/i.test(C.text));
      }), r !== void 0 && (t = !r);
    }
    if (!e.nodes || t === null)
      if (e.parent) {
        let r = this.disabled(e.parent, B);
        e.parent._autoprefixerSelfDisabled === !0 ? t = !1 : t = r;
      } else
        t = !1;
    return e._autoprefixerDisabled = t, t;
  }
  /**
   * Check for grid/flexbox options.
   */
  disabledDecl(e, B) {
    if (e.type === "decl" && this.gridStatus(e, B) === !1 && (e.prop.includes("grid") || e.prop === "justify-items"))
      return !0;
    if (e.type === "decl" && this.prefixes.options.flexbox === !1) {
      let t = ["order", "justify-content", "align-items", "align-content"];
      if (e.prop.includes("flex") || t.includes(e.prop))
        return !0;
    }
    return this.disabled(e, B);
  }
  /**
   * Check for grid/flexbox options.
   */
  disabledValue(e, B) {
    return this.gridStatus(e, B) === !1 && e.type === "decl" && e.prop === "display" && e.value.includes("grid") || this.prefixes.options.flexbox === !1 && e.type === "decl" && e.prop === "display" && e.value.includes("flex") || e.type === "decl" && e.prop === "content" ? !0 : this.disabled(e, B);
  }
  /**
   * Is it flebox or grid rule
   */
  displayType(e) {
    for (let B of e.parent.nodes)
      if (B.prop === "display") {
        if (B.value.includes("flex"))
          return "flex";
        if (B.value.includes("grid"))
          return "grid";
      }
    return !1;
  }
  /**
   * Set grid option via control comment
   */
  gridStatus(e, B) {
    if (!e) return !1;
    if (e._autoprefixerGridStatus !== void 0)
      return e._autoprefixerGridStatus;
    let t = null;
    if (e.nodes) {
      let r;
      e.each((C) => {
        if (C.type === "comment" && Zu.test(C.text)) {
          let i = /:\s*autoplace/i.test(C.text), n = /no-autoplace/i.test(C.text);
          typeof r < "u" ? B.warn(
            "Second Autoprefixer grid control comment was ignored. Autoprefixer applies control comments to the whole block, not to the next rules.",
            { node: C }
          ) : i ? r = "autoplace" : n ? r = !0 : r = /on/i.test(C.text);
        }
      }), r !== void 0 && (t = r);
    }
    if (e.type === "atrule" && e.name === "supports") {
      let r = e.params;
      r.includes("grid") && r.includes("auto") && (t = !1);
    }
    if (!e.nodes || t === null)
      if (e.parent) {
        let r = this.gridStatus(e.parent, B);
        e.parent._autoprefixerSelfDisabled === !0 ? t = !1 : t = r;
      } else typeof this.prefixes.options.grid < "u" ? t = this.prefixes.options.grid : typeof process.env.AUTOPREFIXER_GRID < "u" ? process.env.AUTOPREFIXER_GRID === "autoplace" ? t = "autoplace" : t = !0 : t = !1;
    return e._autoprefixerGridStatus = t, t;
  }
  /**
   * Normalize spaces in cascade declaration group
   */
  reduceSpaces(e) {
    let B = !1;
    if (this.prefixes.group(e).up(() => (B = !0, !0)), B)
      return;
    let t = e.raw("before").split(`
`), r = t[t.length - 1].length, C = !1;
    this.prefixes.group(e).down((i) => {
      t = i.raw("before").split(`
`);
      let n = t.length - 1;
      t[n].length > r && (C === !1 && (C = t[n].length - r), t[n] = t[n].slice(0, -C), i.raws.before = t.join(`
`));
    });
  }
  /**
   * Remove unnecessary pefixes
   */
  remove(e, B) {
    let t = this.prefixes.remove["@resolution"];
    return e.walkAtRules((r, C) => {
      this.prefixes.remove[`@${r.name}`] ? this.disabled(r, B) || r.parent.removeChild(C) : r.name === "media" && r.params.includes("-resolution") && t && t.clean(r);
    }), e.walkRules((r, C) => {
      if (!this.disabled(r, B)) {
        for (let i of this.prefixes.remove.selectors)
          if (i.check(r)) {
            r.parent.removeChild(C);
            return;
          }
      }
    }), e.walkDecls((r, C) => {
      if (this.disabled(r, B)) return;
      let i = r.parent, n = this.prefixes.unprefixed(r.prop);
      if ((r.prop === "transition" || r.prop === "transition-property") && this.prefixes.transition.remove(r), this.prefixes.remove[r.prop] && this.prefixes.remove[r.prop].remove) {
        let a = this.prefixes.group(r).down((o) => this.prefixes.normalize(o.prop) === n);
        if (n === "flex-flow" && (a = !0), r.prop === "-webkit-box-orient") {
          let o = { "flex-direction": !0, "flex-flow": !0 };
          if (!r.parent.some((u) => o[u.prop])) return;
        }
        if (a && !this.withHackValue(r)) {
          r.raw("before").includes(`
`) && this.reduceSpaces(r), i.removeChild(C);
          return;
        }
      }
      for (let a of this.prefixes.values("remove", n)) {
        if (!a.check || !a.check(r.value)) continue;
        if (n = a.unprefixed, this.prefixes.group(r).down((u) => u.value.includes(n))) {
          i.removeChild(C);
          return;
        }
      }
    });
  }
  /**
   * Some rare old values, which is not in standard
   */
  withHackValue(e) {
    return e.prop === "-webkit-background-clip" && e.value === "text" || // Do not remove -webkit-box-orient when -webkit-line-clamp is present.
    // https://github.com/postcss/autoprefixer/issues/1510
    e.prop === "-webkit-box-orient" && e.parent.some((B) => B.prop === "-webkit-line-clamp");
  }
};
var B0 = e0, t0 = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "1 2 3 4 5 6 7 8 9 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 gC GC J JB K D E F A B C L M G N O P KB z iC jC" }, D: { 1: "5 6 7 8 9 NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB" }, E: { 1: "F A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K D E kC NC lC mC nC" }, F: { 1: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x BC", 2: "F B C vC wC xC yC AC dC zC" }, G: { 1: "5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "E NC 0C eC 1C 2C 3C 4C" }, H: { 1: "MD" }, I: { 1: "I RD SD", 2: "GC J ND OD PD QD eC" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "CSS Feature Queries", D: !0 }, Ur = { exports: {} }, r0 = {
  1: "ls",
  // WHATWG Living Standard
  2: "rec",
  // W3C Recommendation
  3: "pr",
  // W3C Proposed Recommendation
  4: "cr",
  // W3C Candidate Recommendation
  5: "wd",
  // W3C Working Draft
  6: "other",
  // Non-W3C, but reputable
  7: "unoff"
  // Unofficial, Editor's Draft or W3C "Note"
}, s0 = {
  y: 1,
  n: 2,
  a: 4,
  p: 8,
  u: 16,
  x: 32,
  d: 64
};
const C0 = r0, Ms = s0, i0 = xr.browsers, n0 = Ar.browserVersions, a0 = Math.log(2);
function o0(s) {
  let e = Object.keys(Ms).reduce((r, C) => (s & Ms[C] && r.push(C), r), []), B = s >> 7, t = [];
  for (; B; ) {
    let r = Math.floor(Math.log(B) / a0) + 1;
    t.unshift(`#${r}`), B -= Math.pow(2, r - 1);
  }
  return e.concat(t).join(" ");
}
function pn(s) {
  let e = {
    status: C0[s.B],
    title: s.C,
    shown: s.D
  };
  return e.stats = Object.keys(s.A).reduce((B, t) => {
    let r = s.A[t];
    return B[i0[t]] = Object.keys(r).reduce(
      (C, i) => {
        let n = r[i].split(" "), a = o0(i);
        return n.forEach((o) => C[n0[o]] = a), C;
      },
      {}
    ), B;
  }, {}), e;
}
Ur.exports = pn;
Ur.exports.default = pn;
var hn = Ur.exports;
let l0 = t0, u0 = hn, Ns = u0(l0);
for (let s in Ns.stats) {
  let e = Ns.stats[s];
  for (let B in e)
    e[B];
}
let f0 = class {
  constructor(e, B) {
    this.prefix = B, this.prefixed = e.prefixed(this.prefix), this.regexp = e.regexp(this.prefix), this.prefixeds = e.possible().map((t) => [e.prefixed(t), e.regexp(t)]), this.unprefixed = e.name, this.nameRegexp = e.regexp();
  }
  /**
   * Does rule contain an unnecessary prefixed selector
   */
  check(e) {
    return !(!e.selector.includes(this.prefixed) || !e.selector.match(this.regexp) || this.isHack(e));
  }
  /**
   * Is rule a hack without unprefixed version bottom
   */
  isHack(e) {
    let B = e.parent.index(e) + 1, t = e.parent.nodes;
    for (; B < t.length; ) {
      let r = t[B].selector;
      if (!r)
        return !0;
      if (r.includes(this.unprefixed) && r.match(this.nameRegexp))
        return !1;
      let C = !1;
      for (let [i, n] of this.prefixeds)
        if (r.includes(i) && r.match(n)) {
          C = !0;
          break;
        }
      if (!C)
        return !0;
      B += 1;
    }
    return !0;
  }
};
var c0 = f0;
let { list: d0 } = Ee, D0 = c0, p0 = Lr, h0 = Nr, m0 = j, v0 = class extends p0 {
  constructor(e, B, t) {
    super(e, B, t), this.regexpCache = /* @__PURE__ */ new Map();
  }
  /**
   * Clone and add prefixes for at-rule
   */
  add(e, B) {
    let t = this.prefixeds(e);
    if (this.already(e, t, B))
      return;
    let r = this.clone(e, { selector: t[this.name][B] });
    e.parent.insertBefore(e, r);
  }
  /**
   * Is rule already prefixed before
   */
  already(e, B, t) {
    let r = e.parent.index(e) - 1;
    for (; r >= 0; ) {
      let C = e.parent.nodes[r];
      if (C.type !== "rule")
        return !1;
      let i = !1;
      for (let n in B[this.name]) {
        let a = B[this.name][n];
        if (C.selector === a) {
          if (t === n)
            return !0;
          i = !0;
          break;
        }
      }
      if (!i)
        return !1;
      r -= 1;
    }
    return !1;
  }
  /**
   * Is rule selectors need to be prefixed
   */
  check(e) {
    return e.selector.includes(this.name) ? !!e.selector.match(this.regexp()) : !1;
  }
  /**
   * Return function to fast find prefixed selector
   */
  old(e) {
    return new D0(this, e);
  }
  /**
   * All possible prefixes
   */
  possible() {
    return h0.prefixes();
  }
  /**
   * Return prefixed version of selector
   */
  prefixed(e) {
    return this.name.replace(/^(\W*)/, `$1${e}`);
  }
  /**
   * Return all possible selector prefixes
   */
  prefixeds(e) {
    if (e._autoprefixerPrefixeds) {
      if (e._autoprefixerPrefixeds[this.name])
        return e._autoprefixerPrefixeds;
    } else
      e._autoprefixerPrefixeds = {};
    let B = {};
    if (e.selector.includes(",")) {
      let r = d0.comma(e.selector).filter((C) => C.includes(this.name));
      for (let C of this.possible())
        B[C] = r.map((i) => this.replace(i, C)).join(", ");
    } else
      for (let t of this.possible())
        B[t] = this.replace(e.selector, t);
    return e._autoprefixerPrefixeds[this.name] = B, e._autoprefixerPrefixeds;
  }
  /**
   * Lazy loadRegExp for name
   */
  regexp(e) {
    if (!this.regexpCache.has(e)) {
      let B = e ? this.prefixed(e) : this.name;
      this.regexpCache.set(
        e,
        new RegExp(`(^|[^:"'=])${m0.escapeRegexp(B)}`, "gi")
      );
    }
    return this.regexpCache.get(e);
  }
  /**
   * Replace selectors by prefixed one
   */
  replace(e, B) {
    return e.replace(this.regexp(), `$1${this.prefixed(B)}`);
  }
};
var de = v0;
let g0 = de;
class mn extends g0 {
  /**
   * Return different selectors depend on prefix
   */
  prefixed(e) {
    return e === "-webkit-" ? ":-webkit-full-screen" : e === "-moz-" ? ":-moz-full-screen" : `:${e}fullscreen`;
  }
}
mn.names = [":fullscreen"];
var y0 = mn;
let w0 = de;
class vn extends w0 {
  /**
   * Add old mozilla to possible prefixes
   */
  possible() {
    return super.possible().concat(["-moz- old", "-ms- old"]);
  }
  /**
   * Return different selectors depend on prefix
   */
  prefixed(e) {
    return e === "-webkit-" ? "::-webkit-input-placeholder" : e === "-ms-" ? "::-ms-input-placeholder" : e === "-ms- old" ? ":-ms-input-placeholder" : e === "-moz- old" ? ":-moz-placeholder" : `::${e}placeholder`;
  }
}
vn.names = ["::placeholder"];
var b0 = vn;
let x0 = de;
class gn extends x0 {
  /**
   * Return different selectors depend on prefix
   */
  prefixed(e) {
    return e === "-ms-" ? ":-ms-input-placeholder" : `:${e}placeholder-shown`;
  }
}
gn.names = [":placeholder-shown"];
var A0 = gn;
let S0 = de, E0 = j;
class yn extends S0 {
  constructor(e, B, t) {
    super(e, B, t), this.prefixes && (this.prefixes = E0.uniq(this.prefixes.map(() => "-webkit-")));
  }
  /**
   * Return different selectors depend on prefix
   */
  prefixed(e) {
    return e === "-webkit-" ? "::-webkit-file-upload-button" : `::${e}file-selector-button`;
  }
}
yn.names = ["::file-selector-button"];
var k0 = yn, L = function(s) {
  let e;
  return s === "-webkit- 2009" || s === "-moz-" ? e = 2009 : s === "-ms-" ? e = 2012 : s === "-webkit-" && (e = "final"), s === "-webkit- 2009" && (s = "-webkit-"), [e, s];
};
let Ls = Ee.list, Ts = L, F0 = x, Vr = class wn extends F0 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "flex";
  }
  /**
   * Change property name for 2009 spec
   */
  prefixed(e, B) {
    let t;
    return [t, B] = Ts(B), t === 2009 ? B + "box-flex" : super.prefixed(e, B);
  }
  /**
   * Spec 2009 supports only first argument
   * Spec 2012 disallows unitless basis
   */
  set(e, B) {
    let t = Ts(B)[0];
    if (t === 2009)
      return e.value = Ls.space(e.value)[0], e.value = wn.oldValues[e.value] || e.value, super.set(e, B);
    if (t === 2012) {
      let r = Ls.space(e.value);
      r.length === 3 && r[2] === "0" && (e.value = r.slice(0, 2).concat("0px").join(" "));
    }
    return super.set(e, B);
  }
};
Vr.names = ["flex", "box-flex"];
Vr.oldValues = {
  auto: "1",
  none: "0"
};
var R0 = Vr;
let Hs = L, I0 = x;
class bn extends I0 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "order";
  }
  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(e, B) {
    let t;
    return [t, B] = Hs(B), t === 2009 ? B + "box-ordinal-group" : t === 2012 ? B + "flex-order" : super.prefixed(e, B);
  }
  /**
   * Fix value for 2009 spec
   */
  set(e, B) {
    return Hs(B)[0] === 2009 && /\d/.test(e.value) ? (e.value = (parseInt(e.value) + 1).toString(), super.set(e, B)) : super.set(e, B);
  }
}
bn.names = ["order", "flex-order", "box-ordinal-group"];
var O0 = bn;
let j0 = x;
class xn extends j0 {
  /**
   * Check is it Internet Explorer filter
   */
  check(e) {
    let B = e.value;
    return !B.toLowerCase().includes("alpha(") && !B.includes("DXImageTransform.Microsoft") && !B.includes("data:image/svg+xml");
  }
}
xn.names = ["filter"];
var P0 = xn;
let G0 = x, { isPureNumber: M0 } = j;
class An extends G0 {
  /**
   * Change repeating syntax for IE
   */
  insert(e, B, t, r) {
    if (B !== "-ms-") return super.insert(e, B, t);
    let C = this.clone(e), i = e.prop.replace(/end$/, "start"), n = B + e.prop.replace(/end$/, "span");
    if (!e.parent.some((a) => a.prop === n)) {
      if (C.prop = n, e.value.includes("span"))
        C.value = e.value.replace(/span\s/i, "");
      else {
        let a;
        if (e.parent.walkDecls(i, (o) => {
          a = o;
        }), a)
          if (M0(a.value)) {
            let o = Number(e.value) - Number(a.value) + "";
            C.value = o;
          } else
            return;
        else
          e.warn(
            r,
            `Can not prefix ${e.prop} (${i} is not found)`
          );
      }
      e.cloneBefore(C);
    }
  }
}
An.names = ["grid-row-end", "grid-column-end"];
var N0 = An;
let L0 = x;
class Sn extends L0 {
  /**
   * Don’t add prefixes for modern values.
   */
  check(e) {
    return !e.value.split(/\s+/).some((B) => {
      let t = B.toLowerCase();
      return t === "reverse" || t === "alternate-reverse";
    });
  }
}
Sn.names = ["animation", "animation-direction"];
var T0 = Sn;
let H0 = L, J0 = x;
class En extends J0 {
  /**
   * Use two properties for 2009 spec
   */
  insert(e, B, t) {
    let r;
    if ([r, B] = H0(B), r !== 2009)
      return super.insert(e, B, t);
    let C = e.value.split(/\s+/).filter((l) => l !== "wrap" && l !== "nowrap" && "wrap-reverse");
    if (C.length === 0 || e.parent.some(
      (l) => l.prop === B + "box-orient" || l.prop === B + "box-direction"
    ))
      return;
    let n = C[0], a = n.includes("row") ? "horizontal" : "vertical", o = n.includes("reverse") ? "reverse" : "normal", u = this.clone(e);
    return u.prop = B + "box-orient", u.value = a, this.needCascade(e) && (u.raws.before = this.calcBefore(t, e, B)), e.parent.insertBefore(e, u), u = this.clone(e), u.prop = B + "box-direction", u.value = o, this.needCascade(e) && (u.raws.before = this.calcBefore(t, e, B)), e.parent.insertBefore(e, u);
  }
}
En.names = ["flex-flow", "box-direction", "box-orient"];
var U0 = En;
let V0 = L, K0 = x;
class kn extends K0 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "flex";
  }
  /**
   * Return flex property for 2009 and 2012 specs
   */
  prefixed(e, B) {
    let t;
    return [t, B] = V0(B), t === 2009 ? B + "box-flex" : t === 2012 ? B + "flex-positive" : super.prefixed(e, B);
  }
}
kn.names = ["flex-grow", "flex-positive"];
var Q0 = kn;
let W0 = L, z0 = x;
class Fn extends z0 {
  /**
   * Don't add prefix for 2009 spec
   */
  set(e, B) {
    if (W0(B)[0] !== 2009)
      return super.set(e, B);
  }
}
Fn.names = ["flex-wrap"];
var q0 = Fn;
let Y0 = x, ae = P;
class Rn extends Y0 {
  /**
   * Translate grid-area to separate -ms- prefixed properties
   */
  insert(e, B, t, r) {
    if (B !== "-ms-") return super.insert(e, B, t);
    let C = ae.parse(e), [i, n] = ae.translate(C, 0, 2), [a, o] = ae.translate(C, 1, 3);
    [
      ["grid-row", i],
      ["grid-row-span", n],
      ["grid-column", a],
      ["grid-column-span", o]
    ].forEach(([u, l]) => {
      ae.insertDecl(e, u, l);
    }), ae.warnTemplateSelectorNotFound(e, r), ae.warnIfGridRowColumnExists(e, r);
  }
}
Rn.names = ["grid-area"];
var X0 = Rn;
let Z0 = x, me = P;
class In extends Z0 {
  /**
   * Translate place-self to separate -ms- prefixed properties
   */
  insert(e, B, t) {
    if (B !== "-ms-") return super.insert(e, B, t);
    if (e.parent.some((i) => i.prop === "-ms-grid-row-align"))
      return;
    let [[r, C]] = me.parse(e);
    C ? (me.insertDecl(e, "grid-row-align", r), me.insertDecl(e, "grid-column-align", C)) : (me.insertDecl(e, "grid-row-align", r), me.insertDecl(e, "grid-column-align", r));
  }
}
In.names = ["place-self"];
var $0 = In;
let _0 = x;
class On extends _0 {
  /**
   * Do not add prefix for unsupported value in IE
   */
  check(e) {
    let B = e.value;
    return !B.includes("/") && !B.includes("span");
  }
  /**
   * Return a final spec property
   */
  normalize(e) {
    return e.replace("-start", "");
  }
  /**
   * Change property name for IE
   */
  prefixed(e, B) {
    let t = super.prefixed(e, B);
    return B === "-ms-" && (t = t.replace("-start", "")), t;
  }
}
On.names = ["grid-row-start", "grid-column-start"];
var e1 = On;
let Js = L, B1 = x;
class Fe extends B1 {
  check(e) {
    return e.parent && !e.parent.some((B) => B.prop && B.prop.startsWith("grid-"));
  }
  /**
   * Return property name by final spec
   */
  normalize() {
    return "align-self";
  }
  /**
   * Change property name for 2012 specs
   */
  prefixed(e, B) {
    let t;
    return [t, B] = Js(B), t === 2012 ? B + "flex-item-align" : super.prefixed(e, B);
  }
  /**
   * Change value for 2012 spec and ignore prefix for 2009
   */
  set(e, B) {
    let t = Js(B)[0];
    if (t === 2012)
      return e.value = Fe.oldValues[e.value] || e.value, super.set(e, B);
    if (t === "final")
      return super.set(e, B);
  }
}
Fe.names = ["align-self", "flex-item-align"];
Fe.oldValues = {
  "flex-end": "end",
  "flex-start": "start"
};
var t1 = Fe;
let r1 = x, s1 = j;
class jn extends r1 {
  constructor(e, B, t) {
    super(e, B, t), this.prefixes && (this.prefixes = s1.uniq(
      this.prefixes.map((r) => r === "-ms-" ? "-webkit-" : r)
    ));
  }
}
jn.names = ["appearance"];
var C1 = jn;
let Us = L, i1 = x;
class Pn extends i1 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "flex-basis";
  }
  /**
   * Return flex property for 2012 spec
   */
  prefixed(e, B) {
    let t;
    return [t, B] = Us(B), t === 2012 ? B + "flex-preferred-size" : super.prefixed(e, B);
  }
  /**
   * Ignore 2009 spec and use flex property for 2012
   */
  set(e, B) {
    let t;
    if ([t, B] = Us(B), t === 2012 || t === "final")
      return super.set(e, B);
  }
}
Pn.names = ["flex-basis", "flex-preferred-size"];
var n1 = Pn;
let a1 = x;
class Gn extends a1 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return this.name.replace("box-image", "border");
  }
  /**
   * Return flex property for 2012 spec
   */
  prefixed(e, B) {
    let t = super.prefixed(e, B);
    return B === "-webkit-" && (t = t.replace("border", "box-image")), t;
  }
}
Gn.names = [
  "mask-border",
  "mask-border-source",
  "mask-border-slice",
  "mask-border-width",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-box-image",
  "mask-box-image-source",
  "mask-box-image-slice",
  "mask-box-image-width",
  "mask-box-image-outset",
  "mask-box-image-repeat"
];
var o1 = Gn;
let l1 = x;
class q extends l1 {
  /**
   * Prefix mask-composite for webkit
   */
  insert(e, B, t) {
    let r = e.prop === "mask-composite", C;
    r ? C = e.value.split(",") : C = e.value.match(q.regexp) || [], C = C.map((o) => o.trim()).filter((o) => o);
    let i = C.length, n;
    if (i && (n = this.clone(e), n.value = C.map((o) => q.oldValues[o] || o).join(", "), C.includes("intersect") && (n.value += ", xor"), n.prop = B + "mask-composite"), r)
      return i ? (this.needCascade(e) && (n.raws.before = this.calcBefore(t, e, B)), e.parent.insertBefore(e, n)) : void 0;
    let a = this.clone(e);
    return a.prop = B + a.prop, i && (a.value = a.value.replace(q.regexp, "")), this.needCascade(e) && (a.raws.before = this.calcBefore(t, e, B)), e.parent.insertBefore(e, a), i ? (this.needCascade(e) && (n.raws.before = this.calcBefore(t, e, B)), e.parent.insertBefore(e, n)) : e;
  }
}
q.names = ["mask", "mask-composite"];
q.oldValues = {
  add: "source-over",
  exclude: "xor",
  intersect: "source-in",
  subtract: "source-out"
};
q.regexp = new RegExp(
  `\\s+(${Object.keys(q.oldValues).join(
    "|"
  )})\\b(?!\\))\\s*(?=[,])`,
  "ig"
);
var u1 = q;
let Vs = L, f1 = x;
class Re extends f1 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "align-items";
  }
  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(e, B) {
    let t;
    return [t, B] = Vs(B), t === 2009 ? B + "box-align" : t === 2012 ? B + "flex-align" : super.prefixed(e, B);
  }
  /**
   * Change value for 2009 and 2012 specs
   */
  set(e, B) {
    let t = Vs(B)[0];
    return (t === 2009 || t === 2012) && (e.value = Re.oldValues[e.value] || e.value), super.set(e, B);
  }
}
Re.names = ["align-items", "flex-align", "box-align"];
Re.oldValues = {
  "flex-end": "end",
  "flex-start": "start"
};
var c1 = Re;
let d1 = x;
class Mn extends d1 {
  /**
   * Avoid prefixing all in IE
   */
  insert(e, B, t) {
    if (!(e.value === "all" && B === "-ms-"))
      return e.value === "contain" && (B === "-moz-" || B === "-webkit-") ? void 0 : super.insert(e, B, t);
  }
  /**
   * Change prefixed value for IE
   */
  set(e, B) {
    return B === "-ms-" && e.value === "contain" && (e.value = "element"), super.set(e, B);
  }
}
Mn.names = ["user-select"];
var D1 = Mn;
let Ks = L, p1 = x;
class Nn extends p1 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "flex-shrink";
  }
  /**
   * Return flex property for 2012 spec
   */
  prefixed(e, B) {
    let t;
    return [t, B] = Ks(B), t === 2012 ? B + "flex-negative" : super.prefixed(e, B);
  }
  /**
   * Ignore 2009 spec and use flex property for 2012
   */
  set(e, B) {
    let t;
    if ([t, B] = Ks(B), t === 2012 || t === "final")
      return super.set(e, B);
  }
}
Nn.names = ["flex-shrink", "flex-negative"];
var h1 = Nn;
let m1 = x;
class Ln extends m1 {
  /**
   * Don’t prefix some values
   */
  insert(e, B, t) {
    if (e.prop !== "break-inside")
      return super.insert(e, B, t);
    if (!(/region/i.test(e.value) || /page/i.test(e.value)))
      return super.insert(e, B, t);
  }
  /**
   * Return property name by final spec
   */
  normalize(e) {
    return e.includes("inside") ? "break-inside" : e.includes("before") ? "break-before" : "break-after";
  }
  /**
   * Change name for -webkit- and -moz- prefix
   */
  prefixed(e, B) {
    return `${B}column-${e}`;
  }
  /**
   * Change prefixed value for avoid-column and avoid-page
   */
  set(e, B) {
    return (e.prop === "break-inside" && e.value === "avoid-column" || e.value === "avoid-page") && (e.value = "avoid"), super.set(e, B);
  }
}
Ln.names = [
  "break-inside",
  "page-break-inside",
  "column-break-inside",
  "break-before",
  "page-break-before",
  "column-break-before",
  "break-after",
  "page-break-after",
  "column-break-after"
];
var v1 = Ln;
let g1 = x;
class Ie extends g1 {
  insert(e, B, t) {
    if (B === "-ms-") {
      let r = this.set(this.clone(e), B);
      this.needCascade(e) && (r.raws.before = this.calcBefore(t, e, B));
      let C = "ltr";
      return e.parent.nodes.forEach((i) => {
        i.prop === "direction" && (i.value === "rtl" || i.value === "ltr") && (C = i.value);
      }), r.value = Ie.msValues[C][e.value] || e.value, e.parent.insertBefore(e, r);
    }
    return super.insert(e, B, t);
  }
}
Ie.names = ["writing-mode"];
Ie.msValues = {
  ltr: {
    "horizontal-tb": "lr-tb",
    "vertical-lr": "tb-lr",
    "vertical-rl": "tb-rl"
  },
  rtl: {
    "horizontal-tb": "rl-tb",
    "vertical-lr": "bt-lr",
    "vertical-rl": "bt-rl"
  }
};
var y1 = Ie;
let w1 = x;
class Tn extends w1 {
  /**
   * Remove fill parameter for prefixed declarations
   */
  set(e, B) {
    return e.value = e.value.replace(/\s+fill(\s)/, "$1"), super.set(e, B);
  }
}
Tn.names = ["border-image"];
var b1 = Tn;
let Qs = L, x1 = x;
class Oe extends x1 {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "align-content";
  }
  /**
   * Change property name for 2012 spec
   */
  prefixed(e, B) {
    let t;
    return [t, B] = Qs(B), t === 2012 ? B + "flex-line-pack" : super.prefixed(e, B);
  }
  /**
   * Change value for 2012 spec and ignore prefix for 2009
   */
  set(e, B) {
    let t = Qs(B)[0];
    if (t === 2012)
      return e.value = Oe.oldValues[e.value] || e.value, super.set(e, B);
    if (t === "final")
      return super.set(e, B);
  }
}
Oe.names = ["align-content", "flex-line-pack"];
Oe.oldValues = {
  "flex-end": "end",
  "flex-start": "start",
  "space-around": "distribute",
  "space-between": "justify"
};
var A1 = Oe;
let S1 = x;
class J extends S1 {
  /**
   * Return unprefixed version of property
   */
  normalize(e) {
    return J.toNormal[e] || e;
  }
  /**
   * Change syntax, when add Mozilla prefix
   */
  prefixed(e, B) {
    return B === "-moz-" ? B + (J.toMozilla[e] || e) : super.prefixed(e, B);
  }
}
J.names = ["border-radius"];
J.toMozilla = {};
J.toNormal = {};
for (let s of ["top", "bottom"])
  for (let e of ["left", "right"]) {
    let B = `border-${s}-${e}-radius`, t = `border-radius-${s}${e}`;
    J.names.push(B), J.names.push(t), J.toMozilla[B] = t, J.toNormal[t] = B;
  }
var E1 = J;
let k1 = x;
class Hn extends k1 {
  /**
   * Return property name by spec
   */
  normalize(e) {
    return e.includes("-before") ? e.replace("-before", "-block-start") : e.replace("-after", "-block-end");
  }
  /**
   * Use old syntax for -moz- and -webkit-
   */
  prefixed(e, B) {
    return e.includes("-start") ? B + e.replace("-block-start", "-before") : B + e.replace("-block-end", "-after");
  }
}
Hn.names = [
  "border-block-start",
  "border-block-end",
  "margin-block-start",
  "margin-block-end",
  "padding-block-start",
  "padding-block-end",
  "border-before",
  "border-after",
  "margin-before",
  "margin-after",
  "padding-before",
  "padding-after"
];
var F1 = Hn;
let R1 = x, {
  getGridGap: I1,
  inheritGridGap: O1,
  parseTemplate: j1,
  warnGridGap: P1,
  warnMissedAreas: G1
} = P;
class Jn extends R1 {
  /**
   * Translate grid-template to separate -ms- prefixed properties
   */
  insert(e, B, t, r) {
    if (B !== "-ms-") return super.insert(e, B, t);
    if (e.parent.some((h) => h.prop === "-ms-grid-rows"))
      return;
    let C = I1(e), i = O1(e, C), { areas: n, columns: a, rows: o } = j1({
      decl: e,
      gap: i || C
    }), u = Object.keys(n).length > 0, l = !!o, c = !!a;
    return P1({
      decl: e,
      gap: C,
      hasColumns: c,
      result: r
    }), G1(n, e, r), (l && c || u) && e.cloneBefore({
      prop: "-ms-grid-rows",
      raws: {},
      value: o
    }), c && e.cloneBefore({
      prop: "-ms-grid-columns",
      raws: {},
      value: a
    }), e;
  }
}
Jn.names = ["grid-template"];
var M1 = Jn;
let N1 = x;
class Un extends N1 {
  /**
   * Return property name by spec
   */
  normalize(e) {
    return e.replace(/(margin|padding|border)-(start|end)/, "$1-inline-$2");
  }
  /**
   * Use old syntax for -moz- and -webkit-
   */
  prefixed(e, B) {
    return B + e.replace("-inline", "");
  }
}
Un.names = [
  "border-inline-start",
  "border-inline-end",
  "margin-inline-start",
  "margin-inline-end",
  "padding-inline-start",
  "padding-inline-end",
  "border-start",
  "border-end",
  "margin-start",
  "margin-end",
  "padding-start",
  "padding-end"
];
var L1 = Un;
let T1 = x;
class Vn extends T1 {
  /**
   * Do not prefix flexbox values
   */
  check(e) {
    return !e.value.includes("flex-") && e.value !== "baseline";
  }
  /**
   * Change IE property back
   */
  normalize() {
    return "align-self";
  }
  /**
   * Change property name for IE
   */
  prefixed(e, B) {
    return B + "grid-row-align";
  }
}
Vn.names = ["grid-row-align"];
var H1 = Vn;
let J1 = x;
class je extends J1 {
  /**
   * Is transform contain 3D commands
   */
  contain3d(e) {
    if (e.prop === "transform-origin")
      return !1;
    for (let B of je.functions3d)
      if (e.value.includes(`${B}(`))
        return !0;
    return !1;
  }
  /**
   * Don't add prefix for IE in keyframes
   */
  insert(e, B, t) {
    if (B === "-ms-") {
      if (!this.contain3d(e) && !this.keyframeParents(e))
        return super.insert(e, B, t);
    } else if (B === "-o-") {
      if (!this.contain3d(e))
        return super.insert(e, B, t);
    } else
      return super.insert(e, B, t);
  }
  /**
   * Recursively check all parents for @keyframes
   */
  keyframeParents(e) {
    let { parent: B } = e;
    for (; B; ) {
      if (B.type === "atrule" && B.name === "keyframes")
        return !0;
      ({ parent: B } = B);
    }
    return !1;
  }
  /**
   * Replace rotateZ to rotate for IE 9
   */
  set(e, B) {
    return e = super.set(e, B), B === "-ms-" && (e.value = e.value.replace(/rotatez/gi, "rotate")), e;
  }
}
je.names = ["transform", "transform-origin"];
je.functions3d = [
  "matrix3d",
  "translate3d",
  "translateZ",
  "scale3d",
  "scaleZ",
  "rotate3d",
  "rotateX",
  "rotateY",
  "perspective"
];
var U1 = je;
let Ws = L, V1 = x;
class Kn extends V1 {
  /**
   * Use two properties for 2009 spec
   */
  insert(e, B, t) {
    let r;
    if ([r, B] = Ws(B), r !== 2009)
      return super.insert(e, B, t);
    if (e.parent.some(
      (u) => u.prop === B + "box-orient" || u.prop === B + "box-direction"
    ))
      return;
    let i = e.value, n, a;
    i === "inherit" || i === "initial" || i === "unset" ? (n = i, a = i) : (n = i.includes("row") ? "horizontal" : "vertical", a = i.includes("reverse") ? "reverse" : "normal");
    let o = this.clone(e);
    return o.prop = B + "box-orient", o.value = n, this.needCascade(e) && (o.raws.before = this.calcBefore(t, e, B)), e.parent.insertBefore(e, o), o = this.clone(e), o.prop = B + "box-direction", o.value = a, this.needCascade(e) && (o.raws.before = this.calcBefore(t, e, B)), e.parent.insertBefore(e, o);
  }
  /**
   * Return property name by final spec
   */
  normalize() {
    return "flex-direction";
  }
  /**
   * Clean two properties for 2009 spec
   */
  old(e, B) {
    let t;
    return [t, B] = Ws(B), t === 2009 ? [B + "box-orient", B + "box-direction"] : super.old(e, B);
  }
}
Kn.names = ["flex-direction", "box-direction", "box-orient"];
var K1 = Kn;
let Q1 = x;
class Qn extends Q1 {
  /**
   * Add hack only for crisp-edges
   */
  check(e) {
    return e.value === "pixelated";
  }
  /**
   * Return property name by spec
   */
  normalize() {
    return "image-rendering";
  }
  /**
   * Change property name for IE
   */
  prefixed(e, B) {
    return B === "-ms-" ? "-ms-interpolation-mode" : super.prefixed(e, B);
  }
  /**
   * Warn on old value
   */
  process(e, B) {
    return super.process(e, B);
  }
  /**
   * Change property and value for IE
   */
  set(e, B) {
    return B !== "-ms-" ? super.set(e, B) : (e.prop = "-ms-interpolation-mode", e.value = "nearest-neighbor", e);
  }
}
Qn.names = ["image-rendering", "interpolation-mode"];
var W1 = Qn;
let z1 = x, q1 = j;
class Wn extends z1 {
  constructor(e, B, t) {
    super(e, B, t), this.prefixes && (this.prefixes = q1.uniq(
      this.prefixes.map((r) => r === "-ms-" ? "-webkit-" : r)
    ));
  }
}
Wn.names = ["backdrop-filter"];
var Y1 = Wn;
let X1 = x, Z1 = j;
class zn extends X1 {
  constructor(e, B, t) {
    super(e, B, t), this.prefixes && (this.prefixes = Z1.uniq(
      this.prefixes.map((r) => r === "-ms-" ? "-webkit-" : r)
    ));
  }
  check(e) {
    return e.value.toLowerCase() === "text";
  }
}
zn.names = ["background-clip"];
var $1 = zn;
let _1 = x;
const ef = [
  "none",
  "underline",
  "overline",
  "line-through",
  "blink",
  "inherit",
  "initial",
  "unset"
];
class qn extends _1 {
  /**
   * Do not add prefixes for basic values.
   */
  check(e) {
    return e.value.split(/\s+/).some((B) => !ef.includes(B));
  }
}
qn.names = ["text-decoration"];
var Bf = qn;
let zs = L, tf = x;
class Pe extends tf {
  /**
   * Return property name by final spec
   */
  normalize() {
    return "justify-content";
  }
  /**
   * Change property name for 2009 and 2012 specs
   */
  prefixed(e, B) {
    let t;
    return [t, B] = zs(B), t === 2009 ? B + "box-pack" : t === 2012 ? B + "flex-pack" : super.prefixed(e, B);
  }
  /**
   * Change value for 2009 and 2012 specs
   */
  set(e, B) {
    let t = zs(B)[0];
    if (t === 2009 || t === 2012) {
      let r = Pe.oldValues[e.value] || e.value;
      if (e.value = r, t !== 2009 || r !== "distribute")
        return super.set(e, B);
    } else if (t === "final")
      return super.set(e, B);
  }
}
Pe.names = ["justify-content", "flex-pack", "box-pack"];
Pe.oldValues = {
  "flex-end": "end",
  "flex-start": "start",
  "space-around": "distribute",
  "space-between": "justify"
};
var rf = Pe;
let sf = x;
class Yn extends sf {
  /**
   * Duplication parameter for -webkit- browsers
   */
  set(e, B) {
    let t = e.value.toLowerCase();
    return B === "-webkit-" && !t.includes(" ") && t !== "contain" && t !== "cover" && (e.value = e.value + " " + e.value), super.set(e, B);
  }
}
Yn.names = ["background-size"];
var Cf = Yn;
let nf = x, GB = P;
class Xn extends nf {
  /**
   * Translate grid-row / grid-column to separate -ms- prefixed properties
   */
  insert(e, B, t) {
    if (B !== "-ms-") return super.insert(e, B, t);
    let r = GB.parse(e), [C, i] = GB.translate(r, 0, 1);
    r[0] && r[0].includes("span") && (i = r[0].join("").replace(/\D/g, "")), [
      [e.prop, C],
      [`${e.prop}-span`, i]
    ].forEach(([a, o]) => {
      GB.insertDecl(e, a, o);
    });
  }
}
Xn.names = ["grid-row", "grid-column"];
var af = Xn;
let of = x, {
  autoplaceGridItems: lf,
  getGridGap: uf,
  inheritGridGap: ff,
  prefixTrackProp: qs,
  prefixTrackValue: cf
} = P, df = B0;
class Zn extends of {
  insert(e, B, t, r) {
    if (B !== "-ms-") return super.insert(e, B, t);
    let { parent: C, prop: i, value: n } = e, a = i.includes("rows"), o = i.includes("columns"), u = C.some(
      (d) => d.prop === "grid-template" || d.prop === "grid-template-areas"
    );
    if (u && a)
      return !1;
    let l = new df({ options: {} }), c = l.gridStatus(C, r), h = uf(e);
    h = ff(e, h) || h;
    let w = a ? h.row : h.column;
    (c === "no-autoplace" || c === !0) && !u && (w = null);
    let b = cf({
      gap: w,
      value: n
    });
    e.cloneBefore({
      prop: qs({ prefix: B, prop: i }),
      value: b
    });
    let p = C.nodes.find((d) => d.prop === "grid-auto-flow"), f = "row";
    if (p && !l.disabled(p, r) && (f = p.value.trim()), c === "autoplace") {
      let d = C.nodes.find((m) => m.prop === "grid-template-rows");
      if (!d && u)
        return;
      if (!d && !u) {
        e.warn(
          r,
          "Autoplacement does not work without grid-template-rows property"
        );
        return;
      }
      !C.nodes.find((m) => m.prop === "grid-template-columns") && !u && e.warn(
        r,
        "Autoplacement does not work without grid-template-columns property"
      ), o && !u && lf(e, r, h, f);
    }
  }
  /**
   * Change IE property back
   */
  normalize(e) {
    return e.replace(/^grid-(rows|columns)/, "grid-template-$1");
  }
  /**
   * Change property name for IE
   */
  prefixed(e, B) {
    return B === "-ms-" ? qs({ prefix: B, prop: e }) : super.prefixed(e, B);
  }
}
Zn.names = [
  "grid-template-rows",
  "grid-template-columns",
  "grid-rows",
  "grid-columns"
];
var Df = Zn;
let pf = x;
class $n extends pf {
  /**
   * Do not prefix flexbox values
   */
  check(e) {
    return !e.value.includes("flex-") && e.value !== "baseline";
  }
  /**
   * Change IE property back
   */
  normalize() {
    return "justify-self";
  }
  /**
   * Change property name for IE
   */
  prefixed(e, B) {
    return B + "grid-column-align";
  }
}
$n.names = ["grid-column-align"];
var hf = $n;
let mf = x;
class _n extends mf {
  /**
   * Return property name by spec
   */
  normalize() {
    return "print-color-adjust";
  }
  /**
   * Change property name for WebKit-based browsers
   */
  prefixed(e, B) {
    return B === "-moz-" ? "color-adjust" : B + "print-color-adjust";
  }
}
_n.names = ["print-color-adjust", "color-adjust"];
var vf = _n;
let gf = x;
class ea extends gf {
  /**
   * Return property name by spec
   */
  normalize() {
    return "overscroll-behavior";
  }
  /**
   * Change property name for IE
   */
  prefixed(e, B) {
    return B + "scroll-chaining";
  }
  /**
   * Change value for IE
   */
  set(e, B) {
    return e.value === "auto" ? e.value = "chained" : (e.value === "none" || e.value === "contain") && (e.value = "none"), super.set(e, B);
  }
}
ea.names = ["overscroll-behavior", "scroll-chaining"];
var yf = ea;
let wf = x, {
  getGridGap: bf,
  inheritGridGap: xf,
  parseGridAreas: Af,
  prefixTrackProp: Sf,
  prefixTrackValue: Ys,
  warnGridGap: Ef,
  warnMissedAreas: kf
} = P;
function Ff(s) {
  return s.trim().slice(1, -1).split(/["']\s*["']?/g);
}
class Ba extends wf {
  /**
   * Translate grid-template-areas to separate -ms- prefixed properties
   */
  insert(e, B, t, r) {
    if (B !== "-ms-") return super.insert(e, B, t);
    let C = !1, i = !1, n = e.parent, a = bf(e);
    a = xf(e, a) || a, n.walkDecls(/-ms-grid-rows/, (l) => l.remove()), n.walkDecls(/grid-template-(rows|columns)/, (l) => {
      if (l.prop === "grid-template-rows") {
        i = !0;
        let { prop: c, value: h } = l;
        l.cloneBefore({
          prop: Sf({ prefix: B, prop: c }),
          value: Ys({ gap: a.row, value: h })
        });
      } else
        C = !0;
    });
    let o = Ff(e.value);
    C && !i && a.row && o.length > 1 && e.cloneBefore({
      prop: "-ms-grid-rows",
      raws: {},
      value: Ys({
        gap: a.row,
        value: `repeat(${o.length}, auto)`
      })
    }), Ef({
      decl: e,
      gap: a,
      hasColumns: C,
      result: r
    });
    let u = Af({
      gap: a,
      rows: o
    });
    return kf(u, e, r), e;
  }
}
Ba.names = ["grid-template-areas"];
var Rf = Ba;
let If = x;
class ta extends If {
  set(e, B) {
    return B === "-webkit-" && (e.value = e.value.replace(/\s*(right|left)\s*/i, "")), super.set(e, B);
  }
}
ta.names = ["text-emphasis-position"];
var Of = ta;
let jf = x;
class ra extends jf {
  /**
   * Change prefix for ink value
   */
  set(e, B) {
    return e.prop === "text-decoration-skip-ink" && e.value === "auto" ? (e.prop = B + "text-decoration-skip", e.value = "ink", e) : super.set(e, B);
  }
}
ra.names = [
  "text-decoration-skip-ink",
  "text-decoration-skip"
];
var Pf = ra, Gf = {
  wrap: sa,
  limit: Ca,
  validate: ia,
  test: Kr,
  curry: Mf,
  name: na
};
function sa(s, e, B) {
  var t = e - s;
  return ((B - s) % t + t) % t + s;
}
function Ca(s, e, B) {
  return Math.max(s, Math.min(e, B));
}
function ia(s, e, B, t, r) {
  if (!Kr(s, e, B, t, r))
    throw new Error(B + " is outside of range [" + s + "," + e + ")");
  return B;
}
function Kr(s, e, B, t, r) {
  return !(B < s || B > e || r && B === e || t && B === s);
}
function na(s, e, B, t) {
  return (B ? "(" : "[") + s + "," + e + (t ? ")" : "]");
}
function Mf(s, e, B, t) {
  var r = na.bind(null, s, e, B, t);
  return {
    wrap: sa.bind(null, s, e),
    limit: Ca.bind(null, s, e),
    validate: function(C) {
      return ia(s, e, C, B, t);
    },
    test: function(C) {
      return Kr(s, e, C, B, t);
    },
    toString: r,
    name: r
  };
}
let MB = Tr, Nf = Gf, Lf = ke, Tf = V, Hf = j, Xs = /top|left|right|bottom/gi;
class ee extends Tf {
  /**
   * Do not add non-webkit prefixes for list-style and object
   */
  add(e, B) {
    let t = e.prop;
    if (t.includes("mask")) {
      if (B === "-webkit-" || B === "-webkit- old")
        return super.add(e, B);
    } else if (t === "list-style" || t === "list-style-image" || t === "content") {
      if (B === "-webkit-" || B === "-webkit- old")
        return super.add(e, B);
    } else
      return super.add(e, B);
  }
  /**
   * Get div token from exists parameters
   */
  cloneDiv(e) {
    for (let B of e)
      if (B.type === "div" && B.value === ",")
        return B;
    return { after: " ", type: "div", value: "," };
  }
  /**
   * Change colors syntax to old webkit
   */
  colorStops(e) {
    let B = [];
    for (let t = 0; t < e.length; t++) {
      let r, C = e[t], i;
      if (t === 0)
        continue;
      let n = MB.stringify(C[0]);
      C[1] && C[1].type === "word" ? r = C[1].value : C[2] && C[2].type === "word" && (r = C[2].value);
      let a;
      t === 1 && (!r || r === "0%") ? a = `from(${n})` : t === e.length - 1 && (!r || r === "100%") ? a = `to(${n})` : r ? a = `color-stop(${r}, ${n})` : a = `color-stop(${n})`;
      let o = C[C.length - 1];
      e[t] = [{ type: "word", value: a }], o.type === "div" && o.value === "," && (i = e[t].push(o)), B.push(i);
    }
    return B;
  }
  /**
   * Change new direction to old
   */
  convertDirection(e) {
    return e.length > 0 && (e[0].value === "to" ? this.fixDirection(e) : e[0].value.includes("deg") ? this.fixAngle(e) : this.isRadial(e) && this.fixRadial(e)), e;
  }
  /**
   * Add 90 degrees
   */
  fixAngle(e) {
    let B = e[0].value;
    B = parseFloat(B), B = Math.abs(450 - B) % 360, B = this.roundFloat(B, 3), e[0].value = `${B}deg`;
  }
  /**
   * Replace `to top left` to `bottom right`
   */
  fixDirection(e) {
    e.splice(0, 2);
    for (let B of e) {
      if (B.type === "div")
        break;
      B.type === "word" && (B.value = this.revertDirection(B.value));
    }
  }
  /**
   * Fix radial direction syntax
   */
  fixRadial(e) {
    let B = [], t = [], r, C, i, n, a;
    for (n = 0; n < e.length - 2; n++)
      if (r = e[n], C = e[n + 1], i = e[n + 2], r.type === "space" && C.value === "at" && i.type === "space") {
        a = n + 3;
        break;
      } else
        B.push(r);
    let o;
    for (n = a; n < e.length; n++)
      if (e[n].type === "div") {
        o = e[n];
        break;
      } else
        t.push(e[n]);
    e.splice(0, n, ...t, o, ...B);
  }
  /**
   * Look for at word
   */
  isRadial(e) {
    let B = "before";
    for (let t of e)
      if (B === "before" && t.type === "space")
        B = "at";
      else if (B === "at" && t.value === "at")
        B = "after";
      else {
        if (B === "after" && t.type === "space")
          return !0;
        if (t.type === "div")
          break;
        B = "before";
      }
    return !1;
  }
  /**
   * Replace old direction to new
   */
  newDirection(e) {
    if (e[0].value === "to" || (Xs.lastIndex = 0, !Xs.test(e[0].value)))
      return e;
    e.unshift(
      {
        type: "word",
        value: "to"
      },
      {
        type: "space",
        value: " "
      }
    );
    for (let B = 2; B < e.length && e[B].type !== "div"; B++)
      e[B].type === "word" && (e[B].value = this.revertDirection(e[B].value));
    return e;
  }
  /**
   * Normalize angle
   */
  normalize(e, B) {
    if (!e[0]) return e;
    if (/-?\d+(.\d+)?grad/.test(e[0].value))
      e[0].value = this.normalizeUnit(e[0].value, 400);
    else if (/-?\d+(.\d+)?rad/.test(e[0].value))
      e[0].value = this.normalizeUnit(e[0].value, 2 * Math.PI);
    else if (/-?\d+(.\d+)?turn/.test(e[0].value))
      e[0].value = this.normalizeUnit(e[0].value, 1);
    else if (e[0].value.includes("deg")) {
      let t = parseFloat(e[0].value);
      t = Nf.wrap(0, 360, t), e[0].value = `${t}deg`;
    }
    if (B === "linear-gradient" || B === "repeating-linear-gradient") {
      let t = e[0].value;
      t === "0deg" || t === "0" ? e = this.replaceFirst(e, "to", " ", "top") : t === "90deg" ? e = this.replaceFirst(e, "to", " ", "right") : t === "180deg" ? e = this.replaceFirst(e, "to", " ", "bottom") : t === "270deg" && (e = this.replaceFirst(e, "to", " ", "left"));
    }
    return e;
  }
  /**
   * Convert angle unit to deg
   */
  normalizeUnit(e, B) {
    return `${parseFloat(e) / B * 360}deg`;
  }
  /**
   * Remove old WebKit gradient too
   */
  old(e) {
    if (e === "-webkit-") {
      let B;
      this.name === "linear-gradient" ? B = "linear" : this.name === "repeating-linear-gradient" ? B = "repeating-linear" : this.name === "repeating-radial-gradient" ? B = "repeating-radial" : B = "radial";
      let t = "-gradient", r = Hf.regexp(
        `-webkit-(${B}-gradient|gradient\\(\\s*${B})`,
        !1
      );
      return new Lf(this.name, e + this.name, t, r);
    } else
      return super.old(e);
  }
  /**
   * Change direction syntax to old webkit
   */
  oldDirection(e) {
    let B = this.cloneDiv(e[0]);
    if (e[0][0].value !== "to")
      return e.unshift([
        { type: "word", value: ee.oldDirections.bottom },
        B
      ]);
    {
      let t = [];
      for (let C of e[0].slice(2))
        C.type === "word" && t.push(C.value.toLowerCase());
      t = t.join(" ");
      let r = ee.oldDirections[t] || t;
      return e[0] = [{ type: "word", value: r }, B], e[0];
    }
  }
  /**
   * Convert to old webkit syntax
   */
  oldWebkit(e) {
    let { nodes: B } = e, t = MB.stringify(e.nodes);
    if (this.name !== "linear-gradient" || B[0] && B[0].value.includes("deg") || t.includes("px") || t.includes("-corner") || t.includes("-side"))
      return !1;
    let r = [[]];
    for (let C of B)
      r[r.length - 1].push(C), C.type === "div" && C.value === "," && r.push([]);
    this.oldDirection(r), this.colorStops(r), e.nodes = [];
    for (let C of r)
      e.nodes = e.nodes.concat(C);
    return e.nodes.unshift(
      { type: "word", value: "linear" },
      this.cloneDiv(e.nodes)
    ), e.value = "-webkit-gradient", !0;
  }
  /**
   * Change degrees for webkit prefix
   */
  replace(e, B) {
    let t = MB(e);
    for (let r of t.nodes) {
      let C = this.name;
      if (r.type === "function" && r.value === C)
        if (r.nodes = this.newDirection(r.nodes), r.nodes = this.normalize(r.nodes, C), B === "-webkit- old") {
          if (!this.oldWebkit(r))
            return !1;
        } else
          r.nodes = this.convertDirection(r.nodes), r.value = B + r.value;
    }
    return t.toString();
  }
  /**
   * Replace first token
   */
  replaceFirst(e, ...B) {
    return B.map((r) => r === " " ? { type: "space", value: r } : { type: "word", value: r }).concat(e.slice(1));
  }
  revertDirection(e) {
    return ee.directions[e.toLowerCase()] || e;
  }
  /**
   * Round float and save digits under dot
   */
  roundFloat(e, B) {
    return parseFloat(e.toFixed(B));
  }
}
ee.names = [
  "linear-gradient",
  "repeating-linear-gradient",
  "radial-gradient",
  "repeating-radial-gradient"
];
ee.directions = {
  bottom: "top",
  left: "right",
  right: "left",
  top: "bottom"
  // default value
};
ee.oldDirections = {
  bottom: "left top, left bottom",
  "bottom left": "right top, left bottom",
  "bottom right": "left top, right bottom",
  left: "right top, left top",
  "left bottom": "right top, left bottom",
  "left top": "right bottom, left top",
  right: "left top, right top",
  "right bottom": "left top, right bottom",
  "right top": "left bottom, right top",
  top: "left bottom, left top",
  "top left": "right bottom, left top",
  "top right": "left bottom, right top"
};
var Jf = ee;
let Uf = ke, Vf = V;
function Zs(s) {
  return new RegExp(`(^|[\\s,(])(${s}($|[\\s),]))`, "gi");
}
class aa extends Vf {
  add(e, B) {
    if (!(e.prop.includes("grid") && B !== "-webkit-"))
      return super.add(e, B);
  }
  isStretch() {
    return this.name === "stretch" || this.name === "fill" || this.name === "fill-available";
  }
  old(e) {
    let B = e + this.name;
    return this.isStretch() && (e === "-moz-" ? B = "-moz-available" : e === "-webkit-" && (B = "-webkit-fill-available")), new Uf(this.name, B, B, Zs(B));
  }
  regexp() {
    return this.regexpCache || (this.regexpCache = Zs(this.name)), this.regexpCache;
  }
  replace(e, B) {
    return B === "-moz-" && this.isStretch() ? e.replace(this.regexp(), "$1-moz-available$3") : B === "-webkit-" && this.isStretch() ? e.replace(this.regexp(), "$1-webkit-fill-available$3") : super.replace(e, B);
  }
}
aa.names = [
  "max-content",
  "min-content",
  "fit-content",
  "fill",
  "fill-available",
  "stretch"
];
var Kf = aa;
let $s = ke, Qf = V;
class oa extends Qf {
  /**
   * Different name for WebKit and Firefox
   */
  old(e) {
    return e === "-webkit-" ? new $s(this.name, "-webkit-optimize-contrast") : e === "-moz-" ? new $s(this.name, "-moz-crisp-edges") : super.old(e);
  }
  /**
   * Use non-standard name for WebKit and Firefox
   */
  replace(e, B) {
    return B === "-webkit-" ? e.replace(this.regexp(), "$1-webkit-optimize-contrast") : B === "-moz-" ? e.replace(this.regexp(), "$1-moz-crisp-edges") : super.replace(e, B);
  }
}
oa.names = ["pixelated"];
var Wf = oa;
let zf = V;
class la extends zf {
  /**
   * Use non-standard name for WebKit and Firefox
   */
  replace(e, B) {
    let t = super.replace(e, B);
    return B === "-webkit-" && (t = t.replace(/("[^"]+"|'[^']+')(\s+\d+\w)/gi, "url($1)$2")), t;
  }
}
la.names = ["image-set"];
var qf = la;
let Yf = Ee.list, Xf = V;
class ua extends Xf {
  replace(e, B) {
    return Yf.space(e).map((t) => {
      if (t.slice(0, +this.name.length + 1) !== this.name + "(")
        return t;
      let r = t.lastIndexOf(")"), C = t.slice(r + 1), i = t.slice(this.name.length + 1, r);
      if (B === "-webkit-") {
        let n = i.match(/\d*.?\d+%?/);
        n ? (i = i.slice(n[0].length).trim(), i += `, ${n[0]}`) : i += ", 0.5";
      }
      return B + this.name + "(" + i + ")" + C;
    }).join(" ");
  }
}
ua.names = ["cross-fade"];
var Zf = ua;
let $f = L, _f = ke, ec = V;
class fa extends ec {
  constructor(e, B) {
    super(e, B), e === "display-flex" && (this.name = "flex");
  }
  /**
   * Faster check for flex value
   */
  check(e) {
    return e.prop === "display" && e.value === this.name;
  }
  /**
   * Change value for old specs
   */
  old(e) {
    let B = this.prefixed(e);
    if (B)
      return new _f(this.name, B);
  }
  /**
   * Return value by spec
   */
  prefixed(e) {
    let B, t;
    return [B, e] = $f(e), B === 2009 ? this.name === "flex" ? t = "box" : t = "inline-box" : B === 2012 ? this.name === "flex" ? t = "flexbox" : t = "inline-flexbox" : B === "final" && (t = this.name), e + t;
  }
  /**
   * Add prefix to value depend on flebox spec version
   */
  replace(e, B) {
    return this.prefixed(B);
  }
}
fa.names = ["display-flex", "inline-flex"];
var Bc = fa;
let tc = V;
class ca extends tc {
  constructor(e, B) {
    super(e, B), e === "display-grid" && (this.name = "grid");
  }
  /**
   * Faster check for flex value
   */
  check(e) {
    return e.prop === "display" && e.value === this.name;
  }
}
ca.names = ["display-grid", "inline-grid"];
var rc = ca;
let sc = V;
class da extends sc {
  constructor(e, B) {
    super(e, B), e === "filter-function" && (this.name = "filter");
  }
}
da.names = ["filter", "filter-function"];
var Cc = da;
let ic = de, nc = j;
class Da extends ic {
  constructor(e, B, t) {
    super(e, B, t), this.prefixes && (this.prefixes = nc.uniq(this.prefixes.map(() => "-webkit-")));
  }
  /**
   * Return different selectors depend on prefix
   */
  prefixed(e) {
    return e === "-webkit-" ? ":-webkit-autofill" : `:${e}autofill`;
  }
}
Da.names = [":autofill"];
var ac = Da;
let E = x, Ge = de, te = V, oc = y0, lc = b0, uc = A0, fc = k0, cc = R0, dc = O0, Dc = P0, pc = N0, hc = T0, mc = U0, vc = Q0, gc = q0, yc = X0, wc = $0, bc = e1, xc = t1, Ac = C1, Sc = n1, Ec = o1, kc = u1, Fc = c1, Rc = D1, Ic = h1, Oc = v1, jc = y1, Pc = b1, Gc = A1, Mc = E1, Nc = F1, Lc = M1, Tc = L1, Hc = H1, Jc = U1, Uc = K1, Vc = W1, Kc = Y1, Qc = $1, Wc = Bf, zc = rf, qc = Cf, Yc = af, Xc = Df, Zc = hf, $c = vf, _c = yf, ed = Rf, Bd = Of, td = Pf, rd = Jf, sd = Kf, Cd = Wf, id = qf, nd = Zf, ad = Bc, od = rc, ld = Cc, ud = ac;
Ge.hack(ud);
Ge.hack(oc);
Ge.hack(lc);
Ge.hack(uc);
Ge.hack(fc);
E.hack(cc);
E.hack(dc);
E.hack(Dc);
E.hack(pc);
E.hack(hc);
E.hack(mc);
E.hack(vc);
E.hack(gc);
E.hack(yc);
E.hack(wc);
E.hack(bc);
E.hack(xc);
E.hack(Ac);
E.hack(Sc);
E.hack(Ec);
E.hack(kc);
E.hack(Fc);
E.hack(Rc);
E.hack(Ic);
E.hack(Oc);
E.hack(jc);
E.hack(Pc);
E.hack(Gc);
E.hack(Mc);
E.hack(Nc);
E.hack(Lc);
E.hack(Tc);
E.hack(Hc);
E.hack(Jc);
E.hack(Uc);
E.hack(Vc);
E.hack(Kc);
E.hack(Qc);
E.hack(Wc);
E.hack(zc);
E.hack(qc);
E.hack(Yc);
E.hack(Xc);
E.hack(Zc);
E.hack(_c);
E.hack(ed);
E.hack($c);
E.hack(Bd);
E.hack(td);
te.hack(rd);
te.hack(sd);
te.hack(Cd);
te.hack(id);
te.hack(nd);
te.hack(ad);
te.hack(od);
te.hack(ld);
var NB, _s;
function fd() {
  return _s || (_s = 1, NB = { A: { A: { 1: "F A B", 2: "K D E fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "5 6 7 8 9 jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 257: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB", 289: "GC iC jC", 292: "gC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "J" }, E: { 1: "JB D E F A B C L M G nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 33: "J kC NC", 129: "K lC mC" }, F: { 1: "0 1 2 3 4 B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x xC yC AC dC zC BC", 2: "F vC wC" }, G: { 1: "E 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 33: "NC" }, H: { 2: "MD" }, I: { 1: "GC J I OD PD QD eC RD SD", 33: "ND" }, J: { 1: "D A" }, K: { 1: "B C H AC dC BC", 2: "A" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 257: "gD" } }, B: 4, C: "CSS3 Border-radius (rounded corners)", D: !0 }), NB;
}
var LB, eC;
function cd() {
  return eC || (eC = 1, LB = { A: { A: { 1: "F A B", 2: "K D E fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC", 33: "iC jC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "J JB K D E F" }, E: { 1: "K D E F A B C L M G lC mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 33: "JB", 164: "J kC NC" }, F: { 1: "0 1 2 3 4 B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x xC yC AC dC zC BC", 2: "F vC wC" }, G: { 1: "E 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 33: "0C eC", 164: "NC" }, H: { 2: "MD" }, I: { 1: "J I QD eC RD SD", 164: "GC ND OD PD" }, J: { 1: "A", 33: "D" }, K: { 1: "B C H AC dC BC", 2: "A" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "CSS3 Box-shadow", D: !0 }), LB;
}
var TB, BC;
function dd() {
  return BC || (BC = 1, TB = { A: { A: { 1: "A B", 2: "K D E F fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J iC jC", 33: "JB K D E F A B C L M G" }, D: { 1: "5 6 7 8 9 cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB" }, E: { 1: "F A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "kC NC", 33: "K D E lC mC nC", 292: "J JB" }, F: { 1: "PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x BC", 2: "F B vC wC xC yC AC dC zC", 33: "0 1 2 3 4 C G N O P KB z LB MB NB OB" }, G: { 1: "5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 33: "E 2C 3C 4C", 164: "NC 0C eC 1C" }, H: { 2: "MD" }, I: { 1: "I", 33: "J QD eC RD SD", 164: "GC ND OD PD" }, J: { 33: "D A" }, K: { 1: "H BC", 2: "A B C AC dC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 5, C: "CSS Animation", D: !0 }), TB;
}
var HB, tC;
function Dd() {
  return tC || (tC = 1, HB = { A: { A: { 1: "A B", 2: "K D E F fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC iC jC", 33: "JB K D E F A B C L M G", 164: "J" }, D: { 1: "5 6 7 8 9 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z" }, E: { 1: "D E F A B C L M G mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 33: "K lC", 164: "J JB kC NC" }, F: { 1: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x BC", 2: "F vC wC", 33: "C", 164: "B xC yC AC dC zC" }, G: { 1: "E 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 33: "2C", 164: "NC 0C eC 1C" }, H: { 2: "MD" }, I: { 1: "I RD SD", 33: "GC J ND OD PD QD eC" }, J: { 1: "A", 33: "D" }, K: { 1: "H BC", 33: "C", 164: "A B AC dC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 5, C: "CSS3 Transitions", D: !0 }), HB;
}
var JB, rC;
function pd() {
  return rC || (rC = 1, JB = { A: { A: { 2: "fC", 8: "K D E", 129: "A B", 161: "F" }, B: { 1: "5 6 7 8 9 O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 129: "C L M G N" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC", 33: "J JB K D E F A B C L M G iC jC" }, D: { 1: "5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB" }, E: { 1: "F A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 33: "J JB K D E kC NC lC mC nC" }, F: { 1: "2 3 4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x BC", 2: "F vC wC", 33: "0 1 B C G N O P KB z xC yC AC dC zC" }, G: { 1: "5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 33: "E NC 0C eC 1C 2C 3C 4C" }, H: { 2: "MD" }, I: { 1: "I", 33: "GC J ND OD PD QD eC RD SD" }, J: { 33: "D A" }, K: { 1: "B C H AC dC BC", 2: "A" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "CSS3 2D Transforms", D: !0 }), JB;
}
var UB, sC;
function hd() {
  return sC || (sC = 1, UB = { A: { A: { 2: "K D E F fC", 132: "A B" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB K D E F iC jC", 33: "A B C L M G" }, D: { 1: "5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "J JB K D E F A B", 33: "0 1 2 3 4 C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB" }, E: { 1: "QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "kC NC", 33: "J JB K D E lC mC nC", 257: "F A B C L M G oC OC AC BC pC qC rC PC" }, F: { 1: "2 3 4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 G N O P KB z" }, G: { 1: "QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 33: "E NC 0C eC 1C 2C 3C 4C", 257: "5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC" }, H: { 2: "MD" }, I: { 1: "I", 2: "ND OD PD", 33: "GC J QD eC RD SD" }, J: { 33: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 132: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 5, C: "CSS3 3D Transforms", D: !0 }), UB;
}
var VB, CC;
function md() {
  return CC || (CC = 1, VB = { A: { A: { 1: "A B", 2: "K D E F fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC iC", 260: "0 1 2 3 4 N O P KB z LB MB NB OB PB QB RB SB TB UB", 292: "J JB K D E F A B C L M G jC" }, D: { 1: "5 6 7 8 9 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "0 1 2 3 4 A B C L M G N O P KB z", 548: "J JB K D E F" }, E: { 1: "QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "kC NC", 260: "D E F A B C L M G mC nC oC OC AC BC pC qC rC PC", 292: "K lC", 804: "J JB" }, F: { 1: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x BC", 2: "F B vC wC xC yC", 33: "C zC", 164: "AC dC" }, G: { 1: "QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 260: "E 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC", 292: "1C 2C", 804: "NC 0C eC" }, H: { 2: "MD" }, I: { 1: "I RD SD", 33: "J QD eC", 548: "GC ND OD PD" }, J: { 1: "A", 548: "D" }, K: { 1: "H BC", 2: "A B", 33: "C", 164: "AC dC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "CSS Gradients", D: !0 }), VB;
}
var KB, iC;
function vd() {
  return iC || (iC = 1, KB = { A: { A: { 1: "E F A B", 8: "K D fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "5 6 7 8 9 OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 33: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB iC jC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "J JB K D E F" }, E: { 1: "K D E F A B C L M G lC mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 33: "J JB kC NC" }, F: { 1: "0 1 2 3 4 B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x vC wC xC yC AC dC zC BC", 2: "F" }, G: { 1: "E 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 33: "NC 0C eC" }, H: { 1: "MD" }, I: { 1: "J I QD eC RD SD", 33: "GC ND OD PD" }, J: { 1: "A", 33: "D" }, K: { 1: "A B C H AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 5, C: "CSS3 Box-sizing", D: !0 }), KB;
}
var QB, nC;
function gd() {
  return nC || (nC = 1, QB = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 1028: "L M G N O P", 1346: "C" }, C: { 1: "5 6 7 8 9 UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC iC", 196: "TB", 516: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB jC" }, D: { 1: "5 6 7 8 9 mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "J JB K D E F A B C L M G N O", 33: "0 1 2 3 4 P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB" }, E: { 1: "A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB kC NC lC", 33: "K D E F mC nC" }, F: { 1: "ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB" }, G: { 1: "6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C", 33: "E 2C 3C 4C 5C" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC", 33: "RD SD" }, J: { 2: "D", 33: "A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z VD WD XD OC YD ZD aD bD cD DC EC FC dD", 33: "J TD UD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 5, C: "CSS Filter Effects", D: !0 }), QB;
}
var WB, aC;
function yd() {
  return aC || (aC = 1, WB = { A: { A: { 2: "K D E F A B fC" }, B: { 2: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC iC jC" }, D: { 2: "0 1 2 3 4 5 6 7 8 9 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, E: { 1: "A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K D E kC NC lC mC nC", 33: "F" }, F: { 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x vC wC xC yC AC dC zC BC" }, G: { 1: "7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "E NC 0C eC 1C 2C 3C 4C", 33: "5C 6C" }, H: { 2: "MD" }, I: { 2: "GC J I ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 2: "A B C H AC dC BC" }, L: { 2: "I" }, M: { 2: "y" }, N: { 2: "A B" }, O: { 2: "CC" }, P: { 2: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 2: "eD" }, R: { 2: "fD" }, S: { 2: "gD hD" } }, B: 5, C: "CSS filter() function", D: !0 }), WB;
}
var zB, oC;
function wd() {
  return oC || (oC = 1, zB = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N", 257: "O P" }, C: { 1: "5 6 7 8 9 m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B iC jC", 578: "1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l" }, D: { 1: "5 6 7 8 9 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB", 194: "gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B" }, E: { 1: "FC cC uC", 2: "J JB K D E kC NC lC mC nC", 33: "F A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC" }, F: { 1: "vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB vC wC xC yC AC dC zC BC", 194: "TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB" }, G: { 1: "FC cC", 2: "E NC 0C eC 1C 2C 3C 4C", 33: "5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z ZD aD bD cD DC EC FC dD", 2: "J", 194: "TD UD VD WD XD OC YD" }, Q: { 2: "eD" }, R: { 1: "fD" }, S: { 2: "gD hD" } }, B: 7, C: "CSS Backdrop Filter", D: !0 }), zB;
}
var qB, lC;
function bd() {
  return lC || (lC = 1, qB = { A: { A: { 2: "K D E F A B fC" }, B: { 2: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 33: "0 1 2 3 4 5 6 7 8 9 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 164: "gC GC iC jC" }, D: { 2: "0 1 2 3 4 5 6 7 8 9 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, E: { 2: "J JB K D E F A B C L M G kC NC lC mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC" }, F: { 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x vC wC xC yC AC dC zC BC" }, G: { 2: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 2: "MD" }, I: { 2: "GC J I ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 2: "A B C H AC dC BC" }, L: { 2: "I" }, M: { 33: "y" }, N: { 2: "A B" }, O: { 2: "CC" }, P: { 2: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 2: "eD" }, R: { 2: "fD" }, S: { 33: "gD hD" } }, B: 5, C: "CSS element() function", D: !0 }), qB;
}
var YB, uC;
function xd() {
  return uC || (uC = 1, YB = { A: { A: { 1: "A B", 2: "K D E F fC" }, B: { 1: "C L M G N O P", 516: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 132: "lB mB nB oB pB qB rB HC sB IC tB uB vB", 164: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB iC jC", 516: "wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a", 1028: "5 6 7 8 9 b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC" }, D: { 420: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB", 516: "5 6 7 8 9 jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, E: { 1: "A B C L M G OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 132: "F oC", 164: "D E nC", 420: "J JB K kC NC lC mC" }, F: { 1: "C AC dC zC BC", 2: "F B vC wC xC yC", 420: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB", 516: "WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x" }, G: { 1: "7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 132: "5C 6C", 164: "E 3C 4C", 420: "NC 0C eC 1C 2C" }, H: { 1: "MD" }, I: { 420: "GC J ND OD PD QD eC RD SD", 516: "I" }, J: { 420: "D A" }, K: { 1: "C AC dC BC", 2: "A B", 516: "H" }, L: { 516: "I" }, M: { 1028: "y" }, N: { 1: "A B" }, O: { 516: "CC" }, P: { 420: "J", 516: "0 1 2 3 4 z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 516: "eD" }, R: { 516: "fD" }, S: { 164: "gD hD" } }, B: 4, C: "CSS3 Multiple column layout", D: !0 }), YB;
}
var XB, fC;
function Ad() {
  return fC || (fC = 1, XB = { A: { A: { 2: "K D E F fC", 33: "A B" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 33: "C L M G N O P" }, C: { 1: "5 6 7 8 9 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 33: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB iC jC" }, D: { 1: "5 6 7 8 9 nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB" }, E: { 33: "J JB K D E F A B C L M G kC NC lC mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC" }, F: { 1: "aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB" }, G: { 33: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 2: "MD" }, I: { 1: "I", 33: "GC J ND OD PD QD eC RD SD" }, J: { 33: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 33: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 33: "J TD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 33: "gD" } }, B: 5, C: "CSS user-select: none", D: !0 }), XB;
}
var ZB, cC;
function Sd() {
  return cC || (cC = 1, ZB = { A: { A: { 2: "K D E F fC", 1028: "B", 1316: "A" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "5 6 7 8 9 NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 164: "0 gC GC J JB K D E F A B C L M G N O P KB z iC jC", 516: "1 2 3 4 LB MB" }, D: { 1: "5 6 7 8 9 OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "0 1 2 3 4 LB MB NB", 164: "J JB K D E F A B C L M G N O P KB z" }, E: { 1: "F A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 33: "D E mC nC", 164: "J JB K kC NC lC" }, F: { 1: "0 1 2 3 4 O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x BC", 2: "F B C vC wC xC yC AC dC zC", 33: "G N" }, G: { 1: "5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 33: "E 3C 4C", 164: "NC 0C eC 1C 2C" }, H: { 1: "MD" }, I: { 1: "I RD SD", 164: "GC J ND OD PD QD eC" }, J: { 1: "A", 164: "D" }, K: { 1: "H BC", 2: "A B C AC dC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "B", 292: "A" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "CSS Flexible Box Layout Module", D: !0 }), ZB;
}
var $B, dC;
function Ed() {
  return dC || (dC = 1, $B = { A: { A: { 2: "K D E fC", 260: "F", 516: "A B" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC iC jC", 33: "J JB K D E F A B C L M G" }, D: { 1: "5 6 7 8 9 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "J JB K D E F A B C L M G N O P", 33: "0 1 2 3 4 KB z" }, E: { 1: "D E F A B C L M G mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB kC NC lC", 33: "K" }, F: { 1: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC" }, G: { 1: "E 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C", 33: "2C" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC", 132: "RD SD" }, J: { 1: "A", 2: "D" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "calc() as CSS unit value", D: !0 }), $B;
}
var _B, DC;
function kd() {
  return DC || (DC = 1, _B = { A: { A: { 1: "F A B", 2: "K D E fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC iC", 36: "jC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 516: "J JB K D E F A B C L M" }, E: { 1: "D E F A B C L M G nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 772: "J JB K kC NC lC mC" }, F: { 1: "0 1 2 3 4 B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x xC yC AC dC zC BC", 2: "F vC", 36: "wC" }, G: { 1: "E 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 4: "NC 0C eC 2C", 516: "1C" }, H: { 132: "MD" }, I: { 1: "I RD SD", 36: "ND", 516: "GC J QD eC", 548: "OD PD" }, J: { 1: "D A" }, K: { 1: "A B C H AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "CSS3 Background-image options", D: !0 }), _B;
}
var et, pC;
function Fd() {
  return pC || (pC = 1, et = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "G N O P", 33: "C L M", 132: "AB BB CB DB EB FB GB HB IB I y", 164: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x" }, C: { 1: "5 6 7 8 9 iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iC jC" }, D: { 132: "AB BB CB DB EB FB GB HB IB I y KC LC MC", 164: "0 1 2 3 4 5 6 7 8 9 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x" }, E: { 16: "kC NC", 132: "CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 388: "M G qC rC PC QC", 420: "J JB K D E F A B C L lC mC nC oC OC AC BC pC" }, F: { 2: "F B C vC wC xC yC AC dC zC BC", 132: "p q r s t u v w x", 164: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o" }, G: { 16: "NC 0C eC 1C", 132: "CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 388: "HD ID JD PC QC", 420: "E 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD" }, H: { 2: "MD" }, I: { 16: "GC ND OD PD", 132: "I", 164: "J QD eC RD SD" }, J: { 164: "D A" }, K: { 16: "A B C AC dC BC", 132: "H" }, L: { 132: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 164: "CC" }, P: { 1: "4", 164: "0 1 2 3 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 164: "eD" }, R: { 164: "fD" }, S: { 1: "gD hD" } }, B: 7, C: "Background-clip: text", D: !0 }), et;
}
var Bt, hC;
function Rd() {
  return hC || (hC = 1, Bt = { A: { A: { 1: "A B", 2: "K D E F fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "5 6 7 8 9 TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC iC jC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB", 164: "J JB K D E F A B C L M" }, D: { 1: "5 6 7 8 9 hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "J JB K D E F A B C L M G", 33: "0 1 2 3 4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB", 292: "N O P KB z" }, E: { 1: "A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "D E F kC NC mC nC", 4: "J JB K lC" }, F: { 1: "UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB" }, G: { 1: "6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "E 3C 4C 5C", 4: "NC 0C eC 1C 2C" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC", 33: "RD SD" }, J: { 2: "D", 33: "A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 33: "J" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 2, C: "CSS font-feature-settings", D: !0 }), Bt;
}
var tt, mC;
function Id() {
  return mC || (mC = 1, tt = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 gC GC J JB K D E F A B C L M G N O P KB z iC jC", 194: "3 4 LB MB NB OB PB QB RB SB" }, D: { 1: "5 6 7 8 9 SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB", 33: "OB PB QB RB" }, E: { 1: "A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K kC NC lC mC", 33: "D E F nC" }, F: { 1: "0 1 2 3 4 z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C G vC wC xC yC AC dC zC BC", 33: "N O P KB" }, G: { 1: "BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C 2C 3C", 33: "E 4C 5C 6C 7C 8C 9C AD" }, H: { 2: "MD" }, I: { 1: "I SD", 2: "GC J ND OD PD QD eC", 33: "RD" }, J: { 2: "D", 33: "A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "CSS3 font-kerning", D: !0 }), tt;
}
var rt, vC;
function Od() {
  return vC || (vC = 1, rt = { A: { A: { 1: "B", 2: "K D E F A fC" }, B: { 1: "5 6 7 8 9 M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 129: "C L" }, C: { 1: "5 6 7 8 9 jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC", 260: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB", 804: "J JB K D E F A B C L M iC jC" }, D: { 1: "5 6 7 8 9 pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 260: "kB lB mB nB oB", 388: "PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB", 1412: "0 1 2 3 4 G N O P KB z LB MB NB OB", 1956: "J JB K D E F A B C L M" }, E: { 1: "QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 129: "A B C L M G oC OC AC BC pC qC rC PC", 1412: "K D E F mC nC", 1956: "J JB kC NC lC" }, F: { 1: "cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F vC wC", 260: "XB YB ZB aB bB", 388: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB", 1796: "xC yC", 1828: "B C AC dC zC BC" }, G: { 1: "QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 129: "6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC", 1412: "E 2C 3C 4C 5C", 1956: "NC 0C eC 1C" }, H: { 1828: "MD" }, I: { 1: "I", 388: "RD SD", 1956: "GC J ND OD PD QD eC" }, J: { 1412: "A", 1924: "D" }, K: { 1: "H", 2: "A", 1828: "B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "B", 2: "A" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z VD WD XD OC YD ZD aD bD cD DC EC FC dD", 260: "TD UD", 388: "J" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 260: "gD" } }, B: 4, C: "CSS3 Border images", D: !0 }), rt;
}
var st, gC;
function jd() {
  return gC || (gC = 1, st = { A: { A: { 1: "F A B", 2: "K D E fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "5 6 7 8 9 tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 33: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC iC jC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, E: { 1: "J JB K D E F A B C L M G kC NC lC mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC" }, F: { 1: "0 1 2 3 4 B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x vC wC xC yC AC dC zC BC", 2: "F" }, G: { 2: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 2: "MD" }, I: { 1: "I RD SD", 2: "GC J ND OD PD QD eC" }, J: { 1: "A", 2: "D" }, K: { 1: "C H dC BC", 16: "A B AC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 33: "gD" } }, B: 5, C: "::selection CSS pseudo-element", D: !0 }), st;
}
var Ct, yC;
function Pd() {
  return yC || (yC = 1, Ct = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 36: "C L M G N O P" }, C: { 1: "5 6 7 8 9 kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 33: "0 1 2 3 4 KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB", 130: "gC GC J JB K D E F A B C L M G N O P iC jC" }, D: { 1: "5 6 7 8 9 qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 36: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB" }, E: { 1: "B C L M G OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J kC NC", 36: "JB K D E F A lC mC nC oC" }, F: { 1: "dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 36: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB" }, G: { 1: "8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C", 36: "E eC 1C 2C 3C 4C 5C 6C 7C" }, H: { 2: "MD" }, I: { 1: "I", 36: "GC J ND OD PD QD eC RD SD" }, J: { 36: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 36: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z VD WD XD OC YD ZD aD bD cD DC EC FC dD", 36: "J TD UD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 33: "gD" } }, B: 5, C: "::placeholder CSS pseudo-element", D: !0 }), Ct;
}
var it, wC;
function Gd() {
  return wC || (wC = 1, it = { A: { A: { 2: "K D E F fC", 292: "A B" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC iC jC", 164: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB" }, D: { 1: "5 6 7 8 9 gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB" }, E: { 1: "F A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K D E kC NC lC mC nC" }, F: { 1: "TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB vC wC xC yC AC dC zC BC" }, G: { 1: "5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "E NC 0C eC 1C 2C 3C 4C" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 164: "gD" } }, B: 5, C: ":placeholder-shown CSS pseudo-class", D: !0 }), it;
}
var nt, bC;
function Md() {
  return bC || (bC = 1, nt = { A: { A: { 2: "K D E F fC", 33: "A B" }, B: { 1: "5 6 7 8 9 o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 33: "C L M G N O P", 132: "Q H R S T U V W", 260: "X Y Z a b c d e f g h i j k l m n" }, C: { 1: "5 6 7 8 9 cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB iC jC", 33: "0 1 2 3 4 K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB" }, D: { 1: "5 6 7 8 9 X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB", 132: "oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W" }, E: { 1: "EC WC XC YC ZC aC bC FC cC uC", 2: "J JB kC NC", 33: "K D E F A B C L M G lC mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC" }, F: { 1: "a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB vC wC xC yC AC dC zC BC", 132: "bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z" }, G: { 1: "EC WC XC YC ZC aC bC FC cC", 2: "NC 0C", 33: "E eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J", 132: "TD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "CSS Hyphenation", D: !0 }), nt;
}
var at, xC;
function Nd() {
  return xC || (xC = 1, at = { A: { A: { 2: "K D E F A fC", 548: "B" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 516: "C L M G N O P" }, C: { 1: "5 6 7 8 9 vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB K D E F iC jC", 676: "0 1 2 3 4 A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB", 1700: "gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB" }, D: { 1: "5 6 7 8 9 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "J JB K D E F A B C L M", 676: "G N O P KB", 804: "0 1 2 3 4 z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B" }, E: { 1: "UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB kC NC", 548: "QC CC sC DC RC SC TC", 676: "lC", 804: "K D E F A B C L M G mC nC oC OC AC BC pC qC rC PC" }, F: { 1: "vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x BC", 2: "F B C vC wC xC yC AC dC zC", 804: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB" }, G: { 2: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD", 2052: "BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 2: "MD" }, I: { 2: "GC J I ND OD PD QD eC RD SD" }, J: { 2: "D", 292: "A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A", 548: "B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z OC YD ZD aD bD cD DC EC FC dD", 804: "J TD UD VD WD XD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 1, C: "Fullscreen API", D: !0 }), at;
}
var ot, AC;
function Ld() {
  return AC || (AC = 1, ot = { A: { D: { 1: "5 6 7 8 9 WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB", 33: "RB SB TB UB VB" }, L: { 1: "I" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 33: "C L M G N O P" }, C: { 1: "5 6 7 8 9 gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB iC jC" }, M: { 1: "y" }, A: { 2: "K D E F A fC", 33: "B" }, F: { 1: "3 4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C G N O P vC wC xC yC AC dC zC BC", 33: "0 1 2 KB z" }, K: { 1: "H", 2: "A B C AC dC BC" }, E: { 1: "QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC", 2: "J JB K D E F A B C L M G kC NC lC mC nC oC OC AC BC pC qC rC PC uC" }, G: { 1: "QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC", 33: "RD SD" } }, B: 6, C: "CSS ::backdrop pseudo-element", D: void 0 }), ot;
}
var lt, SC;
function Td() {
  return SC || (SC = 1, lt = { A: { D: { 1: "5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X" }, L: { 1: "I" }, B: { 1: "5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 33: "C L M G N O P Q H R S T U V W X" }, C: { 1: "5 6 7 8 9 JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R iC jC" }, M: { 1: "y" }, A: { 2: "K D E F fC", 33: "A B" }, F: { 1: "6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B" }, K: { 1: "H", 2: "A B C AC dC BC" }, E: { 1: "G qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC", 2: "uC", 33: "J JB K D E F A B C L M kC NC lC mC nC oC OC AC BC pC" }, G: { 1: "ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 33: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD" }, P: { 1: "0 1 2 3 4 z cD DC EC FC dD", 33: "J TD UD VD WD XD OC YD ZD aD bD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC", 33: "RD SD" } }, B: 6, C: "::file-selector-button CSS pseudo-element", D: void 0 }), lt;
}
var ut, EC;
function Hd() {
  return EC || (EC = 1, ut = { A: { D: { 1: "5 6 7 8 9 t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s" }, L: { 1: "I" }, B: { 1: "5 6 7 8 9 t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P", 33: "Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s" }, C: { 1: "5 6 7 8 9 V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U iC jC" }, M: { 1: "y" }, A: { 2: "K D E F A B fC" }, F: { 1: "f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e" }, K: { 1: "H", 2: "A B C AC dC BC" }, E: { 1: "G rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC", 2: "uC", 33: "J JB K D E F A B C L M kC NC lC mC nC oC OC AC BC pC qC" }, G: { 1: "JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 33: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID" }, P: { 1: "0 1 2 3 4", 33: "J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC", 33: "RD SD" } }, B: 6, C: ":autofill CSS pseudo-class", D: void 0 }), ut;
}
var ft, kC;
function Jd() {
  return kC || (kC = 1, ft = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC iC jC", 33: "mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z", 164: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB" }, D: { 1: "5 6 7 8 9 bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "J JB K D E F A B C L M G N O P KB z", 132: "0 1 2 3 4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB" }, E: { 1: "M G pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K kC NC lC", 132: "D E F A B C L mC nC oC OC AC BC" }, F: { 1: "OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F vC wC xC", 132: "0 1 2 3 4 G N O P KB z LB MB NB", 164: "B C yC AC dC zC BC" }, G: { 1: "GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C 2C", 132: "E 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD" }, H: { 164: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC", 132: "RD SD" }, J: { 132: "D A" }, K: { 1: "H", 2: "A", 164: "B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 164: "gD hD" } }, B: 4, C: "CSS3 tab-size", D: !0 }), ft;
}
var ct, FC;
function Ud() {
  return FC || (FC = 1, ct = { A: { A: { 2: "K D E F A B fC" }, B: { 2: "C L M G N O P", 1025: "5 6 7 8 9 d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 1537: "Q H R S T U V W X Y Z a b c" }, C: { 2: "gC", 932: "0 1 2 3 4 GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB iC jC", 2308: "5 6 7 8 9 xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC" }, D: { 2: "0 J JB K D E F A B C L M G N O P KB z", 545: "1 2 3 4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB", 1025: "5 6 7 8 9 d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 1537: "fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c" }, E: { 1: "DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K kC NC lC", 516: "B C L M G AC BC pC qC rC PC QC CC sC", 548: "F A oC OC", 676: "D E mC nC" }, F: { 2: "F B C vC wC xC yC AC dC zC BC", 513: "TB", 545: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB", 1025: "e f g h i j k l m n o p q r s t u v w x", 1537: "SB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d" }, G: { 1: "DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C 2C", 516: "HD ID JD PC QC CC KD", 548: "5C 6C 7C 8C 9C AD BD CD DD ED FD GD", 676: "E 3C 4C" }, H: { 2: "MD" }, I: { 2: "GC J ND OD PD QD eC", 545: "RD SD", 1025: "I" }, J: { 2: "D", 545: "A" }, K: { 2: "A B C AC dC BC", 1025: "H" }, L: { 1025: "I" }, M: { 2308: "y" }, N: { 2: "A B" }, O: { 1537: "CC" }, P: { 545: "J", 1025: "0 1 2 3 4 z EC FC dD", 1537: "TD UD VD WD XD OC YD ZD aD bD cD DC" }, Q: { 1537: "eD" }, R: { 1537: "fD" }, S: { 932: "gD", 2308: "hD" } }, B: 5, C: "Intrinsic & Extrinsic Sizing", D: !0 }), ct;
}
var dt, RC;
function Vd() {
  return RC || (RC = 1, dt = { A: { D: { 2: "0 J JB K D E F A B C L M G N O P KB z", 33: "1 2 3 4 5 6 7 8 9 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, L: { 33: "I" }, B: { 2: "C L M G N O P", 33: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 2: "gC", 33: "0 1 2 3 4 5 6 7 8 9 GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC iC jC" }, M: { 33: "y" }, A: { 2: "K D E F A B fC" }, F: { 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x" }, K: { 2: "A B C AC dC BC", 33: "H" }, E: { 2: "J JB K kC NC lC mC uC", 33: "D E F A B C L M G nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC" }, G: { 2: "NC 0C eC 1C 2C", 33: "E 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, P: { 2: "J", 33: "0 1 2 3 4 z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, I: { 2: "GC J ND OD PD QD eC", 33: "I RD SD" } }, B: 6, C: "width: stretch property", D: void 0 }), dt;
}
var Dt, IC;
function Kd() {
  return IC || (IC = 1, Dt = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "3 4 5 6 7 8 9 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 33: "0 1 2 gC GC J JB K D E F A B C L M G N O P KB z iC jC" }, D: { 1: "5 6 7 8 9 WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB" }, E: { 1: "F A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 33: "J JB K D E kC NC lC mC nC" }, F: { 1: "3 4 C LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x zC BC", 2: "F B vC wC xC yC AC dC", 33: "0 1 2 G N O P KB z" }, G: { 2: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 33: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 2: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 2: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 2: "gD hD" } }, B: 2, C: "CSS3 Cursors: zoom-in & zoom-out", D: !0 }), Dt;
}
var pt, OC;
function Qd() {
  return OC || (OC = 1, pt = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M" }, C: { 1: "5 6 7 8 9 MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 33: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB iC jC" }, D: { 1: "5 6 7 8 9 zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB" }, E: { 1: "B C L M G AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 33: "J JB K D E F A kC NC lC mC nC oC OC" }, F: { 1: "C oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x zC BC", 2: "F B vC wC xC yC AC dC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB" }, G: { 2: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 33: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 2: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 2: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 2: "gD hD" } }, B: 2, C: "CSS grab & grabbing cursors", D: !0 }), pt;
}
var ht, jC;
function Wd() {
  return jC || (jC = 1, ht = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G", 1028: "Q H R S T U V W X Y Z", 4100: "N O P" }, C: { 1: "5 6 7 8 9 HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z iC jC", 194: "LB MB NB OB PB QB", 516: "RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB" }, D: { 1: "5 6 7 8 9 a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 J JB K D E F A B C L M G N O P KB z WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB", 322: "2 3 4 LB MB NB OB PB QB RB SB TB UB VB lB mB nB oB", 1028: "pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z" }, E: { 1: "L M G pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K kC NC lC", 33: "E F A B C nC oC OC AC BC", 2084: "D mC" }, F: { 1: "9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB vC wC xC yC AC dC zC BC", 322: "YB ZB aB", 1028: "bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B" }, G: { 1: "DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C", 33: "E 4C 5C 6C 7C 8C 9C AD BD CD", 2084: "2C 3C" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J TD" }, Q: { 1028: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 516: "gD" } }, B: 5, C: "CSS position:sticky", D: !0 }), ht;
}
var mt, PC;
function zd() {
  return PC || (PC = 1, mt = { A: { A: { 1: "B", 2: "K D E F fC", 164: "A" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "5 6 7 8 9 HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB iC jC", 8: "0 1 2 3 4 K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB", 328: "aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB" }, D: { 1: "5 6 7 8 9 oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 J JB K D E F A B C L M G N O P KB z", 8: "1 2 3 4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB", 584: "lB mB nB" }, E: { 1: "L M G pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K kC NC lC", 8: "D E F A B C mC nC oC OC AC", 1096: "BC" }, F: { 1: "bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 8: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB", 584: "YB ZB aB" }, G: { 1: "ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 8: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD", 6148: "DD" }, H: { 2: "MD" }, I: { 1: "I", 8: "GC J ND OD PD QD eC RD SD" }, J: { 8: "D A" }, K: { 1: "H", 2: "A", 8: "B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "B", 36: "A" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "TD", 8: "J" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 328: "gD" } }, B: 2, C: "Pointer events", D: !0 }), mt;
}
var vt, GC;
function qd() {
  return GC || (GC = 1, vt = { A: { A: { 2: "K D E F A B fC" }, B: { 2: "C L M G N O P", 2052: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 2: "gC GC J JB iC jC", 1028: "5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 1060: "0 1 2 3 4 K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB" }, D: { 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z", 226: "LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB", 2052: "5 6 7 8 9 qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, E: { 2: "J JB K D kC NC lC mC", 772: "L M G BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 804: "E F A B C oC OC AC", 1316: "nC" }, F: { 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB vC wC xC yC AC dC zC BC", 226: "UB VB WB XB YB ZB aB bB cB", 2052: "dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x" }, G: { 2: "NC 0C eC 1C 2C 3C", 292: "E 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 2: "A B C AC dC BC", 2052: "H" }, L: { 2052: "I" }, M: { 1028: "y" }, N: { 2: "A B" }, O: { 2052: "CC" }, P: { 2: "J TD UD", 2052: "0 1 2 3 4 z VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 2052: "eD" }, R: { 2052: "fD" }, S: { 1028: "gD hD" } }, B: 4, C: "text-decoration styling", D: !0 }), vt;
}
var gt, MC;
function Yd() {
  return MC || (MC = 1, gt = { A: { D: { 1: "5 6 7 8 9 qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB" }, L: { 1: "I" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB iC jC" }, M: { 1: "y" }, A: { 2: "K D E F A B fC" }, F: { 1: "dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB vC wC xC yC AC dC zC BC" }, K: { 1: "H", 2: "A B C AC dC BC" }, E: { 2: "J JB K D kC NC lC mC nC uC", 33: "E F A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC" }, G: { 2: "NC 0C eC 1C 2C 3C", 33: "E 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, P: { 1: "0 1 2 3 4 z VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J TD UD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" } }, B: 6, C: "text-decoration shorthand property", D: void 0 }), gt;
}
var yt, NC;
function Xd() {
  return NC || (NC = 1, yt = { A: { D: { 1: "5 6 7 8 9 qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB" }, L: { 1: "I" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB iC jC", 33: "0 1 2 3 4 K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB" }, M: { 1: "y" }, A: { 2: "K D E F A B fC" }, F: { 1: "dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB vC wC xC yC AC dC zC BC" }, K: { 1: "H", 2: "A B C AC dC BC" }, E: { 1: "L M G BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC", 2: "J JB K D kC NC lC mC nC uC", 33: "E F A B C oC OC AC" }, G: { 1: "CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C 2C 3C", 33: "E 4C 5C 6C 7C 8C 9C AD BD" }, P: { 1: "0 1 2 3 4 z VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J TD UD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" } }, B: 6, C: "text-decoration-color property", D: void 0 }), yt;
}
var wt, LC;
function Zd() {
  return LC || (LC = 1, wt = { A: { D: { 1: "5 6 7 8 9 qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB" }, L: { 1: "I" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB iC jC", 33: "0 1 2 3 4 K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB" }, M: { 1: "y" }, A: { 2: "K D E F A B fC" }, F: { 1: "dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB vC wC xC yC AC dC zC BC" }, K: { 1: "H", 2: "A B C AC dC BC" }, E: { 1: "L M G BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC", 2: "J JB K D kC NC lC mC nC uC", 33: "E F A B C oC OC AC" }, G: { 1: "CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C 2C 3C", 33: "E 4C 5C 6C 7C 8C 9C AD BD" }, P: { 1: "0 1 2 3 4 z VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J TD UD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" } }, B: 6, C: "text-decoration-line property", D: void 0 }), wt;
}
var bt, TC;
function $d() {
  return TC || (TC = 1, bt = { A: { D: { 1: "5 6 7 8 9 qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB" }, L: { 1: "I" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB iC jC", 33: "0 1 2 3 4 K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB" }, M: { 1: "y" }, A: { 2: "K D E F A B fC" }, F: { 1: "dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB vC wC xC yC AC dC zC BC" }, K: { 1: "H", 2: "A B C AC dC BC" }, E: { 1: "L M G BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC", 2: "J JB K D kC NC lC mC nC uC", 33: "E F A B C oC OC AC" }, G: { 1: "CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C 2C 3C", 33: "E 4C 5C 6C 7C 8C 9C AD BD" }, P: { 1: "0 1 2 3 4 z VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J TD UD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" } }, B: 6, C: "text-decoration-style property", D: void 0 }), bt;
}
var xt, HC;
function _d() {
  return HC || (HC = 1, xt = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 33: "C L M G N O P" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC iC jC" }, D: { 1: "5 6 7 8 9 nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB", 258: "LB" }, E: { 2: "J JB K D E F A B C L M G kC NC mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 258: "lC" }, F: { 1: "cB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB dB vC wC xC yC AC dC zC BC" }, G: { 2: "NC 0C eC", 33: "E 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 33: "y" }, N: { 161: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 2: "gD hD" } }, B: 7, C: "CSS text-size-adjust", D: !0 }), xt;
}
var At, JC;
function eD() {
  return JC || (JC = 1, At = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N", 164: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 3138: "O", 12292: "P" }, C: { 1: "5 6 7 8 9 mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC", 260: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB iC jC" }, D: { 1: "AB BB CB DB EB FB GB HB IB I y KC LC MC", 164: "0 1 2 3 4 5 6 7 8 9 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x" }, E: { 1: "QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "kC NC", 164: "J JB K D E F A B C L M G lC mC nC oC OC AC BC pC qC rC PC" }, F: { 1: "p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 164: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o" }, G: { 1: "QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 164: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC" }, H: { 2: "MD" }, I: { 1: "I", 164: "RD SD", 676: "GC J ND OD PD QD eC" }, J: { 164: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 164: "CC" }, P: { 1: "4", 164: "0 1 2 3 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 164: "eD" }, R: { 164: "fD" }, S: { 1: "hD", 260: "gD" } }, B: 4, C: "CSS Masks", D: !0 }), At;
}
var St, UC;
function BD() {
  return UC || (UC = 1, St = { A: { A: { 2: "K D E F A B fC" }, B: { 2: "C L M G N O", 260: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 3138: "P" }, C: { 1: "5 6 7 8 9 nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC", 132: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB iC jC", 644: "gB hB iB jB kB lB mB" }, D: { 2: "0 1 2 J JB K D E F A B C L M G N O P KB z", 260: "5 6 7 8 9 oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 292: "3 4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB" }, E: { 2: "J JB K kC NC lC mC", 260: "M G pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 292: "D E F A B C L nC oC OC AC BC" }, F: { 2: "F B C vC wC xC yC AC dC zC BC", 260: "bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 292: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB" }, G: { 2: "NC 0C eC 1C 2C", 260: "DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 292: "E 3C 4C 5C 6C 7C 8C 9C AD BD CD" }, H: { 2: "MD" }, I: { 2: "GC J ND OD PD QD eC", 260: "I", 292: "RD SD" }, J: { 2: "D A" }, K: { 2: "A B C AC dC BC", 260: "H" }, L: { 260: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 260: "CC" }, P: { 260: "0 1 2 3 4 z UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 292: "J TD" }, Q: { 260: "eD" }, R: { 260: "fD" }, S: { 1: "hD", 644: "gD" } }, B: 4, C: "CSS clip-path property (for HTML)", D: !0 }), St;
}
var Et, VC;
function tD() {
  return VC || (VC = 1, Et = { A: { A: { 2: "K D E F A B fC" }, B: { 2: "C L M G N O P", 164: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "5 6 7 8 9 RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB iC jC" }, D: { 2: "0 J JB K D E F A B C L M G N O P KB z", 164: "1 2 3 4 5 6 7 8 9 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, E: { 2: "J JB K kC NC lC", 164: "D E F A B C L M G mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC" }, F: { 2: "F vC wC xC yC", 129: "B C AC dC zC BC", 164: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x" }, G: { 2: "NC 0C eC 1C 2C", 164: "E 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 132: "MD" }, I: { 2: "GC J ND OD PD QD eC", 164: "I RD SD" }, J: { 2: "D", 164: "A" }, K: { 2: "A", 129: "B C AC dC BC", 164: "H" }, L: { 164: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 164: "CC" }, P: { 164: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 164: "eD" }, R: { 164: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "CSS box-decoration-break", D: !0 }), Et;
}
var kt, KC;
function rD() {
  return KC || (KC = 1, kt = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G", 260: "N O P" }, C: { 1: "5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB iC jC" }, D: { 1: "5 6 7 8 9 RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB" }, E: { 1: "A B C L M G OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K D kC NC lC mC", 132: "E F nC oC" }, F: { 1: "0 1 2 3 4 KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F G N O P vC wC xC", 33: "B C yC AC dC zC BC" }, G: { 1: "7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C 2C 3C", 132: "E 4C 5C 6C" }, H: { 33: "MD" }, I: { 1: "I SD", 2: "GC J ND OD PD QD eC RD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A", 33: "B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "CSS3 object-fit/object-position", D: !0 }), kt;
}
var Ft, QC;
function sD() {
  return QC || (QC = 1, Ft = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB iC jC", 322: "kB lB mB nB oB pB qB rB HC sB IC" }, D: { 1: "5 6 7 8 9 WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB", 194: "TB UB VB" }, E: { 1: "B C L M G OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K D kC NC lC mC", 33: "E F A nC oC" }, F: { 1: "3 4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 F B C G N O P KB z vC wC xC yC AC dC zC BC" }, G: { 1: "8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C 2C 3C", 33: "E 4C 5C 6C 7C" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 2: "gD" } }, B: 4, C: "CSS Shapes Level 1", D: !0 }), Ft;
}
var Rt, WC;
function CD() {
  return WC || (WC = 1, Rt = { A: { A: { 1: "K D E F A B", 2: "fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "0 1 2 3 4 5 6 7 8 9 D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 8: "gC GC J JB K iC jC" }, D: { 1: "0 1 2 3 4 5 6 7 8 9 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, E: { 1: "J JB K D E F A B C L M G kC NC lC mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC" }, F: { 1: "0 1 2 3 4 B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AC dC zC BC", 33: "F vC wC xC yC" }, G: { 1: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 1: "MD" }, I: { 1: "GC J I ND OD PD QD eC RD SD" }, J: { 1: "D A" }, K: { 1: "H BC", 33: "A B C AC dC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 1: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 2, C: "CSS3 Text-overflow", D: !0 }), Rt;
}
var It, zC;
function iD() {
  return zC || (zC = 1, It = { A: { A: { 2: "K D E F fC", 164: "A B" }, B: { 66: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 164: "C L M G N O P" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC iC jC" }, D: { 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB", 66: "5 6 7 8 9 OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, E: { 2: "J JB K D E F A B C L M G kC NC lC mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC" }, F: { 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB vC wC xC yC AC dC zC BC", 66: "ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x" }, G: { 2: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 292: "MD" }, I: { 2: "GC J I ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 2: "A H", 292: "B C AC dC BC" }, L: { 2: "I" }, M: { 2: "y" }, N: { 164: "A B" }, O: { 2: "CC" }, P: { 2: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 66: "eD" }, R: { 2: "fD" }, S: { 2: "gD hD" } }, B: 5, C: "CSS Device Adaptation", D: !0 }), It;
}
var Ot, qC;
function nD() {
  return qC || (qC = 1, Ot = { A: { A: { 2: "K D E fC", 132: "F A B" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 1028: "C L M G N O P" }, C: { 1: "5 6 7 8 9 tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC", 260: "J JB K D E F A B C L M G iC jC", 1028: "0 1 2 3 4 N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC" }, D: { 1: "5 6 7 8 9 zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 548: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB", 1028: "OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB" }, E: { 1: "DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "kC NC", 548: "J JB K D E F A B C L M G lC mC nC oC OC AC BC pC qC rC PC QC CC sC" }, F: { 1: "oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x BC", 2: "F", 548: "B C vC wC xC yC AC dC zC", 1028: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB" }, G: { 1: "DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 16: "NC", 548: "E 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD" }, H: { 132: "MD" }, I: { 1: "I", 16: "ND OD", 548: "GC J PD QD eC", 1028: "RD SD" }, J: { 548: "D A" }, K: { 1: "H BC", 548: "A B C AC dC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 132: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z OC YD ZD aD bD cD DC EC FC dD", 1028: "J TD UD VD WD XD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "Media Queries: resolution feature", D: !0 }), Ot;
}
var jt, YC;
function aD() {
  return YC || (YC = 1, jt = { A: { A: { 132: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 4: "C L M G N O P" }, C: { 1: "5 6 7 8 9 iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB K D E F A B iC jC", 33: "0 1 2 3 4 C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB" }, D: { 1: "5 6 7 8 9 gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB", 322: "UB VB WB XB YB ZB aB bB cB dB eB fB" }, E: { 1: "DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K D E F A B C L M G kC NC lC mC nC oC OC AC BC pC qC rC PC QC CC sC" }, F: { 1: "TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 F B C G N O P KB z vC wC xC yC AC dC zC BC", 578: "1 2 3 4 LB MB NB OB PB QB RB SB" }, G: { 1: "DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 132: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 33: "gD" } }, B: 4, C: "CSS3 text-align-last", D: !0 }), jt;
}
var Pt, XC;
function oD() {
  return XC || (XC = 1, Pt = { A: { A: { 2: "K fC", 2340: "D E F A B" }, B: { 2: "C L M G N O P", 1025: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "5 6 7 8 9 c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC iC", 513: "wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b", 545: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB jC" }, D: { 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB", 1025: "5 6 7 8 9 aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, E: { 1: "A B C L M G OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB kC NC lC", 164: "K", 4644: "D E F mC nC oC" }, F: { 2: "0 1 2 3 4 F B G N O P KB z LB MB vC wC xC yC AC dC", 545: "C zC BC", 1025: "NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x" }, G: { 1: "7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC", 4260: "1C 2C", 4644: "E 3C 4C 5C 6C" }, H: { 2: "MD" }, I: { 2: "GC J ND OD PD QD eC RD SD", 1025: "I" }, J: { 2: "D", 4260: "A" }, K: { 2: "A B AC dC", 545: "C BC", 1025: "H" }, L: { 1025: "I" }, M: { 1: "y" }, N: { 2340: "A B" }, O: { 1025: "CC" }, P: { 1025: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1025: "eD" }, R: { 1025: "fD" }, S: { 1: "hD", 4097: "gD" } }, B: 4, C: "Crisp edges/pixelated images", D: !0 }), Pt;
}
var Gt, ZC;
function lD() {
  return ZC || (ZC = 1, Gt = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P", 1028: "W X", 1540: "Q H R S T U V" }, C: { 1: "5 6 7 8 9 xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC", 164: "0 1 2 3 4 GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB iC jC", 1540: "aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB" }, D: { 1: "5 6 7 8 9 Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 292: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB", 1028: "W X", 1540: "0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V" }, E: { 1: "G rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 292: "J JB K D E F A B C kC NC lC mC nC oC OC AC", 1540: "L M BC pC", 3076: "qC" }, F: { 1: "7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 292: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB", 1028: "5B 6B", 1540: "pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B" }, G: { 1: "JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 292: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD", 1540: "CD DD ED FD GD HD", 3076: "ID" }, H: { 2: "MD" }, I: { 1: "I", 292: "GC J ND OD PD QD eC RD SD" }, J: { 292: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z cD DC EC FC dD", 292: "J TD UD VD WD XD", 1540: "OC YD ZD aD bD" }, Q: { 1540: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 1540: "gD" } }, B: 5, C: "CSS Logical Properties", D: !0 }), Gt;
}
var Mt, $C;
function uD() {
  return $C || ($C = 1, Mt = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 33: "S", 164: "Q H R", 388: "C L M G N O P" }, C: { 1: "5 6 7 8 9 H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 164: "UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q", 676: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB iC jC" }, D: { 1: "5 6 7 8 9 T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 33: "S", 164: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R" }, E: { 1: "QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 164: "J JB K D E F A B C L M G kC NC lC mC nC oC OC AC BC pC qC rC PC" }, F: { 1: "4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 33: "1B 2B 3B", 164: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B" }, G: { 1: "QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 164: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC" }, H: { 2: "MD" }, I: { 1: "I", 164: "GC J ND OD PD QD eC RD SD" }, J: { 164: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A", 388: "B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z bD cD DC EC FC dD", 164: "J TD UD VD WD XD OC YD ZD aD" }, Q: { 164: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 164: "gD" } }, B: 5, C: "CSS Appearance", D: !0 }), Mt;
}
var Nt, _C;
function fD() {
  return _C || (_C = 1, Nt = { A: { A: { 2: "K D E F fC", 6308: "A", 6436: "B" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 6436: "C L M G N O P" }, C: { 1: "5 6 7 8 9 zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB iC jC", 2052: "YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB" }, D: { 1: "5 6 7 8 9 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB", 8258: "xB yB zB" }, E: { 1: "B C L M G AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K D E kC NC lC mC nC", 3108: "F A oC OC" }, F: { 1: "vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB vC wC xC yC AC dC zC BC", 8258: "nB oB pB qB rB sB tB uB" }, G: { 1: "9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "E NC 0C eC 1C 2C 3C 4C", 3108: "5C 6C 7C 8C" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z OC YD ZD aD bD cD DC EC FC dD", 2: "J TD UD VD WD XD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 2052: "gD" } }, B: 4, C: "CSS Scroll Snap", D: !0 }), Nt;
}
var Lt, ei;
function cD() {
  return ei || (ei = 1, Lt = { A: { A: { 2: "K D E F fC", 420: "A B" }, B: { 2: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 420: "C L M G N O P" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC iC jC" }, D: { 2: "5 6 7 8 9 J JB K D E F A B C L M UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 36: "G N O P", 66: "0 1 2 3 4 KB z LB MB NB OB PB QB RB SB TB" }, E: { 2: "J JB K C L M G kC NC lC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 33: "D E F A B mC nC oC OC" }, F: { 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x vC wC xC yC AC dC zC BC" }, G: { 2: "NC 0C eC 1C 2C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 33: "E 3C 4C 5C 6C 7C 8C 9C" }, H: { 2: "MD" }, I: { 2: "GC J I ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 2: "A B C H AC dC BC" }, L: { 2: "I" }, M: { 2: "y" }, N: { 420: "A B" }, O: { 2: "CC" }, P: { 2: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 2: "eD" }, R: { 2: "fD" }, S: { 2: "gD hD" } }, B: 5, C: "CSS Regions", D: !0 }), Lt;
}
var Tt, Bi;
function dD() {
  return Bi || (Bi = 1, Tt = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P", 164: "Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v", 2049: "w" }, C: { 1: "5 6 7 8 9 w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U iC jC", 66: "V W", 2305: "Y Z a b c d e f g h i j k l m n o p q r s t u v", 2820: "X" }, D: { 1: "5 6 7 8 9 x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "J JB K D E F A B C L M G N O P KB z", 164: "0 1 2 3 4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v", 2049: "w" }, E: { 1: "EC WC XC YC ZC aC bC FC cC uC", 2: "J JB kC NC lC", 132: "A B C L OC AC BC pC", 164: "K D E F mC nC oC", 1540: "M G qC rC PC QC CC sC DC RC SC TC UC VC tC" }, F: { 1: "j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 164: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h", 2049: "i" }, G: { 1: "EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C", 132: "7C 8C 9C AD BD CD DD ED FD GD", 164: "E 2C 3C 4C 5C 6C", 1540: "HD ID JD PC QC CC KD DC RC SC TC UC VC LD" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC", 164: "RD SD" }, J: { 2: "D", 164: "A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 164: "CC" }, P: { 1: "2 3 4", 164: "0 1 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 164: "eD" }, R: { 164: "fD" }, S: { 2: "gD hD" } }, B: 5, C: "CSS image-set", D: !0 }), Tt;
}
var Ht, ti;
function DD() {
  return ti || (ti = 1, Ht = { A: { A: { 132: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 C L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "5 6 7 8 9 aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB iC jC", 322: "VB WB XB YB ZB" }, D: { 1: "5 6 7 8 9 hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "J JB K", 16: "D", 33: "0 1 2 3 4 E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB" }, E: { 1: "B C L M G AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J kC NC", 16: "JB", 33: "K D E F A lC mC nC oC OC" }, F: { 1: "UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB" }, G: { 1: "9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 16: "NC 0C eC", 33: "E 1C 2C 3C 4C 5C 6C 7C 8C" }, H: { 2: "MD" }, I: { 1: "I", 2: "ND OD PD", 33: "GC J QD eC RD SD" }, J: { 33: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 36: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 33: "J" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 2, C: "CSS writing-mode property", D: !0 }), Ht;
}
var Jt, ri;
function pD() {
  return ri || (ri = 1, Jt = { A: { A: { 2: "K D E F A B fC" }, B: { 2: "C L M G N O P", 33: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC iC jC" }, D: { 2: "J JB K D E F A B C L M G N", 33: "0 1 2 3 4 5 6 7 8 9 O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, E: { 1: "A B C L M G OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB kC NC", 33: "K D E F lC mC nC oC" }, F: { 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x" }, G: { 1: "7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC", 33: "E 1C 2C 3C 4C 5C 6C" }, H: { 2: "MD" }, I: { 2: "GC J ND OD PD QD eC", 33: "I RD SD" }, J: { 2: "D A" }, K: { 2: "A B C AC dC BC", 33: "H" }, L: { 33: "I" }, M: { 2: "y" }, N: { 2: "A B" }, O: { 33: "CC" }, P: { 33: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 33: "eD" }, R: { 33: "fD" }, S: { 2: "gD hD" } }, B: 4, C: "CSS Cross-Fade Function", D: !0 }), Jt;
}
var Ut, si;
function hD() {
  return si || (si = 1, Ut = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 L M G N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C" }, C: { 1: "5 6 7 8 9 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 16: "gC", 33: "0 1 2 3 4 GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B iC jC" }, D: { 1: "5 6 7 8 9 VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 16: "J JB K D E F A B C L M", 132: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB" }, E: { 1: "F A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 16: "kC NC", 132: "J JB K D E lC mC nC" }, F: { 1: "2 3 4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 16: "F B vC wC xC yC AC", 132: "0 1 C G N O P KB z dC zC BC" }, G: { 1: "5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 16: "NC 0C", 132: "E eC 1C 2C 3C 4C" }, H: { 2: "MD" }, I: { 1: "I", 16: "ND OD", 132: "GC J PD QD eC RD SD" }, J: { 1: "A", 132: "D" }, K: { 1: "H", 2: "A B AC", 132: "C dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 33: "gD" } }, B: 1, C: "CSS :read-only and :read-write selectors", D: !0 }), Ut;
}
var Vt, Ci;
function mD() {
  return Ci || (Ci = 1, Vt = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P", 164: "Q H R S T U V W X Y Z a b c d e f g h" }, C: { 1: "5 6 7 8 9 fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB iC jC", 322: "eB" }, D: { 1: "5 6 7 8 9 i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 J JB K D E F A B C L M G N O P KB z", 164: "4 LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h" }, E: { 1: "E F A B C L M G nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K kC NC lC", 164: "D mC" }, F: { 1: "V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 164: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U" }, G: { 1: "E 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C 2C" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC", 164: "RD SD" }, J: { 2: "D", 164: "A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z FC dD", 164: "J TD UD VD WD XD OC YD ZD aD bD cD DC EC" }, Q: { 164: "eD" }, R: { 164: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "text-emphasis styling", D: !0 }), Vt;
}
var Kt, ii;
function vD() {
  return ii || (ii = 1, Kt = { A: { A: { 2: "K D E fC", 8: "F", 292: "A B" }, B: { 1: "5 6 7 8 9 N O P Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 292: "C L M G" }, C: { 1: "5 6 7 8 9 nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB K D E F A B C L M G N O P iC jC", 8: "0 1 2 3 4 KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB", 584: "ZB aB bB cB dB eB fB gB hB iB jB kB", 1025: "lB mB" }, D: { 1: "5 6 7 8 9 rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 J JB K D E F A B C L M G N O P KB z", 8: "4 LB MB NB", 200: "OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB", 1025: "qB" }, E: { 1: "B C L M G OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB kC NC lC", 8: "K D E F A mC nC oC" }, F: { 1: "dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB vC wC xC yC AC dC zC BC", 200: "NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB" }, G: { 1: "8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C", 8: "E 2C 3C 4C 5C 6C 7C" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD", 8: "eC RD SD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 292: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "TD", 8: "J" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 4, C: "CSS Grid Layout (level 1)", D: !0 }), Kt;
}
var Qt, ni;
function gD() {
  return ni || (ni = 1, Qt = { A: { A: { 2: "K D fC", 161: "E F A B" }, B: { 2: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 161: "C L M G N O P" }, C: { 2: "0 1 2 3 4 5 6 7 8 9 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC iC jC" }, D: { 2: "0 1 2 3 4 5 6 7 8 9 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, E: { 2: "J JB K D E F A B C L M G kC NC lC mC nC oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC" }, F: { 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x vC wC xC yC AC dC zC BC" }, G: { 2: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC" }, H: { 2: "MD" }, I: { 2: "GC J I ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 2: "A B C H AC dC BC" }, L: { 2: "I" }, M: { 2: "y" }, N: { 16: "A B" }, O: { 2: "CC" }, P: { 2: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, Q: { 2: "eD" }, R: { 2: "fD" }, S: { 2: "gD hD" } }, B: 5, C: "CSS Text 4 text-spacing", D: !1 }), Qt;
}
var Wt, ai;
function yD() {
  return ai || (ai = 1, Wt = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 16: "gC", 33: "0 1 2 3 4 GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB iC jC" }, D: { 1: "5 6 7 8 9 wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 16: "J JB K D E F A B C L M", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB" }, E: { 1: "F A B C L M G oC OC AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 16: "J JB K kC NC lC", 33: "D E mC nC" }, F: { 1: "lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB" }, G: { 1: "5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 16: "NC 0C eC 1C", 33: "E 2C 3C 4C" }, H: { 2: "MD" }, I: { 1: "I", 16: "GC J ND OD PD QD eC", 33: "RD SD" }, J: { 16: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z XD OC YD ZD aD bD cD DC EC FC dD", 16: "J", 33: "TD UD VD WD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 33: "gD" } }, B: 5, C: "CSS :any-link selector", D: !0 }), Wt;
}
var zt, oi;
function wD() {
  return oi || (oi = 1, zt = { A: { D: { 1: "5 6 7 8 9 hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "J JB K D E F A B C L M G", 33: "0 1 2 3 4 N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB" }, L: { 1: "I" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB K D E F iC jC", 33: "0 1 2 3 4 A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB" }, M: { 1: "y" }, A: { 2: "K D E F A B fC" }, F: { 1: "UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB" }, K: { 1: "H", 2: "A B C AC dC BC" }, E: { 1: "B C L M G AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC", 2: "J JB kC NC lC uC", 33: "K D E F A mC nC oC OC" }, G: { 1: "9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C", 33: "E 2C 3C 4C 5C 6C 7C 8C" }, P: { 1: "0 1 2 3 4 z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" } }, B: 6, C: "isolate from unicode-bidi", D: void 0 }), zt;
}
var qt, li;
function bD() {
  return li || (li = 1, qt = { A: { D: { 1: "5 6 7 8 9 hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB" }, L: { 1: "I" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB K D E F iC jC", 33: "0 1 2 3 4 A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB" }, M: { 1: "y" }, A: { 2: "K D E F A B fC" }, F: { 1: "UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB vC wC xC yC AC dC zC BC" }, K: { 1: "H", 2: "A B C AC dC BC" }, E: { 1: "B C L M G AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC", 2: "J JB kC NC lC uC", 33: "K D E F A mC nC oC OC" }, G: { 1: "9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C", 33: "E 2C 3C 4C 5C 6C 7C 8C" }, P: { 1: "0 1 2 3 4 z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" } }, B: 6, C: "plaintext from unicode-bidi", D: void 0 }), qt;
}
var Yt, ui;
function xD() {
  return ui || (ui = 1, Yt = { A: { D: { 1: "5 6 7 8 9 hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB" }, L: { 1: "I" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "gC GC J JB K D E F A B C L M G N iC jC", 33: "0 1 2 3 4 O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB" }, M: { 1: "y" }, A: { 2: "K D E F A B fC" }, F: { 1: "UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB vC wC xC yC AC dC zC BC" }, K: { 1: "H", 2: "A B C AC dC BC" }, E: { 1: "B C L M G AC BC pC qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC", 2: "J JB K kC NC lC mC uC", 33: "D E F A nC oC OC" }, G: { 1: "9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C 2C", 33: "E 3C 4C 5C 6C 7C 8C" }, P: { 1: "0 1 2 3 4 z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" } }, B: 6, C: "isolate-override from unicode-bidi", D: void 0 }), Yt;
}
var Xt, fi;
function AD() {
  return fi || (fi = 1, Xt = { A: { A: { 2: "K D E F fC", 132: "A B" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 132: "C L M G N O", 516: "P" }, C: { 1: "5 6 7 8 9 HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB iC jC" }, D: { 1: "5 6 7 8 9 wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB", 260: "uB vB" }, E: { 1: "DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K D E F A B C L M kC NC lC mC nC oC OC AC BC pC", 1090: "G qC rC PC QC CC sC" }, F: { 1: "lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB vC wC xC yC AC dC zC BC", 260: "jB kB" }, G: { 1: "DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "E NC 0C eC 1C 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD", 1090: "ID JD PC QC CC KD" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 132: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J TD UD VD" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "hD", 2: "gD" } }, B: 5, C: "CSS overscroll-behavior", D: !0 }), Xt;
}
var Zt, ci;
function SD() {
  return ci || (ci = 1, Zt = { A: { A: { 2: "K D E F A B fC" }, B: { 1: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y", 2: "C L M G N O P" }, C: { 1: "5 6 7 8 9 aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB iC jC", 194: "XB YB ZB" }, D: { 1: "5 6 7 8 9 hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC", 2: "0 1 2 3 4 J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB" }, E: { 1: "M G qC rC PC QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC uC", 2: "J JB K D E F kC NC lC mC nC oC", 16: "A", 33: "B C L OC AC BC pC" }, F: { 1: "UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x", 2: "0 1 2 3 4 F B C G N O P KB z LB MB NB OB PB QB RB SB TB vC wC xC yC AC dC zC BC" }, G: { 1: "7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "E NC 0C eC 1C 2C 3C 4C 5C 6C" }, H: { 2: "MD" }, I: { 1: "I", 2: "GC J ND OD PD QD eC RD SD" }, J: { 2: "D A" }, K: { 1: "H", 2: "A B C AC dC BC" }, L: { 1: "I" }, M: { 1: "y" }, N: { 2: "A B" }, O: { 1: "CC" }, P: { 1: "0 1 2 3 4 z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD", 2: "J" }, Q: { 1: "eD" }, R: { 1: "fD" }, S: { 1: "gD hD" } }, B: 2, C: "CSS text-orientation", D: !0 }), Zt;
}
var $t, di;
function ED() {
  return di || (di = 1, $t = { A: { D: { 2: "J JB K D E F A B C L M G N", 33: "0 1 2 3 4 5 6 7 8 9 O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC" }, L: { 33: "I" }, B: { 2: "C L M G N O P", 33: "5 6 7 8 9 Q H R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y" }, C: { 1: "5 6 7 8 9 g h i j k l m n o p q r s t u v w x AB BB CB DB EB FB GB HB IB I y KC LC MC hC", 2: "0 1 2 3 4 gC GC J JB K D E F A B C L M G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB iC jC", 33: "hB iB jB kB lB mB nB oB pB qB rB HC sB IC tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f" }, M: { 1: "y" }, A: { 2: "K D E F A B fC" }, F: { 2: "F B C vC wC xC yC AC dC zC BC", 33: "0 1 2 3 4 G N O P KB z LB MB NB OB PB QB RB SB TB UB VB WB XB YB ZB aB bB cB dB eB fB gB hB iB jB kB lB mB nB oB pB qB rB sB tB uB vB wB xB yB zB 0B 1B 2B 3B 4B 5B 6B 7B 8B 9B Q H R JC S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x" }, K: { 2: "A B C AC dC BC", 33: "H" }, E: { 1: "QC CC sC DC RC SC TC UC VC tC EC WC XC YC ZC aC bC FC cC", 2: "J JB kC NC lC uC", 33: "K D E F A B C L M G mC nC oC OC AC BC pC qC rC PC" }, G: { 1: "QC CC KD DC RC SC TC UC VC LD EC WC XC YC ZC aC bC FC cC", 2: "NC 0C eC 1C", 33: "E 2C 3C 4C 5C 6C 7C 8C 9C AD BD CD DD ED FD GD HD ID JD PC" }, P: { 33: "0 1 2 3 4 J z TD UD VD WD XD OC YD ZD aD bD cD DC EC FC dD" }, I: { 2: "GC J ND OD PD QD eC", 33: "I RD SD" } }, B: 6, C: "print-color-adjust property", D: void 0 }), $t;
}
let kD = hn;
function pa(s, e) {
  return s = s.split(" "), e = e.split(" "), s[0] > e[0] ? 1 : s[0] < e[0] ? -1 : Math.sign(parseFloat(s[1]) - parseFloat(e[1]));
}
function g(s, e, B) {
  s = kD(s), B || ([B, e] = [e, {}]);
  let t = e.match || /\sx($|\s)/, r = [];
  for (let C in s.stats) {
    let i = s.stats[C];
    for (let n in i)
      i[n].match(t) && r.push(C + " " + n);
  }
  B(r.sort(pa));
}
let wr = {};
function v(s, e) {
  for (let B of s)
    wr[B] = Object.assign({}, e);
}
function tB(s, e) {
  for (let B of s)
    wr[B].browsers = wr[B].browsers.concat(e.browsers).sort(pa);
}
let FD = fd();
g(
  FD,
  (s) => v(
    [
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius"
    ],
    {
      browsers: s,
      feature: "border-radius",
      mistakes: ["-khtml-", "-ms-", "-o-"]
    }
  )
);
let RD = cd();
g(
  RD,
  (s) => v(["box-shadow"], {
    browsers: s,
    feature: "css-boxshadow",
    mistakes: ["-khtml-"]
  })
);
let ID = dd();
g(
  ID,
  (s) => v(
    [
      "animation",
      "animation-name",
      "animation-duration",
      "animation-delay",
      "animation-direction",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-play-state",
      "animation-timing-function",
      "@keyframes"
    ],
    {
      browsers: s,
      feature: "css-animation",
      mistakes: ["-khtml-", "-ms-"]
    }
  )
);
let OD = Dd();
g(
  OD,
  (s) => v(
    [
      "transition",
      "transition-property",
      "transition-duration",
      "transition-delay",
      "transition-timing-function"
    ],
    {
      browsers: s,
      feature: "css-transitions",
      mistakes: ["-khtml-", "-ms-"]
    }
  )
);
let jD = pd();
g(
  jD,
  (s) => v(["transform", "transform-origin"], {
    browsers: s,
    feature: "transforms2d"
  })
);
let ha = hd();
g(ha, (s) => (v(["perspective", "perspective-origin"], {
  browsers: s,
  feature: "transforms3d"
}), v(["transform-style"], {
  browsers: s,
  feature: "transforms3d",
  mistakes: ["-ms-", "-o-"]
})));
g(
  ha,
  { match: /y\sx|y\s#2/ },
  (s) => v(["backface-visibility"], {
    browsers: s,
    feature: "transforms3d",
    mistakes: ["-ms-", "-o-"]
  })
);
let ma = md();
g(
  ma,
  { match: /y\sx/ },
  (s) => v(
    [
      "linear-gradient",
      "repeating-linear-gradient",
      "radial-gradient",
      "repeating-radial-gradient"
    ],
    {
      browsers: s,
      feature: "css-gradients",
      mistakes: ["-ms-"],
      props: [
        "background",
        "background-image",
        "border-image",
        "mask",
        "list-style",
        "list-style-image",
        "content",
        "mask-image"
      ]
    }
  )
);
g(ma, { match: /a\sx/ }, (s) => (s = s.map((e) => /firefox|op/.test(e) ? e : `${e} old`), tB(
  [
    "linear-gradient",
    "repeating-linear-gradient",
    "radial-gradient",
    "repeating-radial-gradient"
  ],
  {
    browsers: s,
    feature: "css-gradients"
  }
)));
let PD = vd();
g(
  PD,
  (s) => v(["box-sizing"], {
    browsers: s,
    feature: "css3-boxsizing"
  })
);
let GD = gd();
g(
  GD,
  (s) => v(["filter"], {
    browsers: s,
    feature: "css-filters"
  })
);
let MD = yd();
g(
  MD,
  (s) => v(["filter-function"], {
    browsers: s,
    feature: "css-filter-function",
    props: [
      "background",
      "background-image",
      "border-image",
      "mask",
      "list-style",
      "list-style-image",
      "content",
      "mask-image"
    ]
  })
);
let ND = wd();
g(
  ND,
  { match: /y\sx|y\s#2/ },
  (s) => v(["backdrop-filter"], {
    browsers: s,
    feature: "css-backdrop-filter"
  })
);
let LD = bd();
g(
  LD,
  (s) => v(["element"], {
    browsers: s,
    feature: "css-element-function",
    props: [
      "background",
      "background-image",
      "border-image",
      "mask",
      "list-style",
      "list-style-image",
      "content",
      "mask-image"
    ]
  })
);
let TD = xd();
g(TD, (s) => {
  v(
    [
      "columns",
      "column-width",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-width",
      "column-count",
      "column-rule-style",
      "column-span",
      "column-fill"
    ],
    {
      browsers: s,
      feature: "multicolumn"
    }
  );
  let e = s.filter((B) => !/firefox/.test(B));
  v(["break-before", "break-after", "break-inside"], {
    browsers: e,
    feature: "multicolumn"
  });
});
let HD = Ad();
g(
  HD,
  (s) => v(["user-select"], {
    browsers: s,
    feature: "user-select-none",
    mistakes: ["-khtml-"]
  })
);
let va = Sd();
g(va, { match: /a\sx/ }, (s) => {
  s = s.map((e) => /ie|firefox/.test(e) ? e : `${e} 2009`), v(["display-flex", "inline-flex"], {
    browsers: s,
    feature: "flexbox",
    props: ["display"]
  }), v(["flex", "flex-grow", "flex-shrink", "flex-basis"], {
    browsers: s,
    feature: "flexbox"
  }), v(
    [
      "flex-direction",
      "flex-wrap",
      "flex-flow",
      "justify-content",
      "order",
      "align-items",
      "align-self",
      "align-content"
    ],
    {
      browsers: s,
      feature: "flexbox"
    }
  );
});
g(va, { match: /y\sx/ }, (s) => {
  tB(["display-flex", "inline-flex"], {
    browsers: s,
    feature: "flexbox"
  }), tB(["flex", "flex-grow", "flex-shrink", "flex-basis"], {
    browsers: s,
    feature: "flexbox"
  }), tB(
    [
      "flex-direction",
      "flex-wrap",
      "flex-flow",
      "justify-content",
      "order",
      "align-items",
      "align-self",
      "align-content"
    ],
    {
      browsers: s,
      feature: "flexbox"
    }
  );
});
let JD = Ed();
g(
  JD,
  (s) => v(["calc"], {
    browsers: s,
    feature: "calc",
    props: ["*"]
  })
);
let UD = kd();
g(
  UD,
  (s) => v(["background-origin", "background-size"], {
    browsers: s,
    feature: "background-img-opts"
  })
);
let VD = Fd();
g(
  VD,
  (s) => v(["background-clip"], {
    browsers: s,
    feature: "background-clip-text"
  })
);
let KD = Rd();
g(
  KD,
  (s) => v(
    [
      "font-feature-settings",
      "font-variant-ligatures",
      "font-language-override"
    ],
    {
      browsers: s,
      feature: "font-feature"
    }
  )
);
let QD = Id();
g(
  QD,
  (s) => v(["font-kerning"], {
    browsers: s,
    feature: "font-kerning"
  })
);
let WD = Od();
g(
  WD,
  (s) => v(["border-image"], {
    browsers: s,
    feature: "border-image"
  })
);
let zD = jd();
g(
  zD,
  (s) => v(["::selection"], {
    browsers: s,
    feature: "css-selection",
    selector: !0
  })
);
let qD = Pd();
g(qD, (s) => {
  v(["::placeholder"], {
    browsers: s.concat(["ie 10 old", "ie 11 old", "firefox 18 old"]),
    feature: "css-placeholder",
    selector: !0
  });
});
let YD = Gd();
g(YD, (s) => {
  v([":placeholder-shown"], {
    browsers: s,
    feature: "css-placeholder-shown",
    selector: !0
  });
});
let XD = Md();
g(
  XD,
  (s) => v(["hyphens"], {
    browsers: s,
    feature: "css-hyphens"
  })
);
let ZD = Nd();
g(
  ZD,
  (s) => v([":fullscreen"], {
    browsers: s,
    feature: "fullscreen",
    selector: !0
  })
);
let $D = Ld();
g(
  $D,
  (s) => v(["::backdrop"], {
    browsers: s,
    feature: "backdrop",
    selector: !0
  })
);
let _D = Td();
g(
  _D,
  (s) => v(["::file-selector-button"], {
    browsers: s,
    feature: "file-selector-button",
    selector: !0
  })
);
let e2 = Hd();
g(
  e2,
  (s) => v([":autofill"], {
    browsers: s,
    feature: "css-autofill",
    selector: !0
  })
);
let B2 = Jd();
g(
  B2,
  (s) => v(["tab-size"], {
    browsers: s,
    feature: "css3-tabsize"
  })
);
let Qr = Ud(), pB = [
  "width",
  "min-width",
  "max-width",
  "height",
  "min-height",
  "max-height",
  "inline-size",
  "min-inline-size",
  "max-inline-size",
  "block-size",
  "min-block-size",
  "max-block-size",
  "grid",
  "grid-template",
  "grid-template-rows",
  "grid-template-columns",
  "grid-auto-columns",
  "grid-auto-rows"
];
g(
  Qr,
  (s) => v(["max-content", "min-content"], {
    browsers: s,
    feature: "intrinsic-width",
    props: pB
  })
);
g(
  Qr,
  { match: /x|\s#4/ },
  (s) => v(["fill", "fill-available"], {
    browsers: s,
    feature: "intrinsic-width",
    props: pB
  })
);
g(Qr, { match: /x|\s#5/ }, (s) => {
  let e = s.filter((B) => {
    let [t, r] = B.split(" ");
    return t === "firefox" || t === "and_ff" ? parseInt(r) < 94 : !0;
  });
  return v(["fit-content"], {
    browsers: e,
    feature: "intrinsic-width",
    props: pB
  });
});
let t2 = Vd();
g(
  t2,
  (s) => v(["stretch"], {
    browsers: s,
    feature: "css-width-stretch",
    props: pB
  })
);
let r2 = Kd();
g(
  r2,
  (s) => v(["zoom-in", "zoom-out"], {
    browsers: s,
    feature: "css3-cursors-newer",
    props: ["cursor"]
  })
);
let s2 = Qd();
g(
  s2,
  (s) => v(["grab", "grabbing"], {
    browsers: s,
    feature: "css3-cursors-grab",
    props: ["cursor"]
  })
);
let C2 = Wd();
g(
  C2,
  (s) => v(["sticky"], {
    browsers: s,
    feature: "css-sticky",
    props: ["position"]
  })
);
let i2 = zd();
g(
  i2,
  (s) => v(["touch-action"], {
    browsers: s,
    feature: "pointer"
  })
);
let n2 = qd();
g(
  n2,
  { match: /x.*#[235]/ },
  (s) => v(["text-decoration-skip", "text-decoration-skip-ink"], {
    browsers: s,
    feature: "text-decoration"
  })
);
let a2 = Yd();
g(
  a2,
  (s) => v(["text-decoration"], {
    browsers: s,
    feature: "text-decoration"
  })
);
let o2 = Xd();
g(
  o2,
  (s) => v(["text-decoration-color"], {
    browsers: s,
    feature: "text-decoration"
  })
);
let l2 = Zd();
g(
  l2,
  (s) => v(["text-decoration-line"], {
    browsers: s,
    feature: "text-decoration"
  })
);
let u2 = $d();
g(
  u2,
  (s) => v(["text-decoration-style"], {
    browsers: s,
    feature: "text-decoration"
  })
);
let f2 = _d();
g(
  f2,
  (s) => v(["text-size-adjust"], {
    browsers: s,
    feature: "text-size-adjust"
  })
);
let c2 = eD();
g(c2, (s) => {
  v(
    [
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-origin",
      "mask-repeat",
      "mask-border-repeat",
      "mask-border-source"
    ],
    {
      browsers: s,
      feature: "css-masks"
    }
  ), v(
    [
      "mask",
      "mask-position",
      "mask-size",
      "mask-border",
      "mask-border-outset",
      "mask-border-width",
      "mask-border-slice"
    ],
    {
      browsers: s,
      feature: "css-masks"
    }
  );
});
let d2 = BD();
g(
  d2,
  (s) => v(["clip-path"], {
    browsers: s,
    feature: "css-clip-path"
  })
);
let D2 = tD();
g(
  D2,
  (s) => v(["box-decoration-break"], {
    browsers: s,
    feature: "css-boxdecorationbreak"
  })
);
let p2 = rD();
g(
  p2,
  (s) => v(["object-fit", "object-position"], {
    browsers: s,
    feature: "object-fit"
  })
);
let h2 = sD();
g(
  h2,
  (s) => v(["shape-margin", "shape-outside", "shape-image-threshold"], {
    browsers: s,
    feature: "css-shapes"
  })
);
let m2 = CD();
g(
  m2,
  (s) => v(["text-overflow"], {
    browsers: s,
    feature: "text-overflow"
  })
);
let v2 = iD();
g(
  v2,
  (s) => v(["@viewport"], {
    browsers: s,
    feature: "css-deviceadaptation"
  })
);
let g2 = nD();
g(
  g2,
  { match: /( x($| )|a #2)/ },
  (s) => v(["@resolution"], {
    browsers: s,
    feature: "css-media-resolution"
  })
);
let y2 = aD();
g(
  y2,
  (s) => v(["text-align-last"], {
    browsers: s,
    feature: "css-text-align-last"
  })
);
let ga = oD();
g(
  ga,
  { match: /y x|a x #1/ },
  (s) => v(["pixelated"], {
    browsers: s,
    feature: "css-crisp-edges",
    props: ["image-rendering"]
  })
);
g(
  ga,
  { match: /a x #2/ },
  (s) => v(["image-rendering"], {
    browsers: s,
    feature: "css-crisp-edges"
  })
);
let ya = lD();
g(
  ya,
  (s) => v(
    [
      "border-inline-start",
      "border-inline-end",
      "margin-inline-start",
      "margin-inline-end",
      "padding-inline-start",
      "padding-inline-end"
    ],
    {
      browsers: s,
      feature: "css-logical-props"
    }
  )
);
g(
  ya,
  { match: /x\s#2/ },
  (s) => v(
    [
      "border-block-start",
      "border-block-end",
      "margin-block-start",
      "margin-block-end",
      "padding-block-start",
      "padding-block-end"
    ],
    {
      browsers: s,
      feature: "css-logical-props"
    }
  )
);
let w2 = uD();
g(
  w2,
  { match: /#2|x/ },
  (s) => v(["appearance"], {
    browsers: s,
    feature: "css-appearance"
  })
);
let b2 = fD();
g(
  b2,
  (s) => v(
    [
      "scroll-snap-type",
      "scroll-snap-coordinate",
      "scroll-snap-destination",
      "scroll-snap-points-x",
      "scroll-snap-points-y"
    ],
    {
      browsers: s,
      feature: "css-snappoints"
    }
  )
);
let x2 = cD();
g(
  x2,
  (s) => v(["flow-into", "flow-from", "region-fragment"], {
    browsers: s,
    feature: "css-regions"
  })
);
let A2 = dD();
g(
  A2,
  (s) => v(["image-set"], {
    browsers: s,
    feature: "css-image-set",
    props: [
      "background",
      "background-image",
      "border-image",
      "cursor",
      "mask",
      "mask-image",
      "list-style",
      "list-style-image",
      "content"
    ]
  })
);
let S2 = DD();
g(
  S2,
  { match: /a|x/ },
  (s) => v(["writing-mode"], {
    browsers: s,
    feature: "css-writing-mode"
  })
);
let E2 = pD();
g(
  E2,
  (s) => v(["cross-fade"], {
    browsers: s,
    feature: "css-cross-fade",
    props: [
      "background",
      "background-image",
      "border-image",
      "mask",
      "list-style",
      "list-style-image",
      "content",
      "mask-image"
    ]
  })
);
let k2 = hD();
g(
  k2,
  (s) => v([":read-only", ":read-write"], {
    browsers: s,
    feature: "css-read-only-write",
    selector: !0
  })
);
let F2 = mD();
g(
  F2,
  (s) => v(
    [
      "text-emphasis",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-emphasis-color"
    ],
    {
      browsers: s,
      feature: "text-emphasis"
    }
  )
);
let wa = vD();
g(wa, (s) => {
  v(["display-grid", "inline-grid"], {
    browsers: s,
    feature: "css-grid",
    props: ["display"]
  }), v(
    [
      "grid-template-columns",
      "grid-template-rows",
      "grid-row-start",
      "grid-column-start",
      "grid-row-end",
      "grid-column-end",
      "grid-row",
      "grid-column",
      "grid-area",
      "grid-template",
      "grid-template-areas",
      "place-self"
    ],
    {
      browsers: s,
      feature: "css-grid"
    }
  );
});
g(
  wa,
  { match: /a x/ },
  (s) => v(["grid-column-align", "grid-row-align"], {
    browsers: s,
    feature: "css-grid"
  })
);
let R2 = gD();
g(
  R2,
  (s) => v(["text-spacing"], {
    browsers: s,
    feature: "css-text-spacing"
  })
);
let I2 = yD();
g(
  I2,
  (s) => v([":any-link"], {
    browsers: s,
    feature: "css-any-link",
    selector: !0
  })
);
let O2 = wD();
g(
  O2,
  (s) => v(["isolate"], {
    browsers: s,
    feature: "css-unicode-bidi",
    props: ["unicode-bidi"]
  })
);
let j2 = bD();
g(
  j2,
  (s) => v(["plaintext"], {
    browsers: s,
    feature: "css-unicode-bidi",
    props: ["unicode-bidi"]
  })
);
let P2 = xD();
g(
  P2,
  { match: /y x/ },
  (s) => v(["isolate-override"], {
    browsers: s,
    feature: "css-unicode-bidi",
    props: ["unicode-bidi"]
  })
);
let G2 = AD();
g(
  G2,
  { match: /a #1/ },
  (s) => v(["overscroll-behavior"], {
    browsers: s,
    feature: "css-overscroll-behavior"
  })
);
let M2 = SD();
g(
  M2,
  (s) => v(["text-orientation"], {
    browsers: s,
    feature: "css-text-orientation"
  })
);
let N2 = ED();
g(
  N2,
  (s) => v(["print-color-adjust", "color-adjust"], {
    browsers: s,
    feature: "css-print-color-adjust"
  })
);
let L2 = Ai;
L2.defaults;
class T2 extends Sa {
  constructor(e, B = {}) {
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
    }, this._id = "vg-rs-" + Math.round(Math.random() * 100), this._container = null, this.element = e, this.params = rB(B, this.paramsDefault), this.build(), this.init();
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
    this._container = _t.find(e);
  }
  build() {
    const e = this;
    let B = document.createElement("span");
    switch (B.classList.add(e.classes.container), B.id = e._id, e.params.skin) {
      case "flat":
        B.classList.add(e.classes.skin.flat);
        break;
      case "round":
        B.classList.add(e.classes.skin.round);
        break;
    }
    t(B), r(B), C(B), e.element.setAttribute("value", e.params.from), e.element.before(B);
    function t(i) {
      let n = document.createElement("span");
      n.classList.add(e.classes.wrapper), a(n), i.appendChild(n);
      function a(o) {
        let u = [e.classes.line, e.classes.to, e.classes.from, e.classes.min, e.classes.max];
        if (e.params.type === "single") {
          let l = document.createElement("span");
          l.classList.add(e.classes.single), o.prepend(l), u = ba(u, [e.classes.from, e.classes.to]);
        }
        u.length && u.forEach((l) => {
          let c = document.createElement("span");
          c.classList.add(l), o.prepend(c);
        });
      }
    }
    function r(i) {
      let n = document.createElement("span");
      n.classList.add(e.classes.bar), i.appendChild(n);
    }
    function C(i) {
      let n = document.createElement("span");
      n.classList.add(e.classes.handle), i.appendChild(n);
    }
  }
  toggle() {
    const e = this;
    let B = e.container.querySelector("." + e.classes.handle), t = e.getPosition(e.container);
    e.container.ondragstart = function() {
      return !1;
    }, e.params.type === "single" && (B.onpointerdown = function(r) {
      B.setPointerCapture(r.pointerId), B.onpointermove = function(C) {
        let i = (C.clientX - t.left) * 100 / t.width;
        i < 0 ? i = 0 : i > 100 && (i = 100);
        let n = e.setPosition(e.container, "single", {
          left: i,
          max: e.params.max,
          min: e.params.min,
          step: e.params.step
        });
        e.setData(n);
      }, B.onpointerup = function() {
        B.onpointermove = null, B.onpointerup = null;
      };
    });
  }
  setData(e = {}) {
    const B = this;
    e = rB(B.params, e);
    for (let t in e)
      if (typeof t != "object") {
        if (t === "min" || t === "max") {
          let r = B.container.querySelector(".vg-rs-" + t);
          r && (r.innerHTML = String(e[t]));
        }
        if (t === "type" && e[t] === "single") {
          let r = B.setPosition(B.container, e[t], e);
          B.container.querySelector(".vg-rs-single").style.left = r.left + "%", B.container.querySelector(".vg-rs-single").style.transform = "translateX(-" + r.left + "%)", B.container.querySelector(".vg-rs-single").innerHTML = r.from, B.container.querySelector(".vg-rs-bar").style.left = "0px", B.container.querySelector(".vg-rs-bar").style.width = r.left + "%", B.container.querySelector(".vg-rs-handle").style.left = r.left + "%", B.container.querySelector(".vg-rs-handle").style.transform = "translateX(-" + r.left + "%)";
        }
      }
  }
  setPosition(e, B, t) {
    let r = {};
    if (B === "single") {
      let C, i = t.from, n = t.step, a = t.min, o = t.max;
      if ("left" in t ? (C = t.left, i = C * o / 100) : (i > o ? C = 100 : C = i * 100 / o, i < a && (C = 0)), Number.isInteger(n))
        if (i = Math.round(i), n === 0)
          C = Math.round(C);
        else {
          let u = n * 100 / o, l = o / n;
          console.log(n, l, u, C, i);
        }
      r = {
        left: C,
        max: o,
        min: a,
        from: i
      };
    }
    return r;
  }
  getPosition(e) {
    return e.getBoundingClientRect();
  }
}
function H2() {
  new T2("#vg-range-slider");
}
document.addEventListener("DOMContentLoaded", H2);
