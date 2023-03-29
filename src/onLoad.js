//import banana from './banana.jpg';

const loadContent = () => {
    const content = document.querySelector('#content');
    
    // const image = document.createElement('img');
    // image.src = banana;

    const pageTitle = document.createElement('h1');
        pageTitle.textContent = "Jim's bananas";
        content.appendChild(pageTitle);

    const copy = document.createElement('p');
        copy.textContent = "Providing fresh and potassium rich cuisine in a comfy, stylish environment."
        content.appendChild(copy);

    return content;
}

export default loadContent;