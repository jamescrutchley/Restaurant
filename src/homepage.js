import banana from "./banana.jpg";

const renderHomepage = () => {
  const contentDiv = document.querySelector("#content");

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

  return content;
};

export default renderHomepage;
