import './RentalContent.sass'

export default function RentalContent({title, location}) {

    return <div className='title'>
        <h1 className='title__title'>{title}</h1>
        <span className='title__location'>{location}</span>
    </div>
}