(window.webpackJsonp = window.webpackJsonp || []).push([
  ["pages-sbcy-sbcy"],
  {
    1347: function (t, e, n) {
      "use strict";
      n.r(e);
      var a,
        o = n("7108"),
        i = n("aa94");
      for (a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      var s = n("f0c5");
      o = Object(s.a)(
        i.default,
        o.b,
        o.c,
        !1,
        null,
        "074ba51b",
        null,
        !1,
        o.a,
        void 0
      );
      e.default = o.exports;
    },
    3700: function (t, e, n) {
      "use strict";
      (function (t) {
        var a = n("4ea4");
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          n("96cf");
        var o = a(n("1da1"));
        n("ac1f"), n("1276"), n("99af"), n("fb6a");
        var i = a(n("a62e"));
        e.default = {
          data: function () {
            return { url: "", param: "", show: !0 };
          },
          methods: {
            message: function (t) {
              this.saveHeadImgFile(t.detail.data[0].action);
            },
            saveHeadImgFile: function (e) {
              e = e.split(",")[1];
              var n = new plus.nativeObj.Bitmap("test");
              n.loadBase64Data(
                e,
                function () {
                  var e = "_doc/" + new Date().getTime() + ".png";
                  t.log("saveHeadImgFile", e),
                    n.save(
                      e,
                      { overwrite: !0 },
                      function (t) {
                        uni.saveImageToPhotosAlbum({
                          filePath: e,
                          success: function () {
                            uni.showToast({
                              title: "图片保存成功",
                              icon: "none",
                            }),
                              n.clear();
                          },
                        });
                      },
                      function (t) {
                        uni.showToast({ title: "图片保存失败", icon: "none" }),
                          n.clear();
                      }
                    );
                },
                function (t) {
                  uni.showToast({ title: "图片保存失败", icon: "none" }),
                    n.clear();
                }
              );
            },
            jsonToParam: function (t) {
              var e,
                n = "";
              for (e in t) n += "".concat(e, "=").concat(t[e], "&");
              return n.slice(0, -1);
            },
            hanfle: function () {
              var t = this;
              return (0, o.default)(
                regeneratorRuntime.mark(function e() {
                  var n;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t.$https("getskerm", t.param);
                        case 2:
                          500 == (n = e.sent).data.code &&
                            ((t.show = !1), t.$base.msg(n.data.message));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
          },
          onLoad: function () {
            var e;
            (this.param = this.$Route.query),
              t.log(this.param),
              this.hanfle(),
              this.show &&
                ((e = uni.getStorageSync("Access-Token")),
                (this.url = "/hybrid/html/pdf.html?".concat(
                  i.default.apiUrl +
                    "sbpt-sbyw/sbapp/zmcy/ewmcy?jfrsbh=" +
                    encodeURIComponent(this.param.jfrsbh) +
                    "&zmbh=" +
                    encodeURIComponent(this.param.zmbh) +
                    "&zmlx=" +
                    encodeURIComponent(this.param.zmlx) +
                    "&token=" +
                    e
                )));
          },
          onBackPress: function () {},
        };
      }).call(this, n("5a52").default);
    },
    7108: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement;
          e = t._self._c || e;
          return e(
            "v-uni-view",
            [
              e(
                "cu-custom",
                { attrs: { bgColor: "sbyw-bg-blue", isBack: !0 } },
                [
                  e("template", {
                    attrs: { slot: "backText" },
                    slot: "backText",
                  }),
                  e(
                    "template",
                    { attrs: { slot: "content" }, slot: "content" },
                    [t._v("社保缴费证明查验")]
                  ),
                ],
                2
              ),
              e(
                "v-uni-view",
                {
                  staticStyle: {
                    position: "fixed",
                    "z-index": "10",
                    color: "red",
                    padding: "20rpx",
                    "font-size": "26rpx",
                    "background-color": "#fff",
                  },
                },
                [t._v("长按图片可保存，如有多张图片，请长按每张图片进行保存。")]
              ),
              e("v-uni-web-view", {
                attrs: { src: t.url },
                on: {
                  message: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)),
                      t.message.apply(void 0, arguments);
                  },
                },
              }),
            ],
            1
          );
        },
        o = [];
    },
    aa94: function (t, e, n) {
      "use strict";
      n.r(e);
      var a,
        o = n("3700"),
        i = n.n(o);
      for (a in o)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(a);
      e.default = i.a;
    },
  },
]);
