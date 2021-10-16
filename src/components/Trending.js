import React, {useEffect, useState } from "react";
import getTrendingTerms from "../assets/services/getTrendingTerms";
import Gif from "./Gif";

export default function Trending (){
    const [trends, setTrends] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect (() => { 
        
        if ( ! isLoading )
        { 
            setIsLoading (true)
            getTrendingTerms().then(gifs => setTrends(gifs))
        } 
    }, isLoading)

    return <div>
        {
            trends.map(({ id, title, url }) =>
                <Gif
                    id={id}
                    title={title}
                    url={url}
                />
           )
        }
    </div>
}
