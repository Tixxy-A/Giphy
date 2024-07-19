import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GifContext } from "../Context/Context";
import GifFilter from "../components/GifFilter";
import Gif from "../components/Gif";


export default function Search() {
    const { query } = useParams();
    const { gf, filter } = useContext(GifContext);
    const [result, setResult] = useState([]);
    const sideEffect = async () => {
        if (query) {
            const { data } = await gf.search(query, {
                sort: 'relevant',
                limit: 20,
                language: 'en',
                type: filter,
            });
            setResult(data);
        }
    }
    useEffect(() => {
        sideEffect();
    }, [filter, query]);
    return (
        <div className="my-4">
            <h1 className="text-center text-pink-500 text-4xl ml-1 font-simple font-bold ">{query}</h1>
            <GifFilter showTrending={false} />
            {
                result?.length > 0 ?
                <div className="mt-3 columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 ">
                    {
                        result?.map((gif) => {
                            return <Gif key={gif.title} hover={true} gif={gif} />
                        })
                    }
                </div> 
                : <div>
                  <h1>No Results For {query}. Try Something Else</h1>
                </div>
            }
        </div>
    )
}