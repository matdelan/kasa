import "./banner.sass"

function Banner({text,imgSrc}) {
    return <>
        <div className='banner'>
        <p className='banner__text'>{text}</p>
            <img className='banner__img' src={imgSrc} alt='image de fond montagne'></img>
            
        </div>
    </>
}

export default Banner