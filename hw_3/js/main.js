

// <========завдання ОДИН ======> YES   

// const n = prompt("n");
// function getMaxDigit(n){
//     if(n == 0) {
//         return 0;
//     }else{
//         return Math.max(n%10, getMaxDigit(n/10));
//     }
// }

// const floor = Math.floor(getMaxDigit(n))
// console.log(floor);

//<========завдання ДВА ======>// NO



//<========завдання ТРИ ======> YES  

// const str = prompt("string");
// const bigLetter = (string) => {
//     return string[0].toUpperCase() + string.substring(1).toLowerCase();
// }
// console.log(bigLetter(str));

//<========завдання ЧОТИРИ ======>// YeS

// const salaruWithTax = (salary, tax) => (salary - (salary / 100 * tax));

// console.log(salaruWithTax(6500, 19) );




//<========завдання П'ять ======>// YES

// const n = 1;
// const m = 100;
// function getRandomNumber(n,m) {
//     let rand = n + Math.random() * (m + 1 - n);
//     return Math.floor(rand);

// }
// console.log(getRandomNumber(n,m));

// <========завдання Щість ======>  YES  

// const str = ('Astaloaavista') ;
//     const countLetter = (str) => {
//         // 
//         return repeated = str.replace(/[^a]/g, "" ).length;
//     }

// console.log(countLetter(str));

// <========завдання СІМ ======>    NO

// const convertCurrency = () =>  {
//     const quantity = prompt("введи знак валюти $ або uah");
//     if (quantity.includes('$')) {
//          return quantity.replace(/['$']/g,'') * 25 ;
        
//     } else if (quantity.toLowerCase().includes('uah')){ 
//         return quantity.replace('uah', '') / 25 ;
        
//     } else { 
//         return "введи знак валюти";
//     }
    
    
// }
// console.log(convertCurrency());
    


    // <========завдання ВІСІМ ======>    NO//
// function getRandomPassword() {
//     const codRom = 12345672;
// return  Math.floor(Math.random()* codRom )
// }        
// console.log(getRandomPassword()); 


// <========завдання дев'ять ======>    yas//

// const deleteLetters = (string, letter) => string.replace(new RegExp(letter,"g"),'');

// console.log(deleteLetters('blablabla','b'));

// const replaceCharacter = (str) => newString = str.replace(/a/gi,'');
// }
//<========завдання 10 ======>// YES

// const str = prompt("polindrom");
// const isPalyndrom = (string) => {
//     const joinedString = string.toLowerCase().split(" ").join("");
//     return joinedString === joinedString.split('').reverse().join("");
    

// }
// console.log(isPalyndrom("Я несу гуся"));