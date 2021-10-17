import {domManip} from "./skeleton";

let createModule = (function() {
    domManip.createButton.addEventListener('click', (e) => {
        e.preventDefault();

        // creating name input
        let createForm = document.createElement('div');
        createForm.id = 'create-form';

        let nameDiv = document.createElement('div')

        let nameLabel = document.createElement('p');
        nameLabel.textContent = 'name:';

        let nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');

        nameDiv.appendChild(nameLabel);
        nameDiv.appendChild(nameInput);
        createForm.appendChild(nameDiv);
        domManip.mainDiv.appendChild(createForm);
    })

    return {

    }

})()

export {
    createModule
}