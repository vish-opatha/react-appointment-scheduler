import { useState, useEffect, useCallback } from "react"
import { BiCalendar} from "react-icons/bi"
import Search from "./components/Search"
import AddAppointment from "./components/AddAppointment"
import AppointmentInfo from "./components/AppointmentInfo"

function App() {
  let [appointmentData, setAppointmentData] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("desc");

  const filteredAppt = appointmentData.filter(
    item=>{
      return(
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase()) 
      )
    }
  ).sort((a,b) => {
    let order = (orderBy === "asc") ? 1 : -1
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
      ? -1*order : 1*order
    )
  })

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
      <Search query={query} 
        onQueryChange={myQuery => setQuery(myQuery)}/>

      <ul className="divide-y divide-gray-200" >
        {filteredAppt
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
