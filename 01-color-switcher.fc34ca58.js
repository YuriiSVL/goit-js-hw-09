!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var n=u.default(e,t,"get");return l.default(e,n)};var u=s(o("1UHsN")),l=s(o("ffZzF"));function s(e){return e&&e.__esModule?e:{default:e}}var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,n){c.default(e,t),t.set(e,n)};var f,c=(f=o("5k7tO"))&&f.__esModule?f:{default:f};var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,n){var r=v.default(e,t,"set");return h.default(e,r,n),n};var v=_(o("1UHsN")),h=_(o("jdVyQ"));function _(e){return e&&e.__esModule?e:{default:e}}var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var b={};Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e,t){w.default(e,t),t.add(e)};var w=function(e){return e&&e.__esModule?e:{default:e}}(o("5k7tO"));var M={};function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(M,"__esModule",{value:!0}),M.default=function(e,t,n){t&&g(e.prototype,t);n&&g(e,n);return e};var O=new WeakMap,j=new WeakSet,k=function(){"use strict";function t(n,r,o,i){e(a)(this,t),e(b)(this,j),e(d)(this,O,{writable:!0,value:null}),this.startBtn=n,this.stopBtn=r,this.interval=i,this.elToSwitch=o,this.startBtn.addEventListener("click",this.onStartBtnClick.bind(this)),this.stopBtn.addEventListener("click",this.onStopBtnClick.bind(this))}return e(M)(t,[{key:"onStartBtnClick",value:function(){var t=this;e(p)(this,O,setInterval((function(){t.elToSwitch.style.backgroundColor="".concat(e(y)(t,j,x).call(t))}),this.interval)),this.startBtn.disabled=!0,this.stopBtn.disabled=!1}},{key:"onStopBtnClick",value:function(){clearInterval(e(i)(this,O)),this.startBtn.disabled=!1,this.stopBtn.disabled=!0}}]),t}();function x(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var m=document.querySelector("body");new k(document.querySelector("[data-start]"),document.querySelector("[data-stop]"),m,1e3)}();
//# sourceMappingURL=01-color-switcher.fc34ca58.js.map
