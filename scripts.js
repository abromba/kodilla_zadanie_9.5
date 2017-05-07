var buttonsElement = document.getElementsByClassName('button');

console.log(buttonsElement);

for (var x = 0; x < buttonsElement.length; x++) {
    alert(buttonsElement[x].innerText);
}