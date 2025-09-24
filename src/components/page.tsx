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
    <div className="w-full bg-neutral-900 text-white min-h-screen flex items-start justify-center">
      {notes.length < 1 ? (
        <div className="flex items-center justify-center h-full text-neutral-400 text-xl">
          Nothing yet!
        </div>
      ) : (
        <div className="flex flex-col w-full max-w-3xl p-6 sm:mr-16 gap-4">
          {/* Writing notes area */}
          <div className="flex flex-col gap-4 bg-neutral-800 rounded-2xl shadow-lg p-6">
            {/* Title input */}
            <input
              className="bg-transparent border-b border-neutral-600 focus:border-neutral-400 text-2xl font-semibold outline-none p-2 transition-colors"
              value={currNote?.title ?? "Untitled"}
              placeholder="Untitled Note"
              onChange={(e) => {
                if (!currNote) return;
                setNotes((prev) =>
                  prev.map((note) =>
                    note.id === currNote.id ? { ...note, title: e.target.value } : note
                  )
                );
              }}
              autoFocus={true}
            />

            {/* Content input */}
            <textarea
              className="bg-transparent border border-neutral-700 rounded-lg min-h-[200px] resize-none p-4 focus:border-neutral-400 outline-none transition-colors"
              value={currNote?.content ?? "Untitled"}
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
