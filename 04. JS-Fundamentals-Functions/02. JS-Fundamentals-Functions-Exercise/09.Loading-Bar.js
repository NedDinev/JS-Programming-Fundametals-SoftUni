function loadingBar(input) {
  let completed = `%`.repeat(input / 10);
  let incompleted = `.`.repeat(10 - completed.length);

  if (input == 100) {
    console.log(`100% Complete!`);
  } else {
    console.log(`${input}% [${completed + incompleted}]`);
    console.log(`Still loading...`);
  }
}
loadingBar(100);
