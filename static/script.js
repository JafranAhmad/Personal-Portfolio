const words = ["JAFRAN", "a Developer", "a Designer"];
const textElement = document.getElementById("design-name");
const caretElement = document.getElementById("caret");

let currentWordIndex = 0;
let currentCharIndex = 0;

function updateText() {
    if (currentCharIndex === words[currentWordIndex].length) {
        currentWordIndex = (currentWordIndex + 1) % words.length;
        currentCharIndex = 0;
        setTimeout(updateText, 2000);
    } else {
        textElement.textContent = words[currentWordIndex].substring(0, currentCharIndex + 1);
        currentCharIndex++;
        setTimeout(updateText, 100);
    }
}

updateText();

