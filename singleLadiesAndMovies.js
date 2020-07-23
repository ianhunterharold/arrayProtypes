// create an array with all Beyonce's songs that were not with a group

const beyonceSolo = () => {
    const solo = beyonce.hits.filter(song => song.group === false)
    return solo.map(song => song.title)
  }
  beyonceSolo()
  // learn about filter and find with .something after you search it
  
  
  // create an array with all of the movies Beyonce made in 2006 and after
  // created an array of all the of the movie titles
    const beyonceMovies = () => {
        const after06 = beyonce.movies.filter(movie => movie.year >= 2006);
        return after06.map(movie => movie.title)
    }
  beyonceMovies()