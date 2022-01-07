import { BiCalendar} from "react-icons/bi"
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"
import AppointmentData from "./data.json"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl content-center">
        <BiCalendar className="inline-block text-blue-800 align-top pr-3"/>Appointment Scheduler
      </h1>
      <AddAppointment/>
      <Search/>
      <ul>
        {AppointmentData
        .map(appt=>(
         

        ))
        
        
        }
      </ul>
    </div>
  );
}

export default App;
