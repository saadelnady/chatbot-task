import React from "react";
import "../styles/header.css";
import { useTranslation } from "react-i18next";
export const MessageHeader = ({ handleActiveChats }) => {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={
        i18n.dir() === "rtl" ? "chat-header row-reverse" : "chat-header"
      }
    >
      <p className="header-title">{t("contact")}</p>
      <i
        className="bi bi-x-lg close"
        onClick={() => {
          handleActiveChats();
        }}
      ></i>
    </div>
  );
};
