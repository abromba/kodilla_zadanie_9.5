var buttonElement = document.getElementsByClassName('button');

console.log(buttonElement);

for (var x = 0; x < buttonElement.length; x++) {
    alert(buttonElement[x].innerText);
}