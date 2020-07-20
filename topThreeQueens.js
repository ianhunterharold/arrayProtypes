// { firstPlace: name, 
// secondPlace: name,  
// thirdPlace: name }
// Extension: Make sure the object is in that exact order

  
const findTopThree = () => {
  // might not be optimal right away 
  const topThree = {};

  //sort queens by place 
  // pull top three into object 
  const ranking = queens.sort((queenA, queenB) =>{
    return queenA['seasons'][0]['place'] - queenB['seasons'][0]['place']; 
  })
  
  const first = topThree['firstPlace'] = ranking[0]['name'];
  const second = topThree['secondPlace'] = ranking[1]['name'];
  const third = topThree['thirdPlace'] = ranking[2]['name'];

  return topThree; 
}

findTopThree();