(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["accountedit"],{"538d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"member-account-container"}},[a("Header"),a("main",{staticClass:"container",attrs:{property:"mainContentOfPage",resource:"#wb-main",typeof:"WebPageElement"}},[a("h1",{attrs:{property:"name",id:"wb-cont",dir:"ltr"}},[e._v("Preferences")]),a("div",[a("div",{staticClass:"row mrgn-tp-lg mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("button",{staticClass:"btn btn-primary min-width-100 margin-right-16",attrs:{type:"button"},on:{click:function(t){return e.save_edit_account()}}},[e._v(" Save ")]),a("button",{staticClass:"btn btn-default min-width-100",attrs:{type:"button"},on:{click:function(t){return e.go_view_account()}}},[e._v(" Cancel ")])])]),a("section",[a("h2",[e._v("Communications")]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"phone-number-edit"}},[e._v("Phone number:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.account.phone,expression:"account.phone"}],staticClass:"form-control input-fields",attrs:{id:"phone-number-edit",type:"tel"},domProps:{value:e.account.phone},on:{input:function(t){t.target.composing||e.$set(e.account,"phone",t.target.value)}}})])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"email-address-edit"}},[e._v("Email address:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.account.email,expression:"account.email"}],staticClass:"form-control input-fields",attrs:{id:"email-address-edit",type:"email"},domProps:{value:e.account.email},on:{input:function(t){t.target.composing||e.$set(e.account,"email",t.target.value)}}})])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"address-edit"}},[e._v("Postal address:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.account.fullAddress,expression:"account.fullAddress"}],staticClass:"form-control input-fields",attrs:{id:"address-edit",type:"text"},domProps:{value:e.account.fullAddress},on:{input:function(t){t.target.composing||e.$set(e.account,"fullAddress",t.target.value)}}})])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"preferred-language"}},[e._v("Preferred language:")]),a("div",{attrs:{id:"preferred-language"}},[a("div",{staticClass:"provisional gc-chckbxrdio"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6 col-xs-auto"},[e._v("Written:")]),a("div",{staticClass:"col-xs-6 col-xs-auto"},[a("ul",{staticClass:"list-unstyled lst-spcd-2"},[a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.account.preferredLanguageWritten,expression:"account.preferredLanguageWritten"}],attrs:{type:"radio",id:"preferred-language-written-english",name:"preferred-language-written-selection",value:"English"},domProps:{checked:e._q(e.account.preferredLanguageWritten,"English")},on:{change:function(t){return e.$set(e.account,"preferredLanguageWritten","English")}}}),a("label",{attrs:{for:"preferred-language-written-english"}},[e._v("English")])]),a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.account.preferredLanguageWritten,expression:"account.preferredLanguageWritten"}],attrs:{type:"radio",id:"preferred-language-written-french",name:"preferred-language-written-selection",value:"French"},domProps:{checked:e._q(e.account.preferredLanguageWritten,"French")},on:{change:function(t){return e.$set(e.account,"preferredLanguageWritten","French")}}}),a("label",{attrs:{for:"preferred-language-written-french"}},[e._v("French")])])])])])]),a("div",{staticClass:"provisional gc-chckbxrdio"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6 col-xs-auto"},[e._v("Spoken:")]),a("div",{staticClass:"col-xs-6 col-xs-auto"},[a("ul",{staticClass:"list-unstyled lst-spcd-2"},[a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.account.preferredLanguageSpoken,expression:"account.preferredLanguageSpoken"}],attrs:{type:"radio",id:"preferred-language-spoken-english",name:"preferred-language-spoken-selection",value:"English"},domProps:{checked:e._q(e.account.preferredLanguageSpoken,"English")},on:{change:function(t){return e.$set(e.account,"preferredLanguageSpoken","English")}}}),a("label",{attrs:{for:"preferred-language-spoken-english"}},[e._v("English")])]),a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.account.preferredLanguageSpoken,expression:"account.preferredLanguageSpoken"}],attrs:{type:"radio",id:"preferred-language-spoken-french",name:"preferred-language-spoken-selection",value:"French"},domProps:{checked:e._q(e.account.preferredLanguageSpoken,"French")},on:{change:function(t){return e.$set(e.account,"preferredLanguageSpoken","French")}}}),a("label",{attrs:{for:"preferred-language-spoken-french"}},[e._v("French")])])])])])])])])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"communications-preferences-edit"}},[e._v(" Automated messages: ")]),a("div",{attrs:{id:"communications-preferences-edit"}},[a("div",{staticClass:"provisional gc-chckbxrdio"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6 col-xs-auto"},[e._v("Email notifications:")]),a("div",{staticClass:"col-xs-6 col-xs-auto"},[a("ul",{staticClass:"list-unstyled lst-spcd-2"},[a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.account.emailNotifications,expression:"account.emailNotifications"}],attrs:{type:"radio",id:"communications-preferences-on",name:"communications-preferences-selection",value:"On"},domProps:{checked:e._q(e.account.emailNotifications,"On")},on:{change:function(t){return e.$set(e.account,"emailNotifications","On")}}}),a("label",{attrs:{for:"communications-preferences-on"}},[e._v("On (recommended)")])]),a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.account.emailNotifications,expression:"account.emailNotifications"}],attrs:{type:"radio",id:"communications-preferences-off",name:"communications-preferences-selection",value:"Off"},domProps:{checked:e._q(e.account.emailNotifications,"Off")},on:{change:function(t){return e.$set(e.account,"emailNotifications","Off")}}}),a("label",{attrs:{for:"communications-preferences-off"}},[e._v("Off")])])])])])]),e._m(0)])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"row mrgn-tp-lg"},[a("div",{staticClass:"col-xs-12"},[a("button",{staticClass:"btn btn-primary min-width-100 margin-right-16",attrs:{type:"button"},on:{click:function(t){return e.save_edit_account()}}},[e._v(" Save ")]),a("button",{staticClass:"btn btn-default min-width-100",attrs:{type:"button"},on:{click:function(t){return e.go_view_account()}}},[e._v(" Cancel ")])])])])])])]),a("Footer")],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("i",[e._v(" Note: Email notifications must be turned on to receive a notification that there has been activity on your account. ")])])}],i=a("ad1b"),r=a("ad6e"),o={name:"member-account-edit",components:{Header:i["a"],Footer:r["a"]},data:function(){return{account:{}}},mounted:function(){var e=this;this.axios.get("/api/member/account").then((function(t){e.account=t.data}))["catch"]((function(e){console.error(e)}))},methods:{save_edit_account:function(){var e=this;this.axios.post("/api/member/account",this.account).then((function(t){console.log(t),e.go_view_account()}))["catch"]((function(e){console.error(e)}))},go_view_account:function(){this.$router.push({name:"MemberAccount"})}}},c=o,l=(a("7d66"),a("2877")),u=Object(l["a"])(c,n,s,!1,null,"4c22420c",null);t["default"]=u.exports},"564e":function(e,t,a){},"7d66":function(e,t,a){"use strict";a("564e")}}]);
//# sourceMappingURL=accountedit.02fe269b.js.map