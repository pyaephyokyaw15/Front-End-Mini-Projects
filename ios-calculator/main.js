let myDisplay = document.querySelector('.screen');
let equation = document.querySelector('.showEexpression');
let operators = ['+', '-', '*', '/', '%'];


// show expression for both screen
function showEexpression(x){
    
    // remove zero
    if (equation.innerHTML == 0 && !operators.includes(x)){
        equation.innerHTML = x;
        myDisplay.innerHTML = x;
        return ;
    }

    
    // avoid operator duplication
    let lastkey = equation.innerHTML[equation.innerHTML.length-1];
    console.log(lastkey);
    if (!( operators.includes(x) && operators.includes(lastkey))){
        equation.innerHTML += x;
    }
    
    // when operator is pressed, clear screen.
    if (!(operators.includes(x))) {
        if (myDisplay.innerHTML == 0){
            myDisplay.innerHTML = x;
        }else{
        myDisplay.innerHTML += x;
        }
        
    }else{
        myDisplay.innerHTML = 0;
    }
    
}


// calaulation
function calculate(){
        try{
            myDisplay.innerHTML = eval(eval(equation.innerHTML).toFixed(4)).toLocaleString();;
        }catch (error) {
            alert("Your Input is wrong");
        }
}

// clear both screen
function clear_screen(){
    equation.innerHTML = 0;
    myDisplay.innerHTML = 0;
}

// delete both screen
function delete_screen(){

    // remove last number
    equation.innerHTML = equation.innerHTML.slice(0, -1);
    myDisplay.innerHTML = myDisplay.innerHTML.slice(0, -1);

    // if no number left, put zero
    if (equation.innerHTML.length === 0){
        equation.innerHTML = 0;
        myDisplay.innerHTML = 0;
    }
}



