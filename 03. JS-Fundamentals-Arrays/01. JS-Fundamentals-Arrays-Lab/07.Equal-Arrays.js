function equalArrays(firstArr, secondArr) {
  let sum = 0;
  let difference;
  let notEqual = false;

  for (let i = 0; i < firstArr.length; i++) {
    sum += Number(firstArr[i]);
    if (firstArr[i] != secondArr[i]) {
      notEqual = true;
      difference = [i];
      break;
    }
  }

  if (notEqual) {
    console.log(
      `Arrays are not identical. Found difference at ${difference} index`
    );
  } else {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
