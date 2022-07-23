function solve(names) {
  let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+/g;

  let validNames = [];
  let validName = pattern.exec(names);
  while (validName !== null) {
    validNames.push(validName);
    validName = pattern.exec(names);
  }
  console.log(validNames.join(" "));
}
solve(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
