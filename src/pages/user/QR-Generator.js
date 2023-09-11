import React, { useState, useEffect } from "react";

function QRGenerator() {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    // �������� QR �ڵ带 �������� ����
    fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      body: {
        productName: "asd",
        productPrice: 3000,
      },
    }) // ���� ���� ��������Ʈ�� �����ϼ���.
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

export default QRGenerator;