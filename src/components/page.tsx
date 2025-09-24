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
    <div className="min-w-1/2 w-full bg-neutral-900 text-white min-h-screen flex items-start justify-center">
      {notes.length < 1 ? (
        <div className="flex items-center justify-center h-full text-neutral-400 text-xl">
          Nothing yet!
        </div>
      ) : (
        <div className="flex flex-col w-full max-w-3xl p-2 sm:p-6 gap-4">
          {/* Writing notes area */}
          <div className="flex flex-col gap-4 sm:bg-neutral-800 mt-2 sm:p-6">
            {/* Title input */}
            <input
              className="bg-transparent border-b border-neutral-600 break-words focus:border-neutral-400 text-lg sm:text-2xl font-semibold outline-none p-1 sm:p-4 transition-colors"
              value={currNote?.title ?? "Untitled"}
              placeholder="Untitled Note"
              onChange={(e) => {
                if (!currNote) return;

                // Update tilte value + 80 char limit
                const newTitle = e.target.value;
                if (newTitle.length <= 80) {
                  setNotes((prev) =>
                    prev.map((note) =>
                      note.id === currNote.id ? { ...note, title: newTitle } : note
                    )
                  );
                }
              }}
              autoFocus={true}
            />

            {/* Content input */}
            <textarea
              className="bg-transparent min-h-[200px] max-h-screen p-2 sm:p-4 outline-none"
              value={currNote?.content ?? ""}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
