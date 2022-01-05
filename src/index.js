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
            content.style.background = "url(../assets/mixed-vegetables.jpeg) center no-repeat";
            content.style.backgroundSize = "cover";
            displayHomePage();
        }
        if (e.target.id === 'menu') {
            content.innerHTML = "";
            content.style.background = "rgb(244, 228, 205)";
            displayMenuPage();
        }
    })
    
}

switchTab();