function arrayRotation(arr, rotations) {
  while (rotations > 0) {
    let elementToMove = arr.shift();
    arr.push(elementToMove);
    rotations--;
  }
  console.log(arr.join(` `));
}
arrayRotation([2, 4, 15, 31], 5);
