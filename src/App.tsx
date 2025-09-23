import Sidebar from "./components/sidebar";
import Page from "./components/page";
import { useEffect, useState } from "react";

type Note = {
  title: string;
  content: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes((prevNotes) => [...prevNotes, { title: "klfjael", content: "klfjae" }]);
  }, []);

  return (
    <div className="flex max-w-screen">
      <Sidebar notes={notes} setNotes={setNotes} />
      <Page notes={notes} />
    </div>
  );
}

export default App;
