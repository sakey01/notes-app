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
  // Notes array
  const [notes, setNotes] = useState<Note[]>(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  }); 
  // Active Note
  const [active, setActive] = useState<number | null>(() => {
    const stored = localStorage.getItem("active");
    return stored ? JSON.parse(stored) : null;
  }); 

  // Store notes locally whenever it's changed
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("active", JSON.stringify(active))
  },[active])

  return (
    <div className="flex max-w-screen">
      <Sidebar notes={notes} setNotes={setNotes} active={active} setActive={setActive} />
      <Page notes={notes} setNotes={setNotes} active={active} />
    </div>
  );
}

export default App;
