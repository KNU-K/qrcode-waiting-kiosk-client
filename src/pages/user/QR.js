import React, { useState, useEffect } from "react";
import api from "../../api/api";

function App() {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    // 서버에서 QR 코드를 가져오는 로직
    fetch("http://localhost:8000/api/qr") // 실제 서버 엔드포인트로 변경하세요.
      .then((response) => response.blob())
      .then((blob) => {
        const qrCodeURL = URL.createObjectURL(blob);
        setQrCode(qrCodeURL);
      });
  }, []);

  return (
    <>
      <h1>QR Generater</h1>
      {qrCode && <img src={qrCode} alt="QR Code" />}
    </>
  );
}

export default App;
