import React from "react";

export default function FilterMap() {
  const books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
    { id: 3, title: "Book 3", author: "Author 3" },
  ];
  return (
    <div>
      <h1>Using map to loop through the books array</h1>
      <ul>
        {books.map((book) => (
          <li key={books.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>

      <h2>Filter + Map</h2>
      <ul>
        {books
          .filter((book) => book.id > 2)
          .map((book) => (
            <li key={books.id}>
              {book.title} by {book.author}
            </li>
          ))}
      </ul>
    </div>
  );
}
