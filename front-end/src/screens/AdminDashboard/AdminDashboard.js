import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBusRequest, fetchBusesRequest } from "../../redux/bus/action";
import "./AdminDashboard.css";

const AdminDashboard = ({ buses, loading, error, fetchBuses, deleteBus }) => {
  useEffect(() => {
    fetchBuses();
  }, [fetchBuses]);

  const handleDelete = (id) => {
    deleteBus(id);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <Link className="add-bus-link" to="/admin/buses/new">
        Add New Bus
      </Link>
      <ul className="bus-list">
        {buses &&
          buses.map((bus) => (
            <li key={bus._id} className="bus-item">
              {bus.name}
              <span className="bus-actions">
                <Link to={`/admin/buses/edit/${bus._id}`} className="edit-link">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(bus._id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
      </ul>
      {/* Pass props to BusForm */}
      {/* <BusForm /> */}
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
