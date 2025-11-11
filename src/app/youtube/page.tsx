import SearchBar from "./searchBar";

export default async function YouTube() {
  "use cache";
  // single video
  // const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=aVvr1b1oWJA&key=${process.env.YOUTUBE_API_KEY}`);
  const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=200&key=${process.env.YOUTUBE_API_KEY}`);

  const result = await response.json();

  const titles = result.items.map((i: any) => i.snippet.title);
  //   const video = result.items[0];

  return (
    <div className="w-full h-full center flex-col gap-10 pt-10">
      <SearchBar/>
      <div className="w-full flex flex-col">
        {titles.map((title: string) => (
          <span key={title}>{title}</span>
        ))}
      </div>
    
    </div>
  );
}