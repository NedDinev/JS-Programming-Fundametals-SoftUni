function maxSequenceOfEqualElements(input) {
  let arrayL = input.length;
  let maxSequence = [];
  for (let i = 0; i < arrayL; i++) {
    let currentSequence = [];
    for (let j = i; j < arrayL; j++) {
      if (input[i] === input[j]) {
        currentSequence.push(input[i]);
      } else {
        break;
      }
    }
    if (currentSequence.length > maxSequence.length) {
      maxSequence = currentSequence;
    }
  }
  console.log(maxSequence.join(` `));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
