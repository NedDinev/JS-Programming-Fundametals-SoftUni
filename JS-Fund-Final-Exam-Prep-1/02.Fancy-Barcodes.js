function fancyBarcode(input) {
  let counter = input.shift();
  let pattern = /@{1}#+(?<code>[A-Z]{1}[A-Za-z0-9{1}?+]{4,}[A-Z]{1})@{1}#+/gm;

  for (let i = 0; i < counter; i++) {
    let barcode = input[i];
    let matchExec = pattern.exec(barcode);

    if (matchExec === null) {
      console.log("Invalid barcode");
    } else {
      let code = matchExec.groups.code;
      let numConcat = "";

      for (let char of code) {
        if (char == Number(char)) {
          numConcat += char;
        }
      }

      if (numConcat == "") {
        numConcat = "00";

        console.log(`Product group: ${numConcat}`);
      } else {
        console.log(`Product group: ${numConcat}`);
      }
    }
    matchExec = pattern.exec(barcode);
  }
}
fancyBarcode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log("----------------------------");
fancyBarcode([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
