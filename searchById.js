
// 3. Write a fuction that takes in an id and returns the string "[Queen's Name] placed [fifth, eleventh, ect...] in Season [Season number] of RuPaul's Drag Race."

const findQueenById = (id) => {
  
  const findById = queens.find( queen => queen.id === id )
   
    return `${findById.name} placed ${findById.seasons[0].place} in Season ${findById.seasons[0].seasonNumber} of RuPaul's Drag Race.`

}

const queenId = 56;
findQueenById(queenId)
