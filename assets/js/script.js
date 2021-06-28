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
