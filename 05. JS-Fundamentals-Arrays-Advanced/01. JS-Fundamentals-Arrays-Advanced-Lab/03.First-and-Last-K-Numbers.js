function firstAndLastK(input) {
  let k = input.shift();
  let firstArr = input.slice(0, k);
  let secondArr = input.slice(-k);

  console.log(firstArr.join(` `));
  console.log(secondArr.join(` `));
}
firstAndLastK([2, 7, 8, 9]);
