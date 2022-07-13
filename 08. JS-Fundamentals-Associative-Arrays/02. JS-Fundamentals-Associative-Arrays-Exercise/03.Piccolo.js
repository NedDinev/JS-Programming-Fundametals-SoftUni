function piccolo(data) {
  let parkingLot = new Map();

  for (let car of data) {
    let [command, number] = car.split(", ");

    if (command == "IN") {
      if (!parkingLot.has(number)) {
        parkingLot.set(number, 1);
      }
    } else {
      parkingLot.delete(number);
    }
  }

  let sortedParkingLot = Array.from(parkingLot).sort(
    ([keyA, valueA], [keyB, valueB]) => {
      return keyA.localeCompare(keyB);
    }
  );
  if (sortedParkingLot.length == 0) {
    console.log("Parking Lot is Empty");
  } else {
    for (const [key, value] of sortedParkingLot) {
      console.log(key);
    }
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
