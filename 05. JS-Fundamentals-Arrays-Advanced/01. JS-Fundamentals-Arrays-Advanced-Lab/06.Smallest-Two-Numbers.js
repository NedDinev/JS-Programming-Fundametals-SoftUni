function smallestTwoNums(input) {
  let sorted = input
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(` `);

  console.log(sorted);
}
smallestTwoNums([30, 15, 50, 5]);
