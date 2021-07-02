/* eslint-disable comma-dangle */
/* eslint-disable no-alert */
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
    const input = document.getElementById("note-input");
    const toDoContainer = document.getElementById("to-do");

    // check text area isn't empty
    if (input.value) {
        // add created element
        toDoContainer.appendChild(createNote(input.value));

        // add input to localStorage
        addToLocalStorage(input.value, "todo");

        // add event listeners to each button when new item is created
        addItemListeners();

        input.value = "";
        input.focus();
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
function addToLocalStorage(input, list) {
    if (list === "todo") {
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
    } else if (list === "completed") {
        if ("completed" in localStorage) {
            // convert localStorage into array to push new item
            const arr = localStorage.completed.split(",");
            arr.push(input);
            localStorage.completed = arr;
        } else {
            // create new array and localStorage object
            const arr = [input];
            localStorage.completed = arr;
        }
    }
}

/** clears all items from either the to-do or completed list */
function clearAll() {
    // check which list to clear by grabbing class attribute
    if (this.classList.contains("to-do-clear")) {
        document.getElementById("to-do").innerHTML = "";
        delete localStorage.toDo; // clear from localStorage
    } else {
        document.getElementById("completed").innerHTML = "";
        delete localStorage.completed; // clear from localStorage
    }
}

/** adds event listeners to each button when new item is added to to-do list
 */
function addItemListeners() {
    // get most recently added item
    const newItem = document.getElementById("to-do").lastChild;
    // adding delete/complete event listeners
    newItem
        .getElementsByClassName("fa-ban")[0]
        .addEventListener("click", deleteItem);
    newItem
        .getElementsByClassName("fa-check-square")[0]
        .addEventListener("click", completeItem);
}

// deletes single item from list
function deleteItem() {
    // checks which list the item is in so it can be correctly removed from localStorage
    if (
        this.closest(".button-cont").children[0].classList.contains(
            "fa-undo-alt"
        )
    ) {
        // removes from completed list localStorage
        removeLocal(
            this.closest(".to-do-item").children[0].innerHTML,
            "completed"
        );
    } else {
        // removes from toDo list localStorage
        removeLocal(this.closest(".to-do-item").children[0].innerHTML, "todo");
    }

    // remove item from DOM
    this.closest(".to-do-item").remove();
}

// marks item as completed, moving it over to the completed section
function completeItem() {
    // move div over from to-do to completed section
    const completedBox = document.getElementById("completed");
    completedBox.appendChild(this.closest(".to-do-item"));

    // change icon from check to undo
    this.classList.remove("fa-check-square");
    this.classList.add("fa-undo-alt");

    // add new event listener to uncheck the item
    this.removeEventListener("click", completeItem);
    this.addEventListener("click", uncheckItem);

    const item = this.closest(".to-do-item").children[0].innerHTML;
    removeLocal(item, "todo");
    addToLocalStorage(item, "completed");
}

// handles removing items from localStorage
function removeLocal(item, list) {
    // checking which list item is in
    if (list === "todo") {
        const arr = localStorage.toDo.split(",");
        // this check is to avoid an empty string in localStorage if there's only one item
        if (arr.length > 1) {
            arr.splice(arr.indexOf(item), 1);
            localStorage.toDo = arr;
        } else {
            delete localStorage.toDo;
        }
    } else if (list === "completed") {
        const arr = localStorage.completed.split(",");
        // this check is to avoid an empty string in localStorage if there's only one item
        if (arr.length > 1) {
            arr.splice(arr.indexOf(item), 1);
            localStorage.completed = arr;
        } else {
            delete localStorage.completed;
        }
    }
}

function uncheckItem() {}
