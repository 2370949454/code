webpackJsonp([5],{"3Icl":function(t,q){},LbpC:function(t,q,e){t.exports=e.p+"static/img/loading_read.f002b9e.gif"},SoiK:function(t,q){},eD0m:function(t,q){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABUFBMVEUAAACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpnJSTuAAAAb3RSTlMAJsTwvYFIDw1HvMf80JVcHlmT/R9OiMX45KltMwQDL6bi+siNUSAHOnOw6vS7frnyt3xACl+a1v5rLJlTAtrUkEKP7+6kVVKh7As8h9W4aRsWY7L21z0kwMsldHYTXqzz3vezZRcISpjlATWE0kFJVUATAAABH0lEQVQ4y2NgIAYwMjGzsLKxY5fk4GTlYmZiZODOBwEeXj5+AVQFAoJCvDxgSW4G4XwRUTFxCRBHUkpaRhYkLycvraAIElFSVlFVyxdmyM8HCatraGppg4R1dFn19A1ALGZDI2MTkBxQBUQRxHmmZuYWYAsUFSzl5WDCqIpAwMo6P98G1XWYihiwClBbUT4EUEHRqMNHFRGhyBa/IluggF2+vYOjLC5FcsZO9vl2DI7OwIh1cXXjwFRk4u7hCZR0dmRg8PL28QUyJfz8A5AVBQYFhwCFQ8XCvKB6wjUjgGWDRaSRPERRVDSTcH6+MFMMI6r7YuPiE4A6Ex3y88EmJyWnpGIrjdLSMzIhic/Tw90Ld5GWlZ2Tm+iQJ8tAOgAAEOuHoLC6bxgAAAAASUVORK5CYII="},sm9T:function(t,q,e){"use strict";Object.defineProperty(q,"__esModule",{value:!0});var n=e("//Fk"),a=e.n(n),r=e("Xxa5"),s=e.n(r),c=e("exGp"),o=e.n(c),i=e("jovr"),l=e("gyMJ"),u=e("GQaK"),h={render:function(){var t=this,q=t.$createElement,n=t._self._c||q;return n("section",{staticClass:"chapter"},[n("section",{staticClass:"chapter-header"},[n("img",{staticClass:"arrow",attrs:{src:e("GUAF"),alt:""},on:{click:function(q){t.$emit("update:foo",!0)}}}),t._v(" "),n("p",[t._v("目录")])]),t._v(" "),n("section",{ref:"char",staticClass:"chapter-content"},[n("ul",{staticClass:"chapter-list"},t._l(t.chapters,function(q,e){return n("li",{key:e,on:{click:function(t){}}},[t._v("\n        "+t._s(q.title)+"\n      ")])}))])])},staticRenderFns:[]};var p=e("VU/8")({name:"chapter",props:["chapters"],methods:{}},h,!1,function(t){e("SoiK")},"data-v-4b14ca2a",null).exports,d={name:"read",computed:{chaptersCount:function(){return this.chapters.length}},data:function(){return{bid:"",tit:"",chaptersUpdated:new Date,chapters:[],chaptersStart:0,limit:1,themes:[{class:"theme-default",text:"默认"},{class:"theme-dark",text:"夜间"},{class:"theme-green",text:"护眼"}],chaptersData:[],themeIndex:0,fontSize:2,read:!0,template:'<h2 id="c-1">title</h2><p>content</p>',content:"",dockShow:!1,loadMsg:"",cur:1}},watch:{$route:function(t,q){var e=this;return o()(s.a.mark(function q(){return s.a.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(e.read=!0,"read"===t.name){q.next=3;break}return q.abrupt("return",e.dockShow=!1);case 3:if(t.params.bid===e.bid){q.next=13;break}return e.bid=t.params.bid,e.tit="",e.chaptersData=[],e.chaptersStart=0,e.content="",q.next=11,e.getChapters();case 11:return q.next=13,e.getChaptersContent();case 13:case"end":return q.stop()}},q,e)}))()},read:function(){var t=this;this.$nextTick(function(){t.scroll=new u.a(t.$refs.wrapper,{pullUpLoad:{threshold:80},click:!0}),t.scroll.on("pullingUp",function(){t.getMore()}),t.scroll.on("scroll",function(q){t.dockShow&&(t.dockShow=!1)})})}},created:function(){var t=this;return o()(s.a.mark(function q(){var e;return s.a.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return e=t.$route.params.bid,t.bid=e,q.next=4,t.getChapters();case 4:return q.next=6,t.getChaptersContent();case 6:case"end":return q.stop()}},q,t)}))()},components:{Arrows:i.a,Chapter:p},methods:{changeChapter:function(t,q){var e=this;return o()(s.a.mark(function q(){return s.a.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(!document.querySelector("#c-"+t)){q.next=4;break}e.scroll.scrollToElement("#c-"+t,200),q.next=8;break;case 4:return e.chaptersStart=t,q.next=7,e.getChaptersContent();case 7:e.$nextTick(function(){e.scroll.scrollToElement("#c-"+t,200)});case 8:case"end":return q.stop()}},q,e)}))()},getChapters:function(){var t=this;return o()(s.a.mark(function q(){var e,n,a;return s.a.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,Object(l.l)(t.bid);case 2:e=q.sent,n=e.mixToc,a=void 0===n?{}:n,t.chapters=a.chapters||[],t.chaptersUpdated=new Date(a.chaptersUpdated),0===t.chapters.length&&(t.content="内容错误");case 8:case"end":return q.stop()}},q,t)}))()},getChaptersContent:function(){var t=this;return o()(s.a.mark(function q(){var e,n,r;return s.a.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return e=t.chapters.slice(t.chaptersStart,t.chaptersStart+t.limit),t.tit=e[0].title,n=e.map(function(t){return Object(l.m)(t.link)}),q.next=5,a.a.all(n);case 5:r=q.sent,e.forEach(function(t,q){t.content=r[q].chapter.body||"章节错误!"}),t.chaptersData=t.chaptersData.concat(e),t.content=t.chaptersData.reduce(function(t,q,e){return t+'<h2 id="c-'+e+'">'+q.title+"</h2><p>"+q.content+"</p>"},""),t.chaptersStart+=t.limit,t.$nextTick(function(){t.scroll&&t.scroll.refresh()});case 11:case"end":return q.stop()}},q,t)}))()},switchTheme:function(t){this.themeIndex!==t&&(this.themeIndex=t)},add:function(){this.fontSize=this.fontSize+1},minus:function(){this.fontSize=this.fontSize-1},getMore:function(){var t=this;return o()(s.a.mark(function q(){return s.a.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:if(!(t.chaptersStart>t.chapterCount)){q.next=2;break}return q.abrupt("return",t.loadMsg="没有更多了");case 2:t.loadMsg="加载中...",t.getChaptersContent().then(function(q){t.scroll.finishPullUp(),t.$nextTick(function(){t.scroll.refresh()})});case 4:case"end":return q.stop()}},q,t)}))()}},mounted:function(){var t=this;this.$nextTick(function(){t.scroll?t.scroll.refresh():(t.scroll=new u.a(t.$refs.wrapper,{pullUpLoad:{threshold:80},click:!0}),t.scroll.on("pullingUp",function(){t.getMore()}),t.scroll.on("scroll",function(q){t.dockShow&&(t.dockShow=!1)}))})}},f={render:function(){var t=this,q=t.$createElement,n=t._self._c||q;return n("div",{staticClass:"read-page"},[n("div",{ref:"wrapper",staticClass:"read-container",class:t.themes[t.themeIndex].class,on:{click:function(q){t.dockShow=!t.dockShow}}},[t.read?n("main",{attrs:{id:"read"}},[n("div",{class:["read_content","fs-"+t.fontSize],domProps:{innerHTML:t._s(t.content)}}),t._v(" "),n("p",{staticClass:"pull-warpper"},[t.loadMsg?t._e():n("img",{attrs:{src:e("LbpC"),alt:""}}),n("br"),t._v(" "),n("span",[t._v(t._s(t.loadMsg))])])]):t._e(),t._v(" "),t.read?t._e():n("transition",{attrs:{name:"fade"}},[n("Chapter",{attrs:{chapters:t.chapters,foo:t.read},on:{"update:foo":function(q){t.read=q}}})],1)],1),t._v(" "),t.read?n("transition-group",{attrs:{name:"read-setting"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.dockShow,expression:"dockShow"}],key:0,staticClass:"dock dock-title",on:{click:function(t){t.stopPropagation()}}},[n("Arrows",{staticClass:"arrow"}),t._v(" "),n("p",{staticClass:"reader_icon"},[t._v("返回")]),t._v(" "),n("p",{staticClass:"reader-title"},[t._v(t._s(t.tit))]),t._v(" "),n("section",{staticClass:"reader-right"},[n("img",{attrs:{src:e("eD0m"),alt:""}})])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.dockShow,expression:"dockShow"}],key:1,staticClass:"dock dock-setting",on:{click:function(t){t.stopPropagation()}}},[n("section",{staticClass:"fontSize"},[n("button",{staticClass:"minus",attrs:{disabled:1===t.fontSize},on:{click:t.minus}},[t._v("Aa-\n        ")]),t._v(" "),n("div",{staticClass:"line"},[n("span",{staticClass:"line_red",style:{width:t.fontSize/5*100+"%"}})]),t._v(" "),n("button",{staticClass:"add",attrs:{disabled:5===t.fontSize},on:{click:t.add}},[t._v("Aa+\n        ")])]),t._v(" "),n("section",{staticClass:"theme-btn"},t._l(t.themes,function(q,e){return n("button",{staticClass:"btn",class:{active:t.themeIndex===e},on:{click:function(q){t.switchTheme(e)}}},[t._v("\n          "+t._s(q.text)+"\n        ")])})),t._v(" "),n("section",{staticClass:"reader_cut"},[n("button",{attrs:{disabled:""}},[t._v("上一章")]),t._v(" "),n("button",{attrs:{disabled:""},on:{click:function(q){t.read=!1}}},[t._v("目录")]),t._v(" "),n("router-view"),t._v(" "),n("button",{on:{click:function(q){t.changeChapter(t.chaptersStart,1)}}},[t._v("下一章")])],1)])]):t._e()],1)},staticRenderFns:[]};var v=e("VU/8")(d,f,!1,function(t){e("3Icl")},"data-v-56b66a98",null);q.default=v.exports}});
//# sourceMappingURL=5.98f84658036a917c9ee5.js.map