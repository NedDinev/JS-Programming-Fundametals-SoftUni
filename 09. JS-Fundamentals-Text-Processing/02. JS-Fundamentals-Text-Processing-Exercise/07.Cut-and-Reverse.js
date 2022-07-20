function cutAndReverse(input) {
  let firstHalf = "";
  let secondHalf = "";
  for (let i = input.length - 1; i >= 0; i--) {
    if (i <= (input.length - 1) / 2) {
      firstHalf += input[i];
    } else {
      secondHalf += input[i];
    }
  }
  console.log(firstHalf);
  console.log(secondHalf);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");

console.log("--------------------");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
