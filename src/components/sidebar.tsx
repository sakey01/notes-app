import { IoCreateOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="flex flex-col flex-1 bg-gray-900 text-white h-screen max-w-max items-center gap-2 border-r-1 border-stone-400 shadow">
      <div className="flex justify-between p-4  gap-24">
        <h1 className="font-semibold">Notes</h1>
        <button>
          <IoCreateOutline size={20} />
        </button>
      </div>
      <div className="border-b-1 border-gray-950 h-1 p-2 flex w-full" />
      <div className="overflow-y-scroll"></div>
    </aside>
  );
};
export default Sidebar;
