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
    <article
      onClick={onClick}
      className={`flex flex-col  sm:max-w-full gap-2 sm:gap-4 p-2 sm:p-4 cursor-pointer hover:bg-neutral-700 hover:shadow active:bg-[#383737] ${
        active === id ? "bg-neutral-700" : ""
      }`}
    >
      <header className="flex justify-between items-start">
        {/* Title */}
        <h2 className="truncate break-words font-semibold text-sm sm:text-lg">{title || "Untitled"}</h2>
        <button
          className="p-1 ml-1 text-base sm:text-xl text-neutral-400 rounded-full hover:bg-neutral-600 duration-100"
          onClick={handleDelete}
        >
          <MdDelete />
        </button>
      </header>
      {/* Last updated  */}
      <footer className="flex justify-between items-end gap-4 text-[10px] sm:text-sm text-neutral-400">
        <span>Last Modified:</span>
        <time>{date}</time>
      </footer>
    </article>
  );
};

export default Card;
