import {GoAlert} from "react-icons/go"
import Search from "./components/Search"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl content-center">
        <GoAlert className="inline-block text-blue-800 align-top"/>Appointment Scheduler
      </h1>
      <Search/>
    </div>
  );
}

export default App;
