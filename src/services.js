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
