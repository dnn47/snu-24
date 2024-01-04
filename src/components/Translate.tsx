import React, { useEffect, useState } from "react";
import { translateText, getSupportedLanguages } from "../utils/GoogleTranslate";

function Translate() {
  const [inputText, setInputText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [translatedText, setTranslatedText] = useState("");
  const [supportedLanguages, setSupportedLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      const languages = await getSupportedLanguages();
      setSupportedLanguages(languages);
    };

    fetchLanguages();
  }, []);

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
        {supportedLanguages.map(({ language, name }) => (
          <option key={language} value={language}>
            {name}
          </option>
        ))}
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
