// Selectors
let mainScreen = document.querySelector('#main-screen');
let smallScreen = document.querySelector('#small-screen');
let operators = ['+', '-', '*', '/', '%'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let keys = document.querySelectorAll('.key');
let answer;


// Functions
function manipulateKey(key) {
    if (key === '=') {
        showAnswer();
    } else if (key === 'AC') {
        clearScreen();
    } else if (key === 'C') {
        deleteKey(); 
    } else if (numbers.includes(key)) {
        numberKey(key);
    } else if (operators.includes(key)) {
        operatorKey(key);
    }       
}

function showAnswer () {
    answer = eval(smallScreen.innerText);
    smallScreen.innerText = answer;
    mainScreen.innerText = answer;
}

function clearScreen() {
    smallScreen.innerText = '0';
    mainScreen.innerText = '0';
}

function deleteKey() {
    smallScreen.innerText = smallScreen.innerText.slice(0, -1);
    // If no more key, set 0
    if (smallScreen.innerText.length === 0) {
        smallScreen.innerText = '0';
    }

    mainScreen.innerText = mainScreen.innerText.slice(0, -1);
    // If no more key, set 0
    if (mainScreen.innerText.length === 0) {
        mainScreen.innerText = '0';
    }
}

function numberKey (key) {
    // remove first 0.
    if (smallScreen.innerText === '0' ) {
        smallScreen.innerText = '';
    }
    smallScreen.innerText += key;

    // remove first 0.
    if (mainScreen.innerText === '0' ) {
        mainScreen.innerText = '';
    }
    mainScreen.innerText += key;
}

function operatorKey(key) {
    lastKey = smallScreen.innerText.slice(-1);
    // Avoid operator duplication
    if (!operators.includes(lastKey)) {
        smallScreen.innerText += key;
    }

    // Set 0 on main screen when press operator key.
    mainScreen.innerText = '0';
}



// get key
keys.forEach(function (element) {
    element.addEventListener('click', function () {
        //console.log(element);
        let key = element.innerText;
        // replace with js operators
        if (key === '÷') {
            key = '/';
        } else if (key === 'x') {
            key = '*';
        } else if (key === '−') {
            key = '-';
        }
    
        manipulateKey(key); 
    });    
});
