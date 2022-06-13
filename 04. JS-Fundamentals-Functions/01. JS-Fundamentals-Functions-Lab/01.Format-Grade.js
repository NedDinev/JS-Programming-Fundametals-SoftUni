function formatGrade(input) {
  let grade = input.toFixed(2);
  let gradeDesc;
  if (input < 3.0) {
    grade = 2;
    gradeDesc = `Fail`;
  } else if (input < 3.5) {
    gradeDesc = `Poor`;
  } else if (input < 4.5) {
    gradeDesc = `Good`;
  } else if (input < 5.5) {
    gradeDesc = `Very good`;
  } else {
    gradeDesc = `Excellent`;
  }
  console.log(`${gradeDesc} (${grade})`);
}
formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
