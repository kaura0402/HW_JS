// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом.
const form = document.createElement('form');

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Введіть ім\'я';
nameInput.style.margin = '5px';

const surnameInput = document.createElement('input');
surnameInput.type = 'text';
surnameInput.placeholder = 'Введіть прізвище';
surnameInput.style.margin = '5px';

const ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.placeholder = 'Введіть вік';
ageInput.style.margin = '5px';

const submitButton = document.createElement('button');
submitButton.type = 'button';
submitButton.textContent = 'Створити об\'єкт';
submitButton.style.margin = '10px';
submitButton.style.backgroundColor = '#4CAF50';

    form.appendChild(nameInput);
    form.appendChild(surnameInput);
    form.appendChild(ageInput);
    form.appendChild(submitButton);

const resultDiv = document.createElement('div');

submitButton.addEventListener('click', () => {
    const name = nameInput.value;
    const surname = surnameInput.value;
    const age = ageInput.value;

    const person = {
        name: name,
        surname: surname,
        age: age
    };
const h3 = document.createElement('h3');
h3.textContent = 'Створений об\'єкт';

const p1 = document.createElement('p');
p1.textContent = `Ім'я: ${person.name}`;

const p2 = document.createElement('p');
p2.textContent = `Прізвище: ${person.surname}`;

const p3 = document.createElement('p');
p3.textContent = `Вік: ${person.age}`;

resultDiv.appendChild(h3);
resultDiv.appendChild(p1);
resultDiv.appendChild(p2);
resultDiv.appendChild(p3);
});

document.body.appendChild(form);
document.body.appendChild(resultDiv);