function printNthEl(array) {
  let arrL = array.length;
  let lastEl = Number(array[arrL - 1]);
  let newArr = [];
  for (let i = 0; i < arrL - 1; i += lastEl) {
    newArr.push(array[i]);
  }
  console.log(newArr.join(` `));
}
printNthEl(["1", "2", "3", "4", "5", "6"]);
