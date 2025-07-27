console.log('---------------#reLkOkTB29Q----------<br>');
document.write('---------------#reLkOkTB29Q----------<br>');
let books = [
    {
        title: 'book1',
        pages: 160,
        authors: ['author1'],
        genre: ['fantasy']
    },
    {
        title: 'book222',
        pages: 200,
        authors: ['author2', 'author3'],
        genre: ['fantasy', 'history1', 'history'],
    },
    {
        title: 'book33',
        pages: 400,
        authors: ['author3', 'author4'],
        genre: ['fantasy'],
    },
    {
        title: 'book444',
        pages: 400,
        authors: ['author4'],
        genre: ['fantasy', 'history']
    },
];
let maxPages = 0;
let countGenre = 0;
let countTitle = 0;
books.forEach((book) => {
    if (book.pages > maxPages) {
        maxPages = book.pages;
    }})
books.forEach((book) => {
    if (book.pages === maxPages) {
        console.log('Назва книги з найбільшою кількістю сторінок '+ book.pages + ' - ' + book.title);
    }
})
books.forEach((book) => {
    if (book.genre.length > countGenre) {
        countGenre = book.genre.length;
    }
})
books.forEach((book) => {
    if (book.genre.length === countGenre) {
        console.log('Книга з найбільшою кількістю жанрів - ' + book.title + ' має жанри: ' + book.genre);
    }
})
books.forEach((book) => {
        if (book.title.length > countTitle) {
            countTitle = book.title.length;
        }
    })
books.forEach((book) => {
    if (book.title.length === countTitle) {
        console.log('Книга з найдовшою назвою - ' + book.title);
    }
})
books.forEach((book) => {
    if (book.authors.length === 2) {
        console.log('Книга з двома авторами - ' + book.title + ' має авторів: ' + book.authors);

    }
})
books.forEach((book) => {
    if (book.authors.length === 1) {
        console.log('Книга з одним автором - ' + book.title + ' має автора: ' + book.authors);
    }
})