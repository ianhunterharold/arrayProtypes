  // create an array of beyonces hairstyles without repeats

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

// create an object where the keys are hairstyles and the value is the frequency of that hairstyle

// {"hairstyles":count}

const hairStylesCount = () => {

    const allHair =  beyonce.hits.reduce((acc,cur) => {
      acc.push(cur.hair)
      return acc.flat() 
    },[])
    
    return allHair.reduce((acc,cur) => {
      if (acc[cur]){
        acc[cur] += 1;
      } else{
        acc[cur] = 1;
      }
      return acc;
    },{})
  
  }
  hairStylesCount()