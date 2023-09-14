import "./App.css";
import KioskQR from "./pages/kiosk/QR-Reader";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./pages/user/menu";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/kiosk/qr-reader" element={<KioskQR />} />
        <Route path="/user/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
