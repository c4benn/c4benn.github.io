(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{351:function(t,e,r){var content=r(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("ad670800",content,!0,{sourceMap:!1})},429:function(t,e,r){"use strict";r(351)},430:function(t,e,r){var o=r(42)(!1);o.push([t.i,".root[data-fpd]{z-index:inherit;-webkit-overflow-scrolling:touch}.forgot-password-main[data-fpd]{height:var(--full-dialog)}.content-wrapper[data-fpd]{height:100%}@media (hover:hover) and (pointer:fine){.close-btn[data-fpd]:not(:hover):not(:focus):before{opacity:.05}}.main[data-fpd]{padding-top:.5rem;height:calc(100% - var(--sheet-header-height) - .5px);position:relative}.title-wrapper[data-fpd]{text-align:center;margin:2.5rem 0 1.5rem}.title[data-fpd]{font-size:1.65rem!important;font-weight:500!important;opacity:var(--t-body);margin-bottom:1rem}.subtitle[data-fpd]{font-size:1rem;font-weight:500;opacity:var(--t-subtitle);margin-bottom:.75rem}.caption[data-fpd]{font-size:.95rem;font-weight:400;opacity:var(--t-caption)}.form-wrapper{overflow:hidden;max-width:612px;margin:2rem auto 0}.alert[data-fpd]{transition:var(--duration) transform}.alert[data-fpd].__hidden{transform:translate3d(0,var(--translate-y),0)}.alert-header[data-fpd]{font-size:1.05rem;font-weight:600;opacity:var(--t-title);margin-bottom:.25rem}.alert-desc[data-fpd]{font-size:.975rem;opacity:var(--t-title);margin-bottom:.25rem}.form[data-fpd]{padding:0 1.5rem;margin-top:1.5rem;display:grid;transition:var(--duration) transform}.form[data-fpd]:not(.alert-visible){transform:translate3d(0,var(--translate-y),0)}.form[data-fpd]>.root[data-uiit]{margin-right:0!important}.action[data-fpd]{width:calc(100% - 3rem)!important;justify-self:center;margin-top:2rem;display:flex!important;justify-content:center;align-items:center}.countdown[data-fpd]{margin-top:1rem;letter-spacing:.1px;opacity:var(--t-caption);font-size:.975rem;text-align:center}",""]),t.exports=o},563:function(t,e,r){"use strict";r.r(e);r(16),r(11),r(12),r(17),r(10),r(18);var o=r(1),n=r(6),main=(r(32),r(29),r(0));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"ForgotPassword",props:{vmodel:Boolean},data:function(){return{transitionState:"",form:{email:""},recoverErrorMessage:"",waiting:!1,alertHeight:void 0,alertHeightSet:0}},computed:{v_model:function(){var t=this,e=function(e){return t.$emit("vmodel",void 0===e?!t.vmodel:e)};return{isActive:this.vmodel,open:function(){return e(!0)},close:function(){return requestAnimationFrame((function(){return e(!1)}))},toggle:e}},supabase:function(){return this.$store.getters.supabase},countdown:function(){return this.$store.state.forgotPasswordTimeout}},watch:{transitionState:function(){this.$emit("transition-state",this.transitionState)}},methods:{resetComponent:function(){this.form={email:""},this.recoverErrorMessage="",this.waiting=!1,this.alertHeight=void 0,this.alertHeightSet=0,this.showAlert=!1}},render:function(t){var e,r,n=this,c={"data-fpd":""},p=function(e,r){return t("p",e,r)},h3=function(e,r){return t("h3",e,r)},h4=function(e,r){return t("h4",e,r)},h5=function(e,r){return t("h5",e,r)},div=function(e,r){return t("div",e,r)},form=function(e,r){return t("ui-form",e,r)},input=function(e){return t("ui-input",e)},d=function(e,r){return t("ui-btn",e,r)},m=function(e,r){return t("appLoader",e,r)},f=function(e,r){return t("ui-alert",e,r)};return e={attrs:l({},c),props:{label:"forgot password",vmodel:this.vmodel,transition:{transition:"slide-y",fade:!1,duration:{enter:"500",leave:"400"},delay:{enter:20}},backdrop:this.$theme.light?.5:.35,contentClass:"forgot-password-main",contentAttrs:l({},c),background:this.$theme.dark?"theme-surface":void 0},on:{vmodel:function(t){n.$emit("vmodel",t)},"&mousedown":function(t){t.stopPropagation()},"&keyup":function(t){t.stopPropagation()},afterLeave:this.resetComponent,beforeEnter:this.resetComponent},staticClass:"root",class:[{active:this.vmodel}],scopedSlots:{default:function(e){return n.transitionState=e.state,div({attrs:l({},c),staticClass:"content-wrapper"},[div({attrs:l({},c),staticClass:"header sheet-header fill-before-after",on:{"!click":function(){requestAnimationFrame((function(){var t;null===(t=n.$refs["item-wrapper"])||void 0===t||t.scrollTo({top:0,left:0,behavior:"smooth"})}))}}},[(h={attrs:l(l({},c),{},{"aria-hidden":n.vmodel?void 0:"true","aria-label":n.vmodel?void 0:"forgot password"}),staticClass:"heading sheet-heading line-clamp-1"},v="Forgot password",t("h1",h,v)),d({props:{size:"md",text:!0,persistent:!0},attrs:l({},c),staticClass:"close-btn sheet-close-btn",on:{click:function(t){t.stopPropagation(),n.v_model.close()}}},"Close")]),div({attrs:l({},c),staticClass:"main fill-before"},[div({attrs:l({},c),staticClass:"title-wrapper"},[h3({attrs:l({},c),staticClass:"title"},"Good ".concat(n.$greeting)),h4({attrs:l({},c),staticClass:"subtitle"},"Let's help you recover your password."),h5({attrs:l({},c),staticClass:"caption"},"Enter your email below.")]),div({attrs:l({},c),staticClass:"form-wrapper",style:{"--translate-y":n.alertHeight,"--duration":n.alertHeightSet<2?"0s":"0.3s"}},[f({ref:"alert",props:{background:"success",icon:"check"},attrs:l({},c),class:["alert",{"__hidden invisible":!n.showAlert}],on:{"alert-height":function(t){n.alertHeight="-".concat(t+1,"px"),n.alertHeightSet++}}},[div({attrs:l({},c),staticClass:"alert-info"},[p({attrs:l({},c),staticClass:"alert-header"},"Recovery email sent"),p({attrs:l({},c),staticClass:"alert-desc"},'You\'ll recieve a confirmation from an email that ends with "supabase.io".'),p({attrs:l({},c),staticClass:"alert-desc",domProps:{innerHTML:"Kindly click on the confirmation link, and you'll be redirected to set a new password. ✌"}})])]),form({props:{name:"forgot-password",submitData:{attrs:l({},c),staticClass:"action",props:{background:"info",flat:!0,disabled:n.waiting||!!n.countdown.count,actionButton:!0}},submitText:n.countdown.count?"Please Wait":"Send recovery link"},attrs:l(l({},c),{},{action:".",autocomplete:"on"}),staticClass:"form fill-before",class:[{"alert-visible":n.showAlert}],on:{"submit-clicked":function(){n.recoverErrorMessage=""},"submit-form":(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,main.sleep.call(n,n.showAlert?316:0);case 2:return n.showAlert=!1,n.waiting=!0,t.next=6,n.supabase.auth.api.resetPasswordForEmail(n.form.email);case 6:if(e=t.sent,n.waiting=!1,!e.error){t.next=10;break}return t.abrupt("return",n.recoverErrorMessage=e.error.message);case 10:r=n.$refs.alert.$el.clientHeight,n.alertHeightSet++,n.$nextTick((function(){n.alertHeight="-".concat(r+1,"px"),n.$nextTick(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.showAlert=!0,t.next=3,main.sleep.call(n,100);case 3:n.$store.commit("UPDATE_",{path:"forgotPasswordTimeout",value:{email:n.form.email,count:0,timeStamp:performance.now()}}),n.$nextTick((function(){n.$store.commit("UPDATE_",{path:"forgotPasswordTimeout",value:{email:n.form.email,count:60,timeStamp:performance.now()}})}));case 5:case"end":return t.stop()}}),t)}))))}));case 13:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})}},[n.waiting?m({slot:"submitText",props:{size:"1.5rem"},staticClass:"loader"}):null,input({props:{readonly:n.waiting,disabled:!!n.countdown.count,label:"Email",autocomplete:"email",id:"recovery-email",vmodel:n.countdown.count?n.countdown.email:n.form.email,type:"email",placeholder:"example@domain",hint:"The email you used in signing up",validator:function(t){return n.recoverErrorMessage?/60\s+seconds/i.test(n.recoverErrorMessage)?"Try again in 60 seconds":n.recoverErrorMessage:Object(main.emailValidator)(t)}},on:{vmodel:function(t){n.form.email=t,n.recoverErrorMessage=""}}}),n.countdown.count?p({slot:"append",attrs:l({},c),staticClass:"countdown"},"Resend verification link in ".concat(n.countdown.count," second").concat(n.countdown.count>1?"s":"")):null])])])]);var r,h,v}}},t("ui-sheet",e,r)}},m=(r(429),r(9)),component=Object(m.a)(d,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);