import { useState } from "react";

const Searchbar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search for your type"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="button" className="btn btn-primary button">
        search
      </button>
    </div>
  );
};

export default Searchbar;
