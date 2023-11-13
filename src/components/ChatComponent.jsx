import React, { useState } from "react";
import "../styles/chat.css";
import { MessageComponent } from "./MessageComponent";
import { MessageFooter } from "./MessageFooter";
import { MessageHeader } from "./MessageHeader";
import { useTranslation } from "react-i18next";

export const ChatComponent = ({ chats, myUserData, handleActiveChats }) => {
  const [currentChats, setCurrentChats] = useState(chats);
  const [myUser] = useState(myUserData);
  const { t, i18n } = useTranslation();

  return (
    <div className={i18n === "ltr" ? "chat" : "chat chat-arabic"}>
      <MessageHeader handleActiveChats={handleActiveChats} />
      <MessageComponent currentChats={currentChats} myUser={myUser} />
      <MessageFooter
        currentChats={currentChats}
        setCurrentChats={setCurrentChats}
        myUser={myUser}
      />
    </div>
  );
};
