// Write your code here!
const bodyElement = document.querySelector('body');
bodyElement.querySelector('main').remove();
const newHeader = document.createElement("H1");
document.body.appendChild(newHeader);
newHeader.id = 'victory'
newHeader.innerHTML = 'asds is the champion'