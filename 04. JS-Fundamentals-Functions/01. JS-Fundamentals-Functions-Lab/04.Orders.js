function orders(product, quantity) {
  let productPrice;

  switch (product) {
    case `coffee`:
      productPrice = 1.5;
      break;
    case `coke`:
      productPrice = 1.4;
      break;
    case `water`:
      productPrice = 1;
      break;
    case `snacks`:
      productPrice = 2;
      break;

    default:
      break;
  }
  let finalPrice = (productPrice * quantity).toFixed(2);
  console.log(finalPrice);
}
orders("water", 5);
