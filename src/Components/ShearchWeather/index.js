import axios from 'axios';
import { useForm } from 'react-hook-form'
import { GET_WEATHER_API } from '../../api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase-config';

const SearchWeather = () => {
    const weatherList = collection(db, 'weather')
    // const navigate=useNavigate()
    const [obj, setObj] = useState(null)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const search = async (data) => {
        console.log(data.name);
        await axios.get(`${GET_WEATHER_API}q=${data.name}`).then(async (response) => {
            setObj(response.data)
            await addDoc(weatherList, response.data)
            console.log(response.data.name);
        })
        reset()
    }
    return <>
        <form onSubmit={handleSubmit(search)} >
            {errors.name && <p>name is required...</p>}
            <input {...register("name", { required: true })} type="text" />
            <button>Search</button>
        </form>
    </>
}
export default SearchWeather