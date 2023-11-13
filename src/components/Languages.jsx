import React from "react";
import { useTranslation } from "react-i18next";

import "../styles/languages.css";
export const Languages = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="lang-container">
      <button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        En
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("ar");
        }}
      >
        Ar
      </button>
    </div>
  );
};
