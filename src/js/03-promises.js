import Notiflix from 'notiflix';

class PromiseCreator {
  createPromise(position, delay) {
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
}

const refs = {
  form: document.querySelector('.form'),
  fieldDelay: document.querySelector('[name="delay"]'),
  fieldStep: document.querySelector('[name="step"]'),
  fieldAmount: document.querySelector('[name="amount"]'),
};
const { form, fieldDelay, fieldStep, fieldAmount } = refs;
const promiseCreator = new PromiseCreator();

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let delay = Number(fieldDelay.value);
  const step = Number(fieldStep.value);
  const amount = Number(fieldAmount.value);

  for (let i = 1; i <= amount; i += 1) {
    promiseCreator
      .createPromise(i, delay)
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
