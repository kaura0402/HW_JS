const counterElement = document.getElementById('counter');
const COUNT_KEY = 'count';
const LAST_RELOAD_KEY = 'lastReload';
const MIN_INTERVAL = 10000;

const currentTime = Date.now();

let currentCount = parseInt(localStorage.getItem(COUNT_KEY)) || 100;
let lastReloadTime = parseInt(localStorage.getItem(LAST_RELOAD_KEY)) || 0;

const timeDifference = currentTime - lastReloadTime;

if (timeDifference >= MIN_INTERVAL) {
    // Якщо минуло більше 10 секунд, додаємо 10 грн
    currentCount += 10;

    // Зберігаємо нові значення в localStorage
    localStorage.setItem(COUNT_KEY, currentCount);
    localStorage.setItem(LAST_RELOAD_KEY, currentTime);
}
counterElement.textContent = currentCount;