// create an object where the properties are song names and the value is an object which contains that fierceness

//return { songNames: fierceness}
const songNamesAndFierceness = () => {
    
    return beyonce.hits.reduce((acc,cur)=> {
      const {title, fierceness} = cur;
      acc[title] = fierceness;
      return acc;
    },{})
  }
songNamesAndFierceness()
