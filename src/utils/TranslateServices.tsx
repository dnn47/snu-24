import { translateText, getSupportedLanguages } from "../utils/GoogleTranslate";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState } from "react";
import React from "react";

const useSupportedLanguages = () => {
  const [supportedLanguages, setSupportedLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      const supportedLanguages = await getSupportedLanguages();
      setSupportedLanguages(supportedLanguages);
    };

    fetchLanguages();
  }, []);

  return supportedLanguages;
};

export const translateThis = (input: string) => {
  const { globalLanguage } = useLanguage();
  const [translatedString, setTranslatedString] = useState("");

  const fetchData = async () => {
    const translation = await translateText(input, globalLanguage);
    setTranslatedString(translation);
  };

  useEffect(() => {
    fetchData();
  }, [globalLanguage, input]);

  return { translatedString };
};

function languageSelector() {
  const [targetLanguage, setTargetLanguage] = useState("");
  const supportedLanguages = useSupportedLanguages();
  const { setGlobalLanguage } = useLanguage();
  const { translatedString: setLanguageText } = translateThis("Set Language");
  const { translatedString: translateText } = translateThis("Translate");

  const handleTranslate = async () => {
    setGlobalLanguage(targetLanguage);
  };

  return (
    <>
      <div className="container mt-5">
        <label htmlFor="targetLanguage" className="form-label mt-3">
          {setLanguageText}
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
          {translateText}
        </button>
      </div>
    </>
  );
}

function currentLanguage() {
  const { globalLanguage } = useLanguage();
  const supportedLanguages = useSupportedLanguages();

  const currentLanguageObject = supportedLanguages.find(
    ({ language }) => language === globalLanguage
  ) as { language: string; name: string } | undefined;

  let current = "";

  if (currentLanguageObject !== undefined) {
    current = currentLanguageObject.name;
  }

  return <>{current}</>;
}

export { languageSelector, currentLanguage };
