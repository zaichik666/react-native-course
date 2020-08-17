let numberSkirtWarehuse = 100;
let numberPantsWarehouse = 150;

let priceSkirt = 60;
let pricePants = 90;

let numberSkirtSold = 50;
let numberPantsSold = 40;

let salesRevenue;

let skirtRevenue = numberSkirtSold * priceSkirt;
let pantsRevenue = numberPantsSold * pricePants;

salesRevenue = skirtRevenue + pantsRevenue;

compareRevenue = skirtRevenue > pantsRevenue;

console.log(`We received more revenue from skirts? ${compareRevenue}`);
