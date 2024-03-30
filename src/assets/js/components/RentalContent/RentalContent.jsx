import './RentalContent.sass'

export default function RentalContent({title, location, tags}) {

    return <div className='title'>
        <h1 className='title__title'>{title}</h1>
        <span className='title__location'>{location}</span>
        <div className='title__tags'>
            {tags.map((tag, index) => (<p key={index} className='title__tag'>{tag}</p>))}
        </div>
    </div>
}