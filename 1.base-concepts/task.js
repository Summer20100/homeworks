'use strict';

function solveEquation(a, b, c) {
  const arr = [];

  // код для задачи №1 писать здесь

  const d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    arr[0] = - b / (2 * a);
  } 
  if (d > 0) {
    arr[0] = (- b + Math.sqrt(d)) / (2 * a);
    arr[1] = (- b - Math.sqrt(d)) / (2 * a);
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  const now = new Date();
  const n = Math.round((date.getTime() - now.getTime()) /  (1000 * 3600 * 24) / ((30436875 / 1000000)));
  const P = (percent / 12) / 100;
  const S = amount - contribution;
  const monthlyPayment = S * (P + (P / (Math.pow((1 + P), n) - 1)));
  totalAmount = Math.round((monthlyPayment * n) * 100) / 100;

  if (Object.is(totalAmount, NaN)) totalAmount = 'Введите срок ипотеки';

  return totalAmount;
}
