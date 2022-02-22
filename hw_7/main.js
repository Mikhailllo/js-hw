const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476,
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921,
};
const Lithuania = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114,
};
// #1
function getMyTaxes() {
    console.log("#1", this.tax);
};
getMyTaxes.call(ukraine);
// 
[ukraine, latvia, Lithuania].forEach((country) => {
    getMyTaxes.call(country);
});

// #2
function getMiddleTaxes() {
    console.log("#2", this.tax * this.middleSalary);
};
getMiddleTaxes.call(ukraine);
// 
[ukraine, latvia, Lithuania].forEach((country) => {
    getMiddleTaxes.call(country);
});
// #3
function getTotalTaxes() {
    console.log("#3", this.tax * this.middleSalary * this.vacancies);
};
getTotalTaxes.call(ukraine);
// 
[ukraine, latvia, Lithuania].forEach((country) => {
    getTotalTaxes.call(country);
});

// #4
const salary = (Math.round(Math.random() * (2000 - 1500) + 1500));
function getMySalary() {
    const profit = salary - this.tax;
    return setInterval(() => (console.log("#4",{
        salary: salary,
        taxes: this.tax,
        profit: profit,
    })), 10000);
}
getMySalary.call(ukraine);