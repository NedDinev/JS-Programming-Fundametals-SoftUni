function lowerOrUpper(input) {
  let resultCase = ``;
  if (input[0] == input[0].toUpperCase()) {
    resultCase = `upper-case`;
  } else if (input[0] == input[0].toLowerCase()) {
    resultCase = `lower-case`;
  }
  console.log(resultCase);
}
lowerOrUpper(`f`);
