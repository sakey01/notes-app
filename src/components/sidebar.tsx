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
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const newDate = new Date();

const Sidebar = ({ notes, setNotes, setActive }: Notes) => {
  return (
    <aside className="flex flex-col flex-1 bg-neutral-800 text-white h-screen max-w-max items-center gap-2 border-r-1 border-neutral-600 ">
      <div className="flex justify-between p-4 gap-32">
        <h1 className="font-semibold">Notes</h1>

        {/* Add Notes */}
        <button
          onClick={() => {
            setNotes((prev) => [
              ...prev,
              {
                id: Date.now(),
                title: "New Note",
                content: "Lorum ipsom...",
                date: newDate.toLocaleDateString(),
              },
            ]);

            setActive(notes.length - 1);
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
