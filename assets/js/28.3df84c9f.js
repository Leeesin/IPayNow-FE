(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{180:function(t,e,_){"use strict";_.r(e);var s=_(0),v=Object(s.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),_("ul",[_("li",[_("router-link",{attrs:{to:"/生产环境代码发布注意事项/必看.html"}},[t._v("生产环境代码发布注意事项")])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"开张吉祥收银插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开张吉祥收银插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 开张吉祥收银插件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何运行","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何运行")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"tip custom-block"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("ol",[_("li",[t._v("git clone "),_("code",[t._v("git@code.ipaynow.cn:clean_settle/we_cashier_front.git")])]),t._v(" "),_("li",[t._v("运行 "),_("code",[t._v("npm i")]),t._v("安装全部依赖")]),t._v(" "),_("li",[t._v("在根目录下运行 "),_("code",[t._v("npm run dev")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"分支说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 分支说明")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"danger custom-block"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("生产环境分支")]),t._v("为"),_("code",[t._v("master")]),t._v(","),_("code",[t._v("开发")]),t._v("时需从此分支拉取代码。")]),t._v(" "),_("li",[_("code",[t._v("测试环境分支")]),t._v("为"),_("code",[t._v("opt-test")]),t._v("，"),_("code",[t._v("测试")]),t._v("时提醒相关人员从此分支拉取测试")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"主要文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 主要文件")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"danger custom-block"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("src/main/index.js")]),t._v(": 主进程")]),t._v(" "),_("li",[_("code",[t._v("src/render")]),t._v(": 渲染进程")]),t._v(" "),_("li",[_("code",[t._v("src/render/components")]),t._v(": 公共组件")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"开发注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发注意事项","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发注意事项")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"danger custom-block"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("开发注意")]),t._v(": 每次修改"),_("code",[t._v("src/main/index.js")]),t._v("时 要重新运行"),_("code",[t._v("npm run dev")]),t._v(" 不然进程不会清除, 会造成内存堆积; 要及时查看"),_("code",[t._v("任务管理器")]),t._v(", 必要时可以结束多余的"),_("code",[t._v("electron进程")])]),t._v(" "),_("li",[_("code",[t._v("版本号")]),t._v(": 每次修改要在"),_("code",[t._v("package.json")]),t._v("更新版本号, 对应的字段为"),_("code",[t._v("version")]),t._v("和"),_("code",[t._v("description")])]),t._v(" "),_("li",[_("code",[t._v("打包前")]),t._v(": 最好将"),_("code",[t._v("build目录")]),t._v("里面的内容删除掉")]),t._v(" "),_("li",[_("code",[t._v("打包为64位")]),t._v(": "),_("code",[t._v("npm run build")])]),t._v(" "),_("li",[_("code",[t._v("打包为32位")]),t._v(": "),_("code",[t._v("npm run build32")])]),t._v(" "),_("li",[_("code",[t._v("上线注意事项")]),t._v(": 打包完成后需将"),_("code",[t._v("build目录")]),t._v("下的"),_("code",[t._v("electron-builder.yaml")]),t._v(", "),_("code",[t._v("latest.yml")]),t._v("和"),_("code",[t._v("开张吉祥 Setup x.x.x.exe")]),t._v("三个文件压缩成"),_("code",[t._v("zip")]),t._v("文件")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("同时阅读:")])])}],!1,null,null,null);v.options.__file="doc.md";e.default=v.exports}}]);