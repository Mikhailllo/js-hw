
const n = prompt('N');
console.log(n);
const m = prompt('M');
console.log(m);
let sumNm = 0;
for (let i = n; i <= m; i++) {
    if (!NaN || i % 2 === 1) {
        sumNm += i    
    }
}
console.log(sumNm);