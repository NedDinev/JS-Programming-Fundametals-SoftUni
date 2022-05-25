function vacation(pplGroup, typeGroup, day) {
  let singlePersonPrice = 0;
  let discount = 0;

  switch (typeGroup) {
    case "Students":
      if (day == "Friday") {
        singlePersonPrice = 8.45;
      } else if (day == "Saturday") {
        singlePersonPrice = 9.8;
      } else if (day == "Sunday") {
        singlePersonPrice = 10.46;
      }
      if (typeGroup == "Students" && pplGroup >= 30) {
        discount =
          pplGroup * singlePersonPrice - pplGroup * singlePersonPrice * 0.15;
      }
      break;
    case "Business":
      if (day == "Friday") {
        singlePersonPrice = 10.9;
      } else if (day == "Saturday") {
        singlePersonPrice = 15.6;
      } else if (day == "Sunday") {
        singlePersonPrice = 16;
      }
      if (typeGroup == "Business" && pplGroup >= 100) {
        pplGroup -= 10;
      }
      break;
    case "Regular":
      if (day == "Friday") {
        singlePersonPrice = 15;
      } else if (day == "Saturday") {
        singlePersonPrice = 20;
      } else if (day == "Sunday") {
        singlePersonPrice = 22.5;
      }
      if (pplGroup >= 10 && pplGroup <= 20) {
        discount =
          pplGroup * singlePersonPrice - pplGroup * singlePersonPrice * 0.05;
      }
      break;
    default:
      break;
  }

  let total = pplGroup * singlePersonPrice;

  if (discount != 0) {
    console.log(`Total price: ${discount.toFixed(2)}`);
  } else {
    console.log(`Total price: ${total.toFixed(2)}`);
  }
}

vacation(40, "Regular", "Saturday");
