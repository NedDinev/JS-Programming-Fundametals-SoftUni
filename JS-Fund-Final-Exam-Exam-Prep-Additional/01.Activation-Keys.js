function activationKeys(input) {
  let activationKey = input.shift();

  for (let token of input) {
    if (token === "Generate") {
      break;
    }
    let [command, firstAction, secondAction, thirdAction] = token.split(">>>");

    switch (command) {
      case "Contains":
        let subStr = firstAction;
        if (activationKey.includes(subStr)) {
          console.log(`${activationKey} contains ${subStr}`);
        } else {
          console.log("Substring not found!");
        }
        break;
      case "Flip":
        let type = firstAction;
        let startIndex = Number(secondAction);
        let endIndex = Number(thirdAction);

        let takeSubStr = activationKey.substring(startIndex, endIndex);

        if (type === "Upper") {
          activationKey = activationKey
            .split(takeSubStr)
            .join(takeSubStr.toUpperCase());
        } else if (type === "Lower") {
          activationKey = activationKey
            .split(takeSubStr)
            .join(takeSubStr.toLowerCase());
        }
        console.log(activationKey);
        break;
      case "Slice":
        let begginingIndex = Number(firstAction);
        let lastIndex = Number(secondAction);

        activationKey =
          activationKey.slice(0, begginingIndex) +
          activationKey.slice(lastIndex);
        console.log(activationKey);
        break;

      default:
        break;
    }
  }
  console.log(`Your activation key is: ${activationKey}`);
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
