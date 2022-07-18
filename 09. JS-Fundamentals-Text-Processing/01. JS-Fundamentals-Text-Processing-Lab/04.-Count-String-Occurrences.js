function countStringOccurrences(sentence, word) {
  let count = 0;

  sentence = sentence.split(" ");

  for (let currWord of sentence) {
    if (currWord == word) {
      count++;
    }
  }
  console.log(count);
}
countStringOccurrences("This is a word and it also is a sentence", "is");
