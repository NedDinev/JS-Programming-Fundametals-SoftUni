function furniture(input) {
  let inputString = input.join(" ");
  let pattern = />>\b[A-Z]{1}[A-Za-z]+<<[0-9.]+![0-9]+\b/gm;
  let match = pattern.exec(inputString);
  let allProducts = [];
  let total = 0;
  while (match !== null) {
    allProducts.push(match[0]);
    match = pattern.exec(inputString);
  }
  console.log("Bought furniture: ");

  for (let data of allProducts) {
    let product = data.split("<<");
    let name = product[0].slice(2);
    let [price, quantity] = product[1].split("!");
    total += price * quantity;
    console.log(name);
  }
  console.log(`Total money spend: ${total.toFixed(2)}`);
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
