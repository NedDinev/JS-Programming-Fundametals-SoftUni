function maxSequenceOfEqualElements(array) {
  let output = `no`;
  let arrayL = array.length;

  for (let i = 0; i < arrayL; i++) {
    let currentNum = array[i];
    let leftSum = 0;
    let rightSum = 0;
    //for the left side

    for (let l = 0; l < i; l++) {
      leftSum += array[l];
    }

    //for the right side
    for (let r = i + 1; r < arrayL; r++) {
      rightSum += array[r];
    }
    if (leftSum == rightSum) {
      output = i;
    }
  }
  console.log(output);
}
maxSequenceOfEqualElements([1,2,3]);
