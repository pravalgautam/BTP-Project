"use client";
import { VscTwitter } from "react-icons/vsc";
import SidebarOption from "./SidebarOption";
import Link from "next/link";
import { useState } from "react";
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from "react-icons/bs";
import { FiBell, FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { FaRegListAlt, FaHashtag, FaBell } from "react-icons/fa";
import { CgMore, CgMoreO } from "react-icons/cg";

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  iconContainer: `text-3xl m-4 `,
  postButton: `bg-[#0057ff]  hover:bg-[#65c3f1] hover:text-black flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex item-center mb-6 cursor-pointer rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `h-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg text-[#a6a6a6]`,
  handle: `text-[#a6a6a6]`,
  moreContainer: `flex items-center mr-2 `,
};

const Sidebar = ({ initialSelectedIcon = "Home" }) => {
  const [selected, setSelected] = useState(initialSelectedIcon);
  return (
    <div className={style.wrapper}>
      <div className={style.iconContainer}>
        <VscTwitter />
      </div>
      <div className={style.navContainer}>
        <SidebarOption
          Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
          text={"Home"}
          isActive={Boolean(selected === "Home")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOption
          Icon={selected === "Explore" ? FaHashtag : BiHash}
          text="Explore"
          isActive={Boolean(selected === "Explore")}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === "Notifications" ? FaBell : FiBell}
          text="Notifications"
          isActive={Boolean(selected === "Notifications")}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === "Messages" ? HiMail : HiOutlineMail}
          text="Messages"
          isActive={Boolean(selected === "Messages")}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === "Bookmarks" ? BsBookmarkFill : BsBookmark}
          text="Bookmarks"
          isActive={Boolean(selected === "Bookmarks")}
          setSelected={setSelected}
        />

        <SidebarOption
          Icon={selected === "Lists" ? RiFileList2Fill : FaRegListAlt}
          text="Lists"
          isActive={Boolean(selected === "Lists")}
          setSelected={setSelected}
        />

        <SidebarOption
          Icon={selected === "Profile" ? BsPersonFill : BsPerson}
          text="Profile"
          isActive={Boolean(selected === "Profile")}
          setSelected={setSelected}
          redirect={"/profile"}
        />

        <SidebarOption Icon={CgMore} text="More" setSelected={setSelected} />
        <div className={style.postButton}>Post</div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}>
          <div className={style.details}>
            <div className={style.name}>Kandarp</div>
            <div className={style.handle}>@0x22dF...</div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
