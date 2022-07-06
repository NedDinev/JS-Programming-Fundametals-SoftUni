function solve(input) {
  let movies = [];

  input.forEach((element) => {
    if (element.includes("addMovie")) {
      let movie = element.replace("addMovie ", "");
      movies.push({ name: movie });
    } else if (element.includes("directedBy")) {
      let movieInfo = element.split(" directedBy ");
      let name = movieInfo[0];
      let director = movieInfo[1];

      movies.forEach((movie) => {
        if (movie.name === name) {
          movie.director = director;
        }
      });
    } else if (element.includes("onDate")) {
      let movieInfo = element.split(" onDate ");
      let name = movieInfo[0];
      let date = movieInfo[1];

      movies.forEach((movie) => {
        if (movie.name === name) {
          movie.date = date;
        }
      });
    }
  });

  movies.forEach((element) => {
    if (
      element.hasOwnProperty("name") &&
      element.hasOwnProperty("director") &&
      element.hasOwnProperty("date")
    ) {
      console.log(JSON.stringify(element));
    }
  });
}
solve([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
