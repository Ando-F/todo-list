let domManip = (function () {
   'use strict';
    let mainDiv = document.getElementById('content');

    // create div for left menu and todos list
    let outerDiv = document.createElement('div');
    outerDiv.classList.add('outer-div-style');

    // creating left menu
    let insideDivLeft = document.createElement('div');
    insideDivLeft.classList.add('inside-div-left');

    let todayDiv = document.createElement('div');
    todayDiv.textContent = 'today';
    todayDiv.classList.add('left-menu-divs');
    insideDivLeft.appendChild(todayDiv);

    let allTodos = document.createElement('div');
    allTodos.textContent = 'all todos';
    allTodos.classList.add('left-menu-divs');
    insideDivLeft.appendChild(allTodos);

    // creating list with todos
    let insideDivRight = document.createElement('div');
    insideDivRight.classList.add('inside-div-right');

    let createButton = document.createElement('div');
    createButton.innerHTML = 'create new task';
    createButton.classList.add('todos');
    insideDivRight.appendChild(createButton);

    // append everything
    mainDiv.appendChild(outerDiv);
    outerDiv.appendChild(insideDivLeft);
    outerDiv.appendChild(insideDivRight);

    return {
         insideDivRight: insideDivRight,
         insideDivLeft: insideDivLeft
    }
})()

export {
    domManip
}
