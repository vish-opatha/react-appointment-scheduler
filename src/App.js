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
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-blue-800 align-top pr-3"/>Appointment Scheduler
      </h1>
      <AddAppointment/>
      <Search/>

      <ul className="divide-y divide-gray-200" >
        {appointmentData
        .map(appointment => (
          <AppointmentInfo key={appointment.id} 
            appt={appointment}
            onDeleteAppointement={
              appointmentId=>
              setAppointmentData(appointmentData.filter(appointment => appointment.id!==appointmentId))}/>
        ))
        }
      </ul>
    </div>
  );
}

export default App;
