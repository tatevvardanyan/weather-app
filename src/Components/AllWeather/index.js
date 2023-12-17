import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase-config"
import style from "./style.module.css"

const AllWeather = () => {
    const weatherList = collection(db, 'weather')
    const [obj, setObj] = useState([])
    const [currentCard, setCurrenCard] = useState(null)

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

    const deleteObj = async (id) => {
        let item = doc(db, "weather", id)
        await deleteDoc(item)
        setObj(obj.filter(elm => elm.id !== id))

    }

    function dragStartHandler(e, card) {
        setCurrenCard(card)
    }

    function dragEndHandler(e) {
        e.target.style.background = 'transparent'

    }
    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background = 'gray'
    }

    async function dropHandler(e, card) {
        e.preventDefault()
        const id = card.id
        const id1 = obj.find(elm => elm.id == card.id)
        const id2 = obj.find(elm => elm.id == currentCard.id)
        const curentid = id2.id
        let docRef = doc(db, 'weather', id)
        await updateDoc(docRef, id2)
        let docReff = doc(db, 'weather', curentid)
        await updateDoc(docReff, id1)
        getWeather()
        e.target.style.background = 'transparent'
    }

    return <div className={style.box}>
        {obj.map((elm) => {
            return <div key={elm.id}
                className={style.dnd}
                draggable={true}
                onDragStart={(e) => dragStartHandler(e, elm)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, elm)}>
                <span className="material-symbols-outlined" style={{ cursor: "grab" }}>
                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                    sort
                </span>
                <h3>{elm.name}, {elm.sys.country}</h3>
                <button onClick={() => deleteObj(elm.id)}>
                    <span className="material-symbols-outlined" style={{ color: 'white' }}>
                        <link rel="stylesheet"
                            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                        delete
                    </span>
                </button>
            </div>
        })}
    </div >
}
export default AllWeather