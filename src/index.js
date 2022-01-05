import { displayHomePage, displayMenuPage } from "./page-load";
import { createHeader } from "./header";
import { addHeroContents } from "./homePage";
import { addMenuContents } from "./menuPage";
import { content } from "./header";

// displayContent();

function switchTab() {
    content.addEventListener("click", (e)=> {
        if (e.target.id === 'home') {
            content.innerHTML = "";
            displayHomePage();
        }
        if (e.target.id === 'menu') {
            content.innerHTML = "";
            displayMenuPage();
        }
    })
    
}

switchTab();