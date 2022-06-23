function computerStore(input) {
  let index = 0;

  let priceError = false;

  let priceWithoutTaxes = 0;
  let discount = false;

  while (input[index] != "regular") {
    if (input[index] == "special") {
      discount = true;
      break;
    }
    let price = Number(input[index]);
    if (price < 0) {
      priceError = true;
      price = 0;
      console.log("Invalid price!");
    }
    priceWithoutTaxes += price;

    index++;
  }

  let taxes = (20 / 100) * priceWithoutTaxes;
  let total = 0;
  if (discount) {
    total =
      priceWithoutTaxes + taxes - (10 / 100) * (priceWithoutTaxes + taxes);
  } else {
    total = priceWithoutTaxes + taxes;
  }

  if (total == 0) {
    console.log(`Invalid order!`);
  } else {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${total.toFixed(2)}$`);
  }
}
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
