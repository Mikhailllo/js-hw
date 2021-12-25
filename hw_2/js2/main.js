const n = 10;//prompt('n');
const m = 100;//prompt('m');
const value = confirm("пропускати парні числа");
if (value) {
    const notEvenNumber = true;
    parseInt(n);
    console.log(Number.isInteger(n));
    parseInt(m);
    console.log(Number.isInteger(m));
    let sum = 0;
    for (let i = n; i <= m; i++) {
        if (!notEvenNumber || i % 2 === 1) {
            sum = sum + i;
    
        }
    }
    console.log(sum);

}
else {
    const notEvenNumber = false;
    parseInt(n);
    console.log(Number.isInteger(n));
    parseInt(m);
    console.log(Number.isInteger(m));
    let sum = 0;
    for (let i = n; i <= m; i++) {
        if (!notEvenNumber || i % 2 === 1) {
            sum = sum + i;
        }
    }

    console.log(sum);
    
    
    }

    

















