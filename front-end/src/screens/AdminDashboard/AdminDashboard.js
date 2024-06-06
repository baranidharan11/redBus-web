import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteBusRequest, fetchBusesRequest } from "../../redux/bus/action";
import "./AdminDashboard.css"; // Import CSS file for styling

const AdminDashboard = ({ buses, loading, error, fetchBuses, deleteBus }) => {
  const navigate = useNavigate();

  useEffect(() => {
    fetchBuses();
  }, [fetchBuses]);

  const handleDelete = (id) => {
    deleteBus(id);
  };

  const handleEdit = (bus) => {
    navigate(`/admin/buses/edit/${bus._id}`, { state: { bus } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <Link to="/admin/buses/new" className="add-bus-link">
        Add New Bus
      </Link>
      <ul className="bus-list">
        {buses.map((bus) => (
          <li key={bus._id} className="bus-item">
            {bus.busNumber} - {bus.from} to {bus.to}
            <button onClick={() => handleEdit(bus)} className="edit-button">
              Edit
            </button>
            <button
              onClick={() => handleDelete(bus._id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  buses: state.buses.buses,
  loading: state.buses.loading,
  error: state.buses.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBuses: () => dispatch(fetchBusesRequest()),
  deleteBus: (id) => dispatch(deleteBusRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
