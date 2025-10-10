import CommandPrompt from "@/components/commandPrompt/CommandPrompt";
import React from "react";
import './style.scss'

interface HomeLayoutProps {
  children: React.ReactNode;
}

/**
 * This is a Layout Component because it contains the command prompt, that has to be shared between the children components.
 */
export default function HomeLayout(props: HomeLayoutProps) {
  return (
    <div id="homePageContainer">
      {props.children}
      <CommandPrompt />
    </div>
  );
}
