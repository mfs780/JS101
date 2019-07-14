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
let chosenWord, guess, guesses, guessWord, lettersGuessed, words;

loadGame();

async function loadGame () {
  let response = await fetch(new Request('https://raw.githubusercontent.com/words/an-array-of-english-words/master/words.json'));
  words = await response.json();

  // words = words.filter((w) => {
  //   return w.length <= 5;
  // });

  newGame();
}

function newGame () {
  init();

  gameLoop();

  if (guessWord.join('') !== chosenWord) {
    console.log('YOU LOST', chosenWord);
  } else {
    console.log('YOU WON');
  }

  if (prompt('Would you like to play again [Y/N]?') === 'Y') {
    newGame();
  }
}

function init () {
  let chosenIndex = Math.floor(Math.random() * words.length);

  chosenWord = words[chosenIndex].toUpperCase();
  guesses = 0;
  guessWord = [];
  lettersGuessed = [];

  for (let i = 0; i < chosenWord.length; i++) {
    guessWord[i] = '_';
  }
}

function gameLoop () {
  while (guessWord.join('') !== chosenWord && guesses !== hangmanLevels.length - 1) {
    draw();
    guess = getGuess();

    lettersGuessed.push(guess);

    if (chosenWord.indexOf(guess) >= 0) {
      for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === guess) {
          guessWord[i] = guess;
        }
      }
    } else {
      guesses++;
    }
  }

  draw();
}

function draw () {
  console.log('HANGMAN');
  console.log(hangmanLevels[guesses]);
  console.log('');
  console.log(`GUESS:   ${guessWord.join(' ')}`);
  console.log(`LETTERS: ${lettersGuessed.join(', ')}`);
}

function getGuess () {
  let questions = ['Guess a single letter [A-Z].', 'Input was not between [A-Z].', 'Input has two many characters.', 'Guess was previously inputed already.'];
  let guess;
  let q = questions[0];

  while (q.length) {
    guess = prompt(q).toUpperCase();

    if (!/^[a-zA-Z]+$/.test(guess)) {
      q = questions[1] + ' ' + questions[0];
    } else if (guess.length > 1) {
      q = questions[2] + ' ' + questions[0];
    } else if (lettersGuessed.indexOf(guess) >= 0) {
      q = questions[3] + ' ' + questions[0];
    } else {
      q = '';
    }
  }

  return guess;
}