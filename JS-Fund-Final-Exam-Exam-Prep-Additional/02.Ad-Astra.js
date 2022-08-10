function adAstra(input) {
  let pattern =
    /([\#||\|]{1})(?<itemName>[A-Z a-z]+)\1(?<expirationDate>(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{2})\1(?<calories>\d+)\1\B/gm;
  let str = input.join(" ");
  let results;
  let caloriesSum = 0;
  let outputs = [];

  while ((results = pattern.exec(str)) !== null) {
    outputs.push(
      `Item: ${results.groups.itemName}, Best before: ${results.groups.expirationDate}, Nutrition: ${results.groups.calories}`
    );
    if (
      Number(results.groups.calories) < 10000 &&
      Number(results.groups.calories) > 0
    ) {
      caloriesSum += Number(results.groups.calories);
    }
  }
  caloriesSum = caloriesSum / 2000;

  console.log(
    `You have food to last you for: ${Math.floor(caloriesSum)} days!`
  );
  for (let output of outputs) {
    console.log(output);
  }
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
