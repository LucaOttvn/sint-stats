import {fullLore} from "@/utils/lore";
import Link from "next/link";
import "./style.scss";
import Folder from "@/components/folder/Folder";

export default function LoreHandler() {
  return (
    <section id="loreContainer">
      {fullLore.seasons.map((season) => (
        <Folder
          key={season.name}
          folder={{
            id: season.id,
            name: season.name,
            files: season.episodes.map((episode) => ({id: episode.id, name: episode.name})),
          }}
        />
      ))}
    </section>
  );
}
