function addToLocalStorage(arrayName, objToAdd) {
    const key = localStorage.getItem(arrayName);
    if (!key) {
        throw new Error('Key must be a non-empty string');
    }
    const array = JSON.parse(key);
    if (typeof array === 'object') {
        array.push(objToAdd);
    }
   localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionList', {});