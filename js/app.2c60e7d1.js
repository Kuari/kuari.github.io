(function(t){function e(e){for(var i,c,o=e[0],s=e[1],l=e[2],f=0,d=[];f<o.length;f++)c=o[f],a[c]&&d.push(a[c][0]),a[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},r=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"024c":function(t,e,n){"use strict";var i=n("e01b"),a=n.n(i);a.a},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"0e48":function(t,e,n){},"2c08":function(t,e,n){t.exports=n.p+"img/dance.d1fccfa3.gif"},"32bb":function(t,e,n){},"33ec":function(t,e,n){},"433c":function(t,e,n){"use strict";var i=n("0e48"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav-collapse",attrs:{role:"navigation",id:"foo"}},[n("ul",[t._m(0),n("li",{class:{active:t.menu_active.index}},[n("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),n("li",{class:{active:t.menu_active.archive}},[n("router-link",{attrs:{to:"/archive"}},[t._v("分类")])],1),n("li",{class:{active:t.menu_active.excerpt}},[n("router-link",{attrs:{to:"/excerpt"}},[t._v("摘抄")])],1),n("li",{class:{active:t.menu_active.aboutme}},[n("router-link",{attrs:{to:"/aboutme"}},[t._v("关于我")])],1)])]),n("div",{staticClass:"main",attrs:{role:"main"}},[n("a",{staticClass:"nav-toggle",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.menutoggle()}}},[t._v("Menu")]),n("transition",{attrs:{name:"fade-transform"}},[n("router-view")],1)],1)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo"},[i("img",{staticClass:"logoimg",attrs:{src:n("cf05"),alt:"logo"}}),i("h3",{staticClass:"author"},[t._v("Kuari")])])}],c=(n("28a5"),{name:"app",data:function(){return{menu_active:{index:!0,archive:!1,excerpt:!1,aboutme:!1}}},components:{},methods:{menutoggle:function(){var t=document.getElementById("foo");"block"==t.style.display?t.style.display="none":t.style.display="block"},menu_active_toggle:function(t){this.menu_active.index=!1,this.menu_active.archive=!1,this.menu_active.excerpt=!1,this.menu_active.aboutme=!1,this.menu_active[t]=!0},refreshMenu:function(){var t=window.location.href,e=t.split("#");1!=e[1].length&&this.menu_active_toggle(e[1].slice(1))}},created:function(){this.refreshMenu()},watch:{$route:function(t,e){this.menu_active_toggle(t.name)}}}),o=c,s=(n("034f"),n("2877")),l=Object(s["a"])(o,a,r,!1,null,null,null),u=l.exports,f=(n("85c8"),n("33ec"),n("29d5"),n("1487")),d=n.n(f),v=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.list,function(e){return n("div",{key:e.id},[n("div",{staticClass:"index_title"},[n("h2",{staticClass:"normal"},[n("router-link",{attrs:{to:t.targetRouterArticle(e.id)}},[t._v("\n                    "+t._s(e.title)+"\n                ")])],1)]),n("div",{staticClass:"index_intro"},[n("p",{domProps:{innerHTML:t._s(e.intro)}})]),n("div",[n("div",{staticClass:"index_tag"},[n("router-link",{attrs:{to:t.targetRouterArchive(e.archive)}},[n("i",{staticClass:"icontags-fill"}),t._v(" "+t._s(e.archive)+"\n                ")])],1),n("div",{staticClass:"index_tag index_right_tag"},[n("p",[n("i",{staticClass:"iconField-time"}),t._v(" "+t._s(e.time)+"\n                ")])])]),n("p",{staticClass:"index_split"})])}),n("div",{staticClass:"index_more"},[n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"preventDefault",void 0,e.key,void 0)?null:t.fetchMoreData()}}},[n("p",{staticClass:"more_button"},[t._v("\n                加载更多...\n            ")])])])],2)},m=[],p=n("bc3a"),_=n.n(p),g=n("5c96"),b=_.a.create({baseURL:"https://server.justmylife.cc:3306",timeout:5e3});b.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),b.interceptors.response.use(function(t){var e=t.data;return 2e4!==e.code?(Object(g["Message"])({message:e.message||"Error",type:"error",duration:5e3}),50008!==e.code&&50012!==e.code&&50014!==e.code||g["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then(function(){}),Promise.reject(new Error(e.message||"Error"))):e},function(t){return console.log("err"+t),Object(g["Message"])({message:t.message,type:"error",duration:5e3}),Promise.reject(t)});var x=b;function y(){return x({url:"/getarticlelist",method:"get",headers:{"content-type":"application/x-www-form-urlencoded"}})}function C(t){return x({url:"/getarticlelist",method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},data:t})}var w={data:function(){return{list:[],count:21}},methods:{fetchData:function(){var t=this;y().then(function(e){t.list=e.data})},fetchMoreData:function(){var t=this,e={count:this.count};C(e).then(function(e){e.data.forEach(function(e){t.list.push(e)})}),this.count+=20},targetRouterArticle:function(t){return"/article/"+t},targetRouterArchive:function(t){return"/archive/"+t}},created:function(){this.fetchData()}},j=w,k=(n("024c"),Object(s["a"])(j,h,m,!1,null,null,null)),O=k.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("\n        分类页面还没准备好...\n    ")])])}],M={},P=Object(s["a"])(M,E,$,!1,null,null,null),A=P.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},D=[];var T={data:function(){return{}},methods:{fetchData:function(){var t=this;(void 0)().then(function(e){t.list=e.data})}},created:function(){this.fetchData()}},S=T,B=Object(s["a"])(S,R,D,!1,null,null,null),K=B.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"aboutme_img"},[i("img",{staticClass:"about_img_dance",attrs:{src:n("2c08"),alt:"dance"}})]),i("div",[i("h2",[t._v("\n            关于我\n        ")]),i("p",[t._v("\n            我是Kuari。“还是少年中”是我的个人技术博客。\n        ")]),i("p",[t._v("\n            “Kuari”是我某天随手打的一个单词，感觉还可以就用着了。\n        ")]),i("p",[t._v("\n            从刚开始学习技术的时候，有位大佬就教导我要好好记笔记，所以我一直谨遵大佬的教诲，勤记笔记。\n        ")]),i("p",[t._v("\n            该博客2016年7月开始上线第一版本，用的是WordPress搭建的。后来随着技术的不断更新与提升，以及一些无法满足的需求，开始自己开发，也是那次开始莫名其妙入了前端的坑。\n        ")]),i("p",[t._v("\n            个人技术博客，对于我来说是方便了记录以便不时之需、对已有知识的回顾和分享自己的笔记，也因此结识了几位热爱技术的朋友。\n        ")]),i("p",[t._v("\n                希望以后能多写一些有意思有意义的代码吧，哈哈！\n            ")])]),i("div",{staticClass:"contact"},[i("h2",[t._v("\n            联系我\n        ")]),i("h4",[i("a",{attrs:{href:"https://github.com/Kuari"}},[i("i",{staticClass:"icongithub-fill"}),t._v(" github.com/Kuari")])]),i("h4",[i("a",{attrs:{href:"mailto:kuari@justmylife.cc"}},[i("i",{staticClass:"iconmail"}),t._v(" kuari@justmylife.cc")])])])])}],H=(n("df0b"),{}),q=Object(s["a"])(H,L,F,!1,null,null,null),J=q.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("img",{attrs:{src:n("6cd5"),alt:"404"}}),i("div",{staticClass:"text"},[i("h3",[t._v("\n                哎呀！你来晚了，洗洗睡吧～～\n            ")])])])}],U=(n("433c"),{}),W=Object(s["a"])(U,I,N,!1,null,null,null),Y=W.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h2",{staticClass:"article_title"},[t._v("\n            "+t._s(t.title)+"\n        ")])]),n("div",{staticClass:"article_tag_node"},[n("div",{staticClass:"article_tag"},[n("router-link",{attrs:{to:t.targetRouterArchive(t.archive)}},[n("i",{staticClass:"icontags-fill"}),t._v(" "+t._s(t.archive)+"\n            ")])],1),n("div",{staticClass:"article_tag article_right_tag"},[n("p",[n("i",{staticClass:"iconField-time"}),t._v(" "+t._s(t.time)+"\n            ")])])]),n("p",{staticClass:"article_split"}),n("div",{staticClass:"article_content clear"},[n("span",{directives:[{name:"hljs",rawName:"v-hljs"}],domProps:{innerHTML:t._s(t.content)}})])])},G=[];function Q(t){return x({url:"/getarticlecontent/"+t,method:"get",headers:{"content-type":"application/x-www-form-urlencoded"}})}var V={data:function(){return{article_id:this.$route.params.article_id,title:"",content:"",time:"",archive:""}},methods:{fetchData:function(){var t=this;Q(this.article_id).then(function(e){t.title=e.data.title,document.title=e.data.title+" - 还是少年中",t.content=e.data.content,t.time=e.data.time,t.archive=e.data.archive})},targetRouterArchive:function(t){return"/archive/"+t}},created:function(){this.fetchData()}},X=V,Z=(n("7703"),Object(s["a"])(X,z,G,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list,function(e){return n("div",{key:e.id},[n("div",{staticClass:"index_title"},[n("h2",{staticClass:"normal"},[n("router-link",{attrs:{to:t.targetRouterArticle(e.id)}},[t._v("\n                    "+t._s(e.title)+"\n                ")])],1)]),n("div",{staticClass:"index_intro"},[n("p",{domProps:{innerHTML:t._s(e.intro)}})]),n("div",[n("div",{staticClass:"index_tag"},[n("router-link",{attrs:{to:t.targetRouterArchive(e.archive)}},[n("i",{staticClass:"icontags-fill"}),t._v(" "+t._s(e.archive)+"\n                ")])],1),n("div",{staticClass:"index_tag index_right_tag"},[n("p",[n("i",{staticClass:"iconField-time"}),t._v(" "+t._s(e.time)+"\n                ")])])]),n("p",{staticClass:"index_split"})])}),0)},nt=[];function it(t){return x({url:"/getarchive/"+t,method:"get",headers:{"content-type":"application/x-www-form-urlencoded"}})}var at={data:function(){return{list:[],archive:this.$route.params.archive}},methods:{fetchData:function(){var t=this;it(this.archive).then(function(e){t.list=e.data})},targetRouterArticle:function(t){return"/article/"+t},targetRouterArchive:function(t){return"/archive/"+t}},created:function(){this.fetchData()}},rt=at,ct=(n("94c5"),Object(s["a"])(rt,et,nt,!1,null,null,null)),ot=ct.exports;i["default"].directive("hljs",function(t){var e=t.querySelectorAll("pre code");Array.prototype.forEach.call(e,d.a.highlightBlock)}),i["default"].config.productionTip=!1,i["default"].use(v["a"]),i["default"].use(d.a);var st=new v["a"]({routes:[{name:"index",path:"/",component:O,meta:{title:"首页"}},{name:"archive",path:"/archive",component:A,meta:{title:"分类"}},{name:"excerpt",path:"/excerpt",component:K,meta:{title:"摘抄"}},{name:"aboutme",path:"/aboutme",component:J,meta:{title:"关于我"}},{name:"article",path:"/article/:article_id",component:tt},{name:"archivelist",path:"/archive/:archive",component:ot},{name:"notfound",path:"*",component:Y,meta:{title:"404"}}]});st.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title+" - 还是少年中","index"==t.name&&(document.title="还是少年中")),n()}),new i["default"]({router:st,render:function(t){return t(u)}}).$mount("#app")},5780:function(t,e,n){},"64a9":function(t,e,n){},"6cd5":function(t,e,n){t.exports=n.p+"img/sleep.a1009372.gif"},7703:function(t,e,n){"use strict";var i=n("5780"),a=n.n(i);a.a},"83a6":function(t,e,n){},"85c8":function(t,e,n){},"94c5":function(t,e,n){"use strict";var i=n("83a6"),a=n.n(i);a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.c0d88d02.png"},df0b:function(t,e,n){"use strict";var i=n("32bb"),a=n.n(i);a.a},e01b:function(t,e,n){}});
//# sourceMappingURL=app.2c60e7d1.js.map