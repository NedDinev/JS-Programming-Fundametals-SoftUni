function chessBoard(input) {
  let black = `    <span class="black"></span>`;
  let white = `    <span class="white"></span>`;
  let currentColor;
  console.log(`<div class="chessboard">`);

  for (let i = 0; i < input; i++) {
    console.log(`  <div>`);
    if (i % 2 == 0) {
      for (let a = 0; a < input; a++) {
        currentColor = white;
        if (a % 2 == 0) {
          currentColor = black;
        }
        console.log(currentColor);
      }
    } else {
      for (let a = 0; a < input; a++) {
        currentColor = black;
        if (a % 2 == 0) {
          currentColor = white;
        }
        console.log(currentColor);
      }
    }

    console.log(`  </div>`);
  }

  console.log(`  </div>`);
}
chessBoard(3);
