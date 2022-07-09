function meetingsSchedule(input) {
  let schedule = {};

  for (let data of input) {
    let [day, name] = data.split(" ");

    if (schedule.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      console.log(`Scheduled for ${day}`);
      schedule[day] = name;
    }
  }

  for (let key in schedule) {
    console.log(`${key} -> ${schedule[key]}`);
  }
}
meetingsSchedule([
  "Monday Peter",
  "Wednesday Bill",
  "Monday Tim",
  "Friday Tim",
]);
