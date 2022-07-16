function valueOfAString(firstInput, secondInput) {
  let wordsArr = firstInput.split(", ");
  let sentance = secondInput;
  let completedSentence = "";

  for (let word of wordsArr) {
    let hiddenInput = "";
    for (let i = 0; i < word.length; i++) {
      hiddenInput += "*";
    }
    if (sentance.includes(hiddenInput)) {
      completedSentence = sentance.replace(hiddenInput, word);
    }

    sentance = completedSentence;
    hiddenInput = "";
  }

  console.log(sentance);
}
valueOfAString(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
