function pascalCaseSplitter(input) {
  let index = 1;
  let inputL = input.length;
  let letters = input[index];
  let output = "";
  while (inputL > index) {
    letters = input[index];
    if (letters == letters.toUpperCase()) {
      output += ", " + letters;
    } else {
      output += letters;
    }
    index++;
  }
  console.log(input[0] + output);
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
