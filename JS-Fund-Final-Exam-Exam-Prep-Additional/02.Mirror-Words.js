function mirrorWords(input) {
  let pattern =
    /(?<symbol>[#||@]{1})(?<firstWord>[A-Za-z]{3,})\k<symbol>\k<symbol>(?<secondWord>[A-Za-z]{3,})\k<symbol>/gm;

  let valid;
  let matchCount = 0;
  let wordsArr = [];
  while ((valid = pattern.exec(input[0])) !== null) {
    matchCount++;
    let firstWord = valid.groups.firstWord;
    let secondWord = valid.groups.secondWord;
    secondWord = secondWord.split("").reverse().join("");

    if (firstWord === secondWord) {
      secondWord = secondWord.split("").reverse().join("");
      wordsArr.push(firstWord + " <=> " + secondWord);
    }
  }

  if (matchCount > 0) {
    console.log(`${matchCount} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }

  if (wordsArr.length > 0) {
    console.log("The mirror words are: ");
    console.log(wordsArr.join(", "));
  } else {
    console.log("No mirror words!");
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
console.log("----------------------------------");
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
console.log("----------------------------------");
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
