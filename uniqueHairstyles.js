const uniqueHairStyles = () => {
    const hair = beyonce.hits.reduce((acc,cur) => {
      acc += cur.hair
      return acc
    },"")
    const split = hair.split(",");
    const uniqueHair = new Set();
  
    const addingToSet = split.forEach(hair => uniqueHair.add(hair));
    
    return Array.from(uniqueHair); 
    
    //refactor soon
  
    //find unique hairvalues
    
  }
  uniqueHairStyles()