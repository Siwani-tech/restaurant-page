


const menu= document.createElement("div");

const image1 = "https://images.pexels.com/photos/8954513/pexels-photo-8954513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image2 = "https://images.pexels.com/photos/8951572/pexels-photo-8951572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image3 = "https://images.pexels.com/photos/4801427/pexels-photo-4801427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image4 = "https://images.pexels.com/photos/12973148/pexels-photo-12973148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image5 = "https://images.pexels.com/photos/6373940/pexels-photo-6373940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const image6 = "https://images.pexels.com/photos/10710983/pexels-photo-10710983.jpeg?auto=compress&cs=tinysrgb&w=600";

const listOfMenus = [
  { title: "BANCHAN", image: image1 },
  { title: "CAVIAR", image: image2 },
  { title: "OCTOPUS", image: image3 },
  { title: "royal bibimbap", image: image4 },
  { title: "Lamb", image: image5 },
  { title: "CHOCOPIE", image: image6 },
];

const generateMenuItem = (title, imageSrc) => {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";

  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = title;
  menuItem.appendChild(image);

  const itemTitle = document.createElement("h2");
  itemTitle.textContent = title;
  menuItem.appendChild(itemTitle);

  return menuItem;
};

listOfMenus.forEach((item) => {
  const menuItem = generateMenuItem(item.title, item.image);
  menu.appendChild(menuItem);
});


export default menu;
