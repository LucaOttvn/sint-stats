const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function RandomFact() {
  const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", {cache: 'no-store'});
  const result = await response.json();
  // await delay(3000);
  return (
    <div className="w-full h-full center">
      {`Random fact: ${result.text}`}
    </div>
  );
}
