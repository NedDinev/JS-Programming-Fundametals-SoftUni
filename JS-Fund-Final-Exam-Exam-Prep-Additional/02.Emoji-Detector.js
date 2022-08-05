function emojiDetector(input) {
  let pattern = /(\*\*|\:\:)(?<name>[A-Z][a-z]{2,})\1/g;
  let patternNum = /\d/g;
  let text = input.join("");
  let matchArr = [];
  let matchNumArr = [];
  let matchExec;
  let matchNumsExec;

  while ((matchExec = pattern.exec(text)) !== null) {
    matchArr.push(matchExec[0]);
  }

  while ((matchNumsExec = patternNum.exec(text)) !== null) {
    matchNumArr.push(matchNumsExec[0]);
  }

  let coolThreshold = 1;
  for (let num of matchNumArr) {
    coolThreshold *= Number(num);
  }

  let emojiCount = 0;
  let coolEmojis = [];

  for (let match of matchArr) {
    let word = match.slice(2, match.length - 2);

    let wordPoints = 0;
    for (let letter of word) {
      let asciiCode = letter.charCodeAt(0);

      wordPoints += asciiCode;
    }

    if (wordPoints > coolThreshold) {
      coolEmojis.push(match);
    }
    emojiCount++;
  }

  console.log(`Cool threshold: ${coolThreshold}`);
  console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
  for (let emoji of coolEmojis) {
    console.log(emoji);
  }
}
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);

let arr = [1, 2, 3];
arr[1] = 123;
console.log(arr.length);