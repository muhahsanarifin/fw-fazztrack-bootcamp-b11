// || Array Methods (at).

const arrForAt = [1, 2, 3, 4, 5, 6]

const toIndex = 3;

const resultAt = arrForAt.at(toIndex)

console.log(arrForAt)

console.log(resultAt)


// || Array Methods (concat).
const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];

const resultConcat = arrOne.concat(arrTwo)

console.log(resultConcat)


// || Array Methods (unshift).
const arrForUnshfit = [1, 2, 3];

const resultUnshift = arrForUnshfit.unshift(4, 5);

console.log(resultUnshift)

console.log(arrForUnshfit)


// || Array Methods (shift);
const arrForShift = [1, 2, 3, 4, 5, 6];

const resutlarrForShift = arrForShift.shift();

console.log(resutlarrForShift)

console.log(arrForShift)


// || Array Methods (toString)
const arrToSting= [1, 2 , 3, 4]

console.log(arrToSting.toString())

// || Array Methods (forEach)
const arrForEach = ["ahsan", "accan", "gusti", "aini"]

let resultNames = " ";

// arrForEach.forEach(userNames);

// function userNames(item) {
//   resultNames += item + " ";
// }

// arrForEach.forEach(item => console.log(item))

arrForEach.forEach(item => resultNames += item + " ")
console.log(resultNames)



// Array Methods (splice)
const months = ["Jan", "March", "April", "June"];
const resultMonths = months.splice(1, 3, "Feb", "March");

console.log(resultMonths)

console.log(months);
