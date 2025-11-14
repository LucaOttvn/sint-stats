import { fullLore } from "@/utils/lore";
import "../style.scss";
import { connection } from "next/server";
import { Suspense } from "react";

interface SeasonProps {
  params: Promise<{season: string}>;
}

/**
 * This component shows the content of a season.
*/
export default async function SeasonPage(props: SeasonProps) {

  return (
    <Suspense>
      <SeasonComponent params={props.params}></SeasonComponent>
    </Suspense>
  )
}

async function SeasonComponent (props: SeasonProps) {

  const {season} = await props.params;

  const [seasonId, episodeId] = season.split("-");

  const foundSeason = fullLore.seasons.find((season) => season.id === Number(seasonId));
  const foundEpisode = foundSeason?.episodes.find((episode) => episode.id === Number(episodeId));

  return (
    <div className="w-full h-full start flex-col gap-2 pt-10">
      {/* Episodes list */}
      {foundEpisode && (
        <div className="start flex-col px-5 gap-10">
          <h2>{foundEpisode.name}</h2>
          <span>{foundEpisode.text}</span>
        </div>
      )}
    </div>
  );
}