import React from 'react'

const SearchBar = ({ searchItem, onSearchChange }) => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Items:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchItem}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
