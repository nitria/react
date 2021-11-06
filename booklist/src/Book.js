import React from "react";

const Book = ({ img, title, author, children }) => {
  const showAuthor = () => {
    alert(author);
  };

  return (
    <article className="book">
      <img src={img} alt="one piece" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={showAuthor}>
        click me
      </button>
    </article>
  );
};
export default Book;
