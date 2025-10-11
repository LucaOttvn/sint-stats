import "./style.scss";
import {characters} from "@/utils/characters";
import { Character } from "@/utils/interfaces";
import { stats } from "@/utils/stats";
import Chartscii from "chartscii";

export default function Stats() {
  const generateStatsChart = (character: Character) => {
    const characterStats = character.stats.map(stat => {
      const foundStat = stats.find(el => el.id === stat.statId)
      return {
        label: foundStat?.name,
        value: stat.value
      }
    })
    const chart = new Chartscii(characterStats, {
      width: 100,
      scale: 6,
      naked: true,
      valueLabels: true,
    });
    return chart.create();
  };

  return (
    <section id="charactersContainer" className="w-full h-full center">
      {characters.map((char) => (
        <div key={char.name} className="characterCard">
          <h2>{char.name}</h2>
          <pre>{generateStatsChart(char)}</pre>
        </div>
      ))}
    </section>
  );
}
