function solve(firstArr, secondArr) {
  let storeProducts = {};
  let currentL = firstArr.length;
  let forDeliveryL = secondArr.length;

  for (let i = 0; i < currentL; i += 2) {
    let product = firstArr[i];

    storeProducts[product] = Number(firstArr[i + 1]);
  }

  for (let i = 0; i < forDeliveryL; i += 2) {
    let product = secondArr[i];
    if (storeProducts.hasOwnProperty(product)) {
      storeProducts[product] += Number(secondArr[i + 1]);
    } else {
      storeProducts[product] = Number(secondArr[i + 1]);
    }
  }

  for (let product in storeProducts) {
    console.log(`${product} -> ${storeProducts[product]}`);
  }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
