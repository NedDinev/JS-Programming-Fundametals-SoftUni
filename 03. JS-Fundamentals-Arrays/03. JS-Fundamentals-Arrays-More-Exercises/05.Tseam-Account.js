function tseamAccount(array) {
  let index = 0;
  let games = array[index].split(" "); // splits the list of games string into arrays
  index++;

  // runs through different commands while recieves "Play"
  while (array[index] != "Play!") {
    let command = array[index].split(" "); // splits the given commands strings into arrays

    // switch case for the different commands
    switch (command[0]) {
      case `Install`:
        if (!games.includes(command[1])) {
          // games.includes(command[1]) check if there is a game with this name or not
          games.push(command[1]);
        }
        break;
      case `Uninstall`:
        if (games.includes(command[1])) {
          games = games.filter((e) => e !== command[1]);
        }

        break;
      case `Update`:
        if (games.includes(command[1])) {
          games = games.filter((e) => e !== command[1]);
          games.push(command[1]);
        }
        break;
      case `Expansion`:
        //todo split command[1] into array [game , expansion]
        let expansion = command[1].split("-");
        let expansionVersion = `${expansion[0]}:${expansion[1]}`;

        // todo find current game index and after it add "{game}:{expansion}"
        for (let i = 0; i < games.length; i++) {
          if (games[i] == expansion[0]) {
            games.splice(i + 1, 0, expansionVersion); //to add expansion version
          }
        }

        break;

      default:
        break;
    }

    index++;
  }

  console.log(games.join(` `));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
