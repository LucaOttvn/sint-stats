"use client";
import React, {useLayoutEffect, useRef, useState} from "react";
import InputField from "../inputFields/InputField";
import {commands} from "@/utils/commands";
import {usePathname, useRouter} from "next/navigation";
import CommandsHelper from "../commandsHelper/CommandsHelper";
import "./style.scss";

export default function CommandPrompt() {
  const router = useRouter();
  const pathName = usePathname();
  const ref = useRef<HTMLInputElement>(null);
  const [command, setCommand] = useState<string | undefined>(undefined);

  useLayoutEffect(() => {
    // prefetch all the pages
    const pages = commands.filter((cmd) => cmd.redirect !== "back");
    const pagesRoutes = pages.map((page) => page.redirect);
    for (const route of pagesRoutes) {
      if (!route) continue;
      router.prefetch(route);
    }
  }, []);

  // on enter trigger the command
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
    if (!foundCommand) return alert("Command not found");
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
    <div id="commandPromptContainer">
      {command === "?" && <CommandsHelper />}
      <InputField ref={ref} placeHolder="Insert command" onKeyDown={(e) => handleInput(e)} value={command} onChange={(e) => setCommand(e.target.value)} />
    </div>
  );
}
