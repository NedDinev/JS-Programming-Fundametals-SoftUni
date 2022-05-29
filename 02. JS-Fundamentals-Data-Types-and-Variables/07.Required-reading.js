function requiredReading(bookPages, pagesPerHour, days) {
  let totalTime = bookPages / pagesPerHour;
  let requiredTime = totalTime / days;

  console.log(requiredTime);
}
requiredReading(212, 20, 2);
