const movieAndRatings = () => {
    return beyonce.movies.reduce( (acc,curr) => {
    const {title, rating} = curr;
    acc[title] = {'rating':rating, 'mean':averageMovieRating()}
  
    return acc
  },{})


}
movieAndRatings()