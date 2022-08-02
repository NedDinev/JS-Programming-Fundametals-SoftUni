function needForSpeed(input) {
  let carsQuantity = input.shift();
  let ownedCars = {};
  for (let i = 0; i < carsQuantity; i++) {
    let [car, mileage, fuel] = input[i].split("|");

    ownedCars[car] = {
      carMileage: Number(mileage),
      carFuel: Number(fuel),
    };
  }

  for (let token of input) {
    if (token === "Stop") {
      break;
    }

    let [command, currentCar, firstAction, secondAction] = token.split(" : ");

    switch (command) {
      case "Drive":
        let distance = Number(firstAction);
        let neededFuel = Number(secondAction);

        if (ownedCars[currentCar]["carFuel"] < neededFuel) {
          console.log("Not enough fuel to make that ride");
        } else {
          ownedCars[currentCar].carFuel -= neededFuel;
          ownedCars[currentCar].carMileage += distance;
          console.log(
            `${currentCar} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`
          );
        }
        if (ownedCars[currentCar].carMileage >= 100000) {
          console.log(`Time to sell the ${currentCar}!`);
          delete ownedCars[currentCar];
        }
        break;
      case "Refuel":
        let refilFuel = Number(firstAction);
        let refiledFuel = 0;
        let startFuel = ownedCars[currentCar].carFuel;
        let allFuel = ownedCars[currentCar].carFuel + refilFuel;

        for (let i = ownedCars[currentCar].carFuel; i < allFuel; i++) {
          if (startFuel >= 75) {
            break;
          }
          startFuel += 1;
          refiledFuel += 1;
        }
        ownedCars[currentCar].carFuel = startFuel;
        console.log(`${currentCar} refueled with ${refiledFuel} liters`);

        break;
      case "Revert":
        let kilometers = Number(firstAction);
        ownedCars[currentCar].carMileage -= kilometers;
        if (ownedCars[currentCar].carMileage < 10000) {
          ownedCars[currentCar].carMileage = 10000;
          break;
        }
        console.log(
          `${currentCar} mileage decreased by ${kilometers} kilometers`
        );
        break;

      default:
        break;
    }
  }

  for (let vehicle in ownedCars) {
    console.log(
      `${vehicle} -> Mileage: ${ownedCars[vehicle].carMileage} kms, Fuel in the tank: ${ownedCars[vehicle].carFuel} lt.`
    );
  }
}
needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
