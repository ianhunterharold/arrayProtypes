// find all hit songs where Beyonce's fierceness rating is 10

const fiercenessAt10 = () => {
    const ultFierce = beyonce.hits.filter(song => song.fierceness === 10);
    return ultFierce.map(song => song.title)
  }
fiercenessAt10()

// sum up Beyonces fierceness value for all of her hit songs

const sumOfFierceness = () => {
  return beyonce.hits.reduce((acc,cur) =>{
    acc += cur.fierceness
    return acc;
  },0)
}
sumOfFierceness()
