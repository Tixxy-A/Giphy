import {FaInstagram, FaXTwitter, FaYoutube} from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2 text-lg" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-6 pt-3">
        <a href="https://www.youtube.com/roadsidecoder">
          <FaYoutube size={30} />
        </a>
        <a href="https://www.instagram.com/roadsidecoder">
          <FaInstagram size={30} />
        </a>
        <a href="https://www.twitter.com/piyush_eon">
          <FaXTwitter size={30} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;