/*************************** 
 NEW YORK TIMES API
****************************/
const nyt_apiKey = "IoNgBtPcB2BAFBogGs0w6VxskM9amKDP";

export const fetchBooks = () => {
  return fetch(
    `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${nyt_apiKey}`
  )
    .then(response => response.json())
    .catch(console.log);
};

export const fetchBooksByDate = date => {
  if (!date) return fetchBooks();

  const dateString = dateToString(date);
  return fetch(
    `https://api.nytimes.com/svc/books/v3/lists/${dateString}/hardcover-fiction.json?api-key=${nyt_apiKey}`
  )
    .then(response => response.json())
    .catch(console.log);
};

const dateToString = date => {
  const year = date.getFullYear();
  // increment month by one because getMonth() starts from zero
  const month =
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  return `${year}-${month}-${day}`;
};

/*************************** 
 GOOGLE BOOKS API
****************************/
const google_apiKey = "AIzaSyB9wQyJ2N2x9z15nzvO5g-9o-eV_ZLkOkI";

export const searchForBook = search => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&key=${google_apiKey}`
  )
    .then(response => response.json())
    .then(data =>
      data.items.map(book => ({
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        author:
          book.volumeInfo.authors === undefined
            ? ""
            : book.volumeInfo.authors.join(", "),
        book_image:
          book.volumeInfo.imageLinks === undefined
            ? null
            : book.volumeInfo.imageLinks.thumbnail,
        publisher: book.volumeInfo.publisher,
        primary_isbn13:
          book.volumeInfo.industryIdentifiers === undefined
            ? ""
            : book.volumeInfo.industryIdentifiers[0].identifier
      }))
    )
    .then(books => books.filter(hasImage))
    .catch(console.log);
};

function hasImage(book) {
  return book.book_image !== null;
}
