import React from "react";
import {
  translateThis,
  languageSelector,
  currentLanguage,
} from "../utils/TranslateServices";
import NavBar from "../components/NavBar";
import { useTitleAnimation } from "../utils/TitleAnimation";

function Settings() {
  const LanguageSelectorComponent = languageSelector();
  const CurrentLanguageComponent = currentLanguage();
  const typeAnimation = useTitleAnimation("Settings");

  return (
    <>
      <NavBar
        nameOne={translateThis("Home").String}
        linkOne="home"
        nameTwo={translateThis("About").String}
        linkTwo="about"
      />
      <div className="container move-down p-5">
        <div className="row">{typeAnimation}</div>
        <div className="mt-5">
          <div className="textContent">
            {translateThis("Current Language: ").String}{" "}
            {CurrentLanguageComponent}
          </div>
          <div className="textContent mt-3">{LanguageSelectorComponent}</div>
        </div>
      </div>
    </>
  );
}

export default Settings;
