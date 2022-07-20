function stringSubstring(word, text) {
  let lowerCaseWord = word.toLowerCase();
  let lowerCaseText = text.toLowerCase().split(" ");

  for (let currentWord of lowerCaseText) {
    if (currentWord == lowerCaseWord) {
      return console.log(word);
    }
  }
  console.log(`${word} not found!`);
}
stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
