// Variables
var random_margin = ["0px", "5px", "10px", "15px", "20px", "25px", "30px"];
var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
var random_degree = ["rotate(2deg)", "rotate(-2deg)", "rotate(4deg)", "rotate(-4deg)", "rotate(8deg)", "rotate(-8deg)"];
var index = 0;
// Get saved notes from local storage. If there is nothing, create an empty array.
const savedNotes = JSON.parse(localStorage.getItem("savedNotes")) || []; 


// Selectors
let addBtn = document.querySelector('#add-note');
let notes = document.querySelector('#all-notes');
let newNoteContainer = document.querySelector('#new-note-container');
let newNote = document.querySelector('#new-note');



// ------------------------------ Functions -------------------------
// Save Local Storage
function saveLocalNotes(note){
    savedNotes.push(note);
    console.log(note);
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes));
}


// Remove from Local Storage
function removeLocalNotes(noteDiv){
    const myNote = noteDiv.children[1].innerText;
    // console.log(myNote);
    savedNotes.splice(savedNotes.indexOf(myNote), 1);
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes));
}


// Create new note
function createNote(myNote) {
    let index = Math.floor(Math.random()*6);// get random index 

    // note container
    const noteDiv = document.createElement("div");
    noteDiv.style.margin = random_margin[index];
    noteDiv.style.backgroundColor = random_colors[index];
    noteDiv.style.transform = random_degree[index];
    noteDiv.classList.add('noteDiv');

    const closeBtn = document.createElement('i')
    closeBtn.classList.add('fas', 'fa-times-circle', 'remove-btn');
    noteDiv.appendChild(closeBtn);

    const note = document.createElement("div");
    note.classList.add('note');
    note.innerText = myNote;
    noteDiv.appendChild(note);

    notes.appendChild(noteDiv);

    // set empty string for new note text area.
    newNote.value = '';
}


// ------------------------- Start ----------------------------
// first show notes saved in local storage.
savedNotes.forEach(createNote);

// Pop up text aera when click addd button
addBtn.addEventListener('click', () => {
    newNoteContainer.style.display = 'flex';
});

// Create new note when type note and press enter.
newNote.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
        newNoteContainer.style.display = 'none';
        saveLocalNotes(newNote.value); 
        createNote(newNote.value);
           
    } 
});

// Remove note
notes.addEventListener('click', event => {
    const removeBtn = event.target;
    if (removeBtn.classList.contains('remove-btn')) {
        removeBtn.parentElement.remove();
        removeLocalNotes(removeBtn.parentElement);
    } 
});