import React from "react";
import NavBar from "../components/NavBar";
import {
  translateThis,
  languageSelector,
  currentLanguage,
} from "../utils/TranslateServices";

function Settings() {
  const LanguageSelectorComponent = languageSelector();
  const CurrentLanguageComponent = currentLanguage();

  const { translatedString: homeText } = translateThis("Home");
  const { translatedString: aboutText } = translateThis("About");
  const { translatedString: currentLanguageDesc } =
    translateThis("Current Lanuage: ");

  return (
    <>
      <NavBar
        nameOne={homeText}
        linkOne="home"
        nameTwo={aboutText}
        linkTwo="about"
      />
      {currentLanguageDesc} {CurrentLanguageComponent}
      {LanguageSelectorComponent}
    </>
  );
}

export default Settings;
