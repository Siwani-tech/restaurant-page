
import homePage from './homePage';
import menu from './menu';
import contacts from './contacts';

const content = document.querySelector("#containers");

// Create the topnav div element
const topnav = document.createElement("div");
topnav.className = "topnav";

// Create the anchor tags for the links
const homeLink = document.createElement("button");
homeLink.className = "home";
homeLink.innerText = "HOME";

const menuLink = document.createElement("button");
menuLink.className = "menu";
menuLink.innerText = "MENU";

const contactsLink = document.createElement("button");
contactsLink.className = "contacts";
contactsLink.innerText = "CONTACTS";


topnav.appendChild(homeLink);
topnav.appendChild(menuLink);
topnav.appendChild(contactsLink);


content.appendChild(topnav);

const container = document.createElement("div");
container.appendChild(homePage);
content.appendChild(container);

function handleMenuClick() {
  
  container.innerHTML = '';
  container.appendChild(topnav);
  container.appendChild(menu);
}

function handleContactsClick() {
 
  container.innerHTML = '';
  container.appendChild(topnav); 
  container.appendChild(contacts);
}

homeLink.addEventListener("click", () => {
  container.innerHTML = '';
  container.appendChild(topnav); 
  container.appendChild(homePage);
});

menuLink.addEventListener('click', handleMenuClick);
contactsLink.addEventListener('click', handleContactsClick);
