function oddOccurrencies(data) {
  let words = data.split(" ");
  let result = new Map();

  for (let word of words) {
    word = word.toLowerCase();
    if (result.has(word)) {
      let oldValue = result.get(word);
      result.set(word, oldValue + 1);
    } else {
      result.set(word, 1);
    }
  }

  let filteredResult = Array.from(result).filter(([key, value]) => {
    return value % 2 !== 0;
  });

  let output = "";

  for (const [key, value] of filteredResult) {
    output += key + " ";
  }
  console.log(output);
}
oddOccurrencies("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
