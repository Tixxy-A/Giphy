import { useContext } from "react";
import { GifContext } from "../Context/Context";
import { HiArrowTrendingUp } from "react-icons/hi2";


export default function Filter({ alignLeft = false, showTrending = true }) {
    const {filter, setFilter } = useContext(GifContext);
    
    const filters = [
        {
            title: 'Gifs',
            value: 'gifs',
        },
        {
            title: 'Stickers',
            value: 'stickers',
        },
        {
            title: 'Text',
            value: 'text',
        },
    ]
    return (
        <div className={`flex mt-3 gap-3 ${showTrending?"justify-between flex-col sm:flex-row sm:items-center":"justify-start"} `}>
            {
                showTrending &&
                <div className="flex gap-2 items-center">
                    <HiArrowTrendingUp size={35} className="text-teal-500" />
                    <span className="text-xl text-teal-300">Trending</span>
                </div>
            }
            <div className="flex min-w-80 bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl" >
                {filters.map((fil) => {
                    return (
                        <button className={`w-1/3 px-2 py-2 rounded-3xl text-lg font-simple ${filter===fil.value?' bg-gradient-to-l from-pink-500 to-pink-800 ':""}`}  onClick={() => setFilter(fil.value)}>{fil.title}</button>
                    );
                })}
            </div>
        </div>
    );
}