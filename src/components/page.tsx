import ReactMarkdown from "react-markdown";

type Note = {
  id: number;
  title: string;
  content: string;
  date: string;
};

type Notes = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  active: number | null;
};

const Page = ({ notes, setNotes, active }: Notes) => {
  const currNote = notes.find((n) => n.id === active);

  return (
    <div className="w-full min-w-1/2 min-h-screen bg-neutral-900 text-white flex items-start justify-center">
      {notes.length < 1 ? (
        <div className="h-full flex items-center justify-center text-xl text-neutral-400">
          Nothing yet!
        </div>
      ) : (
        <div className="w-full max-w-4xl flex flex-col gap-4 overflow-visible sm:p-6">
          {/* Write notes section */}
          <section className="flex flex-col gap-4 mt-12 p-4 sm:bg-neutral-800 sm:p-6">
            {/* Title input */}
            <input
              className="bg-transparent border-b border-neutral-600 focus:border-neutral-400 break-words text-lg sm:text-2xl font-semibold sm:p-4"
              value={currNote?.title ?? "Untitled"}
              placeholder="Untitled Note"
              onChange={(e) => {
                if (!currNote) return;
                const newTitle = e.target.value;
                if (newTitle.length <= 80) {
                  setNotes((prev) =>
                    prev.map((note) =>
                      note.id === currNote.id ? { ...note, title: newTitle } : note
                    )
                  );
                }
              }}
              autoFocus
            />

            {/* Content input */}
            <textarea
              className="bg-transparent h-50 text-sm sm:text-base sm:p-4"
              placeholder="Type your notes here..."
              onChange={(e) => {
                if (!currNote) return;
                setNotes((prev) =>
                  prev.map((note) =>
                    note.id === currNote.id ? { ...note, content: e.target.value } : note
                  )
                );
              }}
            />
          </section>

          {/* Markdown section */}
          <section className="flex flex-col gap-4 mt-2 p-4 sm:bg-neutral-800">
            <h2 className="text-lg sm:text-2xl font-semibold text-neutral-200 sm:p-4">
              Markdown
            </h2>
            <div className="text-sm sm:text-base sm:p-4">
              <ReactMarkdown>{currNote?.content}</ReactMarkdown>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Page;
