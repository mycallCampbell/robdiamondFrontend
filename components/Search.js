import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://www.robdiamond-be.co.uk/api/search`
        );
        setDate(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
