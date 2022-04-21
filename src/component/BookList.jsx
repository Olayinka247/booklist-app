import SingleBook from "./SingleBook";

const BookList = ({ books }) => (
  <>
    {books.map((book) => (
      <SingleBook singleBook={book} />
    ))}
  </>
);
export default BookList;
