import sidebarLogo from "../assets/images/sidebar-logo.png";
import { icons } from "../utils/icons";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";
interface SidebarProps {}

const sidebarItems: SidebarItemProps[] = [
   { icon: icons.sidebarIcons.dashboard, isSelected: true, text: "Dashboard" },
   { icon: icons.sidebarIcons.project, isSelected: false, text: "Project" },
   { icon: icons.sidebarIcons.calendar, isSelected: false, text: "Calendar" },
   { icon: icons.sidebarIcons.messages, isSelected: false, text: "Messages", badgeValue: 5 },
   { icon: icons.sidebarIcons.notifications, isSelected: false, text: "Notifications", badgeValue: 5 },
   { icon: icons.sidebarIcons.contacts, isSelected: false, text: "Project" },
];

const sidebarItems2: SidebarItemProps[] = [
   { icon: icons.sidebarIcons.promotions, isSelected: false, text: "Promotions" },
];
const Sidebar: React.FC<SidebarProps> = () => {
   return (
      <div className="flex flex-col h-full w-full bg-gray-50 border-r border-sidebarBorder overflow-auto">
         <div className="bg-white p-5">
            <img className="bg-white w-64" src={sidebarLogo}></img>
         </div>
         <div className="flex flex-col pt-20">
            {sidebarItems.map((x) => (
               <SidebarItem {...x}></SidebarItem>
            ))}
         </div>
         <div className="text-sm font-medium my-9 ml-12">Promotions</div>
         <div className="flex flex-col">
            {sidebarItems2.map((x) => (
               <SidebarItem {...x}></SidebarItem>
            ))}
         </div>
      </div>
   );
};

export default Sidebar;
