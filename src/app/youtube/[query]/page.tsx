import Link from "next/link";
import { Suspense } from "react";
interface QueryPageProps {
  params: Promise<{query: string}>;
}

export default async function QueryPage(props: QueryPageProps) {
  return (
    <Suspense>
      <QueryComponent params={props.params}/>
    </Suspense>
  )
}


async function QueryComponent (props: QueryPageProps) {
  const params = await props.params;

  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${params.query}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`);

  const result = await response.json();

  const foundVideos = result.items;

  console.log(foundVideos);
  return (
    <div className="w-full h-full flex flex-col pl-5 pb-5">
      {foundVideos.map((video: any, index: number) => (
        <Link key={video.snippet.title + index} href={`${params.query}/${video.id.videoId}`}>{video.snippet.title}</Link>
      ))}
    </div>
  );
}
