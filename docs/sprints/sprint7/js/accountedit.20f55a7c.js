(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["accountedit"],{"0c1d":function(t,e,a){"use strict";a("3b23")},"3b23":function(t,e,a){},"538d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"member-account-container"}},[a("Header"),a("main",{staticClass:"container",attrs:{property:"mainContentOfPage",resource:"#wb-main",typeof:"WebPageElement"}},[a("h1",{attrs:{property:"name",id:"wb-cont",dir:"ltr"}},[t._v("Member account information")]),a("div",[a("div",{staticClass:"row mrgn-tp-lg mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("button",{staticClass:"btn btn-primary min-width-100 margin-right-16",attrs:{type:"button"},on:{click:function(e){return t.save_edit_account()}}},[t._v("Save")]),a("button",{staticClass:"btn btn-default min-width-100",attrs:{type:"button"},on:{click:function(e){return t.go_view_account()}}},[t._v("Cancel")])])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"full-name-edit"}},[t._v("First & last name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.fullName,expression:"account.fullName"}],staticClass:"form-control input-fields",attrs:{id:"full-name-edit",type:"text",readonly:""},domProps:{value:t.account.fullName},on:{input:function(e){e.target.composing||t.$set(t.account,"fullName",e.target.value)}}})])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"preferred-name-edit"}},[t._v("Preferred name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.preferredName,expression:"account.preferredName"}],staticClass:"form-control input-fields",attrs:{id:"preferred-name-edit",type:"text"},domProps:{value:t.account.preferredName},on:{input:function(e){e.target.composing||t.$set(t.account,"preferredName",e.target.value)}}})])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"phone-number-edit"}},[t._v("Phone number:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.phone,expression:"account.phone"}],staticClass:"form-control input-fields",attrs:{id:"phone-number-edit",type:"tel"},domProps:{value:t.account.phone},on:{input:function(e){e.target.composing||t.$set(t.account,"phone",e.target.value)}}})])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"email-address-edit"}},[t._v("Email address:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.email,expression:"account.email"}],staticClass:"form-control input-fields",attrs:{id:"email-address-edit",type:"email"},domProps:{value:t.account.email},on:{input:function(e){e.target.composing||t.$set(t.account,"email",e.target.value)}}})])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"address-edit"}},[t._v("Physical address:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.fullAddress,expression:"account.fullAddress"}],staticClass:"form-control input-fields",attrs:{id:"address-edit",type:"text"},domProps:{value:t.account.fullAddress},on:{input:function(e){e.target.composing||t.$set(t.account,"fullAddress",e.target.value)}}})])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"posting"}},[t._v("Posting:")]),a("div",{staticClass:"provisional gc-chckbxrdio",attrs:{id:"posting"}},[a("ul",{staticClass:"list-unstyled lst-spcd-2"},[a("li",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.outcan,expression:"account.outcan"}],attrs:{type:"checkbox",id:"posting-outcan",name:"posting-selection"},domProps:{checked:Array.isArray(t.account.outcan)?t._i(t.account.outcan,null)>-1:t.account.outcan},on:{change:function(e){var a=t.account.outcan,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&t.$set(t.account,"outcan",a.concat([i])):r>-1&&t.$set(t.account,"outcan",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.account,"outcan",s)}}}),a("label",{attrs:{for:"posting-outcan"}},[t._v("I am posted outside of Canada (OUTCAN)")])])])])])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"preferred-language"}},[t._v("Preferred language:")]),a("div",{attrs:{id:"preferred-language"}},[a("div",{staticClass:"provisional gc-chckbxrdio"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6 col-xs-auto"},[t._v(" Written: ")]),a("div",{staticClass:"col-xs-6 col-xs-auto"},[a("ul",{staticClass:"list-unstyled lst-spcd-2"},[a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.preferredLanguageWritten,expression:"account.preferredLanguageWritten"}],attrs:{type:"radio",id:"preferred-language-written-english",name:"preferred-language-written-selection",value:"English"},domProps:{checked:t._q(t.account.preferredLanguageWritten,"English")},on:{change:function(e){return t.$set(t.account,"preferredLanguageWritten","English")}}}),a("label",{attrs:{for:"preferred-language-written-english"}},[t._v("English")])]),a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.preferredLanguageWritten,expression:"account.preferredLanguageWritten"}],attrs:{type:"radio",id:"preferred-language-written-french",name:"preferred-language-written-selection",value:"French"},domProps:{checked:t._q(t.account.preferredLanguageWritten,"French")},on:{change:function(e){return t.$set(t.account,"preferredLanguageWritten","French")}}}),a("label",{attrs:{for:"preferred-language-written-french"}},[t._v("French")])])])])])]),a("div",{staticClass:"provisional gc-chckbxrdio"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6 col-xs-auto"},[t._v(" Spoken: ")]),a("div",{staticClass:"col-xs-6 col-xs-auto"},[a("ul",{staticClass:"list-unstyled lst-spcd-2"},[a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.preferredLanguageSpoken,expression:"account.preferredLanguageSpoken"}],attrs:{type:"radio",id:"preferred-language-spoken-english",name:"preferred-language-spoken-selection",value:"English"},domProps:{checked:t._q(t.account.preferredLanguageSpoken,"English")},on:{change:function(e){return t.$set(t.account,"preferredLanguageSpoken","English")}}}),a("label",{attrs:{for:"preferred-language-spoken-english"}},[t._v("English")])]),a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.preferredLanguageSpoken,expression:"account.preferredLanguageSpoken"}],attrs:{type:"radio",id:"preferred-language-spoken-french",name:"preferred-language-spoken-selection",value:"French"},domProps:{checked:t._q(t.account.preferredLanguageSpoken,"French")},on:{change:function(e){return t.$set(t.account,"preferredLanguageSpoken","French")}}}),a("label",{attrs:{for:"preferred-language-spoken-french"}},[t._v("French")])])])])])])])])]),a("div",{staticClass:"row mrgn-bttm-lg"},[a("div",{staticClass:"col-xs-12"},[a("label",{staticClass:"mrgn-bttm-0",attrs:{for:"communications-preferences-edit"}},[t._v("Communications preferences:")]),a("div",{attrs:{id:"communications-preferences-edit"}},[a("div",{staticClass:"provisional gc-chckbxrdio"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-6 col-xs-auto"},[t._v(" Email notifications: ")]),a("div",{staticClass:"col-xs-6 col-xs-auto"},[a("ul",{staticClass:"list-unstyled lst-spcd-2"},[a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.emailNotifications,expression:"account.emailNotifications"}],attrs:{type:"radio",id:"communications-preferences-on",name:"communications-preferences-selection",value:"On"},domProps:{checked:t._q(t.account.emailNotifications,"On")},on:{change:function(e){return t.$set(t.account,"emailNotifications","On")}}}),a("label",{attrs:{for:"communications-preferences-on"}},[t._v("On (recommended)")])]),a("li",{staticClass:"radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account.emailNotifications,expression:"account.emailNotifications"}],attrs:{type:"radio",id:"communications-preferences-off",name:"communications-preferences-selection",value:"Off"},domProps:{checked:t._q(t.account.emailNotifications,"Off")},on:{change:function(e){return t.$set(t.account,"emailNotifications","Off")}}}),a("label",{attrs:{for:"communications-preferences-off"}},[t._v("Off")])])])])])]),t._m(0)])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"row mrgn-tp-lg"},[a("div",{staticClass:"col-xs-12"},[a("button",{staticClass:"btn btn-primary min-width-100 margin-right-16",attrs:{type:"button"},on:{click:function(e){return t.save_edit_account()}}},[t._v("Save")]),a("button",{staticClass:"btn btn-default min-width-100",attrs:{type:"button"},on:{click:function(e){return t.go_view_account()}}},[t._v("Cancel")])])])])])])]),a("Footer")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",[t._v(" Note: Email notifications must be turned on to receive a notification that there has been activity on your account. ")])])}],i=a("ad1b"),r=a("ad6e"),c={name:"member-account-edit",components:{Header:i["a"],Footer:r["a"]},data:function(){return{account:{}}},mounted:function(){var t=this;this.axios.get("/api/member/account").then((function(e){t.account=e.data}))["catch"]((function(t){console.error(t)}))},methods:{save_edit_account:function(){var t=this;this.axios.post("/api/member/account",this.account).then((function(e){console.log(e),t.go_view_account()}))["catch"]((function(t){console.error(t)}))},go_view_account:function(){this.$router.push({name:"MemberAccount"})}}},o=c,l=(a("0c1d"),a("2877")),u=Object(l["a"])(o,n,s,!1,null,"3aaad0bc",null);e["default"]=u.exports}}]);
//# sourceMappingURL=accountedit.20f55a7c.js.map