function race(input) {
  let racers = input.shift().split(", ");
  let namePattern = /(?<name>[A-Za-z])/g;
  let scorePattern = /\d/g;
  let obj = {};
  let finalPlace = ["1st place: ", "2nd place: ", "3rd place: "];
  for (const racer of input) {
    if (racer === "end of race") {
      break;
    }
    let racerName = racer.match(namePattern).join("");
    let racerScore = racer
      .match(scorePattern)
      .map(Number)
      .reduce((a, b) => a + b);
    if (racers.includes(racerName)) {
      if (!obj[racerName]) {
        obj[racerName] = 0;
        obj[racerName] = racerScore;
      } else {
        obj[racerName] += racerScore;
      }
    }
  }
  let racerEntries = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  racerEntries.forEach((racer, place) =>
    console.log(`${finalPlace[place].concat(racer[0])}`)
  );
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
