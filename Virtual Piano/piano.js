let valid_keys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU'];

console.log('JavaSript Embedded');

document.addEventListener("keydown", function(event) {
    if (valid_keys.includes(event.code)) {
        console.log(`The key '${event.key}' is pressed.`);
        let source = 'keys/'+event.key.toUpperCase()+'.mp3';
        let audioObj = new Audio(source);
        audioObj.play();
    } else{
        console.log('Invalid Key')
    }
});

function sound(key){
    console.log('keypressed');
    let source = 'keys/'+key+'.mp3';
    let audioObj = new Audio(source);
    audioObj.play();
}

