function trippleLatinLetters(n) {
  for (let a = 0; a < n; a++) {
    let num1 = a;

    for (let b = 0; b < n; b++) {
      let num2 = b;

      for (let c = 0; c < n; c++) {
        let num3 = c;
        console.log(
          `${String.fromCharCode(97 + num1)}${String.fromCharCode(
            97 + num2
          )}${String.fromCharCode(97 + num3)}`
        );
      }
    }
  }
}
trippleLatinLetters(2);
