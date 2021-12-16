const tvPrice = 15.678;
const phonePrice = 123.965;
const headphonesPrice = 90.2345;
const maxPrice = Math.max(tvPrice, phonePrice, headphonesPrice);
console.log(maxPrice);
const minPrice = Math.min(tvPrice, phonePrice, headphonesPrice);
console.log(minPrice);
const sumPrice = tvPrice + phonePrice + headphonesPrice;
console.log(sumPrice);
const tvPiceRounded = Math.floor(tvPrice);
console.log(tvPiceRounded);
const phonePriceRounded = Math.floor(phonePrice);
console.log(phonePriceRounded);
const headphonesPriceRounded = Math.floor(headphonesPrice);
console.log(headphonesPriceRounded);
const sumPriceRounded = tvPiceRounded + phonePriceRounded + headphonesPriceRounded;
console.log(sumPriceRounded);
const sumPriceRound = Math.ceil(sumPriceRounded / 100) * 100;
console.log(sumPriceRound);
const pairedUnpaired = Math.floor(sumPriceRounded % 2) == 0;
console.log(pairedUnpaired);
const payment = 500;
const restWholePrice = payment - sumPrice;
console.log(restWholePrice);
const averageTotalPrice = (sumPrice / 3).toFixed(2);
console.log(averageTotalPrice);
const discount = Math.random() * 100;
console.log(discount)
const DiscountSumPrice = (sumPrice - discount).toFixed(2);
console.log(DiscountSumPrice);
const profit = (sumPrice - discount) - (sumPrice / 2);
console.log(profit);























