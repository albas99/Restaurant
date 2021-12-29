import { content } from "./header";
// import { main } from "./homePage";

function addMenuContents() {
    const menuContentWrapper = document.createElement('div');
    const menuHeadline = document.createElement('div');
    const menuHeadlineText = document.createElement('h2');
    const menuTextWrapper = document.createElement('div');
    const menuText1 = document.createElement('div');
    const text1 = document.createElement('p');
    const menuText2 = document.createElement('div');
    const text2 = document.createElement('p');
    const menuContent = document.createElement('div');
    const appetizers = document.createElement('div');
    const salad = document.createElement('div');
    const mainCourses = document.createElement('div');
    const drinks = document.createElement('div');
    const appetizerText = document.createElement('div');
    const saladText = document.createElement('div');
    const mainCoursesText = document.createElement('div');
    const drinksText = document.createElement('div');

    menuContentWrapper.classList.add('menu-content-wrapper');
    menuHeadline.classList.add('menu-headline');
    menuHeadlineText.classList.add('menu-headline-text');
    menuTextWrapper.classList.add('menu-text-wrapper');
    menuText1.classList.add('menu-text');
    menuText2.classList.add('menu-text');
    text1.classList.add('text');
    text2.classList.add('text');
    menuContent.classList.add('menu-content');
    appetizers.classList.add('menu-item', 'appetizers');
    salad.classList.add('menu-item', 'salad');
    mainCourses.classList.add('menu-item', 'main-courses');
    drinks.classList.add('menu-item', 'drinks');
    appetizerText.classList.add('menu-item');
    saladText.classList.add('menu-item');
    mainCoursesText.classList.add('menu-item');
    drinksText.classList.add('menu-item');

    drinksText.innerText = 'Drinks';
    mainCoursesText.innerText = 'Main Courses';
    saladText.innerText = 'Salad';
    appetizerText.innerText = 'Appetizers';

    appetizers.append(appetizerText);
    mainCourses.append(mainCoursesText);
    salad.append(saladText);
    drinks.append(drinksText);

    menuContent.append(appetizers);
    menuContent.append(salad);
    menuContent.append(mainCourses);
    menuContent.append(drinks);

    text1.innerText =
        "Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore morbi Lorem ipsum dolor sit amet adipiscing";
    text2.innerText =
        "Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore morbi Lorem ipsum dolor sit amet adipiscing";
    menuText1.append(text1);
    menuText2.append(text2);
    menuTextWrapper.append(menuText1);
    menuTextWrapper.append(menuText2);

    menuHeadlineText.innerText = "Browse our Menus";
    menuHeadline.append(menuHeadlineText);

    menuContentWrapper.append(menuHeadline);
    menuContentWrapper.append(menuTextWrapper);
    menuContentWrapper.append(menuContent);

    // main.append(menuContentWrapper);
    content.appendChild(menuContentWrapper);
}

export { addMenuContents };