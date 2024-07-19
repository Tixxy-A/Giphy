import {useEffect, useState,useContext} from "react";
import {useParams} from "react-router-dom";
import Gif from "../components/Gif";
import {HiOutlineExternalLink} from "react-icons/hi";
import {HiMiniChevronDown, HiMiniChevronUp, HiMiniHeart} from "react-icons/hi2";
import {FaPaperPlane} from "react-icons/fa6";
import {IoCodeSharp} from "react-icons/io5";
import { GifContext } from './../Context/Context';
import FollowOn from './../components/follow-on';

const contentType = ["gif", "sticker", "text"];

const GifPage = () => {
  const {type, slug} = useParams();
  const [gif, setGif] = useState({});
  const [show,setShow]=useState(false);
  const [relatedGifs, setRelatedGifs] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const { favorite, gf, } = useContext(GifContext);
  const title="";
  //console.log(gif.id);
  useEffect(() => {
    if (!contentType.includes(type)) {
      throw new Error("Invalid Content Type");
    }
    const fetchGif = async () => {
      try{
        const gifId = slug.split("-");
      const {data} = await gf.gif(gifId[gifId.length - 1]);
      const {data: related} = await gf.related(gifId[gifId.length - 1], {
        limit: 10,
      });
      setGif(data);
      setRelatedGifs(related);
      setShow(true);
      title=data.title.split("by")[0];
      }catch(e){
        console.log(e);
      }
    };

    fetchGif();
  }, [gf,slug,type]);

  const shareGif = () => {
    // Assignment
  };

  const EmbedGif = () => {
    // Assignment
  };

  return (
    
    <div className="grid grid-cols-4 my-10 gap-4 font-simple">
    <div className="hidden sm:block">
      {gif?.user && (
        <>
          <div className="flex gap-1">
            <img
              src={gif?.user?.avatar_url}
              alt={gif?.user?.display_name}
              className="h-14"
            />
            <div className="px-2">
              <div className="font-bold text-lg">{gif?.user?.display_name}</div>
              <div className="text-gray-300">@{gif?.user?.username}</div>
            </div>
          </div>
          {gif?.user?.description && (
            <p className="py-4 whitespace-pre-line text-md text-gray-400">
              {readMore
                ? gif?.user?.description
                : gif?.user?.description.slice(0, 100) + "..."}
              <div
                className="flex items-center faded-text cursor-pointer"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? (
                  <>
                    Read less <HiMiniChevronUp size={20} />
                  </>
                ) : (
                  <>
                    Read more <HiMiniChevronDown size={20} />
                  </>
                )}
              </div>
            </p>
          )}
        </>
      )}
      <FollowOn />

      <div className="divider" />

      {gif?.source && (
        <div>
          <span
            className="faded-text" //custom - faded-text
          >
            Source
          </span>
          <div className="flex items-center text-sm font-bold gap-1">
            <HiOutlineExternalLink size={25} />
            <a href={gif.source} target="_blank" className="truncate">
              {gif.source}
            </a>
          </div>
        </div>
      )}
    </div>

    <div className="col-span-4 sm:col-span-3">
      <div className="flex gap-6 mb-3">
        <div className="w-full sm:w-3/4">
          <div className="faded-text truncate rounded-3xl py-1 text-center text-3xl bg-gradient-to-r from-cyan-500 via-pink-600 to-blue-400 mb-2">{gif.title}</div>
          {show?<Gif gif={gif} hover={false} />:<p>Loading</p>}

          {/* -- Mobile UI -- */}
          <div className="flex sm:hidden gap-1">
            <img
              src={gif?.user?.avatar_url}
              alt={gif?.user?.display_name}
              className="h-14"
            />
            <div className="px-2">
              <div className="font-bold">{gif?.user?.display_name}</div>
              <div className="faded-text">@{gif?.user?.username}</div>
            </div>

            <button className="ml-auto" onClick={shareGif}>
              <FaPaperPlane size={25} />
            </button>
          </div>
          {/* -- Mobile UI -- */}
        </div>

        <div className="hidden sm:flex flex-col gap-5 text-lg mt-6">
          <button
            onClick={() => console.log("added")}
            className="flex gap-5 items-center font-bold text-lg"
          >
            <HiMiniHeart
              size={35}
              className={`${
                favorite.includes(gif.id) ? "text-red-500" : ""
              }`}
            />
            Favorite
          </button>
          <button
            onClick={shareGif} // Assignment
            className="flex gap-6 items-center font-bold text-lg"
          >
            <FaPaperPlane size={30} />
            Share
          </button>
          <button
            onClick={EmbedGif} // Assignment
            className="flex gap-5 items-center font-bold text-lg"
          >
            <IoCodeSharp size={35} />
            Embed
          </button>
        </div>
      </div>

      <div>
        <span className="mt-2 font-extrabold text-2xl">Related GIFs</span>
        <div className="columns-2 md:columns-3 gap-2">
          {relatedGifs.slice(1).map((gif) => (
            <Gif gif={gif} key={gif.id} />
          ))}
        </div>
      </div>
    </div>
  </div>
        );

  
}

export default GifPage;
