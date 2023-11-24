import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/Widgets";
import Feed from "../../components/home/Feed";

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1440px] w-2/3 flex justify-between`,
};
export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}
