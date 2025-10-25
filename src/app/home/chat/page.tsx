"use client";
import InputField from "@/components/inputFields/InputField";
import {useEffect, useState} from "react";
import io from "socket.io-client";
import "./style.scss";
import Message from "@/components/message/Message";

let socket: any;

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io("http://172.20.10.2:3001");
    console.log(socket);

    socket.on("receive_message", (msg: any) => {
      setMessages((prev) => [...prev, msg] as any);
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    socket.emit("send_message", message);
    setMessage("");
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
          <Message key={msg + i} value={msg}/>
        ))}
      </div>
    </div>
  );
}
