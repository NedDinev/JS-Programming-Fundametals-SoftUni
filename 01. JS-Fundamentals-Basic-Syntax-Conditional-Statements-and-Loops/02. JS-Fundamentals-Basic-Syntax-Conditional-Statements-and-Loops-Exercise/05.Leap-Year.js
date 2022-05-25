function leapYear(input) {
  if (input % 400 == 0) {
    console.log("yes");
  } else if (input % 100 == 0) {
    console.log("no");
  } else if (input % 4 == 0) {
    console.log("yes");
  }else{
    console.log("no");
  }
}

leapYear(1900);

