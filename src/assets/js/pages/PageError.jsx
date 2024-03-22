import {useRouteError} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function PageError() {
    const error = useRouteError()
    return <>
        <Header/>
        <p>{error?.error?.toString() ?? error?.toString()}</p>
        <Footer/>
    </>
}