const counterElement = document.getElementById('counter');
const COUNT_KEY = 'count';
let currentCount = +localStorage.getItem(COUNT_KEY);

currentCount++;

localStorage.setItem(COUNT_KEY, currentCount);

counterElement.textContent = currentCount;
document.appendChild(counterElement)
