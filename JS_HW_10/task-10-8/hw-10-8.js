    // Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

    const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Отримуємо значення з інпутів
    const rows = parseInt(document.getElementById('row').value);
    const columns = parseInt(document.getElementById('column').value);
    const cellText = document.getElementById('text').value;

    createTable(rows, columns, cellText);
});

function createTable(rows, columns, cellText) {

    const existingTable = document.querySelector('table');
    if (existingTable) {
        existingTable.remove();
    }

    // Створюємо новий елемент table
    const table = document.createElement('table');
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    table.style.marginTop = '20px';

    // Створюємо рядки та ячейки
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.textContent = cellText;
            cell.style.border = '1px solid black';
            cell.style.padding = '8px';
            cell.style.textAlign = 'center';
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    // Додаємо таблицю до body
    document.body.appendChild(table);
}