function secretChat(input) {
  let word = input.shift();

  let cmd = input.shift();

  while (cmd !== "Reveal") {
    let [currentCmd, firstAction, secondAction] = cmd.split(":|:");

    switch (currentCmd) {
      case "InsertSpace":
        let index = Number(firstAction);

        word = word.slice(0, index) + " " + word.slice(index, word.length);
        console.log(word);
        break;
      case "Reverse":
        let subStr = firstAction;
        if (word.includes(subStr)) {
          word = word.replace(subStr, "");
          word += subStr.split("").reverse().join("");
          console.log(word);
        } else {
          console.log("error");
        }
        break;
      case "ChangeAll":
        let changeStr = firstAction;
        let replaceStr = secondAction;

        word = word.split(changeStr).join(replaceStr);
        console.log(word);
        break;
      default:
        break;
    }

    cmd = input.shift();
  }
  if (cmd === "Reveal") {
    console.log(`You have a new text message: ${word}`);
  }
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
console.log(`---------------------------------------`);
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
