const identitas = {
  nama : "MUH. AHSAN",
  talent: "Fullstack Website Batch 11",
  meeting: "Day Two",
  instructor: "Fakhri"
}

console.log(`
Nama: ${identitas.nama}
Talent: ${identitas.talent}
Meeting: ${identitas.meeting}
Instructor: ${identitas.instructor}

----------------------
`);


console.log(`
Latihan 01`);
const merebus = (bahan, proses) => {

  let prosesRebus = proses;

  if ( prosesRebus < 100) {
    console.log(`${bahan} yang direbus belum matang`);
  }else {
    
    console.log(`${bahan} yang direbus sudah matang`);
  }
}

merebus("Air", 99.9);


console.log(`
Latihan 02`);
const pemindahan = (alfa,beta) => {
  let a = alfa;
  let b = beta;

  let hasil = [a, b] = [b, a];

  // Hasil ['teh', 'kopi']
  console.log(hasil)
}

// Sample Input ['kopi', 'teh']
const gelasAlpa = "kopi";
const gelasBeta = "teh";

pemindahan(gelasAlpa, gelasBeta);


console.log(`
Latihan 03`);
const hitungKeliling = jari => {

  let phi = 22/7;
  let phiSecond = 3.14;

  if (jari % 7 === 0) {
    let hasilLuas = phi * jari * jari;
    let hasilKeliling = 2 * phi * (jari);

    console.log(`Hasil luas lingkaran ${hasilLuas}`);
    console.log(`Hasil keliling lingkaran ${hasilKeliling}`);
  } else {
    let hasilLuas = phiSecond * jari * jari;
    let hasilKeliling = 2 * phiSecond * jari;

    console.log(`Hasil luas lingkaran ${hasilLuas}`);
    console.log(`Hasil keliling lingkaran ${hasilKeliling}`);
  }
}
// Sample Input
let jari = 14 ;

hitungKeliling(jari)


// || Latihan 04

// || Latihan 05

// || Latihan 06

// || Latihan 07

console.log(`
Latihan 08`);
const reverse = string => {

  // Cara Pertama

  /*let splitString = string.split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");

  console.log(joinArray);*/

  // Cara Kedua
  let reverseString = "";

  for (let index = string.length - 1; index >= 0; index-- ){
    
    reverseString += string[index];

    // console.log(string[index]);
  }

  console.log(reverseString)

}
reverse("javascript");

console.log(`
Latihan 9`);
const validatePalin = string => {
  for (let index = 0; index < string.length / 2; index++) {

    if(string[index] !== string[string.length - 1 - index]) {
      

    return `It's not a palindrome`

    }
  }

  return `It is a palindrome`

}

const string = "abcba";

if (typeof string === "string") {
  const resultPalin = validatePalin(string);
  
  console.log(resultPalin)
  
} else {
  console.log(`Must be input number!`)
}

console.log(`
Latihan 10`);
// Cara Pertama
/*function changeLatters(string) {
  console.log(string)
}
const words = "Masamba";
changeLatters(string.replace(/a/g,"i"));*/

// Cara kedua
const changeLatters = (word, tempLetter, changeLatters) => {
  
  let newWords = "";

  for (let words of word) {
    if(words === tempLetter) {
      words = changeLatters
    }
    newWords += words;
  }
    return newWords
}
const result = changeLatters("love your self", "o", "i");

console.log(result)