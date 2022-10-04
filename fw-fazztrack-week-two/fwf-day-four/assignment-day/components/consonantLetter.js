const changeText = (word, tempLetter, changeLetter) => {
  // Validation
  try {
    if(word == null || word == "") throw "word value must be filled";
    if(tempLetter == null || tempLetter == "") throw "tempLetter must be filled";
    if(changeLetter == null || changeLetter == "") throw "changeLetter must be filled";
    if(typeof word !== "string" || typeof tempLetter !== "string" || typeof changeLetter !== "string") throw "Input value must be string";
  } catch (error) {
      return error;
  }
  let newText = "";
  for (let letter of word) {
    if(letter === tempLetter) letter = changeLetter

      newText += letter;
  }
  return newText;
}

// Input value each variables.
const word = "Gusti Qurran";
const tempLetter = "u";
const changeLetter = "a";

// Result change text.
const resultchangeText = changeText(word, tempLetter, changeLetter)
  console.log(resultchangeText);
