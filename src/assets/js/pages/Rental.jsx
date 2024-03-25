import {  Await, useLoaderData} from 'react-router-dom'
//import './rental.sass'

export default function About() {
    const { data } = useLoaderData()
    
    return <>
        <Suspense>
            <Await resolve={data}>
                <RentalList/>
            </Await>
        </Suspense>
    </>
}