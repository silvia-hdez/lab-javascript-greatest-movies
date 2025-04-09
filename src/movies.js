// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    score: 9,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    score: 9,
  },
  {
    title: "12 Angry Men",
    year: 1957,
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    score: 8.9,
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    score: 8.9,
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    duration: "2h 34min",
    genre: ["Crime", "Drama"],
    score: 8.9,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    duration: "3h 21min",
    genre: ["Adventure", "Drama", "Fantasy"],
    score: 8.9,
  },
  {
    title: "Il buono, il brutto, il cattivo",
    year: 1966,
    director: "Sergio Leone",
    duration: "3h 2min",
    genre: ["Western"],
    score: 8.9,
  },
  {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    duration: "2h 19min",
    genre: ["Drama"],
    score: 8.8,
  },
];

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => {
    return movie.director;
  });
  return directors;
}

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => {
    return movie.director;
  });

  const uniqDirectors = [];
  for (let i = 0; i < directors.length; i++) {
    if (!uniqDirectors.includes(directors[i])) {
      uniqDirectors.push(directors[i]);
    }
  }
  return uniqDirectors;
}

// console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenFilms = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return stevenFilms.length;
}

// console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const sum = moviesArray.reduce((acumu, movie) => {
    if (!movie.score) {
      movie.score = "";
    }
    return acumu + movie.score;
  }, 0);

  if (moviesArray.length === 0) {
    return 0;
  } else {
    return Number((sum / moviesArray.length).toFixed(2));
  }
}

// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  const sumDramaMov = dramaMovies.reduce((acumu, movie) => {
    return acumu + movie.score;
  }, 0);
  return parseFloat((sumDramaMov / dramaMovies.length).toFixed(2));
}

// console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArr = moviesArray.map(movie=>movie)

  newArr.sort((moviea,movieb)=>{
   if(moviea.year === movieb.year) {
    return moviea.title.localeCompare(movieb.title) 
   } else {
    return moviea.year-movieb.year
   }
}
)


  return newArr
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
