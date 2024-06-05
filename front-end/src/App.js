import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./screens/AdminDashboard/AdminDashboard";
import BusForm from "./components/BusForm/BusForm";

function App() {
  return (
    // <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/buses/new" element={<BusForm />} />
        <Route path="/admin/buses/edit/:id" element={<BusForm />} />
      </Routes>
    </Router>
    // </BrowserRouter>
  );
}

export default App;
