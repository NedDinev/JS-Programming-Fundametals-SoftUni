function nonDecreasingSubset(array = []) {
  let currentBigger = Number.MIN_SAFE_INTEGER;
  const filteredArray = array.filter(
    (x) => +x >= currentBigger && [(currentBigger = +x)]
  );
  console.log(filteredArray.join(" "));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
