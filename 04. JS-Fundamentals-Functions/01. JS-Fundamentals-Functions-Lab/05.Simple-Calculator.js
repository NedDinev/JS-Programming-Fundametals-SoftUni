function simpleCalc(numOne, numTwo, operator) {
  let res;
  let multiply = (x, y) => x * y;
  let divide = (x, y) => x / y;
  let add = (x, y) => x + y;
  let subtract = (x, y) => x - y;

  switch (operator) {
    case `multiply`:
      res = multiply(numOne, numTwo);
      break;
    case `divide`:
      res = divide(numOne, numTwo);
      break;
    case `add`:
      res = add(numOne, numTwo);
      break;
    case `subtract`:
      res = subtract(numOne, numTwo);
      break;

    default:
      break;
  }
  console.log(res);
}

simpleCalc(5, 5, "multiply");
