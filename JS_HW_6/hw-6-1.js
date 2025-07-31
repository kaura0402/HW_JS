//=============================================== #dFeorS3m7u
let lenght = (text) => text.length;
//=============================================== #8lld9HMxXWB//=============================================== #dFeorS3m7u
let upperCase = (text) => text.toUpperCase();
// =============================================== #ClDsAm7xba7
let lowerCase = (text) => text.toLowerCase();



let t1 = 'hello world';
let t2 = 'lorem ipsum';
let t3 = 'javascript is cool';
console.log(lenght(t1));
console.log(lenght(t2));
console.log(lenght(t3));

console.log(upperCase(t1));
console.log(upperCase(t2));
console.log(upperCase(t3));

let t4 = 'HELLO WORLD';
let t5 = 'LOREM IPSUM';
let t6 = 'JAVASCRIPT IS COOL';
console.log(lowerCase(t4));
console.log(lowerCase(t5));
console.log(lowerCase(t6));
//=============================================== #0b89BkYZwu
let str = '  dirty string   ';
console.log(str.trim());
//=============================================== #bfoJuse4ZzP
let stringToarray=(str) => str.split(' ');
let str1 = 'Ревуть воли як ясла повні';
console.log(stringToarray(str1));
//=============================================== #Rbr5kEQ
let arr =  [10,8,-7,55,987,-1011,0,1050,0]
let newArr = arr.map(String);
console.log(newArr);
// #5hqyKTfmc================================== #5hqyKTfmc
let sortNums = (array,direction) => {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if (direction ==='descending') {
        return array.sort((a, b) => b - a);

    }
}
let nums = [11,21,3];
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));

// #yo06d74c1C=================================== #yo06d74c1C=

let coursesAndDurationArray= [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(coursesAndDurationArray);
let filtered = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filtered);
coursesAndDurationArray.map((course, index) => {
    let newCourses = {
      id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration
    };
    console.log(newCourses);
})

// #4LJn7zBx=================================== #4LJn7zBx
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
console.log(coursesArray.filter(course =>{
    return course.modules.includes('sass')}));
console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));
//=================================== #bolvdlhP
let suits = ['spade', 'diamond', 'heart', 'club'];
let ranks = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
const cards = [];
suits.forEach(suit => {
    let color;
    if (suit === 'spade' || suit === 'club') {
        color = 'black';
    }
    else if (suit === 'diamond' || suit === 'heart') {
        color = 'red';
    }
    ranks.forEach(rank => {
        cards.push({suit: suit, rank: rank, color: color});
    });
});
console.log(cards);
console.log( cards.filter(card => {
    return card.rank === 'ace' && card.suit === 'spade';
}))
console.log(cards.filter(card => {
    return card.rank === '6' ;
}))
console.log(cards.filter(card => {
    return card.color === 'red';
}))
console.log(cards.filter(card => {
    return card.suit === 'diamond';
}))
console.log(cards.filter(card => {
    return card.suit === 'club' && card.rank !== '6' && card.rank !== '7' && card.rank !== '8' ;
}))
let cardsBySuit = cards.reduce((acc, card) => {
if (card.suit=== 'spade') {
        acc.spades.push(card);
    }
else if (card.suit === 'diamond') {
        acc.diamonds.push(card);
    }
    else if (card.suit === 'heart') {
        acc.hearts.push(card);
    }
    else if (card.suit === 'club') {
        acc.clubs.push(card);
    }
    return acc;}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(cardsBySuit);