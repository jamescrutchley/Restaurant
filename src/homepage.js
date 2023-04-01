import banana from "./bananaMan.jpg";

//Photo by cottonbro studio: https://www.pexels.com/photo/drinking-glasses-with-water-beside-bananas-and-man-s-head-5876139/

const renderHomepage = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.classList = '';
  contentDiv.classList.add('homepage')

  Array.from(contentDiv.childNodes).forEach((child) => {
    contentDiv.removeChild(child);
  });

  const image = document.createElement("img");
  image.src = banana;
  image.style.width = "200px";
  content.appendChild(image);

  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Jim's bananas";
  content.appendChild(pageTitle);

  const copy = document.createElement("p");
  copy.textContent =
    "Providing fresh and potassium rich cuisine in a comfy, stylish environment.";
  content.appendChild(copy);
};

export default renderHomepage;
