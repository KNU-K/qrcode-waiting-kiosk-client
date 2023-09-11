import "./App.css";
import KioskQR from "./pages/kiosk/QR-Reader";
import UserQR from "./pages/user/QR-Generator";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Payment from "./pages/user/pay";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/kiosk/qr-reader" element={<KioskQR />} />
        <Route path="/user/qr-generator" element={<UserQR />} />
        <Route path="/user/pay" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
