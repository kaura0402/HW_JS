const objectArray= []
// Створюємо масив об'єктів
for (let i = 0; i < 100; i++) {
    objectArray.push({
        id: i + 1,
        name: `Об'єкт ${i + 1}`,
        description: `Опис для об'єкта номер ${i + 1}`
    });
}
let currentPage = 1;
const itemsPerPage = 10;
const totalPages = Math.ceil(objectArray.length / itemsPerPage);

function displayObjects() {
    const container = document.getElementById('objectsContainer');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const objectsToShow = objectArray.slice(startIndex, endIndex);

    container.innerHTML = '';
    objectsToShow.forEach(obj => {
        const objectCard = document.createElement('div');
        objectCard.className = 'object-card';
        objectCard.innerHTML = `
            <h3>${obj.name}</h3>
            <p>ID: ${obj.id}</p>
            <p>Опис: ${obj.description}</p>
        `;
        container.appendChild(objectCard);
    });
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        displayObjects();
    }
}
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayObjects();
    }
}
document.addEventListener('DOMContentLoaded', function ()  {
    displayObjects();
    document.getElementById('nextButton').addEventListener('click', nextPage);
    document.getElementById('prevButton').addEventListener('click', prevPage);
})
