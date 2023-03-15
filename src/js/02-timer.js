import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtnRef = document.querySelector('[data-start]');
startBtnRef.addEventListener('click', onStartBtnClick);
startBtnRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      alert('Please choose a date in the future');
    } else {
      startBtnRef.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr(document.querySelector('#datetime-picker'), options);
const selectedDate = fp.selectedDates[0];

function convertMs(ms) {
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function onStartBtnClick() {
  console.log(selectedDate);
  setInterval(() => {
    const delta = selectedDate - Date.now();

    console.log('selected date', fp.selectedDates[0]);
    console.log('now date', new Date(Date.now()));

    console.log(selectedDate.getTime());
    console.log(Date.now());

    console.log(convertMs(delta));
  }, 1000);
  startBtnRef.disabled = true;
}
