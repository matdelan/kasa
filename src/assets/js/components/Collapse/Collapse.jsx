import {useState} from 'react'
import "./collapse.sass"

export default function Collapse({title, content}) {
    const [isDeploy, setDeploy] = useState(false)

    const handleClick = () => {
        setDeploy(!isDeploy)
    }

    const classCollapse = isDeploy ? 'collapse__content' : 'collapse__content collapse__hidden'
    const classIcon = isDeploy ? 'fa-solid fa-chevron-up collapse__header-chevron' : 'fa-solid fa-chevron-up'
    //const classIcon = 'fa-solid fa-chevron-up collapse__header-chevron'
    return <>
        <article className="collapse" key={title}>
            <div className="collapse__header">
                <h2 className="collapse__header-title" >{title}</h2>
                <i onClick={handleClick} class={classIcon}></i>
            </div>
            <div className={classCollapse}>
                <div >{content}</div>
            </div>
        </article>
    </>
}