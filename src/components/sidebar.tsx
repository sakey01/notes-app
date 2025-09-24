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
    <aside className="flex flex-col flex-1 bg-neutral-800 text-white h-screen sm:min-w-60 w-1/2 sm:w-full items-center gap-2 border-r-1 border-neutral-900">
      {/* Bar header */}
      <div className="flex justify-between px-2 sm:px-4 py-4 w-full">
        <h1 className="font-semibold mr-10">Notes</h1>
        {/* Add notes button*/}
        <button
          className="p-1 rounded duration-100 hover:bg-neutral-600"
          onClick={() => {
            // Reference id with exact time
            const id = Date.now();
            const newNote = {
              id: id,
              title: "Untitled",
              content: "",
              date: new Date().toLocaleDateString(),
            };

            setNotes((prev) => {
              // update notes array by adding newNote
              const updated = [...prev, newNote];
              // Updaete the active note in notes
              setActive(updated.length ? updated[updated.length - 1].id : null);
              return updated;
            });
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
            notes={notes}
            setNotes={setNotes}
            setActive={setActive}
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
