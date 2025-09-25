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
      const newActive = filtered.length > 0 ? filtered[filtered.length - 1].id : null;
      setActive(newActive);
      return filtered;
    });
  };

  return (
    <div
      onClick={onClick}
      className={`flex flex-col max-w-50 sm:max-w-full gap-4 p-2 sm:p-4 cursor-pointer hover:bg-neutral-700 hover:shadow active:bg-[#383737] ${
        active === id ? "bg-neutral-700" : ""
      }`}
    >
      <div className="flex justify-between items-start">
        <h1 className="truncate break-words font-semibold sm:text-lg">{title || "Untitled"}</h1>
        <button
          className="p-1 text-sm text-neutral-400 rounded-full hover:bg-neutral-600 duration-100"
          onClick={handleDelete}
        >
          <MdDelete size={20} />
        </button>
      </div>
      {/* Last updated  */}
      <div className="flex justify-between items-end gap-4 text-[12px] sm:text-sm text-neutral-400">
        <span>Last Modified:</span>
        <time>{date}</time>
      </div>
    </div>
  );
};

export default Card;
