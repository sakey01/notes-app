import Sidebar from "./components/sidebar";
import Page from "./components/page";
import { useState } from "react";

type Note = {
  id: number;
  title: string;
  content: string;
  date: string;
};

function App() {
  // Notes object array with title, content and date
  const [notes, setNotes] = useState<Note[]>([]);
  const [active, setActive] = useState<number>(0);

  return (
    <div className="flex max-w-screen">
      <Sidebar notes={notes} setNotes={setNotes} active={active} setActive={setActive} />
      <Page notes={notes} />
    </div>
  );
}

export default App;

// create a notes ojbejct with props: title, content, dateMade, id.
// Start with empty array
// CCreate a note onject wiht btn
// title is blank, so is content but id is assigned (how?) and date is set to current
//
