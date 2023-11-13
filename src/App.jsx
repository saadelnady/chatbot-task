import { ChatComponent } from "./components/ChatComponent";
import { Languages } from "./components/Languages.jsx";
import "./App.css";
import myUserData from "./data/user.js";
import chats from "./data/chats.js";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const [isActive, setIsActive] = useState(false);
  const handleActiveChats = () => {
    setIsActive(!isActive);
  };
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <Languages />
      <div className={i18n.dir() === "ltr" ? "chatbot" : "chatbot-arabic"}>
        {isActive && (
          <ChatComponent
            chats={chats}
            myUserData={myUserData}
            handleActiveChats={handleActiveChats}
          />
        )}
        <i
          className="bi bi-whatsapp"
          onClick={() => {
            handleActiveChats();
          }}
        ></i>
      </div>
    </div>
  );
}

export default App;
