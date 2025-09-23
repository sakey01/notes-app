
import { IoCreateOutline } from "react-icons/io5";

type NoteProp = {
  title: string;
  content: string;
};

type NotesProp = {
  notes: NoteProp[];
};

const Card = ({ title }: NoteProp) => {
  const date = new Date();

  const handleDelete = () => {};

  return (
    <div className="flex flex-col w-full min-h-10 p-4 gap-2 cursor-pointer hover:bg-neutral-800">
      <div className="flex justify-between w-full">
        <h1 className="font-semibold text-lg">{title}</h1>
        <button className="text-red-500 text-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <span className="flex justify-start gap-2 text-neutral-300 text-sm">
        Last Modified: <time>{date.toLocaleDateString()}</time>
      </span>
    </div>
  );
};

const Sidebar = ({ notes }: NotesProp) => {
  return (
    <aside className="flex flex-col flex-1 bg-neutral-900 text-white h-screen max-w-max items-center gap-2 border-r-1 border-neutral-500 ">
      <div className="flex justify-between p-4 gap-32">
        <h1 className="font-semibold">Notes</h1>
        <button>
          <IoCreateOutline size={20} />
        </button>
      </div>

      <div className="flex flex-col w-full">
        {notes.map((note, i) => (
          <Card key={i} title={note.title} content={note.content} />
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
