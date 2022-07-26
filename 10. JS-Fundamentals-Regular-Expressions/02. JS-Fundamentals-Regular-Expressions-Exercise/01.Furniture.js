function furniture(input) {
  let text = input.join(" ");
  let totalSum = 0;
  let pattern =
    />>\b(?<name>[A-Z]{1}[A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>[0-9]+)\b/gm;
  let valid;

  console.log("Bought furniture:");

  while ((valid = pattern.exec(text)) !== null) {
    let validName = valid.groups["name"];
    let validPrice = Number(valid.groups["price"]);
    let validQuantity = Number(valid.groups["quantity"]);
    console.log(validName);
    totalSum += validPrice * validQuantity;
  }

  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
