// || Task
// Sample: searchName("an", 3, callback)

// Output: ["Alexandra","Amanda","Angela"];

/* 
  const name = [
    'Abigail','Alexandra','Alison','Amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirde','Diana','Elizabeth','Ella','Faith','Olivia','Penepole'
  ]
*/

const searchName = (initName, maximumOuput, callbackStatement) => {
  
  // Validation
  if (typeof initName == "number" || initName == null)
    
  return "Input in init variable must be number";
  
  // Process
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

  let arrs = [];
  for (let index = 0; index < name.length; index++) {
    if (callbackStatement(name[index], initName, arrs, maximumOuput)){
      arrs.push(name[index]);
    }
  }
  return arrs;
};

const cbStatement = (nameIndex, IntialName , arrays, maxOuput) => {
  return arrays.length < maxOuput && nameIndex.toLowerCase().indexOf(IntialName.toLowerCase()) > -1;
}

const init = "An";
const maxOuput = 3;

const resultSearchName = searchName(init, maxOuput, cbStatement);
console.log(resultSearchName)
