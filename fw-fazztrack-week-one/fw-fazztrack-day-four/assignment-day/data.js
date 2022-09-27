let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "sincere@april.biz",
  address: 
  {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998=3874",
  },
  phone: "1-770-736-8032 x56442",
  webiste: "hildegard.org",
}

console.log(data)


// a. Spread Operator
/*Object.assign(data,{
  name:"MUH. AHSAN",
  username:"muhahsanarifin",
  email:"muh.ahsan.student@gmail.com"
})*/

const newData = {
  name: "MUH. AHSAN",
  username: "muhahsanarifin",
  email: "muh.ahsan.student@gmail.com"
}

const margedData = {...data, ...newData}

console.log(margedData)


// b. Destrucutring
const {street, city} = data.address;

console.log(`
  Jalan ${street}
  City ${city}
`)
