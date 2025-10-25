import React, {useEffect, useState} from "react";

interface MessageProps {
  value: string;
}

export default function Message(props: MessageProps) {
  const [blurred, setBlurred] = useState(true);

  const handleBlur = (value: boolean) => {
    setBlurred(value);
    if (value) return;
    setTimeout(() => {
      console.log("/////");
      setBlurred(true);
    }, 2000);
  };

  return (
    <div className="message" onClick={() => handleBlur(!blurred)} style={{filter: blurred ? "blur(4px)" : "none", background: blurred ? "var(--darkGreen)" : "transparent"}}>
      {props.value}
    </div>
  );
}
