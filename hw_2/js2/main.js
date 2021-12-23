
const n = prompt('add Start Volue');
const m = prompt("add end Volume");
const volue = confirm("пропускати парні числа");

const notEvenNumber = true;
parseInt(n);
console.log(Number.isInteger(n));
parseInt(m);
console.log(Number.isInteger(m));
let sum = 0;
for ( let i = n; i <= m; i++) {
    if (!notEvenNumber || i % 2 === 1) {
        sum += i;
    }
    console.log(sum);

}













