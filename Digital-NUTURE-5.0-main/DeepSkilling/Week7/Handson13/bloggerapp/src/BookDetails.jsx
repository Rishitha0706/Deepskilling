import { books } from "./data";

function BookDetails() {
  return (
    <section className="section">
      <h1>Book Details</h1>

      {books.map(book => (
        <div key={book.id}>
          <h4>{book.bname}</h4>
          <p>Price : {book.price}</p>
        </div>
      ))}
    </section>
  );
}

export default BookDetails;