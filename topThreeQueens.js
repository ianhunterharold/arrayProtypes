// { firstPlace: name, 
// secondPlace: name,  
// thirdPlace: name }
// Extension: Make sure the object is in that exact order

  
const findTopThree = () => {

  const topThree = {};
  
  const ranking = queens.sort((queenA, queenB) => {
    return queenA.seasons[0].place - queenB.seasons[0].place; 
  })

  topThree['firstPlace'] = ranking[0]['name'];
  topThree['secondPlace'] = ranking[1]['name'];
  topThree['thirdPlace'] = ranking[2]['name'];

  return topThree; 
}

findTopThree();
