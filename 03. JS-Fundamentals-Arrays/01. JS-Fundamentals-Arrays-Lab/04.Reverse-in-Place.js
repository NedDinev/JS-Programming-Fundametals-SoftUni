function reverseInPlace(input) {
  let toStr = "";
  for (let a = input.length - 1; a >= 0; a--) {
    toStr += input[a] + " ";
  }
  console.log(toStr);
}
reverseInPlace(["a", "b", "c", "d", "e"]);
