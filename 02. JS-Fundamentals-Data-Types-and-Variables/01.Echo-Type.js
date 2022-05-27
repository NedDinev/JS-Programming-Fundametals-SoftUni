function echoType(input) {
  let result = "Parameter is not suitable for printing";
  if (typeof input == "string") {
    result = "Hello, JavaScript!";
  } else if (typeof input == "number") {
    result = input;
  }

  console.log(typeof input);
  console.log(result);
}
echoType("Hello, JavaScript!");
