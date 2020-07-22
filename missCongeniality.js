// / 2. Write a fuction that returns the name of Miss Congeniality

const findMissCong = () => {

  const congenial = queens.find(person => person.missCongeniality);

  return congenial.name;
}
findMissCong();

