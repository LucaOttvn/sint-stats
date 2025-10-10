"use client";
import React, {useState} from "react";
import InputField from "../inputFields/InputField";
import {commands} from "@/utils/commands";
import {usePathname, useRouter} from "next/navigation";

export default function CommandPrompt() {
  const router = useRouter();
  const pathName = usePathname();
  const [command, setCommand] = useState<string | undefined>(undefined);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const foundCommand = commands.find((cmd) => {
      // check if there's a command with the same name as the user's input
      const foundName = cmd.names.find((name) => name === command?.trim());
      return foundName;
    });
    if (!foundCommand) {
      alert("Command not found");
      return;
    }
    if (foundCommand.callback) foundCommand.callback();
    if (!foundCommand.redirect) return;
    if (foundCommand.redirect === "back") {
      if (pathName === "/home") return alert("Cannot go back");
      router.back();
      setCommand(undefined)
      return 
    }
    router.push(foundCommand.redirect);
    setCommand(undefined)
  };

  return (
    <div className="w-full center p-10" style={{maxWidth: 700}}>
      <InputField placeHolder="Insert command" onKeyDown={(e) => handleInput(e)} value={command} onChange={(e) => setCommand(e.target.value)} />
    </div>
  );
}
