function worldTour(input) {
  let allStops = input.shift();
  let index = 0;

  while (input[index] !== "Travel") {
    let token = input[index].split(":");
    let command = token[0];

    switch (command) {
      case "Add Stop":
        let fromIndex = Number(token[1]);
        let string = token[2];
        if (fromIndex >= 0 && fromIndex <= allStops.length) {
          allStops =
            allStops.slice(0, fromIndex) + string + allStops.slice(fromIndex);
          console.log(allStops);
        } else {
          console.log(allStops);
        }
        break;
      case "Remove Stop":
        let startIndex = Number(token[1]);
        let endIndex = Number(token[2]) + 1;
        if (
          startIndex >= 0 &&
          startIndex < endIndex &&
          endIndex > startIndex &&
          endIndex <= allStops.length
        ) {
          allStops =
            allStops.substring(0, startIndex) + allStops.substring(endIndex);
          console.log(allStops);
        } else {
          console.log(allStops);
        }
        break;
      case "Switch":
        let oldString = token[1];
        let newString = token[2];
        if (allStops.includes(oldString)) {
          allStops = allStops.replace(oldString, newString);
          console.log(allStops);
        } else {
          console.log(allStops);
        }
        break;

      default:
        break;
    }

    index++;
  }
  console.log(`Ready for world tour! Planned stops: ${allStops}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
console.log("-----------------------");
worldTour([
  "Albania:Bulgaria:Cyprus:Deuchland",
  "Add Stop:3:Nigeria",
  "Remove Stop:4:8",
  "Switch:Albania: Azərbaycan",
  "Travel",
]);
