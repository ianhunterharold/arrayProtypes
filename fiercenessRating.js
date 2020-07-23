// create an array with a list of all of Beyonce's fierceness ratings

const fiercenessRating = () => {
    return beyonce.hits.map(song => [song.fierceness, song.title])
  }
  fiercenessRating()
  
  // didnt know from the question if you just wanted a list of the fireceness rating
  
  const fiercenessRatingV2 = () => {
    return beyonce.hits.map(song => song.fierceness);
  }
  fiercenessRatingV2()