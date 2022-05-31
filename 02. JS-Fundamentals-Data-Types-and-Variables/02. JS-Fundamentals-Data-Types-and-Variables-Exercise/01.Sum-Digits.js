function sumDigits(n) {
  let num = String(n);
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    let currentNum = Number(num[i]);
    sum += currentNum;
  }
  console.log(sum);
}
sumDigits(543);
