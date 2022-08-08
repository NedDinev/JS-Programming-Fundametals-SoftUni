function thirdProblem(input) {
  let zoo = {};
  let allAreas = {};

  for (let token of input) {
    if (token === "EndDay") {
      break;
    }
    let [command, data] = token.split(": ");
    let [animalName, food, area] = data.split("-");
    food = Number(food);
    switch (command) {
      case "Add":
        if (zoo.hasOwnProperty(animalName)) {
          zoo[animalName].food += food;
        } else {
          zoo[animalName] = { food: food, area: area };
          if (allAreas.hasOwnProperty(area)) {
            allAreas[area] += 1;
          } else {
            allAreas[area] = 1;
          }
        }

        break;
      case "Feed":

        if (zoo.hasOwnProperty(animalName)) {
          zoo[animalName].food -= food;

          if (zoo[animalName].food <= 0) {
            let currArea = zoo[animalName].area;

            console.log(`${animalName} was successfully fed`);
            delete zoo[animalName];
            allAreas[currArea] -= 1;
            if (allAreas[currArea] <= 0) {
              delete allAreas[currArea];
            }
          }
        }
        break;
      default:
        break;
    }
  }

  console.log("Animals:");
  for (let key in zoo) {
    console.log(` ${key} -> ${zoo[key].food}g`);
  }
  console.log("Areas with hungry animals:");

  for (let key in allAreas) {
    console.log(`${key}: ${allAreas[key]}`);
  }
}
thirdProblem([
  "Add: Adam-4500-ByTheCreek",
  "Add: Maya-7600-WaterfallArea",
  "Add: Maya-1230-WaterfallArea",
  "Feed: Jamie-2000",
  "EndDay",
]);
console.log("--------------------------------");
thirdProblem([
  "Add: Jamie-600-WaterfallArea",
  "Add: Maya-6570-WaterfallArea",
  "Add: Adam-4500-ByTheCreek",
  "Add: Bobbie-6570-WaterfallArea",
  "Feed: Jamie-2000",
  "Feed: Adam-2000",
  "Feed: Adam-2500",
  "EndDay",
]);
console.log("--------------------------------");
thirdProblem([
  "Add: Bonie-3490-RiverArea",
  "Add: Sam-5430-DeepWoodsArea",
  "Add: Bonie-200-RiverArea",
  "Add: Maya-4560-ByTheCreek",
  "Feed: Maya-2390",
  "Feed: Bonie-3500",
  "Feed: Johny-3400",
  "Feed: Sam-5500",
  "EndDay",
]);
