let contacts = document.createElement("div");
contacts.className = "contacts-container";

let contactsImg = "https://www.jungsik.kr/wp-content/uploads/2023/04/reservation-image.jpg";

let contactImg = document.createElement("img");
contactImg.className = "contactImg";
contactImg.setAttribute("src", contactsImg);

let contactTitle = document.createElement("h3");
contactTitle.className = "restaurantHours";
contactTitle.innerHTML = "RESTAURANT HOURS";

let contactPara = document.createElement("p");
contactPara.className = "contactPara";
contactPara.innerHTML = "점심 : 12:00 – 15:00 (Last Order 13:15) <br> 브레이크 타임 : 15:00 – 17:30 <br> 저녁 : 17:30 – 22:00 (Last Order 19:15) <br> *연중무휴";

let contactDetails = document.createElement("div");
contactDetails.className = "contactDetails";
contactDetails.innerHTML = "(+82) 2-517-4654 <br> reservation@jungsik.kr <br> <br>Jungsik Seoul accepts online bookings only through ‘Catch Table’. Reservations are made on a monthly basis and new dates will be released at 11 a.m every day. Our reservation team will receive your calls between 11am to 8pm on weekdays. If you cannot reach our team, please send us an email at Reservation@jungsik.kr and we will get back to you at the earliest possible time. If you click ‘Online Reservation’ below, we can check the available days through the Catch Table and make a reservation online yourself.";

// Putting elements in the contacts container
contacts.appendChild(contactImg);
contacts.appendChild(contactTitle);
contacts.appendChild(contactPara);
contacts.appendChild(contactDetails);

// Don't append the contacts container to the body here.
// We will handle the display property in the index.js file.

export default contacts;
