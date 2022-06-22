function guestTracker(input) {
  let guestList = [];
  for (let i = 0; i < input.length; i++) {
    let command = input[i].split(` `);
    let name = command[0];
    let goingOrNot = command[2];

    if (goingOrNot == `not`) {
      if (!guestList.includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        let removePerson = guestList.indexOf(name);
        if (removePerson > -1) {
          guestList.splice(removePerson, 1); // 2nd parameter means remove one item only
        }
      }
    } else {
      if (!guestList.includes(name)) {
        guestList.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    }
  }
  console.log(guestList.join(`\n`));
}
guestTracker([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
