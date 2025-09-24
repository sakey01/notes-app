import { useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
  date: string;
};

type Notes = {
  notes: Note[];
}

const Page = ({notes}: Notes) => {
  const [currTitle, setCurrTitle] = useState<string>("");
  const [currContent, setCurrContent] = useState<string>("");

  return (
    <div className=" w-full bg-neutral-900 text-white">
      {notes.length < 1 ? (
        <div className="flex items-center justify-center h-full text-neutral-300 text-xl">
          Nothing yet!
        </div>
      ) : (
        <div className="flex flex-col p-4 sm:mr-16 ">
          {/* Writing notes area */}
          <div className="flex flex-col gap-4">
            {/* Title input */}
            <input
              className="border border-neutral-500 p-2 text-lg focus:border-neutral-200 shadow"
              value={currTitle}
              placeholder="Untitled Note"
              onChange={(e) => {
                setCurrTitle(e.target.value);
              }}
            />
            {/* Content input */}
            <textarea
              className="border border-neutral-500 min-h-20 max-h-100 overflow-x-hidden p-2 focus:border-neutral-200 shadow"
              value={currContent}
              placeholder="Type your notes here..."
              onChange={(e) => {
                setCurrContent(e.target.value);
              }}
              onBlur={() => {}}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
