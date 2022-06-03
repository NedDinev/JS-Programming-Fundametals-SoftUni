function dayOfWeek(input) {
  let weekDays = [
    "Invalid day!",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (input == 0 || input > 7) {
    console.log(weekDays[0]);
  } else {
    console.log(weekDays[input]);
  }
}

dayOfWeek(11);
