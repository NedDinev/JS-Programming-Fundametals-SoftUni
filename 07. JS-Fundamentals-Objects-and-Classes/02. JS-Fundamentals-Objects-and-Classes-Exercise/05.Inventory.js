function solve(input) {
  let inputL = input.length;

  let arr = [];
  for (let i = 0; i < inputL; i++) {
    let [currentName, currentLvl, currentItems] = input[i].split(" / ");

    arr.push({
      hero: currentName.toString(),
      level: Number(currentLvl),
      items: currentItems.toString(),
    });

    arr.sort((a, b) => a.level - b.level);
  }
  for (let key in arr) {
    console.log(`Hero: ${arr[key].hero}`);
    console.log(`level => ${arr[key].level}`);
    console.log(`items => ${arr[key].items}`);
  }
}

solve([
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
  "Batman / 2 / Banana, Gun",
]);
