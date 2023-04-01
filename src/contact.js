const renderContactPage = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.classList = '';
  contentDiv.classList.add('contact');

  Array.from(contentDiv.childNodes).forEach((child) => {
      contentDiv.removeChild(child);
  });

  const renderPageDiv = document.createElement("div");
    renderPageDiv.textContent = 'Contact Us'
    renderPageDiv.classList.add('contactDiv');

  const contactEmail = document.createElement("p");
  contactEmail.textContent = "Email: bananas@gmeal.com";
  renderPageDiv.appendChild(contactEmail);

  const contactNumber = document.createElement("p");
  contactNumber.textContent = "Phone: 1800 111 222 333";
  renderPageDiv.appendChild(contactNumber);

  contentDiv.appendChild(renderPageDiv);
};

export default renderContactPage;
