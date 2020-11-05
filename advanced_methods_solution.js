//Map, Filter, Reduce, and FlatMap
const movies = [
    {
      title: 'Avatar',
      year: '2009',
      rating: 'PG-13'
    },
    {
      title: 'I Am Legend',
      year: '2007',
      rating: 'PG-13'
    },
    {
      title: '300',
      year: '2006',
      rating: 'R'
    },
    {
      title: 'The Avengers',
      year: '2012',
      rating: 'PG-13'
    },
    {
      title: 'The Wolf of Wall Street',
      year: '2013',
      rating: 'R'
    }
  ];
  
  //Challenge Question #1
  //Create a new array that just contains the movie titles. 
  const movieTitles = movies.map((movie) => movie.title);
  console.log("Array with only movie titles", movieTitles);
  
  //Challenge Question #2
  //Create a new array that contains only those movies that are PG-13. 
  const ratedPg13 = movies.filter((movie) => movie.rating === 'PG-13');
  console.log("Array that only has PG-13 movies", ratedPg13)
  
  //Challenge Question #3
  //Determine how many of the movies are rated R.
  const ratedRMovies = movies.reduce((acc, value) => {
      if(value.rating === "R") {
          acc++
      }; 
      return acc;
      
  }, 0);
  console.log("How many rated R movies", ratedRMovies)
  