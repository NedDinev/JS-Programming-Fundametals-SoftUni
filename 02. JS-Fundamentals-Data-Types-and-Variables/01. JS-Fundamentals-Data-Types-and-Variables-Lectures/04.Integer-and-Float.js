function intAndFloat(n1, n2, n3) {
  let sum = n1 + n2 + n3;
  let sumType;

  if (typeof sum === "number" && isFinite(sum) && Math.floor(sum) === sum) {
    sumType = "Integer";
  } else if (!!(sum % 1)) {
    sumType = "Float";
  }
  console.log(`${sum} - ${sumType}`);
}
intAndFloat(9, 100, 1.1);
