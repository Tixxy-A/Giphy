import { useContext, useState, useEffect } from "react";
//import logo from '../../public/logo';
import { HiEllipsisVertical } from "react-icons/hi2";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { GifContext } from "../Context/Context";
import { Link } from "react-router-dom";
import Search from "./SearchBar";


export default function Header() {
    const { gf } = useContext(GifContext);
    const [categories, setCategories] = useState([]);
    const [showCategory, setShowCategory] = useState(false);
    const fetchCategory = async () => {
        const { data } = await gf.categories();
        setCategories(data);
    }
    useEffect(() => {
        fetchCategory();
    }, []);
    
    return (
        <nav className="bg-gradient">
            <div className="relative flex justify-between items-center mb-2">
                <Link to='/' className="w-1/4 flex gap-3">
                    <img src='/logo.svg' className="w-10" alt="giphy" />
                    <h1 className="text-4xl font-bold">GIPHY</h1>
                </Link>
                <div className="flex justify-between w-full  items-center font-bold gap-3">
                    {
                        categories?.slice(0,5).map((category) => {
                            return (
                                <Link key={category.name} to={`/${category.name_encoded}`} className="px-4 pb-1 pt-2 text-xl hover:bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 border-b-4 hidden lg:block">
                                    {category.name}
                                </Link>
                            );
                        })
                    }

                    <button onClick={() => setShowCategory(!showCategory)}><HiEllipsisVertical size={45} className={` ${showCategory ? "bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 " : ""} py-1 hover:bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 border-b-4 hidden lg:block`} />
                    </button>

                    <Link className="py-1 px-2 border-b-4 text-xl hover:bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 " to='/favorite'>Favorites Gifs</Link>

                    <button>
                        <HiBars3BottomLeft className="py-1 hover:bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 border-b-4 block lg:hidden" size={45} />
                    </button>
                </div>

                {
                    showCategory &&
                    <div className="absolute z-20 left-0 w-full top-12 bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600
                px-8 py-6  ">
                        <span className="text-3xl font-bold">Category</span>
                        <hr className="mt-3 opacity-50"/>
                        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center gap-3 z-20">
                             {
                                categories.map((category)=>{
                                     return (
                                        <Link key={category.name} to={`/${category.name_encoded}`} className="px-3 py-1 text-xl ">
                                             {category.name}
                                        </Link>
                                     )
                                     
                                })
                             }
                        </div>
                    </div>
                }
            </div>
            <Search />
        </nav>
    );
}