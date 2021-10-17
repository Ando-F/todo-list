let domManip = (function () {
   'use strict';
    let mainDiv = document.getElementById('content');

    let outerDiv = document.createElement('div');
    outerDiv.classList.add('outer-div-style');

    let insideDivLeft = document.createElement('div');
    insideDivLeft.classList.add('inside-div-left');
    insideDivLeft.textContent = 'Left Div'

    let insideDivRight = document.createElement('div');
    insideDivRight.classList.add('inside-div-right');
    insideDivRight.textContent = 'Right Div'

    mainDiv.appendChild(outerDiv);
    outerDiv.appendChild(insideDivLeft);
    outerDiv.appendChild(insideDivRight);

    return {
     
    }
})()

export {
    domManip
}
