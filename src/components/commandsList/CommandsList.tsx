import { commands } from "@/utils/commands";
import "./style.scss";

interface CommandsListProps {}

export default function CommandsList(props: CommandsListProps) {
  return (
    <section id="commandListContainer">
      <h2 className="w-full center">Commands</h2>
      {/* command line */}
      {commands.map((cmd, index) => (
        <div key={`cmd${index}`} className="commandContainer gap-3">
          <h3>{`${cmd.description}:`}</h3>
          {/* command name and aliases */}
          <div className="commandAliases gap-3">
            {cmd.names.map((name, index) => (
              <div key={name} className="center gap-3">
                <span>{name}</span>
                {/* don't show the pipe if it's the last item */}
                {index !== cmd.names.length - 1 && <span>|</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
