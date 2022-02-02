//  #1 
const randomNumb = () => Math.round(Math.random() * (50 - 5) + 1);
const getRandomArray = () => {
const arrNubers = [];
for(let = i = 0; i < 15; i++){
    arrNubers.push(randomNumb())
}
return arrNubers
}
console.log(getRandomArray())
// #2 noWork
// const getModa = () => {
//     const moNumbers = [...getRandomArray()];
// for(let = i = 0; i > 0; i++){
//     moNumbers2.push( i + (i -i-1)/((i-i-1)+(i-i+1)))
// }
// return moNumbers
// }
// console.log(getModa())
// #3
const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const items = numbers.length;
const middle = numbers.reduce((acc,el,i,arr) => {
return acc + el ;    
} )
console.log(middle / items) ;