import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CityDropdown from "../CityDropdown/CityDropdown";
import { addBusRequest, updateBusRequest } from "../../redux/bus/action";
import "./BusForm.css";

const BusForm = ({ addBus, updateBus, bus }) => {
  const [formState, setFormState] = useState({
    busProvider: "",
    busName: "",
    owner: "",
    conductor: "",
    cleaner: "",
    providerMobile: "",
    ownerMobile: "",
    conductorMobile: "",
    cleanerMobile: "",
    departureTime: "",
    arrivalTime: "",
    state: "",
    city: "",
  });

  useEffect(() => {
    if (bus) {
      setFormState(bus);
    }
  }, [bus]);

  const handleChange = (name, value) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bus) {
      updateBus({ ...formState, _id: bus._id });
    } else {
      addBus(formState);
    }
    // Optionally add navigation or reset form state
  };

  return (
    <form className="bus-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="busProvider">Bus Provider</label>
        <input
          type="text"
          id="busProvider"
          name="busProvider"
          value={formState.busProvider}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="busName">Bus Name</label>
        <input
          type="text"
          id="busName"
          name="busName"
          value={formState.busName}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="owner">Owner</label>
        <input
          type="text"
          id="owner"
          name="owner"
          value={formState.owner}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="conductor">Conductor</label>
        <input
          type="text"
          id="conductor"
          name="conductor"
          value={formState.conductor}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cleaner">Cleaner</label>
        <input
          type="text"
          id="cleaner"
          name="cleaner"
          value={formState.cleaner}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="providerMobile">Provider Mobile</label>
        <input
          type="text"
          id="providerMobile"
          name="providerMobile"
          value={formState.providerMobile}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="ownerMobile">Owner Mobile</label>
        <input
          type="text"
          id="ownerMobile"
          name="ownerMobile"
          value={formState.ownerMobile}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="conductorMobile">Conductor Mobile</label>
        <input
          type="text"
          id="conductorMobile"
          name="conductorMobile"
          value={formState.conductorMobile}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cleanerMobile">Cleaner Mobile</label>
        <input
          type="text"
          id="cleanerMobile"
          name="cleanerMobile"
          value={formState.cleanerMobile}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="departureTime">Departure Time</label>
        <input
          type="text"
          id="departureTime"
          name="departureTime"
          value={formState.departureTime}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="arrivalTime">Arrival Time</label>
        <input
          type="text"
          id="arrivalTime"
          name="arrivalTime"
          value={formState.arrivalTime}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <CityDropdown
          state={formState.state}
          handleChange={(value) => handleChange("state", value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <CityDropdown
          state={formState.state}
          handleChange={(value) => handleChange("city", value)}
        />
      </div>
      <button type="submit" className="btn-submit">
        {bus ? "Update" : "Create"}
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBus: (bus) => dispatch(addBusRequest(bus)),
  updateBus: (bus) => dispatch(updateBusRequest(bus)),
});

export default connect(null, mapDispatchToProps)(BusForm);
