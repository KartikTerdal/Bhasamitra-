import React, { useState, useRef } from "react";
import "../ContactPage/ContactPage.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioURL, setAudioURL] = useState("");
  const [transcribedText, setTranscribedText] = useState("");
  const [llmResponse, setLlmResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState("🎙️ Ready to record");
  const REACT_APP_OPENAI_API_KEY = "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";
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  // 🎤 Start Recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        setAudioURL(URL.createObjectURL(blob));
        setRecordingStatus("✅ Voice ready — listen below");
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingStatus("🎙️ Recording in progress...");
    } catch (err) {
      console.error("Microphone error:", err);
      alert("Could not access microphone!");
    }
  };

  // 🛑 Stop Recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // 🎧 Send audio to OpenAI Whisper + LLM
  const handleSendAudio = async () => {
    if (!audioBlob) {
      alert("Please record your message first!");
      return;
    }

    setLoading(true);
    setRecordingStatus("⏳ Sending audio to AI...");

    try {
const formData = new FormData();
formData.append("file", audioBlob, "voice-message.webm"); // no [0]
formData.append("model", "whisper-1");
 
      // 1️⃣ Transcribe with Whisper
      const whisperRes = await fetch("https://api.openai.com/v1/audio/transcriptions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${REACT_APP_OPENAI_API_KEY}`,
        },
        body: formData,
      });

      const whisperData = await whisperRes.json();
      const text = whisperData.text;
      setTranscribedText(text);
      setRecordingStatus("✅ Transcription complete!");

      // 2️⃣ Optional: send transcription to GPT
      const prompt = `Voice message from ${name || "Anonymous"} (${email || "N/A"}) on ${date || "N/A"}: ${text}\n\nProvide a helpful and friendly response.`;

      const gptRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7,
        }),
      });

      const gptData = await gptRes.json();
      const reply = gptData.choices[0].message.content;
      setLlmResponse(reply);
      setRecordingStatus("✅ AI response generated!");
    } catch (error) {
      console.error("Error sending audio:", error);
      alert("Something went wrong. Check console for details.");
      setRecordingStatus("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-section">
      <div className="contact-bg"></div>

      <h1 className="contact-heading">
        <span className="magic-text">Get in Touch</span>
      </h1>

      <p className="contact-subtitle">Your Voice, Our Understanding</p>
      <p className="contact-desc">
        Record your voice, play it back, then AI will transcribe and respond.
      </p>

      <div className="contact-container">
        <div className="form-card">
          <h2 className="form-subheading">Send a Voice Message</h2>

          <div className="contact-form">
            <input
              type="text"
              placeholder="Your name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Your email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="date"
              className="input-field date-field"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            {/* 🎤 Audio Controls */}
            <div className="audio-input input-field" style={{ textAlign: "center" }}>
              {!isRecording ? (
                <button
                  type="button"
                  onClick={startRecording}
                  className="submit-btn"
                  style={{ width: "100%" }}
                >
                  🎙️ Start Recording
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopRecording}
                  className="submit-btn"
                  style={{
                    background: "linear-gradient(90deg, #ff4d4d, #ff8080)",
                    width: "100%",
                  }}
                >
                  ⏹️ Stop Recording
                </button>
              )}

              <p style={{ marginTop: "10px", color: "#555" }}>{recordingStatus}</p>

              {audioURL && (
                <div style={{ marginTop: "12px" }}>
                  <audio controls src={audioURL}></audio>
                </div>
              )}

              {audioBlob && !isRecording && (
                <button
                  className="submit-btn"
                  onClick={handleSendAudio}
                  disabled={loading}
                  style={{ marginTop: "10px" }}
                >
                  {loading ? "Processing..." : "Send to AI"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 📝 AI Outputs */}
      {transcribedText && (
        <div className="form-card" style={{ margin: "60px auto 0" }}>
          <h2 className="form-subheading">🎧 Transcribed Text</h2>
          <p>{transcribedText}</p>
        </div>
      )}

      {llmResponse && (
        <div className="form-card" style={{ margin: "20px auto 0" }}>
          <h2 className="form-subheading">🤖 AI Response</h2>
          <p>{llmResponse}</p>
        </div>
      )}
    </section>
  );
}
