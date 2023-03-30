import banana from "./banana.jpg";

const homepage = () => {
  const content = document.querySelector("#content");

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

export default homepage;
