import React from "react";
import { translateThis, languageSelector } from "../utils/TranslateServices";

function Test() {
  const { translatedString } = translateThis("Hello, world!");
  const LanguageSelectorComponent = languageSelector();

  return (
    <>
      {LanguageSelectorComponent}
      <p>"Hello, world!" to {translatedString}</p>
    </>
  );
}

export default Test;
