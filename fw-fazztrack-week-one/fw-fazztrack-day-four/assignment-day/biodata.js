let biodata = {
  name: "MUH. AHSAN",
  age: 23,
  hobbies: [
    "futsal",
    "reading"],
  isMarried: false,
  schoolList: [
    {
      name: "SDN 089 Masamba",
      yearIn: 2006,
      yearOut: 2012,
      major: null
    },
    {
      name: "SMPN 01 Masamba",
      yearIn: 2012,
      yearOut: 2015,
      major: null
    },
    {
      name: "SMAN 02 Masamba",
      yearIn: 2015,
      yearOut: 2017,
      major: "Informatics Engineering"
    },

    {
      name: "Universitas Mercu Buana",
      yearIn: 2018,
      yearOut: 2022,
      major: "Informatics Engineering"
    },
  ],
  skill: [
    {
      skillName: "Javascript",
      level: "beginner"
    },
  ],
  interestInCoding: true,
};

// console.log(biodata)

// let result = "";

// for(let props in biodata ) {

//   result += biodata[props] + "\n";
// }
// console.log(result);

// for(let [key, value] of Object.entries(biodata)){
//   console.log(`${key} : ${value}`);
// }

/*let {name, age, hobbies, isMarriade, ...res} = biodata;

console.log(res);*/

// console.log(res.schoolList[3])