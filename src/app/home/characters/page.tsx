import React from "react";
import "./style.scss";
import {characters} from "@/utils/characters";
import { stats } from "@/utils/stats";

export default function Stats() {
  return (
    <section id="charactersContainer" className="w-full h-full center">
      {characters.map((char) => (
        <div key={char.name} className="characterCard">
          <h2>{char.name}</h2>
          <ul>
            {char.stats.map((stat) => {
              const foundStat = stats.find(el => el.id === stat.statId);
              return <li key={stat.statId} className="pl-1">{`- ${foundStat?.name}: ${foundStat?.value}`}</li>;
            })}
          </ul>
        </div>
      ))}
    </section>
  );
}
