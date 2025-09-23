import { useState } from "react";

type NoteProp = {
  title: string;
  content: string;
};

type PageProps = {
  notes: NoteProp[];
};

const Page = ({ notes }: PageProps) => {
  const [curTitle, setCurTitle] = useState<string>("");
  const [curContent, setCurContent] = useState<string>("");

  return (
    <div className=" w-full bg-neutral-900 text-white">
      {notes.length < 1 ? (
        <div className="flex items-center justify-center h-full text-neutral-300 text-xl">
          Nothing yet!
        </div>
      ) : (
        <div className="flex flex-col p-4">
          {/* Writing notes area */}
          <div className="flex flex-col gap-4">
            {/* Notes title input */}
            <input
              className="border border-neutral-500 p-2 text-lg focus:border-neutral-200 shadow"
              value={curTitle}
              placeholder="Title"
              onChange={(e) => {
                setCurTitle(e.target.value);
              }}
            />
            {/* Notes content input */}
            <textarea
              className="border border-neutral-500 min-h-20 max-h-100 overflow-x-hidden p-2  focus:border-neutral-200 shadow"
              value={curContent}
              placeholder="Type your notes here..."
              onChange={(e) => {
                setCurContent(e.target.value);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
