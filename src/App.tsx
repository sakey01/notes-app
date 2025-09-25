import Sidebar from "./components/sidebar";
import Page from "./components/page";
import { useEffect, useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
  date: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  }); // Notes array
  const [active, setActive] = useState<number | null>(null); // Active Note

  // Store notes locally whenever it's changed
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="flex max-w-screen">
      <Sidebar notes={notes} setNotes={setNotes} active={active} setActive={setActive} />
      <Page notes={notes} setNotes={setNotes} active={active} />
    </div>
  );
}

export default App;
