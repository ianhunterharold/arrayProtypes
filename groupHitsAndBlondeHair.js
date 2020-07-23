// find all of the group hit songs

const groupHits = () => {
    const group = beyonce.hits.filter(song => song.group);
    return hits = group.map(song => song.title)
  }
  groupHits()
  
  
  // find a hit song where Beyonce's hair is blonde
  
  const blondeHair = () => {
    return beyonce.hits.find(song => song.hair.includes('blonde')).title
  }
  blondeHair()
  