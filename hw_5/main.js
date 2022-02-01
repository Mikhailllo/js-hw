//  #1
const randomNumb = () => Math.round(Math.random() * (99 - 5) + 1);
const getRandomArray = () => {
const arrNubers = [];
for(let = i = 0; i < 15; i++){
    arrNubers.push(randomNumb())
}
return arrNubers
}
console.log(getRandomArray())