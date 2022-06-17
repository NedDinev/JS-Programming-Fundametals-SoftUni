function factorialDivision(firstNum, secondNum) {
  function factorial(x) {
    if (x == 0) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }

  let first = firstNum;
  let second = secondNum;
  let division = factorial(first) / factorial(second);

  console.log(division.toFixed(2));
}

factorialDivision(5, 2);
