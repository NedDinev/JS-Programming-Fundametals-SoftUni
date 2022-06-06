function mergeArr(firstArr, secondArr) {
  let newArr = [];
  let inputL = firstArr.length;
  for (let index = 0; index < inputL; index++) {
    if (index % 2 == 0) {
      newArr.push(Number(firstArr[index]) + Number(secondArr[index]));
    } else {
      newArr.push(firstArr[index] + secondArr[index]);
    }
  }
  console.log(newArr.join(" - "));
}
mergeArr(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
