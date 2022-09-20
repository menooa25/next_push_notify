import React, { useEffect, useState } from "react";
import s from "./Message.module.css";
const Message = () => {
  const [notifyGranted, setNotifyGranted] = useState(false);
  const makeNotification = () => {
    const title = "imNotify ";
    const body = "this is notify body";
    const img = "icon-256x256.png";
    const audio = new Audio("alarm.mp3");
    audio.play();
    new Notification(title, { body, icon: img });
  };
  useEffect(() => {
    Notification.requestPermission().then((result) => {
      if (result === "granted") setNotifyGranted(true);
    });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => makeNotification(), 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <button onClick={makeNotification}>notify</button>
    </div>
  );
};

export default Message;
