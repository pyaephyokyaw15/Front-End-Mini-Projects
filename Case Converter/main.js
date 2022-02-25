let textBox = document.querySelector('textarea');

function upperCase(){
    console.log(textBox.value)
    console.log('Upper Case');
    textBox.value = textBox.value.toUpperCase();
}

function lowerCase(){
    console.log(textBox.value)
    console.log('Lower Case');
    textBox.value = textBox.value.toLowerCase();
}

function properCase(){
    let modified_string ='';
    console.log(textBox.value)
    console.log('Proper Case');
    console.log(textBox.value)
    let words = textBox.value.split(' ');
    for (let word of words) {
            modified_string += word[0].toUpperCase() + word.slice(1).toLowerCase()+' ';
    }

    textBox.value = modified_string.slice(0,-1);
}

function sentence(){
    let modified_string ='';
    console.log(textBox.value)
    console.log('SentenceCase');
    console.log(textBox.value)
    let words = textBox.value.split('. ');
    for (let word of words) {
            modified_string += word[0].toUpperCase() + word.slice(1).toLowerCase()+'. ';
    }

    textBox.value = modified_string.slice(0, -2);
}

function download() {
    let filename='text.txt';
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textBox.value));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
// download("hello.txt","This is the content of my file :)");