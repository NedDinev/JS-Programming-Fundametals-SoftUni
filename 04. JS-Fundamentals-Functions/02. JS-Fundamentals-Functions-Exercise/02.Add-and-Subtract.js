function addAndSubstract(first, second, third) {
  let sum = (firstNum, secondNum) => firstNum + secondNum;
  let subtract = (sumFirstAndSecond, thirdNum) => sumFirstAndSecond - thirdNum;

  let sumFirstAndSecond = sum(first, second);
  let finalResult = subtract(sumFirstAndSecond, third);

  console.log(finalResult);
}
addAndSubstract(23, 6, 10);
