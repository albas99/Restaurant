import { content } from "./header";

function addChefsContent() {
    const main = document.createElement('main');
    const chefContentWrapper = document.createElement('div');
    const chefHeadline = document.createElement('div');
    const chefHeadlineText = document.createElement('h2');

    chefContentWrapper.classList.add('chef-content-wrapper');
    chefHeadline.classList.add('chef-headline');
    chefHeadlineText.classList.add('chef-headline-text');

    chefHeadlineText.innerText = "Meet Our Experience Chefs";
    chefHeadline.appendChild(chefHeadlineText);
    chefContentWrapper.append(chefHeadline);

    const chefContent = document.createElement('div');
    chefContentWrapper.append(chefContent);
    
    // CHIEF CHEF
    const chiefChefItem = document.createElement('div');
    const chiefChef = document.createElement('div');
    const chiefChefDetails = document.createElement('div');
    const chiefChefName = document.createElement('h2');
    const chiefChefPosition = document.createElement('h4');
    const aboutChiefChef = document.createElement('p');

    chiefChefItem.classList.add('chef-item');
    chiefChef.classList.add('chef', 'chief-chef');
    chiefChefDetails.classList.add('chef-details');
    chiefChefName.classList.add('chef-name');
    chiefChefPosition.classList.add('chef-position');
    aboutChiefChef.classList.add('about-chef');

    aboutChiefChef.innerText =
        "Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore morbi Lorem ipsum dolor sit amet adipiscing.";
    chiefChefPosition.innerText = "(Chief-chef)";
    chiefChefName.innerText = "Sam Zhang";

    chiefChefDetails.append(aboutChiefChef);
    chiefChefDetails.append(chiefChefPosition);
    chiefChefDetails.append(chiefChefName);
    chefContent.append(chiefChefDetails);
    chefContent.append(chiefChef);
    chefContent.append(chiefChefItem);


    const firstChefItem = document.createElement('div');
    const firstChef = document.createElement("div");
    const firstChefDetails = document.createElement("div");
    const firstChefName = document.createElement("h2");
    const firstChefPosition = document.createElement("h4");
    const aboutFirstChef = document.createElement("p");

    firstChefItem.classList.add("chef-item");
    firstChef.classList.add("chef", "senior-chef-1");
    firstChefDetails.classList.add("chef-details");
    firstChefName.classList.add("chef-name");
    firstChefPosition.classList.add("chef-position");
    aboutFirstChef.classList.add("about-chef");

    aboutFirstChef.innerText =
        "Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore morbi Lorem ipsum dolor sit amet adipiscing.";
    firstChefPosition.innerText = "(Senior-chef)";
    firstChefName.innerText = "Matumbi Ngosa";

    firstChefDetails.append(aboutFirstChef);
    firstChefDetails.append(firstChefPosition);
    firstChefDetails.append(firstChefName);
    chefContent.append(firstChefDetails);
    chefContent.append(firstChef);
    chefContent.append(firstChefItem);

    const secondChefItem = document.createElement('div');
    const secondChef = document.createElement("div");
    const secondChefDetails = document.createElement("div");
    const secondChefName = document.createElement("h2");
    const secondChefPosition = document.createElement("h4");
    const aboutSecondChef = document.createElement("p");

    secondChefItem.classList.add("chef-item");
    secondChef.classList.add("chef", "senior-chef-2");
    secondChefDetails.classList.add("chef-details");
    secondChefName.classList.add("chef-name");
    secondChefPosition.classList.add("chef-position");
    aboutSecondChef.classList.add("about-chef");

    aboutSecondChef.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore morbi Lorem ipsum dolor sit amet adipiscing.";
    secondChefPosition.innerText = "(Senior-chef)";
    secondChefName.innerText = "Antonio Costas";

    secondChefDetails.append(aboutSecondChef);
    secondChefDetails.append(secondChefPosition);
    secondChefDetails.append(secondChefName);
    chefContent.append(secondChefDetails);
    chefContent.append(secondChef);
    chefContent.append(secondChefItem);

    main.appendChild(chefContentWrapper);
    content.appendChild(main);
}

export { addChefsContent };