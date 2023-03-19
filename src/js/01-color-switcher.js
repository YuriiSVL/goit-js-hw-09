class colorSwitcher {
  #intervalId = null;
  constructor(startBtn, stopBtn, elToSwitch, interval) {
    this.startBtn = startBtn;
    this.stopBtn = stopBtn;
    this.interval = interval;
    this.elToSwitch = elToSwitch;

    this.startBtn.addEventListener('click', this.onStartBtnClick.bind(this));
    this.stopBtn.addEventListener('click', this.onStopBtnClick.bind(this));
  }

  onStartBtnClick() {
    this.#intervalId = setInterval(() => {
      this.elToSwitch.style.backgroundColor = `${this.#getRandomHexColor()}`;
    }, this.interval);
    this.startBtn.disabled = true;
    this.stopBtn.disabled = false;
  }

  onStopBtnClick() {
    clearInterval(this.#intervalId);
    this.startBtn.disabled = false;
    this.stopBtn.disabled = true;
  }
  #getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');

const myColorSwitcher = new colorSwitcher(
  startBtnRef,
  stopBtnRef,
  bodyRef,
  1000
);
