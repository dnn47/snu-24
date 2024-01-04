import React, { useState } from "react";
import translateText from "../utils/GoogleTranslate";

function Translate() {
  const [inputText, setInputText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("es"); // Default: Spanish
  const [translatedText, setTranslatedText] = useState(""); // State to hold translated text

  const handleTranslate = async () => {
    if (inputText) {
      const text = await translateText(inputText, targetLanguage);
      setTranslatedText(text); // Update translatedText state
    }
  };

  return (
    <div className="container mt-5">
      <label htmlFor="inputText" className="form-label">
        Input Text
      </label>
      <input
        type="text"
        id="inputText"
        className="form-control"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <label htmlFor="targetLanguage" className="form-label mt-3">
        Target Language
      </label>
      <select
        id="targetLanguage"
        className="form-select"
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>

      <button className="btn btn-primary mt-3" onClick={handleTranslate}>
        Translate
      </button>

      {translatedText && (
        <div className="mt-3">Translated Text: {translatedText}</div>
      )}
    </div>
  );
}

export default Translate;
