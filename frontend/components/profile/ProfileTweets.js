"use client";
import { useContext, useEffect, useState } from "react";
import Post from "../Post";

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const ProfileTweets = () => {
  const currentUser = "";
  const [tweets, setTweets] = useState([
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
  ]);
  const [author, setAuthor] = useState({walletAddress : "KANDARP"});

  useEffect(() => {
    if (!currentUser) return;

    setTweets(currentUser.tweets);
    setAuthor({
      name: currentUser.name,
      profileImage: currentUser.profileImage,
      walletAddress: currentUser.walletAddress,
      isProfileImageNft: currentUser.isProfileImageNft,
    });
  }, [currentUser]);
  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            author.name === "Unnamed"
              ? `${author.walletAddress.slice(
                  0,
                  4
                )}...${author.walletAddress.slice(41)}`
              : author.name
          }
          userName={`${author.walletAddress.slice(
            0,
            4
          )}...${author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={author.profileImage}
          timestamp={tweet.timestamp}
          isProfileImageNft={author.isProfileImageNft}
        />
      ))}
    </div>
  );
};

export default ProfileTweets;
