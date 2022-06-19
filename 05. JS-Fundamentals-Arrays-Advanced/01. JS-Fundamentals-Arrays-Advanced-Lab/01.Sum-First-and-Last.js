function firstAndLastSum(input) {
  let first = Number(input.shift());
  let last = Number(input.pop());

  console.log(first + last);
}
firstAndLastSum(["20", "30", "40"]);
