function compareArrays(arr1, arr2) {

  return (arr1.length === arr2.length) && arr1.every((val, ind) => val === arr2[ind]);

}

function advancedFilter(arr) {
  
  return arr.filter(el => el > 0 ).filter(el => el % 3 == 0 ).map(el => el * 10 );

}