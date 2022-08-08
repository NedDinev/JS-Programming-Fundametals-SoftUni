function memoryGame(input) {
  let sequence = input.shift().split(" ");
  let currComand = input.shift();
  let movesCount = 1;

  while (currComand !== "end") {
    [firstIndex, secondIndex] = currComand.split(" ");

    if (
      firstIndex == secondIndex ||
      firstIndex < 0 ||
      firstIndex > sequence.length - 1 ||
      secondIndex < 0 ||
      secondIndex > sequence.length - 1
    ) {
      console.log("Invalid input! Adding additional elements to the board");
      sequence.splice(sequence.length / 2, 0, `-${movesCount}a`);
      sequence.splice(sequence.length / 2, 0, `-${movesCount}a`);
    } else if (
      sequence[firstIndex] == sequence[secondIndex] ||
      sequence[secondIndex] == sequence[firstIndex]
    ) {
      console.log(
        `Congrats! You have found matching elements - ${sequence[secondIndex]}!`
      );
      let arr = [];
      for (let chars of sequence) {
        if (chars != sequence[firstIndex] || chars != sequence[secondIndex]) {
          arr.push(chars);
        }
      }
      sequence = arr;
    } else if (
      sequence[firstIndex] != sequence[secondIndex] ||
      sequence[secondIndex] != sequence[firstIndex]
    ) {
      console.log("Try again!");
    }
    if (sequence.length == 0) {
      console.log(`You have won in ${movesCount} turns!`);
      break;
    }

    movesCount++;
    currComand = input.shift();
  }
  if (currComand == "end") {
    console.log("Sorry you lose :(");
    console.log(`${sequence.join(" ")}`);
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
console.log("----------------------");
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
console.log("----------------------");
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
