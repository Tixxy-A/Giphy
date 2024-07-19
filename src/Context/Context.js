import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useState } from "react";

export const GifContext=createContext();

export const GifProvider=({children})=>{
    const [gifs,setGifs]=useState([]);
    const [filter,setFilter]=useState("gifs");
    const [favorite,setFavorites]=useState([]);
    const gf=new GiphyFetch(process.env.REACT_APP_API_KEY);
    return(
        <GifContext.Provider value={{gf,gifs,setGifs,filter,setFilter,favorite,setFavorites}}>
            {children}
        </GifContext.Provider>
    );
}