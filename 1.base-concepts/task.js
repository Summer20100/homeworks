'use strict';

function solveEquation(a, b, c) {
  let arr = [];


  // код для задачи №1 писать здесь

  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr[0] = - b / (2 * a);
  } else {
    arr[0] = (- b + Math.sqrt(d)) / (2 * a);
    arr[1] = (- b - Math.sqrt(d)) / (2 * a);
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  let now = new Date();
  let n = Math.round((date.getTime() - now.getTime()) /  (1000 * 3600 * 24) / ((30436875 / 1000000)));
  let P = (percent / 12) / 100;
  let S = amount - contribution;
  let monthlyPayment = S * (P + (P / (Math.pow((1 + P), n) - 1)));
  let totalAmountAll = monthlyPayment * n;
  totalAmount = Math.floor(totalAmountAll) + ((Math.floor((totalAmountAll - Math.floor(totalAmountAll)) * 100)) / 100);
  if (Object.is(totalAmount, NaN)) totalAmount = 'Введите срок ипотеки';

  return totalAmount;
}
