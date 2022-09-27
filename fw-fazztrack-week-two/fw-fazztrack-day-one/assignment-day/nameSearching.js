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


const searchName = (initName, maxOuput) => {
  let arrs = [];
  for (let index = 0; index < name.length; index++) {
    if (cbStatement(name[index], initName) && arrs.length < maxOuput) {
      arrs.push(name[index]);
    }
  }
  return arrs;
};

const cbStatement = (nameIndex, IntialName) => {
  return nameIndex.toLowerCase().indexOf(IntialName.toLowerCase()) > -1
}
const init = "Ab";
const maxOuput = 3;

if (typeof init == "number" || init == null) 
  return console.log("Input in init variable must be number")

console.log(searchName(init, maxOuput));

