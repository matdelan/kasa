import { Suspense } from 'react'
import {  Await, useLoaderData} from 'react-router-dom'
import RentalList from '../components/RentalList/RentalList'
import Banner from '../components/Banner/Banner'

function Index() {
    const { rentals } = useLoaderData()
    
    return <>
        <Banner text="Chez vous, partout et ailleurs" imgSrc="./background1.jpg"/>
        <Suspense>
            <Await resolve={rentals}>
                <RentalList/>
            </Await>
        </Suspense>
    </>
}

export default Index