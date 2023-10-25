import React from "react";
import "./style.css";
const Searchresult = ({ results }) => {
  return (
    <div className="search-result">
      {results.map((result, id) => {
        return (
          <div className="list" key={id}>
            {result.name}
          </div>
        );
      })}
    </div>
  );
};

export default Searchresult;
