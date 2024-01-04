import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type LanguageContextProps = {
  language: string;
  setLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const storedLanguage = localStorage.getItem("language") || "en";
  const [language, setLanguageState] = useState<string>(storedLanguage);

  const setLanguage = (newLanguage: string) => {
    localStorage.setItem("language", newLanguage);
    setLanguageState(newLanguage);
  };

  useEffect(() => {
    setLanguageState(storedLanguage);
  }, []);

  const contextValue: LanguageContextProps = {
    language,
    setLanguage,
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
