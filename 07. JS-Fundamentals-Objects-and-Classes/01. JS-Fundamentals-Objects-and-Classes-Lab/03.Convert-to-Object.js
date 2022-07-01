function convertToObject(inputJSON) {
  let inputObj = JSON.parse(inputJSON);

  for (let keys of Object.keys(inputObj)) {
    console.log(`${keys}: ${inputObj[keys]}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
