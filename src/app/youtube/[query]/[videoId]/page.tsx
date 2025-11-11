"use client";

import {useParams} from "next/navigation";

interface VideoPlayerProps {
  params: Promise<{videoId: string}>;
}

export default function VideoPlayer(props: VideoPlayerProps) {
  const params = useParams<{videoId: string}>();
  console.log(params)
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
