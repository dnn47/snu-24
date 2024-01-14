import React from "react";
import {
  translateThis,
  languageSelector,
  currentLanguage,
} from "../utils/TranslateServices";
import { useTitleAnimation } from "../utils/TitleAnimation";
import SettingsNavBar from "../components/SettingsNavBar";

function Settings() {
  const LanguageSelectorComponent = languageSelector();
  const CurrentLanguageComponent = currentLanguage();
  const typeAnimation = useTitleAnimation("Settings");

  return (
    <>
      <SettingsNavBar />
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
