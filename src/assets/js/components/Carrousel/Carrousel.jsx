import { useState } from 'react'
import './Carrousel.sass'

export default function Carrousel({imgLinks}) {
    const maxImg = imgLinks.length
    const [currentImg, setCurrentImg] = useState(1)

    const handleClickAfter = () => {
        let nb = currentImg + 1

        if(nb == (maxImg+1))
             nb = 1
        setCurrentImg(nb)
    }
    const handleClickBefore = () => {
        let nb = currentImg - 1

        if(nb == 0)
             nb = maxImg
        setCurrentImg(nb)
    }

    switch(maxImg) {
        case "0":
            throw new Error("Carrousel Component : No image to loading")
        case "1":
            return<>
                <div className='carrousel'>
                    <img className='carrousel__img' src={imgLinks[0]} alt="Rental image"/>
                </div>
            </>
            break
        default:
            return<>
                <div className='carrousel'>
                    <i onClick={handleClickBefore} className='fa-solid fa-chevron-left carrousel__inImg carrousel__arrow-left'></i>
                    <p className='carrousel__inImg carrousel__count'>{currentImg}/{maxImg}</p>
                    <img className='carrousel__img' src={imgLinks[currentImg -1]} alt="Rental image"/>
                    <i onClick={handleClickAfter} className='fa-solid fa-chevron-right carrousel__inImg carrousel__arrow-right'></i>
                </div>
            </>
            break
    }

    return <>

    </>
}