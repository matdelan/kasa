import "./banner.sass"

function Banner({text,imgSrc}) {
    let classN= null
    if(text == '')
        classN = 'banner__img'
    else
        classN = 'banner__img banner__img-dark'
    
    return <>
        <div className='banner'>
        <p className='banner__text'>{text}</p>
            <img className={classN} src={imgSrc} alt='image de fond montagne'></img> 
        </div>
    </>
}

export default Banner