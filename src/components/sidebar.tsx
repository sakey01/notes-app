import { IoCreateOutline } from "react-icons/io5";

type Note = {
  id: number;
  title: string;
  content: string;
  date: string;
};

type Notes = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const newDate = new Date();

const Card = ({ title, date }: Note) => {
  const handleDelete = () => {};

  return (
    <div className="flex flex-col w-full min-h-20 p-4 gap-2 cursor-pointer hover:bg-neutral-800">
      <div className="flex justify-between w-full">
        <h1 className="font-semibold text-lg">{title}</h1>
        <button className="text-red-500 text-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <span className="flex justify-start gap-2 text-neutral-300 text-sm">
        Last Modified: <time>{date || newDate.toLocaleDateString()}</time>
      </span>
    </div>
  );
};

const Sidebar = ({ notes, setNotes }: Notes) => {
  return (
    <aside className="flex flex-col flex-1 bg-neutral-900 text-white h-screen max-w-max items-center gap-2 border-r-1 border-neutral-500 ">
      <div className="flex justify-between p-4 gap-32">
        <h1 className="font-semibold">Notes</h1>

        {/* Add Notes */}
        <button
          onClick={() => {
            setNotes((prevNotes) => [
              ...prevNotes,
              { title: "title", content: "blah blah blah...", date: newDate.toLocaleDateString() },
            ]);
          }}
        >
          <IoCreateOutline size={20} />
        </button>
      </div>

      <div className="flex flex-col w-full overflow-y-auto">
        {notes.map((note) => (
          <Card
            key={note.id}
            id={note.id}
            title={note.title}
            date={note.date}
            setNotes={setNotes}
          />
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
