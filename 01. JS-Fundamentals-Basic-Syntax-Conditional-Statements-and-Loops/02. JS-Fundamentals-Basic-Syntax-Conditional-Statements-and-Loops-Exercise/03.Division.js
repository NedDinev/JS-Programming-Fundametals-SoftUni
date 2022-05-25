function division(input) {
  // 2, 3, 6, 7, and 10
  let divisionNum = 0;
  if (input % 10 == 0) {
    divisionNum = 10;
  } else if (input % 7 == 0) {
    divisionNum = 7;
  } else if (input % 6 == 0) {
    divisionNum = 6;
  } else if (input % 3 == 0) {
    divisionNum = 3;
  } else if (input % 2 == 0) {
    divisionNum = 2;
  }

  if (divisionNum != 0) {
    console.log(`The number is divisible by ${divisionNum}`);
  } else {
    console.log(`Not divisible`);
  }
}
division(30);
division(15);
division(12);
division(1643);
