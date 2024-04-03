
import logoKasa from '/logoKasa.png'
import "./header.sass"
import { NavLink } from 'react-router-dom'


function Header() {

    return <>
        <header>
            <div className="header">
                <img className="header__logo" src={logoKasa} alt="logo_kasa"/>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item header__nav-margin" key="link1"><NavLink to="/kasa-P10-ReactProject/"> Accueil</NavLink></li>
                        <li className="header__nav-item" key="link2"><NavLink to="/kasa-P10-ReactProject/apropos">A Propos</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}


export default Header