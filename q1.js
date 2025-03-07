function totalCoinValue(nickels, dimes, quarters, loonies, toonies) {
    return (nickels * 0.05) + (dimes * 0.10) + (quarters * 0.25) + (loonies * 1.00) + (toonies * 2.00);
 }

 //testing
console.log(totalCoinValue(0, 0, 0, 0, 0));
console.log(totalCoinValue(2, 5, 4, 8, 6));
console.log(totalCoinValue(10, 1, 16, 12, 11));
 
 export {totalCoinValue}