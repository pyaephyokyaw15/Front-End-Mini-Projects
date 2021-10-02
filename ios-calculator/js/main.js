// Selectors
let mainScreen = document.querySelector('#main-screen');
let smallScreen = document.querySelector('#small-screen');
let operators = ['+', '-', '*', '/', '%'];
let keys = document.querySelectorAll('.key');
let answer;


// Functions
function smallDisplay(key) {
    if (key === '=') {
        answer = eval(smallScreen.value);
        smallScreen.value = answer;
    } else if (key === 'AC') {
        smallScreen.value = '';
    } else if (key === 'C') {
        smallScreen.value = smallScreen.value.slice(0, -1);
    } else {
        smallScreen.value += key;
    }
}

function mainDisplay(key) {
    if ('0123456789'.includes(key)) {
        mainScreen.value += key;
    } else if (key === 'C') {
        mainScreen.value = mainScreen.value.slice(0, -1);
    } else if (key === '=') {
        mainScreen.value = answer;
    } else {
        mainScreen.value = '';
    }


}



// get key
keys.forEach(function (element) {
    element.addEventListener('click', function () {
        //console.log(element);
        let key = element.innerText;
        console.log(key);

        // replace operator to meet with eval function
        if (key === '&#247;') {
            key = '/';
        } else if (key === 'x') {
            key = '*';
        }

        
        smallDisplay(key);
        mainDisplay(key);    
    });    
});








// // show expression for both screen
// function showEexpression(x){
    
//     // remove zero
//     if (equation.innerHTML == 0 && !operators.includes(x)){
//         equation.innerHTML = x;
//         myDisplay.innerHTML = x;
//         return ;
//     }

    
//     // avoid operator duplication
//     let lastkey = equation.innerHTML[equation.innerHTML.length-1];
//     console.log(lastkey);
//     if (!( operators.includes(x) && operators.includes(lastkey))){
//         equation.innerHTML += x;
//     }
    
//     // when operator is pressed, clear screen.
//     if (!(operators.includes(x))) {
//         if (myDisplay.innerHTML == 0){
//             myDisplay.innerHTML = x;
//         }else{
//         myDisplay.innerHTML += x;
//         }
        
//     }else{
//         myDisplay.innerHTML = 0;
//     }
    
// }


// // calaulation
// function calculate(){
//         try{
//             myDisplay.innerHTML = eval(eval(equation.innerHTML).toFixed(4)).toLocaleString();;
//         }catch (error) {
//             alert("Your Input is wrong");
//         }
// }

// // clear both screen
// function clear_screen(){
//     equation.innerHTML = 0;
//     myDisplay.innerHTML = 0;
// }

// // delete both screen
// function delete_screen(){

//     // remove last number
//     equation.innerHTML = equation.innerHTML.slice(0, -1);
//     myDisplay.innerHTML = myDisplay.innerHTML.slice(0, -1);

//     // if no number left, put zero
//     if (equation.innerHTML.length === 0){
//         equation.innerHTML = 0;
//         myDisplay.innerHTML = 0;
//     }
// }



