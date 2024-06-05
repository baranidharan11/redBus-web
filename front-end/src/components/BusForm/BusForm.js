import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addBusRequest, updateBusRequest } from "../../redux/bus/action";

const BusForm = ({ addBus, updateBus, bus }) => {
  const [formState, setFormState] = useState({ name: "", details: "" });

  useEffect(() => {
    if (bus) {
      setFormState(bus);
    }
  }, [bus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Details</label>
        <input
          type="text"
          name="details"
          value={formState.details}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{bus ? "Update" : "Create"}</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBus: (bus) => dispatch(addBusRequest(bus)),
  updateBus: (bus) => dispatch(updateBusRequest(bus)),
});

export default connect(null, mapDispatchToProps)(BusForm);
