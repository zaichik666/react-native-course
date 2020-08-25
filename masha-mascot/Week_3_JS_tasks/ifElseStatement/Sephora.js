let mascara = 45;
let powder = 56;
let perfume = 60;
let lipstick = 15;

let elsaPurchase = mascara + powder;
let amandaPurchase = perfume + lipstick;

if (elsaPurchase >= 100) {
  customer = "Elsa";
} else {
  if (amandaPurchase >= 100) {
    customer = "Amanda";
  } else {
    customer = "Nobody";
  }
}
console.log(customer + " will receive a discount");
