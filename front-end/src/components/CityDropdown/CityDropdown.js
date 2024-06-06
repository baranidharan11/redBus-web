import React, { useState } from "react";
import "./CityDropdown.css";

const states = [
  { id: "1", name: "Tamil Nadu" },
  { id: "2", name: "Karnataka" },
  { id: "3", name: "Maharashtra" },
];

const citiesByState = {
  1: [
    { id: "11", name: "Chennai" },
    { id: "12", name: "Coimbatore" },
    { id: "13", name: "Madurai" },
  ],
  2: [
    { id: "21", name: "Bangalore" },
    { id: "22", name: "Mysore" },
    { id: "23", name: "Hubli" },
  ],
  3: [
    { id: "31", name: "Mumbai" },
    { id: "32", name: "Pune" },
    { id: "33", name: "Nagpur" },
  ],
};

const CityDropdown = ({ handleChange }) => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const handleStateChange = (stateId) => {
    setSelectedState(stateId);
    setCities(citiesByState[stateId] || []);
    handleChange(stateId);
  };

  return (
    <div className="city-dropdown">
      <label htmlFor="state">State:</label>
      <select id="state" onChange={(e) => handleStateChange(e.target.value)}>
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state.id} value={state.id}>
            {state.name}
          </option>
        ))}
      </select>
      <label htmlFor="city">City:</label>
      <select id="city" onChange={(e) => handleChange(e.target.value)}>
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdown;
