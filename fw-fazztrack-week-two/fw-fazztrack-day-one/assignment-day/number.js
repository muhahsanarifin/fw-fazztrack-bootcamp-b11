const valueSelection = (firstValue, lastValue, arrDatas) => {

  // Validation
  if (firstValue > lastValue)
    return "Nilai akhir harus lebih besar dari nilai awal";

  if (arrDatas.length < 6)
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  
  // Process
  const prosValueSelection = arrDatas.filter(el => el > firstValue && el < lastValue);

  return prosValueSelection.sort((a, b) => {
    return a - b;
  });

}

const arrDatas = [100, 3, 4, 5, 6, 10];

const firstValue = 1;
const lastValue = 100;

const result = valueSelection(firstValue, lastValue, arrDatas)
console.log(result);

