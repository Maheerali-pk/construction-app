import cx from "classnames";
import CustomIcon from "./CustomIcon";
export interface SidebarItemProps {
   text: string;
   isSelected: boolean;
   icon: JSX.Element;
   badgeValue?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ text, isSelected, icon, badgeValue }) => {
   return (
      <div className="flex h-16 items-center pr-7 cursor-pointer">
         <div className={cx("h-full bg-sky-400 w-2.125 mr-10 rounded-r-md", { invisible: !isSelected })}></div>
         <div className={cx("icon mr-6", { "text-sky-400": isSelected, "text-graymain": !isSelected })}>{icon}</div>
         <div
            className={cx("flex-grow text-lg", {
               "font-medium": isSelected,
               "text-sky-400": isSelected,
               "text-graymain": !isSelected,
            })}
         >
            {text}
         </div>
         {badgeValue && (
            <div className="bg-sky-400 text-white text-xs w-8 h-6 flex items-center justify-center rounded-md">
               {badgeValue}
            </div>
         )}
      </div>
   );
};

export default SidebarItem;
