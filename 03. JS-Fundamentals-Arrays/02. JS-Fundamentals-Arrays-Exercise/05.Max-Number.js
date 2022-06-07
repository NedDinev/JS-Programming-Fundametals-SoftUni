function maxNumber(array) {
  let newArray = [];
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
    let firstNumber = array[i];
    let isBigger = true;

    for (let j = i + 1; j < arrayL; j++) {
      let secondNumber = array[j];
      if (firstNumber <= secondNumber) {
        isBigger = false;
      }
    }
    if (isBigger) {
      newArray.push(firstNumber);
    }
  }
  console.log(newArray.join(` `));
}
maxNumber([1, 4, 3, 2]);
