// 4. Write a function that returns an an object where the keys are first names of each queen and the value is their quote. ie:
// { Alaska: "Alaksa's Quote",
//   Roxxy: "Roxxy's Quote",
//   Detox: "Detox's Quote"}

const queenQuotesV2 = () => {
  return queens.reduce((acc, queen) =>{
    const {name, quote } = queen;
    acc[name] = quote;
    return acc;
},{})
}
