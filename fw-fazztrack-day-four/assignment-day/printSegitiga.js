const printSegitigaProcess = (value) => {
  if (typeof value !== "number") {

    return notNumberalert()

  } else {
    let number = "";
    for (let index = value; index > 0; index--) {
      for (let join = 1; join <= index; join++) {
        number += join;
        console.log(number)
      }
      number += `\n`;
        console.log(number);
    }
    console.log(number);
  }
}

const notNumberalert = () => {
  console.log("Must be number type data");
};


const printSegitiga = 5 ;
printSegitigaProcess(printSegitiga);
