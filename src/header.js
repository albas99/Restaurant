// window.addEventListener('load', createHeader);

const content = document.querySelector('.content');

function createHeader() {
    // CREATE HEADER ELEMENTS
    const header = document.createElement('header');
    const navBar = document.createElement('nav');
    const logo = document.createElement('span');
    const rosa = document.createElement('span');
    const navList = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const chef = document.createElement('li');
    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const chefLink = document.createElement('a');

    // ADD CLASS TO HEADER ELEMENTS
    header.classList.add('header');
    navBar.classList.add('nav-bar');
    logo.classList.add('logo');
    rosa.classList.add('rosa');
    navList.classList.add('nav-list');
    homeLink.classList.add('nav-link');
    menuLink.classList.add('nav-link');
    chefLink.classList.add('nav-link');
    
    homeLink.innerHTML = "Home";
    menuLink.innerHTML = "Menu";
    chefLink.innerHTML = "Chefs";

    // APPEND LINKS TO LIST ITEMS
    home.appendChild(homeLink);
    menu.appendChild(menuLink);
    chef.appendChild(chefLink);

    // APPEND LIST ITEMS TO NAVLIST
    navList.appendChild(home);
    navList.appendChild(menu);
    navList.appendChild(chef);

    rosa.innerHTML = "Rosa";
    logo.prepend(rosa);

    navBar.appendChild(logo);
    navBar.appendChild(navList);

    header.appendChild(navBar);
    content.appendChild(header);
    

}

export { content };
export { createHeader };