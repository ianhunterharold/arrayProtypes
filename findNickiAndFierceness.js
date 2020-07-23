// create an array with all of the songs where Beyonce's fierceness is greater than or equal to 8

const fiercenessRatingAboveEight = () => {
  const fierce = beyonce.hits.filter(song => song.fierceness >= 8)
  return fierce.map(song => song.title);
  
}
fiercenessRatingAboveEight()

// find a song where Nicki Minaj is part of the group

const findNicki = () => {
  return beyonce.hits.find(song => song.groupName.includes('Nicki Minaj')).title
}
findNicki()
