import React from 'react';

function SearchBar() {
  return (
    <div className="flex items-center w-full bg-white shadow-md p-3 rounded-md">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-md px-4 py-2 w-full mr-4"
      />
      <select className="border border-gray-300 rounded-md px-4 py-2">
        <option value="recent">Recent</option>
        <option value="oldest">Oldest</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default SearchBar;