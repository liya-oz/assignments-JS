//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  const divBookList = document.getElementById('bookList');
  const bookList = document.createElement('ul');

  const bookCovers = {
    'The Design of Everyday Things': './assets/the_design_of_everyday_things.jpg',
    'The Most Human Human': './assets/the_most_human_human.jpg',
    'The Pragmatic Programmer': './assets/the_pragmatic_programmer.jpg',
  };

  divBookList.appendChild(bookList);

  books.forEach((book) => {
    const bookElement = document.createElement('li');
    const bookTitle = document.createElement('p');

    bookTitle.textContent = `${book.title} written by ${book.author}`;
    bookElement.appendChild(bookTitle);

    const imgBook = document.createElement('img');
    imgBook.src = bookCovers[book.title];
    imgBook.alt = `${book.title}`;

    book.alreadyRead ? (bookElement.style.backgroundColor = 'green') : (bookElement.style.backgroundColor = 'red');

    bookElement.appendChild(imgBook);
    bookList.appendChild(bookElement);
  });

  return bookList;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const bookElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(bookElement);
}

window.addEventListener('load', main);
