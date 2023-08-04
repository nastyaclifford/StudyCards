import style from "./header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faHandSparkles } from '@fortawesome/free-solid-svg-icons'; //импортируем нужные нам иконки


export default function Header() { //создаем компонент Header
    return(
        <div className={style.header}>
            < div className= {style.logo}>
                <FontAwesomeIcon icon={faHandSparkles} />
            </div>
            <nav className={style.nav}>
                <a className={style.item} href=" ">About</a> 
                <a className={style.item} href=" ">Start Practising</a> 
                <a className={style.item} href=" ">All Words</a> 
                <a className={style.item} href=" ">Additional</a>
            </nav>
<div className={style.login}>
    <div className={style.button}><FontAwesomeIcon icon={faRightToBracket} /></div>
    <div className={style.button_text}>Log in</div>
</div>
        </div>
    )
}
