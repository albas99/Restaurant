import { createHeader } from "./header";
import { addHeroContents } from "./homePage";
// import { addMenuContents } from "./menuPage";

window.addEventListener("load", displayContent);

function displayContent() {
    createHeader();
    addHeroContents();

    const homeLink = document.querySelector('.nav-link');
    // console.log(homeLink.innerHTML);
    
    // addMenuContents();
    
}

// displayContent()

export { displayContent };
