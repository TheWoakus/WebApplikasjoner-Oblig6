import React, { useState } from 'react';

const Search = ({ searchSettings }) => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchSettings(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        id="todo-filter"
        name="todo-filter"
        value="Filter"
        onChange={handleSearch}
        value={search}
      />
    </>
  );
};

export default Search;
