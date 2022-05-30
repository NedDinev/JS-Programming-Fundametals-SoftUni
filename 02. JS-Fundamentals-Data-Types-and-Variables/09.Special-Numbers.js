function specialNums(n) {
  let ifTrue = `False`;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let currentNum = i;

    while (currentNum) {
      sum += currentNum % 10;
      currentNum = Math.floor(currentNum / 10);
      if (sum == 5 || sum == 7 || sum == 11) {
        ifTrue = `True`;
      } else {
        ifTrue = `False`;
      }
    }

    console.log(`${i} -> ${ifTrue}`);
    sum = 0;
    ifTrue = `False`;
  }
}

specialNums(15);
