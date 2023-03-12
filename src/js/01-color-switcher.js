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

const myColorSwitcher = new colorSwitcher(
  startBtn,
  stopBtn,
  bodyRef,
  intervalId
);
