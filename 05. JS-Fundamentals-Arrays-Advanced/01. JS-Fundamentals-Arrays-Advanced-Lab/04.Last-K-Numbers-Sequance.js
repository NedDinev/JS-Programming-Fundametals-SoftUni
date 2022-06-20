function lastKNumbersSequence(n, k) {
  let result = [1];

  for (let i = 0; i < n - 1; i++) {
    let sqeunceK = result.slice(-k);
    let sum = 0;
    for (let el of sqeunceK) {
      sum += el;
    }
    result.push(sum);
  }
  console.log(result.join(` `));
}
lastKNumbersSequence(6, 3);
