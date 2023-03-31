import "./style.scss";
import renderHomepage from "./homepage";
import renderMenuPage from "./menu";
import renderContactPage from "./contact";

const header = document.createElement("div");
header.id = "header";

const toggleTab = (e) => {
  const activeTab = document.querySelector("#content").classList.value;
  if (activeTab == e.target.textContent.toLowerCase()) {
    //
  } else {
    Array.from(header.childNodes).forEach((child) => {
      child.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  switch (e.target.textContent) {
    case "Home":
      renderHomepage();
      break;
    case "Contact":
      renderContactPage();
      break;
    case "Menu":
      renderMenuPage();
      break;
    default:
      break;
  }
};

const homeTab = document.createElement("button");
homeTab.textContent = "Home";
homeTab.addEventListener("click", toggleTab);

const menuTab = document.createElement("button");
menuTab.textContent = "Menu";
menuTab.addEventListener("click", toggleTab);

const contactTab = document.createElement("button");
contactTab.textContent = "Contact";
contactTab.addEventListener("click", toggleTab);

header.appendChild(homeTab);
header.appendChild(menuTab);
header.appendChild(contactTab);
document.body.appendChild(header);

const event = new Event("click");
homeTab.dispatchEvent(event);
