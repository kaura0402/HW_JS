const textElement = document.getElementById('text');

const buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', () => {
    if (textElement) {
        textElement.remove();
    }
})
