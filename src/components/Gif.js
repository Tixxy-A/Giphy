import { Link } from "react-router-dom";

export default function Gif({ gif, hover }) {
  return (
    <Link
      to={`/${gif.type}/${gif.slug}`}
      className="relative w-full object-cover rounded group"
    >
      <img
        src={gif.images.fixed_width.webp}
        alt="fuck"
        className="w-full transition-all duration-300"
      />
      {hover && (
        <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex text-sm  items-end gap-3 p-2">
          <img
            src={gif?.user?.avatar_url}
            alt="fuck"
            className=" transition-all duration-300 h-8 rounded-full"
          />
          <span>{gif?.user?.display_name}</span>
        </div>
      )}
      
    </Link>
  );
}
