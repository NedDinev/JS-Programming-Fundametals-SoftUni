function hashTags(input) {
  let sentence = input.split(" ");
  let finalWords = [];

  for (let word of sentence) {
    if (word.startsWith("#")) {
      if (/^[a-zA-Z]+$/.test(word.substr(1))) {
        finalWords.push(word.substr(1));
      }
    }
  }

  console.log(finalWords.join("\n"));
}

hashTags(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
