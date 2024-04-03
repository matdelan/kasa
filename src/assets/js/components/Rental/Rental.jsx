import { NavLink } from 'react-router-dom'
import './rental.sass'

export default function Rental({rental}) {
    //const path = "/kasa-P10-ReactProject/" + rental.id
    const path = rental.id
    return <>
        <NavLink to={path}>
            <article className='rental'>
                <h2 className='rental__title'>{rental.title}</h2>
                <img className='rental__img' src={rental.cover} alt='Présentation de chambre'></img>
            </article>  
        </NavLink>  
    </>
}