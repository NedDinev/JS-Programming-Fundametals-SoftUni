function treasureHunt(input) {
  let chest = input.shift().split("|");

  let index = 0;
  let command = input[index];
  index++;
  let i;
  while (command !== "Yohoho!") {
    let operationInput = command.split(" ");
    let operation = operationInput.shift();

    switch (operation) {
      case "Loot":
        for (let el of operationInput) {
          if (!chest.includes(el)) {
            chest.unshift(el);
          }
        }
        break;
      case "Drop":
        i = Number(operationInput[0]);
        if (i < 0 || i > chest.length) {
          command = input[index];
          index++;
          continue;
        }
        let element = chest.splice(i, 1);
        chest.push(element[0]);
        break;
      case "Steal":
        let count = Number(operationInput[0]);
        let items = chest.splice(-count);
        console.log(items.join(", "));
        break;

      default:
        break;
    }

    command = input[index];
    index++;
  }

  let sum = 0;
  for (let el of chest) {
    sum += el.length;
  }

  if (chest.length > 0) {
    let avg = sum / chest.length;
    console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
  } else {
    console.log(`Failed treasure hunt.`);
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
