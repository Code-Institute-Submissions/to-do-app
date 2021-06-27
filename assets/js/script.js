/* eslint-disable no-use-before-define */

const addNoteButton = document.getElementById("add-note");
addNoteButton.addEventListener("click", showModal);

/** displays modal for user to enter text */
function showModal() {
    document.getElementById("modal").style.display = "flex";

    // add event listener to modal cross
    document.getElementsByClassName("fa-times")[0].addEventListener("click", closeModal);
}

/** closes modal */
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
