import {useState} from 'react'
import "./collapse.sass"

export default function Collapse({title, content}) {
    const [isDeploy, setDeploy] = useState(false)

    const handleClick = () => {
        setDeploy(!isDeploy)
    }

    const classCollapse = isDeploy ? '' : 'collapse__hidden'

    return <>
        <article className="collapse" key={title}>
            <div className="collapse__header">
                <h2 className="collapse__header-title" >{title}</h2>
                <i onClick={handleClick} class="fa-solid fa-chevron-up"></i>
            </div>
            <div className='collapse__content'>
                <p className={classCollapse}>{content}</p>
            </div>
        </article>
    </>
}