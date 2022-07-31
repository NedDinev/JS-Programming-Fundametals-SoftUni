function passReset(input) {
  let pass = input.shift();

  for (let commandStr of input) {
    if (commandStr === "Done") {
      break;
    }

    let [command, firstAction, secondAction] = commandStr.split(" ");

    switch (command) {
      case "TakeOdd":
        let oddPass = "";

        for (let i = 0; i < pass.length; i++) {
          if (i % 2 !== 0) {
            oddPass += pass[i];
          }
        }
        pass = oddPass;
        console.log(pass);
        break;
      case "Cut":
        let index = Number(firstAction);
        let length = Number(secondAction);

        pass = pass.slice(0, index) + pass.slice(index + length);

        console.log(pass);
        break;
      case "Substitute":
        let substring = firstAction;
        let substitute = secondAction;

        if (pass.includes(substring)) {
          pass = pass.split(substring).join(substitute);
          console.log(pass);
        } else {
          console.log("Nothing to replace!");
        }
        break;

      default:
        break;
    }
  }
  console.log(`Your password is: ${pass}`);
}
passReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
