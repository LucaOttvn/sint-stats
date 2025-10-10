"use client";
import React, {useRef, useState} from "react";
import InputField from "../inputFields/InputField";
import {commands} from "@/utils/commands";
import {usePathname, useRouter} from "next/navigation";
import CommandsHelper from "../commandsHelper/CommandsHelper";

export default function CommandPrompt() {
  const router = useRouter();
  const pathName = usePathname();
  const ref = useRef<HTMLInputElement>(null);
  const [command, setCommand] = useState<string | undefined>(undefined);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      e.preventDefault();
      ref.current?.blur();
    }
    const foundCommand = commands.find((cmd) => {
      // check if there's a command with the same name as the user's input
      const foundName = cmd.names.find((name) => name === command?.trim().toLowerCase());
      return foundName;
    });
    if (!foundCommand) {
      alert("Command not found");
      return;
    }
    if (foundCommand.callback) foundCommand.callback();
    if (!foundCommand.redirect) return;

    handleRedirect(foundCommand.redirect);
  };

  // handle redirect errors and back command
  const handleRedirect = (url: string) => {
    if (url === pathName) return alert("Already in the page");
    if (url === "back") {
      if (pathName === "/home") return alert("Cannot go back");
      router.back();
      setCommand(undefined);
      return;
    }
    router.push(url);
    setCommand(undefined);
  };

  return (
    <div className="w-full center relative" style={{maxWidth: 700}}>
      {command === '?' && <CommandsHelper />}
      <InputField ref={ref} placeHolder="Insert command" onKeyDown={(e) => handleInput(e)} value={command} onChange={(e) => setCommand(e.target.value)} />
    </div>
  );
}
