// sum up Beyonces rating value for all of her movies

const movieRatingsSum = () => {
    return beyonce.movies.reduce((acc,cur) => {
      acc += cur.rating
      return acc
    },0)
  }
  movieRatingsSum()
  
  // get the average rating value for all of her movies
  
  const averageMovieRating = () => {
    return movieRatingsSum()/beyonce.movies.length;
  }
  averageMovieRating()