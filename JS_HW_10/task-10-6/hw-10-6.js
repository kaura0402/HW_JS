// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
//     При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
const kg = document.getElementById('kg');
const pounds = document.getElementById('pounds');
kg.onkeyup = function() {
    const kgValue = parseInt(kg.value);
    if (kgValue) {
        const poundsValue = (kgValue * 2.20462).toFixed(2);
        pounds.textContent = poundsValue;
    } else {
        pounds.value = '';
    }
}