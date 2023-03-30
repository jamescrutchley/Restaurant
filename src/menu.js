import banana from "./banana.jpg";

const addMenuItem = (dish, price, imgSrc) => {
  const contentDiv = document.querySelector("#content");
  const newDish = document.createElement("div");

  const dishName = document.createElement("p");
  dishName.textContent = dish;
  newDish.appendChild(dishName);

  const dishPrice = document.createElement("p");
  dishPrice.textContent = price;
  newDish.appendChild(dishPrice);

  const dishImage = document.createElement("img");
  dishImage.src = imgSrc;
  newDish.appendChild(dishImage);

  contentDiv.appendChild(newDish);
};

const renderMenuPage = () => {
  const contentDiv = document.querySelector("#content");

  Array.from(contentDiv.childNodes).forEach((child) => {
      contentDiv.removeChild(child);
  });

  addMenuItem("Organic Banana Bunch", "$5.50", banana);
  addMenuItem("Regular Banana Bunch", "$3.90", banana);
  addMenuItem("Banana Singleton", "$1", banana);
};

export default renderMenuPage;
