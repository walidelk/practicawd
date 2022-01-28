(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["Cafeterias"],
  {
    "03e5": function (e, t, a) {
      e.exports = a.p + "img/restaurante_5.2816cfde.png";
    },
    "04d5": function (e) {
      e.exports = JSON.parse(
        '{"cafes":[{"id":1,"nombre":"Café solo","alt":"Café solo","precio":1.2,"imagen":"cafe_1.jpg"},{"id":2,"nombre":"Café con leche","alt":"Café con leche","precio":1.4,"imagen":"cafe_2.jpg"},{"id":3,"nombre":"Café irlandés","alt":"Café irlandés","precio":1.5,"imagen":"cafe_3.jpg"},{"id":4,"nombre":"Café Atelier","alt":"Café Atelier","precio":2,"imagen":"cafe_4.jpg"}],"bolleria":[{"id":5,"nombre":"Croissant","alt":"Croissant","precio":1,"imagen":"croissant_1.jpg","apiId":14608},{"id":6,"nombre":"Croissant con chocolate","alt":"Croissant con chocolate","precio":1.5,"imagen":"croissant_2.jpg","apiId":313295},{"id":7,"nombre":"Croissant con jamón york y queso","alt":"Croissant con jamón york y queso","precio":1.4,"imagen":"croissant_3.jpg","apiId":343561},{"id":8,"nombre":"Galletas Atelier","alt":"Galletas Atelier","precio":2,"imagen":"biscuit_1.jpg","apiId":244390}],"promociones":[{"id":9,"nombre":"Café + Croissant","alt":"Café + Croissant","precio":3,"imagen":"combo_2.jpg"},{"id":10,"nombre":"Combo Atelier","alt":"Combo Atelier","precio":3.75,"imagen":"combo_3.jpg"}]}'
      );
    },
    "0667": function (e, t, a) {
      e.exports = a.p + "img/restaurante_2.b2d29775.png";
    },
    "0d7a": function (e, t, a) {
      "use strict";
      a.r(t);
      var r = function () {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t;
          return a("div", { staticClass: "py-5" }, [
            a("h1", { staticClass: "pb-2" }, [e._v("Nuestras cafeterías")]),
            a("p", { staticClass: "pb-4" }, [
              e._v(
                "Conoce todas nuestras cafeterías y encuentra la más cercana a ti."
              ),
            ]),
            a(
              "div",
              { staticClass: "container-md" },
              [
                a(
                  "b-card-group",
                  {
                    staticClass: "justify-content-center",
                    attrs: { rows: "" },
                  },
                  e._l(e.cafeterias, function (e) {
                    return a(
                      "div",
                      { key: e.id, attrs: { rows: "" } },
                      [
                        a("CardCafeteria", {
                          attrs: {
                            autor: e.ciudad,
                            srcimg: e.srcimg,
                            alt: e.alt,
                            ciudad: e.ciudad,
                            titulo: e.titulo,
                            texto: e.texto,
                            coords: e.coords,
                          },
                        }),
                      ],
                      1
                    );
                  }),
                  0
                ),
              ],
              1
            ),
          ]);
        },
        n = [],
        o = a("1da1"),
        i =
          (a("96cf"),
          a("d3b7"),
          function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "div",
              { staticStyle: { "text-align": "-webkit-center" } },
              [
                a(
                  "b-card",
                  {
                    staticClass: "m-3",
                    staticStyle: { "max-width": "20rem" },
                    attrs: {
                      "img-src": e.getImgUrl(e.srcimg),
                      "img-alt": e.alt,
                      footer: e.ciudad,
                      tag: "cafeteria",
                    },
                  },
                  [
                    a("b-card-title", [e._v(" " + e._s(e.titulo) + " ")]),
                    a("b-card-text", [e._v(" " + e._s(e.texto) + " ")]),
                    a(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: { hover: !0 },
                          },
                        ],
                        attrs: {
                          pill: "",
                          title: "Ir a la ubicación de la cafetería",
                          target: "_blank",
                          variant: "primary",
                          href: "https://www.google.com/maps/" + e.coords,
                        },
                      },
                      [e._v(" Como llegar ")]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          }),
        s = [],
        c = {
          props: ["id", "titulo", "srcimg", "alt", "texto", "ciudad", "coords"],
          methods: {
            getImgUrl: function (e) {
              return a("1771")("./" + e);
            },
          },
          data: function () {
            return {
              object: {
                titulo: "",
                srcimg: "",
                alt: "",
                texto: "",
                ciudad: "",
                coords: "",
                image: "image.png",
              },
            };
          },
        },
        p = c,
        d = a("2877"),
        u = Object(d["a"])(p, i, s, !1, null, "ea9e11d2", null),
        l = u.exports,
        g = "../jsons/cafeterias.json",
        f = {
          title: "Cafeterías",
          props: { name: { type: String, default: "cafeterias" } },
          components: { CardCafeteria: l },
          data: function () {
            return { cafeterias: [] };
          },
          mounted: function () {
            this.fetchData();
          },
          methods: {
            fetchData: function () {
              var e = this;
              return Object(o["a"])(
                regeneratorRuntime.mark(function t() {
                  var a, r;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), fetch(g);
                        case 2:
                          return (a = t.sent), (t.next = 5), a.json();
                        case 5:
                          (r = t.sent), (e.cafeterias = r);
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
          },
        },
        m = f,
        b = Object(d["a"])(m, r, n, !1, null, "bad2cdb2", null);
      t["default"] = b.exports;
    },
    1227: function (e, t, a) {
      e.exports = a.p + "img/croissant_1.5fe3802e.jpg";
    },
    1720: function (e, t, a) {
      e.exports = a.p + "img/cafe_4.d1ba000a.jpg";
    },
    1771: function (e, t, a) {
      var r = {
        "./bake.jpg": "5240",
        "./brunch.jpg": "95ea",
        "./jsons/cafeterias": "3165",
        "./jsons/cafeterias.json": "3165",
        "./jsons/menu": "04d5",
        "./jsons/menu.json": "04d5",
        "./lapanera.jpg": "6ec1",
        "./logo.png": "cf05",
        "./logo_1.png": "93d3",
        "./menu.jpg": "b986",
        "./menu/biscuit_1.jpg": "d74c",
        "./menu/cafe_1.jpg": "6dbe",
        "./menu/cafe_2.jpg": "f9bb",
        "./menu/cafe_3.jpg": "2de2",
        "./menu/cafe_4.jpg": "1720",
        "./menu/combo_2.jpg": "875f",
        "./menu/combo_3.jpg": "78e6",
        "./menu/croissant_1.jpg": "1227",
        "./menu/croissant_2.jpg": "6339",
        "./menu/croissant_3.jpg": "eaba",
        "./old.jpg": "6a1f",
        "./portrait_1.jpg": "5a61",
        "./portrait_2.jpg": "f197",
        "./professors.jpg": "a7c6",
        "./restaurante_1.png": "d9f7",
        "./restaurante_2.png": "0667",
        "./restaurante_3.png": "8b67",
        "./restaurante_4.png": "44bf",
        "./restaurante_5.png": "03e5",
        "./restaurante_6.png": "8696",
        "./shops.jpg": "5724",
        "./videojuegos.jpg": "adb9",
      };
      function n(e) {
        var t = o(e);
        return a(t);
      }
      function o(e) {
        if (!a.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (n.keys = function () {
        return Object.keys(r);
      }),
        (n.resolve = o),
        (e.exports = n),
        (n.id = "1771");
    },
    "1da1": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      a("d3b7");
      function r(e, t, a, r, n, o, i) {
        try {
          var s = e[o](i),
            c = s.value;
        } catch (p) {
          return void a(p);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, n);
      }
      function n(e) {
        return function () {
          var t = this,
            a = arguments;
          return new Promise(function (n, o) {
            var i = e.apply(t, a);
            function s(e) {
              r(i, n, o, s, c, "next", e);
            }
            function c(e) {
              r(i, n, o, s, c, "throw", e);
            }
            s(void 0);
          });
        };
      }
    },
    "2de2": function (e, t, a) {
      e.exports = a.p + "img/cafe_3.dcd48f11.jpg";
    },
    3165: function (e) {
      e.exports = JSON.parse(
        '[{"id":1,"titulo":"Atelier Lleida Centro","ciudad":"Lleida","srcimg":"restaurante_1.png","alt":"Atelier Lleida Centro","texto":"Atelier situada en el centro de Lleida","coords":"@41.618341,0.6024253,14z/"},{"id":2,"titulo":"Atelier Lleida Mariola","ciudad":"Lleida","srcimg":"restaurante_2.png","alt":"Atelier Lleida Mariola","texto":"Atelier situada en el barrio de Mariola","coords":"@41.6125202,0.5837655,15z"},{"id":3,"titulo":"Atelier Barcelona Centro","ciudad":"Barcelona","srcimg":"restaurante_3.png","alt":"Atelier Barcelona Centro","texto":"Atelier situada en el centro de Barcelona","coords":"@41.3947319,2.1107898,13.01z"},{"id":4,"titulo":"Atelier Alicante Centro","ciudad":"Alicante","srcimg":"restaurante_4.png","alt":"Atelier Alicante Centro","texto":"Atelier situada en el centro de Alicante","coords":"@38.3454797,-0.4897719,18.24z"},{"id":5,"titulo":"Atelier premium","ciudad":"Tarragona","srcimg":"restaurante_5.png","alt":"Atelier premium","texto":"Nuestar Atelier más especial situada en la ciudad de Tarragona","coords":"@41.1167394,1.2449149,17z"},{"id":6,"titulo":"Atelier Eixample Tarragona","ciudad":"Tarragona","srcimg":"restaurante_6.png","alt":"Atelier Eixample Tarragona","texto":"Atelier situada en el barrio de l\'Eixample en Tarragona","coords":"@41.1153147,1.2496759,17z"}]'
      );
    },
    "44bf": function (e, t, a) {
      e.exports = a.p + "img/restaurante_4.b72f1618.png";
    },
    5240: function (e, t, a) {
      e.exports = a.p + "img/bake.5ddb3d69.jpg";
    },
    6339: function (e, t, a) {
      e.exports = a.p + "img/croissant_2.ba25a00d.jpg";
    },
    "6a1f": function (e, t, a) {
      e.exports = a.p + "img/old.df6ca89a.jpg";
    },
    "6dbe": function (e, t, a) {
      e.exports = a.p + "img/cafe_1.71bd607d.jpg";
    },
    "6ec1": function (e, t, a) {
      e.exports = a.p + "img/lapanera.98297068.jpg";
    },
    "78e6": function (e, t, a) {
      e.exports = a.p + "img/combo_3.6473ba43.jpg";
    },
    8696: function (e, t, a) {
      e.exports = a.p + "img/restaurante_6.ba037960.png";
    },
    "875f": function (e, t, a) {
      e.exports = a.p + "img/combo_2.1b12def8.jpg";
    },
    "8b67": function (e, t, a) {
      e.exports = a.p + "img/restaurante_3.ee32f78d.png";
    },
    "95ea": function (e, t, a) {
      e.exports = a.p + "img/brunch.42ee4504.jpg";
    },
    a7c6: function (e, t, a) {
      e.exports = a.p + "img/professors.e0e1dd7e.jpg";
    },
    adb9: function (e, t, a) {
      e.exports = a.p + "img/videojuegos.831f6cd2.jpg";
    },
    cf05: function (e, t, a) {
      e.exports = a.p + "img/logo.82b9c7a5.png";
    },
    d74c: function (e, t, a) {
      e.exports = a.p + "img/biscuit_1.08ae32da.jpg";
    },
    d9f7: function (e, t, a) {
      e.exports = a.p + "img/restaurante_1.9e905bd7.png";
    },
    eaba: function (e, t, a) {
      e.exports = a.p + "img/croissant_3.73808c7f.jpg";
    },
    f9bb: function (e, t, a) {
      e.exports = a.p + "img/cafe_2.9ed40dcc.jpg";
    },
  },
]);
//# sourceMappingURL=Cafeterias.8f70f6d2.js.map
