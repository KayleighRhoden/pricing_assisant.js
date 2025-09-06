// Coding Challenge 00
let productName = "Fall Candle";
let costPerUnit = 10;
let basePrice = 28;
let discountRate = 0.20;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 1500;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEveUnits = Math.ceil(fixedMonthlyCosts/profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("========== Product Report ========== ");
console.log("Product Name: " + productName);
console.log("Discounted Price (before tax): $" + discountedPrice.toFixed(2));
console.log("Final Price with Tax: $" + finalPriceWithTax.toFixed(2));
console.log("Profit per Unit: $" + profitPerUnit.toFixed(2));
console.log("Break--even Units: " + breakEveUnits);
console.log("Profitable per Unit? + isProfitablePerUnit");
console.log("===================================");
