import { useContext, useEffect } from "react"
import { GifContext } from "../Context/Context"
import Gif from "../components/Gif";
import GifFilter from "../components/GifFilter";

export default function Home() {
    const { gifs, filter, gf, setGifs } = useContext(GifContext);
    const fetchTrending = async () => {
        const { data } = await gf.trending({
            limit: 20,
            type: filter,
            rating: 'g'
        });
        setGifs(data);
    }
    useEffect(() => {
        fetchTrending();
    }, [filter]);
    return (
        <div className="p-4">
            <div className="flex justify-center">
                <img src="/banner.gif" alt="fuck you" className="mt-2 object-contain  w-3/4" />
            </div>

            <GifFilter/>

            <div className="mt-3 columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 ">
              {
                gifs?.map((gif)=>{
                   return <Gif key={gif.title} hover={true} gif={gif}/>
                })
              }
            </div>
        </div>
    )
}