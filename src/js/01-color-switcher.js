class colorSwitcher {
  constructor(start, stop, interval) {
    this.startBtn = start;
    this.stopBtn = stop;
    this.intervalId = interval;
  }
  onStartBtnClick() {
    intervalId = setInterval(() => {
      bodyRef.style.backgroundColor = `${this.getRandomHexColor()}`;
    }, 1000);
    this.startBtn.disabled = true;
  }

  onStopBtnClick() {
    clearInterval(intervalId);
    this.startBtn.disabled = false;
  }
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let intervalId = null;

const myColorSwitcher = new colorSwitcher(startBtn, stopBtn, intervalId);

startBtn.addEventListener(
  'click',
  myColorSwitcher.onStartBtnClick.bind(myColorSwitcher)
);
stopBtn.addEventListener(
  'click',
  myColorSwitcher.onStopBtnClick.bind(myColorSwitcher)
);
