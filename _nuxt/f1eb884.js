(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{592:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n(1),main=(n(29),n(67),n(10),n(16),n(11),n(12),n(17),n(18),n(0));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"UiClickable",props:{persistent:{type:Boolean,default:void 0},persistentOffset:{type:Number,default:80},tag:{type:String,default:"button"},native:Boolean,to:{type:[String,Object],default:function(){}},componentProps:{type:Object,default:function(){return{}}}},data:function(){return{pseudoActive:!1,activeEvent:"",slowActiveTransition:null,boundingClient:{empty:!0}}},watch:{pseudoActive:function(t){this.$emit("pseudo-active",t,this.$el)},"$breakpoints.matches":function(){this.pseudoActive=!1,this.slowActiveTransition=!1,this.boundingClient={empty:!0}}},methods:{getEvents:function(t){var e,n,o=this,c=function(t){t?o.pseudoActive=t:(o.pseudoActive=t,o.slowActiveTransition=t,o.boundingClient={empty:!0})},l=function(t){return o.activeEvent=t},f=this.$store.state,v=f.isTouchDevice,d=f.isStrictTouchDevice,h={"&!touchstart":function(t){l("touch"),c(!0)},"&!touchmove":function(t){"touch"==o.activeEvent&&o.$nextTick((function(){if(o.persistent&&o.boundingClient.empty){var e,n,r=(null==o||null===(e=o.$el)||void 0===e||null===(n=e.getBoundingClientRect)||void 0===n?void 0:n.call(e))||{},l=function(path){return r[path]||0},f=pageYOffset,v=pageXOffset;o.boundingClient={},o.boundingClient.top=l("top")+f,o.boundingClient.bottom=l("bottom")+f,o.boundingClient.left=l("left")+v,o.boundingClient.right=l("right")+v}var d=t.touches[0].pageX,h=t.touches[0].pageY,m=o.boundingClient.top,O=o.boundingClient.left,y=o.boundingClient.bottom,w=o.boundingClient.right,j=o.persistentOffset+1;if(o.persistent){var k=h+j<=m,C=y+j<=h,A=d+j<=O,x=w+j<=d;o.boundingClient.empty||(o.pseudoActive=!(k||C||A||x),o.slowActiveTransition=o.pseudoActive)}else c(!1)}))},"&!touchend":(n=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("touch"!=o.activeEvent){t.next=9;break}if(!o.persistent){t.next=8;break}if(o.boundingClient.empty||!o.pseudoActive){t.next=8;break}return Object(main.vibrate)(),t.next=7,Object(main.nextFrame)();case 7:o.$emit("active-click",e);case 8:c(!1);case 9:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),"&!touchcancel":function(t){c(!1)},"&!mousedown":function(t){l("mouse"),d||c(!0)},"&!mousemove":function(t){requestAnimationFrame((function(){d||"mouse"!=o.activeEvent||c(!1)}))},"&!mouseup":function(t){d||"mouse"!=o.activeEvent||c(!1)},"!keydown":(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!/space|enter/i.test(Object(main.eventKey)(e))){t.next=8;break}if(e.preventDefault(),o.readonly){t.next=8;break}return c(!0),t.next=7,Object(main.nextFrame)();case 7:null===(n=e.currentTarget)||void 0===n||null===(r=n.click)||void 0===r||r.call(n);case 8:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)}),"!keyup":function(t){var e,n;/space|enter/i.test(Object(main.eventKey)(t))&&(t.preventDefault(),o.readonly||(null===(e=t.currentTarget)||void 0===e||null===(n=e.click)||void 0===n||n.call(e),c(!1)))},"&!blur":function(t){c(!1)},"&!click":function(t){c(!1)}};return Object.keys(h).forEach((function(t){if(!v&&/touch/.test(t))return delete h[t];d&&/mouse/.test(t)&&delete h[t]})),h}},render:function(t){var e=this,n=function(t){return e.getEvents(t)};return t(this.tag,{attrs:l({},this.$attrs),class:[{"click-persistent":this.persistent,"slow-active":this.slowActiveTransition,Active:this.pseudoActive}],on:l(l({},this.$listeners),n()),props:l({to:this.to},this.componentProps),nativeOn:/nuxt-?link|router-?link/i.test(this.tag)?l({},n(!0)):void 0},this.$slots.default)}},v=n(9),component=Object(v.a)(f,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);