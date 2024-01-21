let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearLastCharacter() {
    let currentDisplay = display.value;
    display.value = currentDisplay.slice(0, -1) || "0";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '0';
}

function handleKeyPress(event) {
    const key = event.key;

    if (/[0-9+\-*/.=]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        clearLastCharacter();
    }
}

document.addEventListener('keydown', handleKeyPress);
