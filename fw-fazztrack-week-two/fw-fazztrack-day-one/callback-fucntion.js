const filterArray = (oriArray, filterfunc) => {

  const resultArr = [];
  for (let index = 0; index < oriArray.length; index++) {
    if(filterfunc(oriArray[index]) == true) {
      resultArr.push(oriArray[index]);
    }
  }
  console.log(resultArr)
  return resultArr;
}

const evenOnly = el => {
  console.log(el)
  if (el % 2 == 0) {
    return true
  } else {
    return false
  }
}

const oddOnly = el => {
  console.log(el)
  if (el % 2 !== 0) {
    return true
  }else {
    return false 
  }
}

const orginArray = [1,2,3,4,5,6];

console.log(filterArray(orginArray, oddOnly));
console.log(filterArray(orginArray, evenOnly));
