function findAccountById(accounts, id) {
  let accountfound = accounts.find((account) => account.id === id);
  return accountfound;
}

function sortAccountsByLastName(accounts) {
   accounts.sort((accountA, accountB) =>
     accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1 );
   return accounts;
}

function getTotalNumberOfBorrows(accounts, books) {
  const holdacc = accounts.id;
  let total = 0;

  // const borrowsbyuser = books.borrows.filter(borrow => borrow.id === holdacc);
  // total = borrowsbyuser.reduce((total, borrows => {
  //    total += borrows.length;
  // }))
     

 books.forEach(book => {
   const borrowsbyuser = book.borrows.filter(borrow => borrow.id === holdacc);
   total += borrowsbyuser.length;
 });
 return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id); 
  //get the details of the book including author 
  let bookDetails = booksPossessed.map((detail) => ({ ...detail, author: authors.find((author) => author.id === detail.authorId) }));
  return bookDetails;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
