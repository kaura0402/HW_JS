// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
const input = document.createElement('input');
input.type = 'number';
input.placeholder = 'Введіть ваш вік';
const button = document.createElement('button');
button.textContent = 'Перевірити вік';
const message = document.createElement('p');

button.addEventListener('click', () => {
     if (input.value < 18) {
        message.textContent = 'Вам менше 18 років.';
    } else {
        message.textContent = 'Вам 18 років або більше.';
    }
});

document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(message);