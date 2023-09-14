class Speak {
  static speakWelcome() {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance("통과");
      synth.speak(utterance);
    } else {
      alert("err");
    }
    return;
  }
  static speakFail() {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance("불일치");
      synth.speak(utterance);
    } else {
      alert("err");
    }
    return;
  }
}
export default Speak;
