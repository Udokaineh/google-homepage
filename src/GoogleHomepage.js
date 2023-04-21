import React, { useState } from 'react';

function GoogleHomepage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && searchTerm) {
      setSearchHistory([...searchHistory, searchTerm]);
      setSearchTerm('');
    }
  }

  return (
    <div>
      <input className="input" type="text" value={searchTerm} onChange={handleInputChange} onKeyPress={handleKeyPress} />
      <ul>
        {searchHistory.map((term, index) => <li className="searchHistory" key={index}>{term}</li>)}
      </ul>
    </div>
  );
}

export default GoogleHomepage;