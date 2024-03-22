
import logoKasa from '/logo_black.png'
import "./footer.sass"


export default function Footer() {

    return <>
        <footer className="footer">
            <img className="footer__logo" src={logoKasa} alt="logo_kasa"/>
            <p className='footer__content'>© 2020 Kasa. All rights reserved</p>
        </footer>
    </>
}
