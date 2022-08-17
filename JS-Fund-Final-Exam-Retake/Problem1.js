function firstProblem(input) {
  let word = input.shift();

  let cmd = input.shift();

  while (cmd !== "Complete") {
    let [currCmd, action] = cmd.split(" ");

    switch (currCmd) {
      case "Make":
        if (action === "Upper") {
          word = word.toUpperCase();
        } else if (action === "Lower") {
          word = word.toLowerCase();
        }
        console.log(word);
        break;

      case "GetDomain":
        let count = Number(action);

        let lastChars = word.slice(-count);

        console.log(lastChars);
        break;

      case "GetUsername":
        if (word.includes("@")) {
          let emailCharIndex = word.indexOf("@");
          let username = word.slice(0, emailCharIndex);
          console.log(username);
        } else {
          console.log(`The email ${word} doesn't contain the @ symbol.`);
        }
        break;
      case "Replace":
        word = word.split(action).join("-");
        console.log(word);
        break;
      case "Encrypt":
        let asciiNums = "";

        for (let currChar of word) {
          asciiNums += " " + word.charCodeAt(word.indexOf(currChar));
        }
        console.log(asciiNums.trim());
        break;

      default:
        break;
    }

    cmd = input.shift();
  }
}
firstProblem([
  "Mike123@somemail.com",
  "Make Upper",
  "GetDomain 3",
  "GetUsername",
  "Encrypt",
  "Complete",
]);
console.log("----------------------------");
firstProblem([
  "AnotherMail.com",
  "Make Lower",
  "GetUsername",
  "Replace a",
  "Complete",
]);
console.log("----------------------------");
firstProblem([
  "Another@Mail.com",
  "Make Lower",
  "GetUsername",
  "GetDomain 3",
  "Encrypt",
  "Complete",
]);
