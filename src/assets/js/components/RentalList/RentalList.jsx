import { useAsyncValue } from "react-router-dom"
import './rentalList.sass'

export default function RentalList() {
    const data = useAsyncValue()
   
    return <div className="rentalList">

        {
            data.map((rental) => (
                <article className='rentalList__article' key={rental.id}>
                    <h2 className='rentalList__title'>{rental.title}</h2>
                    <img className='rentalList__img' src={rental.cover} alt='Présentation de chambre'></img>
                </article>
        ))}
    </div>
    
}