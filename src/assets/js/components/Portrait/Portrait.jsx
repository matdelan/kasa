import './Portrait.sass'

export default function Portrait({host}) {
        const name = host.name.split(" ")
        const firstName = name[0]
        const lastName = name[1]
        
        return <div className='portrait'>
            <div className='portrait__name'>
                <p className='portrait__name-first'>{firstName}</p>
                <p className='portrait__name-last'>{lastName}</p>
            </div>
            <img src={host.picture} className='portrait__img' alt={host.name}/>
        </div>
}