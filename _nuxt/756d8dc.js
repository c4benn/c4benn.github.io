(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{362:function(t,e,n){var content=n(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("7e7fd16c",content,!0,{sourceMap:!1})},452:function(t,e,n){"use strict";n(362)},453:function(t,e,n){var r=n(42)(!1);r.push([t.i,".root[data-shr]{--back-icon-size:32px}.back-btn[data-shr]{margin-left:1rem;color:inherit;background:none;--svg-md-size:calc(var(--back-icon-size) - 2px);--md-size:var(--back-icon-size)}.title.show-back[data-shr]{left:50%;transform:translateX(-50%) scale(.925)}.title[data-shr]{position:absolute;width:auto;height:100%;margin-left:0;left:1.25rem;display:flex;align-items:center;background:inherit}.action-btn[data-shr]{position:absolute;width:auto!important;right:.5rem!important;margin-right:0!important;z-index:1}",""]),t.exports=r},575:function(t,e,n){"use strict";n.r(e);n(16),n(11),n(12),n(17),n(10),n(18);var r=n(6),main=n(0);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"SheetHeader",functional:!0,props:{heading:{type:String,required:!0},closeText:{type:String,default:"Close"},showBack:Boolean},render:function(t,e){var n,r,data,c;return n={"data-shr":""},r=e.props,data=e.data,c=function(e,n){return t("ui-transition",e,n)},function(e,n){return t("header",e,n)}(o(o({},data),{},{attrs:o(o({},n),data.attrs||{}),staticClass:"root sheet-header fill-before-after".concat(data.staticClass?" ".concat(data.staticClass):""),class:[e.data.class||[],{"show-back":r.showBack}]}),[c({props:{transition:!1,fade:!0,ease:"linear",duration:"250ms"},scopedSlots:{default:function(){return r.showBack&&function(e,n){return t("ui-icon",e,n)}({key:"".concat(r.showBack),attrs:o(o({},n),{},{title:"back"}),props:{name:"chevronLeft",clickable:!0,title:"back"},staticClass:"back-btn",on:{click:function(){Object(main.functionalEmit)({event:"back-clicked",payload:!r.showBack,c:e})}}})}}}),c({props:{transition:!1,duration:{leave:50,enter:250},ease:"linear"},scopedSlots:{default:function(){return function(e,n){return t("h1",e,n)}({key:"".concat(r.showBack),attrs:o({},n),staticClass:"title sheet-heading",class:[{"show-back":r.showBack}],style:{"--action-length":"calc(44px + ".concat(r.heading.length,"ch + .5rem)")}},Object(main.capitalize)(r.heading))}}}),function(e,n){return t("ui-btn",e,n)}({props:{size:"md",text:!0,persistent:!0},attrs:o({},n),staticClass:"action-btn sheet-close-btn",on:{click:function(t){return Object(main.functionalEmit)({c:e,event:"action-clicked",payload:t})}}},r.closeText)])}},d=(n(452),n(9)),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);