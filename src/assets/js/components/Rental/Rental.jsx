import { NavLink } from 'react-router-dom'
import './rental.sass'

export default function Rental({rental}) {
    return <>
        <NavLink to={rental.id}>
            <article className='rental'>
                <h2 className='rental__title'>{rental.title}</h2>
                <img className='rental__img' src={rental.cover} alt='Présentation de chambre'></img>
            </article>  
        </NavLink>  
    </>
}