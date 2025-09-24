type Note = {
  id: number;
  title: string;
  content: string;
  date: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const newDate = new Date();

const Card = ({ title, date, onClick }: Note) => {
  const handleDelete = () => {};

  return (
    <div
      onClick={onClick}
      className="flex flex-col w-full min-h-20 p-4 gap-2 cursor-pointer hover:bg-neutral-700"
    >
      <div className="flex justify-between w-full">
        <h1 className="font-semibold text-lg">{title || "Untitled"}</h1>
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

export default Card;
