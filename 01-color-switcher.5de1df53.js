!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var n={};function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e,n){e&&o(t.prototype,e);n&&o(t,n);return t};var r=function(){"use strict";function o(n,r,a,i){t(e)(this,o),this.startBtn=n,this.stopBtn=r,this.intervalId=i,this.elToSwitch=a,this.startBtn.addEventListener("click",this.onStartBtnClick.bind(this)),this.stopBtn.addEventListener("click",this.onStopBtnClick.bind(this))}return t(n)(o,[{key:"onStartBtnClick",value:function(){var t=this;c=setInterval((function(){t.elToSwitch.style.backgroundColor="".concat(t.getRandomHexColor())}),1e3),this.startBtn.disabled=!0}},{key:"onStopBtnClick",value:function(){clearInterval(c),this.startBtn.disabled=!1}},{key:"getRandomHexColor",value:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}]),o}(),a=document.querySelector("body"),i=document.querySelector("[data-start]"),l=document.querySelector("[data-stop]"),c=null;new r(i,l,a,c)}();
//# sourceMappingURL=01-color-switcher.5de1df53.js.map
