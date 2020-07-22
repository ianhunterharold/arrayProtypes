
// 3. Write a fuction that takes in an id and returns the string "[Queen's Name] placed [fifth, eleventh, ect...] in Season [Season number] of RuPaul's Drag Race."

const findQueenById = (id) => {
  const findById = queens.find( queen => queen.id === id )
  
  const { name, seasons } = findById;
  const { place, seasonNumber } = seasons[0];

    return `${name} placed ${place} in Season ${seasonNumber} of RuPaul's Drag Race.`
}

const queenId = 56;
findQueenById(queenId)
