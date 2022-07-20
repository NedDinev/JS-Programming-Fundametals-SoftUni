function extractFile(input) {
  let path = input.split("\\");
  let file = path.slice(-1).join("").split(".");
  let extension = file.pop();

  file = file.join(".");

  console.log(`File name: ${file}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");
