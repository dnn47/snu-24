import { translateText, getSupportedLanguages } from "../utils/GoogleTranslate";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect, useState } from "react";
import React from "react";
import "../css/Setting.css";

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
  const [String, setString] = useState("");

  const fetchData = async () => {
    const translation = await translateText(input, globalLanguage);
    setString(translation);
  };

  useEffect(() => {
    fetchData();
  }, [globalLanguage, input]);

  return { String };
};

function languageSelector() {
  const [targetLanguage, setTargetLanguage] = useState("");
  const supportedLanguages = useSupportedLanguages();
  const { setGlobalLanguage } = useLanguage();

  const handleTranslate = async () => {
    setGlobalLanguage(targetLanguage);
    window.location.reload();
  };

  return (
    <>
      <div>
        <div className="">
          <div className="row">
            <div className="col-md-6">
              <select
                id="targetLanguage"
                className="form-select"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                title={translateThis("Select a Language").String}
              >
                <option value="">
                  {translateThis("Select a Language").String}
                </option>
                {supportedLanguages.map(({ language, name }) => (
                  <option key={language} value={language}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <button
                className="btn btn-primary"
                onClick={handleTranslate}
                style={{
                  backgroundColor: "#003081",
                  borderColor: "#F9F9F9",
                  color: "#F9F9F9",
                }}
              >
                {translateThis("Translate").String}
              </button>
            </div>
          </div>
        </div>
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

  return <>{translateThis(current).String}</>;
}

export { languageSelector, currentLanguage };
