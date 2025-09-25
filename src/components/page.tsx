import { useRef } from "react";
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
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  // Moves to content section on enter
  const handleComplete = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputRef.current?.focus();
    }
  };

  return (
    <main className="w-full min-w-1/2 h-screen overflow-y-auto bg-neutral-900 text-white flex items-start justify-center">
      {notes.length < 1 ? (
        <div className="h-full flex items-center justify-center sm:text-xl text-neutral-400">
          Nothing yet!
        </div>
      ) : (
        <article className="w-full h-full max-w-4xl flex flex-col gap-4 sm:p-4">
          {/* Write notes section */}
          <section className="flex flex-col h-1/2 gap-4 p-4 sm:bg-neutral-800 sm:p-2">
            {/* Title input */}
            <header className="bg-transparent border-b border-neutral-600 focus:border-neutral-400 sm:p-4">
              <input
                className="break-words text-lg sm:text-2xl"
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
                onKeyDown={handleComplete}
              />
            </header>

            {/* Content input */}
            <textarea
              className="bg-transparent resize-none min-h-20 h-full text-sm sm:text-base sm:p-2"
              placeholder="Type your notes here..."
              value={currNote?.content ?? ""}
              ref={inputRef}
              onChange={(e) => {
                if (!currNote) return;
                console.log(currNote.id, "note:", notes)
                setNotes((prev) =>
                  prev.map((note) =>
                    note.id === currNote.id ? { ...note, content: e.target.value } : note
                  )
                );
              }}
            />
          </section>

          {/* Markdown section */}
          <section className="flex flex-col gap-4 mt-2 p-2 border-t sm:border-none border-neutral-600 sm:bg-neutral-800">
            <h2 className="text-lg sm:text-2xl font-semibold text-neutral-300 sm:p-2">Markdown</h2>
            <article className="text-sm sm:text-base sm:p-2 markdown">
              <ReactMarkdown>{currNote?.content}</ReactMarkdown>
            </article>
          </section>
        </article>
      )}
    </main>
  );
};

export default Page;
