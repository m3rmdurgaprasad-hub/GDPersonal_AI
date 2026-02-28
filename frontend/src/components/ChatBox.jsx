import React, { useState } from "react";
import { summarizeText, analyzeVideo, generateImage } from "../api";

function ChatBox() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSummarize = async () => {
    const res = await summarizeText(input);
    setResponse(res.summary);
  };

  const handleGenerateImage = async () => {
    const res = await generateImage(input);
    setResponse(res.image_url);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSummarize}>Summarize</button>
      <button onClick={handleGenerateImage}>Generate Image</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default ChatBox;
