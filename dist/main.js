/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chefsPage.js":
/*!**************************!*\
  !*** ./src/chefsPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addChefsContent\": () => (/* binding */ addChefsContent)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n\n\nfunction addChefsContent() {\n    const main = document.createElement('main');\n    const chefContentWrapper = document.createElement('div');\n    const chefHeadline = document.createElement('div');\n    const chefHeadlineText = document.createElement('h2');\n\n    chefContentWrapper.classList.add('chef-content-wrapper');\n    chefHeadline.classList.add('chef-headline');\n    chefHeadlineText.classList.add('chef-headline-text');\n\n    chefHeadlineText.innerText = \"Meet Our Experience Chefs\";\n    chefHeadline.appendChild(chefHeadlineText);\n    chefContentWrapper.append(chefHeadline);\n\n    const chefContent = document.createElement('div');\n    chefContent.classList.add('chef-content');\n    chefContentWrapper.append(chefContent);\n    \n    // CHIEF CHEF\n    const chiefChefItem = document.createElement('div');\n    const chiefChef = document.createElement('div');\n    const chiefChefDetails = document.createElement('div');\n    const chiefChefName = document.createElement('h2');\n    const chiefChefPosition = document.createElement('h4');\n    const aboutChiefChef = document.createElement('p');\n\n    chiefChefItem.classList.add('chef-item');\n    chiefChef.classList.add('chef', 'chief-chef');\n    chiefChefDetails.classList.add('chef-details');\n    chiefChefName.classList.add('chef-name');\n    chiefChefPosition.classList.add('chef-position');\n    aboutChiefChef.classList.add('about-chef');\n\n    aboutChiefChef.innerText =\n        \"Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore morbi Lorem ipsum dolor sit amet adipiscing.\";\n    chiefChefPosition.innerText = \"(Chief-chef)\";\n    chiefChefName.innerText = \"Sam Zhang\";\n\n    chiefChefDetails.append(chiefChefName);\n    chiefChefDetails.append(chiefChefPosition);\n    chiefChefDetails.append(aboutChiefChef);\n    chiefChefItem.append(chiefChef);\n    chiefChefItem.append(chiefChefDetails);\n    chefContent.append(chiefChefItem);\n\n\n    const firstChefItem = document.createElement('div');\n    const firstChef = document.createElement(\"div\");\n    const firstChefDetails = document.createElement(\"div\");\n    const firstChefName = document.createElement(\"h2\");\n    const firstChefPosition = document.createElement(\"h4\");\n    const aboutFirstChef = document.createElement(\"p\");\n\n    firstChefItem.classList.add(\"chef-item\");\n    firstChef.classList.add(\"chef\", \"senior-chef-1\");\n    firstChefDetails.classList.add(\"chef-details\");\n    firstChefName.classList.add(\"chef-name\");\n    firstChefPosition.classList.add(\"chef-position\");\n    aboutFirstChef.classList.add(\"about-chef\");\n\n    aboutFirstChef.innerText =\n        \"Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore morbi Lorem ipsum dolor sit amet adipiscing.\";\n    firstChefPosition.innerText = \"(Senior-chef)\";\n    firstChefName.innerText = \"Matumbi Ngosa\";\n\n    firstChefDetails.append(firstChefName);\n    firstChefDetails.append(firstChefPosition);\n    firstChefDetails.append(aboutFirstChef);\n    firstChefItem.append(firstChef);\n    firstChefItem.append(firstChefDetails);\n    chefContent.append(firstChefItem);\n    \n    const secondChefItem = document.createElement('div');\n    const secondChef = document.createElement(\"div\");\n    const secondChefDetails = document.createElement(\"div\");\n    const secondChefName = document.createElement(\"h2\");\n    const secondChefPosition = document.createElement(\"h4\");\n    const aboutSecondChef = document.createElement(\"p\");\n\n    secondChefItem.classList.add(\"chef-item\");\n    secondChef.classList.add(\"chef\", \"senior-chef-2\");\n    secondChefDetails.classList.add(\"chef-details\");\n    secondChefName.classList.add(\"chef-name\");\n    secondChefPosition.classList.add(\"chef-position\");\n    aboutSecondChef.classList.add(\"about-chef\");\n\n    aboutSecondChef.innerText =\n      \"Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore morbi Lorem ipsum dolor sit amet adipiscing.\";\n    secondChefPosition.innerText = \"(Senior-chef)\";\n    secondChefName.innerText = \"Antonio Costas\";\n\n    secondChefDetails.append(secondChefName);\n    secondChefDetails.append(secondChefPosition);\n    secondChefDetails.append(aboutSecondChef);\n    secondChefItem.append(secondChef);\n    secondChefItem.append(secondChefDetails);\n    chefContent.append(secondChefItem);\n\n    main.appendChild(chefContentWrapper);\n    _header__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/chefsPage.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n// window.addEventListener('load', createHeader);\n\nconst content = document.querySelector('.content');\n\nfunction createHeader() {\n    // CREATE HEADER ELEMENTS\n    const header = document.createElement('header');\n    const navBar = document.createElement('nav');\n    const logo = document.createElement('span');\n    const rosa = document.createElement('span');\n    const navList = document.createElement('ul');\n    const home = document.createElement('li');\n    const menu = document.createElement('li');\n    const chef = document.createElement('li');\n    const homeLink = document.createElement('a');\n    const menuLink = document.createElement('a');\n    const chefLink = document.createElement('a');\n\n    // ADD CLASS TO HEADER ELEMENTS\n    header.classList.add('header');\n    navBar.classList.add('nav-bar');\n    logo.classList.add('logo');\n    rosa.classList.add('rosa');\n    navList.classList.add('nav-list');\n    homeLink.classList.add('nav-link');\n    menuLink.classList.add('nav-link');\n    chefLink.classList.add('nav-link');\n\n    homeLink.setAttribute('id', 'home');\n    menuLink.setAttribute('id', 'menu');\n    chefLink.setAttribute('id', 'chefs');\n    \n    homeLink.innerHTML = \"Home\";\n    menuLink.innerHTML = \"Menu\";\n    chefLink.innerHTML = \"Chefs\";\n\n    // APPEND LINKS TO LIST ITEMS\n    home.appendChild(homeLink);\n    menu.appendChild(menuLink);\n    chef.appendChild(chefLink);\n\n    // APPEND LIST ITEMS TO NAVLIST\n    navList.appendChild(home);\n    navList.appendChild(menu);\n    navList.appendChild(chef);\n\n    rosa.innerHTML = \"Rosa\";\n    logo.prepend(rosa);\n\n    navBar.appendChild(logo);\n    navBar.appendChild(navList);\n\n    header.appendChild(navBar);\n    content.appendChild(header);\n    \n\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHeroContents\": () => (/* binding */ addHeroContents)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n\n\nfunction addHeroContents() {\n//   CREATE ELEMENTS\n    const main = document.createElement('main');\n    const heroWrapper = document.createElement('div');\n    const heroContentWrapper = document.createElement('div');\n    const headLine = document.createElement('h1');\n    const subHeadLine = document.createElement('p');\n\n// GIVE CLASSES TO ELEMENTS\n    main.classList.add('main-content');\n    heroWrapper.classList.add('hero-wrapper');\n    heroContentWrapper.classList.add('hero-content-wrapper');\n    headLine.classList.add('headline');\n    subHeadLine.classList.add('subheadline');\n\n    headLine.innerHTML = \"Tastiest and mouth watering menus in Berlin\";\n    subHeadLine.innerHTML =\n        \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint veritatis impedit dolore repellendus modi, saepe, nihil velit adipisci provident quae tempore facilis porro quisquam dolorem voluptate laboriosam illo.\";\n    \n    headLine.appendChild(subHeadLine);\n    heroContentWrapper.appendChild(headLine);\n    heroWrapper.appendChild(heroContentWrapper);\n    main.appendChild(heroWrapper);\n    _header__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);\n}\n\n\n// export { main };\n\n//# sourceURL=webpack://restaurant/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n\n\n\n\n\n\n\nfunction switchTab() {\n    _header__WEBPACK_IMPORTED_MODULE_1__.content.addEventListener(\"click\", (e)=> {\n        if (e.target.id === 'home') {\n            _header__WEBPACK_IMPORTED_MODULE_1__.content.innerHTML = \"\";\n            _header__WEBPACK_IMPORTED_MODULE_1__.content.style.background = \"url(../assets/mixed-vegetables.jpeg) center no-repeat\";\n            _header__WEBPACK_IMPORTED_MODULE_1__.content.style.backgroundSize = \"cover\";\n            (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.displayHomePage)();\n        }\n        if (e.target.id === 'menu') {\n            _header__WEBPACK_IMPORTED_MODULE_1__.content.innerHTML = \"\";\n            _header__WEBPACK_IMPORTED_MODULE_1__.content.style.background = \"rgb(244, 228, 205)\";\n            (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.displayMenuPage)();\n        }\n        if (e.target.id === 'chefs') {\n            _header__WEBPACK_IMPORTED_MODULE_1__.content.innerHTML = \"\";\n            _header__WEBPACK_IMPORTED_MODULE_1__.content.style.background = \"rgb(255, 255, 255)\";\n            (0,_page_load__WEBPACK_IMPORTED_MODULE_0__.displayChefPage)();\n        }\n    })\n    \n}\n\nswitchTab();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addMenuContents\": () => (/* binding */ addMenuContents)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n\n// import { main } from \"./homePage\";\n\nfunction addMenuContents() {\n    const main = document.createElement(\"main\");\n    const menuContentWrapper = document.createElement('div');\n    const menuHeadline = document.createElement('div');\n    const menuHeadlineText = document.createElement('h2');\n    const menuTextWrapper = document.createElement('div');\n    const menuText1 = document.createElement('div');\n    const text1 = document.createElement('p');\n    const menuText2 = document.createElement('div');\n    const text2 = document.createElement('p');\n    const menuContent = document.createElement('div');\n    const appetizers = document.createElement('div');\n    const salad = document.createElement('div');\n    const mainCourses = document.createElement('div');\n    const drinks = document.createElement('div');\n    const appetizerText = document.createElement('div');\n    const saladText = document.createElement('div');\n    const mainCoursesText = document.createElement('div');\n    const drinksText = document.createElement('div');\n\n    menuContentWrapper.classList.add('menu-content-wrapper');\n    menuHeadline.classList.add('menu-headline');\n    menuHeadlineText.classList.add('menu-headline-text');\n    menuTextWrapper.classList.add('menu-text-wrapper');\n    menuText1.classList.add('menu-text');\n    menuText2.classList.add('menu-text');\n    text1.classList.add('text');\n    text2.classList.add('text');\n    menuContent.classList.add('menu-content');\n    appetizers.classList.add('menu-item', 'appetizers');\n    salad.classList.add('menu-item', 'salad');\n    mainCourses.classList.add('menu-item', 'main-courses');\n    drinks.classList.add('menu-item', 'drinks');\n    appetizerText.classList.add('item-name');\n    saladText.classList.add('item-name');\n    mainCoursesText.classList.add('item-name');\n    drinksText.classList.add('item-name');\n\n    drinksText.innerText = 'Drinks';\n    mainCoursesText.innerText = 'Main Courses';\n    saladText.innerText = 'Salad';\n    appetizerText.innerText = 'Appetizers';\n\n    appetizers.append(appetizerText);\n    mainCourses.append(mainCoursesText);\n    salad.append(saladText);\n    drinks.append(drinksText);\n\n    menuContent.append(appetizers);\n    menuContent.append(salad);\n    menuContent.append(mainCourses);\n    menuContent.append(drinks);\n\n    text1.innerText =\n        \"Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore morbi Lorem ipsum dolor sit amet adipiscing\";\n    text2.innerText =\n        \"Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore morbi Lorem ipsum dolor sit amet adipiscing\";\n    menuText1.append(text1);\n    menuText2.append(text2);\n    menuTextWrapper.append(menuText1);\n    menuTextWrapper.append(menuText2);\n\n    menuHeadlineText.innerText = \"Browse our Menus\";\n    menuHeadline.append(menuHeadlineText);\n\n    menuContentWrapper.append(menuHeadline);\n    menuContentWrapper.append(menuTextWrapper);\n    menuContentWrapper.append(menuContent);\n\n    main.append(menuContentWrapper);\n    _header__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/menuPage.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHomePage\": () => (/* binding */ displayHomePage),\n/* harmony export */   \"displayMenuPage\": () => (/* binding */ displayMenuPage),\n/* harmony export */   \"displayChefPage\": () => (/* binding */ displayChefPage)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _chefsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chefsPage */ \"./src/chefsPage.js\");\n\n\n\n\n\nwindow.addEventListener(\"load\", displayHomePage);\n\nfunction displayHomePage() {\n    (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\n    (0,_homePage__WEBPACK_IMPORTED_MODULE_1__.addHeroContents)();  \n}\n\nfunction displayMenuPage() {\n    (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\n    (0,_menuPage__WEBPACK_IMPORTED_MODULE_2__.addMenuContents)();\n}\n\nfunction displayChefPage() {\n    (0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\n    (0,_chefsPage__WEBPACK_IMPORTED_MODULE_3__.addChefsContent)();\n}\n\n// displayContent()\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/page-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;