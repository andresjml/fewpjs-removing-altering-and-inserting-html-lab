// Write your code here!
let main = document.querySelector('main');
main.remove();
let newHeader = document.createElement('h1');
newHeader.id="victory";
newHeader.innerHTML='Andres is the champion'
document.body.appendChild(newHeader);