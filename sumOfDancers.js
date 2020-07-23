
const sumOfDancers = () => {
    return beyonce.hits.reduce((acc,cur) => {
      acc +=cur.dancers
      return acc;
    },0)
  }
  sumOfDancers()
  
  