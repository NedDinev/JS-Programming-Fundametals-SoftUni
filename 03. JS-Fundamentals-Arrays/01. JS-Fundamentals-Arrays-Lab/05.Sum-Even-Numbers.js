function sumEvenNums(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
      sum += Number(input[i]);
    }
  }
  console.log(sum);
}
sumEvenNums(["1", "2", "3", "4", "5", "6"]);
