let johnTeamFirstGameScore = 89;
let johnTeamSecondGameScore = 120;
let johnTeamThirdGameScore = 103;

let mikeTeamFirstGameScore = 116;
let mikeTeamSecondGameScore = 94;
let mikeTeamThirdGameScore = 123;

let maryTeamFirstGameScore = 97;
let maryTeamSecondGameScore = 134;
let maryTeamThirdGameScore = 105;

let johnTeamSumScore =
  johnTeamFirstGameScore + johnTeamSecondGameScore + johnTeamThirdGameScore;
let mikeTeamSumScore =
  mikeTeamFirstGameScore + mikeTeamSecondGameScore + mikeTeamThirdGameScore;
let maryTeamSumScore =
  maryTeamFirstGameScore + maryTeamSecondGameScore + maryTeamThirdGameScore;

let johnTeamAverageScore = johnTeamSumScore / 3;
let mikeTeamAverageScore = mikeTeamSumScore / 3;
let maryTeamAverageScore = maryTeamSumScore / 3;

let winner;

if (
  johnTeamAverageScore > mikeTeamAverageScore &&
  johnTeamAverageScore > maryTeamAverageScore
) {
  winner = "John";
} else {
  if (
    mikeTeamAverageScore > johnTeamAverageScore &&
    mikeTeamAverageScore > maryTeamAverageScore
  ) {
    winner = "Mike";
  } else {
    if (
      maryTeamAverageScore > johnTeamAverageScore &&
      maryTeamAverageScore > mikeTeamAverageScore
    ) {
      winner = "Mary";
    } else {
      winner = null;
    }
  }
}

switch (Boolean(winner)) {
  case true:
    console.log(`The winner is ${winner}'s team`);
    break;

  default:
    console.log("Ladies and gentlemen, we've decided it's a draw.");
    break;
}
