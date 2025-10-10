import "./style.scss";
import CommandsList from "@/components/commandsList/CommandsList";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <h1 className="mt-5">Sint Stats</h1>
      <div className="w-full h-full center"><CommandsList /></div>
    </div>
  );
}
