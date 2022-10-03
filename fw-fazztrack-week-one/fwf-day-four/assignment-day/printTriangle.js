const printSegitigaProcess = (value) => {

    let number = "";
    for (let index = value; index > 0; index--) {
      for (let join = 1; join <= index; join++) {
        number += join;
      }
        number += `\n`;
    }
    console.log(number);
  }

const notNumberalert = () => {
  console.log("Must be number type data");
};

const printSegitiga = 5;

 if (typeof printSegitiga == "number") {

    printSegitigaProcess(printSegitiga);
    
  } else {

    return notNumberalert();

}
