// – У змінній day дано якесь число від 1 до 31. Потрібно визначити,
//     у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Enter the day >= 1 and <= 31');
if (day >= 1 && day <= 10)
{
    console.log('First dekada');
} else if
(day >= 11 && day <= 20)
{
    console.log('Second dekada');
}
else if
(day >= 21 && day <= 31)
{
    console.log('Third dekada');
}
else {
    console.log('Enter the day >= 1 and <= 31');
}