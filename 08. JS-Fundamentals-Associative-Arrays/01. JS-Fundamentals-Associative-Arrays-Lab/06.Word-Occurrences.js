function wordOccurrences(arr) {
  let obj = {};

  for (let text of arr) {
    if (!obj.hasOwnProperty(text)) {
      obj[text] = 1;
    } else {
      obj[text] = obj[text] + 1;
    }
  }
  let sortObj = Object.entries(obj);
  sortObj.sort((a, b) => b[1] - a[1]);
  for (const [txt, count] of sortObj) {
    console.log(`${txt} -> ${count} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
