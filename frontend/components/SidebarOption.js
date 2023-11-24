import { useRouter } from "next/navigation";
const style = {
  wrapper: `w-min flex items-center rounded-[100px] p-4 text-white cursor-pointer hover:bg-[#333C45] transition-all hover:duration-200 hover:ease-in-out`,
  iconContainer: `text-xl mr-4`,
  textGeneral: `font-normal`,
  textActive: `font-medium`,
};

const SidebarOption = ({ text, Icon, isActive, setSelected, redirect }) => {
  const router = useRouter();
  return (
    <div
      className={style.wrapper}
      onClick={() => {
        setSelected(text);
        if (redirect) {
          router.push(redirect);
        }
      }}
    >
      <div className={style.iconContainer}>
        <Icon />
      </div>
      <div className={`${isActive ? style.textActive : style.textGeneral}`}>
        {text}
      </div>
    </div>
  );
};

export default SidebarOption;
