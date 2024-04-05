
import logoKasa from '/logo_black.png'
import "./footer.sass"
import { NavLink } from 'react-router-dom'


export default function Footer() {

    return <>
        <footer className="footer">
            <NavLink to="/kasa-P10-ReactProject/"> 
                <img className="footer__logo" src={logoKasa} alt="logo_kasa"/>
            </NavLink>
            <p className='footer__content'>© 2020 Kasa. All rights reserved</p>
        </footer>
    </>
}
