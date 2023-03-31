import React from "react";
import withFilter from "./WrapperFunctions/withFilter";
import people from "./data/got.json";

let allPeople = people.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

function People(props) {
  return (
    <>
      <input
        placeholder="Search"
        className="search"
        value={props.searchTerm}
        onChange={props.handleChange}
      />
      <ul className="people">
        {props.filteredData.map((sp) => (
          <SinglePerson {...sp} />
        ))}
      </ul>
    </>
  );
}

function SinglePerson(props) {
  return (
    <li className="card">
      <div className="info">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
      <p>{props.description}</p>
      <a href={props.wikiLink}>Learn More!</a>
    </li>
  );
}

export default withFilter(People, allPeople);
