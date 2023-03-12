class colorSwitcher {
  constructor(startBtn, stopBtn, elToSwitch, intervalId) {
    this.startBtn = startBtn;
    this.stopBtn = stopBtn;
    this.intervalId = intervalId;
    this.elToSwitch = elToSwitch;

    this.startBtn.addEventListener('click', this.onStartBtnClick.bind(this));
    this.stopBtn.addEventListener('click', this.onStopBtnClick.bind(this));
  }

  onStartBtnClick() {
    intervalId = setInterval(() => {
      this.elToSwitch.style.backgroundColor = `${this.getRandomHexColor()}`;
    }, 1000);
    this.startBtn.disabled = true;
    this.stopBtn.disabled = false;
  }

  onStopBtnClick() {
    clearInterval(intervalId);
    this.startBtn.disabled = false;
    this.stopBtn.disabled = true;
  }
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
let intervalId = null;

const myColorSwitcher = new colorSwitcher(
  startBtnRef,
  stopBtnRef,
  bodyRef,
  intervalId
);
