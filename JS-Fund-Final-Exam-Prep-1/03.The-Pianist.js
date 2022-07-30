function thePianist(input) {
  let piecesCount = input.shift();
  let allPieces = {};

  for (let i = 0; i < piecesCount; i++) {
    let [piece, composer, key] = input[i].split("|");
    allPieces[piece] = {
      composer: composer,
      key: key,
    };
  }

  let index = piecesCount;
  while (input[index] !== "Stop") {
    let [command, piece, composer, key] = input[index].split("|");

    switch (command) {
      case "Add":
        if (allPieces.hasOwnProperty(piece)) {
          console.log(`${piece} is already in the collection!`);
        } else {
          allPieces[piece] = {
            composer: composer,
            key: key,
          };
          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        }
        break;
      case "Remove":
        if (allPieces.hasOwnProperty(piece)) {
          delete allPieces[piece];
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
        break;
      case "ChangeKey":
        let newKey = composer;
        if (allPieces.hasOwnProperty(piece)) {
          allPieces[piece].key = newKey;
          console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
        break;

      default:
        break;
    }

    index++;
  }

  for (let piece of Object.keys(allPieces)) {
    console.log(
      `${piece} -> Composer: ${allPieces[piece].composer}, Key: ${allPieces[piece].key}`
    );
  }
}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
