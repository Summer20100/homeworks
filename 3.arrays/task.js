function compareArrays(arr1, arr2) {
  let result = [];
  
  if (arr1.length >= arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      result.push((arr1[i] == arr2[i]) ?  true : false);
    }
  } else {
    for (let i = 0; i < arr2.length; i++) {
      result.push((arr2[i] == arr1[i]) ?  true : false);
    }
  }
  
  return result.every(element => element == true);
}

function advancedFilter(arr) {
  let resultArr = [];
  
  resultArr = arr.filter(el => el > 0 ).filter(el => el % 3 == 0 ).map(el => el * 10 );

  return resultArr;
}