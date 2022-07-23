function matchPhoneNumber(input) {
  let pattern = /\+359([ ||-])2\1[0-9]{3}\1[0-9]{4}\b/gm
  let validNums = [];
  let match = pattern.exec(input);

  while (match !== null) {
    validNums.push(match[0]);
    match = pattern.exec(input);
  }

  console.log(validNums.join(", "));
}
matchPhoneNumber([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
