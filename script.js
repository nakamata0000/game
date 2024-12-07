let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const submitButton = document.getElementById('submit');
const guessInput = document.getElementById('guess');
const resultText = document.getElementById('result');
const restartButton = document.getElementById('restart');

submitButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        resultText.textContent = `正解！${attempts}回で当てました！`;
        submitButton.disabled = true;
        restartButton.style.display = 'block';
    } else if (userGuess < randomNumber) {
        resultText.textContent = 'もっと大きい数字です。';
    } else if (userGuess > randomNumber) {
        resultText.textContent = 'もっと小さい数字です。';
    }

    guessInput.value = '';
});

restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    resultText.textContent = '';
    guessInput.value = '';
    submitButton.disabled = false;
    restartButton.style.display = 'none';
});
