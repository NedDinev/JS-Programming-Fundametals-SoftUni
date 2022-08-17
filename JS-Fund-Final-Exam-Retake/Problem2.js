function secondProblem(input) {
  let count = Number(input.shift());
  let pattern =
    /([*|@]{1})(?<tag>[A-Z]{1}[a-z]{2,})\1\:\s(?<letters>\[\w{1}\]\|\[\w{1}\]\|\[\w{1}\]\|)$/gm;

  let valid;

  for (let i = 0; i < count; i++) {
    if ((valid = pattern.exec(input[i])) === null) {
      console.log("Valid message not found!");
    } else {
      let tag = valid.groups.tag;
      let letters = valid.groups.letters;
      letters = letters.split("]|[").join(" ");
      letters = letters.slice(1, letters.length - 2);
      letters = letters.split(" ").join("");
      console.log(
        `${tag}: ${letters.charCodeAt(0)} ${letters.charCodeAt(
          1
        )} ${letters.charCodeAt(2)}`
      );
    }
  }
}

secondProblem([
  "3",
  "*Request*: [I]|[s]|[i]|",
  "*Taggy@: [73]|[73]|[73]|",
  "Should be valid @Taggy@: [v]|[a]|[l]|",
]);
console.log("----------------------------");
secondProblem([
  "3",
  "@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn't be valid",
  "*tAGged*: [i][i][i]|",
  "Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|",
]);
