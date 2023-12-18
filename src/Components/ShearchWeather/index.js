import axios from 'axios';
import { useForm } from 'react-hook-form'
import { GET_WEATHER_API } from '../../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config';
import style from "./style.module.css"

const SearchWeather = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [find, setFind] = useState([])
    const weatherList = collection(db, 'weather')
    const navigate = useNavigate()

    const startfind = async () => {
        let abc = await getDocs(weatherList)
        setFind(abc.docs.map(elm => ({
            ...elm.data(),
            id: elm.id
        })))
    }

    useEffect(() => {
        startfind()
    }, [])

    const search = async (data) => {
        const arr = find.filter((elm) => elm.name == data.name)
        if (arr.length === 0) {
            await axios.get(`${GET_WEATHER_API}q=${data.name}`).then(async (response) => {
                await addDoc(weatherList, response.data)
            }).catch((err) => {
                navigate("/settings")
            })
            navigate("/")
        } else {
            navigate("/")
        }
        reset()
    }
    return <>
        <form onSubmit={handleSubmit(search)} className={style.inp}>
            {errors.name && <p style={{ color: "whitesmoke" }}>name is required...</p>}
            <div>
                <input {...register("name", { required: true })} type="text" placeholder='Enter Location' />
                <button>
                    <span className="material-symbols-outlined" style={{ fontSize: '25px', color: 'whitesmoke' }}>
                        <link rel="stylesheet"
                            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                        search
                    </span>
                </button>
            </div>
        </form>
    </>
}
export default SearchWeather