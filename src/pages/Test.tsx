import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Translate from "../components/Translate";
import { getSupportedLanguages } from "../utils/GoogleTranslate";

const Test: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = () => {
    setLanguage("fr");
  };

  console.log(getSupportedLanguages());

  return (
    <div>
      <p>Current Language: {language}</p>
      <button onClick={changeLanguage}>Change Language</button>
      <Translate />
    </div>
  );
};

export default Test;
