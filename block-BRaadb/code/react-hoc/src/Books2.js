import withFilter from "./WrapperFunctions/withFilter";
import books from "./data/books.json";

function Books(props) {
  return (
    <div className="page">
      <input
        placeholder="Search"
        className="search"
        value={props.searchTerm}
        onChange={props.handleChange}
      />
      <ul className="archive">
        {props.filteredData.map((book) => (
          <Book {...book} />
        ))}
      </ul>
    </div>
  );
}

function Book(props) {
  return (
    <li className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        Author:<span>{props.author}</span>
      </p>
      <a href={props.website}>
        <button>Buy Now</button>
      </a>
    </li>
  );
}

export default withFilter(Books, books);
