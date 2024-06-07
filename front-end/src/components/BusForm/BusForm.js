import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CityDropdown, { getCityNameById } from "../CityDropdown/CityDropdown";
import { addBusRequest, updateBusRequest } from "../../redux/bus/action";
import "./BusForm.css";
import { useLocation, useNavigate } from "react-router-dom";

const BusForm = ({ addBus, updateBus, bus }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const editBus = location.state ? location.state.bus : null;

  const [formState, setFormState] = useState({
    busTransportProvider: "",
    busName: "",
    owner: "",
    conductor: "",
    cleaner: "",
    ownerMobile: "",
    conductorMobile: "",
    cleanerMobile: "",
    totalSeats: "",
    bookedSeats: [],
    departureTime: "",
    arrivingTime: "",
    fromCity: "",
    toCity: "",
  });

  useEffect(() => {
    if (editBus) {
      setFormState({
        busTransportProvider: editBus.busTransportProvider,
        busName: editBus.busName,
        owner: editBus.owner,
        conductor: editBus.conductor,
        cleaner: editBus.cleaner,
        ownerMobile: editBus.ownerMobile,
        conductorMobile: editBus.conductorMobile,
        cleanerMobile: editBus.cleanerMobile,
        totalSeats: editBus.totalSeats,
        bookedSeats: editBus.bookedSeats,
        departureTime: editBus.departureTime,
        arrivingTime: editBus.arrivingTime,
        fromCity: getCityNameById(editBus.fromCity),
        toCity: getCityNameById(editBus.toCity),
      });
    }
  }, [editBus]);

  const handleChange = (name, value) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editBus) {
      updateBus({ ...formState, _id: editBus._id });
    } else {
      addBus(formState);
    }
    navigate("/admin");
  };

  const handleReset = () => {
    setFormState({
      busTransportProvider: "",
      busName: "",
      owner: "",
      conductor: "",
      cleaner: "",
      ownerMobile: "",
      conductorMobile: "",
      cleanerMobile: "",
      totalSeats: "",
      bookedSeats: [],
      departureTime: "",
      arrivingTime: "",
      fromCity: "",
      toCity: "",
    });
  };

  return (
    <form className="bus-form" onSubmit={handleSubmit}>
      <button onClick={() => navigate("/admin")} className="back-button">
        Back
      </button>
      <div className="form-group">
        <label htmlFor="busTransportProvider">Bus Transport Provider</label>
        <input
          type="text"
          id="busTransportProvider"
          name="busTransportProvider"
          value={formState.busTransportProvider}
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
        <label htmlFor="totalSeats">Total Seats</label>
        <input
          type="number"
          id="totalSeats"
          name="totalSeats"
          value={formState.totalSeats}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      {/* Assuming bookedSeats is not editable in the form */}
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
        <label htmlFor="arrivingTime">Arriving Time</label>
        <input
          type="text"
          id="arrivingTime"
          name="arrivingTime"
          value={formState.arrivingTime}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fromCity">From City</label>
        <CityDropdown
          state={formState.state}
          handleChange={(value) => handleChange("fromCity", value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="toCity">To City</label>
        <CityDropdown
          state={formState.state}
          handleChange={(value) => handleChange("toCity", value)}
        />
      </div>
      <button type="submit" className="btn-submit">
        {bus ? "Update" : "Create"}
      </button>
      <button type="button" onClick={handleReset} className="btn-reset">
        Reset
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBus: (bus) => dispatch(addBusRequest(bus)),
  updateBus: (bus) => dispatch(updateBusRequest(bus)),
});

export default connect(null, mapDispatchToProps)(BusForm);
