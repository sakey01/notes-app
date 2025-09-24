type CardProp = {
  id: number;
  title: string;
  content: string;
  date: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  active: number | null;
};

const Card = ({ id, title, date, onClick, active }: CardProp) => {
  const handleDelete = () => {};
  console.log("ac", active, "id", id);
  return (
    <div
      onClick={onClick}
      className={`flex flex-col w-full min-h-20 p-4 gap-2 cursor-pointer hover:bg-neutral-700 ${
        active === id ? "bg-neutral-700" : ""
      }`}
    >
      <div className="flex justify-between w-full">
        <h1 className="font-semibold text-lg">{title || "Untitled"}</h1>
        <button className="text-red-500 text-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <span className="flex justify-start gap-2 text-neutral-300 text-sm">
        Last Modified: <time>{date || new Date().toLocaleDateString()}</time>
      </span>
    </div>
  );
};

export default Card;
