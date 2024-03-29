import './Carrousel.sass'

export default function Carrousel({imgLinks}) {

    switch(imgLinks.length) {
        case "0":
            throw new Error("Carrousel Componant : No image to loading")
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
                    <img className='carrousel__img' src={imgLinks[0]} alt="Rental image"/>
                </div>
            </>
            break
    }

    return <>

    </>
}