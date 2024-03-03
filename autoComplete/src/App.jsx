import React, { useState, useEffect } from 'react';
import data from "./components/countryData.json";
import "./App.css"

function App() {
  const [place, setPlace] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [escapePressed, setEscapePressed] = useState(false);

  const findPlace = (e) => {
    let value = e.target.value;
    setPlace(value);

    let suggestion = data.filter((resource) =>
      resource.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(suggestion);
  };

  const displayList = () => {
    return suggestions.map((suggestion, index) => (
      <div key={index}>{suggestion.name}</div>
    ));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPlace('');
        setSuggestions([]); 
        setEscapePressed(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  useEffect(() => {
    if (escapePressed) {
      setEscapePressed(false);
    }
  }, [escapePressed]);

  return (
    <div class="app">
      <input
        type="text"
        class="input"
        onChange={findPlace}
        placeholder="Enter country name"
      />
      <button>Search</button>
      {displayList()}
    </div>
  );
}         

export default App