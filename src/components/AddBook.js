import React from 'react';

const AddBook = () => (
  <>
    <div className="add-book-container">
      <h2>Add Book</h2>
      <form action="#" method="post">
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button type="button">Add Book</button>
      </form>
    </div>
  </>
);

export default AddBook;
