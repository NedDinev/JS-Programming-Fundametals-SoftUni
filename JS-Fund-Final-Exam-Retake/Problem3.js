function thirdProblem(input) {
  let obj = {};
  let soldCount = 0;

  let cmd = input.shift();
  while (cmd !== "Complete") {
    let [currCmd, quantity, food] = cmd.split(" ");
    quantity = Number(quantity);
    switch (currCmd) {
      case "Receive":
        if (quantity <= 0) {
        } else {
          if (obj.hasOwnProperty(food)) {
            obj[food] += quantity;
          } else {
            obj[food] = quantity;
          }
        }
        break;
      case "Sell":
        if (!obj.hasOwnProperty(food)) {
          console.log(`You do not have any ${food}.`);
        } else {
          if (obj[food] < quantity) {
            console.log(
              `There aren't enough ${food}. You sold the last ${obj[food]} of them.`
            );
            soldCount += obj[food];
            obj[food] = 0;
            delete obj[food];
          } else {
            console.log(`You sold ${quantity} ${food}.`);
            obj[food] -= quantity;
            if (obj[food] <= 0) {
              delete obj[food];
            }
            soldCount += quantity;
          }
        }
        break;

      default:
        break;
    }

    cmd = input.shift();
  }

  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }

  console.log(`All sold: ${soldCount} goods`);
}
thirdProblem([
  "Receive 105 cookies",
  "Receive 10 donuts",
  "Sell 10 donuts",
  "Sell 1 bread",
  "Complete",
]);
console.log("----------------------------");
thirdProblem([
  "Receive 10 muffins",
  "Receive 23 bagels",
  "Sell 5 muffins",
  "Sell 10 bagels",
  "Complete",
]);
