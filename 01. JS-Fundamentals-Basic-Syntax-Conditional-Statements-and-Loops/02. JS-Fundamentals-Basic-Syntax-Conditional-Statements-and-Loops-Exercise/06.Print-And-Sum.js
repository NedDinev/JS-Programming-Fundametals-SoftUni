function printAndSum(input1, input2) {
  let string = "";
  let sum = 0;
  for (let index = input1; index <= input2; index++) {
    sum += index;
    string += index;
    string += " ";
  }
  console.log(string);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
