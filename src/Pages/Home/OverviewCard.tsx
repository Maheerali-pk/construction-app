import { icons } from "../../utils/icons";

export interface OverviewCardProps {
   value: number;
   showViewAll?: boolean;
   title: string;
   icon: JSX.Element;
   description: string;
   color: string;
   image: string;
   shadowColor: string;
}

const OverviewCard: React.FC<OverviewCardProps> = (props) => {
   return (
      <div
         style={{
            backgroundColor: props.color,
            backgroundImage: `url(${props.image})`,
            boxShadow: `0px 25px 60px ${props.shadowColor}`,
         }}
         className="flex flex-col text-white font-serif justify-between p-5 pb-7 rounded-xl bg-cover"
      >
         <div className="flex justify-between w-full mb-14">
            <div className="flex gap-3 bg-gray-75 rounded-md p-3 items-center">
               {props.icon}
               <div className="text-sm font-medium">{props.title}</div>
            </div>
            {props.showViewAll && (
               <div className="bg-gray-75 cursor-pointer rounded-md py-2.5 px-4 text-sm font-medium flex items-center">
                  View All
               </div>
            )}
         </div>
         <div>
            <div className="font-bold text-64 mb-3">{props.value}</div>
            <div className="text-sm font-medium">{props.description}</div>
         </div>
      </div>
   );
};

export default OverviewCard;
