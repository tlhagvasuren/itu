const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// mongol keyboard oruulah
const mongolianAlphabet = [
    "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "ө", "п", "р", "с", "т", "у", "ү", "ф", "х", "ц", "ч", "ш", "щ", "ы", "э", "ю", "я"
];

// ashiglah huvisagchid
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 5;

const resetGame = () => {
    // huvisagchdiig tohiruulah
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.jpg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    // ugiig sanamsarguigeer daraalal hamaarahgui gargah
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

const gameOver = (isVictory) => {
    // togloom duusahad
    const modalText = isVictory ? `Та үгийг зөв таалаа:` : 'Зөв үг бол:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Баяр хүргэе!' : 'Тоглоом дууссан!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

const initGame = (button, clickedLetter) => {
    // darsan useg shalgah
    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // aldsan tohioldol
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.jpg`;
    }
    button.disabled = true; // button-g idevhgui bolgoh
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // togloom duussan esehiig shalgah
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

// keyboard usguudiig uusgeh
mongolianAlphabet.forEach(letter => {
    const button = document.createElement("button");
    button.innerText = letter;
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, letter));
});

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);