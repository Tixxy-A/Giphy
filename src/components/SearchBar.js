import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";



export default function Search() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const SearchHandle = async () => {
        navigate(`/search/${query}`);
    }
    return (
        <div className="flex mt-2 gap-3 w-full relative">
            <input type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder="Search any Gifs And Stickers...."
                className="w-full font-bold rounded-full p-3 text-black text-2xl focus:outline-none "
            />
          
            <button className="px-5 font-bold bg-gradient-to-r rounded from-pink-500 to-pink-700" onClick={SearchHandle}><HiMagnifyingGlass size={30}/>
            </button>
        </div>
    );
}