// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;
  sum = 0

  let i = 0;
  do {
    while (arr[i] < min) {
      min = arr[i];
    }
    while (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i]
    i++;
  } while (i < arr.length);
  // for (let i = 0; i < arr.length; i++) {
  //   while (arr[i] < min) {
  //     min = arr[i];
  //   }
  //   while (arr[i] > max) {
  //     max = arr[i];
  //   }
  //   sum += arr[i]
  // }
  avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let el in arr) {
    sum += arr[el];
  }
  // let i = 0;
  // do {
  //   sum += arr[i];
  //   i++;
  // } while (i < arr.length);

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  let i = 0;
  do {
    let arrSum = func(arrOfArr[i]);
    if (arrSum > max) max = arrSum;
    i++;
  } while (i < arrOfArr.length);
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;

  let i = 0;
  do {
    while (arr[i] < min) {
      min = arr[i];
    }
    while (arr[i] > max) {
      max = arr[i];
    }
    i++;
  } while (i < arr.length);

  return Math.abs(max - min);
  // return Math.abs(getArrayParams(arr).max - getArrayParams(arr).min);
}
