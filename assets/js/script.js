/* eslint-disable no-use-before-define */

const addNoteButton = document.getElementById("add-note");
addNoteButton.addEventListener("click", showModal);

/**
 * displays modal for user to enter text
 */
function showModal() {
    document.getElementById("modal").style.display = "flex";
}
