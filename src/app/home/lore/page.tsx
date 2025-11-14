import { fullLore } from "@/utils/lore";
import "./style.scss";
import Folder from "@/components/folder/Folder";

export default async function LoreHandler() {
  
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
