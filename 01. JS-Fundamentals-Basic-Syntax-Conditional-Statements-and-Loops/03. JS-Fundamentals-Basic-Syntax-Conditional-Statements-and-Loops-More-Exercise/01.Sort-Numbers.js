function sortNumbers(numOne, numTwo, numThree) {
  let largest = Math.max(numOne, numTwo, numThree);
  let medium = 0;
  let smallest = Math.min(numOne, numTwo, numThree);

  if (numOne != largest && numOne != smallest) {
    medium = numOne;
  } else if (numTwo != largest && numTwo != smallest) {
    medium = numTwo;
  } else if (numThree != largest && numThree != smallest) {
    medium = numThree;
  }

  if (smallest > medium || medium >= largest) {
    medium = smallest;
  }
  console.log(largest + "\r\n" + medium + "\r\n" + smallest);
}
sortNumbers(0, 1, 2);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);
