function amazingNumbers(input) {
  let number = String(input);
  let sumOfDigits = 0;
  let toStr = "";
  for (let i = 0; i < number.length; i++) {
    let currentDigit = number[i];
    currentDigit = Number(currentDigit);
    sumOfDigits += currentDigit;
  }
  toStr += sumOfDigits;
  if (toStr.includes(9)) {
    console.log(`${input} Amazing? True`);
  } else {
    console.log(`${input} Amazing? False`);
  }
}
amazingNumbers(1233);
