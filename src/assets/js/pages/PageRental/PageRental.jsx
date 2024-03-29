import './PageRental.sass'
import { useLoaderData, useParams, useAsyncValue, Await } from 'react-router-dom'
import { Suspense } from 'react'
import Collapse from '../../components/Collapse/Collapse'
import IconStar from '../../components/IconStar/IconStar'
import Carrousel from '../../components/Carrousel/Carrousel'

export default function PageRental() {
    const {rentals} = useLoaderData()
    const {id} = useParams()

    return <>
        <Suspense>
            <Await resolve={rentals}>
                {(rentals) => 
                    { 
                        const rental = rentals.find(rental => (rental.id === id))
                        if(rental)
                            return <>
                                <Carrousel imgLinks={rental.pictures}/>
                                <p>{rental.id}</p> 

                                <IconStar rating={rental.rating}/>
                                <Collapse title="Description" content={rental.description}/>
                                <Collapse title="Equipments" content={rental.equipments}/>
                            </>
                        else
                            throw new Error("id not defined")
                    
                    }
                    
                }
                
            </Await>
        </Suspense>

    </>
}