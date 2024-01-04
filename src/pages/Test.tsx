import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Test: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = () => {
    setLanguage("fr");
  };

  return (
    <div>
      <p>Current Language: {language}</p>
      <button onClick={changeLanguage}>Change Language</button>
    </div>
  );
};

export default Test;
