function findAuthorById(authors, id) {
  let authorfound = authors.find((author) => author.id === id);
  return authorfound;
}

function findBookById(books, id) {
  let bookfound = books.find((book) => book.id === id);             
  return bookfound;
}

function partitionBooksByBorrowedStatus(books) {
  let holdall = [];

  const booksout = books.filter((book) => book.borrows[0].returned === true );
  const booksin = books.filter((book) => book.borrows[0].returned === false);

  holdall.push(booksin);
  holdall.push(booksout);
  return holdall;
}

function getBorrowersForBook(book, accounts) {
//  let holdacct = [];

  return book.borrows.map((books) => {
   let account = accounts.find((account => account.id === books.id));
      return {...books, ...account};
  }).slice(0,10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
