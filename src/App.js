import { useState, useEffect, useCallback } from "react"
import { BiCalendar} from "react-icons/bi"
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"
import AppointmentInfo from "./components/AppointmentInfo"

function App() {
  let [appointmentData, setAppointmentData] = useState([]);

  const fetchAppointmentData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentData(data)
      });
  }, [])

  useEffect(() => {
    fetchAppointmentData()
  }, [fetchAppointmentData]
  );

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl content-center">
        <BiCalendar className="inline-block text-blue-800 align-top pr-3"/>Appointment Scheduler
      </h1>
      <AddAppointment/>
      <Search/>
      <ul>
        {appointmentData
        .map(appt=>(
          <AppointmentInfo key={appt.id} appt={appt}/>
        ))
        }
      </ul>
    </div>
  );
}

export default App;
