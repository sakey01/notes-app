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
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex max-w-screen">
      <Sidebar notes={notes} setNotes={setNotes} active={active} setActive={setActive} />
      <Page notes={notes} setNotes={setNotes} active={active} />
    </div>
  );
}

export default App;

// OVERVIEW
// create a notes ojbejct with props: title, content, dateMade, id.
// Start with empty array
// + means we add an empty object to the array and change color to indicate its active.
// selecting means we retive the id, change color and load up the object which should be save to local storage
// deleting means we get the id, parse the array and remove it (need to figure out how to do this with states)
// updating is simple, we just load the data and have input fields and when they click of, it updates the state
