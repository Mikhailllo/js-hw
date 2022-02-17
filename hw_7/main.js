const ukraine = { 
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476 
    };
const latvia = { 
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921 
};
const Lithuania = { tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};
// #1
function getMyTaxes()  {
    console.log(this.tax);
};
getMyTaxes.call(ukraine);
// 
[ukraine,latvia,Lithuania].forEach((country) => {
getMyTaxes.call(country);
});

// #2
function getMiddleTaxes()  {
    console.log(this.tax * this.middleSalary);
};
getMiddleTaxes.call(ukraine);
// 
[ukraine,latvia,Lithuania].forEach((country) => {
    getMiddleTaxes.call(country);
});
// #3
function getTotalTaxes()  {
    console.log(this.tax * this.middleSalary * this.vacancies);
};
getTotalTaxes.call(ukraine);
// 
[ukraine,latvia,Lithuania].forEach((country) => {
    getTotalTaxes.call(country);
});

// #4
