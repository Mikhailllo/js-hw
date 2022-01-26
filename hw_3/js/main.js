//  1.  отримує число та виводить найбільшу цифру
const getMaxDigitForm = document.getElementById("get-max-digit-form");
const getMaxDigitResult = document.getElementById("get-max-digit-result");
const getMaxDigitError = document.getElementById("get-max-digit-error");
getMaxDigitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const n = event.target[0].value;
    getMaxDigitResult.innerHTML = '';
    getMaxDigitError.innerHTML = '';
    if (n > 0) {
        getMaxDigitResult.innerHTML = getMaxDigit(n);
    } else {
        getMaxDigitError.innerHTML = 'введіть число більше нуля';
    }
});
const getMaxDigit = (n) => {
    if (n == 0) {
        return 0;
    } else {
        return Math.floor(Math.max(n % 10, getMaxDigit(n / 10)));
    }
}
//   2.   функцію, яка визначає ступінь числа
const exponentiationForm = document.getElementById("exponentiation-form");
const exponentiationResult = document.getElementById("exponentiation-result");
const exponentiationError = document.getElementById("exponentiation-error");
exponentiationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const number = event.target[0].value;
    const power = event.target[1].value;
    exponentiationResult.innerHTML = '';
    exponentiationError.innerHTML = '';
        exponentiationResult.innerHTML = exponentiation(number, power);
        
    }
);

const exponentiation = (number, power) => {
    let result = number;
    if (power > 0) {
        for (let i = 0; i < power - 1; i++) {
            result *= number;
        }
    } else if (power === 0) {
        result = 1;
    }
    else {
        for (let i = 0; i < (power * -1) - 1; i++) {
            result *= number;
        }
        result = 1 / result
    }
    return result;
}




//  3.   форматує ім'я, роблячи першу букву великою
const bigLetterForm = document.getElementById("big-latter-form");
const bigLetterResult = document.getElementById("big-latter-result");
const bigLetterError = document.getElementById("big-latter-error");
bigLetterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const str = event.target[0].value;
    bigLetterResult.innerHTML = '';
    bigLetterError.innerHTML = '';
    bigLetterResult.innerHTML = bigLetter(str);
})
const bigLetter = (string) => {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

//   4.   вираховує суму,що залишається після оплати
const alaryWithTaxForm = document.getElementById("salary-with-tax-form");
const alaryWithTaxResult = document.getElementById("salary-with-tax-result");
const alaryWithTaxError = document.getElementById("salary-with-tax-error");
alaryWithTaxForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const salary = event.target[0].value;
    const tax = event.target[1].value;
    alaryWithTaxResult.innerHTML = '';
    alaryWithTaxError.innerHTML = '';
    alaryWithTaxResult.innerHTML = salaryWithTax(salary, tax);
})
const salaryWithTax = (salary, tax) => (salary - (salary / 100 * tax));

// 5.   повертає випадкове ціле число
const getRandomNumberForm = document.getElementById("get-random-number-form");
const getRandomNumberResult = document.getElementById("get-random-number-result");
const getRandomNumberError = document.getElementById("get-random-number-error");
getRandomNumberForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const min = +event.target[0].value;
    const max = +event.target[1].value;
    getRandomNumberResult.innerHTML = '';
    getRandomNumberError.innerHTML = '';
    getRandomNumberResult.innerHTML = getRandomNumber(min, max);
})
const getRandomNumber = (min, max) => (Math.round(Math.random() * (max - min) + min));

//  6.   рахує скільки разів певна буква повторюється в слові (працює тільки буква а)
const countLetterForm = document.getElementById("count-letter-form");
const countLetterResult = document.getElementById("count-letter-result");
const countLetterError = document.getElementById("count-letter-error");
countLetterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const str = event.target[0].value;
    const letter = event.target[1].value;
    countLetterResult.innerHTML = '';
    countLetterError.innerHTML = '';
    countLetterResult.innerHTML = countLetter(str, letter);
})
const countLetter = (str, letter) => {
    return repeated = str.replace(/[^a]/g, "").length;
}

//   7.           конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH 
const convertCurrencyForm = document.getElementById("convert-currency-form");
const convertCurrencyResult = document.getElementById("convert-currency-result");
const convertCurrencyError = document.getElementById("convert-currency-error");
convertCurrencyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const quantity = event.target[0].value;
    convertCurrencyResult.innerHTML = '';
    convertCurrencyError.innerHTML = '';
    convertCurrencyResult.innerHTML = convertCurrency(quantity);
});

const convertCurrency = (quantity) => {
    // const quantity = prompt("введи знак валюти $ або uah");
    if (quantity.includes('$')) {
        return quantity.replace(/['$']/g, '') * 29;

    } else if (quantity.toLowerCase().includes('uah')) {
        return quantity.replace('uah', '') / 29;

    } else {
        return "введи знак валюти";
    }
}
//  console.log(convertCurrency());

//   8.    генерації випадкового паролю (тільки числа)
const getRandomPasswordForm = document.getElementById("set-random-password-form");
const getRandomPasswordResult = document.getElementById("set-random-password-result");
const getRandomPasswordError = document.getElementById("set-random-password-error");
getRandomPasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const codRom = event.target[0].value;
    getRandomPasswordResult.innerHTML = '';
    getRandomPasswordError.innerHTML = '';
    getRandomPasswordResult.innerHTML = getRandomPassword(codRom);
})
const getRandomPassword = (codRom) => (Math.floor(Math.random() * codRom));

//   9.   видаляє любу букви з речення
const deleteLettersForm = document.getElementById("replace-сharacter-form");
const deleteLettersResult = document.getElementById("replace-сharacter-result");
const deleteLettersError = document.getElementById("replace-сharacter-error");
deleteLettersForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const str = event.target[0].value;
    deleteLettersResult.innerHTML = '';
    deleteLettersError.innerHTML = '';
    deleteLettersResult.innerHTML = replaceCharacter(str, letter);
})
const deleteLetters = (string, letter) => string.replace(new RegExp(letter, "g"), '');
const replaceCharacter = (str) => newString = str.replace(/a/gi, '');

//    10.   перевіряє, чи є слово паліндромом
const isPalyndromForm = document.getElementById("is-palyndrom-form");
const isPalyndromResult = document.getElementById("is-palyndrom-result");
const isPalyndromError = document.getElementById("is-palyndrom-error");
isPalyndromForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const str = event.target[0].value;
    isPalyndromResult.innerHTML = '';
    isPalyndromError.innerHTML = '';
    isPalyndromResult.innerHTML = isPalyndrom(str);
})
const isPalyndrom = (string) => {
    const joinedString = string.toLowerCase().split(" ").join("");
    return joinedString === joinedString.split('').reverse().join("");
}
