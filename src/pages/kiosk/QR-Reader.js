import { QrScanner } from "@yudiel/react-qr-scanner";

function QRReader() {
  const verifyToken = (result) => {
    fetch(`http://localhost:8000/api/auth?token=${result}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <QrScanner
      onDecode={(result) => verifyToken(result)}
      onError={(error) => console.log(error?.message)}
    />
  );
}

export default QRReader;
