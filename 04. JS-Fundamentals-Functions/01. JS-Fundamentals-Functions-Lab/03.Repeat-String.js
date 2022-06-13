function repeatString(string, repCount) {
  let output = ``;
  for (let index = 0; index < repCount; index++) {
    output += string;
  }
  return output;
}
repeatString("abc", 3);
