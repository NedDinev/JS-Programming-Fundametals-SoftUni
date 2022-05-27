function rightPlace(firstStr, ch, secondStr) {
  let res = firstStr.replace(`_`, ch);
  let output = res === secondStr ? `Matched` : `Not Matched`;
  console.log(output);
}
rightPlace("Str_ng", "I", "Strong");
