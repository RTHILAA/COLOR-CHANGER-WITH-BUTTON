let buttons = document.querySelectorAll('button');
let body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        body.style.backgroundColor = button.id;
    });
});