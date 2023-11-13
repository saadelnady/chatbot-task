import React from "react";
import "../styles/message.css";

import { useTranslation } from "react-i18next";
export const MessageComponent = ({ currentChats, myUser }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="content">
      {currentChats.map((chat, index) => {
        const dateString = chat.message.created_at;
        const formattedDate = new Date(dateString).toLocaleString();
        return (
          <div
            className={
              chat.user.id === myUser.id
                ? i18n.dir() === "ltr"
                  ? "user-messages row-reverse"
                  : "user-messages   "
                : i18n.dir() === "ltr"
                ? "user-messages "
                : "user-messages row-reverse"
            }
            key={index}
          >
            {chat.user.id !== myUser.id && (
              <img
                className={
                  chat.user.id === myUser.id ? "" : "user-img user-img-reverse"
                }
                src={chat.user.id === myUser.id ? "" : chat?.user?.image}
                alt="user-img"
              />
            )}
            <div className="message-content">
              <div className="date">{formattedDate}</div>
              {chat?.message?.type === "TEXT" && (
                <p
                  className={
                    i18n.dir() === "ltr" ? "message" : "message-arabic"
                  }
                >
                  {chat?.message?.content}
                </p>
              )}
              {chat?.message?.type === "IMAGE" && (
                <img
                  src={chat?.message?.content}
                  alt=""
                  className="image-message"
                />
              )}
              {chat?.message?.type === "VOICE" && (
                <div>
                  <audio controls src={chat?.message?.content}>
                    <source src={chat?.message?.content} type="audio/wav" />
                    <source src={chat?.message?.content} type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
