function solve(input) {
  let currentTown = {};
  for (let el of input) {
    let [town, latitude, longitude] = el.split(" | ");
    currentTown.town = town;
    currentTown.latitude = Number(latitude).toFixed(2);
    currentTown.longitude = Number(longitude).toFixed(2);
    console.log(currentTown);
  }
}
solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
