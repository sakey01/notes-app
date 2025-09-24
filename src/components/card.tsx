import { MdDelete } from "react-icons/md";

type Note = {
  id: number;
  title: string;
  content: string;
  date: string;
};

type CardProp = {
  id: number;
  title: string;
  content: string;
  date: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  active: number | null;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
};

const Card = ({ id, title, date, onClick, active, setNotes, setActive }: CardProp) => {
  const handleDelete = () => {
    setNotes((prevNotes) => {
      const filtered = prevNotes.filter((note) => note.id !== id);

      // Update active 
        const newActive = filtered.length > 0 ? filtered[filtered.length - 1].id : null;
        setActive(newActive);
      

      return filtered;
    });
  };

  return (
    // Sidebar item
    <div
      onClick={onClick}
      className={`flex flex-col w-full max-w-80 overflow-hidden p-2 sm:p-4 gap-4 cursor-pointer active:bg-[#383737] hover:shadow hover:bg-neutral-700 ${
        active === id ? "bg-neutral-700" : ""
      }`}
    >
      <div className="flex justify-between w-full">
        {/* Note title */}
        <h1 className="font-semibold break-words truncate sm:text-lg">{title || "Untitled"}</h1>
        {/* Delete btn */}
        <button
          className="text-neutral-400 h-max text-sm rounded-full p-1 duration-100 hover:bg-neutral-600"
          onClick={handleDelete}
        >
          <MdDelete size={20} />
        </button>
      </div>
      {/* Date made */}
      <span className="flex justify-start gap-4 text-neutral-400 text-[12px] sm:text-sm">
        Last Modified:{" "}
        <time className="flex items-end">{date || new Date().toLocaleDateString()}</time>
      </span>
    </div>
  );
};

export default Card;
