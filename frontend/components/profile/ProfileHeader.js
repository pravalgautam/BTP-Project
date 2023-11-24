"use client";
import "../../lib/hexStyle.css";
import { useContext, useEffect, useState } from "react";
// import { TwitterContext } from "../../context/TwitterContext";
import { BsArrowLeftShort } from "react-icons/bs";
import { Router, useRouter } from "next/navigation";
// import Modal from "react-modal";
// import ProfileImageMinter from "./mintingModal/ProfileImageMinter";
// import { customStyles } from "../../lib/constants";

const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
};
const ProfileHeader = () => {
  const router = useRouter();
  const currentAccount = "0x8cd390f697ffDc176f1B702F3B3083698434fD";
  const isProfileImageNft = true;
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.backButton} onClick={() => Router.push("/")}>
          <BsArrowLeftShort />
        </div>
        <div className={style.details}>
          <div className={style.primary}>Kandarp Mishra</div>
          <div className={style.secondary}>4 tweets</div>
        </div>
      </div>
      <div className={style.coverPhotoContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-xRWA6qHxvryAROGnRa-ts6K2l71Vm3NYg&usqp=CAU"
          alt=""
          className={style.coverPhoto}
        />
      </div>
      <div className={style.profileImageContainer}>
        <div
          className={isProfileImageNft ? "hex" : style.profileImageContainer}
        >
          <img
            src="https://yt3.ggpht.com/35E9pDGSLDtls86-0TmcsgLETrkVXAsw7AUgoaua5-u9fbV5a98FA9ZEeaI2x1Xp3-ic8zju=s108-c-k-c0x00ffffff-no-rj"
            alt=""
            className={
              isProfileImageNft ? style.profileImageNft : style.profileImage
            }
          />
        </div>
      </div>
      <div className={style.details}>
        <div>
          <div className={style.primary}>Kandarp Mishra</div>
        </div>
        <div className={style.secondary}>
          {currentAccount && (
            <>
              @{currentAccount.slice(0, 8)}...{currentAccount.slice(37)}
            </>
          )}
        </div>
      </div>
      <div className={style.nav}>
        <div className={style.activeNav}>Tweets</div>
        <div>Tweets & Replies</div>
        <div>Media</div>
        <div>Likes</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
