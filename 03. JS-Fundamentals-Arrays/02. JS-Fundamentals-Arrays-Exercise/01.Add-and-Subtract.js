function addAndSubtract(input) {
  let originalSum = 0;
  let modifiedSum = 0;
  let inputL = input.length;
  for (let i = 0; i < inputL; i++) {
    originalSum += input[i];
    if (input[i] % 2 == 0) {
      input[i] += i;
    } else {
      input[i] -= i;
    }
    modifiedSum += input[i];
  }
  console.log(input);
  console.log(originalSum);
  console.log(modifiedSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
