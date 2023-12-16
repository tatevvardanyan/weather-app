import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase-config"

const AllWeather = () => {
    const weatherList = collection(db, 'weather')
    const [obj, setObj] = useState()
    const getWeather = async () => {
        let data = await getDocs(weatherList)
        data.forEach((elm) => {

        })
    }
    useEffect(() => {
        getWeather()
    }, [])
    return <div>
        <h1>Bojure</h1>
    </div>
}
export default AllWeather