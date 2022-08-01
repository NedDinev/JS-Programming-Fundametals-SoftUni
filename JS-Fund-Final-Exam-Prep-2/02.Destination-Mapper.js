function destinationMapper(input) {
  let pattern = /([=||/]{1})(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/gm;

  let match = pattern.exec(input);
  let destinations = [];
  let points = 0;

  while (match !== null) {
    points += match.groups.destination.length;
    destinations.push(match.groups.destination);
    match = pattern.exec(input);
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${points}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

console.log("-----------------------");

let pattern = /(?<animal>\w{3})/gm;
let text = "///cat/////////dog//";
let matches = text.matchAll(pattern);
for (let match of matches) {
  console.log(match);
  console.log(match.groups.animal);
}
