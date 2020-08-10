/*Your task is to create canDivide to check if an integer number is divisible by each out of two arguments.*/

let integer;

/*Amanda calls Tom. There are gaps in her speech. Write a function that removes any gaps in Amanda's speech.*/

const speech = [
  "Hi",
  "Tom!",
  "I",
  "",
  "can`t",
  "hear",
  "",
  ".",
  "you",
  "How",
  "",
  "are",
  "you",
  "?",
];

function clearSpeech() {
  for (let i = 0; i < speech.length; i++) {
    if (speech[i] === "") {
      speech.splice(i, 1);
    }
  }
}

clearSpeech(speech);
console.log(speech);
