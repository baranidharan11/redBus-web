import React, { useState } from "react";
import "./CityDropdown.css";

const states = [
  { id: "1", name: "Tamil Nadu" },
  { id: "2", name: "Karnataka" },
  { id: "3", name: "Maharashtra" },
  { id: "4", name: "Uttar Pradesh" },
  { id: "5", name: "Gujarat" },
  { id: "6", name: "Rajasthan" },
  { id: "7", name: "West Bengal" },
  { id: "8", name: "Andhra Pradesh" },
  { id: "9", name: "Telangana" },
  { id: "10", name: "Kerala" },
];

const citiesByState = {
  1: [
    { id: "11", name: "Chennai" },
    { id: "12", name: "Coimbatore" },
    { id: "13", name: "Madurai" },
    { id: "14", name: "Trichy" },
    { id: "15", name: "Salem" },
  ],
  2: [
    { id: "21", name: "Bengaluru" },
    { id: "22", name: "Mysuru" },
    { id: "23", name: "Hubli-Dharwad" },
    { id: "24", name: "Mangaluru" },
    { id: "25", name: "Belgaum" },
  ],
  3: [
    { id: "31", name: "Mumbai" },
    { id: "32", name: "Pune" },
    { id: "33", name: "Nagpur" },
    { id: "34", name: "Nashik" },
    { id: "35", name: "Aurangabad" },
  ],
  4: [
    { id: "41", name: "Lucknow" },
    { id: "42", name: "Kanpur" },
    { id: "43", name: "Agra" },
    { id: "44", name: "Varanasi" },
    { id: "45", name: "Allahabad" },
  ],
  5: [
    { id: "51", name: "Ahmedabad" },
    { id: "52", name: "Surat" },
    { id: "53", name: "Vadodara" },
    { id: "54", name: "Rajkot" },
    { id: "55", name: "Bhavnagar" },
  ],
  6: [
    { id: "61", name: "Jaipur" },
    { id: "62", name: "Jodhpur" },
    { id: "63", name: "Udaipur" },
    { id: "64", name: "Ajmer" },
    { id: "65", name: "Bikaner" },
  ],
  7: [
    { id: "71", name: "Kolkata" },
    { id: "72", name: "Asansol" },
    { id: "73", name: "Siliguri" },
    { id: "74", name: "Durgapur" },
    { id: "75", name: "Kharagpur" },
  ],
  8: [
    { id: "81", name: "Visakhapatnam" },
    { id: "82", name: "Vijayawada" },
    { id: "83", name: "Guntur" },
    { id: "84", name: "Nellore" },
    { id: "85", name: "Kurnool" },
  ],
  9: [
    { id: "91", name: "Hyderabad" },
    { id: "92", name: "Warangal" },
    { id: "93", name: "Nizamabad" },
    { id: "94", name: "Karimnagar" },
    { id: "95", name: "Khammam" },
  ],
  10: [
    { id: "101", name: "Thiruvananthapuram" },
    { id: "102", name: "Kochi" },
    { id: "103", name: "Kozhikode" },
    { id: "104", name: "Thrissur" },
    { id: "105", name: "Kollam" },
  ],
};

const getCityNameById = (cityId) => {
  for (const stateId in citiesByState) {
    const cities = citiesByState[stateId];
    const city = cities.find((city) => city.id === cityId);
    if (city) {
      return city.name;
    }
  }
  return "";
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
export { getCityNameById };
