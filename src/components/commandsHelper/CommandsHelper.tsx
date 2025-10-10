import React from "react";
import "./style.scss";
import {commands} from "@/utils/commands";

export default function CommandsHelper() {
  return (
    <div id="commandsHelper">
      {commands.map((cmd, index) => (
        <span key={"cmdHelp" + index}>{cmd.names.join(" | ")}</span>
      ))}
    </div>
  );
}
