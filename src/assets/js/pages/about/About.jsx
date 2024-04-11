import Banner from '../../components/Banner/Banner'
import { Suspense } from 'react'
import Collapse from '../../components/Collapse/Collapse'
import {  Await, useLoaderData} from 'react-router-dom'
import './about.sass'

export default function About() {
    const { aboutData } = useLoaderData()

    return <>
        <Banner text="" imgSrc="./background2.jpg"/>
        <Suspense>
            <Await resolve={aboutData}>
                {(aboutData) => 
                    <ul className='about__content'>
                        {aboutData.map((data) => (
                            <li key={data.title}>
                                <Collapse title={data.title} content={data.content}/>
                            </li>
                        ))}
                    </ul>
                }
            </Await>
        </Suspense>
    </>
}

