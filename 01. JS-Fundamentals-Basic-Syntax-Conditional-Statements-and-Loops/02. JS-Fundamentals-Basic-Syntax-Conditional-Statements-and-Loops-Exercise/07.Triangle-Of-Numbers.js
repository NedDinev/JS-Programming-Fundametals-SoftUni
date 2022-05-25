function triangleOfNumbers(n) {
  for (let row = 1; row <=n ; row++) {
    let inLine = "";
    for (let col = 1; col <= row; col++) {
      inLine += row + " ";
    }
    console.log(inLine)
  }
}
triangleOfNumbers(5);
