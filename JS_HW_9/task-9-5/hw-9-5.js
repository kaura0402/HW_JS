let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
for (let i = 0; i < coursesArray.length; i++) {
    const course = coursesArray[i];
    const courseBlock = document.createElement('div');
    courseBlock.className = 'course-block';
    courseBlock.style.border = '1px solid black';


    const titleBlock = document.createElement('h1');
    titleBlock.className = 'course-title';
    titleBlock.innerText = course.title;
    titleBlock.style.border = '1px solid black';
    titleBlock.style.margin = '5px';

    const durationBlock = document.createElement('div');
    durationBlock.className = 'course-duration';
    durationBlock.style.display = 'flex';
    durationBlock.style.alignItems = 'center';
    durationBlock.style.justifyItems = 'space-between';
    durationBlock.style.flexDirection = 'row';

    const durationText = document.createElement('p');
    durationText.innerText = `Duration: ${course.monthDuration} months`;
    durationText.style.border = '1px solid black';
    durationText.style.margin= '5px';

    const durationHours = document.createElement('p');
    durationHours.innerText = `Hours: ${course.hourDuration}`;
    durationHours.style.border = '1px solid black';
    durationHours.style.margin = '5px';
    durationHours.style.paddingInlineEnd = '150px';

    durationBlock.appendChild(durationText);
    durationBlock.appendChild(durationHours);


// , ${course.hourDuration} hours
    const modulesList = document.createElement('ul');
    modulesList.className = 'course-modules';
    modulesList.style.border = '1px solid black';
    modulesList.style.margin = '5px';
    for (let j = 0; j < course.modules.length; j++) {
        const moduleItem = document.createElement('li');
        moduleItem.innerText = course.modules[j];
        modulesList.appendChild(moduleItem);
        moduleItem.style.border = '1px solid black';
        moduleItem.style.margin = '5px';
    }

    courseBlock.appendChild(titleBlock);
    courseBlock.appendChild(durationBlock);
    courseBlock.appendChild(modulesList);

    document.body.appendChild(courseBlock);
}
