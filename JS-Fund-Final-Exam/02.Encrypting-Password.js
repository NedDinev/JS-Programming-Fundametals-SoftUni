function secondProblem(input) {
  let passCount = input.shift();

  let pattern =
    /([\W\S_]+)>(?<pass>[0-9]{3}\|[a-z]{3}\|[A-Z]{3}\|[^><]{3})<\1/gm;
  let valid;

  for (let i = 0; i < passCount; i++) {
    valid = pattern.exec(input[i]);
    if (valid === null) {
      console.log("Try another password!");
    } else {
      let validPass = valid.groups["pass"];
      let encryptedPass = validPass.split("|").join("");

      console.log(`Password: ${encryptedPass}`);
    }
  }
}
secondProblem([
  "3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$",
]);
console.log("--------------------------");
secondProblem([
  "5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&*<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  "*>088|zzzz|ZzZ|123<*",
]);
