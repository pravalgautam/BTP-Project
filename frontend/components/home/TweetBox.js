"use client";
import React, { useState } from "react";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { RiFileGifLine, RiBarChartHorizontalFill } from "react-icons/ri";
import { IoMdCalendar } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputFeild: `w-full h-full outline-none bg-transparent text-lg resize-none`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubit: `bg-[#1d9bf0] text-white`,
};

const TweetBox = () => {
  const [tweetMessage, setTweetMessages] = useState("");

  const postTweet = (event) => {
    event.preventDefault();
    if (tweetMessage) console.log(tweetMessage);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src="https://yt3.ggpht.com/35E9pDGSLDtls86-0TmcsgLETrkVXAsw7AUgoaua5-u9fbV5a98FA9ZEeaI2x1Xp3-ic8zju=s108-c-k-c0x00ffffff-no-rj"
          alt="profile image"
          className={style.profileImage}
        />
      </div>

      <div className={style.tweetBoxRight}>
        <form>
          <textarea
            className={style.inputFeild}
            value={tweetMessage}
            placeholder="what's happening?"
            onChange={(e) => setTweetMessages(e.target.value)}
          ></textarea>

          <div className={style.formLowerContainer}>
            <div className={style.iconsContainer}>
              <BsCardImage className={style.icon} />
              <RiFileGifLine className={style.icon} />
              <RiBarChartHorizontalFill className={style.icon} />
              <BsEmojiSmile className={style.icon} />
              <IoMdCalendar className={style.icon} />
              <MdOutlineLocationOn className={style.icon} />
            </div>
            <button
              type="submit"
              className={`${style.submitGeneral} ${
                tweetMessage ? style.activeSubit : style.inactiveSubmit
              }`}
              onClick={postTweet}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
