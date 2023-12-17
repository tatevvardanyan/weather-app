import { Link } from "react-router-dom"
import AllWeather from "../AllWeather"
import SearchWeather from "../ShearchWeather"
import style from './style.module.css'

const Settings = () => {
    return <div className={style.box}>
        <Link to='/' style={{ color: "whitesmoke", fontSize: '25px' }}>
            <span className="material-symbols-outlined">
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                arrow_back
            </span>
        </Link>
        <h2>Settings</h2>
        <SearchWeather />
        <AllWeather />
    </div>
}
export default Settings