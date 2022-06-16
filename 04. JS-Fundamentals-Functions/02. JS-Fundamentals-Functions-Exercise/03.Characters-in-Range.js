function charectersInRange(firstChar, secondChar) {
  let firstCharToCode =
    Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0)) + 1; // + 1 added to strat from next char
  let secondCharToCode = Math.max(
    firstChar.charCodeAt(0),
    secondChar.charCodeAt(0)
  );
  let charsInRangeArray = [];

  while (firstCharToCode != secondCharToCode) {
    let currentCodeToChar = String.fromCharCode(firstCharToCode);

    charsInRangeArray.push(currentCodeToChar);
    firstCharToCode++;
  }
  console.log(charsInRangeArray.join(` `));
}

charectersInRange("C", "#");
