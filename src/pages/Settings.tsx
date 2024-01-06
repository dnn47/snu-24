import React, { useEffect, useRef, useState, ReactNode } from "react";
import {
  translateThis,
  languageSelector,
  currentLanguage,
} from "../utils/TranslateServices";
import NavBar from "../components/NavBar";
import { TypeAnimation } from "react-type-animation";

function Settings() {
  const hasMounted = useRef(false);
  const LanguageSelectorComponent = languageSelector();
  const CurrentLanguageComponent = currentLanguage();

  const { String: settings } = translateThis("Settings");
  const [title, setTitle] = useState<ReactNode | string>("");

  useEffect(() => {
    if (hasMounted.current) {
      setTitle(
        <TypeAnimation
          sequence={[settings]}
          wrapper="span"
          speed={{ type: "keyStrokeDelayInMs", value: 150 }}
          repeat={0}
          className="text-title text-left"
        />
      );
    } else {
      hasMounted.current = true;
    }
  }, [settings]);

  return (
    <>
      <NavBar
        nameOne={translateThis("Home").String}
        linkOne="home"
        nameTwo={translateThis("About").String}
        linkTwo="about"
      />
      <div className="container move-down p-5">
        <div className="row">{title}</div>
      </div>
      {translateThis("Current Language: ").String}
      {CurrentLanguageComponent}
      {LanguageSelectorComponent}
    </>
  );
}

export default Settings;
