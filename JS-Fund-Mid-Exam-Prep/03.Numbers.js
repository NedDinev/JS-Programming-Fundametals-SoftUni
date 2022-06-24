function numbers(sequence) {
  let arrOfNums = sequence.split(" ").map(Number);
  let average = 0;

  for (let el of arrOfNums) {
    average += el;
  }
  average = average / arrOfNums.length;

  let topNumbers = arrOfNums.filter((a) => a > average).sort((a, b) => b - a);

  if (topNumbers.length > 0) {
    console.log(topNumbers.slice(0, 5).join(` `));
  } else {
    console.log("No");
  }
}

numbers("-1 -2 -3 -4 -5 -6");
