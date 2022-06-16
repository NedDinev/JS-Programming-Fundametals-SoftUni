function nxnMatrix(input) {
  let matrix = [];

  for (let index = 0; index < input; index++) {
    let row = [];
    for (let j = 0; j < input; j++) {
      row.push(input);
    }
    matrix.push(row.join(` `));
  }
  console.log(matrix.join`\n`);
}
nxnMatrix(5);
