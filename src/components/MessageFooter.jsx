import React, { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

import "../styles/footer.css";
import { useTranslation } from "react-i18next";

export const MessageFooter = ({ currentChats, setCurrentChats, myUser }) => {
  const { i18n } = useTranslation();
  const [textMessage, setTextMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null); // State to hold audio file
  const handleMessage = (event) => {
    setTextMessage(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const recorderControls = useAudioRecorder();
  let addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);

    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;

    setAudioFile(audio);
  };

  const addMessageToChats = (type, content) => {
    setCurrentChats((currentChats) => [
      ...currentChats,
      {
        user: myUser,
        message: {
          id: 1,
          content,
          created_at: new Date().toISOString(),
          type,
        },
      },
    ]);
  };

  const handleSendMessage = () => {
    if (textMessage) {
      addMessageToChats("TEXT", textMessage);
      setTextMessage("");
    } else if (selectedFile) {
      addMessageToChats("IMAGE", URL.createObjectURL(selectedFile));
      setSelectedFile(null);
    } else if (audioFile) {
      addMessageToChats("VOICE", audioFile.src);
      setAudioFile(null);
    }
  };

  return (
    <div
      className={
        i18n.dir() === "ltr" ? "messege-footer" : "messege-footer-arabic"
      }
    >
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      <input type="text" value={textMessage} onChange={handleMessage} />
      <div className="file-input-container">
        <input type="file" onChange={handleFileChange} />
        <i className="bi bi-plus add-img"></i>
      </div>
      <i
        className={
          i18n.dir() === "ltr"
            ? "bi bi-arrow-right send"
            : "bi bi-arrow-left send"
        }
        onClick={handleSendMessage}
      ></i>
    </div>
  );
};
