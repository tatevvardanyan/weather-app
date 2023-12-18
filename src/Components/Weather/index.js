import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase-config"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from './style.module.css'

const Index = () => {
    const [obj, setObj] = useState([])
    const weatherList = collection(db, 'weather')

    const getWeather = async () => {
        let data = await getDocs(weatherList)
        setObj(data.docs.map(elm => ({
            ...elm.data(),
            id: elm.id
        })))
    }

    useEffect(() => {
        getWeather()
    }, [])

    return <div className={style.first}>
        <Link to='/settings'>
            <span className="material-symbols-outlined" style={{ color: "whitesmoke" }}>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                settings
            </span>
        </Link>
        {obj.length == 0 ? <span style={{ color: "whitesmoke" }}>
            <span className="material-symbols-outlined" style={{ marginTop: "100px", fontSize: "65px" }}>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                sync
            </span>
        </span> : <div className={style.first_1}>
            {
                obj.map((elm) => {
                    return <div key={elm.id} className={style.first_2}>
                        <h3>{elm.name}, {elm.sys.country}</h3>
                        <div className={style.box}>
                            <img src={`http://openweathermap.org/img/wn/${elm.weather[0].icon}@2x.png`} alt="weather-app" />
                            <h1>{Math.round(elm.main.temp)}°C</h1>
                        </div>
                        <div>
                            <p>Feels like ` {Math.round(elm.main.feels_like)}°C.<br />{elm.weather[0].main} .<br />{elm.weather[0].description}</p>
                            <p>Wind - {elm.wind.speed} m/s</p>
                            <p>Humidity - {elm.main.humidity}%</p>
                            <p>Pressure - {elm.main.pressure}</p>
                            <p>Visibility - {elm.visibility / 1000} km</p>
                        </div>
                    </div>
                })
            }
        </div>}
    </div>
}
export default Index