webpackJsonp([13],{hO2E:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Xxa5"),e=i.n(a),l=i("exGp"),o=i.n(l),c=i("gyMJ"),n={data:function(){return{male:[],female:[],free:[],newBook:[],recommend:[],sell:[],isLoading:!0}},created:function(){var t=this;return o()(e.a.mark(function s(){var i,a,l;return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(c.e)();case 2:i=s.sent,a=i.result,l=void 0===a?{}:a,t.male=l.Male||[],t.female=l.female||[],t.free=l.free||[],t.newBook=l.newBook||[],t.recommend=l.recommend||[],t.sell=l.sell||[],t.$nextTick(function(){t.isLoading=!1});case 12:case"end":return s.stop()}},s,t)}))()}},_={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"store"},[i("transition",{attrs:{name:"fade"}},[t.isLoading?i("Loading"):t._e()],1),t._v(" "),i("router-view"),t._v(" "),i("section",{staticClass:"store-middle"},[i("section",{staticClass:"store-compile store_common"},[t._m(0),t._v(" "),t._l(t.recommend,function(s){return i("router-link",{staticClass:"compile_list",attrs:{tag:"section",to:"/details/"+s._id}},[i("section",{staticClass:"compile_list_left"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://statics.zhuishushenqi.com"+s.cover,expression:"'http://statics.zhuishushenqi.com'+book.cover"}]})]),t._v(" "),i("div",{staticClass:"compile_list_right"},[i("h3",[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"list_right_synopsis"},[t._v(t._s(s.longIntro))]),t._v(" "),i("span",{staticClass:"author"},[t._v(t._s(s.author))]),t._v(" "),i("span",{staticClass:"sign1"},[i("i",[t._v(t._s(s.isSerial?"连载中":"完结"))])]),t._v(" "),i("span",{staticClass:"sign2"},[i("i",[t._v(t._s(s.majorCate))])]),t._v(" "),i("span",{staticClass:"sign3"},[i("i",[t._v(t._s(s.latelyFollower))])])])])})],2),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("section",{staticClass:"store-time store_common"},[t._m(1),t._v(" "),t._l(t.free,function(s){return i("router-link",{staticClass:"compile_list",attrs:{tag:"section",to:"/details/"+s._id}},[i("section",{staticClass:"compile_list_left"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://statics.zhuishushenqi.com"+s.cover,expression:"'http://statics.zhuishushenqi.com'+book.cover"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"compile_list_right"},[i("h3",[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"list_right_synopsis"},[t._v(t._s(s.longIntro))]),t._v(" "),i("span",{staticClass:"author"},[t._v(t._s(s.author))]),t._v(" "),i("span",{staticClass:"sign1"},[i("i",[t._v(t._s(s.isSerial?"连载中":"完结"))])]),t._v(" "),i("span",{staticClass:"sign2"},[i("i",[t._v(t._s(s.majorCate))])]),t._v(" "),i("span",{staticClass:"sign3"},[i("i",[t._v(t._s(s.latelyFollower))])])])])})],2),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("section",{staticClass:"store_boom"},[t._m(2),t._v(" "),i("ul",{staticClass:"boom_list"},t._l(t.sell,function(s){return i("router-link",{attrs:{tag:"li",to:"/details/"+s._id}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://statics.zhuishushenqi.com"+s.cover,expression:"'http://statics.zhuishushenqi.com'+book.cover"}],attrs:{alt:""}}),t._v(" "),i("span",[t._v(t._s(s.author))])])}))]),t._v(" "),t._m(3),t._v(" "),i("section",{staticClass:"store_man store_common"},[t._m(4),t._v(" "),t._l(t.recommend,function(s){return i("router-link",{staticClass:"compile_list",attrs:{tag:"section",to:"/details/"+s._id}},[i("section",{staticClass:"compile_list_left"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://statics.zhuishushenqi.com"+s.cover,expression:"'http://statics.zhuishushenqi.com'+book.cover"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"compile_list_right"},[i("h3",[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"list_right_synopsis"},[t._v(t._s(s.longIntro))]),t._v(" "),i("span",{staticClass:"author"},[t._v(t._s(s.author))]),t._v(" "),i("span",{staticClass:"sign1"},[i("i",[t._v(t._s(s.isSerial?"连载中":"完结"))])]),t._v(" "),i("span",{staticClass:"sign2"},[i("i",[t._v(t._s(s.majorCate))])]),t._v(" "),i("span",{staticClass:"sign3"},[i("i",[t._v(t._s(s.latelyFollower))])])])])})],2),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("section",{staticClass:"store_woman store_common"},[t._m(5),t._v(" "),t._l(t.female,function(s){return i("router-link",{staticClass:"compile_list",attrs:{tag:"section",to:"/details/"+s._id}},[i("section",{staticClass:"compile_list_left"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://statics.zhuishushenqi.com"+s.cover,expression:"'http://statics.zhuishushenqi.com'+book.cover"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"compile_list_right"},[i("h3",[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"list_right_synopsis"},[t._v(t._s(s.longIntro))]),t._v(" "),i("span",{staticClass:"author"},[t._v(t._s(s.author))]),t._v(" "),i("span",{staticClass:"sign1"},[i("i",[t._v(t._s(s.isSerial?"连载中":"完结"))])]),t._v(" "),i("span",{staticClass:"sign2"},[i("i",[t._v(t._s(s.majorCate))])]),t._v(" "),i("span",{staticClass:"sign3"},[i("i",[t._v(t._s(s.latelyFollower))])])])])})],2),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("section",{staticClass:"store_boom store_bottom"},[t._m(6),t._v(" "),i("ul",{staticClass:"boom_list"},t._l(t.newBook,function(s){return i("router-link",{attrs:{tag:"li",to:"/details/"+s._id}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://statics.zhuishushenqi.com"+s.cover,expression:"'http://statics.zhuishushenqi.com'+book.cover"}],attrs:{alt:""}}),t._v(" "),i("span",[t._v(t._s(s.author))])])}))])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"compile_tit"},[s("img",{staticClass:"tit_image",attrs:{src:i("MaMu"),alt:""}}),this._v(" "),s("span",{staticClass:"tit_i"},[this._v("编辑力荐")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"compile_tit tit_time_i"},[s("img",{staticClass:"tit_image",attrs:{src:i("orrH"),alt:""}}),this._v(" "),s("span",{staticClass:"tit_i"},[this._v("限时免费")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"boom_tit"},[s("img",{staticClass:"boom_image",attrs:{src:i("ieav"),alt:""}}),this._v(" "),s("span",{staticClass:"boom_i"},[this._v("畅销精选")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"store_image"},[s("img",{attrs:{src:"//static.zongheng.com/upload/recommend/f4/dd/f4dd054a7c05f38133485f46e4be7342.jpeg",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"compile_tit"},[s("img",{staticClass:"tit_image",attrs:{src:i("S0GF"),alt:""}}),this._v(" "),s("i",{staticClass:"tit_i"},[this._v("男生必读")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"compile_tit"},[s("img",{staticClass:"tit_image",attrs:{src:i("eG4M"),alt:""}}),this._v(" "),s("i",{staticClass:"tit_i"},[this._v("女生必读")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"boom_tit"},[s("img",{staticClass:"boom_image",attrs:{src:i("30Ac"),alt:""}}),this._v(" "),s("span",{staticClass:"boom_i"},[this._v("新书速递")])])}]};var r=i("VU/8")(n,_,!1,function(t){i("nZUG")},"data-v-863aafc2",null);s.default=r.exports},nZUG:function(t,s){}});
//# sourceMappingURL=13.f1b72eb3dbb0e861044c.js.map