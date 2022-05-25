function sumOfOdd(input) {
  let currNum = 0;
  let counter = 0;
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    currNum++;
    if (currNum % 2 != 0) {
      console.log(currNum);
      sum += currNum;
      counter++;
    }
    if (counter == input) {
      break;
    }
  }
  console.log(`Sum: ${sum}`);
}
sumOfOdd(5);
