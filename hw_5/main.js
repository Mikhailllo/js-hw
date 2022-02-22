 // #1 
const randomNumb = () => Math.round(Math.random() * (50 - 5) + 1);
const getRandomArray = () => {
const arrNumbers = [];
for(let i = 0; i < 15; i++){
    arrNumbers.push(randomNumb());
}
return arrNumbers
}
console.log(" #1 : ",getRandomArray());

//  #3
const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 1.5,2.5];
const items = numbers.length;
let notIntegerLength =  0;
const integerArr = numbers.filter(num => Number.isInteger(num));
const middle = integerArr.reduce((acc,el) => acc + el);
console.log(" #3 : ",middle / integerArr.length);

//  #5
const numbersRow = [4,5,7,,9,8,96,55,54,63,40,45,67,890];
const filterEventNumbers = () => numbersRow.filter((el) => el % 2 === 1); 
console.log(" #5 : ",filterEventNumbers());

//  #6
const numberArr = [4,-5,7,9,-8,96,54,-63,45,5];
const positiveNumbers = () => numberArr.filter((el) => el > 0 );
console.log(" #6 : ",positiveNumbers().length);

//  #7
function dividedByFive() {
    return numbersRow.filter((el, i, arr) => el % 5 === 0);
} 
console.log(" #7 : ",dividedByFive());

//  #8
const str = 'Are you fucking kidding?';
const arr1 = str.split([" "]);
const replaceBadWords = () => arr1.join((" "));
console.log(" #8 : ",replaceBadWords().replace('fuck','****'));

// #9
const divideByThree = (word)  => {
    const string = word.toLowerCase().split(' ').join('');
    if (string.length < 3) return string;
    else {
        const result = [];
        for (let i = 0; i < string.length; i = i+3) {
            result.push(string.substr(i,3));
        }
        return result;
    }
}
console.log(" #9 : ",divideByThree("Commander"));
