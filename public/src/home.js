function getTotalBooksCount(books) {
   return books.length
}

function getTotalAccountsCount(accounts) {
   return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0;

  books.forEach(book => {
    const bookborrow = book.borrows.filter(borrow => borrow.returned === false);
    total += bookborrow.length;
  });
  return total;
}

function getMostCommonGenres(books) {
  let countGenres = {};

  countGenres = books.reduce((total, findGenre) => {
      let key = total.find((item) => item.name === findGenre["genre"]) 
      if (key) {
        key.count += 1
      } else {
        let entry = {name: findGenre["genre"], count:1}
        total.push(entry)
      }
      return total;
  }, []);
//  console.log(countGenres);
//  return countGenres;

  //   books.forEach(book => {
  //   countGenres[book.genre] = (countGenres[book.genre] || 0) + 1;
  // });

   let sortbooks = countGenres.sort((a,b) => b.count - a.count).slice(0, 5);
   console.log(sortbooks);
   return sortbooks;

  // let topobj = [];

  // sortbooks.forEach((v) => {
  //   let holdobj = {};
  //   holdobj["name"] =  v[1];
  //   holdobj["count"] = v[2];
  //   topobj.push(holdobj);
  // })

  // console.log(topobj);
  // return topobj;
}

function getMostPopularBooks(books) {
  const countpopular = {};

  books.forEach(book => {
    countpopular[book.title] = book.borrows.length;
  });

  let sortpopular = Object.entries(countpopular).sort((a,b) => b[1]-a[1]).slice(0, 5);

  let toppopobj = [];

  sortpopular.forEach((v) => {
    let holdfive = {};
    holdfive["name"] = v[0];
    holdfive["count"] = v[1];
    toppopobj.push(holdfive);
  })

  return toppopobj;
}

function getMostPopularAuthors(books, authors) {
  let countauthor = {};
  let newcount = 0;
  let holdobj = [];
  let holdauthobj = [];

  books.forEach(book => {
    let holdauth = {};
    holdauth["id"] = book.authorId;
    holdauth["count"] = book.borrows.length;
    holdobj.push(holdauth);
  });

    for (let i = 0; i < authors.length; i++ ) {
    for (let j = 0; j < holdobj.length; j++ ) {
       if (authors[i].id === holdobj[j].id) {
         let holdagain = {};
         holdagain["name"] = (authors[i].name.first + " " + authors[i].name.last);
         holdagain["count"] = holdobj[j].count;
         holdauthobj.push(holdagain);
       }
    }
  }

  let sortauthor = holdauthobj.sort((a, b) => b.count - a.count).slice(0, 5);

  return sortauthor;
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
