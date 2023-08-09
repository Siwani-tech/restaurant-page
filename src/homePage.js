
const image1 = "https://images.pexels.com/photos/2313682/pexels-photo-2313682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const homePage = document.createElement("div");
const title = document.createElement("div");
const img = document.createElement("img");

img.className = "img";
img.src = image1;
homePage.appendChild(img);

// HomePage -Title
title.className = "title";
title.innerHTML = "파인다이닝 <br>- New Korean Fine Dining <br>- 정식당 -<br> Jungsik Seoul";
homePage.appendChild(title);

export default homePage;
