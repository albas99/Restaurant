import { createHeader } from "./header";
import { addHeroContents } from "./homePage";
import { addMenuContents } from "./menuPage";

window.addEventListener("load", displayHomePage);

function displayHomePage() {
    createHeader();
    addHeroContents();  
}

function displayMenuPage() {
    createHeader();
    addMenuContents();
}

// displayContent()

export { displayHomePage, displayMenuPage};
