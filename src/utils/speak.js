class Speak {
  static speakWelcome() {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance("���");
      synth.speak(utterance);
    } else {
      alert("err");
    }
    return;
  }
  static speakFail() {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance("����ġ");
      synth.speak(utterance);
    } else {
      alert("err");
    }
    return;
  }
}
export default Speak;
