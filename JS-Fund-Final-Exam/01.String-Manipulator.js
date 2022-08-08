function firstProblem(input) {
  let givenString = input.shift();

  for (let token of input) {
    if (token === "End") {
      break;
    }

    let [command, firstAction, secondAction] = token.split(" ");

    switch (command) {
      case "Translate":
        let translateCh = firstAction;
        let replacementCh = secondAction;
        if (givenString.includes(translateCh)) {
          givenString = givenString.split(translateCh).join(replacementCh);
        }
        console.log(givenString);
        break;
      case "Includes":
        let incldStr = firstAction;
        if (givenString.includes(incldStr)) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Start":
        let startSubStr = firstAction;
        if (givenString.startsWith(startSubStr)) {
          console.log("True");
        } else {
          console.log("False");
        }
        break;
      case "Lowercase":
        givenString = givenString.toLowerCase();
        console.log(givenString);
        break;
      case "FindIndex":
        let ch = firstAction;
        if (givenString.includes(ch)) {
          console.log(givenString.lastIndexOf(ch));
        }
        break;
      case "Remove":
        let startIndex = Number(firstAction);
        let countIndex = Number(secondAction);
        givenString =
          givenString.slice(0, startIndex) +
          givenString.slice(startIndex + countIndex, givenString.length);
        console.log(givenString);
        break;

      default:
        break;
    }
  }
}
firstProblem([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);
console.log("-----------------------------");
firstProblem([
  "*S0ftUni is the B3St Plac3**",
  "Translate 2 o",
  "Includes best",
  "Start the",
  "Lowercase",
  "FindIndex p",
  "Remove 2 7",
  "End",
]);
