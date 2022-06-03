function reveseArr(num, arrInput) {
  let newArr = [];
  let toStr = "";
  for (let i = 0; i < num; i++) {
    let currentNum = arrInput[i];
    newArr.push(currentNum);
  }

  for (let a = newArr.length - 1; a >= 0; a--) {
    toStr += newArr[a] + " ";
  }
  console.log(toStr);
}
reveseArr(3, [10, 20, 30, 40, 50]);
