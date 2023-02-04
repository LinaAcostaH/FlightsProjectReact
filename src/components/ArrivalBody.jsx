import { useState, useEffect } from "react"
import TableRow from "./TableRow"
const ArrivalBody = ()=> {
  const [arrivalFlights, setFlights] = useState(null)
  const getArrivalFlights = () => {
    fetch('http://localhost:8000/arrivals')
      .then(response => response.json())
      .then(arrivalFlights => setFlights(Object.values(arrivalFlights.data)))
      .catch(err => console.log(err))
  }
  useEffect(() => getArrivalFlights(), [])
  console.log(arrivalFlights)
    return (
      <tbody>
        {arrivalFlights?.map((flight, _index) => (
          <TableRow key={_index} flight={flight} />
        ))}
      </tbody>
    )
}
export default ArrivalBody
  