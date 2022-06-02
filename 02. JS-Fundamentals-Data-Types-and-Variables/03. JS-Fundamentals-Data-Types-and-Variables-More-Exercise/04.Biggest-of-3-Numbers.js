function biggestOfThreeNums(first, second, third) {
  let biggest = Math.max(Math.max(first, second), Math.max(second, third));

  console.log(biggest);
}
biggestOfThreeNums(-2, 7, 3);
