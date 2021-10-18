import {domManip} from "./skeleton";

let createModule = (function() {
    let formQuantity = 0;

    domManip.createButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (formQuantity < 1) {
            // create div for createForm div
            let divForCreateForm = document.createElement('div');
            divForCreateForm.id = 'div-for-create-form';

            // main div for every input
            let createForm = document.createElement('div');
            createForm.id = 'create-form';

            // creating name input
            let nameDiv = document.createElement('div')
            nameDiv.classList.add('create-divs');

            let nameLabel = document.createElement('p');
            nameLabel.textContent = 'name:';
            nameDiv.appendChild(nameLabel);

            let nameInput = document.createElement('input');
            nameInput.setAttribute('type', 'text');
            nameDiv.appendChild(nameInput);

            createForm.appendChild(nameDiv);

            // creating status input
            let statusDiv = document.createElement('div');
            statusDiv.classList.add('create-divs');

            let status = document.createElement('input');
            status.setAttribute('type', 'checkbox');
            status.id = 'status-input';
            statusDiv.appendChild(status);

            let statusLabel = document.createElement('p');
            statusLabel.textContent = 'important';
            statusDiv.appendChild(statusLabel);

            createForm.appendChild(statusDiv);

            // creating data input
            let dateDiv = document.createElement('div');
            dateDiv.classList.add('create-divs');

            let dateLabel = document.createElement('p');
            dateLabel.textContent = 'date:';
            dateDiv.appendChild(dateLabel);

            let dateInput = document.createElement('input');
            dateInput.setAttribute('type', 'date');
            dateDiv.appendChild(dateInput);

            createForm.appendChild(dateDiv);

            // creating description input
            let descrDiv = document.createElement('div');
            descrDiv.classList.add('create-divs');

            let descrLabel = document.createElement('p');
            descrLabel.textContent = 'description';
            descrDiv.appendChild(descrLabel);

            let descrInput = document.createElement('input');
            descrInput.setAttribute('type', 'text');
            descrDiv.appendChild(descrInput);

            createForm.appendChild(descrDiv);

            // add button to close form
            let closeButton = document.createElement('button');
            closeButton.textContent = 'close form';
            closeButton.addEventListener('click', () => {
                while (divForCreateForm.firstChild) {
                    divForCreateForm.removeChild(divForCreateForm.firstChild);
                }
                formQuantity = 0;
            })
            createForm.appendChild(closeButton);

            divForCreateForm.appendChild(createForm);
            domManip.mainDiv.appendChild(divForCreateForm);
        }

        formQuantity++;

    })

    return {

    }

})()

export {
    createModule
}