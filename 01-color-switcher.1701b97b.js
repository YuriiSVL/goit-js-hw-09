const t=document.querySelector("body"),i=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");new class{onStartBtnClick(){this.intervalId=setInterval((()=>{this.elToSwitch.style.backgroundColor=`${this.getRandomHexColor()}`}),this.interval),this.startBtn.disabled=!0,this.stopBtn.disabled=!1}onStopBtnClick(){clearInterval(this.intervalId),this.startBtn.disabled=!1,this.stopBtn.disabled=!0}getRandomHexColor(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}constructor(t,i,n,s){this.startBtn=t,this.stopBtn=i,this.interval=s,this.elToSwitch=n,this.intervalId=null,this.startBtn.addEventListener("click",this.onStartBtnClick.bind(this)),this.stopBtn.addEventListener("click",this.onStopBtnClick.bind(this))}}(i,n,t,1e3);
//# sourceMappingURL=01-color-switcher.1701b97b.js.map