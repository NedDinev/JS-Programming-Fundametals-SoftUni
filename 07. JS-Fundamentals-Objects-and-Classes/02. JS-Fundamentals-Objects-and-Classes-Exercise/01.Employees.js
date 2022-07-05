function solve(input) {
  let employees = {};

  for (let el of input) {
    let name = el;
    employees.employeeName = name;
    employees.personalNum = name.length;

    console.log(
      `Name: ${employees.employeeName} -- Personal Number: ${employees.personalNum}`
    );
  }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
