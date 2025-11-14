import { Suspense } from "react";

interface VideoPlayerProps {
  params: Promise<{videoId: string}>;
}

export default async function VideoPlayerPage(props: VideoPlayerProps) {
  return (
    <Suspense>
      <VideoPlayerComponent params={props.params}/>
    </Suspense>
  )
}

async function VideoPlayerComponent (props: VideoPlayerProps) {
  const params = await props.params
  return (
      <div className="w-full h-full center">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${params.videoId}`}
          title={"title"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
  );
}
