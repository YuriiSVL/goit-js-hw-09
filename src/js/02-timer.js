import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

class Timer {
  #intervalId = null;

  #days = 0;
  #hours = 0;
  #minutes = 0;
  #seconds = 0;

  #onChangeCallback = () => {};

  constructor({ onChange } = {}) {
    if (onChange) {
      this.#onChangeCallback = onChange;
    }
  }
  #convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

  #calculateData(date) {
    const delta = new Date(date) - Date.now();

    if (delta > 0) {
      this.#updateData(this.#convertMs(delta));
    } else {
      clearInterval(this.#intervalId);
    }
  }

  #updateData({ days = 0, hours = 0, minutes = 0, seconds = 0 } = {}) {
    this.#days = days;
    this.#hours = hours;
    this.#minutes = minutes;
    this.#seconds = seconds;

    this.#onChangeData();
  }

  #onChangeData() {
    this.#onChangeCallback({
      days: Timer.addLeadingZero(this.#days),
      hours: Timer.addLeadingZero(this.#hours),
      minutes: Timer.addLeadingZero(this.#minutes),
      seconds: Timer.addLeadingZero(this.#seconds),
    });
  }

  static addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }

  start(date) {
    this.#calculateData(date);
    this.#intervalId = setInterval(() => this.#calculateData(date), 1000);
  }
}

const refs = {
  dateInput: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  fieldDays: document.querySelector('[data-days]'),
  fieldHours: document.querySelector('[data-hours]'),
  fieldMinutes: document.querySelector('[data-minutes]'),
  fieldSeconds: document.querySelector('[data-seconds]'),
};

const {
  dateInput,
  startBtn,
  fieldDays,
  fieldHours,
  fieldMinutes,
  fieldSeconds,
} = refs;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(dateInput, options);

const timer = new Timer({ onChange: changeTimerFields });

startBtn.addEventListener('click', onStartBtnClick);
startBtn.disabled = true;

function onStartBtnClick() {
  timer.start(dateInput.value);
  startBtn.disabled = true;
  dateInput.disabled = true;
}

function changeTimerFields(params) {
  fieldDays.textContent = params.days;
  fieldHours.textContent = params.hours;
  fieldMinutes.textContent = params.minutes;
  fieldSeconds.textContent = params.seconds;
}
