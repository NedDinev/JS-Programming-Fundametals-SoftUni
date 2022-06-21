function arrayManipulations(commands) {
  let arr = commands.shift().split(` `).map(Number);

  for (let i = 0; i < commands.length; i++) {
    let [command, firstNum, secondNum] = commands[i].split(` `); // destructuring
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    function add(el) {
      arr.push(el);
    }
    function remove(num) {
      arr = arr.filter((el) => el !== num);
    }

    function removeAt(index) {
      arr.splice(index, 1);
    }

    function insert(num, index) {
      arr.splice(index, 0, num);
    }
    switch (command) {
      case "Add":
        add(firstNum);
        break;
      case "Remove":
        remove(firstNum);
        break;
      case "RemoveAt":
        removeAt(firstNum);
        break;
      case "Insert":
        insert(firstNum, secondNum);
        break;

      default:
        break;
    }
  }

  console.log(arr.join(` `));
}
arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
