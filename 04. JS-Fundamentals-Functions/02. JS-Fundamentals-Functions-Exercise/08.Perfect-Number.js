function perfectNum(number) {
  let sumOfDivisors = 0;

  for (let currentNumber = 1; currentNumber < number; currentNumber++) {
    if (number % currentNumber === 0) {
      sumOfDivisors += currentNumber;
    }
  }
  let result =
    sumOfDivisors === number
      ? `We have a perfect number!`
      : `It's not so perfect.`;
  console.log(result);
}

perfectNum(6);
