function magicSum(array, num) {
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
    let currentNum = array[i];

    for (let j = i + 1; j < arrayL; j++) {
      let nextNum = array[j];
      if (currentNum + nextNum == num) {
        console.log(`${currentNum} ${nextNum}`);
      }
    }
  }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
