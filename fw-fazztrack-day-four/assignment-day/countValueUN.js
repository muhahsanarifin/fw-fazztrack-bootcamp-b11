const countValue = (values, gradeValue) => {

  if (typeof values !== "number") {
    
    return notNumberAlert();

  } else if (values == null || values == "") {

    return emptyValueAlert();

  } else if (values <= 0) {

    return minNumberAlert();

  } else {

    let averageValues = values / 4;

    if (averageValues >= 90 && averageValues <= 100) {
      console.log(`Rata-rata = ${averageValues}`);
      console.log(`Grade = ${gradeValue[0]}`);
    } else if (averageValues >= 80 && averageValues <= 89) {
      console.log(`Rata-rata = ${averageValues}`);
      console.log(`Grade = ${gradeValue[1]}`);
    } else if (averageValues >= 70 && averageValues <= 79) {
      console.log(`Rata-rata = ${averageValues}`);
      console.log(`Grade = ${gradeValue[2]}`);
    } else if (averageValues >= 60 && averageValues <= 69) {
      console.log(`Rata-rata ${averageValues}`);
      console.log(`Grade = ${gradeValue[3]}`);
    } else if (averageValues >= 0 && averageValues <= 59) {
      console.log(`Rata-rata ${averageValues}`);
      console.log(`Grade = ${gradeValue[4]}`);
    }
  }
};

const notNumberAlert = () => {
  console.log("Must be number type data");
};

const emptyValueAlert = () => {
  console.log("Don't Empty value of varaiables");
};

const minNumberAlert = () => {
  console.log("Value must be positive");
};

const mtk = 90;
const bahasaIndonesia = 90;
const bahasaInggris = 90;
const ipa = 100;
const sumValues = mtk + bahasaIndonesia + bahasaInggris + ipa;
const grade = ["A", "B", "C", "D", "E"];

countValue(sumValues, grade);
