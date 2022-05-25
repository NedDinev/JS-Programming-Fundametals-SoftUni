function rounding(input1,input2) {
  let firstNum = Number(input1);
  let secondNum = Number(input2);

  if (secondNum > 15) {
    secondNum = 15;
  }

  console.log(parseFloat(firstNum.toFixed(secondNum)));
}
rounding(3.1415926535897932384626433832795, 2);
