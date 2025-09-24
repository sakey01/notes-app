import { IoCreateOutline } from "react-icons/io5";
import Card from "./card";

type Note = {
  id: number;
  title: string;
  content: string;
  date: string;
};

type Notes = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  active: number | null;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
};

const Sidebar = ({ notes, setNotes, active, setActive }: Notes) => {
  return (
    <aside className="flex flex-col flex-1 bg-neutral-800 text-white h-screen max-w-max items-center gap-2 border-r-1 border-neutral-600 ">
      <div className="flex justify-between p-4 gap-32">
        <h1 className="font-semibold">Notes</h1>

        {/* Add notes button*/}
        <button
          onClick={() => {
            const id = Date.now();
            const newNote = {
              id: id,
              title: "New Note",
              content: "Lorem ipsum...",
              date: new Date().toLocaleDateString(),
            };

            setNotes((prev) => {
              const updated = [...prev, newNote];
              return updated;
            });

            setActive(id);
          }}
        >
          <IoCreateOutline size={20} />
        </button>
      </div>

      {/* Notes list overview */}
      <div className="flex flex-col w-full overflow-y-auto">
        {notes.map((note) => (
          <Card
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            date={note.date}
            active={active}
            onClick={() => {
              setActive(note.id);
            }}
          />
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
