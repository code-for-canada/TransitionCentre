(function(t){function a(a){for(var n,s,o=a[0],l=a[1],c=a[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(a);while(d.length)d.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,s=1;s<e.length;s++){var o=e[s];0!==r[o]&&(n=!1)}n&&(i.splice(a--,1),t=l(l.s=e[0]))}return t}var n={},s={app:0},r={app:0},i=[];function o(t){return l.p+"js/"+({calendar:"calendar",goals:"goals",history:"history",plan:"plan",plan2:"plan2",plan3:"plan3",schedule:"schedule"}[t]||t)+"."+{calendar:"36967919",goals:"3dfcf077",history:"5ad76d7b",plan:"f90ff495",plan2:"e60bc65c",plan3:"994708d7",schedule:"8754587f"}[t]+".js"}function l(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var a=[],e={calendar:1,goals:1,history:1,plan:1,plan2:1,plan3:1,schedule:1};s[t]?a.push(s[t]):0!==s[t]&&e[t]&&a.push(s[t]=new Promise((function(a,e){for(var n="css/"+({calendar:"calendar",goals:"goals",history:"history",plan:"plan",plan2:"plan2",plan3:"plan3",schedule:"schedule"}[t]||t)+"."+{calendar:"09b6a9af",goals:"faeceb41",history:"3e7360c5",plan:"ccbc6a7b",plan2:"a384bffe",plan3:"abece2d8",schedule:"47afd239"}[t]+".css",r=l.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return a()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===n||u===r)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var n=a&&a.target&&a.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[t],p.parentNode.removeChild(p),e(i)},p.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){s[t]=0})));var n=r[t];if(0!==n)if(n)a.push(n[2]);else{var i=new Promise((function(a,e){n=r[t]=[a,e]}));a.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(a){u.onerror=u.onload=null,clearTimeout(p);var e=r[t];if(0!==e){if(e){var n=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,e[1](d)}r[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(a)},l.m=t,l.c=n,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)l.d(e,n,function(a){return t[a]}.bind(null,n));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var p=u;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0162":function(t,a,e){"use strict";e("844e")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],i=e("2877"),o={},l=Object(i["a"])(o,s,r,!1,null,null,null),c=l.exports,u=(e("d3b7"),e("3ca3"),e("ddb0"),e("8c4f")),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"view-container"}},[e("Header"),e("main",{staticClass:"container",attrs:{property:"mainContentOfPage",resource:"#wb-main",typeof:"WebPageElement"}},[e("h1",{attrs:{property:"name",id:"wb-cont",dir:"ltr"}},[t._v("My Digital Transition Portal")]),t._m(0),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("section",[t._m(1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("p",[t._v(" Plan your activities and set goals for a smooth transition with help from your Transition Advisor. ")]),e("router-link",{attrs:{to:"/plan"}},[e("button",{staticClass:"btn btn-call-to-action",attrs:{type:"button"}},[t._v("See My Transition Plan")])])],1)])]),t._m(2)]),e("div",{staticClass:"col-md-4"},[e("section",{staticClass:"blue-section-background"},[e("h2",{staticClass:"mrgn-tp-0"},[t._v("Book a consultation")]),e("div",{staticClass:"row"},[t._m(3),e("div",{staticClass:"col-xs-12 text-center blue-section-nav-padding"},[e("router-link",{attrs:{to:"/schedule"}},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[t._v("Book Consultation")])])],1),e("div",{staticClass:"col-xs-12 text-center blue-section-nav-padding"},[e("router-link",{attrs:{to:"/history"}},[e("a",{attrs:{href:"#"}},[t._v("View upcoming appointments")])])],1)])]),e("section",{staticClass:"blue-section-background"},[e("h2",{staticClass:"mrgn-tp-0"},[t._v("Transition Support")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("ul",[t._m(4),t._m(5),e("li",[e("router-link",{attrs:{to:"/calendar"}},[e("a",{attrs:{href:"#"}},[t._v(" Transition Calendar ")])])],1),t._m(6)])])])])]),t._m(7)])]),e("Footer")],1)},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("p",[t._v(" Welcome to My Digital Transition Portal! This is your central location to plan and complete your transition from the military to post-service life. Not sure where to start? Your "),e("a",{attrs:{href:"#"}},[t._v("Transition Advisor")]),t._v(" is available to help! ")])]),e("div",{staticClass:"col-md-6"},[e("img",{staticClass:"img-responsive",attrs:{src:"https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/portal_image.png",alt:""}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-with-label-container"},[e("h2",{staticClass:"title-with-label"},[t._v("My Transition Plan")]),e("span",{staticClass:"title-label-container"},[e("span",{staticClass:"label label-default"},[e("small",[t._v("44% Complete")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("h2",[t._v("Transition Tools")]),e("div",{staticClass:"row"},[e("section",{staticClass:"col-md-6"},[e("h3",{staticClass:"h5"},[e("a",{attrs:{href:"#"}},[t._v("Manage your release")])]),e("p",[t._v("Submit or update your release memo.")])]),e("section",{staticClass:"col-md-6"},[e("h3",{staticClass:"h5"},[e("a",{attrs:{href:"https://dtc.ongarde.net/en/career"}},[t._v("Find your renewed purpose")])]),e("p",[t._v("Explore your skills and education options with the MNET and MySet tools.")])]),e("section",{staticClass:"col-md-6"},[e("h3",{staticClass:"h5"},[e("a",{attrs:{href:"#"}},[t._v("Learn about transition")])]),e("p",[t._v("Access transition related learnings, including My Transition 101 and Second Career Assistance Network seminars.")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-xs-12"},[e("p",[t._v(" Book a consultation for transition feedback, advice and help. ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#"}},[t._v(" Manage documents ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#"}},[t._v(" My transition notes ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/department-national-defence/services/benefits-military/transition/understanding-transition/transition-centres.html"}},[t._v(" Contact Transition Centre ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-12"},[e("section",[e("h2",[t._v("Featured Resources")]),e("div",{staticClass:"row"},[e("section",{staticClass:"col-md-4"},[e("img",{staticClass:"img-responsive",attrs:{src:"https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/dtc_image.png",alt:""}}),e("h3",{staticClass:"h5"},[e("a",{attrs:{href:"https://dtc.ongarde.net"}},[t._v("Digital Transition Centre")])]),e("p",[t._v("The DTC is a central resource for all transition related information to complement your portal.")])]),e("section",{staticClass:"col-md-4"},[e("img",{staticClass:"img-responsive",attrs:{src:"https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/vac_image.png",alt:""}}),e("h3",{staticClass:"h5"},[e("a",{attrs:{href:"https://www.veterans.gc.ca/eng/e_services?utm_campaign=MVA"}},[t._v("MyVAC")])]),e("p",[t._v("MyVAC is a central resource for all benefits and veteran related information.")])]),e("section",{staticClass:"col-md-4"},[e("img",{staticClass:"img-responsive",attrs:{src:"https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/mfs_image.png",alt:""}}),e("h3",{staticClass:"h5"},[e("a",{attrs:{href:"https://www.cafconnection.ca/National/Programs-Services/For-Transitioning-Veterans-and-their-Families.aspx"}},[t._v("Military Family Services")])]),e("p",[t._v("Learn how we can help your family through transition to post-service life.")])])])])])}],h=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"par iparys_inherited"},[e("div",{staticClass:"global-header"},[e("nav",[e("ul",{staticClass:"wb-init wb-disable-inited",attrs:{id:"wb-tphp"}})]),e("header",[e("div",{staticClass:"container",attrs:{id:"wb-bnr"}},[e("div",{staticClass:"row"},[e("section",{staticClass:"col-xs-3 col-sm-12 pull-right text-right",attrs:{id:"wb-lng"}},[e("h2",{staticClass:"wb-inv"},[t._v("Language selection")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("ul",{staticClass:"list-inline mrgn-bttm-0"},[e("li",[e("a",{attrs:{lang:"fr",href:"https://translate.google.com/translate?sl=en&tl=fr&u=https://code-for-canada.github.io/transition-centre/sprints/sprint4/"}},[e("span",{staticClass:"hidden-xs"},[t._v("Français")]),e("abbr",{staticClass:"visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase",attrs:{title:"Français"}},[t._v("fr")])])])])])])]),e("div",{staticClass:"brand col-xs-9 col-sm-5 col-md-4",attrs:{property:"publisher",typeof:"GovernmentOrganization"}},[e("a",{attrs:{href:"https://www.canada.ca/en.html",property:"url"}},[e("img",{attrs:{src:"https://code-for-canada.github.io/transition-centre/img/wet-boew/sig-blk-en.svg",alt:"Government of Canada",property:"logo"}})])])])]),e("nav",{staticClass:"gcweb-menu",attrs:{typeof:"SiteNavigationElement"}},[e("div",{staticClass:"container"},[e("h2",{staticClass:"wb-inv"},[t._v("LOG OUT")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 pull-right text-right"},[e("a",{staticClass:"btn btn-dark",attrs:{href:"../../"}},[t._v("LOG OUT")])])])])]),e("nav",{attrs:{id:"wb-bc",property:"breadcrumb"}},[e("h2",{staticClass:"wb-inv"},[t._v("You are here:")]),e("div",{staticClass:"container"},[e("ol",{staticClass:"breadcrumb"},[e("li",[e("a",{attrs:{href:"./"}},[t._v("My Digital Transition Portal")])])])])])])])])}],v=(e("f0bc"),{}),f=Object(i["a"])(v,h,m,!1,null,"6c1c65f4",null),g=f.exports,b=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-container"},[e("footer",{attrs:{id:"wb-info"}},[e("div",{staticClass:"landscape"},[e("nav",{staticClass:"container wb-navcurr"},[e("h2",{staticClass:"wb-inv"},[t._v("About government")]),e("ul",{staticClass:"list-unstyled colcount-sm-2 colcount-md-3"},[e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/contact.html"}},[t._v("Contact us")])]),e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/government/dept.html"}},[t._v("Departments and agencies")])]),e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/government/publicservice.html"}},[t._v("Public service and military")])]),e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/news.html"}},[t._v("News")])]),e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/government/system/laws.html"}},[t._v("Treaties, laws and regulations")])]),e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/transparency/reporting.html"}},[t._v("Government-wide reporting")])]),e("li",[e("a",{attrs:{href:"https://pm.gc.ca/eng"}},[t._v("Prime Minister")])]),e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/government/system.html"}},[t._v("How government works")])]),e("li",[e("a",{attrs:{href:"https://open.canada.ca/en/"}},[t._v("Open government")])])])])]),e("div",{staticClass:"brand"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("nav",{staticClass:"col-md-9 col-lg-10 ftr-urlt-lnk"},[e("h2",{staticClass:"wb-inv"},[t._v("About this site")]),e("ul",[e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/social.html"}},[t._v("Social media")])]),e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/mobile.html"}},[t._v("Mobile applications")])]),e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/newsite.html"}},[t._v("About Canada.ca")])]),e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/transparency/terms.html"}},[t._v("Terms and conditions")])]),e("li",[e("a",{attrs:{href:"https://www.canada.ca/en/transparency/privacy.html"}},[t._v("Privacy")])])])]),e("div",{staticClass:"col-xs-6 visible-sm visible-xs tofpg"},[e("a",{attrs:{href:"#wb-cont"}},[t._v("Top of page "),e("span",{staticClass:"glyphicon glyphicon-chevron-up"})])]),e("div",{staticClass:"col-xs-6 col-md-3 col-lg-2 text-right"},[e("img",{attrs:{src:"https://code-for-canada.github.io/transition-centre/img/wet-boew/wmms-blk.svg",alt:"Symbol of the Government of Canada"}})])])])])])])}],_=(e("9c99"),{}),C=Object(i["a"])(_,b,w,!1,null,"799a31c7",null),y=C.exports,x={name:"members-portal",components:{Header:g,Footer:y}},T=x,E=(e("0162"),Object(i["a"])(T,d,p,!1,null,"410df98c",null)),P=E.exports;n["a"].use(u["a"]);var k=[{path:"/",name:"MembersPortal",component:P},{path:"/plan",name:"MembersPlan",component:function(){return e.e("plan").then(e.bind(null,"5b00"))}},{path:"/goals",name:"SmartGoals",component:function(){return e.e("goals").then(e.bind(null,"bb7e"))}},{path:"/plan2",name:"MembersPlan2",component:function(){return e.e("plan2").then(e.bind(null,"e930"))}},{path:"/plan3",name:"MembersPlan3",component:function(){return e.e("plan3").then(e.bind(null,"44a4"))}},{path:"/calendar",name:"CalendarView",component:function(){return e.e("calendar").then(e.bind(null,"e542"))}},{path:"/history",name:"ConsultationHistory",component:function(){return e.e("history").then(e.bind(null,"9fef"))}},{path:"/schedule",name:"ConsultationHistory",component:function(){return e.e("schedule").then(e.bind(null,"70c9"))}}],M=new u["a"]({routes:k}),O=M;n["a"].config.productionTip=!1,new n["a"]({router:O,render:function(t){return t(c)}}).$mount("#app")},"844e":function(t,a,e){},"871f":function(t,a,e){},"9c99":function(t,a,e){"use strict";e("9e5e")},"9e5e":function(t,a,e){},f0bc:function(t,a,e){"use strict";e("871f")}});
//# sourceMappingURL=app.6ff8641f.js.map