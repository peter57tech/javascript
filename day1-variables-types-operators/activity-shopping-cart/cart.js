// Week 6: JavaScript Fundamentals I | Instructor: Caleb Duff

// Activity 1: Shopping cart calculator (pairs, 30 min)
//
// Steps
// 1. Declare const variables for three products: name, unit price (naira) and quantity.
const item1Name = prompt("Enter the name of the item 1;");
const item1Price = 75000;
const item1Qty = Number(prompt("Enter the nquantity of the item 1"));

const item2Name = prompt("Enter the name of the item 2;");
const item2Price = 20000;
const item2Qty = Number(prompt("Enter the quantity of the item 2;"));

const item3Name = prompt("Enter the name of the item 3;");
const item3Price = 10000;
const item3Qty = Number(prompt("Enter the quantity of the item 3"));

// 2. Declare VAT_RATE (7.5%) and DELIVERY_FEE (₦1,500).
const VAT_RATES = 7.5 / 100;
const DELIVERY_FEES = 1500;

// 3. Calculate each line total, then the subtotal.
const item1Total = item1Price * item1Qty
const item2Total = item2Price * item2Qty
const item3Total = item2Price * item2Qty

//subTotal
const subTotal = item1Total + item2Total + item3Total

// 4. Calculate vat and grandTotal (subtotal + VAT + delivery).   <- swap driver/navigator here
const vatMain = subTotal * VAT_RATES;
const grand2Total = subTotal + vatMain + DELIVERY_FEES;

// 5. Print a receipt using template literals. Round money to 2 decimal places.
console.log("===== RECEIPT =====");
console.log(`${item1Name} x${item1Qty}   ₦${item1Total.toFixed(2)}`);
console.log(`${item2Name} x${item2Qty}   ₦${item2Total.toFixed(2)}`);
console.log(`${item3Name} x${item3Qty}   ₦${item3Total.toFixed(2)}`);
// TODO: remaining item lines
console.log("-------------------");
console.log(`SubTotal:        N${subTotal.toFixed(2)}`);
console.log(`VAT (7.5%):      N${vatMain.toFixed(2)}`);
console.log(`Delivery:        N${DELIVERY_FEES.toFixed(2)}`);
console.log(`TOTAL:        N${grand2Total.toFixed(2)}`);
// 6. Print typeof for every variable you created.
//
// Stretch: ask for a discount percentage with prompt(), convert it to a number,
// and apply it to the subtotal BEFORE VAT.
//
// Expected output
// ===== RECEIPT =====
// Rice (5kg) x2   ₦17000.00
// Palm oil  x1    ₦4500.00
// Indomie  x10    ₦3000.00
// -------------------
// Subtotal:       ₦24500.00
// VAT (7.5%):     ₦1837.50
// Delivery:       ₦1500.00
// TOTAL:          ₦27837.50




// TODO: item 2 → Palm oil, ₦4,500, quantity 1

// TODO: item 3 → Indomie, ₦300, quantity 10


// const item1Total = item1Price * item1Qty;
// TODO: item2Total, item3Total


// TODO: replace each 0 with the right calculation
const subtotal = 0;
const vat = 0;
const grandTotal = 0;

// TODO: Subtotal, VAT, Delivery and TOTAL lines


// TODO (step 6): print the type of every variable, e.g.
// console.log(`item1Price → ${typeof item1Price}`);
