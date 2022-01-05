import { displayContent } from "./page-load";
import { createHeader } from "./header";
import { addHeroContents } from "./homePage";
import { addMenuContents } from "./menuPage";

// displayContent();

function switchTab() {
    const homeLink = document.querySelector('.nav-link');
    console.log(homeLink);
    homeLink.addEventListener('click', console.log("clicked"));
}

// switchTab();