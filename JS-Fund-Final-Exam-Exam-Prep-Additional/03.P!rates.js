function pirates(input) {
  let settlements = {};
  for (let line of input) {
    let currentLine = input.shift();
    if (currentLine === "Sail") {
      break;
    }

    let [town, population, gold] = currentLine.split("||");
    if (settlements.hasOwnProperty(town)) {
      settlements[town].population += Number(population);
      settlements[town].gold += Number(gold);
    } else {
      settlements[town] = {
        population: Number(population),
        gold: Number(gold),
      };
    }
  }

  for (let token of input) {
    let [command, currentTown, firstAction, secondAction] = token.split("=>");

    switch (command) {
      case "Plunder":
        let plunderGold = Number(secondAction);
        let plunderPeople = Number(firstAction);
        if (settlements.hasOwnProperty(currentTown)) {
          if (plunderPeople > settlements[currentTown].population) {
            let difference = Math.abs(
              settlements[currentTown].population - plunderPeople
            );
            plunderPeople -= difference;
            settlements[currentTown].population -= plunderPeople;
          } else {
            settlements[currentTown].population -= plunderPeople;
          }
          if (plunderGold > settlements[currentTown].gold) {
            let difference = Math.abs(
              settlements[currentTown].gold - plunderGold
            );
            plunderGold -= difference;
            settlements[currentTown].gold -= plunderGold;
          } else {
            settlements[currentTown].gold -= plunderGold;
          }
          console.log(
            `${currentTown} plundered! ${plunderGold} gold stolen, ${plunderPeople} citizens killed.`
          );
          if (
            settlements[currentTown].gold <= 0 ||
            settlements[currentTown].population <= 0
          ) {
            console.log(`${currentTown} has been wiped off the map!`);
            delete settlements[currentTown];
          }
        }
        break;
      case "Prosper":
        let prosperGold = Number(firstAction);
        if (settlements.hasOwnProperty(currentTown)) {
          if (prosperGold < 0) {
            console.log("Gold added cannot be a negative number!");
            break;
          } else {
            settlements[currentTown].gold += prosperGold;
            console.log(
              `${prosperGold} gold added to the city treasury. ${currentTown} now has ${settlements[currentTown].gold} gold.`
            );
          }
        }
        break;
      case "End":
        break;
      default:
        break;
    }
  }

  let settlementsCount = Object.keys(settlements).length;
  if (settlementsCount !== 0) {
    console.log(
      `Ahoy, Captain! There are ${settlementsCount} wealthy settlements to go to:`
    );
    for (let town in settlements) {
      console.log(
        `${town} -> Population: ${settlements[town].population} citizens, Gold: ${settlements[town].gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);

console.log("-------------------------------------");

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>0",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
