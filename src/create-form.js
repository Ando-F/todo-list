import {domManip} from "./skeleton";
import {createTask} from "./create-task";

let createModule = (function() {
    let formQuantity = 0;

    // name input
    let nameInput = document.createElement('input');
    nameInput.id = 'name-input';
    nameInput.setAttribute('type', 'text');

    // status input
    let status = document.createElement('input');
    status.setAttribute('type', 'checkbox');
    status.checked = true;
    status.setAttribute('value', 'important');
    status.addEventListener('click', () => {
        if (status.checked) {
            status.setAttribute('value', 'important');
        } else {
            status.setAttribute('value', '');
        }
    })
    status.id = 'status-input';

    // date input
    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');

    //description input
    let descrInput = document.createElement('input');
    descrInput.setAttribute('type', 'text');

    // create div for createForm div
    const divForCreateForm = document.createElement('div');
    divForCreateForm.id = 'div-for-create-form';

    function clearTasksDivs() {
        while (domManip.divForTasks.firstChild) {
            domManip.divForTasks.removeChild(domManip.divForTasks.firstChild);
        }
    }

    function clearAndCreate() {
        clearTasksDivs();
        createTask.workWithTasks();

        // close form on button click
        while (divForCreateForm.firstChild) {
            divForCreateForm.removeChild(divForCreateForm.firstChild);
        }
        formQuantity = 0;
    }

    domManip.createButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (formQuantity < 1) {
            // main div for every input
            const createForm = document.createElement('div');
            createForm.id = 'create-form';

            // creating name input
            const nameDiv = document.createElement('div')
            nameDiv.classList.add('create-divs');

            const nameLabel = document.createElement('p');
            nameLabel.textContent = 'name:';
            nameDiv.appendChild(nameLabel);

            nameDiv.appendChild(nameInput);

            createForm.appendChild(nameDiv);

            // creating status input
            const statusDiv = document.createElement('div');
            statusDiv.classList.add('create-divs');

            statusDiv.appendChild(status);

            const statusLabel = document.createElement('p');
            statusLabel.textContent = 'important';
            statusDiv.appendChild(statusLabel);

            createForm.appendChild(statusDiv);

            // creating data input
            const dateDiv = document.createElement('div');
            dateDiv.classList.add('create-divs');

            const dateLabel = document.createElement('p');
            dateLabel.textContent = 'date:';
            dateDiv.appendChild(dateLabel);

            dateDiv.appendChild(dateInput);

            createForm.appendChild(dateDiv);

            // creating description input
            const descrDiv = document.createElement('div');
            descrDiv.classList.add('create-divs');

            const descrLabel = document.createElement('p');
            descrLabel.textContent = 'description';
            descrDiv.appendChild(descrLabel);

            descrDiv.appendChild(descrInput);

            createForm.appendChild(descrDiv);

            // add div for buttons
            const divForButtons = document.createElement('div');
            divForButtons.id = 'div-for-buttons';

            // add button to create task
            const createButton = document.createElement('button');
            createButton.textContent = 'create new task';
            createButton.addEventListener('click', () => {
                clearAndCreate();
            })

            divForButtons.appendChild(createButton);

            // add button to close form
            const closeButton = document.createElement('button');
            closeButton.textContent = 'close form';
            closeButton.addEventListener('click', () => {
                while (divForCreateForm.firstChild) {
                    divForCreateForm.removeChild(divForCreateForm.firstChild);
                }
                formQuantity = 0;
            })
            divForButtons.appendChild(closeButton);

            createForm.appendChild(divForButtons);

            divForCreateForm.appendChild(createForm);
            domManip.mainDiv.appendChild(divForCreateForm);
        }

        formQuantity++;

    })

    return {
        nameInput: nameInput,
        status: status,
        dateInput: dateInput,
        descrInput: descrInput,

        clearAndCreate: clearAndCreate,
        clearTasksDivs: clearTasksDivs

    }

})()

export {
    createModule
}