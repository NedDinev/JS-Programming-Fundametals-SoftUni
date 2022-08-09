function plantDiscovery(input) {
  let n = Number(input.shift());
  let plantsObj = {};

  for (let i = 0; i < n; i++) {
    let plantInfo = input.shift();
    if (
      plantInfo.split(" ")[0] == "Rate:" ||
      plantInfo.split(" ")[0] == "Update:" ||
      plantInfo.split(" ")[0] == "Reset:"
    ) {
      console.log("error");
    } else {
      let [plantName, rairity] = plantInfo.split("<->");

      plantsObj[plantName] = {
        rairity: Number(rairity),
        raiting: Number(0),
        raitingCount: Number(1),
      };
    }
  }

  let command = input.shift();
  while (command !== "Exhibition") {
    let [currCommand, plantData] = command.split(": ");
    let [currPlant, action] = plantData.split(" - ");
    action = Number(action);

    switch (currCommand) {
      case "Rate":
        let currRating = action;

        if (plantsObj.hasOwnProperty(currPlant)) {
          plantsObj[currPlant].raiting =
            (plantsObj[currPlant].raiting + currRating) /
            plantsObj[currPlant].raitingCount;
          plantsObj[currPlant].raitingCount++;
        } else {
          console.log("error");
        }

        break;
      case "Update":
        let newRairity = action;
        if (plantsObj.hasOwnProperty(currPlant)) {
          plantsObj[currPlant].rairity = newRairity;
        } else {
          console.log("error");
        }
        break;
      case "Reset":
        if (plantsObj.hasOwnProperty(currPlant)) {
          plantsObj[currPlant].raiting = 0;
          plantsObj[currPlant].raitingCount = 1;
        } else {
          console.log("error");
        }
        break;

      default:
        break;
    }

    command = input.shift();
  }
  if (command === "Exhibition") {
    console.log("Plants for the exhibition:");
    for (let key in plantsObj) {
      delete plantsObj[key].raitingCount;
      console.log(
        `- ${key}; Rarity: ${plantsObj[key].rairity}; Rating: ${plantsObj[
          key
        ].raiting.toFixed(2)}`
      );
    }
  }
}
plantDiscovery([
  "4",
  "Arnoldii<->4",
  "Woodii<->7",
  "Woodii<->9",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldadsii - 3",
  "Rate: Woodii - 5",
  "Reset: Arnoldii",
  "Rate: Arnoldii - 5",
  "Exhibition",
]);
console.log("--------------------------------------------------");
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
