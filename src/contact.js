const renderContactPage = () => {
    const contentDiv = document.querySelector('#content');

    Array.from(contentDiv.childNodes).forEach((child) => {
        contentDiv.removeChild(child);
      });

    const renderPageDiv = document.createElement('div');

    const contactEmail = document.createElement('p');
        contactEmail.textContent = 'bananas@gmeal.com';
        renderPageDiv.appendChild(contactEmail);
    
    const contactNumber = document.createElement('p');
        contactNumber.textContent = '1800 111 222 333';
        renderPageDiv.appendChild(contactNumber);

    contentDiv.appendChild(renderPageDiv);
}

export default renderContactPage;