import { Suspense } from 'react'
import {  Await, useAsyncValue, useLoaderData} from 'react-router-dom'
import RentalList from '../components/RentalList/RentalList'
import Banner from '../components/Banner/Banner'


function Index() {
    const { data } = useLoaderData()
    
    return <>
        <Banner text="Chez vous, partout et ailleurs" imgSrc="/public/background1.jpg"/>
        <Suspense>
            <Await resolve={data}>
                <RentalList/>
            </Await>
        </Suspense>
    </>
}

export default Index