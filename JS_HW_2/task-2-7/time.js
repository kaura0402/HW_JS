// – Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).
let time = +prompt('Enter the time >= 00 and <= 59');
if (time >= 0 && time <= 15)
{
    console.log('First part of the hour');
} else if
    (time >= 16 && time <= 30)
{
    console.log('Second part of the hour');
}
else if
(time >= 31 && time <= 45)
{
    console.log('Third part of the hour');
}
else if
(time >= 46 && time <= 59)
{
    console.log('Fourth part of the hour');
}
else {
    console.log('Enter the time >= 00 and <= 59');
}