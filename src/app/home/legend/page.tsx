import "./style.scss";
import { stats } from "@/utils/stats";

export default function Legend() {
  return (
    <div id="statslegendContainer">
      <div id="statsList">
        {stats.map((stat) => (
          <div key={stat.name} className="flex gap-2">
            <b>{stat.name}:</b>
            <span>{stat.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
