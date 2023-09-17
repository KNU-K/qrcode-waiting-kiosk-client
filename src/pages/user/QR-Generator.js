import React, { useState, useEffect } from "react";

function QRGenerator() {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    // �������� QR �ڵ带 �������� ����
    fetch("https://192.168.45.61:8002/api/auth/register", {
      method: "POST",
      headers: {
        Authorization: "f30749878ed92d14ce7583d48a779fd4",
      },
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
