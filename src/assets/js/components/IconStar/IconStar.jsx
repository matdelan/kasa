import './IconStar.sass'

export default function IconStar({rating}) {
    const maxStar = 5
    const emptyStar = maxStar - rating

    const stars = []
    let i = 0
    for(i=0; i < maxStar;i++) {
        if(i < (rating))
            stars.push(<i key={i} className="fa-solid fa-star star__color star__child"></i>)
        else
            stars.push(<i key={i} className="fa-solid fa-star star__grey star__child"></i>)
    }

    return <div className='star'>
            {stars} 
    </div>
}