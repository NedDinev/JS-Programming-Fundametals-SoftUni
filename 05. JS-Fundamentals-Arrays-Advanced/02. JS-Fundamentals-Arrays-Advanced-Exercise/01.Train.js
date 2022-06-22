function train(input) {
  let allWagons = input.shift().split(` `).map(Number); // ['32', '54', '21', '12', '4', '0', '23']

  let capacity = Number(input.shift()); // 75

  for (let i = 0; i < input.length; i++) {
    let commandNum = input[i].split(` `);

    if (commandNum[0] == `Add`) {
      commandNum[1] = Number(commandNum[1]);
      allWagons.push(commandNum[1]);
    } else {
      for (let j = 0; j < allWagons.length; j++) {
        commandNum[0] = Number(commandNum[0]);
        if (allWagons[j] + commandNum[0] <= capacity) {
          allWagons[j] += commandNum[0];
          break;
        }
      }
    }
  }
  console.log(allWagons.join(` `));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
