import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import getTrendingTerms from "../assets/services/getTrendingTerms";
import Trending from "../components/Trending";

export default function Home({isBlack, setIsBlack}) {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleChangeColor = () => {
        setIsBlack ( ! isBlack )
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/gif/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }


    return (
        <div className = { isBlack? "App-content-black" : ""}> 
            
            <button onClick={handleChangeColor}>Modo Oscuro</button>
            <h3 className='App-search'> Search </h3>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} type='text' value={keyword} />

            </form>
            <h3 className='App-title'> Gifs en Tendencia </h3>

            <section className="Trending-gifs">
                <Trending />
            </section>

            <div>
                <h4 className='App-file'> Sube tu gif </h4>
                <input type='file' name='My image' id="image" placeholder='Upload the gif' accept='image/gif' />
            </div>

        </div>
    )

}
