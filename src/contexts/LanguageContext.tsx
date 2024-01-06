import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type LanguageContextProps = {
  globalLanguage: string;
  setGlobalLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const storedLanguage = localStorage.getItem("globalLanguage") || "en";
  const [globalLanguage, setGlobalLanguageState] =
    useState<string>(storedLanguage);

  const setGlobalLanguage = (newLanguage: string) => {
    localStorage.setItem("globalLanguage", newLanguage);
    setGlobalLanguageState(newLanguage);
  };

  useEffect(() => {
    setGlobalLanguage(storedLanguage);
  }, []);

  const contextValue: LanguageContextProps = {
    globalLanguage,
    setGlobalLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
