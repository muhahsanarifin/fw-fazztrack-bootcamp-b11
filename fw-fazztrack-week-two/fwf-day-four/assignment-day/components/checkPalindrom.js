const checkPalindrom = word => {
  // Validation
  try {
    if(word == null || word == "") throw "Text value must be filled";
  } catch (error) {
      return error;
  }
  for(let index = 0; index < word.length / 2; index++) {
    if(word[index] !== word[word.length - 1 - index]) {
      return `${word} is not palindrom.`
    }
  }
  return `${word} is palindrom`
}

// Input text
const text = ""

// Result check palindrom.
const resutlPalindrom = checkPalindrom(text);
  console.log(resutlPalindrom);
