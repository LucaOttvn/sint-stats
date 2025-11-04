"use client";
import InputField from "@/components/inputFields/InputField";
import {useEffect, useState} from "react";
import "./style.scss";
import Message from "@/components/message/Message";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/server")
        .then((res) => {
          console.log(res)
          return res.json();
        })
        .then((data: string[]) => setMessages(data))
        .catch(console.error);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;
    fetch("/api/messages", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({message: message}),
    })
      .then(() => setMessage(""))
      .catch(console.error);
  };

  return (
    <div id="chatContainer">
      <div className="w-full start gap-5">
        <InputField placeHolder="Insert new message" onChange={(e) => setMessage(e.target.value)} value={message} />
        <button className="mainButton" onClick={sendMessage}>
          Send
        </button>
      </div>
      <div id="messagesList">
        {messages.map((msg, i) => (
          <Message key={msg + i} value={msg} />
        ))}
      </div>
    </div>
  );
}
