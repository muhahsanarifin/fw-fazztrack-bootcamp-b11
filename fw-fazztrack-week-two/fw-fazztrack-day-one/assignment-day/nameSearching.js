// || Task
// Sample: searchName("an", 3, callback)

// Output: ["Alexandra","Amanda","Angela"];

/* 
  const name = [
    'Abigail','Alexandra','Alison','Amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirde','Diana','Elizabeth','Ella','Faith','Olivia','Penepole'
  ]
*/

const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirde",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penepole",
];


const searchName = (initName, maximumOuput, callbackStatement) => {
  let arrs = [];
  for (let index = 0; index < name.length; index++) {
    if (callbackStatement(name[index], initName) && arrs.length < maximumOuput) {
      arrs.push(name[index]);
    }
  }
  return arrs;
};

const cbStatement = (nameIndex, IntialName) => {
  return nameIndex.toLowerCase().indexOf(IntialName.toLowerCase()) > -1
}
const init = "an";
const maxOuput = 3;

if (typeof init == "number" || init == null) 
  return console.log("Input in init variable must be number")

console.log(searchName(init, maxOuput, cbStatement));

