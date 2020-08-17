let cocktail = "Vodka, liqueur, juice, pineapple, raspberry, ice";

let arrayCocktail = cocktail.split(", ");
delete arrayCocktail[3];

function guestCheckedPinapple(array) {
  let checkValue = array.indexOf("Pineapple");

  if (checkValue === -1) {
    return "Delicious";
  } else {
    return "I won't come here again.";
  }
}

let guestReview = guestCheckedPinapple(arrayCocktail);
console.log(guestReview);
