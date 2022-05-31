function rightPlace(firstStr, ch, secondStr) {
  let res = "";
  for (let i = 0; i < firstStr.length; i++) {
    let currentChar = firstStr[i];

    if (currentChar == "_") {
      res += ch;
    } else {
      res += currentChar;
    }
  }
  if (res == secondStr) {
    console.log(`Matched`);
  } else {
    console.log(`Not Matched`);
  }
}
rightPlace("Str_ng", "I", "Strong");
