import { content } from "./header";

function addHeroContents() {
//   CREATE ELEMENTS
    const main = document.createElement('main');
    const heroWrapper = document.createElement('div');
    const heroContentWrapper = document.createElement('div');
    const headLine = document.createElement('h1');
    const subHeadLine = document.createElement('p');

// GIVE CLASSES TO ELEMENTS
    main.classList.add('main-content');
    heroWrapper.classList.add('hero-wrapper');
    heroContentWrapper.classList.add('hero-content-wrapper');
    headLine.classList.add('headline');
    subHeadLine.classList.add('subheadline');

    headLine.innerHTML = "Tastiest and mouth watering menus in Berlin";
    subHeadLine.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis impedit dolore repellendus modi, saepe, nihil velit adipisci provident quae tempore facilis porro quisquam dolorem voluptate laboriosam illo.";
    
    headLine.appendChild(subHeadLine);
    heroContentWrapper.appendChild(headLine);
    heroWrapper.appendChild(heroContentWrapper);
    main.appendChild(heroWrapper);
    content.appendChild(main);
}

export { addHeroContents };
// export { main };