const valueSelection = (firstValue, lastValue, arrDatas) => {

  const prosValueSelection = arrDatas.filter(el => el > firstValue && el < lastValue);

  return prosValueSelection.sort();

}

const arrDatas = [10, 1, 4, 5, 10, 6];

const firstValue = 1;
const lastValue = 8;

if(firstValue > lastValue)
  return console.log("Nilai akhir harus lebih besar dari nilai awal");

if (arrDatas.length < 6) 
  return console.log("Jumlah angka dalam dataArray harus lebih dari 5");

const result = valueSelection(firstValue, lastValue, arrDatas)
console.log(result);

