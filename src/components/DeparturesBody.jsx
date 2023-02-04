import { useState, useEffect } from "react"
import TableRow from "./TableRow"
const DeparturesBody = ()=> {
  const [departureFlights, setDepFlights] = useState(null)
  const getDepartureFlights = () => {
    fetch('http://localhost:8000/departures')
      .then(response => response.json())
      .then(departureFlights => setDepFlights(Object.values(departureFlights.data)))
      .catch(err => console.log(err))
  }
  useEffect(() => getDepartureFlights(), [])
  console.log(departureFlights)
    return (
      <tbody>
        {departureFlights?.map((flight, _index) => (
          <TableRow key={_index} flight={flight} />
        ))}
      </tbody>
    )
}
export default DeparturesBody
  