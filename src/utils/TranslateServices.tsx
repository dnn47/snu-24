import { translateText, getSupportedLanguages } from "../utils/GoogleTranslate";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState } from "react";
import React from "react";

export const translateThis = (input: string) => {
  const { language } = useLanguage();
  const [translatedString, setTranslatedString] = useState("");

  const fetchData = async () => {
    const translation = await translateText(input, language);
    setTranslatedString(translation);
  };

  useEffect(() => {
    fetchData();
  }, [language, input]);

  return { translatedString };
};

function languageSelector() {
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [supportedLanguages, setSupportedLanguages] = useState([]);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const fetchLanguages = async () => {
      const supportedLanguages = await getSupportedLanguages();
      setSupportedLanguages(supportedLanguages);
    };

    fetchLanguages();
  }, []);

  const handleTranslate = async () => {
    setLanguage(targetLanguage);
  };

  return (
    <>
      <div className="container mt-5">
        <p>Current Language: {language}</p>
        <label htmlFor="targetLanguage" className="form-label mt-3">
          Set Language
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
      </div>
    </>
  );
}

export { languageSelector };
