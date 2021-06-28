/* eslint-disable no-use-before-define */

const addNoteButton = document.getElementById("add-note");
addNoteButton.addEventListener("click", showModal);

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
    // shows modal
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
        // creating element to be added to list
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${input}</p>
            <div class="button-cont">
                <button class="complete">complete</button>
                <button class="remove">remove</button>
            </div>
        `;
        div.className = "to-do-item";

        // add created element
        toDoContainer.appendChild(div);
    } else {
        alert("Please enter some text.");
    }
}
