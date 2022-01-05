import { createHeader } from "./header";
import { addHeroContents } from "./homePage";
import { addMenuContents } from "./menuPage";
import { addChefsContent } from "./chefsPage";

window.addEventListener("load", displayHomePage);

function displayHomePage() {
    createHeader();
    addHeroContents();  
}

function displayMenuPage() {
    createHeader();
    addMenuContents();
}

function displayChefPage() {
    createHeader();
    addChefsContent();
}

// displayContent()

export { displayHomePage, displayMenuPage, displayChefPage};
