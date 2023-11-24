import React from "react";
import { BsStars } from "react-icons/bs";
import TweetBox from "./TweetBox";
import Post from "../Post";

const style = {
  wrapper: `flex-[2] border-l border-r border-[#38444d]`,
  header: `sticky top-0  z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    displayName: "Kandarp",
    userName: "Oxxdkfxkfktxksl",
    avatar:
      "https://yt3.ggpht.com/35E9pDGSLDtls86-0TmcsgLETrkVXAsw7AUgoaua5-u9fbV5a98FA9ZEeaI2x1Xp3-ic8zju=s108-c-k-c0x00ffffff-no-rj",
    text: "gm",
    isProfileImageNft: true,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "Kandarp",
    userName: "Oxxdkfxkfktxksl",
    avatar:
      "https://yt3.ggpht.com/35E9pDGSLDtls86-0TmcsgLETrkVXAsw7AUgoaua5-u9fbV5a98FA9ZEeaI2x1Xp3-ic8zju=s108-c-k-c0x00ffffff-no-rj",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "Kandarp",
    userName: "Oxxdkfxkfktxksl",
    avatar:
      "https://yt3.ggpht.com/35E9pDGSLDtls86-0TmcsgLETrkVXAsw7AUgoaua5-u9fbV5a98FA9ZEeaI2x1Xp3-ic8zju=s108-c-k-c0x00ffffff-no-rj",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
  {
    displayName: "Kandarp",
    userName: "Oxxdkfxkfktxksl",
    avatar:
      "https://yt3.ggpht.com/35E9pDGSLDtls86-0TmcsgLETrkVXAsw7AUgoaua5-u9fbV5a98FA9ZEeaI2x1Xp3-ic8zju=s108-c-k-c0x00ffffff-no-rj",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000Z",
  },
];
const Feed = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  );
};

export default Feed;
