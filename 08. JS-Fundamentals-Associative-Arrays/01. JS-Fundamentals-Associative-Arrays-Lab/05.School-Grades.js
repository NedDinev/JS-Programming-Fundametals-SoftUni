function schoolGrades(arr) {
  let map = new Map();

  for (let element of arr) {
    let [name, ...grades] = element.split(" ");
    grades = grades.map(Number);

    if (map.has(name)) {
      for (let grade of grades) {
        map.get(name).push(grade);
      }
    } else {
      map.set(name, grades);
    }
  }

  let entries = Array.from(map.entries());
  entries = entries.sort((a, b) => a[0].localeCompare(b[0]));

  for (let i = 0; i < entries.length; i++) {
    let averageScore = 0;
    let sum = 0;

    for (let element of entries[i][1]) {
      sum += element;
    }
    averageScore = sum / entries[i][1].length;
    console.log(entries[i][0] + ": " + averageScore.toFixed(2));
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
