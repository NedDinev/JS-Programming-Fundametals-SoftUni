function barIncome(input) {
  let data = input.join(" ");
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*[|](?<count>\d+)[|][^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/gm;
  let match;
  let total = 0;
  while ((match = pattern.exec(data)) !== null) {
    let matchName = match.groups["name"];
    let matchProduct = match.groups["product"];
    let matchCount = Number(match.groups["count"]);
    let matchPrice = Number(match.groups["price"]);
    let moneyFromPerson = matchCount * matchPrice;
    console.log(
      `${matchName}: ${matchProduct} - ${moneyFromPerson.toFixed(2)}`
    );
    total += moneyFromPerson;
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}
barIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
