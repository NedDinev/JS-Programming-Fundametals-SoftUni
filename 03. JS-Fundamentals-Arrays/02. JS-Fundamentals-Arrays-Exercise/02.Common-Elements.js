function commonElements(firstArr, secondArr) {
  for (let currentChar of firstArr) {
    if (secondArr.includes(currentChar)) {
      console.log(currentChar);
    }
  }
}
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
