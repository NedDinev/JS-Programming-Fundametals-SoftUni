function condenseArray(nums) {
  let result = [];
  for (let el of nums) {
    result.push(el);
  }

  while (result.length > 1) {
    let tempArr = [];
    for (let i = 0; i < result.length - 1; i++) {
      tempArr[i] = result[i] + result[i + 1];
    }
    result = tempArr;
  }
  console.log(result[0]);
}
condenseArray([2, 10, 3]);
