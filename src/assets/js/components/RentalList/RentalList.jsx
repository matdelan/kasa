import { useAsyncValue } from "react-router-dom"
import Rental from '../Rental/Rental'
import './rentalList.sass'

export default function RentalList() {
    const rentals = useAsyncValue()
   
    return <ul className="rentalList">
        {
            rentals.map((rental) => (
                <li key={rental.id}><Rental rental={rental}/></li>
        ))}
    </ul>
}