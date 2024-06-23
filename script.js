// script.js
const symbols = ["🍒", "🍋", "🍉", "🍇", "🍊"];
const reels = [
    document.getElementById('reel1'),
    document.getElementById('reel2'),
    document.getElementById('reel3')
];

function spin() {
    let result = [];
    for (let i = 0; i < reels.length; i++) {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        reels[i].innerText = randomSymbol;
        result.push(randomSymbol);
    }
    checkResult(result);
}

function checkResult(result) {
    const [r1, r2, r3] = result;
    const resultDisplay = document.getElementById('result');

    if (r1 === r2 && r2 === r3) {
        resultDisplay.innerText = `Jackpot! All ${r1}!`;
    } else if (r1 === r2 || r2 === r3 || r1 === r3) {
        resultDisplay.innerText = `Two of a kind!`;
    } else {
        resultDisplay.innerText = `Try again!`;
    }
}
