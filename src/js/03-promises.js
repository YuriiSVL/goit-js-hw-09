import Notiflix from 'notiflix';

class PromiseCreator {
  constructor(delay, step, amount) {
    this.delay = delay;
    this.step = step;
    this.amount = amount;
  }
  #createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }

  start(e) {
    e.preventDefault();

    let delay = Number(this.delay.value);
    const step = Number(this.step.value);
    const amount = Number(this.amount.value);

    for (let i = 1; i <= amount; i += 1) {
      this.#createPromise(i, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
      delay += step;
    }
  }
}

const refs = {
  form: document.querySelector('.form'),
  fieldDelay: document.querySelector('[name="delay"]'),
  fieldStep: document.querySelector('[name="step"]'),
  fieldAmount: document.querySelector('[name="amount"]'),
};
const { form, fieldDelay, fieldStep, fieldAmount } = refs;
const promiseCreator = new PromiseCreator(fieldDelay, fieldStep, fieldAmount);

form.addEventListener('submit', promiseCreator.start.bind(promiseCreator));
