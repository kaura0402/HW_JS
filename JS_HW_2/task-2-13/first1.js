let first5 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}];
first5.forEach(cour => {
    if (cour.monthDuration > 5) {
        console.log(cour.title + ': Супер');
    }
});

for (let user of first5) {
    if (user.monthDuration > 5) {
        console.log(user.title + ': Супер');
    }
}

for (let i = 0; i < first5.length; i++) {
    // if (first5[i].monthDuration > 5)
    // {
       document.write('<h3>' + first5[i].title +' : ' + first5[i].monthDuration + '</h3>');
    // }
}
