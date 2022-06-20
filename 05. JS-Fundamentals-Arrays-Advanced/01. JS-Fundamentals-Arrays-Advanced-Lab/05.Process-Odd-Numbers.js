function processOddNums(input) {
  let filteredArr = input
    .filter((num, i) => i % 2 == 1) // takes odd index numbers
    .map((x) => x * 2) // multiply the odd numbers
    .reverse() // reverses the new array with odd numbers
    .join(` `); // converts the new array to string with ` ` between elements
  console.log(filteredArr);
}

processOddNums([10, 15, 20, 25]);
