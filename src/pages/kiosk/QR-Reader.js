import { QrScanner } from "@yudiel/react-qr-scanner";
import Speak from "../../utils/speak";
function QRReader() {
  const verifyToken = async (result) => {
    await fetch(`https://localhost:8002/api/auth?token=${result}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(async (res) => {
        if (res.state === 200) {
          Speak.speakWelcome();
        } else {
          Speak.speakFail();
          alert("다시 시도해주세요.");
        }
        // 5초 동안 대기
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
