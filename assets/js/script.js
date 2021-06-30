/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */

// add event listener to "add note" button
const addNoteButton = document.getElementById("add-note");
addNoteButton.addEventListener("click", showModal);

// add event listeners to each trash button
const clearButtons = document.getElementsByClassName("fa-trash");
for (const button of clearButtons) {
    button.addEventListener("click", clearAll);
}

/** displays modal for user to enter text */
function showModal() {
    // darkens background elements with overlay
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";

    // shows modal
    const modal = document.getElementById("modal");
    modal.style.display = "flex";

    // add event listener to modal cross
    const modalCross = document.getElementsByClassName("fa-times")[0];
    modalCross.addEventListener("click", closeModal);

    // add event listener to "add note" button
    const confNote = document.getElementById("add-conf");
    confNote.addEventListener("click", addNote);
}

/** closes modal */
function closeModal() {
    // hides modal
    const modal = document.getElementById("modal");
    modal.style.display = "none";

    // removes darkened overlay
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}

/** adds note to to do list */
function addNote() {
    const input = document.getElementById("note-input").value;
    const toDoContainer = document.getElementById("to-do");

    // check text area isn't empty
    if (input) {
        // add created element
        toDoContainer.appendChild(createNote(input));

        // add input to localStorage
        addToLocalStorage(input);
    } else {
        alert("Please enter some text.");
    }
}

/** creates note element from given user input */
function createNote(input) {
    // creating element to be added to list
    const div = document.createElement("div");
    div.innerHTML = `
            <p>${input}</p>
            <div class="button-cont">
                <i class="fas fa-check-square"></i>
                <i class="fas fa-ban"></i>
            </div>
        `;
    div.className = "to-do-item";

    return div;
}

/** adds user input to localStorage so it's saved on reload */
function addToLocalStorage(input) {
    if ("toDo" in localStorage) {
        // convert localStorage into array to push new item
        const arr = localStorage.toDo.split(",");
        arr.push(input);
        localStorage.toDo = arr;
    } else {
        // create new array and localStorage object
        const arr = [input];
        localStorage.toDo = arr;
    }
}

/** clears all items from either the to-do or completed list */
function clearAll() {
    // check which list to clear by grabbing class attribute
    if (this.classList.contains("to-do-clear")) {
        document.getElementById("to-do").innerHTML = "";
    } else {
        document.getElementById("completed").innerHTML = "";
    }
}
