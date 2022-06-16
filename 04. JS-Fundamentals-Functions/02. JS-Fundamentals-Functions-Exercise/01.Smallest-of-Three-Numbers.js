function smallestNum(firstNum, secondNum, thirdNum) {
  let output;
  if (firstNum < secondNum && firstNum < thirdNum) {
    output = firstNum;
  } else if (secondNum < firstNum && secondNum < thirdNum) {
    output = secondNum;
  } else if (thirdNum < firstNum && thirdNum < secondNum) {
    output = thirdNum;
  } else {
    output = firstNum;
  }
  console.log(output);

  // or just use static function console.log(Math.min(firstNum, secondNum, thirdNum));
}

smallestNum(600, 342, 123);
