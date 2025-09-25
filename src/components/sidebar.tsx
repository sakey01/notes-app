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
    <aside className="flex flex-col items-center min-w-40 h-screen flex-1 sm:w-full sm:min-w-60 bg-neutral-800 text-white border-r-1 border-neutral-900">
      {/* Header */}
      <section className="flex justify-between items-center w-full border-b border-neutral-700  py-2 sm:py-4 px-2 sm:px-4">
        <h1 className="text-sm sm:text-lg font-semibold">Notes</h1>
        <button
          className="rounded p-1 text-base sm:text-xl hover:bg-neutral-700 duration-100"
          // Create note object
          onClick={() => {
            const id = Date.now();
            const newNote = {
              id,
              title: "Untitled",
              content: "",
              date: new Date().toLocaleDateString(),
            };
            // Add note to array
            setNotes((prev) => {
              const updated = [...prev, newNote];
              // Update active note to most recent
              setActive(updated.length ? updated[updated.length - 1].id : null);
              return updated;
            });
          }}
        >
          <IoCreateOutline/>
        </button>
      </section>
      {/* Notes list */}
      <section className="flex flex-col w-full overflow-y-auto">
        {notes.map((note) => (
          <Card
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            date={note.date}
            active={active}
            setNotes={setNotes}
            setActive={setActive}
            onClick={() => setActive(note.id)}
          />
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
