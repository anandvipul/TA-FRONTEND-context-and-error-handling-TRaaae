import React from "react";
import { Link, withRouter } from "react-router-dom";
import articles from "./data/articles.json";
import withFilter from "./WrapperFunctions/withFilter";

function Articles(props) {
  return (
    <>
      <input
        placeholder="Search"
        className="search"
        value={props.searchTerm}
        onChange={props.handleChange}
      />
      <ul className="articles">
        {props.filteredData.map((article) => (
          <li>
            <Link to={"articles/" + article.slug}>
              <h3>{article.title}</h3>
            </Link>
            <small>{article.author}</small>
          </li>
        ))}
      </ul>
    </>
  );
}

export default withFilter(withRouter(Articles), articles);
