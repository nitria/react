import React from "react";
import ReactDOM from "react-dom";
//CSS//
import "./index.css";

//JS//
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
