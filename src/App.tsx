import Sidebar from "./components/sidebar";
import Page from "./components/page";

function App() {
  return (
    <div className="flex max-w-screen">
      <Sidebar />
      <Page />
    </div>
  );
}

export default App;
