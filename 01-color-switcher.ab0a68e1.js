const t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");let s=null;new class{onStartBtnClick(){s=setInterval((()=>{this.elToSwitch.style.backgroundColor=`${this.getRandomHexColor()}`}),1e3),this.startBtn.disabled=!0,this.stopBtn.disabled=!1}onStopBtnClick(){clearInterval(s),this.startBtn.disabled=!1,this.stopBtn.disabled=!0}getRandomHexColor(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}constructor(t,e,n,s){this.startBtn=t,this.stopBtn=e,this.intervalId=s,this.elToSwitch=n,this.startBtn.addEventListener("click",this.onStartBtnClick.bind(this)),this.stopBtn.addEventListener("click",this.onStopBtnClick.bind(this))}}(e,n,t,s);
//# sourceMappingURL=01-color-switcher.ab0a68e1.js.map
