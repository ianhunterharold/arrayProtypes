// / 2. Write a fuction that returns the name of Miss Congeniality

findMissCong()

const findMissCong = () => {

  const congenial = queens.filter(person => {
    if (person['missCongeniality'] === true){
      return person;
    }
  })

  return congenial[0]['name'];
  

}
findMissCong();

