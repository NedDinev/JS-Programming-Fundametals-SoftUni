function censoredWords(sentence, word) {
  if (sentence.includes(word)) {
    let hiddenWord = "";
    for (let i = 0; i < word.length; i++) {
      hiddenWord += "*";
    }
    word = new RegExp(word, `g`);
    sentence = sentence.replace(word, hiddenWord);
  }

  console.log(sentence);
}
censoredWords("A small sentence with some words small", "small");
