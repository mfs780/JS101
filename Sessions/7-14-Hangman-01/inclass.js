console.log('============HAMZA==============')
const hangmanLevels = [
  '  _____          \n  |    |         \n  |              \n  |              \n  |              \n  |              \n _|________      ',
  '  _____          \n  |    |         \n  |    0         \n  |              \n  |              \n  |              \n _|________      ',
  '  _____          \n  |    |         \n  |    0         \n  |    |         \n  |              \n  |              \n _|________      ',
  '  _____          \n  |    |         \n  |    0         \n  |   \\|         \n  |              \n  |              \n _|________      ',
  '  _____          \n  |    |         \n  |    0         \n  |   \\|/        \n  |              \n  |              \n _|________      ',
  '  _____          \n  |    |         \n  |    0         \n  |   \\|/        \n  |    |         \n  |              \n _|________      ',
  '  _____          \n  |    |         \n  |    0         \n  |   \\|/        \n  |    |         \n  |    ^         \n _|________      ',
  '  _____          \n  |    |         \n  |    0         \n  |   \\|/        \n  |    |         \n  |   /^         \n _|________      ',
  '  _____          \n  |    |         \n  |    0         \n  |   \\|/        \n  |    |         \n  |   /^\\        \n _|________      ',
  '  _____          \n  |    |         \n  |              \n  |              \n  |              \n  |              \n _|___o_/__      ',
];

let words = ['awesome', 'hamza', 'school', 'fantasy', 'university'];

let letters = [];
let level = 0;
let guess;

// Select Chosen Word
let chosenIndex = Math.floor(Math.random() * words.length);
let chosenWord = words[chosenIndex];

// Create Secret Word
let secretWord = '';
for (let i=0; i < chosenWord.length; i++) {
  secretWord = secretWord + '_ ';
}
secretWord = secretWord.trim();

while (level < hangmanLevels.length) {

  // GAME LOOP
  console.log('HANGMAN');
  console.log(hangmanLevels[level]);
  console.log('GUESS: ' + secretWord);
  console.log('LETTERS: ' + letters.join(', '));

  // Ask User for guess
  guess = prompt('Guess a letter?');
  letters.push(guess);

  level = level + 1;
}


