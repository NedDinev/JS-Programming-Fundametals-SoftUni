function wordTracker(data) {
  let searchWords = data.shift().split(" ");
  let count = 0;
  let wordsCount = {};

  for (let i = 0; i < searchWords.length; i++) {
    let currentWord = searchWords[i];

    for (let element of data) {
      if (element == currentWord) {
        count++;
      }
    }

    wordsCount[currentWord] = count;
    count = 0;
  }

  let wordEntries = Object.entries(wordsCount);
  let sortedWords = wordEntries.sort(([aKey, aValue], [bKey, bValue]) => {
    return bValue - aValue;
  });

  for (let [key, value] of sortedWords) {
    console.log(`${key} - ${value}`);
  }
}

wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
