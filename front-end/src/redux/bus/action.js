export const fetchBusesRequest = () => ({ type: "FETCH_BUSES_REQUEST" });
export const addBusRequest = (bus) => ({
  type: "ADD_BUS_REQUEST",
  payload: bus,
});
export const updateBusRequest = (bus) => ({
  type: "UPDATE_BUS_REQUEST",
  payload: bus,
});
export const deleteBusRequest = (id) => ({
  type: "DELETE_BUS_REQUEST",
  payload: id,
});
