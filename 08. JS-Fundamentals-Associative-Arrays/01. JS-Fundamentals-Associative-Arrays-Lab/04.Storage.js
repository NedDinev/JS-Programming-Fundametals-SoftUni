function storage(input) {
  let storageMap = new Map();
  for (let data of input) {
    let [product, quantity] = data.split(" ");
    quantity = Number(quantity);
    if (!storageMap.has(product)) {
      storageMap.set(product, quantity);
    } else {
      let currentQuantity = storageMap.get(product);

      storageMap.set(product, quantity + currentQuantity);
    }
  }

  for (const [key, value] of storageMap) {
    console.log(`${key} -> ${value}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
