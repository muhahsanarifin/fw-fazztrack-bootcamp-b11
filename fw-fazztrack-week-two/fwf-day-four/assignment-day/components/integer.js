const divideAndSort = number => {
  // Validation
  try {
    if(number == null) throw "number value must be filled"
    if(typeof number !== "number") throw "Input must be number !"
  } catch (error) {
      return error
  }


 let items = number.toString().split("0")

  let result = "";

  items.map((item) => {
    result += item.split("").sort().join("");
  });
 return parseInt(result)
}

// Input number
const number = 5956560159466056;

// Result divide and sort
const resultDivideAndSort = divideAndSort(number);
  console.log(resultDivideAndSort)