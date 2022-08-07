import React, { useState } from "react";

import "../styles/Search.css";

export default function Search({ searchCity }) {
  const [currentCity, setCurrentCity] = useState("Porto");

  function handleInputChange(event) {
    setCurrentCity(event.target.value);
  }

  function handleButtonClick() {
    if (currentCity.trim() === "") return;
    searchCity(currentCity);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") handleButtonClick();
  }

  return (
    <div className="Search">
      <label className="Search_label">
        <input
          className="Search_input"
          value={currentCity}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </label>
      <button className="Search_button" onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
}
