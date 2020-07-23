
// // sum up Beyonces fierceness value for all of her hit songs

const sumOfFierceness = () => {
    return beyonce.hits.reduce((acc,cur) =>{
      acc += cur.fierceness;
      return acc;
    },0)
   
  }
  sumOfFierceness()
  
  
  // get the average fierceness value for all of her hit songs
  
   const meanFierceness = () => {
     return sumOfFierceness()/beyonce.hits.length;
   }
  meanFierceness()