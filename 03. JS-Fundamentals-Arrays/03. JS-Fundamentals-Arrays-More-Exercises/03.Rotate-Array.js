function rotateArray(array) {
  let rotations = array[array.length - 1];
  array.pop();

  while (rotations > 0) {
    let elementToMove = array.pop();
    array.unshift(elementToMove);
    rotations--;
  }
  console.log(array.join(` `));
}

rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
