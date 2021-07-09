# To-Do App Testing Details

All HTML, CSS and JavaScript was validated using the W3C Markup Validator, W3C CSS Validator Services and ESLint/JSHint, respectively. There were no errors or warnings in any of the code.

-   [W3C Markup Validator](https://validator.w3.org/)
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
-   [ESLint](https://eslint.org/) - Used with Airbnb config in VSCode.
-   [JSHint](https://jshint.com/) - Used with "New JavaScript features (ES6)"

Google Lighthouse was also used to check the website. [Find the report here](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fjacobshortall.github.io%2Fto-do-app%2F&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext).

## Testing User Stories

-   The user is looking for a simple site that is easy to use.
    -   Upon entering the site, the user will instantly see the title "To-Do List".
    -   The UI is clean and simple, with familiar icons representing the actions the user can execute.
    -   The user can see clearly there is one place to store to-do notes, and one place to store completed items.

![Full page](/readme/images/full-page.JPG)

-   The user wants a place to create notes.
    -   The note area is in the center of the page; the user can easily tell this is where their notes will be stored.
    -   Users are able to enter their note into a popup modal window after clicking the "Add Item" button at the bottom of the page. This modal also keeps the main view clean and simple.
    -   Items are easily added, and are also subject to a couple of checks. Firstly, the user cannot add a note until there is text in the textarea. Secondly, the user must not exceed the maximum character count of 150. A counter is present to let the user know how many they have left to use.

![Add note button](/readme/images/add-item-1.JPG)
![Add note button](/readme/images/add-item-2.JPG)

-   The user wants to be able to delete notes.
    -   Upon adding a note, the element is given 2 buttons that are easily visible. One of the buttons allows the user to delete the specific note.
    -   The delete button is present on both to-do and completed items.
    -   The user also has the option to clear all notes from a specific section by clicking the respective trash button. This is available in both sections.

![Trash button](/readme/images/clear-icon.JPG)

-   The user wants to be able to keep track of their notes by marking/un-marking them as complete.
    -   Upon adding a note, as mentioned previously, the element is given 2 buttons. One of these is the check button. This is always visible after adding a note, and allows users to mark their item complete.
    -   After marking an item complete, it is moved over to the completed section.
    -   When an item is moved over to the completed section, the check button is removed and a new one added; the undo button. This allows users to move a completed item back over to the to-do section with ease.
    -   When an item is moved back over from completed to to-do, the original check button replaces the undo button once again.

![To do note](/readme/images/to-do-item.JPG)
![Completed note](/readme/images/completed-item.JPG)

-   The user wants their previously made notes to persist after leaving the site.
    -   localStorage is used to store user note values and types in the browser for the next time they visit the page. These notes are then added to the appropriate note section on page load.
    -   Every time a feature related to user notes is actioned on the page, localStorage is updated accordingly. For example, if a note is moved to a different section, or if a note is added or deleted.

![Example notes](/readme/images/local-storage-notes.JPG)
![Example localStorage](/readme/images/local-storage.JPG)

-   The user wants to their notes to sync across tabs without having to refresh the page.
    -   The 'Window: storage event' is used so that whenever there is any change to localStorage, the new changes are instantly updated on the site without needing to refresh. This means that whenever a user adds, deletes, or moves a note, it is instantly reflected in all other local instances of the website.

![Window sync](/readme/images/sync-example.gif)

## Further Testing

-   localStorage testing

    -   Extensive testing was carried out on using localStorage effectively and without error. At first, I began by creating individual keys for each note, with the note content as the value, but this proved ineffective and overly complicated to extract the data in the correct order. I eventually settled on having all the to-do items in one string value and the completed ones in another. I would then split the string into an array and loop through each item.
    -   Each move of localStorage was tested numerous times, making sure each item was being created, deleted and migrated correctly.

-   Character counting

    -   Extra testing was carried out to ensure the character counting feature was implemented correctly. A few changes needed to be made from the initial implementation; it was, at first, restricting the characters using purely JavaScript, but was eventually changed to handle the restriction in HTML and the JavaScript was subsequently only responsible for the counting.

-   The site was checked in the following browsers:

    -   Microsoft Edge
    -   Mozilla Firefox
    -   Google Chrome

-   The social link was tested and directs to the correct place.

-   The site was resized and checked at every breakpoint using developer tools, to ensure everything was as intended across all device sizes.

-   Peers were also asked to review the site to point out existing errors.

## Bugs

There were a few bugs that needed to be solved throughout the development process. As mentioned, issues came up with localStorage; this was the main problem I experienced throughout. As data is stored in strings in localStorage, I had to decide and figure out the most effective and clean way to extract that data to be appropriately represented.

### Existing Bugs

One known issue if that if a user has typed an extremely long string of characters, it can sometimes overflow into the buttons next to the note, if being viewed on a desktop. This is very rare in practice as there are no commonly known/used words that cause this to happen. I have only re-created this bug by typing a single string of random characters with no spaces.
