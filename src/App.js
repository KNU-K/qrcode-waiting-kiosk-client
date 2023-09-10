import "./App.css";
import KioskQR from "./pages/kiosk/QR";
import UserQR from "./pages/user/QR";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/kiosk/qr" element={<KioskQR />} />
        <Route path="/user/qr" element={<UserQR />} />
      </Routes>
    </Router>
  );
}

export default App;
