function matchDates(input) {
  let pattern = /\b[0-9]{2}([/|.|-])[A-Z]{1}[a-z]{2}\1[0-9]{4}\b/gm;
  let match = pattern.exec(input);
  let validDates = [];
  while (match !== null) {
    validDates.push(match[0]);
    match = pattern.exec(input);
  }

  for (let currentDate of validDates) {
    let charType;
    if (currentDate.includes("/")) {
      charType = "/";
    } else if (currentDate.includes("-")) {
      charType = "-";
    } else if (currentDate.includes(".")) {
      charType = ".";
    }
    let [day, month, year] = currentDate.split(charType);
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
  }
}
matchDates([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016",
]);
