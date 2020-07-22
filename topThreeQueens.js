// { firstPlace: name, 
// secondPlace: name,  
// thirdPlace: name }
// Extension: Make sure the object is in that exact order

  
  
const findTopThree = () => {
  
  const findQueenNameByPlace = (place) => queens.find(queen => queen.seasons[0].place === place).name;

  const topThree = {
    firstPlace: findQueenNameByPlace(1),
    secondPlace: findQueenNameByPlace(2),
    thirdPlace: findQueenNameByPlace(3)
  }
  // we know that place 1,2,3 exist but not a flexible solution as is if there is not a consecutive ordered winner.

  return topThree; 
}

findTopThree();
