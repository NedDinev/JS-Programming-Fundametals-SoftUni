function imitationGame(input) {
  let encryptedMsg = input.shift();
  let cmd = input.shift();

  while (cmd !== "Decode") {
    let [currCmd, firstAction, secondAction] = cmd.split("|");

    switch (currCmd) {
      case "Move":
        let numOfLetters = Number(firstAction);

        encryptedMsg =
          encryptedMsg.slice(numOfLetters, encryptedMsg.length) +
          encryptedMsg.slice(0, numOfLetters);

        break;
      case "Insert":
        let index = Number(firstAction);
        let value = secondAction;

        encryptedMsg =
          encryptedMsg.slice(0, index) +
          value +
          encryptedMsg.slice(index, encryptedMsg.length);

        break;
      case "ChangeAll":
        let subStr = firstAction;
        let replaceStr = secondAction;

        if (encryptedMsg.includes(subStr)) {
          encryptedMsg = encryptedMsg.split(subStr).join(replaceStr);
        }
        break;

      default:
        break;
    }
    cmd = input.shift();
  }
  if (cmd === "Decode") {
    console.log(`The decrypted message is: ${encryptedMsg}`);
  }
}
imitationGame(["llHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
imitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
