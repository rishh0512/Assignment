import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Metrix" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/Orders" element={<Home />} />
        <Route path="/Customers" element={<Home />} />
        <Route path="/Inventory" element={<Home />} />
        <Route path="/Conversations" element={<Home />} />
        <Route path="/Settings" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/upgrade" element={<Home />} />
        <Route path="/logout" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
